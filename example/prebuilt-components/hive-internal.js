import { css as Ql } from "lit";
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ii = globalThis, Ao = ii.ShadowRoot && (ii.ShadyCSS === void 0 || ii.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ec = Symbol(), Cs = /* @__PURE__ */ new WeakMap();
let wf = class {
  constructor(e, r, u) {
    if (this._$cssResult$ = !0, u !== ec) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = r;
  }
  get styleSheet() {
    let e = this.o;
    const r = this.t;
    if (Ao && e === void 0) {
      const u = r !== void 0 && r.length === 1;
      u && (e = Cs.get(r)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), u && Cs.set(r, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ef = (t) => new wf(typeof t == "string" ? t : t + "", void 0, ec), Af = (t, e) => {
  if (Ao) t.adoptedStyleSheets = e.map((r) => r instanceof CSSStyleSheet ? r : r.styleSheet);
  else for (const r of e) {
    const u = document.createElement("style"), n = ii.litNonce;
    n !== void 0 && u.setAttribute("nonce", n), u.textContent = r.cssText, t.appendChild(u);
  }
}, Os = Ao ? (t) => t : (t) => t instanceof CSSStyleSheet ? ((e) => {
  let r = "";
  for (const u of e.cssRules) r += u.cssText;
  return Ef(r);
})(t) : t;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: _f, defineProperty: Sf, getOwnPropertyDescriptor: Df, getOwnPropertyNames: Tf, getOwnPropertySymbols: kf, getPrototypeOf: Cf } = Object, Xt = globalThis, Ps = Xt.trustedTypes, Of = Ps ? Ps.emptyScript : "", Ba = Xt.reactiveElementPolyfillSupport, Ru = (t, e) => t, fi = { toAttribute(t, e) {
  switch (e) {
    case Boolean:
      t = t ? Of : null;
      break;
    case Object:
    case Array:
      t = t == null ? t : JSON.stringify(t);
  }
  return t;
}, fromAttribute(t, e) {
  let r = t;
  switch (e) {
    case Boolean:
      r = t !== null;
      break;
    case Number:
      r = t === null ? null : Number(t);
      break;
    case Object:
    case Array:
      try {
        r = JSON.parse(t);
      } catch {
        r = null;
      }
  }
  return r;
} }, _o = (t, e) => !_f(t, e), $s = { attribute: !0, type: String, converter: fi, reflect: !1, useDefault: !1, hasChanged: _o };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Xt.litPropertyMetadata ?? (Xt.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Tu extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, r = $s) {
    if (r.state && (r.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((r = Object.create(r)).wrapped = !0), this.elementProperties.set(e, r), !r.noAccessor) {
      const u = Symbol(), n = this.getPropertyDescriptor(e, u, r);
      n !== void 0 && Sf(this.prototype, e, n);
    }
  }
  static getPropertyDescriptor(e, r, u) {
    const { get: n, set: i } = Df(this.prototype, e) ?? { get() {
      return this[r];
    }, set(a) {
      this[r] = a;
    } };
    return { get: n, set(a) {
      const c = n == null ? void 0 : n.call(this);
      i == null || i.call(this, a), this.requestUpdate(e, c, u);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? $s;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Ru("elementProperties"))) return;
    const e = Cf(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Ru("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Ru("properties"))) {
      const r = this.properties, u = [...Tf(r), ...kf(r)];
      for (const n of u) this.createProperty(n, r[n]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const r = litPropertyMetadata.get(e);
      if (r !== void 0) for (const [u, n] of r) this.elementProperties.set(u, n);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [r, u] of this.elementProperties) {
      const n = this._$Eu(r, u);
      n !== void 0 && this._$Eh.set(n, r);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const r = [];
    if (Array.isArray(e)) {
      const u = new Set(e.flat(1 / 0).reverse());
      for (const n of u) r.unshift(Os(n));
    } else e !== void 0 && r.push(Os(e));
    return r;
  }
  static _$Eu(e, r) {
    const u = r.attribute;
    return u === !1 ? void 0 : typeof u == "string" ? u : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((r) => this.enableUpdating = r), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((r) => r(this));
  }
  addController(e) {
    var r;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((r = e.hostConnected) == null || r.call(e));
  }
  removeController(e) {
    var r;
    (r = this._$EO) == null || r.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), r = this.constructor.elementProperties;
    for (const u of r.keys()) this.hasOwnProperty(u) && (e.set(u, this[u]), delete this[u]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Af(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((r) => {
      var u;
      return (u = r.hostConnected) == null ? void 0 : u.call(r);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var u;
      return (u = r.hostDisconnected) == null ? void 0 : u.call(r);
    });
  }
  attributeChangedCallback(e, r, u) {
    this._$AK(e, u);
  }
  _$ET(e, r) {
    var i;
    const u = this.constructor.elementProperties.get(e), n = this.constructor._$Eu(e, u);
    if (n !== void 0 && u.reflect === !0) {
      const a = (((i = u.converter) == null ? void 0 : i.toAttribute) !== void 0 ? u.converter : fi).toAttribute(r, u.type);
      this._$Em = e, a == null ? this.removeAttribute(n) : this.setAttribute(n, a), this._$Em = null;
    }
  }
  _$AK(e, r) {
    var i, a;
    const u = this.constructor, n = u._$Eh.get(e);
    if (n !== void 0 && this._$Em !== n) {
      const c = u.getPropertyOptions(n), o = typeof c.converter == "function" ? { fromAttribute: c.converter } : ((i = c.converter) == null ? void 0 : i.fromAttribute) !== void 0 ? c.converter : fi;
      this._$Em = n, this[n] = o.fromAttribute(r, c.type) ?? ((a = this._$Ej) == null ? void 0 : a.get(n)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(e, r, u) {
    var n;
    if (e !== void 0) {
      const i = this.constructor, a = this[e];
      if (u ?? (u = i.getPropertyOptions(e)), !((u.hasChanged ?? _o)(a, r) || u.useDefault && u.reflect && a === ((n = this._$Ej) == null ? void 0 : n.get(e)) && !this.hasAttribute(i._$Eu(e, u)))) return;
      this.C(e, r, u);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, r, { useDefault: u, reflect: n, wrapped: i }, a) {
    u && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, a ?? r ?? this[e]), i !== !0 || a !== void 0) || (this._$AL.has(e) || (this.hasUpdated || u || (r = void 0), this._$AL.set(e, r)), n === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (r) {
      Promise.reject(r);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var u;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [i, a] of this._$Ep) this[i] = a;
        this._$Ep = void 0;
      }
      const n = this.constructor.elementProperties;
      if (n.size > 0) for (const [i, a] of n) {
        const { wrapped: c } = a, o = this[i];
        c !== !0 || this._$AL.has(i) || o === void 0 || this.C(i, void 0, a, o);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (u = this._$EO) == null || u.forEach((n) => {
        var i;
        return (i = n.hostUpdate) == null ? void 0 : i.call(n);
      }), this.update(r)) : this._$EM();
    } catch (n) {
      throw e = !1, this._$EM(), n;
    }
    e && this._$AE(r);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var r;
    (r = this._$EO) == null || r.forEach((u) => {
      var n;
      return (n = u.hostUpdated) == null ? void 0 : n.call(u);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
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
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((r) => this._$ET(r, this[r]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
Tu.elementStyles = [], Tu.shadowRootOptions = { mode: "open" }, Tu[Ru("elementProperties")] = /* @__PURE__ */ new Map(), Tu[Ru("finalized")] = /* @__PURE__ */ new Map(), Ba == null || Ba({ ReactiveElement: Tu }), (Xt.reactiveElementVersions ?? (Xt.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Pf = { attribute: !0, type: String, converter: fi, reflect: !1, hasChanged: _o }, $f = (t = Pf, e, r) => {
  const { kind: u, metadata: n } = r;
  let i = globalThis.litPropertyMetadata.get(n);
  if (i === void 0 && globalThis.litPropertyMetadata.set(n, i = /* @__PURE__ */ new Map()), u === "setter" && ((t = Object.create(t)).wrapped = !0), i.set(r.name, t), u === "accessor") {
    const { name: a } = r;
    return { set(c) {
      const o = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(a, o, t);
    }, init(c) {
      return c !== void 0 && this.C(a, void 0, t, c), c;
    } };
  }
  if (u === "setter") {
    const { name: a } = r;
    return function(c) {
      const o = this[a];
      e.call(this, c), this.requestUpdate(a, o, t);
    };
  }
  throw Error("Unsupported decorator location: " + u);
};
function au(t) {
  return (e, r) => typeof r == "object" ? $f(t, e, r) : ((u, n, i) => {
    const a = n.hasOwnProperty(i);
    return n.constructor.createProperty(i, u), a ? Object.getOwnPropertyDescriptor(n, i) : void 0;
  })(t, e, r);
}
var Nf = Object.defineProperty, Mf = (t, e, r, u) => {
  for (var n = void 0, i = t.length - 1, a; i >= 0; i--)
    (a = t[i]) && (n = a(e, r, n) || n);
  return n && Nf(e, r, n), n;
};
const Lf = () => au({ type: String, reflect: !0 }), Oy = () => au({ type: String, reflect: !0 }), Py = () => au({ type: String, reflect: !0 }), $y = () => au({ type: String, reflect: !0 }), Ny = () => au({ type: Boolean, state: !0 }), My = () => au({ type: String, state: !0 });
function Ly(t) {
  class e extends t {
    constructor() {
      super(...arguments), this.theme = "light";
    }
  }
  return Mf([
    Lf()
  ], e.prototype, "theme"), e;
}
const If = [
  "https://api.hive.blog",
  "https://api.hivekings.com",
  "https://anyx.io",
  "https://api.openhive.network"
];
class Bf {
  constructor(e = If) {
    this.currentEndpointIndex = 0, this.endpoints = e;
  }
  async makeRequest(e, r) {
    const u = {
      jsonrpc: "2.0",
      method: e,
      params: r,
      id: Math.floor(Math.random() * 1e3)
    };
    for (let n = 0; n < this.endpoints.length; n++)
      try {
        const i = this.endpoints[this.currentEndpointIndex];
        if (!i)
          throw new Error("No valid endpoint available");
        const a = await fetch(i, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(u)
        });
        if (!a.ok)
          throw new Error(`HTTP ${a.status}: ${a.statusText}`);
        const c = await a.json();
        if (c.error)
          throw new Error(c.error.message || "API Error");
        return c.result;
      } catch (i) {
        if (console.warn(`Failed to fetch from ${this.endpoints[this.currentEndpointIndex]}:`, i), this.currentEndpointIndex = (this.currentEndpointIndex + 1) % this.endpoints.length, n === this.endpoints.length - 1)
          throw new Error(`All API endpoints failed. Last error: ${i}`);
      }
    throw new Error("Failed to make request to any endpoint");
  }
  async getContent(e, r) {
    return this.makeRequest("condenser_api.get_content", [e, r]);
  }
  async getContentReplies(e, r) {
    return this.makeRequest("condenser_api.get_content_replies", [e, r]);
  }
  async getWitnessByAccount(e) {
    return this.makeRequest("condenser_api.get_witness_by_account", [e]);
  }
  async getAccounts(e) {
    return this.makeRequest("condenser_api.get_accounts", [e]);
  }
  async getAccount(e) {
    const r = await this.getAccounts([e]);
    return r.length > 0 && r[0] || null;
  }
  async getDiscussionsByTag(e, r = 20, u, n) {
    const i = { tag: e, limit: r };
    return u && n && (i.start_author = u, i.start_permlink = n), this.makeRequest("condenser_api.get_discussions_by_trending", [i]);
  }
  async getTrendingTags(e = "", r = 100) {
    return this.makeRequest("condenser_api.get_trending_tags", [e, r]);
  }
}
const Iy = new Bf();
var N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function So(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function u() {
      return this instanceof u ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return Object.defineProperty(r, "__esModule", { value: !0 }), Object.keys(t).forEach(function(u) {
    var n = Object.getOwnPropertyDescriptor(t, u);
    Object.defineProperty(r, u, n.get ? n : {
      enumerable: !0,
      get: function() {
        return t[u];
      }
    });
  }), r;
}
var tc = {}, ju = {}, ou = {}, Do = { exports: {} };
const rc = () => {
  const t = Error.prepareStackTrace;
  Error.prepareStackTrace = (r, u) => u;
  const e = new Error().stack.slice(1);
  return Error.prepareStackTrace = t, e;
};
Do.exports = rc;
Do.exports.default = rc;
var Rf = Do.exports, ki = {};
Object.defineProperty(ki, "__esModule", { value: !0 });
ki.inferLabel = void 0;
const Ff = () => {
};
ki.inferLabel = Ff;
var Ra = {}, Qa = { exports: {} };
(function(t, e) {
  Object.defineProperty(e, "__esModule", { value: !0 });
  const r = [
    "Int8Array",
    "Uint8Array",
    "Uint8ClampedArray",
    "Int16Array",
    "Uint16Array",
    "Int32Array",
    "Uint32Array",
    "Float32Array",
    "Float64Array",
    "BigInt64Array",
    "BigUint64Array"
  ];
  function u(d) {
    return r.includes(d);
  }
  const n = [
    "Function",
    "Generator",
    "AsyncGenerator",
    "GeneratorFunction",
    "AsyncGeneratorFunction",
    "AsyncFunction",
    "Observable",
    "Array",
    "Buffer",
    "Blob",
    "Object",
    "RegExp",
    "Date",
    "Error",
    "Map",
    "Set",
    "WeakMap",
    "WeakSet",
    "ArrayBuffer",
    "SharedArrayBuffer",
    "DataView",
    "Promise",
    "URL",
    "FormData",
    "URLSearchParams",
    "HTMLElement",
    ...r
  ];
  function i(d) {
    return n.includes(d);
  }
  const a = [
    "null",
    "undefined",
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol"
  ];
  function c(d) {
    return a.includes(d);
  }
  function o(d) {
    return (O) => typeof O === d;
  }
  const { toString: f } = Object.prototype, s = (d) => {
    const O = f.call(d).slice(8, -1);
    if (/HTML\w+Element/.test(O) && l.domElement(d))
      return "HTMLElement";
    if (i(O))
      return O;
  }, p = (d) => (O) => s(O) === d;
  function l(d) {
    if (d === null)
      return "null";
    switch (typeof d) {
      case "undefined":
        return "undefined";
      case "string":
        return "string";
      case "number":
        return "number";
      case "boolean":
        return "boolean";
      case "function":
        return "Function";
      case "bigint":
        return "bigint";
      case "symbol":
        return "symbol";
    }
    if (l.observable(d))
      return "Observable";
    if (l.array(d))
      return "Array";
    if (l.buffer(d))
      return "Buffer";
    const O = s(d);
    if (O)
      return O;
    if (d instanceof String || d instanceof Boolean || d instanceof Number)
      throw new TypeError("Please don't use object wrappers for primitive types");
    return "Object";
  }
  l.undefined = o("undefined"), l.string = o("string");
  const h = o("number");
  l.number = (d) => h(d) && !l.nan(d), l.bigint = o("bigint"), l.function_ = o("function"), l.null_ = (d) => d === null, l.class_ = (d) => l.function_(d) && d.toString().startsWith("class "), l.boolean = (d) => d === !0 || d === !1, l.symbol = o("symbol"), l.numericString = (d) => l.string(d) && !l.emptyStringOrWhitespace(d) && !Number.isNaN(Number(d)), l.array = (d, O) => Array.isArray(d) ? l.function_(O) ? d.every(O) : !0 : !1, l.buffer = (d) => {
    var O, V, z, W;
    return (W = (z = (V = (O = d) === null || O === void 0 ? void 0 : O.constructor) === null || V === void 0 ? void 0 : V.isBuffer) === null || z === void 0 ? void 0 : z.call(V, d)) !== null && W !== void 0 ? W : !1;
  }, l.blob = (d) => p("Blob")(d), l.nullOrUndefined = (d) => l.null_(d) || l.undefined(d), l.object = (d) => !l.null_(d) && (typeof d == "object" || l.function_(d)), l.iterable = (d) => {
    var O;
    return l.function_((O = d) === null || O === void 0 ? void 0 : O[Symbol.iterator]);
  }, l.asyncIterable = (d) => {
    var O;
    return l.function_((O = d) === null || O === void 0 ? void 0 : O[Symbol.asyncIterator]);
  }, l.generator = (d) => {
    var O, V;
    return l.iterable(d) && l.function_((O = d) === null || O === void 0 ? void 0 : O.next) && l.function_((V = d) === null || V === void 0 ? void 0 : V.throw);
  }, l.asyncGenerator = (d) => l.asyncIterable(d) && l.function_(d.next) && l.function_(d.throw), l.nativePromise = (d) => p("Promise")(d);
  const b = (d) => {
    var O, V;
    return l.function_((O = d) === null || O === void 0 ? void 0 : O.then) && l.function_((V = d) === null || V === void 0 ? void 0 : V.catch);
  };
  l.promise = (d) => l.nativePromise(d) || b(d), l.generatorFunction = p("GeneratorFunction"), l.asyncGeneratorFunction = (d) => s(d) === "AsyncGeneratorFunction", l.asyncFunction = (d) => s(d) === "AsyncFunction", l.boundFunction = (d) => l.function_(d) && !d.hasOwnProperty("prototype"), l.regExp = p("RegExp"), l.date = p("Date"), l.error = p("Error"), l.map = (d) => p("Map")(d), l.set = (d) => p("Set")(d), l.weakMap = (d) => p("WeakMap")(d), l.weakSet = (d) => p("WeakSet")(d), l.int8Array = p("Int8Array"), l.uint8Array = p("Uint8Array"), l.uint8ClampedArray = p("Uint8ClampedArray"), l.int16Array = p("Int16Array"), l.uint16Array = p("Uint16Array"), l.int32Array = p("Int32Array"), l.uint32Array = p("Uint32Array"), l.float32Array = p("Float32Array"), l.float64Array = p("Float64Array"), l.bigInt64Array = p("BigInt64Array"), l.bigUint64Array = p("BigUint64Array"), l.arrayBuffer = p("ArrayBuffer"), l.sharedArrayBuffer = p("SharedArrayBuffer"), l.dataView = p("DataView"), l.enumCase = (d, O) => Object.values(O).includes(d), l.directInstanceOf = (d, O) => Object.getPrototypeOf(d) === O.prototype, l.urlInstance = (d) => p("URL")(d), l.urlString = (d) => {
    if (!l.string(d))
      return !1;
    try {
      return new URL(d), !0;
    } catch {
      return !1;
    }
  }, l.truthy = (d) => !!d, l.falsy = (d) => !d, l.nan = (d) => Number.isNaN(d), l.primitive = (d) => l.null_(d) || c(typeof d), l.integer = (d) => Number.isInteger(d), l.safeInteger = (d) => Number.isSafeInteger(d), l.plainObject = (d) => {
    if (f.call(d) !== "[object Object]")
      return !1;
    const O = Object.getPrototypeOf(d);
    return O === null || O === Object.getPrototypeOf({});
  }, l.typedArray = (d) => u(s(d));
  const v = (d) => l.safeInteger(d) && d >= 0;
  l.arrayLike = (d) => !l.nullOrUndefined(d) && !l.function_(d) && v(d.length), l.inRange = (d, O) => {
    if (l.number(O))
      return d >= Math.min(0, O) && d <= Math.max(O, 0);
    if (l.array(O) && O.length === 2)
      return d >= Math.min(...O) && d <= Math.max(...O);
    throw new TypeError(`Invalid range: ${JSON.stringify(O)}`);
  };
  const y = 1, g = [
    "innerHTML",
    "ownerDocument",
    "style",
    "attributes",
    "nodeValue"
  ];
  l.domElement = (d) => l.object(d) && d.nodeType === y && l.string(d.nodeName) && !l.plainObject(d) && g.every((O) => O in d), l.observable = (d) => {
    var O, V, z, W;
    return d ? d === ((V = (O = d)[Symbol.observable]) === null || V === void 0 ? void 0 : V.call(O)) || d === ((W = (z = d)["@@observable"]) === null || W === void 0 ? void 0 : W.call(z)) : !1;
  }, l.nodeStream = (d) => l.object(d) && l.function_(d.pipe) && !l.observable(d), l.infinite = (d) => d === 1 / 0 || d === -1 / 0;
  const D = (d) => (O) => l.integer(O) && Math.abs(O % 2) === d;
  l.evenInteger = D(0), l.oddInteger = D(1), l.emptyArray = (d) => l.array(d) && d.length === 0, l.nonEmptyArray = (d) => l.array(d) && d.length > 0, l.emptyString = (d) => l.string(d) && d.length === 0;
  const E = (d) => l.string(d) && !/\S/.test(d);
  l.emptyStringOrWhitespace = (d) => l.emptyString(d) || E(d), l.nonEmptyString = (d) => l.string(d) && d.length > 0, l.nonEmptyStringAndNotWhitespace = (d) => l.string(d) && !l.emptyStringOrWhitespace(d), l.emptyObject = (d) => l.object(d) && !l.map(d) && !l.set(d) && Object.keys(d).length === 0, l.nonEmptyObject = (d) => l.object(d) && !l.map(d) && !l.set(d) && Object.keys(d).length > 0, l.emptySet = (d) => l.set(d) && d.size === 0, l.nonEmptySet = (d) => l.set(d) && d.size > 0, l.emptyMap = (d) => l.map(d) && d.size === 0, l.nonEmptyMap = (d) => l.map(d) && d.size > 0, l.propertyKey = (d) => l.any([l.string, l.number, l.symbol], d), l.formData = (d) => p("FormData")(d), l.urlSearchParams = (d) => p("URLSearchParams")(d);
  const I = (d, O, V) => {
    if (!l.function_(O))
      throw new TypeError(`Invalid predicate: ${JSON.stringify(O)}`);
    if (V.length === 0)
      throw new TypeError("Invalid number of values");
    return d.call(V, O);
  };
  l.any = (d, ...O) => (l.array(d) ? d : [d]).some((z) => I(Array.prototype.some, z, O)), l.all = (d, ...O) => I(Array.prototype.every, d, O);
  const k = (d, O, V, z = {}) => {
    if (!d) {
      const { multipleValues: W } = z, A = W ? `received values of types ${[
        ...new Set(V.map(($) => `\`${l($)}\``))
      ].join(", ")}` : `received value of type \`${l(V)}\``;
      throw new TypeError(`Expected value which is \`${O}\`, ${A}.`);
    }
  };
  e.assert = {
    // Unknowns.
    undefined: (d) => k(l.undefined(d), "undefined", d),
    string: (d) => k(l.string(d), "string", d),
    number: (d) => k(l.number(d), "number", d),
    bigint: (d) => k(l.bigint(d), "bigint", d),
    // eslint-disable-next-line @typescript-eslint/ban-types
    function_: (d) => k(l.function_(d), "Function", d),
    null_: (d) => k(l.null_(d), "null", d),
    class_: (d) => k(l.class_(d), "Class", d),
    boolean: (d) => k(l.boolean(d), "boolean", d),
    symbol: (d) => k(l.symbol(d), "symbol", d),
    numericString: (d) => k(l.numericString(d), "string with a number", d),
    array: (d, O) => {
      k(l.array(d), "Array", d), O && d.forEach(O);
    },
    buffer: (d) => k(l.buffer(d), "Buffer", d),
    blob: (d) => k(l.blob(d), "Blob", d),
    nullOrUndefined: (d) => k(l.nullOrUndefined(d), "null or undefined", d),
    object: (d) => k(l.object(d), "Object", d),
    iterable: (d) => k(l.iterable(d), "Iterable", d),
    asyncIterable: (d) => k(l.asyncIterable(d), "AsyncIterable", d),
    generator: (d) => k(l.generator(d), "Generator", d),
    asyncGenerator: (d) => k(l.asyncGenerator(d), "AsyncGenerator", d),
    nativePromise: (d) => k(l.nativePromise(d), "native Promise", d),
    promise: (d) => k(l.promise(d), "Promise", d),
    generatorFunction: (d) => k(l.generatorFunction(d), "GeneratorFunction", d),
    asyncGeneratorFunction: (d) => k(l.asyncGeneratorFunction(d), "AsyncGeneratorFunction", d),
    // eslint-disable-next-line @typescript-eslint/ban-types
    asyncFunction: (d) => k(l.asyncFunction(d), "AsyncFunction", d),
    // eslint-disable-next-line @typescript-eslint/ban-types
    boundFunction: (d) => k(l.boundFunction(d), "Function", d),
    regExp: (d) => k(l.regExp(d), "RegExp", d),
    date: (d) => k(l.date(d), "Date", d),
    error: (d) => k(l.error(d), "Error", d),
    map: (d) => k(l.map(d), "Map", d),
    set: (d) => k(l.set(d), "Set", d),
    weakMap: (d) => k(l.weakMap(d), "WeakMap", d),
    weakSet: (d) => k(l.weakSet(d), "WeakSet", d),
    int8Array: (d) => k(l.int8Array(d), "Int8Array", d),
    uint8Array: (d) => k(l.uint8Array(d), "Uint8Array", d),
    uint8ClampedArray: (d) => k(l.uint8ClampedArray(d), "Uint8ClampedArray", d),
    int16Array: (d) => k(l.int16Array(d), "Int16Array", d),
    uint16Array: (d) => k(l.uint16Array(d), "Uint16Array", d),
    int32Array: (d) => k(l.int32Array(d), "Int32Array", d),
    uint32Array: (d) => k(l.uint32Array(d), "Uint32Array", d),
    float32Array: (d) => k(l.float32Array(d), "Float32Array", d),
    float64Array: (d) => k(l.float64Array(d), "Float64Array", d),
    bigInt64Array: (d) => k(l.bigInt64Array(d), "BigInt64Array", d),
    bigUint64Array: (d) => k(l.bigUint64Array(d), "BigUint64Array", d),
    arrayBuffer: (d) => k(l.arrayBuffer(d), "ArrayBuffer", d),
    sharedArrayBuffer: (d) => k(l.sharedArrayBuffer(d), "SharedArrayBuffer", d),
    dataView: (d) => k(l.dataView(d), "DataView", d),
    enumCase: (d, O) => k(l.enumCase(d, O), "EnumCase", d),
    urlInstance: (d) => k(l.urlInstance(d), "URL", d),
    urlString: (d) => k(l.urlString(d), "string with a URL", d),
    truthy: (d) => k(l.truthy(d), "truthy", d),
    falsy: (d) => k(l.falsy(d), "falsy", d),
    nan: (d) => k(l.nan(d), "NaN", d),
    primitive: (d) => k(l.primitive(d), "primitive", d),
    integer: (d) => k(l.integer(d), "integer", d),
    safeInteger: (d) => k(l.safeInteger(d), "integer", d),
    plainObject: (d) => k(l.plainObject(d), "plain object", d),
    typedArray: (d) => k(l.typedArray(d), "TypedArray", d),
    arrayLike: (d) => k(l.arrayLike(d), "array-like", d),
    domElement: (d) => k(l.domElement(d), "HTMLElement", d),
    observable: (d) => k(l.observable(d), "Observable", d),
    nodeStream: (d) => k(l.nodeStream(d), "Node.js Stream", d),
    infinite: (d) => k(l.infinite(d), "infinite number", d),
    emptyArray: (d) => k(l.emptyArray(d), "empty array", d),
    nonEmptyArray: (d) => k(l.nonEmptyArray(d), "non-empty array", d),
    emptyString: (d) => k(l.emptyString(d), "empty string", d),
    emptyStringOrWhitespace: (d) => k(l.emptyStringOrWhitespace(d), "empty string or whitespace", d),
    nonEmptyString: (d) => k(l.nonEmptyString(d), "non-empty string", d),
    nonEmptyStringAndNotWhitespace: (d) => k(l.nonEmptyStringAndNotWhitespace(d), "non-empty string and not whitespace", d),
    emptyObject: (d) => k(l.emptyObject(d), "empty object", d),
    nonEmptyObject: (d) => k(l.nonEmptyObject(d), "non-empty object", d),
    emptySet: (d) => k(l.emptySet(d), "empty set", d),
    nonEmptySet: (d) => k(l.nonEmptySet(d), "non-empty set", d),
    emptyMap: (d) => k(l.emptyMap(d), "empty map", d),
    nonEmptyMap: (d) => k(l.nonEmptyMap(d), "non-empty map", d),
    propertyKey: (d) => k(l.propertyKey(d), "PropertyKey", d),
    formData: (d) => k(l.formData(d), "FormData", d),
    urlSearchParams: (d) => k(l.urlSearchParams(d), "URLSearchParams", d),
    // Numbers.
    evenInteger: (d) => k(l.evenInteger(d), "even integer", d),
    oddInteger: (d) => k(l.oddInteger(d), "odd integer", d),
    // Two arguments.
    directInstanceOf: (d, O) => k(l.directInstanceOf(d, O), "T", d),
    inRange: (d, O) => k(l.inRange(d, O), "in range", d),
    // Variadic functions.
    any: (d, ...O) => k(l.any(d, ...O), "predicate returns truthy for any value", O, { multipleValues: !0 }),
    all: (d, ...O) => k(l.all(d, ...O), "predicate returns truthy for all values", O, { multipleValues: !0 })
  }, Object.defineProperties(l, {
    class: {
      value: l.class_
    },
    function: {
      value: l.function_
    },
    null: {
      value: l.null_
    }
  }), Object.defineProperties(e.assert, {
    class: {
      value: e.assert.class_
    },
    function: {
      value: e.assert.function_
    },
    null: {
      value: e.assert.null_
    }
  }), e.default = l, t.exports = l, t.exports.default = l, t.exports.assert = e.assert;
})(Qa, Qa.exports);
var su = Qa.exports, lu = {}, Ci = {};
Object.defineProperty(Ci, "__esModule", { value: !0 });
Ci.generateStackTrace = void 0;
const jf = () => new RangeError("INTERNAL_OW_ERROR").stack;
Ci.generateStackTrace = jf;
Object.defineProperty(lu, "__esModule", { value: !0 });
lu.ArgumentError = void 0;
const qf = Ci, Uf = (t, e) => `${t.name}: ${t.message}
${e}`;
class Vf extends Error {
  constructor(e, r, u = /* @__PURE__ */ new Map()) {
    super(e), Object.defineProperty(this, "validationErrors", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.name = "ArgumentError", Error.captureStackTrace ? Error.captureStackTrace(this, r) : this.stack = Uf(this, (0, qf.generateStackTrace)()), this.validationErrors = u;
  }
}
lu.ArgumentError = Vf;
var ku = {}, To = {};
Object.defineProperty(To, "__esModule", { value: !0 });
To.default = () => Math.random().toString(16).slice(2);
var Ns;
function zf() {
  if (Ns) return ku;
  Ns = 1, Object.defineProperty(ku, "__esModule", { value: !0 }), ku.not = void 0;
  const t = To, e = Ae(), r = (u) => {
    const n = u.addValidator;
    return u.addValidator = (i) => {
      const { validator: a, message: c, negatedMessage: o } = i, f = (0, t.default)();
      return i.message = (s, p) => o ? o(s, p) : c(s, f).replace(/ to /, "$&not ").replace(f, p), i.validator = (s) => !a(s), u[e.validatorSymbol].push(i), u.addValidator = n, u;
    }, u;
  };
  return ku.not = r, ku;
}
var cu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.isPredicate = t.testSymbol = void 0, t.testSymbol = Symbol("test");
  const e = (r) => !!r[t.testSymbol];
  t.isPredicate = e;
})(cu);
var rn = {};
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.generateArgumentErrorMessage = void 0;
const Hf = (t, e = !1) => {
  const r = [], u = [...t.entries()], n = u.some(([, i]) => i.size !== 1);
  if (u.length === 1) {
    const [, i] = u[0];
    if (!e && i.size === 1) {
      const [a] = i;
      return a;
    }
    for (const a of i)
      r.push(`${e ? "  - " : ""}${a}`);
    return r.join(`
`);
  }
  if (!n)
    return u.map(([, [i]]) => `  - ${i}`).join(`
`);
  for (const [i, a] of u) {
    r.push(`Errors from the "${i}" predicate:`);
    for (const c of a)
      r.push(`  - ${c}`);
  }
  return r.join(`
`);
};
rn.generateArgumentErrorMessage = Hf;
var Ms;
function Ae() {
  return Ms || (Ms = 1, function(t) {
    Object.defineProperty(t, "__esModule", { value: !0 }), t.Predicate = t.validatorSymbol = void 0;
    const e = su, r = lu, u = zf(), n = cu, i = rn;
    t.validatorSymbol = Symbol("validators");
    class a {
      constructor(o, f = {}) {
        Object.defineProperty(this, "type", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: o
        }), Object.defineProperty(this, "options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: f
        }), Object.defineProperty(this, "context", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {
            validators: []
          }
        }), this.context = {
          ...this.context,
          ...this.options
        };
        const s = this.type.charAt(0).toLowerCase() + this.type.slice(1);
        this.addValidator({
          message: (p, l) => `Expected ${(l == null ? void 0 : l.slice(this.type.length + 1)) || "argument"} to be of type \`${this.type}\` but received type \`${(0, e.default)(p)}\``,
          validator: (p) => e.default[s](p)
        });
      }
      /**
      @hidden
      */
      [n.testSymbol](o, f, s, p) {
        const l = /* @__PURE__ */ new Map();
        for (const { validator: h, message: b } of this.context.validators) {
          if (this.options.optional === !0 && o === void 0)
            continue;
          let v;
          try {
            v = h(o);
          } catch (d) {
            v = d;
          }
          if (v === !0)
            continue;
          const y = e.default.function_(s) ? s() : s, g = y && p ? `\`${y}\`` : y, D = g ? `${this.type} ${g}` : this.type, E = y || this.type, I = l.get(E), k = b(o, D, v);
          I ? I.add(k) : l.set(E, /* @__PURE__ */ new Set([k]));
        }
        if (l.size > 0) {
          const h = (0, i.generateArgumentErrorMessage)(l);
          throw new r.ArgumentError(h, f, l);
        }
      }
      /**
      @hidden
      */
      get [t.validatorSymbol]() {
        return this.context.validators;
      }
      /**
      Invert the following validators.
      */
      get not() {
        return (0, u.not)(this);
      }
      /**
      		    Test if the value matches a custom validation function. The validation function should return an object containing a `validator` and `message`. If the `validator` is `false`, the validation fails and the `message` will be used as error message. If the `message` is a function, the function is invoked with the `label` as argument to let you further customize the error message.
      
      		    @param customValidator - Custom validation function.
      		    */
      validate(o) {
        return this.addValidator({
          message: (f, s, p) => typeof p == "string" ? `(${s}) ${p}` : p(s),
          validator: (f) => {
            const { message: s, validator: p } = o(f);
            return p ? !0 : s;
          }
        });
      }
      /**
      		    Test if the value matches a custom validation function. The validation function should return `true` if the value passes the function. If the function either returns `false` or a string, the function fails and the string will be used as error message.
      
      		    @param validator - Validation function.
      		    */
      is(o) {
        return this.addValidator({
          message: (f, s, p) => p ? `(${s}) ${p}` : `Expected ${s} \`${f}\` to pass custom validation function`,
          validator: o
        });
      }
      /**
      		    Provide a new error message to be thrown when the validation fails.
      
      		    @param newMessage - Either a string containing the new message or a function returning the new message.
      
      		    @example
      		    ```
      		    ow('🌈', 'unicorn', ow.string.equals('🦄').message('Expected unicorn, got rainbow'));
      		    //=> ArgumentError: Expected unicorn, got rainbow
      		    ```
      
      		    @example
      		    ```
      		    ow('🌈', ow.string.minLength(5).message((value, label) => `Expected ${label}, to have a minimum length of 5, got \`${value}\``));
      		    //=> ArgumentError: Expected string, to be have a minimum length of 5, got `🌈`
      		    ```
      		    */
      message(o) {
        const { validators: f } = this.context;
        return f[f.length - 1].message = (s, p) => typeof o == "function" ? o(s, p) : o, this;
      }
      /**
      		    Register a new validator.
      
      		    @param validator - Validator to register.
      		    */
      addValidator(o) {
        return this.context.validators.push(o), this;
      }
    }
    t.Predicate = a;
  }(Ra)), Ra;
}
var ko = {}, di = {}, Oi = {}, Gf = function(t) {
  return !isNaN(Date.parse(t));
};
Object.defineProperty(Oi, "__esModule", { value: !0 });
Oi.StringPredicate = void 0;
const Wf = su, Jf = Gf, Xf = Ae();
class Yf extends Xf.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("string", e);
  }
  /**
      Test a string to have a specific length.
  
      @param length - The length of the string.
      */
  length(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have length \`${e}\`, got \`${r}\``,
      validator: (r) => r.length === e
    });
  }
  /**
      Test a string to have a minimum length.
  
      @param length - The minimum length of the string.
      */
  minLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a minimum length of \`${e}\`, got \`${r}\``,
      validator: (r) => r.length >= e,
      negatedMessage: (r, u) => `Expected ${u} to have a maximum length of \`${e - 1}\`, got \`${r}\``
    });
  }
  /**
      Test a string to have a maximum length.
  
      @param length - The maximum length of the string.
      */
  maxLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a maximum length of \`${e}\`, got \`${r}\``,
      validator: (r) => r.length <= e,
      negatedMessage: (r, u) => `Expected ${u} to have a minimum length of \`${e + 1}\`, got \`${r}\``
    });
  }
  /**
      Test a string against a regular expression.
  
      @param regex - The regular expression to match the value with.
      */
  matches(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to match \`${e}\`, got \`${r}\``,
      validator: (r) => e.test(r)
    });
  }
  /**
      Test a string to start with a specific value.
  
      @param searchString - The value that should be the start of the string.
      */
  startsWith(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to start with \`${e}\`, got \`${r}\``,
      validator: (r) => r.startsWith(e)
    });
  }
  /**
      Test a string to end with a specific value.
  
      @param searchString - The value that should be the end of the string.
      */
  endsWith(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to end with \`${e}\`, got \`${r}\``,
      validator: (r) => r.endsWith(e)
    });
  }
  /**
      Test a string to include a specific value.
  
      @param searchString - The value that should be included in the string.
      */
  includes(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to include \`${e}\`, got \`${r}\``,
      validator: (r) => r.includes(e)
    });
  }
  /**
      Test if the string is an element of the provided list.
  
      @param list - List of possible values.
      */
  oneOf(e) {
    return this.addValidator({
      message: (r, u) => {
        let n = JSON.stringify(e);
        if (e.length > 10) {
          const i = e.length - 10;
          n = JSON.stringify(e.slice(0, 10)).replace(/]$/, `,…+${i} more]`);
        }
        return `Expected ${u} to be one of \`${n}\`, got \`${r}\``;
      },
      validator: (r) => e.includes(r)
    });
  }
  /**
  Test a string to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be empty, got \`${e}\``,
      validator: (e) => e === ""
    });
  }
  /**
  Test a string to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to not be empty`,
      validator: (e) => e !== ""
    });
  }
  /**
      Test a string to be equal to a specified string.
  
      @param expected - Expected value to match.
      */
  equals(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be equal to \`${e}\`, got \`${r}\``,
      validator: (r) => r === e
    });
  }
  /**
  Test a string to be alphanumeric.
  */
  get alphanumeric() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be alphanumeric, got \`${e}\``,
      validator: (e) => /^[a-z\d]+$/i.test(e)
    });
  }
  /**
  Test a string to be alphabetical.
  */
  get alphabetical() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be alphabetical, got \`${e}\``,
      validator: (e) => /^[a-z]+$/gi.test(e)
    });
  }
  /**
  Test a string to be numeric.
  */
  get numeric() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be numeric, got \`${e}\``,
      validator: (e) => /^[+-]?\d+$/i.test(e)
    });
  }
  /**
  Test a string to be a valid date.
  */
  get date() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be a date, got \`${e}\``,
      validator: Jf
    });
  }
  /**
  Test a non-empty string to be lowercase. Matching both alphabetical & numbers.
  */
  get lowercase() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be lowercase, got \`${e}\``,
      validator: (e) => e.trim() !== "" && e === e.toLowerCase()
    });
  }
  /**
  Test a non-empty string to be uppercase. Matching both alphabetical & numbers.
  */
  get uppercase() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be uppercase, got \`${e}\``,
      validator: (e) => e.trim() !== "" && e === e.toUpperCase()
    });
  }
  /**
  Test a string to be a valid URL.
  */
  get url() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be a URL, got \`${e}\``,
      validator: Wf.default.urlString
    });
  }
}
Oi.StringPredicate = Yf;
var Pi = {};
Object.defineProperty(Pi, "__esModule", { value: !0 });
Pi.NumberPredicate = void 0;
const Fr = su, Zf = Ae();
class Kf extends Zf.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("number", e);
  }
  /**
      Test a number to be in a specified range.
  
      @param start - Start of the range.
      @param end - End of the range.
      */
  inRange(e, r) {
    return this.addValidator({
      message: (u, n) => `Expected ${n} to be in range [${e}..${r}], got ${u}`,
      validator: (u) => Fr.default.inRange(u, [e, r])
    });
  }
  /**
      Test a number to be greater than the provided value.
  
      @param number - Minimum value.
      */
  greaterThan(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be greater than ${e}, got ${r}`,
      validator: (r) => r > e
    });
  }
  /**
      Test a number to be greater than or equal to the provided value.
  
      @param number - Minimum value.
      */
  greaterThanOrEqual(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be greater than or equal to ${e}, got ${r}`,
      validator: (r) => r >= e
    });
  }
  /**
      Test a number to be less than the provided value.
  
      @param number - Maximum value.
      */
  lessThan(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be less than ${e}, got ${r}`,
      validator: (r) => r < e
    });
  }
  /**
      Test a number to be less than or equal to the provided value.
  
      @param number - Minimum value.
      */
  lessThanOrEqual(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be less than or equal to ${e}, got ${r}`,
      validator: (r) => r <= e
    });
  }
  /**
      Test a number to be equal to a specified number.
  
      @param expected - Expected value to match.
      */
  equal(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be equal to ${e}, got ${r}`,
      validator: (r) => r === e
    });
  }
  /**
      Test if a number is an element of the provided list.
  
      @param list - List of possible values.
      */
  oneOf(e) {
    return this.addValidator({
      message: (r, u) => {
        let n = JSON.stringify(e);
        if (e.length > 10) {
          const i = e.length - 10;
          n = JSON.stringify(e.slice(0, 10)).replace(/]$/, `,…+${i} more]`);
        }
        return `Expected ${u} to be one of \`${n}\`, got ${r}`;
      },
      validator: (r) => e.includes(r)
    });
  }
  /**
  Test a number to be an integer.
  */
  get integer() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be an integer, got ${e}`,
      validator: (e) => Fr.default.integer(e)
    });
  }
  /**
  Test a number to be finite.
  */
  get finite() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be finite, got ${e}`,
      validator: (e) => !Fr.default.infinite(e)
    });
  }
  /**
  Test a number to be infinite.
  */
  get infinite() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be infinite, got ${e}`,
      validator: (e) => Fr.default.infinite(e)
    });
  }
  /**
  Test a number to be positive.
  */
  get positive() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be positive, got ${e}`,
      validator: (e) => e > 0
    });
  }
  /**
  Test a number to be negative.
  */
  get negative() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be negative, got ${e}`,
      validator: (e) => e < 0
    });
  }
  /**
  Test a number to be an integer or infinite.
  */
  get integerOrInfinite() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be an integer or infinite, got ${e}`,
      validator: (e) => Fr.default.integer(e) || Fr.default.infinite(e)
    });
  }
  /**
  Test a number to be in a valid range for a 8-bit unsigned integer.
  */
  get uint8() {
    return this.integer.inRange(0, 255);
  }
  /**
  Test a number to be in a valid range for a 16-bit unsigned integer.
  */
  get uint16() {
    return this.integer.inRange(0, 65535);
  }
  /**
  Test a number to be in a valid range for a 32-bit unsigned integer.
  */
  get uint32() {
    return this.integer.inRange(0, 4294967295);
  }
  /**
  Test a number to be in a valid range for a 8-bit signed integer.
  */
  get int8() {
    return this.integer.inRange(-128, 127);
  }
  /**
  Test a number to be in a valid range for a 16-bit signed integer.
  */
  get int16() {
    return this.integer.inRange(-32768, 32767);
  }
  /**
  Test a number to be in a valid range for a 32-bit signed integer.
  */
  get int32() {
    return this.integer.inRange(-2147483648, 2147483647);
  }
}
Pi.NumberPredicate = Kf;
var $i = {};
Object.defineProperty($i, "__esModule", { value: !0 });
$i.BigIntPredicate = void 0;
const Qf = Ae();
class ed extends Qf.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("bigint", e);
  }
}
$i.BigIntPredicate = ed;
var Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
Ni.BooleanPredicate = void 0;
const td = Ae();
class rd extends td.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("boolean", e);
  }
  /**
  Test a boolean to be true.
  */
  get true() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be true, got ${e}`,
      validator: (e) => e
    });
  }
  /**
  Test a boolean to be false.
  */
  get false() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be false, got ${e}`,
      validator: (e) => !e
    });
  }
}
Ni.BooleanPredicate = rd;
var Mi = {}, pi = { exports: {} };
pi.exports;
(function(t, e) {
  var r = 200, u = "__lodash_hash_undefined__", n = 1, i = 2, a = 9007199254740991, c = "[object Arguments]", o = "[object Array]", f = "[object AsyncFunction]", s = "[object Boolean]", p = "[object Date]", l = "[object Error]", h = "[object Function]", b = "[object GeneratorFunction]", v = "[object Map]", y = "[object Number]", g = "[object Null]", D = "[object Object]", E = "[object Promise]", I = "[object Proxy]", k = "[object RegExp]", d = "[object Set]", O = "[object String]", V = "[object Symbol]", z = "[object Undefined]", W = "[object WeakMap]", A = "[object ArrayBuffer]", $ = "[object DataView]", L = "[object Float32Array]", q = "[object Float64Array]", _ = "[object Int8Array]", C = "[object Int16Array]", T = "[object Int32Array]", j = "[object Uint8Array]", oe = "[object Uint8ClampedArray]", K = "[object Uint16Array]", te = "[object Uint32Array]", ee = /[\\^$.*+?()[\]{}|]/g, Lt = /^\[object .+?Constructor\]$/, Z = /^(?:0|[1-9]\d*)$/, U = {};
  U[L] = U[q] = U[_] = U[C] = U[T] = U[j] = U[oe] = U[K] = U[te] = !0, U[c] = U[o] = U[A] = U[s] = U[$] = U[p] = U[l] = U[h] = U[v] = U[y] = U[D] = U[k] = U[d] = U[O] = U[W] = !1;
  var Fe = typeof N == "object" && N && N.Object === Object && N, je = typeof self == "object" && self && self.Object === Object && self, fe = Fe || je || Function("return this")(), rr = e && !e.nodeType && e, ur = rr && !0 && t && !t.nodeType && t, yu = ur && ur.exports === rr, Dr = yu && Fe.process, yn = function() {
    try {
      return Dr && Dr.binding && Dr.binding("util");
    } catch {
    }
  }(), vn = yn && yn.isTypedArray;
  function Tr(m, w) {
    for (var P = -1, R = m == null ? 0 : m.length, se = 0, H = []; ++P < R; ) {
      var he = m[P];
      w(he, P, m) && (H[se++] = he);
    }
    return H;
  }
  function vu(m, w) {
    for (var P = -1, R = w.length, se = m.length; ++P < R; )
      m[se + P] = w[P];
    return m;
  }
  function xn(m, w) {
    for (var P = -1, R = m == null ? 0 : m.length; ++P < R; )
      if (w(m[P], P, m))
        return !0;
    return !1;
  }
  function Ge(m, w) {
    for (var P = -1, R = Array(m); ++P < m; )
      R[P] = w(P);
    return R;
  }
  function wn(m) {
    return function(w) {
      return m(w);
    };
  }
  function En(m, w) {
    return m.has(w);
  }
  function Ta(m, w) {
    return m == null ? void 0 : m[w];
  }
  function An(m) {
    var w = -1, P = Array(m.size);
    return m.forEach(function(R, se) {
      P[++w] = [se, R];
    }), P;
  }
  function kr(m, w) {
    return function(P) {
      return m(w(P));
    };
  }
  function _n(m) {
    var w = -1, P = Array(m.size);
    return m.forEach(function(R) {
      P[++w] = R;
    }), P;
  }
  var Sn = Array.prototype, ka = Function.prototype, We = Object.prototype, Cr = fe["__core-js_shared__"], Dn = ka.toString, Je = We.hasOwnProperty, Or = function() {
    var m = /[^.]+$/.exec(Cr && Cr.keys && Cr.keys.IE_PROTO || "");
    return m ? "Symbol(src)_1." + m : "";
  }(), It = We.toString, xu = RegExp(
    "^" + Dn.call(Je).replace(ee, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Pr = yu ? fe.Buffer : void 0, Bt = fe.Symbol, Rt = fe.Uint8Array, Tn = We.propertyIsEnumerable, Ca = Sn.splice, xt = Bt ? Bt.toStringTag : void 0, kn = Object.getOwnPropertySymbols, Oa = Pr ? Pr.isBuffer : void 0, Cn = kr(Object.keys, Object), nr = rt(fe, "DataView"), qe = rt(fe, "Map"), Ue = rt(fe, "Promise"), et = rt(fe, "Set"), Ft = rt(fe, "WeakMap"), Pe = rt(Object, "create"), Pa = Se(nr), $r = Se(qe), ir = Se(Ue), On = Se(et), Pn = Se(Ft), $n = Bt ? Bt.prototype : void 0, wu = $n ? $n.valueOf : void 0;
  function lt(m) {
    var w = -1, P = m == null ? 0 : m.length;
    for (this.clear(); ++w < P; ) {
      var R = m[w];
      this.set(R[0], R[1]);
    }
  }
  function Nn() {
    this.__data__ = Pe ? Pe(null) : {}, this.size = 0;
  }
  function Nr(m) {
    var w = this.has(m) && delete this.__data__[m];
    return this.size -= w ? 1 : 0, w;
  }
  function jt(m) {
    var w = this.__data__;
    if (Pe) {
      var P = w[m];
      return P === u ? void 0 : P;
    }
    return Je.call(w, m) ? w[m] : void 0;
  }
  function $a(m) {
    var w = this.__data__;
    return Pe ? w[m] !== void 0 : Je.call(w, m);
  }
  function ct(m, w) {
    var P = this.__data__;
    return this.size += this.has(m) ? 0 : 1, P[m] = Pe && w === void 0 ? u : w, this;
  }
  lt.prototype.clear = Nn, lt.prototype.delete = Nr, lt.prototype.get = jt, lt.prototype.has = $a, lt.prototype.set = ct;
  function tt(m) {
    var w = -1, P = m == null ? 0 : m.length;
    for (this.clear(); ++w < P; ) {
      var R = m[w];
      this.set(R[0], R[1]);
    }
  }
  function wt() {
    this.__data__ = [], this.size = 0;
  }
  function Mn(m) {
    var w = this.__data__, P = ce(w, m);
    if (P < 0)
      return !1;
    var R = w.length - 1;
    return P == R ? w.pop() : Ca.call(w, P, 1), --this.size, !0;
  }
  function Na(m) {
    var w = this.__data__, P = ce(w, m);
    return P < 0 ? void 0 : w[P][1];
  }
  function Mr(m) {
    return ce(this.__data__, m) > -1;
  }
  function Eu(m, w) {
    var P = this.__data__, R = ce(P, m);
    return R < 0 ? (++this.size, P.push([m, w])) : P[R][1] = w, this;
  }
  tt.prototype.clear = wt, tt.prototype.delete = Mn, tt.prototype.get = Na, tt.prototype.has = Mr, tt.prototype.set = Eu;
  function ft(m) {
    var w = -1, P = m == null ? 0 : m.length;
    for (this.clear(); ++w < P; ) {
      var R = m[w];
      this.set(R[0], R[1]);
    }
  }
  function Ln() {
    this.size = 0, this.__data__ = {
      hash: new lt(),
      map: new (qe || tt)(),
      string: new lt()
    };
  }
  function In(m) {
    var w = Q(this, m).delete(m);
    return this.size -= w ? 1 : 0, w;
  }
  function ar(m) {
    return Q(this, m).get(m);
  }
  function Bn(m) {
    return Q(this, m).has(m);
  }
  function Ma(m, w) {
    var P = Q(this, m), R = P.size;
    return P.set(m, w), this.size += P.size == R ? 0 : 1, this;
  }
  ft.prototype.clear = Ln, ft.prototype.delete = In, ft.prototype.get = ar, ft.prototype.has = Bn, ft.prototype.set = Ma;
  function x(m) {
    var w = -1, P = m == null ? 0 : m.length;
    for (this.__data__ = new ft(); ++w < P; )
      this.add(m[w]);
  }
  function S(m) {
    return this.__data__.set(m, u), this;
  }
  function M(m) {
    return this.__data__.has(m);
  }
  x.prototype.add = x.prototype.push = S, x.prototype.has = M;
  function B(m) {
    var w = this.__data__ = new tt(m);
    this.size = w.size;
  }
  function ae() {
    this.__data__ = new tt(), this.size = 0;
  }
  function J(m) {
    var w = this.__data__, P = w.delete(m);
    return this.size = w.size, P;
  }
  function le(m) {
    return this.__data__.get(m);
  }
  function pe(m) {
    return this.__data__.has(m);
  }
  function Ve(m, w) {
    var P = this.__data__;
    if (P instanceof tt) {
      var R = P.__data__;
      if (!qe || R.length < r - 1)
        return R.push([m, w]), this.size = ++P.size, this;
      P = this.__data__ = new ft(R);
    }
    return P.set(m, w), this.size = P.size, this;
  }
  B.prototype.clear = ae, B.prototype.delete = J, B.prototype.get = le, B.prototype.has = pe, B.prototype.set = Ve;
  function ge(m, w) {
    var P = zt(m), R = !P && Br(m), se = !P && !R && Ht(m), H = !P && !R && !se && Ts(m), he = P || R || se || H, xe = he ? Ge(m.length, String) : [], _e = xe.length;
    for (var de in m)
      Je.call(m, de) && !(he && // Safari 9 has enumerable `arguments.length` in strict mode.
      (de == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      se && (de == "offset" || de == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      H && (de == "buffer" || de == "byteLength" || de == "byteOffset") || // Skip index properties.
      ut(de, _e))) && xe.push(de);
    return xe;
  }
  function ce(m, w) {
    for (var P = m.length; P--; )
      if (Su(m[P][0], w))
        return P;
    return -1;
  }
  function Xe(m, w, P) {
    var R = w(m);
    return zt(m) ? R : vu(R, P(m));
  }
  function Ce(m) {
    return m == null ? m === void 0 ? z : g : xt && xt in Object(m) ? dt(m) : Vt(m);
  }
  function ve(m) {
    return Du(m) && Ce(m) == c;
  }
  function Ye(m, w, P, R, se) {
    return m === w ? !0 : m == null || w == null || !Du(m) && !Du(w) ? m !== m && w !== w : qt(m, w, P, R, Ye, se);
  }
  function qt(m, w, P, R, se, H) {
    var he = zt(m), xe = zt(w), _e = he ? o : me(m), de = xe ? o : me(w);
    _e = _e == c ? D : _e, de = de == c ? D : de;
    var ze = _e == D, nt = de == D, De = _e == de;
    if (De && Ht(m)) {
      if (!Ht(w))
        return !1;
      he = !0, ze = !1;
    }
    if (De && !ze)
      return H || (H = new B()), he || Ts(m) ? Au(m, w, P, R, se, H) : La(m, w, _e, P, R, se, H);
    if (!(P & n)) {
      var Ze = ze && Je.call(m, "__wrapped__"), Ke = nt && Je.call(w, "__wrapped__");
      if (Ze || Ke) {
        var Gt = Ze ? m.value() : m, Et = Ke ? w.value() : w;
        return H || (H = new B()), se(Gt, Et, P, R, H);
      }
    }
    return De ? (H || (H = new B()), Ia(m, w, P, R, se, H)) : !1;
  }
  function Lr(m) {
    if (!Ds(m) || sr(m))
      return !1;
    var w = lr(m) ? xu : Lt;
    return w.test(Se(m));
  }
  function Ut(m) {
    return Du(m) && cr(m.length) && !!U[Ce(m)];
  }
  function or(m) {
    if (!Ir(m))
      return Cn(m);
    var w = [];
    for (var P in Object(m))
      Je.call(m, P) && P != "constructor" && w.push(P);
    return w;
  }
  function Au(m, w, P, R, se, H) {
    var he = P & n, xe = m.length, _e = w.length;
    if (xe != _e && !(he && _e > xe))
      return !1;
    var de = H.get(m);
    if (de && H.get(w))
      return de == w;
    var ze = -1, nt = !0, De = P & i ? new x() : void 0;
    for (H.set(m, w), H.set(w, m); ++ze < xe; ) {
      var Ze = m[ze], Ke = w[ze];
      if (R)
        var Gt = he ? R(Ke, Ze, ze, w, m, H) : R(Ze, Ke, ze, m, w, H);
      if (Gt !== void 0) {
        if (Gt)
          continue;
        nt = !1;
        break;
      }
      if (De) {
        if (!xn(w, function(Et, fr) {
          if (!En(De, fr) && (Ze === Et || se(Ze, Et, P, R, H)))
            return De.push(fr);
        })) {
          nt = !1;
          break;
        }
      } else if (!(Ze === Ke || se(Ze, Ke, P, R, H))) {
        nt = !1;
        break;
      }
    }
    return H.delete(m), H.delete(w), nt;
  }
  function La(m, w, P, R, se, H, he) {
    switch (P) {
      case $:
        if (m.byteLength != w.byteLength || m.byteOffset != w.byteOffset)
          return !1;
        m = m.buffer, w = w.buffer;
      case A:
        return !(m.byteLength != w.byteLength || !H(new Rt(m), new Rt(w)));
      case s:
      case p:
      case y:
        return Su(+m, +w);
      case l:
        return m.name == w.name && m.message == w.message;
      case k:
      case O:
        return m == w + "";
      case v:
        var xe = An;
      case d:
        var _e = R & n;
        if (xe || (xe = _n), m.size != w.size && !_e)
          return !1;
        var de = he.get(m);
        if (de)
          return de == w;
        R |= i, he.set(m, w);
        var ze = Au(xe(m), xe(w), R, se, H, he);
        return he.delete(m), ze;
      case V:
        if (wu)
          return wu.call(m) == wu.call(w);
    }
    return !1;
  }
  function Ia(m, w, P, R, se, H) {
    var he = P & n, xe = re(m), _e = xe.length, de = re(w), ze = de.length;
    if (_e != ze && !he)
      return !1;
    for (var nt = _e; nt--; ) {
      var De = xe[nt];
      if (!(he ? De in w : Je.call(w, De)))
        return !1;
    }
    var Ze = H.get(m);
    if (Ze && H.get(w))
      return Ze == w;
    var Ke = !0;
    H.set(m, w), H.set(w, m);
    for (var Gt = he; ++nt < _e; ) {
      De = xe[nt];
      var Et = m[De], fr = w[De];
      if (R)
        var ks = he ? R(fr, Et, De, w, m, H) : R(Et, fr, De, m, w, H);
      if (!(ks === void 0 ? Et === fr || se(Et, fr, P, R, H) : ks)) {
        Ke = !1;
        break;
      }
      Gt || (Gt = De == "constructor");
    }
    if (Ke && !Gt) {
      var Fn = m.constructor, jn = w.constructor;
      Fn != jn && "constructor" in m && "constructor" in w && !(typeof Fn == "function" && Fn instanceof Fn && typeof jn == "function" && jn instanceof jn) && (Ke = !1);
    }
    return H.delete(m), H.delete(w), Ke;
  }
  function re(m) {
    return Xe(m, yf, _u);
  }
  function Q(m, w) {
    var P = m.__data__;
    return pt(w) ? P[typeof w == "string" ? "string" : "hash"] : P.map;
  }
  function rt(m, w) {
    var P = Ta(m, w);
    return Lr(P) ? P : void 0;
  }
  function dt(m) {
    var w = Je.call(m, xt), P = m[xt];
    try {
      m[xt] = void 0;
      var R = !0;
    } catch {
    }
    var se = It.call(m);
    return R && (w ? m[xt] = P : delete m[xt]), se;
  }
  var _u = kn ? function(m) {
    return m == null ? [] : (m = Object(m), Tr(kn(m), function(w) {
      return Tn.call(m, w);
    }));
  } : vf, me = Ce;
  (nr && me(new nr(new ArrayBuffer(1))) != $ || qe && me(new qe()) != v || Ue && me(Ue.resolve()) != E || et && me(new et()) != d || Ft && me(new Ft()) != W) && (me = function(m) {
    var w = Ce(m), P = w == D ? m.constructor : void 0, R = P ? Se(P) : "";
    if (R)
      switch (R) {
        case Pa:
          return $;
        case $r:
          return v;
        case ir:
          return E;
        case On:
          return d;
        case Pn:
          return W;
      }
    return w;
  });
  function ut(m, w) {
    return w = w ?? a, !!w && (typeof m == "number" || Z.test(m)) && m > -1 && m % 1 == 0 && m < w;
  }
  function pt(m) {
    var w = typeof m;
    return w == "string" || w == "number" || w == "symbol" || w == "boolean" ? m !== "__proto__" : m === null;
  }
  function sr(m) {
    return !!Or && Or in m;
  }
  function Ir(m) {
    var w = m && m.constructor, P = typeof w == "function" && w.prototype || We;
    return m === P;
  }
  function Vt(m) {
    return It.call(m);
  }
  function Se(m) {
    if (m != null) {
      try {
        return Dn.call(m);
      } catch {
      }
      try {
        return m + "";
      } catch {
      }
    }
    return "";
  }
  function Su(m, w) {
    return m === w || m !== m && w !== w;
  }
  var Br = ve(/* @__PURE__ */ function() {
    return arguments;
  }()) ? ve : function(m) {
    return Du(m) && Je.call(m, "callee") && !Tn.call(m, "callee");
  }, zt = Array.isArray;
  function Rr(m) {
    return m != null && cr(m.length) && !lr(m);
  }
  var Ht = Oa || xf;
  function Rn(m, w) {
    return Ye(m, w);
  }
  function lr(m) {
    if (!Ds(m))
      return !1;
    var w = Ce(m);
    return w == h || w == b || w == f || w == I;
  }
  function cr(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= a;
  }
  function Ds(m) {
    var w = typeof m;
    return m != null && (w == "object" || w == "function");
  }
  function Du(m) {
    return m != null && typeof m == "object";
  }
  var Ts = vn ? wn(vn) : Ut;
  function yf(m) {
    return Rr(m) ? ge(m) : or(m);
  }
  function vf() {
    return [];
  }
  function xf() {
    return !1;
  }
  t.exports = Rn;
})(pi, pi.exports);
var Li = pi.exports, mr = {}, fu = {};
Object.defineProperty(fu, "__esModule", { value: !0 });
const ud = cu;
function uc(t, e, r, u = !0) {
  r[ud.testSymbol](t, uc, e, u);
}
fu.default = uc;
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.exact = mr.partial = void 0;
const nc = su, ic = fu, ac = cu;
function oc(t, e, r) {
  try {
    for (const u of Object.keys(e)) {
      const n = r ? `${r}.${u}` : u;
      if ((0, ac.isPredicate)(e[u]))
        (0, ic.default)(t[u], n, e[u]);
      else if (nc.default.plainObject(e[u])) {
        const i = oc(t[u], e[u], n);
        if (i !== !0)
          return i;
      }
    }
    return !0;
  } catch (u) {
    return u.message;
  }
}
mr.partial = oc;
function sc(t, e, r, u) {
  try {
    const n = new Set(Object.keys(t));
    for (const i of Object.keys(e)) {
      n.delete(i);
      const a = r ? `${r}.${i}` : i;
      if ((0, ac.isPredicate)(e[i]))
        (0, ic.default)(t[i], a, e[i]);
      else if (nc.default.plainObject(e[i])) {
        if (!Object.prototype.hasOwnProperty.call(t, i))
          return `Expected \`${a}\` to exist`;
        const c = sc(t[i], e[i], a);
        if (c !== !0)
          return c;
      }
    }
    if (n.size > 0) {
      const i = [...n.keys()][0], a = r ? `${r}.${i}` : i;
      return `Did not expect ${u ? "element" : "property"} \`${a}\` to exist, got \`${t[i]}\``;
    }
    return !0;
  } catch (n) {
    return n.message;
  }
}
mr.exact = sc;
var du = {};
Object.defineProperty(du, "__esModule", { value: !0 });
const nd = fu;
du.default = (t, e, r) => {
  try {
    for (const u of t)
      (0, nd.default)(u, e, r, !1);
    return !0;
  } catch (u) {
    return u.message;
  }
};
Object.defineProperty(Mi, "__esModule", { value: !0 });
Mi.ArrayPredicate = void 0;
const id = Li, ad = Ae(), od = mr, sd = du;
class ld extends ad.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("array", e);
  }
  /**
      Test an array to have a specific length.
  
      @param length - The length of the array.
      */
  length(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have length \`${e}\`, got \`${r.length}\``,
      validator: (r) => r.length === e
    });
  }
  /**
      Test an array to have a minimum length.
  
      @param length - The minimum length of the array.
      */
  minLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a minimum length of \`${e}\`, got \`${r.length}\``,
      validator: (r) => r.length >= e,
      negatedMessage: (r, u) => `Expected ${u} to have a maximum length of \`${e - 1}\`, got \`${r.length}\``
    });
  }
  /**
      Test an array to have a maximum length.
  
      @param length - The maximum length of the array.
      */
  maxLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a maximum length of \`${e}\`, got \`${r.length}\``,
      validator: (r) => r.length <= e,
      negatedMessage: (r, u) => `Expected ${u} to have a minimum length of \`${e + 1}\`, got \`${r.length}\``
    });
  }
  /**
      Test an array to start with a specific value. The value is tested by identity, not structure.
  
      @param searchElement - The value that should be the start of the array.
      */
  startsWith(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to start with \`${e}\`, got \`${r[0]}\``,
      validator: (r) => r[0] === e
    });
  }
  /**
      Test an array to end with a specific value. The value is tested by identity, not structure.
  
      @param searchElement - The value that should be the end of the array.
      */
  endsWith(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to end with \`${e}\`, got \`${r[r.length - 1]}\``,
      validator: (r) => r[r.length - 1] === e
    });
  }
  /**
      Test an array to include all the provided elements. The values are tested by identity, not structure.
  
      @param searchElements - The values that should be included in the array.
      */
  includes(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to include all elements of \`${JSON.stringify(e)}\`, got \`${JSON.stringify(r)}\``,
      validator: (r) => e.every((u) => r.includes(u))
    });
  }
  /**
      Test an array to include any of the provided elements. The values are tested by identity, not structure.
  
      @param searchElements - The values that should be included in the array.
      */
  includesAny(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to include any element of \`${JSON.stringify(e)}\`, got \`${JSON.stringify(r)}\``,
      validator: (r) => e.some((u) => r.includes(u))
    });
  }
  /**
  Test an array to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be empty, got \`${JSON.stringify(e)}\``,
      validator: (e) => e.length === 0
    });
  }
  /**
  Test an array to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to not be empty`,
      validator: (e) => e.length > 0
    });
  }
  /**
      Test an array to be deeply equal to the provided array.
  
      @param expected - Expected value to match.
      */
  deepEqual(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be deeply equal to \`${JSON.stringify(e)}\`, got \`${JSON.stringify(r)}\``,
      validator: (r) => id(r, e)
    });
  }
  /**
      Test all elements in the array to match to provided predicate.
  
      @param predicate - The predicate that should be applied against every individual item.
  
      @example
      ```
      ow(['a', 1], ow.array.ofType(ow.any(ow.string, ow.number)));
      ```
      */
  ofType(e) {
    return this.addValidator({
      message: (r, u, n) => `(${u}) ${n}`,
      validator: (r) => (0, sd.default)(r, "values", e)
    });
  }
  /**
      Test if the elements in the array exactly matches the elements placed at the same indices in the predicates array.
  
      @param predicates - Predicates to test the array against. Describes what the tested array should look like.
  
      @example
      ```
      ow(['1', 2], ow.array.exactShape([ow.string, ow.number]));
      ```
      */
  exactShape(e) {
    const r = e;
    return this.addValidator({
      message: (u, n, i) => `${i.replace("Expected", "Expected element")} in ${n}`,
      validator: (u) => (0, od.exact)(u, r, void 0, !0)
    });
  }
}
Mi.ArrayPredicate = ld;
var Ii = {}, cd = (t) => {
  const e = typeof t;
  return t !== null && (e === "object" || e === "function");
};
const dr = cd, fd = /* @__PURE__ */ new Set([
  "__proto__",
  "prototype",
  "constructor"
]), dd = (t) => !t.some((e) => fd.has(e));
function qn(t) {
  const e = t.split("."), r = [];
  for (let u = 0; u < e.length; u++) {
    let n = e[u];
    for (; n[n.length - 1] === "\\" && e[u + 1] !== void 0; )
      n = n.slice(0, -1) + ".", n += e[++u];
    r.push(n);
  }
  return dd(r) ? r : [];
}
var pd = {
  get(t, e, r) {
    if (!dr(t) || typeof e != "string")
      return r === void 0 ? t : r;
    const u = qn(e);
    if (u.length !== 0) {
      for (let n = 0; n < u.length; n++)
        if (t = t[u[n]], t == null) {
          if (n !== u.length - 1)
            return r;
          break;
        }
      return t === void 0 ? r : t;
    }
  },
  set(t, e, r) {
    if (!dr(t) || typeof e != "string")
      return t;
    const u = t, n = qn(e);
    for (let i = 0; i < n.length; i++) {
      const a = n[i];
      dr(t[a]) || (t[a] = {}), i === n.length - 1 && (t[a] = r), t = t[a];
    }
    return u;
  },
  delete(t, e) {
    if (!dr(t) || typeof e != "string")
      return !1;
    const r = qn(e);
    for (let u = 0; u < r.length; u++) {
      const n = r[u];
      if (u === r.length - 1)
        return delete t[n], !0;
      if (t = t[n], !dr(t))
        return !1;
    }
  },
  has(t, e) {
    if (!dr(t) || typeof e != "string")
      return !1;
    const r = qn(e);
    if (r.length === 0)
      return !1;
    for (let u = 0; u < r.length; u++)
      if (dr(t)) {
        if (!(r[u] in t))
          return !1;
        t = t[r[u]];
      } else
        return !1;
    return !0;
  }
}, xr = {};
Object.defineProperty(xr, "__esModule", { value: !0 });
xr.default = (t, e, r = 5) => {
  const u = [];
  for (const n of e)
    if (!t.has(n) && (u.push(n), u.length === r))
      return u;
  return u.length === 0 ? !0 : u;
};
var Co = {};
Object.defineProperty(Co, "__esModule", { value: !0 });
const hd = su, gd = fu, lc = (t, e) => hd.default.plainObject(t) ? Object.values(t).every((r) => lc(r, e)) : ((0, gd.default)(t, "deep values", e, !1), !0);
Co.default = (t, e) => {
  try {
    return lc(t, e);
  } catch (r) {
    return r.message;
  }
};
Object.defineProperty(Ii, "__esModule", { value: !0 });
Ii.ObjectPredicate = void 0;
const md = su, Ls = pd, bd = Li, yd = xr, vd = du, xd = Co, Is = mr, wd = Ae();
class Ed extends wd.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("object", e);
  }
  /**
  Test if an Object is a plain object.
  */
  get plain() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be a plain object`,
      validator: (e) => md.default.plainObject(e)
    });
  }
  /**
  Test an object to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be empty, got \`${JSON.stringify(e)}\``,
      validator: (e) => Object.keys(e).length === 0
    });
  }
  /**
  Test an object to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to not be empty`,
      validator: (e) => Object.keys(e).length > 0
    });
  }
  /**
      Test all the values in the object to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the object.
      */
  valuesOfType(e) {
    return this.addValidator({
      message: (r, u, n) => `(${u}) ${n}`,
      validator: (r) => (0, vd.default)(Object.values(r), "values", e)
    });
  }
  /**
      Test all the values in the object deeply to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the object.
      */
  deepValuesOfType(e) {
    return this.addValidator({
      message: (r, u, n) => `(${u}) ${n}`,
      validator: (r) => (0, xd.default)(r, e)
    });
  }
  /**
      Test an object to be deeply equal to the provided object.
  
      @param expected - Expected object to match.
      */
  deepEqual(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be deeply equal to \`${JSON.stringify(e)}\`, got \`${JSON.stringify(r)}\``,
      validator: (r) => bd(r, e)
    });
  }
  /**
      Test an object to be of a specific instance type.
  
      @param instance - The expected instance type of the object.
      */
  instanceOf(e) {
    return this.addValidator({
      message: (r, u) => {
        var n;
        let { name: i } = (n = r == null ? void 0 : r.constructor) !== null && n !== void 0 ? n : {};
        return (!i || i === "Object") && (i = JSON.stringify(r)), `Expected ${u} \`${i}\` to be of type \`${e.name}\``;
      },
      validator: (r) => r instanceof e
    });
  }
  /**
      Test an object to include all the provided keys. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties.
  
      @param keys - The keys that should be present in the object.
      */
  hasKeys(...e) {
    return this.addValidator({
      message: (r, u, n) => `Expected ${u} to have keys \`${JSON.stringify(n)}\``,
      validator: (r) => (0, yd.default)({
        has: (u) => Ls.has(r, u)
      }, e)
    });
  }
  /**
      Test an object to include any of the provided keys. You can use [dot-notation](https://github.com/sindresorhus/dot-prop) in a key to access nested properties.
  
      @param keys - The keys that could be a key in the object.
      */
  hasAnyKeys(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have any key of \`${JSON.stringify(e)}\``,
      validator: (r) => e.some((u) => Ls.has(r, u))
    });
  }
  /**
      Test an object to match the `shape` partially. This means that it ignores unexpected properties. The shape comparison is deep.
  
      The shape is an object which describes how the tested object should look like. The keys are the same as the source object and the values are predicates.
  
      @param shape - Shape to test the object against.
  
      @example
      ```
      import ow from 'ow';
  
      const object = {
          unicorn: '🦄',
          rainbow: '🌈'
      };
  
      ow(object, ow.object.partialShape({
          unicorn: ow.string
      }));
      ```
      */
  partialShape(e) {
    return this.addValidator({
      // TODO: Improve this when message handling becomes smarter
      message: (r, u, n) => `${n.replace("Expected", "Expected property")} in ${u}`,
      validator: (r) => (0, Is.partial)(r, e)
    });
  }
  /**
      Test an object to match the `shape` exactly. This means that will fail if it comes across unexpected properties. The shape comparison is deep.
  
      The shape is an object which describes how the tested object should look like. The keys are the same as the source object and the values are predicates.
  
      @param shape - Shape to test the object against.
  
      @example
      ```
      import ow from 'ow';
  
      ow({unicorn: '🦄'}, ow.object.exactShape({
          unicorn: ow.string
      }));
      ```
      */
  exactShape(e) {
    return this.addValidator({
      // TODO: Improve this when message handling becomes smarter
      message: (r, u, n) => `${n.replace("Expected", "Expected property")} in ${u}`,
      validator: (r) => (0, Is.exact)(r, e)
    });
  }
}
Ii.ObjectPredicate = Ed;
var Bi = {};
Object.defineProperty(Bi, "__esModule", { value: !0 });
Bi.DatePredicate = void 0;
const Ad = Ae();
class _d extends Ad.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("date", e);
  }
  /**
      Test a date to be before another date.
  
      @param date - Maximum value.
      */
  before(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} ${r.toISOString()} to be before ${e.toISOString()}`,
      validator: (r) => r.getTime() < e.getTime()
    });
  }
  /**
      Test a date to be before another date.
  
      @param date - Minimum value.
      */
  after(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} ${r.toISOString()} to be after ${e.toISOString()}`,
      validator: (r) => r.getTime() > e.getTime()
    });
  }
}
Bi.DatePredicate = _d;
var Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.ErrorPredicate = void 0;
const Sd = Ae();
class Dd extends Sd.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("error", e);
  }
  /**
      Test an error to have a specific name.
  
      @param expected - Expected name of the Error.
      */
  name(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have name \`${e}\`, got \`${r.name}\``,
      validator: (r) => r.name === e
    });
  }
  /**
      Test an error to have a specific message.
  
      @param expected - Expected message of the Error.
      */
  message(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} message to be \`${e}\`, got \`${r.message}\``,
      validator: (r) => r.message === e
    });
  }
  /**
      Test the error message to include a specific message.
  
      @param message - Message that should be included in the error.
      */
  messageIncludes(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} message to include \`${e}\`, got \`${r.message}\``,
      validator: (r) => r.message.includes(e)
    });
  }
  /**
      Test the error object to have specific keys.
  
      @param keys - One or more keys which should be part of the error object.
      */
  hasKeys(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} message to have keys \`${e.join("`, `")}\``,
      validator: (r) => e.every((u) => Object.prototype.hasOwnProperty.call(r, u))
    });
  }
  /**
      Test an error to be of a specific instance type.
  
      @param instance - The expected instance type of the error.
      */
  instanceOf(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} \`${r.name}\` to be of type \`${e.name}\``,
      validator: (r) => r instanceof e
    });
  }
  /**
  Test an Error to be a TypeError.
  */
  get typeError() {
    return this.instanceOf(TypeError);
  }
  /**
  Test an Error to be an EvalError.
  */
  get evalError() {
    return this.instanceOf(EvalError);
  }
  /**
  Test an Error to be a RangeError.
  */
  get rangeError() {
    return this.instanceOf(RangeError);
  }
  /**
  Test an Error to be a ReferenceError.
  */
  get referenceError() {
    return this.instanceOf(ReferenceError);
  }
  /**
  Test an Error to be a SyntaxError.
  */
  get syntaxError() {
    return this.instanceOf(SyntaxError);
  }
  /**
  Test an Error to be a URIError.
  */
  get uriError() {
    return this.instanceOf(URIError);
  }
}
Ri.ErrorPredicate = Dd;
var Fi = {};
Object.defineProperty(Fi, "__esModule", { value: !0 });
Fi.MapPredicate = void 0;
const Td = Li, Bs = xr, Rs = du, kd = Ae();
class Cd extends kd.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("Map", e);
  }
  /**
      Test a Map to have a specific size.
  
      @param size - The size of the Map.
      */
  size(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have size \`${e}\`, got \`${r.size}\``,
      validator: (r) => r.size === e
    });
  }
  /**
      Test an Map to have a minimum size.
  
      @param size - The minimum size of the Map.
      */
  minSize(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a minimum size of \`${e}\`, got \`${r.size}\``,
      validator: (r) => r.size >= e,
      negatedMessage: (r, u) => `Expected ${u} to have a maximum size of \`${e - 1}\`, got \`${r.size}\``
    });
  }
  /**
      Test an Map to have a maximum size.
  
      @param size - The maximum size of the Map.
      */
  maxSize(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a maximum size of \`${e}\`, got \`${r.size}\``,
      validator: (r) => r.size <= e,
      negatedMessage: (r, u) => `Expected ${u} to have a minimum size of \`${e + 1}\`, got \`${r.size}\``
    });
  }
  /**
      Test a Map to include all the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that should be a key in the Map.
      */
  hasKeys(...e) {
    return this.addValidator({
      message: (r, u, n) => `Expected ${u} to have keys \`${JSON.stringify(n)}\``,
      validator: (r) => (0, Bs.default)(r, e)
    });
  }
  /**
      Test a Map to include any of the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that could be a key in the Map.
      */
  hasAnyKeys(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have any key of \`${JSON.stringify(e)}\``,
      validator: (r) => e.some((u) => r.has(u))
    });
  }
  /**
      Test a Map to include all the provided values. The values are tested by identity, not structure.
  
      @param values - The values that should be a value in the Map.
      */
  hasValues(...e) {
    return this.addValidator({
      message: (r, u, n) => `Expected ${u} to have values \`${JSON.stringify(n)}\``,
      validator: (r) => (0, Bs.default)(new Set(r.values()), e)
    });
  }
  /**
      Test a Map to include any of the provided values. The values are tested by identity, not structure.
  
      @param values - The values that could be a value in the Map.
      */
  hasAnyValues(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have any value of \`${JSON.stringify(e)}\``,
      validator: (r) => {
        const u = new Set(r.values());
        return e.some((n) => u.has(n));
      }
    });
  }
  /**
      Test all the keys in the Map to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every key in the Map.
      */
  keysOfType(e) {
    return this.addValidator({
      message: (r, u, n) => `(${u}) ${n}`,
      validator: (r) => (0, Rs.default)(r.keys(), "keys", e)
    });
  }
  /**
      Test all the values in the Map to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every value in the Map.
      */
  valuesOfType(e) {
    return this.addValidator({
      message: (r, u, n) => `(${u}) ${n}`,
      validator: (r) => (0, Rs.default)(r.values(), "values", e)
    });
  }
  /**
  Test a Map to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be empty, got \`${JSON.stringify([...e])}\``,
      validator: (e) => e.size === 0
    });
  }
  /**
  Test a Map to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to not be empty`,
      validator: (e) => e.size > 0
    });
  }
  /**
      Test a Map to be deeply equal to the provided Map.
  
      @param expected - Expected Map to match.
      */
  deepEqual(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be deeply equal to \`${JSON.stringify([...e])}\`, got \`${JSON.stringify([...r])}\``,
      validator: (r) => Td(r, e)
    });
  }
}
Fi.MapPredicate = Cd;
var ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.WeakMapPredicate = void 0;
const Od = xr, Pd = Ae();
class $d extends Pd.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("WeakMap", e);
  }
  /**
      Test a WeakMap to include all the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that should be a key in the WeakMap.
      */
  hasKeys(...e) {
    return this.addValidator({
      message: (r, u, n) => `Expected ${u} to have keys \`${JSON.stringify(n)}\``,
      validator: (r) => (0, Od.default)(r, e)
    });
  }
  /**
      Test a WeakMap to include any of the provided keys. The keys are tested by identity, not structure.
  
      @param keys - The keys that could be a key in the WeakMap.
      */
  hasAnyKeys(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have any key of \`${JSON.stringify(e)}\``,
      validator: (r) => e.some((u) => r.has(u))
    });
  }
}
ji.WeakMapPredicate = $d;
var qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.SetPredicate = void 0;
const Nd = Li, Md = xr, Ld = du, Id = Ae();
class Bd extends Id.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("Set", e);
  }
  /**
      Test a Set to have a specific size.
  
      @param size - The size of the Set.
      */
  size(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have size \`${e}\`, got \`${r.size}\``,
      validator: (r) => r.size === e
    });
  }
  /**
      Test a Set to have a minimum size.
  
      @param size - The minimum size of the Set.
      */
  minSize(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a minimum size of \`${e}\`, got \`${r.size}\``,
      validator: (r) => r.size >= e,
      negatedMessage: (r, u) => `Expected ${u} to have a maximum size of \`${e - 1}\`, got \`${r.size}\``
    });
  }
  /**
      Test a Set to have a maximum size.
  
      @param size - The maximum size of the Set.
      */
  maxSize(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a maximum size of \`${e}\`, got \`${r.size}\``,
      validator: (r) => r.size <= e,
      negatedMessage: (r, u) => `Expected ${u} to have a minimum size of \`${e + 1}\`, got \`${r.size}\``
    });
  }
  /**
      Test a Set to include all the provided items. The items are tested by identity, not structure.
  
      @param items - The items that should be a item in the Set.
      */
  has(...e) {
    return this.addValidator({
      message: (r, u, n) => `Expected ${u} to have items \`${JSON.stringify(n)}\``,
      validator: (r) => (0, Md.default)(r, e)
    });
  }
  /**
      Test a Set to include any of the provided items. The items are tested by identity, not structure.
  
      @param items - The items that could be a item in the Set.
      */
  hasAny(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have any item of \`${JSON.stringify(e)}\``,
      validator: (r) => e.some((u) => r.has(u))
    });
  }
  /**
      Test all the items in the Set to match the provided predicate.
  
      @param predicate - The predicate that should be applied against every item in the Set.
      */
  ofType(e) {
    return this.addValidator({
      message: (r, u, n) => `(${u}) ${n}`,
      validator: (r) => (0, Ld.default)(r, "values", e)
    });
  }
  /**
  Test a Set to be empty.
  */
  get empty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to be empty, got \`${JSON.stringify([...e])}\``,
      validator: (e) => e.size === 0
    });
  }
  /**
  Test a Set to be not empty.
  */
  get nonEmpty() {
    return this.addValidator({
      message: (e, r) => `Expected ${r} to not be empty`,
      validator: (e) => e.size > 0
    });
  }
  /**
      Test a Set to be deeply equal to the provided Set.
  
      @param expected - Expected Set to match.
      */
  deepEqual(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to be deeply equal to \`${JSON.stringify([...e])}\`, got \`${JSON.stringify([...r])}\``,
      validator: (r) => Nd(r, e)
    });
  }
}
qi.SetPredicate = Bd;
var Ui = {};
Object.defineProperty(Ui, "__esModule", { value: !0 });
Ui.WeakSetPredicate = void 0;
const Rd = xr, Fd = Ae();
class jd extends Fd.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("WeakSet", e);
  }
  /**
      Test a WeakSet to include all the provided items. The items are tested by identity, not structure.
  
      @param items - The items that should be a item in the WeakSet.
      */
  has(...e) {
    return this.addValidator({
      message: (r, u, n) => `Expected ${u} to have items \`${JSON.stringify(n)}\``,
      validator: (r) => (0, Rd.default)(r, e)
    });
  }
  /**
      Test a WeakSet to include any of the provided items. The items are tested by identity, not structure.
  
      @param items - The items that could be a item in the WeakSet.
      */
  hasAny(...e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have any item of \`${JSON.stringify(e)}\``,
      validator: (r) => e.some((u) => r.has(u))
    });
  }
}
Ui.WeakSetPredicate = jd;
var Vi = {};
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.TypedArrayPredicate = void 0;
const qd = Ae();
class Ud extends qd.Predicate {
  /**
      Test a typed array to have a specific byte length.
  
      @param byteLength - The byte length of the typed array.
      */
  byteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength === e
    });
  }
  /**
      Test a typed array to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the typed array.
      */
  minByteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a minimum byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength >= e,
      negatedMessage: (r, u) => `Expected ${u} to have a maximum byte length of \`${e - 1}\`, got \`${r.byteLength}\``
    });
  }
  /**
      Test a typed array to have a minimum byte length.
  
      @param length - The minimum byte length of the typed array.
      */
  maxByteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a maximum byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength <= e,
      negatedMessage: (r, u) => `Expected ${u} to have a minimum byte length of \`${e + 1}\`, got \`${r.byteLength}\``
    });
  }
  /**
      Test a typed array to have a specific length.
  
      @param length - The length of the typed array.
      */
  length(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have length \`${e}\`, got \`${r.length}\``,
      validator: (r) => r.length === e
    });
  }
  /**
      Test a typed array to have a minimum length.
  
      @param length - The minimum length of the typed array.
      */
  minLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a minimum length of \`${e}\`, got \`${r.length}\``,
      validator: (r) => r.length >= e,
      negatedMessage: (r, u) => `Expected ${u} to have a maximum length of \`${e - 1}\`, got \`${r.length}\``
    });
  }
  /**
      Test a typed array to have a maximum length.
  
      @param length - The maximum length of the typed array.
      */
  maxLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a maximum length of \`${e}\`, got \`${r.length}\``,
      validator: (r) => r.length <= e,
      negatedMessage: (r, u) => `Expected ${u} to have a minimum length of \`${e + 1}\`, got \`${r.length}\``
    });
  }
}
Vi.TypedArrayPredicate = Ud;
var zi = {};
Object.defineProperty(zi, "__esModule", { value: !0 });
zi.ArrayBufferPredicate = void 0;
const Vd = Ae();
class zd extends Vd.Predicate {
  /**
      Test an array buffer to have a specific byte length.
  
      @param byteLength - The byte length of the array buffer.
      */
  byteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength === e
    });
  }
  /**
      Test an array buffer to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the array buffer.
      */
  minByteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a minimum byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength >= e,
      negatedMessage: (r, u) => `Expected ${u} to have a maximum byte length of \`${e - 1}\`, got \`${r.byteLength}\``
    });
  }
  /**
      Test an array buffer to have a minimum byte length.
  
      @param length - The minimum byte length of the array buffer.
      */
  maxByteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a maximum byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength <= e,
      negatedMessage: (r, u) => `Expected ${u} to have a minimum byte length of \`${e + 1}\`, got \`${r.byteLength}\``
    });
  }
}
zi.ArrayBufferPredicate = zd;
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.DataViewPredicate = void 0;
const Hd = Ae();
class Gd extends Hd.Predicate {
  /**
  @hidden
  */
  constructor(e) {
    super("DataView", e);
  }
  /**
      Test a DataView to have a specific byte length.
  
      @param byteLength - The byte length of the DataView.
      */
  byteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength === e
    });
  }
  /**
      Test a DataView to have a minimum byte length.
  
      @param byteLength - The minimum byte length of the DataView.
      */
  minByteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a minimum byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength >= e,
      negatedMessage: (r, u) => `Expected ${u} to have a maximum byte length of \`${e - 1}\`, got \`${r.byteLength}\``
    });
  }
  /**
      Test a DataView to have a minimum byte length.
  
      @param length - The minimum byte length of the DataView.
      */
  maxByteLength(e) {
    return this.addValidator({
      message: (r, u) => `Expected ${u} to have a maximum byte length of \`${e}\`, got \`${r.byteLength}\``,
      validator: (r) => r.byteLength <= e,
      negatedMessage: (r, u) => `Expected ${u} to have a minimum byte length of \`${e + 1}\`, got \`${r.byteLength}\``
    });
  }
}
Hi.DataViewPredicate = Gd;
var Gi = {};
Object.defineProperty(Gi, "__esModule", { value: !0 });
Gi.AnyPredicate = void 0;
const Fs = lu, Wd = cu, Jd = rn;
class Xd {
  constructor(e, r = {}) {
    Object.defineProperty(this, "predicates", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: e
    }), Object.defineProperty(this, "options", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: r
    });
  }
  [Wd.testSymbol](e, r, u, n) {
    const i = /* @__PURE__ */ new Map();
    for (const a of this.predicates)
      try {
        r(e, u, a, n);
        return;
      } catch (c) {
        if (e === void 0 && this.options.optional === !0)
          return;
        if (c instanceof Fs.ArgumentError)
          for (const [o, f] of c.validationErrors.entries()) {
            const s = i.get(o);
            i.set(o, /* @__PURE__ */ new Set([...s ?? [], ...f]));
          }
      }
    if (i.size > 0) {
      const a = (0, Jd.generateArgumentErrorMessage)(i, !0);
      throw new Fs.ArgumentError(`Any predicate failed with the following errors:
${a}`, r, i);
    }
  }
}
Gi.AnyPredicate = Xd;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.AnyPredicate = t.DataViewPredicate = t.ArrayBufferPredicate = t.TypedArrayPredicate = t.WeakSetPredicate = t.SetPredicate = t.WeakMapPredicate = t.MapPredicate = t.ErrorPredicate = t.DatePredicate = t.ObjectPredicate = t.ArrayPredicate = t.BooleanPredicate = t.BigIntPredicate = t.NumberPredicate = t.StringPredicate = void 0;
  const e = Oi;
  Object.defineProperty(t, "StringPredicate", { enumerable: !0, get: function() {
    return e.StringPredicate;
  } });
  const r = Pi;
  Object.defineProperty(t, "NumberPredicate", { enumerable: !0, get: function() {
    return r.NumberPredicate;
  } });
  const u = $i;
  Object.defineProperty(t, "BigIntPredicate", { enumerable: !0, get: function() {
    return u.BigIntPredicate;
  } });
  const n = Ni;
  Object.defineProperty(t, "BooleanPredicate", { enumerable: !0, get: function() {
    return n.BooleanPredicate;
  } });
  const i = Ae(), a = Mi;
  Object.defineProperty(t, "ArrayPredicate", { enumerable: !0, get: function() {
    return a.ArrayPredicate;
  } });
  const c = Ii;
  Object.defineProperty(t, "ObjectPredicate", { enumerable: !0, get: function() {
    return c.ObjectPredicate;
  } });
  const o = Bi;
  Object.defineProperty(t, "DatePredicate", { enumerable: !0, get: function() {
    return o.DatePredicate;
  } });
  const f = Ri;
  Object.defineProperty(t, "ErrorPredicate", { enumerable: !0, get: function() {
    return f.ErrorPredicate;
  } });
  const s = Fi;
  Object.defineProperty(t, "MapPredicate", { enumerable: !0, get: function() {
    return s.MapPredicate;
  } });
  const p = ji;
  Object.defineProperty(t, "WeakMapPredicate", { enumerable: !0, get: function() {
    return p.WeakMapPredicate;
  } });
  const l = qi;
  Object.defineProperty(t, "SetPredicate", { enumerable: !0, get: function() {
    return l.SetPredicate;
  } });
  const h = Ui;
  Object.defineProperty(t, "WeakSetPredicate", { enumerable: !0, get: function() {
    return h.WeakSetPredicate;
  } });
  const b = Vi;
  Object.defineProperty(t, "TypedArrayPredicate", { enumerable: !0, get: function() {
    return b.TypedArrayPredicate;
  } });
  const v = zi;
  Object.defineProperty(t, "ArrayBufferPredicate", { enumerable: !0, get: function() {
    return v.ArrayBufferPredicate;
  } });
  const y = Hi;
  Object.defineProperty(t, "DataViewPredicate", { enumerable: !0, get: function() {
    return y.DataViewPredicate;
  } });
  const g = Gi;
  Object.defineProperty(t, "AnyPredicate", { enumerable: !0, get: function() {
    return g.AnyPredicate;
  } }), t.default = (D, E) => (Object.defineProperties(D, {
    string: {
      get: () => new e.StringPredicate(E)
    },
    number: {
      get: () => new r.NumberPredicate(E)
    },
    bigint: {
      get: () => new u.BigIntPredicate(E)
    },
    boolean: {
      get: () => new n.BooleanPredicate(E)
    },
    undefined: {
      get: () => new i.Predicate("undefined", E)
    },
    null: {
      get: () => new i.Predicate("null", E)
    },
    nullOrUndefined: {
      get: () => new i.Predicate("nullOrUndefined", E)
    },
    nan: {
      get: () => new i.Predicate("nan", E)
    },
    symbol: {
      get: () => new i.Predicate("symbol", E)
    },
    array: {
      get: () => new a.ArrayPredicate(E)
    },
    object: {
      get: () => new c.ObjectPredicate(E)
    },
    date: {
      get: () => new o.DatePredicate(E)
    },
    error: {
      get: () => new f.ErrorPredicate(E)
    },
    map: {
      get: () => new s.MapPredicate(E)
    },
    weakMap: {
      get: () => new p.WeakMapPredicate(E)
    },
    set: {
      get: () => new l.SetPredicate(E)
    },
    weakSet: {
      get: () => new h.WeakSetPredicate(E)
    },
    function: {
      get: () => new i.Predicate("Function", E)
    },
    buffer: {
      get: () => new i.Predicate("Buffer", E)
    },
    regExp: {
      get: () => new i.Predicate("RegExp", E)
    },
    promise: {
      get: () => new i.Predicate("Promise", E)
    },
    typedArray: {
      get: () => new b.TypedArrayPredicate("TypedArray", E)
    },
    int8Array: {
      get: () => new b.TypedArrayPredicate("Int8Array", E)
    },
    uint8Array: {
      get: () => new b.TypedArrayPredicate("Uint8Array", E)
    },
    uint8ClampedArray: {
      get: () => new b.TypedArrayPredicate("Uint8ClampedArray", E)
    },
    int16Array: {
      get: () => new b.TypedArrayPredicate("Int16Array", E)
    },
    uint16Array: {
      get: () => new b.TypedArrayPredicate("Uint16Array", E)
    },
    int32Array: {
      get: () => new b.TypedArrayPredicate("Int32Array", E)
    },
    uint32Array: {
      get: () => new b.TypedArrayPredicate("Uint32Array", E)
    },
    float32Array: {
      get: () => new b.TypedArrayPredicate("Float32Array", E)
    },
    float64Array: {
      get: () => new b.TypedArrayPredicate("Float64Array", E)
    },
    arrayBuffer: {
      get: () => new v.ArrayBufferPredicate("ArrayBuffer", E)
    },
    sharedArrayBuffer: {
      get: () => new v.ArrayBufferPredicate("SharedArrayBuffer", E)
    },
    dataView: {
      get: () => new y.DataViewPredicate(E)
    },
    iterable: {
      get: () => new i.Predicate("Iterable", E)
    },
    any: {
      value: (...I) => new g.AnyPredicate(I, E)
    }
  }), D);
})(di);
Object.defineProperty(ko, "__esModule", { value: !0 });
const Yd = di;
ko.default = (t) => (Object.defineProperties(t, {
  optional: {
    get: () => (0, Yd.default)({}, { optional: !0 })
  }
}), t);
(function(t) {
  var e = N && N.__createBinding || (Object.create ? function(h, b, v, y) {
    y === void 0 && (y = v);
    var g = Object.getOwnPropertyDescriptor(b, v);
    (!g || ("get" in g ? !b.__esModule : g.writable || g.configurable)) && (g = { enumerable: !0, get: function() {
      return b[v];
    } }), Object.defineProperty(h, y, g);
  } : function(h, b, v, y) {
    y === void 0 && (y = v), h[y] = b[v];
  }), r = N && N.__exportStar || function(h, b) {
    for (var v in h) v !== "default" && !Object.prototype.hasOwnProperty.call(b, v) && e(b, h, v);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ArgumentError = t.Predicate = void 0;
  const u = Rf, n = ki, i = Ae();
  Object.defineProperty(t, "Predicate", { enumerable: !0, get: function() {
    return i.Predicate;
  } });
  const a = cu, c = ko, o = di, f = fu, s = (h, b, v) => {
    if (!(0, a.isPredicate)(b) && typeof b != "string")
      throw new TypeError(`Expected second argument to be a predicate or a string, got \`${typeof b}\``);
    if ((0, a.isPredicate)(b)) {
      const y = (0, u.default)();
      (0, f.default)(h, () => (0, n.inferLabel)(y), b);
      return;
    }
    (0, f.default)(h, b, v);
  };
  Object.defineProperties(s, {
    isValid: {
      value: (h, b) => {
        try {
          return (0, f.default)(h, "", b), !0;
        } catch {
          return !1;
        }
      }
    },
    create: {
      value: (h, b) => (v, y) => {
        if ((0, a.isPredicate)(h)) {
          const g = (0, u.default)();
          (0, f.default)(v, y ?? (() => (0, n.inferLabel)(g)), h);
          return;
        }
        (0, f.default)(v, y ?? h, b);
      }
    }
  });
  const p = (0, o.default)((0, c.default)(s));
  t.default = p, r(di, t);
  var l = lu;
  Object.defineProperty(t, "ArgumentError", { enumerable: !0, get: function() {
    return l.ArgumentError;
  } });
})(ou);
var Un;
function cc(t) {
  return Un = Un || document.createElement("textarea"), Un.innerHTML = "&" + t + ";", Un.value;
}
function Zd(t) {
  return Object.prototype.toString.call(t);
}
function Kd(t) {
  return Zd(t) === "[object String]";
}
var Qd = Object.prototype.hasOwnProperty;
function fc(t, e) {
  return t ? Qd.call(t, e) : !1;
}
function Oo(t) {
  var e = [].slice.call(arguments, 1);
  return e.forEach(function(r) {
    if (r) {
      if (typeof r != "object")
        throw new TypeError(r + "must be object");
      Object.keys(r).forEach(function(u) {
        t[u] = r[u];
      });
    }
  }), t;
}
var ep = /\\([\\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function Jr(t) {
  return t.indexOf("\\") < 0 ? t : t.replace(ep, "$1");
}
function Po(t) {
  return !(t >= 55296 && t <= 57343 || t >= 64976 && t <= 65007 || (t & 65535) === 65535 || (t & 65535) === 65534 || t >= 0 && t <= 8 || t === 11 || t >= 14 && t <= 31 || t >= 127 && t <= 159 || t > 1114111);
}
function hi(t) {
  if (t > 65535) {
    t -= 65536;
    var e = 55296 + (t >> 10), r = 56320 + (t & 1023);
    return String.fromCharCode(e, r);
  }
  return String.fromCharCode(t);
}
var tp = /&([a-z#][a-z0-9]{1,31});/gi, rp = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i;
function up(t, e) {
  var r = 0, u = cc(e);
  return e !== u ? u : e.charCodeAt(0) === 35 && rp.test(e) && (r = e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10), Po(r)) ? hi(r) : t;
}
function Yt(t) {
  return t.indexOf("&") < 0 ? t : t.replace(tp, up);
}
var np = /[&<>"]/, ip = /[&<>"]/g, ap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function op(t) {
  return ap[t];
}
function Oe(t) {
  return np.test(t) ? t.replace(ip, op) : t;
}
var sp = /* @__PURE__ */ Object.freeze({
  isString: Kd,
  has: fc,
  assign: Oo,
  unescapeMd: Jr,
  isValidEntityCode: Po,
  fromCodePoint: hi,
  replaceEntities: Yt,
  escapeHtml: Oe
}), F = {};
F.blockquote_open = function() {
  return `<blockquote>
`;
};
F.blockquote_close = function(t, e) {
  return "</blockquote>" + wr(t, e);
};
F.code = function(t, e) {
  return t[e].block ? "<pre><code>" + Oe(t[e].content) + "</code></pre>" + wr(t, e) : "<code>" + Oe(t[e].content) + "</code>";
};
F.fence = function(t, e, r, u, n) {
  var i = t[e], a = "", c = r.langPrefix, o = "", f, s, p;
  if (i.params) {
    if (f = i.params.split(/\s+/g), s = f.join(" "), fc(n.rules.fence_custom, f[0]))
      return n.rules.fence_custom[f[0]](t, e, r, u, n);
    o = Oe(Yt(Jr(s))), a = ' class="' + c + o + '"';
  }
  return r.highlight ? p = r.highlight.apply(r.highlight, [i.content].concat(f)) || Oe(i.content) : p = Oe(i.content), "<pre><code" + a + ">" + p + "</code></pre>" + wr(t, e);
};
F.fence_custom = {};
F.heading_open = function(t, e) {
  return "<h" + t[e].hLevel + ">";
};
F.heading_close = function(t, e) {
  return "</h" + t[e].hLevel + `>
`;
};
F.hr = function(t, e, r) {
  return (r.xhtmlOut ? "<hr />" : "<hr>") + wr(t, e);
};
F.bullet_list_open = function() {
  return `<ul>
`;
};
F.bullet_list_close = function(t, e) {
  return "</ul>" + wr(t, e);
};
F.list_item_open = function() {
  return "<li>";
};
F.list_item_close = function() {
  return `</li>
`;
};
F.ordered_list_open = function(t, e) {
  var r = t[e], u = r.order > 1 ? ' start="' + r.order + '"' : "";
  return "<ol" + u + `>
`;
};
F.ordered_list_close = function(t, e) {
  return "</ol>" + wr(t, e);
};
F.paragraph_open = function(t, e) {
  return t[e].tight ? "" : "<p>";
};
F.paragraph_close = function(t, e) {
  var r = !(t[e].tight && e && t[e - 1].type === "inline" && !t[e - 1].content);
  return (t[e].tight ? "" : "</p>") + (r ? wr(t, e) : "");
};
F.link_open = function(t, e, r) {
  var u = t[e].title ? ' title="' + Oe(Yt(t[e].title)) + '"' : "", n = r.linkTarget ? ' target="' + r.linkTarget + '"' : "";
  return '<a href="' + Oe(t[e].href) + '"' + u + n + ">";
};
F.link_close = function() {
  return "</a>";
};
F.image = function(t, e, r) {
  var u = ' src="' + Oe(t[e].src) + '"', n = t[e].title ? ' title="' + Oe(Yt(t[e].title)) + '"' : "", i = ' alt="' + (t[e].alt ? Oe(Yt(Jr(t[e].alt))) : "") + '"', a = r.xhtmlOut ? " /" : "";
  return "<img" + u + i + n + a + ">";
};
F.table_open = function() {
  return `<table>
`;
};
F.table_close = function() {
  return `</table>
`;
};
F.thead_open = function() {
  return `<thead>
`;
};
F.thead_close = function() {
  return `</thead>
`;
};
F.tbody_open = function() {
  return `<tbody>
`;
};
F.tbody_close = function() {
  return `</tbody>
`;
};
F.tr_open = function() {
  return "<tr>";
};
F.tr_close = function() {
  return `</tr>
`;
};
F.th_open = function(t, e) {
  var r = t[e];
  return "<th" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">";
};
F.th_close = function() {
  return "</th>";
};
F.td_open = function(t, e) {
  var r = t[e];
  return "<td" + (r.align ? ' style="text-align:' + r.align + '"' : "") + ">";
};
F.td_close = function() {
  return "</td>";
};
F.strong_open = function() {
  return "<strong>";
};
F.strong_close = function() {
  return "</strong>";
};
F.em_open = function() {
  return "<em>";
};
F.em_close = function() {
  return "</em>";
};
F.del_open = function() {
  return "<del>";
};
F.del_close = function() {
  return "</del>";
};
F.ins_open = function() {
  return "<ins>";
};
F.ins_close = function() {
  return "</ins>";
};
F.mark_open = function() {
  return "<mark>";
};
F.mark_close = function() {
  return "</mark>";
};
F.sub = function(t, e) {
  return "<sub>" + Oe(t[e].content) + "</sub>";
};
F.sup = function(t, e) {
  return "<sup>" + Oe(t[e].content) + "</sup>";
};
F.hardbreak = function(t, e, r) {
  return r.xhtmlOut ? `<br />
` : `<br>
`;
};
F.softbreak = function(t, e, r) {
  return r.breaks ? r.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
F.text = function(t, e) {
  return Oe(t[e].content);
};
F.htmlblock = function(t, e) {
  return t[e].content;
};
F.htmltag = function(t, e) {
  return t[e].content;
};
F.abbr_open = function(t, e) {
  return '<abbr title="' + Oe(Yt(t[e].title)) + '">';
};
F.abbr_close = function() {
  return "</abbr>";
};
F.footnote_ref = function(t, e) {
  var r = Number(t[e].id + 1).toString(), u = "fnref" + r;
  return t[e].subId > 0 && (u += ":" + t[e].subId), '<sup class="footnote-ref"><a href="#fn' + r + '" id="' + u + '">[' + r + "]</a></sup>";
};
F.footnote_block_open = function(t, e, r) {
  var u = r.xhtmlOut ? `<hr class="footnotes-sep" />
` : `<hr class="footnotes-sep">
`;
  return u + `<section class="footnotes">
<ol class="footnotes-list">
`;
};
F.footnote_block_close = function() {
  return `</ol>
</section>
`;
};
F.footnote_open = function(t, e) {
  var r = Number(t[e].id + 1).toString();
  return '<li id="fn' + r + '"  class="footnote-item">';
};
F.footnote_close = function() {
  return `</li>
`;
};
F.footnote_anchor = function(t, e) {
  var r = Number(t[e].id + 1).toString(), u = "fnref" + r;
  return t[e].subId > 0 && (u += ":" + t[e].subId), ' <a href="#' + u + '" class="footnote-backref">↩</a>';
};
F.dl_open = function() {
  return `<dl>
`;
};
F.dt_open = function() {
  return "<dt>";
};
F.dd_open = function() {
  return "<dd>";
};
F.dl_close = function() {
  return `</dl>
`;
};
F.dt_close = function() {
  return `</dt>
`;
};
F.dd_close = function() {
  return `</dd>
`;
};
function dc(t, e) {
  return ++e >= t.length - 2 ? e : t[e].type === "paragraph_open" && t[e].tight && t[e + 1].type === "inline" && t[e + 1].content.length === 0 && t[e + 2].type === "paragraph_close" && t[e + 2].tight ? dc(t, e + 2) : e;
}
var wr = F.getBreak = function(e, r) {
  return r = dc(e, r), r < e.length && e[r].type === "list_item_close" ? "" : `
`;
};
function $o() {
  this.rules = Oo({}, F), this.getBreak = F.getBreak;
}
$o.prototype.renderInline = function(t, e, r) {
  for (var u = this.rules, n = t.length, i = 0, a = ""; n--; )
    a += u[t[i].type](t, i++, e, r, this);
  return a;
};
$o.prototype.render = function(t, e, r) {
  for (var u = this.rules, n = t.length, i = -1, a = ""; ++i < n; )
    t[i].type === "inline" ? a += this.renderInline(t[i].children, e, r) : a += u[t[i].type](t, i, e, r, this);
  return a;
};
function He() {
  this.__rules__ = [], this.__cache__ = null;
}
He.prototype.__find__ = function(t) {
  for (var e = this.__rules__.length, r = -1; e--; )
    if (this.__rules__[++r].name === t)
      return r;
  return -1;
};
He.prototype.__compile__ = function() {
  var t = this, e = [""];
  t.__rules__.forEach(function(r) {
    r.enabled && r.alt.forEach(function(u) {
      e.indexOf(u) < 0 && e.push(u);
    });
  }), t.__cache__ = {}, e.forEach(function(r) {
    t.__cache__[r] = [], t.__rules__.forEach(function(u) {
      u.enabled && (r && u.alt.indexOf(r) < 0 || t.__cache__[r].push(u.fn));
    });
  });
};
He.prototype.at = function(t, e, r) {
  var u = this.__find__(t), n = r || {};
  if (u === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__[u].fn = e, this.__rules__[u].alt = n.alt || [], this.__cache__ = null;
};
He.prototype.before = function(t, e, r, u) {
  var n = this.__find__(t), i = u || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(n, 0, {
    name: e,
    enabled: !0,
    fn: r,
    alt: i.alt || []
  }), this.__cache__ = null;
};
He.prototype.after = function(t, e, r, u) {
  var n = this.__find__(t), i = u || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(n + 1, 0, {
    name: e,
    enabled: !0,
    fn: r,
    alt: i.alt || []
  }), this.__cache__ = null;
};
He.prototype.push = function(t, e, r) {
  var u = r || {};
  this.__rules__.push({
    name: t,
    enabled: !0,
    fn: e,
    alt: u.alt || []
  }), this.__cache__ = null;
};
He.prototype.enable = function(t, e) {
  t = Array.isArray(t) ? t : [t], e && this.__rules__.forEach(function(r) {
    r.enabled = !1;
  }), t.forEach(function(r) {
    var u = this.__find__(r);
    if (u < 0)
      throw new Error("Rules manager: invalid rule name " + r);
    this.__rules__[u].enabled = !0;
  }, this), this.__cache__ = null;
};
He.prototype.disable = function(t) {
  t = Array.isArray(t) ? t : [t], t.forEach(function(e) {
    var r = this.__find__(e);
    if (r < 0)
      throw new Error("Rules manager: invalid rule name " + e);
    this.__rules__[r].enabled = !1;
  }, this), this.__cache__ = null;
};
He.prototype.getRules = function(t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
function lp(t) {
  t.inlineMode ? t.tokens.push({
    type: "inline",
    content: t.src.replace(/\n/g, " ").trim(),
    level: 0,
    lines: [0, 1],
    children: []
  }) : t.block.parse(t.src, t.options, t.env, t.tokens);
}
function Er(t, e, r, u, n) {
  this.src = t, this.env = u, this.options = r, this.parser = e, this.tokens = n, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = [], this.isInLabel = !1, this.linkLevel = 0, this.linkContent = "", this.labelUnmatchedScopes = 0;
}
Er.prototype.pushPending = function() {
  this.tokens.push({
    type: "text",
    content: this.pending,
    level: this.pendingLevel
  }), this.pending = "";
};
Er.prototype.push = function(t) {
  this.pending && this.pushPending(), this.tokens.push(t), this.pendingLevel = this.level;
};
Er.prototype.cacheSet = function(t, e) {
  for (var r = this.cache.length; r <= t; r++)
    this.cache.push(0);
  this.cache[t] = e;
};
Er.prototype.cacheGet = function(t) {
  return t < this.cache.length ? this.cache[t] : 0;
};
function qu(t, e) {
  var r, u, n, i = -1, a = t.posMax, c = t.pos, o = t.isInLabel;
  if (t.isInLabel)
    return -1;
  if (t.labelUnmatchedScopes)
    return t.labelUnmatchedScopes--, -1;
  for (t.pos = e + 1, t.isInLabel = !0, r = 1; t.pos < a; ) {
    if (n = t.src.charCodeAt(t.pos), n === 91)
      r++;
    else if (n === 93 && (r--, r === 0)) {
      u = !0;
      break;
    }
    t.parser.skipToken(t);
  }
  return u ? (i = t.pos, t.labelUnmatchedScopes = 0) : t.labelUnmatchedScopes = r - 1, t.pos = c, t.isInLabel = o, i;
}
function cp(t, e, r, u) {
  var n, i, a, c, o, f;
  if (t.charCodeAt(0) !== 42 || t.charCodeAt(1) !== 91 || t.indexOf("]:") === -1 || (n = new Er(t, e, r, u, []), i = qu(n, 1), i < 0 || t.charCodeAt(i + 1) !== 58))
    return -1;
  for (c = n.posMax, a = i + 2; a < c && n.src.charCodeAt(a) !== 10; a++)
    ;
  return o = t.slice(2, i), f = t.slice(i + 2, a).trim(), f.length === 0 ? -1 : (u.abbreviations || (u.abbreviations = {}), typeof u.abbreviations[":" + o] > "u" && (u.abbreviations[":" + o] = f), a);
}
function fp(t) {
  var e = t.tokens, r, u, n, i;
  if (!t.inlineMode) {
    for (r = 1, u = e.length - 1; r < u; r++)
      if (e[r - 1].type === "paragraph_open" && e[r].type === "inline" && e[r + 1].type === "paragraph_close") {
        for (n = e[r].content; n.length && (i = cp(n, t.inline, t.options, t.env), !(i < 0)); )
          n = n.slice(i).trim();
        e[r].content = n, n.length || (e[r - 1].tight = !0, e[r + 1].tight = !0);
      }
  }
}
function eo(t) {
  var e = Yt(t);
  try {
    e = decodeURI(e);
  } catch {
  }
  return encodeURI(e);
}
function pc(t, e) {
  var r, u, n, i = e, a = t.posMax;
  if (t.src.charCodeAt(e) === 60) {
    for (e++; e < a; ) {
      if (r = t.src.charCodeAt(e), r === 10)
        return !1;
      if (r === 62)
        return n = eo(Jr(t.src.slice(i + 1, e))), t.parser.validateLink(n) ? (t.pos = e + 1, t.linkContent = n, !0) : !1;
      if (r === 92 && e + 1 < a) {
        e += 2;
        continue;
      }
      e++;
    }
    return !1;
  }
  for (u = 0; e < a && (r = t.src.charCodeAt(e), !(r === 32 || r < 32 || r === 127)); ) {
    if (r === 92 && e + 1 < a) {
      e += 2;
      continue;
    }
    if (r === 40 && (u++, u > 1) || r === 41 && (u--, u < 0))
      break;
    e++;
  }
  return i === e || (n = Jr(t.src.slice(i, e)), !t.parser.validateLink(n)) ? !1 : (t.linkContent = n, t.pos = e, !0);
}
function hc(t, e) {
  var r, u = e, n = t.posMax, i = t.src.charCodeAt(e);
  if (i !== 34 && i !== 39 && i !== 40)
    return !1;
  for (e++, i === 40 && (i = 41); e < n; ) {
    if (r = t.src.charCodeAt(e), r === i)
      return t.pos = e + 1, t.linkContent = Jr(t.src.slice(u + 1, e)), !0;
    if (r === 92 && e + 1 < n) {
      e += 2;
      continue;
    }
    e++;
  }
  return !1;
}
function gc(t) {
  return t.trim().replace(/\s+/g, " ").toUpperCase();
}
function dp(t, e, r, u) {
  var n, i, a, c, o, f, s, p, l;
  if (t.charCodeAt(0) !== 91 || t.indexOf("]:") === -1 || (n = new Er(t, e, r, u, []), i = qu(n, 0), i < 0 || t.charCodeAt(i + 1) !== 58))
    return -1;
  for (c = n.posMax, a = i + 2; a < c && (o = n.src.charCodeAt(a), !(o !== 32 && o !== 10)); a++)
    ;
  if (!pc(n, a))
    return -1;
  for (s = n.linkContent, a = n.pos, f = a, a = a + 1; a < c && (o = n.src.charCodeAt(a), !(o !== 32 && o !== 10)); a++)
    ;
  for (a < c && f !== a && hc(n, a) ? (p = n.linkContent, a = n.pos) : (p = "", a = f); a < c && n.src.charCodeAt(a) === 32; )
    a++;
  return a < c && n.src.charCodeAt(a) !== 10 ? -1 : (l = gc(t.slice(1, i)), typeof u.references[l] > "u" && (u.references[l] = { title: p, href: s }), a);
}
function pp(t) {
  var e = t.tokens, r, u, n, i;
  if (t.env.references = t.env.references || {}, !t.inlineMode) {
    for (r = 1, u = e.length - 1; r < u; r++)
      if (e[r].type === "inline" && e[r - 1].type === "paragraph_open" && e[r + 1].type === "paragraph_close") {
        for (n = e[r].content; n.length && (i = dp(n, t.inline, t.options, t.env), !(i < 0)); )
          n = n.slice(i).trim();
        e[r].content = n, n.length || (e[r - 1].tight = !0, e[r + 1].tight = !0);
      }
  }
}
function hp(t) {
  var e = t.tokens, r, u, n;
  for (u = 0, n = e.length; u < n; u++)
    r = e[u], r.type === "inline" && t.inline.parse(r.content, t.options, t.env, r.children);
}
function gp(t) {
  var e, r, u, n, i, a, c, o, f, s = 0, p = !1, l = {};
  if (t.env.footnotes && (t.tokens = t.tokens.filter(function(h) {
    return h.type === "footnote_reference_open" ? (p = !0, o = [], f = h.label, !1) : h.type === "footnote_reference_close" ? (p = !1, l[":" + f] = o, !1) : (p && o.push(h), !p);
  }), !!t.env.footnotes.list)) {
    for (a = t.env.footnotes.list, t.tokens.push({
      type: "footnote_block_open",
      level: s++
    }), e = 0, r = a.length; e < r; e++) {
      for (t.tokens.push({
        type: "footnote_open",
        id: e,
        level: s++
      }), a[e].tokens ? (c = [], c.push({
        type: "paragraph_open",
        tight: !1,
        level: s++
      }), c.push({
        type: "inline",
        content: "",
        level: s,
        children: a[e].tokens
      }), c.push({
        type: "paragraph_close",
        tight: !1,
        level: --s
      })) : a[e].label && (c = l[":" + a[e].label]), t.tokens = t.tokens.concat(c), t.tokens[t.tokens.length - 1].type === "paragraph_close" ? i = t.tokens.pop() : i = null, n = a[e].count > 0 ? a[e].count : 1, u = 0; u < n; u++)
        t.tokens.push({
          type: "footnote_anchor",
          id: e,
          subId: u,
          level: s
        });
      i && t.tokens.push(i), t.tokens.push({
        type: "footnote_close",
        level: --s
      });
    }
    t.tokens.push({
      type: "footnote_block_close",
      level: --s
    });
  }
}
var js = ` 
()[]'".,!?-`;
function Fa(t) {
  return t.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
}
function mp(t) {
  var e, r, u, n, i, a, c, o, f, s, p, l, h = t.tokens;
  if (t.env.abbreviations) {
    for (t.env.abbrRegExp || (l = "(^|[" + js.split("").map(Fa).join("") + "])(" + Object.keys(t.env.abbreviations).map(function(b) {
      return b.substr(1);
    }).sort(function(b, v) {
      return v.length - b.length;
    }).map(Fa).join("|") + ")($|[" + js.split("").map(Fa).join("") + "])", t.env.abbrRegExp = new RegExp(l, "g")), s = t.env.abbrRegExp, r = 0, u = h.length; r < u; r++)
      if (h[r].type === "inline") {
        for (n = h[r].children, e = n.length - 1; e >= 0; e--)
          if (i = n[e], i.type === "text") {
            for (o = 0, a = i.content, s.lastIndex = 0, f = i.level, c = []; p = s.exec(a); )
              s.lastIndex > o && c.push({
                type: "text",
                content: a.slice(o, p.index + p[1].length),
                level: f
              }), c.push({
                type: "abbr_open",
                title: t.env.abbreviations[":" + p[2]],
                level: f++
              }), c.push({
                type: "text",
                content: p[2],
                level: f
              }), c.push({
                type: "abbr_close",
                level: --f
              }), o = s.lastIndex - p[3].length;
            c.length && (o < a.length && c.push({
              type: "text",
              content: a.slice(o),
              level: f
            }), h[r].children = n = [].concat(n.slice(0, e), c, n.slice(e + 1)));
          }
      }
  }
}
var bp = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, yp = /\((c|tm|r|p)\)/ig, vp = {
  c: "©",
  r: "®",
  p: "§",
  tm: "™"
};
function xp(t) {
  return t.indexOf("(") < 0 ? t : t.replace(yp, function(e, r) {
    return vp[r.toLowerCase()];
  });
}
function wp(t) {
  var e, r, u, n, i;
  if (t.options.typographer) {
    for (i = t.tokens.length - 1; i >= 0; i--)
      if (t.tokens[i].type === "inline")
        for (n = t.tokens[i].children, e = n.length - 1; e >= 0; e--)
          r = n[e], r.type === "text" && (u = r.content, u = xp(u), bp.test(u) && (u = u.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2")), r.content = u);
  }
}
var Ep = /['"]/, qs = /['"]/g, Ap = /[-\s()\[\]]/, Us = "’";
function Vs(t, e) {
  return e < 0 || e >= t.length ? !1 : !Ap.test(t[e]);
}
function jr(t, e, r) {
  return t.substr(0, e) + r + t.substr(e + 1);
}
function _p(t) {
  var e, r, u, n, i, a, c, o, f, s, p, l, h, b, v, y, g;
  if (t.options.typographer) {
    for (g = [], v = t.tokens.length - 1; v >= 0; v--)
      if (t.tokens[v].type === "inline") {
        for (y = t.tokens[v].children, g.length = 0, e = 0; e < y.length; e++)
          if (r = y[e], !(r.type !== "text" || Ep.test(r.text))) {
            for (c = y[e].level, h = g.length - 1; h >= 0 && !(g[h].level <= c); h--)
              ;
            g.length = h + 1, u = r.content, i = 0, a = u.length;
            e:
              for (; i < a && (qs.lastIndex = i, n = qs.exec(u), !!n); ) {
                if (o = !Vs(u, n.index - 1), i = n.index + 1, b = n[0] === "'", f = !Vs(u, i), !f && !o) {
                  b && (r.content = jr(r.content, n.index, Us));
                  continue;
                }
                if (p = !f, l = !o, l) {
                  for (h = g.length - 1; h >= 0 && (s = g[h], !(g[h].level < c)); h--)
                    if (s.single === b && g[h].level === c) {
                      s = g[h], b ? (y[s.token].content = jr(y[s.token].content, s.pos, t.options.quotes[2]), r.content = jr(r.content, n.index, t.options.quotes[3])) : (y[s.token].content = jr(y[s.token].content, s.pos, t.options.quotes[0]), r.content = jr(r.content, n.index, t.options.quotes[1])), g.length = h;
                      continue e;
                    }
                }
                p ? g.push({
                  token: e,
                  pos: n.index,
                  single: b,
                  level: c
                }) : l && b && (r.content = jr(r.content, n.index, Us));
              }
          }
      }
  }
}
var ja = [
  ["block", lp],
  ["abbr", fp],
  ["references", pp],
  ["inline", hp],
  ["footnote_tail", gp],
  ["abbr2", mp],
  ["replacements", wp],
  ["smartquotes", _p]
];
function mc() {
  this.options = {}, this.ruler = new He();
  for (var t = 0; t < ja.length; t++)
    this.ruler.push(ja[t][0], ja[t][1]);
}
mc.prototype.process = function(t) {
  var e, r, u;
  for (u = this.ruler.getRules(""), e = 0, r = u.length; e < r; e++)
    u[e](t);
};
function Ar(t, e, r, u, n) {
  var i, a, c, o, f, s, p;
  for (this.src = t, this.parser = e, this.options = r, this.env = u, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.parentType = "root", this.ddIndent = -1, this.level = 0, this.result = "", a = this.src, s = 0, p = !1, c = o = s = 0, f = a.length; o < f; o++) {
    if (i = a.charCodeAt(o), !p)
      if (i === 32) {
        s++;
        continue;
      } else
        p = !0;
    (i === 10 || o === f - 1) && (i !== 10 && o++, this.bMarks.push(c), this.eMarks.push(o), this.tShift.push(s), p = !1, s = 0, c = o + 1);
  }
  this.bMarks.push(a.length), this.eMarks.push(a.length), this.tShift.push(0), this.lineMax = this.bMarks.length - 1;
}
Ar.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
Ar.prototype.skipEmptyLines = function(e) {
  for (var r = this.lineMax; e < r && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
Ar.prototype.skipSpaces = function(e) {
  for (var r = this.src.length; e < r && this.src.charCodeAt(e) === 32; e++)
    ;
  return e;
};
Ar.prototype.skipChars = function(e, r) {
  for (var u = this.src.length; e < u && this.src.charCodeAt(e) === r; e++)
    ;
  return e;
};
Ar.prototype.skipCharsBack = function(e, r, u) {
  if (e <= u)
    return e;
  for (; e > u; )
    if (r !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
Ar.prototype.getLines = function(e, r, u, n) {
  var i, a, c, o, f, s = e;
  if (e >= r)
    return "";
  if (s + 1 === r)
    return a = this.bMarks[s] + Math.min(this.tShift[s], u), c = n ? this.eMarks[s] + 1 : this.eMarks[s], this.src.slice(a, c);
  for (o = new Array(r - e), i = 0; s < r; s++, i++)
    f = this.tShift[s], f > u && (f = u), f < 0 && (f = 0), a = this.bMarks[s] + f, s + 1 < r || n ? c = this.eMarks[s] + 1 : c = this.eMarks[s], o[i] = this.src.slice(a, c);
  return o.join("");
};
function Sp(t, e, r) {
  var u, n;
  if (t.tShift[e] - t.blkIndent < 4)
    return !1;
  for (n = u = e + 1; u < r; ) {
    if (t.isEmpty(u)) {
      u++;
      continue;
    }
    if (t.tShift[u] - t.blkIndent >= 4) {
      u++, n = u;
      continue;
    }
    break;
  }
  return t.line = u, t.tokens.push({
    type: "code",
    content: t.getLines(e, n, 4 + t.blkIndent, !0),
    block: !0,
    lines: [e, t.line],
    level: t.level
  }), !0;
}
function Dp(t, e, r, u) {
  var n, i, a, c, o, f = !1, s = t.bMarks[e] + t.tShift[e], p = t.eMarks[e];
  if (s + 3 > p || (n = t.src.charCodeAt(s), n !== 126 && n !== 96) || (o = s, s = t.skipChars(s, n), i = s - o, i < 3) || (a = t.src.slice(s, p).trim(), a.indexOf("`") >= 0))
    return !1;
  if (u)
    return !0;
  for (c = e; c++, !(c >= r || (s = o = t.bMarks[c] + t.tShift[c], p = t.eMarks[c], s < p && t.tShift[c] < t.blkIndent)); )
    if (t.src.charCodeAt(s) === n && !(t.tShift[c] - t.blkIndent >= 4) && (s = t.skipChars(s, n), !(s - o < i) && (s = t.skipSpaces(s), !(s < p)))) {
      f = !0;
      break;
    }
  return i = t.tShift[e], t.line = c + (f ? 1 : 0), t.tokens.push({
    type: "fence",
    params: a,
    content: t.getLines(e + 1, c, i, !0),
    lines: [e, t.line],
    level: t.level
  }), !0;
}
function Tp(t, e, r, u) {
  var n, i, a, c, o, f, s, p, l, h, b, v = t.bMarks[e] + t.tShift[e], y = t.eMarks[e];
  if (v > y || t.src.charCodeAt(v++) !== 62 || t.level >= t.options.maxNesting)
    return !1;
  if (u)
    return !0;
  for (t.src.charCodeAt(v) === 32 && v++, o = t.blkIndent, t.blkIndent = 0, c = [t.bMarks[e]], t.bMarks[e] = v, v = v < y ? t.skipSpaces(v) : v, i = v >= y, a = [t.tShift[e]], t.tShift[e] = v - t.bMarks[e], p = t.parser.ruler.getRules("blockquote"), n = e + 1; n < r && (v = t.bMarks[n] + t.tShift[n], y = t.eMarks[n], !(v >= y)); n++) {
    if (t.src.charCodeAt(v++) === 62) {
      t.src.charCodeAt(v) === 32 && v++, c.push(t.bMarks[n]), t.bMarks[n] = v, v = v < y ? t.skipSpaces(v) : v, i = v >= y, a.push(t.tShift[n]), t.tShift[n] = v - t.bMarks[n];
      continue;
    }
    if (i)
      break;
    for (b = !1, l = 0, h = p.length; l < h; l++)
      if (p[l](t, n, r, !0)) {
        b = !0;
        break;
      }
    if (b)
      break;
    c.push(t.bMarks[n]), a.push(t.tShift[n]), t.tShift[n] = -1337;
  }
  for (f = t.parentType, t.parentType = "blockquote", t.tokens.push({
    type: "blockquote_open",
    lines: s = [e, 0],
    level: t.level++
  }), t.parser.tokenize(t, e, n), t.tokens.push({
    type: "blockquote_close",
    level: --t.level
  }), t.parentType = f, s[1] = t.line, l = 0; l < a.length; l++)
    t.bMarks[l + e] = c[l], t.tShift[l + e] = a[l];
  return t.blkIndent = o, !0;
}
function kp(t, e, r, u) {
  var n, i, a, c = t.bMarks[e], o = t.eMarks[e];
  if (c += t.tShift[e], c > o || (n = t.src.charCodeAt(c++), n !== 42 && n !== 45 && n !== 95))
    return !1;
  for (i = 1; c < o; ) {
    if (a = t.src.charCodeAt(c++), a !== n && a !== 32)
      return !1;
    a === n && i++;
  }
  return i < 3 ? !1 : (u || (t.line = e + 1, t.tokens.push({
    type: "hr",
    lines: [e, t.line],
    level: t.level
  })), !0);
}
function zs(t, e) {
  var r, u, n;
  return u = t.bMarks[e] + t.tShift[e], n = t.eMarks[e], u >= n || (r = t.src.charCodeAt(u++), r !== 42 && r !== 45 && r !== 43) || u < n && t.src.charCodeAt(u) !== 32 ? -1 : u;
}
function Hs(t, e) {
  var r, u = t.bMarks[e] + t.tShift[e], n = t.eMarks[e];
  if (u + 1 >= n || (r = t.src.charCodeAt(u++), r < 48 || r > 57))
    return -1;
  for (; ; ) {
    if (u >= n)
      return -1;
    if (r = t.src.charCodeAt(u++), !(r >= 48 && r <= 57)) {
      if (r === 41 || r === 46)
        break;
      return -1;
    }
  }
  return u < n && t.src.charCodeAt(u) !== 32 ? -1 : u;
}
function Cp(t, e) {
  var r, u, n = t.level + 2;
  for (r = e + 2, u = t.tokens.length - 2; r < u; r++)
    t.tokens[r].level === n && t.tokens[r].type === "paragraph_open" && (t.tokens[r + 2].tight = !0, t.tokens[r].tight = !0, r += 2);
}
function Op(t, e, r, u) {
  var n, i, a, c, o, f, s, p, l, h, b, v, y, g, D, E, I, k, d = !0, O, V, z, W;
  if ((p = Hs(t, e)) >= 0)
    y = !0;
  else if ((p = zs(t, e)) >= 0)
    y = !1;
  else
    return !1;
  if (t.level >= t.options.maxNesting)
    return !1;
  if (v = t.src.charCodeAt(p - 1), u)
    return !0;
  for (D = t.tokens.length, y ? (s = t.bMarks[e] + t.tShift[e], b = Number(t.src.substr(s, p - s - 1)), t.tokens.push({
    type: "ordered_list_open",
    order: b,
    lines: I = [e, 0],
    level: t.level++
  })) : t.tokens.push({
    type: "bullet_list_open",
    lines: I = [e, 0],
    level: t.level++
  }), n = e, E = !1, O = t.parser.ruler.getRules("list"); n < r && (g = t.skipSpaces(p), l = t.eMarks[n], g >= l ? h = 1 : h = g - p, h > 4 && (h = 1), h < 1 && (h = 1), i = p - t.bMarks[n] + h, t.tokens.push({
    type: "list_item_open",
    lines: k = [e, 0],
    level: t.level++
  }), c = t.blkIndent, o = t.tight, a = t.tShift[e], f = t.parentType, t.tShift[e] = g - t.bMarks[e], t.blkIndent = i, t.tight = !0, t.parentType = "list", t.parser.tokenize(t, e, r, !0), (!t.tight || E) && (d = !1), E = t.line - e > 1 && t.isEmpty(t.line - 1), t.blkIndent = c, t.tShift[e] = a, t.tight = o, t.parentType = f, t.tokens.push({
    type: "list_item_close",
    level: --t.level
  }), n = e = t.line, k[1] = n, g = t.bMarks[e], !(n >= r || t.isEmpty(n) || t.tShift[n] < t.blkIndent)); ) {
    for (W = !1, V = 0, z = O.length; V < z; V++)
      if (O[V](t, n, r, !0)) {
        W = !0;
        break;
      }
    if (W)
      break;
    if (y) {
      if (p = Hs(t, n), p < 0)
        break;
    } else if (p = zs(t, n), p < 0)
      break;
    if (v !== t.src.charCodeAt(p - 1))
      break;
  }
  return t.tokens.push({
    type: y ? "ordered_list_close" : "bullet_list_close",
    level: --t.level
  }), I[1] = n, t.line = n, d && Cp(t, D), !0;
}
function Pp(t, e, r, u) {
  var n, i, a, c, o, f = t.bMarks[e] + t.tShift[e], s = t.eMarks[e];
  if (f + 4 > s || t.src.charCodeAt(f) !== 91 || t.src.charCodeAt(f + 1) !== 94 || t.level >= t.options.maxNesting)
    return !1;
  for (c = f + 2; c < s; c++) {
    if (t.src.charCodeAt(c) === 32)
      return !1;
    if (t.src.charCodeAt(c) === 93)
      break;
  }
  return c === f + 2 || c + 1 >= s || t.src.charCodeAt(++c) !== 58 ? !1 : (u || (c++, t.env.footnotes || (t.env.footnotes = {}), t.env.footnotes.refs || (t.env.footnotes.refs = {}), o = t.src.slice(f + 2, c - 2), t.env.footnotes.refs[":" + o] = -1, t.tokens.push({
    type: "footnote_reference_open",
    label: o,
    level: t.level++
  }), n = t.bMarks[e], i = t.tShift[e], a = t.parentType, t.tShift[e] = t.skipSpaces(c) - c, t.bMarks[e] = c, t.blkIndent += 4, t.parentType = "footnote", t.tShift[e] < t.blkIndent && (t.tShift[e] += t.blkIndent, t.bMarks[e] -= t.blkIndent), t.parser.tokenize(t, e, r, !0), t.parentType = a, t.blkIndent -= 4, t.tShift[e] = i, t.bMarks[e] = n, t.tokens.push({
    type: "footnote_reference_close",
    level: --t.level
  })), !0);
}
function $p(t, e, r, u) {
  var n, i, a, c = t.bMarks[e] + t.tShift[e], o = t.eMarks[e];
  if (c >= o || (n = t.src.charCodeAt(c), n !== 35 || c >= o))
    return !1;
  for (i = 1, n = t.src.charCodeAt(++c); n === 35 && c < o && i <= 6; )
    i++, n = t.src.charCodeAt(++c);
  return i > 6 || c < o && n !== 32 ? !1 : (u || (o = t.skipCharsBack(o, 32, c), a = t.skipCharsBack(o, 35, c), a > c && t.src.charCodeAt(a - 1) === 32 && (o = a), t.line = e + 1, t.tokens.push({
    type: "heading_open",
    hLevel: i,
    lines: [e, t.line],
    level: t.level
  }), c < o && t.tokens.push({
    type: "inline",
    content: t.src.slice(c, o).trim(),
    level: t.level + 1,
    lines: [e, t.line],
    children: []
  }), t.tokens.push({ type: "heading_close", hLevel: i, level: t.level })), !0);
}
function Np(t, e, r) {
  var u, n, i, a = e + 1;
  return a >= r || t.tShift[a] < t.blkIndent || t.tShift[a] - t.blkIndent > 3 || (n = t.bMarks[a] + t.tShift[a], i = t.eMarks[a], n >= i) || (u = t.src.charCodeAt(n), u !== 45 && u !== 61) || (n = t.skipChars(n, u), n = t.skipSpaces(n), n < i) ? !1 : (n = t.bMarks[e] + t.tShift[e], t.line = a + 1, t.tokens.push({
    type: "heading_open",
    hLevel: u === 61 ? 1 : 2,
    lines: [e, t.line],
    level: t.level
  }), t.tokens.push({
    type: "inline",
    content: t.src.slice(n, t.eMarks[e]).trim(),
    level: t.level + 1,
    lines: [e, t.line - 1],
    children: []
  }), t.tokens.push({
    type: "heading_close",
    hLevel: u === 61 ? 1 : 2,
    level: t.level
  }), !0);
}
var bc = {};
[
  "article",
  "aside",
  "button",
  "blockquote",
  "body",
  "canvas",
  "caption",
  "col",
  "colgroup",
  "dd",
  "div",
  "dl",
  "dt",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "hr",
  "iframe",
  "li",
  "map",
  "object",
  "ol",
  "output",
  "p",
  "pre",
  "progress",
  "script",
  "section",
  "style",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "tr",
  "thead",
  "ul",
  "video"
].forEach(function(t) {
  bc[t] = !0;
});
var Mp = /^<([a-zA-Z]{1,15})[\s\/>]/, Lp = /^<\/([a-zA-Z]{1,15})[\s>]/;
function Ip(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
function Bp(t, e, r, u) {
  var n, i, a, c = t.bMarks[e], o = t.eMarks[e], f = t.tShift[e];
  if (c += f, !t.options.html || f > 3 || c + 2 >= o || t.src.charCodeAt(c) !== 60)
    return !1;
  if (n = t.src.charCodeAt(c + 1), n === 33 || n === 63) {
    if (u)
      return !0;
  } else if (n === 47 || Ip(n)) {
    if (n === 47) {
      if (i = t.src.slice(c, o).match(Lp), !i)
        return !1;
    } else if (i = t.src.slice(c, o).match(Mp), !i)
      return !1;
    if (bc[i[1].toLowerCase()] !== !0)
      return !1;
    if (u)
      return !0;
  } else
    return !1;
  for (a = e + 1; a < t.lineMax && !t.isEmpty(a); )
    a++;
  return t.line = a, t.tokens.push({
    type: "htmlblock",
    level: t.level,
    lines: [e, t.line],
    content: t.getLines(e, a, 0, !0)
  }), !0;
}
function qa(t, e) {
  var r = t.bMarks[e] + t.blkIndent, u = t.eMarks[e];
  return t.src.substr(r, u - r);
}
function Rp(t, e, r, u) {
  var n, i, a, c, o, f, s, p, l, h, b;
  if (e + 2 > r || (o = e + 1, t.tShift[o] < t.blkIndent) || (a = t.bMarks[o] + t.tShift[o], a >= t.eMarks[o]) || (n = t.src.charCodeAt(a), n !== 124 && n !== 45 && n !== 58) || (i = qa(t, e + 1), !/^[-:| ]+$/.test(i)) || (f = i.split("|"), f <= 2))
    return !1;
  for (p = [], c = 0; c < f.length; c++) {
    if (l = f[c].trim(), !l) {
      if (c === 0 || c === f.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(l))
      return !1;
    l.charCodeAt(l.length - 1) === 58 ? p.push(l.charCodeAt(0) === 58 ? "center" : "right") : l.charCodeAt(0) === 58 ? p.push("left") : p.push("");
  }
  if (i = qa(t, e).trim(), i.indexOf("|") === -1 || (f = i.replace(/^\||\|$/g, "").split("|"), p.length !== f.length))
    return !1;
  if (u)
    return !0;
  for (t.tokens.push({
    type: "table_open",
    lines: h = [e, 0],
    level: t.level++
  }), t.tokens.push({
    type: "thead_open",
    lines: [e, e + 1],
    level: t.level++
  }), t.tokens.push({
    type: "tr_open",
    lines: [e, e + 1],
    level: t.level++
  }), c = 0; c < f.length; c++)
    t.tokens.push({
      type: "th_open",
      align: p[c],
      lines: [e, e + 1],
      level: t.level++
    }), t.tokens.push({
      type: "inline",
      content: f[c].trim(),
      lines: [e, e + 1],
      level: t.level,
      children: []
    }), t.tokens.push({ type: "th_close", level: --t.level });
  for (t.tokens.push({ type: "tr_close", level: --t.level }), t.tokens.push({ type: "thead_close", level: --t.level }), t.tokens.push({
    type: "tbody_open",
    lines: b = [e + 2, 0],
    level: t.level++
  }), o = e + 2; o < r && !(t.tShift[o] < t.blkIndent || (i = qa(t, o).trim(), i.indexOf("|") === -1)); o++) {
    for (f = i.replace(/^\||\|$/g, "").split("|"), t.tokens.push({ type: "tr_open", level: t.level++ }), c = 0; c < f.length; c++)
      t.tokens.push({ type: "td_open", align: p[c], level: t.level++ }), s = f[c].substring(
        f[c].charCodeAt(0) === 124 ? 1 : 0,
        f[c].charCodeAt(f[c].length - 1) === 124 ? f[c].length - 1 : f[c].length
      ).trim(), t.tokens.push({
        type: "inline",
        content: s,
        level: t.level,
        children: []
      }), t.tokens.push({ type: "td_close", level: --t.level });
    t.tokens.push({ type: "tr_close", level: --t.level });
  }
  return t.tokens.push({ type: "tbody_close", level: --t.level }), t.tokens.push({ type: "table_close", level: --t.level }), h[1] = b[1] = o, t.line = o, !0;
}
function Vn(t, e) {
  var r, u, n = t.bMarks[e] + t.tShift[e], i = t.eMarks[e];
  return n >= i || (u = t.src.charCodeAt(n++), u !== 126 && u !== 58) || (r = t.skipSpaces(n), n === r) || r >= i ? -1 : r;
}
function Fp(t, e) {
  var r, u, n = t.level + 2;
  for (r = e + 2, u = t.tokens.length - 2; r < u; r++)
    t.tokens[r].level === n && t.tokens[r].type === "paragraph_open" && (t.tokens[r + 2].tight = !0, t.tokens[r].tight = !0, r += 2);
}
function jp(t, e, r, u) {
  var n, i, a, c, o, f, s, p, l, h, b, v, y, g;
  if (u)
    return t.ddIndent < 0 ? !1 : Vn(t, e) >= 0;
  if (s = e + 1, t.isEmpty(s) && ++s > r || t.tShift[s] < t.blkIndent || (n = Vn(t, s), n < 0) || t.level >= t.options.maxNesting)
    return !1;
  f = t.tokens.length, t.tokens.push({
    type: "dl_open",
    lines: o = [e, 0],
    level: t.level++
  }), a = e, i = s;
  e:
    for (; ; ) {
      for (g = !0, y = !1, t.tokens.push({
        type: "dt_open",
        lines: [a, a],
        level: t.level++
      }), t.tokens.push({
        type: "inline",
        content: t.getLines(a, a + 1, t.blkIndent, !1).trim(),
        level: t.level + 1,
        lines: [a, a],
        children: []
      }), t.tokens.push({
        type: "dt_close",
        level: --t.level
      }); ; ) {
        if (t.tokens.push({
          type: "dd_open",
          lines: c = [s, 0],
          level: t.level++
        }), v = t.tight, l = t.ddIndent, p = t.blkIndent, b = t.tShift[i], h = t.parentType, t.blkIndent = t.ddIndent = t.tShift[i] + 2, t.tShift[i] = n - t.bMarks[i], t.tight = !0, t.parentType = "deflist", t.parser.tokenize(t, i, r, !0), (!t.tight || y) && (g = !1), y = t.line - i > 1 && t.isEmpty(t.line - 1), t.tShift[i] = b, t.tight = v, t.parentType = h, t.blkIndent = p, t.ddIndent = l, t.tokens.push({
          type: "dd_close",
          level: --t.level
        }), c[1] = s = t.line, s >= r || t.tShift[s] < t.blkIndent)
          break e;
        if (n = Vn(t, s), n < 0)
          break;
        i = s;
      }
      if (s >= r || (a = s, t.isEmpty(a)) || t.tShift[a] < t.blkIndent || (i = a + 1, i >= r) || (t.isEmpty(i) && i++, i >= r) || t.tShift[i] < t.blkIndent || (n = Vn(t, i), n < 0))
        break;
    }
  return t.tokens.push({
    type: "dl_close",
    level: --t.level
  }), o[1] = s, t.line = s, g && Fp(t, f), !0;
}
function qp(t, e) {
  var r, u, n, i, a, c = e + 1, o;
  if (r = t.lineMax, c < r && !t.isEmpty(c)) {
    for (o = t.parser.ruler.getRules("paragraph"); c < r && !t.isEmpty(c); c++)
      if (!(t.tShift[c] - t.blkIndent > 3)) {
        for (n = !1, i = 0, a = o.length; i < a; i++)
          if (o[i](t, c, r, !0)) {
            n = !0;
            break;
          }
        if (n)
          break;
      }
  }
  return u = t.getLines(e, c, t.blkIndent, !1).trim(), t.line = c, u.length && (t.tokens.push({
    type: "paragraph_open",
    tight: !1,
    lines: [e, t.line],
    level: t.level
  }), t.tokens.push({
    type: "inline",
    content: u,
    level: t.level + 1,
    lines: [e, t.line],
    children: []
  }), t.tokens.push({
    type: "paragraph_close",
    tight: !1,
    level: t.level
  })), !0;
}
var zn = [
  ["code", Sp],
  ["fences", Dp, ["paragraph", "blockquote", "list"]],
  ["blockquote", Tp, ["paragraph", "blockquote", "list"]],
  ["hr", kp, ["paragraph", "blockquote", "list"]],
  ["list", Op, ["paragraph", "blockquote"]],
  ["footnote", Pp, ["paragraph"]],
  ["heading", $p, ["paragraph", "blockquote"]],
  ["lheading", Np],
  ["htmlblock", Bp, ["paragraph", "blockquote"]],
  ["table", Rp, ["paragraph"]],
  ["deflist", jp, ["paragraph"]],
  ["paragraph", qp]
];
function No() {
  this.ruler = new He();
  for (var t = 0; t < zn.length; t++)
    this.ruler.push(zn[t][0], zn[t][1], {
      alt: (zn[t][2] || []).slice()
    });
}
No.prototype.tokenize = function(t, e, r) {
  for (var u = this.ruler.getRules(""), n = u.length, i = e, a = !1, c, o; i < r && (t.line = i = t.skipEmptyLines(i), !(i >= r || t.tShift[i] < t.blkIndent)); ) {
    for (o = 0; o < n && (c = u[o](t, i, r, !1), !c); o++)
      ;
    if (t.tight = !a, t.isEmpty(t.line - 1) && (a = !0), i = t.line, i < r && t.isEmpty(i)) {
      if (a = !0, i++, i < r && t.parentType === "list" && t.isEmpty(i))
        break;
      t.line = i;
    }
  }
};
var Up = /[\n\t]/g, Vp = /\r[\n\u0085]|[\u2424\u2028\u0085]/g, zp = /\u00a0/g;
No.prototype.parse = function(t, e, r, u) {
  var n, i = 0, a = 0;
  if (!t)
    return [];
  t = t.replace(zp, " "), t = t.replace(Vp, `
`), t.indexOf("	") >= 0 && (t = t.replace(Up, function(c, o) {
    var f;
    return t.charCodeAt(o) === 10 ? (i = o + 1, a = 0, c) : (f = "    ".slice((o - i - a) % 4), a = o - i + 1, f);
  })), n = new Ar(t, this, e, r, u), this.tokenize(n, n.line, n.lineMax);
};
function Hp(t) {
  switch (t) {
    case 10:
    case 92:
    case 96:
    case 42:
    case 95:
    case 94:
    case 91:
    case 93:
    case 33:
    case 38:
    case 60:
    case 62:
    case 123:
    case 125:
    case 36:
    case 37:
    case 64:
    case 126:
    case 43:
    case 61:
    case 58:
      return !0;
    default:
      return !1;
  }
}
function Gp(t, e) {
  for (var r = t.pos; r < t.posMax && !Hp(t.src.charCodeAt(r)); )
    r++;
  return r === t.pos ? !1 : (e || (t.pending += t.src.slice(t.pos, r)), t.pos = r, !0);
}
function Wp(t, e) {
  var r, u, n = t.pos;
  if (t.src.charCodeAt(n) !== 10)
    return !1;
  if (r = t.pending.length - 1, u = t.posMax, !e)
    if (r >= 0 && t.pending.charCodeAt(r) === 32)
      if (r >= 1 && t.pending.charCodeAt(r - 1) === 32) {
        for (var i = r - 2; i >= 0; i--)
          if (t.pending.charCodeAt(i) !== 32) {
            t.pending = t.pending.substring(0, i + 1);
            break;
          }
        t.push({
          type: "hardbreak",
          level: t.level
        });
      } else
        t.pending = t.pending.slice(0, -1), t.push({
          type: "softbreak",
          level: t.level
        });
    else
      t.push({
        type: "softbreak",
        level: t.level
      });
  for (n++; n < u && t.src.charCodeAt(n) === 32; )
    n++;
  return t.pos = n, !0;
}
var Mo = [];
for (var Gs = 0; Gs < 256; Gs++)
  Mo.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
  Mo[t.charCodeAt(0)] = 1;
});
function Jp(t, e) {
  var r, u = t.pos, n = t.posMax;
  if (t.src.charCodeAt(u) !== 92)
    return !1;
  if (u++, u < n) {
    if (r = t.src.charCodeAt(u), r < 256 && Mo[r] !== 0)
      return e || (t.pending += t.src[u]), t.pos += 2, !0;
    if (r === 10) {
      for (e || t.push({
        type: "hardbreak",
        level: t.level
      }), u++; u < n && t.src.charCodeAt(u) === 32; )
        u++;
      return t.pos = u, !0;
    }
  }
  return e || (t.pending += "\\"), t.pos++, !0;
}
function Xp(t, e) {
  var r, u, n, i, a, c = t.pos, o = t.src.charCodeAt(c);
  if (o !== 96)
    return !1;
  for (r = c, c++, u = t.posMax; c < u && t.src.charCodeAt(c) === 96; )
    c++;
  for (n = t.src.slice(r, c), i = a = c; (i = t.src.indexOf("`", a)) !== -1; ) {
    for (a = i + 1; a < u && t.src.charCodeAt(a) === 96; )
      a++;
    if (a - i === n.length)
      return e || t.push({
        type: "code",
        content: t.src.slice(c, i).replace(/[ \n]+/g, " ").trim(),
        block: !1,
        level: t.level
      }), t.pos = a, !0;
  }
  return e || (t.pending += n), t.pos += n.length, !0;
}
function Yp(t, e) {
  var r, u, n, i = t.posMax, a = t.pos, c, o;
  if (t.src.charCodeAt(a) !== 126 || e || a + 4 >= i || t.src.charCodeAt(a + 1) !== 126 || t.level >= t.options.maxNesting || (c = a > 0 ? t.src.charCodeAt(a - 1) : -1, o = t.src.charCodeAt(a + 2), c === 126) || o === 126 || o === 32 || o === 10)
    return !1;
  for (u = a + 2; u < i && t.src.charCodeAt(u) === 126; )
    u++;
  if (u > a + 3)
    return t.pos += u - a, e || (t.pending += t.src.slice(a, u)), !0;
  for (t.pos = a + 2, n = 1; t.pos + 1 < i; ) {
    if (t.src.charCodeAt(t.pos) === 126 && t.src.charCodeAt(t.pos + 1) === 126 && (c = t.src.charCodeAt(t.pos - 1), o = t.pos + 2 < i ? t.src.charCodeAt(t.pos + 2) : -1, o !== 126 && c !== 126 && (c !== 32 && c !== 10 ? n-- : o !== 32 && o !== 10 && n++, n <= 0))) {
      r = !0;
      break;
    }
    t.parser.skipToken(t);
  }
  return r ? (t.posMax = t.pos, t.pos = a + 2, e || (t.push({ type: "del_open", level: t.level++ }), t.parser.tokenize(t), t.push({ type: "del_close", level: --t.level })), t.pos = t.posMax + 2, t.posMax = i, !0) : (t.pos = a, !1);
}
function Zp(t, e) {
  var r, u, n, i = t.posMax, a = t.pos, c, o;
  if (t.src.charCodeAt(a) !== 43 || e || a + 4 >= i || t.src.charCodeAt(a + 1) !== 43 || t.level >= t.options.maxNesting || (c = a > 0 ? t.src.charCodeAt(a - 1) : -1, o = t.src.charCodeAt(a + 2), c === 43) || o === 43 || o === 32 || o === 10)
    return !1;
  for (u = a + 2; u < i && t.src.charCodeAt(u) === 43; )
    u++;
  if (u !== a + 2)
    return t.pos += u - a, e || (t.pending += t.src.slice(a, u)), !0;
  for (t.pos = a + 2, n = 1; t.pos + 1 < i; ) {
    if (t.src.charCodeAt(t.pos) === 43 && t.src.charCodeAt(t.pos + 1) === 43 && (c = t.src.charCodeAt(t.pos - 1), o = t.pos + 2 < i ? t.src.charCodeAt(t.pos + 2) : -1, o !== 43 && c !== 43 && (c !== 32 && c !== 10 ? n-- : o !== 32 && o !== 10 && n++, n <= 0))) {
      r = !0;
      break;
    }
    t.parser.skipToken(t);
  }
  return r ? (t.posMax = t.pos, t.pos = a + 2, e || (t.push({ type: "ins_open", level: t.level++ }), t.parser.tokenize(t), t.push({ type: "ins_close", level: --t.level })), t.pos = t.posMax + 2, t.posMax = i, !0) : (t.pos = a, !1);
}
function Kp(t, e) {
  var r, u, n, i = t.posMax, a = t.pos, c, o;
  if (t.src.charCodeAt(a) !== 61 || e || a + 4 >= i || t.src.charCodeAt(a + 1) !== 61 || t.level >= t.options.maxNesting || (c = a > 0 ? t.src.charCodeAt(a - 1) : -1, o = t.src.charCodeAt(a + 2), c === 61) || o === 61 || o === 32 || o === 10)
    return !1;
  for (u = a + 2; u < i && t.src.charCodeAt(u) === 61; )
    u++;
  if (u !== a + 2)
    return t.pos += u - a, e || (t.pending += t.src.slice(a, u)), !0;
  for (t.pos = a + 2, n = 1; t.pos + 1 < i; ) {
    if (t.src.charCodeAt(t.pos) === 61 && t.src.charCodeAt(t.pos + 1) === 61 && (c = t.src.charCodeAt(t.pos - 1), o = t.pos + 2 < i ? t.src.charCodeAt(t.pos + 2) : -1, o !== 61 && c !== 61 && (c !== 32 && c !== 10 ? n-- : o !== 32 && o !== 10 && n++, n <= 0))) {
      r = !0;
      break;
    }
    t.parser.skipToken(t);
  }
  return r ? (t.posMax = t.pos, t.pos = a + 2, e || (t.push({ type: "mark_open", level: t.level++ }), t.parser.tokenize(t), t.push({ type: "mark_close", level: --t.level })), t.pos = t.posMax + 2, t.posMax = i, !0) : (t.pos = a, !1);
}
function Ws(t) {
  return t >= 48 && t <= 57 || t >= 65 && t <= 90 || t >= 97 && t <= 122;
}
function Js(t, e) {
  var r = e, u, n, i, a = !0, c = !0, o = t.posMax, f = t.src.charCodeAt(e);
  for (u = e > 0 ? t.src.charCodeAt(e - 1) : -1; r < o && t.src.charCodeAt(r) === f; )
    r++;
  return r >= o && (a = !1), i = r - e, i >= 4 ? a = c = !1 : (n = r < o ? t.src.charCodeAt(r) : -1, (n === 32 || n === 10) && (a = !1), (u === 32 || u === 10) && (c = !1), f === 95 && (Ws(u) && (a = !1), Ws(n) && (c = !1))), {
    can_open: a,
    can_close: c,
    delims: i
  };
}
function Qp(t, e) {
  var r, u, n, i, a, c, o, f = t.posMax, s = t.pos, p = t.src.charCodeAt(s);
  if (p !== 95 && p !== 42 || e)
    return !1;
  if (o = Js(t, s), r = o.delims, !o.can_open)
    return t.pos += r, e || (t.pending += t.src.slice(s, t.pos)), !0;
  if (t.level >= t.options.maxNesting)
    return !1;
  for (t.pos = s + r, c = [r]; t.pos < f; ) {
    if (t.src.charCodeAt(t.pos) === p) {
      if (o = Js(t, t.pos), u = o.delims, o.can_close) {
        for (i = c.pop(), a = u; i !== a; ) {
          if (a < i) {
            c.push(i - a);
            break;
          }
          if (a -= i, c.length === 0)
            break;
          t.pos += i, i = c.pop();
        }
        if (c.length === 0) {
          r = i, n = !0;
          break;
        }
        t.pos += u;
        continue;
      }
      o.can_open && c.push(u), t.pos += u;
      continue;
    }
    t.parser.skipToken(t);
  }
  return n ? (t.posMax = t.pos, t.pos = s + r, e || ((r === 2 || r === 3) && t.push({ type: "strong_open", level: t.level++ }), (r === 1 || r === 3) && t.push({ type: "em_open", level: t.level++ }), t.parser.tokenize(t), (r === 1 || r === 3) && t.push({ type: "em_close", level: --t.level }), (r === 2 || r === 3) && t.push({ type: "strong_close", level: --t.level })), t.pos = t.posMax + r, t.posMax = f, !0) : (t.pos = s, !1);
}
var eh = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function th(t, e) {
  var r, u, n = t.posMax, i = t.pos;
  if (t.src.charCodeAt(i) !== 126 || e || i + 2 >= n || t.level >= t.options.maxNesting)
    return !1;
  for (t.pos = i + 1; t.pos < n; ) {
    if (t.src.charCodeAt(t.pos) === 126) {
      r = !0;
      break;
    }
    t.parser.skipToken(t);
  }
  return !r || i + 1 === t.pos || (u = t.src.slice(i + 1, t.pos), u.match(/(^|[^\\])(\\\\)*\s/)) ? (t.pos = i, !1) : (t.posMax = t.pos, t.pos = i + 1, e || t.push({
    type: "sub",
    level: t.level,
    content: u.replace(eh, "$1")
  }), t.pos = t.posMax + 1, t.posMax = n, !0);
}
var rh = /\\([ \\!"#$%&'()*+,.\/:;<=>?@[\]^_`{|}~-])/g;
function uh(t, e) {
  var r, u, n = t.posMax, i = t.pos;
  if (t.src.charCodeAt(i) !== 94 || e || i + 2 >= n || t.level >= t.options.maxNesting)
    return !1;
  for (t.pos = i + 1; t.pos < n; ) {
    if (t.src.charCodeAt(t.pos) === 94) {
      r = !0;
      break;
    }
    t.parser.skipToken(t);
  }
  return !r || i + 1 === t.pos || (u = t.src.slice(i + 1, t.pos), u.match(/(^|[^\\])(\\\\)*\s/)) ? (t.pos = i, !1) : (t.posMax = t.pos, t.pos = i + 1, e || t.push({
    type: "sup",
    level: t.level,
    content: u.replace(rh, "$1")
  }), t.pos = t.posMax + 1, t.posMax = n, !0);
}
function nh(t, e) {
  var r, u, n, i, a, c, o, f, s = !1, p = t.pos, l = t.posMax, h = t.pos, b = t.src.charCodeAt(h);
  if (b === 33 && (s = !0, b = t.src.charCodeAt(++h)), b !== 91 || t.level >= t.options.maxNesting || (r = h + 1, u = qu(t, h), u < 0))
    return !1;
  if (c = u + 1, c < l && t.src.charCodeAt(c) === 40) {
    for (c++; c < l && (f = t.src.charCodeAt(c), !(f !== 32 && f !== 10)); c++)
      ;
    if (c >= l)
      return !1;
    for (h = c, pc(t, c) ? (i = t.linkContent, c = t.pos) : i = "", h = c; c < l && (f = t.src.charCodeAt(c), !(f !== 32 && f !== 10)); c++)
      ;
    if (c < l && h !== c && hc(t, c))
      for (a = t.linkContent, c = t.pos; c < l && (f = t.src.charCodeAt(c), !(f !== 32 && f !== 10)); c++)
        ;
    else
      a = "";
    if (c >= l || t.src.charCodeAt(c) !== 41)
      return t.pos = p, !1;
    c++;
  } else {
    if (t.linkLevel > 0)
      return !1;
    for (; c < l && (f = t.src.charCodeAt(c), !(f !== 32 && f !== 10)); c++)
      ;
    if (c < l && t.src.charCodeAt(c) === 91 && (h = c + 1, c = qu(t, c), c >= 0 ? n = t.src.slice(h, c++) : c = h - 1), n || (typeof n > "u" && (c = u + 1), n = t.src.slice(r, u)), o = t.env.references[gc(n)], !o)
      return t.pos = p, !1;
    i = o.href, a = o.title;
  }
  return e || (t.pos = r, t.posMax = u, s ? t.push({
    type: "image",
    src: i,
    title: a,
    alt: t.src.substr(r, u - r),
    level: t.level
  }) : (t.push({
    type: "link_open",
    href: i,
    title: a,
    level: t.level++
  }), t.linkLevel++, t.parser.tokenize(t), t.linkLevel--, t.push({ type: "link_close", level: --t.level }))), t.pos = c, t.posMax = l, !0;
}
function ih(t, e) {
  var r, u, n, i, a = t.posMax, c = t.pos;
  return c + 2 >= a || t.src.charCodeAt(c) !== 94 || t.src.charCodeAt(c + 1) !== 91 || t.level >= t.options.maxNesting || (r = c + 2, u = qu(t, c + 1), u < 0) ? !1 : (e || (t.env.footnotes || (t.env.footnotes = {}), t.env.footnotes.list || (t.env.footnotes.list = []), n = t.env.footnotes.list.length, t.pos = r, t.posMax = u, t.push({
    type: "footnote_ref",
    id: n,
    level: t.level
  }), t.linkLevel++, i = t.tokens.length, t.parser.tokenize(t), t.env.footnotes.list[n] = { tokens: t.tokens.splice(i) }, t.linkLevel--), t.pos = u + 1, t.posMax = a, !0);
}
function ah(t, e) {
  var r, u, n, i, a = t.posMax, c = t.pos;
  if (c + 3 > a || !t.env.footnotes || !t.env.footnotes.refs || t.src.charCodeAt(c) !== 91 || t.src.charCodeAt(c + 1) !== 94 || t.level >= t.options.maxNesting)
    return !1;
  for (u = c + 2; u < a; u++) {
    if (t.src.charCodeAt(u) === 32 || t.src.charCodeAt(u) === 10)
      return !1;
    if (t.src.charCodeAt(u) === 93)
      break;
  }
  return u === c + 2 || u >= a || (u++, r = t.src.slice(c + 2, u - 1), typeof t.env.footnotes.refs[":" + r] > "u") ? !1 : (e || (t.env.footnotes.list || (t.env.footnotes.list = []), t.env.footnotes.refs[":" + r] < 0 ? (n = t.env.footnotes.list.length, t.env.footnotes.list[n] = { label: r, count: 0 }, t.env.footnotes.refs[":" + r] = n) : n = t.env.footnotes.refs[":" + r], i = t.env.footnotes.list[n].count, t.env.footnotes.list[n].count++, t.push({
    type: "footnote_ref",
    id: n,
    subId: i,
    level: t.level
  })), t.pos = u, t.posMax = a, !0);
}
var oh = [
  "coap",
  "doi",
  "javascript",
  "aaa",
  "aaas",
  "about",
  "acap",
  "cap",
  "cid",
  "crid",
  "data",
  "dav",
  "dict",
  "dns",
  "file",
  "ftp",
  "geo",
  "go",
  "gopher",
  "h323",
  "http",
  "https",
  "iax",
  "icap",
  "im",
  "imap",
  "info",
  "ipp",
  "iris",
  "iris.beep",
  "iris.xpc",
  "iris.xpcs",
  "iris.lwz",
  "ldap",
  "mailto",
  "mid",
  "msrp",
  "msrps",
  "mtqp",
  "mupdate",
  "news",
  "nfs",
  "ni",
  "nih",
  "nntp",
  "opaquelocktoken",
  "pop",
  "pres",
  "rtsp",
  "service",
  "session",
  "shttp",
  "sieve",
  "sip",
  "sips",
  "sms",
  "snmp",
  "soap.beep",
  "soap.beeps",
  "tag",
  "tel",
  "telnet",
  "tftp",
  "thismessage",
  "tn3270",
  "tip",
  "tv",
  "urn",
  "vemmi",
  "ws",
  "wss",
  "xcon",
  "xcon-userid",
  "xmlrpc.beep",
  "xmlrpc.beeps",
  "xmpp",
  "z39.50r",
  "z39.50s",
  "adiumxtra",
  "afp",
  "afs",
  "aim",
  "apt",
  "attachment",
  "aw",
  "beshare",
  "bitcoin",
  "bolo",
  "callto",
  "chrome",
  "chrome-extension",
  "com-eventbrite-attendee",
  "content",
  "cvs",
  "dlna-playsingle",
  "dlna-playcontainer",
  "dtn",
  "dvb",
  "ed2k",
  "facetime",
  "feed",
  "finger",
  "fish",
  "gg",
  "git",
  "gizmoproject",
  "gtalk",
  "hcp",
  "icon",
  "ipn",
  "irc",
  "irc6",
  "ircs",
  "itms",
  "jar",
  "jms",
  "keyparc",
  "lastfm",
  "ldaps",
  "magnet",
  "maps",
  "market",
  "message",
  "mms",
  "ms-help",
  "msnim",
  "mumble",
  "mvn",
  "notes",
  "oid",
  "palm",
  "paparazzi",
  "platform",
  "proxy",
  "psyc",
  "query",
  "res",
  "resource",
  "rmi",
  "rsync",
  "rtmp",
  "secondlife",
  "sftp",
  "sgn",
  "skype",
  "smb",
  "soldat",
  "spotify",
  "ssh",
  "steam",
  "svn",
  "teamspeak",
  "things",
  "udp",
  "unreal",
  "ut2004",
  "ventrilo",
  "view-source",
  "webcal",
  "wtai",
  "wyciwyg",
  "xfire",
  "xri",
  "ymsgr"
], sh = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, lh = /^<([a-zA-Z.\-]{1,25}):([^<>\x00-\x20]*)>/;
function ch(t, e) {
  var r, u, n, i, a, c = t.pos;
  return t.src.charCodeAt(c) !== 60 || (r = t.src.slice(c), r.indexOf(">") < 0) ? !1 : (u = r.match(lh), u ? oh.indexOf(u[1].toLowerCase()) < 0 || (i = u[0].slice(1, -1), a = eo(i), !t.parser.validateLink(i)) ? !1 : (e || (t.push({
    type: "link_open",
    href: a,
    level: t.level
  }), t.push({
    type: "text",
    content: i,
    level: t.level + 1
  }), t.push({ type: "link_close", level: t.level })), t.pos += u[0].length, !0) : (n = r.match(sh), n ? (i = n[0].slice(1, -1), a = eo("mailto:" + i), t.parser.validateLink(a) ? (e || (t.push({
    type: "link_open",
    href: a,
    level: t.level
  }), t.push({
    type: "text",
    content: i,
    level: t.level + 1
  }), t.push({ type: "link_close", level: t.level })), t.pos += n[0].length, !0) : !1) : !1));
}
function Wi(t, e) {
  return t = t.source, e = e || "", function r(u, n) {
    return u ? (n = n.source || n, t = t.replace(u, n), r) : new RegExp(t, e);
  };
}
var fh = /[a-zA-Z_:][a-zA-Z0-9:._-]*/, dh = /[^"'=<>`\x00-\x20]+/, ph = /'[^']*'/, hh = /"[^"]*"/, gh = Wi(/(?:unquoted|single_quoted|double_quoted)/)("unquoted", dh)("single_quoted", ph)("double_quoted", hh)(), mh = Wi(/(?:\s+attr_name(?:\s*=\s*attr_value)?)/)("attr_name", fh)("attr_value", gh)(), bh = Wi(/<[A-Za-z][A-Za-z0-9]*attribute*\s*\/?>/)("attribute", mh)(), yh = /<\/[A-Za-z][A-Za-z0-9]*\s*>/, vh = /<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->/, xh = /<[?].*?[?]>/, wh = /<![A-Z]+\s+[^>]*>/, Eh = /<!\[CDATA\[[\s\S]*?\]\]>/, Ah = Wi(/^(?:open_tag|close_tag|comment|processing|declaration|cdata)/)("open_tag", bh)("close_tag", yh)("comment", vh)("processing", xh)("declaration", wh)("cdata", Eh)();
function _h(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
function Sh(t, e) {
  var r, u, n, i = t.pos;
  return !t.options.html || (n = t.posMax, t.src.charCodeAt(i) !== 60 || i + 2 >= n) || (r = t.src.charCodeAt(i + 1), r !== 33 && r !== 63 && r !== 47 && !_h(r)) || (u = t.src.slice(i).match(Ah), !u) ? !1 : (e || t.push({
    type: "htmltag",
    content: t.src.slice(i, i + u[0].length),
    level: t.level
  }), t.pos += u[0].length, !0);
}
var Dh = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i, Th = /^&([a-z][a-z0-9]{1,31});/i;
function kh(t, e) {
  var r, u, n, i = t.pos, a = t.posMax;
  if (t.src.charCodeAt(i) !== 38)
    return !1;
  if (i + 1 < a) {
    if (r = t.src.charCodeAt(i + 1), r === 35) {
      if (n = t.src.slice(i).match(Dh), n)
        return e || (u = n[1][0].toLowerCase() === "x" ? parseInt(n[1].slice(1), 16) : parseInt(n[1], 10), t.pending += Po(u) ? hi(u) : hi(65533)), t.pos += n[0].length, !0;
    } else if (n = t.src.slice(i).match(Th), n) {
      var c = cc(n[1]);
      if (n[1] !== c)
        return e || (t.pending += c), t.pos += n[0].length, !0;
    }
  }
  return e || (t.pending += "&"), t.pos++, !0;
}
var Ua = [
  ["text", Gp],
  ["newline", Wp],
  ["escape", Jp],
  ["backticks", Xp],
  ["del", Yp],
  ["ins", Zp],
  ["mark", Kp],
  ["emphasis", Qp],
  ["sub", th],
  ["sup", uh],
  ["links", nh],
  ["footnote_inline", ih],
  ["footnote_ref", ah],
  ["autolink", ch],
  ["htmltag", Sh],
  ["entity", kh]
];
function Ji() {
  this.ruler = new He();
  for (var t = 0; t < Ua.length; t++)
    this.ruler.push(Ua[t][0], Ua[t][1]);
  this.validateLink = Ch;
}
Ji.prototype.skipToken = function(t) {
  var e = this.ruler.getRules(""), r = e.length, u = t.pos, n, i;
  if ((i = t.cacheGet(u)) > 0) {
    t.pos = i;
    return;
  }
  for (n = 0; n < r; n++)
    if (e[n](t, !0)) {
      t.cacheSet(u, t.pos);
      return;
    }
  t.pos++, t.cacheSet(u, t.pos);
};
Ji.prototype.tokenize = function(t) {
  for (var e = this.ruler.getRules(""), r = e.length, u = t.posMax, n, i; t.pos < u; ) {
    for (i = 0; i < r && (n = e[i](t, !1), !n); i++)
      ;
    if (n) {
      if (t.pos >= u)
        break;
      continue;
    }
    t.pending += t.src[t.pos++];
  }
  t.pending && t.pushPending();
};
Ji.prototype.parse = function(t, e, r, u) {
  var n = new Er(t, this, e, r, u);
  this.tokenize(n);
};
function Ch(t) {
  var e = ["vbscript", "javascript", "file", "data"], r = t.trim().toLowerCase();
  return r = Yt(r), !(r.indexOf(":") !== -1 && e.indexOf(r.split(":")[0]) !== -1);
}
var Oh = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "block",
        "inline",
        "references",
        "replacements",
        "smartquotes",
        "references",
        "abbr2",
        "footnote_tail"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fences",
        "footnote",
        "heading",
        "hr",
        "htmlblock",
        "lheading",
        "list",
        "paragraph",
        "table"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "del",
        "emphasis",
        "entity",
        "escape",
        "footnote_ref",
        "htmltag",
        "links",
        "newline",
        "text"
      ]
    }
  }
}, Ph = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    // Don't restrict core/block/inline rules
    core: {},
    block: {},
    inline: {}
  }
}, $h = {
  options: {
    html: !0,
    // Enable HTML tags in source
    xhtmlOut: !0,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkTarget: "",
    // set target to open link in
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Set doubles to '«»' for Russian, '„“' for German.
    quotes: "“”‘’",
    // Highlighter function. Should return escaped HTML,
    // or '' if input not changed
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "block",
        "inline",
        "references",
        "abbr2"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fences",
        "heading",
        "hr",
        "htmlblock",
        "lheading",
        "list",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "htmltag",
        "links",
        "newline",
        "text"
      ]
    }
  }
}, Nh = {
  default: Oh,
  full: Ph,
  commonmark: $h
};
function yc(t, e, r) {
  this.src = e, this.env = r, this.options = t.options, this.tokens = [], this.inlineMode = !1, this.inline = t.inline, this.block = t.block, this.renderer = t.renderer, this.typographer = t.typographer;
}
function Zt(t, e) {
  typeof t != "string" && (e = t, t = "default"), e && e.linkify != null && console.warn(
    `linkify option is removed. Use linkify plugin instead:

import Remarkable from 'remarkable';
import linkify from 'remarkable/linkify';
new Remarkable().use(linkify)
`
  ), this.inline = new Ji(), this.block = new No(), this.core = new mc(), this.renderer = new $o(), this.ruler = new He(), this.options = {}, this.configure(Nh[t]), this.set(e || {});
}
Zt.prototype.set = function(t) {
  Oo(this.options, t);
};
Zt.prototype.configure = function(t) {
  var e = this;
  if (!t)
    throw new Error("Wrong `remarkable` preset, check name/content");
  t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(r) {
    t.components[r].rules && e[r].ruler.enable(t.components[r].rules, !0);
  });
};
Zt.prototype.use = function(t, e) {
  return t(this, e), this;
};
Zt.prototype.parse = function(t, e) {
  var r = new yc(this, t, e);
  return this.core.process(r), r.tokens;
};
Zt.prototype.render = function(t, e) {
  return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
};
Zt.prototype.parseInline = function(t, e) {
  var r = new yc(this, t, e);
  return r.inlineMode = !0, this.core.process(r), r.tokens;
};
Zt.prototype.renderInline = function(t, e) {
  return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
};
const Mh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Remarkable: Zt,
  utils: sp
}, Symbol.toStringTag, { value: "Module" })), Lh = /* @__PURE__ */ So(Mh);
var Xr = {}, Kt = {};
function Ih(t, e) {
  var r = Object.setPrototypeOf;
  r ? r(t, e) : t.__proto__ = e;
}
function vc(t, e) {
  e === void 0 && (e = t.constructor);
  var r = Error.captureStackTrace;
  r && r(t, e);
}
var Bh = /* @__PURE__ */ function() {
  var t = function(r, u) {
    return t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i)
        Object.prototype.hasOwnProperty.call(i, a) && (n[a] = i[a]);
    }, t(r, u);
  };
  return function(e, r) {
    if (typeof r != "function" && r !== null) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(e, r);
    function u() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (u.prototype = r.prototype, new u());
  };
}(), Rh = function(t) {
  Bh(e, t);
  function e(r, u) {
    var n = this.constructor, i = t.call(this, r, u) || this;
    return Object.defineProperty(i, "name", {
      value: n.name,
      enumerable: !1,
      configurable: !0
    }), Ih(i, n.prototype), vc(i), i;
  }
  return e;
}(Error), Fh = function(t, e, r) {
  if (r || arguments.length === 2) for (var u = 0, n = e.length, i; u < n; u++)
    (i || !(u in e)) && (i || (i = Array.prototype.slice.call(e, 0, u)), i[u] = e[u]);
  return t.concat(i || Array.prototype.slice.call(e));
};
function jh(t, e) {
  e === void 0 && (e = Error);
  function r() {
    for (var u = [], n = 0; n < arguments.length; n++)
      u[n] = arguments[n];
    if (!(this instanceof r)) return new (r.bind.apply(r, Fh([void 0], u, !1)))();
    e.apply(this, u), Object.defineProperty(this, "name", {
      value: t.name || e.name,
      enumerable: !1,
      configurable: !0
    }), t.apply(this, u), vc(this, r);
  }
  return Object.defineProperties(r, {
    prototype: {
      value: Object.create(e.prototype, {
        constructor: {
          value: r,
          writable: !0,
          configurable: !0
        }
      })
    }
  });
}
const qh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CustomError: Rh,
  customErrorFactory: jh
}, Symbol.toStringTag, { value: "Module" })), Uh = /* @__PURE__ */ So(qh);
var Lo = {};
const Vh = {}, zh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Vh
}, Symbol.toStringTag, { value: "Module" })), Ie = /* @__PURE__ */ So(zh), Xs = Ie, Ys = /\s+at.*(?:\(|\s)(.*)\)?/, Hh = /^(?:(?:(?:node|(?:internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)\.js:\d+:\d+)|native)/, Gh = typeof Xs.homedir > "u" ? "" : Xs.homedir();
var Wh = (t, e) => (e = Object.assign({ pretty: !1 }, e), t.replace(/\\/g, "/").split(`
`).filter((r) => {
  const u = r.match(Ys);
  if (u === null || !u[1])
    return !0;
  const n = u[1];
  return n.includes(".app/Contents/Resources/electron.asar") || n.includes(".app/Contents/Resources/default_app.asar") ? !1 : !Hh.test(n);
}).filter((r) => r.trim() !== "").map((r) => e.pretty ? r.replace(Ys, (u, n) => u.replace(n, n.replace(Gh, "~"))) : r).join(`
`)), Jh = function(e) {
  return Xh(e) && !Yh(e);
};
function Xh(t) {
  return !!t && typeof t == "object";
}
function Yh(t) {
  var e = Object.prototype.toString.call(t);
  return e === "[object RegExp]" || e === "[object Date]" || Qh(t);
}
var Zh = typeof Symbol == "function" && Symbol.for, Kh = Zh ? Symbol.for("react.element") : 60103;
function Qh(t) {
  return t.$$typeof === Kh;
}
function e2(t) {
  return Array.isArray(t) ? [] : {};
}
function Uu(t, e) {
  return e.clone !== !1 && e.isMergeableObject(t) ? Yr(e2(t), t, e) : t;
}
function t2(t, e, r) {
  return t.concat(e).map(function(u) {
    return Uu(u, r);
  });
}
function r2(t, e) {
  if (!e.customMerge)
    return Yr;
  var r = e.customMerge(t);
  return typeof r == "function" ? r : Yr;
}
function u2(t) {
  return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t).filter(function(e) {
    return Object.propertyIsEnumerable.call(t, e);
  }) : [];
}
function Zs(t) {
  return Object.keys(t).concat(u2(t));
}
function xc(t, e) {
  try {
    return e in t;
  } catch {
    return !1;
  }
}
function n2(t, e) {
  return xc(t, e) && !(Object.hasOwnProperty.call(t, e) && Object.propertyIsEnumerable.call(t, e));
}
function i2(t, e, r) {
  var u = {};
  return r.isMergeableObject(t) && Zs(t).forEach(function(n) {
    u[n] = Uu(t[n], r);
  }), Zs(e).forEach(function(n) {
    n2(t, n) || (xc(t, n) && r.isMergeableObject(e[n]) ? u[n] = r2(n, r)(t[n], e[n], r) : u[n] = Uu(e[n], r));
  }), u;
}
function Yr(t, e, r) {
  r = r || {}, r.arrayMerge = r.arrayMerge || t2, r.isMergeableObject = r.isMergeableObject || Jh, r.cloneUnlessOtherwiseSpecified = Uu;
  var u = Array.isArray(e), n = Array.isArray(t), i = u === n;
  return i ? u ? r.arrayMerge(t, e, r) : i2(t, e, r) : Uu(e, r);
}
Yr.all = function(e, r) {
  if (!Array.isArray(e))
    throw new Error("first argument should be an array");
  return e.reduce(function(u, n) {
    return Yr(u, n, r);
  }, {});
};
var a2 = Yr, wc = a2, Xi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), function(e) {
    e.DEFAULT = {
      cleanStack: !0
    };
  }(t.Options || (t.Options = {}));
})(Xi);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  var e = Wh, r = wc, u = Xi;
  (function(n) {
    function i(o, f, s, p) {
      p === void 0 && (p = u.Options.DEFAULT);
      var l = o;
      return f && (l.cause = f), l.stack = a(l.stack, f, p), s && c(l, s), l;
    }
    n.make = i;
    function a(o, f, s) {
      var p = o || /* istanbul ignore next */
      "";
      f && (p += `
 Caused by: ` + (f.stack || /* istanbul ignore next */
      f));
      function l(h) {
        return e(h, { pretty: !0 });
      }
      return s && s.cleanStack && (p = l(p)), p;
    }
    n.appendToStack = a;
    function c(o, f) {
      for (var s in f)
        if (f.hasOwnProperty(s)) {
          var p = o.hasOwnProperty(s) && typeof o[s] == "object";
          o[s] = p ? r(o[s], f[s]) : f[s];
        }
    }
  })(t.ChainedErrorFactory || (t.ChainedErrorFactory = {}));
})(Lo);
var o2 = N && N.__extends || /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, n) {
      u.__proto__ = n;
    } || function(u, n) {
      for (var i in n) n.hasOwnProperty(i) && (u[i] = n[i]);
    }, t(e, r);
  };
  return function(e, r) {
    t(e, r);
    function u() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (u.prototype = r.prototype, new u());
  };
}();
Object.defineProperty(Kt, "__esModule", { value: !0 });
var s2 = Uh, l2 = Lo, c2 = Xi, f2 = (
  /** @class */
  function(t) {
    o2(e, t);
    function e(r, u, n) {
      n === void 0 && (n = c2.Options.DEFAULT);
      var i = t.call(this, r) || this;
      return i.cause = u, i.stack = l2.ChainedErrorFactory.appendToStack(i.stack, u, n), i;
    }
    return e;
  }(s2.CustomError)
);
Kt.default = f2;
var d2 = Lo;
Kt.ChainedErrorFactory = d2.ChainedErrorFactory;
var p2 = Xi;
Kt.Options = p2.Options;
var h2 = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Xr, "__esModule", { value: !0 });
Xr.SecurityError = Xr.SecurityChecker = void 0;
const g2 = h2(Kt);
class m2 {
  static checkSecurity(e, r) {
    if (!r.allowScriptTag && this.containsScriptTag(e))
      throw new Ec("Renderer rejected the input because of insecure content: text contains script tag");
  }
  static containsScriptTag(e) {
    return /<\s*script/gi.test(e);
  }
}
Xr.SecurityChecker = m2;
class Ec extends g2.default {
  constructor(e, r) {
    super(e, r);
  }
}
Xr.SecurityError = Ec;
var Zr = {}, Yi = {}, Pt = {}, $t = {};
function b2(t, e, r) {
  if (r === void 0 && (r = Array.prototype), t && typeof r.find == "function")
    return r.find.call(t, e);
  for (var u = 0; u < t.length; u++)
    if (Object.prototype.hasOwnProperty.call(t, u)) {
      var n = t[u];
      if (e.call(void 0, n, u, t))
        return n;
    }
}
function Io(t, e) {
  return e === void 0 && (e = Object), e && typeof e.freeze == "function" ? e.freeze(t) : t;
}
function y2(t, e) {
  if (t === null || typeof t != "object")
    throw new TypeError("target is not an object");
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
  return t;
}
var Ac = Io({
  /**
   * `text/html`, the only mime type that triggers treating an XML document as HTML.
   *
   * @see DOMParser.SupportedType.isHTML
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring WHATWG HTML Spec
   */
  HTML: "text/html",
  /**
   * Helper method to check a mime type if it indicates an HTML document
   *
   * @param {string} [value]
   * @returns {boolean}
   *
   * @see https://www.iana.org/assignments/media-types/text/html IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/HTML Wikipedia
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMParser/parseFromString MDN
   * @see https://html.spec.whatwg.org/multipage/dynamic-markup-insertion.html#dom-domparser-parsefromstring 	 */
  isHTML: function(t) {
    return t === Ac.HTML;
  },
  /**
   * `application/xml`, the standard mime type for XML documents.
   *
   * @see https://www.iana.org/assignments/media-types/application/xml IANA MimeType registration
   * @see https://tools.ietf.org/html/rfc7303#section-9.1 RFC 7303
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_APPLICATION: "application/xml",
  /**
   * `text/html`, an alias for `application/xml`.
   *
   * @see https://tools.ietf.org/html/rfc7303#section-9.2 RFC 7303
   * @see https://www.iana.org/assignments/media-types/text/xml IANA MimeType registration
   * @see https://en.wikipedia.org/wiki/XML_and_MIME Wikipedia
   */
  XML_TEXT: "text/xml",
  /**
   * `application/xhtml+xml`, indicates an XML document that has the default HTML namespace,
   * but is parsed as an XML document.
   *
   * @see https://www.iana.org/assignments/media-types/application/xhtml+xml IANA MimeType registration
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument WHATWG DOM Spec
   * @see https://en.wikipedia.org/wiki/XHTML Wikipedia
   */
  XML_XHTML_APPLICATION: "application/xhtml+xml",
  /**
   * `image/svg+xml`,
   *
   * @see https://www.iana.org/assignments/media-types/image/svg+xml IANA MimeType registration
   * @see https://www.w3.org/TR/SVG11/ W3C SVG 1.1
   * @see https://en.wikipedia.org/wiki/Scalable_Vector_Graphics Wikipedia
   */
  XML_SVG_IMAGE: "image/svg+xml"
}), _c = Io({
  /**
   * The XHTML namespace.
   *
   * @see http://www.w3.org/1999/xhtml
   */
  HTML: "http://www.w3.org/1999/xhtml",
  /**
   * Checks if `uri` equals `NAMESPACE.HTML`.
   *
   * @param {string} [uri]
   *
   * @see NAMESPACE.HTML
   */
  isHTML: function(t) {
    return t === _c.HTML;
  },
  /**
   * The SVG namespace.
   *
   * @see http://www.w3.org/2000/svg
   */
  SVG: "http://www.w3.org/2000/svg",
  /**
   * The `xml:` namespace.
   *
   * @see http://www.w3.org/XML/1998/namespace
   */
  XML: "http://www.w3.org/XML/1998/namespace",
  /**
   * The `xmlns:` namespace
   *
   * @see https://www.w3.org/2000/xmlns/
   */
  XMLNS: "http://www.w3.org/2000/xmlns/"
});
$t.assign = y2;
$t.find = b2;
$t.freeze = Io;
$t.MIME_TYPE = Ac;
$t.NAMESPACE = _c;
var Sc = $t, gt = Sc.find, Vu = Sc.NAMESPACE;
function v2(t) {
  return t !== "";
}
function x2(t) {
  return t ? t.split(/[\t\n\f\r ]+/).filter(v2) : [];
}
function w2(t, e) {
  return t.hasOwnProperty(e) || (t[e] = !0), t;
}
function Ks(t) {
  if (!t) return [];
  var e = x2(t);
  return Object.keys(e.reduce(w2, {}));
}
function E2(t) {
  return function(e) {
    return t && t.indexOf(e) !== -1;
  };
}
function un(t, e) {
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
function Be(t, e) {
  var r = t.prototype;
  if (!(r instanceof e)) {
    let u = function() {
    };
    u.prototype = e.prototype, u = new u(), un(r, u), t.prototype = r = u;
  }
  r.constructor != t && (typeof t != "function" && console.error("unknown Class:" + t), r.constructor = t);
}
var Re = {}, ot = Re.ELEMENT_NODE = 1, Kr = Re.ATTRIBUTE_NODE = 2, gi = Re.TEXT_NODE = 3, Dc = Re.CDATA_SECTION_NODE = 4, Tc = Re.ENTITY_REFERENCE_NODE = 5, A2 = Re.ENTITY_NODE = 6, kc = Re.PROCESSING_INSTRUCTION_NODE = 7, Cc = Re.COMMENT_NODE = 8, Oc = Re.DOCUMENT_NODE = 9, Pc = Re.DOCUMENT_TYPE_NODE = 10, Tt = Re.DOCUMENT_FRAGMENT_NODE = 11, _2 = Re.NOTATION_NODE = 12, ke = {}, Ee = {};
ke.INDEX_SIZE_ERR = (Ee[1] = "Index size error", 1);
ke.DOMSTRING_SIZE_ERR = (Ee[2] = "DOMString size error", 2);
var Me = ke.HIERARCHY_REQUEST_ERR = (Ee[3] = "Hierarchy request error", 3);
ke.WRONG_DOCUMENT_ERR = (Ee[4] = "Wrong document", 4);
ke.INVALID_CHARACTER_ERR = (Ee[5] = "Invalid character", 5);
ke.NO_DATA_ALLOWED_ERR = (Ee[6] = "No data allowed", 6);
ke.NO_MODIFICATION_ALLOWED_ERR = (Ee[7] = "No modification allowed", 7);
var $c = ke.NOT_FOUND_ERR = (Ee[8] = "Not found", 8);
ke.NOT_SUPPORTED_ERR = (Ee[9] = "Not supported", 9);
var Qs = ke.INUSE_ATTRIBUTE_ERR = (Ee[10] = "Attribute in use", 10);
ke.INVALID_STATE_ERR = (Ee[11] = "Invalid state", 11);
ke.SYNTAX_ERR = (Ee[12] = "Syntax error", 12);
ke.INVALID_MODIFICATION_ERR = (Ee[13] = "Invalid modification", 13);
ke.NAMESPACE_ERR = (Ee[14] = "Invalid namespace", 14);
ke.INVALID_ACCESS_ERR = (Ee[15] = "Invalid access", 15);
function be(t, e) {
  if (e instanceof Error)
    var r = e;
  else
    r = this, Error.call(this, Ee[t]), this.message = Ee[t], Error.captureStackTrace && Error.captureStackTrace(this, be);
  return r.code = t, e && (this.message = this.message + ": " + e), r;
}
be.prototype = Error.prototype;
un(ke, be);
function Dt() {
}
Dt.prototype = {
  /**
   * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
   * @standard level1
   */
  length: 0,
  /**
   * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
   * @standard level1
   * @param index  unsigned long
   *   Index into the collection.
   * @return Node
   * 	The node at the indexth position in the NodeList, or null if that is not a valid index.
   */
  item: function(t) {
    return t >= 0 && t < this.length ? this[t] : null;
  },
  toString: function(t, e) {
    for (var r = [], u = 0; u < this.length; u++)
      Gr(this[u], r, t, e);
    return r.join("");
  },
  /**
   * @private
   * @param {function (Node):boolean} predicate
   * @returns {Node[]}
   */
  filter: function(t) {
    return Array.prototype.filter.call(this, t);
  },
  /**
   * @private
   * @param {Node} item
   * @returns {number}
   */
  indexOf: function(t) {
    return Array.prototype.indexOf.call(this, t);
  }
};
function Qr(t, e) {
  this._node = t, this._refresh = e, Bo(this);
}
function Bo(t) {
  var e = t._node._inc || t._node.ownerDocument._inc;
  if (t._inc !== e) {
    var r = t._refresh(t._node);
    if (zc(t, "length", r.length), !t.$$length || r.length < t.$$length)
      for (var u = r.length; u in t; u++)
        Object.prototype.hasOwnProperty.call(t, u) && delete t[u];
    un(r, t), t._inc = e;
  }
}
Qr.prototype.item = function(t) {
  return Bo(this), this[t] || null;
};
Be(Qr, Dt);
function mi() {
}
function Nc(t, e) {
  for (var r = t.length; r--; )
    if (t[r] === e)
      return r;
}
function el(t, e, r, u) {
  if (u ? e[Nc(e, u)] = r : e[e.length++] = r, t) {
    r.ownerElement = t;
    var n = t.ownerDocument;
    n && (u && Ic(n, t, u), S2(n, t, r));
  }
}
function tl(t, e, r) {
  var u = Nc(e, r);
  if (u >= 0) {
    for (var n = e.length - 1; u < n; )
      e[u] = e[++u];
    if (e.length = n, t) {
      var i = t.ownerDocument;
      i && (Ic(i, t, r), r.ownerElement = null);
    }
  } else
    throw new be($c, new Error(t.tagName + "@" + r));
}
mi.prototype = {
  length: 0,
  item: Dt.prototype.item,
  getNamedItem: function(t) {
    for (var e = this.length; e--; ) {
      var r = this[e];
      if (r.nodeName == t)
        return r;
    }
  },
  setNamedItem: function(t) {
    var e = t.ownerElement;
    if (e && e != this._ownerElement)
      throw new be(Qs);
    var r = this.getNamedItem(t.nodeName);
    return el(this._ownerElement, this, t, r), r;
  },
  /* returns Node */
  setNamedItemNS: function(t) {
    var e = t.ownerElement, r;
    if (e && e != this._ownerElement)
      throw new be(Qs);
    return r = this.getNamedItemNS(t.namespaceURI, t.localName), el(this._ownerElement, this, t, r), r;
  },
  /* returns Node */
  removeNamedItem: function(t) {
    var e = this.getNamedItem(t);
    return tl(this._ownerElement, this, e), e;
  },
  // raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  //for level2
  removeNamedItemNS: function(t, e) {
    var r = this.getNamedItemNS(t, e);
    return tl(this._ownerElement, this, r), r;
  },
  getNamedItemNS: function(t, e) {
    for (var r = this.length; r--; ) {
      var u = this[r];
      if (u.localName == e && u.namespaceURI == t)
        return u;
    }
    return null;
  }
};
function Mc() {
}
Mc.prototype = {
  /**
   * The DOMImplementation.hasFeature() method returns a Boolean flag indicating if a given feature is supported.
   * The different implementations fairly diverged in what kind of features were reported.
   * The latest version of the spec settled to force this method to always return true, where the functionality was accurate and in use.
   *
   * @deprecated It is deprecated and modern browsers return true in all cases.
   *
   * @param {string} feature
   * @param {string} [version]
   * @returns {boolean} always true
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature MDN
   * @see https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-5CED94D7 DOM Level 1 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-hasfeature DOM Living Standard
   */
  hasFeature: function(t, e) {
    return !0;
  },
  /**
   * Creates an XML Document object of the specified type with its document element.
   *
   * __It behaves slightly different from the description in the living standard__:
   * - There is no interface/class `XMLDocument`, it returns a `Document` instance.
   * - `contentType`, `encoding`, `mode`, `origin`, `url` fields are currently not declared.
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string|null} namespaceURI
   * @param {string} qualifiedName
   * @param {DocumentType=null} doctype
   * @returns {Document}
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocument DOM Level 2 Core (initial)
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocument  DOM Level 2 Core
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocument: function(t, e, r) {
    var u = new nn();
    if (u.implementation = this, u.childNodes = new Dt(), u.doctype = r || null, r && u.appendChild(r), e) {
      var n = u.createElementNS(t, e);
      u.appendChild(n);
    }
    return u;
  },
  /**
   * Returns a doctype, with the given `qualifiedName`, `publicId`, and `systemId`.
   *
   * __This behavior is slightly different from the in the specs__:
   * - this implementation is not validating names or qualified names
   *   (when parsing XML strings, the SAX parser takes care of that)
   *
   * @param {string} qualifiedName
   * @param {string} [publicId]
   * @param {string} [systemId]
   * @returns {DocumentType} which can either be used with `DOMImplementation.createDocument` upon document creation
   * 				  or can be put into the document via methods like `Node.insertBefore()` or `Node.replaceChild()`
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType MDN
   * @see https://www.w3.org/TR/DOM-Level-2-Core/core.html#Level-2-Core-DOM-createDocType DOM Level 2 Core
   * @see https://dom.spec.whatwg.org/#dom-domimplementation-createdocumenttype DOM Living Standard
   *
   * @see https://dom.spec.whatwg.org/#validate-and-extract DOM: Validate and extract
   * @see https://www.w3.org/TR/xml/#NT-NameStartChar XML Spec: Names
   * @see https://www.w3.org/TR/xml-names/#ns-qualnames XML Namespaces: Qualified names
   */
  createDocumentType: function(t, e, r) {
    var u = new Zi();
    return u.name = t, u.nodeName = t, u.publicId = e || "", u.systemId = r || "", u;
  }
};
function ue() {
}
ue.prototype = {
  firstChild: null,
  lastChild: null,
  previousSibling: null,
  nextSibling: null,
  attributes: null,
  parentNode: null,
  childNodes: null,
  ownerDocument: null,
  nodeValue: null,
  namespaceURI: null,
  prefix: null,
  localName: null,
  // Modified in DOM Level 2:
  insertBefore: function(t, e) {
    return bi(this, t, e);
  },
  replaceChild: function(t, e) {
    bi(this, t, e, Rc), e && this.removeChild(e);
  },
  removeChild: function(t) {
    return Bc(this, t);
  },
  appendChild: function(t) {
    return this.insertBefore(t, null);
  },
  hasChildNodes: function() {
    return this.firstChild != null;
  },
  cloneNode: function(t) {
    return to(this.ownerDocument || this, this, t);
  },
  // Modified in DOM Level 2:
  normalize: function() {
    for (var t = this.firstChild; t; ) {
      var e = t.nextSibling;
      e && e.nodeType == gi && t.nodeType == gi ? (this.removeChild(e), t.appendData(e.data)) : (t.normalize(), t = e);
    }
  },
  // Introduced in DOM Level 2:
  isSupported: function(t, e) {
    return this.ownerDocument.implementation.hasFeature(t, e);
  },
  // Introduced in DOM Level 2:
  hasAttributes: function() {
    return this.attributes.length > 0;
  },
  /**
   * Look up the prefix associated to the given namespace URI, starting from this node.
   * **The default namespace declarations are ignored by this method.**
   * See Namespace Prefix Lookup for details on the algorithm used by this method.
   *
   * _Note: The implementation seems to be incomplete when compared to the algorithm described in the specs._
   *
   * @param {string | null} namespaceURI
   * @returns {string | null}
   * @see https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-lookupNamespacePrefix
   * @see https://www.w3.org/TR/DOM-Level-3-Core/namespaces-algorithms.html#lookupNamespacePrefixAlgo
   * @see https://dom.spec.whatwg.org/#dom-node-lookupprefix
   * @see https://github.com/xmldom/xmldom/issues/322
   */
  lookupPrefix: function(t) {
    for (var e = this; e; ) {
      var r = e._nsMap;
      if (r) {
        for (var u in r)
          if (Object.prototype.hasOwnProperty.call(r, u) && r[u] === t)
            return u;
      }
      e = e.nodeType == Kr ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  lookupNamespaceURI: function(t) {
    for (var e = this; e; ) {
      var r = e._nsMap;
      if (r && Object.prototype.hasOwnProperty.call(r, t))
        return r[t];
      e = e.nodeType == Kr ? e.ownerDocument : e.parentNode;
    }
    return null;
  },
  // Introduced in DOM Level 3:
  isDefaultNamespace: function(t) {
    var e = this.lookupPrefix(t);
    return e == null;
  }
};
function Lc(t) {
  return t == "<" && "&lt;" || t == ">" && "&gt;" || t == "&" && "&amp;" || t == '"' && "&quot;" || "&#" + t.charCodeAt() + ";";
}
un(Re, ue);
un(Re, ue.prototype);
function zu(t, e) {
  if (e(t))
    return !0;
  if (t = t.firstChild)
    do
      if (zu(t, e))
        return !0;
    while (t = t.nextSibling);
}
function nn() {
  this.ownerDocument = this;
}
function S2(t, e, r) {
  t && t._inc++;
  var u = r.namespaceURI;
  u === Vu.XMLNS && (e._nsMap[r.prefix ? r.localName : ""] = r.value);
}
function Ic(t, e, r, u) {
  t && t._inc++;
  var n = r.namespaceURI;
  n === Vu.XMLNS && delete e._nsMap[r.prefix ? r.localName : ""];
}
function Ro(t, e, r) {
  if (t && t._inc) {
    t._inc++;
    var u = e.childNodes;
    if (r)
      u[u.length++] = r;
    else {
      for (var n = e.firstChild, i = 0; n; )
        u[i++] = n, n = n.nextSibling;
      u.length = i, delete u[u.length];
    }
  }
}
function Bc(t, e) {
  var r = e.previousSibling, u = e.nextSibling;
  return r ? r.nextSibling = u : t.firstChild = u, u ? u.previousSibling = r : t.lastChild = r, e.parentNode = null, e.previousSibling = null, e.nextSibling = null, Ro(t.ownerDocument, t), e;
}
function D2(t) {
  return t && (t.nodeType === ue.DOCUMENT_NODE || t.nodeType === ue.DOCUMENT_FRAGMENT_NODE || t.nodeType === ue.ELEMENT_NODE);
}
function T2(t) {
  return t && (mt(t) || Fo(t) || kt(t) || t.nodeType === ue.DOCUMENT_FRAGMENT_NODE || t.nodeType === ue.COMMENT_NODE || t.nodeType === ue.PROCESSING_INSTRUCTION_NODE);
}
function kt(t) {
  return t && t.nodeType === ue.DOCUMENT_TYPE_NODE;
}
function mt(t) {
  return t && t.nodeType === ue.ELEMENT_NODE;
}
function Fo(t) {
  return t && t.nodeType === ue.TEXT_NODE;
}
function rl(t, e) {
  var r = t.childNodes || [];
  if (gt(r, mt) || kt(e))
    return !1;
  var u = gt(r, kt);
  return !(e && u && r.indexOf(u) > r.indexOf(e));
}
function ul(t, e) {
  var r = t.childNodes || [];
  function u(i) {
    return mt(i) && i !== e;
  }
  if (gt(r, u))
    return !1;
  var n = gt(r, kt);
  return !(e && n && r.indexOf(n) > r.indexOf(e));
}
function k2(t, e, r) {
  if (!D2(t))
    throw new be(Me, "Unexpected parent node type " + t.nodeType);
  if (r && r.parentNode !== t)
    throw new be($c, "child not in parent");
  if (
    // 4. If `node` is not a DocumentFragment, DocumentType, Element, or CharacterData node, then throw a "HierarchyRequestError" DOMException.
    !T2(e) || // 5. If either `node` is a Text node and `parent` is a document,
    // the sax parser currently adds top level text nodes, this will be fixed in 0.9.0
    // || (node.nodeType === Node.TEXT_NODE && parent.nodeType === Node.DOCUMENT_NODE)
    // or `node` is a doctype and `parent` is not a document, then throw a "HierarchyRequestError" DOMException.
    kt(e) && t.nodeType !== ue.DOCUMENT_NODE
  )
    throw new be(
      Me,
      "Unexpected node type " + e.nodeType + " for parent node type " + t.nodeType
    );
}
function C2(t, e, r) {
  var u = t.childNodes || [], n = e.childNodes || [];
  if (e.nodeType === ue.DOCUMENT_FRAGMENT_NODE) {
    var i = n.filter(mt);
    if (i.length > 1 || gt(n, Fo))
      throw new be(Me, "More than one element or text in fragment");
    if (i.length === 1 && !rl(t, r))
      throw new be(Me, "Element in fragment can not be inserted before doctype");
  }
  if (mt(e) && !rl(t, r))
    throw new be(Me, "Only one element can be added and only after doctype");
  if (kt(e)) {
    if (gt(u, kt))
      throw new be(Me, "Only one doctype is allowed");
    var a = gt(u, mt);
    if (r && u.indexOf(a) < u.indexOf(r))
      throw new be(Me, "Doctype can only be inserted before an element");
    if (!r && a)
      throw new be(Me, "Doctype can not be appended since element is present");
  }
}
function Rc(t, e, r) {
  var u = t.childNodes || [], n = e.childNodes || [];
  if (e.nodeType === ue.DOCUMENT_FRAGMENT_NODE) {
    var i = n.filter(mt);
    if (i.length > 1 || gt(n, Fo))
      throw new be(Me, "More than one element or text in fragment");
    if (i.length === 1 && !ul(t, r))
      throw new be(Me, "Element in fragment can not be inserted before doctype");
  }
  if (mt(e) && !ul(t, r))
    throw new be(Me, "Only one element can be added and only after doctype");
  if (kt(e)) {
    if (gt(u, function(o) {
      return kt(o) && o !== r;
    }))
      throw new be(Me, "Only one doctype is allowed");
    var a = gt(u, mt);
    if (r && u.indexOf(a) < u.indexOf(r))
      throw new be(Me, "Doctype can only be inserted before an element");
  }
}
function bi(t, e, r, u) {
  k2(t, e, r), t.nodeType === ue.DOCUMENT_NODE && (u || C2)(t, e, r);
  var n = e.parentNode;
  if (n && n.removeChild(e), e.nodeType === Tt) {
    var i = e.firstChild;
    if (i == null)
      return e;
    var a = e.lastChild;
  } else
    i = a = e;
  var c = r ? r.previousSibling : t.lastChild;
  i.previousSibling = c, a.nextSibling = r, c ? c.nextSibling = i : t.firstChild = i, r == null ? t.lastChild = a : r.previousSibling = a;
  do
    i.parentNode = t;
  while (i !== a && (i = i.nextSibling));
  return Ro(t.ownerDocument || t, t), e.nodeType == Tt && (e.firstChild = e.lastChild = null), e;
}
function O2(t, e) {
  return e.parentNode && e.parentNode.removeChild(e), e.parentNode = t, e.previousSibling = t.lastChild, e.nextSibling = null, e.previousSibling ? e.previousSibling.nextSibling = e : t.firstChild = e, t.lastChild = e, Ro(t.ownerDocument, t, e), e;
}
nn.prototype = {
  //implementation : null,
  nodeName: "#document",
  nodeType: Oc,
  /**
   * The DocumentType node of the document.
   *
   * @readonly
   * @type DocumentType
   */
  doctype: null,
  documentElement: null,
  _inc: 1,
  insertBefore: function(t, e) {
    if (t.nodeType == Tt) {
      for (var r = t.firstChild; r; ) {
        var u = r.nextSibling;
        this.insertBefore(r, e), r = u;
      }
      return t;
    }
    return bi(this, t, e), t.ownerDocument = this, this.documentElement === null && t.nodeType === ot && (this.documentElement = t), t;
  },
  removeChild: function(t) {
    return this.documentElement == t && (this.documentElement = null), Bc(this, t);
  },
  replaceChild: function(t, e) {
    bi(this, t, e, Rc), t.ownerDocument = this, e && this.removeChild(e), mt(t) && (this.documentElement = t);
  },
  // Introduced in DOM Level 2:
  importNode: function(t, e) {
    return Vc(this, t, e);
  },
  // Introduced in DOM Level 2:
  getElementById: function(t) {
    var e = null;
    return zu(this.documentElement, function(r) {
      if (r.nodeType == ot && r.getAttribute("id") == t)
        return e = r, !0;
    }), e;
  },
  /**
   * The `getElementsByClassName` method of `Document` interface returns an array-like object
   * of all child elements which have **all** of the given class name(s).
   *
   * Returns an empty list if `classeNames` is an empty string or only contains HTML white space characters.
   *
   *
   * Warning: This is a live LiveNodeList.
   * Changes in the DOM will reflect in the array as the changes occur.
   * If an element selected by this array no longer qualifies for the selector,
   * it will automatically be removed. Be aware of this for iteration purposes.
   *
   * @param {string} classNames is a string representing the class name(s) to match; multiple class names are separated by (ASCII-)whitespace
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName
   * @see https://dom.spec.whatwg.org/#concept-getelementsbyclassname
   */
  getElementsByClassName: function(t) {
    var e = Ks(t);
    return new Qr(this, function(r) {
      var u = [];
      return e.length > 0 && zu(r.documentElement, function(n) {
        if (n !== r && n.nodeType === ot) {
          var i = n.getAttribute("class");
          if (i) {
            var a = t === i;
            if (!a) {
              var c = Ks(i);
              a = e.every(E2(c));
            }
            a && u.push(n);
          }
        }
      }), u;
    });
  },
  //document factory method:
  createElement: function(t) {
    var e = new br();
    e.ownerDocument = this, e.nodeName = t, e.tagName = t, e.localName = t, e.childNodes = new Dt();
    var r = e.attributes = new mi();
    return r._ownerElement = e, e;
  },
  createDocumentFragment: function() {
    var t = new Ki();
    return t.ownerDocument = this, t.childNodes = new Dt(), t;
  },
  createTextNode: function(t) {
    var e = new jo();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createComment: function(t) {
    var e = new qo();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createCDATASection: function(t) {
    var e = new Uo();
    return e.ownerDocument = this, e.appendData(t), e;
  },
  createProcessingInstruction: function(t, e) {
    var r = new zo();
    return r.ownerDocument = this, r.tagName = r.nodeName = r.target = t, r.nodeValue = r.data = e, r;
  },
  createAttribute: function(t) {
    var e = new yi();
    return e.ownerDocument = this, e.name = t, e.nodeName = t, e.localName = t, e.specified = !0, e;
  },
  createEntityReference: function(t) {
    var e = new Vo();
    return e.ownerDocument = this, e.nodeName = t, e;
  },
  // Introduced in DOM Level 2:
  createElementNS: function(t, e) {
    var r = new br(), u = e.split(":"), n = r.attributes = new mi();
    return r.childNodes = new Dt(), r.ownerDocument = this, r.nodeName = e, r.tagName = e, r.namespaceURI = t, u.length == 2 ? (r.prefix = u[0], r.localName = u[1]) : r.localName = e, n._ownerElement = r, r;
  },
  // Introduced in DOM Level 2:
  createAttributeNS: function(t, e) {
    var r = new yi(), u = e.split(":");
    return r.ownerDocument = this, r.nodeName = e, r.name = e, r.namespaceURI = t, r.specified = !0, u.length == 2 ? (r.prefix = u[0], r.localName = u[1]) : r.localName = e, r;
  }
};
Be(nn, ue);
function br() {
  this._nsMap = {};
}
br.prototype = {
  nodeType: ot,
  hasAttribute: function(t) {
    return this.getAttributeNode(t) != null;
  },
  getAttribute: function(t) {
    var e = this.getAttributeNode(t);
    return e && e.value || "";
  },
  getAttributeNode: function(t) {
    return this.attributes.getNamedItem(t);
  },
  setAttribute: function(t, e) {
    var r = this.ownerDocument.createAttribute(t);
    r.value = r.nodeValue = "" + e, this.setAttributeNode(r);
  },
  removeAttribute: function(t) {
    var e = this.getAttributeNode(t);
    e && this.removeAttributeNode(e);
  },
  //four real opeartion method
  appendChild: function(t) {
    return t.nodeType === Tt ? this.insertBefore(t, null) : O2(this, t);
  },
  setAttributeNode: function(t) {
    return this.attributes.setNamedItem(t);
  },
  setAttributeNodeNS: function(t) {
    return this.attributes.setNamedItemNS(t);
  },
  removeAttributeNode: function(t) {
    return this.attributes.removeNamedItem(t.nodeName);
  },
  //get real attribute name,and remove it by removeAttributeNode
  removeAttributeNS: function(t, e) {
    var r = this.getAttributeNodeNS(t, e);
    r && this.removeAttributeNode(r);
  },
  hasAttributeNS: function(t, e) {
    return this.getAttributeNodeNS(t, e) != null;
  },
  getAttributeNS: function(t, e) {
    var r = this.getAttributeNodeNS(t, e);
    return r && r.value || "";
  },
  setAttributeNS: function(t, e, r) {
    var u = this.ownerDocument.createAttributeNS(t, e);
    u.value = u.nodeValue = "" + r, this.setAttributeNode(u);
  },
  getAttributeNodeNS: function(t, e) {
    return this.attributes.getNamedItemNS(t, e);
  },
  getElementsByTagName: function(t) {
    return new Qr(this, function(e) {
      var r = [];
      return zu(e, function(u) {
        u !== e && u.nodeType == ot && (t === "*" || u.tagName == t) && r.push(u);
      }), r;
    });
  },
  getElementsByTagNameNS: function(t, e) {
    return new Qr(this, function(r) {
      var u = [];
      return zu(r, function(n) {
        n !== r && n.nodeType === ot && (t === "*" || n.namespaceURI === t) && (e === "*" || n.localName == e) && u.push(n);
      }), u;
    });
  }
};
nn.prototype.getElementsByTagName = br.prototype.getElementsByTagName;
nn.prototype.getElementsByTagNameNS = br.prototype.getElementsByTagNameNS;
Be(br, ue);
function yi() {
}
yi.prototype.nodeType = Kr;
Be(yi, ue);
function an() {
}
an.prototype = {
  data: "",
  substringData: function(t, e) {
    return this.data.substring(t, t + e);
  },
  appendData: function(t) {
    t = this.data + t, this.nodeValue = this.data = t, this.length = t.length;
  },
  insertData: function(t, e) {
    this.replaceData(t, 0, e);
  },
  appendChild: function(t) {
    throw new Error(Ee[Me]);
  },
  deleteData: function(t, e) {
    this.replaceData(t, e, "");
  },
  replaceData: function(t, e, r) {
    var u = this.data.substring(0, t), n = this.data.substring(t + e);
    r = u + r + n, this.nodeValue = this.data = r, this.length = r.length;
  }
};
Be(an, ue);
function jo() {
}
jo.prototype = {
  nodeName: "#text",
  nodeType: gi,
  splitText: function(t) {
    var e = this.data, r = e.substring(t);
    e = e.substring(0, t), this.data = this.nodeValue = e, this.length = e.length;
    var u = this.ownerDocument.createTextNode(r);
    return this.parentNode && this.parentNode.insertBefore(u, this.nextSibling), u;
  }
};
Be(jo, an);
function qo() {
}
qo.prototype = {
  nodeName: "#comment",
  nodeType: Cc
};
Be(qo, an);
function Uo() {
}
Uo.prototype = {
  nodeName: "#cdata-section",
  nodeType: Dc
};
Be(Uo, an);
function Zi() {
}
Zi.prototype.nodeType = Pc;
Be(Zi, ue);
function Fc() {
}
Fc.prototype.nodeType = _2;
Be(Fc, ue);
function jc() {
}
jc.prototype.nodeType = A2;
Be(jc, ue);
function Vo() {
}
Vo.prototype.nodeType = Tc;
Be(Vo, ue);
function Ki() {
}
Ki.prototype.nodeName = "#document-fragment";
Ki.prototype.nodeType = Tt;
Be(Ki, ue);
function zo() {
}
zo.prototype.nodeType = kc;
Be(zo, ue);
function qc() {
}
qc.prototype.serializeToString = function(t, e, r) {
  return Uc.call(t, e, r);
};
ue.prototype.toString = Uc;
function Uc(t, e) {
  var r = [], u = this.nodeType == 9 && this.documentElement || this, n = u.prefix, i = u.namespaceURI;
  if (i && n == null) {
    var n = u.lookupPrefix(i);
    if (n == null)
      var a = [
        { namespace: i, prefix: null }
        //{namespace:uri,prefix:''}
      ];
  }
  return Gr(this, r, t, e, a), r.join("");
}
function nl(t, e, r) {
  var u = t.prefix || "", n = t.namespaceURI;
  if (!n || u === "xml" && n === Vu.XML || n === Vu.XMLNS)
    return !1;
  for (var i = r.length; i--; ) {
    var a = r[i];
    if (a.prefix === u)
      return a.namespace !== n;
  }
  return !0;
}
function Va(t, e, r) {
  t.push(" ", e, '="', r.replace(/[<>&"\t\n\r]/g, Lc), '"');
}
function Gr(t, e, r, u, n) {
  if (n || (n = []), u)
    if (t = u(t), t) {
      if (typeof t == "string") {
        e.push(t);
        return;
      }
    } else
      return;
  switch (t.nodeType) {
    case ot:
      var i = t.attributes, a = i.length, g = t.firstChild, c = t.tagName;
      r = Vu.isHTML(t.namespaceURI) || r;
      var o = c;
      if (!r && !t.prefix && t.namespaceURI) {
        for (var f, s = 0; s < i.length; s++)
          if (i.item(s).name === "xmlns") {
            f = i.item(s).value;
            break;
          }
        if (!f)
          for (var p = n.length - 1; p >= 0; p--) {
            var l = n[p];
            if (l.prefix === "" && l.namespace === t.namespaceURI) {
              f = l.namespace;
              break;
            }
          }
        if (f !== t.namespaceURI)
          for (var p = n.length - 1; p >= 0; p--) {
            var l = n[p];
            if (l.namespace === t.namespaceURI) {
              l.prefix && (o = l.prefix + ":" + c);
              break;
            }
          }
      }
      e.push("<", o);
      for (var h = 0; h < a; h++) {
        var b = i.item(h);
        b.prefix == "xmlns" ? n.push({ prefix: b.localName, namespace: b.value }) : b.nodeName == "xmlns" && n.push({ prefix: "", namespace: b.value });
      }
      for (var h = 0; h < a; h++) {
        var b = i.item(h);
        if (nl(b, r, n)) {
          var v = b.prefix || "", y = b.namespaceURI;
          Va(e, v ? "xmlns:" + v : "xmlns", y), n.push({ prefix: v, namespace: y });
        }
        Gr(b, e, r, u, n);
      }
      if (c === o && nl(t, r, n)) {
        var v = t.prefix || "", y = t.namespaceURI;
        Va(e, v ? "xmlns:" + v : "xmlns", y), n.push({ prefix: v, namespace: y });
      }
      if (g || r && !/^(?:meta|link|img|br|hr|input)$/i.test(c)) {
        if (e.push(">"), r && /^script$/i.test(c))
          for (; g; )
            g.data ? e.push(g.data) : Gr(g, e, r, u, n.slice()), g = g.nextSibling;
        else
          for (; g; )
            Gr(g, e, r, u, n.slice()), g = g.nextSibling;
        e.push("</", o, ">");
      } else
        e.push("/>");
      return;
    case Oc:
    case Tt:
      for (var g = t.firstChild; g; )
        Gr(g, e, r, u, n.slice()), g = g.nextSibling;
      return;
    case Kr:
      return Va(e, t.name, t.value);
    case gi:
      return e.push(
        t.data.replace(/[<&>]/g, Lc)
      );
    case Dc:
      return e.push("<![CDATA[", t.data, "]]>");
    case Cc:
      return e.push("<!--", t.data, "-->");
    case Pc:
      var D = t.publicId, E = t.systemId;
      if (e.push("<!DOCTYPE ", t.name), D)
        e.push(" PUBLIC ", D), E && E != "." && e.push(" ", E), e.push(">");
      else if (E && E != ".")
        e.push(" SYSTEM ", E, ">");
      else {
        var I = t.internalSubset;
        I && e.push(" [", I, "]"), e.push(">");
      }
      return;
    case kc:
      return e.push("<?", t.target, " ", t.data, "?>");
    case Tc:
      return e.push("&", t.nodeName, ";");
    default:
      e.push("??", t.nodeName);
  }
}
function Vc(t, e, r) {
  var u;
  switch (e.nodeType) {
    case ot:
      u = e.cloneNode(!1), u.ownerDocument = t;
    case Tt:
      break;
    case Kr:
      r = !0;
      break;
  }
  if (u || (u = e.cloneNode(!1)), u.ownerDocument = t, u.parentNode = null, r)
    for (var n = e.firstChild; n; )
      u.appendChild(Vc(t, n, r)), n = n.nextSibling;
  return u;
}
function to(t, e, r) {
  var u = new e.constructor();
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      var i = e[n];
      typeof i != "object" && i != u[n] && (u[n] = i);
    }
  switch (e.childNodes && (u.childNodes = new Dt()), u.ownerDocument = t, u.nodeType) {
    case ot:
      var a = e.attributes, c = u.attributes = new mi(), o = a.length;
      c._ownerElement = u;
      for (var f = 0; f < o; f++)
        u.setAttributeNode(to(t, a.item(f), !0));
      break;
    case Kr:
      r = !0;
  }
  if (r)
    for (var s = e.firstChild; s; )
      u.appendChild(to(t, s, r)), s = s.nextSibling;
  return u;
}
function zc(t, e, r) {
  t[e] = r;
}
try {
  if (Object.defineProperty) {
    let t = function(e) {
      switch (e.nodeType) {
        case ot:
        case Tt:
          var r = [];
          for (e = e.firstChild; e; )
            e.nodeType !== 7 && e.nodeType !== 8 && r.push(t(e)), e = e.nextSibling;
          return r.join("");
        default:
          return e.nodeValue;
      }
    };
    Object.defineProperty(Qr.prototype, "length", {
      get: function() {
        return Bo(this), this.$$length;
      }
    }), Object.defineProperty(ue.prototype, "textContent", {
      get: function() {
        return t(this);
      },
      set: function(e) {
        switch (this.nodeType) {
          case ot:
          case Tt:
            for (; this.firstChild; )
              this.removeChild(this.firstChild);
            (e || String(e)) && this.appendChild(this.ownerDocument.createTextNode(e));
            break;
          default:
            this.data = e, this.value = e, this.nodeValue = e;
        }
      }
    }), zc = function(e, r, u) {
      e["$$" + r] = u;
    };
  }
} catch {
}
Pt.DocumentType = Zi;
Pt.DOMException = be;
Pt.DOMImplementation = Mc;
Pt.Element = br;
Pt.Node = ue;
Pt.NodeList = Dt;
Pt.XMLSerializer = qc;
var Qi = {}, Hc = {};
(function(t) {
  var e = $t.freeze;
  t.XML_ENTITIES = e({
    amp: "&",
    apos: "'",
    gt: ">",
    lt: "<",
    quot: '"'
  }), t.HTML_ENTITIES = e({
    Aacute: "Á",
    aacute: "á",
    Abreve: "Ă",
    abreve: "ă",
    ac: "∾",
    acd: "∿",
    acE: "∾̳",
    Acirc: "Â",
    acirc: "â",
    acute: "´",
    Acy: "А",
    acy: "а",
    AElig: "Æ",
    aelig: "æ",
    af: "⁡",
    Afr: "𝔄",
    afr: "𝔞",
    Agrave: "À",
    agrave: "à",
    alefsym: "ℵ",
    aleph: "ℵ",
    Alpha: "Α",
    alpha: "α",
    Amacr: "Ā",
    amacr: "ā",
    amalg: "⨿",
    AMP: "&",
    amp: "&",
    And: "⩓",
    and: "∧",
    andand: "⩕",
    andd: "⩜",
    andslope: "⩘",
    andv: "⩚",
    ang: "∠",
    ange: "⦤",
    angle: "∠",
    angmsd: "∡",
    angmsdaa: "⦨",
    angmsdab: "⦩",
    angmsdac: "⦪",
    angmsdad: "⦫",
    angmsdae: "⦬",
    angmsdaf: "⦭",
    angmsdag: "⦮",
    angmsdah: "⦯",
    angrt: "∟",
    angrtvb: "⊾",
    angrtvbd: "⦝",
    angsph: "∢",
    angst: "Å",
    angzarr: "⍼",
    Aogon: "Ą",
    aogon: "ą",
    Aopf: "𝔸",
    aopf: "𝕒",
    ap: "≈",
    apacir: "⩯",
    apE: "⩰",
    ape: "≊",
    apid: "≋",
    apos: "'",
    ApplyFunction: "⁡",
    approx: "≈",
    approxeq: "≊",
    Aring: "Å",
    aring: "å",
    Ascr: "𝒜",
    ascr: "𝒶",
    Assign: "≔",
    ast: "*",
    asymp: "≈",
    asympeq: "≍",
    Atilde: "Ã",
    atilde: "ã",
    Auml: "Ä",
    auml: "ä",
    awconint: "∳",
    awint: "⨑",
    backcong: "≌",
    backepsilon: "϶",
    backprime: "‵",
    backsim: "∽",
    backsimeq: "⋍",
    Backslash: "∖",
    Barv: "⫧",
    barvee: "⊽",
    Barwed: "⌆",
    barwed: "⌅",
    barwedge: "⌅",
    bbrk: "⎵",
    bbrktbrk: "⎶",
    bcong: "≌",
    Bcy: "Б",
    bcy: "б",
    bdquo: "„",
    becaus: "∵",
    Because: "∵",
    because: "∵",
    bemptyv: "⦰",
    bepsi: "϶",
    bernou: "ℬ",
    Bernoullis: "ℬ",
    Beta: "Β",
    beta: "β",
    beth: "ℶ",
    between: "≬",
    Bfr: "𝔅",
    bfr: "𝔟",
    bigcap: "⋂",
    bigcirc: "◯",
    bigcup: "⋃",
    bigodot: "⨀",
    bigoplus: "⨁",
    bigotimes: "⨂",
    bigsqcup: "⨆",
    bigstar: "★",
    bigtriangledown: "▽",
    bigtriangleup: "△",
    biguplus: "⨄",
    bigvee: "⋁",
    bigwedge: "⋀",
    bkarow: "⤍",
    blacklozenge: "⧫",
    blacksquare: "▪",
    blacktriangle: "▴",
    blacktriangledown: "▾",
    blacktriangleleft: "◂",
    blacktriangleright: "▸",
    blank: "␣",
    blk12: "▒",
    blk14: "░",
    blk34: "▓",
    block: "█",
    bne: "=⃥",
    bnequiv: "≡⃥",
    bNot: "⫭",
    bnot: "⌐",
    Bopf: "𝔹",
    bopf: "𝕓",
    bot: "⊥",
    bottom: "⊥",
    bowtie: "⋈",
    boxbox: "⧉",
    boxDL: "╗",
    boxDl: "╖",
    boxdL: "╕",
    boxdl: "┐",
    boxDR: "╔",
    boxDr: "╓",
    boxdR: "╒",
    boxdr: "┌",
    boxH: "═",
    boxh: "─",
    boxHD: "╦",
    boxHd: "╤",
    boxhD: "╥",
    boxhd: "┬",
    boxHU: "╩",
    boxHu: "╧",
    boxhU: "╨",
    boxhu: "┴",
    boxminus: "⊟",
    boxplus: "⊞",
    boxtimes: "⊠",
    boxUL: "╝",
    boxUl: "╜",
    boxuL: "╛",
    boxul: "┘",
    boxUR: "╚",
    boxUr: "╙",
    boxuR: "╘",
    boxur: "└",
    boxV: "║",
    boxv: "│",
    boxVH: "╬",
    boxVh: "╫",
    boxvH: "╪",
    boxvh: "┼",
    boxVL: "╣",
    boxVl: "╢",
    boxvL: "╡",
    boxvl: "┤",
    boxVR: "╠",
    boxVr: "╟",
    boxvR: "╞",
    boxvr: "├",
    bprime: "‵",
    Breve: "˘",
    breve: "˘",
    brvbar: "¦",
    Bscr: "ℬ",
    bscr: "𝒷",
    bsemi: "⁏",
    bsim: "∽",
    bsime: "⋍",
    bsol: "\\",
    bsolb: "⧅",
    bsolhsub: "⟈",
    bull: "•",
    bullet: "•",
    bump: "≎",
    bumpE: "⪮",
    bumpe: "≏",
    Bumpeq: "≎",
    bumpeq: "≏",
    Cacute: "Ć",
    cacute: "ć",
    Cap: "⋒",
    cap: "∩",
    capand: "⩄",
    capbrcup: "⩉",
    capcap: "⩋",
    capcup: "⩇",
    capdot: "⩀",
    CapitalDifferentialD: "ⅅ",
    caps: "∩︀",
    caret: "⁁",
    caron: "ˇ",
    Cayleys: "ℭ",
    ccaps: "⩍",
    Ccaron: "Č",
    ccaron: "č",
    Ccedil: "Ç",
    ccedil: "ç",
    Ccirc: "Ĉ",
    ccirc: "ĉ",
    Cconint: "∰",
    ccups: "⩌",
    ccupssm: "⩐",
    Cdot: "Ċ",
    cdot: "ċ",
    cedil: "¸",
    Cedilla: "¸",
    cemptyv: "⦲",
    cent: "¢",
    CenterDot: "·",
    centerdot: "·",
    Cfr: "ℭ",
    cfr: "𝔠",
    CHcy: "Ч",
    chcy: "ч",
    check: "✓",
    checkmark: "✓",
    Chi: "Χ",
    chi: "χ",
    cir: "○",
    circ: "ˆ",
    circeq: "≗",
    circlearrowleft: "↺",
    circlearrowright: "↻",
    circledast: "⊛",
    circledcirc: "⊚",
    circleddash: "⊝",
    CircleDot: "⊙",
    circledR: "®",
    circledS: "Ⓢ",
    CircleMinus: "⊖",
    CirclePlus: "⊕",
    CircleTimes: "⊗",
    cirE: "⧃",
    cire: "≗",
    cirfnint: "⨐",
    cirmid: "⫯",
    cirscir: "⧂",
    ClockwiseContourIntegral: "∲",
    CloseCurlyDoubleQuote: "”",
    CloseCurlyQuote: "’",
    clubs: "♣",
    clubsuit: "♣",
    Colon: "∷",
    colon: ":",
    Colone: "⩴",
    colone: "≔",
    coloneq: "≔",
    comma: ",",
    commat: "@",
    comp: "∁",
    compfn: "∘",
    complement: "∁",
    complexes: "ℂ",
    cong: "≅",
    congdot: "⩭",
    Congruent: "≡",
    Conint: "∯",
    conint: "∮",
    ContourIntegral: "∮",
    Copf: "ℂ",
    copf: "𝕔",
    coprod: "∐",
    Coproduct: "∐",
    COPY: "©",
    copy: "©",
    copysr: "℗",
    CounterClockwiseContourIntegral: "∳",
    crarr: "↵",
    Cross: "⨯",
    cross: "✗",
    Cscr: "𝒞",
    cscr: "𝒸",
    csub: "⫏",
    csube: "⫑",
    csup: "⫐",
    csupe: "⫒",
    ctdot: "⋯",
    cudarrl: "⤸",
    cudarrr: "⤵",
    cuepr: "⋞",
    cuesc: "⋟",
    cularr: "↶",
    cularrp: "⤽",
    Cup: "⋓",
    cup: "∪",
    cupbrcap: "⩈",
    CupCap: "≍",
    cupcap: "⩆",
    cupcup: "⩊",
    cupdot: "⊍",
    cupor: "⩅",
    cups: "∪︀",
    curarr: "↷",
    curarrm: "⤼",
    curlyeqprec: "⋞",
    curlyeqsucc: "⋟",
    curlyvee: "⋎",
    curlywedge: "⋏",
    curren: "¤",
    curvearrowleft: "↶",
    curvearrowright: "↷",
    cuvee: "⋎",
    cuwed: "⋏",
    cwconint: "∲",
    cwint: "∱",
    cylcty: "⌭",
    Dagger: "‡",
    dagger: "†",
    daleth: "ℸ",
    Darr: "↡",
    dArr: "⇓",
    darr: "↓",
    dash: "‐",
    Dashv: "⫤",
    dashv: "⊣",
    dbkarow: "⤏",
    dblac: "˝",
    Dcaron: "Ď",
    dcaron: "ď",
    Dcy: "Д",
    dcy: "д",
    DD: "ⅅ",
    dd: "ⅆ",
    ddagger: "‡",
    ddarr: "⇊",
    DDotrahd: "⤑",
    ddotseq: "⩷",
    deg: "°",
    Del: "∇",
    Delta: "Δ",
    delta: "δ",
    demptyv: "⦱",
    dfisht: "⥿",
    Dfr: "𝔇",
    dfr: "𝔡",
    dHar: "⥥",
    dharl: "⇃",
    dharr: "⇂",
    DiacriticalAcute: "´",
    DiacriticalDot: "˙",
    DiacriticalDoubleAcute: "˝",
    DiacriticalGrave: "`",
    DiacriticalTilde: "˜",
    diam: "⋄",
    Diamond: "⋄",
    diamond: "⋄",
    diamondsuit: "♦",
    diams: "♦",
    die: "¨",
    DifferentialD: "ⅆ",
    digamma: "ϝ",
    disin: "⋲",
    div: "÷",
    divide: "÷",
    divideontimes: "⋇",
    divonx: "⋇",
    DJcy: "Ђ",
    djcy: "ђ",
    dlcorn: "⌞",
    dlcrop: "⌍",
    dollar: "$",
    Dopf: "𝔻",
    dopf: "𝕕",
    Dot: "¨",
    dot: "˙",
    DotDot: "⃜",
    doteq: "≐",
    doteqdot: "≑",
    DotEqual: "≐",
    dotminus: "∸",
    dotplus: "∔",
    dotsquare: "⊡",
    doublebarwedge: "⌆",
    DoubleContourIntegral: "∯",
    DoubleDot: "¨",
    DoubleDownArrow: "⇓",
    DoubleLeftArrow: "⇐",
    DoubleLeftRightArrow: "⇔",
    DoubleLeftTee: "⫤",
    DoubleLongLeftArrow: "⟸",
    DoubleLongLeftRightArrow: "⟺",
    DoubleLongRightArrow: "⟹",
    DoubleRightArrow: "⇒",
    DoubleRightTee: "⊨",
    DoubleUpArrow: "⇑",
    DoubleUpDownArrow: "⇕",
    DoubleVerticalBar: "∥",
    DownArrow: "↓",
    Downarrow: "⇓",
    downarrow: "↓",
    DownArrowBar: "⤓",
    DownArrowUpArrow: "⇵",
    DownBreve: "̑",
    downdownarrows: "⇊",
    downharpoonleft: "⇃",
    downharpoonright: "⇂",
    DownLeftRightVector: "⥐",
    DownLeftTeeVector: "⥞",
    DownLeftVector: "↽",
    DownLeftVectorBar: "⥖",
    DownRightTeeVector: "⥟",
    DownRightVector: "⇁",
    DownRightVectorBar: "⥗",
    DownTee: "⊤",
    DownTeeArrow: "↧",
    drbkarow: "⤐",
    drcorn: "⌟",
    drcrop: "⌌",
    Dscr: "𝒟",
    dscr: "𝒹",
    DScy: "Ѕ",
    dscy: "ѕ",
    dsol: "⧶",
    Dstrok: "Đ",
    dstrok: "đ",
    dtdot: "⋱",
    dtri: "▿",
    dtrif: "▾",
    duarr: "⇵",
    duhar: "⥯",
    dwangle: "⦦",
    DZcy: "Џ",
    dzcy: "џ",
    dzigrarr: "⟿",
    Eacute: "É",
    eacute: "é",
    easter: "⩮",
    Ecaron: "Ě",
    ecaron: "ě",
    ecir: "≖",
    Ecirc: "Ê",
    ecirc: "ê",
    ecolon: "≕",
    Ecy: "Э",
    ecy: "э",
    eDDot: "⩷",
    Edot: "Ė",
    eDot: "≑",
    edot: "ė",
    ee: "ⅇ",
    efDot: "≒",
    Efr: "𝔈",
    efr: "𝔢",
    eg: "⪚",
    Egrave: "È",
    egrave: "è",
    egs: "⪖",
    egsdot: "⪘",
    el: "⪙",
    Element: "∈",
    elinters: "⏧",
    ell: "ℓ",
    els: "⪕",
    elsdot: "⪗",
    Emacr: "Ē",
    emacr: "ē",
    empty: "∅",
    emptyset: "∅",
    EmptySmallSquare: "◻",
    emptyv: "∅",
    EmptyVerySmallSquare: "▫",
    emsp: " ",
    emsp13: " ",
    emsp14: " ",
    ENG: "Ŋ",
    eng: "ŋ",
    ensp: " ",
    Eogon: "Ę",
    eogon: "ę",
    Eopf: "𝔼",
    eopf: "𝕖",
    epar: "⋕",
    eparsl: "⧣",
    eplus: "⩱",
    epsi: "ε",
    Epsilon: "Ε",
    epsilon: "ε",
    epsiv: "ϵ",
    eqcirc: "≖",
    eqcolon: "≕",
    eqsim: "≂",
    eqslantgtr: "⪖",
    eqslantless: "⪕",
    Equal: "⩵",
    equals: "=",
    EqualTilde: "≂",
    equest: "≟",
    Equilibrium: "⇌",
    equiv: "≡",
    equivDD: "⩸",
    eqvparsl: "⧥",
    erarr: "⥱",
    erDot: "≓",
    Escr: "ℰ",
    escr: "ℯ",
    esdot: "≐",
    Esim: "⩳",
    esim: "≂",
    Eta: "Η",
    eta: "η",
    ETH: "Ð",
    eth: "ð",
    Euml: "Ë",
    euml: "ë",
    euro: "€",
    excl: "!",
    exist: "∃",
    Exists: "∃",
    expectation: "ℰ",
    ExponentialE: "ⅇ",
    exponentiale: "ⅇ",
    fallingdotseq: "≒",
    Fcy: "Ф",
    fcy: "ф",
    female: "♀",
    ffilig: "ﬃ",
    fflig: "ﬀ",
    ffllig: "ﬄ",
    Ffr: "𝔉",
    ffr: "𝔣",
    filig: "ﬁ",
    FilledSmallSquare: "◼",
    FilledVerySmallSquare: "▪",
    fjlig: "fj",
    flat: "♭",
    fllig: "ﬂ",
    fltns: "▱",
    fnof: "ƒ",
    Fopf: "𝔽",
    fopf: "𝕗",
    ForAll: "∀",
    forall: "∀",
    fork: "⋔",
    forkv: "⫙",
    Fouriertrf: "ℱ",
    fpartint: "⨍",
    frac12: "½",
    frac13: "⅓",
    frac14: "¼",
    frac15: "⅕",
    frac16: "⅙",
    frac18: "⅛",
    frac23: "⅔",
    frac25: "⅖",
    frac34: "¾",
    frac35: "⅗",
    frac38: "⅜",
    frac45: "⅘",
    frac56: "⅚",
    frac58: "⅝",
    frac78: "⅞",
    frasl: "⁄",
    frown: "⌢",
    Fscr: "ℱ",
    fscr: "𝒻",
    gacute: "ǵ",
    Gamma: "Γ",
    gamma: "γ",
    Gammad: "Ϝ",
    gammad: "ϝ",
    gap: "⪆",
    Gbreve: "Ğ",
    gbreve: "ğ",
    Gcedil: "Ģ",
    Gcirc: "Ĝ",
    gcirc: "ĝ",
    Gcy: "Г",
    gcy: "г",
    Gdot: "Ġ",
    gdot: "ġ",
    gE: "≧",
    ge: "≥",
    gEl: "⪌",
    gel: "⋛",
    geq: "≥",
    geqq: "≧",
    geqslant: "⩾",
    ges: "⩾",
    gescc: "⪩",
    gesdot: "⪀",
    gesdoto: "⪂",
    gesdotol: "⪄",
    gesl: "⋛︀",
    gesles: "⪔",
    Gfr: "𝔊",
    gfr: "𝔤",
    Gg: "⋙",
    gg: "≫",
    ggg: "⋙",
    gimel: "ℷ",
    GJcy: "Ѓ",
    gjcy: "ѓ",
    gl: "≷",
    gla: "⪥",
    glE: "⪒",
    glj: "⪤",
    gnap: "⪊",
    gnapprox: "⪊",
    gnE: "≩",
    gne: "⪈",
    gneq: "⪈",
    gneqq: "≩",
    gnsim: "⋧",
    Gopf: "𝔾",
    gopf: "𝕘",
    grave: "`",
    GreaterEqual: "≥",
    GreaterEqualLess: "⋛",
    GreaterFullEqual: "≧",
    GreaterGreater: "⪢",
    GreaterLess: "≷",
    GreaterSlantEqual: "⩾",
    GreaterTilde: "≳",
    Gscr: "𝒢",
    gscr: "ℊ",
    gsim: "≳",
    gsime: "⪎",
    gsiml: "⪐",
    Gt: "≫",
    GT: ">",
    gt: ">",
    gtcc: "⪧",
    gtcir: "⩺",
    gtdot: "⋗",
    gtlPar: "⦕",
    gtquest: "⩼",
    gtrapprox: "⪆",
    gtrarr: "⥸",
    gtrdot: "⋗",
    gtreqless: "⋛",
    gtreqqless: "⪌",
    gtrless: "≷",
    gtrsim: "≳",
    gvertneqq: "≩︀",
    gvnE: "≩︀",
    Hacek: "ˇ",
    hairsp: " ",
    half: "½",
    hamilt: "ℋ",
    HARDcy: "Ъ",
    hardcy: "ъ",
    hArr: "⇔",
    harr: "↔",
    harrcir: "⥈",
    harrw: "↭",
    Hat: "^",
    hbar: "ℏ",
    Hcirc: "Ĥ",
    hcirc: "ĥ",
    hearts: "♥",
    heartsuit: "♥",
    hellip: "…",
    hercon: "⊹",
    Hfr: "ℌ",
    hfr: "𝔥",
    HilbertSpace: "ℋ",
    hksearow: "⤥",
    hkswarow: "⤦",
    hoarr: "⇿",
    homtht: "∻",
    hookleftarrow: "↩",
    hookrightarrow: "↪",
    Hopf: "ℍ",
    hopf: "𝕙",
    horbar: "―",
    HorizontalLine: "─",
    Hscr: "ℋ",
    hscr: "𝒽",
    hslash: "ℏ",
    Hstrok: "Ħ",
    hstrok: "ħ",
    HumpDownHump: "≎",
    HumpEqual: "≏",
    hybull: "⁃",
    hyphen: "‐",
    Iacute: "Í",
    iacute: "í",
    ic: "⁣",
    Icirc: "Î",
    icirc: "î",
    Icy: "И",
    icy: "и",
    Idot: "İ",
    IEcy: "Е",
    iecy: "е",
    iexcl: "¡",
    iff: "⇔",
    Ifr: "ℑ",
    ifr: "𝔦",
    Igrave: "Ì",
    igrave: "ì",
    ii: "ⅈ",
    iiiint: "⨌",
    iiint: "∭",
    iinfin: "⧜",
    iiota: "℩",
    IJlig: "Ĳ",
    ijlig: "ĳ",
    Im: "ℑ",
    Imacr: "Ī",
    imacr: "ī",
    image: "ℑ",
    ImaginaryI: "ⅈ",
    imagline: "ℐ",
    imagpart: "ℑ",
    imath: "ı",
    imof: "⊷",
    imped: "Ƶ",
    Implies: "⇒",
    in: "∈",
    incare: "℅",
    infin: "∞",
    infintie: "⧝",
    inodot: "ı",
    Int: "∬",
    int: "∫",
    intcal: "⊺",
    integers: "ℤ",
    Integral: "∫",
    intercal: "⊺",
    Intersection: "⋂",
    intlarhk: "⨗",
    intprod: "⨼",
    InvisibleComma: "⁣",
    InvisibleTimes: "⁢",
    IOcy: "Ё",
    iocy: "ё",
    Iogon: "Į",
    iogon: "į",
    Iopf: "𝕀",
    iopf: "𝕚",
    Iota: "Ι",
    iota: "ι",
    iprod: "⨼",
    iquest: "¿",
    Iscr: "ℐ",
    iscr: "𝒾",
    isin: "∈",
    isindot: "⋵",
    isinE: "⋹",
    isins: "⋴",
    isinsv: "⋳",
    isinv: "∈",
    it: "⁢",
    Itilde: "Ĩ",
    itilde: "ĩ",
    Iukcy: "І",
    iukcy: "і",
    Iuml: "Ï",
    iuml: "ï",
    Jcirc: "Ĵ",
    jcirc: "ĵ",
    Jcy: "Й",
    jcy: "й",
    Jfr: "𝔍",
    jfr: "𝔧",
    jmath: "ȷ",
    Jopf: "𝕁",
    jopf: "𝕛",
    Jscr: "𝒥",
    jscr: "𝒿",
    Jsercy: "Ј",
    jsercy: "ј",
    Jukcy: "Є",
    jukcy: "є",
    Kappa: "Κ",
    kappa: "κ",
    kappav: "ϰ",
    Kcedil: "Ķ",
    kcedil: "ķ",
    Kcy: "К",
    kcy: "к",
    Kfr: "𝔎",
    kfr: "𝔨",
    kgreen: "ĸ",
    KHcy: "Х",
    khcy: "х",
    KJcy: "Ќ",
    kjcy: "ќ",
    Kopf: "𝕂",
    kopf: "𝕜",
    Kscr: "𝒦",
    kscr: "𝓀",
    lAarr: "⇚",
    Lacute: "Ĺ",
    lacute: "ĺ",
    laemptyv: "⦴",
    lagran: "ℒ",
    Lambda: "Λ",
    lambda: "λ",
    Lang: "⟪",
    lang: "⟨",
    langd: "⦑",
    langle: "⟨",
    lap: "⪅",
    Laplacetrf: "ℒ",
    laquo: "«",
    Larr: "↞",
    lArr: "⇐",
    larr: "←",
    larrb: "⇤",
    larrbfs: "⤟",
    larrfs: "⤝",
    larrhk: "↩",
    larrlp: "↫",
    larrpl: "⤹",
    larrsim: "⥳",
    larrtl: "↢",
    lat: "⪫",
    lAtail: "⤛",
    latail: "⤙",
    late: "⪭",
    lates: "⪭︀",
    lBarr: "⤎",
    lbarr: "⤌",
    lbbrk: "❲",
    lbrace: "{",
    lbrack: "[",
    lbrke: "⦋",
    lbrksld: "⦏",
    lbrkslu: "⦍",
    Lcaron: "Ľ",
    lcaron: "ľ",
    Lcedil: "Ļ",
    lcedil: "ļ",
    lceil: "⌈",
    lcub: "{",
    Lcy: "Л",
    lcy: "л",
    ldca: "⤶",
    ldquo: "“",
    ldquor: "„",
    ldrdhar: "⥧",
    ldrushar: "⥋",
    ldsh: "↲",
    lE: "≦",
    le: "≤",
    LeftAngleBracket: "⟨",
    LeftArrow: "←",
    Leftarrow: "⇐",
    leftarrow: "←",
    LeftArrowBar: "⇤",
    LeftArrowRightArrow: "⇆",
    leftarrowtail: "↢",
    LeftCeiling: "⌈",
    LeftDoubleBracket: "⟦",
    LeftDownTeeVector: "⥡",
    LeftDownVector: "⇃",
    LeftDownVectorBar: "⥙",
    LeftFloor: "⌊",
    leftharpoondown: "↽",
    leftharpoonup: "↼",
    leftleftarrows: "⇇",
    LeftRightArrow: "↔",
    Leftrightarrow: "⇔",
    leftrightarrow: "↔",
    leftrightarrows: "⇆",
    leftrightharpoons: "⇋",
    leftrightsquigarrow: "↭",
    LeftRightVector: "⥎",
    LeftTee: "⊣",
    LeftTeeArrow: "↤",
    LeftTeeVector: "⥚",
    leftthreetimes: "⋋",
    LeftTriangle: "⊲",
    LeftTriangleBar: "⧏",
    LeftTriangleEqual: "⊴",
    LeftUpDownVector: "⥑",
    LeftUpTeeVector: "⥠",
    LeftUpVector: "↿",
    LeftUpVectorBar: "⥘",
    LeftVector: "↼",
    LeftVectorBar: "⥒",
    lEg: "⪋",
    leg: "⋚",
    leq: "≤",
    leqq: "≦",
    leqslant: "⩽",
    les: "⩽",
    lescc: "⪨",
    lesdot: "⩿",
    lesdoto: "⪁",
    lesdotor: "⪃",
    lesg: "⋚︀",
    lesges: "⪓",
    lessapprox: "⪅",
    lessdot: "⋖",
    lesseqgtr: "⋚",
    lesseqqgtr: "⪋",
    LessEqualGreater: "⋚",
    LessFullEqual: "≦",
    LessGreater: "≶",
    lessgtr: "≶",
    LessLess: "⪡",
    lesssim: "≲",
    LessSlantEqual: "⩽",
    LessTilde: "≲",
    lfisht: "⥼",
    lfloor: "⌊",
    Lfr: "𝔏",
    lfr: "𝔩",
    lg: "≶",
    lgE: "⪑",
    lHar: "⥢",
    lhard: "↽",
    lharu: "↼",
    lharul: "⥪",
    lhblk: "▄",
    LJcy: "Љ",
    ljcy: "љ",
    Ll: "⋘",
    ll: "≪",
    llarr: "⇇",
    llcorner: "⌞",
    Lleftarrow: "⇚",
    llhard: "⥫",
    lltri: "◺",
    Lmidot: "Ŀ",
    lmidot: "ŀ",
    lmoust: "⎰",
    lmoustache: "⎰",
    lnap: "⪉",
    lnapprox: "⪉",
    lnE: "≨",
    lne: "⪇",
    lneq: "⪇",
    lneqq: "≨",
    lnsim: "⋦",
    loang: "⟬",
    loarr: "⇽",
    lobrk: "⟦",
    LongLeftArrow: "⟵",
    Longleftarrow: "⟸",
    longleftarrow: "⟵",
    LongLeftRightArrow: "⟷",
    Longleftrightarrow: "⟺",
    longleftrightarrow: "⟷",
    longmapsto: "⟼",
    LongRightArrow: "⟶",
    Longrightarrow: "⟹",
    longrightarrow: "⟶",
    looparrowleft: "↫",
    looparrowright: "↬",
    lopar: "⦅",
    Lopf: "𝕃",
    lopf: "𝕝",
    loplus: "⨭",
    lotimes: "⨴",
    lowast: "∗",
    lowbar: "_",
    LowerLeftArrow: "↙",
    LowerRightArrow: "↘",
    loz: "◊",
    lozenge: "◊",
    lozf: "⧫",
    lpar: "(",
    lparlt: "⦓",
    lrarr: "⇆",
    lrcorner: "⌟",
    lrhar: "⇋",
    lrhard: "⥭",
    lrm: "‎",
    lrtri: "⊿",
    lsaquo: "‹",
    Lscr: "ℒ",
    lscr: "𝓁",
    Lsh: "↰",
    lsh: "↰",
    lsim: "≲",
    lsime: "⪍",
    lsimg: "⪏",
    lsqb: "[",
    lsquo: "‘",
    lsquor: "‚",
    Lstrok: "Ł",
    lstrok: "ł",
    Lt: "≪",
    LT: "<",
    lt: "<",
    ltcc: "⪦",
    ltcir: "⩹",
    ltdot: "⋖",
    lthree: "⋋",
    ltimes: "⋉",
    ltlarr: "⥶",
    ltquest: "⩻",
    ltri: "◃",
    ltrie: "⊴",
    ltrif: "◂",
    ltrPar: "⦖",
    lurdshar: "⥊",
    luruhar: "⥦",
    lvertneqq: "≨︀",
    lvnE: "≨︀",
    macr: "¯",
    male: "♂",
    malt: "✠",
    maltese: "✠",
    Map: "⤅",
    map: "↦",
    mapsto: "↦",
    mapstodown: "↧",
    mapstoleft: "↤",
    mapstoup: "↥",
    marker: "▮",
    mcomma: "⨩",
    Mcy: "М",
    mcy: "м",
    mdash: "—",
    mDDot: "∺",
    measuredangle: "∡",
    MediumSpace: " ",
    Mellintrf: "ℳ",
    Mfr: "𝔐",
    mfr: "𝔪",
    mho: "℧",
    micro: "µ",
    mid: "∣",
    midast: "*",
    midcir: "⫰",
    middot: "·",
    minus: "−",
    minusb: "⊟",
    minusd: "∸",
    minusdu: "⨪",
    MinusPlus: "∓",
    mlcp: "⫛",
    mldr: "…",
    mnplus: "∓",
    models: "⊧",
    Mopf: "𝕄",
    mopf: "𝕞",
    mp: "∓",
    Mscr: "ℳ",
    mscr: "𝓂",
    mstpos: "∾",
    Mu: "Μ",
    mu: "μ",
    multimap: "⊸",
    mumap: "⊸",
    nabla: "∇",
    Nacute: "Ń",
    nacute: "ń",
    nang: "∠⃒",
    nap: "≉",
    napE: "⩰̸",
    napid: "≋̸",
    napos: "ŉ",
    napprox: "≉",
    natur: "♮",
    natural: "♮",
    naturals: "ℕ",
    nbsp: " ",
    nbump: "≎̸",
    nbumpe: "≏̸",
    ncap: "⩃",
    Ncaron: "Ň",
    ncaron: "ň",
    Ncedil: "Ņ",
    ncedil: "ņ",
    ncong: "≇",
    ncongdot: "⩭̸",
    ncup: "⩂",
    Ncy: "Н",
    ncy: "н",
    ndash: "–",
    ne: "≠",
    nearhk: "⤤",
    neArr: "⇗",
    nearr: "↗",
    nearrow: "↗",
    nedot: "≐̸",
    NegativeMediumSpace: "​",
    NegativeThickSpace: "​",
    NegativeThinSpace: "​",
    NegativeVeryThinSpace: "​",
    nequiv: "≢",
    nesear: "⤨",
    nesim: "≂̸",
    NestedGreaterGreater: "≫",
    NestedLessLess: "≪",
    NewLine: `
`,
    nexist: "∄",
    nexists: "∄",
    Nfr: "𝔑",
    nfr: "𝔫",
    ngE: "≧̸",
    nge: "≱",
    ngeq: "≱",
    ngeqq: "≧̸",
    ngeqslant: "⩾̸",
    nges: "⩾̸",
    nGg: "⋙̸",
    ngsim: "≵",
    nGt: "≫⃒",
    ngt: "≯",
    ngtr: "≯",
    nGtv: "≫̸",
    nhArr: "⇎",
    nharr: "↮",
    nhpar: "⫲",
    ni: "∋",
    nis: "⋼",
    nisd: "⋺",
    niv: "∋",
    NJcy: "Њ",
    njcy: "њ",
    nlArr: "⇍",
    nlarr: "↚",
    nldr: "‥",
    nlE: "≦̸",
    nle: "≰",
    nLeftarrow: "⇍",
    nleftarrow: "↚",
    nLeftrightarrow: "⇎",
    nleftrightarrow: "↮",
    nleq: "≰",
    nleqq: "≦̸",
    nleqslant: "⩽̸",
    nles: "⩽̸",
    nless: "≮",
    nLl: "⋘̸",
    nlsim: "≴",
    nLt: "≪⃒",
    nlt: "≮",
    nltri: "⋪",
    nltrie: "⋬",
    nLtv: "≪̸",
    nmid: "∤",
    NoBreak: "⁠",
    NonBreakingSpace: " ",
    Nopf: "ℕ",
    nopf: "𝕟",
    Not: "⫬",
    not: "¬",
    NotCongruent: "≢",
    NotCupCap: "≭",
    NotDoubleVerticalBar: "∦",
    NotElement: "∉",
    NotEqual: "≠",
    NotEqualTilde: "≂̸",
    NotExists: "∄",
    NotGreater: "≯",
    NotGreaterEqual: "≱",
    NotGreaterFullEqual: "≧̸",
    NotGreaterGreater: "≫̸",
    NotGreaterLess: "≹",
    NotGreaterSlantEqual: "⩾̸",
    NotGreaterTilde: "≵",
    NotHumpDownHump: "≎̸",
    NotHumpEqual: "≏̸",
    notin: "∉",
    notindot: "⋵̸",
    notinE: "⋹̸",
    notinva: "∉",
    notinvb: "⋷",
    notinvc: "⋶",
    NotLeftTriangle: "⋪",
    NotLeftTriangleBar: "⧏̸",
    NotLeftTriangleEqual: "⋬",
    NotLess: "≮",
    NotLessEqual: "≰",
    NotLessGreater: "≸",
    NotLessLess: "≪̸",
    NotLessSlantEqual: "⩽̸",
    NotLessTilde: "≴",
    NotNestedGreaterGreater: "⪢̸",
    NotNestedLessLess: "⪡̸",
    notni: "∌",
    notniva: "∌",
    notnivb: "⋾",
    notnivc: "⋽",
    NotPrecedes: "⊀",
    NotPrecedesEqual: "⪯̸",
    NotPrecedesSlantEqual: "⋠",
    NotReverseElement: "∌",
    NotRightTriangle: "⋫",
    NotRightTriangleBar: "⧐̸",
    NotRightTriangleEqual: "⋭",
    NotSquareSubset: "⊏̸",
    NotSquareSubsetEqual: "⋢",
    NotSquareSuperset: "⊐̸",
    NotSquareSupersetEqual: "⋣",
    NotSubset: "⊂⃒",
    NotSubsetEqual: "⊈",
    NotSucceeds: "⊁",
    NotSucceedsEqual: "⪰̸",
    NotSucceedsSlantEqual: "⋡",
    NotSucceedsTilde: "≿̸",
    NotSuperset: "⊃⃒",
    NotSupersetEqual: "⊉",
    NotTilde: "≁",
    NotTildeEqual: "≄",
    NotTildeFullEqual: "≇",
    NotTildeTilde: "≉",
    NotVerticalBar: "∤",
    npar: "∦",
    nparallel: "∦",
    nparsl: "⫽⃥",
    npart: "∂̸",
    npolint: "⨔",
    npr: "⊀",
    nprcue: "⋠",
    npre: "⪯̸",
    nprec: "⊀",
    npreceq: "⪯̸",
    nrArr: "⇏",
    nrarr: "↛",
    nrarrc: "⤳̸",
    nrarrw: "↝̸",
    nRightarrow: "⇏",
    nrightarrow: "↛",
    nrtri: "⋫",
    nrtrie: "⋭",
    nsc: "⊁",
    nsccue: "⋡",
    nsce: "⪰̸",
    Nscr: "𝒩",
    nscr: "𝓃",
    nshortmid: "∤",
    nshortparallel: "∦",
    nsim: "≁",
    nsime: "≄",
    nsimeq: "≄",
    nsmid: "∤",
    nspar: "∦",
    nsqsube: "⋢",
    nsqsupe: "⋣",
    nsub: "⊄",
    nsubE: "⫅̸",
    nsube: "⊈",
    nsubset: "⊂⃒",
    nsubseteq: "⊈",
    nsubseteqq: "⫅̸",
    nsucc: "⊁",
    nsucceq: "⪰̸",
    nsup: "⊅",
    nsupE: "⫆̸",
    nsupe: "⊉",
    nsupset: "⊃⃒",
    nsupseteq: "⊉",
    nsupseteqq: "⫆̸",
    ntgl: "≹",
    Ntilde: "Ñ",
    ntilde: "ñ",
    ntlg: "≸",
    ntriangleleft: "⋪",
    ntrianglelefteq: "⋬",
    ntriangleright: "⋫",
    ntrianglerighteq: "⋭",
    Nu: "Ν",
    nu: "ν",
    num: "#",
    numero: "№",
    numsp: " ",
    nvap: "≍⃒",
    nVDash: "⊯",
    nVdash: "⊮",
    nvDash: "⊭",
    nvdash: "⊬",
    nvge: "≥⃒",
    nvgt: ">⃒",
    nvHarr: "⤄",
    nvinfin: "⧞",
    nvlArr: "⤂",
    nvle: "≤⃒",
    nvlt: "<⃒",
    nvltrie: "⊴⃒",
    nvrArr: "⤃",
    nvrtrie: "⊵⃒",
    nvsim: "∼⃒",
    nwarhk: "⤣",
    nwArr: "⇖",
    nwarr: "↖",
    nwarrow: "↖",
    nwnear: "⤧",
    Oacute: "Ó",
    oacute: "ó",
    oast: "⊛",
    ocir: "⊚",
    Ocirc: "Ô",
    ocirc: "ô",
    Ocy: "О",
    ocy: "о",
    odash: "⊝",
    Odblac: "Ő",
    odblac: "ő",
    odiv: "⨸",
    odot: "⊙",
    odsold: "⦼",
    OElig: "Œ",
    oelig: "œ",
    ofcir: "⦿",
    Ofr: "𝔒",
    ofr: "𝔬",
    ogon: "˛",
    Ograve: "Ò",
    ograve: "ò",
    ogt: "⧁",
    ohbar: "⦵",
    ohm: "Ω",
    oint: "∮",
    olarr: "↺",
    olcir: "⦾",
    olcross: "⦻",
    oline: "‾",
    olt: "⧀",
    Omacr: "Ō",
    omacr: "ō",
    Omega: "Ω",
    omega: "ω",
    Omicron: "Ο",
    omicron: "ο",
    omid: "⦶",
    ominus: "⊖",
    Oopf: "𝕆",
    oopf: "𝕠",
    opar: "⦷",
    OpenCurlyDoubleQuote: "“",
    OpenCurlyQuote: "‘",
    operp: "⦹",
    oplus: "⊕",
    Or: "⩔",
    or: "∨",
    orarr: "↻",
    ord: "⩝",
    order: "ℴ",
    orderof: "ℴ",
    ordf: "ª",
    ordm: "º",
    origof: "⊶",
    oror: "⩖",
    orslope: "⩗",
    orv: "⩛",
    oS: "Ⓢ",
    Oscr: "𝒪",
    oscr: "ℴ",
    Oslash: "Ø",
    oslash: "ø",
    osol: "⊘",
    Otilde: "Õ",
    otilde: "õ",
    Otimes: "⨷",
    otimes: "⊗",
    otimesas: "⨶",
    Ouml: "Ö",
    ouml: "ö",
    ovbar: "⌽",
    OverBar: "‾",
    OverBrace: "⏞",
    OverBracket: "⎴",
    OverParenthesis: "⏜",
    par: "∥",
    para: "¶",
    parallel: "∥",
    parsim: "⫳",
    parsl: "⫽",
    part: "∂",
    PartialD: "∂",
    Pcy: "П",
    pcy: "п",
    percnt: "%",
    period: ".",
    permil: "‰",
    perp: "⊥",
    pertenk: "‱",
    Pfr: "𝔓",
    pfr: "𝔭",
    Phi: "Φ",
    phi: "φ",
    phiv: "ϕ",
    phmmat: "ℳ",
    phone: "☎",
    Pi: "Π",
    pi: "π",
    pitchfork: "⋔",
    piv: "ϖ",
    planck: "ℏ",
    planckh: "ℎ",
    plankv: "ℏ",
    plus: "+",
    plusacir: "⨣",
    plusb: "⊞",
    pluscir: "⨢",
    plusdo: "∔",
    plusdu: "⨥",
    pluse: "⩲",
    PlusMinus: "±",
    plusmn: "±",
    plussim: "⨦",
    plustwo: "⨧",
    pm: "±",
    Poincareplane: "ℌ",
    pointint: "⨕",
    Popf: "ℙ",
    popf: "𝕡",
    pound: "£",
    Pr: "⪻",
    pr: "≺",
    prap: "⪷",
    prcue: "≼",
    prE: "⪳",
    pre: "⪯",
    prec: "≺",
    precapprox: "⪷",
    preccurlyeq: "≼",
    Precedes: "≺",
    PrecedesEqual: "⪯",
    PrecedesSlantEqual: "≼",
    PrecedesTilde: "≾",
    preceq: "⪯",
    precnapprox: "⪹",
    precneqq: "⪵",
    precnsim: "⋨",
    precsim: "≾",
    Prime: "″",
    prime: "′",
    primes: "ℙ",
    prnap: "⪹",
    prnE: "⪵",
    prnsim: "⋨",
    prod: "∏",
    Product: "∏",
    profalar: "⌮",
    profline: "⌒",
    profsurf: "⌓",
    prop: "∝",
    Proportion: "∷",
    Proportional: "∝",
    propto: "∝",
    prsim: "≾",
    prurel: "⊰",
    Pscr: "𝒫",
    pscr: "𝓅",
    Psi: "Ψ",
    psi: "ψ",
    puncsp: " ",
    Qfr: "𝔔",
    qfr: "𝔮",
    qint: "⨌",
    Qopf: "ℚ",
    qopf: "𝕢",
    qprime: "⁗",
    Qscr: "𝒬",
    qscr: "𝓆",
    quaternions: "ℍ",
    quatint: "⨖",
    quest: "?",
    questeq: "≟",
    QUOT: '"',
    quot: '"',
    rAarr: "⇛",
    race: "∽̱",
    Racute: "Ŕ",
    racute: "ŕ",
    radic: "√",
    raemptyv: "⦳",
    Rang: "⟫",
    rang: "⟩",
    rangd: "⦒",
    range: "⦥",
    rangle: "⟩",
    raquo: "»",
    Rarr: "↠",
    rArr: "⇒",
    rarr: "→",
    rarrap: "⥵",
    rarrb: "⇥",
    rarrbfs: "⤠",
    rarrc: "⤳",
    rarrfs: "⤞",
    rarrhk: "↪",
    rarrlp: "↬",
    rarrpl: "⥅",
    rarrsim: "⥴",
    Rarrtl: "⤖",
    rarrtl: "↣",
    rarrw: "↝",
    rAtail: "⤜",
    ratail: "⤚",
    ratio: "∶",
    rationals: "ℚ",
    RBarr: "⤐",
    rBarr: "⤏",
    rbarr: "⤍",
    rbbrk: "❳",
    rbrace: "}",
    rbrack: "]",
    rbrke: "⦌",
    rbrksld: "⦎",
    rbrkslu: "⦐",
    Rcaron: "Ř",
    rcaron: "ř",
    Rcedil: "Ŗ",
    rcedil: "ŗ",
    rceil: "⌉",
    rcub: "}",
    Rcy: "Р",
    rcy: "р",
    rdca: "⤷",
    rdldhar: "⥩",
    rdquo: "”",
    rdquor: "”",
    rdsh: "↳",
    Re: "ℜ",
    real: "ℜ",
    realine: "ℛ",
    realpart: "ℜ",
    reals: "ℝ",
    rect: "▭",
    REG: "®",
    reg: "®",
    ReverseElement: "∋",
    ReverseEquilibrium: "⇋",
    ReverseUpEquilibrium: "⥯",
    rfisht: "⥽",
    rfloor: "⌋",
    Rfr: "ℜ",
    rfr: "𝔯",
    rHar: "⥤",
    rhard: "⇁",
    rharu: "⇀",
    rharul: "⥬",
    Rho: "Ρ",
    rho: "ρ",
    rhov: "ϱ",
    RightAngleBracket: "⟩",
    RightArrow: "→",
    Rightarrow: "⇒",
    rightarrow: "→",
    RightArrowBar: "⇥",
    RightArrowLeftArrow: "⇄",
    rightarrowtail: "↣",
    RightCeiling: "⌉",
    RightDoubleBracket: "⟧",
    RightDownTeeVector: "⥝",
    RightDownVector: "⇂",
    RightDownVectorBar: "⥕",
    RightFloor: "⌋",
    rightharpoondown: "⇁",
    rightharpoonup: "⇀",
    rightleftarrows: "⇄",
    rightleftharpoons: "⇌",
    rightrightarrows: "⇉",
    rightsquigarrow: "↝",
    RightTee: "⊢",
    RightTeeArrow: "↦",
    RightTeeVector: "⥛",
    rightthreetimes: "⋌",
    RightTriangle: "⊳",
    RightTriangleBar: "⧐",
    RightTriangleEqual: "⊵",
    RightUpDownVector: "⥏",
    RightUpTeeVector: "⥜",
    RightUpVector: "↾",
    RightUpVectorBar: "⥔",
    RightVector: "⇀",
    RightVectorBar: "⥓",
    ring: "˚",
    risingdotseq: "≓",
    rlarr: "⇄",
    rlhar: "⇌",
    rlm: "‏",
    rmoust: "⎱",
    rmoustache: "⎱",
    rnmid: "⫮",
    roang: "⟭",
    roarr: "⇾",
    robrk: "⟧",
    ropar: "⦆",
    Ropf: "ℝ",
    ropf: "𝕣",
    roplus: "⨮",
    rotimes: "⨵",
    RoundImplies: "⥰",
    rpar: ")",
    rpargt: "⦔",
    rppolint: "⨒",
    rrarr: "⇉",
    Rrightarrow: "⇛",
    rsaquo: "›",
    Rscr: "ℛ",
    rscr: "𝓇",
    Rsh: "↱",
    rsh: "↱",
    rsqb: "]",
    rsquo: "’",
    rsquor: "’",
    rthree: "⋌",
    rtimes: "⋊",
    rtri: "▹",
    rtrie: "⊵",
    rtrif: "▸",
    rtriltri: "⧎",
    RuleDelayed: "⧴",
    ruluhar: "⥨",
    rx: "℞",
    Sacute: "Ś",
    sacute: "ś",
    sbquo: "‚",
    Sc: "⪼",
    sc: "≻",
    scap: "⪸",
    Scaron: "Š",
    scaron: "š",
    sccue: "≽",
    scE: "⪴",
    sce: "⪰",
    Scedil: "Ş",
    scedil: "ş",
    Scirc: "Ŝ",
    scirc: "ŝ",
    scnap: "⪺",
    scnE: "⪶",
    scnsim: "⋩",
    scpolint: "⨓",
    scsim: "≿",
    Scy: "С",
    scy: "с",
    sdot: "⋅",
    sdotb: "⊡",
    sdote: "⩦",
    searhk: "⤥",
    seArr: "⇘",
    searr: "↘",
    searrow: "↘",
    sect: "§",
    semi: ";",
    seswar: "⤩",
    setminus: "∖",
    setmn: "∖",
    sext: "✶",
    Sfr: "𝔖",
    sfr: "𝔰",
    sfrown: "⌢",
    sharp: "♯",
    SHCHcy: "Щ",
    shchcy: "щ",
    SHcy: "Ш",
    shcy: "ш",
    ShortDownArrow: "↓",
    ShortLeftArrow: "←",
    shortmid: "∣",
    shortparallel: "∥",
    ShortRightArrow: "→",
    ShortUpArrow: "↑",
    shy: "­",
    Sigma: "Σ",
    sigma: "σ",
    sigmaf: "ς",
    sigmav: "ς",
    sim: "∼",
    simdot: "⩪",
    sime: "≃",
    simeq: "≃",
    simg: "⪞",
    simgE: "⪠",
    siml: "⪝",
    simlE: "⪟",
    simne: "≆",
    simplus: "⨤",
    simrarr: "⥲",
    slarr: "←",
    SmallCircle: "∘",
    smallsetminus: "∖",
    smashp: "⨳",
    smeparsl: "⧤",
    smid: "∣",
    smile: "⌣",
    smt: "⪪",
    smte: "⪬",
    smtes: "⪬︀",
    SOFTcy: "Ь",
    softcy: "ь",
    sol: "/",
    solb: "⧄",
    solbar: "⌿",
    Sopf: "𝕊",
    sopf: "𝕤",
    spades: "♠",
    spadesuit: "♠",
    spar: "∥",
    sqcap: "⊓",
    sqcaps: "⊓︀",
    sqcup: "⊔",
    sqcups: "⊔︀",
    Sqrt: "√",
    sqsub: "⊏",
    sqsube: "⊑",
    sqsubset: "⊏",
    sqsubseteq: "⊑",
    sqsup: "⊐",
    sqsupe: "⊒",
    sqsupset: "⊐",
    sqsupseteq: "⊒",
    squ: "□",
    Square: "□",
    square: "□",
    SquareIntersection: "⊓",
    SquareSubset: "⊏",
    SquareSubsetEqual: "⊑",
    SquareSuperset: "⊐",
    SquareSupersetEqual: "⊒",
    SquareUnion: "⊔",
    squarf: "▪",
    squf: "▪",
    srarr: "→",
    Sscr: "𝒮",
    sscr: "𝓈",
    ssetmn: "∖",
    ssmile: "⌣",
    sstarf: "⋆",
    Star: "⋆",
    star: "☆",
    starf: "★",
    straightepsilon: "ϵ",
    straightphi: "ϕ",
    strns: "¯",
    Sub: "⋐",
    sub: "⊂",
    subdot: "⪽",
    subE: "⫅",
    sube: "⊆",
    subedot: "⫃",
    submult: "⫁",
    subnE: "⫋",
    subne: "⊊",
    subplus: "⪿",
    subrarr: "⥹",
    Subset: "⋐",
    subset: "⊂",
    subseteq: "⊆",
    subseteqq: "⫅",
    SubsetEqual: "⊆",
    subsetneq: "⊊",
    subsetneqq: "⫋",
    subsim: "⫇",
    subsub: "⫕",
    subsup: "⫓",
    succ: "≻",
    succapprox: "⪸",
    succcurlyeq: "≽",
    Succeeds: "≻",
    SucceedsEqual: "⪰",
    SucceedsSlantEqual: "≽",
    SucceedsTilde: "≿",
    succeq: "⪰",
    succnapprox: "⪺",
    succneqq: "⪶",
    succnsim: "⋩",
    succsim: "≿",
    SuchThat: "∋",
    Sum: "∑",
    sum: "∑",
    sung: "♪",
    Sup: "⋑",
    sup: "⊃",
    sup1: "¹",
    sup2: "²",
    sup3: "³",
    supdot: "⪾",
    supdsub: "⫘",
    supE: "⫆",
    supe: "⊇",
    supedot: "⫄",
    Superset: "⊃",
    SupersetEqual: "⊇",
    suphsol: "⟉",
    suphsub: "⫗",
    suplarr: "⥻",
    supmult: "⫂",
    supnE: "⫌",
    supne: "⊋",
    supplus: "⫀",
    Supset: "⋑",
    supset: "⊃",
    supseteq: "⊇",
    supseteqq: "⫆",
    supsetneq: "⊋",
    supsetneqq: "⫌",
    supsim: "⫈",
    supsub: "⫔",
    supsup: "⫖",
    swarhk: "⤦",
    swArr: "⇙",
    swarr: "↙",
    swarrow: "↙",
    swnwar: "⤪",
    szlig: "ß",
    Tab: "	",
    target: "⌖",
    Tau: "Τ",
    tau: "τ",
    tbrk: "⎴",
    Tcaron: "Ť",
    tcaron: "ť",
    Tcedil: "Ţ",
    tcedil: "ţ",
    Tcy: "Т",
    tcy: "т",
    tdot: "⃛",
    telrec: "⌕",
    Tfr: "𝔗",
    tfr: "𝔱",
    there4: "∴",
    Therefore: "∴",
    therefore: "∴",
    Theta: "Θ",
    theta: "θ",
    thetasym: "ϑ",
    thetav: "ϑ",
    thickapprox: "≈",
    thicksim: "∼",
    ThickSpace: "  ",
    thinsp: " ",
    ThinSpace: " ",
    thkap: "≈",
    thksim: "∼",
    THORN: "Þ",
    thorn: "þ",
    Tilde: "∼",
    tilde: "˜",
    TildeEqual: "≃",
    TildeFullEqual: "≅",
    TildeTilde: "≈",
    times: "×",
    timesb: "⊠",
    timesbar: "⨱",
    timesd: "⨰",
    tint: "∭",
    toea: "⤨",
    top: "⊤",
    topbot: "⌶",
    topcir: "⫱",
    Topf: "𝕋",
    topf: "𝕥",
    topfork: "⫚",
    tosa: "⤩",
    tprime: "‴",
    TRADE: "™",
    trade: "™",
    triangle: "▵",
    triangledown: "▿",
    triangleleft: "◃",
    trianglelefteq: "⊴",
    triangleq: "≜",
    triangleright: "▹",
    trianglerighteq: "⊵",
    tridot: "◬",
    trie: "≜",
    triminus: "⨺",
    TripleDot: "⃛",
    triplus: "⨹",
    trisb: "⧍",
    tritime: "⨻",
    trpezium: "⏢",
    Tscr: "𝒯",
    tscr: "𝓉",
    TScy: "Ц",
    tscy: "ц",
    TSHcy: "Ћ",
    tshcy: "ћ",
    Tstrok: "Ŧ",
    tstrok: "ŧ",
    twixt: "≬",
    twoheadleftarrow: "↞",
    twoheadrightarrow: "↠",
    Uacute: "Ú",
    uacute: "ú",
    Uarr: "↟",
    uArr: "⇑",
    uarr: "↑",
    Uarrocir: "⥉",
    Ubrcy: "Ў",
    ubrcy: "ў",
    Ubreve: "Ŭ",
    ubreve: "ŭ",
    Ucirc: "Û",
    ucirc: "û",
    Ucy: "У",
    ucy: "у",
    udarr: "⇅",
    Udblac: "Ű",
    udblac: "ű",
    udhar: "⥮",
    ufisht: "⥾",
    Ufr: "𝔘",
    ufr: "𝔲",
    Ugrave: "Ù",
    ugrave: "ù",
    uHar: "⥣",
    uharl: "↿",
    uharr: "↾",
    uhblk: "▀",
    ulcorn: "⌜",
    ulcorner: "⌜",
    ulcrop: "⌏",
    ultri: "◸",
    Umacr: "Ū",
    umacr: "ū",
    uml: "¨",
    UnderBar: "_",
    UnderBrace: "⏟",
    UnderBracket: "⎵",
    UnderParenthesis: "⏝",
    Union: "⋃",
    UnionPlus: "⊎",
    Uogon: "Ų",
    uogon: "ų",
    Uopf: "𝕌",
    uopf: "𝕦",
    UpArrow: "↑",
    Uparrow: "⇑",
    uparrow: "↑",
    UpArrowBar: "⤒",
    UpArrowDownArrow: "⇅",
    UpDownArrow: "↕",
    Updownarrow: "⇕",
    updownarrow: "↕",
    UpEquilibrium: "⥮",
    upharpoonleft: "↿",
    upharpoonright: "↾",
    uplus: "⊎",
    UpperLeftArrow: "↖",
    UpperRightArrow: "↗",
    Upsi: "ϒ",
    upsi: "υ",
    upsih: "ϒ",
    Upsilon: "Υ",
    upsilon: "υ",
    UpTee: "⊥",
    UpTeeArrow: "↥",
    upuparrows: "⇈",
    urcorn: "⌝",
    urcorner: "⌝",
    urcrop: "⌎",
    Uring: "Ů",
    uring: "ů",
    urtri: "◹",
    Uscr: "𝒰",
    uscr: "𝓊",
    utdot: "⋰",
    Utilde: "Ũ",
    utilde: "ũ",
    utri: "▵",
    utrif: "▴",
    uuarr: "⇈",
    Uuml: "Ü",
    uuml: "ü",
    uwangle: "⦧",
    vangrt: "⦜",
    varepsilon: "ϵ",
    varkappa: "ϰ",
    varnothing: "∅",
    varphi: "ϕ",
    varpi: "ϖ",
    varpropto: "∝",
    vArr: "⇕",
    varr: "↕",
    varrho: "ϱ",
    varsigma: "ς",
    varsubsetneq: "⊊︀",
    varsubsetneqq: "⫋︀",
    varsupsetneq: "⊋︀",
    varsupsetneqq: "⫌︀",
    vartheta: "ϑ",
    vartriangleleft: "⊲",
    vartriangleright: "⊳",
    Vbar: "⫫",
    vBar: "⫨",
    vBarv: "⫩",
    Vcy: "В",
    vcy: "в",
    VDash: "⊫",
    Vdash: "⊩",
    vDash: "⊨",
    vdash: "⊢",
    Vdashl: "⫦",
    Vee: "⋁",
    vee: "∨",
    veebar: "⊻",
    veeeq: "≚",
    vellip: "⋮",
    Verbar: "‖",
    verbar: "|",
    Vert: "‖",
    vert: "|",
    VerticalBar: "∣",
    VerticalLine: "|",
    VerticalSeparator: "❘",
    VerticalTilde: "≀",
    VeryThinSpace: " ",
    Vfr: "𝔙",
    vfr: "𝔳",
    vltri: "⊲",
    vnsub: "⊂⃒",
    vnsup: "⊃⃒",
    Vopf: "𝕍",
    vopf: "𝕧",
    vprop: "∝",
    vrtri: "⊳",
    Vscr: "𝒱",
    vscr: "𝓋",
    vsubnE: "⫋︀",
    vsubne: "⊊︀",
    vsupnE: "⫌︀",
    vsupne: "⊋︀",
    Vvdash: "⊪",
    vzigzag: "⦚",
    Wcirc: "Ŵ",
    wcirc: "ŵ",
    wedbar: "⩟",
    Wedge: "⋀",
    wedge: "∧",
    wedgeq: "≙",
    weierp: "℘",
    Wfr: "𝔚",
    wfr: "𝔴",
    Wopf: "𝕎",
    wopf: "𝕨",
    wp: "℘",
    wr: "≀",
    wreath: "≀",
    Wscr: "𝒲",
    wscr: "𝓌",
    xcap: "⋂",
    xcirc: "◯",
    xcup: "⋃",
    xdtri: "▽",
    Xfr: "𝔛",
    xfr: "𝔵",
    xhArr: "⟺",
    xharr: "⟷",
    Xi: "Ξ",
    xi: "ξ",
    xlArr: "⟸",
    xlarr: "⟵",
    xmap: "⟼",
    xnis: "⋻",
    xodot: "⨀",
    Xopf: "𝕏",
    xopf: "𝕩",
    xoplus: "⨁",
    xotime: "⨂",
    xrArr: "⟹",
    xrarr: "⟶",
    Xscr: "𝒳",
    xscr: "𝓍",
    xsqcup: "⨆",
    xuplus: "⨄",
    xutri: "△",
    xvee: "⋁",
    xwedge: "⋀",
    Yacute: "Ý",
    yacute: "ý",
    YAcy: "Я",
    yacy: "я",
    Ycirc: "Ŷ",
    ycirc: "ŷ",
    Ycy: "Ы",
    ycy: "ы",
    yen: "¥",
    Yfr: "𝔜",
    yfr: "𝔶",
    YIcy: "Ї",
    yicy: "ї",
    Yopf: "𝕐",
    yopf: "𝕪",
    Yscr: "𝒴",
    yscr: "𝓎",
    YUcy: "Ю",
    yucy: "ю",
    Yuml: "Ÿ",
    yuml: "ÿ",
    Zacute: "Ź",
    zacute: "ź",
    Zcaron: "Ž",
    zcaron: "ž",
    Zcy: "З",
    zcy: "з",
    Zdot: "Ż",
    zdot: "ż",
    zeetrf: "ℨ",
    ZeroWidthSpace: "​",
    Zeta: "Ζ",
    zeta: "ζ",
    Zfr: "ℨ",
    zfr: "𝔷",
    ZHcy: "Ж",
    zhcy: "ж",
    zigrarr: "⇝",
    Zopf: "ℤ",
    zopf: "𝕫",
    Zscr: "𝒵",
    zscr: "𝓏",
    zwj: "‍",
    zwnj: "‌"
  }), t.entityMap = t.HTML_ENTITIES;
})(Hc);
var Ho = {}, Hu = $t.NAMESPACE, ro = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, il = new RegExp("[\\-\\.0-9" + ro.source.slice(1, -1) + "\\u00B7\\u0300-\\u036F\\u203F-\\u2040]"), al = new RegExp("^" + ro.source + il.source + "*(?::" + ro.source + il.source + "*)?$"), Cu = 0, Wt = 1, qr = 2, Ou = 3, Ur = 4, Vr = 5, Pu = 6, Hn = 7;
function eu(t, e) {
  this.message = t, this.locator = e, Error.captureStackTrace && Error.captureStackTrace(this, eu);
}
eu.prototype = new Error();
eu.prototype.name = eu.name;
function Gc() {
}
Gc.prototype = {
  parse: function(t, e, r) {
    var u = this.domBuilder;
    u.startDocument(), Wc(e, e = {}), P2(
      t,
      e,
      r,
      u,
      this.errorHandler
    ), u.endDocument();
  }
};
function P2(t, e, r, u, n) {
  function i(C) {
    if (C > 65535) {
      C -= 65536;
      var T = 55296 + (C >> 10), j = 56320 + (C & 1023);
      return String.fromCharCode(T, j);
    } else
      return String.fromCharCode(C);
  }
  function a(C) {
    var T = C.slice(1, -1);
    return Object.hasOwnProperty.call(r, T) ? r[T] : T.charAt(0) === "#" ? i(parseInt(T.substr(1).replace("x", "0x"))) : (n.error("entity not found:" + C), C);
  }
  function c(C) {
    if (C > v) {
      var T = t.substring(v, C).replace(/&#?\w+;/g, a);
      l && o(v), u.characters(T, 0, C - v), v = C;
    }
  }
  function o(C, T) {
    for (; C >= s && (T = p.exec(t)); )
      f = T.index, s = f + T[0].length, l.lineNumber++;
    l.columnNumber = C - f + 1;
  }
  for (var f = 0, s = 0, p = /.*(?:\r\n?|\n)|.*$/g, l = u.locator, h = [{ currentNSMap: e }], b = {}, v = 0; ; ) {
    try {
      var y = t.indexOf("<", v);
      if (y < 0) {
        if (!t.substr(v).match(/^\s*$/)) {
          var g = u.doc, D = g.createTextNode(t.substr(v));
          g.appendChild(D), u.currentElement = D;
        }
        return;
      }
      switch (y > v && c(y), t.charAt(y + 1)) {
        case "/":
          var A = t.indexOf(">", y + 3), E = t.substring(y + 2, A).replace(/[ \t\n\r]+$/g, ""), I = h.pop();
          A < 0 ? (E = t.substring(y + 2).replace(/[\s<].*/, ""), n.error("end tag name: " + E + " is not complete:" + I.tagName), A = y + 1 + E.length) : E.match(/\s</) && (E = E.replace(/[\s<].*/, ""), n.error("end tag name: " + E + " maybe not complete"), A = y + 1 + E.length);
          var k = I.localNSMap, d = I.tagName == E, O = d || I.tagName && I.tagName.toLowerCase() == E.toLowerCase();
          if (O) {
            if (u.endElement(I.uri, I.localName, E), k)
              for (var V in k)
                Object.prototype.hasOwnProperty.call(k, V) && u.endPrefixMapping(V);
            d || n.fatalError("end tag name: " + E + " is not match the current start tagName:" + I.tagName);
          } else
            h.push(I);
          A++;
          break;
        case "?":
          l && o(y), A = I2(t, y, u);
          break;
        case "!":
          l && o(y), A = L2(t, y, u, n);
          break;
        default:
          l && o(y);
          var z = new Jc(), W = h[h.length - 1].currentNSMap, A = $2(t, y, z, W, a, n), $ = z.length;
          if (!z.closed && M2(t, A, z.tagName, b) && (z.closed = !0, r.nbsp || n.warning("unclosed xml attribute")), l && $) {
            for (var L = ol(l, {}), q = 0; q < $; q++) {
              var _ = z[q];
              o(_.offset), _.locator = ol(l, {});
            }
            u.locator = L, sl(z, u, W) && h.push(z), u.locator = l;
          } else
            sl(z, u, W) && h.push(z);
          Hu.isHTML(z.uri) && !z.closed ? A = N2(t, A, z.tagName, a, u) : A++;
      }
    } catch (C) {
      if (C instanceof eu)
        throw C;
      n.error("element parse error: " + C), A = -1;
    }
    A > v ? v = A : c(Math.max(y, v) + 1);
  }
}
function ol(t, e) {
  return e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber, e;
}
function $2(t, e, r, u, n, i) {
  function a(l, h, b) {
    r.attributeNames.hasOwnProperty(l) && i.fatalError("Attribute " + l + " redefined"), r.addValue(
      l,
      // @see https://www.w3.org/TR/xml/#AVNormalize
      // since the xmldom sax parser does not "interpret" DTD the following is not implemented:
      // - recursive replacement of (DTD) entity references
      // - trimming and collapsing multiple spaces into a single one for attributes that are not of type CDATA
      h.replace(/[\t\n\r]/g, " ").replace(/&#?\w+;/g, n),
      b
    );
  }
  for (var c, o, f = ++e, s = Cu; ; ) {
    var p = t.charAt(f);
    switch (p) {
      case "=":
        if (s === Wt)
          c = t.slice(e, f), s = Ou;
        else if (s === qr)
          s = Ou;
        else
          throw new Error("attribute equal must after attrName");
        break;
      case "'":
      case '"':
        if (s === Ou || s === Wt)
          if (s === Wt && (i.warning('attribute value must after "="'), c = t.slice(e, f)), e = f + 1, f = t.indexOf(p, e), f > 0)
            o = t.slice(e, f), a(c, o, e - 1), s = Vr;
          else
            throw new Error("attribute value no end '" + p + "' match");
        else if (s == Ur)
          o = t.slice(e, f), a(c, o, e), i.warning('attribute "' + c + '" missed start quot(' + p + ")!!"), e = f + 1, s = Vr;
        else
          throw new Error('attribute value must after "="');
        break;
      case "/":
        switch (s) {
          case Cu:
            r.setTagName(t.slice(e, f));
          case Vr:
          case Pu:
          case Hn:
            s = Hn, r.closed = !0;
          case Ur:
          case Wt:
            break;
          case qr:
            r.closed = !0;
            break;
          default:
            throw new Error("attribute invalid close char('/')");
        }
        break;
      case "":
        return i.error("unexpected end of input"), s == Cu && r.setTagName(t.slice(e, f)), f;
      case ">":
        switch (s) {
          case Cu:
            r.setTagName(t.slice(e, f));
          case Vr:
          case Pu:
          case Hn:
            break;
          case Ur:
          case Wt:
            o = t.slice(e, f), o.slice(-1) === "/" && (r.closed = !0, o = o.slice(0, -1));
          case qr:
            s === qr && (o = c), s == Ur ? (i.warning('attribute "' + o + '" missed quot(")!'), a(c, o, e)) : ((!Hu.isHTML(u[""]) || !o.match(/^(?:disabled|checked|selected)$/i)) && i.warning('attribute "' + o + '" missed value!! "' + o + '" instead!!'), a(o, o, e));
            break;
          case Ou:
            throw new Error("attribute value missed!!");
        }
        return f;
      case "":
        p = " ";
      default:
        if (p <= " ")
          switch (s) {
            case Cu:
              r.setTagName(t.slice(e, f)), s = Pu;
              break;
            case Wt:
              c = t.slice(e, f), s = qr;
              break;
            case Ur:
              var o = t.slice(e, f);
              i.warning('attribute "' + o + '" missed quot(")!!'), a(c, o, e);
            case Vr:
              s = Pu;
              break;
          }
        else
          switch (s) {
            case qr:
              r.tagName, (!Hu.isHTML(u[""]) || !c.match(/^(?:disabled|checked|selected)$/i)) && i.warning('attribute "' + c + '" missed value!! "' + c + '" instead2!!'), a(c, c, e), e = f, s = Wt;
              break;
            case Vr:
              i.warning('attribute space is required"' + c + '"!!');
            case Pu:
              s = Wt, e = f;
              break;
            case Ou:
              s = Ur, e = f;
              break;
            case Hn:
              throw new Error("elements closed character '/' and '>' must be connected to");
          }
    }
    f++;
  }
}
function sl(t, e, r) {
  for (var u = t.tagName, n = null, p = t.length; p--; ) {
    var i = t[p], a = i.qName, c = i.value, l = a.indexOf(":");
    if (l > 0)
      var o = i.prefix = a.slice(0, l), f = a.slice(l + 1), s = o === "xmlns" && f;
    else
      f = a, o = null, s = a === "xmlns" && "";
    i.localName = f, s !== !1 && (n == null && (n = {}, Wc(r, r = {})), r[s] = n[s] = c, i.uri = Hu.XMLNS, e.startPrefixMapping(s, c));
  }
  for (var p = t.length; p--; ) {
    i = t[p];
    var o = i.prefix;
    o && (o === "xml" && (i.uri = Hu.XML), o !== "xmlns" && (i.uri = r[o || ""]));
  }
  var l = u.indexOf(":");
  l > 0 ? (o = t.prefix = u.slice(0, l), f = t.localName = u.slice(l + 1)) : (o = null, f = t.localName = u);
  var h = t.uri = r[o || ""];
  if (e.startElement(h, f, u, t), t.closed) {
    if (e.endElement(h, f, u), n)
      for (o in n)
        Object.prototype.hasOwnProperty.call(n, o) && e.endPrefixMapping(o);
  } else
    return t.currentNSMap = r, t.localNSMap = n, !0;
}
function N2(t, e, r, u, n) {
  if (/^(?:script|textarea)$/i.test(r)) {
    var i = t.indexOf("</" + r + ">", e), a = t.substring(e + 1, i);
    if (/[&<]/.test(a))
      return /^script$/i.test(r) ? (n.characters(a, 0, a.length), i) : (a = a.replace(/&#?\w+;/g, u), n.characters(a, 0, a.length), i);
  }
  return e + 1;
}
function M2(t, e, r, u) {
  var n = u[r];
  return n == null && (n = t.lastIndexOf("</" + r + ">"), n < e && (n = t.lastIndexOf("</" + r)), u[r] = n), n < e;
}
function Wc(t, e) {
  for (var r in t)
    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
function L2(t, e, r, u) {
  var n = t.charAt(e + 2);
  switch (n) {
    case "-":
      if (t.charAt(e + 3) === "-") {
        var i = t.indexOf("-->", e + 4);
        return i > e ? (r.comment(t, e + 4, i - e - 4), i + 3) : (u.error("Unclosed comment"), -1);
      } else
        return -1;
    default:
      if (t.substr(e + 3, 6) == "CDATA[") {
        var i = t.indexOf("]]>", e + 9);
        return r.startCDATA(), r.characters(t, e + 9, i - e - 9), r.endCDATA(), i + 3;
      }
      var a = B2(t, e), c = a.length;
      if (c > 1 && /!doctype/i.test(a[0][0])) {
        var o = a[1][0], f = !1, s = !1;
        c > 3 && (/^public$/i.test(a[2][0]) ? (f = a[3][0], s = c > 4 && a[4][0]) : /^system$/i.test(a[2][0]) && (s = a[3][0]));
        var p = a[c - 1];
        return r.startDTD(o, f, s), r.endDTD(), p.index + p[0].length;
      }
  }
  return -1;
}
function I2(t, e, r) {
  var u = t.indexOf("?>", e);
  if (u) {
    var n = t.substring(e, u).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
    return n ? (n[0].length, r.processingInstruction(n[1], n[2]), u + 2) : -1;
  }
  return -1;
}
function Jc() {
  this.attributeNames = {};
}
Jc.prototype = {
  setTagName: function(t) {
    if (!al.test(t))
      throw new Error("invalid tagName:" + t);
    this.tagName = t;
  },
  addValue: function(t, e, r) {
    if (!al.test(t))
      throw new Error("invalid attribute:" + t);
    this.attributeNames[t] = this.length, this[this.length++] = { qName: t, value: e, offset: r };
  },
  length: 0,
  getLocalName: function(t) {
    return this[t].localName;
  },
  getLocator: function(t) {
    return this[t].locator;
  },
  getQName: function(t) {
    return this[t].qName;
  },
  getURI: function(t) {
    return this[t].uri;
  },
  getValue: function(t) {
    return this[t].value;
  }
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
};
function B2(t, e) {
  var r, u = [], n = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  for (n.lastIndex = e, n.exec(t); r = n.exec(t); )
    if (u.push(r), r[1]) return u;
}
Ho.XMLReader = Gc;
Ho.ParseError = eu;
var R2 = $t, F2 = Pt, ll = Hc, Xc = Ho, j2 = F2.DOMImplementation, cl = R2.NAMESPACE, q2 = Xc.ParseError, U2 = Xc.XMLReader;
function Yc(t) {
  return t.replace(/\r[\n\u0085]/g, `
`).replace(/[\r\u0085\u2028]/g, `
`);
}
function Zc(t) {
  this.options = t || { locator: {} };
}
Zc.prototype.parseFromString = function(t, e) {
  var r = this.options, u = new U2(), n = r.domBuilder || new on(), i = r.errorHandler, a = r.locator, c = r.xmlns || {}, o = /\/x?html?$/.test(e), f = o ? ll.HTML_ENTITIES : ll.XML_ENTITIES;
  a && n.setDocumentLocator(a), u.errorHandler = V2(i, n, a), u.domBuilder = r.domBuilder || n, o && (c[""] = cl.HTML), c.xml = c.xml || cl.XML;
  var s = r.normalizeLineEndings || Yc;
  return t && typeof t == "string" ? u.parse(
    s(t),
    c,
    f
  ) : u.errorHandler.error("invalid doc source"), n.doc;
};
function V2(t, e, r) {
  if (!t) {
    if (e instanceof on)
      return e;
    t = e;
  }
  var u = {}, n = t instanceof Function;
  r = r || {};
  function i(a) {
    var c = t[a];
    !c && n && (c = t.length == 2 ? function(o) {
      t(a, o);
    } : t), u[a] = c && function(o) {
      c("[xmldom " + a + "]	" + o + uo(r));
    } || function() {
    };
  }
  return i("warning"), i("error"), i("fatalError"), u;
}
function on() {
  this.cdata = !1;
}
function zr(t, e) {
  e.lineNumber = t.lineNumber, e.columnNumber = t.columnNumber;
}
on.prototype = {
  startDocument: function() {
    this.doc = new j2().createDocument(null, null, null), this.locator && (this.doc.documentURI = this.locator.systemId);
  },
  startElement: function(t, e, r, u) {
    var n = this.doc, i = n.createElementNS(t, r || e), a = u.length;
    Gn(this, i), this.currentElement = i, this.locator && zr(this.locator, i);
    for (var c = 0; c < a; c++) {
      var t = u.getURI(c), o = u.getValue(c), r = u.getQName(c), f = n.createAttributeNS(t, r);
      this.locator && zr(u.getLocator(c), f), f.value = f.nodeValue = o, i.setAttributeNode(f);
    }
  },
  endElement: function(t, e, r) {
    var u = this.currentElement;
    u.tagName, this.currentElement = u.parentNode;
  },
  startPrefixMapping: function(t, e) {
  },
  endPrefixMapping: function(t) {
  },
  processingInstruction: function(t, e) {
    var r = this.doc.createProcessingInstruction(t, e);
    this.locator && zr(this.locator, r), Gn(this, r);
  },
  ignorableWhitespace: function(t, e, r) {
  },
  characters: function(t, e, r) {
    if (t = fl.apply(this, arguments), t) {
      if (this.cdata)
        var u = this.doc.createCDATASection(t);
      else
        var u = this.doc.createTextNode(t);
      this.currentElement ? this.currentElement.appendChild(u) : /^\s*$/.test(t) && this.doc.appendChild(u), this.locator && zr(this.locator, u);
    }
  },
  skippedEntity: function(t) {
  },
  endDocument: function() {
    this.doc.normalize();
  },
  setDocumentLocator: function(t) {
    (this.locator = t) && (t.lineNumber = 0);
  },
  //LexicalHandler
  comment: function(t, e, r) {
    t = fl.apply(this, arguments);
    var u = this.doc.createComment(t);
    this.locator && zr(this.locator, u), Gn(this, u);
  },
  startCDATA: function() {
    this.cdata = !0;
  },
  endCDATA: function() {
    this.cdata = !1;
  },
  startDTD: function(t, e, r) {
    var u = this.doc.implementation;
    if (u && u.createDocumentType) {
      var n = u.createDocumentType(t, e, r);
      this.locator && zr(this.locator, n), Gn(this, n), this.doc.doctype = n;
    }
  },
  /**
   * @see org.xml.sax.ErrorHandler
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
   */
  warning: function(t) {
    console.warn("[xmldom warning]	" + t, uo(this.locator));
  },
  error: function(t) {
    console.error("[xmldom error]	" + t, uo(this.locator));
  },
  fatalError: function(t) {
    throw new q2(t, this.locator);
  }
};
function uo(t) {
  if (t)
    return `
@` + (t.systemId || "") + "#[line:" + t.lineNumber + ",col:" + t.columnNumber + "]";
}
function fl(t, e, r) {
  return typeof t == "string" ? t.substr(e, r) : t.length >= e + r || e ? new java.lang.String(t, e, r) + "" : t;
}
"endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g, function(t) {
  on.prototype[t] = function() {
    return null;
  };
});
function Gn(t, e) {
  t.currentElement ? t.currentElement.appendChild(e) : t.doc.appendChild(e);
}
Qi.__DOMHandler = on;
Qi.normalizeLineEndings = Yc;
Qi.DOMParser = Zc;
var Kc = Pt;
Yi.DOMImplementation = Kc.DOMImplementation;
Yi.XMLSerializer = Kc.XMLSerializer;
Yi.DOMParser = Qi.DOMParser;
var Qe = {}, st = {}, ea = {}, pu = {}, hu = {};
Object.defineProperty(hu, "__esModule", { value: !0 });
const z2 = Kt;
class H2 extends z2.default {
  constructor(e, r) {
    super(e, r);
  }
}
hu.UniverseLogError = H2;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = hu;
  (function(r) {
    r.error = "error", r.warn = "warn", r.info = "info", r.http = "http", r.verbose = "verbose", r.debug = "debug", r.silly = "silly";
  })(t.LogLevel || (t.LogLevel = {})), function(r) {
    r.LEVELS_VALUES = {
      [r.error]: 0,
      [r.warn]: 1,
      [r.info]: 2,
      [r.http]: 3,
      [r.verbose]: 4,
      [r.debug]: 5,
      [r.silly]: 6
    }, r.LEVELS_BY_NAME = {
      [r.error]: r.error,
      [r.warn]: r.warn,
      [r.info]: r.info,
      [r.http]: r.http,
      [r.verbose]: r.verbose,
      [r.debug]: r.debug,
      [r.silly]: r.silly
    }, r.DEFAULT_LEVEL = r.info;
    function u(o) {
      if (typeof r.LEVELS_BY_NAME[o] > "u") {
        const f = Object.keys(r.LEVELS_BY_NAME).join(", ");
        throw new e.UniverseLogError(`There is no such log level: '${o}'. Available levels: [ ${f} ]`);
      }
      return r.LEVELS_BY_NAME[o];
    }
    r.valueOf = u;
    function n(o) {
      if (typeof r.LEVELS_VALUES[o] > "u") {
        const f = Object.keys(r.LEVELS_BY_NAME).join(", ");
        throw new e.UniverseLogError(`There is no such log level: '${o}'. Available levels: [ ${f} ]`);
      }
      return r.LEVELS_VALUES[o];
    }
    r.levelToValue = n;
    function i(o) {
      return n(o.level) <= n(o.threshold);
    }
    r.isLessOrEquallyVerbose = i;
    function a(o, f) {
      return r.LEVELS_VALUES[o] > r.LEVELS_VALUES[f] ? o : f;
    }
    r.moreVerbose = a;
    function c(o, f) {
      return r.LEVELS_VALUES[o] < r.LEVELS_VALUES[f] ? o : f;
    }
    r.lessVerbose = c;
  }(t.LogLevel || (t.LogLevel = {}));
})(pu);
var ta = {}, Go = {}, Qc = { exports: {} };
(function(t) {
  t.exports = function(r) {
    var u = {};
    function n(i) {
      if (u[i]) return u[i].exports;
      var a = u[i] = { i, l: !1, exports: {} };
      return r[i].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }
    return n.m = r, n.c = u, n.d = function(i, a, c) {
      n.o(i, a) || Object.defineProperty(i, a, { enumerable: !0, get: c });
    }, n.r = function(i) {
      typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(i, "__esModule", { value: !0 });
    }, n.t = function(i, a) {
      if (1 & a && (i = n(i)), 8 & a || 4 & a && typeof i == "object" && i && i.__esModule) return i;
      var c = /* @__PURE__ */ Object.create(null);
      if (n.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: i }), 2 & a && typeof i != "string") for (var o in i) n.d(c, o, (function(f) {
        return i[f];
      }).bind(null, o));
      return c;
    }, n.n = function(i) {
      var a = i && i.__esModule ? function() {
        return i.default;
      } : function() {
        return i;
      };
      return n.d(a, "a", a), a;
    }, n.o = function(i, a) {
      return Object.prototype.hasOwnProperty.call(i, a);
    }, n.p = "", n(n.s = 4);
  }([function(r, u, n) {
    var i = this && this.__importDefault || function(s) {
      return s && s.__esModule ? s : { default: s };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(1)), c = n(8), o = n(2), f = n(16);
    u.validatorSymbol = Symbol("validators"), u.Predicate = class {
      constructor(s, p = {}) {
        this.type = s, this.options = p, this.context = { validators: [] }, this.context = Object.assign({}, this.context, this.options);
        const l = this.type[0].toLowerCase() + this.type.slice(1);
        this.addValidator({ message: (h, b) => `Expected ${b && b.substring(this.type.length + 1) || "argument"} to be of type \`${this.type}\` but received type \`${a.default(h)}\``, validator: (h) => a.default[l](h) });
      }
      [o.testSymbol](s, p, l) {
        for (const { validator: h, message: b } of this.context.validators) {
          if (this.options.optional === !0 && s === void 0) continue;
          const v = h(s);
          if (v === !0) continue;
          let y = l;
          throw typeof l == "function" && (y = l()), y = y ? `${this.type} \`${y}\`` : this.type, new c.ArgumentError(b(s, y, v), p);
        }
      }
      get [u.validatorSymbol]() {
        return this.context.validators;
      }
      get not() {
        return f.not(this);
      }
      validate(s) {
        return this.addValidator({ message: (p, l, h) => typeof h == "string" ? `(${l}) ${h}` : h(l), validator: (p) => {
          const { message: l, validator: h } = s(p);
          return !!h || l;
        } });
      }
      is(s) {
        return this.addValidator({ message: (p, l, h) => h ? `(${l}) ${h}` : `Expected ${l} \`${p}\` to pass custom validation function`, validator: s });
      }
      addValidator(s) {
        return this.context.validators.push(s), this;
      }
    };
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = typeof URL > "u" ? n(15).URL : URL, { toString: a } = Object.prototype, c = (g) => (D) => typeof D === g, o = (g) => {
      const D = a.call(g).slice(8, -1);
      if (D) return D;
    }, f = (g) => (D) => o(D) === g;
    function s(g) {
      switch (g) {
        case null:
          return "null";
        case !0:
        case !1:
          return "boolean";
      }
      switch (typeof g) {
        case "undefined":
          return "undefined";
        case "string":
          return "string";
        case "number":
          return "number";
        case "bigint":
          return "bigint";
        case "symbol":
          return "symbol";
      }
      if (s.function_(g)) return "Function";
      if (s.observable(g)) return "Observable";
      if (s.array(g)) return "Array";
      if (s.buffer(g)) return "Buffer";
      const D = o(g);
      if (D) return D;
      if (g instanceof String || g instanceof Boolean || g instanceof Number) throw new TypeError("Please don't use object wrappers for primitive types");
      return "Object";
    }
    const p = (g) => typeof g == "object";
    s.undefined = c("undefined"), s.string = c("string"), s.number = c("number"), s.bigint = c("bigint"), s.function_ = c("function"), s.null_ = (g) => g === null, s.class_ = (g) => s.function_(g) && g.toString().startsWith("class "), s.boolean = (g) => g === !0 || g === !1, s.symbol = c("symbol"), s.numericString = (g) => s.string(g) && g.length > 0 && !Number.isNaN(Number(g)), s.array = Array.isArray, s.buffer = (g) => !s.nullOrUndefined(g) && !s.nullOrUndefined(g.constructor) && s.function_(g.constructor.isBuffer) && g.constructor.isBuffer(g), s.nullOrUndefined = (g) => s.null_(g) || s.undefined(g), s.object = (g) => !s.nullOrUndefined(g) && (s.function_(g) || p(g)), s.iterable = (g) => !s.nullOrUndefined(g) && s.function_(g[Symbol.iterator]), s.asyncIterable = (g) => !s.nullOrUndefined(g) && s.function_(g[Symbol.asyncIterator]), s.generator = (g) => s.iterable(g) && s.function_(g.next) && s.function_(g.throw), s.nativePromise = (g) => f("Promise")(g), s.promise = (g) => s.nativePromise(g) || ((D) => !s.null_(D) && p(D) && s.function_(D.then) && s.function_(D.catch))(g), s.generatorFunction = f("GeneratorFunction"), s.asyncFunction = f("AsyncFunction"), s.boundFunction = (g) => s.function_(g) && !g.hasOwnProperty("prototype"), s.regExp = f("RegExp"), s.date = f("Date"), s.error = f("Error"), s.map = (g) => f("Map")(g), s.set = (g) => f("Set")(g), s.weakMap = (g) => f("WeakMap")(g), s.weakSet = (g) => f("WeakSet")(g), s.int8Array = f("Int8Array"), s.uint8Array = f("Uint8Array"), s.uint8ClampedArray = f("Uint8ClampedArray"), s.int16Array = f("Int16Array"), s.uint16Array = f("Uint16Array"), s.int32Array = f("Int32Array"), s.uint32Array = f("Uint32Array"), s.float32Array = f("Float32Array"), s.float64Array = f("Float64Array"), s.bigint64Array = f("BigInt64Array"), s.biguint64Array = f("BigUint64Array"), s.arrayBuffer = f("ArrayBuffer"), s.sharedArrayBuffer = f("SharedArrayBuffer"), s.dataView = f("DataView"), s.directInstanceOf = (g, D) => Object.getPrototypeOf(g) === D.prototype, s.urlInstance = (g) => f("URL")(g), s.urlString = (g) => {
      if (!s.string(g)) return !1;
      try {
        return new i(g), !0;
      } catch {
        return !1;
      }
    }, s.truthy = (g) => !!g, s.falsy = (g) => !g, s.nan = (g) => Number.isNaN(g);
    const l = /* @__PURE__ */ new Set(["undefined", "string", "number", "bigint", "boolean", "symbol"]);
    s.primitive = (g) => s.null_(g) || l.has(typeof g), s.integer = (g) => Number.isInteger(g), s.safeInteger = (g) => Number.isSafeInteger(g), s.plainObject = (g) => {
      if (o(g) !== "Object") return !1;
      const D = Object.getPrototypeOf(g);
      return D === null || D === Object.getPrototypeOf({});
    };
    const h = /* @__PURE__ */ new Set(["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array", "BigInt64Array", "BigUint64Array"]);
    s.typedArray = (g) => {
      const D = o(g);
      return D !== void 0 && h.has(D);
    }, s.arrayLike = (g) => !s.nullOrUndefined(g) && !s.function_(g) && ((D) => s.safeInteger(D) && D >= 0)(g.length), s.inRange = (g, D) => {
      if (s.number(D)) return g >= Math.min(0, D) && g <= Math.max(D, 0);
      if (s.array(D) && D.length === 2) return g >= Math.min(...D) && g <= Math.max(...D);
      throw new TypeError(`Invalid range: ${JSON.stringify(D)}`);
    };
    const b = ["innerHTML", "ownerDocument", "style", "attributes", "nodeValue"];
    s.domElement = (g) => s.object(g) && g.nodeType === 1 && s.string(g.nodeName) && !s.plainObject(g) && b.every((D) => D in g), s.observable = (g) => !!g && (!(!g[Symbol.observable] || g !== g[Symbol.observable]()) || !(!g["@@observable"] || g !== g["@@observable"]())), s.nodeStream = (g) => !s.nullOrUndefined(g) && p(g) && s.function_(g.pipe) && !s.observable(g), s.infinite = (g) => g === 1 / 0 || g === -1 / 0;
    const v = (g) => (D) => s.integer(D) && Math.abs(D % 2) === g;
    s.evenInteger = v(0), s.oddInteger = v(1), s.emptyArray = (g) => s.array(g) && g.length === 0, s.nonEmptyArray = (g) => s.array(g) && g.length > 0, s.emptyString = (g) => s.string(g) && g.length === 0, s.nonEmptyString = (g) => s.string(g) && g.length > 0, s.emptyStringOrWhitespace = (g) => s.emptyString(g) || ((D) => s.string(D) && /\S/.test(D) === !1)(g), s.emptyObject = (g) => s.object(g) && !s.map(g) && !s.set(g) && Object.keys(g).length === 0, s.nonEmptyObject = (g) => s.object(g) && !s.map(g) && !s.set(g) && Object.keys(g).length > 0, s.emptySet = (g) => s.set(g) && g.size === 0, s.nonEmptySet = (g) => s.set(g) && g.size > 0, s.emptyMap = (g) => s.map(g) && g.size === 0, s.nonEmptyMap = (g) => s.map(g) && g.size > 0;
    const y = (g, D, E) => {
      if (s.function_(D) === !1) throw new TypeError(`Invalid predicate: ${JSON.stringify(D)}`);
      if (E.length === 0) throw new TypeError("Invalid number of values");
      return g.call(E, D);
    };
    s.any = (g, ...D) => y(Array.prototype.some, g, D), s.all = (g, ...D) => y(Array.prototype.every, g, D), Object.defineProperties(s, { class: { value: s.class_ }, function: { value: s.function_ }, null: { value: s.null_ } }), r.exports = s, u.default = s;
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.testSymbol = Symbol("test"), u.isPredicate = (i) => !!(i && i[u.testSymbol]);
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.default = (i, a, c = 5) => {
      const o = [];
      for (const f of a) if (!i.has(f) && (o.push(f), o.length === c)) return o;
      return o.length === 0 || o;
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(v) {
      return v && v.__esModule ? v : { default: v };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(10)), c = n(11), o = n(0);
    u.Predicate = o.Predicate;
    const f = n(2), s = i(n(17)), p = i(n(6)), l = i(n(9)), h = (v, y, g) => {
      if (!f.isPredicate(y) && typeof y != "string") throw new TypeError(`Expected second argument to be a predicate or a string, got \`${typeof y}\``);
      if (f.isPredicate(y)) {
        const D = a.default();
        l.default(v, () => c.inferLabel(D), y);
      } else l.default(v, y, g);
    };
    Object.defineProperties(h, { isValid: { value: (v, y) => {
      try {
        return h(v, y), !0;
      } catch {
        return !1;
      }
    } }, create: { value: (v, y) => (g) => {
      if (f.isPredicate(v)) {
        const D = a.default();
        l.default(g, () => c.inferLabel(D), v);
      } else l.default(g, v, y);
    } } }), u.default = p.default(s.default(h));
    var b = n(6);
    u.StringPredicate = b.StringPredicate, u.NumberPredicate = b.NumberPredicate, u.BooleanPredicate = b.BooleanPredicate, u.ArrayPredicate = b.ArrayPredicate, u.ObjectPredicate = b.ObjectPredicate, u.DatePredicate = b.DatePredicate, u.ErrorPredicate = b.ErrorPredicate, u.MapPredicate = b.MapPredicate, u.WeakMapPredicate = b.WeakMapPredicate, u.SetPredicate = b.SetPredicate, u.WeakSetPredicate = b.WeakSetPredicate, u.AnyPredicate = b.AnyPredicate;
  }, function(r, u, n) {
    (function(i) {
      var a = 200, c = "__lodash_hash_undefined__", o = 1, f = 2, s = 9007199254740991, p = "[object Arguments]", l = "[object Array]", h = "[object AsyncFunction]", b = "[object Boolean]", v = "[object Date]", y = "[object Error]", g = "[object Function]", D = "[object GeneratorFunction]", E = "[object Map]", I = "[object Number]", k = "[object Null]", d = "[object Object]", O = "[object Proxy]", V = "[object RegExp]", z = "[object Set]", W = "[object String]", A = "[object Symbol]", $ = "[object Undefined]", L = "[object ArrayBuffer]", q = "[object DataView]", _ = /^\[object .+?Constructor\]$/, C = /^(?:0|[1-9]\d*)$/, T = {};
      T["[object Float32Array]"] = T["[object Float64Array]"] = T["[object Int8Array]"] = T["[object Int16Array]"] = T["[object Int32Array]"] = T["[object Uint8Array]"] = T["[object Uint8ClampedArray]"] = T["[object Uint16Array]"] = T["[object Uint32Array]"] = !0, T[p] = T[l] = T[L] = T[b] = T[q] = T[v] = T[y] = T[g] = T[E] = T[I] = T[d] = T[V] = T[z] = T[W] = T["[object WeakMap]"] = !1;
      var j = typeof N == "object" && N && N.Object === Object && N, oe = typeof self == "object" && self && self.Object === Object && self, K = j || oe || Function("return this")(), te = u && !u.nodeType && u, ee = te && typeof i == "object" && i && !i.nodeType && i, Lt = ee && ee.exports === te, Z = Lt && j.process, U = function() {
        try {
          return Z && Z.binding && Z.binding("util");
        } catch {
        }
      }(), Fe = U && U.isTypedArray;
      function je(x, S) {
        for (var M = -1, B = x == null ? 0 : x.length; ++M < B; ) if (S(x[M], M, x)) return !0;
        return !1;
      }
      function fe(x) {
        var S = -1, M = Array(x.size);
        return x.forEach(function(B, ae) {
          M[++S] = [ae, B];
        }), M;
      }
      function rr(x) {
        var S = -1, M = Array(x.size);
        return x.forEach(function(B) {
          M[++S] = B;
        }), M;
      }
      var ur, yu, Dr, yn = Array.prototype, vn = Function.prototype, Tr = Object.prototype, vu = K["__core-js_shared__"], xn = vn.toString, Ge = Tr.hasOwnProperty, wn = (ur = /[^.]+$/.exec(vu && vu.keys && vu.keys.IE_PROTO || "")) ? "Symbol(src)_1." + ur : "", En = Tr.toString, Ta = RegExp("^" + xn.call(Ge).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), An = Lt ? K.Buffer : void 0, kr = K.Symbol, _n = K.Uint8Array, Sn = Tr.propertyIsEnumerable, ka = yn.splice, We = kr ? kr.toStringTag : void 0, Cr = Object.getOwnPropertySymbols, Dn = An ? An.isBuffer : void 0, Je = (yu = Object.keys, Dr = Object, function(x) {
        return yu(Dr(x));
      }), Or = jt(K, "DataView"), It = jt(K, "Map"), xu = jt(K, "Promise"), Pr = jt(K, "Set"), Bt = jt(K, "WeakMap"), Rt = jt(Object, "create"), Tn = wt(Or), Ca = wt(It), xt = wt(xu), kn = wt(Pr), Oa = wt(Bt), Cn = kr ? kr.prototype : void 0, nr = Cn ? Cn.valueOf : void 0;
      function qe(x) {
        var S = -1, M = x == null ? 0 : x.length;
        for (this.clear(); ++S < M; ) {
          var B = x[S];
          this.set(B[0], B[1]);
        }
      }
      function Ue(x) {
        var S = -1, M = x == null ? 0 : x.length;
        for (this.clear(); ++S < M; ) {
          var B = x[S];
          this.set(B[0], B[1]);
        }
      }
      function et(x) {
        var S = -1, M = x == null ? 0 : x.length;
        for (this.clear(); ++S < M; ) {
          var B = x[S];
          this.set(B[0], B[1]);
        }
      }
      function Ft(x) {
        var S = -1, M = x == null ? 0 : x.length;
        for (this.__data__ = new et(); ++S < M; ) this.add(x[S]);
      }
      function Pe(x) {
        var S = this.__data__ = new Ue(x);
        this.size = S.size;
      }
      function Pa(x, S) {
        var M = Mr(x), B = !M && Na(x), ae = !M && !B && Eu(x), J = !M && !B && !ae && Bn(x), le = M || B || ae || J, pe = le ? function(ce, Xe) {
          for (var Ce = -1, ve = Array(ce); ++Ce < ce; ) ve[Ce] = Xe(Ce);
          return ve;
        }(x.length, String) : [], Ve = pe.length;
        for (var ge in x) !Ge.call(x, ge) || le && (ge == "length" || ae && (ge == "offset" || ge == "parent") || J && (ge == "buffer" || ge == "byteLength" || ge == "byteOffset") || tt(ge, Ve)) || pe.push(ge);
        return pe;
      }
      function $r(x, S) {
        for (var M = x.length; M--; ) if (Mn(x[M][0], S)) return M;
        return -1;
      }
      function ir(x) {
        return x == null ? x === void 0 ? $ : k : We && We in Object(x) ? function(S) {
          var M = Ge.call(S, We), B = S[We];
          try {
            S[We] = void 0;
            var ae = !0;
          } catch {
          }
          var J = En.call(S);
          return ae && (M ? S[We] = B : delete S[We]), J;
        }(x) : function(S) {
          return En.call(S);
        }(x);
      }
      function On(x) {
        return ar(x) && ir(x) == p;
      }
      function Pn(x, S, M, B, ae) {
        return x === S || (x == null || S == null || !ar(x) && !ar(S) ? x != x && S != S : function(J, le, pe, Ve, ge, ce) {
          var Xe = Mr(J), Ce = Mr(le), ve = Xe ? l : ct(J), Ye = Ce ? l : ct(le), qt = (ve = ve == p ? d : ve) == d, Lr = (Ye = Ye == p ? d : Ye) == d, Ut = ve == Ye;
          if (Ut && Eu(J)) {
            if (!Eu(le)) return !1;
            Xe = !0, qt = !1;
          }
          if (Ut && !qt) return ce || (ce = new Pe()), Xe || Bn(J) ? lt(J, le, pe, Ve, ge, ce) : function(re, Q, rt, dt, _u, me, ut) {
            switch (rt) {
              case q:
                if (re.byteLength != Q.byteLength || re.byteOffset != Q.byteOffset) return !1;
                re = re.buffer, Q = Q.buffer;
              case L:
                return !(re.byteLength != Q.byteLength || !me(new _n(re), new _n(Q)));
              case b:
              case v:
              case I:
                return Mn(+re, +Q);
              case y:
                return re.name == Q.name && re.message == Q.message;
              case V:
              case W:
                return re == Q + "";
              case E:
                var pt = fe;
              case z:
                var sr = dt & o;
                if (pt || (pt = rr), re.size != Q.size && !sr) return !1;
                var Ir = ut.get(re);
                if (Ir) return Ir == Q;
                dt |= f, ut.set(re, Q);
                var Vt = lt(pt(re), pt(Q), dt, _u, me, ut);
                return ut.delete(re), Vt;
              case A:
                if (nr) return nr.call(re) == nr.call(Q);
            }
            return !1;
          }(J, le, ve, pe, Ve, ge, ce);
          if (!(pe & o)) {
            var or = qt && Ge.call(J, "__wrapped__"), Au = Lr && Ge.call(le, "__wrapped__");
            if (or || Au) {
              var La = or ? J.value() : J, Ia = Au ? le.value() : le;
              return ce || (ce = new Pe()), ge(La, Ia, pe, Ve, ce);
            }
          }
          return Ut ? (ce || (ce = new Pe()), function(re, Q, rt, dt, _u, me) {
            var ut = rt & o, pt = Nn(re), sr = pt.length, Ir = Nn(Q).length;
            if (sr != Ir && !ut) return !1;
            for (var Vt = sr; Vt--; ) {
              var Se = pt[Vt];
              if (!(ut ? Se in Q : Ge.call(Q, Se))) return !1;
            }
            var Su = me.get(re);
            if (Su && me.get(Q)) return Su == Q;
            var Br = !0;
            me.set(re, Q), me.set(Q, re);
            for (var zt = ut; ++Vt < sr; ) {
              Se = pt[Vt];
              var Rr = re[Se], Ht = Q[Se];
              if (dt) var Rn = ut ? dt(Ht, Rr, Se, Q, re, me) : dt(Rr, Ht, Se, re, Q, me);
              if (!(Rn === void 0 ? Rr === Ht || _u(Rr, Ht, rt, dt, me) : Rn)) {
                Br = !1;
                break;
              }
              zt || (zt = Se == "constructor");
            }
            if (Br && !zt) {
              var lr = re.constructor, cr = Q.constructor;
              lr != cr && "constructor" in re && "constructor" in Q && !(typeof lr == "function" && lr instanceof lr && typeof cr == "function" && cr instanceof cr) && (Br = !1);
            }
            return me.delete(re), me.delete(Q), Br;
          }(J, le, pe, Ve, ge, ce)) : !1;
        }(x, S, M, B, Pn, ae));
      }
      function $n(x) {
        return !(!In(x) || (S = x, wn && wn in S)) && (ft(x) ? Ta : _).test(wt(x));
        var S;
      }
      function wu(x) {
        if (M = (S = x) && S.constructor, B = typeof M == "function" && M.prototype || Tr, S !== B) return Je(x);
        var S, M, B, ae = [];
        for (var J in Object(x)) Ge.call(x, J) && J != "constructor" && ae.push(J);
        return ae;
      }
      function lt(x, S, M, B, ae, J) {
        var le = M & o, pe = x.length, Ve = S.length;
        if (pe != Ve && !(le && Ve > pe)) return !1;
        var ge = J.get(x);
        if (ge && J.get(S)) return ge == S;
        var ce = -1, Xe = !0, Ce = M & f ? new Ft() : void 0;
        for (J.set(x, S), J.set(S, x); ++ce < pe; ) {
          var ve = x[ce], Ye = S[ce];
          if (B) var qt = le ? B(Ye, ve, ce, S, x, J) : B(ve, Ye, ce, x, S, J);
          if (qt !== void 0) {
            if (qt) continue;
            Xe = !1;
            break;
          }
          if (Ce) {
            if (!je(S, function(Lr, Ut) {
              if (or = Ut, !Ce.has(or) && (ve === Lr || ae(ve, Lr, M, B, J))) return Ce.push(Ut);
              var or;
            })) {
              Xe = !1;
              break;
            }
          } else if (ve !== Ye && !ae(ve, Ye, M, B, J)) {
            Xe = !1;
            break;
          }
        }
        return J.delete(x), J.delete(S), Xe;
      }
      function Nn(x) {
        return function(S, M, B) {
          var ae = M(S);
          return Mr(S) ? ae : function(J, le) {
            for (var pe = -1, Ve = le.length, ge = J.length; ++pe < Ve; ) J[ge + pe] = le[pe];
            return J;
          }(ae, B(S));
        }(x, Ma, $a);
      }
      function Nr(x, S) {
        var M, B, ae = x.__data__;
        return ((B = typeof (M = S)) == "string" || B == "number" || B == "symbol" || B == "boolean" ? M !== "__proto__" : M === null) ? ae[typeof S == "string" ? "string" : "hash"] : ae.map;
      }
      function jt(x, S) {
        var M = function(B, ae) {
          return B == null ? void 0 : B[ae];
        }(x, S);
        return $n(M) ? M : void 0;
      }
      qe.prototype.clear = function() {
        this.__data__ = Rt ? Rt(null) : {}, this.size = 0;
      }, qe.prototype.delete = function(x) {
        var S = this.has(x) && delete this.__data__[x];
        return this.size -= S ? 1 : 0, S;
      }, qe.prototype.get = function(x) {
        var S = this.__data__;
        if (Rt) {
          var M = S[x];
          return M === c ? void 0 : M;
        }
        return Ge.call(S, x) ? S[x] : void 0;
      }, qe.prototype.has = function(x) {
        var S = this.__data__;
        return Rt ? S[x] !== void 0 : Ge.call(S, x);
      }, qe.prototype.set = function(x, S) {
        var M = this.__data__;
        return this.size += this.has(x) ? 0 : 1, M[x] = Rt && S === void 0 ? c : S, this;
      }, Ue.prototype.clear = function() {
        this.__data__ = [], this.size = 0;
      }, Ue.prototype.delete = function(x) {
        var S = this.__data__, M = $r(S, x);
        return !(M < 0 || (M == S.length - 1 ? S.pop() : ka.call(S, M, 1), --this.size, 0));
      }, Ue.prototype.get = function(x) {
        var S = this.__data__, M = $r(S, x);
        return M < 0 ? void 0 : S[M][1];
      }, Ue.prototype.has = function(x) {
        return $r(this.__data__, x) > -1;
      }, Ue.prototype.set = function(x, S) {
        var M = this.__data__, B = $r(M, x);
        return B < 0 ? (++this.size, M.push([x, S])) : M[B][1] = S, this;
      }, et.prototype.clear = function() {
        this.size = 0, this.__data__ = { hash: new qe(), map: new (It || Ue)(), string: new qe() };
      }, et.prototype.delete = function(x) {
        var S = Nr(this, x).delete(x);
        return this.size -= S ? 1 : 0, S;
      }, et.prototype.get = function(x) {
        return Nr(this, x).get(x);
      }, et.prototype.has = function(x) {
        return Nr(this, x).has(x);
      }, et.prototype.set = function(x, S) {
        var M = Nr(this, x), B = M.size;
        return M.set(x, S), this.size += M.size == B ? 0 : 1, this;
      }, Ft.prototype.add = Ft.prototype.push = function(x) {
        return this.__data__.set(x, c), this;
      }, Ft.prototype.has = function(x) {
        return this.__data__.has(x);
      }, Pe.prototype.clear = function() {
        this.__data__ = new Ue(), this.size = 0;
      }, Pe.prototype.delete = function(x) {
        var S = this.__data__, M = S.delete(x);
        return this.size = S.size, M;
      }, Pe.prototype.get = function(x) {
        return this.__data__.get(x);
      }, Pe.prototype.has = function(x) {
        return this.__data__.has(x);
      }, Pe.prototype.set = function(x, S) {
        var M = this.__data__;
        if (M instanceof Ue) {
          var B = M.__data__;
          if (!It || B.length < a - 1) return B.push([x, S]), this.size = ++M.size, this;
          M = this.__data__ = new et(B);
        }
        return M.set(x, S), this.size = M.size, this;
      };
      var $a = Cr ? function(x) {
        return x == null ? [] : (x = Object(x), function(S, M) {
          for (var B = -1, ae = S == null ? 0 : S.length, J = 0, le = []; ++B < ae; ) {
            var pe = S[B];
            M(pe, B, S) && (le[J++] = pe);
          }
          return le;
        }(Cr(x), function(S) {
          return Sn.call(x, S);
        }));
      } : function() {
        return [];
      }, ct = ir;
      function tt(x, S) {
        return !!(S = S ?? s) && (typeof x == "number" || C.test(x)) && x > -1 && x % 1 == 0 && x < S;
      }
      function wt(x) {
        if (x != null) {
          try {
            return xn.call(x);
          } catch {
          }
          try {
            return x + "";
          } catch {
          }
        }
        return "";
      }
      function Mn(x, S) {
        return x === S || x != x && S != S;
      }
      (Or && ct(new Or(new ArrayBuffer(1))) != q || It && ct(new It()) != E || xu && ct(xu.resolve()) != "[object Promise]" || Pr && ct(new Pr()) != z || Bt && ct(new Bt()) != "[object WeakMap]") && (ct = function(x) {
        var S = ir(x), M = S == d ? x.constructor : void 0, B = M ? wt(M) : "";
        if (B) switch (B) {
          case Tn:
            return q;
          case Ca:
            return E;
          case xt:
            return "[object Promise]";
          case kn:
            return z;
          case Oa:
            return "[object WeakMap]";
        }
        return S;
      });
      var Na = On(/* @__PURE__ */ function() {
        return arguments;
      }()) ? On : function(x) {
        return ar(x) && Ge.call(x, "callee") && !Sn.call(x, "callee");
      }, Mr = Array.isArray, Eu = Dn || function() {
        return !1;
      };
      function ft(x) {
        if (!In(x)) return !1;
        var S = ir(x);
        return S == g || S == D || S == h || S == O;
      }
      function Ln(x) {
        return typeof x == "number" && x > -1 && x % 1 == 0 && x <= s;
      }
      function In(x) {
        var S = typeof x;
        return x != null && (S == "object" || S == "function");
      }
      function ar(x) {
        return x != null && typeof x == "object";
      }
      var Bn = Fe ? /* @__PURE__ */ function(x) {
        return function(S) {
          return x(S);
        };
      }(Fe) : function(x) {
        return ar(x) && Ln(x.length) && !!T[ir(x)];
      };
      function Ma(x) {
        return (S = x) != null && Ln(S.length) && !ft(S) ? Pa(x) : wu(x);
        var S;
      }
      i.exports = function(x, S) {
        return Pn(x, S);
      };
    }).call(this, n(23)(r));
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = n(18);
    u.StringPredicate = i.StringPredicate;
    const a = n(20);
    u.NumberPredicate = a.NumberPredicate;
    const c = n(21);
    u.BooleanPredicate = c.BooleanPredicate;
    const o = n(0), f = n(22);
    u.ArrayPredicate = f.ArrayPredicate;
    const s = n(24);
    u.ObjectPredicate = s.ObjectPredicate;
    const p = n(29);
    u.DatePredicate = p.DatePredicate;
    const l = n(30);
    u.ErrorPredicate = l.ErrorPredicate;
    const h = n(31);
    u.MapPredicate = h.MapPredicate;
    const b = n(32);
    u.WeakMapPredicate = b.WeakMapPredicate;
    const v = n(33);
    u.SetPredicate = v.SetPredicate;
    const y = n(34);
    u.WeakSetPredicate = y.WeakSetPredicate;
    const g = n(35);
    u.AnyPredicate = g.AnyPredicate, u.default = (D, E) => (Object.defineProperties(D, { string: { get: () => new i.StringPredicate(E) }, number: { get: () => new a.NumberPredicate(E) }, boolean: { get: () => new c.BooleanPredicate(E) }, undefined: { get: () => new o.Predicate("undefined", E) }, null: { get: () => new o.Predicate("null", E) }, nullOrUndefined: { get: () => new o.Predicate("nullOrUndefined", E) }, nan: { get: () => new o.Predicate("nan", E) }, symbol: { get: () => new o.Predicate("symbol", E) }, array: { get: () => new f.ArrayPredicate(E) }, object: { get: () => new s.ObjectPredicate(E) }, date: { get: () => new p.DatePredicate(E) }, error: { get: () => new l.ErrorPredicate(E) }, map: { get: () => new h.MapPredicate(E) }, weakMap: { get: () => new b.WeakMapPredicate(E) }, set: { get: () => new v.SetPredicate(E) }, weakSet: { get: () => new y.WeakSetPredicate(E) }, function: { get: () => new o.Predicate("Function", E) }, buffer: { get: () => new o.Predicate("Buffer", E) }, regExp: { get: () => new o.Predicate("RegExp", E) }, promise: { get: () => new o.Predicate("Promise", E) }, typedArray: { get: () => new o.Predicate("TypedArray", E) }, int8Array: { get: () => new o.Predicate("Int8Array", E) }, uint8Array: { get: () => new o.Predicate("Uint8Array", E) }, uint8ClampedArray: { get: () => new o.Predicate("Uint8ClampedArray", E) }, int16Array: { get: () => new o.Predicate("Int16Array", E) }, uint16Array: { get: () => new o.Predicate("Uint16Array", E) }, int32Array: { get: () => new o.Predicate("Int32Array", E) }, uint32Array: { get: () => new o.Predicate("Uint32Array", E) }, float32Array: { get: () => new o.Predicate("Float32Array", E) }, float64Array: { get: () => new o.Predicate("Float64Array", E) }, arrayBuffer: { get: () => new o.Predicate("ArrayBuffer", E) }, dataView: { get: () => new o.Predicate("DataView", E) }, iterable: { get: () => new o.Predicate("Iterable", E) }, any: { value: (...I) => new g.AnyPredicate(I, E) } }), D);
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(4));
    u.default = (c, o) => {
      try {
        for (const f of c) a.default(f, o);
        return !0;
      } catch (f) {
        return f.message;
      }
    };
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.ArgumentError = class extends Error {
      constructor(i, a) {
        super(i), "captureStackTrace" in Error && Error.captureStackTrace(this, a), this.name = "ArgumentError";
      }
    };
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = n(2);
    u.default = function a(c, o, f) {
      f[i.testSymbol](c, a, o);
    };
  }, function(r, u, n) {
    const i = () => {
      const a = Error.prepareStackTrace;
      Error.prepareStackTrace = (o, f) => f;
      const c = new Error().stack.slice(1);
      return Error.prepareStackTrace = a, c;
    };
    r.exports = i, r.exports.default = i;
  }, function(r, u, n) {
    var i = this && this.__importStar || function(p) {
      if (p && p.__esModule) return p;
      var l = {};
      if (p != null) for (var h in p) Object.hasOwnProperty.call(p, h) && (l[h] = p[h]);
      return l.default = p, l;
    }, a = this && this.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const c = i(n(12)), o = a(n(13)), f = a(n(14)), s = /^.*?\((.*?)[,)]/;
    u.inferLabel = (p) => {
      if (!f.default) return;
      const l = p[1], h = l.getFileName(), b = l.getLineNumber(), v = l.getColumnNumber();
      if (!h || b === null || v === null) return;
      let y = [];
      try {
        y = c.readFileSync(h, "utf8").split(`
`);
      } catch {
        return;
      }
      let g = y[b - 1];
      if (!g) return;
      g = g.slice(v - 1);
      const D = s.exec(g);
      if (!D || !D[1]) return;
      const E = D[1];
      return o.default(E) || o.default(E.split(".").pop()) ? E : void 0;
    };
  }, function(r, u) {
    r.exports = Ie;
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = /^[a-z$_][a-z$_0-9]*$/i, a = /* @__PURE__ */ new Set(["undefined", "null", "true", "false", "super", "this", "Infinity", "NaN"]);
    u.default = (c) => c && !a.has(c) && i.test(c);
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 }), u.default = !!(typeof process < "u" && process.versions && process.versions.node);
  }, function(r, u) {
    r.exports = Ie;
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = n(0);
    u.not = (a) => {
      const c = a.addValidator;
      return a.addValidator = (o) => {
        const f = o.validator, s = o.message;
        return o.message = (p, l) => `[NOT] ${s(p, l)}`, o.validator = (p) => !f(p), a[i.validatorSymbol].push(o), a.addValidator = c, a;
      }, a;
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(c) {
      return c && c.__esModule ? c : { default: c };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(6));
    u.default = (c) => (Object.defineProperties(c, { optional: { get: () => a.default({}, { optional: !0 }) } }), c);
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(f) {
      return f && f.__esModule ? f : { default: f };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(1)), c = i(n(19)), o = n(0);
    u.StringPredicate = class extends o.Predicate {
      constructor(f) {
        super("string", f);
      }
      length(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to have length \`${f}\`, got \`${s}\``, validator: (s) => s.length === f });
      }
      minLength(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to have a minimum length of \`${f}\`, got \`${s}\``, validator: (s) => s.length >= f });
      }
      maxLength(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to have a maximum length of \`${f}\`, got \`${s}\``, validator: (s) => s.length <= f });
      }
      matches(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to match \`${f}\`, got \`${s}\``, validator: (s) => f.test(s) });
      }
      startsWith(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to start with \`${f}\`, got \`${s}\``, validator: (s) => s.startsWith(f) });
      }
      endsWith(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to end with \`${f}\`, got \`${s}\``, validator: (s) => s.endsWith(f) });
      }
      includes(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to include \`${f}\`, got \`${s}\``, validator: (s) => s.includes(f) });
      }
      oneOf(f) {
        return this.addValidator({ message: (s, p) => {
          let l = JSON.stringify(f);
          if (f.length > 10) {
            const h = f.length - 10;
            l = JSON.stringify(f.slice(0, 10)).replace(/]$/, `,…+${h} more]`);
          }
          return `Expected ${p} to be one of \`${l}\`, got \`${s}\``;
        }, validator: (s) => f.includes(s) });
      }
      get empty() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be empty, got \`${f}\``, validator: (f) => f === "" });
      }
      get nonEmpty() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to not be empty`, validator: (f) => f !== "" });
      }
      equals(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to be equal to \`${f}\`, got \`${s}\``, validator: (s) => s === f });
      }
      get alphanumeric() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be alphanumeric, got \`${f}\``, validator: (f) => /^[a-z\d]+$/i.test(f) });
      }
      get alphabetical() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be alphabetical, got \`${f}\``, validator: (f) => /^[a-z]+$/gi.test(f) });
      }
      get numeric() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be numeric, got \`${f}\``, validator: (f) => /^(\+|-)?\d+$/i.test(f) });
      }
      get date() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be a date, got \`${f}\``, validator: c.default });
      }
      get lowercase() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be lowercase, got \`${f}\``, validator: (f) => f.trim() !== "" && f === f.toLowerCase() });
      }
      get uppercase() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be uppercase, got \`${f}\``, validator: (f) => f.trim() !== "" && f === f.toUpperCase() });
      }
      get url() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be a URL, got \`${f}\``, validator: a.default.urlString });
      }
    };
  }, function(r, u, n) {
    r.exports = function(i) {
      return !isNaN(Date.parse(i));
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(o) {
      return o && o.__esModule ? o : { default: o };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(1)), c = n(0);
    u.NumberPredicate = class extends c.Predicate {
      constructor(o) {
        super("number", o);
      }
      inRange(o, f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to be in range [${o}..${f}], got ${s}`, validator: (s) => a.default.inRange(s, [o, f]) });
      }
      greaterThan(o) {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be greater than ${o}, got ${f}`, validator: (f) => f > o });
      }
      greaterThanOrEqual(o) {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be greater than or equal to ${o}, got ${f}`, validator: (f) => f >= o });
      }
      lessThan(o) {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be less than ${o}, got ${f}`, validator: (f) => f < o });
      }
      lessThanOrEqual(o) {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be less than or equal to ${o}, got ${f}`, validator: (f) => f <= o });
      }
      equal(o) {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be equal to ${o}, got ${f}`, validator: (f) => f === o });
      }
      oneOf(o) {
        return this.addValidator({ message: (f, s) => {
          let p = JSON.stringify(o);
          if (o.length > 10) {
            const l = o.length - 10;
            p = JSON.stringify(o.slice(0, 10)).replace(/]$/, `,…+${l} more]`);
          }
          return `Expected ${s} to be one of \`${p}\`, got ${f}`;
        }, validator: (f) => o.includes(f) });
      }
      get integer() {
        return this.addValidator({ message: (o, f) => `Expected ${f} to be an integer, got ${o}`, validator: (o) => a.default.integer(o) });
      }
      get finite() {
        return this.addValidator({ message: (o, f) => `Expected ${f} to be finite, got ${o}`, validator: (o) => !a.default.infinite(o) });
      }
      get infinite() {
        return this.addValidator({ message: (o, f) => `Expected ${f} to be infinite, got ${o}`, validator: (o) => a.default.infinite(o) });
      }
      get positive() {
        return this.addValidator({ message: (o, f) => `Expected ${f} to be positive, got ${o}`, validator: (o) => o > 0 });
      }
      get negative() {
        return this.addValidator({ message: (o, f) => `Expected ${f} to be negative, got ${o}`, validator: (o) => o < 0 });
      }
      get integerOrInfinite() {
        return this.addValidator({ message: (o, f) => `Expected ${f} to be an integer or infinite, got ${o}`, validator: (o) => a.default.integer(o) || a.default.infinite(o) });
      }
      get uint8() {
        return this.integer.inRange(0, 255);
      }
      get uint16() {
        return this.integer.inRange(0, 65535);
      }
      get uint32() {
        return this.integer.inRange(0, 4294967295);
      }
      get int8() {
        return this.integer.inRange(-128, 127);
      }
      get int16() {
        return this.integer.inRange(-32768, 32767);
      }
      get int32() {
        return this.integer.inRange(-2147483648, 2147483647);
      }
    };
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = n(0);
    u.BooleanPredicate = class extends i.Predicate {
      constructor(a) {
        super("boolean", a);
      }
      get true() {
        return this.addValidator({ message: (a, c) => `Expected ${c} to be true, got ${a}`, validator: (a) => a === !0 });
      }
      get false() {
        return this.addValidator({ message: (a, c) => `Expected ${c} to be false, got ${a}`, validator: (a) => a === !1 });
      }
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(f) {
      return f && f.__esModule ? f : { default: f };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(5)), c = i(n(4)), o = n(0);
    u.ArrayPredicate = class extends o.Predicate {
      constructor(f) {
        super("array", f);
      }
      length(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to have length \`${f}\`, got \`${s.length}\``, validator: (s) => s.length === f });
      }
      minLength(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to have a minimum length of \`${f}\`, got \`${s.length}\``, validator: (s) => s.length >= f });
      }
      maxLength(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to have a maximum length of \`${f}\`, got \`${s.length}\``, validator: (s) => s.length <= f });
      }
      startsWith(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to start with \`${f}\`, got \`${s[0]}\``, validator: (s) => s[0] === f });
      }
      endsWith(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to end with \`${f}\`, got \`${s[s.length - 1]}\``, validator: (s) => s[s.length - 1] === f });
      }
      includes(...f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to include all elements of \`${JSON.stringify(f)}\`, got \`${JSON.stringify(s)}\``, validator: (s) => f.every((p) => s.indexOf(p) !== -1) });
      }
      includesAny(...f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to include any element of \`${JSON.stringify(f)}\`, got \`${JSON.stringify(s)}\``, validator: (s) => f.some((p) => s.indexOf(p) !== -1) });
      }
      get empty() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to be empty, got \`${JSON.stringify(f)}\``, validator: (f) => f.length === 0 });
      }
      get nonEmpty() {
        return this.addValidator({ message: (f, s) => `Expected ${s} to not be empty`, validator: (f) => f.length > 0 });
      }
      deepEqual(f) {
        return this.addValidator({ message: (s, p) => `Expected ${p} to be deeply equal to \`${JSON.stringify(f)}\`, got \`${JSON.stringify(s)}\``, validator: (s) => a.default(s, f) });
      }
      ofType(f) {
        let s;
        return this.addValidator({ message: (p, l) => `(${l}) ${s}`, validator: (p) => {
          try {
            for (const l of p) c.default(l, f);
            return !0;
          } catch (l) {
            return s = l.message, !1;
          }
        } });
      }
    };
  }, function(r, u) {
    r.exports = function(n) {
      return n.webpackPolyfill || (n.deprecate = function() {
      }, n.paths = [], n.children || (n.children = []), Object.defineProperty(n, "loaded", { enumerable: !0, get: function() {
        return n.l;
      } }), Object.defineProperty(n, "id", { enumerable: !0, get: function() {
        return n.i;
      } }), n.webpackPolyfill = 1), n;
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(b) {
      return b && b.__esModule ? b : { default: b };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(1)), c = i(n(25)), o = i(n(5)), f = n(0), s = i(n(3)), p = i(n(7)), l = i(n(27)), h = n(28);
    u.ObjectPredicate = class extends f.Predicate {
      constructor(b) {
        super("object", b);
      }
      get plain() {
        return this.addValidator({ message: (b, v) => `Expected ${v} to be a plain object`, validator: (b) => a.default.plainObject(b) });
      }
      get empty() {
        return this.addValidator({ message: (b, v) => `Expected ${v} to be empty, got \`${JSON.stringify(b)}\``, validator: (b) => Object.keys(b).length === 0 });
      }
      get nonEmpty() {
        return this.addValidator({ message: (b, v) => `Expected ${v} to not be empty`, validator: (b) => Object.keys(b).length > 0 });
      }
      valuesOfType(b) {
        return this.addValidator({ message: (v, y, g) => `(${y}) ${g}`, validator: (v) => {
          const y = Object.keys(v).map((g) => v[g]);
          return p.default(y, b);
        } });
      }
      deepValuesOfType(b) {
        return this.addValidator({ message: (v, y, g) => `(${y}) ${g}`, validator: (v) => l.default(v, b) });
      }
      deepEqual(b) {
        return this.addValidator({ message: (v, y) => `Expected ${y} to be deeply equal to \`${JSON.stringify(b)}\`, got \`${JSON.stringify(v)}\``, validator: (v) => o.default(v, b) });
      }
      instanceOf(b) {
        return this.addValidator({ message: (v, y) => {
          let g = v.constructor.name;
          return g && g !== "Object" || (g = JSON.stringify(v)), `Expected ${y} \`${g}\` to be of type \`${b.name}\``;
        }, validator: (v) => v instanceof b });
      }
      hasKeys(...b) {
        return this.addValidator({ message: (v, y, g) => `Expected ${y} to have keys \`${JSON.stringify(g)}\``, validator: (v) => s.default({ has: (y) => c.default.has(v, y) }, b) });
      }
      hasAnyKeys(...b) {
        return this.addValidator({ message: (v, y) => `Expected ${y} to have any key of \`${JSON.stringify(b)}\``, validator: (v) => b.some((y) => c.default.has(v, y)) });
      }
      partialShape(b) {
        return this.addValidator({ message: (v, y, g) => `${g.replace("Expected", "Expected property")} in ${y}`, validator: (v) => h.partial(v, b) });
      }
      exactShape(b) {
        return this.addValidator({ message: (v, y, g) => `${g.replace("Expected", "Expected property")} in ${y}`, validator: (v) => h.exact(v, b) });
      }
    };
  }, function(r, u, n) {
    const i = n(26);
    function a(c) {
      const o = c.split("."), f = [];
      for (let s = 0; s < o.length; s++) {
        let p = o[s];
        for (; p[p.length - 1] === "\\" && o[s + 1] !== void 0; ) p = p.slice(0, -1) + ".", p += o[++s];
        f.push(p);
      }
      return f;
    }
    r.exports = { get(c, o, f) {
      if (!i(c) || typeof o != "string") return f === void 0 ? c : f;
      const s = a(o);
      for (let p = 0; p < s.length; p++) {
        if (!Object.prototype.propertyIsEnumerable.call(c, s[p])) return f;
        if ((c = c[s[p]]) == null) {
          if (p !== s.length - 1) return f;
          break;
        }
      }
      return c;
    }, set(c, o, f) {
      if (!i(c) || typeof o != "string") return c;
      const s = c, p = a(o);
      for (let l = 0; l < p.length; l++) {
        const h = p[l];
        i(c[h]) || (c[h] = {}), l === p.length - 1 && (c[h] = f), c = c[h];
      }
      return s;
    }, delete(c, o) {
      if (!i(c) || typeof o != "string") return;
      const f = a(o);
      for (let s = 0; s < f.length; s++) {
        const p = f[s];
        if (s === f.length - 1) return void delete c[p];
        if (c = c[p], !i(c)) return;
      }
    }, has(c, o) {
      if (!i(c) || typeof o != "string") return !1;
      const f = a(o);
      for (let s = 0; s < f.length; s++) {
        if (!i(c) || !(f[s] in c)) return !1;
        c = c[f[s]];
      }
      return !0;
    } };
  }, function(r, u, n) {
    r.exports = function(i) {
      var a = typeof i;
      return i !== null && (a === "object" || a === "function");
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(f) {
      return f && f.__esModule ? f : { default: f };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(1)), c = i(n(4)), o = (f, s) => a.default.plainObject(f) ? Object.keys(f).every((p) => o(f[p], s)) : (c.default(f, s), !0);
    u.default = (f, s) => {
      try {
        return o(f, s);
      } catch (p) {
        return p.message;
      }
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(f) {
      return f && f.__esModule ? f : { default: f };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(1)), c = i(n(9)), o = n(2);
    u.partial = function f(s, p, l) {
      try {
        for (const h of Object.keys(p)) {
          const b = l ? `${l}.${h}` : h;
          if (o.isPredicate(p[h])) c.default(s[h], b, p[h]);
          else if (a.default.plainObject(p[h])) {
            const v = f(s[h], p[h], b);
            if (v !== !0) return v;
          }
        }
        return !0;
      } catch (h) {
        return h.message;
      }
    }, u.exact = function f(s, p, l) {
      try {
        const h = new Set(Object.keys(s));
        for (const b of Object.keys(p)) {
          h.delete(b);
          const v = l ? `${l}.${b}` : b;
          if (o.isPredicate(p[b])) c.default(s[b], v, p[b]);
          else if (a.default.plainObject(p[b])) {
            if (!Object.prototype.hasOwnProperty.call(s, b)) return `Expected \`${v}\` to exist`;
            const y = f(s[b], p[b], v);
            if (y !== !0) return y;
          }
        }
        if (h.size > 0) {
          const b = Array.from(h.keys())[0];
          return `Did not expect property \`${l ? `${l}.${b}` : b}\` to exist, got \`${s[b]}\``;
        }
        return !0;
      } catch (h) {
        return h.message;
      }
    };
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = n(0);
    u.DatePredicate = class extends i.Predicate {
      constructor(a) {
        super("date", a);
      }
      before(a) {
        return this.addValidator({ message: (c, o) => `Expected ${o} ${c.toISOString()} to be before ${a.toISOString()}`, validator: (c) => c.getTime() < a.getTime() });
      }
      after(a) {
        return this.addValidator({ message: (c, o) => `Expected ${o} ${c.toISOString()} to be after ${a.toISOString()}`, validator: (c) => c.getTime() > a.getTime() });
      }
    };
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = n(0);
    u.ErrorPredicate = class extends i.Predicate {
      constructor(a) {
        super("error", a);
      }
      name(a) {
        return this.addValidator({ message: (c, o) => `Expected ${o} to have name \`${a}\`, got \`${c.name}\``, validator: (c) => c.name === a });
      }
      message(a) {
        return this.addValidator({ message: (c, o) => `Expected ${o} message to be \`${a}\`, got \`${c.message}\``, validator: (c) => c.message === a });
      }
      messageIncludes(a) {
        return this.addValidator({ message: (c, o) => `Expected ${o} message to include \`${a}\`, got \`${c.message}\``, validator: (c) => c.message.includes(a) });
      }
      hasKeys(...a) {
        return this.addValidator({ message: (c, o) => `Expected ${o} message to have keys \`${a.join("`, `")}\``, validator: (c) => a.every((o) => c.hasOwnProperty(o)) });
      }
      instanceOf(a) {
        return this.addValidator({ message: (c, o) => `Expected ${o} \`${c.name}\` to be of type \`${a.name}\``, validator: (c) => c instanceof a });
      }
      get typeError() {
        return this.instanceOf(TypeError);
      }
      get evalError() {
        return this.instanceOf(EvalError);
      }
      get rangeError() {
        return this.instanceOf(RangeError);
      }
      get referenceError() {
        return this.instanceOf(ReferenceError);
      }
      get syntaxError() {
        return this.instanceOf(SyntaxError);
      }
      get uriError() {
        return this.instanceOf(URIError);
      }
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(s) {
      return s && s.__esModule ? s : { default: s };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(5)), c = n(0), o = i(n(3)), f = i(n(7));
    u.MapPredicate = class extends c.Predicate {
      constructor(s) {
        super("Map", s);
      }
      size(s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have size \`${s}\`, got \`${p.size}\``, validator: (p) => p.size === s });
      }
      minSize(s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have a minimum size of \`${s}\`, got \`${p.size}\``, validator: (p) => p.size >= s });
      }
      maxSize(s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have a maximum size of \`${s}\`, got \`${p.size}\``, validator: (p) => p.size <= s });
      }
      hasKeys(...s) {
        return this.addValidator({ message: (p, l, h) => `Expected ${l} to have keys \`${JSON.stringify(h)}\``, validator: (p) => o.default(p, s) });
      }
      hasAnyKeys(...s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have any key of \`${JSON.stringify(s)}\``, validator: (p) => s.some((l) => p.has(l)) });
      }
      hasValues(...s) {
        return this.addValidator({ message: (p, l, h) => `Expected ${l} to have values \`${JSON.stringify(h)}\``, validator: (p) => o.default(new Set(p.values()), s) });
      }
      hasAnyValues(...s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have any value of \`${JSON.stringify(s)}\``, validator: (p) => {
          const l = new Set(p.values());
          return s.some((h) => l.has(h));
        } });
      }
      keysOfType(s) {
        return this.addValidator({ message: (p, l, h) => `(${l}) ${h}`, validator: (p) => f.default(p.keys(), s) });
      }
      valuesOfType(s) {
        return this.addValidator({ message: (p, l, h) => `(${l}) ${h}`, validator: (p) => f.default(p.values(), s) });
      }
      get empty() {
        return this.addValidator({ message: (s, p) => `Expected ${p} to be empty, got \`${JSON.stringify(Array.from(s))}\``, validator: (s) => s.size === 0 });
      }
      get nonEmpty() {
        return this.addValidator({ message: (s, p) => `Expected ${p} to not be empty`, validator: (s) => s.size > 0 });
      }
      deepEqual(s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to be deeply equal to \`${JSON.stringify(Array.from(s))}\`, got \`${JSON.stringify(Array.from(p))}\``, validator: (p) => a.default(p, s) });
      }
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(o) {
      return o && o.__esModule ? o : { default: o };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = n(0), c = i(n(3));
    u.WeakMapPredicate = class extends a.Predicate {
      constructor(o) {
        super("WeakMap", o);
      }
      hasKeys(...o) {
        return this.addValidator({ message: (f, s, p) => `Expected ${s} to have keys \`${JSON.stringify(p)}\``, validator: (f) => c.default(f, o) });
      }
      hasAnyKeys(...o) {
        return this.addValidator({ message: (f, s) => `Expected ${s} to have any key of \`${JSON.stringify(o)}\``, validator: (f) => o.some((s) => f.has(s)) });
      }
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(s) {
      return s && s.__esModule ? s : { default: s };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = i(n(5)), c = n(0), o = i(n(3)), f = i(n(7));
    u.SetPredicate = class extends c.Predicate {
      constructor(s) {
        super("Set", s);
      }
      size(s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have size \`${s}\`, got \`${p.size}\``, validator: (p) => p.size === s });
      }
      minSize(s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have a minimum size of \`${s}\`, got \`${p.size}\``, validator: (p) => p.size >= s });
      }
      maxSize(s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have a maximum size of \`${s}\`, got \`${p.size}\``, validator: (p) => p.size <= s });
      }
      has(...s) {
        return this.addValidator({ message: (p, l, h) => `Expected ${l} to have items \`${JSON.stringify(h)}\``, validator: (p) => o.default(p, s) });
      }
      hasAny(...s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to have any item of \`${JSON.stringify(s)}\``, validator: (p) => s.some((l) => p.has(l)) });
      }
      ofType(s) {
        return this.addValidator({ message: (p, l, h) => `(${l}) ${h}`, validator: (p) => f.default(p, s) });
      }
      get empty() {
        return this.addValidator({ message: (s, p) => `Expected ${p} to be empty, got \`${JSON.stringify(Array.from(s))}\``, validator: (s) => s.size === 0 });
      }
      get nonEmpty() {
        return this.addValidator({ message: (s, p) => `Expected ${p} to not be empty`, validator: (s) => s.size > 0 });
      }
      deepEqual(s) {
        return this.addValidator({ message: (p, l) => `Expected ${l} to be deeply equal to \`${JSON.stringify(Array.from(s))}\`, got \`${JSON.stringify(Array.from(p))}\``, validator: (p) => a.default(p, s) });
      }
    };
  }, function(r, u, n) {
    var i = this && this.__importDefault || function(o) {
      return o && o.__esModule ? o : { default: o };
    };
    Object.defineProperty(u, "__esModule", { value: !0 });
    const a = n(0), c = i(n(3));
    u.WeakSetPredicate = class extends a.Predicate {
      constructor(o) {
        super("WeakSet", o);
      }
      has(...o) {
        return this.addValidator({ message: (f, s, p) => `Expected ${s} to have items \`${JSON.stringify(p)}\``, validator: (f) => c.default(f, o) });
      }
      hasAny(...o) {
        return this.addValidator({ message: (f, s) => `Expected ${s} to have any item of \`${JSON.stringify(o)}\``, validator: (f) => o.some((s) => f.has(s)) });
      }
    };
  }, function(r, u, n) {
    Object.defineProperty(u, "__esModule", { value: !0 });
    const i = n(8), a = n(2);
    u.AnyPredicate = class {
      constructor(c, o = {}) {
        this.predicates = c, this.options = o;
      }
      [a.testSymbol](c, o, f) {
        const s = ["Any predicate failed with the following errors:"];
        for (const p of this.predicates) try {
          return void o(c, f, p);
        } catch (l) {
          if (c === void 0 && this.options.optional === !0) return;
          s.push(`- ${l.message}`);
        }
        throw new i.ArgumentError(s.join(`
`), o);
      }
    };
  }]);
  const e = t.exports;
  t.exports = e.default, Object.assign(t.exports, e);
})(Qc);
var e0 = Qc.exports, sn = {}, Wo = {};
Object.defineProperty(Wo, "__esModule", { value: !0 });
class tu {
  constructor(e) {
    this.pretty = !1, this.pretty = e;
  }
  format(e, r) {
    const u = Object.assign({}, r, e);
    return this.pretty ? JSON.stringify(u, void 0, 2) + `
` : JSON.stringify(u);
  }
  getName() {
    return this.pretty ? tu.FORMAT_NAME_PRETTY : tu.FORMAT_NAME;
  }
}
tu.FORMAT_NAME = "json";
tu.FORMAT_NAME_PRETTY = "json_pretty";
Wo.JsonLogFormat = tu;
var Jo = {}, ln = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), function(e) {
    e.EMPTY_METADATA = {};
    function r(u) {
      let n = u.service ? `${u.service}.` : u.project ? `${u.project}.` : "";
      return n += u.module ? `${u.module}.` : "", n += u.library ? `[${u.library}].` : "", n += u.tag || "", n || (n = "universe-log-empty-id"), n;
    }
    e.getBestIdentifier = r;
  }(t.LogMetadata || (t.LogMetadata = {}));
})(ln);
var ra = {};
Object.defineProperty(ra, "__esModule", { value: !0 });
class G2 {
  static getTimestamp() {
    return Date.now();
  }
  static getUTCISOTime() {
    return (/* @__PURE__ */ new Date()).toISOString();
  }
}
ra.TimeUtils = G2;
Object.defineProperty(Jo, "__esModule", { value: !0 });
const W2 = ln, J2 = ra;
class ua {
  format(e, r) {
    const u = e.time_iso || new Date(e.timestamp).toISOString() || J2.TimeUtils.getUTCISOTime();
    return `${W2.LogMetadata.getBestIdentifier(r)} | ${u} [${e.level}]: ${e.message}` + this.includeStackIfPresent(e);
  }
  getName() {
    return ua.FORMAT_NAME;
  }
  includeStackIfPresent(e) {
    return e.error && e.error.stack ? `
${e.error.stack}` : "";
  }
}
ua.FORMAT_NAME = "oneline";
Jo.OnelineLogFormat = ua;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = hu, r = Wo, u = Jo;
  (function(n) {
    n.FORMATS = {
      json: new r.JsonLogFormat(!1),
      json_pretty: new r.JsonLogFormat(!0),
      oneline: new u.OnelineLogFormat()
    }, n.KEYS = Object.freeze({
      json: "json",
      json_pretty: "json_pretty",
      oneline: "oneline"
    }), n.DEFAULT_FORMAT = n.FORMATS.oneline;
    function i(a) {
      if (typeof n.FORMATS[a] > "u") {
        const c = Object.keys(n.FORMATS).join(",");
        throw new e.UniverseLogError(`There is no such log format: '${a}'. Available formats: [ ${c} ]`);
      }
      return n.FORMATS[a];
    }
    n.valueOf = i;
  })(t.LogFormats || (t.LogFormats = {}));
})(sn);
var Xo = {};
Object.defineProperty(Xo, "__esModule", { value: !0 });
class X2 {
  static log(e) {
    console.error(`UniverseLog.FallbackLog: ${e}`);
  }
}
Xo.FallbackLog = X2;
var na = {};
Object.defineProperty(na, "__esModule", { value: !0 });
const vi = hu, Y2 = new Function("try {return this===window;}catch(e){ return false;}"), Z2 = new Function("try {return this===global;}catch(e){return false;}"), K2 = new Function("try {return this;}catch(e){return undefined}");
function Q2(t) {
  const e = K2();
  if (!e)
    throw new vi.UniverseLogError("PortableEnv: environment is browser, but could not get window object");
  return e[t];
}
function eg(t) {
  if (!process)
    throw new vi.UniverseLogError("PortableEnv: environment is node, but process object does not exist");
  if (!process.env)
    throw new vi.UniverseLogError("PortableEnv: environment is node, but process.env object does not exist");
  if (process.env[t])
    return process.env[t];
}
function tg(t) {
  if (Y2())
    return Q2(t);
  if (Z2())
    return eg(t);
  throw new vi.UniverseLogError("PortableEnv: unknown environment (not browser, not node)");
}
na.PortableEnv = tg;
var ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
let gu = class {
};
gu.LEAST_LEVEL_ENV = "LOG_LEVEL";
gu.LOG_FORMAT_ENV = "LOG_FORMAT";
gu.LOG_METADATA_ENV = "LOG_METADATA";
gu.REEVALUATE_CONFIG_AFTER_MS = 150;
gu.DEFAULT_LOG_FN = (t) => console.error(t);
ia.StaticConfig = gu;
var rg = N && N.__rest || function(t, e) {
  var r = {};
  for (var u in t) Object.prototype.hasOwnProperty.call(t, u) && e.indexOf(u) < 0 && (r[u] = t[u]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, u = Object.getOwnPropertySymbols(t); n < u.length; n++)
      e.indexOf(u[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, u[n]) && (r[u[n]] = t[u[n]]);
  return r;
};
Object.defineProperty(Go, "__esModule", { value: !0 });
const pr = e0, ug = sn, ng = Xo, Wn = pu, dl = ln, za = na, $u = ia;
class ig {
  constructor(e) {
    this.levelEvaluationEnvNames = [], this.level = Wn.LogLevel.DEFAULT_LEVEL, this.metadata = dl.LogMetadata.EMPTY_METADATA, this.nextReevaluateTimestampMs = 0, this.levelEvaluationEnvNames = e.levelEvaluationEnvNames, pr.default(this.levelEvaluationEnvNames, "levelEvaluationEnvNames", pr.default.array.ofType(pr.default.string)), this.fallbackLog = e.fallbackLog, pr.default(this.fallbackLog, "fallbackLog", pr.default.function), this.defaultFormat = e.defaultFormat, pr.default(this.defaultFormat, "defaultFormat", pr.default.object), this.format = this.defaultFormat, this.evaluateIfRequired();
  }
  setLevelEvaluationEnvNames(e) {
    this.levelEvaluationEnvNames = e, this.evaluateIfRequired();
  }
  getLevel() {
    return this.level;
  }
  getFormat() {
    return this.format;
  }
  getMetadata() {
    return this.metadata;
  }
  evaluateIfRequired() {
    if (!(Date.now() < this.nextReevaluateTimestampMs))
      try {
        this.nextReevaluateTimestampMs = Date.now() + $u.StaticConfig.REEVALUATE_CONFIG_AFTER_MS, this.evaluate();
      } catch (e) {
        this.fallbackLog(`Could not evaluate live log config: ${e}: ${e.stack}`);
      }
  }
  evaluate() {
    this.format = this.evaluateFormat(), this.level = this.evaluateLogLevel(), this.metadata = this.evaluateMetadata();
  }
  evaluateFormat() {
    const e = za.PortableEnv($u.StaticConfig.LOG_FORMAT_ENV);
    return e ? ug.LogFormats.valueOf(e) : this.defaultFormat;
  }
  evaluateLogLevel() {
    const e = this.chooseMostVerboseLevel(this.getEnvValues(this.levelEvaluationEnvNames));
    if (e)
      return e;
    const r = this.chooseMostVerboseLevel(this.getEnvValues([$u.StaticConfig.LEAST_LEVEL_ENV]));
    return r || Wn.LogLevel.DEFAULT_LEVEL;
  }
  getEnvValues(e) {
    return e.map((u) => za.PortableEnv(u)).filter((u) => !!u).map((u) => u || "unreachable");
  }
  chooseMostVerboseLevel(e) {
    const r = e.map((n) => Wn.LogLevel.valueOf(n));
    return r.length === 0 ? void 0 : r.reduce((n, i) => Wn.LogLevel.moreVerbose(n, i));
  }
  evaluateMetadata() {
    try {
      const e = za.PortableEnv($u.StaticConfig.LOG_METADATA_ENV);
      if (e) {
        const r = JSON.parse(e);
        return this.removeTagFromMetadata(r);
      }
    } catch (e) {
      ng.FallbackLog.log(`Could not parse value of ${$u.StaticConfig.LOG_METADATA_ENV} env: ${e}`);
    }
    return dl.LogMetadata.EMPTY_METADATA;
  }
  removeTagFromMetadata(e) {
    const { tag: r } = e;
    return rg(e, ["tag"]);
  }
}
Go.LiveLogConfig = ig;
var Yo = {};
Object.defineProperty(Yo, "__esModule", { value: !0 });
const ag = Kt, og = pu, pl = ra;
class it {
  static parse(e, r) {
    let u = it.basicLogMsg(e);
    for (const n of r)
      u = Object.assign({}, u, it.parseElem(n, u));
    return u;
  }
  static basicLogMsg(e) {
    return {
      time_iso: pl.TimeUtils.getUTCISOTime(),
      timestamp: pl.TimeUtils.getTimestamp(),
      level: e,
      level_value: og.LogLevel.LEVELS_VALUES[e]
    };
  }
  static parseElem(e, r) {
    return typeof e == "string" ? it.parseString(e, r) : e instanceof Error ? it.parseError(e, r) : typeof e == "object" ? it.parseObject(e, r) : it.parseOther(e, r);
  }
  static parseString(e, r) {
    return { message: (r.message ? r.message + "; " : "") + e };
  }
  static parseError(e, r) {
    const u = {};
    return u.message = (r.message ? r.message + "; " : "") + (e + "").trim(), r.error ? (u.other_errors = [...r.other_errors || []], u.other_errors.push(it.errorToObj(e))) : u.error = it.errorToObj(e), u;
  }
  static errorToObj(e) {
    return e instanceof ag.default ? Object.assign({ name: e.name, message: e.message, stack: e.stack }, e.cause ? { cause: it.errorToObj(e.cause) } : {}) : { name: e.name, message: e.message, stack: e.stack };
  }
  static parseObject(e, r) {
    return Object.assign({}, e);
  }
  static parseOther(e, r) {
    return { others: [...r.others || [], e] };
  }
}
Yo.ParseLogMsg = it;
var Zo = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 });
  const e = e0, r = sn;
  (function(u) {
    function n(i) {
      e.default(i.levelEnvs, "Properties.levelEnvs", e.default.any(e.default.undefined, e.default.array.ofType(e.default.string))), e.default(i.metadata, "Properties.metadata", e.default.optional.object), e.default(i.logFn, "Properties.logFn", e.default.any(e.default.undefined, e.default.function)), e.default(i.defaultFormat, "Properties.defaultFormat", e.default.optional.string.oneOf(Object.keys(r.LogFormats.KEYS)));
    }
    u.validate = n;
  })(t.Properties || (t.Properties = {}));
})(Zo);
Object.defineProperty(ta, "__esModule", { value: !0 });
const sg = Go, Ha = pu, lg = ln, cg = ia, hl = sn, fg = Yo, dg = Zo;
class Ko {
  constructor(e) {
    if (this.instanceMetadata = lg.LogMetadata.EMPTY_METADATA, "clone" in e) {
      this.instanceMetadata = Object.assign({}, e.clone.instanceMetadata, e.newMetadata), this.liveConfig = e.clone.liveConfig, this.logFn = e.clone.logFn;
      return;
    }
    dg.Properties.validate(e), e.metadata && (this.instanceMetadata = e.metadata), e.logFn ? this.logFn = e.logFn : this.logFn = cg.StaticConfig.DEFAULT_LOG_FN;
    const r = e.defaultFormat ? hl.LogFormats.valueOf(e.defaultFormat) : hl.LogFormats.DEFAULT_FORMAT;
    this.liveConfig = new sg.LiveLogConfig({
      levelEvaluationEnvNames: e.levelEnvs || [],
      fallbackLog: this.logFn,
      defaultFormat: r
    });
  }
  cloneWithMetadata(e) {
    return new Ko({ clone: this, newMetadata: e });
  }
  getLevel() {
    return this.liveConfig.getLevel();
  }
  getFormatName() {
    return this.liveConfig.getFormat().getName();
  }
  getMetadata() {
    return Object.assign({}, this.instanceMetadata, this.liveConfig.getMetadata());
  }
  /**
   * Calls generator fn only if logging level is reached.
   */
  doEfficientLog(e, r) {
    this.reevaluateConfigIfRequired();
    const u = Ha.LogLevel.LEVELS_VALUES[this.getLevel()];
    Ha.LogLevel.LEVELS_VALUES[e] <= u && this.doLog(e, r());
  }
  doLog(e, ...r) {
    if (this.reevaluateConfigIfRequired(), r.length !== 0 && (r.length === 1 && Array.isArray(r[0]) && (r = r[0]), Ha.LogLevel.isLessOrEquallyVerbose({ level: e, threshold: this.getLevel() }))) {
      const u = fg.ParseLogMsg.parse(e, r), n = this.liveConfig.getFormat().format(u, this.getMetadata());
      this.rawWriteToLog(n);
    }
  }
  rawWriteToLog(e) {
    this.logFn(e);
  }
  reevaluateConfigIfRequired() {
    this.liveConfig.evaluateIfRequired();
  }
}
ta.LogEngine = Ko;
Object.defineProperty(ea, "__esModule", { value: !0 });
const Te = pu, gl = ta;
class pg {
  constructor(e) {
    e instanceof gl.LogEngine ? this.logEngine = e : this.logEngine = new gl.LogEngine(e);
  }
  getLevel() {
    return this.logEngine.getLevel();
  }
  getFormatName() {
    return this.logEngine.getFormatName();
  }
  getMetadata() {
    return this.logEngine.getMetadata();
  }
  isDebug() {
    return Te.LogLevel.LEVELS_VALUES[this.getLevel()] >= Te.LogLevel.LEVELS_VALUES.debug;
  }
  error(...e) {
    this.doLog(Te.LogLevel.error, e);
  }
  errorGen(e) {
    this.doEfficientLog(Te.LogLevel.error, e);
  }
  warn(...e) {
    this.doLog(Te.LogLevel.warn, e);
  }
  warnGen(e) {
    this.doEfficientLog(Te.LogLevel.warn, e);
  }
  info(...e) {
    this.doLog(Te.LogLevel.info, e);
  }
  infoGen(e) {
    this.doEfficientLog(Te.LogLevel.info, e);
  }
  http(...e) {
    this.doLog(Te.LogLevel.http, e);
  }
  httpGen(e) {
    this.doEfficientLog(Te.LogLevel.http, e);
  }
  verbose(...e) {
    this.doLog(Te.LogLevel.verbose, e);
  }
  verboseGen(e) {
    this.doEfficientLog(Te.LogLevel.verbose, e);
  }
  debug(...e) {
    this.doLog(Te.LogLevel.debug, e);
  }
  debugGen(e) {
    this.doEfficientLog(Te.LogLevel.debug, e);
  }
  silly(...e) {
    this.doLog(Te.LogLevel.silly, e);
  }
  sillyGen(e) {
    this.doEfficientLog(Te.LogLevel.silly, e);
  }
  /**
   * Calls generator fn only if logging level is reached.
   */
  doEfficientLog(e, r) {
    this.logEngine.doEfficientLog(e, r);
  }
  doLog(e, ...r) {
    this.logEngine.doLog(e, ...r);
  }
  getEngine() {
    return this.logEngine;
  }
}
ea.AbstractUniverseLog = pg;
var Qo = {};
Object.defineProperty(Qo, "__esModule", { value: !0 });
const hg = ea;
class es extends hg.AbstractUniverseLog {
  constructor(e) {
    super(e);
  }
  tag(e) {
    return new es(super.getEngine().cloneWithMetadata({ tag: e }));
  }
}
Qo.BasicTaggedUniverseLog = es;
Object.defineProperty(st, "__esModule", { value: !0 });
var gg = ea;
st.AbstractUniverseLog = gg.AbstractUniverseLog;
var mg = ta;
st.LogEngine = mg.LogEngine;
var bg = Zo;
st.UniverseLogProperties = bg.Properties;
var yg = Qo;
st.BasicTaggedUniverseLog = yg.BasicTaggedUniverseLog;
var vg = ln;
st.LogMetadata = vg.LogMetadata;
var xg = pu;
st.LogLevel = xg.LogLevel;
var wg = na;
st.PortableEnv = wg.PortableEnv;
var Eg = hu;
st.UniverseLogError = Eg.UniverseLogError;
var Ag = sn;
st.LogFormats = Ag.LogFormats;
Object.defineProperty(Qe, "__esModule", { value: !0 });
Qe.Log = void 0;
const _g = st;
class Gu extends _g.AbstractUniverseLog {
  static log() {
    return Gu.INSTANCE;
  }
  constructor() {
    super({
      levelEnvs: ["HIVE_CONTENT_RENDERER_LOG_LEVEL", "ENGRAVE_LOG_LEVEL"],
      metadata: {
        library: "@hiveio/content-renderer"
      }
    });
  }
}
Qe.Log = Gu;
Gu.INSTANCE = new Gu();
var aa = {}, oa = {};
Object.defineProperty(oa, "__esModule", { value: !0 });
oa.Phishing = void 0;
const Sg = [
  "steewit.com",
  "śteemit.com",
  "ŝteemit.com",
  "şteemit.com",
  "šteemit.com",
  "sţeemit.com",
  "sťeemit.com",
  "șteemit.com",
  "sleemit.com",
  "aba.ae",
  "autobidbot.cf",
  "autobidbot.ga",
  "autobidbot.gq",
  "autobotsteem.cf",
  "autobotsteem.ga",
  "autobotsteem.gq",
  "autobotsteem.ml",
  "autosteem.info",
  "autosteembot.cf",
  "autosteembot.ga",
  "autosteembot.gq",
  "autosteembot.ml",
  "autosteemit.wapka.mobi",
  "boostbot.ga",
  "boostbot.gq",
  "boostwhaleup.cf",
  "cutt.us",
  "dereferer.me",
  "eb2a.com",
  "lordlinkers.tk",
  "nullrefer.com",
  "steeemit.ml",
  "steeemitt.aba.ae",
  "steemart.ga",
  "steemautobot.bid",
  "steemautobot.cf",
  "steemautobot.trade",
  "steemers.aba.ae",
  "steemiit.cf",
  "steemiit.ga",
  "steemij.tk",
  "steemik.ga",
  "steemik.tk",
  "steemil.com",
  "steemil.ml",
  "steemir.tk",
  "steemitou.co.nf",
  "steemitservices.ga",
  "steemitservices.gq",
  "steemiz.tk",
  "steemnow.cf",
  "steemnow.ga",
  "steemnow.gq",
  "steemnow.ml",
  "steempostupper.win",
  "steemrewards.ml",
  "steemrobot.ga",
  "steemrobot.ml",
  "steemupgot.cf",
  "steemupgot.ga",
  "steemupgot.gq",
  "steemupper.cf",
  "steemupper.ga",
  "steemupper.gq",
  "steemupper.ml",
  "steenit.cf",
  "stemit.com",
  "stssmater.aba.ae",
  "uppervotes.ga",
  "uppervotes.gq",
  "upperwhaleplus.cf",
  "upperwhaleplus.ga",
  "upperwhaleplus.gq",
  "upvoteme.cf",
  "upvoteme.ga",
  "upvoteme.gq",
  "upvoteme.ml",
  "url.rw",
  "us.aba.ae",
  "whaleboostup.ga",
  "whaleboostup.ml"
];
class t0 {
}
oa.Phishing = t0;
t0.looksPhishy = (t) => {
  for (const e of Sg)
    if (t.toLocaleLowerCase().indexOf(e) > -1)
      return !0;
  return !1;
};
var Dg = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(aa, "__esModule", { value: !0 });
aa.LinkSanitizer = void 0;
const Jn = Dg(ou), Ga = Qe, Tg = oa;
class ts {
  constructor(e) {
    this.validate(e), this.options = e, this.baseUrl = new URL(this.options.baseUrl), this.topLevelsBaseDomain = ts.getTopLevelBaseDomainFromBaseUrl(this.baseUrl);
  }
  sanitizeLink(e, r) {
    return e = this.prependUnknownProtocolLink(e), Ga.Log.log().debug("LinkSanitizer#sanitizeLink", { url: e, urlTitle: r }), Tg.Phishing.looksPhishy(e) ? (Ga.Log.log().debug("LinkSanitizer#sanitizeLink", "phishing link detected", "phishing list", e, {
      url: e,
      urlTitle: r
    }), !1) : this.isPseudoLocalUrl(e, r) ? (Ga.Log.log().debug("LinkSanitizer#sanitizeLink", "phishing link detected", "pseudo local url", e, {
      url: e,
      urlTitle: r
    }), !1) : e;
  }
  static getTopLevelBaseDomainFromBaseUrl(e) {
    const u = /([^\s/$.?#]+\.[^\s/$.?#]+)$/g.exec(e.hostname);
    if (u && u[0])
      return u[0];
    throw new Error(`LinkSanitizer: could not determine top level base domain from baseUrl hostname: ${e.hostname}`);
  }
  prependUnknownProtocolLink(e) {
    return /^((#)|(\/(?!\/))|(((hive|https?):)?\/\/))/.test(e) || (e = "https://" + e), e;
  }
  isPseudoLocalUrl(e, r) {
    if (e.indexOf("#") === 0)
      return !1;
    e = e.toLowerCase(), r = r.toLowerCase();
    try {
      const u = r.indexOf(this.topLevelsBaseDomain) !== -1, n = e.indexOf(this.topLevelsBaseDomain) !== -1;
      if (u && !n)
        return !0;
    } catch (u) {
      if (u instanceof TypeError)
        return !1;
      throw u;
    }
    return !1;
  }
  validate(e) {
    (0, Jn.default)(e, "LinkSanitizerOptions", Jn.default.object), (0, Jn.default)(e.baseUrl, "LinkSanitizerOptions.baseUrl", Jn.default.string.nonEmpty);
  }
}
aa.LinkSanitizer = ts;
var mu = {}, kg = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(mu, "__esModule", { value: !0 });
mu.Localization = void 0;
const $e = kg(ou);
class r0 {
  static validate(e) {
    (0, $e.default)(e, "LocalizationOptions", $e.default.object), (0, $e.default)(e.phishingWarning, "LocalizationOptions.phishingWarning", $e.default.string.nonEmpty), (0, $e.default)(e.externalLink, "LocalizationOptions.externalLink", $e.default.string.nonEmpty), (0, $e.default)(e.noImage, "LocalizationOptions.noImage", $e.default.string.nonEmpty), (0, $e.default)(e.accountNameWrongLength, "LocalizationOptions.accountNameWrongLength", $e.default.string.nonEmpty), (0, $e.default)(e.accountNameBadActor, "LocalizationOptions.accountNameBadActor", $e.default.string.nonEmpty), (0, $e.default)(e.accountNameWrongSegment, "LocalizationOptions.accountNameWrongSegment", $e.default.string.nonEmpty);
  }
}
mu.Localization = r0;
r0.DEFAULT = {
  phishingWarning: "Link expanded to plain text; beware of a potential phishing attempt",
  externalLink: "This link will take you away from example.com",
  noImage: "Images not allowed",
  accountNameWrongLength: "Account name should be between 3 and 16 characters long",
  accountNameBadActor: "This account is on a bad actor list",
  accountNameWrongSegment: "This account name contains a bad segment"
};
var sa = {}, yt = {};
Object.defineProperty(yt, "__esModule", { value: !0 });
yt.AbstractEmbedder = void 0;
class Cg {
  static getEmbedMarker(e, r) {
    return `~~~ embed:${e} ${r} ~~~`;
  }
  static insertAllEmbeds(e, r, u) {
    const n = [];
    for (let i of r.split("~~~ embed:")) {
      const a = i.match(/^([A-Za-z0-9?/=_-]+) ([^ ]*) ~~~/);
      if (a && a.length >= 3) {
        const c = a[1], o = a[2];
        for (const f of e)
          if (f.type == o) {
            n.push(f.processEmbed(c, u));
            break;
          }
        if (i = i.substring(`${c} ${o} ~~~`.length), i === "")
          continue;
      }
      n.push(i);
    }
    return n.join("");
  }
}
yt.AbstractEmbedder = Cg;
var la = {};
Object.defineProperty(la, "__esModule", { value: !0 });
la.SpotifyEmbedder = void 0;
const Og = Qe, Pg = yt;
class Wu extends Pg.AbstractEmbedder {
  constructor() {
    super(...arguments), this.type = "spotify";
  }
  static extractMetadata(e) {
    if (!e)
      return;
    const r = e.match(Wu.regex.main);
    return !r || r.length < 2 ? void 0 : {
      id: `${r[1] === "show" || r[1] === "episode" ? "embed-podcast" : "embed"}/${r[1]}/${r[2]}`,
      url: r[0],
      canonical: `https://open.spotify.com/${r[1]}/${r[2]}`
    };
  }
  getEmbedMetadata(e) {
    try {
      const r = Wu.extractMetadata(e.data);
      return r ? {
        id: r.id,
        url: r.url,
        image: r.canonical
      } : void 0;
    } catch (r) {
      Og.Log.log().error(r);
    }
  }
  processEmbed(e, r) {
    return `<div class="videoWrapper"><iframe src="${`https://open.spotify.com/${e}`}" width="${r.width}" height="${r.height}" frameBorder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe></div>`;
  }
}
la.SpotifyEmbedder = Wu;
Wu.regex = {
  main: /https?:\/\/open.spotify.com\/(playlist|show|episode|album|track|artist)\/(.*)/i,
  sanitize: /^https:\/\/open\.spotify\.com\/(embed|embed-podcast)\/(playlist|show|episode|album|track|artist)\/(.*)/i
  // TODO ??
};
var ca = {};
Object.defineProperty(ca, "__esModule", { value: !0 });
ca.ThreeSpeakEmbedder = void 0;
const $g = Qe, Ng = yt;
class fa extends Ng.AbstractEmbedder {
  constructor() {
    super(...arguments), this.type = "3speak";
  }
  getEmbedMetadata(e) {
    const r = typeof e == "string" ? e : e.data;
    try {
      const u = r.match(fa.linkRegex);
      if (u && u[1])
        return {
          id: u[1],
          url: r
          // Return the original URL
        };
    } catch (u) {
      $g.Log.log().error(u);
    }
  }
  processEmbed(e, r) {
    const u = `https://3speak.tv/embed?v=${e}`;
    return `<div class="threeSpeakWrapper"><iframe width="${r.width}" height="${r.height}" src="${u}" frameborder="0" allowfullscreen></iframe></div>`;
  }
}
ca.ThreeSpeakEmbedder = fa;
fa.linkRegex = /^(?:https?:\/\/)?(?:(?:3speak\.(?:tv|online|co)\/watch\?v=)|(?:3speak\.tv\/embed\?v=))([a-zA-Z0-9_.-]+\/[a-zA-Z0-9_-]+)(?:&.*)?$/;
var da = {}, rs = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.imageFile = t.image = t.remote = t.local = t.any = void 0;
  const e = '[^\\s"<>\\]\\[\\(\\)]', r = e.replace(/\]$/, ".,']"), u = "(?:(?:\\.(?:tiff?|jpe?g|gif|png|svg|ico)|ipfs/[a-z\\d]{40,}))", n = "(?:[-a-zA-Z0-9\\._]*[-a-zA-Z0-9])", i = "(?:" + e + "*" + r + ")?", a = ({ domain: l = n, path: h = "" } = {}) => `https?://${l}(?::\\d{2,5})?(?:[/\\?#]${i}${h || ""})${h ? "" : "?"}`, c = (l = "i") => new RegExp(a(), l);
  t.any = c;
  const o = (l = "i") => new RegExp(a({ domain: "(?:localhost|(?:.*\\.)?hive.blog)" }), l);
  t.local = o;
  const f = (l = "i") => new RegExp(a({ domain: `(?!localhost|(?:.*\\.)?hive.blog)${n}` }), l);
  t.remote = f;
  const s = (l = "i") => new RegExp(a({ path: u }), l);
  t.image = s;
  const p = (l = "i") => new RegExp(u, l);
  t.imageFile = p, t.default = {
    any: (0, t.any)(),
    local: (0, t.local)(),
    remote: (0, t.remote)(),
    image: (0, t.image)(),
    imageFile: (0, t.imageFile)(),
    vimeo: /https?:\/\/(?:vimeo.com\/|player.vimeo.com\/video\/)([0-9]+)\/*/,
    vimeoId: /(?:vimeo.com\/|player.vimeo.com\/video\/)([0-9]+)/,
    twitch: /https?:\/\/(?:www.)?twitch.tv\/(?:(videos)\/)?([a-zA-Z0-9][\w]{3,24})/i,
    ipfsProtocol: /^((\/\/?ipfs\/)|(ipfs:\/\/))/
  };
})(rs);
var Mg = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(da, "__esModule", { value: !0 });
da.TwitchEmbedder = void 0;
const Lg = Qe, Ig = Mg(rs), Bg = yt;
class Rg extends Bg.AbstractEmbedder {
  constructor(e) {
    super(), this.type = "twitch", this.domain = new URL(e.baseUrl).hostname;
  }
  getEmbedMetadata(e) {
    try {
      const r = e.data, u = this.twitchId(r);
      return u ? Object.assign({}, u) : void 0;
    } catch (r) {
      Lg.Log.log().error(r);
    }
  }
  processEmbed(e, r) {
    return `<div class="videoWrapper"><iframe src=${`https://player.twitch.tv/${e}&parent=${this.domain}`} width=${r.width} height=${r.height} frameBorder="0" allowFullScreen></iframe></div>`;
  }
  twitchId(e) {
    if (!e)
      return null;
    const r = e.match(Ig.default.twitch);
    return !r || r.length < 3 ? null : {
      id: r[1] === "videos" ? `?video=${r[2]}` : `?channel=${r[2]}`,
      url: r[0],
      canonical: r[1] === "videos" ? `https://player.twitch.tv/?video=${r[2]}` : `https://player.twitch.tv/?channel=${r[2]}`
    };
  }
}
da.TwitchEmbedder = Rg;
var pa = {}, cn = {};
Object.defineProperty(cn, "__esModule", { value: !0 });
cn.StaticConfig = void 0;
class u0 {
}
cn.StaticConfig = u0;
u0.sanitization = {
  iframeWhitelist: [
    {
      // eslint-disable-next-line security/detect-unsafe-regex
      re: /^(?:@?(?:https?:)?\/\/)?(?:www\.)?(twitter|x)\.com\/(?:\w+\/status|status)\/(\d{1,20})/i,
      fn: (t) => {
        if (!t)
          return null;
        const r = t.replace(/^(@|https?:\/\/)/, "").match(/(?:twitter|x)\.com\/(?:\w+\/status|status)\/(\d{1,20})/i);
        return !r || r.length !== 2 ? null : `https://platform.twitter.com/embed/Tweet.html?id=${r[1]}`;
      }
    },
    {
      // eslint-disable-next-line security/detect-unsafe-regex
      re: /^(https?:)?\/\/player.vimeo.com\/video\/.*/i,
      fn: (t) => {
        if (!t)
          return null;
        const e = t.match(/https:\/\/player\.vimeo\.com\/video\/([0-9]+)/);
        return !e || e.length !== 2 ? null : "https://player.vimeo.com/video/" + e[1];
      }
    },
    {
      // eslint-disable-next-line security/detect-unsafe-regex
      re: /^(https?:)?\/\/www.youtube.com\/embed\/.*/i,
      fn: (t) => t.replace(/\?.+$/, "")
    },
    {
      re: /^https:\/\/w.soundcloud.com\/player\/.*/i,
      fn: (t) => {
        if (!t)
          return null;
        const e = t.match(/url=(.+?)&/);
        return !e || e.length !== 2 ? null : `https://w.soundcloud.com/player/?url=${e[1]}&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true`;
      }
    },
    {
      // eslint-disable-next-line security/detect-unsafe-regex
      re: /^(https?:)?\/\/player.twitch.tv\/.*/i,
      fn: (t) => t
    },
    {
      re: /^https:\/\/open\.spotify\.com\/(embed|embed-podcast)\/(playlist|show|episode|album|track|artist)\/(.*)/i,
      fn: (t) => t
    },
    {
      // eslint-disable-next-line security/detect-unsafe-regex
      re: /^(?:https?:)?\/\/(?:3speak\.(?:tv|online|co))\/embed\?v=([^&\s]+)/i,
      fn: (t) => {
        if (!t)
          return null;
        const e = t.match(/3speak\.(?:tv|online|co)\/embed\?v=([^&\s]+)/i);
        return !e || e.length !== 2 ? null : `https://3speak.tv/embed?v=${e[1]}`;
      }
    },
    {
      // eslint-disable-next-line security/detect-unsafe-regex
      re: /^(?:https?:)?\/\/(?:3speak\.(?:tv|online|co))\/watch\?v=([^&\s]+)/i,
      fn: (t) => {
        if (!t)
          return null;
        const e = t.match(/3speak\.(?:tv|online|co)\/watch\?v=([^&\s]+)/i);
        return !e || e.length !== 2 ? null : `https://3speak.tv/embed?v=${e[1]}`;
      }
    },
    {
      re: /^(?:https:)\/\/(?:www\.)?(twitter|x)\.com\/(?:\w+\/status|status)\/(\d{1,20})/i,
      fn: (t) => {
        if (!t)
          return null;
        const e = t.match(/(?:twitter|x)\.com\/(?:\w+\/status|status)\/(\d{1,20})/i);
        return !e || e.length !== 2 ? null : `https://platform.twitter.com/embed/Tweet.html?id=${e[1]}`;
      }
    }
  ],
  noImageText: "(Image not shown due to low ratings)",
  allowedTags: `
    div, iframe, del,
    a, p, b, i, q, br, ul, li, ol, img, h1, h2, h3, h4, h5, h6, hr,
    blockquote, pre, code, em, strong, center, table, thead, tbody, tr, th, td,
    strike, sup, sub
`.trim().split(/,\s*/)
};
var Wa;
Object.defineProperty(pa, "__esModule", { value: !0 });
pa.TwitterEmbedder = void 0;
const Fg = Qe, n0 = cn, jg = yt;
class Ju extends jg.AbstractEmbedder {
  constructor() {
    super(...arguments), this.type = "twitter";
  }
  getEmbedMetadata(e) {
    const r = typeof e == "string" ? e : e.data;
    try {
      const u = Ju.getTwitterMetadataFromLink(r);
      return u ? {
        id: u.id,
        url: u.url
      } : void 0;
    } catch (u) {
      Fg.Log.log().error(u);
    }
  }
  processEmbed(e, r) {
    const u = n0.StaticConfig.sanitization.iframeWhitelist.find((i) => i.re.toString().includes("twitter")), n = u == null ? void 0 : u.fn(`https://twitter.com/status/${e}`);
    return n ? `<div class="twitterWrapper"><iframe width="${r.width}" height="${r.height}" src="${n}" frameborder="0" scrolling="no" allowtransparency="true" allowfullscreen="true"></iframe></div>` : "";
  }
  static getTwitterMetadataFromLink(e) {
    if (!e)
      return;
    const r = e.replace(/^(@|https:\/\/)/, ""), u = r.match(Ju.linkRegex);
    if (!u)
      return;
    const n = u[2], i = `https://${r}`;
    return { id: n, url: i };
  }
}
pa.TwitterEmbedder = Ju;
Ju.linkRegex = (Wa = n0.StaticConfig.sanitization.iframeWhitelist.find((t) => t.re.toString().includes("twitter"))) === null || Wa === void 0 ? void 0 : Wa.re;
var ha = {};
Object.defineProperty(ha, "__esModule", { value: !0 });
ha.VimeoEmbedder = void 0;
const qg = Qe, Ug = yt;
class ga extends Ug.AbstractEmbedder {
  constructor() {
    super(...arguments), this.type = "vimeo";
  }
  getEmbedMetadata(e) {
    try {
      const r = e.data, u = this.extractMetadata(r);
      return u ? {
        id: u.id,
        url: u.url
      } : void 0;
    } catch (r) {
      qg.Log.log().error(r);
    }
  }
  processEmbed(e, r) {
    return `<div class="videoWrapper"><iframe src=${this.generateCanonicalUrl(e)} width=${r.width} height=${r.height} frameBorder="0" webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe></div>`;
  }
  generateCanonicalUrl(e) {
    return `https://player.vimeo.com/video/${e}`;
  }
  extractMetadata(e) {
    if (!e)
      return null;
    const r = e.match(ga.regex);
    return !r || r.length < 2 ? null : {
      id: r[1],
      url: r[0],
      canonical: this.generateCanonicalUrl(r[1])
    };
  }
}
ha.VimeoEmbedder = ga;
ga.regex = /https?:\/\/(?:vimeo.com\/|player.vimeo.com\/video\/)([0-9]+)\/*/;
var fn = {};
Object.defineProperty(fn, "__esModule", { value: !0 });
fn.YoutubeEmbedder = void 0;
const Vg = Qe, zg = yt;
class gr extends zg.AbstractEmbedder {
  constructor() {
    super(...arguments), this.type = "youtube";
  }
  static getYoutubeMetadataFromLink(e) {
    if (!e)
      return;
    const r = e.match(gr.linkRegex), u = r ? r[0] : void 0;
    if (!u)
      return;
    const n = u.match(gr.idRegex), i = n && n.length >= 2 ? n[2] : void 0;
    if (i)
      return {
        id: i,
        url: u,
        thumbnail: "https://img.youtube.com/vi/" + i + "/0.jpg"
      };
  }
  getEmbedMetadata(e) {
    try {
      const r = gr.getYoutubeMetadataFromLink(e.data);
      return r ? {
        id: r.id,
        url: r.url,
        image: r.thumbnail
      } : void 0;
    } catch (r) {
      Vg.Log.log().error(r);
    }
  }
  processEmbed(e, r) {
    const u = `https://www.youtube.com/embed/${e}`;
    return `<div class="videoWrapper"><iframe width="${r.width}" height="${r.height}" src="${u}" allowfullscreen="allowfullscreen" webkitallowfullscreen="webkitallowfullscreen" mozallowfullscreen="mozallowfullscreen" frameborder="0"></iframe></div>`;
  }
}
fn.YoutubeEmbedder = gr;
gr.linkRegex = /https?:\/\/(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/watch\?v=|youtu.be\/[^watch]|youtube\.com\/(embed|shorts)\/)([A-Za-z0-9_-]+)[^ ]*/i;
gr.idRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/watch\?v=|youtu.be\/|youtube\.com\/(embed|shorts)\/)([A-Za-z0-9_-]+)/i;
var Hg = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(sa, "__esModule", { value: !0 });
sa.AssetEmbedder = void 0;
const we = Hg(ou), ml = yt, Gg = la, Wg = ca, Jg = da, Xg = pa, Yg = ha, Zg = fn;
class us {
  constructor(e, r) {
    us.validate(e), this.options = e, this.localization = r, this.embedders = [
      //
      new Zg.YoutubeEmbedder(),
      new Yg.VimeoEmbedder(),
      new Jg.TwitchEmbedder(e),
      new Gg.SpotifyEmbedder(),
      new Wg.ThreeSpeakEmbedder(),
      new Xg.TwitterEmbedder()
    ];
  }
  static validate(e) {
    (0, we.default)(e, "AssetEmbedderOptions", we.default.object), (0, we.default)(e.ipfsPrefix, "AssetEmbedderOptions.ipfsPrefix", we.default.optional.string), (0, we.default)(e.width, "AssetEmbedderOptions.width", we.default.number.integer.positive), (0, we.default)(e.height, "AssetEmbedderOptions.height", we.default.number.integer.positive), (0, we.default)(e.hideImages, "AssetEmbedderOptions.hideImages", we.default.boolean), (0, we.default)(e.baseUrl, "AssetEmbedderOptions.baseUrl", we.default.string.nonEmpty), (0, we.default)(e.imageProxyFn, "AssetEmbedderOptions.imageProxyFn", we.default.function), (0, we.default)(e.hashtagUrlFn, "AssetEmbedderOptions.hashtagUrlFn", we.default.function), (0, we.default)(e.usertagUrlFn, "AssetEmbedderOptions.usertagUrlFn", we.default.function);
  }
  insertAssets(e) {
    const r = {
      width: this.options.width,
      height: this.options.height
    };
    return this.insertMarkedEmbedsToRenderedOutput(e, r);
  }
  insertMarkedEmbedsToRenderedOutput(e, r) {
    return ml.AbstractEmbedder.insertAllEmbeds(this.embedders, e, r);
  }
  processTextNodeAndInsertEmbeds(e) {
    const r = { links: [], images: [] };
    for (const u of this.embedders) {
      const n = u.getEmbedMetadata(e);
      n && (e.data = e.data.replace(n.url, ml.AbstractEmbedder.getEmbedMarker(n.id, u.type)), n.image && r.images.push(n.image), n.link && r.links.push(n.link));
    }
    return r;
  }
}
sa.AssetEmbedder = us;
var ma = {}, ns = {};
Object.defineProperty(ns, "__esModule", { value: !0 });
const Kg = `
aalpha
aappreciator
abits
acx
aex.com
alha
alhpa
allcoin.com
alpah
alph
alphha
alppha
alueup
apha
aplha
apppreciator
apprceiator
apprciator
apprecaitor
apprecator
apprecciator
appreciaator
appreciaor
appreciaotr
appreciater
appreciatoor
appreciatorr
appreciatr
appreciatro
appreciattor
appreciiator
apprecitaor
apprecitor
appreeciator
appreiator
appreicator
apprreciator
apreciator
aprpeciator
ausbitban
ausbltbank
avlueup
battrex
bbithumb.hot
bbittrex
bblocktrades
bboomerang
bbooster
bbuildawhale
bcex
bellyrub
berniesandlers
bernieslanders
berniestandards
bernlesanders
bettrex
bihtrex
bihtumb.hot
bihumb.hot
biithumb.hot
biitrex
biittrex
bildawhale
binan
binanc
binance
binance.com
binanced
binancee
binances
binanse
binnance
bit-z
bitex
bitfinex
bitfinex.com
bitfinix
bitflip
bithhumb.hot
bithmb.hot
bithmub.hot
bithub.hot
bithubm.hot
bithum.bhot
bithumb
bithumb-deposit
bithumb-exchange
bithumb-pro
bithumb.com
bithumb.hoot
bithumb.hott
bithumb.hto
bithumb.oht
bithumbb.hot
bithummb.hot
bithuumb.hot
bitifinex
bitkrx
bitnaru
bitre
bitreex
bitrex
bitrexx
bitrix
bitrrex
bitrtex
bitrx
bitsane
bitsane.com
bitstamp
bitstamp.net
bitt
bitteex
bitter
bitterex
bitterx
bittex
bitthai
bittr
bittrax
bittre
bittrec
bittrecs
bittrecx
bittred
bittreex
bittrek
bittres
bittresx
bittret
bittrev
bittrex-deposit
bittrex-pro
bittrex.com
bittrexc
bittrexchange
bittrexe
bittrexs
bittrext
bittrexx
bittrexxx
bittrez
bittriex
bittrix
bittrrex
bittrrx
bittrx
bittrxe
bitttec
bitttex
bitttrex
bittylicious
bittylicious.com
bituhmb.hot
biuldawhale
blcktrades
blcoktrades
bleutrade
bleutrade.com
bllocktrades
bloccktrades
block-trades
block-trades-com
blockktrades
blockrade
blockrades
blockrtades
blocktades
blocktardes
blocktraades
blocktrad
blocktraddes
blocktrade
blocktraded
blocktradee
blocktradees
blocktrader
blocktraders
blocktrades-com
blocktrades-info
blocktrades-us
blocktrades.com
blocktrades.info
blocktrades.us
blocktradess
blocktradesss
blocktradez
blocktrading
blocktrads
blocktradse
blocktraeds
blocktraes
blocktrdaes
blocktrdes
blocktredes
blocktrrades
blockttrades
bloctkrades
bloctrades
blokctrades
bloktrades
bloocktrades
bocktrades
bolcktrades
bomerang
bomoerang
booemrang
booerang
boomeang
boomearng
boomeerang
boomeraang
boomerag
boomeragn
boomerangg
boomeranng
boomernag
boomerrang
boommerang
boomreang
booomerang
boooster
booser
boosetr
boostar
booste
boosterr
boostr
boostre
boostter
bootser
bosoter
boster
btc-alpha
btc-alpha.com
btc38
btcalpha
btcmarkets
btcmarkets.net
bthumb.hot
btihumb.hot
btitrex
btrex
bttrex
bttrx
buidawhale
buidlawhale
buiildawhale
builadwhale
buildaawhale
buildahale
buildahwale
buildawahle
buildawale
buildawhaale
buildawhael
buildawhalee
buildawhalle
buildawhhale
buildawhile
buildawhlae
buildawwhale
builddawhale
buildwahale
buildwhale
builldawhale
buldawhale
bulidawhale
buobi-pro
buuildawhale
c-cex
c-cex.com
canadiancoconut
ccex
cexio
changellly
changelly.com
changely
cinpayments.net
cionpayments.net
coin-room
coinapyments.net
coinayments.net
coinbas
coinbase
coinbase.com
coinbased
coinegg
coinegg.com
coinpaments.net
coinpamyents.net
coinpayemnts.net
coinpayents.net
coinpaymens.net
coinpaymenst.net
coinpayment
coinpayment.snet
coinpayments
coinpayments.ent
coinpayments.nte
coinpaymetns.net
coinpaymnets.net
coinpaymnts.net
coinpia
coinpyaments.net
coinroom.com
coinsmarkets
coinsmarkets.com
coinspot
coinzest
coipayments.net
coipnayments.net
community-coin
conipayments.net
conpayments.net
coolcoin.com
curi
curied
curies
curing
d-tube
dcrypto8
ddeepcrypto8
decrypto8
deep8
deepccrypto8
deepcripto8
deepcrpto8
deepcrrypto8
deepcrypo8
deepcryppto8
deepcrypt08
deepcrypt8
deepcrypto-8
deepcrypto0
deepcrypto7
deepcrypto88
deepcrypto9
deepcryptoo8
deepcryptos
deepcryptos8
deepcryptto8
deepcryto8
deepcrytpo8
deepcryypto8
deepcypto8
deeppcrypto8
deeprypto8
depcrypto8
donkeypon
edepcrypto8
eepcrypto8
etherdelta
etherdelta.com
exrates
exx.com
feepcrypto8
freeewallet
freewalet.org
freewaller
frewallet
fyrstiken
gatecoin.com
gatehub
gatehub.net
gdax.com
gemini.com
ggopax-deposit
goapx-deposit
goax-deposit
good-kama
goopax-deposit
gopa-deposit
gopa-xdeposit
gopaax-deposit
gopax-ddeposit
gopax-deopsit
gopax-deosit
gopax-depoist
gopax-depoit
gopax-depoosit
gopax-deposiit
gopax-depositt
gopax-depossit
gopax-depost
gopax-deposti
gopax-depposit
gopax-depsit
gopax-depsoit
gopax-dpeosit
gopax-dposit
gopax-edposit
gopax-eposit
gopax-hot
gopaxd-eposit
gopaxx-deposit
goppax-deposit
gopx-deposit
gopxa-deposit
gpax-deposit
gpoax-deposit
gtg.witnesses
herising
hhuobi-pro
hitbtc-deposit
hitbtc-pro
hitbtc.com
hitbtcexchange
hterising
huobbi-pro
huobi-ppro
huobi-pr0
huobi-proo
huobi-prro
huobi.pro
huobii-pro
huobl-pro
huoobi-pro
huuobi-pro
ibthumb.hot
ibttrex
idex.market
imnnowbooster
inance
innowbooster
ithumb.hot
ittrex
ittrexx
kcx
kevinwon
kocostock
koinex
kraken
kraken.com
kucoi
kucoin
kucoinn
kucoins
lapha
lbocktrades
linkcoin
litebit
little-pepper
livecoin.com
livecoinnet
livingroomofsato
localtrade
localtrade.pro
locktrades
lpha
martsteem
mercatox.com
miinnowbooster
minnnowbooster
minnobooster
minnobwooster
minnooboster
minnoowbooster
minnowboooster
minnowbooser
minnowboosetr
minnowboosster
minnowboost
minnowbooste
minnowboosted
minnowboosteer
minnowboosterr
minnowboosters
minnowboostr
minnowboostre
minnowboostter
minnowbootser
minnowbosoter
minnowboster
minnowbuster
minnowhelp
minnowoboster
minnowooster
minnowpooster
minnows
minnowsuport
minnowsupports
minnowwbooster
minnwbooster
minnwobooster
minobooster
minonwbooster
minowbooster
minowboster
minowhelper
minowsupport
mminnowbooster
mmyupbit
mninowbooster
msartsteem
my-upbit
myupbbit
myupbiit
myupbitt
myupblt
myuppbit
myuupbit
myyupbit
neraex
neraex.com
nextgencrypted
nextgencryptos
obomerang
oboster
ocky1
oenledger-dex
oepnledger-dex
ogpax-deposit
oinpayments.net
okex.com
olonie
oloniex
oomerang
oopenledger-dex
ooster
opeenledger-dex
opeledger-dex
opelnedger-dex
openedger-dex
openeldger-dex
openldeger-dex
openldger-dex
openleddger-dex
openledegr-dex
openleder-dex
openledge-dex
openledge-rdex
openledgeer-dex
openledger-ddex
openledger-de
openledger-deex
openledger-dx
openledger-dxe
openledger-edx
openledger-ex
openledger-pro
openledgerd-ex
openledgerdex
openledgerr-dex
openledgr-dex
openledgre-dex
openleedger-dex
openlegder-dex
openleger-dex
openlledger-dex
opennledger-dex
opnledger-dex
oppenledger-dex
opstpromoter
orcky1
ostpromoter
p-funk
paloniex
papreciator
paypals
penledger-dex
pextokens
pfuck
piloniex
plolniex
ploniex
plooniex
poenledger-dex
pokoniex
polaniex
poleniex
poliniex
polionex
pollniex
polloniex
polloniexx
pollonix
polniex
polnoiex
polobiex
poloex
poloiex
poloinex
pololniex
polomiex
polon
poloneex
poloneiex
poloneix
polonex
poloni
poloniax
polonie
poloniec
poloniecs
polonied
poloniee
polonieex
poloniek
polonieks
polonies
poloniet
poloniets
poloniew
poloniex.com
poloniexcold
poloniexcom
poloniexe
poloniexs
poloniext
poloniexwalle
poloniexwallet
poloniexx
poloniexxx
poloniey
poloniez
poloniiex
poloniix
poloniks
poloniox
polonium
polonix
polonixe
polonixx
polonniex
polonoiex
polonox
polonx
polonyex
polooniex
poluniex
pomobot
pononiex
poolniex
pooloniex
pooniex
poooniex
poostpromoter
poponiex
pormobot
posptromoter
posstpromoter
postpormoter
postppromoter
postprmooter
postprmoter
postprommoter
postpromoer
postpromooter
postpromote
postpromoteer
postpromoterr
postpromotor
postpromotre
postpromotter
postpromter
postpromtoer
postproomoter
postproomter
postprooter
postprromoter
postromoter
posttpromoter
potpromoter
potspromoter
ppostpromoter
ppreciator
ppromobot
prmobot
prmoobot
promboot
prombot
prommobot
promobbot
promobo
promoboot
promobott
promobt
promobto
promoobot
promoobt
promoot
proobot
proombot
proomobot
prromobot
pse
psotpromoter
pstpromoter
ptakundamianshow
ptunk
puloniex
qryptos
qryptos.com
randomwhale
randowale
randowhal
randwhale
rcky1
rcoky1
rdex
rduex
rendowhale
roccky1
rock1y
rockky1
rockyy1
rocy1
rocyk1
rokcy1
romobot
roocky1
rpomobot
rrocky1
rrudex
ruddex
rudeex
rudexx
rudx
rudxe
ruedx
ruudex
samrtsteem
sartsteem
scoin
seem
seemit
seemit2
seepcrypto8
setem
setemit
setemit2
shapeshif
shapeshift
smaartsteem
smarrtsteem
smarstteem
smartseem
smartsetem
smartstee
smartsteeem
smartsteemm
smartsteme
smartstteem
smartteem
smatrsteem
smmartsteem
smratsteem
smrtsteem
ssmartsteem
ssteemit2
steampunks
steeemit2
steeimt
steeimt2
steeit
steeit2
steemi2
steemi2t
steemitpay
steemitt2
steemmit2
steempay
steempays
steemt2
steemti2
steemupbit
stemeit
stemeit2
stemit1
stemit2
stemit3
stemit4
stteem
stteemit2
sweetsj
sweetssj
sweetsss
sweetsssjs
sweetssssj
swetsssj
tdax
tdax.com
teamsteam
techno-comanche
technocommander
teemit2
tehrising
terising
thealien
thebiton
theerising
theirsing
theising
theriing
theriising
theriisng
therisig
therisign
therisiing
therisingg
therisinng
therisng
therisnig
therissing
therocktrading
therrising
thersiing
thersing
thherising
threising
thrising
tidex.com
topbtc
tseem
tseemit
tseemit2
ttherising
ttrex
ubildawhale
udex
uhobi-pro
uildawhale
umewhale
umpewhale
underug
uobi-pro
upbbit
upbi
upbit
upbit.com
upbits
upbitt
upblt
upemwhale
upewhale
upm
upmee
upmeewhale
upmehale
upmehwale
upmewahle
upmewhaale
upmewhae
upmewhael
upmewhalee
upmewhalle
upmewhhale
upmewhlae
upmewhle
upmewwhale
upmme
upmmewhale
upmwehale
upmwhale
uppme
uppmee
uppmewhale
uupmewhale
vaalueup
valeup
valeuup
vallueup
valueeup
valuep
valuepu
valueu
valueupp
valuuep
valuueup
valuup
vaueup
vauleup
viabtc
vittrex
vlaueup
vlueup
vvalueup
wallet.bitshares
whaleshare
www.aex.com
www.binance.com
www.bit-z.com
www.bitfinex.com
www.bithumb.com
www.bitstamp.net
www.bittrex.com
www.coinbase.com
www.coinegg.com
www.coolcoin.com
www.exx.com
www.gatecoin.com
www.gatehub.net
www.gdax.com
www.huobi.pro
www.kraken.com
www.livecoin.net
www.okex.com
www.poloniex.com
www.qryptos.com
www.xbtce.com
xbtce.com
ymupbit
yobit
yobit.net
youbit
yunbi
zenieix
`.trim().split(`
`);
ns.default = Kg;
var Qg = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ma, "__esModule", { value: !0 });
ma.AccountNameValidator = void 0;
const em = Qg(ns);
class tm {
  static validateAccountName(e, r) {
    let u, n, i;
    if (!e)
      return r.accountNameWrongLength;
    const a = e.length;
    if (a < 3 || a > 16)
      return r.accountNameWrongLength;
    if (em.default.includes(e))
      return r.accountNameBadActor;
    const c = e.split(".");
    for (u = 0, i = c.length; u < i; u++)
      if (n = c[u], !/^[a-z]/.test(n) || !/^[a-z0-9-]*$/.test(n) || !/[a-z0-9]$/.test(n) || !(n.length >= 3))
        return r.accountNameWrongSegment;
    return null;
  }
}
ma.AccountNameValidator = tm;
var rm = N && N.__createBinding || (Object.create ? function(t, e, r, u) {
  u === void 0 && (u = r);
  var n = Object.getOwnPropertyDescriptor(e, r);
  (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return e[r];
  } }), Object.defineProperty(t, u, n);
} : function(t, e, r, u) {
  u === void 0 && (u = r), t[u] = e[r];
}), um = N && N.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), i0 = N && N.__importStar || function(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && rm(e, t, r);
  return um(e, t), e;
}, nm = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Zr, "__esModule", { value: !0 });
Zr.HtmlDOMParserError = Zr.HtmlDOMParser = void 0;
const bl = i0(Yi), im = nm(Kt), am = Qe, om = aa, yl = mu, vl = sa, sm = fn, lm = ma, Nu = i0(rs);
class cm {
  constructor(e, r = yl.Localization.DEFAULT) {
    this.domParser = new bl.DOMParser({
      errorHandler: {
        warning: () => {
        },
        error: () => {
        }
      }
    }), this.xmlSerializer = new bl.XMLSerializer(), this.mutate = !0, this.parsedDocument = void 0, vl.AssetEmbedder.validate(e), yl.Localization.validate(r), this.options = e, this.localization = r, this.linkSanitizer = new om.LinkSanitizer({
      baseUrl: this.options.baseUrl
    }), this.embedder = new vl.AssetEmbedder({
      ipfsPrefix: this.options.ipfsPrefix,
      width: this.options.width,
      height: this.options.height,
      hideImages: this.options.hideImages,
      imageProxyFn: this.options.imageProxyFn,
      hashtagUrlFn: this.options.hashtagUrlFn,
      usertagUrlFn: this.options.usertagUrlFn,
      baseUrl: this.options.baseUrl
    }, r), this.state = {
      hashtags: /* @__PURE__ */ new Set(),
      usertags: /* @__PURE__ */ new Set(),
      htmltags: /* @__PURE__ */ new Set(),
      images: /* @__PURE__ */ new Set(),
      links: /* @__PURE__ */ new Set()
    };
  }
  setMutateEnabled(e) {
    return this.mutate = e, this;
  }
  parse(e) {
    try {
      const r = this.domParser.parseFromString(e, "text/html");
      this.traverseDOMNode(r), this.mutate && this.postprocessDOM(r), this.parsedDocument = r;
    } catch (r) {
      throw new ai("Parsing error", r);
    }
    return this;
  }
  getState() {
    if (!this.parsedDocument)
      throw new ai("Html has not been parsed yet");
    return this.state;
  }
  getParsedDocument() {
    if (!this.parsedDocument)
      throw new ai("Html has not been parsed yet");
    return this.parsedDocument;
  }
  getParsedDocumentAsString() {
    return this.xmlSerializer.serializeToString(this.getParsedDocument());
  }
  traverseDOMNode(e, r = 0) {
    !e || !e.childNodes || Array.from(e.childNodes).forEach((u) => {
      const n = u.tagName ? u.tagName.toLowerCase() : null;
      n && this.state.htmltags.add(n), n === "img" ? this.processImgTag(u) : n === "iframe" ? this.processIframeTag(u) : n === "a" ? this.processLinkTag(u) : u.nodeName === "#text" && this.processTextNode(u), this.traverseDOMNode(u, r + 1);
    });
  }
  processLinkTag(e) {
    const r = e.getAttribute("href");
    if (r && (this.state.links.add(r), this.mutate)) {
      const u = e.textContent + "", n = this.linkSanitizer.sanitizeLink(r, u);
      if (n === !1) {
        const i = e.ownerDocument.createElement("div");
        i.textContent = `${e.textContent} / ${r}`, i.setAttribute("title", this.localization.phishingWarning), i.setAttribute("class", "phishy");
        const a = e.parentNode;
        a && (a.appendChild(i), a.removeChild(e));
      } else
        e.setAttribute("href", n);
    }
  }
  // wrap iframes in div.videoWrapper to control size/aspect ratio
  processIframeTag(e) {
    const r = e.getAttribute("src");
    if (r && this.reportIframeLink(r), !this.mutate || (e.parentNode.tagName ? e.parentNode.tagName.toLowerCase() : e.parentNode.tagName) === "div" && e.parentNode.getAttribute("class") === "videoWrapper")
      return;
    const n = this.xmlSerializer.serializeToString(e), i = this.domParser.parseFromString(`<div class="videoWrapper">${n}</div>`), a = e.parentNode;
    a && (a.appendChild(i), a.removeChild(e));
  }
  // TODO this is youtube specific but should be executed for all iframes and embedders
  // TODO https://gitlab.syncad.com/hive/hive-renderer/-/issues/17
  reportIframeLink(e) {
    const r = sm.YoutubeEmbedder.getYoutubeMetadataFromLink(e);
    r && (this.state.links.add(r.url), this.state.images.add("https://img.youtube.com/vi/" + r.id + "/0.jpg"));
  }
  processImgTag(e) {
    const r = e.getAttribute("src");
    if (r && (this.state.images.add(r), this.mutate)) {
      let u = this.normalizeUrl(r);
      /^\/\//.test(u) && (u = "https:" + u), u !== r && e.setAttribute("src", u);
    }
  }
  processTextNode(e) {
    try {
      const r = e.parentNode.tagName ? e.parentNode.tagName.toLowerCase() : e.parentNode.tagName;
      if (r === "code" || r === "a" || !e.data)
        return;
      const u = this.embedder.processTextNodeAndInsertEmbeds(e);
      u.images.forEach((a) => this.state.images.add(a)), u.links.forEach((a) => this.state.links.add(a));
      const n = this.xmlSerializer.serializeToString(e), i = this.linkify(n);
      if (this.mutate && i !== n) {
        const a = this.domParser.parseFromString(`<span>${i}</span>`), c = e.parentNode;
        return c && (c.appendChild(a), c.removeChild(e)), a;
      }
    } catch (r) {
      am.Log.log().error(r);
    }
  }
  linkify(e) {
    return e = e.replace((0, Nu.any)("gi"), (r) => {
      if (Nu.default.image.test(r))
        return this.state.images.add(r), `<img src="${this.normalizeUrl(r)}" />`;
      if (/\.(zip|exe)$/i.test(r))
        return r;
      const u = this.linkSanitizer.sanitizeLink(r, r);
      return u === !1 ? `<div title='${this.localization.phishingWarning}' class='phishy'>${r}</div>` : (this.state.links.add(u), `<a href="${this.normalizeUrl(r)}">${u}</a>`);
    }), e = e.replace(/(^|\s)(#[-a-z\d]+)/gi, (r) => {
      if (/#[\d]+$/.test(r))
        return r;
      const u = /^\s/.test(r) ? r[0] : "", i = r.trim().substring(1).toLowerCase();
      if (this.state.hashtags.add(i), !this.mutate)
        return r;
      const a = this.options.hashtagUrlFn(i);
      return u + `<a href="${a}">${r.trim()}</a>`;
    }), e = e.replace(/(^|[^a-zA-Z0-9_!#$%&*@＠/]|(^|[^a-zA-Z0-9_+~.-/#]))[@＠]([a-z][-.a-z\d]+[a-z\d])/gi, (r, u, n, i) => {
      const a = i.toLowerCase(), c = lm.AccountNameValidator.validateAccountName(a, this.localization) == null;
      c && this.state.usertags && this.state.usertags.add(a);
      const o = (u || "") + (n || "");
      if (!this.mutate)
        return `${o}${i}`;
      const f = this.options.usertagUrlFn(a);
      return c ? `${o}<a href="${f}">@${i}</a>` : `${o}@${i}`;
    }), e;
  }
  postprocessDOM(e) {
    this.hideImagesIfNeeded(e), this.proxifyImagesIfNeeded(e);
  }
  hideImagesIfNeeded(e) {
    if (this.mutate && this.options.hideImages)
      for (const r of Array.from(e.getElementsByTagName("img"))) {
        const u = e.createElement("pre");
        u.setAttribute("class", "image-url-only"), u.appendChild(e.createTextNode(r.getAttribute("src") || ""));
        const n = r.parentNode;
        n && (n.appendChild(u), n.removeChild(r));
      }
  }
  proxifyImagesIfNeeded(e) {
    this.mutate && !this.options.hideImages && this.proxifyImages(e);
  }
  // For all img elements with non-local URLs, prepend the proxy URL (e.g. `https://images.hive.blog/0x0/`)
  proxifyImages(e) {
    e && Array.from(e.getElementsByTagName("img")).forEach((r) => {
      const u = r.getAttribute("src") || "";
      Nu.default.local.test(u) || r.setAttribute("src", this.options.imageProxyFn(u));
    });
  }
  normalizeUrl(e) {
    if (this.options.ipfsPrefix && Nu.default.ipfsProtocol.test(e)) {
      const [r] = e.match(Nu.default.ipfsProtocol), u = e.replace(r, "");
      return `${this.options.ipfsPrefix.replace(/\/+$/, "")}/${u}`;
    }
    return e;
  }
}
Zr.HtmlDOMParser = cm;
class ai extends im.default {
  constructor(e, r) {
    super(e, r);
  }
}
Zr.HtmlDOMParserError = ai;
var ba = {};
Object.defineProperty(ba, "__esModule", { value: !0 });
ba.PreliminarySanitizer = void 0;
class is {
  static preliminarySanitize(e) {
    return is.stripHtmlComments(e);
  }
  static stripHtmlComments(e) {
    return e.replace(/<!--([\s\S]+?)(-->|$)/g, "(html comment removed: $1)");
  }
}
ba.PreliminarySanitizer = is;
var ya = {}, a0 = {}, Xu = {}, as = {}, Yu = {}, os = {};
Object.defineProperty(os, "__esModule", { value: !0 });
os.default = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(function(t) {
    return t.charCodeAt(0);
  })
);
var ss = {};
Object.defineProperty(ss, "__esModule", { value: !0 });
ss.default = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(function(t) {
    return t.charCodeAt(0);
  })
);
var no = {};
(function(t) {
  var e;
  Object.defineProperty(t, "__esModule", { value: !0 }), t.replaceCodePoint = t.fromCodePoint = void 0;
  var r = /* @__PURE__ */ new Map([
    [0, 65533],
    // C1 Unicode control character reference replacements
    [128, 8364],
    [130, 8218],
    [131, 402],
    [132, 8222],
    [133, 8230],
    [134, 8224],
    [135, 8225],
    [136, 710],
    [137, 8240],
    [138, 352],
    [139, 8249],
    [140, 338],
    [142, 381],
    [145, 8216],
    [146, 8217],
    [147, 8220],
    [148, 8221],
    [149, 8226],
    [150, 8211],
    [151, 8212],
    [152, 732],
    [153, 8482],
    [154, 353],
    [155, 8250],
    [156, 339],
    [158, 382],
    [159, 376]
  ]);
  t.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (e = String.fromCodePoint) !== null && e !== void 0 ? e : function(i) {
    var a = "";
    return i > 65535 && (i -= 65536, a += String.fromCharCode(i >>> 10 & 1023 | 55296), i = 56320 | i & 1023), a += String.fromCharCode(i), a;
  };
  function u(i) {
    var a;
    return i >= 55296 && i <= 57343 || i > 1114111 ? 65533 : (a = r.get(i)) !== null && a !== void 0 ? a : i;
  }
  t.replaceCodePoint = u;
  function n(i) {
    return (0, t.fromCodePoint)(u(i));
  }
  t.default = n;
})(no);
(function(t) {
  var e = N && N.__createBinding || (Object.create ? function(A, $, L, q) {
    q === void 0 && (q = L);
    var _ = Object.getOwnPropertyDescriptor($, L);
    (!_ || ("get" in _ ? !$.__esModule : _.writable || _.configurable)) && (_ = { enumerable: !0, get: function() {
      return $[L];
    } }), Object.defineProperty(A, q, _);
  } : function(A, $, L, q) {
    q === void 0 && (q = L), A[q] = $[L];
  }), r = N && N.__setModuleDefault || (Object.create ? function(A, $) {
    Object.defineProperty(A, "default", { enumerable: !0, value: $ });
  } : function(A, $) {
    A.default = $;
  }), u = N && N.__importStar || function(A) {
    if (A && A.__esModule) return A;
    var $ = {};
    if (A != null) for (var L in A) L !== "default" && Object.prototype.hasOwnProperty.call(A, L) && e($, A, L);
    return r($, A), $;
  }, n = N && N.__importDefault || function(A) {
    return A && A.__esModule ? A : { default: A };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.decodeXML = t.decodeHTMLStrict = t.decodeHTMLAttribute = t.decodeHTML = t.determineBranch = t.EntityDecoder = t.DecodingMode = t.BinTrieFlags = t.fromCodePoint = t.replaceCodePoint = t.decodeCodePoint = t.xmlDecodeTree = t.htmlDecodeTree = void 0;
  var i = n(os);
  t.htmlDecodeTree = i.default;
  var a = n(ss);
  t.xmlDecodeTree = a.default;
  var c = u(no);
  t.decodeCodePoint = c.default;
  var o = no;
  Object.defineProperty(t, "replaceCodePoint", { enumerable: !0, get: function() {
    return o.replaceCodePoint;
  } }), Object.defineProperty(t, "fromCodePoint", { enumerable: !0, get: function() {
    return o.fromCodePoint;
  } });
  var f;
  (function(A) {
    A[A.NUM = 35] = "NUM", A[A.SEMI = 59] = "SEMI", A[A.EQUALS = 61] = "EQUALS", A[A.ZERO = 48] = "ZERO", A[A.NINE = 57] = "NINE", A[A.LOWER_A = 97] = "LOWER_A", A[A.LOWER_F = 102] = "LOWER_F", A[A.LOWER_X = 120] = "LOWER_X", A[A.LOWER_Z = 122] = "LOWER_Z", A[A.UPPER_A = 65] = "UPPER_A", A[A.UPPER_F = 70] = "UPPER_F", A[A.UPPER_Z = 90] = "UPPER_Z";
  })(f || (f = {}));
  var s = 32, p;
  (function(A) {
    A[A.VALUE_LENGTH = 49152] = "VALUE_LENGTH", A[A.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", A[A.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(p = t.BinTrieFlags || (t.BinTrieFlags = {}));
  function l(A) {
    return A >= f.ZERO && A <= f.NINE;
  }
  function h(A) {
    return A >= f.UPPER_A && A <= f.UPPER_F || A >= f.LOWER_A && A <= f.LOWER_F;
  }
  function b(A) {
    return A >= f.UPPER_A && A <= f.UPPER_Z || A >= f.LOWER_A && A <= f.LOWER_Z || l(A);
  }
  function v(A) {
    return A === f.EQUALS || b(A);
  }
  var y;
  (function(A) {
    A[A.EntityStart = 0] = "EntityStart", A[A.NumericStart = 1] = "NumericStart", A[A.NumericDecimal = 2] = "NumericDecimal", A[A.NumericHex = 3] = "NumericHex", A[A.NamedEntity = 4] = "NamedEntity";
  })(y || (y = {}));
  var g;
  (function(A) {
    A[A.Legacy = 0] = "Legacy", A[A.Strict = 1] = "Strict", A[A.Attribute = 2] = "Attribute";
  })(g = t.DecodingMode || (t.DecodingMode = {}));
  var D = (
    /** @class */
    function() {
      function A($, L, q) {
        this.decodeTree = $, this.emitCodePoint = L, this.errors = q, this.state = y.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = g.Strict;
      }
      return A.prototype.startEntity = function($) {
        this.decodeMode = $, this.state = y.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
      }, A.prototype.write = function($, L) {
        switch (this.state) {
          case y.EntityStart:
            return $.charCodeAt(L) === f.NUM ? (this.state = y.NumericStart, this.consumed += 1, this.stateNumericStart($, L + 1)) : (this.state = y.NamedEntity, this.stateNamedEntity($, L));
          case y.NumericStart:
            return this.stateNumericStart($, L);
          case y.NumericDecimal:
            return this.stateNumericDecimal($, L);
          case y.NumericHex:
            return this.stateNumericHex($, L);
          case y.NamedEntity:
            return this.stateNamedEntity($, L);
        }
      }, A.prototype.stateNumericStart = function($, L) {
        return L >= $.length ? -1 : ($.charCodeAt(L) | s) === f.LOWER_X ? (this.state = y.NumericHex, this.consumed += 1, this.stateNumericHex($, L + 1)) : (this.state = y.NumericDecimal, this.stateNumericDecimal($, L));
      }, A.prototype.addToNumericResult = function($, L, q, _) {
        if (L !== q) {
          var C = q - L;
          this.result = this.result * Math.pow(_, C) + parseInt($.substr(L, C), _), this.consumed += C;
        }
      }, A.prototype.stateNumericHex = function($, L) {
        for (var q = L; L < $.length; ) {
          var _ = $.charCodeAt(L);
          if (l(_) || h(_))
            L += 1;
          else
            return this.addToNumericResult($, q, L, 16), this.emitNumericEntity(_, 3);
        }
        return this.addToNumericResult($, q, L, 16), -1;
      }, A.prototype.stateNumericDecimal = function($, L) {
        for (var q = L; L < $.length; ) {
          var _ = $.charCodeAt(L);
          if (l(_))
            L += 1;
          else
            return this.addToNumericResult($, q, L, 10), this.emitNumericEntity(_, 2);
        }
        return this.addToNumericResult($, q, L, 10), -1;
      }, A.prototype.emitNumericEntity = function($, L) {
        var q;
        if (this.consumed <= L)
          return (q = this.errors) === null || q === void 0 || q.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        if ($ === f.SEMI)
          this.consumed += 1;
        else if (this.decodeMode === g.Strict)
          return 0;
        return this.emitCodePoint((0, c.replaceCodePoint)(this.result), this.consumed), this.errors && ($ !== f.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
      }, A.prototype.stateNamedEntity = function($, L) {
        for (var q = this.decodeTree, _ = q[this.treeIndex], C = (_ & p.VALUE_LENGTH) >> 14; L < $.length; L++, this.excess++) {
          var T = $.charCodeAt(L);
          if (this.treeIndex = I(q, _, this.treeIndex + Math.max(1, C), T), this.treeIndex < 0)
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === g.Attribute && // We shouldn't have consumed any characters after the entity,
            (C === 0 || // And there should be no invalid characters.
            v(T)) ? 0 : this.emitNotTerminatedNamedEntity();
          if (_ = q[this.treeIndex], C = (_ & p.VALUE_LENGTH) >> 14, C !== 0) {
            if (T === f.SEMI)
              return this.emitNamedEntityData(this.treeIndex, C, this.consumed + this.excess);
            this.decodeMode !== g.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
          }
        }
        return -1;
      }, A.prototype.emitNotTerminatedNamedEntity = function() {
        var $, L = this, q = L.result, _ = L.decodeTree, C = (_[q] & p.VALUE_LENGTH) >> 14;
        return this.emitNamedEntityData(q, C, this.consumed), ($ = this.errors) === null || $ === void 0 || $.missingSemicolonAfterCharacterReference(), this.consumed;
      }, A.prototype.emitNamedEntityData = function($, L, q) {
        var _ = this.decodeTree;
        return this.emitCodePoint(L === 1 ? _[$] & ~p.VALUE_LENGTH : _[$ + 1], q), L === 3 && this.emitCodePoint(_[$ + 2], q), q;
      }, A.prototype.end = function() {
        var $;
        switch (this.state) {
          case y.NamedEntity:
            return this.result !== 0 && (this.decodeMode !== g.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          case y.NumericDecimal:
            return this.emitNumericEntity(0, 2);
          case y.NumericHex:
            return this.emitNumericEntity(0, 3);
          case y.NumericStart:
            return ($ = this.errors) === null || $ === void 0 || $.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
          case y.EntityStart:
            return 0;
        }
      }, A;
    }()
  );
  t.EntityDecoder = D;
  function E(A) {
    var $ = "", L = new D(A, function(q) {
      return $ += (0, c.fromCodePoint)(q);
    });
    return function(_, C) {
      for (var T = 0, j = 0; (j = _.indexOf("&", j)) >= 0; ) {
        $ += _.slice(T, j), L.startEntity(C);
        var oe = L.write(
          _,
          // Skip the "&"
          j + 1
        );
        if (oe < 0) {
          T = j + L.end();
          break;
        }
        T = j + oe, j = oe === 0 ? T + 1 : T;
      }
      var K = $ + _.slice(T);
      return $ = "", K;
    };
  }
  function I(A, $, L, q) {
    var _ = ($ & p.BRANCH_LENGTH) >> 7, C = $ & p.JUMP_TABLE;
    if (_ === 0)
      return C !== 0 && q === C ? L : -1;
    if (C) {
      var T = q - C;
      return T < 0 || T >= _ ? -1 : A[L + T] - 1;
    }
    for (var j = L, oe = j + _ - 1; j <= oe; ) {
      var K = j + oe >>> 1, te = A[K];
      if (te < q)
        j = K + 1;
      else if (te > q)
        oe = K - 1;
      else
        return A[K + _];
    }
    return -1;
  }
  t.determineBranch = I;
  var k = E(i.default), d = E(a.default);
  function O(A, $) {
    return $ === void 0 && ($ = g.Legacy), k(A, $);
  }
  t.decodeHTML = O;
  function V(A) {
    return k(A, g.Attribute);
  }
  t.decodeHTMLAttribute = V;
  function z(A) {
    return k(A, g.Strict);
  }
  t.decodeHTMLStrict = z;
  function W(A) {
    return d(A, g.Strict);
  }
  t.decodeXML = W;
})(Yu);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.QuoteType = void 0;
  var e = Yu, r;
  (function(l) {
    l[l.Tab = 9] = "Tab", l[l.NewLine = 10] = "NewLine", l[l.FormFeed = 12] = "FormFeed", l[l.CarriageReturn = 13] = "CarriageReturn", l[l.Space = 32] = "Space", l[l.ExclamationMark = 33] = "ExclamationMark", l[l.Number = 35] = "Number", l[l.Amp = 38] = "Amp", l[l.SingleQuote = 39] = "SingleQuote", l[l.DoubleQuote = 34] = "DoubleQuote", l[l.Dash = 45] = "Dash", l[l.Slash = 47] = "Slash", l[l.Zero = 48] = "Zero", l[l.Nine = 57] = "Nine", l[l.Semi = 59] = "Semi", l[l.Lt = 60] = "Lt", l[l.Eq = 61] = "Eq", l[l.Gt = 62] = "Gt", l[l.Questionmark = 63] = "Questionmark", l[l.UpperA = 65] = "UpperA", l[l.LowerA = 97] = "LowerA", l[l.UpperF = 70] = "UpperF", l[l.LowerF = 102] = "LowerF", l[l.UpperZ = 90] = "UpperZ", l[l.LowerZ = 122] = "LowerZ", l[l.LowerX = 120] = "LowerX", l[l.OpeningSquareBracket = 91] = "OpeningSquareBracket";
  })(r || (r = {}));
  var u;
  (function(l) {
    l[l.Text = 1] = "Text", l[l.BeforeTagName = 2] = "BeforeTagName", l[l.InTagName = 3] = "InTagName", l[l.InSelfClosingTag = 4] = "InSelfClosingTag", l[l.BeforeClosingTagName = 5] = "BeforeClosingTagName", l[l.InClosingTagName = 6] = "InClosingTagName", l[l.AfterClosingTagName = 7] = "AfterClosingTagName", l[l.BeforeAttributeName = 8] = "BeforeAttributeName", l[l.InAttributeName = 9] = "InAttributeName", l[l.AfterAttributeName = 10] = "AfterAttributeName", l[l.BeforeAttributeValue = 11] = "BeforeAttributeValue", l[l.InAttributeValueDq = 12] = "InAttributeValueDq", l[l.InAttributeValueSq = 13] = "InAttributeValueSq", l[l.InAttributeValueNq = 14] = "InAttributeValueNq", l[l.BeforeDeclaration = 15] = "BeforeDeclaration", l[l.InDeclaration = 16] = "InDeclaration", l[l.InProcessingInstruction = 17] = "InProcessingInstruction", l[l.BeforeComment = 18] = "BeforeComment", l[l.CDATASequence = 19] = "CDATASequence", l[l.InSpecialComment = 20] = "InSpecialComment", l[l.InCommentLike = 21] = "InCommentLike", l[l.BeforeSpecialS = 22] = "BeforeSpecialS", l[l.SpecialStartSequence = 23] = "SpecialStartSequence", l[l.InSpecialTag = 24] = "InSpecialTag", l[l.BeforeEntity = 25] = "BeforeEntity", l[l.BeforeNumericEntity = 26] = "BeforeNumericEntity", l[l.InNamedEntity = 27] = "InNamedEntity", l[l.InNumericEntity = 28] = "InNumericEntity", l[l.InHexEntity = 29] = "InHexEntity";
  })(u || (u = {}));
  function n(l) {
    return l === r.Space || l === r.NewLine || l === r.Tab || l === r.FormFeed || l === r.CarriageReturn;
  }
  function i(l) {
    return l === r.Slash || l === r.Gt || n(l);
  }
  function a(l) {
    return l >= r.Zero && l <= r.Nine;
  }
  function c(l) {
    return l >= r.LowerA && l <= r.LowerZ || l >= r.UpperA && l <= r.UpperZ;
  }
  function o(l) {
    return l >= r.UpperA && l <= r.UpperF || l >= r.LowerA && l <= r.LowerF;
  }
  var f;
  (function(l) {
    l[l.NoValue = 0] = "NoValue", l[l.Unquoted = 1] = "Unquoted", l[l.Single = 2] = "Single", l[l.Double = 3] = "Double";
  })(f = t.QuoteType || (t.QuoteType = {}));
  var s = {
    Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
    CdataEnd: new Uint8Array([93, 93, 62]),
    CommentEnd: new Uint8Array([45, 45, 62]),
    ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
    StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
    TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
    // `</title`
  }, p = (
    /** @class */
    function() {
      function l(h, b) {
        var v = h.xmlMode, y = v === void 0 ? !1 : v, g = h.decodeEntities, D = g === void 0 ? !0 : g;
        this.cbs = b, this.state = u.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = u.Text, this.isSpecial = !1, this.running = !0, this.offset = 0, this.currentSequence = void 0, this.sequenceIndex = 0, this.trieIndex = 0, this.trieCurrent = 0, this.entityResult = 0, this.entityExcess = 0, this.xmlMode = y, this.decodeEntities = D, this.entityTrie = y ? e.xmlDecodeTree : e.htmlDecodeTree;
      }
      return l.prototype.reset = function() {
        this.state = u.Text, this.buffer = "", this.sectionStart = 0, this.index = 0, this.baseState = u.Text, this.currentSequence = void 0, this.running = !0, this.offset = 0;
      }, l.prototype.write = function(h) {
        this.offset += this.buffer.length, this.buffer = h, this.parse();
      }, l.prototype.end = function() {
        this.running && this.finish();
      }, l.prototype.pause = function() {
        this.running = !1;
      }, l.prototype.resume = function() {
        this.running = !0, this.index < this.buffer.length + this.offset && this.parse();
      }, l.prototype.getIndex = function() {
        return this.index;
      }, l.prototype.getSectionStart = function() {
        return this.sectionStart;
      }, l.prototype.stateText = function(h) {
        h === r.Lt || !this.decodeEntities && this.fastForwardTo(r.Lt) ? (this.index > this.sectionStart && this.cbs.ontext(this.sectionStart, this.index), this.state = u.BeforeTagName, this.sectionStart = this.index) : this.decodeEntities && h === r.Amp && (this.state = u.BeforeEntity);
      }, l.prototype.stateSpecialStartSequence = function(h) {
        var b = this.sequenceIndex === this.currentSequence.length, v = b ? (
          // If we are at the end of the sequence, make sure the tag name has ended
          i(h)
        ) : (
          // Otherwise, do a case-insensitive comparison
          (h | 32) === this.currentSequence[this.sequenceIndex]
        );
        if (!v)
          this.isSpecial = !1;
        else if (!b) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0, this.state = u.InTagName, this.stateInTagName(h);
      }, l.prototype.stateInSpecialTag = function(h) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (h === r.Gt || n(h)) {
            var b = this.index - this.currentSequence.length;
            if (this.sectionStart < b) {
              var v = this.index;
              this.index = b, this.cbs.ontext(this.sectionStart, b), this.index = v;
            }
            this.isSpecial = !1, this.sectionStart = b + 2, this.stateInClosingTagName(h);
            return;
          }
          this.sequenceIndex = 0;
        }
        (h | 32) === this.currentSequence[this.sequenceIndex] ? this.sequenceIndex += 1 : this.sequenceIndex === 0 ? this.currentSequence === s.TitleEnd ? this.decodeEntities && h === r.Amp && (this.state = u.BeforeEntity) : this.fastForwardTo(r.Lt) && (this.sequenceIndex = 1) : this.sequenceIndex = +(h === r.Lt);
      }, l.prototype.stateCDATASequence = function(h) {
        h === s.Cdata[this.sequenceIndex] ? ++this.sequenceIndex === s.Cdata.length && (this.state = u.InCommentLike, this.currentSequence = s.CdataEnd, this.sequenceIndex = 0, this.sectionStart = this.index + 1) : (this.sequenceIndex = 0, this.state = u.InDeclaration, this.stateInDeclaration(h));
      }, l.prototype.fastForwardTo = function(h) {
        for (; ++this.index < this.buffer.length + this.offset; )
          if (this.buffer.charCodeAt(this.index - this.offset) === h)
            return !0;
        return this.index = this.buffer.length + this.offset - 1, !1;
      }, l.prototype.stateInCommentLike = function(h) {
        h === this.currentSequence[this.sequenceIndex] ? ++this.sequenceIndex === this.currentSequence.length && (this.currentSequence === s.CdataEnd ? this.cbs.oncdata(this.sectionStart, this.index, 2) : this.cbs.oncomment(this.sectionStart, this.index, 2), this.sequenceIndex = 0, this.sectionStart = this.index + 1, this.state = u.Text) : this.sequenceIndex === 0 ? this.fastForwardTo(this.currentSequence[0]) && (this.sequenceIndex = 1) : h !== this.currentSequence[this.sequenceIndex - 1] && (this.sequenceIndex = 0);
      }, l.prototype.isTagStartChar = function(h) {
        return this.xmlMode ? !i(h) : c(h);
      }, l.prototype.startSpecial = function(h, b) {
        this.isSpecial = !0, this.currentSequence = h, this.sequenceIndex = b, this.state = u.SpecialStartSequence;
      }, l.prototype.stateBeforeTagName = function(h) {
        if (h === r.ExclamationMark)
          this.state = u.BeforeDeclaration, this.sectionStart = this.index + 1;
        else if (h === r.Questionmark)
          this.state = u.InProcessingInstruction, this.sectionStart = this.index + 1;
        else if (this.isTagStartChar(h)) {
          var b = h | 32;
          this.sectionStart = this.index, !this.xmlMode && b === s.TitleEnd[2] ? this.startSpecial(s.TitleEnd, 3) : this.state = !this.xmlMode && b === s.ScriptEnd[2] ? u.BeforeSpecialS : u.InTagName;
        } else h === r.Slash ? this.state = u.BeforeClosingTagName : (this.state = u.Text, this.stateText(h));
      }, l.prototype.stateInTagName = function(h) {
        i(h) && (this.cbs.onopentagname(this.sectionStart, this.index), this.sectionStart = -1, this.state = u.BeforeAttributeName, this.stateBeforeAttributeName(h));
      }, l.prototype.stateBeforeClosingTagName = function(h) {
        n(h) || (h === r.Gt ? this.state = u.Text : (this.state = this.isTagStartChar(h) ? u.InClosingTagName : u.InSpecialComment, this.sectionStart = this.index));
      }, l.prototype.stateInClosingTagName = function(h) {
        (h === r.Gt || n(h)) && (this.cbs.onclosetag(this.sectionStart, this.index), this.sectionStart = -1, this.state = u.AfterClosingTagName, this.stateAfterClosingTagName(h));
      }, l.prototype.stateAfterClosingTagName = function(h) {
        (h === r.Gt || this.fastForwardTo(r.Gt)) && (this.state = u.Text, this.baseState = u.Text, this.sectionStart = this.index + 1);
      }, l.prototype.stateBeforeAttributeName = function(h) {
        h === r.Gt ? (this.cbs.onopentagend(this.index), this.isSpecial ? (this.state = u.InSpecialTag, this.sequenceIndex = 0) : this.state = u.Text, this.baseState = this.state, this.sectionStart = this.index + 1) : h === r.Slash ? this.state = u.InSelfClosingTag : n(h) || (this.state = u.InAttributeName, this.sectionStart = this.index);
      }, l.prototype.stateInSelfClosingTag = function(h) {
        h === r.Gt ? (this.cbs.onselfclosingtag(this.index), this.state = u.Text, this.baseState = u.Text, this.sectionStart = this.index + 1, this.isSpecial = !1) : n(h) || (this.state = u.BeforeAttributeName, this.stateBeforeAttributeName(h));
      }, l.prototype.stateInAttributeName = function(h) {
        (h === r.Eq || i(h)) && (this.cbs.onattribname(this.sectionStart, this.index), this.sectionStart = -1, this.state = u.AfterAttributeName, this.stateAfterAttributeName(h));
      }, l.prototype.stateAfterAttributeName = function(h) {
        h === r.Eq ? this.state = u.BeforeAttributeValue : h === r.Slash || h === r.Gt ? (this.cbs.onattribend(f.NoValue, this.index), this.state = u.BeforeAttributeName, this.stateBeforeAttributeName(h)) : n(h) || (this.cbs.onattribend(f.NoValue, this.index), this.state = u.InAttributeName, this.sectionStart = this.index);
      }, l.prototype.stateBeforeAttributeValue = function(h) {
        h === r.DoubleQuote ? (this.state = u.InAttributeValueDq, this.sectionStart = this.index + 1) : h === r.SingleQuote ? (this.state = u.InAttributeValueSq, this.sectionStart = this.index + 1) : n(h) || (this.sectionStart = this.index, this.state = u.InAttributeValueNq, this.stateInAttributeValueNoQuotes(h));
      }, l.prototype.handleInAttributeValue = function(h, b) {
        h === b || !this.decodeEntities && this.fastForwardTo(b) ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(b === r.DoubleQuote ? f.Double : f.Single, this.index), this.state = u.BeforeAttributeName) : this.decodeEntities && h === r.Amp && (this.baseState = this.state, this.state = u.BeforeEntity);
      }, l.prototype.stateInAttributeValueDoubleQuotes = function(h) {
        this.handleInAttributeValue(h, r.DoubleQuote);
      }, l.prototype.stateInAttributeValueSingleQuotes = function(h) {
        this.handleInAttributeValue(h, r.SingleQuote);
      }, l.prototype.stateInAttributeValueNoQuotes = function(h) {
        n(h) || h === r.Gt ? (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = -1, this.cbs.onattribend(f.Unquoted, this.index), this.state = u.BeforeAttributeName, this.stateBeforeAttributeName(h)) : this.decodeEntities && h === r.Amp && (this.baseState = this.state, this.state = u.BeforeEntity);
      }, l.prototype.stateBeforeDeclaration = function(h) {
        h === r.OpeningSquareBracket ? (this.state = u.CDATASequence, this.sequenceIndex = 0) : this.state = h === r.Dash ? u.BeforeComment : u.InDeclaration;
      }, l.prototype.stateInDeclaration = function(h) {
        (h === r.Gt || this.fastForwardTo(r.Gt)) && (this.cbs.ondeclaration(this.sectionStart, this.index), this.state = u.Text, this.sectionStart = this.index + 1);
      }, l.prototype.stateInProcessingInstruction = function(h) {
        (h === r.Gt || this.fastForwardTo(r.Gt)) && (this.cbs.onprocessinginstruction(this.sectionStart, this.index), this.state = u.Text, this.sectionStart = this.index + 1);
      }, l.prototype.stateBeforeComment = function(h) {
        h === r.Dash ? (this.state = u.InCommentLike, this.currentSequence = s.CommentEnd, this.sequenceIndex = 2, this.sectionStart = this.index + 1) : this.state = u.InDeclaration;
      }, l.prototype.stateInSpecialComment = function(h) {
        (h === r.Gt || this.fastForwardTo(r.Gt)) && (this.cbs.oncomment(this.sectionStart, this.index, 0), this.state = u.Text, this.sectionStart = this.index + 1);
      }, l.prototype.stateBeforeSpecialS = function(h) {
        var b = h | 32;
        b === s.ScriptEnd[3] ? this.startSpecial(s.ScriptEnd, 4) : b === s.StyleEnd[3] ? this.startSpecial(s.StyleEnd, 4) : (this.state = u.InTagName, this.stateInTagName(h));
      }, l.prototype.stateBeforeEntity = function(h) {
        this.entityExcess = 1, this.entityResult = 0, h === r.Number ? this.state = u.BeforeNumericEntity : h === r.Amp || (this.trieIndex = 0, this.trieCurrent = this.entityTrie[0], this.state = u.InNamedEntity, this.stateInNamedEntity(h));
      }, l.prototype.stateInNamedEntity = function(h) {
        if (this.entityExcess += 1, this.trieIndex = (0, e.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, h), this.trieIndex < 0) {
          this.emitNamedEntity(), this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        var b = this.trieCurrent & e.BinTrieFlags.VALUE_LENGTH;
        if (b) {
          var v = (b >> 14) - 1;
          if (!this.allowLegacyEntity() && h !== r.Semi)
            this.trieIndex += v;
          else {
            var y = this.index - this.entityExcess + 1;
            y > this.sectionStart && this.emitPartial(this.sectionStart, y), this.entityResult = this.trieIndex, this.trieIndex += v, this.entityExcess = 0, this.sectionStart = this.index + 1, v === 0 && this.emitNamedEntity();
          }
        }
      }, l.prototype.emitNamedEntity = function() {
        if (this.state = this.baseState, this.entityResult !== 0) {
          var h = (this.entityTrie[this.entityResult] & e.BinTrieFlags.VALUE_LENGTH) >> 14;
          switch (h) {
            case 1: {
              this.emitCodePoint(this.entityTrie[this.entityResult] & ~e.BinTrieFlags.VALUE_LENGTH);
              break;
            }
            case 2: {
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
              break;
            }
            case 3:
              this.emitCodePoint(this.entityTrie[this.entityResult + 1]), this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }, l.prototype.stateBeforeNumericEntity = function(h) {
        (h | 32) === r.LowerX ? (this.entityExcess++, this.state = u.InHexEntity) : (this.state = u.InNumericEntity, this.stateInNumericEntity(h));
      }, l.prototype.emitNumericEntity = function(h) {
        var b = this.index - this.entityExcess - 1, v = b + 2 + +(this.state === u.InHexEntity);
        v !== this.index && (b > this.sectionStart && this.emitPartial(this.sectionStart, b), this.sectionStart = this.index + Number(h), this.emitCodePoint((0, e.replaceCodePoint)(this.entityResult))), this.state = this.baseState;
      }, l.prototype.stateInNumericEntity = function(h) {
        h === r.Semi ? this.emitNumericEntity(!0) : a(h) ? (this.entityResult = this.entityResult * 10 + (h - r.Zero), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, l.prototype.stateInHexEntity = function(h) {
        h === r.Semi ? this.emitNumericEntity(!0) : a(h) ? (this.entityResult = this.entityResult * 16 + (h - r.Zero), this.entityExcess++) : o(h) ? (this.entityResult = this.entityResult * 16 + ((h | 32) - r.LowerA + 10), this.entityExcess++) : (this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state = this.baseState, this.index--);
      }, l.prototype.allowLegacyEntity = function() {
        return !this.xmlMode && (this.baseState === u.Text || this.baseState === u.InSpecialTag);
      }, l.prototype.cleanup = function() {
        this.running && this.sectionStart !== this.index && (this.state === u.Text || this.state === u.InSpecialTag && this.sequenceIndex === 0 ? (this.cbs.ontext(this.sectionStart, this.index), this.sectionStart = this.index) : (this.state === u.InAttributeValueDq || this.state === u.InAttributeValueSq || this.state === u.InAttributeValueNq) && (this.cbs.onattribdata(this.sectionStart, this.index), this.sectionStart = this.index));
      }, l.prototype.shouldContinue = function() {
        return this.index < this.buffer.length + this.offset && this.running;
      }, l.prototype.parse = function() {
        for (; this.shouldContinue(); ) {
          var h = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case u.Text: {
              this.stateText(h);
              break;
            }
            case u.SpecialStartSequence: {
              this.stateSpecialStartSequence(h);
              break;
            }
            case u.InSpecialTag: {
              this.stateInSpecialTag(h);
              break;
            }
            case u.CDATASequence: {
              this.stateCDATASequence(h);
              break;
            }
            case u.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(h);
              break;
            }
            case u.InAttributeName: {
              this.stateInAttributeName(h);
              break;
            }
            case u.InCommentLike: {
              this.stateInCommentLike(h);
              break;
            }
            case u.InSpecialComment: {
              this.stateInSpecialComment(h);
              break;
            }
            case u.BeforeAttributeName: {
              this.stateBeforeAttributeName(h);
              break;
            }
            case u.InTagName: {
              this.stateInTagName(h);
              break;
            }
            case u.InClosingTagName: {
              this.stateInClosingTagName(h);
              break;
            }
            case u.BeforeTagName: {
              this.stateBeforeTagName(h);
              break;
            }
            case u.AfterAttributeName: {
              this.stateAfterAttributeName(h);
              break;
            }
            case u.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(h);
              break;
            }
            case u.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(h);
              break;
            }
            case u.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(h);
              break;
            }
            case u.AfterClosingTagName: {
              this.stateAfterClosingTagName(h);
              break;
            }
            case u.BeforeSpecialS: {
              this.stateBeforeSpecialS(h);
              break;
            }
            case u.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(h);
              break;
            }
            case u.InSelfClosingTag: {
              this.stateInSelfClosingTag(h);
              break;
            }
            case u.InDeclaration: {
              this.stateInDeclaration(h);
              break;
            }
            case u.BeforeDeclaration: {
              this.stateBeforeDeclaration(h);
              break;
            }
            case u.BeforeComment: {
              this.stateBeforeComment(h);
              break;
            }
            case u.InProcessingInstruction: {
              this.stateInProcessingInstruction(h);
              break;
            }
            case u.InNamedEntity: {
              this.stateInNamedEntity(h);
              break;
            }
            case u.BeforeEntity: {
              this.stateBeforeEntity(h);
              break;
            }
            case u.InHexEntity: {
              this.stateInHexEntity(h);
              break;
            }
            case u.InNumericEntity: {
              this.stateInNumericEntity(h);
              break;
            }
            default:
              this.stateBeforeNumericEntity(h);
          }
          this.index++;
        }
        this.cleanup();
      }, l.prototype.finish = function() {
        this.state === u.InNamedEntity && this.emitNamedEntity(), this.sectionStart < this.index && this.handleTrailingData(), this.cbs.onend();
      }, l.prototype.handleTrailingData = function() {
        var h = this.buffer.length + this.offset;
        this.state === u.InCommentLike ? this.currentSequence === s.CdataEnd ? this.cbs.oncdata(this.sectionStart, h, 0) : this.cbs.oncomment(this.sectionStart, h, 0) : this.state === u.InNumericEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === u.InHexEntity && this.allowLegacyEntity() ? this.emitNumericEntity(!1) : this.state === u.InTagName || this.state === u.BeforeAttributeName || this.state === u.BeforeAttributeValue || this.state === u.AfterAttributeName || this.state === u.InAttributeName || this.state === u.InAttributeValueSq || this.state === u.InAttributeValueDq || this.state === u.InAttributeValueNq || this.state === u.InClosingTagName || this.cbs.ontext(this.sectionStart, h);
      }, l.prototype.emitPartial = function(h, b) {
        this.baseState !== u.Text && this.baseState !== u.InSpecialTag ? this.cbs.onattribdata(h, b) : this.cbs.ontext(h, b);
      }, l.prototype.emitCodePoint = function(h) {
        this.baseState !== u.Text && this.baseState !== u.InSpecialTag ? this.cbs.onattribentity(h) : this.cbs.ontextentity(h);
      }, l;
    }()
  );
  t.default = p;
})(as);
var fm = N && N.__createBinding || (Object.create ? function(t, e, r, u) {
  u === void 0 && (u = r);
  var n = Object.getOwnPropertyDescriptor(e, r);
  (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return e[r];
  } }), Object.defineProperty(t, u, n);
} : function(t, e, r, u) {
  u === void 0 && (u = r), t[u] = e[r];
}), dm = N && N.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), pm = N && N.__importStar || function(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && fm(e, t, r);
  return dm(e, t), e;
};
Object.defineProperty(Xu, "__esModule", { value: !0 });
Xu.Parser = void 0;
var Xn = pm(as), xl = Yu, Hr = /* @__PURE__ */ new Set([
  "input",
  "option",
  "optgroup",
  "select",
  "button",
  "datalist",
  "textarea"
]), ie = /* @__PURE__ */ new Set(["p"]), wl = /* @__PURE__ */ new Set(["thead", "tbody"]), El = /* @__PURE__ */ new Set(["dd", "dt"]), Al = /* @__PURE__ */ new Set(["rt", "rp"]), hm = /* @__PURE__ */ new Map([
  ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
  ["th", /* @__PURE__ */ new Set(["th"])],
  ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
  ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
  ["li", /* @__PURE__ */ new Set(["li"])],
  ["p", ie],
  ["h1", ie],
  ["h2", ie],
  ["h3", ie],
  ["h4", ie],
  ["h5", ie],
  ["h6", ie],
  ["select", Hr],
  ["input", Hr],
  ["output", Hr],
  ["button", Hr],
  ["datalist", Hr],
  ["textarea", Hr],
  ["option", /* @__PURE__ */ new Set(["option"])],
  ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
  ["dd", El],
  ["dt", El],
  ["address", ie],
  ["article", ie],
  ["aside", ie],
  ["blockquote", ie],
  ["details", ie],
  ["div", ie],
  ["dl", ie],
  ["fieldset", ie],
  ["figcaption", ie],
  ["figure", ie],
  ["footer", ie],
  ["form", ie],
  ["header", ie],
  ["hr", ie],
  ["main", ie],
  ["nav", ie],
  ["ol", ie],
  ["pre", ie],
  ["section", ie],
  ["table", ie],
  ["ul", ie],
  ["rt", Al],
  ["rp", Al],
  ["tbody", wl],
  ["tfoot", wl]
]), gm = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]), _l = /* @__PURE__ */ new Set(["math", "svg"]), Sl = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignobject",
  "desc",
  "title"
]), mm = /\s|\//, bm = (
  /** @class */
  function() {
    function t(e, r) {
      r === void 0 && (r = {});
      var u, n, i, a, c;
      this.options = r, this.startIndex = 0, this.endIndex = 0, this.openTagStart = 0, this.tagname = "", this.attribname = "", this.attribvalue = "", this.attribs = null, this.stack = [], this.foreignContext = [], this.buffers = [], this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1, this.cbs = e ?? {}, this.lowerCaseTagNames = (u = r.lowerCaseTags) !== null && u !== void 0 ? u : !r.xmlMode, this.lowerCaseAttributeNames = (n = r.lowerCaseAttributeNames) !== null && n !== void 0 ? n : !r.xmlMode, this.tokenizer = new ((i = r.Tokenizer) !== null && i !== void 0 ? i : Xn.default)(this.options, this), (c = (a = this.cbs).onparserinit) === null || c === void 0 || c.call(a, this);
    }
    return t.prototype.ontext = function(e, r) {
      var u, n, i = this.getSlice(e, r);
      this.endIndex = r - 1, (n = (u = this.cbs).ontext) === null || n === void 0 || n.call(u, i), this.startIndex = r;
    }, t.prototype.ontextentity = function(e) {
      var r, u, n = this.tokenizer.getSectionStart();
      this.endIndex = n - 1, (u = (r = this.cbs).ontext) === null || u === void 0 || u.call(r, (0, xl.fromCodePoint)(e)), this.startIndex = n;
    }, t.prototype.isVoidElement = function(e) {
      return !this.options.xmlMode && gm.has(e);
    }, t.prototype.onopentagname = function(e, r) {
      this.endIndex = r;
      var u = this.getSlice(e, r);
      this.lowerCaseTagNames && (u = u.toLowerCase()), this.emitOpenTag(u);
    }, t.prototype.emitOpenTag = function(e) {
      var r, u, n, i;
      this.openTagStart = this.startIndex, this.tagname = e;
      var a = !this.options.xmlMode && hm.get(e);
      if (a)
        for (; this.stack.length > 0 && a.has(this.stack[this.stack.length - 1]); ) {
          var c = this.stack.pop();
          (u = (r = this.cbs).onclosetag) === null || u === void 0 || u.call(r, c, !0);
        }
      this.isVoidElement(e) || (this.stack.push(e), _l.has(e) ? this.foreignContext.push(!0) : Sl.has(e) && this.foreignContext.push(!1)), (i = (n = this.cbs).onopentagname) === null || i === void 0 || i.call(n, e), this.cbs.onopentag && (this.attribs = {});
    }, t.prototype.endOpenTag = function(e) {
      var r, u;
      this.startIndex = this.openTagStart, this.attribs && ((u = (r = this.cbs).onopentag) === null || u === void 0 || u.call(r, this.tagname, this.attribs, e), this.attribs = null), this.cbs.onclosetag && this.isVoidElement(this.tagname) && this.cbs.onclosetag(this.tagname, !0), this.tagname = "";
    }, t.prototype.onopentagend = function(e) {
      this.endIndex = e, this.endOpenTag(!1), this.startIndex = e + 1;
    }, t.prototype.onclosetag = function(e, r) {
      var u, n, i, a, c, o;
      this.endIndex = r;
      var f = this.getSlice(e, r);
      if (this.lowerCaseTagNames && (f = f.toLowerCase()), (_l.has(f) || Sl.has(f)) && this.foreignContext.pop(), this.isVoidElement(f))
        !this.options.xmlMode && f === "br" && ((n = (u = this.cbs).onopentagname) === null || n === void 0 || n.call(u, "br"), (a = (i = this.cbs).onopentag) === null || a === void 0 || a.call(i, "br", {}, !0), (o = (c = this.cbs).onclosetag) === null || o === void 0 || o.call(c, "br", !1));
      else {
        var s = this.stack.lastIndexOf(f);
        if (s !== -1)
          if (this.cbs.onclosetag)
            for (var p = this.stack.length - s; p--; )
              this.cbs.onclosetag(this.stack.pop(), p !== 0);
          else
            this.stack.length = s;
        else !this.options.xmlMode && f === "p" && (this.emitOpenTag("p"), this.closeCurrentTag(!0));
      }
      this.startIndex = r + 1;
    }, t.prototype.onselfclosingtag = function(e) {
      this.endIndex = e, this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1] ? (this.closeCurrentTag(!1), this.startIndex = e + 1) : this.onopentagend(e);
    }, t.prototype.closeCurrentTag = function(e) {
      var r, u, n = this.tagname;
      this.endOpenTag(e), this.stack[this.stack.length - 1] === n && ((u = (r = this.cbs).onclosetag) === null || u === void 0 || u.call(r, n, !e), this.stack.pop());
    }, t.prototype.onattribname = function(e, r) {
      this.startIndex = e;
      var u = this.getSlice(e, r);
      this.attribname = this.lowerCaseAttributeNames ? u.toLowerCase() : u;
    }, t.prototype.onattribdata = function(e, r) {
      this.attribvalue += this.getSlice(e, r);
    }, t.prototype.onattribentity = function(e) {
      this.attribvalue += (0, xl.fromCodePoint)(e);
    }, t.prototype.onattribend = function(e, r) {
      var u, n;
      this.endIndex = r, (n = (u = this.cbs).onattribute) === null || n === void 0 || n.call(u, this.attribname, this.attribvalue, e === Xn.QuoteType.Double ? '"' : e === Xn.QuoteType.Single ? "'" : e === Xn.QuoteType.NoValue ? void 0 : null), this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname) && (this.attribs[this.attribname] = this.attribvalue), this.attribvalue = "";
    }, t.prototype.getInstructionName = function(e) {
      var r = e.search(mm), u = r < 0 ? e : e.substr(0, r);
      return this.lowerCaseTagNames && (u = u.toLowerCase()), u;
    }, t.prototype.ondeclaration = function(e, r) {
      this.endIndex = r;
      var u = this.getSlice(e, r);
      if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(u);
        this.cbs.onprocessinginstruction("!".concat(n), "!".concat(u));
      }
      this.startIndex = r + 1;
    }, t.prototype.onprocessinginstruction = function(e, r) {
      this.endIndex = r;
      var u = this.getSlice(e, r);
      if (this.cbs.onprocessinginstruction) {
        var n = this.getInstructionName(u);
        this.cbs.onprocessinginstruction("?".concat(n), "?".concat(u));
      }
      this.startIndex = r + 1;
    }, t.prototype.oncomment = function(e, r, u) {
      var n, i, a, c;
      this.endIndex = r, (i = (n = this.cbs).oncomment) === null || i === void 0 || i.call(n, this.getSlice(e, r - u)), (c = (a = this.cbs).oncommentend) === null || c === void 0 || c.call(a), this.startIndex = r + 1;
    }, t.prototype.oncdata = function(e, r, u) {
      var n, i, a, c, o, f, s, p, l, h;
      this.endIndex = r;
      var b = this.getSlice(e, r - u);
      this.options.xmlMode || this.options.recognizeCDATA ? ((i = (n = this.cbs).oncdatastart) === null || i === void 0 || i.call(n), (c = (a = this.cbs).ontext) === null || c === void 0 || c.call(a, b), (f = (o = this.cbs).oncdataend) === null || f === void 0 || f.call(o)) : ((p = (s = this.cbs).oncomment) === null || p === void 0 || p.call(s, "[CDATA[".concat(b, "]]")), (h = (l = this.cbs).oncommentend) === null || h === void 0 || h.call(l)), this.startIndex = r + 1;
    }, t.prototype.onend = function() {
      var e, r;
      if (this.cbs.onclosetag) {
        this.endIndex = this.startIndex;
        for (var u = this.stack.length; u > 0; this.cbs.onclosetag(this.stack[--u], !0))
          ;
      }
      (r = (e = this.cbs).onend) === null || r === void 0 || r.call(e);
    }, t.prototype.reset = function() {
      var e, r, u, n;
      (r = (e = this.cbs).onreset) === null || r === void 0 || r.call(e), this.tokenizer.reset(), this.tagname = "", this.attribname = "", this.attribs = null, this.stack.length = 0, this.startIndex = 0, this.endIndex = 0, (n = (u = this.cbs).onparserinit) === null || n === void 0 || n.call(u, this), this.buffers.length = 0, this.bufferOffset = 0, this.writeIndex = 0, this.ended = !1;
    }, t.prototype.parseComplete = function(e) {
      this.reset(), this.end(e);
    }, t.prototype.getSlice = function(e, r) {
      for (; e - this.bufferOffset >= this.buffers[0].length; )
        this.shiftBuffer();
      for (var u = this.buffers[0].slice(e - this.bufferOffset, r - this.bufferOffset); r - this.bufferOffset > this.buffers[0].length; )
        this.shiftBuffer(), u += this.buffers[0].slice(0, r - this.bufferOffset);
      return u;
    }, t.prototype.shiftBuffer = function() {
      this.bufferOffset += this.buffers[0].length, this.writeIndex--, this.buffers.shift();
    }, t.prototype.write = function(e) {
      var r, u;
      if (this.ended) {
        (u = (r = this.cbs).onerror) === null || u === void 0 || u.call(r, new Error(".write() after done!"));
        return;
      }
      this.buffers.push(e), this.tokenizer.running && (this.tokenizer.write(e), this.writeIndex++);
    }, t.prototype.end = function(e) {
      var r, u;
      if (this.ended) {
        (u = (r = this.cbs).onerror) === null || u === void 0 || u.call(r, new Error(".end() after done!"));
        return;
      }
      e && this.write(e), this.ended = !0, this.tokenizer.end();
    }, t.prototype.pause = function() {
      this.tokenizer.pause();
    }, t.prototype.resume = function() {
      for (this.tokenizer.resume(); this.tokenizer.running && this.writeIndex < this.buffers.length; )
        this.tokenizer.write(this.buffers[this.writeIndex++]);
      this.ended && this.tokenizer.end();
    }, t.prototype.parseChunk = function(e) {
      this.write(e);
    }, t.prototype.done = function(e) {
      this.end(e);
    }, t;
  }()
);
Xu.Parser = bm;
var Ct = {}, bu = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0;
  var e;
  (function(u) {
    u.Root = "root", u.Text = "text", u.Directive = "directive", u.Comment = "comment", u.Script = "script", u.Style = "style", u.Tag = "tag", u.CDATA = "cdata", u.Doctype = "doctype";
  })(e = t.ElementType || (t.ElementType = {}));
  function r(u) {
    return u.type === e.Tag || u.type === e.Script || u.type === e.Style;
  }
  t.isTag = r, t.Root = e.Root, t.Text = e.Text, t.Directive = e.Directive, t.Comment = e.Comment, t.Script = e.Script, t.Style = e.Style, t.Tag = e.Tag, t.CDATA = e.CDATA, t.Doctype = e.Doctype;
})(bu);
var X = {}, Qt = N && N.__extends || /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(u, n) {
      u.__proto__ = n;
    } || function(u, n) {
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (u[i] = n[i]);
    }, t(e, r);
  };
  return function(e, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(e, r);
    function u() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (u.prototype = r.prototype, new u());
  };
}(), Fu = N && N.__assign || function() {
  return Fu = Object.assign || function(t) {
    for (var e, r = 1, u = arguments.length; r < u; r++) {
      e = arguments[r];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, Fu.apply(this, arguments);
};
Object.defineProperty(X, "__esModule", { value: !0 });
X.cloneNode = X.hasChildren = X.isDocument = X.isDirective = X.isComment = X.isText = X.isCDATA = X.isTag = X.Element = X.Document = X.CDATA = X.NodeWithChildren = X.ProcessingInstruction = X.Comment = X.Text = X.DataNode = X.Node = void 0;
var Le = bu, ls = (
  /** @class */
  function() {
    function t() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(t.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(e) {
        this.parent = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(e) {
        this.prev = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(e) {
        this.next = e;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.cloneNode = function(e) {
      return e === void 0 && (e = !1), cs(this, e);
    }, t;
  }()
);
X.Node = ls;
var va = (
  /** @class */
  function(t) {
    Qt(e, t);
    function e(r) {
      var u = t.call(this) || this;
      return u.data = r, u;
    }
    return Object.defineProperty(e.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(r) {
        this.data = r;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(ls)
);
X.DataNode = va;
var o0 = (
  /** @class */
  function(t) {
    Qt(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Le.ElementType.Text, r;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(va)
);
X.Text = o0;
var s0 = (
  /** @class */
  function(t) {
    Qt(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Le.ElementType.Comment, r;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(va)
);
X.Comment = s0;
var l0 = (
  /** @class */
  function(t) {
    Qt(e, t);
    function e(r, u) {
      var n = t.call(this, u) || this;
      return n.name = r, n.type = Le.ElementType.Directive, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(va)
);
X.ProcessingInstruction = l0;
var xa = (
  /** @class */
  function(t) {
    Qt(e, t);
    function e(r) {
      var u = t.call(this) || this;
      return u.children = r, u;
    }
    return Object.defineProperty(e.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var r;
        return (r = this.children[0]) !== null && r !== void 0 ? r : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(r) {
        this.children = r;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(ls)
);
X.NodeWithChildren = xa;
var c0 = (
  /** @class */
  function(t) {
    Qt(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Le.ElementType.CDATA, r;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(xa)
);
X.CDATA = c0;
var f0 = (
  /** @class */
  function(t) {
    Qt(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Le.ElementType.Root, r;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(xa)
);
X.Document = f0;
var d0 = (
  /** @class */
  function(t) {
    Qt(e, t);
    function e(r, u, n, i) {
      n === void 0 && (n = []), i === void 0 && (i = r === "script" ? Le.ElementType.Script : r === "style" ? Le.ElementType.Style : Le.ElementType.Tag);
      var a = t.call(this, n) || this;
      return a.name = r, a.attribs = u, a.type = i, a;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(r) {
        this.name = r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "attributes", {
      get: function() {
        var r = this;
        return Object.keys(this.attribs).map(function(u) {
          var n, i;
          return {
            name: u,
            value: r.attribs[u],
            namespace: (n = r["x-attribsNamespace"]) === null || n === void 0 ? void 0 : n[u],
            prefix: (i = r["x-attribsPrefix"]) === null || i === void 0 ? void 0 : i[u]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(xa)
);
X.Element = d0;
function p0(t) {
  return (0, Le.isTag)(t);
}
X.isTag = p0;
function h0(t) {
  return t.type === Le.ElementType.CDATA;
}
X.isCDATA = h0;
function g0(t) {
  return t.type === Le.ElementType.Text;
}
X.isText = g0;
function m0(t) {
  return t.type === Le.ElementType.Comment;
}
X.isComment = m0;
function b0(t) {
  return t.type === Le.ElementType.Directive;
}
X.isDirective = b0;
function y0(t) {
  return t.type === Le.ElementType.Root;
}
X.isDocument = y0;
function ym(t) {
  return Object.prototype.hasOwnProperty.call(t, "children");
}
X.hasChildren = ym;
function cs(t, e) {
  e === void 0 && (e = !1);
  var r;
  if (g0(t))
    r = new o0(t.data);
  else if (m0(t))
    r = new s0(t.data);
  else if (p0(t)) {
    var u = e ? Ja(t.children) : [], n = new d0(t.name, Fu({}, t.attribs), u);
    u.forEach(function(o) {
      return o.parent = n;
    }), t.namespace != null && (n.namespace = t.namespace), t["x-attribsNamespace"] && (n["x-attribsNamespace"] = Fu({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (n["x-attribsPrefix"] = Fu({}, t["x-attribsPrefix"])), r = n;
  } else if (h0(t)) {
    var u = e ? Ja(t.children) : [], i = new c0(u);
    u.forEach(function(f) {
      return f.parent = i;
    }), r = i;
  } else if (y0(t)) {
    var u = e ? Ja(t.children) : [], a = new f0(u);
    u.forEach(function(f) {
      return f.parent = a;
    }), t["x-mode"] && (a["x-mode"] = t["x-mode"]), r = a;
  } else if (b0(t)) {
    var c = new l0(t.name, t.data);
    t["x-name"] != null && (c["x-name"] = t["x-name"], c["x-publicId"] = t["x-publicId"], c["x-systemId"] = t["x-systemId"]), r = c;
  } else
    throw new Error("Not implemented yet: ".concat(t.type));
  return r.startIndex = t.startIndex, r.endIndex = t.endIndex, t.sourceCodeLocation != null && (r.sourceCodeLocation = t.sourceCodeLocation), r;
}
X.cloneNode = cs;
function Ja(t) {
  for (var e = t.map(function(u) {
    return cs(u, !0);
  }), r = 1; r < e.length; r++)
    e[r].prev = e[r - 1], e[r - 1].next = e[r];
  return e;
}
(function(t) {
  var e = N && N.__createBinding || (Object.create ? function(c, o, f, s) {
    s === void 0 && (s = f);
    var p = Object.getOwnPropertyDescriptor(o, f);
    (!p || ("get" in p ? !o.__esModule : p.writable || p.configurable)) && (p = { enumerable: !0, get: function() {
      return o[f];
    } }), Object.defineProperty(c, s, p);
  } : function(c, o, f, s) {
    s === void 0 && (s = f), c[s] = o[f];
  }), r = N && N.__exportStar || function(c, o) {
    for (var f in c) f !== "default" && !Object.prototype.hasOwnProperty.call(o, f) && e(o, c, f);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DomHandler = void 0;
  var u = bu, n = X;
  r(X, t);
  var i = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, a = (
    /** @class */
    function() {
      function c(o, f, s) {
        this.dom = [], this.root = new n.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof f == "function" && (s = f, f = i), typeof o == "object" && (f = o, o = void 0), this.callback = o ?? null, this.options = f ?? i, this.elementCB = s ?? null;
      }
      return c.prototype.onparserinit = function(o) {
        this.parser = o;
      }, c.prototype.onreset = function() {
        this.dom = [], this.root = new n.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, c.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, c.prototype.onerror = function(o) {
        this.handleCallback(o);
      }, c.prototype.onclosetag = function() {
        this.lastNode = null;
        var o = this.tagStack.pop();
        this.options.withEndIndices && (o.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(o);
      }, c.prototype.onopentag = function(o, f) {
        var s = this.options.xmlMode ? u.ElementType.Tag : void 0, p = new n.Element(o, f, void 0, s);
        this.addNode(p), this.tagStack.push(p);
      }, c.prototype.ontext = function(o) {
        var f = this.lastNode;
        if (f && f.type === u.ElementType.Text)
          f.data += o, this.options.withEndIndices && (f.endIndex = this.parser.endIndex);
        else {
          var s = new n.Text(o);
          this.addNode(s), this.lastNode = s;
        }
      }, c.prototype.oncomment = function(o) {
        if (this.lastNode && this.lastNode.type === u.ElementType.Comment) {
          this.lastNode.data += o;
          return;
        }
        var f = new n.Comment(o);
        this.addNode(f), this.lastNode = f;
      }, c.prototype.oncommentend = function() {
        this.lastNode = null;
      }, c.prototype.oncdatastart = function() {
        var o = new n.Text(""), f = new n.CDATA([o]);
        this.addNode(f), o.parent = f, this.lastNode = o;
      }, c.prototype.oncdataend = function() {
        this.lastNode = null;
      }, c.prototype.onprocessinginstruction = function(o, f) {
        var s = new n.ProcessingInstruction(o, f);
        this.addNode(s);
      }, c.prototype.handleCallback = function(o) {
        if (typeof this.callback == "function")
          this.callback(o, this.dom);
        else if (o)
          throw o;
      }, c.prototype.addNode = function(o) {
        var f = this.tagStack[this.tagStack.length - 1], s = f.children[f.children.length - 1];
        this.options.withStartIndices && (o.startIndex = this.parser.startIndex), this.options.withEndIndices && (o.endIndex = this.parser.endIndex), f.children.push(o), s && (o.prev = s, s.next = o), o.parent = f, this.lastNode = null;
      }, c;
    }()
  );
  t.DomHandler = a, t.default = a;
})(Ct);
var oi = {}, er = {}, dn = {}, v0 = {}, yr = {}, fs = {};
Object.defineProperty(fs, "__esModule", { value: !0 });
function Yn(t) {
  for (var e = 1; e < t.length; e++)
    t[e][0] += t[e - 1][0] + 1;
  return t;
}
fs.default = new Map(/* @__PURE__ */ Yn([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ Yn([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ Yn([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ Yn([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
var xi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.escapeText = t.escapeAttribute = t.escapeUTF8 = t.escape = t.encodeXML = t.getCodePoint = t.xmlReplacer = void 0, t.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
  var e = /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [39, "&apos;"],
    [60, "&lt;"],
    [62, "&gt;"]
  ]);
  t.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  String.prototype.codePointAt != null ? function(n, i) {
    return n.codePointAt(i);
  } : (
    // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
    function(n, i) {
      return (n.charCodeAt(i) & 64512) === 55296 ? (n.charCodeAt(i) - 55296) * 1024 + n.charCodeAt(i + 1) - 56320 + 65536 : n.charCodeAt(i);
    }
  );
  function r(n) {
    for (var i = "", a = 0, c; (c = t.xmlReplacer.exec(n)) !== null; ) {
      var o = c.index, f = n.charCodeAt(o), s = e.get(f);
      s !== void 0 ? (i += n.substring(a, o) + s, a = o + 1) : (i += "".concat(n.substring(a, o), "&#x").concat((0, t.getCodePoint)(n, o).toString(16), ";"), a = t.xmlReplacer.lastIndex += +((f & 64512) === 55296));
    }
    return i + n.substr(a);
  }
  t.encodeXML = r, t.escape = r;
  function u(n, i) {
    return function(c) {
      for (var o, f = 0, s = ""; o = n.exec(c); )
        f !== o.index && (s += c.substring(f, o.index)), s += i.get(o[0].charCodeAt(0)), f = o.index + 1;
      return s + c.substring(f);
    };
  }
  t.escapeUTF8 = u(/[&<>'"]/g, e), t.escapeAttribute = u(/["&\u00A0]/g, /* @__PURE__ */ new Map([
    [34, "&quot;"],
    [38, "&amp;"],
    [160, "&nbsp;"]
  ])), t.escapeText = u(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
    [38, "&amp;"],
    [60, "&lt;"],
    [62, "&gt;"],
    [160, "&nbsp;"]
  ]));
})(xi);
var vm = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.encodeNonAsciiHTML = yr.encodeHTML = void 0;
var xm = vm(fs), x0 = xi, wm = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
function Em(t) {
  return w0(wm, t);
}
yr.encodeHTML = Em;
function Am(t) {
  return w0(x0.xmlReplacer, t);
}
yr.encodeNonAsciiHTML = Am;
function w0(t, e) {
  for (var r = "", u = 0, n; (n = t.exec(e)) !== null; ) {
    var i = n.index;
    r += e.substring(u, i);
    var a = e.charCodeAt(i), c = xm.default.get(a);
    if (typeof c == "object") {
      if (i + 1 < e.length) {
        var o = e.charCodeAt(i + 1), f = typeof c.n == "number" ? c.n === o ? c.o : void 0 : c.n.get(o);
        if (f !== void 0) {
          r += f, u = t.lastIndex += 1;
          continue;
        }
      }
      c = c.v;
    }
    if (c !== void 0)
      r += c, u = i + 1;
    else {
      var s = (0, x0.getCodePoint)(e, i);
      r += "&#x".concat(s.toString(16), ";"), u = t.lastIndex += +(s !== a);
    }
  }
  return r + e.substr(u);
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.decodeXMLStrict = t.decodeHTML5Strict = t.decodeHTML4Strict = t.decodeHTML5 = t.decodeHTML4 = t.decodeHTMLAttribute = t.decodeHTMLStrict = t.decodeHTML = t.decodeXML = t.DecodingMode = t.EntityDecoder = t.encodeHTML5 = t.encodeHTML4 = t.encodeNonAsciiHTML = t.encodeHTML = t.escapeText = t.escapeAttribute = t.escapeUTF8 = t.escape = t.encodeXML = t.encode = t.decodeStrict = t.decode = t.EncodingMode = t.EntityLevel = void 0;
  var e = Yu, r = yr, u = xi, n;
  (function(l) {
    l[l.XML = 0] = "XML", l[l.HTML = 1] = "HTML";
  })(n = t.EntityLevel || (t.EntityLevel = {}));
  var i;
  (function(l) {
    l[l.UTF8 = 0] = "UTF8", l[l.ASCII = 1] = "ASCII", l[l.Extensive = 2] = "Extensive", l[l.Attribute = 3] = "Attribute", l[l.Text = 4] = "Text";
  })(i = t.EncodingMode || (t.EncodingMode = {}));
  function a(l, h) {
    h === void 0 && (h = n.XML);
    var b = typeof h == "number" ? h : h.level;
    if (b === n.HTML) {
      var v = typeof h == "object" ? h.mode : void 0;
      return (0, e.decodeHTML)(l, v);
    }
    return (0, e.decodeXML)(l);
  }
  t.decode = a;
  function c(l, h) {
    var b;
    h === void 0 && (h = n.XML);
    var v = typeof h == "number" ? { level: h } : h;
    return (b = v.mode) !== null && b !== void 0 || (v.mode = e.DecodingMode.Strict), a(l, v);
  }
  t.decodeStrict = c;
  function o(l, h) {
    h === void 0 && (h = n.XML);
    var b = typeof h == "number" ? { level: h } : h;
    return b.mode === i.UTF8 ? (0, u.escapeUTF8)(l) : b.mode === i.Attribute ? (0, u.escapeAttribute)(l) : b.mode === i.Text ? (0, u.escapeText)(l) : b.level === n.HTML ? b.mode === i.ASCII ? (0, r.encodeNonAsciiHTML)(l) : (0, r.encodeHTML)(l) : (0, u.encodeXML)(l);
  }
  t.encode = o;
  var f = xi;
  Object.defineProperty(t, "encodeXML", { enumerable: !0, get: function() {
    return f.encodeXML;
  } }), Object.defineProperty(t, "escape", { enumerable: !0, get: function() {
    return f.escape;
  } }), Object.defineProperty(t, "escapeUTF8", { enumerable: !0, get: function() {
    return f.escapeUTF8;
  } }), Object.defineProperty(t, "escapeAttribute", { enumerable: !0, get: function() {
    return f.escapeAttribute;
  } }), Object.defineProperty(t, "escapeText", { enumerable: !0, get: function() {
    return f.escapeText;
  } });
  var s = yr;
  Object.defineProperty(t, "encodeHTML", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(t, "encodeNonAsciiHTML", { enumerable: !0, get: function() {
    return s.encodeNonAsciiHTML;
  } }), Object.defineProperty(t, "encodeHTML4", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } }), Object.defineProperty(t, "encodeHTML5", { enumerable: !0, get: function() {
    return s.encodeHTML;
  } });
  var p = Yu;
  Object.defineProperty(t, "EntityDecoder", { enumerable: !0, get: function() {
    return p.EntityDecoder;
  } }), Object.defineProperty(t, "DecodingMode", { enumerable: !0, get: function() {
    return p.DecodingMode;
  } }), Object.defineProperty(t, "decodeXML", { enumerable: !0, get: function() {
    return p.decodeXML;
  } }), Object.defineProperty(t, "decodeHTML", { enumerable: !0, get: function() {
    return p.decodeHTML;
  } }), Object.defineProperty(t, "decodeHTMLStrict", { enumerable: !0, get: function() {
    return p.decodeHTMLStrict;
  } }), Object.defineProperty(t, "decodeHTMLAttribute", { enumerable: !0, get: function() {
    return p.decodeHTMLAttribute;
  } }), Object.defineProperty(t, "decodeHTML4", { enumerable: !0, get: function() {
    return p.decodeHTML;
  } }), Object.defineProperty(t, "decodeHTML5", { enumerable: !0, get: function() {
    return p.decodeHTML;
  } }), Object.defineProperty(t, "decodeHTML4Strict", { enumerable: !0, get: function() {
    return p.decodeHTMLStrict;
  } }), Object.defineProperty(t, "decodeHTML5Strict", { enumerable: !0, get: function() {
    return p.decodeHTMLStrict;
  } }), Object.defineProperty(t, "decodeXMLStrict", { enumerable: !0, get: function() {
    return p.decodeXML;
  } });
})(v0);
var ru = {};
Object.defineProperty(ru, "__esModule", { value: !0 });
ru.attributeNames = ru.elementNames = void 0;
ru.elementNames = new Map([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "clipPath",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "foreignObject",
  "glyphRef",
  "linearGradient",
  "radialGradient",
  "textPath"
].map(function(t) {
  return [t.toLowerCase(), t];
}));
ru.attributeNames = new Map([
  "definitionURL",
  "attributeName",
  "attributeType",
  "baseFrequency",
  "baseProfile",
  "calcMode",
  "clipPathUnits",
  "diffuseConstant",
  "edgeMode",
  "filterUnits",
  "glyphRef",
  "gradientTransform",
  "gradientUnits",
  "kernelMatrix",
  "kernelUnitLength",
  "keyPoints",
  "keySplines",
  "keyTimes",
  "lengthAdjust",
  "limitingConeAngle",
  "markerHeight",
  "markerUnits",
  "markerWidth",
  "maskContentUnits",
  "maskUnits",
  "numOctaves",
  "pathLength",
  "patternContentUnits",
  "patternTransform",
  "patternUnits",
  "pointsAtX",
  "pointsAtY",
  "pointsAtZ",
  "preserveAlpha",
  "preserveAspectRatio",
  "primitiveUnits",
  "refX",
  "refY",
  "repeatCount",
  "repeatDur",
  "requiredExtensions",
  "requiredFeatures",
  "specularConstant",
  "specularExponent",
  "spreadMethod",
  "startOffset",
  "stdDeviation",
  "stitchTiles",
  "surfaceScale",
  "systemLanguage",
  "tableValues",
  "targetX",
  "targetY",
  "textLength",
  "viewBox",
  "viewTarget",
  "xChannelSelector",
  "yChannelSelector",
  "zoomAndPan"
].map(function(t) {
  return [t.toLowerCase(), t];
}));
var Wr = N && N.__assign || function() {
  return Wr = Object.assign || function(t) {
    for (var e, r = 1, u = arguments.length; r < u; r++) {
      e = arguments[r];
      for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }
    return t;
  }, Wr.apply(this, arguments);
}, _m = N && N.__createBinding || (Object.create ? function(t, e, r, u) {
  u === void 0 && (u = r);
  var n = Object.getOwnPropertyDescriptor(e, r);
  (!n || ("get" in n ? !e.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: function() {
    return e[r];
  } }), Object.defineProperty(t, u, n);
} : function(t, e, r, u) {
  u === void 0 && (u = r), t[u] = e[r];
}), Sm = N && N.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), Dm = N && N.__importStar || function(t) {
  if (t && t.__esModule) return t;
  var e = {};
  if (t != null) for (var r in t) r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && _m(e, t, r);
  return Sm(e, t), e;
};
Object.defineProperty(dn, "__esModule", { value: !0 });
dn.render = void 0;
var At = Dm(bu), wi = v0, E0 = ru, Tm = /* @__PURE__ */ new Set([
  "style",
  "script",
  "xmp",
  "iframe",
  "noembed",
  "noframes",
  "plaintext",
  "noscript"
]);
function km(t) {
  return t.replace(/"/g, "&quot;");
}
function Cm(t, e) {
  var r;
  if (t) {
    var u = ((r = e.encodeEntities) !== null && r !== void 0 ? r : e.decodeEntities) === !1 ? km : e.xmlMode || e.encodeEntities !== "utf8" ? wi.encodeXML : wi.escapeAttribute;
    return Object.keys(t).map(function(n) {
      var i, a, c = (i = t[n]) !== null && i !== void 0 ? i : "";
      return e.xmlMode === "foreign" && (n = (a = E0.attributeNames.get(n)) !== null && a !== void 0 ? a : n), !e.emptyAttrs && !e.xmlMode && c === "" ? n : "".concat(n, '="').concat(u(c), '"');
    }).join(" ");
  }
}
var Dl = /* @__PURE__ */ new Set([
  "area",
  "base",
  "basefont",
  "br",
  "col",
  "command",
  "embed",
  "frame",
  "hr",
  "img",
  "input",
  "isindex",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
]);
function wa(t, e) {
  e === void 0 && (e = {});
  for (var r = ("length" in t) ? t : [t], u = "", n = 0; n < r.length; n++)
    u += Om(r[n], e);
  return u;
}
dn.render = wa;
dn.default = wa;
function Om(t, e) {
  switch (t.type) {
    case At.Root:
      return wa(t.children, e);
    case At.Doctype:
    case At.Directive:
      return Mm(t);
    case At.Comment:
      return Bm(t);
    case At.CDATA:
      return Im(t);
    case At.Script:
    case At.Style:
    case At.Tag:
      return Nm(t, e);
    case At.Text:
      return Lm(t, e);
  }
}
var Pm = /* @__PURE__ */ new Set([
  "mi",
  "mo",
  "mn",
  "ms",
  "mtext",
  "annotation-xml",
  "foreignObject",
  "desc",
  "title"
]), $m = /* @__PURE__ */ new Set(["svg", "math"]);
function Nm(t, e) {
  var r;
  e.xmlMode === "foreign" && (t.name = (r = E0.elementNames.get(t.name)) !== null && r !== void 0 ? r : t.name, t.parent && Pm.has(t.parent.name) && (e = Wr(Wr({}, e), { xmlMode: !1 }))), !e.xmlMode && $m.has(t.name) && (e = Wr(Wr({}, e), { xmlMode: "foreign" }));
  var u = "<".concat(t.name), n = Cm(t.attribs, e);
  return n && (u += " ".concat(n)), t.children.length === 0 && (e.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    e.selfClosingTags !== !1
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    e.selfClosingTags && Dl.has(t.name)
  )) ? (e.xmlMode || (u += " "), u += "/>") : (u += ">", t.children.length > 0 && (u += wa(t.children, e)), (e.xmlMode || !Dl.has(t.name)) && (u += "</".concat(t.name, ">"))), u;
}
function Mm(t) {
  return "<".concat(t.data, ">");
}
function Lm(t, e) {
  var r, u = t.data || "";
  return ((r = e.encodeEntities) !== null && r !== void 0 ? r : e.decodeEntities) !== !1 && !(!e.xmlMode && t.parent && Tm.has(t.parent.name)) && (u = e.xmlMode || e.encodeEntities !== "utf8" ? (0, wi.encodeXML)(u) : (0, wi.escapeText)(u)), u;
}
function Im(t) {
  return "<![CDATA[".concat(t.children[0].data, "]]>");
}
function Bm(t) {
  return "<!--".concat(t.data, "-->");
}
var Rm = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(er, "__esModule", { value: !0 });
er.getOuterHTML = A0;
er.getInnerHTML = qm;
er.getText = si;
er.textContent = io;
er.innerText = ao;
var bt = Ct, Fm = Rm(dn), jm = bu;
function A0(t, e) {
  return (0, Fm.default)(t, e);
}
function qm(t, e) {
  return (0, bt.hasChildren)(t) ? t.children.map(function(r) {
    return A0(r, e);
  }).join("") : "";
}
function si(t) {
  return Array.isArray(t) ? t.map(si).join("") : (0, bt.isTag)(t) ? t.name === "br" ? `
` : si(t.children) : (0, bt.isCDATA)(t) ? si(t.children) : (0, bt.isText)(t) ? t.data : "";
}
function io(t) {
  return Array.isArray(t) ? t.map(io).join("") : (0, bt.hasChildren)(t) && !(0, bt.isComment)(t) ? io(t.children) : (0, bt.isText)(t) ? t.data : "";
}
function ao(t) {
  return Array.isArray(t) ? t.map(ao).join("") : (0, bt.hasChildren)(t) && (t.type === jm.ElementType.Tag || (0, bt.isCDATA)(t)) ? ao(t.children) : (0, bt.isText)(t) ? t.data : "";
}
var vt = {};
Object.defineProperty(vt, "__esModule", { value: !0 });
vt.getChildren = _0;
vt.getParent = S0;
vt.getSiblings = Um;
vt.getAttributeValue = Vm;
vt.hasAttrib = zm;
vt.getName = Hm;
vt.nextElementSibling = Gm;
vt.prevElementSibling = Wm;
var ds = Ct;
function _0(t) {
  return (0, ds.hasChildren)(t) ? t.children : [];
}
function S0(t) {
  return t.parent || null;
}
function Um(t) {
  var e, r, u = S0(t);
  if (u != null)
    return _0(u);
  for (var n = [t], i = t.prev, a = t.next; i != null; )
    n.unshift(i), e = i, i = e.prev;
  for (; a != null; )
    n.push(a), r = a, a = r.next;
  return n;
}
function Vm(t, e) {
  var r;
  return (r = t.attribs) === null || r === void 0 ? void 0 : r[e];
}
function zm(t, e) {
  return t.attribs != null && Object.prototype.hasOwnProperty.call(t.attribs, e) && t.attribs[e] != null;
}
function Hm(t) {
  return t.name;
}
function Gm(t) {
  for (var e, r = t.next; r !== null && !(0, ds.isTag)(r); )
    e = r, r = e.next;
  return r;
}
function Wm(t) {
  for (var e, r = t.prev; r !== null && !(0, ds.isTag)(r); )
    e = r, r = e.prev;
  return r;
}
var tr = {};
Object.defineProperty(tr, "__esModule", { value: !0 });
tr.removeElement = pn;
tr.replaceElement = Jm;
tr.appendChild = Xm;
tr.append = Ym;
tr.prependChild = Zm;
tr.prepend = Km;
function pn(t) {
  if (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.parent) {
    var e = t.parent.children, r = e.lastIndexOf(t);
    r >= 0 && e.splice(r, 1);
  }
  t.next = null, t.prev = null, t.parent = null;
}
function Jm(t, e) {
  var r = e.prev = t.prev;
  r && (r.next = e);
  var u = e.next = t.next;
  u && (u.prev = e);
  var n = e.parent = t.parent;
  if (n) {
    var i = n.children;
    i[i.lastIndexOf(t)] = e, t.parent = null;
  }
}
function Xm(t, e) {
  if (pn(e), e.next = null, e.parent = t, t.children.push(e) > 1) {
    var r = t.children[t.children.length - 2];
    r.next = e, e.prev = r;
  } else
    e.prev = null;
}
function Ym(t, e) {
  pn(e);
  var r = t.parent, u = t.next;
  if (e.next = u, e.prev = t, t.next = e, e.parent = r, u) {
    if (u.prev = e, r) {
      var n = r.children;
      n.splice(n.lastIndexOf(u), 0, e);
    }
  } else r && r.children.push(e);
}
function Zm(t, e) {
  if (pn(e), e.parent = t, e.prev = null, t.children.unshift(e) !== 1) {
    var r = t.children[1];
    r.prev = e, e.next = r;
  } else
    e.next = null;
}
function Km(t, e) {
  pn(e);
  var r = t.parent;
  if (r) {
    var u = r.children;
    u.splice(u.indexOf(t), 0, e);
  }
  t.prev && (t.prev.next = e), e.parent = r, e.prev = t.prev, e.next = t, t.prev = e;
}
var Nt = {};
Object.defineProperty(Nt, "__esModule", { value: !0 });
Nt.filter = Qm;
Nt.find = D0;
Nt.findOneChild = e1;
Nt.findOne = T0;
Nt.existsOne = k0;
Nt.findAll = t1;
var vr = Ct;
function Qm(t, e, r, u) {
  return r === void 0 && (r = !0), u === void 0 && (u = 1 / 0), D0(t, Array.isArray(e) ? e : [e], r, u);
}
function D0(t, e, r, u) {
  for (var n = [], i = [Array.isArray(e) ? e : [e]], a = [0]; ; ) {
    if (a[0] >= i[0].length) {
      if (a.length === 1)
        return n;
      i.shift(), a.shift();
      continue;
    }
    var c = i[0][a[0]++];
    if (t(c) && (n.push(c), --u <= 0))
      return n;
    r && (0, vr.hasChildren)(c) && c.children.length > 0 && (a.unshift(0), i.unshift(c.children));
  }
}
function e1(t, e) {
  return e.find(t);
}
function T0(t, e, r) {
  r === void 0 && (r = !0);
  for (var u = Array.isArray(e) ? e : [e], n = 0; n < u.length; n++) {
    var i = u[n];
    if ((0, vr.isTag)(i) && t(i))
      return i;
    if (r && (0, vr.hasChildren)(i) && i.children.length > 0) {
      var a = T0(t, i.children, !0);
      if (a)
        return a;
    }
  }
  return null;
}
function k0(t, e) {
  return (Array.isArray(e) ? e : [e]).some(function(r) {
    return (0, vr.isTag)(r) && t(r) || (0, vr.hasChildren)(r) && k0(t, r.children);
  });
}
function t1(t, e) {
  for (var r = [], u = [Array.isArray(e) ? e : [e]], n = [0]; ; ) {
    if (n[0] >= u[0].length) {
      if (u.length === 1)
        return r;
      u.shift(), n.shift();
      continue;
    }
    var i = u[0][n[0]++];
    (0, vr.isTag)(i) && t(i) && r.push(i), (0, vr.hasChildren)(i) && i.children.length > 0 && (n.unshift(0), u.unshift(i.children));
  }
}
var Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.testElement = u1;
Mt.getElements = n1;
Mt.getElementById = i1;
Mt.getElementsByTagName = a1;
Mt.getElementsByClassName = o1;
Mt.getElementsByTagType = s1;
var hr = Ct, hn = Nt, Ei = {
  tag_name: function(t) {
    return typeof t == "function" ? function(e) {
      return (0, hr.isTag)(e) && t(e.name);
    } : t === "*" ? hr.isTag : function(e) {
      return (0, hr.isTag)(e) && e.name === t;
    };
  },
  tag_type: function(t) {
    return typeof t == "function" ? function(e) {
      return t(e.type);
    } : function(e) {
      return e.type === t;
    };
  },
  tag_contains: function(t) {
    return typeof t == "function" ? function(e) {
      return (0, hr.isText)(e) && t(e.data);
    } : function(e) {
      return (0, hr.isText)(e) && e.data === t;
    };
  }
};
function ps(t, e) {
  return typeof e == "function" ? function(r) {
    return (0, hr.isTag)(r) && e(r.attribs[t]);
  } : function(r) {
    return (0, hr.isTag)(r) && r.attribs[t] === e;
  };
}
function r1(t, e) {
  return function(r) {
    return t(r) || e(r);
  };
}
function C0(t) {
  var e = Object.keys(t).map(function(r) {
    var u = t[r];
    return Object.prototype.hasOwnProperty.call(Ei, r) ? Ei[r](u) : ps(r, u);
  });
  return e.length === 0 ? null : e.reduce(r1);
}
function u1(t, e) {
  var r = C0(t);
  return r ? r(e) : !0;
}
function n1(t, e, r, u) {
  u === void 0 && (u = 1 / 0);
  var n = C0(t);
  return n ? (0, hn.filter)(n, e, r, u) : [];
}
function i1(t, e, r) {
  return r === void 0 && (r = !0), Array.isArray(e) || (e = [e]), (0, hn.findOne)(ps("id", t), e, r);
}
function a1(t, e, r, u) {
  return r === void 0 && (r = !0), u === void 0 && (u = 1 / 0), (0, hn.filter)(Ei.tag_name(t), e, r, u);
}
function o1(t, e, r, u) {
  return r === void 0 && (r = !0), u === void 0 && (u = 1 / 0), (0, hn.filter)(ps("class", t), e, r, u);
}
function s1(t, e, r, u) {
  return r === void 0 && (r = !0), u === void 0 && (u = 1 / 0), (0, hn.filter)(Ei.tag_type(t), e, r, u);
}
var _r = {};
Object.defineProperty(_r, "__esModule", { value: !0 });
_r.DocumentPosition = void 0;
_r.removeSubsets = l1;
_r.compareDocumentPosition = O0;
_r.uniqueSort = c1;
var Tl = Ct;
function l1(t) {
  for (var e = t.length; --e >= 0; ) {
    var r = t[e];
    if (e > 0 && t.lastIndexOf(r, e - 1) >= 0) {
      t.splice(e, 1);
      continue;
    }
    for (var u = r.parent; u; u = u.parent)
      if (t.includes(u)) {
        t.splice(e, 1);
        break;
      }
  }
  return t;
}
var at;
(function(t) {
  t[t.DISCONNECTED = 1] = "DISCONNECTED", t[t.PRECEDING = 2] = "PRECEDING", t[t.FOLLOWING = 4] = "FOLLOWING", t[t.CONTAINS = 8] = "CONTAINS", t[t.CONTAINED_BY = 16] = "CONTAINED_BY";
})(at || (_r.DocumentPosition = at = {}));
function O0(t, e) {
  var r = [], u = [];
  if (t === e)
    return 0;
  for (var n = (0, Tl.hasChildren)(t) ? t : t.parent; n; )
    r.unshift(n), n = n.parent;
  for (n = (0, Tl.hasChildren)(e) ? e : e.parent; n; )
    u.unshift(n), n = n.parent;
  for (var i = Math.min(r.length, u.length), a = 0; a < i && r[a] === u[a]; )
    a++;
  if (a === 0)
    return at.DISCONNECTED;
  var c = r[a - 1], o = c.children, f = r[a], s = u[a];
  return o.indexOf(f) > o.indexOf(s) ? c === e ? at.FOLLOWING | at.CONTAINED_BY : at.FOLLOWING : c === t ? at.PRECEDING | at.CONTAINS : at.PRECEDING;
}
function c1(t) {
  return t = t.filter(function(e, r, u) {
    return !u.includes(e, r + 1);
  }), t.sort(function(e, r) {
    var u = O0(e, r);
    return u & at.PRECEDING ? -1 : u & at.FOLLOWING ? 1 : 0;
  }), t;
}
var hs = {};
Object.defineProperty(hs, "__esModule", { value: !0 });
hs.getFeed = d1;
var f1 = er, gn = Mt;
function d1(t) {
  var e = Ai(b1, t);
  return e ? e.name === "feed" ? p1(e) : h1(e) : null;
}
function p1(t) {
  var e, r = t.children, u = {
    type: "atom",
    items: (0, gn.getElementsByTagName)("entry", r).map(function(a) {
      var c, o = a.children, f = { media: P0(o) };
      Ne(f, "id", "id", o), Ne(f, "title", "title", o);
      var s = (c = Ai("link", o)) === null || c === void 0 ? void 0 : c.attribs.href;
      s && (f.link = s);
      var p = Jt("summary", o) || Jt("content", o);
      p && (f.description = p);
      var l = Jt("updated", o);
      return l && (f.pubDate = new Date(l)), f;
    })
  };
  Ne(u, "id", "id", r), Ne(u, "title", "title", r);
  var n = (e = Ai("link", r)) === null || e === void 0 ? void 0 : e.attribs.href;
  n && (u.link = n), Ne(u, "description", "subtitle", r);
  var i = Jt("updated", r);
  return i && (u.updated = new Date(i)), Ne(u, "author", "email", r, !0), u;
}
function h1(t) {
  var e, r, u = (r = (e = Ai("channel", t.children)) === null || e === void 0 ? void 0 : e.children) !== null && r !== void 0 ? r : [], n = {
    type: t.name.substr(0, 3),
    id: "",
    items: (0, gn.getElementsByTagName)("item", t.children).map(function(a) {
      var c = a.children, o = { media: P0(c) };
      Ne(o, "id", "guid", c), Ne(o, "title", "title", c), Ne(o, "link", "link", c), Ne(o, "description", "description", c);
      var f = Jt("pubDate", c) || Jt("dc:date", c);
      return f && (o.pubDate = new Date(f)), o;
    })
  };
  Ne(n, "title", "title", u), Ne(n, "link", "link", u), Ne(n, "description", "description", u);
  var i = Jt("lastBuildDate", u);
  return i && (n.updated = new Date(i)), Ne(n, "author", "managingEditor", u, !0), n;
}
var g1 = ["url", "type", "lang"], m1 = [
  "fileSize",
  "bitrate",
  "framerate",
  "samplingrate",
  "channels",
  "duration",
  "height",
  "width"
];
function P0(t) {
  return (0, gn.getElementsByTagName)("media:content", t).map(function(e) {
    for (var r = e.attribs, u = {
      medium: r.medium,
      isDefault: !!r.isDefault
    }, n = 0, i = g1; n < i.length; n++) {
      var a = i[n];
      r[a] && (u[a] = r[a]);
    }
    for (var c = 0, o = m1; c < o.length; c++) {
      var a = o[c];
      r[a] && (u[a] = parseInt(r[a], 10));
    }
    return r.expression && (u.expression = r.expression), u;
  });
}
function Ai(t, e) {
  return (0, gn.getElementsByTagName)(t, e, !0, 1)[0];
}
function Jt(t, e, r) {
  return r === void 0 && (r = !1), (0, f1.textContent)((0, gn.getElementsByTagName)(t, e, r, 1)).trim();
}
function Ne(t, e, r, u, n) {
  n === void 0 && (n = !1);
  var i = Jt(r, u, n);
  i && (t[e] = i);
}
function b1(t) {
  return t === "rss" || t === "feed" || t === "rdf:RDF";
}
(function(t) {
  var e = N && N.__createBinding || (Object.create ? function(n, i, a, c) {
    c === void 0 && (c = a);
    var o = Object.getOwnPropertyDescriptor(i, a);
    (!o || ("get" in o ? !i.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
      return i[a];
    } }), Object.defineProperty(n, c, o);
  } : function(n, i, a, c) {
    c === void 0 && (c = a), n[c] = i[a];
  }), r = N && N.__exportStar || function(n, i) {
    for (var a in n) a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && e(i, n, a);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.hasChildren = t.isDocument = t.isComment = t.isText = t.isCDATA = t.isTag = void 0, r(er, t), r(vt, t), r(tr, t), r(Nt, t), r(Mt, t), r(_r, t), r(hs, t);
  var u = Ct;
  Object.defineProperty(t, "isTag", { enumerable: !0, get: function() {
    return u.isTag;
  } }), Object.defineProperty(t, "isCDATA", { enumerable: !0, get: function() {
    return u.isCDATA;
  } }), Object.defineProperty(t, "isText", { enumerable: !0, get: function() {
    return u.isText;
  } }), Object.defineProperty(t, "isComment", { enumerable: !0, get: function() {
    return u.isComment;
  } }), Object.defineProperty(t, "isDocument", { enumerable: !0, get: function() {
    return u.isDocument;
  } }), Object.defineProperty(t, "hasChildren", { enumerable: !0, get: function() {
    return u.hasChildren;
  } });
})(oi);
(function(t) {
  var e = N && N.__createBinding || (Object.create ? function(g, D, E, I) {
    I === void 0 && (I = E);
    var k = Object.getOwnPropertyDescriptor(D, E);
    (!k || ("get" in k ? !D.__esModule : k.writable || k.configurable)) && (k = { enumerable: !0, get: function() {
      return D[E];
    } }), Object.defineProperty(g, I, k);
  } : function(g, D, E, I) {
    I === void 0 && (I = E), g[I] = D[E];
  }), r = N && N.__setModuleDefault || (Object.create ? function(g, D) {
    Object.defineProperty(g, "default", { enumerable: !0, value: D });
  } : function(g, D) {
    g.default = D;
  }), u = N && N.__importStar || function(g) {
    if (g && g.__esModule) return g;
    var D = {};
    if (g != null) for (var E in g) E !== "default" && Object.prototype.hasOwnProperty.call(g, E) && e(D, g, E);
    return r(D, g), D;
  }, n = N && N.__importDefault || function(g) {
    return g && g.__esModule ? g : { default: g };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DomUtils = t.parseFeed = t.getFeed = t.ElementType = t.Tokenizer = t.createDomStream = t.parseDOM = t.parseDocument = t.DefaultHandler = t.DomHandler = t.Parser = void 0;
  var i = Xu, a = Xu;
  Object.defineProperty(t, "Parser", { enumerable: !0, get: function() {
    return a.Parser;
  } });
  var c = Ct, o = Ct;
  Object.defineProperty(t, "DomHandler", { enumerable: !0, get: function() {
    return o.DomHandler;
  } }), Object.defineProperty(t, "DefaultHandler", { enumerable: !0, get: function() {
    return o.DomHandler;
  } });
  function f(g, D) {
    var E = new c.DomHandler(void 0, D);
    return new i.Parser(E, D).end(g), E.root;
  }
  t.parseDocument = f;
  function s(g, D) {
    return f(g, D).children;
  }
  t.parseDOM = s;
  function p(g, D, E) {
    var I = new c.DomHandler(g, D, E);
    return new i.Parser(I, D);
  }
  t.createDomStream = p;
  var l = as;
  Object.defineProperty(t, "Tokenizer", { enumerable: !0, get: function() {
    return n(l).default;
  } }), t.ElementType = u(bu);
  var h = oi, b = oi;
  Object.defineProperty(t, "getFeed", { enumerable: !0, get: function() {
    return b.getFeed;
  } });
  var v = { xmlMode: !0 };
  function y(g, D) {
    return D === void 0 && (D = v), (0, h.getFeed)(s(g, D));
  }
  t.parseFeed = y, t.DomUtils = u(oi);
})(a0);
var y1 = (t) => {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}, gs = {};
Object.defineProperty(gs, "__esModule", { value: !0 });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function kl(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function v1(t) {
  var e, r;
  return kl(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (r = e.prototype, !(kl(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
gs.isPlainObject = v1;
var $0 = { exports: {} };
(function(t) {
  (function(e, r) {
    t.exports ? t.exports = r() : e.parseSrcset = r();
  })(N, function() {
    return function(e) {
      function r(I) {
        return I === " " || // space
        I === "	" || // horizontal tab
        I === `
` || // new line
        I === "\f" || // form feed
        I === "\r";
      }
      function u(I) {
        var k, d = I.exec(e.substring(y));
        if (d)
          return k = d[0], y += k.length, k;
      }
      for (var n = e.length, i = /^[ \t\n\r\u000c]+/, a = /^[, \t\n\r\u000c]+/, c = /^[^ \t\n\r\u000c]+/, o = /[,]+$/, f = /^\d+$/, s = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, p, l, h, b, v, y = 0, g = []; ; ) {
        if (u(a), y >= n)
          return g;
        p = u(c), l = [], p.slice(-1) === "," ? (p = p.replace(o, ""), E()) : D();
      }
      function D() {
        for (u(i), h = "", b = "in descriptor"; ; ) {
          if (v = e.charAt(y), b === "in descriptor")
            if (r(v))
              h && (l.push(h), h = "", b = "after descriptor");
            else if (v === ",") {
              y += 1, h && l.push(h), E();
              return;
            } else if (v === "(")
              h = h + v, b = "in parens";
            else if (v === "") {
              h && l.push(h), E();
              return;
            } else
              h = h + v;
          else if (b === "in parens")
            if (v === ")")
              h = h + v, b = "in descriptor";
            else if (v === "") {
              l.push(h), E();
              return;
            } else
              h = h + v;
          else if (b === "after descriptor" && !r(v))
            if (v === "") {
              E();
              return;
            } else
              b = "in descriptor", y -= 1;
          y += 1;
        }
      }
      function E() {
        var I = !1, k, d, O, V, z = {}, W, A, $, L, q;
        for (V = 0; V < l.length; V++)
          W = l[V], A = W[W.length - 1], $ = W.substring(0, W.length - 1), L = parseInt($, 10), q = parseFloat($), f.test($) && A === "w" ? ((k || d) && (I = !0), L === 0 ? I = !0 : k = L) : s.test($) && A === "x" ? ((k || d || O) && (I = !0), q < 0 ? I = !0 : d = q) : f.test($) && A === "h" ? ((O || d) && (I = !0), L === 0 ? I = !0 : O = L) : I = !0;
        I ? console && console.log && console.log("Invalid srcset descriptor found in '" + e + "' at '" + W + "'.") : (z.url = p, k && (z.w = k), d && (z.d = d), O && (z.h = O), g.push(z));
      }
    };
  });
})($0);
var x1 = $0.exports, ms = { exports: {} }, G = String, N0 = function() {
  return { isColorSupported: !1, reset: G, bold: G, dim: G, italic: G, underline: G, inverse: G, hidden: G, strikethrough: G, black: G, red: G, green: G, yellow: G, blue: G, magenta: G, cyan: G, white: G, gray: G, bgBlack: G, bgRed: G, bgGreen: G, bgYellow: G, bgBlue: G, bgMagenta: G, bgCyan: G, bgWhite: G, blackBright: G, redBright: G, greenBright: G, yellowBright: G, blueBright: G, magentaBright: G, cyanBright: G, whiteBright: G, bgBlackBright: G, bgRedBright: G, bgGreenBright: G, bgYellowBright: G, bgBlueBright: G, bgMagentaBright: G, bgCyanBright: G, bgWhiteBright: G };
};
ms.exports = N0();
ms.exports.createColors = N0;
var w1 = ms.exports;
let Cl = w1, Ol = Ie, oo = class M0 extends Error {
  constructor(e, r, u, n, i, a) {
    super(e), this.name = "CssSyntaxError", this.reason = e, i && (this.file = i), n && (this.source = n), a && (this.plugin = a), typeof r < "u" && typeof u < "u" && (typeof r == "number" ? (this.line = r, this.column = u) : (this.line = r.line, this.column = r.column, this.endLine = u.line, this.endColumn = u.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, M0);
  }
  setMessage() {
    this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", typeof this.line < "u" && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
  }
  showSourceCode(e) {
    if (!this.source) return "";
    let r = this.source;
    e == null && (e = Cl.isColorSupported);
    let u = (s) => s, n = (s) => s, i = (s) => s;
    if (e) {
      let { bold: s, gray: p, red: l } = Cl.createColors(!0);
      n = (h) => s(l(h)), u = (h) => p(h), Ol && (i = (h) => Ol(h));
    }
    let a = r.split(/\r?\n/), c = Math.max(this.line - 3, 0), o = Math.min(this.line + 2, a.length), f = String(o).length;
    return a.slice(c, o).map((s, p) => {
      let l = c + 1 + p, h = " " + (" " + l).slice(-f) + " | ";
      if (l === this.line) {
        if (s.length > 160) {
          let v = 20, y = Math.max(0, this.column - v), g = Math.max(
            this.column + v,
            this.endColumn + v
          ), D = s.slice(y, g), E = u(h.replace(/\d/g, " ")) + s.slice(0, Math.min(this.column - 1, v - 1)).replace(/[^\t]/g, " ");
          return n(">") + u(h) + i(D) + `
 ` + E + n("^");
        }
        let b = u(h.replace(/\d/g, " ")) + s.slice(0, this.column - 1).replace(/[^\t]/g, " ");
        return n(">") + u(h) + i(s) + `
 ` + b + n("^");
      }
      return " " + u(h) + i(s);
    }).join(`
`);
  }
  toString() {
    let e = this.showSourceCode();
    return e && (e = `

` + e + `
`), this.name + ": " + this.message + e;
  }
};
var bs = oo;
oo.default = oo;
const Pl = {
  after: `
`,
  beforeClose: `
`,
  beforeComment: `
`,
  beforeDecl: `
`,
  beforeOpen: " ",
  beforeRule: `
`,
  colon: ": ",
  commentLeft: " ",
  commentRight: " ",
  emptyBody: "",
  indent: "    ",
  semicolon: !1
};
function E1(t) {
  return t[0].toUpperCase() + t.slice(1);
}
let so = class {
  constructor(e) {
    this.builder = e;
  }
  atrule(e, r) {
    let u = "@" + e.name, n = e.params ? this.rawValue(e, "params") : "";
    if (typeof e.raws.afterName < "u" ? u += e.raws.afterName : n && (u += " "), e.nodes)
      this.block(e, u + n);
    else {
      let i = (e.raws.between || "") + (r ? ";" : "");
      this.builder(u + n + i, e);
    }
  }
  beforeAfter(e, r) {
    let u;
    e.type === "decl" ? u = this.raw(e, null, "beforeDecl") : e.type === "comment" ? u = this.raw(e, null, "beforeComment") : r === "before" ? u = this.raw(e, null, "beforeRule") : u = this.raw(e, null, "beforeClose");
    let n = e.parent, i = 0;
    for (; n && n.type !== "root"; )
      i += 1, n = n.parent;
    if (u.includes(`
`)) {
      let a = this.raw(e, null, "indent");
      if (a.length)
        for (let c = 0; c < i; c++) u += a;
    }
    return u;
  }
  block(e, r) {
    let u = this.raw(e, "between", "beforeOpen");
    this.builder(r + u + "{", e, "start");
    let n;
    e.nodes && e.nodes.length ? (this.body(e), n = this.raw(e, "after")) : n = this.raw(e, "after", "emptyBody"), n && this.builder(n), this.builder("}", e, "end");
  }
  body(e) {
    let r = e.nodes.length - 1;
    for (; r > 0 && e.nodes[r].type === "comment"; )
      r -= 1;
    let u = this.raw(e, "semicolon");
    for (let n = 0; n < e.nodes.length; n++) {
      let i = e.nodes[n], a = this.raw(i, "before");
      a && this.builder(a), this.stringify(i, r !== n || u);
    }
  }
  comment(e) {
    let r = this.raw(e, "left", "commentLeft"), u = this.raw(e, "right", "commentRight");
    this.builder("/*" + r + e.text + u + "*/", e);
  }
  decl(e, r) {
    let u = this.raw(e, "between", "colon"), n = e.prop + u + this.rawValue(e, "value");
    e.important && (n += e.raws.important || " !important"), r && (n += ";"), this.builder(n, e);
  }
  document(e) {
    this.body(e);
  }
  raw(e, r, u) {
    let n;
    if (u || (u = r), r && (n = e.raws[r], typeof n < "u"))
      return n;
    let i = e.parent;
    if (u === "before" && (!i || i.type === "root" && i.first === e || i && i.type === "document"))
      return "";
    if (!i) return Pl[u];
    let a = e.root();
    if (a.rawCache || (a.rawCache = {}), typeof a.rawCache[u] < "u")
      return a.rawCache[u];
    if (u === "before" || u === "after")
      return this.beforeAfter(e, u);
    {
      let c = "raw" + E1(u);
      this[c] ? n = this[c](a, e) : a.walk((o) => {
        if (n = o.raws[r], typeof n < "u") return !1;
      });
    }
    return typeof n > "u" && (n = Pl[u]), a.rawCache[u] = n, n;
  }
  rawBeforeClose(e) {
    let r;
    return e.walk((u) => {
      if (u.nodes && u.nodes.length > 0 && typeof u.raws.after < "u")
        return r = u.raws.after, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }
  rawBeforeComment(e, r) {
    let u;
    return e.walkComments((n) => {
      if (typeof n.raws.before < "u")
        return u = n.raws.before, u.includes(`
`) && (u = u.replace(/[^\n]+$/, "")), !1;
    }), typeof u > "u" ? u = this.raw(r, null, "beforeDecl") : u && (u = u.replace(/\S/g, "")), u;
  }
  rawBeforeDecl(e, r) {
    let u;
    return e.walkDecls((n) => {
      if (typeof n.raws.before < "u")
        return u = n.raws.before, u.includes(`
`) && (u = u.replace(/[^\n]+$/, "")), !1;
    }), typeof u > "u" ? u = this.raw(r, null, "beforeRule") : u && (u = u.replace(/\S/g, "")), u;
  }
  rawBeforeOpen(e) {
    let r;
    return e.walk((u) => {
      if (u.type !== "decl" && (r = u.raws.between, typeof r < "u"))
        return !1;
    }), r;
  }
  rawBeforeRule(e) {
    let r;
    return e.walk((u) => {
      if (u.nodes && (u.parent !== e || e.first !== u) && typeof u.raws.before < "u")
        return r = u.raws.before, r.includes(`
`) && (r = r.replace(/[^\n]+$/, "")), !1;
    }), r && (r = r.replace(/\S/g, "")), r;
  }
  rawColon(e) {
    let r;
    return e.walkDecls((u) => {
      if (typeof u.raws.between < "u")
        return r = u.raws.between.replace(/[^\s:]/g, ""), !1;
    }), r;
  }
  rawEmptyBody(e) {
    let r;
    return e.walk((u) => {
      if (u.nodes && u.nodes.length === 0 && (r = u.raws.after, typeof r < "u"))
        return !1;
    }), r;
  }
  rawIndent(e) {
    if (e.raws.indent) return e.raws.indent;
    let r;
    return e.walk((u) => {
      let n = u.parent;
      if (n && n !== e && n.parent && n.parent === e && typeof u.raws.before < "u") {
        let i = u.raws.before.split(`
`);
        return r = i[i.length - 1], r = r.replace(/\S/g, ""), !1;
      }
    }), r;
  }
  rawSemicolon(e) {
    let r;
    return e.walk((u) => {
      if (u.nodes && u.nodes.length && u.last.type === "decl" && (r = u.raws.semicolon, typeof r < "u"))
        return !1;
    }), r;
  }
  rawValue(e, r) {
    let u = e[r], n = e.raws[r];
    return n && n.value === u ? n.raw : u;
  }
  root(e) {
    this.body(e), e.raws.after && this.builder(e.raws.after);
  }
  rule(e) {
    this.block(e, this.rawValue(e, "selector")), e.raws.ownSemicolon && this.builder(e.raws.ownSemicolon, e, "end");
  }
  stringify(e, r) {
    if (!this[e.type])
      throw new Error(
        "Unknown AST node type " + e.type + ". Maybe you need to change PostCSS stringifier."
      );
    this[e.type](e, r);
  }
};
var L0 = so;
so.default = so;
let A1 = L0;
function lo(t, e) {
  new A1(e).stringify(t);
}
var Ea = lo;
lo.default = lo;
var mn = {};
mn.isClean = Symbol("isClean");
mn.my = Symbol("my");
let _1 = bs, S1 = L0, D1 = Ea, { isClean: Mu, my: T1 } = mn;
function co(t, e) {
  let r = new t.constructor();
  for (let u in t) {
    if (!Object.prototype.hasOwnProperty.call(t, u) || u === "proxyCache") continue;
    let n = t[u], i = typeof n;
    u === "parent" && i === "object" ? e && (r[u] = e) : u === "source" ? r[u] = n : Array.isArray(n) ? r[u] = n.map((a) => co(a, r)) : (i === "object" && n !== null && (n = co(n)), r[u] = n);
  }
  return r;
}
function _t(t, e) {
  if (e && typeof e.offset < "u")
    return e.offset;
  let r = 1, u = 1, n = 0;
  for (let i = 0; i < t.length; i++) {
    if (u === e.line && r === e.column) {
      n = i;
      break;
    }
    t[i] === `
` ? (r = 1, u += 1) : r += 1;
  }
  return n;
}
let fo = class {
  get proxyOf() {
    return this;
  }
  constructor(e = {}) {
    this.raws = {}, this[Mu] = !1, this[T1] = !0;
    for (let r in e)
      if (r === "nodes") {
        this.nodes = [];
        for (let u of e[r])
          typeof u.clone == "function" ? this.append(u.clone()) : this.append(u);
      } else
        this[r] = e[r];
  }
  addToError(e) {
    if (e.postcssNode = this, e.stack && this.source && /\n\s{4}at /.test(e.stack)) {
      let r = this.source;
      e.stack = e.stack.replace(
        /\n\s{4}at /,
        `$&${r.input.from}:${r.start.line}:${r.start.column}$&`
      );
    }
    return e;
  }
  after(e) {
    return this.parent.insertAfter(this, e), this;
  }
  assign(e = {}) {
    for (let r in e)
      this[r] = e[r];
    return this;
  }
  before(e) {
    return this.parent.insertBefore(this, e), this;
  }
  cleanRaws(e) {
    delete this.raws.before, delete this.raws.after, e || delete this.raws.between;
  }
  clone(e = {}) {
    let r = co(this);
    for (let u in e)
      r[u] = e[u];
    return r;
  }
  cloneAfter(e = {}) {
    let r = this.clone(e);
    return this.parent.insertAfter(this, r), r;
  }
  cloneBefore(e = {}) {
    let r = this.clone(e);
    return this.parent.insertBefore(this, r), r;
  }
  error(e, r = {}) {
    if (this.source) {
      let { end: u, start: n } = this.rangeBy(r);
      return this.source.input.error(
        e,
        { column: n.column, line: n.line },
        { column: u.column, line: u.line },
        r
      );
    }
    return new _1(e);
  }
  getProxyProcessor() {
    return {
      get(e, r) {
        return r === "proxyOf" ? e : r === "root" ? () => e.root().toProxy() : e[r];
      },
      set(e, r, u) {
        return e[r] === u || (e[r] = u, (r === "prop" || r === "value" || r === "name" || r === "params" || r === "important" || /* c8 ignore next */
        r === "text") && e.markDirty()), !0;
      }
    };
  }
  /* c8 ignore next 3 */
  markClean() {
    this[Mu] = !0;
  }
  markDirty() {
    if (this[Mu]) {
      this[Mu] = !1;
      let e = this;
      for (; e = e.parent; )
        e[Mu] = !1;
    }
  }
  next() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e + 1];
  }
  positionBy(e = {}) {
    let r = this.source.start;
    if (e.index)
      r = this.positionInside(e.index);
    else if (e.word) {
      let u = "document" in this.source.input ? this.source.input.document : this.source.input.css, i = u.slice(
        _t(u, this.source.start),
        _t(u, this.source.end)
      ).indexOf(e.word);
      i !== -1 && (r = this.positionInside(i));
    }
    return r;
  }
  positionInside(e) {
    let r = this.source.start.column, u = this.source.start.line, n = "document" in this.source.input ? this.source.input.document : this.source.input.css, i = _t(n, this.source.start), a = i + e;
    for (let c = i; c < a; c++)
      n[c] === `
` ? (r = 1, u += 1) : r += 1;
    return { column: r, line: u, offset: a };
  }
  prev() {
    if (!this.parent) return;
    let e = this.parent.index(this);
    return this.parent.nodes[e - 1];
  }
  rangeBy(e = {}) {
    let r = "document" in this.source.input ? this.source.input.document : this.source.input.css, u = {
      column: this.source.start.column,
      line: this.source.start.line,
      offset: _t(r, this.source.start)
    }, n = this.source.end ? {
      column: this.source.end.column + 1,
      line: this.source.end.line,
      offset: typeof this.source.end.offset == "number" ? (
        // `source.end.offset` is exclusive, so we don't need to add 1
        this.source.end.offset
      ) : (
        // Since line/column in this.source.end is inclusive,
        // the `sourceOffset(... , this.source.end)` returns an inclusive offset.
        // So, we add 1 to convert it to exclusive.
        _t(r, this.source.end) + 1
      )
    } : {
      column: u.column + 1,
      line: u.line,
      offset: u.offset + 1
    };
    if (e.word) {
      let a = r.slice(
        _t(r, this.source.start),
        _t(r, this.source.end)
      ).indexOf(e.word);
      a !== -1 && (u = this.positionInside(a), n = this.positionInside(a + e.word.length));
    } else
      e.start ? u = {
        column: e.start.column,
        line: e.start.line,
        offset: _t(r, e.start)
      } : e.index && (u = this.positionInside(e.index)), e.end ? n = {
        column: e.end.column,
        line: e.end.line,
        offset: _t(r, e.end)
      } : typeof e.endIndex == "number" ? n = this.positionInside(e.endIndex) : e.index && (n = this.positionInside(e.index + 1));
    return (n.line < u.line || n.line === u.line && n.column <= u.column) && (n = {
      column: u.column + 1,
      line: u.line,
      offset: u.offset + 1
    }), { end: n, start: u };
  }
  raw(e, r) {
    return new S1().raw(this, e, r);
  }
  remove() {
    return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
  }
  replaceWith(...e) {
    if (this.parent) {
      let r = this, u = !1;
      for (let n of e)
        n === this ? u = !0 : u ? (this.parent.insertAfter(r, n), r = n) : this.parent.insertBefore(r, n);
      u || this.remove();
    }
    return this;
  }
  root() {
    let e = this;
    for (; e.parent && e.parent.type !== "document"; )
      e = e.parent;
    return e;
  }
  toJSON(e, r) {
    let u = {}, n = r == null;
    r = r || /* @__PURE__ */ new Map();
    let i = 0;
    for (let a in this) {
      if (!Object.prototype.hasOwnProperty.call(this, a) || a === "parent" || a === "proxyCache") continue;
      let c = this[a];
      if (Array.isArray(c))
        u[a] = c.map((o) => typeof o == "object" && o.toJSON ? o.toJSON(null, r) : o);
      else if (typeof c == "object" && c.toJSON)
        u[a] = c.toJSON(null, r);
      else if (a === "source") {
        if (c == null) continue;
        let o = r.get(c.input);
        o == null && (o = i, r.set(c.input, i), i++), u[a] = {
          end: c.end,
          inputId: o,
          start: c.start
        };
      } else
        u[a] = c;
    }
    return n && (u.inputs = [...r.keys()].map((a) => a.toJSON())), u;
  }
  toProxy() {
    return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
  }
  toString(e = D1) {
    e.stringify && (e = e.stringify);
    let r = "";
    return e(this, (u) => {
      r += u;
    }), r;
  }
  warn(e, r, u = {}) {
    let n = { node: this };
    for (let i in u) n[i] = u[i];
    return e.warn(r, n);
  }
};
var Aa = fo;
fo.default = fo;
let k1 = Aa, po = class extends k1 {
  constructor(e) {
    super(e), this.type = "comment";
  }
};
var _a = po;
po.default = po;
let C1 = Aa, ho = class extends C1 {
  get variable() {
    return this.prop.startsWith("--") || this.prop[0] === "$";
  }
  constructor(e) {
    e && typeof e.value < "u" && typeof e.value != "string" && (e = { ...e, value: String(e.value) }), super(e), this.type = "decl";
  }
};
var Sa = ho;
ho.default = ho;
let I0 = _a, B0 = Sa, O1 = Aa, { isClean: R0, my: F0 } = mn, ys, j0, q0, vs;
function U0(t) {
  return t.map((e) => (e.nodes && (e.nodes = U0(e.nodes)), delete e.source, e));
}
function V0(t) {
  if (t[R0] = !1, t.proxyOf.nodes)
    for (let e of t.proxyOf.nodes)
      V0(e);
}
let Ot = class z0 extends O1 {
  get first() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[0];
  }
  get last() {
    if (this.proxyOf.nodes)
      return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
  }
  append(...e) {
    for (let r of e) {
      let u = this.normalize(r, this.last);
      for (let n of u) this.proxyOf.nodes.push(n);
    }
    return this.markDirty(), this;
  }
  cleanRaws(e) {
    if (super.cleanRaws(e), this.nodes)
      for (let r of this.nodes) r.cleanRaws(e);
  }
  each(e) {
    if (!this.proxyOf.nodes) return;
    let r = this.getIterator(), u, n;
    for (; this.indexes[r] < this.proxyOf.nodes.length && (u = this.indexes[r], n = e(this.proxyOf.nodes[u], u), n !== !1); )
      this.indexes[r] += 1;
    return delete this.indexes[r], n;
  }
  every(e) {
    return this.nodes.every(e);
  }
  getIterator() {
    this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
    let e = this.lastEach;
    return this.indexes[e] = 0, e;
  }
  getProxyProcessor() {
    return {
      get(e, r) {
        return r === "proxyOf" ? e : e[r] ? r === "each" || typeof r == "string" && r.startsWith("walk") ? (...u) => e[r](
          ...u.map((n) => typeof n == "function" ? (i, a) => n(i.toProxy(), a) : n)
        ) : r === "every" || r === "some" ? (u) => e[r](
          (n, ...i) => u(n.toProxy(), ...i)
        ) : r === "root" ? () => e.root().toProxy() : r === "nodes" ? e.nodes.map((u) => u.toProxy()) : r === "first" || r === "last" ? e[r].toProxy() : e[r] : e[r];
      },
      set(e, r, u) {
        return e[r] === u || (e[r] = u, (r === "name" || r === "params" || r === "selector") && e.markDirty()), !0;
      }
    };
  }
  index(e) {
    return typeof e == "number" ? e : (e.proxyOf && (e = e.proxyOf), this.proxyOf.nodes.indexOf(e));
  }
  insertAfter(e, r) {
    let u = this.index(e), n = this.normalize(r, this.proxyOf.nodes[u]).reverse();
    u = this.index(e);
    for (let a of n) this.proxyOf.nodes.splice(u + 1, 0, a);
    let i;
    for (let a in this.indexes)
      i = this.indexes[a], u < i && (this.indexes[a] = i + n.length);
    return this.markDirty(), this;
  }
  insertBefore(e, r) {
    let u = this.index(e), n = u === 0 ? "prepend" : !1, i = this.normalize(
      r,
      this.proxyOf.nodes[u],
      n
    ).reverse();
    u = this.index(e);
    for (let c of i) this.proxyOf.nodes.splice(u, 0, c);
    let a;
    for (let c in this.indexes)
      a = this.indexes[c], u <= a && (this.indexes[c] = a + i.length);
    return this.markDirty(), this;
  }
  normalize(e, r) {
    if (typeof e == "string")
      e = U0(j0(e).nodes);
    else if (typeof e > "u")
      e = [];
    else if (Array.isArray(e)) {
      e = e.slice(0);
      for (let n of e)
        n.parent && n.parent.removeChild(n, "ignore");
    } else if (e.type === "root" && this.type !== "document") {
      e = e.nodes.slice(0);
      for (let n of e)
        n.parent && n.parent.removeChild(n, "ignore");
    } else if (e.type)
      e = [e];
    else if (e.prop) {
      if (typeof e.value > "u")
        throw new Error("Value field is missed in node creation");
      typeof e.value != "string" && (e.value = String(e.value)), e = [new B0(e)];
    } else if (e.selector || e.selectors)
      e = [new vs(e)];
    else if (e.name)
      e = [new ys(e)];
    else if (e.text)
      e = [new I0(e)];
    else
      throw new Error("Unknown node type in node creation");
    return e.map((n) => (n[F0] || z0.rebuild(n), n = n.proxyOf, n.parent && n.parent.removeChild(n), n[R0] && V0(n), n.raws || (n.raws = {}), typeof n.raws.before > "u" && r && typeof r.raws.before < "u" && (n.raws.before = r.raws.before.replace(/\S/g, "")), n.parent = this.proxyOf, n));
  }
  prepend(...e) {
    e = e.reverse();
    for (let r of e) {
      let u = this.normalize(r, this.first, "prepend").reverse();
      for (let n of u) this.proxyOf.nodes.unshift(n);
      for (let n in this.indexes)
        this.indexes[n] = this.indexes[n] + u.length;
    }
    return this.markDirty(), this;
  }
  push(e) {
    return e.parent = this, this.proxyOf.nodes.push(e), this;
  }
  removeAll() {
    for (let e of this.proxyOf.nodes) e.parent = void 0;
    return this.proxyOf.nodes = [], this.markDirty(), this;
  }
  removeChild(e) {
    e = this.index(e), this.proxyOf.nodes[e].parent = void 0, this.proxyOf.nodes.splice(e, 1);
    let r;
    for (let u in this.indexes)
      r = this.indexes[u], r >= e && (this.indexes[u] = r - 1);
    return this.markDirty(), this;
  }
  replaceValues(e, r, u) {
    return u || (u = r, r = {}), this.walkDecls((n) => {
      r.props && !r.props.includes(n.prop) || r.fast && !n.value.includes(r.fast) || (n.value = n.value.replace(e, u));
    }), this.markDirty(), this;
  }
  some(e) {
    return this.nodes.some(e);
  }
  walk(e) {
    return this.each((r, u) => {
      let n;
      try {
        n = e(r, u);
      } catch (i) {
        throw r.addToError(i);
      }
      return n !== !1 && r.walk && (n = r.walk(e)), n;
    });
  }
  walkAtRules(e, r) {
    return r ? e instanceof RegExp ? this.walk((u, n) => {
      if (u.type === "atrule" && e.test(u.name))
        return r(u, n);
    }) : this.walk((u, n) => {
      if (u.type === "atrule" && u.name === e)
        return r(u, n);
    }) : (r = e, this.walk((u, n) => {
      if (u.type === "atrule")
        return r(u, n);
    }));
  }
  walkComments(e) {
    return this.walk((r, u) => {
      if (r.type === "comment")
        return e(r, u);
    });
  }
  walkDecls(e, r) {
    return r ? e instanceof RegExp ? this.walk((u, n) => {
      if (u.type === "decl" && e.test(u.prop))
        return r(u, n);
    }) : this.walk((u, n) => {
      if (u.type === "decl" && u.prop === e)
        return r(u, n);
    }) : (r = e, this.walk((u, n) => {
      if (u.type === "decl")
        return r(u, n);
    }));
  }
  walkRules(e, r) {
    return r ? e instanceof RegExp ? this.walk((u, n) => {
      if (u.type === "rule" && e.test(u.selector))
        return r(u, n);
    }) : this.walk((u, n) => {
      if (u.type === "rule" && u.selector === e)
        return r(u, n);
    }) : (r = e, this.walk((u, n) => {
      if (u.type === "rule")
        return r(u, n);
    }));
  }
};
Ot.registerParse = (t) => {
  j0 = t;
};
Ot.registerRule = (t) => {
  vs = t;
};
Ot.registerAtRule = (t) => {
  ys = t;
};
Ot.registerRoot = (t) => {
  q0 = t;
};
var Sr = Ot;
Ot.default = Ot;
Ot.rebuild = (t) => {
  t.type === "atrule" ? Object.setPrototypeOf(t, ys.prototype) : t.type === "rule" ? Object.setPrototypeOf(t, vs.prototype) : t.type === "decl" ? Object.setPrototypeOf(t, B0.prototype) : t.type === "comment" ? Object.setPrototypeOf(t, I0.prototype) : t.type === "root" && Object.setPrototypeOf(t, q0.prototype), t[F0] = !0, t.nodes && t.nodes.forEach((e) => {
    Ot.rebuild(e);
  });
};
let H0 = Sr, _i = class extends H0 {
  constructor(e) {
    super(e), this.type = "atrule";
  }
  append(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.append(...e);
  }
  prepend(...e) {
    return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e);
  }
};
var xs = _i;
_i.default = _i;
H0.registerAtRule(_i);
let P1 = Sr, G0, W0, Zu = class extends P1 {
  constructor(e) {
    super({ type: "document", ...e }), this.nodes || (this.nodes = []);
  }
  toResult(e = {}) {
    return new G0(new W0(), this, e).stringify();
  }
};
Zu.registerLazyResult = (t) => {
  G0 = t;
};
Zu.registerProcessor = (t) => {
  W0 = t;
};
var ws = Zu;
Zu.default = Zu;
let $1 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict", N1 = (t = 21) => {
  let e = "", r = t | 0;
  for (; r--; )
    e += $1[Math.random() * 64 | 0];
  return e;
};
var M1 = { nanoid: N1 };
let { existsSync: L1, readFileSync: I1 } = Ie, { dirname: Xa, join: B1 } = Ie, { SourceMapConsumer: $l, SourceMapGenerator: Nl } = Ie;
function R1(t) {
  return Buffer ? Buffer.from(t, "base64").toString() : window.atob(t);
}
let go = class {
  constructor(e, r) {
    if (r.map === !1) return;
    this.loadAnnotation(e), this.inline = this.startWith(this.annotation, "data:");
    let u = r.map ? r.map.prev : void 0, n = this.loadMap(r.from, u);
    !this.mapFile && r.from && (this.mapFile = r.from), this.mapFile && (this.root = Xa(this.mapFile)), n && (this.text = n);
  }
  consumer() {
    return this.consumerCache || (this.consumerCache = new $l(this.text)), this.consumerCache;
  }
  decodeInline(e) {
    let r = /^data:application\/json;charset=utf-?8;base64,/, u = /^data:application\/json;base64,/, n = /^data:application\/json;charset=utf-?8,/, i = /^data:application\/json,/, a = e.match(n) || e.match(i);
    if (a)
      return decodeURIComponent(e.substr(a[0].length));
    let c = e.match(r) || e.match(u);
    if (c)
      return R1(e.substr(c[0].length));
    let o = e.match(/data:application\/json;([^,]+),/)[1];
    throw new Error("Unsupported source map encoding " + o);
  }
  getAnnotationURL(e) {
    return e.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
  }
  isMap(e) {
    return typeof e != "object" ? !1 : typeof e.mappings == "string" || typeof e._mappings == "string" || Array.isArray(e.sections);
  }
  loadAnnotation(e) {
    let r = e.match(/\/\*\s*# sourceMappingURL=/g);
    if (!r) return;
    let u = e.lastIndexOf(r.pop()), n = e.indexOf("*/", u);
    u > -1 && n > -1 && (this.annotation = this.getAnnotationURL(e.substring(u, n)));
  }
  loadFile(e) {
    if (this.root = Xa(e), L1(e))
      return this.mapFile = e, I1(e, "utf-8").toString().trim();
  }
  loadMap(e, r) {
    if (r === !1) return !1;
    if (r) {
      if (typeof r == "string")
        return r;
      if (typeof r == "function") {
        let u = r(e);
        if (u) {
          let n = this.loadFile(u);
          if (!n)
            throw new Error(
              "Unable to load previous source map: " + u.toString()
            );
          return n;
        }
      } else {
        if (r instanceof $l)
          return Nl.fromSourceMap(r).toString();
        if (r instanceof Nl)
          return r.toString();
        if (this.isMap(r))
          return JSON.stringify(r);
        throw new Error(
          "Unsupported previous source map format: " + r.toString()
        );
      }
    } else {
      if (this.inline)
        return this.decodeInline(this.annotation);
      if (this.annotation) {
        let u = this.annotation;
        return e && (u = B1(Xa(e), u)), this.loadFile(u);
      }
    }
  }
  startWith(e, r) {
    return e ? e.substr(0, r.length) === r : !1;
  }
  withContent() {
    return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
  }
};
var J0 = go;
go.default = go;
let { nanoid: F1 } = M1, { isAbsolute: mo, resolve: bo } = Ie, { SourceMapConsumer: j1, SourceMapGenerator: q1 } = Ie, { fileURLToPath: Ml, pathToFileURL: Zn } = Ie, Ll = bs, U1 = J0, Ya = Ie, Za = Symbol("lineToIndexCache"), V1 = !!(j1 && q1), Il = !!(bo && mo);
function Bl(t) {
  if (t[Za]) return t[Za];
  let e = t.css.split(`
`), r = new Array(e.length), u = 0;
  for (let n = 0, i = e.length; n < i; n++)
    r[n] = u, u += e[n].length + 1;
  return t[Za] = r, r;
}
let Si = class {
  get from() {
    return this.file || this.id;
  }
  constructor(e, r = {}) {
    if (e === null || typeof e > "u" || typeof e == "object" && !e.toString)
      throw new Error(`PostCSS received ${e} instead of CSS string`);
    if (this.css = e.toString(), this.css[0] === "\uFEFF" || this.css[0] === "￾" ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, this.document = this.css, r.document && (this.document = r.document.toString()), r.from && (!Il || /^\w+:\/\//.test(r.from) || mo(r.from) ? this.file = r.from : this.file = bo(r.from)), Il && V1) {
      let u = new U1(this.css, r);
      if (u.text) {
        this.map = u;
        let n = u.consumer().file;
        !this.file && n && (this.file = this.mapResolve(n));
      }
    }
    this.file || (this.id = "<input css " + F1(6) + ">"), this.map && (this.map.file = this.from);
  }
  error(e, r, u, n = {}) {
    let i, a, c, o, f;
    if (r && typeof r == "object") {
      let p = r, l = u;
      if (typeof p.offset == "number") {
        o = p.offset;
        let h = this.fromOffset(o);
        r = h.line, u = h.col;
      } else
        r = p.line, u = p.column, o = this.fromLineAndColumn(r, u);
      if (typeof l.offset == "number") {
        c = l.offset;
        let h = this.fromOffset(c);
        a = h.line, i = h.col;
      } else
        a = l.line, i = l.column, c = this.fromLineAndColumn(l.line, l.column);
    } else if (u)
      o = this.fromLineAndColumn(r, u);
    else {
      o = r;
      let p = this.fromOffset(o);
      r = p.line, u = p.col;
    }
    let s = this.origin(r, u, a, i);
    return s ? f = new Ll(
      e,
      s.endLine === void 0 ? s.line : { column: s.column, line: s.line },
      s.endLine === void 0 ? s.column : { column: s.endColumn, line: s.endLine },
      s.source,
      s.file,
      n.plugin
    ) : f = new Ll(
      e,
      a === void 0 ? r : { column: u, line: r },
      a === void 0 ? u : { column: i, line: a },
      this.css,
      this.file,
      n.plugin
    ), f.input = { column: u, endColumn: i, endLine: a, endOffset: c, line: r, offset: o, source: this.css }, this.file && (Zn && (f.input.url = Zn(this.file).toString()), f.input.file = this.file), f;
  }
  fromLineAndColumn(e, r) {
    return Bl(this)[e - 1] + r - 1;
  }
  fromOffset(e) {
    let r = Bl(this), u = r[r.length - 1], n = 0;
    if (e >= u)
      n = r.length - 1;
    else {
      let i = r.length - 2, a;
      for (; n < i; )
        if (a = n + (i - n >> 1), e < r[a])
          i = a - 1;
        else if (e >= r[a + 1])
          n = a + 1;
        else {
          n = a;
          break;
        }
    }
    return {
      col: e - r[n] + 1,
      line: n + 1
    };
  }
  mapResolve(e) {
    return /^\w+:\/\//.test(e) ? e : bo(this.map.consumer().sourceRoot || this.map.root || ".", e);
  }
  origin(e, r, u, n) {
    if (!this.map) return !1;
    let i = this.map.consumer(), a = i.originalPositionFor({ column: r, line: e });
    if (!a.source) return !1;
    let c;
    typeof u == "number" && (c = i.originalPositionFor({ column: n, line: u }));
    let o;
    mo(a.source) ? o = Zn(a.source) : o = new URL(
      a.source,
      this.map.consumer().sourceRoot || Zn(this.map.mapFile)
    );
    let f = {
      column: a.column,
      endColumn: c && c.column,
      endLine: c && c.line,
      line: a.line,
      url: o.toString()
    };
    if (o.protocol === "file:")
      if (Ml)
        f.file = Ml(o);
      else
        throw new Error("file: protocol is not available in this PostCSS build");
    let s = i.sourceContentFor(a.source);
    return s && (f.source = s), f;
  }
  toJSON() {
    let e = {};
    for (let r of ["hasBOM", "css", "file", "id"])
      this[r] != null && (e[r] = this[r]);
    return this.map && (e.map = { ...this.map }, e.map.consumerCache && (e.map.consumerCache = void 0)), e;
  }
};
var Da = Si;
Si.default = Si;
Ya && Ya.registerInput && Ya.registerInput(Si);
let X0 = Sr, Y0, Z0, uu = class extends X0 {
  constructor(e) {
    super(e), this.type = "root", this.nodes || (this.nodes = []);
  }
  normalize(e, r, u) {
    let n = super.normalize(e);
    if (r) {
      if (u === "prepend")
        this.nodes.length > 1 ? r.raws.before = this.nodes[1].raws.before : delete r.raws.before;
      else if (this.first !== r)
        for (let i of n)
          i.raws.before = r.raws.before;
    }
    return n;
  }
  removeChild(e, r) {
    let u = this.index(e);
    return !r && u === 0 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[u].raws.before), super.removeChild(e);
  }
  toResult(e = {}) {
    return new Y0(new Z0(), this, e).stringify();
  }
};
uu.registerLazyResult = (t) => {
  Y0 = t;
};
uu.registerProcessor = (t) => {
  Z0 = t;
};
var bn = uu;
uu.default = uu;
X0.registerRoot(uu);
let Ku = {
  comma(t) {
    return Ku.split(t, [","], !0);
  },
  space(t) {
    let e = [" ", `
`, "	"];
    return Ku.split(t, e);
  },
  split(t, e, r) {
    let u = [], n = "", i = !1, a = 0, c = !1, o = "", f = !1;
    for (let s of t)
      f ? f = !1 : s === "\\" ? f = !0 : c ? s === o && (c = !1) : s === '"' || s === "'" ? (c = !0, o = s) : s === "(" ? a += 1 : s === ")" ? a > 0 && (a -= 1) : a === 0 && e.includes(s) && (i = !0), i ? (n !== "" && u.push(n.trim()), n = "", i = !1) : n += s;
    return (r || n !== "") && u.push(n.trim()), u;
  }
};
var K0 = Ku;
Ku.default = Ku;
let Q0 = Sr, z1 = K0, Di = class extends Q0 {
  get selectors() {
    return z1.comma(this.selector);
  }
  set selectors(e) {
    let r = this.selector ? this.selector.match(/,\s*/) : null, u = r ? r[0] : "," + this.raw("between", "beforeOpen");
    this.selector = e.join(u);
  }
  constructor(e) {
    super(e), this.type = "rule", this.nodes || (this.nodes = []);
  }
};
var Es = Di;
Di.default = Di;
Q0.registerRule(Di);
let H1 = xs, G1 = _a, W1 = Sa, J1 = Da, X1 = J0, Y1 = bn, Z1 = Es;
function Qu(t, e) {
  if (Array.isArray(t)) return t.map((n) => Qu(n));
  let { inputs: r, ...u } = t;
  if (r) {
    e = [];
    for (let n of r) {
      let i = { ...n, __proto__: J1.prototype };
      i.map && (i.map = {
        ...i.map,
        __proto__: X1.prototype
      }), e.push(i);
    }
  }
  if (u.nodes && (u.nodes = t.nodes.map((n) => Qu(n, e))), u.source) {
    let { inputId: n, ...i } = u.source;
    u.source = i, n != null && (u.source.input = e[n]);
  }
  if (u.type === "root")
    return new Y1(u);
  if (u.type === "decl")
    return new W1(u);
  if (u.type === "rule")
    return new Z1(u);
  if (u.type === "comment")
    return new G1(u);
  if (u.type === "atrule")
    return new H1(u);
  throw new Error("Unknown node type: " + t.type);
}
var K1 = Qu;
Qu.default = Qu;
let { dirname: li, relative: ef, resolve: tf, sep: rf } = Ie, { SourceMapConsumer: uf, SourceMapGenerator: ci } = Ie, { pathToFileURL: Rl } = Ie, Q1 = Da, eb = !!(uf && ci), tb = !!(li && tf && ef && rf), rb = class {
  constructor(e, r, u, n) {
    this.stringify = e, this.mapOpts = u.map || {}, this.root = r, this.opts = u, this.css = n, this.originalCSS = n, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = /* @__PURE__ */ new Map(), this.memoizedPaths = /* @__PURE__ */ new Map(), this.memoizedURLs = /* @__PURE__ */ new Map();
  }
  addAnnotation() {
    let e;
    this.isInline() ? e = "data:application/json;base64," + this.toBase64(this.map.toString()) : typeof this.mapOpts.annotation == "string" ? e = this.mapOpts.annotation : typeof this.mapOpts.annotation == "function" ? e = this.mapOpts.annotation(this.opts.to, this.root) : e = this.outputFile() + ".map";
    let r = `
`;
    this.css.includes(`\r
`) && (r = `\r
`), this.css += r + "/*# sourceMappingURL=" + e + " */";
  }
  applyPrevMaps() {
    for (let e of this.previous()) {
      let r = this.toUrl(this.path(e.file)), u = e.root || li(e.file), n;
      this.mapOpts.sourcesContent === !1 ? (n = new uf(e.text), n.sourcesContent && (n.sourcesContent = null)) : n = e.consumer(), this.map.applySourceMap(n, r, this.toUrl(this.path(u)));
    }
  }
  clearAnnotation() {
    if (this.mapOpts.annotation !== !1)
      if (this.root) {
        let e;
        for (let r = this.root.nodes.length - 1; r >= 0; r--)
          e = this.root.nodes[r], e.type === "comment" && e.text.startsWith("# sourceMappingURL=") && this.root.removeChild(r);
      } else this.css && (this.css = this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm, ""));
  }
  generate() {
    if (this.clearAnnotation(), tb && eb && this.isMap())
      return this.generateMap();
    {
      let e = "";
      return this.stringify(this.root, (r) => {
        e += r;
      }), [e];
    }
  }
  generateMap() {
    if (this.root)
      this.generateString();
    else if (this.previous().length === 1) {
      let e = this.previous()[0].consumer();
      e.file = this.outputFile(), this.map = ci.fromSourceMap(e, {
        ignoreInvalidMapping: !0
      });
    } else
      this.map = new ci({
        file: this.outputFile(),
        ignoreInvalidMapping: !0
      }), this.map.addMapping({
        generated: { column: 0, line: 1 },
        original: { column: 0, line: 1 },
        source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>"
      });
    return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
  }
  generateString() {
    this.css = "", this.map = new ci({
      file: this.outputFile(),
      ignoreInvalidMapping: !0
    });
    let e = 1, r = 1, u = "<no source>", n = {
      generated: { column: 0, line: 0 },
      original: { column: 0, line: 0 },
      source: ""
    }, i, a;
    this.stringify(this.root, (c, o, f) => {
      if (this.css += c, o && f !== "end" && (n.generated.line = e, n.generated.column = r - 1, o.source && o.source.start ? (n.source = this.sourcePath(o), n.original.line = o.source.start.line, n.original.column = o.source.start.column - 1, this.map.addMapping(n)) : (n.source = u, n.original.line = 1, n.original.column = 0, this.map.addMapping(n))), a = c.match(/\n/g), a ? (e += a.length, i = c.lastIndexOf(`
`), r = c.length - i) : r += c.length, o && f !== "start") {
        let s = o.parent || { raws: {} };
        (!(o.type === "decl" || o.type === "atrule" && !o.nodes) || o !== s.last || s.raws.semicolon) && (o.source && o.source.end ? (n.source = this.sourcePath(o), n.original.line = o.source.end.line, n.original.column = o.source.end.column - 1, n.generated.line = e, n.generated.column = r - 2, this.map.addMapping(n)) : (n.source = u, n.original.line = 1, n.original.column = 0, n.generated.line = e, n.generated.column = r - 1, this.map.addMapping(n)));
      }
    });
  }
  isAnnotation() {
    return this.isInline() ? !0 : typeof this.mapOpts.annotation < "u" ? this.mapOpts.annotation : this.previous().length ? this.previous().some((e) => e.annotation) : !0;
  }
  isInline() {
    if (typeof this.mapOpts.inline < "u")
      return this.mapOpts.inline;
    let e = this.mapOpts.annotation;
    return typeof e < "u" && e !== !0 ? !1 : this.previous().length ? this.previous().some((r) => r.inline) : !0;
  }
  isMap() {
    return typeof this.opts.map < "u" ? !!this.opts.map : this.previous().length > 0;
  }
  isSourcesContent() {
    return typeof this.mapOpts.sourcesContent < "u" ? this.mapOpts.sourcesContent : this.previous().length ? this.previous().some((e) => e.withContent()) : !0;
  }
  outputFile() {
    return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
  }
  path(e) {
    if (this.mapOpts.absolute || e.charCodeAt(0) === 60 || /^\w+:\/\//.test(e)) return e;
    let r = this.memoizedPaths.get(e);
    if (r) return r;
    let u = this.opts.to ? li(this.opts.to) : ".";
    typeof this.mapOpts.annotation == "string" && (u = li(tf(u, this.mapOpts.annotation)));
    let n = ef(u, e);
    return this.memoizedPaths.set(e, n), n;
  }
  previous() {
    if (!this.previousMaps)
      if (this.previousMaps = [], this.root)
        this.root.walk((e) => {
          if (e.source && e.source.input.map) {
            let r = e.source.input.map;
            this.previousMaps.includes(r) || this.previousMaps.push(r);
          }
        });
      else {
        let e = new Q1(this.originalCSS, this.opts);
        e.map && this.previousMaps.push(e.map);
      }
    return this.previousMaps;
  }
  setSourcesContent() {
    let e = {};
    if (this.root)
      this.root.walk((r) => {
        if (r.source) {
          let u = r.source.input.from;
          if (u && !e[u]) {
            e[u] = !0;
            let n = this.usesFileUrls ? this.toFileUrl(u) : this.toUrl(this.path(u));
            this.map.setSourceContent(n, r.source.input.css);
          }
        }
      });
    else if (this.css) {
      let r = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
      this.map.setSourceContent(r, this.css);
    }
  }
  sourcePath(e) {
    return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(e.source.input.from) : this.toUrl(this.path(e.source.input.from));
  }
  toBase64(e) {
    return Buffer ? Buffer.from(e).toString("base64") : window.btoa(unescape(encodeURIComponent(e)));
  }
  toFileUrl(e) {
    let r = this.memoizedFileURLs.get(e);
    if (r) return r;
    if (Rl) {
      let u = Rl(e).toString();
      return this.memoizedFileURLs.set(e, u), u;
    } else
      throw new Error(
        "`map.absolute` option is not available in this PostCSS build"
      );
  }
  toUrl(e) {
    let r = this.memoizedURLs.get(e);
    if (r) return r;
    rf === "\\" && (e = e.replace(/\\/g, "/"));
    let u = encodeURI(e).replace(/[#?]/g, encodeURIComponent);
    return this.memoizedURLs.set(e, u), u;
  }
};
var nf = rb;
const Ka = 39, Fl = 34, Kn = 92, jl = 47, Qn = 10, Lu = 32, ei = 12, ti = 9, ri = 13, ub = 91, nb = 93, ib = 40, ab = 41, ob = 123, sb = 125, lb = 59, cb = 42, fb = 58, db = 64, ui = /[\t\n\f\r "#'()/;[\\\]{}]/g, ni = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, pb = /.[\r\n"'(/\\]/, ql = /[\da-f]/i;
var hb = function(e, r = {}) {
  let u = e.css.valueOf(), n = r.ignoreErrors, i, a, c, o, f, s, p, l, h, b, v = u.length, y = 0, g = [], D = [];
  function E() {
    return y;
  }
  function I(V) {
    throw e.error("Unclosed " + V, y);
  }
  function k() {
    return D.length === 0 && y >= v;
  }
  function d(V) {
    if (D.length) return D.pop();
    if (y >= v) return;
    let z = V ? V.ignoreUnclosed : !1;
    switch (i = u.charCodeAt(y), i) {
      case Qn:
      case Lu:
      case ti:
      case ri:
      case ei: {
        o = y;
        do
          o += 1, i = u.charCodeAt(o);
        while (i === Lu || i === Qn || i === ti || i === ri || i === ei);
        s = ["space", u.slice(y, o)], y = o - 1;
        break;
      }
      case ub:
      case nb:
      case ob:
      case sb:
      case fb:
      case lb:
      case ab: {
        let W = String.fromCharCode(i);
        s = [W, W, y];
        break;
      }
      case ib: {
        if (b = g.length ? g.pop()[1] : "", h = u.charCodeAt(y + 1), b === "url" && h !== Ka && h !== Fl && h !== Lu && h !== Qn && h !== ti && h !== ei && h !== ri) {
          o = y;
          do {
            if (p = !1, o = u.indexOf(")", o + 1), o === -1)
              if (n || z) {
                o = y;
                break;
              } else
                I("bracket");
            for (l = o; u.charCodeAt(l - 1) === Kn; )
              l -= 1, p = !p;
          } while (p);
          s = ["brackets", u.slice(y, o + 1), y, o], y = o;
        } else
          o = u.indexOf(")", y + 1), a = u.slice(y, o + 1), o === -1 || pb.test(a) ? s = ["(", "(", y] : (s = ["brackets", a, y, o], y = o);
        break;
      }
      case Ka:
      case Fl: {
        f = i === Ka ? "'" : '"', o = y;
        do {
          if (p = !1, o = u.indexOf(f, o + 1), o === -1)
            if (n || z) {
              o = y + 1;
              break;
            } else
              I("string");
          for (l = o; u.charCodeAt(l - 1) === Kn; )
            l -= 1, p = !p;
        } while (p);
        s = ["string", u.slice(y, o + 1), y, o], y = o;
        break;
      }
      case db: {
        ui.lastIndex = y + 1, ui.test(u), ui.lastIndex === 0 ? o = u.length - 1 : o = ui.lastIndex - 2, s = ["at-word", u.slice(y, o + 1), y, o], y = o;
        break;
      }
      case Kn: {
        for (o = y, c = !0; u.charCodeAt(o + 1) === Kn; )
          o += 1, c = !c;
        if (i = u.charCodeAt(o + 1), c && i !== jl && i !== Lu && i !== Qn && i !== ti && i !== ri && i !== ei && (o += 1, ql.test(u.charAt(o)))) {
          for (; ql.test(u.charAt(o + 1)); )
            o += 1;
          u.charCodeAt(o + 1) === Lu && (o += 1);
        }
        s = ["word", u.slice(y, o + 1), y, o], y = o;
        break;
      }
      default: {
        i === jl && u.charCodeAt(y + 1) === cb ? (o = u.indexOf("*/", y + 2) + 1, o === 0 && (n || z ? o = u.length : I("comment")), s = ["comment", u.slice(y, o + 1), y, o], y = o) : (ni.lastIndex = y + 1, ni.test(u), ni.lastIndex === 0 ? o = u.length - 1 : o = ni.lastIndex - 2, s = ["word", u.slice(y, o + 1), y, o], g.push(s), y = o);
        break;
      }
    }
    return y++, s;
  }
  function O(V) {
    D.push(V);
  }
  return {
    back: O,
    endOfFile: k,
    nextToken: d,
    position: E
  };
};
let gb = xs, mb = _a, bb = Sa, yb = bn, Ul = Es, vb = hb;
const Vl = {
  empty: !0,
  space: !0
};
function xb(t) {
  for (let e = t.length - 1; e >= 0; e--) {
    let r = t[e], u = r[3] || r[2];
    if (u) return u;
  }
}
let wb = class {
  constructor(e) {
    this.input = e, this.root = new yb(), this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = { input: e, start: { column: 1, line: 1, offset: 0 } };
  }
  atrule(e) {
    let r = new gb();
    r.name = e[1].slice(1), r.name === "" && this.unnamedAtrule(r, e), this.init(r, e[2]);
    let u, n, i, a = !1, c = !1, o = [], f = [];
    for (; !this.tokenizer.endOfFile(); ) {
      if (e = this.tokenizer.nextToken(), u = e[0], u === "(" || u === "[" ? f.push(u === "(" ? ")" : "]") : u === "{" && f.length > 0 ? f.push("}") : u === f[f.length - 1] && f.pop(), f.length === 0)
        if (u === ";") {
          r.source.end = this.getPosition(e[2]), r.source.end.offset++, this.semicolon = !0;
          break;
        } else if (u === "{") {
          c = !0;
          break;
        } else if (u === "}") {
          if (o.length > 0) {
            for (i = o.length - 1, n = o[i]; n && n[0] === "space"; )
              n = o[--i];
            n && (r.source.end = this.getPosition(n[3] || n[2]), r.source.end.offset++);
          }
          this.end(e);
          break;
        } else
          o.push(e);
      else
        o.push(e);
      if (this.tokenizer.endOfFile()) {
        a = !0;
        break;
      }
    }
    r.raws.between = this.spacesAndCommentsFromEnd(o), o.length ? (r.raws.afterName = this.spacesAndCommentsFromStart(o), this.raw(r, "params", o), a && (e = o[o.length - 1], r.source.end = this.getPosition(e[3] || e[2]), r.source.end.offset++, this.spaces = r.raws.between, r.raws.between = "")) : (r.raws.afterName = "", r.params = ""), c && (r.nodes = [], this.current = r);
  }
  checkMissedSemicolon(e) {
    let r = this.colon(e);
    if (r === !1) return;
    let u = 0, n;
    for (let i = r - 1; i >= 0 && (n = e[i], !(n[0] !== "space" && (u += 1, u === 2))); i--)
      ;
    throw this.input.error(
      "Missed semicolon",
      n[0] === "word" ? n[3] + 1 : n[2]
    );
  }
  colon(e) {
    let r = 0, u, n, i;
    for (let [a, c] of e.entries()) {
      if (n = c, i = n[0], i === "(" && (r += 1), i === ")" && (r -= 1), r === 0 && i === ":")
        if (!u)
          this.doubleColon(n);
        else {
          if (u[0] === "word" && u[1] === "progid")
            continue;
          return a;
        }
      u = n;
    }
    return !1;
  }
  comment(e) {
    let r = new mb();
    this.init(r, e[2]), r.source.end = this.getPosition(e[3] || e[2]), r.source.end.offset++;
    let u = e[1].slice(2, -2);
    if (/^\s*$/.test(u))
      r.text = "", r.raws.left = u, r.raws.right = "";
    else {
      let n = u.match(/^(\s*)([^]*\S)(\s*)$/);
      r.text = n[2], r.raws.left = n[1], r.raws.right = n[3];
    }
  }
  createTokenizer() {
    this.tokenizer = vb(this.input);
  }
  decl(e, r) {
    let u = new bb();
    this.init(u, e[0][2]);
    let n = e[e.length - 1];
    for (n[0] === ";" && (this.semicolon = !0, e.pop()), u.source.end = this.getPosition(
      n[3] || n[2] || xb(e)
    ), u.source.end.offset++; e[0][0] !== "word"; )
      e.length === 1 && this.unknownWord(e), u.raws.before += e.shift()[1];
    for (u.source.start = this.getPosition(e[0][2]), u.prop = ""; e.length; ) {
      let f = e[0][0];
      if (f === ":" || f === "space" || f === "comment")
        break;
      u.prop += e.shift()[1];
    }
    u.raws.between = "";
    let i;
    for (; e.length; )
      if (i = e.shift(), i[0] === ":") {
        u.raws.between += i[1];
        break;
      } else
        i[0] === "word" && /\w/.test(i[1]) && this.unknownWord([i]), u.raws.between += i[1];
    (u.prop[0] === "_" || u.prop[0] === "*") && (u.raws.before += u.prop[0], u.prop = u.prop.slice(1));
    let a = [], c;
    for (; e.length && (c = e[0][0], !(c !== "space" && c !== "comment")); )
      a.push(e.shift());
    this.precheckMissedSemicolon(e);
    for (let f = e.length - 1; f >= 0; f--) {
      if (i = e[f], i[1].toLowerCase() === "!important") {
        u.important = !0;
        let s = this.stringFrom(e, f);
        s = this.spacesFromEnd(e) + s, s !== " !important" && (u.raws.important = s);
        break;
      } else if (i[1].toLowerCase() === "important") {
        let s = e.slice(0), p = "";
        for (let l = f; l > 0; l--) {
          let h = s[l][0];
          if (p.trim().startsWith("!") && h !== "space")
            break;
          p = s.pop()[1] + p;
        }
        p.trim().startsWith("!") && (u.important = !0, u.raws.important = p, e = s);
      }
      if (i[0] !== "space" && i[0] !== "comment")
        break;
    }
    e.some((f) => f[0] !== "space" && f[0] !== "comment") && (u.raws.between += a.map((f) => f[1]).join(""), a = []), this.raw(u, "value", a.concat(e), r), u.value.includes(":") && !r && this.checkMissedSemicolon(e);
  }
  doubleColon(e) {
    throw this.input.error(
      "Double colon",
      { offset: e[2] },
      { offset: e[2] + e[1].length }
    );
  }
  emptyRule(e) {
    let r = new Ul();
    this.init(r, e[2]), r.selector = "", r.raws.between = "", this.current = r;
  }
  end(e) {
    this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(e);
  }
  endFile() {
    this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.getPosition(this.tokenizer.position());
  }
  freeSemicolon(e) {
    if (this.spaces += e[1], this.current.nodes) {
      let r = this.current.nodes[this.current.nodes.length - 1];
      r && r.type === "rule" && !r.raws.ownSemicolon && (r.raws.ownSemicolon = this.spaces, this.spaces = "", r.source.end = this.getPosition(e[2]), r.source.end.offset += r.raws.ownSemicolon.length);
    }
  }
  // Helpers
  getPosition(e) {
    let r = this.input.fromOffset(e);
    return {
      column: r.col,
      line: r.line,
      offset: e
    };
  }
  init(e, r) {
    this.current.push(e), e.source = {
      input: this.input,
      start: this.getPosition(r)
    }, e.raws.before = this.spaces, this.spaces = "", e.type !== "comment" && (this.semicolon = !1);
  }
  other(e) {
    let r = !1, u = null, n = !1, i = null, a = [], c = e[1].startsWith("--"), o = [], f = e;
    for (; f; ) {
      if (u = f[0], o.push(f), u === "(" || u === "[")
        i || (i = f), a.push(u === "(" ? ")" : "]");
      else if (c && n && u === "{")
        i || (i = f), a.push("}");
      else if (a.length === 0)
        if (u === ";")
          if (n) {
            this.decl(o, c);
            return;
          } else
            break;
        else if (u === "{") {
          this.rule(o);
          return;
        } else if (u === "}") {
          this.tokenizer.back(o.pop()), r = !0;
          break;
        } else u === ":" && (n = !0);
      else u === a[a.length - 1] && (a.pop(), a.length === 0 && (i = null));
      f = this.tokenizer.nextToken();
    }
    if (this.tokenizer.endOfFile() && (r = !0), a.length > 0 && this.unclosedBracket(i), r && n) {
      if (!c)
        for (; o.length && (f = o[o.length - 1][0], !(f !== "space" && f !== "comment")); )
          this.tokenizer.back(o.pop());
      this.decl(o, c);
    } else
      this.unknownWord(o);
  }
  parse() {
    let e;
    for (; !this.tokenizer.endOfFile(); )
      switch (e = this.tokenizer.nextToken(), e[0]) {
        case "space":
          this.spaces += e[1];
          break;
        case ";":
          this.freeSemicolon(e);
          break;
        case "}":
          this.end(e);
          break;
        case "comment":
          this.comment(e);
          break;
        case "at-word":
          this.atrule(e);
          break;
        case "{":
          this.emptyRule(e);
          break;
        default:
          this.other(e);
          break;
      }
    this.endFile();
  }
  precheckMissedSemicolon() {
  }
  raw(e, r, u, n) {
    let i, a, c = u.length, o = "", f = !0, s, p;
    for (let l = 0; l < c; l += 1)
      i = u[l], a = i[0], a === "space" && l === c - 1 && !n ? f = !1 : a === "comment" ? (p = u[l - 1] ? u[l - 1][0] : "empty", s = u[l + 1] ? u[l + 1][0] : "empty", !Vl[p] && !Vl[s] ? o.slice(-1) === "," ? f = !1 : o += i[1] : f = !1) : o += i[1];
    if (!f) {
      let l = u.reduce((h, b) => h + b[1], "");
      e.raws[r] = { raw: l, value: o };
    }
    e[r] = o;
  }
  rule(e) {
    e.pop();
    let r = new Ul();
    this.init(r, e[0][2]), r.raws.between = this.spacesAndCommentsFromEnd(e), this.raw(r, "selector", e), this.current = r;
  }
  spacesAndCommentsFromEnd(e) {
    let r, u = "";
    for (; e.length && (r = e[e.length - 1][0], !(r !== "space" && r !== "comment")); )
      u = e.pop()[1] + u;
    return u;
  }
  // Errors
  spacesAndCommentsFromStart(e) {
    let r, u = "";
    for (; e.length && (r = e[0][0], !(r !== "space" && r !== "comment")); )
      u += e.shift()[1];
    return u;
  }
  spacesFromEnd(e) {
    let r, u = "";
    for (; e.length && (r = e[e.length - 1][0], r === "space"); )
      u = e.pop()[1] + u;
    return u;
  }
  stringFrom(e, r) {
    let u = "";
    for (let n = r; n < e.length; n++)
      u += e[n][1];
    return e.splice(r, e.length - r), u;
  }
  unclosedBlock() {
    let e = this.current.source.start;
    throw this.input.error("Unclosed block", e.line, e.column);
  }
  unclosedBracket(e) {
    throw this.input.error(
      "Unclosed bracket",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unexpectedClose(e) {
    throw this.input.error(
      "Unexpected }",
      { offset: e[2] },
      { offset: e[2] + 1 }
    );
  }
  unknownWord(e) {
    throw this.input.error(
      "Unknown word " + e[0][1],
      { offset: e[0][2] },
      { offset: e[0][2] + e[0][1].length }
    );
  }
  unnamedAtrule(e, r) {
    throw this.input.error(
      "At-rule without name",
      { offset: r[2] },
      { offset: r[2] + r[1].length }
    );
  }
};
var Eb = wb;
let Ab = Sr, _b = Da, Sb = Eb;
function Ti(t, e) {
  let r = new _b(t, e), u = new Sb(r);
  try {
    u.parse();
  } catch (n) {
    throw process.env.NODE_ENV !== "production" && n.name === "CssSyntaxError" && e && e.from && (/\.scss$/i.test(e.from) ? n.message += `
You tried to parse SCSS with the standard CSS parser; try again with the postcss-scss parser` : /\.sass/i.test(e.from) ? n.message += `
You tried to parse Sass with the standard CSS parser; try again with the postcss-sass parser` : /\.less$/i.test(e.from) && (n.message += `
You tried to parse Less with the standard CSS parser; try again with the postcss-less parser`)), n;
  }
  return u.root;
}
var As = Ti;
Ti.default = Ti;
Ab.registerParse(Ti);
let yo = class {
  constructor(e, r = {}) {
    if (this.type = "warning", this.text = e, r.node && r.node.source) {
      let u = r.node.rangeBy(r);
      this.line = u.start.line, this.column = u.start.column, this.endLine = u.end.line, this.endColumn = u.end.column;
    }
    for (let u in r) this[u] = r[u];
  }
  toString() {
    return this.node ? this.node.error(this.text, {
      index: this.index,
      plugin: this.plugin,
      word: this.word
    }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
  }
};
var af = yo;
yo.default = yo;
let Db = af, vo = class {
  get content() {
    return this.css;
  }
  constructor(e, r, u) {
    this.processor = e, this.messages = [], this.root = r, this.opts = u, this.css = "", this.map = void 0;
  }
  toString() {
    return this.css;
  }
  warn(e, r = {}) {
    r.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (r.plugin = this.lastPlugin.postcssPlugin);
    let u = new Db(e, r);
    return this.messages.push(u), u;
  }
  warnings() {
    return this.messages.filter((e) => e.type === "warning");
  }
};
var _s = vo;
vo.default = vo;
let zl = {};
var of = function(e) {
  zl[e] || (zl[e] = !0, typeof console < "u" && console.warn && console.warn(e));
};
let Tb = Sr, kb = ws, Cb = nf, Ob = As, Hl = _s, Pb = bn, $b = Ea, { isClean: ht, my: Nb } = mn, Mb = of;
const Lb = {
  atrule: "AtRule",
  comment: "Comment",
  decl: "Declaration",
  document: "Document",
  root: "Root",
  rule: "Rule"
}, Ib = {
  AtRule: !0,
  AtRuleExit: !0,
  Comment: !0,
  CommentExit: !0,
  Declaration: !0,
  DeclarationExit: !0,
  Document: !0,
  DocumentExit: !0,
  Once: !0,
  OnceExit: !0,
  postcssPlugin: !0,
  prepare: !0,
  Root: !0,
  RootExit: !0,
  Rule: !0,
  RuleExit: !0
}, Bb = {
  Once: !0,
  postcssPlugin: !0,
  prepare: !0
}, nu = 0;
function Iu(t) {
  return typeof t == "object" && typeof t.then == "function";
}
function sf(t) {
  let e = !1, r = Lb[t.type];
  return t.type === "decl" ? e = t.prop.toLowerCase() : t.type === "atrule" && (e = t.name.toLowerCase()), e && t.append ? [
    r,
    r + "-" + e,
    nu,
    r + "Exit",
    r + "Exit-" + e
  ] : e ? [r, r + "-" + e, r + "Exit", r + "Exit-" + e] : t.append ? [r, nu, r + "Exit"] : [r, r + "Exit"];
}
function Gl(t) {
  let e;
  return t.type === "document" ? e = ["Document", nu, "DocumentExit"] : t.type === "root" ? e = ["Root", nu, "RootExit"] : e = sf(t), {
    eventIndex: 0,
    events: e,
    iterator: 0,
    node: t,
    visitorIndex: 0,
    visitors: []
  };
}
function xo(t) {
  return t[ht] = !1, t.nodes && t.nodes.forEach((e) => xo(e)), t;
}
let wo = {}, iu = class lf {
  get content() {
    return this.stringify().content;
  }
  get css() {
    return this.stringify().css;
  }
  get map() {
    return this.stringify().map;
  }
  get messages() {
    return this.sync().messages;
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    return this.sync().root;
  }
  get [Symbol.toStringTag]() {
    return "LazyResult";
  }
  constructor(e, r, u) {
    this.stringified = !1, this.processed = !1;
    let n;
    if (typeof r == "object" && r !== null && (r.type === "root" || r.type === "document"))
      n = xo(r);
    else if (r instanceof lf || r instanceof Hl)
      n = xo(r.root), r.map && (typeof u.map > "u" && (u.map = {}), u.map.inline || (u.map.inline = !1), u.map.prev = r.map);
    else {
      let i = Ob;
      u.syntax && (i = u.syntax.parse), u.parser && (i = u.parser), i.parse && (i = i.parse);
      try {
        n = i(r, u);
      } catch (a) {
        this.processed = !0, this.error = a;
      }
      n && !n[Nb] && Tb.rebuild(n);
    }
    this.result = new Hl(e, n, u), this.helpers = { ...wo, postcss: wo, result: this.result }, this.plugins = this.processor.plugins.map((i) => typeof i == "object" && i.prepare ? { ...i, ...i.prepare(this.result) } : i);
  }
  async() {
    return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  getAsyncError() {
    throw new Error("Use process(css).then(cb) to work with async plugins");
  }
  handleError(e, r) {
    let u = this.result.lastPlugin;
    try {
      if (r && r.addToError(e), this.error = e, e.name === "CssSyntaxError" && !e.plugin)
        e.plugin = u.postcssPlugin, e.setMessage();
      else if (u.postcssVersion && process.env.NODE_ENV !== "production") {
        let n = u.postcssPlugin, i = u.postcssVersion, a = this.result.processor.version, c = i.split("."), o = a.split(".");
        (c[0] !== o[0] || parseInt(c[1]) > parseInt(o[1])) && console.error(
          "Unknown error from PostCSS plugin. Your current PostCSS version is " + a + ", but " + n + " uses " + i + ". Perhaps this is the source of the error below."
        );
      }
    } catch (n) {
      console && console.error && console.error(n);
    }
    return e;
  }
  prepareVisitors() {
    this.listeners = {};
    let e = (r, u, n) => {
      this.listeners[u] || (this.listeners[u] = []), this.listeners[u].push([r, n]);
    };
    for (let r of this.plugins)
      if (typeof r == "object")
        for (let u in r) {
          if (!Ib[u] && /^[A-Z]/.test(u))
            throw new Error(
              `Unknown event ${u} in ${r.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`
            );
          if (!Bb[u])
            if (typeof r[u] == "object")
              for (let n in r[u])
                n === "*" ? e(r, u, r[u][n]) : e(
                  r,
                  u + "-" + n.toLowerCase(),
                  r[u][n]
                );
            else typeof r[u] == "function" && e(r, u, r[u]);
        }
    this.hasListener = Object.keys(this.listeners).length > 0;
  }
  async runAsync() {
    this.plugin = 0;
    for (let e = 0; e < this.plugins.length; e++) {
      let r = this.plugins[e], u = this.runOnRoot(r);
      if (Iu(u))
        try {
          await u;
        } catch (n) {
          throw this.handleError(n);
        }
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[ht]; ) {
        e[ht] = !0;
        let r = [Gl(e)];
        for (; r.length > 0; ) {
          let u = this.visitTick(r);
          if (Iu(u))
            try {
              await u;
            } catch (n) {
              let i = r[r.length - 1].node;
              throw this.handleError(n, i);
            }
        }
      }
      if (this.listeners.OnceExit)
        for (let [r, u] of this.listeners.OnceExit) {
          this.result.lastPlugin = r;
          try {
            if (e.type === "document") {
              let n = e.nodes.map(
                (i) => u(i, this.helpers)
              );
              await Promise.all(n);
            } else
              await u(e, this.helpers);
          } catch (n) {
            throw this.handleError(n);
          }
        }
    }
    return this.processed = !0, this.stringify();
  }
  runOnRoot(e) {
    this.result.lastPlugin = e;
    try {
      if (typeof e == "object" && e.Once) {
        if (this.result.root.type === "document") {
          let r = this.result.root.nodes.map(
            (u) => e.Once(u, this.helpers)
          );
          return Iu(r[0]) ? Promise.all(r) : r;
        }
        return e.Once(this.result.root, this.helpers);
      } else if (typeof e == "function")
        return e(this.result.root, this.result);
    } catch (r) {
      throw this.handleError(r);
    }
  }
  stringify() {
    if (this.error) throw this.error;
    if (this.stringified) return this.result;
    this.stringified = !0, this.sync();
    let e = this.result.opts, r = $b;
    e.syntax && (r = e.syntax.stringify), e.stringifier && (r = e.stringifier), r.stringify && (r = r.stringify);
    let n = new Cb(r, this.result.root, this.result.opts).generate();
    return this.result.css = n[0], this.result.map = n[1], this.result;
  }
  sync() {
    if (this.error) throw this.error;
    if (this.processed) return this.result;
    if (this.processed = !0, this.processing)
      throw this.getAsyncError();
    for (let e of this.plugins) {
      let r = this.runOnRoot(e);
      if (Iu(r))
        throw this.getAsyncError();
    }
    if (this.prepareVisitors(), this.hasListener) {
      let e = this.result.root;
      for (; !e[ht]; )
        e[ht] = !0, this.walkSync(e);
      if (this.listeners.OnceExit)
        if (e.type === "document")
          for (let r of e.nodes)
            this.visitSync(this.listeners.OnceExit, r);
        else
          this.visitSync(this.listeners.OnceExit, e);
    }
    return this.result;
  }
  then(e, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this.opts || Mb(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, r);
  }
  toString() {
    return this.css;
  }
  visitSync(e, r) {
    for (let [u, n] of e) {
      this.result.lastPlugin = u;
      let i;
      try {
        i = n(r, this.helpers);
      } catch (a) {
        throw this.handleError(a, r.proxyOf);
      }
      if (r.type !== "root" && r.type !== "document" && !r.parent)
        return !0;
      if (Iu(i))
        throw this.getAsyncError();
    }
  }
  visitTick(e) {
    let r = e[e.length - 1], { node: u, visitors: n } = r;
    if (u.type !== "root" && u.type !== "document" && !u.parent) {
      e.pop();
      return;
    }
    if (n.length > 0 && r.visitorIndex < n.length) {
      let [a, c] = n[r.visitorIndex];
      r.visitorIndex += 1, r.visitorIndex === n.length && (r.visitors = [], r.visitorIndex = 0), this.result.lastPlugin = a;
      try {
        return c(u.toProxy(), this.helpers);
      } catch (o) {
        throw this.handleError(o, u);
      }
    }
    if (r.iterator !== 0) {
      let a = r.iterator, c;
      for (; c = u.nodes[u.indexes[a]]; )
        if (u.indexes[a] += 1, !c[ht]) {
          c[ht] = !0, e.push(Gl(c));
          return;
        }
      r.iterator = 0, delete u.indexes[a];
    }
    let i = r.events;
    for (; r.eventIndex < i.length; ) {
      let a = i[r.eventIndex];
      if (r.eventIndex += 1, a === nu) {
        u.nodes && u.nodes.length && (u[ht] = !0, r.iterator = u.getIterator());
        return;
      } else if (this.listeners[a]) {
        r.visitors = this.listeners[a];
        return;
      }
    }
    e.pop();
  }
  walkSync(e) {
    e[ht] = !0;
    let r = sf(e);
    for (let u of r)
      if (u === nu)
        e.nodes && e.each((n) => {
          n[ht] || this.walkSync(n);
        });
      else {
        let n = this.listeners[u];
        if (n && this.visitSync(n, e.toProxy()))
          return;
      }
  }
  warnings() {
    return this.sync().warnings();
  }
};
iu.registerPostcss = (t) => {
  wo = t;
};
var cf = iu;
iu.default = iu;
Pb.registerLazyResult(iu);
kb.registerLazyResult(iu);
let Rb = nf, Fb = As;
const jb = _s;
let qb = Ea, Ub = of, Eo = class {
  get content() {
    return this.result.css;
  }
  get css() {
    return this.result.css;
  }
  get map() {
    return this.result.map;
  }
  get messages() {
    return [];
  }
  get opts() {
    return this.result.opts;
  }
  get processor() {
    return this.result.processor;
  }
  get root() {
    if (this._root)
      return this._root;
    let e, r = Fb;
    try {
      e = r(this._css, this._opts);
    } catch (u) {
      this.error = u;
    }
    if (this.error)
      throw this.error;
    return this._root = e, e;
  }
  get [Symbol.toStringTag]() {
    return "NoWorkResult";
  }
  constructor(e, r, u) {
    r = r.toString(), this.stringified = !1, this._processor = e, this._css = r, this._opts = u, this._map = void 0;
    let n, i = qb;
    this.result = new jb(this._processor, n, this._opts), this.result.css = r;
    let a = this;
    Object.defineProperty(this.result, "root", {
      get() {
        return a.root;
      }
    });
    let c = new Rb(i, n, this._opts, r);
    if (c.isMap()) {
      let [o, f] = c.generate();
      o && (this.result.css = o), f && (this.result.map = f);
    } else
      c.clearAnnotation(), this.result.css = c.css;
  }
  async() {
    return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
  }
  catch(e) {
    return this.async().catch(e);
  }
  finally(e) {
    return this.async().then(e, e);
  }
  sync() {
    if (this.error) throw this.error;
    return this.result;
  }
  then(e, r) {
    return process.env.NODE_ENV !== "production" && ("from" in this._opts || Ub(
      "Without `from` option PostCSS could generate wrong source map and will not find Browserslist config. Set it to CSS file path or to `undefined` to prevent this warning."
    )), this.async().then(e, r);
  }
  toString() {
    return this._css;
  }
  warnings() {
    return [];
  }
};
var Vb = Eo;
Eo.default = Eo;
let zb = ws, Hb = cf, Gb = Vb, Wb = bn, en = class {
  constructor(e = []) {
    this.version = "8.5.4", this.plugins = this.normalize(e);
  }
  normalize(e) {
    let r = [];
    for (let u of e)
      if (u.postcss === !0 ? u = u() : u.postcss && (u = u.postcss), typeof u == "object" && Array.isArray(u.plugins))
        r = r.concat(u.plugins);
      else if (typeof u == "object" && u.postcssPlugin)
        r.push(u);
      else if (typeof u == "function")
        r.push(u);
      else if (typeof u == "object" && (u.parse || u.stringify)) {
        if (process.env.NODE_ENV !== "production")
          throw new Error(
            "PostCSS syntaxes cannot be used as plugins. Instead, please use one of the syntax/parser/stringifier options as outlined in your PostCSS runner documentation."
          );
      } else
        throw new Error(u + " is not a PostCSS plugin");
    return r;
  }
  process(e, r = {}) {
    return !this.plugins.length && !r.parser && !r.stringifier && !r.syntax ? new Gb(this, e, r) : new Hb(this, e, r);
  }
  use(e) {
    return this.plugins = this.plugins.concat(this.normalize([e])), this;
  }
};
var Jb = en;
en.default = en;
Wb.registerProcessor(en);
zb.registerProcessor(en);
let ff = xs, df = _a, Xb = Sr, Yb = bs, pf = Sa, hf = ws, Zb = K1, Kb = Da, Qb = cf, ey = K0, ty = Aa, ry = As, Ss = Jb, uy = _s, gf = bn, mf = Es, ny = Ea, iy = af;
function ne(...t) {
  return t.length === 1 && Array.isArray(t[0]) && (t = t[0]), new Ss(t);
}
ne.plugin = function(e, r) {
  let u = !1;
  function n(...a) {
    console && console.warn && !u && (u = !0, console.warn(
      e + `: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`
    ), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(
      e + `: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`
    ));
    let c = r(...a);
    return c.postcssPlugin = e, c.postcssVersion = new Ss().version, c;
  }
  let i;
  return Object.defineProperty(n, "postcss", {
    get() {
      return i || (i = n()), i;
    }
  }), n.process = function(a, c, o) {
    return ne([n(o)]).process(a, c);
  }, n;
};
ne.stringify = ny;
ne.parse = ry;
ne.fromJSON = Zb;
ne.list = ey;
ne.comment = (t) => new df(t);
ne.atRule = (t) => new ff(t);
ne.decl = (t) => new pf(t);
ne.rule = (t) => new mf(t);
ne.root = (t) => new gf(t);
ne.document = (t) => new hf(t);
ne.CssSyntaxError = Yb;
ne.Declaration = pf;
ne.Container = Xb;
ne.Processor = Ss;
ne.Document = hf;
ne.Comment = df;
ne.Warning = iy;
ne.AtRule = ff;
ne.Result = uy;
ne.Input = Kb;
ne.Rule = mf;
ne.Root = gf;
ne.Node = ty;
Qb.registerPostcss(ne);
var ay = ne;
ne.default = ne;
const oy = a0, Wl = y1, { isPlainObject: sy } = gs, Jl = wc, ly = x1, { parse: cy } = ay, fy = [
  "img",
  "audio",
  "video",
  "picture",
  "svg",
  "object",
  "map",
  "iframe",
  "embed"
], dy = ["script", "style"];
function Bu(t, e) {
  t && Object.keys(t).forEach(function(r) {
    e(t[r], r);
  });
}
function St(t, e) {
  return {}.hasOwnProperty.call(t, e);
}
function Xl(t, e) {
  const r = [];
  return Bu(t, function(u) {
    e(u) && r.push(u);
  }), r;
}
function py(t) {
  for (const e in t)
    if (St(t, e))
      return !1;
  return !0;
}
function hy(t) {
  return t.map(function(e) {
    if (!e.url)
      throw new Error("URL missing");
    return e.url + (e.w ? ` ${e.w}w` : "") + (e.h ? ` ${e.h}h` : "") + (e.d ? ` ${e.d}x` : "");
  }).join(", ");
}
var gy = tn;
const my = /^[^\0\t\n\f\r /<=>]+$/;
function tn(t, e, r) {
  if (t == null)
    return "";
  typeof t == "number" && (t = t.toString());
  let u = "", n = "";
  function i(_, C) {
    const T = this;
    this.tag = _, this.attribs = C || {}, this.tagPosition = u.length, this.text = "", this.mediaChildren = [], this.updateParentNodeText = function() {
      if (y.length) {
        const j = y[y.length - 1];
        j.text += T.text;
      }
    }, this.updateParentNodeMediaChildren = function() {
      y.length && fy.includes(this.tag) && y[y.length - 1].mediaChildren.push(this.tag);
    };
  }
  e = Object.assign({}, tn.defaults, e), e.parser = Object.assign({}, by, e.parser);
  const a = function(_) {
    return e.allowedTags === !1 || (e.allowedTags || []).indexOf(_) > -1;
  };
  dy.forEach(function(_) {
    a(_) && !e.allowVulnerableTags && console.warn(`

⚠️ Your \`allowedTags\` option includes, \`${_}\`, which is inherently
vulnerable to XSS attacks. Please remove it from \`allowedTags\`.
Or, to disable this warning, add the \`allowVulnerableTags\` option
and ensure you are accounting for this risk.

`);
  });
  const c = e.nonTextTags || [
    "script",
    "style",
    "textarea",
    "option"
  ];
  let o, f;
  e.allowedAttributes && (o = {}, f = {}, Bu(e.allowedAttributes, function(_, C) {
    o[C] = [];
    const T = [];
    _.forEach(function(j) {
      typeof j == "string" && j.indexOf("*") >= 0 ? T.push(Wl(j).replace(/\\\*/g, ".*")) : o[C].push(j);
    }), T.length && (f[C] = new RegExp("^(" + T.join("|") + ")$"));
  }));
  const s = {}, p = {}, l = {};
  Bu(e.allowedClasses, function(_, C) {
    if (o && (St(o, C) || (o[C] = []), o[C].push("class")), s[C] = _, Array.isArray(_)) {
      const T = [];
      s[C] = [], l[C] = [], _.forEach(function(j) {
        typeof j == "string" && j.indexOf("*") >= 0 ? T.push(Wl(j).replace(/\\\*/g, ".*")) : j instanceof RegExp ? l[C].push(j) : s[C].push(j);
      }), T.length && (p[C] = new RegExp("^(" + T.join("|") + ")$"));
    }
  });
  const h = {};
  let b;
  Bu(e.transformTags, function(_, C) {
    let T;
    typeof _ == "function" ? T = _ : typeof _ == "string" && (T = tn.simpleTransform(_)), C === "*" ? b = T : h[C] = T;
  });
  let v, y, g, D, E, I, k = !1;
  O();
  const d = new oy.Parser({
    onopentag: function(_, C) {
      if (e.enforceHtmlBoundary && _ === "html" && O(), E) {
        I++;
        return;
      }
      const T = new i(_, C);
      y.push(T);
      let j = !1;
      const oe = !!T.text;
      let K;
      if (St(h, _) && (K = h[_](_, C), T.attribs = C = K.attribs, K.text !== void 0 && (T.innerText = K.text), _ !== K.tagName && (T.name = _ = K.tagName, D[v] = K.tagName)), b && (K = b(_, C), T.attribs = C = K.attribs, _ !== K.tagName && (T.name = _ = K.tagName, D[v] = K.tagName)), (!a(_) || e.disallowedTagsMode === "recursiveEscape" && !py(g) || e.nestingLimit != null && v >= e.nestingLimit) && (j = !0, g[v] = !0, (e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") && c.indexOf(_) !== -1 && (E = !0, I = 1), g[v] = !0), v++, j) {
        if (e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard")
          return;
        n = u, u = "";
      }
      u += "<" + _, _ === "script" && (e.allowedScriptHostnames || e.allowedScriptDomains) && (T.innerText = ""), (!o || St(o, _) || o["*"]) && Bu(C, function(te, ee) {
        if (!my.test(ee)) {
          delete T.attribs[ee];
          return;
        }
        if (te === "" && !e.allowedEmptyAttributes.includes(ee) && (e.nonBooleanAttributes.includes(ee) || e.nonBooleanAttributes.includes("*"))) {
          delete T.attribs[ee];
          return;
        }
        let Lt = !1;
        if (!o || St(o, _) && o[_].indexOf(ee) !== -1 || o["*"] && o["*"].indexOf(ee) !== -1 || St(f, _) && f[_].test(ee) || f["*"] && f["*"].test(ee))
          Lt = !0;
        else if (o && o[_]) {
          for (const Z of o[_])
            if (sy(Z) && Z.name && Z.name === ee) {
              Lt = !0;
              let U = "";
              if (Z.multiple === !0) {
                const Fe = te.split(" ");
                for (const je of Fe)
                  Z.values.indexOf(je) !== -1 && (U === "" ? U = je : U += " " + je);
              } else Z.values.indexOf(te) >= 0 && (U = te);
              te = U;
            }
        }
        if (Lt) {
          if (e.allowedSchemesAppliedToAttributes.indexOf(ee) !== -1 && z(_, te)) {
            delete T.attribs[ee];
            return;
          }
          if (_ === "script" && ee === "src") {
            let Z = !0;
            try {
              const U = W(te);
              if (e.allowedScriptHostnames || e.allowedScriptDomains) {
                const Fe = (e.allowedScriptHostnames || []).find(function(fe) {
                  return fe === U.url.hostname;
                }), je = (e.allowedScriptDomains || []).find(function(fe) {
                  return U.url.hostname === fe || U.url.hostname.endsWith(`.${fe}`);
                });
                Z = Fe || je;
              }
            } catch {
              Z = !1;
            }
            if (!Z) {
              delete T.attribs[ee];
              return;
            }
          }
          if (_ === "iframe" && ee === "src") {
            let Z = !0;
            try {
              const U = W(te);
              if (U.isRelativeUrl)
                Z = St(e, "allowIframeRelativeUrls") ? e.allowIframeRelativeUrls : !e.allowedIframeHostnames && !e.allowedIframeDomains;
              else if (e.allowedIframeHostnames || e.allowedIframeDomains) {
                const Fe = (e.allowedIframeHostnames || []).find(function(fe) {
                  return fe === U.url.hostname;
                }), je = (e.allowedIframeDomains || []).find(function(fe) {
                  return U.url.hostname === fe || U.url.hostname.endsWith(`.${fe}`);
                });
                Z = Fe || je;
              }
            } catch {
              Z = !1;
            }
            if (!Z) {
              delete T.attribs[ee];
              return;
            }
          }
          if (ee === "srcset")
            try {
              let Z = ly(te);
              if (Z.forEach(function(U) {
                z("srcset", U.url) && (U.evil = !0);
              }), Z = Xl(Z, function(U) {
                return !U.evil;
              }), Z.length)
                te = hy(Xl(Z, function(U) {
                  return !U.evil;
                })), T.attribs[ee] = te;
              else {
                delete T.attribs[ee];
                return;
              }
            } catch {
              delete T.attribs[ee];
              return;
            }
          if (ee === "class") {
            const Z = s[_], U = s["*"], Fe = p[_], je = l[_], fe = p["*"], rr = [
              Fe,
              fe
            ].concat(je).filter(function(ur) {
              return ur;
            });
            if (Z && U ? te = q(te, Jl(Z, U), rr) : te = q(te, Z || U, rr), !te.length) {
              delete T.attribs[ee];
              return;
            }
          }
          if (ee === "style") {
            if (e.parseStyleAttributes)
              try {
                const Z = cy(_ + " {" + te + "}", { map: !1 }), U = A(Z, e.allowedStyles);
                if (te = $(U), te.length === 0) {
                  delete T.attribs[ee];
                  return;
                }
              } catch {
                typeof window < "u" && console.warn('Failed to parse "' + _ + " {" + te + `}", If you're running this in a browser, we recommend to disable style parsing: options.parseStyleAttributes: false, since this only works in a node environment due to a postcss dependency, More info: https://github.com/apostrophecms/sanitize-html/issues/547`), delete T.attribs[ee];
                return;
              }
            else if (e.allowedStyles)
              throw new Error("allowedStyles option cannot be used together with parseStyleAttributes: false.");
          }
          u += " " + ee, te && te.length ? u += '="' + V(te, !0) + '"' : e.allowedEmptyAttributes.includes(ee) && (u += '=""');
        } else
          delete T.attribs[ee];
      }), e.selfClosing.indexOf(_) !== -1 ? u += " />" : (u += ">", T.innerText && !oe && !e.textFilter && (u += V(T.innerText), k = !0)), j && (u = n + V(u), n = "");
    },
    ontext: function(_) {
      if (E)
        return;
      const C = y[y.length - 1];
      let T;
      if (C && (T = C.tag, _ = C.innerText !== void 0 ? C.innerText : _), e.disallowedTagsMode === "completelyDiscard" && !a(T))
        _ = "";
      else if ((e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") && (T === "script" || T === "style"))
        u += _;
      else {
        const j = V(_, !1);
        e.textFilter && !k ? u += e.textFilter(j, T) : k || (u += j);
      }
      if (y.length) {
        const j = y[y.length - 1];
        j.text += _;
      }
    },
    onclosetag: function(_, C) {
      if (E)
        if (I--, !I)
          E = !1;
        else
          return;
      const T = y.pop();
      if (!T)
        return;
      if (T.tag !== _) {
        y.push(T);
        return;
      }
      E = e.enforceHtmlBoundary ? _ === "html" : !1, v--;
      const j = g[v];
      if (j) {
        if (delete g[v], e.disallowedTagsMode === "discard" || e.disallowedTagsMode === "completelyDiscard") {
          T.updateParentNodeText();
          return;
        }
        n = u, u = "";
      }
      if (D[v] && (_ = D[v], delete D[v]), e.exclusiveFilter && e.exclusiveFilter(T)) {
        u = u.substr(0, T.tagPosition);
        return;
      }
      if (T.updateParentNodeMediaChildren(), T.updateParentNodeText(), // Already output />
      e.selfClosing.indexOf(_) !== -1 || // Escaped tag, closing tag is implied
      C && !a(_) && ["escape", "recursiveEscape"].indexOf(e.disallowedTagsMode) >= 0) {
        j && (u = n, n = "");
        return;
      }
      u += "</" + _ + ">", j && (u = n + V(u), n = ""), k = !1;
    }
  }, e.parser);
  return d.write(t), d.end(), u;
  function O() {
    u = "", v = 0, y = [], g = {}, D = {}, E = !1, I = 0;
  }
  function V(_, C) {
    return typeof _ != "string" && (_ = _ + ""), e.parser.decodeEntities && (_ = _.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), C && (_ = _.replace(/"/g, "&quot;"))), _ = _.replace(/&(?![a-zA-Z0-9#]{1,20};)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"), C && (_ = _.replace(/"/g, "&quot;")), _;
  }
  function z(_, C) {
    for (C = C.replace(/[\x00-\x20]+/g, ""); ; ) {
      const oe = C.indexOf("<!--");
      if (oe === -1)
        break;
      const K = C.indexOf("-->", oe + 4);
      if (K === -1)
        break;
      C = C.substring(0, oe) + C.substring(K + 3);
    }
    const T = C.match(/^([a-zA-Z][a-zA-Z0-9.\-+]*):/);
    if (!T)
      return C.match(/^[/\\]{2}/) ? !e.allowProtocolRelative : !1;
    const j = T[1].toLowerCase();
    return St(e.allowedSchemesByTag, _) ? e.allowedSchemesByTag[_].indexOf(j) === -1 : !e.allowedSchemes || e.allowedSchemes.indexOf(j) === -1;
  }
  function W(_) {
    if (_ = _.replace(/^(\w+:)?\s*[\\/]\s*[\\/]/, "$1//"), _.startsWith("relative:"))
      throw new Error("relative: exploit attempt");
    let C = "relative://relative-site";
    for (let oe = 0; oe < 100; oe++)
      C += `/${oe}`;
    const T = new URL(_, C);
    return {
      isRelativeUrl: T && T.hostname === "relative-site" && T.protocol === "relative:",
      url: T
    };
  }
  function A(_, C) {
    if (!C)
      return _;
    const T = _.nodes[0];
    let j;
    return C[T.selector] && C["*"] ? j = Jl(
      C[T.selector],
      C["*"]
    ) : j = C[T.selector] || C["*"], j && (_.nodes[0].nodes = T.nodes.reduce(L(j), [])), _;
  }
  function $(_) {
    return _.nodes[0].nodes.reduce(function(C, T) {
      return C.push(
        `${T.prop}:${T.value}${T.important ? " !important" : ""}`
      ), C;
    }, []).join(";");
  }
  function L(_) {
    return function(C, T) {
      return St(_, T.prop) && _[T.prop].some(function(oe) {
        return oe.test(T.value);
      }) && C.push(T), C;
    };
  }
  function q(_, C, T) {
    return C ? (_ = _.split(/\s+/), _.filter(function(j) {
      return C.indexOf(j) !== -1 || T.some(function(oe) {
        return oe.test(j);
      });
    }).join(" ")) : _;
  }
}
const by = {
  decodeEntities: !0
};
tn.defaults = {
  allowedTags: [
    // Sections derived from MDN element categories and limited to the more
    // benign categories.
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
    // Content sectioning
    "address",
    "article",
    "aside",
    "footer",
    "header",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "hgroup",
    "main",
    "nav",
    "section",
    // Text content
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "hr",
    "li",
    "main",
    "ol",
    "p",
    "pre",
    "ul",
    // Inline text semantics
    "a",
    "abbr",
    "b",
    "bdi",
    "bdo",
    "br",
    "cite",
    "code",
    "data",
    "dfn",
    "em",
    "i",
    "kbd",
    "mark",
    "q",
    "rb",
    "rp",
    "rt",
    "rtc",
    "ruby",
    "s",
    "samp",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "time",
    "u",
    "var",
    "wbr",
    // Table content
    "caption",
    "col",
    "colgroup",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr"
  ],
  // Tags that cannot be boolean
  nonBooleanAttributes: [
    "abbr",
    "accept",
    "accept-charset",
    "accesskey",
    "action",
    "allow",
    "alt",
    "as",
    "autocapitalize",
    "autocomplete",
    "blocking",
    "charset",
    "cite",
    "class",
    "color",
    "cols",
    "colspan",
    "content",
    "contenteditable",
    "coords",
    "crossorigin",
    "data",
    "datetime",
    "decoding",
    "dir",
    "dirname",
    "download",
    "draggable",
    "enctype",
    "enterkeyhint",
    "fetchpriority",
    "for",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formtarget",
    "headers",
    "height",
    "hidden",
    "high",
    "href",
    "hreflang",
    "http-equiv",
    "id",
    "imagesizes",
    "imagesrcset",
    "inputmode",
    "integrity",
    "is",
    "itemid",
    "itemprop",
    "itemref",
    "itemtype",
    "kind",
    "label",
    "lang",
    "list",
    "loading",
    "low",
    "max",
    "maxlength",
    "media",
    "method",
    "min",
    "minlength",
    "name",
    "nonce",
    "optimum",
    "pattern",
    "ping",
    "placeholder",
    "popover",
    "popovertarget",
    "popovertargetaction",
    "poster",
    "preload",
    "referrerpolicy",
    "rel",
    "rows",
    "rowspan",
    "sandbox",
    "scope",
    "shape",
    "size",
    "sizes",
    "slot",
    "span",
    "spellcheck",
    "src",
    "srcdoc",
    "srclang",
    "srcset",
    "start",
    "step",
    "style",
    "tabindex",
    "target",
    "title",
    "translate",
    "type",
    "usemap",
    "value",
    "width",
    "wrap",
    // Event handlers
    "onauxclick",
    "onafterprint",
    "onbeforematch",
    "onbeforeprint",
    "onbeforeunload",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncopy",
    "oncuechange",
    "oncut",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "onhashchange",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onlanguagechange",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmessage",
    "onmessageerror",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpaste",
    "onpause",
    "onplay",
    "onplaying",
    "onpopstate",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onrejectionhandled",
    "onscroll",
    "onscrollend",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onstorage",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onunhandledrejection",
    "onunload",
    "onvolumechange",
    "onwaiting",
    "onwheel"
  ],
  disallowedTagsMode: "discard",
  allowedAttributes: {
    a: ["href", "name", "target"],
    // We don't currently allow img itself by default, but
    // these attributes would make sense if we did.
    img: ["src", "srcset", "alt", "title", "width", "height", "loading"]
  },
  allowedEmptyAttributes: [
    "alt"
  ],
  // Lots of these won't come up by default because we don't allow them
  selfClosing: ["img", "br", "hr", "area", "base", "basefont", "input", "link", "meta"],
  // URL schemes we permit
  allowedSchemes: ["http", "https", "ftp", "mailto", "tel"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: !0,
  enforceHtmlBoundary: !1,
  parseStyleAttributes: !0
};
tn.simpleTransform = function(t, e, r) {
  return r = r === void 0 ? !0 : r, e = e || {}, function(u, n) {
    let i;
    if (r)
      for (i in e)
        n[i] = e[i];
    else
      n = e;
    return {
      tagName: t,
      attribs: n
    };
  };
};
var bf = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ya, "__esModule", { value: !0 });
ya.TagTransformingSanitizer = void 0;
const ye = bf(ou), yy = bf(gy), Yl = Qe, vy = mu, Zl = cn;
class xy {
  constructor(e, r) {
    this.sanitizationErrors = [], this.validate(e), vy.Localization.validate(r), this.localization = r, this.options = e;
  }
  sanitize(e) {
    return (0, yy.default)(e, this.generateSanitizeConfig());
  }
  getErrors() {
    return this.sanitizationErrors;
  }
  generateSanitizeConfig() {
    return {
      allowedTags: Zl.StaticConfig.sanitization.allowedTags,
      // SEE https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
      allowedAttributes: {
        // "src" MUST pass a whitelist (below)
        iframe: ["src", "width", "height", "frameborder", "allowfullscreen", "webkitallowfullscreen", "mozallowfullscreen"],
        // class attribute is strictly whitelisted (below)
        // and title is only set in the case of a phishing warning
        div: ["class", "title"],
        // style is subject to attack, filtering more below
        td: ["style"],
        img: ["src", "alt"],
        // title is only set in the case of an external link warning
        a: ["href", "rel", "title", "class", "target", "id"]
      },
      allowedSchemes: ["http", "https", "hive"],
      transformTags: {
        iframe: (e, r) => {
          const u = r.src;
          for (const i of Zl.StaticConfig.sanitization.iframeWhitelist)
            if (i.re.test(u)) {
              const a = typeof i.fn == "function" ? i.fn(u) : u;
              if (!a)
                break;
              return {
                tagName: "iframe",
                attribs: {
                  src: a,
                  width: this.options.iframeWidth + "",
                  height: this.options.iframeHeight + "",
                  // some of there are deprecated but required for some embeds
                  frameborder: "0",
                  allowfullscreen: "allowfullscreen",
                  webkitallowfullscreen: "webkitallowfullscreen",
                  mozallowfullscreen: "mozallowfullscreen"
                }
              };
            }
          return Yl.Log.log().warn('Blocked, did not match iframe "src" white list urls:', e, r), this.sanitizationErrors.push("Invalid iframe URL: " + u), { tagName: "div", text: `(Unsupported ${u})`, attribs: {} };
        },
        img: (e, r) => {
          if (this.options.noImage)
            return {
              tagName: "div",
              text: this.localization.noImage,
              attribs: {}
            };
          const { src: u, alt: n } = r;
          if (!/^(https?:)?\/\//i.test(u))
            return Yl.Log.log().warn("Blocked, image tag src does not appear to be a url", e, r), this.sanitizationErrors.push("An image in this post did not save properly."), {
              tagName: "img",
              attribs: { src: "brokenimg.jpg" }
            };
          const i = {};
          return i.src = u.replace(/^http:\/\//i, "//"), n && n !== "" && (i.alt = n), { tagName: e, attribs: i };
        },
        div: (e, r) => {
          const u = {}, i = ["pull-right", "pull-left", "text-justify", "text-rtl", "text-center", "text-right", "videoWrapper", "phishy"].find((c) => r.class === c);
          return i && (u.class = i), i === "phishy" && r.title === this.localization.phishingWarning && (u.title = r.title), {
            tagName: e,
            attribs: u
          };
        },
        td: (e, r) => {
          const u = {};
          return r.style === "text-align:right" && (u.style = "text-align:right"), {
            tagName: e,
            attribs: u
          };
        },
        a: (e, r) => {
          const u = Object.assign({}, r);
          let { href: n } = r;
          return n && (n = n.trim(), u.href = n), n && !this.options.isLinkSafeFn(n) && (u.rel = this.options.addNofollowToLinks ? "nofollow noopener" : "noopener", u.title = this.localization.phishingWarning, u.target = this.options.addTargetBlankToLinks ? "_blank" : "_self"), n && this.options.addExternalCssClassToMatchingLinksFn(n) ? u.class = this.options.cssClassForExternalLinks ? this.options.cssClassForExternalLinks : "" : u.class = this.options.cssClassForInternalLinks ? this.options.cssClassForInternalLinks : "", {
            tagName: e,
            attribs: u
          };
        }
      }
    };
  }
  validate(e) {
    (0, ye.default)(e, "TagsSanitizerOptions", ye.default.object), (0, ye.default)(e.iframeWidth, "TagsSanitizerOptions.iframeWidth", ye.default.number.integer.positive), (0, ye.default)(e.iframeHeight, "TagsSanitizerOptions.iframeHeight", ye.default.number.integer.positive), (0, ye.default)(e.addNofollowToLinks, "TagsSanitizerOptions.addNofollowToLinks", ye.default.boolean), (0, ye.default)(e.addTargetBlankToLinks, "TagsSanitizerOptions.addTargetBlankToLinks", ye.default.optional.boolean), (0, ye.default)(e.cssClassForInternalLinks, "TagsSanitizerOptions.cssClassForInternalLinks", ye.default.optional.string), (0, ye.default)(e.cssClassForExternalLinks, "TagsSanitizerOptions.cssClassForExternalLinks", ye.default.optional.string), (0, ye.default)(e.noImage, "TagsSanitizerOptions.noImage", ye.default.boolean), (0, ye.default)(e.isLinkSafeFn, "TagsSanitizerOptions.isLinkSafeFn", ye.default.function), (0, ye.default)(e.addExternalCssClassToMatchingLinksFn, "TagsSanitizerOptions.addExternalCssClassToMatchingLinksFn", ye.default.function);
  }
}
ya.TagTransformingSanitizer = xy;
var wy = N && N.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ju, "__esModule", { value: !0 });
ju.DefaultRenderer = void 0;
const Y = wy(ou), Ey = Lh, Ay = Xr, _y = Zr, Kl = mu, Sy = ba, Dy = ya;
class Ty {
  constructor(e, r = Kl.Localization.DEFAULT) {
    this.validate(e), this.options = e, Kl.Localization.validate(r), this.tagTransformingSanitizer = new Dy.TagTransformingSanitizer({
      iframeWidth: this.options.assetsWidth,
      iframeHeight: this.options.assetsHeight,
      addNofollowToLinks: this.options.addNofollowToLinks,
      addTargetBlankToLinks: this.options.addTargetBlankToLinks,
      cssClassForInternalLinks: this.options.cssClassForInternalLinks,
      cssClassForExternalLinks: this.options.cssClassForExternalLinks,
      noImage: this.options.doNotShowImages,
      isLinkSafeFn: this.options.isLinkSafeFn,
      addExternalCssClassToMatchingLinksFn: this.options.addExternalCssClassToMatchingLinksFn
    }, r), this.domParser = new _y.HtmlDOMParser({
      width: this.options.assetsWidth,
      height: this.options.assetsHeight,
      ipfsPrefix: this.options.ipfsPrefix,
      baseUrl: this.options.baseUrl,
      imageProxyFn: this.options.imageProxyFn,
      hashtagUrlFn: this.options.hashtagUrlFn,
      usertagUrlFn: this.options.usertagUrlFn,
      hideImages: this.options.doNotShowImages
    }, r);
  }
  render(e) {
    return (0, Y.default)(e, "input", Y.default.string.nonEmpty), this.doRender(e);
  }
  doRender(e) {
    return e = Sy.PreliminarySanitizer.preliminarySanitize(e), e = this.isHtml(e) ? e : this.renderMarkdown(e), e = this.wrapRenderedTextWithHtmlIfNeeded(e), e = this.domParser.parse(e).getParsedDocumentAsString(), e = this.sanitize(e), Ay.SecurityChecker.checkSecurity(e, { allowScriptTag: this.options.allowInsecureScriptTags }), e = this.domParser.embedder.insertAssets(e), e;
  }
  renderMarkdown(e) {
    return new Ey.Remarkable({
      html: !0,
      // remarkable renders first then sanitize runs...
      breaks: this.options.breaks,
      typographer: !1,
      // https://github.com/jonschlinkert/remarkable/issues/142#issuecomment-221546793
      quotes: "“”‘’"
    }).render(e);
  }
  wrapRenderedTextWithHtmlIfNeeded(e) {
    return e.indexOf("<html>") !== 0 && (e = "<html>" + e + "</html>"), e;
  }
  isHtml(e) {
    let r = !1;
    const u = e.match(/^<html>([\S\s]*)<\/html>$/);
    return u && u.length === 2 ? (r = !0, e = u[1]) : r = /^<p>[\S\s]*<\/p>/.test(e), r;
  }
  sanitize(e) {
    return this.options.skipSanitization ? e : this.tagTransformingSanitizer.sanitize(e);
  }
  validate(e) {
    (0, Y.default)(e, "RendererOptions", Y.default.object), (0, Y.default)(e.baseUrl, "RendererOptions.baseUrl", Y.default.string.nonEmpty), (0, Y.default)(e.breaks, "RendererOptions.breaks", Y.default.boolean), (0, Y.default)(e.skipSanitization, "RendererOptions.skipSanitization", Y.default.boolean), (0, Y.default)(e.addNofollowToLinks, "RendererOptions.addNofollowToLinks", Y.default.boolean), (0, Y.default)(e.addTargetBlankToLinks, "RendererOptions.addTargetBlankToLinks", Y.default.optional.boolean), (0, Y.default)(e.cssClassForInternalLinks, "RendererOptions.cssClassForInternalLinks", Y.default.optional.string), (0, Y.default)(e.cssClassForExternalLinks, "RendererOptions.cssClassForExternalLinks", Y.default.optional.string), (0, Y.default)(e.doNotShowImages, "RendererOptions.doNotShowImages", Y.default.boolean), (0, Y.default)(e.ipfsPrefix, "RendererOptions.ipfsPrefix", Y.default.optional.string), (0, Y.default)(e.assetsWidth, "RendererOptions.assetsWidth", Y.default.number.integer.positive), (0, Y.default)(e.assetsHeight, "RendererOptions.assetsHeight", Y.default.number.integer.positive), (0, Y.default)(e.imageProxyFn, "RendererOptions.imageProxyFn", Y.default.function), (0, Y.default)(e.hashtagUrlFn, "RendererOptions.hashtagUrlFn", Y.default.function), (0, Y.default)(e.usertagUrlFn, "RendererOptions.usertagUrlFn", Y.default.function), (0, Y.default)(e.isLinkSafeFn, "RendererOptions.isLinkSafeFn", Y.default.function), (0, Y.default)(e.addExternalCssClassToMatchingLinksFn, "RendererOptions.addExternalCssClassToMatchingLinksFn", Y.default.function);
  }
}
ju.DefaultRenderer = Ty;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.HiveContentRenderer = t.DefaultRenderer = void 0;
  const e = ju;
  var r = ju;
  Object.defineProperty(t, "DefaultRenderer", { enumerable: !0, get: function() {
    return r.DefaultRenderer;
  } }), t.HiveContentRenderer = {
    DefaultRenderer: e.DefaultRenderer
  }, t.default = t.HiveContentRenderer;
})(tc);
const ev = (t, e) => new tc.DefaultRenderer({
  baseUrl: "https://hive.blog/",
  breaks: (e == null ? void 0 : e.breaks) ?? !0,
  skipSanitization: !1,
  allowInsecureScriptTags: !1,
  addNofollowToLinks: !0,
  cssClassForInternalLinks: "hive-class",
  doNotShowImages: (e == null ? void 0 : e.doNotShowImages) ?? !1,
  assetsWidth: 640,
  assetsHeight: 480,
  addTargetBlankToLinks: !0,
  imageProxyFn: (u) => u,
  usertagUrlFn: (u) => "https://hive.blog/@" + u,
  hashtagUrlFn: (u) => "https://hive.blog/trending/" + u,
  isLinkSafeFn: () => !0,
  addExternalCssClassToMatchingLinksFn: () => !0
}).render(t), tv = {
  // Colors
  colors: {
    primary: {
      light: "#e31337",
      dark: "#ff4757"
    },
    secondary: {
      light: "#2c3e50",
      dark: "#34495e"
    },
    surface: {
      light: "#ffffff",
      dark: "#1a1a1a"
    },
    surfaceVariant: {
      light: "#f8f9fa",
      dark: "#2d2d2d"
    },
    onSurface: {
      light: "#212529",
      dark: "#ffffff"
    },
    onSurfaceVariant: {
      light: "#6c757d",
      dark: "#adb5bd"
    },
    border: {
      light: "#dee2e6",
      dark: "#495057"
    },
    error: {
      light: "#dc3545",
      dark: "#e74c3c"
    },
    success: {
      light: "#28a745",
      dark: "#2ecc71"
    }
  },
  // Typography
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem"
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700"
    },
    lineHeight: {
      tight: "1.25",
      normal: "1.5",
      relaxed: "1.75"
    }
  },
  // Spacing
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem"
  },
  // Border radius
  borderRadius: {
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    full: "9999px"
  },
  // Shadows
  shadow: {
    sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
  }
}, rv = Ql`
  :host {
    font-family:
      Inter,
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    color: var(--hive-on-surface, #212529);
    /* background-color: var(--hive-surface, #ffffff); */
    box-sizing: border-box;
  }

  :host([theme="dark"]) {
    color: var(--hive-on-surface, #ffffff);
    /* background-color: var(--hive-surface, #1a1a1a); */
  }

  @media (prefers-color-scheme: dark) {
    :host([theme="auto"]) {
      color: var(--hive-on-surface, #ffffff);
      /* background-color: var(--hive-surface, #1a1a1a); */
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`, uv = Ql`
  :host {
    /* Light theme (default) */
    --hive-primary: #e31337;
    --hive-secondary: #2c3e50;
    --hive-surface: #ffffff;
    --hive-surface-variant: #f8f9fa;
    --hive-on-surface: #212529;
    --hive-on-surface-variant: #6c757d;
    --hive-border: #dee2e6;
    --hive-error: #dc3545;
    --hive-success: #28a745;
  }

  :host([theme="dark"]) {
    --hive-primary: #ff4757;
    --hive-secondary: #34495e;
    --hive-surface: #1a1a1a;
    --hive-surface-variant: #2d2d2d;
    --hive-on-surface: #ffffff;
    --hive-on-surface-variant: #adb5bd;
    --hive-border: #495057;
    --hive-error: #e74c3c;
    --hive-success: #2ecc71;
  }

  @media (prefers-color-scheme: dark) {
    :host([theme="auto"]) {
      --hive-primary: #ff4757;
      --hive-secondary: #34495e;
      --hive-surface: #1a1a1a;
      --hive-surface-variant: #2d2d2d;
      --hive-on-surface: #ffffff;
      --hive-on-surface-variant: #adb5bd;
      --hive-border: #495057;
      --hive-error: #e74c3c;
      --hive-success: #2ecc71;
    }
  }
`;
function nv(t) {
  const e = /* @__PURE__ */ new Date(t + "Z"), u = (/* @__PURE__ */ new Date()).getTime() - e.getTime(), n = Math.floor(u / (1e3 * 60)), i = Math.floor(u / (1e3 * 60 * 60)), a = Math.floor(u / (1e3 * 60 * 60 * 24));
  return n < 1 ? "just now" : n < 60 ? `${n} minute${n !== 1 ? "s" : ""} ago` : i < 24 ? `${i} hour${i !== 1 ? "s" : ""} ago` : a < 7 ? `${a} day${a !== 1 ? "s" : ""} ago` : e.toLocaleDateString();
}
function iv(t) {
  const e = t.split(" "), r = parseFloat(e[0] || "0"), u = e[1] || "HIVE";
  return r === 0 ? "0.000 " + u : r.toFixed(3) + " " + u;
}
function av(t) {
  if (t === 0) return 25;
  let e = Math.log10(Math.abs(t));
  return e = Math.max(e - 9, 0), e *= t < 0 ? -9 : 9, e += 25, Math.floor(e);
}
function ov(t, e) {
  return t.length <= e ? t : t.substring(0, e).trim() + "...";
}
function sv(t) {
  try {
    return JSON.parse(t).tags || [];
  } catch {
    return [];
  }
}
function lv(t) {
  const e = document.createElement("div");
  return e.textContent = t, e.innerHTML;
}
function cv(t, e) {
  let r;
  return (...u) => {
    clearTimeout(r), r = setTimeout(t, e, ...u);
  };
}
function fv(t) {
  return /^[a-z][a-z0-9.-]{2,15}$/.test(t);
}
function dv(t) {
  return /^[a-z0-9-]+$/.test(t) && t.length > 0;
}
function pv(t) {
  const e = t.match(/@([a-z][a-z0-9.-]{2,15})\/([a-z0-9-]+)/);
  return e && e[1] && e[2] ? {
    author: e[1],
    permlink: e[2]
  } : null;
}
function hv(t, e) {
  customElements.get(t) || customElements.define(t, e);
}
export {
  Bf as HiveApiClient,
  Oy as accountProperty,
  rv as baseStyles,
  av as calculateReputation,
  cv as debounce,
  My as errorState,
  sv as extractTags,
  iv as formatHiveCurrency,
  nv as formatHiveDate,
  Iy as hiveApi,
  fv as isValidHiveAccount,
  dv as isValidPermlink,
  Ny as loadingState,
  pv as parseHiveUrl,
  Py as permlinkProperty,
  ev as renderPostContent,
  hv as safeDefineCustomElement,
  lv as sanitizeHtml,
  $y as tagProperty,
  Lf as themeProperty,
  uv as themeStyles,
  tv as tokens,
  ov as truncateText,
  Ly as withHiveTheme
};
//# sourceMappingURL=bundle.js.map
