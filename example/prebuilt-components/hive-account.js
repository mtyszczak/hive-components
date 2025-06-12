import { html as h, css as A, LitElement as U } from "lit";
import { isValidHiveAccount as C, hiveApi as R, calculateReputation as M, formatHiveDate as j, formatHiveCurrency as v, baseStyles as D, themeStyles as z } from "@hiveio/internal";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = (s) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(s, t);
  }) : customElements.define(s, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f = globalThis, y = f.ShadowRoot && (f.ShadyCSS === void 0 || f.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, x = Symbol(), E = /* @__PURE__ */ new WeakMap();
let H = class {
  constructor(t, e, a) {
    if (this._$cssResult$ = !0, a !== x) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (y && t === void 0) {
      const a = e !== void 0 && e.length === 1;
      a && (t = E.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), a && E.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const k = (s) => new H(typeof s == "string" ? s : s + "", void 0, x), L = (s, t) => {
  if (y) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const a = document.createElement("style"), i = f.litNonce;
    i !== void 0 && a.setAttribute("nonce", i), a.textContent = e.cssText, s.appendChild(a);
  }
}, S = y ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const a of t.cssRules) e += a.cssText;
  return k(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: I, defineProperty: V, getOwnPropertyDescriptor: q, getOwnPropertyNames: N, getOwnPropertySymbols: B, getPrototypeOf: F } = Object, l = globalThis, w = l.trustedTypes, J = w ? w.emptyScript : "", b = l.reactiveElementPolyfillSupport, p = (s, t) => s, m = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? J : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, $ = (s, t) => !I(s, t), P = { attribute: !0, type: String, converter: m, reflect: !1, useDefault: !1, hasChanged: $ };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), l.litPropertyMetadata ?? (l.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class u extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = P) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const a = Symbol(), i = this.getPropertyDescriptor(t, a, e);
      i !== void 0 && V(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, a) {
    const { get: i, set: r } = q(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: i, set(n) {
      const o = i == null ? void 0 : i.call(this);
      r == null || r.call(this, n), this.requestUpdate(t, o, a);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? P;
  }
  static _$Ei() {
    if (this.hasOwnProperty(p("elementProperties"))) return;
    const t = F(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(p("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(p("properties"))) {
      const e = this.properties, a = [...N(e), ...B(e)];
      for (const i of a) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [a, i] of e) this.elementProperties.set(a, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, a] of this.elementProperties) {
      const i = this._$Eu(e, a);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const a = new Set(t.flat(1 / 0).reverse());
      for (const i of a) e.unshift(S(i));
    } else t !== void 0 && e.push(S(t));
    return e;
  }
  static _$Eu(t, e) {
    const a = e.attribute;
    return a === !1 ? void 0 : typeof a == "string" ? a : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const a of e.keys()) this.hasOwnProperty(a) && (t.set(a, this[a]), delete this[a]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return L(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var a;
      return (a = e.hostConnected) == null ? void 0 : a.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var a;
      return (a = e.hostDisconnected) == null ? void 0 : a.call(e);
    });
  }
  attributeChangedCallback(t, e, a) {
    this._$AK(t, a);
  }
  _$ET(t, e) {
    var r;
    const a = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, a);
    if (i !== void 0 && a.reflect === !0) {
      const n = (((r = a.converter) == null ? void 0 : r.toAttribute) !== void 0 ? a.converter : m).toAttribute(e, a.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var r, n;
    const a = this.constructor, i = a._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = a.getPropertyOptions(i), c = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((r = o.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? o.converter : m;
      this._$Em = i, this[i] = c.fromAttribute(e, o.type) ?? ((n = this._$Ej) == null ? void 0 : n.get(i)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, a) {
    var i;
    if (t !== void 0) {
      const r = this.constructor, n = this[t];
      if (a ?? (a = r.getPropertyOptions(t)), !((a.hasChanged ?? $)(n, e) || a.useDefault && a.reflect && n === ((i = this._$Ej) == null ? void 0 : i.get(t)) && !this.hasAttribute(r._$Eu(t, a)))) return;
      this.C(t, e, a);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: a, reflect: i, wrapped: r }, n) {
    a && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), r !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || a || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var a;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, n] of i) {
        const { wrapped: o } = n, c = this[r];
        o !== !0 || this._$AL.has(r) || c === void 0 || this.C(r, void 0, n, c);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (a = this._$EO) == null || a.forEach((i) => {
        var r;
        return (r = i.hostUpdate) == null ? void 0 : r.call(i);
      }), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((a) => {
      var i;
      return (i = a.hostUpdated) == null ? void 0 : i.call(a);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, u[p("elementProperties")] = /* @__PURE__ */ new Map(), u[p("finalized")] = /* @__PURE__ */ new Map(), b == null || b({ ReactiveElement: u }), (l.reactiveElementVersions ?? (l.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = { attribute: !0, type: String, converter: m, reflect: !1, hasChanged: $ }, K = (s = W, t, e) => {
  const { kind: a, metadata: i } = e;
  let r = globalThis.litPropertyMetadata.get(i);
  if (r === void 0 && globalThis.litPropertyMetadata.set(i, r = /* @__PURE__ */ new Map()), a === "setter" && ((s = Object.create(s)).wrapped = !0), r.set(e.name, s), a === "accessor") {
    const { name: n } = e;
    return { set(o) {
      const c = t.get.call(this);
      t.set.call(this, o), this.requestUpdate(n, c, s);
    }, init(o) {
      return o !== void 0 && this.C(n, void 0, s, o), o;
    } };
  }
  if (a === "setter") {
    const { name: n } = e;
    return function(o) {
      const c = this[n];
      t.call(this, o), this.requestUpdate(n, c, s);
    };
  }
  throw Error("Unsupported decorator location: " + a);
};
function _(s) {
  return (t, e) => typeof e == "object" ? K(s, t, e) : ((a, i, r) => {
    const n = i.hasOwnProperty(r);
    return i.constructor.createProperty(r, a), n ? Object.getOwnPropertyDescriptor(i, r) : void 0;
  })(s, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function O(s) {
  return _({ ...s, state: !0, attribute: !1 });
}
var G = function(s, t, e, a) {
  var i = arguments.length, r = i < 3 ? t : a === null ? a = Object.getOwnPropertyDescriptor(t, e) : a, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") r = Reflect.decorate(s, t, e, a);
  else for (var o = s.length - 1; o >= 0; o--) (n = s[o]) && (r = (i < 3 ? n(r) : i > 3 ? n(t, e, r) : n(t, e)) || r);
  return i > 3 && r && Object.defineProperty(t, e, r), r;
};
const Q = () => _({ type: String, reflect: !0 });
function X(s) {
  class t extends s {
    constructor() {
      super(...arguments), this.theme = "light";
    }
  }
  return G([
    Q()
  ], t.prototype, "theme", void 0), t;
}
var Y = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, g = (s, t, e, a) => {
  for (var i = a > 1 ? void 0 : a ? Z(t, e) : t, r = s.length - 1, n; r >= 0; r--)
    (n = s[r]) && (i = (a ? n(t, e, i) : n(i)) || i);
  return a && i && Y(t, e, i), i;
};
let d = class extends X(U) {
  constructor() {
    super(...arguments), this.account = "", this.accountData = null, this.loading = !1, this.error = "";
  }
  async connectedCallback() {
    super.connectedCallback(), this.account && await this.loadAccount();
  }
  async updated(s) {
    s.has("account") && this.account && await this.loadAccount();
  }
  async loadAccount() {
    if (!C(this.account)) {
      this.error = "Invalid account name";
      return;
    }
    this.loading = !0, this.error = "";
    try {
      this.accountData = await R.getAccount(this.account), this.accountData || (this.error = "Account not found");
    } catch (s) {
      this.error = s instanceof Error ? s.message : "Failed to load account data";
    } finally {
      this.loading = !1;
    }
  }
  getProfileImageUrl(s) {
    return `https://images.hive.blog/u/${s}/avatar/medium`;
  }
  getInitials(s) {
    return s.substring(0, 2).toUpperCase();
  }
  getVestingHive(s) {
    const t = parseFloat(s.replace(" VESTS", ""));
    return Math.round(t / 1e6);
  }
  render() {
    if (this.loading)
      return h`<div class="loading">Loading account data...</div>`;
    if (this.error)
      return h`<div class="error">${this.error}</div>`;
    if (!this.accountData)
      return h`<div class="error">No account data available</div>`;
    const s = this.accountData, t = M(s.reputation);
    return h`
      <div class="account-card">
        <div class="account-header">
          <div class="account-avatar">
            <img
              src="${this.getProfileImageUrl(s.name)}"
              alt="${s.name}"
              @error=${(e) => {
      const a = e.target;
      a.style.display = "none", a.parentElement.textContent = this.getInitials(s.name);
    }}
            />
          </div>
          <div class="account-info">
            <h3>${s.name}</h3>
            <p>
              <!-- TODO: Add on REST API: <span class="reputation">${t}</span>
              • -->Joined ${j(s.created)}
            </p>
          </div>
        </div>

        <div class="account-stats">
          <div class="stat-item">
            <div class="stat-value">${s.post_count.toLocaleString()}</div>
            <div class="stat-label">Posts</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${(s.voting_power / 100).toFixed(2)}%</div>
            <div class="stat-label">Voting Power</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${s.lifetime_vote_count.toLocaleString()}</div>
            <div class="stat-label">Votes Cast</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">${this.getVestingHive(s.vesting_shares).toLocaleString()}</div>
            <div class="stat-label">HIVE Power</div>
          </div>
        </div>

        <div class="account-balances">
          <div class="balance-item">
            <span class="balance-label">HIVE Balance:</span>
            <span class="balance-value">${v(s.balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">HBD Balance:</span>
            <span class="balance-value">${v(s.hbd_balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">Savings (HIVE):</span>
            <span class="balance-value">${v(s.savings_balance)}</span>
          </div>
          <div class="balance-item">
            <span class="balance-label">Savings (HBD):</span>
            <span class="balance-value">${v(s.savings_hbd_balance)}</span>
          </div>
        </div>

        <div class="account-meta">
          <div class="meta-item">
            <span class="meta-label">Recovery Account:</span>
            <span class="meta-value">${s.recovery_account}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Witnesses Voted:</span>
            <span class="meta-value">${s.witnesses_voted_for}/30</span>
          </div>
          ${s.proxy ? h`
            <div class="meta-item">
              <span class="meta-label">Proxy:</span>
              <span class="meta-value">${s.proxy}</span>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }
};
d.styles = [
  D,
  z,
  A`
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
    `
];
g([
  _({ type: String, reflect: !0 })
], d.prototype, "account", 2);
g([
  O()
], d.prototype, "loading", 2);
g([
  O()
], d.prototype, "error", 2);
d = g([
  T("hive-account")
], d);
customElements.get("hive-account") || customElements.define("hive-account", d);
export {
  d as HiveAccountElement
};
//# sourceMappingURL=bundle.js.map
