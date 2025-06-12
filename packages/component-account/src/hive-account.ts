import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  hiveApi,
  baseStyles,
  themeStyles,
  formatHiveDate,
  formatHiveCurrency,
  calculateReputation,
  isValidHiveAccount,
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal";
import type { HiveAccount } from "@hiveio/internal";

@customElement("hive-account")
export class HiveAccountElement extends withHiveTheme(LitElement) {
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

      .account-card {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
      }

      .account-header {
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }

      .account-avatar {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        background: var(--hive-primary);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 600;
        font-size: 1.25rem;
        border: 2px solid var(--hive-border);
        overflow: hidden;
      }

      .account-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .account-info h3 {
        margin: 0;
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--hive-on-surface);
      }

      .account-info p {
        margin: 0;
        color: var(--hive-on-surface-variant);
        font-size: 0.875rem;
      }

      .reputation {
        background: linear-gradient(135deg, var(--hive-primary), color-mix(in srgb, var(--hive-primary) 80%, black));
        color: white;
        padding: 0.15rem 0.45rem;
        border-radius: 14px;
        font-size: 0.7rem;
        font-weight: 600;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      }

      .account-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
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

      .account-balances {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .balance-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        background: var(--hive-surface-variant);
        border-radius: 4px;
        font-size: 0.875rem;
      }

      .balance-label {
        color: var(--hive-on-surface-variant);
      }

      .balance-value {
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

      .account-meta {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .meta-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem;
        background: var(--hive-surface-variant);
        border-radius: 4px;
        font-size: 0.875rem;
      }

      .meta-label {
        color: var(--hive-on-surface-variant);
      }

      .meta-value {
        color: var(--hive-on-surface);
        font-weight: 500;
      }

      @media (max-width: 640px) {
        .account-stats {
          grid-template-columns: repeat(2, 1fr);
        }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  account = "";

  private accountData: HiveAccount | null = null;

  @state()
  private loading = false;

  @state()
  private error = "";

  async connectedCallback() {
    super.connectedCallback();
    if (this.account) {
      await this.loadAccount();
    }
  }

  async updated(changedProperties: Map<string, unknown>) {
    if (changedProperties.has("account") && this.account) {
      await this.loadAccount();
    }
  }

  private async loadAccount() {
    if (!isValidHiveAccount(this.account)) {
      this.error = "Invalid account name";
      return;
    }

    this.loading = true;
    this.error = "";

    try {
      this.accountData = await hiveApi.getAccount(this.account);
      if (!this.accountData) {
        this.error = "Account not found";
      }
    } catch (err) {
      this.error = err instanceof Error ? err.message : "Failed to load account data";
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

  private getVestingHive(vestingShares: string): number {
    // Simple conversion - in a real app you'd get the dynamic global properties
    const shares = parseFloat(vestingShares.replace(" VESTS", ""));
    return Math.round(shares / 1000000); // Approximate conversion
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading account data...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    if (!this.accountData) {
      return html`<div class="error">No account data available</div>`;
    }

    const account = this.accountData;
    const reputation = calculateReputation(account.reputation);

    return html`
      <div class="account-card">
        <div class="account-header">
          <div class="account-avatar">
            <img
              src="${this.getProfileImageUrl(account.name)}"
              alt="${account.name}"
              @error=${(e: Event) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement) target.parentElement.textContent = this.getInitials(account.name);
              }}
            />
          </div>
          <div class="account-info">
            <h3>${account.name}</h3>
            <p>
              <!-- TODO: Add on REST API: <span class="reputation">${reputation}</span>
              • -->Joined ${formatHiveDate(account.created)}
            </p>
          </div>
        </div>

        <div class="account-stats">
          <div class="stat-item">
            <div class="stat-value">${account.post_count.toLocaleString()}</div>
            <div class="stat-label">Posts</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${(account.voting_power / 100).toFixed(2)}%</div>
            <div class="stat-label">Voting Power</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${account.lifetime_vote_count.toLocaleString()}</div>
            <div class="stat-label">Votes Cast</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.getVestingHive(account.vesting_shares).toLocaleString()}</div>
            <div class="stat-label">HIVE Power</div>
          </div>
        </div>

        <div class="account-balances">
          <div class="balance-item">
            <span class="balance-label">HIVE Balance:</span>
            <span class="balance-value">${formatHiveCurrency(account.balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">HBD Balance:</span>
            <span class="balance-value">${formatHiveCurrency(account.hbd_balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">Savings (HIVE):</span>
            <span class="balance-value">${formatHiveCurrency(account.savings_balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">Savings (HBD):</span>
            <span class="balance-value">${formatHiveCurrency(account.savings_hbd_balance)}</span>
          </div>
        </div>

        <div class="account-meta">
          <div class="meta-item">
            <span class="meta-label">Recovery Account:</span>
            <span class="meta-value">${account.recovery_account}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Witnesses Voted:</span>
            <span class="meta-value">${account.witnesses_voted_for}/30</span>
          </div>
          ${account.proxy
            ? html`
                <div class="meta-item">
                  <span class="meta-label">Proxy:</span>
                  <span class="meta-value">${account.proxy}</span>
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
    "hive-account": HiveAccountElement;
  }
}

// Safe registration to prevent duplicate registration errors
if (!customElements.get("hive-account")) {
  customElements.define("hive-account", HiveAccountElement);
}
