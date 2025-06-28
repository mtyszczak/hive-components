import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import { hiveApi, baseStyles, themeStyles, parseHiveUrl } from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal";
import type { HivePost, PosItem } from "@hiveio/internal";

import { toDataURL } from "qrcode";

export class HivePosItemElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: flex;
        max-width: 900px;
        margin: 0 auto;
        background: var(--hive-surface);
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        overflow: hidden;
        font-family: var(--hive-font-family, "Inter", sans-serif);
        min-height: 600px;
      }

      .pos-item-container {
        display: flex;
        width: 100%;
      }

      .left-panel {
        flex: 1;
        background: var(--hive-surface-variant);
        display: flex;
        flex-direction: column;
        padding: 2rem;
        position: relative;
      }

      .merchant-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--hive-border);
      }

      .merchant-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 1rem;
        flex-shrink: 0;
      }

      .merchant-avatar > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .merchant-details {
        flex: 1;
      }

      .merchant-name {
        font-weight: 600;
        color: var(--hive-on-surface);
        font-size: 1rem;
        margin: 0 0 0.25rem 0;
      }

      .merchant-label {
        font-size: 0.875rem;
        color: var(--hive-on-surface-variant);
        margin: 0;
      }

      .pos-item-container a {
        color: var(--hive-primary);
        text-decoration: none;
      }

      .order-summary {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .order-title {
        font-size: 1.75rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        margin: 0 0 1.5rem 0;
        line-height: 1.2;
      }

      .order-item {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
      }

      .item-thumbnail {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        background: var(--hive-surface);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--hive-on-surface-variant);
        font-size: 1.5rem;
        flex-shrink: 0;
        object-fit: cover;
      }

      .item-details {
        flex: 1;
      }

      .item-name {
        font-weight: 500;
        color: var(--hive-on-surface);
        margin: 0 0 0.25rem 0;
        font-size: 0.9rem;
      }

      .item-quantity {
        font-size: 0.8rem;
        color: var(--hive-on-surface-variant);
        margin: 0;
      }

      .item-price-display {
        font-weight: 600;
        color: var(--hive-on-surface);
        font-size: 0.9rem;
        flex-shrink: 0;
      }

      .order-totals {
        margin-top: 1rem;
        padding-top: 1rem;
        border-top: 1px solid var(--hive-border);
      }

      .total-line {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .total-line.final {
        font-weight: 600;
        font-size: 1.1rem;
        color: var(--hive-on-surface);
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        border-top: 1px solid var(--hive-border);
      }

      .total-label {
        color: var(--hive-on-surface-variant);
        font-size: 0.9rem;
      }

      .total-amount {
        color: var(--hive-on-surface);
        font-weight: 500;
        font-size: 0.9rem;
      }

      .back-button {
        position: absolute;
        top: 1rem;
        left: 1rem;
        background: none;
        border: none;
        color: var(--hive-on-surface-variant);
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.875rem;
        padding: 0.5rem;
        border-radius: 6px;
        transition: background-color 0.2s ease;
      }

      .back-button:hover {
        background: rgba(0, 0, 0, 0.05);
      }

      .item-image {
        width: 280px;
        height: 280px;
        object-fit: cover;
        border-radius: 12px;
        background: var(--hive-surface);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--hive-on-surface-variant);
        font-size: 4rem;
        margin-bottom: 1.5rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      }

      .merchant-info {
        text-align: center;
        margin-bottom: 1rem;
      }

      .right-panel {
        flex: 1;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        background: var(--hive-surface);
      }

      .item-title {
        margin: 0 0 1.5rem 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        line-height: 1.3;
      }

      .item-description {
        margin: 0 0 2rem 0;
        color: var(--hive-on-surface-variant);
        line-height: 1.6;
        font-size: 0.875rem;
        flex: 1;
      }

      .qr-section {
        text-align: center;
      }

      .qr-code > a {
        width: 100%;
        height: 100%;
      }

      .qr-code > a > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .qr-code {
        width: 200px;
        height: 200px;
        padding: 10px;
        background: var(--hive-surface-variant);
        border: 2px solid var(--hive-border);
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem auto;
        font-size: 1rem;
        color: var(--hive-on-surface-variant);
      }

      .qr-instructions {
        font-size: 0.875rem;
        color: var(--hive-on-surface-variant);
        margin-bottom: 1rem;
      }

      .payment-divider {
        display: flex;
        align-items: center;
        margin: 1.5rem 0;
        color: var(--hive-on-surface-variant);
        font-size: 0.875rem;
      }

      .payment-divider::before,
      .payment-divider::after {
        content: "";
        flex: 1;
        height: 1px;
        background: var(--hive-border);
      }

      .payment-divider span {
        padding: 0 1rem;
      }

      .payment-methods {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .payment-method {
        display: flex;
        align-items: center;
        padding: 1rem;
        border: 1px solid var(--hive-border);
        border-radius: 8px;
        background: var(--hive-surface);
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
      }

      .payment-method:hover {
        border-color: var(--hive-primary);
        background: color-mix(in srgb, var(--hive-primary) 5%, var(--hive-surface));
      }

      .payment-method.selected {
        border-color: var(--hive-primary);
        background: color-mix(in srgb, var(--hive-primary) 10%, var(--hive-surface));
      }

      .payment-method-icon {
        width: 24px;
        height: 24px;
        margin-right: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .payment-method-name {
        flex: 1;
        font-weight: 500;
        color: var(--hive-on-surface);
      }

      .payment-method-radio {
        width: 16px;
        height: 16px;
        border: 2px solid var(--hive-border);
        border-radius: 50%;
        position: relative;
      }

      .payment-method.selected .payment-method-radio {
        border-color: var(--hive-primary);
      }

      .payment-method.selected .payment-method-radio::after {
        content: "";
        position: absolute;
        top: 2px;
        left: 2px;
        width: 8px;
        height: 8px;
        background: var(--hive-primary);
        border-radius: 50%;
      }

      .pay-button {
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
        margin-top: 1.5rem;
      }

      .pay-button:hover {
        background: color-mix(in srgb, var(--hive-primary) 90%, black);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }

      .pay-button:active {
        transform: translateY(0);
      }

      .pay-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        color: var(--hive-on-surface-variant);
      }

      .error {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        color: var(--hive-error);
        background: color-mix(in srgb, var(--hive-error) 10%, transparent);
        border-radius: 8px;
        margin: 1rem;
        text-align: center;
      }

      .empty-state {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 400px;
        color: var(--hive-on-surface-variant);
        text-align: center;
      }

      @media (max-width: 768px) {
        :host {
          flex-direction: column;
          max-width: 100%;
          border-radius: 0;
          min-height: auto;
        }

        .pos-item-container {
          flex-direction: column;
        }

        .left-panel {
          padding: 1.5rem;
          min-height: auto;
        }

        .merchant-header {
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
        }

        .merchant-avatar {
          width: 32px;
          height: 32px;
          font-size: 0.875rem;
        }

        .order-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .item-thumbnail {
          width: 50px;
          height: 50px;
          font-size: 1.25rem;
        }

        .right-panel {
          padding: 1.5rem;
          border-top: 1px solid var(--hive-border);
        }

        .item-title {
          font-size: 1.25rem;
        }

        .item-price {
          font-size: 1.75rem;
          margin-bottom: 1rem;
        }

        .item-description {
          margin-bottom: 1.5rem;
        }

        .qr-code {
          width: 150px;
          height: 150px;
          padding: 8px;
        }

        .payment-methods {
          gap: 0.5rem;
        }

        .payment-method {
          padding: 0.75rem;
        }

        .pay-button {
          margin-top: 1rem;
          padding: 0.875rem;
        }
      }

      @media (max-width: 720px) {
        .left-panel {
          padding: 1rem;
        }

        .right-panel {
          padding: 1rem;
        }

        .item-title {
          font-size: 1.125rem;
        }

        .order-title {
          font-size: 1.25rem;
        }

        .item-thumbnail {
          width: 40px;
          height: 40px;
          font-size: 1rem;
        }

        .merchant-avatar {
          width: 28px;
          height: 28px;
          font-size: 0.75rem;
        }

        .item-price {
          font-size: 1.5rem;
        }

        .qr-code {
          width: 120px;
          height: 120px;
          padding: 5px;
        }

        .payment-method {
          padding: 0.625rem;
          font-size: 0.875rem;
        }

        .pay-button {
          padding: 0.75rem;
          font-size: 0.9rem;
        }
      }

      @media (min-width: 769px) and (max-width: 1024px) {
        :host {
          max-width: 800px;
        }

        .item-image {
          width: 240px;
          height: 240px;
        }

        .order-title {
          font-size: 1.6rem;
        }
      }
    `,
  ];

  @property({ type: String })
  permlink = "";

  @property({ type: String, reflect: true, attribute: "front-base-url" })
  frontBaseUrl = "https://hive.blog";

  @state()
  private post: HivePost | null = null;

  @state()
  private posItem: PosItem | null = null;

  @state()
  private loading = false;

  @state()
  private error: string | null = null;

  @state()
  private paymentError: Error | null = null;

  @state()
  private paid = false;

  @state()
  private processingPayment = false;

  @state()
  private selectedPaymentMethod = "qr";

  @state()
  private qrCode = "";

  @state()
  private paymentUrl = "";

  connectedCallback() {
    super.connectedCallback();
    this.loadItem();
    this.generateQRCode();
  }

  updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("permlink")) {
      this.loadItem();
    }
    if (changedProperties.has("theme")) {
      this.generateQRCode();
    }
    if (changedProperties.has("selectedPaymentMethod")) {
      this.paymentError = null;
      this.paid = false;
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

      this.generateQRCode();
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

  private async generateQRCode() {
    if (!this.posItem) return;

    // Generate a simple payment URL for Hive Keychain QR scanning
    const paymentData = [
      "transfer",
      {
        from: "",
        to: this.posItem.author,
        amount: this.posItem.price,
        memo: `Payment for '${this.posItem.title}' | Hive Components`,
      },
    ];

    const strTx = JSON.stringify(paymentData);

    this.paymentUrl = `hive://sign/op/${btoa(strTx)}`;

    this.qrCode = await toDataURL(this.paymentUrl, {
      margin: 0,
      color: {
        dark: this.theme === "light" ? "#000f" : "#ffff",
        light: this.theme === "light" ? "#fff0" : "#0000",
      },
    });
  }

  private handlePaymentMethodChange(method: string) {
    this.selectedPaymentMethod = method;
  }

  private async handlePayment() {
    if (!this.posItem || this.processingPayment) return;

    this.processingPayment = true;
    if (this.paid) this.paid = false;
    if (this.paymentError) this.paymentError = null;

    // Dispatch payment event with item details and selected method
    const paymentEvent = new CustomEvent("payment-initiated", {
      detail: {
        item: this.posItem,
        amount: this.posItem.price,
        recipient: this.posItem.author,
        method: this.selectedPaymentMethod,
      },
      bubbles: true,
    });

    this.dispatchEvent(paymentEvent);

    try {
      if (this.posItem) {
        const amountRaw = this.posItem.price.replace(/[^0-9.]/g, "");
        const amount = parseFloat(amountRaw);
        const currency = this.posItem.price.replace(/[\d.]/g, "").trim();
        const memo = `Payment for '${this.posItem.title}' | Hive Components`;

        if (this.selectedPaymentMethod === "keychain") {
          await new Promise((res, rej) => {
            /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
            (window as any).hive_keychain.requestTransfer(
              ".",
              this.posItem?.author,
              amountRaw,
              memo,
              currency,
              (data: { error?: Error }) => (data.error ? rej(data) : res(data))
            );
          });
        } else {
          /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
          await (window as any).peakvault.requestTransfer("", this.posItem.author, amount, currency, memo);
        }

        // Dispatch success event
        const successEvent = new CustomEvent("payment-completed", {
          detail: {
            item: this.posItem,
            amount: this.posItem.price,
            recipient: this.posItem.author,
            method: this.selectedPaymentMethod,
            status: "success",
          },
          bubbles: true,
        });

        this.dispatchEvent(successEvent);

        this.paid = true;
        setTimeout(() => {
          this.paid = false;
          this.selectedPaymentMethod = "qr"; // Reset to QR method after payment
        }, 3000);
      }
    } catch (error) {
      console.error("Payment processing error:", error);
      this.paymentError = error as Error;
      // Dispatch error event
      const errorEvent = new CustomEvent("payment-error", {
        detail: {
          item: this.posItem,
          amount: this.posItem.price,
          recipient: this.posItem.author,
          method: this.selectedPaymentMethod,
          status: "error",
          message: error instanceof Error ? error.message : "Unknown error",
        },
        bubbles: true,
      });

      this.dispatchEvent(errorEvent);
    } finally {
      this.processingPayment = false;
    }
  }

  private renderImage() {
    if (this.posItem?.image) {
      return html`<img src="${this.posItem.image}" alt="${this.posItem.title}" class="item-thumbnail" />`;
    }

    return html` <div class="item-thumbnail">📦</div> `;
  }

  private renderOrderSummary() {
    if (!this.posItem) return html``;

    // Parse the price to get numeric value and currency
    // const priceMatch = this.posItem.price.match(/^(\d+(?:\.\d+)?)\s*(.+)$/);
    // const priceAmount = priceMatch ? priceMatch[1] : this.posItem.price;
    // const currency = priceMatch ? priceMatch[2] : '';

    return html`
      <div class="order-summary">
        <h2 class="order-title">Pay ${this.posItem.author}</h2>

        <div class="order-item">
          ${this.renderImage()}
          <div class="item-details">
            <p class="item-name">
              <a href="${this.frontBaseUrl}/@${this.posItem.author}/${this.posItem.permlink}" target="_blank"
                >${this.posItem.title}</a
              >
            </p>
            <p class="item-quantity">Qty: 1</p>
          </div>
          <div class="item-price-display">${this.posItem.price}</div>
        </div>

        <div class="order-totals">
          <div class="total-line">
            <span class="total-label">Subtotal</span>
            <span class="total-amount">${this.posItem.price}</span>
          </div>
          <div class="total-line">
            <span class="total-label">Processing fee</span>
            <span class="total-amount">Free</span>
          </div>
          <div class="total-line final">
            <span class="total-label">Total due</span>
            <span class="total-amount">${this.posItem.price}</span>
          </div>
        </div>
      </div>
    `;
  }

  private renderQRCode() {
    return html`
      <div class="qr-section">
        <div class="qr-code">
          ${this.qrCode
            ? html`<a href="${this.paymentUrl}"><img src="${this.qrCode}" /></a>`
            : html`<span>Generating QR...</span>`}
        </div>
        <div class="qr-instructions">Scan with Hive Keychain mobile app<br />Or click to pay on mobile</div>
      </div>
    `;
  }

  private getInitials(name: string): string {
    return name.substring(0, 2).toUpperCase();
  }

  private getProfileImageUrl(author: string): string {
    return `https://images.hive.blog/u/${author}/avatar/medium`;
  }

  private renderPaymentMethods() {
    const methods = [];

    // TODO: Add MetaMask
    // if ("ethereum" in window && window.ethereum && typeof window.ethereum === "object" && "isMetaMask" in window.ethereum && window.ethereum.isMetaMask)
    //   methods.push({ id: "metamask", name: "MetaMask", icon: "🦊" });

    if ("hive_keychain" in window) methods.push({ id: "keychain", name: "Hive Keychain", icon: "🔗" });

    if ("peakvault" in window) methods.push({ id: "peakvault", name: "PeakVault", icon: "⛰️" });

    return html`
      <div class="payment-methods">
        ${methods.length === 0
          ? "No other methods available"
          : methods.map(
              method => html`
                <div
                  class="payment-method ${this.selectedPaymentMethod === method.id ? "selected" : ""}"
                  @click=${() => this.handlePaymentMethodChange(method.id)}
                >
                  <div class="payment-method-icon">${method.icon}</div>
                  <div class="payment-method-name">${method.name}</div>
                  <div class="payment-method-radio"></div>
                </div>
              `
            )}
      </div>
    `;
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
        <!-- Left Panel - Order Summary -->
        <div class="left-panel">
          <div class="merchant-header">
            <div class="merchant-avatar">
              <img
                src="${this.getProfileImageUrl(this.posItem.author)}"
                alt="${this.posItem.author}"
                @error=${(e: Event) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  if (target.parentElement)
                    target.parentElement.textContent = this.getInitials(this.posItem?.author || "UNKNOWN");
                }}
              />
            </div>
            <div class="merchant-details">
              <p class="merchant-name">@${this.posItem.author}</p>
              <p class="merchant-label">Merchant</p>
            </div>
          </div>

          ${this.renderOrderSummary()}
        </div>

        <!-- Right Panel - Payment -->
        <div class="right-panel">
          <h1 class="item-title">Payment details</h1>

          <!-- QR Code Section -->
          ${this.renderQRCode()}

          <!-- Payment Divider -->
          <div class="payment-divider">
            <span>Or pay another way</span>
          </div>

          <!-- Payment Methods -->
          ${this.renderPaymentMethods()}

          <!-- Pay Button -->
          <button
            class="pay-button"
            @click=${this.handlePayment}
            ?disabled=${this.processingPayment || this.selectedPaymentMethod === "qr"}
          >
            ${this.paymentError
              ? "❌ Error processing payment"
              : this.processingPayment
                ? "Processing..."
                : this.paid
                  ? "Paid ✅"
                  : `Pay ${this.posItem.price}`}
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
