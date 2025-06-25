import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { hiveApi, baseStyles, themeStyles, parseHiveUrl } from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal";
import type { HivePost, PosItem } from "@hiveio/internal";

export class HivePosItemElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
        max-width: 400px;
        margin: 0 auto;
        border: 1px solid var(--hive-border);
        border-radius: 12px;
        background: var(--hive-surface);
        overflow: hidden;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        font-family: var(--hive-font-family, "Inter", sans-serif);
      }

      .pos-item-container {
        display: flex;
        flex-direction: column;
      }

      .item-image {
        width: 100%;
        height: 240px;
        object-fit: cover;
        background: var(--hive-surface-variant);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--hive-on-surface-variant);
        font-size: 3rem;
      }

      .item-content {
        padding: 1.5rem;
      }

      .item-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        line-height: 1.3;
      }

      .item-price {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
        font-weight: 700;
        color: var(--hive-primary);
      }

      .item-description {
        margin: 0 0 1.5rem 0;
        color: var(--hive-on-surface-variant);
        line-height: 1.5;
        font-size: 0.875rem;
      }

      .merchant-info {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1.5rem;
        padding: 0.75rem;
        background: var(--hive-surface-variant);
        border-radius: 8px;
      }

      .merchant-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: var(--hive-primary);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.875rem;
      }

      .merchant-details {
        flex: 1;
      }

      .merchant-name {
        font-weight: 600;
        color: var(--hive-on-surface);
        font-size: 0.875rem;
        margin: 0;
      }

      .merchant-label {
        font-size: 0.75rem;
        color: var(--hive-on-surface-variant);
        margin: 0;
      }

      .payment-section {
        border-top: 1px solid var(--hive-border);
        padding: 1.5rem;
        background: var(--hive-surface-variant);
      }

      .payment-button {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 8px;
        background: var(--hive-primary);
        color: white;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
      }

      .payment-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .payment-button:active {
        transform: translateY(0);
      }

      .payment-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      .payment-icon {
        font-size: 1.25rem;
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
        border-radius: 8px;
        margin: 1rem;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        color: var(--hive-on-surface-variant);
      }

      @media (max-width: 480px) {
        :host {
          max-width: 100%;
          border-radius: 0;
          border-left: none;
          border-right: none;
        }

        .item-content {
          padding: 1rem;
        }

        .payment-section {
          padding: 1rem;
        }
      }
    `,
  ];

  @property({ type: String })
  permlink = "";

  @state()
  private post: HivePost | null = null;

  @state()
  private posItem: PosItem | null = null;

  @state()
  private loading = false;

  @state()
  private error: string | null = null;

  @state()
  private processingPayment = false;

  connectedCallback() {
    super.connectedCallback();
    this.loadItem();
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("permlink")) {
      this.loadItem();
    }
  }

  private async loadItem() {
    if (!this.permlink) return;

    this.loading = true;
    this.error = null;

    try {
      const parsed = parseHiveUrl(this.permlink);
      if (!parsed) {
        throw new Error("Invalid permlink format");
      }

      const { author, permlink } = parsed;

      const post = await hiveApi.getContent(author, permlink);
      this.post = post;
      this.posItem = this.extractPosItemFromPost(post);

      if (!this.posItem) {
        throw new Error("No POS item metadata found in this post");
      }
    } catch (error) {
      this.error = error instanceof Error ? error.message : "Failed to load item";
      console.error("Error loading POS item:", error);
    } finally {
      this.loading = false;
    }
  }

  private extractPosItemFromPost(post: HivePost): PosItem | null {
    const title = this.extractPosMetadata(post.body, "hive-pos-title");
    if (!title) return null;

    const price = this.extractPosMetadata(post.body, "hive-pos-price") || "0 HBD";
    const image = this.extractPosMetadata(post.body, "hive-pos-image");

    const item: PosItem = {
      title,
      price,
      author: post.author,
      permlink: post.permlink,
    };

    if (image) {
      item.image = image;
    }

    return item;
  }

  private extractPosMetadata(body: string, metaType: string): string | null {
    const regex = new RegExp(`\\[//\\]:\\s*#\\s*\\(!${metaType}\\s+(.+?)\\)`, "i");
    const match = body.match(regex);
    return match && match[1] ? match[1].trim() : null;
  }

  private getCleanedDescription(body: string): string {
    // Remove POS metadata comments and return clean description
    return (
      body
        .replace(/\[\/\/\]:\s*#\s*\(!hive-pos-[^)]+\)/gi, "")
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0)
        .slice(0, 3) // First 3 paragraphs
        .join(" ")
        .substring(0, 200) + (body.length > 200 ? "..." : "")
    );
  }

  private handlePayment() {
    if (!this.posItem || this.processingPayment) return;

    this.processingPayment = true;

    // Dispatch payment event with item details
    const paymentEvent = new CustomEvent("payment-initiated", {
      detail: {
        item: this.posItem,
        amount: this.posItem.price,
        recipient: this.posItem.author,
      },
      bubbles: true,
    });

    this.dispatchEvent(paymentEvent);

    // Simulate payment processing
    setTimeout(() => {
      this.processingPayment = false;

      if (this.posItem) {
        // Dispatch success event
        const successEvent = new CustomEvent("payment-completed", {
          detail: {
            item: this.posItem,
            amount: this.posItem.price,
            recipient: this.posItem.author,
            status: "success",
          },
          bubbles: true,
        });

        this.dispatchEvent(successEvent);
      }
    }, 2000);
  }

  private renderImage() {
    if (this.posItem?.image) {
      return html`<img src="${this.posItem.image}" alt="${this.posItem.title}" class="item-image" />`;
    }

    return html` <div class="item-image">📦</div> `;
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading item...</div>`;
    }

    if (this.error) {
      return html`<div class="error">Error: ${this.error}</div>`;
    }

    if (!this.posItem || !this.post) {
      return html`<div class="empty-state">No item found</div>`;
    }

    return html`
      <div class="pos-item-container">
        ${this.renderImage()}

        <div class="item-content">
          <h2 class="item-title">${this.posItem.title}</h2>
          <div class="item-price">${this.posItem.price}</div>

          ${this.post.body ? html` <p class="item-description">${this.getCleanedDescription(this.post.body)}</p> ` : ""}

          <div class="merchant-info">
            <div class="merchant-avatar">${this.posItem.author.charAt(0).toUpperCase()}</div>
            <div class="merchant-details">
              <p class="merchant-name">@${this.posItem.author}</p>
              <p class="merchant-label">Merchant</p>
            </div>
          </div>
        </div>

        <div class="payment-section">
          <button class="payment-button" @click=${this.handlePayment} ?disabled=${this.processingPayment}>
            <span class="payment-icon"> ${this.processingPayment ? "⏳" : "💳"} </span>
            <span> ${this.processingPayment ? "Processing..." : `Pay ${this.posItem.price}`} </span>
          </button>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-pos-item": HivePosItemElement;
  }
}

// Safe registration to prevent duplicate registration errors
if (!customElements.get("hive-pos-item")) {
  customElements.define("hive-pos-item", HivePosItemElement);
}
