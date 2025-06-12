import { html as d, css as x, LitElement as C } from "lit";
import { isValidHiveAccount as O, hiveApi as A, formatHiveCurrency as M, baseStyles as R, themeStyles as j } from "@hiveio/internal";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const f = globalThis, y = f.ShadowRoot && (f.ShadyCSS === void 0 || f.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, P = Symbol(), $ = /* @__PURE__ */ new WeakMap();
let k = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== P) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (y && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = $.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && $.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const T = (r) => new k(typeof r == "string" ? r : r + "", void 0, P), L = (r, t) => {
  if (y) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = f.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, r.appendChild(s);
  }
}, _ = y ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return T(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: D, defineProperty: I, getOwnPropertyDescriptor: q, getOwnPropertyNames: B, getOwnPropertySymbols: N, getPrototypeOf: W } = Object, c = globalThis, E = c.trustedTypes, H = E ? E.emptyScript : "", g = c.reactiveElementPolyfillSupport, u = (r, t) => r, v = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? H : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, w = (r, t) => !D(r, t), S = { attribute: !0, type: String, converter: v, reflect: !1, useDefault: !1, hasChanged: w };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), c.litPropertyMetadata ?? (c.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class p extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = S) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && I(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: o } = q(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: i, set(n) {
      const a = i == null ? void 0 : i.call(this);
      o == null || o.call(this, n), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? S;
  }
  static _$Ei() {
    if (this.hasOwnProperty(u("elementProperties"))) return;
    const t = W(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(u("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(u("properties"))) {
      const e = this.properties, s = [...B(e), ...N(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(_(i));
    } else t !== void 0 && e.push(_(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return L(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$ET(t, e) {
    var o;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const n = (((o = s.converter) == null ? void 0 : o.toAttribute) !== void 0 ? s.converter : v).toAttribute(e, s.type);
      this._$Em = t, n == null ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o, n;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const a = s.getPropertyOptions(i), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((o = a.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? a.converter : v;
      this._$Em = i, this[i] = l.fromAttribute(e, a.type) ?? ((n = this._$Ej) == null ? void 0 : n.get(i)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    var i;
    if (t !== void 0) {
      const o = this.constructor, n = this[t];
      if (s ?? (s = o.getPropertyOptions(t)), !((s.hasChanged ?? w)(n, e) || s.useDefault && s.reflect && n === ((i = this._$Ej) == null ? void 0 : i.get(t)) && !this.hasAttribute(o._$Eu(t, s)))) return;
      this.C(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: s, reflect: i, wrapped: o }, n) {
    s && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || s || (e = void 0), this._$AL.set(t, e)), i === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, n] of this._$Ep) this[o] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, n] of i) {
        const { wrapped: a } = n, l = this[o];
        a !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, n, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var o;
        return (o = i.hostUpdate) == null ? void 0 : o.call(i);
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
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
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
p.elementStyles = [], p.shadowRootOptions = { mode: "open" }, p[u("elementProperties")] = /* @__PURE__ */ new Map(), p[u("finalized")] = /* @__PURE__ */ new Map(), g == null || g({ ReactiveElement: p }), (c.reactiveElementVersions ?? (c.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const V = { attribute: !0, type: String, converter: v, reflect: !1, hasChanged: w }, F = (r = V, t, e) => {
  const { kind: s, metadata: i } = e;
  let o = globalThis.litPropertyMetadata.get(i);
  if (o === void 0 && globalThis.litPropertyMetadata.set(i, o = /* @__PURE__ */ new Map()), s === "setter" && ((r = Object.create(r)).wrapped = !0), o.set(e.name, r), s === "accessor") {
    const { name: n } = e;
    return { set(a) {
      const l = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, l, r);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, r, a), a;
    } };
  }
  if (s === "setter") {
    const { name: n } = e;
    return function(a) {
      const l = this[n];
      t.call(this, a), this.requestUpdate(n, l, r);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function b(r) {
  return (t, e) => typeof e == "object" ? F(r, t, e) : ((s, i, o) => {
    const n = i.hasOwnProperty(o);
    return i.constructor.createProperty(o, s), n ? Object.getOwnPropertyDescriptor(i, o) : void 0;
  })(r, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function U(r) {
  return b({ ...r, state: !0, attribute: !1 });
}
var J = function(r, t, e, s) {
  var i = arguments.length, o = i < 3 ? t : s === null ? s = Object.getOwnPropertyDescriptor(t, e) : s, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(r, t, e, s);
  else for (var a = r.length - 1; a >= 0; a--) (n = r[a]) && (o = (i < 3 ? n(o) : i > 3 ? n(t, e, o) : n(t, e)) || o);
  return i > 3 && o && Object.defineProperty(t, e, o), o;
};
const K = () => b({ type: String, reflect: !0 });
function G(r) {
  class t extends r {
    constructor() {
      super(...arguments), this.theme = "light";
    }
  }
  return J([
    K()
  ], t.prototype, "theme", void 0), t;
}
var Q = Object.defineProperty, X = Object.getOwnPropertyDescriptor, m = (r, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? X(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (i = (s ? n(t, e, i) : n(i)) || i);
  return s && i && Q(t, e, i), i;
};
let h = class extends G(C) {
  constructor() {
    super(...arguments), this.account = "", this.witness = null, this.loading = !1, this.error = "";
  }
  async connectedCallback() {
    super.connectedCallback(), this.account && await this.loadWitness();
  }
  async updated(r) {
    r.has("account") && this.account && await this.loadWitness();
  }
  async loadWitness() {
    if (!O(this.account)) {
      this.error = "Invalid account name";
      return;
    }
    this.loading = !0, this.error = "";
    try {
      this.witness = await A.getWitnessByAccount(this.account);
    } catch (r) {
      this.error = r instanceof Error ? r.message : "Failed to load witness data";
    } finally {
      this.loading = !1;
    }
  }
  getProfileImageUrl(r) {
    return `https://images.hive.blog/u/${r}/avatar/medium`;
  }
  getInitials(r) {
    return r.substring(0, 2).toUpperCase();
  }
  render() {
    return this.loading ? d`<div class="loading">Loading witness data...</div>` : this.error ? d`<div class="error">${this.error}</div>` : this.witness ? d`
      <div class="witness-card">
        <div class="witness-header">
          <div class="witness-avatar">
            <img
              src="${this.getProfileImageUrl(this.witness.owner)}"
              alt="${this.witness.owner}"
              @error=${(r) => {
      var e;
      const t = r.target;
      t.style.display = "none", t.parentElement.textContent = this.getInitials(((e = this.witness) == null ? void 0 : e.owner) || "Unknown");
    }}
            />
          </div>
          <div class="witness-info">
            <h3>${this.witness.owner}</h3>
            <p>
              ${this.witness.url ? d`<a href="${this.witness.url}" target="_blank" rel="noopener" class="witness-url">
                    View Witness Page
                  </a>` : "No website provided"}
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
            <span class="prop-value">${M(this.witness.props.account_creation_fee)}</span>
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
    ` : d`<div class="error">No witness data available</div>`;
  }
};
h.styles = [
  R,
  j,
  x`
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
    `
];
m([
  b({ type: String, reflect: !0 })
], h.prototype, "account", 2);
m([
  U()
], h.prototype, "loading", 2);
m([
  U()
], h.prototype, "error", 2);
h = m([
  z("hive-witness")
], h);
export {
  h as HiveWitnessElement
};
//# sourceMappingURL=bundle.js.map
