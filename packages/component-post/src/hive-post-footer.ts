import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  baseStyles,
  themeStyles,
  formatHiveCurrency,
  extractTags,
  hiveApi,
  parseHiveUrl,
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HivePost } from "@hiveio/internal";

@customElement("hive-post-footer")
export class HivePostFooterElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
      }

      .post-footer {
        padding: 1rem;
        border-top: 1px solid var(--hive-border);
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
        justify-content: space-between;
      }

      .post-stats {
        display: flex;
        gap: 1rem;
        align-items: center;
      }

      .stat-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        font-size: 0.875rem;
        color: var(--hive-on-surface-variant);
      }

      .post-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0 1rem 1rem;
      }

      .tag {
        background: var(--hive-surface-variant);
        color: var(--hive-on-surface-variant);
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        font-size: 0.75rem;
        text-decoration: none;
      }

      .tag:hover {
        background: var(--hive-primary);
        color: white;
      }

      .payout-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
      }

      .payout-value {
        font-weight: 600;
        color: var(--hive-success);
      }

      .post-url {
        color: var(--hive-primary);
        text-decoration: none;
        font-size: 0.875rem;
      }

      .post-url:hover {
        text-decoration: underline;
      }

      @media (max-width: 640px) {
        .post-footer {
          flex-direction: column;
          align-items: flex-start;
        }

        .payout-info {
          align-items: flex-start;
        }
      }

      .loading {
        text-align: center;
        padding: 1rem;
        color: var(--hive-on-surface-variant);
      }

      .error {
        text-align: center;
        padding: 1rem;
        color: var(--hive-error);
        background: color-mix(in srgb, var(--hive-error) 10%, transparent);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  permlink = "";

  @property({ type: Object })
  post: HivePost | null = null;

  @property({ type: Boolean, reflect: true, attribute: "show-tags" })
  showTags = true;

  @state()
  private loading = false;

  @state()
  private error = "";

  @state()
  private internalPost: HivePost | null = null;

  async connectedCallback() {
    super.connectedCallback();
    if (this.permlink && !this.post) {
      await this.loadPost();
    }
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("permlink") && this.permlink && !this.post) {
      await this.loadPost();
    }
  }

  private async loadPost() {
    const parsed = parseHiveUrl(this.permlink);
    if (!parsed) {
      this.error = "Invalid permlink format. Use @author/permlink";
      return;
    }

    this.loading = true;
    this.error = "";

    try {
      this.internalPost = await hiveApi.getContent(parsed.author, parsed.permlink);
      if (!this.internalPost.author) {
        this.error = "Post not found";
        this.internalPost = null;
      }
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load post";
    } finally {
      this.loading = false;
    }
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading post footer...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    const currentPost = this.post || this.internalPost;

    if (!currentPost) {
      return html``;
    }

    const tags = extractTags(currentPost.json_metadata || "{}");

    return html`
      <footer class="post-footer">
        <div class="post-stats">
          <div class="stat-item">
            <span>❤️ ${currentPost.net_votes}</span>
          </div>
          <div class="stat-item">
            <span>💬 ${currentPost.children}</span>
          </div>
          <a href="https://hive.blog${currentPost.url}" target="_blank" rel="noopener" class="post-url">
            View on Hive
          </a>
        </div>

        <div class="payout-info">
          <div class="payout-value">
            ${formatHiveCurrency(currentPost.cashout_time === "1969-12-31T23:59:59" ? currentPost.total_payout_value : currentPost.pending_payout_value)}
          </div>
          <div style="font-size: 0.75rem; color: var(--hive-on-surface-variant);">
            ${currentPost.cashout_time === "1969-12-31T23:59:59" ? 'Paid out' : 'Pending Payout'}
          </div>
        </div>
      </footer>

      ${this.showTags && tags.length > 0
        ? html`
            <div class="post-tags">
              ${tags.slice(0, 5).map(tag => html` <span class="tag">#${tag}</span> `)}
            </div>
          `
        : ""}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-post-footer": HivePostFooterElement;
  }
}
