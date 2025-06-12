import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { baseStyles, themeStyles, formatHiveDate, calculateReputation, hiveApi, parseHiveUrl } from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HivePost, HiveComment } from "@hiveio/internal";

export class HivePostHeaderElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
        padding: 1rem;
      }

      .author-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
      }

      .author-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--hive-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 1rem;
        border: 2px solid var(--hive-border);
        overflow: hidden;
      }

      .author-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .author-details h4 {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        line-height: 1.2;
      }

      .author-meta {
        margin: 0.25rem 0 0 0;
        font-size: 0.8rem;
        color: var(--hive-on-surface-variant);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.2;
      }

      .reputation {
        background: linear-gradient(135deg, var(--hive-primary), color-mix(in srgb, var(--hive-primary) 80%, black));
        color: white;
        padding: 0.15rem 0.45rem;
        border-radius: 14px;
        font-size: 0.7rem;
        font-weight: 600;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .post-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
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
  post: HivePost | HiveComment | null = null;

  @property({ type: Boolean, reflect: true, attribute: "show-title" })
  showTitle = true;

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

  private getInitials(name: string): string {
    return name.substring(0, 2).toUpperCase();
  }

  private getProfileImageUrl(author: string): string {
    return `https://images.hive.blog/u/${author}/avatar/medium`;
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
        <div class="author-avatar">
          <img
            src="${this.getProfileImageUrl(currentPost.author)}"
            alt="${currentPost.author}"
            @error=${(e: Event) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
              if (target.parentElement) target.parentElement.textContent = this.getInitials(currentPost.author);
            }}
          />
        </div>
        <div class="author-details">
          <h4>@${currentPost.author}</h4>
          <p class="author-meta">
            <span class="reputation">${reputation}</span>
            <span>${formatHiveDate(currentPost.created)}</span>
          </p>
        </div>
      </div>

      ${this.showTitle && currentPost.title ? html` <h2 class="post-title">${currentPost.title}</h2> ` : ""}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-post-header": HivePostHeaderElement;
  }
}

// Safe registration to prevent duplicate registration errors
if (!customElements.get("hive-post-header")) {
  customElements.define("hive-post-header", HivePostHeaderElement);
}
