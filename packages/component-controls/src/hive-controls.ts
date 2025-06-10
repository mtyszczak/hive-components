import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { hiveApi, baseStyles, themeStyles, formatHiveCurrency, parseHiveUrl } from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HivePost } from "@hiveio/internal";

@customElement("hive-controls")
export class HiveControlsElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
      }

      .controls-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 0.75rem;
        background: var(--hive-surface);
        border: 1px solid var(--hive-border);
        border-radius: 8px;
      }

      .control-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--hive-border);
        border-radius: 6px;
        background: var(--hive-surface);
        color: var(--hive-on-surface);
        cursor: pointer;
        transition: all 0.2s ease;
        font-size: 0.875rem;
        text-decoration: none;
      }

      .control-button:hover {
        background: var(--hive-surface-variant);
        border-color: var(--hive-primary);
      }

      .control-button.active {
        background: var(--hive-primary);
        color: white;
        border-color: var(--hive-primary);
      }

      .vote-button {
        min-width: 80px;
      }

      .vote-count {
        font-weight: 600;
      }

      .payout-display {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.5rem 0.75rem;
        background: var(--hive-surface-variant);
        border-radius: 6px;
        min-width: 100px;
      }

      .payout-value {
        font-weight: 600;
        color: var(--hive-success);
        font-size: 0.875rem;
      }

      .payout-label {
        font-size: 0.75rem;
        color: var(--hive-on-surface-variant);
        margin-top: 0.125rem;
      }

      .share-menu {
        position: relative;
      }

      .share-dropdown {
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 0.5rem;
        background: var(--hive-surface);
        border: 1px solid var(--hive-border);
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        min-width: 200px;
      }

      .share-option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem;
        cursor: pointer;
        transition: background-color 0.2s ease;
        border: none;
        background: none;
        width: 100%;
        text-align: left;
        color: var(--hive-on-surface);
        font-size: 0.875rem;
      }

      .share-option:hover {
        background: var(--hive-surface-variant);
      }

      .share-option:first-child {
        border-radius: 6px 6px 0 0;
      }

      .share-option:last-child {
        border-radius: 0 0 6px 6px;
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
        border-radius: 6px;
      }

      @media (max-width: 640px) {
        .controls-container {
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .control-button {
          flex: 1;
          min-width: 0;
          justify-content: center;
        }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  permlink = "";

  @property({ type: Boolean, reflect: true })
  readonly = false;

  private post: HivePost | null = null;

  @state()
  private loading = false;

  @state()
  private error = "";

  @state()
  private showShareMenu = false;

  @state()
  private userVoted = false;

  async connectedCallback() {
    super.connectedCallback();
    if (this.permlink) {
      await this.loadPost();
    }

    // Close share menu when clicking outside
    document.addEventListener("click", this.handleDocumentClick);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("click", this.handleDocumentClick);
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("permlink") && this.permlink) {
      await this.loadPost();
    }
  }

  private handleDocumentClick = (event: Event) => {
    if (!this.shadowRoot?.contains(event.target as Node)) {
      this.showShareMenu = false;
    }
  };

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

  private handleVote() {
    if (this.readonly) return;

    // In a real implementation, this would integrate with Hive keychain or similar
    this.dispatchEvent(
      new CustomEvent("hive-vote", {
        detail: {
          author: this.post?.author,
          permlink: this.post?.permlink,
        },
        bubbles: true,
      })
    );

    // Toggle voted state for demo
    this.userVoted = !this.userVoted;
  }

  private handleComment() {
    if (this.readonly) return;

    this.dispatchEvent(
      new CustomEvent("hive-comment", {
        detail: {
          author: this.post?.author,
          permlink: this.post?.permlink,
        },
        bubbles: true,
      })
    );
  }

  private handleReblog() {
    if (this.readonly) return;

    this.dispatchEvent(
      new CustomEvent("hive-reblog", {
        detail: {
          author: this.post?.author,
          permlink: this.post?.permlink,
        },
        bubbles: true,
      })
    );
  }

  private toggleShareMenu() {
    this.showShareMenu = !this.showShareMenu;
  }

  private handleShare(platform: string) {
    const url = this.post?.url || "";
    const title = this.post?.title || "";

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        this.showShareMenu = false;
        return;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400");
    }

    this.showShareMenu = false;
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading controls...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    if (!this.post) {
      return html`<div class="error">No post data available</div>`;
    }

    return html`
      <div class="controls-container">
        <button
          class="control-button vote-button ${this.userVoted ? "active" : ""}"
          @click=${this.handleVote}
          ?disabled=${this.readonly}
          title="Vote for this post"
        >
          <span>${this.userVoted ? "❤️" : "🤍"}</span>
          <span class="vote-count">${this.post.net_votes}</span>
        </button>

        <button
          class="control-button"
          @click=${this.handleComment}
          ?disabled=${this.readonly}
          title="Comment on this post"
        >
          <span>💬</span>
          <span>${this.post.children}</span>
        </button>

        <button class="control-button" @click=${this.handleReblog} ?disabled=${this.readonly} title="Reblog this post">
          <span>🔄</span>
          <span>Reblog</span>
        </button>

        <div class="payout-display">
          <div class="payout-value">
            ${formatHiveCurrency(this.post.pending_payout_value || this.post.total_payout_value)}
          </div>
          <div class="payout-label">${this.post.pending_payout_value !== "0.000 HBD" ? "Pending" : "Total"}</div>
        </div>

        <div class="share-menu">
          <button class="control-button" @click=${this.toggleShareMenu} title="Share this post">
            <span>📤</span>
            <span>Share</span>
          </button>

          ${this.showShareMenu
            ? html`
                <div class="share-dropdown">
                  <button class="share-option" @click=${() => this.handleShare("twitter")}>
                    <span>🐦</span>
                    <span>Share on Twitter</span>
                  </button>
                  <button class="share-option" @click=${() => this.handleShare("facebook")}>
                    <span>📘</span>
                    <span>Share on Facebook</span>
                  </button>
                  <button class="share-option" @click=${() => this.handleShare("linkedin")}>
                    <span>💼</span>
                    <span>Share on LinkedIn</span>
                  </button>
                  <button class="share-option" @click=${() => this.handleShare("copy")}>
                    <span>📋</span>
                    <span>Copy Link</span>
                  </button>
                </div>
              `
            : ""}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-controls": HiveControlsElement;
  }
}
