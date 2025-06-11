import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  baseStyles,
  themeStyles,
  truncateText,
  hiveApi,
  parseHiveUrl,
  renderPostContent
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HivePost, HiveComment } from "@hiveio/internal";

export class HivePostContentElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
        padding: 1rem;
        color: var(--hive-on-surface);
        line-height: 1.6;
      }

      .post-body {
        margin: 0;
      }

      .post-body img {
        width: auto;
        max-width: 100%;
        height: auto;
        max-height: none;
        margin-bottom: 10px;
      }

      .post-body a {
        color: var(--hive-primary);
        text-decoration: none;
        transition: color 0.2s ease;
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

  @property({ type: Boolean, reflect: true })
  preview = false;

  @property({ type: Number, reflect: true, attribute: "max-length" })
  maxLength = 300;

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
    if ((changedProperties.has("permlink") && this.permlink && !this.post) ||
        (changedProperties.has("preview") || changedProperties.has("maxLength"))) {
      if (this.permlink && !this.post) {
        await this.loadPost();
      }
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

  private renderPostBody(body: string): string {
    if (this.preview) {
      body = truncateText(body, this.maxLength);
    }
    return renderPostContent(body);
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading post content...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    const currentPost = this.post || this.internalPost;

    if (!currentPost) {
      return html``;
    }

    const body = this.renderPostBody(currentPost.body);

    return html`
      <div class="post-body" .innerHTML=${body}></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-post-content": HivePostContentElement;
  }
}

// Safe registration to prevent duplicate registration errors
if (!customElements.get("hive-post-content")) {
  customElements.define("hive-post-content", HivePostContentElement);
}
