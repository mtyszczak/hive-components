import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  hiveApi,
  baseStyles,
  themeStyles,
  formatHiveDate,
  formatHiveCurrency,
  calculateReputation,
  parseHiveUrl,
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HiveComment } from "@hiveio/internal";

@customElement("hive-comments")
export class HiveCommentsElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
      }

      .comments-container {
        background: var(--hive-surface);
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
        max-height: 600px;
        overflow-y: auto;
      }

      .comment {
        padding: 1rem;
        border-bottom: 1px solid var(--hive-border);
      }

      .comment:last-child {
        border-bottom: none;
      }

      .comment-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.75rem;
      }

      .comment-avatar {
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

      .comment-meta {
        flex: 1;
      }

      .comment-author {
        font-weight: 600;
        color: var(--hive-on-surface);
        margin: 0;
        font-size: 0.875rem;
      }

      .comment-details {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin: 0.25rem 0 0 0;
        font-size: 0.75rem;
        color: var(--hive-on-surface-variant);
      }

      .reputation {
        background: var(--hive-primary);
        color: white;
        padding: 0.125rem 0.375rem;
        border-radius: 12px;
        font-size: 0.625rem;
        font-weight: 500;
      }

      .comment-body {
        color: var(--hive-on-surface);
        line-height: 1.6;
        margin: 0 0 0.75rem 0;
        font-size: 0.875rem;
      }

      .comment-footer {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 0.75rem;
        color: var(--hive-on-surface-variant);
      }

      .comment-stat {
        display: flex;
        align-items: center;
        gap: 0.25rem;
      }

      .comment-payout {
        color: var(--hive-success);
        font-weight: 500;
      }

      .nested-comment {
        margin-left: 2rem;
        border-left: 2px solid var(--hive-border);
        padding-left: 1rem;
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
          padding-left: 0.5rem;
        }

        .comment {
          padding: 0.75rem;
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

      this.comments = sortedComments.slice(0, this.initialLimit);
      this.hasMore = sortedComments.length > this.initialLimit;
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load comments";
    } finally {
      this.loading = false;
    }
  }

  private getInitials(name: string): string {
    return name.substring(0, 2).toUpperCase();
  }

  private renderComment(comment: HiveComment, depth = 0) {
    if (depth > this.maxDepth) {
      return html``;
    }

    const reputation = calculateReputation(comment.author_reputation || 0);

    // TODO: unsafeHTML fails here due to MarkDown i think - implement other way to render HTML
    const body = (comment.body);

    return html`
      <div class="comment ${depth > 0 ? "nested-comment" : ""}">
        <div class="comment-header">
          <div class="comment-avatar">${this.getInitials(comment.author)}</div>
          <div class="comment-meta">
            <h4 class="comment-author">@${comment.author}</h4>
            <p class="comment-details">
              <span class="reputation">${reputation}</span>
              <span>${formatHiveDate(comment.created)}</span>
            </p>
          </div>
        </div>

        <div class="comment-body">${body}</div>

        <div class="comment-footer">
          <div class="comment-stat">
            <span>❤️</span>
            <span>${comment.net_votes}</span>
          </div>
          <div class="comment-stat">
            <span>💬</span>
            <span>${comment.children}</span>
          </div>
          <div class="comment-payout">
            ${formatHiveCurrency(comment.vote_rshares == 0 ? comment.total_payout_value : comment.pending_payout_value)}
          </div>
        </div>
      </div>
    `;
  }

  private async loadMoreComments() {
    // In a real implementation, this would load more comments
    // For now, just show all remaining comments
    const parsed = parseHiveUrl(this.permlink);
    if (!parsed) return;

    try {
      const allComments = await hiveApi.getContentReplies(parsed.author, parsed.permlink);
      this.comments = allComments.sort((a, b) => {
        if (b.net_votes !== a.net_votes) {
          return b.net_votes - a.net_votes;
        }
        return new Date(a.created).getTime() - new Date(b.created).getTime();
      });
      this.hasMore = false;
    } catch (err) {
      console.error("Failed to load more comments:", err);
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
          <h3 class="comments-title">Comments (${this.comments.length})</h3>
        </div>

        ${this.comments.length === 0
          ? html` <div class="no-comments">No comments yet. Be the first to comment!</div> `
          : html`
              <div class="comments-list">${this.comments.map(comment => this.renderComment(comment))}</div>

              ${this.hasMore
                ? html` <button class="load-more-button" @click=${this.loadMoreComments}>Load More Comments</button> `
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
