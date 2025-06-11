import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  hiveApi,
  baseStyles,
  themeStyles,
  formatHiveDate,
  formatHiveCurrency,
  calculateReputation,
  truncateText,
  extractTags,
  parseHiveUrl,
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HivePost } from "@hiveio/internal";

@customElement("hive-post")
export class HivePostElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
        border: 1px solid var(--hive-border);
        border-radius: 8px;
        background: var(--hive-surface);
        overflow: hidden;
      }

      .post-card {
        display: flex;
        flex-direction: column;
      }

      .post-header {
        padding: 1rem;
        border-bottom: 1px solid var(--hive-border);
      }

      .author-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
      }

      .author-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--hive-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 1rem;
      }

      .author-details h4 {
        margin: 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--hive-on-surface);
      }

      .author-meta {
        margin: 0;
        font-size: 0.75rem;
        color: var(--hive-on-surface-variant);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .reputation {
        background: var(--hive-primary);
        color: white;
        padding: 0.125rem 0.375rem;
        border-radius: 12px;
        font-size: 0.75rem;
        font-weight: 500;
      }

      .post-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        line-height: 1.4;
      }

      .post-content {
        padding: 1rem;
        color: var(--hive-on-surface);
        line-height: 1.6;
      }

      .post-body {
        margin: 0;
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

      .loading {
        text-align: center;
        padding: 2rem;
        color: var(--hive-on-surface-variant);
      }

      .error {
        text-align: center;
        padding: 2rem;
        color: var(--hive-error);
        background: color-mix(in srgb, var(--hive-error) 10%, transparent);
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
    `,
  ];

  @property({ type: String, reflect: true })
  permlink = "";

  @property({ type: Boolean, reflect: true })
  preview = false;

  @property({ type: Number, reflect: true })
  maxLength = 300;

  private post: HivePost | null = null;

  @state()
  private loading = false;

  @state()
  private error = "";

  async connectedCallback() {
    super.connectedCallback();
    if (this.permlink) {
      await this.loadPost();
    }
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("permlink") && this.permlink) {
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
      this.post = await hiveApi.getContent(parsed.author, parsed.permlink);
      if (!this.post.author) {
        this.error = "Post not found";
        this.post = null;
      }
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load post";
    } finally {
      this.loading = false;
    }
  }

  private getInitials(name: string): string {
    return name.substring(0, 2).toUpperCase();
  }

  private renderPostBody(body: string): string {
    if (this.preview) {
      return truncateText(body, this.maxLength);
    }
    return body;
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading post...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    if (!this.post) {
      return html`<div class="error">No post data available</div>`;
    }

    const tags = extractTags(this.post.json_metadata || "{}");
    const reputation = calculateReputation(this.post.author_reputation);
    // TODO: unsafeHTML fails here due to MarkDown i think - implement other way to render HTML
    const body = (this.renderPostBody(this.post.body));

    return html`
      <article class="post-card">
        <header class="post-header">
          <div class="author-info">
            <div class="author-avatar">${this.getInitials(this.post.author)}</div>
            <div class="author-details">
              <h4>@${this.post.author}</h4>
              <p class="author-meta">
                <span class="reputation">${reputation}</span>
                <span>${formatHiveDate(this.post.created)}</span>
              </p>
            </div>
          </div>

          ${this.post.title ? html` <h2 class="post-title">${this.post.title}</h2> ` : ""}
        </header>

        <div class="post-content">
          <div class="post-body">${body}</div>
        </div>

        <footer class="post-footer">
          <div class="post-stats">
            <div class="stat-item">
              <span>❤️ ${this.post.net_votes}</span>
            </div>
            <div class="stat-item">
              <span>💬 ${this.post.children}</span>
            </div>
            <a href="https://hive.blog${this.post.url}" target="_blank" rel="noopener" class="post-url"> View on Hive </a>
          </div>

          <div class="payout-info">
            <div class="payout-value">${formatHiveCurrency(this.post.vote_rshares == 0 ? this.post.total_payout_value : this.post.pending_payout_value)}</div>
            <div style="font-size: 0.75rem; color: var(--hive-on-surface-variant);">${this.post.vote_rshares == 0 ? 'Paid out' : 'Pending Payout'}</div>
          </div>
        </footer>

        ${tags.length > 0
          ? html`
              <div class="post-tags" style="padding: 0 1rem 1rem;">
                ${tags.slice(0, 5).map(tag => html` <span class="tag">#${tag}</span> `)}
              </div>
            `
          : ""}
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-post": HivePostElement;
  }
}
