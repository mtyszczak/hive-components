import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  hiveApi,
  baseStyles,
  themeStyles,
  parseHiveUrl,
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal/decorators";
import type { HivePost } from "@hiveio/internal";
import "./hive-post-header.js";
import "./hive-post-content.js";
import "./hive-post-footer.js";

export class HivePostElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
        border: 1px solid var(--hive-border);
        border-radius: 8px;
        /* background: var(--hive-surface); */
        overflow: hidden;
      }

      .post-card {
        display: flex;
        flex-direction: column;
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

      .post-card > hive-post-header {
        border-bottom: 1px solid var(--hive-border);
      }

      .post-card > hive-post-footer {
        border-top: 1px solid var(--hive-border);
      }
    `,
  ];

  @property({ type: String, reflect: true })
  permlink = "";

  @property({ type: Boolean, reflect: true })
  preview = false;

  @property({ type: Number, reflect: true, attribute: "max-length" })
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

    return html`
      <article class="post-card">
        <hive-post-header .theme=${this.theme} .post=${this.post}></hive-post-header>
        <hive-post-content .theme=${this.theme} .post=${this.post} ?preview=${this.preview} max-length=${this.maxLength}></hive-post-content>
        <hive-post-footer .theme=${this.theme} .post=${this.post}></hive-post-footer>
      </article>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-post": HivePostElement;
  }
}

// Safe registration to prevent duplicate registration errors
if (!customElements.get("hive-post")) {
  customElements.define("hive-post", HivePostElement);
}
