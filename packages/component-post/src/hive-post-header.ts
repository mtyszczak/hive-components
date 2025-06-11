import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  baseStyles,
  themeStyles,
  formatHiveDate,
  calculateReputation,
  hiveApi,
  parseHiveUrl,
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HivePost } from "@hiveio/internal";

@customElement("hive-post-header")
export class HivePostHeaderElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
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

  private getInitials(name: string): string {
    return name.substring(0, 2).toUpperCase();
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading post header...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    const currentPost = this.post || this.internalPost;

    if (!currentPost) {
      return html``;
    }

    const reputation = calculateReputation(currentPost.author_reputation);

    return html`
      <div class="author-info">
        <div class="author-avatar">${this.getInitials(currentPost.author)}</div>
        <div class="author-details">
          <h4>@${currentPost.author}</h4>
          <p class="author-meta">
            <span class="reputation">${reputation}</span>
            <span>${formatHiveDate(currentPost.created)}</span>
          </p>
        </div>
      </div>

      ${currentPost.title ? html` <h2 class="post-title">${currentPost.title}</h2> ` : ""}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-post-header": HivePostHeaderElement;
  }
}
