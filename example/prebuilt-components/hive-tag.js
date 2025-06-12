import { css as _, html as l, LitElement as k } from "lit";
import { baseStyles as E, themeStyles as S, parseHiveUrl as L, hiveApi as O, calculateReputation as G, formatHiveDate as H, renderPostContent as J, truncateText as K, extractTags as Q, formatHiveCurrency as X } from "@hiveio/internal";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = (i) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(i, t);
  }) : customElements.define(i, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const j = globalThis, M = j.ShadowRoot && (j.ShadyCSS === void 0 || j.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, V = Symbol(), q = /* @__PURE__ */ new WeakMap();
let Z = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== V) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (M && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = q.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && q.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const tt = (i) => new Z(typeof i == "string" ? i : i + "", void 0, V), et = (i, t) => {
  if (M) i.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = j.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, i.appendChild(r);
  }
}, I = M ? (i) => i : (i) => i instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return tt(e);
})(i) : i;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: rt, defineProperty: it, getOwnPropertyDescriptor: ot, getOwnPropertyNames: st, getOwnPropertySymbols: at, getPrototypeOf: nt } = Object, m = globalThis, W = m.trustedTypes, lt = W ? W.emptyScript : "", R = m.reactiveElementPolyfillSupport, P = (i, t) => i, T = { toAttribute(i, t) {
  switch (t) {
    case Boolean:
      i = i ? lt : null;
      break;
    case Object:
    case Array:
      i = i == null ? i : JSON.stringify(i);
  }
  return i;
}, fromAttribute(i, t) {
  let e = i;
  switch (t) {
    case Boolean:
      e = i !== null;
      break;
    case Number:
      e = i === null ? null : Number(i);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(i);
      } catch {
        e = null;
      }
  }
  return e;
} }, A = (i, t) => !rt(i, t), F = { attribute: !0, type: String, converter: T, reflect: !1, useDefault: !1, hasChanged: A };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), m.litPropertyMetadata ?? (m.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class x extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = F) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && it(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: s } = ot(this.prototype, t) ?? { get() {
      return this[e];
    }, set(a) {
      this[e] = a;
    } };
    return { get: o, set(a) {
      const n = o == null ? void 0 : o.call(this);
      s == null || s.call(this, a), this.requestUpdate(t, n, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? F;
  }
  static _$Ei() {
    if (this.hasOwnProperty(P("elementProperties"))) return;
    const t = nt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(P("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(P("properties"))) {
      const e = this.properties, r = [...st(e), ...at(e)];
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
      for (const o of r) e.unshift(I(o));
    } else t !== void 0 && e.push(I(t));
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
    var s;
    const r = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, r);
    if (o !== void 0 && r.reflect === !0) {
      const a = (((s = r.converter) == null ? void 0 : s.toAttribute) !== void 0 ? r.converter : T).toAttribute(e, r.type);
      this._$Em = t, a == null ? this.removeAttribute(o) : this.setAttribute(o, a), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var s, a;
    const r = this.constructor, o = r._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const n = r.getPropertyOptions(o), v = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((s = n.converter) == null ? void 0 : s.fromAttribute) !== void 0 ? n.converter : T;
      this._$Em = o, this[o] = v.fromAttribute(e, n.type) ?? ((a = this._$Ej) == null ? void 0 : a.get(o)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    var o;
    if (t !== void 0) {
      const s = this.constructor, a = this[t];
      if (r ?? (r = s.getPropertyOptions(t)), !((r.hasChanged ?? A)(a, e) || r.useDefault && r.reflect && a === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(s._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: o, wrapped: s }, a) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, a ?? e ?? this[t]), s !== !0 || a !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [s, a] of this._$Ep) this[s] = a;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [s, a] of o) {
        const { wrapped: n } = a, v = this[s];
        n !== !0 || this._$AL.has(s) || v === void 0 || this.C(s, void 0, a, v);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((o) => {
        var s;
        return (s = o.hostUpdate) == null ? void 0 : s.call(o);
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
x.elementStyles = [], x.shadowRootOptions = { mode: "open" }, x[P("elementProperties")] = /* @__PURE__ */ new Map(), x[P("finalized")] = /* @__PURE__ */ new Map(), R == null || R({ ReactiveElement: x }), (m.reactiveElementVersions ?? (m.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ht = { attribute: !0, type: String, converter: T, reflect: !1, hasChanged: A }, pt = (i = ht, t, e) => {
  const { kind: r, metadata: o } = e;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), r === "setter" && ((i = Object.create(i)).wrapped = !0), s.set(e.name, i), r === "accessor") {
    const { name: a } = e;
    return { set(n) {
      const v = t.get.call(this);
      t.set.call(this, n), this.requestUpdate(a, v, i);
    }, init(n) {
      return n !== void 0 && this.C(a, void 0, i, n), n;
    } };
  }
  if (r === "setter") {
    const { name: a } = e;
    return function(n) {
      const v = this[a];
      t.call(this, n), this.requestUpdate(a, v, i);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function h(i) {
  return (t, e) => typeof e == "object" ? pt(i, t, e) : ((r, o, s) => {
    const a = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, r), a ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(i, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function p(i) {
  return h({ ...i, state: !0, attribute: !1 });
}
var ct = function(i, t, e, r) {
  var o = arguments.length, s = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(i, t, e, r);
  else for (var n = i.length - 1; n >= 0; n--) (a = i[n]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, e, s) : a(t, e)) || s);
  return o > 3 && s && Object.defineProperty(t, e, s), s;
};
const dt = () => h({ type: String, reflect: !0 });
function C(i) {
  class t extends i {
    constructor() {
      super(...arguments), this.theme = "light";
    }
  }
  return ct([
    dt()
  ], t.prototype, "theme", void 0), t;
}
var $ = function(i, t, e, r) {
  var o = arguments.length, s = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(i, t, e, r);
  else for (var n = i.length - 1; n >= 0; n--) (a = i[n]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, e, s) : a(t, e)) || s);
  return o > 3 && s && Object.defineProperty(t, e, s), s;
};
const z = class z extends C(k) {
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
    const t = L(this.permlink);
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
    const e = G(t.author_reputation);
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
            <span>${H(t.created)}</span>
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
  _`
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
let f = z;
$([
  h({ type: String, reflect: !0 })
], f.prototype, "permlink", void 0);
$([
  h({ type: Object })
], f.prototype, "post", void 0);
$([
  h({ type: Boolean, reflect: !0, attribute: "show-title" })
], f.prototype, "showTitle", void 0);
$([
  p()
], f.prototype, "loading", void 0);
$([
  p()
], f.prototype, "error", void 0);
$([
  p()
], f.prototype, "internalPost", void 0);
customElements.get("hive-post-header") || customElements.define("hive-post-header", f);
var w = function(i, t, e, r) {
  var o = arguments.length, s = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(i, t, e, r);
  else for (var n = i.length - 1; n >= 0; n--) (a = i[n]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, e, s) : a(t, e)) || s);
  return o > 3 && s && Object.defineProperty(t, e, s), s;
};
const D = class D extends C(k) {
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
    const t = L(this.permlink);
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
    let e = J(t);
    return this.preview && (e = e.replace(/<[^>]+>/g, ""), e = K(e, this.maxLength)), e;
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
  _`
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
let d = D;
w([
  h({ type: String, reflect: !0 })
], d.prototype, "permlink", void 0);
w([
  h({ type: Object })
], d.prototype, "post", void 0);
w([
  h({ type: Boolean, reflect: !0 })
], d.prototype, "preview", void 0);
w([
  h({ type: Number, reflect: !0, attribute: "max-length" })
], d.prototype, "maxLength", void 0);
w([
  p()
], d.prototype, "loading", void 0);
w([
  p()
], d.prototype, "error", void 0);
w([
  p()
], d.prototype, "internalPost", void 0);
customElements.get("hive-post-content") || customElements.define("hive-post-content", d);
var y = function(i, t, e, r) {
  var o = arguments.length, s = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(i, t, e, r);
  else for (var n = i.length - 1; n >= 0; n--) (a = i[n]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, e, s) : a(t, e)) || s);
  return o > 3 && s && Object.defineProperty(t, e, s), s;
};
const N = class N extends C(k) {
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
    const t = L(this.permlink);
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
    const e = Q(t.json_metadata || "{}");
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
              ${X(t.cashout_time === "1969-12-31T23:59:59" ? t.total_payout_value : t.pending_payout_value)}
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
N.styles = [
  E,
  S,
  _`
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
let c = N;
y([
  h({ type: String, reflect: !0 })
], c.prototype, "permlink", void 0);
y([
  h({ type: Object })
], c.prototype, "post", void 0);
y([
  h({ type: Boolean, reflect: !0, attribute: "show-tags" })
], c.prototype, "showTags", void 0);
y([
  h({ type: Boolean, reflect: !0, attribute: "show-payout" })
], c.prototype, "showPayout", void 0);
y([
  h({ type: Boolean, reflect: !0, attribute: "show-link" })
], c.prototype, "showLink", void 0);
y([
  p()
], c.prototype, "loading", void 0);
y([
  p()
], c.prototype, "error", void 0);
y([
  p()
], c.prototype, "internalPost", void 0);
customElements.get("hive-post-footer") || customElements.define("hive-post-footer", c);
var U = function(i, t, e, r) {
  var o = arguments.length, s = o < 3 ? t : r === null ? r = Object.getOwnPropertyDescriptor(t, e) : r, a;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") s = Reflect.decorate(i, t, e, r);
  else for (var n = i.length - 1; n >= 0; n--) (a = i[n]) && (s = (o < 3 ? a(s) : o > 3 ? a(t, e, s) : a(t, e)) || s);
  return o > 3 && s && Object.defineProperty(t, e, s), s;
};
const B = class B extends C(k) {
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
    const t = L(this.permlink);
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
B.styles = [
  E,
  S,
  _`
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
let g = B;
U([
  h({ type: String, reflect: !0 })
], g.prototype, "permlink", void 0);
U([
  h({ type: Boolean, reflect: !0 })
], g.prototype, "preview", void 0);
U([
  h({ type: Number, reflect: !0, attribute: "max-length" })
], g.prototype, "maxLength", void 0);
U([
  p()
], g.prototype, "loading", void 0);
U([
  p()
], g.prototype, "error", void 0);
customElements.get("hive-post") || customElements.define("hive-post", g);
var ut = Object.defineProperty, ft = Object.getOwnPropertyDescriptor, b = (i, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? ft(t, e) : t, s = i.length - 1, a; s >= 0; s--)
    (a = i[s]) && (o = (r ? a(t, e, o) : a(o)) || o);
  return r && o && ut(t, e, o), o;
};
let u = class extends C(k) {
  constructor() {
    super(...arguments), this.tag = "", this.postsPerPage = 10, this.urlTemplate = "", this.previewLength = 150, this.posts = [], this.loading = !1, this.error = "", this.hasMore = !0;
  }
  async connectedCallback() {
    super.connectedCallback(), this.tag && await this.loadPosts();
  }
  async updated(i) {
    i.has("tag") && this.tag && (this.posts = [], await this.loadPosts());
  }
  async loadPosts(i = !1) {
    if (!this.tag) {
      this.error = "Tag is required";
      return;
    }
    this.loading = !0, i || (this.error = "", this.posts = []);
    try {
      let t, e;
      const r = this.posts.length || 0;
      if (i && r > 0) {
        const n = this.posts[r - 1];
        n && (t = n.author, e = n.permlink);
      }
      const o = this.postsPerPage + 1, s = await O.getDiscussionsByTag(this.tag, o, t, e);
      this.hasMore = s.length >= this.postsPerPage;
      const a = s.slice(0, this.postsPerPage);
      i ? this.posts = [...this.posts, ...a] : this.posts = a;
    } catch (t) {
      this.error = t instanceof Error ? t.message : "Failed to load posts";
    } finally {
      this.loading = !1;
    }
  }
  async loadMorePosts() {
    !this.hasMore || this.loading || await this.loadPosts(!0);
  }
  getPostUrl(i) {
    return this.urlTemplate ? this.urlTemplate.replace("{permlink}", i.permlink).replace("{author}", i.author) : i.url || `/@${i.author}/${i.permlink}`;
  }
  handlePostClick(i) {
    const t = this.getPostUrl(i);
    this.dispatchEvent(
      new CustomEvent("hive-post-click", {
        detail: {
          post: i,
          url: t,
          author: i.author,
          permlink: i.permlink
        },
        bubbles: !0
      })
    ), this.urlTemplate && t.startsWith("/") ? (window.history.pushState({}, "", t), window.dispatchEvent(new PopStateEvent("popstate"))) : t.startsWith("http") && window.open(t, "_blank", "noopener,noreferrer");
  }
  render() {
    return this.loading && this.posts.length === 0 ? l`<div class="loading">Loading posts for #${this.tag}...</div>` : this.error ? l`<div class="error">${this.error}</div>` : l`
      <div class="tag-container">
        <div class="tag-header">
          <h2 class="tag-title">
            <span class="tag-badge">#${this.tag}</span>
            <!-- <span>${this.posts.length} post${this.posts.length !== 1 ? "s" : ""} loaded</span> -->
          </h2>
        </div>

        ${this.posts.length === 0 ? l` <div class="no-posts">No posts found for tag "${this.tag}"</div> ` : l`
              <div class="posts-list">
                ${this.posts.map((i) => {
      var r, o;
      const t = K(J(i.body, {
        breaks: !0
      }).replace(/<[^>]*>/g, "").replace(/\n/g, " "), this.previewLength);
      let e = "";
      try {
        e = (o = (r = JSON.parse(i.json_metadata)) == null ? void 0 : r.image) == null ? void 0 : o[0];
      } catch {
      }
      return l`
                    <article class="post-item" @click=${() => this.handlePostClick(i)}>
                      <hive-post-header
                        .post=${i}
                        .theme=${this.theme}
                        .showTitle=${!1}>
                      </hive-post-header>

                      <div class="post-content">
                        <img class="preview-img" src="${e}" alt="Post image" loading="lazy" />
                        <div class="post-excerpt">
                          <h2 class="post-title">${i.title}</h2>
                          <p class="post-preview" .innerHTML=${t}></p>
                        </div>
                      </div>

                      <hive-post-footer
                        .post=${i}
                        .theme=${this.theme}
                        .showTags=${!1}
                        .showLink=${!1}>
                      </hive-post-footer>
                    </article>
                  `;
    })}
              </div>

              ${this.hasMore ? l`
                    <button class="load-more-button" @click=${this.loadMorePosts} ?disabled=${this.loading}>
                      ${this.loading ? "Loading..." : "Load More Posts"}
                    </button>
                  ` : ""}
            `}
      </div>
    `;
  }
};
u.styles = [
  E,
  S,
  _`
      :host {
        display: block;
      }

      .tag-container {
        /* background: var(--hive-surface); */
        border: 1px solid var(--hive-border);
        border-radius: 8px;
        overflow: hidden;
      }

      .tag-header {
        padding: 1rem;
        background: var(--hive-surface-variant);
        border-bottom: 1px solid var(--hive-border);
      }

      .tag-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .tag-badge {
        background: var(--hive-primary);
        color: white;
        padding: 0.25rem 0.75rem;
        border-radius: 16px;
        font-size: 0.875rem;
        font-weight: 500;
      }

      .posts-list {
        display: grid;
        gap: 0;
      }

      .post-item {
        padding: 1rem;
        border-bottom: 1px solid var(--hive-border);
        transition: background-color 0.2s ease;
        cursor: pointer;
        text-decoration: none;
        color: inherit;
      }

      .post-item:hover {
        background: var(--hive-surface-variant);
      }

      .post-item:last-child {
        border-bottom: none;
      }

      .post-preview {
        margin: 0 0 1rem 0;
        color: var(--hive-on-surface-variant);
        line-height: 1.6;
        font-size: 0.9rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }

      .post-preview img {
        width: auto;
        max-width: 50%;
        height: auto;
        max-height: none;
        margin-bottom: 10px;
      }

      .post-preview a {
        color: var(--hive-primary);
        text-decoration: none;
        transition: color 0.2s ease;
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

      .no-posts {
        padding: 2rem;
        text-align: center;
        color: var(--hive-on-surface-variant);
      }

      .loading {
        text-align: center;
        padding: 2rem;
        color: var(--hive-on-surface-variant);
      }

      .post-item > hive-post-header {
        padding-bottom: 0;
      }
      .post-item > hive-post-footer {
        padding-top: 0;
      }

      .preview-img {
        width: 200px;
        height: 150px;
        object-fit: cover;
        border-radius: 4px;
      }

      .post-content {
        padding: 1rem;
        display: flex;
        gap: 1rem;
      }
      .post-excerpt {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: break-spaces;
      }
      .post-title {
        margin: 0 0 0.5rem 0;
        font-size: 1.125rem;
        font-weight: 600;
        color: var(--hive-on-surface);
        line-height: 1.4;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: break-spaces;
      }

      .error {
        text-align: center;
        padding: 2rem;
        color: var(--hive-error);
        background: color-mix(in srgb, var(--hive-error) 10%, transparent);
      }

      @media (max-width: 640px) {
        .post-preview img {
          max-width: 100%;
        }
      }
    `
];
b([
  h({ type: String, reflect: !0 })
], u.prototype, "tag", 2);
b([
  h({ type: Number, reflect: !0, attribute: "posts-per-page" })
], u.prototype, "postsPerPage", 2);
b([
  h({ type: String, reflect: !0, attribute: "url-template" })
], u.prototype, "urlTemplate", 2);
b([
  h({ type: Number, reflect: !0, attribute: "preview-length" })
], u.prototype, "previewLength", 2);
b([
  p()
], u.prototype, "loading", 2);
b([
  p()
], u.prototype, "error", 2);
b([
  p()
], u.prototype, "hasMore", 2);
u = b([
  Y("hive-tag")
], u);
export {
  u as HiveTagElement
};
//# sourceMappingURL=bundle.js.map
