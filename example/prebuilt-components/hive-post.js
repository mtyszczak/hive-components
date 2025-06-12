import { css as E, html as l, LitElement as k } from "lit";
import { baseStyles as S, themeStyles as C, parseHiveUrl as U, hiveApi as O, calculateReputation as J, formatHiveDate as K, renderPostContent as V, truncateText as W, extractTags as G, formatHiveCurrency as Q } from "@hiveio/internal";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = globalThis, T = P.ShadowRoot && (P.ShadyCSS === void 0 || P.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, F = Symbol(), B = /* @__PURE__ */ new WeakMap();
let X = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== F) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (T && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = B.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && B.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Y = (s) => new X(typeof s == "string" ? s : s + "", void 0, F), Z = (s, t) => {
  if (T) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), r = P.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, s.appendChild(i);
  }
}, I = T ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return Y(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: H, defineProperty: tt, getOwnPropertyDescriptor: et, getOwnPropertyNames: rt, getOwnPropertySymbols: it, getPrototypeOf: st } = Object, m = globalThis, N = m.trustedTypes, ot = N ? N.emptyScript : "", j = m.reactiveElementPolyfillSupport, w = (s, t) => s, x = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? ot : null;
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
} }, L = (s, t) => !H(s, t), q = { attribute: !0, type: String, converter: x, reflect: !1, useDefault: !1, hasChanged: L };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class $ extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = q) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = Symbol(), r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && tt(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: r, set: o } = et(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get: r, set(a) {
      const n = r == null ? void 0 : r.call(this);
      o == null || o.call(this, a), this.requestUpdate(t, n, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? q;
  }
  static _$Ei() {
    if (this.hasOwnProperty(w("elementProperties"))) return;
    const t = st(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(w("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(w("properties"))) {
      const e = this.properties, i = [...rt(e), ...it(e)];
      for (const r of i) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, r] of e) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const r = this._$Eu(e, i);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i) e.unshift(I(r));
    } else t !== void 0 && e.push(I(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Z(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostConnected) == null ? void 0 : i.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var i;
      return (i = e.hostDisconnected) == null ? void 0 : i.call(e);
    });
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    var o;
    const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const a = (((o = i.converter) == null ? void 0 : o.toAttribute) !== void 0 ? i.converter : x).toAttribute(e, i.type);
      this._$Em = t, a == null ? this.removeAttribute(r) : this.setAttribute(r, a), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var o, a;
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const n = i.getPropertyOptions(r), f = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((o = n.converter) == null ? void 0 : o.fromAttribute) !== void 0 ? n.converter : x;
      this._$Em = r, this[r] = f.fromAttribute(e, n.type) ?? ((a = this._$Ej) == null ? void 0 : a.get(r)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, i) {
    var r;
    if (t !== void 0) {
      const o = this.constructor, a = this[t];
      if (i ?? (i = o.getPropertyOptions(t)), !((i.hasChanged ?? L)(a, e) || i.useDefault && i.reflect && a === ((r = this._$Ej) == null ? void 0 : r.get(t)) && !this.hasAttribute(o._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: r, wrapped: o }, a) {
    i && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, a ?? e ?? this[t]), o !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), r === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [o, a] of this._$Ep) this[o] = a;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [o, a] of r) {
        const { wrapped: n } = a, f = this[o];
        n !== !0 || this._$AL.has(o) || f === void 0 || this.C(o, void 0, a, f);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (i = this._$EO) == null || i.forEach((r) => {
        var o;
        return (o = r.hostUpdate) == null ? void 0 : o.call(r);
      }), this.update(e)) : this._$EM();
    } catch (r) {
      throw t = !1, this._$EM(), r;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((i) => {
      var r;
      return (r = i.hostUpdated) == null ? void 0 : r.call(i);
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
$.elementStyles = [], $.shadowRootOptions = { mode: "open" }, $[w("elementProperties")] = /* @__PURE__ */ new Map(), $[w("finalized")] = /* @__PURE__ */ new Map(), j == null || j({ ReactiveElement: $ }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const at = { attribute: !0, type: String, converter: x, reflect: !1, hasChanged: L }, nt = (s = at, t, e) => {
  const { kind: i, metadata: r } = e;
  let o = globalThis.litPropertyMetadata.get(r);
  if (o === void 0 && globalThis.litPropertyMetadata.set(r, o = /* @__PURE__ */ new Map()), i === "setter" && ((s = Object.create(s)).wrapped = !0), o.set(e.name, s), i === "accessor") {
    const { name: a } = e;
    return { set(n) {
      const f = t.get.call(this);
      t.set.call(this, n), this.requestUpdate(a, f, s);
    }, init(n) {
      return n !== void 0 && this.C(a, void 0, s, n), n;
    } };
  }
  if (i === "setter") {
    const { name: a } = e;
    return function(n) {
      const f = this[a];
      t.call(this, n), this.requestUpdate(a, f, s);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function h(s) {
  return (t, e) => typeof e == "object" ? nt(s, t, e) : ((i, r, o) => {
    const a = r.hasOwnProperty(o);
    return r.constructor.createProperty(o, i), a ? Object.getOwnPropertyDescriptor(r, o) : void 0;
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
var lt = function(s, t, e, i) {
  var r = arguments.length, o = r < 3 ? t : i === null ? i = Object.getOwnPropertyDescriptor(t, e) : i, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") o = Reflect.decorate(s, t, e, i);
  else for (var n = s.length - 1; n >= 0; n--) (a = s[n]) && (o = (r < 3 ? a(o) : r > 3 ? a(t, e, o) : a(t, e)) || o);
  return r > 3 && o && Object.defineProperty(t, e, o), o;
};
const ht = () => h({ type: String, reflect: !0 });
function A(s) {
  class t extends s {
    constructor() {
      super(...arguments), this.theme = "light";
    }
  }
  return lt([
    ht()
  ], t.prototype, "theme", void 0), t;
}
var pt = Object.defineProperty, b = (s, t, e, i) => {
  for (var r = void 0, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (r = a(t, e, r) || r);
  return r && pt(t, e, r), r;
};
const M = class M extends A(k) {
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
    const t = U(this.permlink);
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
    const e = J(t.author_reputation);
    return l`
      <div class="author-info">
        <div class="author-avatar">
          <img
            src="${this.getProfileImageUrl(t.author)}"
            alt="${t.author}"
            @error=${(i) => {
      const r = i.target;
      r.style.display = "none", r.parentElement.textContent = this.getInitials(t.author);
    }}
          />
        </div>
        <div class="author-details">
          <h4>@${t.author}</h4>
          <p class="author-meta">
            <span class="reputation">${e}</span>
            <span>${K(t.created)}</span>
          </p>
        </div>
      </div>

      ${this.showTitle && t.title ? l` <h2 class="post-title">${t.title}</h2> ` : ""}
    `;
  }
};
M.styles = [
  S,
  C,
  E`
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
let u = M;
b([
  h({ type: String, reflect: !0 })
], u.prototype, "permlink");
b([
  h({ type: Object })
], u.prototype, "post");
b([
  h({ type: Boolean, reflect: !0, attribute: "show-title" })
], u.prototype, "showTitle");
b([
  c()
], u.prototype, "loading");
b([
  c()
], u.prototype, "error");
b([
  c()
], u.prototype, "internalPost");
customElements.get("hive-post-header") || customElements.define("hive-post-header", u);
var ct = Object.defineProperty, y = (s, t, e, i) => {
  for (var r = void 0, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (r = a(t, e, r) || r);
  return r && ct(t, e, r), r;
};
const z = class z extends A(k) {
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
    const t = U(this.permlink);
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
    let e = V(t);
    return this.preview && (e = e.replace(/<[^>]+>/g, ""), e = W(e, this.maxLength)), e;
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
z.styles = [
  S,
  C,
  E`
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
let d = z;
y([
  h({ type: String, reflect: !0 })
], d.prototype, "permlink");
y([
  h({ type: Object })
], d.prototype, "post");
y([
  h({ type: Boolean, reflect: !0 })
], d.prototype, "preview");
y([
  h({ type: Number, reflect: !0, attribute: "max-length" })
], d.prototype, "maxLength");
y([
  c()
], d.prototype, "loading");
y([
  c()
], d.prototype, "error");
y([
  c()
], d.prototype, "internalPost");
customElements.get("hive-post-content") || customElements.define("hive-post-content", d);
var dt = Object.defineProperty, g = (s, t, e, i) => {
  for (var r = void 0, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (r = a(t, e, r) || r);
  return r && dt(t, e, r), r;
};
const R = class R extends A(k) {
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
    const t = U(this.permlink);
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
    const e = G(t.json_metadata || "{}");
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
              ${Q(t.cashout_time === "1969-12-31T23:59:59" ? t.total_payout_value : t.pending_payout_value)}
            </div>
          </div>
        ` : ""}
      </footer>

      ${this.showTags && e.length > 0 ? l`
            <div class="post-tags">
              ${e.slice(0, 5).map((i) => l` <span class="tag">#${i}</span> `)}
            </div>
          ` : ""}
    `;
  }
};
R.styles = [
  S,
  C,
  E`
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
let p = R;
g([
  h({ type: String, reflect: !0 })
], p.prototype, "permlink");
g([
  h({ type: Object })
], p.prototype, "post");
g([
  h({ type: Boolean, reflect: !0, attribute: "show-tags" })
], p.prototype, "showTags");
g([
  h({ type: Boolean, reflect: !0, attribute: "show-payout" })
], p.prototype, "showPayout");
g([
  h({ type: Boolean, reflect: !0, attribute: "show-link" })
], p.prototype, "showLink");
g([
  c()
], p.prototype, "loading");
g([
  c()
], p.prototype, "error");
g([
  c()
], p.prototype, "internalPost");
customElements.get("hive-post-footer") || customElements.define("hive-post-footer", p);
var ut = Object.defineProperty, _ = (s, t, e, i) => {
  for (var r = void 0, o = s.length - 1, a; o >= 0; o--)
    (a = s[o]) && (r = a(t, e, r) || r);
  return r && ut(t, e, r), r;
};
const D = class D extends A(k) {
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
    const t = U(this.permlink);
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
D.styles = [
  S,
  C,
  E`
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
let v = D;
_([
  h({ type: String, reflect: !0 })
], v.prototype, "permlink");
_([
  h({ type: Boolean, reflect: !0 })
], v.prototype, "preview");
_([
  h({ type: Number, reflect: !0, attribute: "max-length" })
], v.prototype, "maxLength");
_([
  c()
], v.prototype, "loading");
_([
  c()
], v.prototype, "error");
customElements.get("hive-post") || customElements.define("hive-post", v);
export {
  d as HivePostContentElement,
  v as HivePostElement,
  p as HivePostFooterElement,
  u as HivePostHeaderElement
};
//# sourceMappingURL=bundle.js.map
