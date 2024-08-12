import {
  Hook,
  addClass,
  childSelector,
  debounce,
  getId,
  loadCSS,
  loadJS,
  noop,
  walkTree
} from "./chunk-PQ3KJSLN.js";
import {
  category10_default,
  identity,
  linkHorizontal,
  max,
  min,
  minIndex,
  ordinal,
  select_default,
  transform,
  zoom_default
} from "./chunk-D3PSQDW3.js";
import "./chunk-MTI3AIJG.js";

// ../../node_modules/.pnpm/markmap-view@0.17.0_markmap-common@0.17.0/node_modules/markmap-view/dist/index.js
var K = typeof navigator < "u" && navigator.userAgent.includes("Macintosh");
var gt = ordinal(category10_default);
var P = {
  autoFit: false,
  color: (e) => {
    var t;
    return gt(`${((t = e.state) == null ? void 0 : t.path) || ""}`);
  },
  duration: 500,
  embedGlobalCSS: true,
  fitRatio: 0.95,
  maxWidth: 0,
  nodeMinHeight: 16,
  paddingX: 8,
  scrollForPan: K,
  spacingHorizontal: 80,
  spacingVertical: 5,
  initialExpandLevel: -1,
  zoom: true,
  pan: true,
  toggleRecursively: false
};
function Se(e) {
  const t = {}, n = { ...e }, { color: r, colorFreezeLevel: o } = n;
  if ((r == null ? void 0 : r.length) === 1) {
    const s = r[0];
    t.color = () => s;
  } else if (r != null && r.length) {
    const s = ordinal(r);
    t.color = (l) => s(`${l.state.path}`);
  }
  if (o) {
    const s = t.color || P.color;
    t.color = (l) => (l = {
      ...l,
      state: {
        ...l.state,
        path: l.state.path.split(".").slice(0, o).join(".")
      }
    }, s(l));
  }
  return ["duration", "maxWidth", "initialExpandLevel"].forEach((s) => {
    const l = n[s];
    typeof l == "number" && (t[s] = l);
  }), ["zoom", "pan"].forEach((s) => {
    const l = n[s];
    l != null && (t[s] = !!l);
  }), t;
}
var U = 1;
var G = 2;
var xt = "http://www.w3.org/2000/svg";
var _ = "http://www.w3.org/1999/xlink";
var yt = {
  show: _,
  actuate: _,
  href: _
};
var kt = (e) => typeof e == "string" || typeof e == "number";
var vt = (e) => (e == null ? void 0 : e.vtype) === U;
var St = (e) => (e == null ? void 0 : e.vtype) === G;
function j(e, t) {
  let n;
  if (typeof e == "string")
    n = U;
  else if (typeof e == "function")
    n = G;
  else
    throw new Error("Invalid VNode type");
  return {
    vtype: n,
    type: e,
    props: t
  };
}
function bt(e) {
  return e.children;
}
var zt = {
  isSvg: false
};
function I(e, t) {
  Array.isArray(t) || (t = [t]), t = t.filter(Boolean), t.length && e.append(...t);
}
function Et(e, t, n) {
  for (const r in t)
    if (!(r === "key" || r === "children" || r === "ref"))
      if (r === "dangerouslySetInnerHTML")
        e.innerHTML = t[r].__html;
      else if (r === "innerHTML" || r === "textContent" || r === "innerText" || r === "value" && ["textarea", "select"].includes(e.tagName)) {
        const o = t[r];
        o != null && (e[r] = o);
      } else
        r.startsWith("on") ? e[r.toLowerCase()] = t[r] : wt(e, r, t[r], n.isSvg);
}
var Ct = {
  className: "class",
  labelFor: "for"
};
function wt(e, t, n, r) {
  if (t = Ct[t] || t, n === true)
    e.setAttribute(t, "");
  else if (n === false)
    e.removeAttribute(t);
  else {
    const o = r ? yt[t] : void 0;
    o !== void 0 ? e.setAttributeNS(o, t, n) : e.setAttribute(t, n);
  }
}
function Xt(e) {
  return e.reduce((t, n) => t.concat(n), []);
}
function $(e, t) {
  return Array.isArray(e) ? Xt(e.map((n) => $(n, t))) : B(e, t);
}
function B(e, t = zt) {
  if (e == null || typeof e == "boolean")
    return null;
  if (e instanceof Node)
    return e;
  if (St(e)) {
    const {
      type: n,
      props: r
    } = e;
    if (n === bt) {
      const a = document.createDocumentFragment();
      if (r.children) {
        const c = $(r.children, t);
        I(a, c);
      }
      return a;
    }
    const o = n(r);
    return B(o, t);
  }
  if (kt(e))
    return document.createTextNode(`${e}`);
  if (vt(e)) {
    let n;
    const {
      type: r,
      props: o
    } = e;
    if (!t.isSvg && r === "svg" && (t = Object.assign({}, t, {
      isSvg: true
    })), t.isSvg ? n = document.createElementNS(xt, r) : n = document.createElement(r), Et(n, o, t), o.children) {
      let c = t;
      t.isSvg && r === "foreignObject" && (c = Object.assign({}, c, {
        isSvg: false
      }));
      const s = $(o.children, c);
      s != null && I(n, s);
    }
    const {
      ref: a
    } = o;
    return typeof a == "function" && a(n), n;
  }
  throw new Error("mount: Invalid Vnode!");
}
function O(e) {
  return B(e);
}
function jt(e) {
  var t = 0, n = e.children, r = n && n.length;
  if (!r)
    t = 1;
  else
    for (; --r >= 0; )
      t += n[r].value;
  e.value = t;
}
function Nt() {
  return this.eachAfter(jt);
}
function Rt(e) {
  var t = this, n, r = [t], o, a, c;
  do
    for (n = r.reverse(), r = []; t = n.pop(); )
      if (e(t), o = t.children, o)
        for (a = 0, c = o.length; a < c; ++a)
          r.push(o[a]);
  while (r.length);
  return this;
}
function Tt(e) {
  for (var t = this, n = [t], r, o; t = n.pop(); )
    if (e(t), r = t.children, r)
      for (o = r.length - 1; o >= 0; --o)
        n.push(r[o]);
  return this;
}
function Mt(e) {
  for (var t = this, n = [t], r = [], o, a, c; t = n.pop(); )
    if (r.push(t), o = t.children, o)
      for (a = 0, c = o.length; a < c; ++a)
        n.push(o[a]);
  for (; t = r.pop(); )
    e(t);
  return this;
}
function At(e) {
  return this.eachAfter(function(t) {
    for (var n = +e(t.data) || 0, r = t.children, o = r && r.length; --o >= 0; )
      n += r[o].value;
    t.value = n;
  });
}
function _t(e) {
  return this.eachBefore(function(t) {
    t.children && t.children.sort(e);
  });
}
function Ot(e) {
  for (var t = this, n = Dt(t, e), r = [t]; t !== n; )
    t = t.parent, r.push(t);
  for (var o = r.length; e !== n; )
    r.splice(o, 0, e), e = e.parent;
  return r;
}
function Dt(e, t) {
  if (e === t)
    return e;
  var n = e.ancestors(), r = t.ancestors(), o = null;
  for (e = n.pop(), t = r.pop(); e === t; )
    o = e, e = n.pop(), t = r.pop();
  return o;
}
function $t() {
  for (var e = this, t = [e]; e = e.parent; )
    t.push(e);
  return t;
}
function Bt() {
  var e = [];
  return this.each(function(t) {
    e.push(t);
  }), e;
}
function Ft() {
  var e = [];
  return this.eachBefore(function(t) {
    t.children || e.push(t);
  }), e;
}
function Ht() {
  var e = this, t = [];
  return e.each(function(n) {
    n !== e && t.push({ source: n.parent, target: n });
  }), t;
}
function F(e, t) {
  var n = new N(e), r = +e.value && (n.value = e.value), o, a = [n], c, s, l, p;
  for (t == null && (t = It); o = a.pop(); )
    if (r && (o.value = +o.data.value), (s = t(o.data)) && (p = s.length))
      for (o.children = new Array(p), l = p - 1; l >= 0; --l)
        a.push(c = o.children[l] = new N(s[l])), c.parent = o, c.depth = o.depth + 1;
  return n.eachBefore(Yt);
}
function Lt() {
  return F(this).eachBefore(Wt);
}
function It(e) {
  return e.children;
}
function Wt(e) {
  e.data = e.data.data;
}
function Yt(e) {
  var t = 0;
  do
    e.height = t;
  while ((e = e.parent) && e.height < ++t);
}
function N(e) {
  this.data = e, this.depth = this.height = 0, this.parent = null;
}
N.prototype = F.prototype = {
  constructor: N,
  count: Nt,
  each: Rt,
  eachAfter: Mt,
  eachBefore: Tt,
  sum: At,
  sort: _t,
  path: Ot,
  ancestors: $t,
  descendants: Bt,
  leaves: Ft,
  links: Ht,
  copy: Lt
};
var Vt = "d3-flextree";
var Kt = "2.1.2";
var Pt = "build/d3-flextree.js";
var Ut = "index";
var Gt = {
  name: "Chris Maloney",
  url: "http://chrismaloney.org"
};
var Zt = "Flexible tree layout algorithm that allows for variable node sizes.";
var qt = [
  "d3",
  "d3-module",
  "layout",
  "tree",
  "hierarchy",
  "d3-hierarchy",
  "plugin",
  "d3-plugin",
  "infovis",
  "visualization",
  "2d"
];
var Jt = "https://github.com/klortho/d3-flextree";
var Qt = "WTFPL";
var te = {
  type: "git",
  url: "https://github.com/klortho/d3-flextree.git"
};
var ee = {
  clean: "rm -rf build demo test",
  "build:demo": "rollup -c --environment BUILD:demo",
  "build:dev": "rollup -c --environment BUILD:dev",
  "build:prod": "rollup -c --environment BUILD:prod",
  "build:test": "rollup -c --environment BUILD:test",
  build: "rollup -c",
  lint: "eslint index.js src",
  "test:main": "node test/bundle.js",
  "test:browser": "node test/browser-tests.js",
  test: "npm-run-all test:*",
  prepare: "npm-run-all clean build lint test"
};
var ne = {
  "d3-hierarchy": "^1.1.5"
};
var re = {
  "babel-plugin-external-helpers": "^6.22.0",
  "babel-preset-es2015-rollup": "^3.0.0",
  d3: "^4.13.0",
  "d3-selection-multi": "^1.0.1",
  eslint: "^4.19.1",
  jsdom: "^11.6.2",
  "npm-run-all": "^4.1.2",
  rollup: "^0.55.3",
  "rollup-plugin-babel": "^2.7.1",
  "rollup-plugin-commonjs": "^8.0.2",
  "rollup-plugin-copy": "^0.2.3",
  "rollup-plugin-json": "^2.3.0",
  "rollup-plugin-node-resolve": "^3.0.2",
  "rollup-plugin-uglify": "^3.0.0",
  "uglify-es": "^3.3.9"
};
var ie = {
  name: Vt,
  version: Kt,
  main: Pt,
  module: Ut,
  "jsnext:main": "index",
  author: Gt,
  description: Zt,
  keywords: qt,
  homepage: Jt,
  license: Qt,
  repository: te,
  scripts: ee,
  dependencies: ne,
  devDependencies: re
};
var { version: oe } = ie;
var se = Object.freeze({
  children: (e) => e.children,
  nodeSize: (e) => e.data.size,
  spacing: 0
});
function q(e) {
  const t = Object.assign({}, se, e);
  function n(s) {
    const l = t[s];
    return typeof l == "function" ? l : () => l;
  }
  function r(s) {
    const l = c(a(), s, (p) => p.children);
    return l.update(), l.data;
  }
  function o() {
    const s = n("nodeSize"), l = n("spacing");
    return class Z extends F.prototype.constructor {
      constructor(h) {
        super(h);
      }
      copy() {
        const h = c(this.constructor, this, (u) => u.children);
        return h.each((u) => u.data = u.data.data), h;
      }
      get size() {
        return s(this);
      }
      spacing(h) {
        return l(this, h);
      }
      get nodes() {
        return this.descendants();
      }
      get xSize() {
        return this.size[0];
      }
      get ySize() {
        return this.size[1];
      }
      get top() {
        return this.y;
      }
      get bottom() {
        return this.y + this.ySize;
      }
      get left() {
        return this.x - this.xSize / 2;
      }
      get right() {
        return this.x + this.xSize / 2;
      }
      get root() {
        const h = this.ancestors();
        return h[h.length - 1];
      }
      get numChildren() {
        return this.hasChildren ? this.children.length : 0;
      }
      get hasChildren() {
        return !this.noChildren;
      }
      get noChildren() {
        return this.children === null;
      }
      get firstChild() {
        return this.hasChildren ? this.children[0] : null;
      }
      get lastChild() {
        return this.hasChildren ? this.children[this.numChildren - 1] : null;
      }
      get extents() {
        return (this.children || []).reduce(
          (h, u) => Z.maxExtents(h, u.extents),
          this.nodeExtents
        );
      }
      get nodeExtents() {
        return {
          top: this.top,
          bottom: this.bottom,
          left: this.left,
          right: this.right
        };
      }
      static maxExtents(h, u) {
        return {
          top: Math.min(h.top, u.top),
          bottom: Math.max(h.bottom, u.bottom),
          left: Math.min(h.left, u.left),
          right: Math.max(h.right, u.right)
        };
      }
    };
  }
  function a() {
    const s = o(), l = n("nodeSize"), p = n("spacing");
    return class extends s {
      constructor(h) {
        super(h), Object.assign(this, {
          x: 0,
          y: 0,
          relX: 0,
          prelim: 0,
          shift: 0,
          change: 0,
          lExt: this,
          lExtRelX: 0,
          lThr: null,
          rExt: this,
          rExtRelX: 0,
          rThr: null
        });
      }
      get size() {
        return l(this.data);
      }
      spacing(h) {
        return p(this.data, h.data);
      }
      get x() {
        return this.data.x;
      }
      set x(h) {
        this.data.x = h;
      }
      get y() {
        return this.data.y;
      }
      set y(h) {
        this.data.y = h;
      }
      update() {
        return J(this), Q(this), this;
      }
    };
  }
  function c(s, l, p) {
    const h = (u, g) => {
      const x = new s(u);
      Object.assign(x, {
        parent: g,
        depth: g === null ? 0 : g.depth + 1,
        height: 0,
        length: 1
      });
      const m = p(u) || [];
      return x.children = m.length === 0 ? null : m.map((y) => h(y, x)), x.children && Object.assign(x, x.children.reduce(
        (y, f) => ({
          height: Math.max(y.height, f.height + 1),
          length: y.length + f.length
        }),
        x
      )), x;
    };
    return h(l, null);
  }
  return Object.assign(r, {
    nodeSize(s) {
      return arguments.length ? (t.nodeSize = s, r) : t.nodeSize;
    },
    spacing(s) {
      return arguments.length ? (t.spacing = s, r) : t.spacing;
    },
    children(s) {
      return arguments.length ? (t.children = s, r) : t.children;
    },
    hierarchy(s, l) {
      const p = typeof l > "u" ? t.children : l;
      return c(o(), s, p);
    },
    dump(s) {
      const l = n("nodeSize"), p = (h) => (u) => {
        const g = h + "  ", x = h + "    ", { x: m, y } = u, f = l(u), k = u.children || [], v = k.length === 0 ? " " : `,${g}children: [${x}${k.map(p(x)).join(x)}${g}],${h}`;
        return `{ size: [${f.join(", ")}],${g}x: ${m}, y: ${y}${v}},`;
      };
      return p(`
`)(s);
    }
  }), r;
}
q.version = oe;
var J = (e, t = 0) => (e.y = t, (e.children || []).reduce((n, r) => {
  const [o, a] = n;
  J(r, e.y + e.ySize);
  const c = (o === 0 ? r.lExt : r.rExt).bottom;
  o !== 0 && le(e, o, a);
  const s = ge(c, o, a);
  return [o + 1, s];
}, [0, null]), ae(e), fe(e), e);
var Q = (e, t, n) => {
  typeof t > "u" && (t = -e.relX - e.prelim, n = 0);
  const r = t + e.relX;
  return e.relX = r + e.prelim - n, e.prelim = 0, e.x = n + e.relX, (e.children || []).forEach((o) => Q(o, r, e.x)), e;
};
var ae = (e) => {
  (e.children || []).reduce((t, n) => {
    const [r, o] = t, a = r + n.shift, c = o + a + n.change;
    return n.relX += c, [a, c];
  }, [0, 0]);
};
var le = (e, t, n) => {
  const r = e.children[t - 1], o = e.children[t];
  let a = r, c = r.relX, s = o, l = o.relX, p = true;
  for (; a && s; ) {
    a.bottom > n.lowY && (n = n.next);
    const h = c + a.prelim - (l + s.prelim) + a.xSize / 2 + s.xSize / 2 + a.spacing(s);
    (h > 0 || h < 0 && p) && (l += h, ce(o, h), he(e, t, n.index, h)), p = false;
    const u = a.bottom, g = s.bottom;
    u <= g && (a = ue(a), a && (c += a.relX)), u >= g && (s = de(s), s && (l += s.relX));
  }
  !a && s ? pe(e, t, s, l) : a && !s && me(e, t, a, c);
};
var ce = (e, t) => {
  e.relX += t, e.lExtRelX += t, e.rExtRelX += t;
};
var he = (e, t, n, r) => {
  const o = e.children[t], a = t - n;
  if (a > 1) {
    const c = r / a;
    e.children[n + 1].shift += c, o.shift -= c, o.change -= r - c;
  }
};
var de = (e) => e.hasChildren ? e.firstChild : e.lThr;
var ue = (e) => e.hasChildren ? e.lastChild : e.rThr;
var pe = (e, t, n, r) => {
  const o = e.firstChild, a = o.lExt, c = e.children[t];
  a.lThr = n;
  const s = r - n.relX - o.lExtRelX;
  a.relX += s, a.prelim -= s, o.lExt = c.lExt, o.lExtRelX = c.lExtRelX;
};
var me = (e, t, n, r) => {
  const o = e.children[t], a = o.rExt, c = e.children[t - 1];
  a.rThr = n;
  const s = r - n.relX - o.rExtRelX;
  a.relX += s, a.prelim -= s, o.rExt = c.rExt, o.rExtRelX = c.rExtRelX;
};
var fe = (e) => {
  if (e.hasChildren) {
    const t = e.firstChild, n = e.lastChild, r = (t.prelim + t.relX - t.xSize / 2 + n.relX + n.prelim + n.xSize / 2) / 2;
    Object.assign(e, {
      prelim: r,
      lExt: t.lExt,
      lExtRelX: t.lExtRelX,
      rExt: n.rExt,
      rExtRelX: n.rExtRelX
    });
  }
};
var ge = (e, t, n) => {
  for (; n !== null && e >= n.lowY; )
    n = n.next;
  return {
    lowY: e,
    index: t,
    next: n
  };
};
var xe = ".markmap-container{position:absolute;width:0;height:0;top:-100px;left:-100px;overflow:hidden}.markmap-container>.markmap-foreign{display:inline-block}.markmap-container>.markmap-foreign>div:last-child,.markmap-container>.markmap-foreign>div:last-child :not(pre){white-space:nowrap}.markmap-container>.markmap-foreign>div:last-child code{white-space:inherit}";
var tt = ".markmap{--markmap-max-width: none;--markmap-a-color: #0097e6;--markmap-a-hover-color: #00a8ff;--markmap-code-bg: #f0f0f0;--markmap-code-color: #555;--markmap-highlight-bg: #ffeaa7;--markmap-table-border: 1px solid currentColor;--markmap-font: 300 16px/20px sans-serif;--markmap-circle-open-bg: #fff;--markmap-text-color: #333;font:var(--markmap-font);color:var(--markmap-text-color)}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign p{margin:0}.markmap-foreign a{color:var(--markmap-a-color)}.markmap-foreign a:hover{color:var(--markmap-a-hover-color)}.markmap-foreign code{padding:.25em;font-size:calc(1em - 2px);color:var(--markmap-code-color);background-color:var(--markmap-code-bg);border-radius:2px}.markmap-foreign pre{margin:0}.markmap-foreign pre>code{display:block}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:700}.markmap-foreign mark{background:var(--markmap-highlight-bg)}.markmap-foreign table,.markmap-foreign th,.markmap-foreign td{border-collapse:collapse;border:var(--markmap-table-border)}.markmap-foreign img{display:inline-block}.markmap-foreign svg{fill:currentColor}.markmap-foreign-testing-max{max-width:var(--markmap-max-width)}.markmap-foreign-testing-max img{max-width:var(--markmap-max-width);max-height:none}.markmap-dark .markmap{--markmap-code-bg: #1a1b26;--markmap-code-color: #ddd;--markmap-circle-open-bg: #444;--markmap-text-color: #eee}";
var be = tt;
function W(e) {
  const t = e.data;
  return Math.max(4 - 2 * t.state.depth, 1.5);
}
function Y(e, t) {
  const n = minIndex(e, t);
  return e[n];
}
function D(e) {
  e.stopPropagation();
}
var ye = new Hook();
var et = class _et {
  constructor(t, n) {
    this.options = P, this.revokers = [], this.imgCache = {}, this.handleZoom = (r) => {
      const { transform: o } = r;
      this.g.attr("transform", o);
    }, this.handlePan = (r) => {
      r.preventDefault();
      const o = transform(this.svg.node()), a = o.translate(
        -r.deltaX / o.k,
        -r.deltaY / o.k
      );
      this.svg.call(this.zoom.transform, a);
    }, this.handleClick = (r, o) => {
      let a = this.options.toggleRecursively;
      (K ? r.metaKey : r.ctrlKey) && (a = !a), this.toggleNode(o.data, a);
    }, this.svg = t.datum ? t : select_default(t), this.styleNode = this.svg.append("style"), this.zoom = zoom_default().filter((r) => this.options.scrollForPan && r.type === "wheel" ? r.ctrlKey && !r.button : (!r.ctrlKey || r.type === "wheel") && !r.button).on("zoom", this.handleZoom), this.setOptions(n), this.state = {
      id: this.options.id || this.svg.attr("id") || getId(),
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0
    }, this.g = this.svg.append("g"), this.debouncedRefresh = debounce(() => this.setData(), 200), this.revokers.push(
      ye.tap(() => {
        this.setData();
      })
    );
  }
  getStyleContent() {
    const { style: t } = this.options, { id: n } = this.state, r = typeof t == "function" ? t(n) : "";
    return [this.options.embedGlobalCSS && tt, r].filter(Boolean).join(`
`);
  }
  updateStyle() {
    this.svg.attr(
      "class",
      addClass(this.svg.attr("class"), "markmap", this.state.id)
    );
    const t = this.getStyleContent();
    this.styleNode.text(t);
  }
  toggleNode(t, n = false) {
    var o, a;
    const r = (o = t.payload) != null && o.fold ? 0 : 1;
    n ? walkTree(t, (c, s) => {
      c.payload = {
        ...c.payload,
        fold: r
      }, s();
    }) : t.payload = {
      ...t.payload,
      fold: (a = t.payload) != null && a.fold ? 0 : 1
    }, this.renderData(t);
  }
  initializeData(t) {
    let n = 0;
    const { color: r, nodeMinHeight: o, maxWidth: a, initialExpandLevel: c } = this.options, { id: s } = this.state, l = O(
      j("div", { className: `markmap-container markmap ${s}-g` })
    ), p = O(
      j("style", { children: [this.getStyleContent(), xe].join(`
`) })
    );
    document.body.append(l, p);
    const h = a ? `--markmap-max-width: ${a}px` : "";
    let u = 0, g = 0;
    walkTree(t, (m, y, f) => {
      var b, w, z;
      g += 1, m.children = (b = m.children) == null ? void 0 : b.map((E) => ({ ...E })), n += 1;
      const k = O(
        j(
          "div",
          {
            className: "markmap-foreign markmap-foreign-testing-max",
            style: h,
            children: j("div", { dangerouslySetInnerHTML: { __html: m.content } })
          }
        )
      );
      l.append(k), m.state = {
        ...m.state,
        depth: g,
        id: n,
        el: k.firstChild
      }, m.state.path = [(w = f == null ? void 0 : f.state) == null ? void 0 : w.path, m.state.id].filter(Boolean).join("."), r(m);
      const v = ((z = m.payload) == null ? void 0 : z.fold) === 2;
      v ? u += 1 : (u || c >= 0 && m.state.depth >= c) && (m.payload = { ...m.payload, fold: 1 }), y(), v && (u -= 1), g -= 1;
    });
    const x = Array.from(l.childNodes).map(
      (m) => m.firstChild
    );
    this._checkImages(l), x.forEach((m) => {
      var y;
      (y = m.parentNode) == null || y.append(m.cloneNode(true));
    }), walkTree(t, (m, y, f) => {
      var b;
      const k = m.state, v = k.el.getBoundingClientRect();
      m.content = k.el.innerHTML, k.size = [
        Math.ceil(v.width) + 1,
        Math.max(Math.ceil(v.height), o)
      ], k.key = [(b = f == null ? void 0 : f.state) == null ? void 0 : b.id, k.id].filter(Boolean).join(".") + // FIXME: find a way to check content hash
      m.content, y();
    }), l.remove(), p.remove();
  }
  _checkImages(t) {
    t.querySelectorAll("img").forEach((n) => {
      if (n.width)
        return;
      const r = this.imgCache[n.src];
      r != null && r[0] ? [n.width, n.height] = r : r || this._loadImage(n.src);
    });
  }
  _loadImage(t) {
    this.imgCache[t] = [0, 0];
    const n = new Image();
    n.src = t, n.onload = () => {
      this.imgCache[t] = [n.naturalWidth, n.naturalHeight], this.debouncedRefresh();
    };
  }
  setOptions(t) {
    this.options = {
      ...this.options,
      ...t
    }, this.options.zoom ? this.svg.call(this.zoom) : this.svg.on(".zoom", null), this.options.pan ? this.svg.on("wheel", this.handlePan) : this.svg.on("wheel", null);
  }
  setData(t, n) {
    n && this.setOptions(n), t && (this.state.data = t), this.state.data && (this.initializeData(this.state.data), this.updateStyle(), this.renderData());
  }
  renderData(t) {
    if (!this.state.data)
      return;
    const { spacingHorizontal: n, paddingX: r, spacingVertical: o, autoFit: a, color: c } = this.options, s = q({}).children((i) => {
      var d;
      if (!((d = i.payload) != null && d.fold))
        return i.children;
    }).nodeSize((i) => {
      const [d, S] = i.data.state.size;
      return [S, d + (d ? r * 2 : 0) + n];
    }).spacing((i, d) => i.parent === d.parent ? o : o * 2), l = s.hierarchy(this.state.data);
    s(l);
    const p = l.descendants().reverse(), h = l.links(), u = linkHorizontal(), g = min(p, (i) => i.x - i.xSize / 2), x = max(p, (i) => i.x + i.xSize / 2), m = min(p, (i) => i.y), y = max(p, (i) => i.y + i.ySize - n);
    Object.assign(this.state, {
      minX: g,
      maxX: x,
      minY: m,
      maxY: y
    }), a && this.fit();
    const f = t && p.find((i) => i.data === t) || l, k = f.data.state.x0 ?? f.x, v = f.data.state.y0 ?? f.y, b = this.g.selectAll(
      childSelector("g")
    ).data(p, (i) => i.data.state.key), w = b.enter().append("g").attr("data-depth", (i) => i.data.state.depth).attr("data-path", (i) => i.data.state.path).attr(
      "transform",
      (i) => `translate(${v + f.ySize - i.ySize},${k + f.xSize / 2 - i.xSize})`
    ), z = this.transition(b.exit());
    z.select("line").attr("x1", (i) => i.ySize - n).attr("x2", (i) => i.ySize - n), z.select("foreignObject").style("opacity", 0), z.attr(
      "transform",
      (i) => `translate(${f.y + f.ySize - i.ySize},${f.x + f.xSize / 2 - i.xSize})`
    ).remove();
    const E = b.merge(w).attr(
      "class",
      (i) => {
        var d;
        return ["markmap-node", ((d = i.data.payload) == null ? void 0 : d.fold) && "markmap-fold"].filter(Boolean).join(" ");
      }
    );
    this.transition(E).attr(
      "transform",
      (i) => `translate(${i.y},${i.x - i.xSize / 2})`
    );
    const nt = E.selectAll(
      childSelector("line")
    ).data(
      (i) => [i],
      (i) => i.data.state.key
    ).join(
      (i) => i.append("line").attr("x1", (d) => d.ySize - n).attr("x2", (d) => d.ySize - n),
      (i) => i,
      (i) => i.remove()
    );
    this.transition(nt).attr("x1", -1).attr("x2", (i) => i.ySize - n + 2).attr("y1", (i) => i.xSize).attr("y2", (i) => i.xSize).attr("stroke", (i) => c(i.data)).attr("stroke-width", W);
    const rt = E.selectAll(
      childSelector("circle")
    ).data(
      (i) => {
        var d;
        return (d = i.data.children) != null && d.length ? [i] : [];
      },
      (i) => i.data.state.key
    ).join(
      (i) => i.append("circle").attr("stroke-width", "1.5").attr("cx", (d) => d.ySize - n).attr("cy", (d) => d.xSize).attr("r", 0).on("click", (d, S) => this.handleClick(d, S)).on("mousedown", D),
      (i) => i,
      (i) => i.remove()
    );
    this.transition(rt).attr("r", 6).attr("cx", (i) => i.ySize - n).attr("cy", (i) => i.xSize).attr("stroke", (i) => c(i.data)).attr(
      "fill",
      (i) => {
        var d;
        return (d = i.data.payload) != null && d.fold && i.data.children ? c(i.data) : "var(--markmap-circle-open-bg)";
      }
    );
    const it = E.selectAll(
      childSelector("foreignObject")
    ).data(
      (i) => [i],
      (i) => i.data.state.key
    ).join(
      (i) => {
        const d = i.append("foreignObject").attr("class", "markmap-foreign").attr("x", r).attr("y", 0).style("opacity", 0).on("mousedown", D).on("dblclick", D);
        return d.append("xhtml:div").select(function(R) {
          const X = R.data.state.el.cloneNode(true);
          return this.replaceWith(X), X;
        }).attr("xmlns", "http://www.w3.org/1999/xhtml"), d;
      },
      (i) => i,
      (i) => i.remove()
    ).attr(
      "width",
      (i) => Math.max(0, i.ySize - n - r * 2)
    ).attr("height", (i) => i.xSize);
    this.transition(it).style("opacity", 1);
    const ot = this.g.selectAll(
      childSelector("path")
    ).data(h, (i) => i.target.data.state.key).join(
      (i) => {
        const d = [
          v + f.ySize - n,
          k + f.xSize / 2
        ];
        return i.insert("path", "g").attr("class", "markmap-link").attr("data-depth", (S) => S.target.data.state.depth).attr("data-path", (S) => S.target.data.state.path).attr("d", u({ source: d, target: d }));
      },
      (i) => i,
      (i) => {
        const d = [
          f.y + f.ySize - n,
          f.x + f.xSize / 2
        ];
        return this.transition(i).attr("d", u({ source: d, target: d })).remove();
      }
    );
    this.transition(ot).attr("stroke", (i) => c(i.target.data)).attr("stroke-width", (i) => W(i.target)).attr("d", (i) => {
      const d = i.source, S = i.target, R = [
        d.y + d.ySize - n,
        d.x + d.xSize / 2
      ], X = [
        S.y,
        S.x + S.xSize / 2
      ];
      return u({ source: R, target: X });
    }), p.forEach((i) => {
      i.data.state.x0 = i.x, i.data.state.y0 = i.y;
    });
  }
  transition(t) {
    const { duration: n } = this.options;
    return t.transition().duration(n);
  }
  /**
   * Fit the content to the viewport.
   */
  async fit() {
    const t = this.svg.node(), { width: n, height: r } = t.getBoundingClientRect(), { fitRatio: o } = this.options, { minX: a, maxX: c, minY: s, maxY: l } = this.state, p = l - s, h = c - a, u = Math.min(
      n / p * o,
      r / h * o,
      2
    ), g = identity.translate(
      (n - p * u) / 2 - s * u,
      (r - h * u) / 2 - a * u
    ).scale(u);
    return this.transition(this.svg).call(this.zoom.transform, g).end().catch(noop);
  }
  findElement(t) {
    let n;
    return this.g.selectAll(
      childSelector("g")
    ).each(function(o) {
      o.data === t && (n = {
        data: o,
        g: this
      });
    }), n;
  }
  /**
   * Pan the content to make the provided node visible in the viewport.
   */
  async ensureView(t, n) {
    var k;
    const r = (k = this.findElement(t)) == null ? void 0 : k.data;
    if (!r)
      return;
    const o = this.svg.node(), { spacingHorizontal: a } = this.options, c = o.getBoundingClientRect(), s = transform(o), [l, p] = [
      r.y,
      r.y + r.ySize - a + 2
    ].map((v) => v * s.k + s.x), [h, u] = [
      r.x - r.xSize / 2,
      r.x + r.xSize / 2
    ].map((v) => v * s.k + s.y), g = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      ...n
    }, x = [g.left - l, c.width - g.right - p], m = [g.top - h, c.height - g.bottom - u], y = x[0] * x[1] > 0 ? Y(x, Math.abs) / s.k : 0, f = m[0] * m[1] > 0 ? Y(m, Math.abs) / s.k : 0;
    if (y || f) {
      const v = s.translate(y, f);
      return this.transition(this.svg).call(this.zoom.transform, v).end().catch(noop);
    }
  }
  /**
   * Scale content with it pinned at the center of the viewport.
   */
  async rescale(t) {
    const n = this.svg.node(), { width: r, height: o } = n.getBoundingClientRect(), a = r / 2, c = o / 2, s = transform(n), l = s.translate(
      (a - s.x) * (1 - t) / s.k,
      (c - s.y) * (1 - t) / s.k
    ).scale(t);
    return this.transition(this.svg).call(this.zoom.transform, l).end().catch(noop);
  }
  destroy() {
    this.svg.on(".zoom", null), this.svg.html(null), this.revokers.forEach((t) => {
      t();
    });
  }
  static create(t, n, r = null) {
    const o = new _et(t, n);
    return r && (o.setData(r), o.fit()), o;
  }
};
export {
  et as Markmap,
  gt as defaultColorFn,
  P as defaultOptions,
  Se as deriveOptions,
  be as globalCSS,
  K as isMacintosh,
  loadCSS,
  loadJS,
  ye as refreshHook
};
/*! Bundled license information:

markmap-view/dist/index.js:
  (*! @gera2ld/jsx-dom v2.2.2 | ISC License *)
*/
//# sourceMappingURL=markmap-view.js.map
