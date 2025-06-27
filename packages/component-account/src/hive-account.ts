import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  hiveApi,
  baseStyles,
  themeStyles,
  formatHiveDate,
  formatHiveAsset,
  calculateHivePowerFromAssets,
  isValidHiveAccount,
} from "@hiveio/internal";
import { withHiveTheme } from "@hiveio/internal";
import type { HiveAccount, HiveAccountRest, HiveDynamicGlobalProperties } from "@hiveio/internal";

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
        word-break: break-all;
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

      .mana-bars {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }

      .mana-item {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.5rem;
        background: var(--hive-surface-variant);
        border-radius: 4px;
      }

      .mana-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.875rem;
      }

      .mana-label {
        color: var(--hive-on-surface-variant);
      }

      .mana-value {
        color: var(--hive-on-surface);
        font-weight: 500;
      }

      .mana-bar {
        height: 4px;
        background: var(--hive-border);
        border-radius: 2px;
        overflow: hidden;
      }

      .mana-fill {
        height: 100%;
        background: linear-gradient(90deg, var(--hive-primary), color-mix(in srgb, var(--hive-primary) 80%, white));
        transition: width 0.3s ease;
      }

      .account-powers {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1rem;
        margin-top: 0.5rem;
      }

      .power-item {
        text-align: center;
        padding: 0.75rem;
        background: var(--hive-surface-variant);
        border-radius: 6px;
      }

      .power-value {
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        margin: 0;
      }

      .power-label {
        font-size: 0.75rem;
        color: var(--hive-on-surface-variant);
        margin: 0.25rem 0 0 0;
      }

      .json-metadata {
        margin-top: 0.5rem;
        padding: 0.5rem;
        background: var(--hive-surface-variant);
        border-radius: 4px;
        font-size: 0.875rem;
      }

      .json-metadata summary {
        cursor: pointer;
        color: var(--hive-on-surface-variant);
        font-weight: 500;
      }

      .json-metadata pre {
        margin: 0.5rem 0 0 0;
        padding: 0.5rem;
        background: var(--hive-surface);
        border-radius: 4px;
        font-size: 0.75rem;
        overflow-x: auto;
        white-space: pre-wrap;
        word-break: break-all;
      }

      @media (max-width: 640px) {
        .account-stats {
          grid-template-columns: repeat(2, 1fr);
        }

        .account-powers {
          grid-template-columns: 1fr;
        }
      }
    `,
  ];

  @property({ type: String, reflect: true })
  account = "";

  private accountData: HiveAccount | null = null;
  private globalProps: HiveDynamicGlobalProperties | null = null;
  private accountRestData: HiveAccountRest | null = null;

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
      // Load account data, global properties, and reputation in parallel
      const [accountData, globalProps, restAccountData] = await Promise.all([
        hiveApi.getAccount(this.account),
        hiveApi.getDynamicGlobalProperties(),
        hiveApi.getAccountRest(this.account),
      ]);

      this.accountData = accountData;
      this.globalProps = globalProps;
      this.accountRestData = restAccountData;

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

  private getHivePower(): number {
    if (!this.accountData || !this.globalProps) return 0;

    return calculateHivePowerFromAssets(
      this.accountData.vesting_shares,
      this.globalProps.total_vesting_fund_hive,
      this.globalProps.total_vesting_shares
    );
  }

  private getDelegatedHivePower(): number {
    if (!this.accountData || !this.globalProps) return 0;

    return calculateHivePowerFromAssets(
      this.accountData.delegated_vesting_shares,
      this.globalProps.total_vesting_fund_hive,
      this.globalProps.total_vesting_shares
    );
  }

  private getReceivedHivePower(): number {
    if (!this.accountData || !this.globalProps) return 0;

    return calculateHivePowerFromAssets(
      this.accountData.received_vesting_shares,
      this.globalProps.total_vesting_fund_hive,
      this.globalProps.total_vesting_shares
    );
  }

  private getEffectiveHivePower(): number {
    return Math.round(this.getHivePower() - this.getDelegatedHivePower() + this.getReceivedHivePower());
  }

  private getManaPercentage(manabar: { current_mana: string | number; last_update_time: number }): string {
    const now = Math.round(Date.now() / 1000);
    const elapsed = BigInt(now - manabar.last_update_time);
    const maxMana = BigInt(this.getEffectiveHivePower()) * BigInt(1000000); // Convert to VESTS

    // Mana regenerates at 20% per day
    const regenRate = BigInt(1 / (0.2 / (24 * 60 * 60))); // per second
    const calculatedMana = BigInt(manabar.current_mana) + BigInt((elapsed * maxMana) / regenRate);
    const currentMana = calculatedMana > maxMana ? maxMana : calculatedMana;
    const manaPercentage = Number((currentMana * BigInt(1000)) / maxMana) / 10;

    return manaPercentage > 100 ? "100" : String(manaPercentage.toFixed(1));
  }

  private parseJsonMetadata(jsonStr: string): Record<string, unknown> | null {
    try {
      return JSON.parse(jsonStr);
    } catch {
      return null;
    }
  }

  render() {
    if (this.loading) {
      return html`<div class="loading">Loading account data...</div>`;
    }

    if (this.error) {
      return html`<div class="error">${this.error}</div>`;
    }

    if (!this.accountData || !this.accountRestData) {
      return html`<div class="error">No account data available</div>`;
    }

    const account = this.accountData;
    const accountRestData = this.accountRestData;
    const jsonMetadata = this.parseJsonMetadata(account.json_metadata);
    const postingJsonMetadata = this.parseJsonMetadata(account.posting_json_metadata);

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
              <span class="reputation">${accountRestData.reputation}</span>
              • Joined ${formatHiveDate(account.created)}
            </p>
          </div>
        </div>

        <div class="account-stats">
          <div class="stat-item">
            <div class="stat-value">${account.post_count.toLocaleString()}</div>
            <div class="stat-label">Posts and comments</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${accountRestData.pending_claimed_accounts.toLocaleString()}</div>
            <div class="stat-label">Accounts to claim</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${accountRestData.ops_count.toLocaleString()}</div>
            <div class="stat-label">Operations count</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${account.curation_rewards.toLocaleString()}</div>
            <div class="stat-label">Curation Rewards</div>
          </div>
        </div>

        <div class="account-powers">
          <div class="power-item">
            <div class="power-value">${this.getHivePower().toLocaleString()}</div>
            <div class="power-label">HIVE Power</div>
          </div>
          <div class="power-item">
            <div class="power-value">${this.getDelegatedHivePower().toLocaleString()} HP</div>
            <div class="power-label">Delegated Out</div>
          </div>
          <div class="power-item">
            <div class="power-value">${this.getReceivedHivePower().toLocaleString()} HP</div>
            <div class="power-label">Delegated In</div>
          </div>
          <div class="power-item">
            <div class="power-value">${this.getEffectiveHivePower().toLocaleString()}</div>
            <div class="power-label">Effective HP</div>
          </div>
        </div>

        <div class="account-balances">
          <div class="balance-item">
            <span class="balance-label">HIVE Balance:</span>
            <span class="balance-value">${formatHiveAsset(account.balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">HBD Balance:</span>
            <span class="balance-value">${formatHiveAsset(account.hbd_balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">Savings (HIVE):</span>
            <span class="balance-value">${formatHiveAsset(account.savings_balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">Savings (HBD):</span>
            <span class="balance-value">${formatHiveAsset(account.savings_hbd_balance)}</span>
          </div>
          ${account.reward_hive_balance && parseFloat(account.reward_hive_balance.amount) > 0
            ? html`
                <div class="balance-item">
                  <span class="balance-label">Unclaimed HIVE:</span>
                  <span class="balance-value">${formatHiveAsset(account.reward_hive_balance)}</span>
                </div>
              `
            : ""}
          ${account.reward_hbd_balance && parseFloat(account.reward_hbd_balance.amount) > 0
            ? html`
                <div class="balance-item">
                  <span class="balance-label">Unclaimed HBD:</span>
                  <span class="balance-value">${formatHiveAsset(account.reward_hbd_balance)}</span>
                </div>
              `
            : ""}
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
          <div class="meta-item">
            <span class="meta-label">Last Active:</span>
            <span class="meta-value">${formatHiveDate(account.last_vote_time)}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Last Post:</span>
            <span class="meta-value">${formatHiveDate(account.last_root_post)}</span>
          </div>
        </div>

        ${jsonMetadata || postingJsonMetadata
          ? html`
              <div class="json-metadata">
                <details>
                  <summary>Account Metadata</summary>
                  ${jsonMetadata
                    ? html`
                        <div>
                          <strong>Profile Metadata:</strong>
                          <pre>${JSON.stringify(jsonMetadata, null, 2)}</pre>
                        </div>
                      `
                    : ""}
                  ${postingJsonMetadata
                    ? html`
                        <div>
                          <strong>Posting Metadata:</strong>
                          <pre>${JSON.stringify(postingJsonMetadata, null, 2)}</pre>
                        </div>
                      `
                    : ""}
                </details>
              </div>
            `
          : ""}
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
