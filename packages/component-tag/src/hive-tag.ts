import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  hiveApi,
  baseStyles,
  themeStyles,
  truncateText,
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import { type HivePost, renderPostContent } from "@hiveio/internal";
import "@hiveio/component-post";

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
        /* background: var(--hive-surface); */
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

      .post-preview {
        margin: 0 0 1rem 0;
        color: var(--hive-on-surface-variant);
        line-height: 1.6;
        font-size: 0.9rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .post-preview img {
        width: auto;
        max-width: 50%;
        height: auto;
        max-height: none;
        margin-bottom: 10px;
      }

      .post-preview a {
        color: var(--hive-primary);
        text-decoration: none;
        transition: color 0.2s ease;
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

      .load-more-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
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

      .post-item > hive-post-header {
        padding-bottom: 0;
      }
      .post-item > hive-post-footer {
        padding-top: 0;
      }

      .preview-img {
        width: 200px;
        height: 150px;
        object-fit: cover;
        border-radius: 4px;
      }

      .post-content {
        padding: 1rem;
        display: flex;
        gap: 1rem;
      }
      .post-excerpt {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: break-spaces;
      }
      .post-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: break-spaces;
      }

      .error {
        text-align: center;
        padding: 2rem;
        color: var(--hive-error);
        background: color-mix(in srgb, var(--hive-error) 10%, transparent);
      }

      @media (max-width: 640px) {
        .post-preview img {
          max-width: 100%;
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
                  const preview = truncateText(renderPostContent(post.body, {
                    breaks: true
                  }).replace(/<[^>]*>/g, "").replace(/\n/g, " "), this.previewLength);

                  console.log(preview);

                  let imageUrl = "";
                  try {
                    imageUrl = JSON.parse(post.json_metadata)?.image?.[0];
                  } catch {}

                  return html`
                    <article class="post-item" @click=${() => this.handlePostClick(post)}>
                      <hive-post-header
                        .post=${post}
                        .theme=${this.theme}
                        .showTitle=${false}>
                      </hive-post-header>

                      <div class="post-content">
                        <img class="preview-img" src="${imageUrl}" alt="Post image" loading="lazy" />
                        <div class="post-excerpt">
                          <h2 class="post-title">${post.title}</h2>
                          <p class="post-preview" .innerHTML=${preview}></p>
                        </div>
                      </div>

                      <hive-post-footer
                        .post=${post}
                        .theme=${this.theme}
                        .showTags=${false}
                        .showLink=${false}>
                      </hive-post-footer>
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
