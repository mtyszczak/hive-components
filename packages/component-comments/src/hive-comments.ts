import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { hiveApi, baseStyles, themeStyles, parseHiveUrl } from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HiveComment } from "@hiveio/internal";
import "@hiveio/component-post";

export class HiveCommentsElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
      }

      .comments-container {
        /* background: var(--hive-surface); */
        border: 1px solid var(--hive-border);
        border-radius: 8px;
        overflow: hidden;
      }

      .comments-header {
        padding: 1rem;
        border-bottom: 1px solid var(--hive-border);
        background: var(--hive-surface-variant);
      }

      .comments-title {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--hive-on-surface);
      }

      .comments-list {
        overflow-y: auto;
      }

      .comment {
        border-bottom: 1px solid var(--hive-border);
        /* background: var(--hive-surface); */
      }

      .comment > hive-post-header {
        padding-bottom: 0;
      }

      .comment > hive-post-content {
        padding-top: 0;
        padding-bottom: 0;
      }

      .comment > hive-post-footer {
        padding-top: 0;
      }

      .comment:last-child {
        border-bottom: none;
      }

      .nested-comment {
        margin-left: 2rem;
        border-left: 2px solid var(--hive-border);
        background: var(--hive-surface-variant);
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

      .no-comments {
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
        .nested-comment {
          margin-left: 1rem;
        }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  permlink = "";

  @property({ type: Number, reflect: true })
  maxDepth = 3;

  @property({ type: Number, reflect: true })
  initialLimit = 10;

  private comments: HiveComment[] = [];
  private allComments: HiveComment[] = [];

  @state()
  private loading = false;

  @state()
  private error = "";

  @state()
  private hasMore = false;

  async connectedCallback() {
    super.connectedCallback();
    if (this.permlink) {
      await this.loadComments();
    }
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("permlink") && this.permlink) {
      this.comments = [];
      this.allComments = [];
      await this.loadComments();
    }
  }

  private async loadComments() {
    const parsed = parseHiveUrl(this.permlink);
    if (!parsed) {
      this.error = "Invalid permlink format. Use @author/permlink";
      return;
    }

    this.loading = true;
    this.error = "";

    try {
      const allComments = await hiveApi.getContentReplies(parsed.author, parsed.permlink);

      // Sort comments by net_votes and created time
      const sortedComments = allComments.sort((a, b) => {
        if (b.net_votes !== a.net_votes) {
          return b.net_votes - a.net_votes;
        }
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      });

      // Store all comments for pagination
      this.allComments = sortedComments;

      // Show initial batch
      this.comments = sortedComments.slice(0, this.initialLimit);
      this.hasMore = sortedComments.length > this.initialLimit;
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load comments";
    } finally {
      this.loading = false;
    }
  }

  private renderComment(comment: HiveComment, depth = 0) {
    if (depth > this.maxDepth) {
      return html``;
    }

    return html`
      <div class="comment ${depth > 0 ? "nested-comment" : ""}">
        <hive-post-header .post=${comment} .theme=${this.theme} .showTitle=${false}> </hive-post-header>

        <hive-post-content .post=${comment} .theme=${this.theme} .preview=${false}> </hive-post-content>

        <hive-post-footer .post=${comment} .theme=${this.theme} .showTags=${false} .showLink=${false}>
        </hive-post-footer>
      </div>
    `;
  }

  private async loadMoreComments() {
    if (!this.hasMore || this.loading) return;

    this.loading = true;

    try {
      // Calculate how many more comments to show
      const currentCount = this.comments.length;
      const nextBatchSize = this.initialLimit;
      const newCount = Math.min(currentCount + nextBatchSize, this.allComments.length);

      // Show more comments from the already loaded and sorted list
      this.comments = this.allComments.slice(0, newCount);

      // Update hasMore flag
      this.hasMore = newCount < this.allComments.length;
    } catch (err) {
      console.error("Failed to load more comments:", err);
    } finally {
      this.loading = false;
    }
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading comments...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    return html`
      <div class="comments-container">
        <div class="comments-header">
          <h3 class="comments-title">Comments (${this.allComments.length})</h3>
        </div>

        ${this.comments.length === 0
          ? html` <div class="no-comments">No comments yet. Be the first to comment!</div> `
          : html`
              <div class="comments-list">${this.comments.map(comment => this.renderComment(comment))}</div>

              ${this.hasMore
                ? html`
                    <button class="load-more-button" @click=${this.loadMoreComments} ?disabled=${this.loading}>
                      ${this.loading ? "Loading..." : "Load More Comments"}
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
    "hive-comments": HiveCommentsElement;
  }
}

// Safe registration to prevent duplicate registration errors
if (!customElements.get("hive-comments")) {
  customElements.define("hive-comments", HiveCommentsElement);
}
