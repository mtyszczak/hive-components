import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { hiveApi, baseStyles, themeStyles, parseHiveUrl } from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal";
import type { HivePost, HiveComment, PosItem } from "@hiveio/internal";

export class HivePosElement extends withHiveTheme(LitElement) {
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

      .pos-container {
        display: flex;
        flex-direction: column;
      }

      .pos-header {
        padding: 1rem;
        border-bottom: 1px solid var(--hive-border);
        background: var(--hive-surface-variant);
      }

      .pos-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--hive-on-surface);
      }

      .post-content {
        padding: 1rem;
        border-bottom: 1px solid var(--hive-border);
      }

      .post-body {
        color: var(--hive-on-surface);
        line-height: 1.6;
        margin: 0;
      }

      .products-section {
        padding: 1rem;
      }

      .products-header {
        margin: 0 0 1rem 0;
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--hive-on-surface);
      }

      .product-select {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid var(--hive-border);
        border-radius: 4px;
        background: var(--hive-surface);
        color: var(--hive-on-surface);
        font-size: 1rem;
        cursor: pointer;
      }

      .product-select:focus {
        outline: none;
        border-color: var(--hive-primary);
        box-shadow: 0 0 0 2px var(--hive-primary);
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
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        color: var(--hive-on-surface-variant);
      }
    `,
  ];

  @property({ type: String })
  permlink = "";

  @state()
  private post: HivePost | null = null;

  @state()
  private comments: HiveComment[] = [];

  @state()
  private products: PosItem[] = [];

  @state()
  private loading = false;

  @state()
  private error: string | null = null;

  @state()
  private selectedProduct = "";

  connectedCallback() {
    super.connectedCallback();
    this.loadData();
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("permlink")) {
      this.loadData();
    }
  }

  private async loadData() {
    if (!this.permlink) return;

    this.loading = true;
    this.error = null;

    try {
      const parsed = parseHiveUrl(this.permlink);
      if (!parsed) {
        throw new Error("Invalid permlink format");
      }

      const { author, permlink } = parsed;

      // Load post and comments in parallel
      const [post, comments] = await Promise.all([
        hiveApi.getContent(author, permlink),
        hiveApi.getContentReplies(author, permlink),
      ]);

      this.post = post;
      this.comments = comments;
      this.products = this.extractProductsFromComments(comments);
    } catch (error) {
      this.error = error instanceof Error ? error.message : "Failed to load data";
      console.error("Error loading POS data:", error);
    } finally {
      this.loading = false;
    }
  }

  private extractProductsFromComments(comments: HiveComment[]): PosItem[] {
    const products: PosItem[] = [];

    comments.forEach(comment => {
      const title = this.extractPosMetadata(comment.body, "hive-pos-title");
      if (title) {
        const price = this.extractPosMetadata(comment.body, "hive-pos-price") || "0 HBD";
        const image = this.extractPosMetadata(comment.body, "hive-pos-image");

        const product: PosItem = {
          title,
          price,
          author: comment.author,
          permlink: comment.permlink,
        };

        if (image) {
          product.image = image;
        }

        products.push(product);
      }
    });

    return products;
  }

  private extractPosMetadata(body: string, metaType: string): string | null {
    const regex = new RegExp(`\\[//\\]:\\s*#\\s*\\(!${metaType}\\s+(.+?)\\)`, "i");
    const match = body.match(regex);
    return match && match[1] ? match[1].trim() : null;
  }

  private handleProductSelect(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedProduct = select.value;

    // Dispatch custom event with selected product
    if (this.selectedProduct) {
      const selectedPosItem = this.products.find(p => `${p.author}/${p.permlink}` === this.selectedProduct);

      if (selectedPosItem) {
        const event = new CustomEvent("product-selected", {
          detail: selectedPosItem,
          bubbles: true,
        });
        this.dispatchEvent(event);
      }
    }
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading POS data...</div>`;
    }

    if (this.error) {
      return html`<div class="error">Error: ${this.error}</div>`;
    }

    if (!this.post) {
      return html`<div class="empty-state">No post found</div>`;
    }

    return html`
      <div class="pos-container">
        <div class="pos-header">
          <h2 class="pos-title">${this.post.title}</h2>
        </div>

        <div class="post-content">
          <div class="post-body">${this.renderPostBody(this.post.body)}</div>
        </div>

        ${this.products.length > 0
          ? html`
              <div class="products-section">
                <h3 class="products-header">Available Products</h3>
                <select class="product-select" @change=${this.handleProductSelect} .value=${this.selectedProduct}>
                  <option value="">Select a product...</option>
                  ${this.products.map(
                    product => html`
                      <option value="${product.author}/${product.permlink}">${product.title} - ${product.price}</option>
                    `
                  )}
                </select>
              </div>
            `
          : html` <div class="empty-state">No products available</div> `}
      </div>
    `;
  }

  private renderPostBody(body: string) {
    // Simple markdown-like rendering for basic formatting
    return body
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0 && !line.startsWith("[//]:"))
      .map(line => html`<p>${line}</p>`);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-pos": HivePosElement;
  }
}

// Safe registration to prevent duplicate registration errors
if (!customElements.get("hive-pos")) {
  customElements.define("hive-pos", HivePosElement);
}
