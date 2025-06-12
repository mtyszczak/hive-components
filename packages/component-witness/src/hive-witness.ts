import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { hiveApi, baseStyles, themeStyles, formatHiveCurrency, isValidHiveAccount } from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal";
import type { HiveWitness } from "@hiveio/internal";

@customElement("hive-witness")
export class HiveWitnessElement extends withHiveTheme(LitElement) {
  static styles = [
    baseStyles,
    themeStyles,
    css`
      :host {
        display: block;
        border: 1px solid var(--hive-border);
        border-radius: 8px;
        padding: 1rem;
        /* background: var(--hive-surface); */
      }

      .witness-card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .witness-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .witness-avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--hive-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 1rem;
        border: 2px solid var(--hive-border);
        overflow: hidden;
      }

      .witness-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .witness-info h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--hive-on-surface);
      }

      .witness-info p {
        margin: 0;
        color: var(--hive-on-surface-variant);
        font-size: 0.875rem;
      }

      .witness-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 1rem;
      }

      .stat-item {
        text-align: center;
        padding: 0.75rem;
        background: var(--hive-surface-variant);
        border-radius: 6px;
      }

      .stat-value {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        margin: 0;
      }

      .stat-label {
        font-size: 0.75rem;
        color: var(--hive-on-surface-variant);
        margin: 0.25rem 0 0 0;
      }

      .witness-props {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .prop-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        background: var(--hive-surface-variant);
        border-radius: 4px;
        font-size: 0.875rem;
      }

      .prop-label {
        color: var(--hive-on-surface-variant);
      }

      .prop-value {
        color: var(--hive-on-surface);
        font-weight: 500;
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
        border-radius: 6px;
      }

      .witness-url {
        color: var(--hive-primary);
        text-decoration: none;
      }

      .witness-url:hover {
        text-decoration: underline;
      }
    `,
  ];

  @property({ type: String, reflect: true })
  account = "";

  private witness: HiveWitness | null = null;

  @state()
  private loading = false;

  @state()
  private error = "";

  async connectedCallback() {
    super.connectedCallback();
    if (this.account) {
      await this.loadWitness();
    }
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("account") && this.account) {
      await this.loadWitness();
    }
  }

  private async loadWitness() {
    if (!isValidHiveAccount(this.account)) {
      this.error = "Invalid account name";
      return;
    }

    this.loading = true;
    this.error = "";

    try {
      this.witness = await hiveApi.getWitnessByAccount(this.account);
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load witness data";
    } finally {
      this.loading = false;
    }
  }

  private getProfileImageUrl(author: string): string {
    return `https://images.hive.blog/u/${author}/avatar/medium`;
  }

  private getInitials(name: string): string {
    return name.substring(0, 2).toUpperCase();
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading witness data...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    if (!this.witness) {
      return html`<div class="error">No witness data available</div>`;
    }

    return html`
      <div class="witness-card">
        <div class="witness-header">
          <div class="witness-avatar">
            <img
              src="${this.getProfileImageUrl(this.witness.owner)}"
              alt="${this.witness.owner}"
              @error=${(e: Event) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement)
                  target.parentElement.textContent = this.getInitials(this.witness?.owner || "Unknown");
              }}
            />
          </div>
          <div class="witness-info">
            <h3>${this.witness.owner}</h3>
            <p>
              ${this.witness.url
                ? html`<a href="${this.witness.url}" target="_blank" rel="noopener" class="witness-url">
                    View Witness Page
                  </a>`
                : "No website provided"}
            </p>
          </div>
        </div>

        <div class="witness-stats">
          <div class="stat-item">
            <div class="stat-value">${BigInt(this.witness.votes).toLocaleString()}</div>
            <div class="stat-label">Votes</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.witness.total_missed}</div>
            <div class="stat-label">Missed Blocks</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.witness.last_confirmed_block_num.toLocaleString()}</div>
            <div class="stat-label">Last Block</div>
          </div>
        </div>

        <div class="witness-props">
          <div class="prop-item">
            <span class="prop-label">Account Creation Fee:</span>
            <span class="prop-value">${formatHiveCurrency(this.witness.props.account_creation_fee)}</span>
          </div>
          <div class="prop-item">
            <span class="prop-label">Max Block Size:</span>
            <span class="prop-value">${this.witness.props.maximum_block_size.toLocaleString()} bytes</span>
          </div>
          <div class="prop-item">
            <span class="prop-label">HBD Interest Rate:</span>
            <span class="prop-value">${(this.witness.props.hbd_interest_rate / 100).toFixed(2)}%</span>
          </div>
          <div class="prop-item">
            <span class="prop-label">Version:</span>
            <span class="prop-value">${this.witness.running_version}</span>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hive-witness": HiveWitnessElement;
  }
}
