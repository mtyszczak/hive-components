import { css as P, html as l, LitElement as k } from "lit";
import { baseStyles as E, themeStyles as S, parseHiveUrl as C, hiveApi as O, calculateReputation as W, formatHiveDate as G, renderPostContent as Q, truncateText as X, extractTags as Y, formatHiveCurrency as Z } from "@hiveio/internal";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const R = globalThis, T = R.ShadowRoot && (R.ShadyCSS === void 0 || R.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, V = Symbol(), q = /* @__PURE__ */ new WeakMap();
let H = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== V) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (T && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = q.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && q.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const tt = (s) => new H(typeof s == "string" ? s : s + "", void 0, V), et = (s, t) => {
  if (T) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = R.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, s.appendChild(r);
  }
}, F = T ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return tt(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: rt, defineProperty: ot, getOwnPropertyDescriptor: it, getOwnPropertyNames: st, getOwnPropertySymbols: nt, getPrototypeOf: at } = Object, v = globalThis, J = v.trustedTypes, lt = J ? J.emptyScript : "", M = v.reactiveElementPolyfillSupport, _ = (s, t) => s, L = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? lt : null;
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
} }, A = (s, t) => !rt(s, t), K = { attribute: !0, type: String, converter: L, reflect: !1, useDefault: !1, hasChanged: A };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), v.litPropertyMetadata ?? (v.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class x extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = K) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && ot(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: i } = it(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: o, set(n) {
      const a = o == null ? void 0 : o.call(this);
      i == null || i.call(this, n), this.requestUpdate(t, a, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? K;
  }
  static _$Ei() {
    if (this.hasOwnProperty(_("elementProperties"))) return;
    const t = at(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(_("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(_("properties"))) {
      const e = this.properties, r = [...st(e), ...nt(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(F(o));
    } else t !== void 0 && e.push(F(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return et(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var i;
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const n = (((i = r.converter) == null ? void 0 : i.toAttribute) !== void 0 ? r.converter : L).toAttribute(e, r.type);
      this._$Em = t, n == null ? this.removeAttribute(o) : this.setAttribute(o, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var i, n;
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const a = r.getPropertyOptions(o), f = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((i = a.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? a.converter : L;
      this._$Em = o, this[o] = f.fromAttribute(e, a.type) ?? ((n = this._$Ej) == null ? void 0 : n.get(o)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    var o;
    if (t !== void 0) {
      const i = this.constructor, n = this[t];
      if (r ?? (r = i.getPropertyOptions(t)), !((r.hasChanged ?? A)(n, e) || r.useDefault && r.reflect && n === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(i._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: o, wrapped: i }, n) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), i !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, n] of this._$Ep) this[i] = n;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [i, n] of o) {
        const { wrapped: a } = n, f = this[i];
        a !== !0 || this._$AL.has(i) || f === void 0 || this.C(i, void 0, n, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((o) => {
        var i;
        return (i = o.hostUpdate) == null ? void 0 : i.call(o);
      }), this.update(e)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
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
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[_("elementProperties")] = /* @__PURE__ */ new Map(), x[_("finalized")] = /* @__PURE__ */ new Map(), M == null || M({ ReactiveElement: x }), (v.reactiveElementVersions ?? (v.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = { attribute: !0, type: String, converter: L, reflect: !1, hasChanged: A }, ct = (s = ht, t, e) => {
  const { kind: r, metadata: o } = e;
  let i = globalThis.litPropertyMetadata.get(o);
  if (i === void 0 && globalThis.litPropertyMetadata.set(o, i = /* @__PURE__ */ new Map()), r === "setter" && ((s = Object.create(s)).wrapped = !0), i.set(e.name, s), r === "accessor") {
    const { name: n } = e;
    return { set(a) {
      const f = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, f, s);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, s, a), a;
    } };
  }
  if (r === "setter") {
    const { name: n } = e;
    return function(a) {
      const f = this[n];
      t.call(this, a), this.requestUpdate(n, f, s);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function h(s) {
  return (t, e) => typeof e == "object" ? ct(s, t, e) : ((r, o, i) => {
    const n = o.hasOwnProperty(i);
    return o.constructor.createProperty(i, r), n ? Object.getOwnPropertyDescriptor(o, i) : void 0;
  })(s, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function c(s) {
  return h({ ...s, state: !0, attribute: !1 });
}
var dt = function(s, t, e, r) {
  var o = arguments.length, i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(s, t, e, r);
  else for (var a = s.length - 1; a >= 0; a--) (n = s[a]) && (i = (o < 3 ? n(i) : o > 3 ? n(t, e, i) : n(t, e)) || i);
  return o > 3 && i && Object.defineProperty(t, e, i), i;
};
const pt = () => h({ type: String, reflect: !0 });
function U(s) {
  class t extends s {
    constructor() {
      super(...arguments), this.theme = "light";
    }
  }
  return dt([
    pt()
  ], t.prototype, "theme", void 0), t;
}
var w = function(s, t, e, r) {
  var o = arguments.length, i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(s, t, e, r);
  else for (var a = s.length - 1; a >= 0; a--) (n = s[a]) && (i = (o < 3 ? n(i) : o > 3 ? n(t, e, i) : n(t, e)) || i);
  return o > 3 && i && Object.defineProperty(t, e, i), i;
};
const z = class z extends U(k) {
  constructor() {
    super(...arguments), this.permlink = "", this.post = null, this.showTitle = !0, this.loading = !1, this.error = "", this.internalPost = null;
  }
  async connectedCallback() {
    super.connectedCallback(), this.permlink && !this.post && await this.loadPost();
  }
  async updated(t) {
    t.has("permlink") && this.permlink && !this.post && await this.loadPost();
  }
  async loadPost() {
    const t = C(this.permlink);
    if (!t) {
      this.error = "Invalid permlink format. Use @author/permlink";
      return;
    }
    this.loading = !0, this.error = "";
    try {
      this.internalPost = await O.getContent(t.author, t.permlink), this.internalPost.author || (this.error = "Post not found", this.internalPost = null);
    } catch (e) {
      this.error = e instanceof Error ? e.message : "Failed to load post";
    } finally {
      this.loading = !1;
    }
  }
  getInitials(t) {
    return t.substring(0, 2).toUpperCase();
  }
  getProfileImageUrl(t) {
    return `https://images.hive.blog/u/${t}/avatar/medium`;
  }
  render() {
    if (this.loading)
      return l`<div class="loading">Loading post header...</div>`;
    if (this.error)
      return l`<div class="error">${this.error}</div>`;
    const t = this.post || this.internalPost;
    if (!t)
      return l``;
    const e = W(t.author_reputation);
    return l`
      <div class="author-info">
        <div class="author-avatar">
          <img
            src="${this.getProfileImageUrl(t.author)}"
            alt="${t.author}"
            @error=${(r) => {
      const o = r.target;
      o.style.display = "none", o.parentElement.textContent = this.getInitials(t.author);
    }}
          />
        </div>
        <div class="author-details">
          <h4>@${t.author}</h4>
          <p class="author-meta">
            <span class="reputation">${e}</span>
            <span>${G(t.created)}</span>
          </p>
        </div>
      </div>

      ${this.showTitle && t.title ? l` <h2 class="post-title">${t.title}</h2> ` : ""}
    `;
  }
};
z.styles = [
  E,
  S,
  P`
      :host {
        display: block;
        padding: 1rem;
      }

      .author-info {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 0.5rem;
      }

      .author-avatar {
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

      .author-avatar img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .author-details h4 {
        margin: 0;
        font-size: 0.95rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        line-height: 1.2;
      }

      .author-meta {
        margin: 0.25rem 0 0 0;
        font-size: 0.8rem;
        color: var(--hive-on-surface-variant);
        display: flex;
        align-items: center;
        gap: 0.5rem;
        line-height: 1.2;
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

      .post-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--hive-on-surface);
        line-height: 1.4;
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
    `
];
let u = z;
w([
  h({ type: String, reflect: !0 })
], u.prototype, "permlink", void 0);
w([
  h({ type: Object })
], u.prototype, "post", void 0);
w([
  h({ type: Boolean, reflect: !0, attribute: "show-title" })
], u.prototype, "showTitle", void 0);
w([
  c()
], u.prototype, "loading", void 0);
w([
  c()
], u.prototype, "error", void 0);
w([
  c()
], u.prototype, "internalPost", void 0);
customElements.get("hive-post-header") || customElements.define("hive-post-header", u);
var b = function(s, t, e, r) {
  var o = arguments.length, i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(s, t, e, r);
  else for (var a = s.length - 1; a >= 0; a--) (n = s[a]) && (i = (o < 3 ? n(i) : o > 3 ? n(t, e, i) : n(t, e)) || i);
  return o > 3 && i && Object.defineProperty(t, e, i), i;
};
const D = class D extends U(k) {
  constructor() {
    super(...arguments), this.permlink = "", this.post = null, this.preview = !1, this.maxLength = 300, this.loading = !1, this.error = "", this.internalPost = null;
  }
  async connectedCallback() {
    super.connectedCallback(), this.permlink && !this.post && await this.loadPost();
  }
  async updated(t) {
    (t.has("permlink") && this.permlink && !this.post || t.has("preview") || t.has("maxLength")) && this.permlink && !this.post && await this.loadPost();
  }
  async loadPost() {
    const t = C(this.permlink);
    if (!t) {
      this.error = "Invalid permlink format. Use @author/permlink";
      return;
    }
    this.loading = !0, this.error = "";
    try {
      this.internalPost = await O.getContent(t.author, t.permlink), this.internalPost.author || (this.error = "Post not found", this.internalPost = null);
    } catch (e) {
      this.error = e instanceof Error ? e.message : "Failed to load post";
    } finally {
      this.loading = !1;
    }
  }
  renderPostBody(t) {
    let e = Q(t);
    return this.preview && (e = e.replace(/<[^>]+>/g, ""), e = X(e, this.maxLength)), e;
  }
  render() {
    if (this.loading)
      return l`<div class="loading">Loading post content...</div>`;
    if (this.error)
      return l`<div class="error">${this.error}</div>`;
    const t = this.post || this.internalPost;
    if (!t)
      return l``;
    const e = this.renderPostBody(t.body);
    return l`
      <div class="post-body" .innerHTML=${e}></div>
    `;
  }
};
D.styles = [
  E,
  S,
  P`
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
    `
];
let p = D;
b([
  h({ type: String, reflect: !0 })
], p.prototype, "permlink", void 0);
b([
  h({ type: Object })
], p.prototype, "post", void 0);
b([
  h({ type: Boolean, reflect: !0 })
], p.prototype, "preview", void 0);
b([
  h({ type: Number, reflect: !0, attribute: "max-length" })
], p.prototype, "maxLength", void 0);
b([
  c()
], p.prototype, "loading", void 0);
b([
  c()
], p.prototype, "error", void 0);
b([
  c()
], p.prototype, "internalPost", void 0);
customElements.get("hive-post-content") || customElements.define("hive-post-content", p);
var y = function(s, t, e, r) {
  var o = arguments.length, i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(s, t, e, r);
  else for (var a = s.length - 1; a >= 0; a--) (n = s[a]) && (i = (o < 3 ? n(i) : o > 3 ? n(t, e, i) : n(t, e)) || i);
  return o > 3 && i && Object.defineProperty(t, e, i), i;
};
const B = class B extends U(k) {
  constructor() {
    super(...arguments), this.permlink = "", this.post = null, this.showTags = !0, this.showPayout = !0, this.showLink = !0, this.loading = !1, this.error = "", this.internalPost = null;
  }
  async connectedCallback() {
    super.connectedCallback(), this.permlink && !this.post && await this.loadPost();
  }
  async updated(t) {
    t.has("permlink") && this.permlink && !this.post && await this.loadPost();
  }
  async loadPost() {
    const t = C(this.permlink);
    if (!t) {
      this.error = "Invalid permlink format. Use @author/permlink";
      return;
    }
    this.loading = !0, this.error = "";
    try {
      this.internalPost = await O.getContent(t.author, t.permlink), this.internalPost.author || (this.error = "Post not found", this.internalPost = null);
    } catch (e) {
      this.error = e instanceof Error ? e.message : "Failed to load post";
    } finally {
      this.loading = !1;
    }
  }
  render() {
    if (this.loading)
      return l`<div class="loading">Loading post footer...</div>`;
    if (this.error)
      return l`<div class="error">${this.error}</div>`;
    const t = this.post || this.internalPost;
    if (!t)
      return l``;
    const e = Y(t.json_metadata || "{}");
    return l`
      <footer class="post-footer">
        <div class="post-stats">
          <div class="stat-item">
            <span>❤️</span>
            <span>${t.net_votes || t.active_votes.length}</span>
          </div>
          <div class="stat-item">
            <span>💬</span>
            <span>${t.children}</span>
          </div>
          ${this.showLink ? l`
            <a href="https://hive.blog${t.url}" target="_blank" rel="noopener" class="post-url">
              View on Hive
            </a>
          ` : ""}
        </div>

        ${this.showPayout ? l`
          <div class="payout-info ${t.cashout_time === "1969-12-31T23:59:59" ? "paid-out" : "pending-payout"}">
            <div class="payout-value">
              ${Z(t.cashout_time === "1969-12-31T23:59:59" ? t.total_payout_value : t.pending_payout_value)}
            </div>
          </div>
        ` : ""}
      </footer>

      ${this.showTags && e.length > 0 ? l`
            <div class="post-tags">
              ${e.slice(0, 5).map((r) => l` <span class="tag">#${r}</span> `)}
            </div>
          ` : ""}
    `;
  }
};
B.styles = [
  E,
  S,
  P`
      :host {
        display: block;
      }

      .post-footer {
        padding: 1rem;
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        align-items: center;
        justify-content: space-between;
      }

      .post-stats {
        display: flex;
        gap: 1.25rem;
        align-items: center;
      }

      .stat-item {
        display: flex;
        align-items: center;
        gap: 0.35rem;
        font-size: 0.875rem;
        color: var(--hive-on-surface-variant);
        font-weight: 500;
        transition: color 0.2s ease;
      }

      .stat-item:hover {
        color: var(--hive-primary);
      }

      .stat-item span:first-child {
        font-size: 1rem;
      }

      .post-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        padding: 0 1rem 1rem;
      }

      .tag {
        background: var(--hive-surface-variant);
        color: var(--hive-on-surface-variant);
        padding: 0.25rem 0.5rem;
        border-radius: 12px;
        border: 1px solid var(--hive-border);
        font-size: 0.75rem;
        text-decoration: none;
      }

      .tag:hover {
        background: var(--hive-primary);
        color: white;
      }

      .payout-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
      }

      .payout-info.paid-out .payout-value {
        color: var(--hive-on-surface-variant);
        background: color-mix(in srgb, var(--hive-on-surface-variant) 10%, transparent);
        border: 1px solid color-mix(in srgb, var(--hive-on-surface-variant) 20%, transparent);
      }

      .payout-info.pending-payout .payout-value {
        color: var(--hive-success);
        background: color-mix(in srgb, var(--hive-success) 10%, transparent);
        border: 1px solid color-mix(in srgb, var(--hive-success) 20%, transparent);
      }

      .payout-value {
        font-weight: 700;
        font-size: 0.9rem;
        padding: 0.25rem 0.75rem;
        border-radius: 20px;
      }

      .post-url {
        color: var(--hive-primary);
        text-decoration: none;
        font-size: 0.875rem;
      }

      .post-url:hover {
        text-decoration: underline;
      }

      @media (max-width: 640px) {
        .post-footer {
          flex-direction: column;
          align-items: flex-start;
        }

        .payout-info {
          align-items: flex-start;
        }
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
    `
];
let d = B;
y([
  h({ type: String, reflect: !0 })
], d.prototype, "permlink", void 0);
y([
  h({ type: Object })
], d.prototype, "post", void 0);
y([
  h({ type: Boolean, reflect: !0, attribute: "show-tags" })
], d.prototype, "showTags", void 0);
y([
  h({ type: Boolean, reflect: !0, attribute: "show-payout" })
], d.prototype, "showPayout", void 0);
y([
  h({ type: Boolean, reflect: !0, attribute: "show-link" })
], d.prototype, "showLink", void 0);
y([
  c()
], d.prototype, "loading", void 0);
y([
  c()
], d.prototype, "error", void 0);
y([
  c()
], d.prototype, "internalPost", void 0);
customElements.get("hive-post-footer") || customElements.define("hive-post-footer", d);
var j = function(s, t, e, r) {
  var o = arguments.length, i = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, n;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(s, t, e, r);
  else for (var a = s.length - 1; a >= 0; a--) (n = s[a]) && (i = (o < 3 ? n(i) : o > 3 ? n(t, e, i) : n(t, e)) || i);
  return o > 3 && i && Object.defineProperty(t, e, i), i;
};
const N = class N extends U(k) {
  constructor() {
    super(...arguments), this.permlink = "", this.preview = !1, this.maxLength = 300, this.post = null, this.loading = !1, this.error = "";
  }
  async connectedCallback() {
    super.connectedCallback(), this.permlink && await this.loadPost();
  }
  async updated(t) {
    t.has("permlink") && this.permlink && await this.loadPost();
  }
  async loadPost() {
    const t = C(this.permlink);
    if (!t) {
      this.error = "Invalid permlink format. Use @author/permlink";
      return;
    }
    this.loading = !0, this.error = "";
    try {
      this.post = await O.getContent(t.author, t.permlink), this.post.author || (this.error = "Post not found", this.post = null);
    } catch (e) {
      this.error = e instanceof Error ? e.message : "Failed to load post";
    } finally {
      this.loading = !1;
    }
  }
  render() {
    return this.loading ? l`<div class="loading">Loading post...</div>` : this.error ? l`<div class="error">${this.error}</div>` : this.post ? l`
      <article class="post-card">
        <hive-post-header .theme=${this.theme} .post=${this.post}></hive-post-header>
        <hive-post-content .theme=${this.theme} .post=${this.post} ?preview=${this.preview} max-length=${this.maxLength}></hive-post-content>
        <hive-post-footer .theme=${this.theme} .post=${this.post}></hive-post-footer>
      </article>
    ` : l`<div class="error">No post data available</div>`;
  }
};
N.styles = [
  E,
  S,
  P`
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
    `
];
let g = N;
j([
  h({ type: String, reflect: !0 })
], g.prototype, "permlink", void 0);
j([
  h({ type: Boolean, reflect: !0 })
], g.prototype, "preview", void 0);
j([
  h({ type: Number, reflect: !0, attribute: "max-length" })
], g.prototype, "maxLength", void 0);
j([
  c()
], g.prototype, "loading", void 0);
j([
  c()
], g.prototype, "error", void 0);
customElements.get("hive-post") || customElements.define("hive-post", g);
var ut = Object.defineProperty, $ = (s, t, e, r) => {
  for (var o = void 0, i = s.length - 1, n; i >= 0; i--)
    (n = s[i]) && (o = n(t, e, o) || o);
  return o && ut(t, e, o), o;
};
const I = class I extends U(k) {
  constructor() {
    super(...arguments), this.permlink = "", this.maxDepth = 3, this.initialLimit = 10, this.comments = [], this.allComments = [], this.loading = !1, this.error = "", this.hasMore = !1;
  }
  async connectedCallback() {
    super.connectedCallback(), this.permlink && await this.loadComments();
  }
  async updated(t) {
    t.has("permlink") && this.permlink && (this.comments = [], this.allComments = [], await this.loadComments());
  }
  async loadComments() {
    const t = C(this.permlink);
    if (!t) {
      this.error = "Invalid permlink format. Use @author/permlink";
      return;
    }
    this.loading = !0, this.error = "";
    try {
      const r = (await O.getContentReplies(t.author, t.permlink)).sort((o, i) => i.net_votes !== o.net_votes ? i.net_votes - o.net_votes : new Date(o.created).getTime() - new Date(i.created).getTime());
      this.allComments = r, this.comments = r.slice(0, this.initialLimit), this.hasMore = r.length > this.initialLimit;
    } catch (e) {
      this.error = e instanceof Error ? e.message : "Failed to load comments";
    } finally {
      this.loading = !1;
    }
  }
  renderComment(t, e = 0) {
    return e > this.maxDepth ? l`` : l`
      <div class="comment ${e > 0 ? "nested-comment" : ""}">
        <hive-post-header
          .post=${t}
          .theme=${this.theme}
          .showTitle=${!1}>
        </hive-post-header>

        <hive-post-content
          .post=${t}
          .theme=${this.theme}
          .preview=${!1}>
        </hive-post-content>

        <hive-post-footer
          .post=${t}
          .theme=${this.theme}
          .showTags=${!1}
          .showLink=${!1}>
        </hive-post-footer>
      </div>
    `;
  }
  async loadMoreComments() {
    if (!(!this.hasMore || this.loading)) {
      this.loading = !0;
      try {
        const t = this.comments.length, e = this.initialLimit, r = Math.min(t + e, this.allComments.length);
        this.comments = this.allComments.slice(0, r), this.hasMore = r < this.allComments.length;
      } catch (t) {
        console.error("Failed to load more comments:", t);
      } finally {
        this.loading = !1;
      }
    }
  }
  render() {
    return this.loading ? l`<div class="loading">Loading comments...</div>` : this.error ? l`<div class="error">${this.error}</div>` : l`
      <div class="comments-container">
        <div class="comments-header">
          <h3 class="comments-title">Comments (${this.allComments.length})</h3>
        </div>

        ${this.comments.length === 0 ? l` <div class="no-comments">No comments yet. Be the first to comment!</div> ` : l`
              <div class="comments-list">${this.comments.map((t) => this.renderComment(t))}</div>

              ${this.hasMore ? l` <button class="load-more-button" @click=${this.loadMoreComments} ?disabled=${this.loading}>
                    ${this.loading ? "Loading..." : "Load More Comments"}
                  </button> ` : ""}
            `}
      </div>
    `;
  }
};
I.styles = [
  E,
  S,
  P`
      :host {
        display: block;
      }

      .comments-container {
        /* background: var(--hive-surface); */
        border: 1px solid var(--hive-border);
        border-radius: 8px;
        overflow: hidden;
      }

      .comments-header {
        padding: 1rem;
        border-bottom: 1px solid var(--hive-border);
        background: var(--hive-surface-variant);
      }

      .comments-title {
        margin: 0;
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--hive-on-surface);
      }

      .comments-list {
        overflow-y: auto;
      }

      .comment {
        border-bottom: 1px solid var(--hive-border);
        /* background: var(--hive-surface); */
      }

      .comment > hive-post-header {
        padding-bottom: 0;
      }

      .comment > hive-post-content {
        padding-top: 0;
        padding-bottom: 0;
      }

      .comment > hive-post-footer {
        padding-top: 0;
      }

      .comment:last-child {
        border-bottom: none;
      }

      .nested-comment {
        margin-left: 2rem;
        border-left: 2px solid var(--hive-border);
        background: var(--hive-surface-variant);
      }

      .load-more-button {
        padding: 1rem;
        text-align: center;
        background: var(--hive-surface-variant);
        border: none;
        cursor: pointer;
        width: 100%;
        color: var(--hive-primary);
        font-weight: 500;
        transition: background-color 0.2s ease;
      }

      .load-more-button:hover {
        background: var(--hive-border);
      }

      .load-more-button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
        box-shadow: none;
      }

      .no-comments {
        padding: 2rem;
        text-align: center;
        color: var(--hive-on-surface-variant);
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

      @media (max-width: 640px) {
        .nested-comment {
          margin-left: 1rem;
        }
      }
    `
];
let m = I;
$([
  h({ type: String, reflect: !0 })
], m.prototype, "permlink");
$([
  h({ type: Number, reflect: !0 })
], m.prototype, "maxDepth");
$([
  h({ type: Number, reflect: !0 })
], m.prototype, "initialLimit");
$([
  c()
], m.prototype, "loading");
$([
  c()
], m.prototype, "error");
$([
  c()
], m.prototype, "hasMore");
customElements.get("hive-comments") || customElements.define("hive-comments", m);
export {
  m as HiveCommentsElement
};
//# sourceMappingURL=bundle.js.map
