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
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HivePost } from "@hiveio/internal";

@customElement("hive-tag")
export class HiveTagElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
      }

      .tag-container {
        background: var(--hive-surface);
        border: 1px solid var(--hive-border);
        border-radius: 8px;
        overflow: hidden;
      }

      .tag-header {
        padding: 1rem;
        background: var(--hive-surface-variant);
        border-bottom: 1px solid var(--hive-border);
      }

      .tag-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .tag-badge {
        background: var(--hive-primary);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 16px;
        font-size: 0.875rem;
        font-weight: 500;
      }

      .posts-list {
        display: grid;
        gap: 0;
      }

      .post-item {
        padding: 1rem;
        border-bottom: 1px solid var(--hive-border);
        transition: background-color 0.2s ease;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
      }

      .post-item:hover {
        background: var(--hive-surface-variant);
      }

      .post-item:last-child {
        border-bottom: none;
      }

      .post-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
      }

      .author-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--hive-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 0.875rem;
      }

      .post-meta {
        flex: 1;
      }

      .author-name {
        font-weight: 600;
        color: var(--hive-on-surface);
        margin: 0;
        font-size: 0.875rem;
      }

      .post-date {
        margin: 0.25rem 0 0 0;
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
        font-size: 0.625rem;
        font-weight: 500;
      }

      .post-title {
        margin: 0 0 0.5rem 0;
        font-size: 1rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        line-height: 1.4;
      }

      .post-preview {
        margin: 0 0 0.75rem 0;
        color: var(--hive-on-surface-variant);
        line-height: 1.5;
        font-size: 0.875rem;
      }

      .post-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .post-stats {
        display: flex;
        gap: 1rem;
        align-items: center;
        font-size: 0.75rem;
        color: var(--hive-on-surface-variant);
      }

      .stat-item {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .post-payout {
        font-weight: 600;
        color: var(--hive-success);
        font-size: 0.875rem;
      }

      .load-more-button {
        padding: 1rem;
        text-align: center;
        background: var(--hive-surface-variant);
        border: none;
        cursor: pointer;
        width: 100%;
        color: var(--hive-primary);
        font-weight: 500;
        transition: background-color 0.2s ease;
      }

      .load-more-button:hover {
        background: var(--hive-border);
      }

      .no-posts {
        padding: 2rem;
        text-align: center;
        color: var(--hive-on-surface-variant);
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

      @media (max-width: 640px) {
        .post-footer {
          flex-direction: column;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .post-stats {
          gap: 0.75rem;
        }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  tag = "";

  @property({ type: Number, reflect: true, attribute: "posts-per-page" })
  postsPerPage = 10;

  @property({ type: String, reflect: true, attribute: "url-template" })
  urlTemplate = "";

  @property({ type: Number, reflect: true, attribute: "preview-length" })
  previewLength = 150;

  private posts: HivePost[] = [];

  @state()
  private loading = false;

  @state()
  private error = "";

  @state()
  private hasMore = true;

  async connectedCallback() {
    super.connectedCallback();
    if (this.tag) {
      await this.loadPosts();
    }
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("tag") && this.tag) {
      this.posts = [];
      await this.loadPosts();
    }
  }

  private async loadPosts(append = false) {
    if (!this.tag) {
      this.error = "Tag is required";
      return;
    }

    this.loading = true;
    if (!append) {
      this.error = "";
      this.posts = [];
    }

    try {
      const newPosts = await hiveApi.getDiscussionsByTag(this.tag, this.postsPerPage);

      if (append) {
        this.posts = [...this.posts, ...newPosts];
      } else {
        this.posts = newPosts;
      }

      this.hasMore = newPosts.length === this.postsPerPage;
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load posts";
    } finally {
      this.loading = false;
    }
  }

  private async loadMorePosts() {
    if (!this.hasMore || this.loading) return;
    await this.loadPosts(true);
  }

  private getInitials(name: string): string {
    return name.substring(0, 2).toUpperCase();
  }

  private getPostUrl(post: HivePost): string {
    if (this.urlTemplate) {
      return this.urlTemplate.replace("{permlink}", post.permlink).replace("{author}", post.author);
    }
    return post.url || `/@${post.author}/${post.permlink}`;
  }

  private handlePostClick(post: HivePost) {
    const url = this.getPostUrl(post);

    // Dispatch custom event for navigation
    this.dispatchEvent(
      new CustomEvent("hive-post-click", {
        detail: {
          post,
          url,
          author: post.author,
          permlink: post.permlink,
        },
        bubbles: true,
      })
    );

    // If urlTemplate is provided, navigate to it
    if (this.urlTemplate && url.startsWith("/")) {
      // Internal navigation
      window.history.pushState({}, "", url);
      window.dispatchEvent(new PopStateEvent("popstate"));
    } else if (url.startsWith("http")) {
      // External navigation
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

  render() {
    if (this.loading && this.posts.length === 0) {
      return html`<div class="loading">Loading posts for #${this.tag}...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    return html`
      <div class="tag-container">
        <div class="tag-header">
          <h2 class="tag-title">
            <span class="tag-badge">#${this.tag}</span>
            <span>${this.posts.length} post${this.posts.length !== 1 ? "s" : ""}</span>
          </h2>
        </div>

        ${this.posts.length === 0
          ? html` <div class="no-posts">No posts found for tag "${this.tag}"</div> `
          : html`
              <div class="posts-list">
                ${this.posts.map(post => {
                  const reputation = calculateReputation(post.author_reputation);
                  const preview = truncateText(post.body.replace(/<[^>]*>/g, ""), this.previewLength);

                  return html`
                    <article class="post-item" @click=${() => this.handlePostClick(post)}>
                      <div class="post-header">
                        <div class="author-avatar">${this.getInitials(post.author)}</div>
                        <div class="post-meta">
                          <h4 class="author-name">@${post.author}</h4>
                          <p class="post-date">
                            <span class="reputation">${reputation}</span>
                            <span>${formatHiveDate(post.created)}</span>
                          </p>
                        </div>
                      </div>

                      ${post.title ? html` <h3 class="post-title">${post.title}</h3> ` : ""}

                      <p class="post-preview">${preview}</p>

                      <div class="post-footer">
                        <div class="post-stats">
                          <div class="stat-item">
                            <span>❤️</span>
                            <span>${post.net_votes}</span>
                          </div>
                          <div class="stat-item">
                            <span>💬</span>
                            <span>${post.children}</span>
                          </div>
                        </div>
                        <div class="post-payout">
                          ${formatHiveCurrency(post.vote_rshares == 0 ? post.total_payout_value : post.pending_payout_value)}
                        </div>
                      </div>
                    </article>
                  `;
                })}
              </div>

              ${this.hasMore
                ? html`
                    <button class="load-more-button" @click=${this.loadMorePosts} ?disabled=${this.loading}>
                      ${this.loading ? "Loading..." : "Load More Posts"}
                    </button>
                  `
                : ""}
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-tag": HiveTagElement;
  }
}
