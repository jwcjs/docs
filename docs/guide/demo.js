function rt(i) {
  return i.replace(/([A-Z])/g, (e) => `-${e[0].toLowerCase()}`);
}
function N(i) {
  const e = i.tagName === "Fragment" ? document.createDocumentFragment() : document.createElement(i.tagName), o = i.attributes;
  for (const a in o)
    if (a.startsWith("on")) {
      const u = a.slice(2).toLowerCase();
      e.addEventListener(u, o[a]);
    } else
      i.tagName === "Fragment" || e.setAttribute(rt(a), o[a]);
  if (i.children)
    for (const a of i.children) {
      if (typeof a == "string") {
        e.appendChild(document.createTextNode(a));
        continue;
      }
      e.appendChild(N(a));
    }
  return e;
}
function Rt(i, e) {
  const o = e.el, a = e.attributes;
  for (const u in a)
    if (u.startsWith("on")) {
      if (typeof (i == null ? void 0 : i.attributes[u]) == "function") {
        const h = u.slice(2).toLowerCase();
        o.removeEventListener(h, i.attributes[u]), o.addEventListener(h, a[u]);
      }
    } else
      o.setAttribute(rt(u), a[u]);
  for (const u of e.children) {
    if (typeof u == "string") {
      o.appendChild(document.createTextNode(u));
      continue;
    }
    o.appendChild(N(u));
  }
  if (e.children)
    for (const u of Object.values(e.children))
      W(void 0, u);
  return o;
}
function W(i, e) {
  if (e.isDeleted)
    return e.el.parentNode.removeChild(e.el), e;
  if (e.isNew)
    return console.log("create", e), e.el = N(e), e;
  if (e.isUpdated) {
    const o = Rt(i, e);
    return o && (e.el = o), e;
  }
  if (e.children)
    for (const o of Object.values(e.children))
      W(void 0, o);
  return e;
}
function O(i, e = ["isNew"]) {
  for (const o of e)
    i[o] && (i[o] = !1);
  if (i.children)
    for (const o of Object.values(i.children))
      O(o, e);
  return i;
}
function $t(i, e) {
  for (const o in e)
    if (o === "style")
      for (const a in e[o])
        i.style[a] = e[o][a];
    else
      i.setAttribute(o, e[o]);
}
function nt(i, e, o, a) {
  var u;
  if (e.isUpdated ? ($t(e.el, e.attributes), typeof e.children == "string" && (e.el.textContent = e.children), (u = i.parentNode) === null || u === void 0 || u.replaceChild(N(e), i)) : e.isNew ? i.appendChild(N(e)) : e.isDeleted && i.removeChild(i.childNodes[a]), e.children instanceof Array)
    for (let h = 0; h < e.children.length; h++) {
      const v = i.childNodes[h];
      nt(v, e.children[h], o.children[h], h);
    }
}
function Lt(i, e, o) {
  i || ot(e), e = it(i, e);
  const a = W(i, e);
  if (o) {
    const u = [];
    if (o.childNodes[0].nodeName === "STYLE" && o.childNodes.forEach((h) => {
      h.nodeName !== "STYLE" && u.push(h);
    }), a.children instanceof Array)
      for (let h = 0; h < a.children.length; h++)
        nt(u[h], a.children[h], i.children[h], h);
  }
  return O(a, ["isUpdated", "isNew", "isDeleted"]);
}
function ot(i) {
  if (i.isNew)
    for (const e of i.children)
      ot(e);
}
function it(i, e, o) {
  if (!i)
    return e;
  if (typeof i == "string" && typeof e == "string" && i !== e && (e = e, o.isUpdated = !0), i == null ? void 0 : i.isDeleted)
    return i;
  if ((i == null ? void 0 : i.tagName) !== e.tagName && (i.isDeleted = !0, e.isNew = !0), JSON.stringify(i.attributes) !== JSON.stringify(e.attributes) && (e.isUpdated = !0), i.children && e.children) {
    const a = Object.values(i.children), u = Object.values(e.children);
    if (JSON.stringify(a) !== JSON.stringify(u)) {
      const h = Math.max(a.length, u.length);
      for (let v = 0; v < h; v++)
        e.children[v] = it(a[v], u[v], e);
    }
  }
  return e;
}
class I {
  constructor(e, o, a) {
    this.tagName = e, this.attributes = o, this.children = a, this.isNew = !0, this.isUpdated = !1, this.isDeleted = !1, this.el = document.createElement(e);
  }
  static isVNode(e) {
    return e instanceof I;
  }
}
function D(i, e, ...o) {
  return new I(i, e, o);
}
const Dt = "Fragment";
var tt;
(function(i) {
  (function(e) {
    var o = typeof global == "object" ? global : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")(), a = u(i);
    typeof o.Reflect > "u" ? o.Reflect = i : a = u(o.Reflect, a), e(a);
    function u(h, v) {
      return function(k, x) {
        typeof h[k] != "function" && Object.defineProperty(h, k, { configurable: !0, writable: !0, value: x }), v && v(k, x);
      };
    }
  })(function(e) {
    var o = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", u = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", h = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", v = typeof Object.create == "function", k = { __proto__: [] } instanceof Array, x = !v && !k, C = { create: v ? function() {
      return L(/* @__PURE__ */ Object.create(null));
    } : k ? function() {
      return L({ __proto__: null });
    } : function() {
      return L({});
    }, has: x ? function(t, r) {
      return o.call(t, r);
    } : function(t, r) {
      return r in t;
    }, get: x ? function(t, r) {
      return o.call(t, r) ? t[r] : void 0;
    } : function(t, r) {
      return t[r];
    } }, K = Object.getPrototypeOf(Function), A = typeof process == "object" && process.env && process.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true", P = !A && typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : jt(), at = !A && typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : At(), ut = !A && typeof WeakMap == "function" ? WeakMap : Pt(), T = new ut();
    function ct(t, r, n, s) {
      if (w(n)) {
        if (!H(t))
          throw new TypeError();
        if (!G(r))
          throw new TypeError();
        return mt(t, r);
      } else {
        if (!H(t))
          throw new TypeError();
        if (!g(r))
          throw new TypeError();
        if (!g(s) && !w(s) && !E(s))
          throw new TypeError();
        return E(s) && (s = void 0), n = _(n), _t(t, r, n, s);
      }
    }
    e("decorate", ct);
    function ft(t, r) {
      function n(s, c) {
        if (!g(s))
          throw new TypeError();
        if (!w(c) && !Nt(c))
          throw new TypeError();
        q(t, r, s, c);
      }
      return n;
    }
    e("metadata", ft);
    function ht(t, r, n, s) {
      if (!g(n))
        throw new TypeError();
      return w(s) || (s = _(s)), q(t, r, n, s);
    }
    e("defineMetadata", ht);
    function lt(t, r, n) {
      if (!g(r))
        throw new TypeError();
      return w(n) || (n = _(n)), z(t, r, n);
    }
    e("hasMetadata", lt);
    function pt(t, r, n) {
      if (!g(r))
        throw new TypeError();
      return w(n) || (n = _(n)), R(t, r, n);
    }
    e("hasOwnMetadata", pt);
    function dt(t, r, n) {
      if (!g(r))
        throw new TypeError();
      return w(n) || (n = _(n)), J(t, r, n);
    }
    e("getMetadata", dt);
    function yt(t, r, n) {
      if (!g(r))
        throw new TypeError();
      return w(n) || (n = _(n)), Y(t, r, n);
    }
    e("getOwnMetadata", yt);
    function vt(t, r) {
      if (!g(t))
        throw new TypeError();
      return w(r) || (r = _(r)), V(t, r);
    }
    e("getMetadataKeys", vt);
    function wt(t, r) {
      if (!g(t))
        throw new TypeError();
      return w(r) || (r = _(r)), Z(t, r);
    }
    e("getOwnMetadataKeys", wt);
    function gt(t, r, n) {
      if (!g(r))
        throw new TypeError();
      w(n) || (n = _(n));
      var s = M(r, n, !1);
      if (w(s) || !s.delete(t))
        return !1;
      if (s.size > 0)
        return !0;
      var c = T.get(r);
      return c.delete(n), c.size > 0 || T.delete(r), !0;
    }
    e("deleteMetadata", gt);
    function mt(t, r) {
      for (var n = t.length - 1; n >= 0; --n) {
        var s = t[n], c = s(r);
        if (!w(c) && !E(c)) {
          if (!G(c))
            throw new TypeError();
          r = c;
        }
      }
      return r;
    }
    function _t(t, r, n, s) {
      for (var c = t.length - 1; c >= 0; --c) {
        var m = t[c], l = m(r, n, s);
        if (!w(l) && !E(l)) {
          if (!g(l))
            throw new TypeError();
          s = l;
        }
      }
      return s;
    }
    function M(t, r, n) {
      var s = T.get(t);
      if (w(s)) {
        if (!n)
          return;
        s = new P(), T.set(t, s);
      }
      var c = s.get(r);
      if (w(c)) {
        if (!n)
          return;
        c = new P(), s.set(r, c);
      }
      return c;
    }
    function z(t, r, n) {
      var s = R(t, r, n);
      if (s)
        return !0;
      var c = $(r);
      return E(c) ? !1 : z(t, c, n);
    }
    function R(t, r, n) {
      var s = M(r, n, !1);
      return w(s) ? !1 : St(s.has(t));
    }
    function J(t, r, n) {
      var s = R(t, r, n);
      if (s)
        return Y(t, r, n);
      var c = $(r);
      if (!E(c))
        return J(t, c, n);
    }
    function Y(t, r, n) {
      var s = M(r, n, !1);
      if (!w(s))
        return s.get(t);
    }
    function q(t, r, n, s) {
      var c = M(n, s, !0);
      c.set(t, r);
    }
    function V(t, r) {
      var n = Z(t, r), s = $(t);
      if (s === null)
        return n;
      var c = V(s, r);
      if (c.length <= 0)
        return n;
      if (n.length <= 0)
        return c;
      for (var m = new at(), l = [], p = 0, f = n; p < f.length; p++) {
        var d = f[p], y = m.has(d);
        y || (m.add(d), l.push(d));
      }
      for (var b = 0, X = c; b < X.length; b++) {
        var d = X[b], y = m.has(d);
        y || (m.add(d), l.push(d));
      }
      return l;
    }
    function Z(t, r) {
      var n = [], s = M(t, r, !1);
      if (w(s))
        return n;
      for (var c = s.keys(), m = xt(c), l = 0; ; ) {
        var p = Mt(m);
        if (!p)
          return n.length = l, n;
        var f = Ct(p);
        try {
          n[l] = f;
        } catch (d) {
          try {
            Tt(m);
          } finally {
            throw d;
          }
        }
        l++;
      }
    }
    function B(t) {
      if (t === null)
        return 1;
      switch (typeof t) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return t === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function w(t) {
      return t === void 0;
    }
    function E(t) {
      return t === null;
    }
    function bt(t) {
      return typeof t == "symbol";
    }
    function g(t) {
      return typeof t == "object" ? t !== null : typeof t == "function";
    }
    function kt(t, r) {
      switch (B(t)) {
        case 0:
          return t;
        case 1:
          return t;
        case 2:
          return t;
        case 3:
          return t;
        case 4:
          return t;
        case 5:
          return t;
      }
      var n = r === 3 ? "string" : r === 5 ? "number" : "default", s = Q(t, u);
      if (s !== void 0) {
        var c = s.call(t, n);
        if (g(c))
          throw new TypeError();
        return c;
      }
      return Et(t, n === "default" ? "number" : n);
    }
    function Et(t, r) {
      if (r === "string") {
        var n = t.toString;
        if (S(n)) {
          var s = n.call(t);
          if (!g(s))
            return s;
        }
        var c = t.valueOf;
        if (S(c)) {
          var s = c.call(t);
          if (!g(s))
            return s;
        }
      } else {
        var c = t.valueOf;
        if (S(c)) {
          var s = c.call(t);
          if (!g(s))
            return s;
        }
        var m = t.toString;
        if (S(m)) {
          var s = m.call(t);
          if (!g(s))
            return s;
        }
      }
      throw new TypeError();
    }
    function St(t) {
      return !!t;
    }
    function Ot(t) {
      return "" + t;
    }
    function _(t) {
      var r = kt(t, 3);
      return bt(r) ? r : Ot(r);
    }
    function H(t) {
      return Array.isArray ? Array.isArray(t) : t instanceof Object ? t instanceof Array : Object.prototype.toString.call(t) === "[object Array]";
    }
    function S(t) {
      return typeof t == "function";
    }
    function G(t) {
      return typeof t == "function";
    }
    function Nt(t) {
      switch (B(t)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function Q(t, r) {
      var n = t[r];
      if (n != null) {
        if (!S(n))
          throw new TypeError();
        return n;
      }
    }
    function xt(t) {
      var r = Q(t, h);
      if (!S(r))
        throw new TypeError();
      var n = r.call(t);
      if (!g(n))
        throw new TypeError();
      return n;
    }
    function Ct(t) {
      return t.value;
    }
    function Mt(t) {
      var r = t.next();
      return r.done ? !1 : r;
    }
    function Tt(t) {
      var r = t.return;
      r && r.call(t);
    }
    function $(t) {
      var r = Object.getPrototypeOf(t);
      if (typeof t != "function" || t === K || r !== K)
        return r;
      var n = t.prototype, s = n && Object.getPrototypeOf(n);
      if (s == null || s === Object.prototype)
        return r;
      var c = s.constructor;
      return typeof c != "function" || c === t ? r : c;
    }
    function jt() {
      var t = {}, r = [], n = function() {
        function l(p, f, d) {
          this._index = 0, this._keys = p, this._values = f, this._selector = d;
        }
        return l.prototype["@@iterator"] = function() {
          return this;
        }, l.prototype[h] = function() {
          return this;
        }, l.prototype.next = function() {
          var p = this._index;
          if (p >= 0 && p < this._keys.length) {
            var f = this._selector(this._keys[p], this._values[p]);
            return p + 1 >= this._keys.length ? (this._index = -1, this._keys = r, this._values = r) : this._index++, { value: f, done: !1 };
          }
          return { value: void 0, done: !0 };
        }, l.prototype.throw = function(p) {
          throw this._index >= 0 && (this._index = -1, this._keys = r, this._values = r), p;
        }, l.prototype.return = function(p) {
          return this._index >= 0 && (this._index = -1, this._keys = r, this._values = r), { value: p, done: !0 };
        }, l;
      }();
      return function() {
        function l() {
          this._keys = [], this._values = [], this._cacheKey = t, this._cacheIndex = -2;
        }
        return Object.defineProperty(l.prototype, "size", { get: function() {
          return this._keys.length;
        }, enumerable: !0, configurable: !0 }), l.prototype.has = function(p) {
          return this._find(p, !1) >= 0;
        }, l.prototype.get = function(p) {
          var f = this._find(p, !1);
          return f >= 0 ? this._values[f] : void 0;
        }, l.prototype.set = function(p, f) {
          var d = this._find(p, !0);
          return this._values[d] = f, this;
        }, l.prototype.delete = function(p) {
          var f = this._find(p, !1);
          if (f >= 0) {
            for (var d = this._keys.length, y = f + 1; y < d; y++)
              this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
            return this._keys.length--, this._values.length--, p === this._cacheKey && (this._cacheKey = t, this._cacheIndex = -2), !0;
          }
          return !1;
        }, l.prototype.clear = function() {
          this._keys.length = 0, this._values.length = 0, this._cacheKey = t, this._cacheIndex = -2;
        }, l.prototype.keys = function() {
          return new n(this._keys, this._values, s);
        }, l.prototype.values = function() {
          return new n(this._keys, this._values, c);
        }, l.prototype.entries = function() {
          return new n(this._keys, this._values, m);
        }, l.prototype["@@iterator"] = function() {
          return this.entries();
        }, l.prototype[h] = function() {
          return this.entries();
        }, l.prototype._find = function(p, f) {
          return this._cacheKey !== p && (this._cacheIndex = this._keys.indexOf(this._cacheKey = p)), this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(p), this._values.push(void 0)), this._cacheIndex;
        }, l;
      }();
      function s(l, p) {
        return l;
      }
      function c(l, p) {
        return p;
      }
      function m(l, p) {
        return [l, p];
      }
    }
    function At() {
      return function() {
        function t() {
          this._map = new P();
        }
        return Object.defineProperty(t.prototype, "size", { get: function() {
          return this._map.size;
        }, enumerable: !0, configurable: !0 }), t.prototype.has = function(r) {
          return this._map.has(r);
        }, t.prototype.add = function(r) {
          return this._map.set(r, r), this;
        }, t.prototype.delete = function(r) {
          return this._map.delete(r);
        }, t.prototype.clear = function() {
          this._map.clear();
        }, t.prototype.keys = function() {
          return this._map.keys();
        }, t.prototype.values = function() {
          return this._map.values();
        }, t.prototype.entries = function() {
          return this._map.entries();
        }, t.prototype["@@iterator"] = function() {
          return this.keys();
        }, t.prototype[h] = function() {
          return this.keys();
        }, t;
      }();
    }
    function Pt() {
      var t = 16, r = C.create(), n = s();
      return function() {
        function f() {
          this._key = s();
        }
        return f.prototype.has = function(d) {
          var y = c(d, !1);
          return y !== void 0 ? C.has(y, this._key) : !1;
        }, f.prototype.get = function(d) {
          var y = c(d, !1);
          return y !== void 0 ? C.get(y, this._key) : void 0;
        }, f.prototype.set = function(d, y) {
          var b = c(d, !0);
          return b[this._key] = y, this;
        }, f.prototype.delete = function(d) {
          var y = c(d, !1);
          return y !== void 0 ? delete y[this._key] : !1;
        }, f.prototype.clear = function() {
          this._key = s();
        }, f;
      }();
      function s() {
        var f;
        do
          f = "@@WeakMap@@" + p();
        while (C.has(r, f));
        return r[f] = !0, f;
      }
      function c(f, d) {
        if (!o.call(f, n)) {
          if (!d)
            return;
          Object.defineProperty(f, n, { value: C.create() });
        }
        return f[n];
      }
      function m(f, d) {
        for (var y = 0; y < d; ++y)
          f[y] = Math.random() * 255 | 0;
        return f;
      }
      function l(f) {
        return typeof Uint8Array == "function" ? typeof crypto < "u" ? crypto.getRandomValues(new Uint8Array(f)) : typeof msCrypto < "u" ? msCrypto.getRandomValues(new Uint8Array(f)) : m(new Uint8Array(f), f) : m(new Array(f), f);
      }
      function p() {
        var f = l(t);
        f[6] = f[6] & 79 | 64, f[8] = f[8] & 191 | 128;
        for (var d = "", y = 0; y < t; ++y) {
          var b = f[y];
          (y === 4 || y === 6 || y === 8) && (d += "-"), b < 16 && (d += "0"), d += b.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function L(t) {
      return t.__ = void 0, delete t.__, t;
    }
  });
})(tt || (tt = {}));
function Ut(i) {
  return new Proxy(i, { get(e, o) {
    return Reflect.get(e, o);
  }, set(e, o, a) {
    return Reflect.set(e, o, a), !0;
  } });
}
function Ft(i, e, o) {
  const a = Ut(o);
  Object.defineProperty(i, e, { get() {
    return a.value;
  }, set(u) {
    var h;
    a.value = u, this.shouldUpdate = !0, (h = this.watchersMap.get(e)) === null || h === void 0 || h.forEach((v) => {
      v.callback.call(this, u, o);
    }), this.updateDiff();
  } });
}
function Wt(i, e, o) {
  const { default: a, required: u } = o, h = Reflect.getMetadata(j, i) || [];
  h.push({ attr: e, default: a, required: u }), Reflect.defineMetadata(j, h, i);
}
function It(i, e, o) {
  Wt(i, e, o);
}
function et(i) {
  const e = document.createElement("style");
  return e.appendChild(document.createTextNode(i)), e;
}
const j = "jwc:component:props", U = /* @__PURE__ */ new WeakMap();
class Kt extends HTMLElement {
  getMetaList(e) {
    return Reflect.getMetadata(e, this) || /* @__PURE__ */ new Map();
  }
  initWatcher() {
    (this.getMetaList(j) || []).forEach((e) => {
      const { callbackName: o } = e, a = this.watchersMap.get(o);
      a ? this.watchersMap.set(o, [...a, e]) : this.watchersMap.set(o, [e]);
    });
  }
  constructor() {
    super(), this.rootNode = null, this.$data = null, this.$options = null, this.$deps = null, this.$lastRender = null, this.customStyles = null, this.shouldUpdate = !1, this.props = {}, this.propsList = [], this.previousProps = {}, this.previousVNode = null, this.watchersMap = /* @__PURE__ */ new Map(), this.host = this, this.$options = this.constructor.$options, this.init();
  }
  initCSS(e) {
    if (U.has(this.constructor))
      e.adoptedStyleSheets = U.get(this.constructor);
    else {
      const o = this.$options.css;
      if (o) {
        const a = new CSSStyleSheet();
        a.replaceSync(o), e.adoptedStyleSheets = [a], U.set(this.constructor, [a]);
      }
    }
    return e;
  }
  initShadowRoot() {
    let e = this.shadowRoot || this.attachShadow({ mode: "open" });
    return e = this.initCSS(this.shadowRoot), this.$options.css && e.appendChild(et(this.$options.css)), this.inlineStyles && (this.customStyles = et(this.inlineStyles), e.appendChild(this.customStyles)), e;
  }
  attrsToProps() {
    const e = this.shadowRoot && this.shadowRoot.host ? this.shadowRoot.host : this, o = {};
    for (let a = 0; a < e.attributes.length; a++) {
      const u = e.attributes[a];
      o[u.name] = u.value;
    }
    this.propsList.forEach((a) => {
      const { attr: u, default: h } = a;
      o[u] ? (this.previousProps[u] = o[u], this.props[u] = o[u]) : (this.previousProps[u] = h, this.props[u] = h);
    });
  }
  init() {
    this.props = this.getMetaList(j) || [];
    const e = Object.values(this.props), o = this;
    e.forEach((a) => {
      const { attr: u, default: h } = a;
      this.previousProps[u] = h, this.props[u] = h, Ft(o, u, a);
    }), this.initWatcher();
  }
  get inlineStyles() {
    return super.getAttribute("style");
  }
  updateDiff() {
    const e = this.$lastRender, o = this.render(this.$data);
    e && (this.$lastRender = null, this.$lastRender = Lt(O(e), O(o), this.shadowRoot));
  }
  customEvent(e, o) {
    const a = new CustomEvent(e, { detail: o, bubbles: !0, composed: !0 });
    this.dispatchEvent(a);
  }
  connectedCallback() {
    const e = this.initShadowRoot();
    this.attrsToProps();
    const o = this.props, a = this;
    o.forEach((h) => {
      const v = e.host.getAttribute(h.attr);
      v && (a[h.attr] = v);
    });
    const u = this.render(this.$data);
    this.rootNode = N(O(u)), this.$options.isMounted && this.rootNode && e.appendChild(this.rootNode), this.$lastRender = O(u);
  }
  disconnectedCallback() {
    this.$options.isMounted = !1, this.rootNode && this.rootNode.remove();
  }
  attributeChangedCallback(e, o, a) {
    o !== a && (this.props[e] = a), this.updateDiff();
  }
  adoptedCallback() {
  }
  render(e) {
  }
}
function zt(i) {
  return (e, o) => {
    It(e, String(o), i);
  };
}
function Jt(i) {
  return function(e) {
    i.isMounted === void 0 && (i.isMounted = !0), customElements.get(i.name) && console.warn(`The component ${i.name} already exists.`), e.$options = i, customElements.define(i.name, e, i.options || {});
  };
}
const Yt = `:host{max-width:1280px;margin:0 auto;padding:2rem;text-align:center}.logo{height:6em;padding:1.5em;will-change:filter;transition:filter .25s}.logo:hover{filter:drop-shadow(0 0 2em #646cffaa)}.logo.jwc:hover{filter:drop-shadow(0 0 2em rgb(0,0,0))}.card{padding:2em}.read-the-docs{color:#888}@media (prefers-color-scheme: dark){.logo.jwc:hover{filter:drop-shadow(0 0 2em rgb(255,255,255))}}button{border-radius:8px;border:1px solid transparent;padding:.6em 1.2em;font-size:1em;font-weight:500;font-family:inherit;background-color:#1a1a1a;cursor:pointer;transition:border-color .25s}button:hover{border-color:#646cff}button:focus,button:focus-visible{outline:4px auto -webkit-focus-ring-color}@media (prefers-color-scheme: light){button{background-color:#f9f9f9;color:#1a1a1a}}@media (prefers-color-scheme: dark){button{background-color:#1a1a1a;color:#f9f9f9}}
`;
var qt = Object.defineProperty, Vt = Object.getOwnPropertyDescriptor, st = (i, e, o, a) => {
  for (var u = a > 1 ? void 0 : a ? Vt(e, o) : e, h = i.length - 1, v; h >= 0; h--)
    (v = i[h]) && (u = (a ? v(e, o, u) : v(u)) || u);
  return a && u && qt(e, o, u), u;
};
let F = class extends Kt {
  constructor() {
    super(), this.count = 0, this.onClick = () => {
      this.count++;
    };
  }
  render() {
    return /* @__PURE__ */ D(Dt, null, /* @__PURE__ */ D("div", { class: "card" }, /* @__PURE__ */ D("button", { onClick: this.onClick }, "count is ", String(this.count))));
  }
};
st([
  zt({ default: 0, attr: "count" })
], F.prototype, "count", 2);
F = st([
  Jt({
    name: "app-element",
    css: Yt
  })
], F);
export {
  F as App
};
