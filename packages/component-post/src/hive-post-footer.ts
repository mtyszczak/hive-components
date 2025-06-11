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
import type { HivePost, HiveComment } from "@hiveio/internal";

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
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
        justify-content: space-between;
      }

      .post-stats {
        display: flex;
        gap: 1.25rem;
        align-items: center;
      }

      .stat-item {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.875rem;
        color: var(--hive-on-surface-variant);
        font-weight: 500;
        transition: color 0.2s ease;
      }

      .stat-item:hover {
        color: var(--hive-primary);
      }

      .stat-item span:first-child {
        font-size: 1rem;
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
        font-weight: 700;
        color: var(--hive-success);
        font-size: 0.9rem;
        padding: 0.25rem 0.75rem;
        background: color-mix(in srgb, var(--hive-success) 10%, transparent);
        border-radius: 20px;
        border: 1px solid color-mix(in srgb, var(--hive-success) 20%, transparent);
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
  post: HivePost | HiveComment | null = null;

  @property({ type: Boolean, reflect: true, attribute: "show-tags" })
  showTags = true;

  @property({ type: Boolean, reflect: true, attribute: "show-payout" })
  showPayout = true;

  @property({ type: Boolean, reflect: true, attribute: "show-link" })
  showLink = true;

  @state()
  private loading = false;

  @state()
  private error = "";

  @state()
  private internalPost: HivePost | HiveComment | null = null;

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
            <span>❤️</span>
            <span>${currentPost.net_votes}</span>
          </div>
          <div class="stat-item">
            <span>💬</span>
            <span>${currentPost.children}</span>
          </div>
          ${this.showLink ? html`
            <a href="https://hive.blog${currentPost.url}" target="_blank" rel="noopener" class="post-url">
              View on Hive
            </a>
          ` : ''}
        </div>

        ${this.showPayout ? html`
          <div class="payout-info">
            <div class="payout-value">
              ${formatHiveCurrency(currentPost.cashout_time === "1969-12-31T23:59:59" ? currentPost.total_payout_value : currentPost.pending_payout_value)}
            </div>
            <div style="font-size: 0.75rem; margin-right: 5px; color: var(--hive-on-surface-variant);">
              ${currentPost.cashout_time === "1969-12-31T23:59:59" ? 'Paid out' : 'Pending Payout'}
            </div>
          </div>
        ` : ''}
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

// Safe registration to prevent duplicate registration errors
if (!customElements.get("hive-post-footer")) {
  customElements.define("hive-post-footer", HivePostFooterElement);
}
