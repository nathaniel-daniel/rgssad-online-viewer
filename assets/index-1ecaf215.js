var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
(async () => {
  var _e2, _n2, _t2;
  (function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
      return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver((i) => {
      for (const a of i)
        if (a.type === "childList")
          for (const s of a.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(i) {
      const a = {};
      return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
    }
    function r(i) {
      if (i.ep)
        return;
      i.ep = true;
      const a = n(i);
      fetch(i.href, a);
    }
  })();
  function Ke() {
  }
  function Di(e) {
    return e();
  }
  function vr() {
    return /* @__PURE__ */ Object.create(null);
  }
  function St(e) {
    e.forEach(Di);
  }
  function Ni(e) {
    return typeof e == "function";
  }
  function sr(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
  }
  let Gt;
  function yr(e, t) {
    return e === t ? true : (Gt || (Gt = document.createElement("a")), Gt.href = t, e === Gt.href);
  }
  function Ws(e) {
    return Object.keys(e).length === 0;
  }
  function se(e, t) {
    e.appendChild(t);
  }
  function he(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function _e(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function Oi(e, t) {
    for (let n = 0; n < e.length; n += 1)
      e[n] && e[n].d(t);
  }
  function ue(e) {
    return document.createElement(e);
  }
  function Ve(e) {
    return document.createTextNode(e);
  }
  function mt() {
    return Ve(" ");
  }
  function vn() {
    return Ve("");
  }
  function pt(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }
  function kr(e) {
    return function(t) {
      return t.preventDefault(), e.call(this, t);
    };
  }
  function Q(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function Bs(e) {
    return Array.from(e.childNodes);
  }
  function yn(e, t) {
    t = "" + t, e.data !== t && (e.data = t);
  }
  function _n(e, t, n, r) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
  }
  function $s(e, t, { bubbles: n = false, cancelable: r = false } = {}) {
    return new CustomEvent(e, {
      detail: t,
      bubbles: n,
      cancelable: r
    });
  }
  let Lt;
  function Ot(e) {
    Lt = e;
  }
  function Hs() {
    if (!Lt)
      throw new Error("Function called outside component initialization");
    return Lt;
  }
  function Li() {
    const e = Hs();
    return (t, n, { cancelable: r = false } = {}) => {
      const i = e.$$.callbacks[t];
      if (i) {
        const a = $s(t, n, {
          cancelable: r
        });
        return i.slice().forEach((s) => {
          s.call(e, a);
        }), !a.defaultPrevented;
      }
      return true;
    };
  }
  function Zn(e, t) {
    const n = e.$$.callbacks[t.type];
    n && n.slice().forEach((r) => r.call(this, t));
  }
  const bt = [], Sr = [];
  let yt = [];
  const Er = [], Vs = Promise.resolve();
  let Yn = false;
  function Zs() {
    Yn || (Yn = true, Vs.then(Ui));
  }
  function Gn(e) {
    yt.push(e);
  }
  const In = /* @__PURE__ */ new Set();
  let ht = 0;
  function Ui() {
    if (ht !== 0)
      return;
    const e = Lt;
    do {
      try {
        for (; ht < bt.length; ) {
          const t = bt[ht];
          ht++, Ot(t), Ys(t.$$);
        }
      } catch (t) {
        throw bt.length = 0, ht = 0, t;
      }
      for (Ot(null), bt.length = 0, ht = 0; Sr.length; )
        Sr.pop()();
      for (let t = 0; t < yt.length; t += 1) {
        const n = yt[t];
        In.has(n) || (In.add(n), n());
      }
      yt.length = 0;
    } while (bt.length);
    for (; Er.length; )
      Er.pop()();
    Yn = false, In.clear(), Ot(e);
  }
  function Ys(e) {
    if (e.fragment !== null) {
      e.update(), St(e.before_update);
      const t = e.dirty;
      e.dirty = [
        -1
      ], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Gn);
    }
  }
  function Gs(e) {
    const t = [], n = [];
    yt.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), yt = t;
  }
  const ln = /* @__PURE__ */ new Set();
  let ut;
  function Et() {
    ut = {
      r: 0,
      c: [],
      p: ut
    };
  }
  function At() {
    ut.r || St(ut.c), ut = ut.p;
  }
  function ce(e, t) {
    e && e.i && (ln.delete(e), e.i(t));
  }
  function xe(e, t, n, r) {
    if (e && e.o) {
      if (ln.has(e))
        return;
      ln.add(e), ut.c.push(() => {
        ln.delete(e), r && (n && e.d(1), r());
      }), e.o(t);
    } else
      r && r();
  }
  function hn(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
  }
  function kn(e) {
    e && e.c();
  }
  function Bt(e, t, n) {
    const { fragment: r, after_update: i } = e.$$;
    r && r.m(t, n), Gn(() => {
      const a = e.$$.on_mount.map(Di).filter(Ni);
      e.$$.on_destroy ? e.$$.on_destroy.push(...a) : St(a), e.$$.on_mount = [];
    }), i.forEach(Gn);
  }
  function $t(e, t) {
    const n = e.$$;
    n.fragment !== null && (Gs(n.after_update), St(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
  }
  function Ks(e, t) {
    e.$$.dirty[0] === -1 && (bt.push(e), Zs(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
  }
  function ar(e, t, n, r, i, a, s = null, l = [
    -1
  ]) {
    const o = Lt;
    Ot(e);
    const f = e.$$ = {
      fragment: null,
      ctx: [],
      props: a,
      update: Ke,
      not_equal: i,
      bound: vr(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (o ? o.$$.context : [])),
      callbacks: vr(),
      dirty: l,
      skip_bound: false,
      root: t.target || o.$$.root
    };
    s && s(f.root);
    let d = false;
    if (f.ctx = n ? n(e, t.props || {}, (p, _, ...x) => {
      const k = x.length ? x[0] : _;
      return f.ctx && i(f.ctx[p], f.ctx[p] = k) && (!f.skip_bound && f.bound[p] && f.bound[p](k), d && Ks(e, p)), _;
    }) : [], f.update(), d = true, St(f.before_update), f.fragment = r ? r(f.ctx) : false, t.target) {
      if (t.hydrate) {
        const p = Bs(t.target);
        f.fragment && f.fragment.l(p), p.forEach(_e);
      } else
        f.fragment && f.fragment.c();
      t.intro && ce(e.$$.fragment), Bt(e, t.target, t.anchor), Ui();
    }
    Ot(o);
  }
  class or {
    constructor() {
      __publicField(this, "$$");
      __publicField(this, "$$set");
    }
    $destroy() {
      $t(this, 1), this.$destroy = Ke;
    }
    $on(t, n) {
      if (!Ni(n))
        return Ke;
      const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return r.push(n), () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      };
    }
    $set(t) {
      this.$$set && !Ws(t) && (this.$$.skip_bound = true, this.$$set(t), this.$$.skip_bound = false);
    }
  }
  const Xs = "4";
  typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: /* @__PURE__ */ new Set()
  })).v.add(Xs);
  const Ut = 15, Kn = 30, Xn = 19, zs = 29, xn = 256, lr = xn + 1 + zs, Ar = 2 * lr + 1, Rt = 256, Js = 7, Tr = 16, Cr = 17, Rr = 18, Fn = 8 * 2, wn = -1, Qs = 1, Kt = 2, ea = 0, gt = 0, Ir = 1, ta = 3, ye = 4, Pe = 0, Pi = 1, Xt = 2, Me = -2, na = -3, xt = -5;
  function Sn(e) {
    return En(e.map(([t, n]) => new Array(t).fill(n, 0, t)));
  }
  function En(e) {
    return e.reduce((t, n) => t.concat(Array.isArray(n) ? En(n) : n), []);
  }
  const Fr = [
    0,
    1,
    2,
    3
  ].concat(...Sn([
    [
      2,
      4
    ],
    [
      2,
      5
    ],
    [
      4,
      6
    ],
    [
      4,
      7
    ],
    [
      8,
      8
    ],
    [
      8,
      9
    ],
    [
      16,
      10
    ],
    [
      16,
      11
    ],
    [
      32,
      12
    ],
    [
      32,
      13
    ],
    [
      64,
      14
    ],
    [
      64,
      15
    ],
    [
      2,
      0
    ],
    [
      1,
      16
    ],
    [
      1,
      17
    ],
    [
      2,
      18
    ],
    [
      2,
      19
    ],
    [
      4,
      20
    ],
    [
      4,
      21
    ],
    [
      8,
      22
    ],
    [
      8,
      23
    ],
    [
      16,
      24
    ],
    [
      16,
      25
    ],
    [
      32,
      26
    ],
    [
      32,
      27
    ],
    [
      64,
      28
    ],
    [
      64,
      29
    ]
  ]));
  function z() {
    const e = this;
    function t(i) {
      const a = e.dyn_tree, s = e.stat_desc.static_tree, l = e.stat_desc.extra_bits, o = e.stat_desc.extra_base, f = e.stat_desc.max_length;
      let d, p, _, x, k, u, c = 0;
      for (x = 0; x <= Ut; x++)
        i.bl_count[x] = 0;
      for (a[i.heap[i.heap_max] * 2 + 1] = 0, d = i.heap_max + 1; d < Ar; d++)
        p = i.heap[d], x = a[a[p * 2 + 1] * 2 + 1] + 1, x > f && (x = f, c++), a[p * 2 + 1] = x, !(p > e.max_code) && (i.bl_count[x]++, k = 0, p >= o && (k = l[p - o]), u = a[p * 2], i.opt_len += u * (x + k), s && (i.static_len += u * (s[p * 2 + 1] + k)));
      if (c !== 0) {
        do {
          for (x = f - 1; i.bl_count[x] === 0; )
            x--;
          i.bl_count[x]--, i.bl_count[x + 1] += 2, i.bl_count[f]--, c -= 2;
        } while (c > 0);
        for (x = f; x !== 0; x--)
          for (p = i.bl_count[x]; p !== 0; )
            _ = i.heap[--d], !(_ > e.max_code) && (a[_ * 2 + 1] != x && (i.opt_len += (x - a[_ * 2 + 1]) * a[_ * 2], a[_ * 2 + 1] = x), p--);
      }
    }
    function n(i, a) {
      let s = 0;
      do
        s |= i & 1, i >>>= 1, s <<= 1;
      while (--a > 0);
      return s >>> 1;
    }
    function r(i, a, s) {
      const l = [];
      let o = 0, f, d, p;
      for (f = 1; f <= Ut; f++)
        l[f] = o = o + s[f - 1] << 1;
      for (d = 0; d <= a; d++)
        p = i[d * 2 + 1], p !== 0 && (i[d * 2] = n(l[p]++, p));
    }
    e.build_tree = function(i) {
      const a = e.dyn_tree, s = e.stat_desc.static_tree, l = e.stat_desc.elems;
      let o, f, d = -1, p;
      for (i.heap_len = 0, i.heap_max = Ar, o = 0; o < l; o++)
        a[o * 2] !== 0 ? (i.heap[++i.heap_len] = d = o, i.depth[o] = 0) : a[o * 2 + 1] = 0;
      for (; i.heap_len < 2; )
        p = i.heap[++i.heap_len] = d < 2 ? ++d : 0, a[p * 2] = 1, i.depth[p] = 0, i.opt_len--, s && (i.static_len -= s[p * 2 + 1]);
      for (e.max_code = d, o = Math.floor(i.heap_len / 2); o >= 1; o--)
        i.pqdownheap(a, o);
      p = l;
      do
        o = i.heap[1], i.heap[1] = i.heap[i.heap_len--], i.pqdownheap(a, 1), f = i.heap[1], i.heap[--i.heap_max] = o, i.heap[--i.heap_max] = f, a[p * 2] = a[o * 2] + a[f * 2], i.depth[p] = Math.max(i.depth[o], i.depth[f]) + 1, a[o * 2 + 1] = a[f * 2 + 1] = p, i.heap[1] = p++, i.pqdownheap(a, 1);
      while (i.heap_len >= 2);
      i.heap[--i.heap_max] = i.heap[1], t(i), r(a, e.max_code, i.bl_count);
    };
  }
  z._length_code = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7
  ].concat(...Sn([
    [
      2,
      8
    ],
    [
      2,
      9
    ],
    [
      2,
      10
    ],
    [
      2,
      11
    ],
    [
      4,
      12
    ],
    [
      4,
      13
    ],
    [
      4,
      14
    ],
    [
      4,
      15
    ],
    [
      8,
      16
    ],
    [
      8,
      17
    ],
    [
      8,
      18
    ],
    [
      8,
      19
    ],
    [
      16,
      20
    ],
    [
      16,
      21
    ],
    [
      16,
      22
    ],
    [
      16,
      23
    ],
    [
      32,
      24
    ],
    [
      32,
      25
    ],
    [
      32,
      26
    ],
    [
      31,
      27
    ],
    [
      1,
      28
    ]
  ]));
  z.base_length = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    10,
    12,
    14,
    16,
    20,
    24,
    28,
    32,
    40,
    48,
    56,
    64,
    80,
    96,
    112,
    128,
    160,
    192,
    224,
    0
  ];
  z.base_dist = [
    0,
    1,
    2,
    3,
    4,
    6,
    8,
    12,
    16,
    24,
    32,
    48,
    64,
    96,
    128,
    192,
    256,
    384,
    512,
    768,
    1024,
    1536,
    2048,
    3072,
    4096,
    6144,
    8192,
    12288,
    16384,
    24576
  ];
  z.d_code = function(e) {
    return e < 256 ? Fr[e] : Fr[256 + (e >>> 7)];
  };
  z.extra_lbits = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0
  ];
  z.extra_dbits = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
  ];
  z.extra_blbits = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    2,
    3,
    7
  ];
  z.bl_order = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
  ];
  function me(e, t, n, r, i) {
    const a = this;
    a.static_tree = e, a.extra_bits = t, a.extra_base = n, a.elems = r, a.max_length = i;
  }
  const ra = [
    12,
    140,
    76,
    204,
    44,
    172,
    108,
    236,
    28,
    156,
    92,
    220,
    60,
    188,
    124,
    252,
    2,
    130,
    66,
    194,
    34,
    162,
    98,
    226,
    18,
    146,
    82,
    210,
    50,
    178,
    114,
    242,
    10,
    138,
    74,
    202,
    42,
    170,
    106,
    234,
    26,
    154,
    90,
    218,
    58,
    186,
    122,
    250,
    6,
    134,
    70,
    198,
    38,
    166,
    102,
    230,
    22,
    150,
    86,
    214,
    54,
    182,
    118,
    246,
    14,
    142,
    78,
    206,
    46,
    174,
    110,
    238,
    30,
    158,
    94,
    222,
    62,
    190,
    126,
    254,
    1,
    129,
    65,
    193,
    33,
    161,
    97,
    225,
    17,
    145,
    81,
    209,
    49,
    177,
    113,
    241,
    9,
    137,
    73,
    201,
    41,
    169,
    105,
    233,
    25,
    153,
    89,
    217,
    57,
    185,
    121,
    249,
    5,
    133,
    69,
    197,
    37,
    165,
    101,
    229,
    21,
    149,
    85,
    213,
    53,
    181,
    117,
    245,
    13,
    141,
    77,
    205,
    45,
    173,
    109,
    237,
    29,
    157,
    93,
    221,
    61,
    189,
    125,
    253,
    19,
    275,
    147,
    403,
    83,
    339,
    211,
    467,
    51,
    307,
    179,
    435,
    115,
    371,
    243,
    499,
    11,
    267,
    139,
    395,
    75,
    331,
    203,
    459,
    43,
    299,
    171,
    427,
    107,
    363,
    235,
    491,
    27,
    283,
    155,
    411,
    91,
    347,
    219,
    475,
    59,
    315,
    187,
    443,
    123,
    379,
    251,
    507,
    7,
    263,
    135,
    391,
    71,
    327,
    199,
    455,
    39,
    295,
    167,
    423,
    103,
    359,
    231,
    487,
    23,
    279,
    151,
    407,
    87,
    343,
    215,
    471,
    55,
    311,
    183,
    439,
    119,
    375,
    247,
    503,
    15,
    271,
    143,
    399,
    79,
    335,
    207,
    463,
    47,
    303,
    175,
    431,
    111,
    367,
    239,
    495,
    31,
    287,
    159,
    415,
    95,
    351,
    223,
    479,
    63,
    319,
    191,
    447,
    127,
    383,
    255,
    511,
    0,
    64,
    32,
    96,
    16,
    80,
    48,
    112,
    8,
    72,
    40,
    104,
    24,
    88,
    56,
    120,
    4,
    68,
    36,
    100,
    20,
    84,
    52,
    116,
    3,
    131,
    67,
    195,
    35,
    163,
    99,
    227
  ], ia = Sn([
    [
      144,
      8
    ],
    [
      112,
      9
    ],
    [
      24,
      7
    ],
    [
      8,
      8
    ]
  ]);
  me.static_ltree = En(ra.map((e, t) => [
    e,
    ia[t]
  ]));
  const sa = [
    0,
    16,
    8,
    24,
    4,
    20,
    12,
    28,
    2,
    18,
    10,
    26,
    6,
    22,
    14,
    30,
    1,
    17,
    9,
    25,
    5,
    21,
    13,
    29,
    3,
    19,
    11,
    27,
    7,
    23
  ], aa = Sn([
    [
      30,
      5
    ]
  ]);
  me.static_dtree = En(sa.map((e, t) => [
    e,
    aa[t]
  ]));
  me.static_l_desc = new me(me.static_ltree, z.extra_lbits, xn + 1, lr, Ut);
  me.static_d_desc = new me(me.static_dtree, z.extra_dbits, 0, Kn, Ut);
  me.static_bl_desc = new me(null, z.extra_blbits, 0, Xn, Js);
  const oa = 9, la = 8;
  function We(e, t, n, r, i) {
    const a = this;
    a.good_length = e, a.max_lazy = t, a.nice_length = n, a.max_chain = r, a.func = i;
  }
  const Mi = 0, cn = 1, ft = 2, Ue = [
    new We(0, 0, 0, 0, Mi),
    new We(4, 4, 8, 4, cn),
    new We(4, 5, 16, 8, cn),
    new We(4, 6, 32, 32, cn),
    new We(4, 4, 16, 16, ft),
    new We(8, 16, 32, 32, ft),
    new We(8, 16, 128, 128, ft),
    new We(8, 32, 128, 256, ft),
    new We(32, 128, 258, 1024, ft),
    new We(32, 258, 258, 4096, ft)
  ], zt = [
    "need dictionary",
    "stream end",
    "",
    "",
    "stream error",
    "data error",
    "",
    "buffer error",
    "",
    ""
  ], Re = 0, Jt = 1, It = 2, Qt = 3, ca = 32, Dn = 42, en = 113, Ft = 666, Nn = 8, fa = 0, On = 1, da = 2, ee = 3, fn = 258, Te = fn + ee + 1;
  function Dr(e, t, n, r) {
    const i = e[t * 2], a = e[n * 2];
    return i < a || i == a && r[t] <= r[n];
  }
  function ua() {
    const e = this;
    let t, n, r, i, a, s, l, o, f, d, p, _, x, k, u, c, m, h, w, A, g, b, y, v, E, C, T, L, D, j, U, N, q;
    const P = new z(), te = new z(), M = new z();
    e.depth = [];
    let re, B, $, ve, fe, ie;
    e.bl_count = [], e.heap = [], U = [], N = [], q = [];
    function Ze() {
      f = 2 * a, p[x - 1] = 0;
      for (let S = 0; S < x - 1; S++)
        p[S] = 0;
      C = Ue[T].max_lazy, D = Ue[T].good_length, j = Ue[T].nice_length, E = Ue[T].max_chain, g = 0, m = 0, y = 0, h = v = ee - 1, A = 0, _ = 0;
    }
    function je() {
      let S;
      for (S = 0; S < lr; S++)
        U[S * 2] = 0;
      for (S = 0; S < Kn; S++)
        N[S * 2] = 0;
      for (S = 0; S < Xn; S++)
        q[S * 2] = 0;
      U[Rt * 2] = 1, e.opt_len = e.static_len = 0, B = $ = 0;
    }
    function Je() {
      P.dyn_tree = U, P.stat_desc = me.static_l_desc, te.dyn_tree = N, te.stat_desc = me.static_d_desc, M.dyn_tree = q, M.stat_desc = me.static_bl_desc, fe = 0, ie = 0, ve = 8, je();
    }
    e.pqdownheap = function(S, I) {
      const R = e.heap, F = R[I];
      let O = I << 1;
      for (; O <= e.heap_len && (O < e.heap_len && Dr(S, R[O + 1], R[O], e.depth) && O++, !Dr(S, F, R[O], e.depth)); )
        R[I] = R[O], I = O, O <<= 1;
      R[I] = F;
    };
    function Qe(S, I) {
      let R = -1, F, O = S[0 * 2 + 1], W = 0, Y = 7, we = 4;
      O === 0 && (Y = 138, we = 3), S[(I + 1) * 2 + 1] = 65535;
      for (let Le = 0; Le <= I; Le++)
        F = O, O = S[(Le + 1) * 2 + 1], !(++W < Y && F == O) && (W < we ? q[F * 2] += W : F !== 0 ? (F != R && q[F * 2]++, q[Tr * 2]++) : W <= 10 ? q[Cr * 2]++ : q[Rr * 2]++, W = 0, R = F, O === 0 ? (Y = 138, we = 3) : F == O ? (Y = 6, we = 3) : (Y = 7, we = 4));
    }
    function Zt() {
      let S;
      for (Qe(U, P.max_code), Qe(N, te.max_code), M.build_tree(e), S = Xn - 1; S >= 3 && q[z.bl_order[S] * 2 + 1] === 0; S--)
        ;
      return e.opt_len += 3 * (S + 1) + 5 + 5 + 4, S;
    }
    function Fe(S) {
      e.pending_buf[e.pending++] = S;
    }
    function Ye(S) {
      Fe(S & 255), Fe(S >>> 8 & 255);
    }
    function Tt(S) {
      Fe(S >> 8 & 255), Fe(S & 255 & 255);
    }
    function ae(S, I) {
      let R;
      const F = I;
      ie > Fn - F ? (R = S, fe |= R << ie & 65535, Ye(fe), fe = R >>> Fn - ie, ie += F - Fn) : (fe |= S << ie & 65535, ie += F);
    }
    function oe(S, I) {
      const R = S * 2;
      ae(I[R] & 65535, I[R + 1] & 65535);
    }
    function et(S, I) {
      let R, F = -1, O, W = S[0 * 2 + 1], Y = 0, we = 7, Le = 4;
      for (W === 0 && (we = 138, Le = 3), R = 0; R <= I; R++)
        if (O = W, W = S[(R + 1) * 2 + 1], !(++Y < we && O == W)) {
          if (Y < Le)
            do
              oe(O, q);
            while (--Y !== 0);
          else
            O !== 0 ? (O != F && (oe(O, q), Y--), oe(Tr, q), ae(Y - 3, 2)) : Y <= 10 ? (oe(Cr, q), ae(Y - 3, 3)) : (oe(Rr, q), ae(Y - 11, 7));
          Y = 0, F = O, W === 0 ? (we = 138, Le = 3) : O == W ? (we = 6, Le = 3) : (we = 7, Le = 4);
        }
    }
    function Ge(S, I, R) {
      let F;
      for (ae(S - 257, 5), ae(I - 1, 5), ae(R - 4, 4), F = 0; F < R; F++)
        ae(q[z.bl_order[F] * 2 + 1], 3);
      et(U, S - 1), et(N, I - 1);
    }
    function De() {
      ie == 16 ? (Ye(fe), fe = 0, ie = 0) : ie >= 8 && (Fe(fe & 255), fe >>>= 8, ie -= 8);
    }
    function Ne() {
      ae(On << 1, 3), oe(Rt, me.static_ltree), De(), 1 + ve + 10 - ie < 9 && (ae(On << 1, 3), oe(Rt, me.static_ltree), De()), ve = 7;
    }
    function de(S, I) {
      let R, F, O;
      if (e.dist_buf[B] = S, e.lc_buf[B] = I & 255, B++, S === 0 ? U[I * 2]++ : ($++, S--, U[(z._length_code[I] + xn + 1) * 2]++, N[z.d_code(S) * 2]++), !(B & 8191) && T > 2) {
        for (R = B * 8, F = g - m, O = 0; O < Kn; O++)
          R += N[O * 2] * (5 + z.extra_dbits[O]);
        if (R >>>= 3, $ < Math.floor(B / 2) && R < Math.floor(F / 2))
          return true;
      }
      return B == re - 1;
    }
    function qe(S, I) {
      let R, F, O = 0, W, Y;
      if (B !== 0)
        do
          R = e.dist_buf[O], F = e.lc_buf[O], O++, R === 0 ? oe(F, S) : (W = z._length_code[F], oe(W + xn + 1, S), Y = z.extra_lbits[W], Y !== 0 && (F -= z.base_length[W], ae(F, Y)), R--, W = z.d_code(R), oe(W, I), Y = z.extra_dbits[W], Y !== 0 && (R -= z.base_dist[W], ae(R, Y)));
        while (O < B);
      oe(Rt, S), ve = S[Rt * 2 + 1];
    }
    function Oe() {
      ie > 8 ? Ye(fe) : ie > 0 && Fe(fe & 255), fe = 0, ie = 0;
    }
    function Tn(S, I, R) {
      Oe(), ve = 8, R && (Ye(I), Ye(~I)), e.pending_buf.set(o.subarray(S, S + I), e.pending), e.pending += I;
    }
    function Yt(S, I, R) {
      ae((fa << 1) + (R ? 1 : 0), 3), Tn(S, I, true);
    }
    function Ct(S, I, R) {
      let F, O, W = 0;
      T > 0 ? (P.build_tree(e), te.build_tree(e), W = Zt(), F = e.opt_len + 3 + 7 >>> 3, O = e.static_len + 3 + 7 >>> 3, O <= F && (F = O)) : F = O = I + 5, I + 4 <= F && S != -1 ? Yt(S, I, R) : O == F ? (ae((On << 1) + (R ? 1 : 0), 3), qe(me.static_ltree, me.static_dtree)) : (ae((da << 1) + (R ? 1 : 0), 3), Ge(P.max_code + 1, te.max_code + 1, W + 1), qe(U, N)), je(), R && Oe();
    }
    function tt(S) {
      Ct(m >= 0 ? m : -1, g - m, S), m = g, t.flush_pending();
    }
    function Cn() {
      let S, I, R, F;
      do {
        if (F = f - y - g, F === 0 && g === 0 && y === 0)
          F = a;
        else if (F == -1)
          F--;
        else if (g >= a + a - Te) {
          o.set(o.subarray(a, a + a), 0), b -= a, g -= a, m -= a, S = x, R = S;
          do
            I = p[--R] & 65535, p[R] = I >= a ? I - a : 0;
          while (--S !== 0);
          S = a, R = S;
          do
            I = d[--R] & 65535, d[R] = I >= a ? I - a : 0;
          while (--S !== 0);
          F += a;
        }
        if (t.avail_in === 0)
          return;
        S = t.read_buf(o, g + y, F), y += S, y >= ee && (_ = o[g] & 255, _ = (_ << c ^ o[g + 1] & 255) & u);
      } while (y < Te && t.avail_in !== 0);
    }
    function Ps(S) {
      let I = 65535, R;
      for (I > r - 5 && (I = r - 5); ; ) {
        if (y <= 1) {
          if (Cn(), y === 0 && S == gt)
            return Re;
          if (y === 0)
            break;
        }
        if (g += y, y = 0, R = m + I, (g === 0 || g >= R) && (y = g - R, g = R, tt(false), t.avail_out === 0) || g - m >= a - Te && (tt(false), t.avail_out === 0))
          return Re;
      }
      return tt(S == ye), t.avail_out === 0 ? S == ye ? It : Re : S == ye ? Qt : Jt;
    }
    function wr(S) {
      let I = E, R = g, F, O, W = v;
      const Y = g > a - Te ? g - (a - Te) : 0;
      let we = j;
      const Le = l, Rn = g + fn;
      let br = o[R + W - 1], gr = o[R + W];
      v >= D && (I >>= 2), we > y && (we = y);
      do
        if (F = S, !(o[F + W] != gr || o[F + W - 1] != br || o[F] != o[R] || o[++F] != o[R + 1])) {
          R += 2, F++;
          do
            ;
          while (o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && R < Rn);
          if (O = fn - (Rn - R), R = Rn - fn, O > W) {
            if (b = S, W = O, O >= we)
              break;
            br = o[R + W - 1], gr = o[R + W];
          }
        }
      while ((S = d[S & Le] & 65535) > Y && --I !== 0);
      return W <= y ? W : y;
    }
    function Ms(S) {
      let I = 0, R;
      for (; ; ) {
        if (y < Te) {
          if (Cn(), y < Te && S == gt)
            return Re;
          if (y === 0)
            break;
        }
        if (y >= ee && (_ = (_ << c ^ o[g + (ee - 1)] & 255) & u, I = p[_] & 65535, d[g & l] = p[_], p[_] = g), I !== 0 && (g - I & 65535) <= a - Te && L != Kt && (h = wr(I)), h >= ee)
          if (R = de(g - b, h - ee), y -= h, h <= C && y >= ee) {
            h--;
            do
              g++, _ = (_ << c ^ o[g + (ee - 1)] & 255) & u, I = p[_] & 65535, d[g & l] = p[_], p[_] = g;
            while (--h !== 0);
            g++;
          } else
            g += h, h = 0, _ = o[g] & 255, _ = (_ << c ^ o[g + 1] & 255) & u;
        else
          R = de(0, o[g] & 255), y--, g++;
        if (R && (tt(false), t.avail_out === 0))
          return Re;
      }
      return tt(S == ye), t.avail_out === 0 ? S == ye ? It : Re : S == ye ? Qt : Jt;
    }
    function js(S) {
      let I = 0, R, F;
      for (; ; ) {
        if (y < Te) {
          if (Cn(), y < Te && S == gt)
            return Re;
          if (y === 0)
            break;
        }
        if (y >= ee && (_ = (_ << c ^ o[g + (ee - 1)] & 255) & u, I = p[_] & 65535, d[g & l] = p[_], p[_] = g), v = h, w = b, h = ee - 1, I !== 0 && v < C && (g - I & 65535) <= a - Te && (L != Kt && (h = wr(I)), h <= 5 && (L == Qs || h == ee && g - b > 4096) && (h = ee - 1)), v >= ee && h <= v) {
          F = g + y - ee, R = de(g - 1 - w, v - ee), y -= v - 1, v -= 2;
          do
            ++g <= F && (_ = (_ << c ^ o[g + (ee - 1)] & 255) & u, I = p[_] & 65535, d[g & l] = p[_], p[_] = g);
          while (--v !== 0);
          if (A = 0, h = ee - 1, g++, R && (tt(false), t.avail_out === 0))
            return Re;
        } else if (A !== 0) {
          if (R = de(0, o[g - 1] & 255), R && tt(false), g++, y--, t.avail_out === 0)
            return Re;
        } else
          A = 1, g++, y--;
      }
      return A !== 0 && (R = de(0, o[g - 1] & 255), A = 0), tt(S == ye), t.avail_out === 0 ? S == ye ? It : Re : S == ye ? Qt : Jt;
    }
    function qs(S) {
      return S.total_in = S.total_out = 0, S.msg = null, e.pending = 0, e.pending_out = 0, n = en, i = gt, Je(), Ze(), Pe;
    }
    e.deflateInit = function(S, I, R, F, O, W) {
      return F || (F = Nn), O || (O = la), W || (W = ea), S.msg = null, I == wn && (I = 6), O < 1 || O > oa || F != Nn || R < 9 || R > 15 || I < 0 || I > 9 || W < 0 || W > Kt ? Me : (S.dstate = e, s = R, a = 1 << s, l = a - 1, k = O + 7, x = 1 << k, u = x - 1, c = Math.floor((k + ee - 1) / ee), o = new Uint8Array(a * 2), d = [], p = [], re = 1 << O + 6, e.pending_buf = new Uint8Array(re * 4), r = re * 4, e.dist_buf = new Uint16Array(re), e.lc_buf = new Uint8Array(re), T = I, L = W, qs(S));
    }, e.deflateEnd = function() {
      return n != Dn && n != en && n != Ft ? Me : (e.lc_buf = null, e.dist_buf = null, e.pending_buf = null, p = null, d = null, o = null, e.dstate = null, n == en ? na : Pe);
    }, e.deflateParams = function(S, I, R) {
      let F = Pe;
      return I == wn && (I = 6), I < 0 || I > 9 || R < 0 || R > Kt ? Me : (Ue[T].func != Ue[I].func && S.total_in !== 0 && (F = S.deflate(Ir)), T != I && (T = I, C = Ue[T].max_lazy, D = Ue[T].good_length, j = Ue[T].nice_length, E = Ue[T].max_chain), L = R, F);
    }, e.deflateSetDictionary = function(S, I, R) {
      let F = R, O, W = 0;
      if (!I || n != Dn)
        return Me;
      if (F < ee)
        return Pe;
      for (F > a - Te && (F = a - Te, W = R - F), o.set(I.subarray(W, W + F), 0), g = F, m = F, _ = o[0] & 255, _ = (_ << c ^ o[1] & 255) & u, O = 0; O <= F - ee; O++)
        _ = (_ << c ^ o[O + (ee - 1)] & 255) & u, d[O & l] = p[_], p[_] = O;
      return Pe;
    }, e.deflate = function(S, I) {
      let R, F, O, W, Y;
      if (I > ye || I < 0)
        return Me;
      if (!S.next_out || !S.next_in && S.avail_in !== 0 || n == Ft && I != ye)
        return S.msg = zt[Xt - Me], Me;
      if (S.avail_out === 0)
        return S.msg = zt[Xt - xt], xt;
      if (t = S, W = i, i = I, n == Dn && (F = Nn + (s - 8 << 4) << 8, O = (T - 1 & 255) >> 1, O > 3 && (O = 3), F |= O << 6, g !== 0 && (F |= ca), F += 31 - F % 31, n = en, Tt(F)), e.pending !== 0) {
        if (t.flush_pending(), t.avail_out === 0)
          return i = -1, Pe;
      } else if (t.avail_in === 0 && I <= W && I != ye)
        return t.msg = zt[Xt - xt], xt;
      if (n == Ft && t.avail_in !== 0)
        return S.msg = zt[Xt - xt], xt;
      if (t.avail_in !== 0 || y !== 0 || I != gt && n != Ft) {
        switch (Y = -1, Ue[T].func) {
          case Mi:
            Y = Ps(I);
            break;
          case cn:
            Y = Ms(I);
            break;
          case ft:
            Y = js(I);
            break;
        }
        if ((Y == It || Y == Qt) && (n = Ft), Y == Re || Y == It)
          return t.avail_out === 0 && (i = -1), Pe;
        if (Y == Jt) {
          if (I == Ir)
            Ne();
          else if (Yt(0, 0, false), I == ta)
            for (R = 0; R < x; R++)
              p[R] = 0;
          if (t.flush_pending(), t.avail_out === 0)
            return i = -1, Pe;
        }
      }
      return I != ye ? Pe : Pi;
    };
  }
  function ji() {
    const e = this;
    e.next_in_index = 0, e.next_out_index = 0, e.avail_in = 0, e.total_in = 0, e.avail_out = 0, e.total_out = 0;
  }
  ji.prototype = {
    deflateInit(e, t) {
      const n = this;
      return n.dstate = new ua(), t || (t = Ut), n.dstate.deflateInit(n, e, t);
    },
    deflate(e) {
      const t = this;
      return t.dstate ? t.dstate.deflate(t, e) : Me;
    },
    deflateEnd() {
      const e = this;
      if (!e.dstate)
        return Me;
      const t = e.dstate.deflateEnd();
      return e.dstate = null, t;
    },
    deflateParams(e, t) {
      const n = this;
      return n.dstate ? n.dstate.deflateParams(n, e, t) : Me;
    },
    deflateSetDictionary(e, t) {
      const n = this;
      return n.dstate ? n.dstate.deflateSetDictionary(n, e, t) : Me;
    },
    read_buf(e, t, n) {
      const r = this;
      let i = r.avail_in;
      return i > n && (i = n), i === 0 ? 0 : (r.avail_in -= i, e.set(r.next_in.subarray(r.next_in_index, r.next_in_index + i), t), r.next_in_index += i, r.total_in += i, i);
    },
    flush_pending() {
      const e = this;
      let t = e.dstate.pending;
      t > e.avail_out && (t = e.avail_out), t !== 0 && (e.next_out.set(e.dstate.pending_buf.subarray(e.dstate.pending_out, e.dstate.pending_out + t), e.next_out_index), e.next_out_index += t, e.dstate.pending_out += t, e.total_out += t, e.avail_out -= t, e.dstate.pending -= t, e.dstate.pending === 0 && (e.dstate.pending_out = 0));
    }
  };
  function ma(e) {
    const t = this, n = new ji(), r = pa(e && e.chunkSize ? e.chunkSize : 64 * 1024), i = gt, a = new Uint8Array(r);
    let s = e ? e.level : wn;
    typeof s > "u" && (s = wn), n.deflateInit(s), n.next_out = a, t.append = function(l, o) {
      let f, d, p = 0, _ = 0, x = 0;
      const k = [];
      if (l.length) {
        n.next_in_index = 0, n.next_in = l, n.avail_in = l.length;
        do {
          if (n.next_out_index = 0, n.avail_out = r, f = n.deflate(i), f != Pe)
            throw new Error("deflating: " + n.msg);
          n.next_out_index && (n.next_out_index == r ? k.push(new Uint8Array(a)) : k.push(a.subarray(0, n.next_out_index))), x += n.next_out_index, o && n.next_in_index > 0 && n.next_in_index != p && (o(n.next_in_index), p = n.next_in_index);
        } while (n.avail_in > 0 || n.avail_out === 0);
        return k.length > 1 ? (d = new Uint8Array(x), k.forEach(function(u) {
          d.set(u, _), _ += u.length;
        })) : d = k[0] ? new Uint8Array(k[0]) : new Uint8Array(), d;
      }
    }, t.flush = function() {
      let l, o, f = 0, d = 0;
      const p = [];
      do {
        if (n.next_out_index = 0, n.avail_out = r, l = n.deflate(ye), l != Pi && l != Pe)
          throw new Error("deflating: " + n.msg);
        r - n.avail_out > 0 && p.push(a.slice(0, n.next_out_index)), d += n.next_out_index;
      } while (n.avail_in > 0 || n.avail_out === 0);
      return n.deflateEnd(), o = new Uint8Array(d), p.forEach(function(_) {
        o.set(_, f), f += _.length;
      }), o;
    };
  }
  function pa(e) {
    return e + 5 * (Math.floor(e / 16383) + 1);
  }
  const _a = 15, K = 0, Xe = 1, ha = 2, ke = -2, J = -3, Nr = -4, ze = -5, Ce = [
    0,
    1,
    3,
    7,
    15,
    31,
    63,
    127,
    255,
    511,
    1023,
    2047,
    4095,
    8191,
    16383,
    32767,
    65535
  ], qi = 1440, xa = 0, wa = 4, ba = 9, ga = 5, va = [
    96,
    7,
    256,
    0,
    8,
    80,
    0,
    8,
    16,
    84,
    8,
    115,
    82,
    7,
    31,
    0,
    8,
    112,
    0,
    8,
    48,
    0,
    9,
    192,
    80,
    7,
    10,
    0,
    8,
    96,
    0,
    8,
    32,
    0,
    9,
    160,
    0,
    8,
    0,
    0,
    8,
    128,
    0,
    8,
    64,
    0,
    9,
    224,
    80,
    7,
    6,
    0,
    8,
    88,
    0,
    8,
    24,
    0,
    9,
    144,
    83,
    7,
    59,
    0,
    8,
    120,
    0,
    8,
    56,
    0,
    9,
    208,
    81,
    7,
    17,
    0,
    8,
    104,
    0,
    8,
    40,
    0,
    9,
    176,
    0,
    8,
    8,
    0,
    8,
    136,
    0,
    8,
    72,
    0,
    9,
    240,
    80,
    7,
    4,
    0,
    8,
    84,
    0,
    8,
    20,
    85,
    8,
    227,
    83,
    7,
    43,
    0,
    8,
    116,
    0,
    8,
    52,
    0,
    9,
    200,
    81,
    7,
    13,
    0,
    8,
    100,
    0,
    8,
    36,
    0,
    9,
    168,
    0,
    8,
    4,
    0,
    8,
    132,
    0,
    8,
    68,
    0,
    9,
    232,
    80,
    7,
    8,
    0,
    8,
    92,
    0,
    8,
    28,
    0,
    9,
    152,
    84,
    7,
    83,
    0,
    8,
    124,
    0,
    8,
    60,
    0,
    9,
    216,
    82,
    7,
    23,
    0,
    8,
    108,
    0,
    8,
    44,
    0,
    9,
    184,
    0,
    8,
    12,
    0,
    8,
    140,
    0,
    8,
    76,
    0,
    9,
    248,
    80,
    7,
    3,
    0,
    8,
    82,
    0,
    8,
    18,
    85,
    8,
    163,
    83,
    7,
    35,
    0,
    8,
    114,
    0,
    8,
    50,
    0,
    9,
    196,
    81,
    7,
    11,
    0,
    8,
    98,
    0,
    8,
    34,
    0,
    9,
    164,
    0,
    8,
    2,
    0,
    8,
    130,
    0,
    8,
    66,
    0,
    9,
    228,
    80,
    7,
    7,
    0,
    8,
    90,
    0,
    8,
    26,
    0,
    9,
    148,
    84,
    7,
    67,
    0,
    8,
    122,
    0,
    8,
    58,
    0,
    9,
    212,
    82,
    7,
    19,
    0,
    8,
    106,
    0,
    8,
    42,
    0,
    9,
    180,
    0,
    8,
    10,
    0,
    8,
    138,
    0,
    8,
    74,
    0,
    9,
    244,
    80,
    7,
    5,
    0,
    8,
    86,
    0,
    8,
    22,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    118,
    0,
    8,
    54,
    0,
    9,
    204,
    81,
    7,
    15,
    0,
    8,
    102,
    0,
    8,
    38,
    0,
    9,
    172,
    0,
    8,
    6,
    0,
    8,
    134,
    0,
    8,
    70,
    0,
    9,
    236,
    80,
    7,
    9,
    0,
    8,
    94,
    0,
    8,
    30,
    0,
    9,
    156,
    84,
    7,
    99,
    0,
    8,
    126,
    0,
    8,
    62,
    0,
    9,
    220,
    82,
    7,
    27,
    0,
    8,
    110,
    0,
    8,
    46,
    0,
    9,
    188,
    0,
    8,
    14,
    0,
    8,
    142,
    0,
    8,
    78,
    0,
    9,
    252,
    96,
    7,
    256,
    0,
    8,
    81,
    0,
    8,
    17,
    85,
    8,
    131,
    82,
    7,
    31,
    0,
    8,
    113,
    0,
    8,
    49,
    0,
    9,
    194,
    80,
    7,
    10,
    0,
    8,
    97,
    0,
    8,
    33,
    0,
    9,
    162,
    0,
    8,
    1,
    0,
    8,
    129,
    0,
    8,
    65,
    0,
    9,
    226,
    80,
    7,
    6,
    0,
    8,
    89,
    0,
    8,
    25,
    0,
    9,
    146,
    83,
    7,
    59,
    0,
    8,
    121,
    0,
    8,
    57,
    0,
    9,
    210,
    81,
    7,
    17,
    0,
    8,
    105,
    0,
    8,
    41,
    0,
    9,
    178,
    0,
    8,
    9,
    0,
    8,
    137,
    0,
    8,
    73,
    0,
    9,
    242,
    80,
    7,
    4,
    0,
    8,
    85,
    0,
    8,
    21,
    80,
    8,
    258,
    83,
    7,
    43,
    0,
    8,
    117,
    0,
    8,
    53,
    0,
    9,
    202,
    81,
    7,
    13,
    0,
    8,
    101,
    0,
    8,
    37,
    0,
    9,
    170,
    0,
    8,
    5,
    0,
    8,
    133,
    0,
    8,
    69,
    0,
    9,
    234,
    80,
    7,
    8,
    0,
    8,
    93,
    0,
    8,
    29,
    0,
    9,
    154,
    84,
    7,
    83,
    0,
    8,
    125,
    0,
    8,
    61,
    0,
    9,
    218,
    82,
    7,
    23,
    0,
    8,
    109,
    0,
    8,
    45,
    0,
    9,
    186,
    0,
    8,
    13,
    0,
    8,
    141,
    0,
    8,
    77,
    0,
    9,
    250,
    80,
    7,
    3,
    0,
    8,
    83,
    0,
    8,
    19,
    85,
    8,
    195,
    83,
    7,
    35,
    0,
    8,
    115,
    0,
    8,
    51,
    0,
    9,
    198,
    81,
    7,
    11,
    0,
    8,
    99,
    0,
    8,
    35,
    0,
    9,
    166,
    0,
    8,
    3,
    0,
    8,
    131,
    0,
    8,
    67,
    0,
    9,
    230,
    80,
    7,
    7,
    0,
    8,
    91,
    0,
    8,
    27,
    0,
    9,
    150,
    84,
    7,
    67,
    0,
    8,
    123,
    0,
    8,
    59,
    0,
    9,
    214,
    82,
    7,
    19,
    0,
    8,
    107,
    0,
    8,
    43,
    0,
    9,
    182,
    0,
    8,
    11,
    0,
    8,
    139,
    0,
    8,
    75,
    0,
    9,
    246,
    80,
    7,
    5,
    0,
    8,
    87,
    0,
    8,
    23,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    119,
    0,
    8,
    55,
    0,
    9,
    206,
    81,
    7,
    15,
    0,
    8,
    103,
    0,
    8,
    39,
    0,
    9,
    174,
    0,
    8,
    7,
    0,
    8,
    135,
    0,
    8,
    71,
    0,
    9,
    238,
    80,
    7,
    9,
    0,
    8,
    95,
    0,
    8,
    31,
    0,
    9,
    158,
    84,
    7,
    99,
    0,
    8,
    127,
    0,
    8,
    63,
    0,
    9,
    222,
    82,
    7,
    27,
    0,
    8,
    111,
    0,
    8,
    47,
    0,
    9,
    190,
    0,
    8,
    15,
    0,
    8,
    143,
    0,
    8,
    79,
    0,
    9,
    254,
    96,
    7,
    256,
    0,
    8,
    80,
    0,
    8,
    16,
    84,
    8,
    115,
    82,
    7,
    31,
    0,
    8,
    112,
    0,
    8,
    48,
    0,
    9,
    193,
    80,
    7,
    10,
    0,
    8,
    96,
    0,
    8,
    32,
    0,
    9,
    161,
    0,
    8,
    0,
    0,
    8,
    128,
    0,
    8,
    64,
    0,
    9,
    225,
    80,
    7,
    6,
    0,
    8,
    88,
    0,
    8,
    24,
    0,
    9,
    145,
    83,
    7,
    59,
    0,
    8,
    120,
    0,
    8,
    56,
    0,
    9,
    209,
    81,
    7,
    17,
    0,
    8,
    104,
    0,
    8,
    40,
    0,
    9,
    177,
    0,
    8,
    8,
    0,
    8,
    136,
    0,
    8,
    72,
    0,
    9,
    241,
    80,
    7,
    4,
    0,
    8,
    84,
    0,
    8,
    20,
    85,
    8,
    227,
    83,
    7,
    43,
    0,
    8,
    116,
    0,
    8,
    52,
    0,
    9,
    201,
    81,
    7,
    13,
    0,
    8,
    100,
    0,
    8,
    36,
    0,
    9,
    169,
    0,
    8,
    4,
    0,
    8,
    132,
    0,
    8,
    68,
    0,
    9,
    233,
    80,
    7,
    8,
    0,
    8,
    92,
    0,
    8,
    28,
    0,
    9,
    153,
    84,
    7,
    83,
    0,
    8,
    124,
    0,
    8,
    60,
    0,
    9,
    217,
    82,
    7,
    23,
    0,
    8,
    108,
    0,
    8,
    44,
    0,
    9,
    185,
    0,
    8,
    12,
    0,
    8,
    140,
    0,
    8,
    76,
    0,
    9,
    249,
    80,
    7,
    3,
    0,
    8,
    82,
    0,
    8,
    18,
    85,
    8,
    163,
    83,
    7,
    35,
    0,
    8,
    114,
    0,
    8,
    50,
    0,
    9,
    197,
    81,
    7,
    11,
    0,
    8,
    98,
    0,
    8,
    34,
    0,
    9,
    165,
    0,
    8,
    2,
    0,
    8,
    130,
    0,
    8,
    66,
    0,
    9,
    229,
    80,
    7,
    7,
    0,
    8,
    90,
    0,
    8,
    26,
    0,
    9,
    149,
    84,
    7,
    67,
    0,
    8,
    122,
    0,
    8,
    58,
    0,
    9,
    213,
    82,
    7,
    19,
    0,
    8,
    106,
    0,
    8,
    42,
    0,
    9,
    181,
    0,
    8,
    10,
    0,
    8,
    138,
    0,
    8,
    74,
    0,
    9,
    245,
    80,
    7,
    5,
    0,
    8,
    86,
    0,
    8,
    22,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    118,
    0,
    8,
    54,
    0,
    9,
    205,
    81,
    7,
    15,
    0,
    8,
    102,
    0,
    8,
    38,
    0,
    9,
    173,
    0,
    8,
    6,
    0,
    8,
    134,
    0,
    8,
    70,
    0,
    9,
    237,
    80,
    7,
    9,
    0,
    8,
    94,
    0,
    8,
    30,
    0,
    9,
    157,
    84,
    7,
    99,
    0,
    8,
    126,
    0,
    8,
    62,
    0,
    9,
    221,
    82,
    7,
    27,
    0,
    8,
    110,
    0,
    8,
    46,
    0,
    9,
    189,
    0,
    8,
    14,
    0,
    8,
    142,
    0,
    8,
    78,
    0,
    9,
    253,
    96,
    7,
    256,
    0,
    8,
    81,
    0,
    8,
    17,
    85,
    8,
    131,
    82,
    7,
    31,
    0,
    8,
    113,
    0,
    8,
    49,
    0,
    9,
    195,
    80,
    7,
    10,
    0,
    8,
    97,
    0,
    8,
    33,
    0,
    9,
    163,
    0,
    8,
    1,
    0,
    8,
    129,
    0,
    8,
    65,
    0,
    9,
    227,
    80,
    7,
    6,
    0,
    8,
    89,
    0,
    8,
    25,
    0,
    9,
    147,
    83,
    7,
    59,
    0,
    8,
    121,
    0,
    8,
    57,
    0,
    9,
    211,
    81,
    7,
    17,
    0,
    8,
    105,
    0,
    8,
    41,
    0,
    9,
    179,
    0,
    8,
    9,
    0,
    8,
    137,
    0,
    8,
    73,
    0,
    9,
    243,
    80,
    7,
    4,
    0,
    8,
    85,
    0,
    8,
    21,
    80,
    8,
    258,
    83,
    7,
    43,
    0,
    8,
    117,
    0,
    8,
    53,
    0,
    9,
    203,
    81,
    7,
    13,
    0,
    8,
    101,
    0,
    8,
    37,
    0,
    9,
    171,
    0,
    8,
    5,
    0,
    8,
    133,
    0,
    8,
    69,
    0,
    9,
    235,
    80,
    7,
    8,
    0,
    8,
    93,
    0,
    8,
    29,
    0,
    9,
    155,
    84,
    7,
    83,
    0,
    8,
    125,
    0,
    8,
    61,
    0,
    9,
    219,
    82,
    7,
    23,
    0,
    8,
    109,
    0,
    8,
    45,
    0,
    9,
    187,
    0,
    8,
    13,
    0,
    8,
    141,
    0,
    8,
    77,
    0,
    9,
    251,
    80,
    7,
    3,
    0,
    8,
    83,
    0,
    8,
    19,
    85,
    8,
    195,
    83,
    7,
    35,
    0,
    8,
    115,
    0,
    8,
    51,
    0,
    9,
    199,
    81,
    7,
    11,
    0,
    8,
    99,
    0,
    8,
    35,
    0,
    9,
    167,
    0,
    8,
    3,
    0,
    8,
    131,
    0,
    8,
    67,
    0,
    9,
    231,
    80,
    7,
    7,
    0,
    8,
    91,
    0,
    8,
    27,
    0,
    9,
    151,
    84,
    7,
    67,
    0,
    8,
    123,
    0,
    8,
    59,
    0,
    9,
    215,
    82,
    7,
    19,
    0,
    8,
    107,
    0,
    8,
    43,
    0,
    9,
    183,
    0,
    8,
    11,
    0,
    8,
    139,
    0,
    8,
    75,
    0,
    9,
    247,
    80,
    7,
    5,
    0,
    8,
    87,
    0,
    8,
    23,
    192,
    8,
    0,
    83,
    7,
    51,
    0,
    8,
    119,
    0,
    8,
    55,
    0,
    9,
    207,
    81,
    7,
    15,
    0,
    8,
    103,
    0,
    8,
    39,
    0,
    9,
    175,
    0,
    8,
    7,
    0,
    8,
    135,
    0,
    8,
    71,
    0,
    9,
    239,
    80,
    7,
    9,
    0,
    8,
    95,
    0,
    8,
    31,
    0,
    9,
    159,
    84,
    7,
    99,
    0,
    8,
    127,
    0,
    8,
    63,
    0,
    9,
    223,
    82,
    7,
    27,
    0,
    8,
    111,
    0,
    8,
    47,
    0,
    9,
    191,
    0,
    8,
    15,
    0,
    8,
    143,
    0,
    8,
    79,
    0,
    9,
    255
  ], ya = [
    80,
    5,
    1,
    87,
    5,
    257,
    83,
    5,
    17,
    91,
    5,
    4097,
    81,
    5,
    5,
    89,
    5,
    1025,
    85,
    5,
    65,
    93,
    5,
    16385,
    80,
    5,
    3,
    88,
    5,
    513,
    84,
    5,
    33,
    92,
    5,
    8193,
    82,
    5,
    9,
    90,
    5,
    2049,
    86,
    5,
    129,
    192,
    5,
    24577,
    80,
    5,
    2,
    87,
    5,
    385,
    83,
    5,
    25,
    91,
    5,
    6145,
    81,
    5,
    7,
    89,
    5,
    1537,
    85,
    5,
    97,
    93,
    5,
    24577,
    80,
    5,
    4,
    88,
    5,
    769,
    84,
    5,
    49,
    92,
    5,
    12289,
    82,
    5,
    13,
    90,
    5,
    3073,
    86,
    5,
    193,
    192,
    5,
    24577
  ], ka = [
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    13,
    15,
    17,
    19,
    23,
    27,
    31,
    35,
    43,
    51,
    59,
    67,
    83,
    99,
    115,
    131,
    163,
    195,
    227,
    258,
    0,
    0
  ], Sa = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    0,
    112,
    112
  ], Ea = [
    1,
    2,
    3,
    4,
    5,
    7,
    9,
    13,
    17,
    25,
    33,
    49,
    65,
    97,
    129,
    193,
    257,
    385,
    513,
    769,
    1025,
    1537,
    2049,
    3073,
    4097,
    6145,
    8193,
    12289,
    16385,
    24577
  ], Aa = [
    0,
    0,
    0,
    0,
    1,
    1,
    2,
    2,
    3,
    3,
    4,
    4,
    5,
    5,
    6,
    6,
    7,
    7,
    8,
    8,
    9,
    9,
    10,
    10,
    11,
    11,
    12,
    12,
    13,
    13
  ], nt = 15;
  function zn() {
    const e = this;
    let t, n, r, i, a, s;
    function l(f, d, p, _, x, k, u, c, m, h, w) {
      let A, g, b, y, v, E, C, T, L, D, j, U, N, q, P;
      D = 0, v = p;
      do
        r[f[d + D]]++, D++, v--;
      while (v !== 0);
      if (r[0] == p)
        return u[0] = -1, c[0] = 0, K;
      for (T = c[0], E = 1; E <= nt && r[E] === 0; E++)
        ;
      for (C = E, T < E && (T = E), v = nt; v !== 0 && r[v] === 0; v--)
        ;
      for (b = v, T > v && (T = v), c[0] = T, q = 1 << E; E < v; E++, q <<= 1)
        if ((q -= r[E]) < 0)
          return J;
      if ((q -= r[v]) < 0)
        return J;
      for (r[v] += q, s[1] = E = 0, D = 1, N = 2; --v !== 0; )
        s[N] = E += r[D], N++, D++;
      v = 0, D = 0;
      do
        (E = f[d + D]) !== 0 && (w[s[E]++] = v), D++;
      while (++v < p);
      for (p = s[b], s[0] = v = 0, D = 0, y = -1, U = -T, a[0] = 0, j = 0, P = 0; C <= b; C++)
        for (A = r[C]; A-- !== 0; ) {
          for (; C > U + T; ) {
            if (y++, U += T, P = b - U, P = P > T ? T : P, (g = 1 << (E = C - U)) > A + 1 && (g -= A + 1, N = C, E < P))
              for (; ++E < P && !((g <<= 1) <= r[++N]); )
                g -= r[N];
            if (P = 1 << E, h[0] + P > qi)
              return J;
            a[y] = j = h[0], h[0] += P, y !== 0 ? (s[y] = v, i[0] = E, i[1] = T, E = v >>> U - T, i[2] = j - a[y - 1] - E, m.set(i, (a[y - 1] + E) * 3)) : u[0] = j;
          }
          for (i[1] = C - U, D >= p ? i[0] = 128 + 64 : w[D] < _ ? (i[0] = w[D] < 256 ? 0 : 32 + 64, i[2] = w[D++]) : (i[0] = k[w[D] - _] + 16 + 64, i[2] = x[w[D++] - _]), g = 1 << C - U, E = v >>> U; E < P; E += g)
            m.set(i, (j + E) * 3);
          for (E = 1 << C - 1; v & E; E >>>= 1)
            v ^= E;
          for (v ^= E, L = (1 << U) - 1; (v & L) != s[y]; )
            y--, U -= T, L = (1 << U) - 1;
        }
      return q !== 0 && b != 1 ? ze : K;
    }
    function o(f) {
      let d;
      for (t || (t = [], n = [], r = new Int32Array(nt + 1), i = [], a = new Int32Array(nt), s = new Int32Array(nt + 1)), n.length < f && (n = []), d = 0; d < f; d++)
        n[d] = 0;
      for (d = 0; d < nt + 1; d++)
        r[d] = 0;
      for (d = 0; d < 3; d++)
        i[d] = 0;
      a.set(r.subarray(0, nt), 0), s.set(r.subarray(0, nt + 1), 0);
    }
    e.inflate_trees_bits = function(f, d, p, _, x) {
      let k;
      return o(19), t[0] = 0, k = l(f, 0, 19, 19, null, null, p, d, _, t, n), k == J ? x.msg = "oversubscribed dynamic bit lengths tree" : (k == ze || d[0] === 0) && (x.msg = "incomplete dynamic bit lengths tree", k = J), k;
    }, e.inflate_trees_dynamic = function(f, d, p, _, x, k, u, c, m) {
      let h;
      return o(288), t[0] = 0, h = l(p, 0, f, 257, ka, Sa, k, _, c, t, n), h != K || _[0] === 0 ? (h == J ? m.msg = "oversubscribed literal/length tree" : h != Nr && (m.msg = "incomplete literal/length tree", h = J), h) : (o(288), h = l(p, f, d, 0, Ea, Aa, u, x, c, t, n), h != K || x[0] === 0 && f > 257 ? (h == J ? m.msg = "oversubscribed distance tree" : h == ze ? (m.msg = "incomplete distance tree", h = J) : h != Nr && (m.msg = "empty distance tree with lengths", h = J), h) : K);
    };
  }
  zn.inflate_trees_fixed = function(e, t, n, r) {
    return e[0] = ba, t[0] = ga, n[0] = va, r[0] = ya, K;
  };
  const tn = 0, Or = 1, Lr = 2, Ur = 3, Pr = 4, Mr = 5, jr = 6, Ln = 7, qr = 8, nn = 9;
  function Ta() {
    const e = this;
    let t, n = 0, r, i = 0, a = 0, s = 0, l = 0, o = 0, f = 0, d = 0, p, _ = 0, x, k = 0;
    function u(c, m, h, w, A, g, b, y) {
      let v, E, C, T, L, D, j, U, N, q, P, te, M, re, B, $;
      j = y.next_in_index, U = y.avail_in, L = b.bitb, D = b.bitk, N = b.write, q = N < b.read ? b.read - N - 1 : b.end - N, P = Ce[c], te = Ce[m];
      do {
        for (; D < 20; )
          U--, L |= (y.read_byte(j++) & 255) << D, D += 8;
        if (v = L & P, E = h, C = w, $ = (C + v) * 3, (T = E[$]) === 0) {
          L >>= E[$ + 1], D -= E[$ + 1], b.win[N++] = E[$ + 2], q--;
          continue;
        }
        do {
          if (L >>= E[$ + 1], D -= E[$ + 1], T & 16) {
            for (T &= 15, M = E[$ + 2] + (L & Ce[T]), L >>= T, D -= T; D < 15; )
              U--, L |= (y.read_byte(j++) & 255) << D, D += 8;
            v = L & te, E = A, C = g, $ = (C + v) * 3, T = E[$];
            do
              if (L >>= E[$ + 1], D -= E[$ + 1], T & 16) {
                for (T &= 15; D < T; )
                  U--, L |= (y.read_byte(j++) & 255) << D, D += 8;
                if (re = E[$ + 2] + (L & Ce[T]), L >>= T, D -= T, q -= M, N >= re)
                  B = N - re, N - B > 0 && 2 > N - B ? (b.win[N++] = b.win[B++], b.win[N++] = b.win[B++], M -= 2) : (b.win.set(b.win.subarray(B, B + 2), N), N += 2, B += 2, M -= 2);
                else {
                  B = N - re;
                  do
                    B += b.end;
                  while (B < 0);
                  if (T = b.end - B, M > T) {
                    if (M -= T, N - B > 0 && T > N - B)
                      do
                        b.win[N++] = b.win[B++];
                      while (--T !== 0);
                    else
                      b.win.set(b.win.subarray(B, B + T), N), N += T, B += T, T = 0;
                    B = 0;
                  }
                }
                if (N - B > 0 && M > N - B)
                  do
                    b.win[N++] = b.win[B++];
                  while (--M !== 0);
                else
                  b.win.set(b.win.subarray(B, B + M), N), N += M, B += M, M = 0;
                break;
              } else if (!(T & 64))
                v += E[$ + 2], v += L & Ce[T], $ = (C + v) * 3, T = E[$];
              else
                return y.msg = "invalid distance code", M = y.avail_in - U, M = D >> 3 < M ? D >> 3 : M, U += M, j -= M, D -= M << 3, b.bitb = L, b.bitk = D, y.avail_in = U, y.total_in += j - y.next_in_index, y.next_in_index = j, b.write = N, J;
            while (true);
            break;
          }
          if (T & 64)
            return T & 32 ? (M = y.avail_in - U, M = D >> 3 < M ? D >> 3 : M, U += M, j -= M, D -= M << 3, b.bitb = L, b.bitk = D, y.avail_in = U, y.total_in += j - y.next_in_index, y.next_in_index = j, b.write = N, Xe) : (y.msg = "invalid literal/length code", M = y.avail_in - U, M = D >> 3 < M ? D >> 3 : M, U += M, j -= M, D -= M << 3, b.bitb = L, b.bitk = D, y.avail_in = U, y.total_in += j - y.next_in_index, y.next_in_index = j, b.write = N, J);
          if (v += E[$ + 2], v += L & Ce[T], $ = (C + v) * 3, (T = E[$]) === 0) {
            L >>= E[$ + 1], D -= E[$ + 1], b.win[N++] = E[$ + 2], q--;
            break;
          }
        } while (true);
      } while (q >= 258 && U >= 10);
      return M = y.avail_in - U, M = D >> 3 < M ? D >> 3 : M, U += M, j -= M, D -= M << 3, b.bitb = L, b.bitk = D, y.avail_in = U, y.total_in += j - y.next_in_index, y.next_in_index = j, b.write = N, K;
    }
    e.init = function(c, m, h, w, A, g) {
      t = tn, f = c, d = m, p = h, _ = w, x = A, k = g, r = null;
    }, e.proc = function(c, m, h) {
      let w, A, g, b = 0, y = 0, v = 0, E, C, T, L;
      for (v = m.next_in_index, E = m.avail_in, b = c.bitb, y = c.bitk, C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C; ; )
        switch (t) {
          case tn:
            if (T >= 258 && E >= 10 && (c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, h = u(f, d, p, _, x, k, c, m), v = m.next_in_index, E = m.avail_in, b = c.bitb, y = c.bitk, C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C, h != K)) {
              t = h == Xe ? Ln : nn;
              break;
            }
            a = f, r = p, i = _, t = Or;
          case Or:
            for (w = a; y < w; ) {
              if (E !== 0)
                h = K;
              else
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              E--, b |= (m.read_byte(v++) & 255) << y, y += 8;
            }
            if (A = (i + (b & Ce[w])) * 3, b >>>= r[A + 1], y -= r[A + 1], g = r[A], g === 0) {
              s = r[A + 2], t = jr;
              break;
            }
            if (g & 16) {
              l = g & 15, n = r[A + 2], t = Lr;
              break;
            }
            if (!(g & 64)) {
              a = g, i = A / 3 + r[A + 2];
              break;
            }
            if (g & 32) {
              t = Ln;
              break;
            }
            return t = nn, m.msg = "invalid literal/length code", h = J, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
          case Lr:
            for (w = l; y < w; ) {
              if (E !== 0)
                h = K;
              else
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              E--, b |= (m.read_byte(v++) & 255) << y, y += 8;
            }
            n += b & Ce[w], b >>= w, y -= w, a = d, r = x, i = k, t = Ur;
          case Ur:
            for (w = a; y < w; ) {
              if (E !== 0)
                h = K;
              else
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              E--, b |= (m.read_byte(v++) & 255) << y, y += 8;
            }
            if (A = (i + (b & Ce[w])) * 3, b >>= r[A + 1], y -= r[A + 1], g = r[A], g & 16) {
              l = g & 15, o = r[A + 2], t = Pr;
              break;
            }
            if (!(g & 64)) {
              a = g, i = A / 3 + r[A + 2];
              break;
            }
            return t = nn, m.msg = "invalid distance code", h = J, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
          case Pr:
            for (w = l; y < w; ) {
              if (E !== 0)
                h = K;
              else
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              E--, b |= (m.read_byte(v++) & 255) << y, y += 8;
            }
            o += b & Ce[w], b >>= w, y -= w, t = Mr;
          case Mr:
            for (L = C - o; L < 0; )
              L += c.end;
            for (; n !== 0; ) {
              if (T === 0 && (C == c.end && c.read !== 0 && (C = 0, T = C < c.read ? c.read - C - 1 : c.end - C), T === 0 && (c.write = C, h = c.inflate_flush(m, h), C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C, C == c.end && c.read !== 0 && (C = 0, T = C < c.read ? c.read - C - 1 : c.end - C), T === 0)))
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              c.win[C++] = c.win[L++], T--, L == c.end && (L = 0), n--;
            }
            t = tn;
            break;
          case jr:
            if (T === 0 && (C == c.end && c.read !== 0 && (C = 0, T = C < c.read ? c.read - C - 1 : c.end - C), T === 0 && (c.write = C, h = c.inflate_flush(m, h), C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C, C == c.end && c.read !== 0 && (C = 0, T = C < c.read ? c.read - C - 1 : c.end - C), T === 0)))
              return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
            h = K, c.win[C++] = s, T--, t = tn;
            break;
          case Ln:
            if (y > 7 && (y -= 8, E++, v--), c.write = C, h = c.inflate_flush(m, h), C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C, c.read != c.write)
              return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
            t = qr;
          case qr:
            return h = Xe, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
          case nn:
            return h = J, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
          default:
            return h = ke, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
        }
    }, e.free = function() {
    };
  }
  const Wr = [
    16,
    17,
    18,
    0,
    8,
    7,
    9,
    6,
    10,
    5,
    11,
    4,
    12,
    3,
    13,
    2,
    14,
    1,
    15
  ], wt = 0, Un = 1, Br = 2, $r = 3, Hr = 4, Vr = 5, rn = 6, sn = 7, Zr = 8, ct = 9;
  function Ca(e, t) {
    const n = this;
    let r = wt, i = 0, a = 0, s = 0, l;
    const o = [
      0
    ], f = [
      0
    ], d = new Ta();
    let p = 0, _ = new Int32Array(qi * 3);
    const x = 0, k = new zn();
    n.bitk = 0, n.bitb = 0, n.win = new Uint8Array(t), n.end = t, n.read = 0, n.write = 0, n.reset = function(u, c) {
      c && (c[0] = x), r == rn && d.free(u), r = wt, n.bitk = 0, n.bitb = 0, n.read = n.write = 0;
    }, n.reset(e, null), n.inflate_flush = function(u, c) {
      let m, h, w;
      return h = u.next_out_index, w = n.read, m = (w <= n.write ? n.write : n.end) - w, m > u.avail_out && (m = u.avail_out), m !== 0 && c == ze && (c = K), u.avail_out -= m, u.total_out += m, u.next_out.set(n.win.subarray(w, w + m), h), h += m, w += m, w == n.end && (w = 0, n.write == n.end && (n.write = 0), m = n.write - w, m > u.avail_out && (m = u.avail_out), m !== 0 && c == ze && (c = K), u.avail_out -= m, u.total_out += m, u.next_out.set(n.win.subarray(w, w + m), h), h += m, w += m), u.next_out_index = h, n.read = w, c;
    }, n.proc = function(u, c) {
      let m, h, w, A, g, b, y, v;
      for (A = u.next_in_index, g = u.avail_in, h = n.bitb, w = n.bitk, b = n.write, y = b < n.read ? n.read - b - 1 : n.end - b; ; ) {
        let E, C, T, L, D, j, U, N;
        switch (r) {
          case wt:
            for (; w < 3; ) {
              if (g !== 0)
                c = K;
              else
                return n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
              g--, h |= (u.read_byte(A++) & 255) << w, w += 8;
            }
            switch (m = h & 7, p = m & 1, m >>> 1) {
              case 0:
                h >>>= 3, w -= 3, m = w & 7, h >>>= m, w -= m, r = Un;
                break;
              case 1:
                E = [], C = [], T = [
                  []
                ], L = [
                  []
                ], zn.inflate_trees_fixed(E, C, T, L), d.init(E[0], C[0], T[0], 0, L[0], 0), h >>>= 3, w -= 3, r = rn;
                break;
              case 2:
                h >>>= 3, w -= 3, r = $r;
                break;
              case 3:
                return h >>>= 3, w -= 3, r = ct, u.msg = "invalid block type", c = J, n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            }
            break;
          case Un:
            for (; w < 32; ) {
              if (g !== 0)
                c = K;
              else
                return n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
              g--, h |= (u.read_byte(A++) & 255) << w, w += 8;
            }
            if ((~h >>> 16 & 65535) != (h & 65535))
              return r = ct, u.msg = "invalid stored block lengths", c = J, n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            i = h & 65535, h = w = 0, r = i !== 0 ? Br : p !== 0 ? sn : wt;
            break;
          case Br:
            if (g === 0 || y === 0 && (b == n.end && n.read !== 0 && (b = 0, y = b < n.read ? n.read - b - 1 : n.end - b), y === 0 && (n.write = b, c = n.inflate_flush(u, c), b = n.write, y = b < n.read ? n.read - b - 1 : n.end - b, b == n.end && n.read !== 0 && (b = 0, y = b < n.read ? n.read - b - 1 : n.end - b), y === 0)))
              return n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            if (c = K, m = i, m > g && (m = g), m > y && (m = y), n.win.set(u.read_buf(A, m), b), A += m, g -= m, b += m, y -= m, (i -= m) !== 0)
              break;
            r = p !== 0 ? sn : wt;
            break;
          case $r:
            for (; w < 14; ) {
              if (g !== 0)
                c = K;
              else
                return n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
              g--, h |= (u.read_byte(A++) & 255) << w, w += 8;
            }
            if (a = m = h & 16383, (m & 31) > 29 || (m >> 5 & 31) > 29)
              return r = ct, u.msg = "too many length or distance symbols", c = J, n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            if (m = 258 + (m & 31) + (m >> 5 & 31), !l || l.length < m)
              l = [];
            else
              for (v = 0; v < m; v++)
                l[v] = 0;
            h >>>= 14, w -= 14, s = 0, r = Hr;
          case Hr:
            for (; s < 4 + (a >>> 10); ) {
              for (; w < 3; ) {
                if (g !== 0)
                  c = K;
                else
                  return n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
                g--, h |= (u.read_byte(A++) & 255) << w, w += 8;
              }
              l[Wr[s++]] = h & 7, h >>>= 3, w -= 3;
            }
            for (; s < 19; )
              l[Wr[s++]] = 0;
            if (o[0] = 7, m = k.inflate_trees_bits(l, o, f, _, u), m != K)
              return c = m, c == J && (l = null, r = ct), n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            s = 0, r = Vr;
          case Vr:
            for (; m = a, !(s >= 258 + (m & 31) + (m >> 5 & 31)); ) {
              let q, P;
              for (m = o[0]; w < m; ) {
                if (g !== 0)
                  c = K;
                else
                  return n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
                g--, h |= (u.read_byte(A++) & 255) << w, w += 8;
              }
              if (m = _[(f[0] + (h & Ce[m])) * 3 + 1], P = _[(f[0] + (h & Ce[m])) * 3 + 2], P < 16)
                h >>>= m, w -= m, l[s++] = P;
              else {
                for (v = P == 18 ? 7 : P - 14, q = P == 18 ? 11 : 3; w < m + v; ) {
                  if (g !== 0)
                    c = K;
                  else
                    return n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
                  g--, h |= (u.read_byte(A++) & 255) << w, w += 8;
                }
                if (h >>>= m, w -= m, q += h & Ce[v], h >>>= v, w -= v, v = s, m = a, v + q > 258 + (m & 31) + (m >> 5 & 31) || P == 16 && v < 1)
                  return l = null, r = ct, u.msg = "invalid bit length repeat", c = J, n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
                P = P == 16 ? l[v - 1] : 0;
                do
                  l[v++] = P;
                while (--q !== 0);
                s = v;
              }
            }
            if (f[0] = -1, D = [], j = [], U = [], N = [], D[0] = 9, j[0] = 6, m = a, m = k.inflate_trees_dynamic(257 + (m & 31), 1 + (m >> 5 & 31), l, D, j, U, N, _, u), m != K)
              return m == J && (l = null, r = ct), c = m, n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            d.init(D[0], j[0], _, U[0], _, N[0]), r = rn;
          case rn:
            if (n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, (c = d.proc(n, u, c)) != Xe)
              return n.inflate_flush(u, c);
            if (c = K, d.free(u), A = u.next_in_index, g = u.avail_in, h = n.bitb, w = n.bitk, b = n.write, y = b < n.read ? n.read - b - 1 : n.end - b, p === 0) {
              r = wt;
              break;
            }
            r = sn;
          case sn:
            if (n.write = b, c = n.inflate_flush(u, c), b = n.write, y = b < n.read ? n.read - b - 1 : n.end - b, n.read != n.write)
              return n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            r = Zr;
          case Zr:
            return c = Xe, n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
          case ct:
            return c = J, n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
          default:
            return c = ke, n.bitb = h, n.bitk = w, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
        }
      }
    }, n.free = function(u) {
      n.reset(u, null), n.win = null, _ = null;
    }, n.set_dictionary = function(u, c, m) {
      n.win.set(u.subarray(c, c + m), 0), n.read = n.write = m;
    }, n.sync_point = function() {
      return r == Un ? 1 : 0;
    };
  }
  const Ra = 32, Ia = 8, Fa = 0, Yr = 1, Gr = 2, Kr = 3, Xr = 4, zr = 5, Pn = 6, Dt = 7, Jr = 12, rt = 13, Da = [
    0,
    0,
    255,
    255
  ];
  function Na() {
    const e = this;
    e.mode = 0, e.method = 0, e.was = [
      0
    ], e.need = 0, e.marker = 0, e.wbits = 0;
    function t(n) {
      return !n || !n.istate ? ke : (n.total_in = n.total_out = 0, n.msg = null, n.istate.mode = Dt, n.istate.blocks.reset(n, null), K);
    }
    e.inflateEnd = function(n) {
      return e.blocks && e.blocks.free(n), e.blocks = null, K;
    }, e.inflateInit = function(n, r) {
      return n.msg = null, e.blocks = null, r < 8 || r > 15 ? (e.inflateEnd(n), ke) : (e.wbits = r, n.istate.blocks = new Ca(n, 1 << r), t(n), K);
    }, e.inflate = function(n, r) {
      let i, a;
      if (!n || !n.istate || !n.next_in)
        return ke;
      const s = n.istate;
      for (r = r == wa ? ze : K, i = ze; ; )
        switch (s.mode) {
          case Fa:
            if (n.avail_in === 0)
              return i;
            if (i = r, n.avail_in--, n.total_in++, ((s.method = n.read_byte(n.next_in_index++)) & 15) != Ia) {
              s.mode = rt, n.msg = "unknown compression method", s.marker = 5;
              break;
            }
            if ((s.method >> 4) + 8 > s.wbits) {
              s.mode = rt, n.msg = "invalid win size", s.marker = 5;
              break;
            }
            s.mode = Yr;
          case Yr:
            if (n.avail_in === 0)
              return i;
            if (i = r, n.avail_in--, n.total_in++, a = n.read_byte(n.next_in_index++) & 255, ((s.method << 8) + a) % 31 !== 0) {
              s.mode = rt, n.msg = "incorrect header check", s.marker = 5;
              break;
            }
            if (!(a & Ra)) {
              s.mode = Dt;
              break;
            }
            s.mode = Gr;
          case Gr:
            if (n.avail_in === 0)
              return i;
            i = r, n.avail_in--, n.total_in++, s.need = (n.read_byte(n.next_in_index++) & 255) << 24 & 4278190080, s.mode = Kr;
          case Kr:
            if (n.avail_in === 0)
              return i;
            i = r, n.avail_in--, n.total_in++, s.need += (n.read_byte(n.next_in_index++) & 255) << 16 & 16711680, s.mode = Xr;
          case Xr:
            if (n.avail_in === 0)
              return i;
            i = r, n.avail_in--, n.total_in++, s.need += (n.read_byte(n.next_in_index++) & 255) << 8 & 65280, s.mode = zr;
          case zr:
            return n.avail_in === 0 ? i : (i = r, n.avail_in--, n.total_in++, s.need += n.read_byte(n.next_in_index++) & 255, s.mode = Pn, ha);
          case Pn:
            return s.mode = rt, n.msg = "need dictionary", s.marker = 0, ke;
          case Dt:
            if (i = s.blocks.proc(n, i), i == J) {
              s.mode = rt, s.marker = 0;
              break;
            }
            if (i == K && (i = r), i != Xe)
              return i;
            i = r, s.blocks.reset(n, s.was), s.mode = Jr;
          case Jr:
            return n.avail_in = 0, Xe;
          case rt:
            return J;
          default:
            return ke;
        }
    }, e.inflateSetDictionary = function(n, r, i) {
      let a = 0, s = i;
      if (!n || !n.istate || n.istate.mode != Pn)
        return ke;
      const l = n.istate;
      return s >= 1 << l.wbits && (s = (1 << l.wbits) - 1, a = i - s), l.blocks.set_dictionary(r, a, s), l.mode = Dt, K;
    }, e.inflateSync = function(n) {
      let r, i, a, s, l;
      if (!n || !n.istate)
        return ke;
      const o = n.istate;
      if (o.mode != rt && (o.mode = rt, o.marker = 0), (r = n.avail_in) === 0)
        return ze;
      for (i = n.next_in_index, a = o.marker; r !== 0 && a < 4; )
        n.read_byte(i) == Da[a] ? a++ : n.read_byte(i) !== 0 ? a = 0 : a = 4 - a, i++, r--;
      return n.total_in += i - n.next_in_index, n.next_in_index = i, n.avail_in = r, o.marker = a, a != 4 ? J : (s = n.total_in, l = n.total_out, t(n), n.total_in = s, n.total_out = l, o.mode = Dt, K);
    }, e.inflateSyncPoint = function(n) {
      return !n || !n.istate || !n.istate.blocks ? ke : n.istate.blocks.sync_point();
    };
  }
  function Wi() {
  }
  Wi.prototype = {
    inflateInit(e) {
      const t = this;
      return t.istate = new Na(), e || (e = _a), t.istate.inflateInit(t, e);
    },
    inflate(e) {
      const t = this;
      return t.istate ? t.istate.inflate(t, e) : ke;
    },
    inflateEnd() {
      const e = this;
      if (!e.istate)
        return ke;
      const t = e.istate.inflateEnd(e);
      return e.istate = null, t;
    },
    inflateSync() {
      const e = this;
      return e.istate ? e.istate.inflateSync(e) : ke;
    },
    inflateSetDictionary(e, t) {
      const n = this;
      return n.istate ? n.istate.inflateSetDictionary(n, e, t) : ke;
    },
    read_byte(e) {
      return this.next_in[e];
    },
    read_buf(e, t) {
      return this.next_in.subarray(e, e + t);
    }
  };
  function Oa(e) {
    const t = this, n = new Wi(), r = e && e.chunkSize ? Math.floor(e.chunkSize * 2) : 128 * 1024, i = xa, a = new Uint8Array(r);
    let s = false;
    n.inflateInit(), n.next_out = a, t.append = function(l, o) {
      const f = [];
      let d, p, _ = 0, x = 0, k = 0;
      if (l.length !== 0) {
        n.next_in_index = 0, n.next_in = l, n.avail_in = l.length;
        do {
          if (n.next_out_index = 0, n.avail_out = r, n.avail_in === 0 && !s && (n.next_in_index = 0, s = true), d = n.inflate(i), s && d === ze) {
            if (n.avail_in !== 0)
              throw new Error("inflating: bad input");
          } else if (d !== K && d !== Xe)
            throw new Error("inflating: " + n.msg);
          if ((s || d === Xe) && n.avail_in === l.length)
            throw new Error("inflating: bad input");
          n.next_out_index && (n.next_out_index === r ? f.push(new Uint8Array(a)) : f.push(a.subarray(0, n.next_out_index))), k += n.next_out_index, o && n.next_in_index > 0 && n.next_in_index != _ && (o(n.next_in_index), _ = n.next_in_index);
        } while (n.avail_in > 0 || n.avail_out === 0);
        return f.length > 1 ? (p = new Uint8Array(k), f.forEach(function(u) {
          p.set(u, x), x += u.length;
        })) : p = f[0] ? new Uint8Array(f[0]) : new Uint8Array(), p;
      }
    }, t.flush = function() {
      n.inflateEnd();
    };
  }
  const Ae = 4294967295, Se = 65535, Qr = 8, La = 0, Ua = 99, Pa = 67324752, Bi = 134695760, Ma = Bi, ja = 33639248, qa = 101010256, Wa = 101075792, Ba = 117853008, Jn = 22, $i = 20, Hi = 56, $a = Jn + $i + Hi, Ha = 1, Va = 39169, Za = 10, Ya = 1, Vi = 21589, Ga = 6534, Ka = 1, Xa = 8, za = 2048, Ja = 16, Qa = 16384, eo = 73, ei = 420, to = 20, ti = 45, ni = 51, Mn = "/", ri = new Date(2107, 11, 31), ii = new Date(1980, 0, 1), X = void 0, lt = "undefined", Ht = "function";
  class si {
    constructor(t) {
      return class extends TransformStream {
        constructor(n, r) {
          const i = new t(r);
          super({
            transform(a, s) {
              s.enqueue(i.append(a));
            },
            flush(a) {
              const s = i.flush();
              s && a.enqueue(s);
            }
          });
        }
      };
    }
  }
  const no = 64;
  let Zi = 2;
  try {
    typeof navigator != lt && navigator.hardwareConcurrency && (Zi = navigator.hardwareConcurrency);
  } catch {
  }
  const ro = {
    chunkSize: 512 * 1024,
    maxWorkers: Zi,
    terminateWorkerTimeout: 5e3,
    useWebWorkers: true,
    useCompressionStream: true,
    workerScripts: X,
    CompressionStreamNative: typeof CompressionStream != lt && CompressionStream,
    DecompressionStreamNative: typeof DecompressionStream != lt && DecompressionStream
  }, at = Object.assign({}, ro);
  function io() {
    return at;
  }
  function so(e) {
    return Math.max(e.chunkSize, no);
  }
  function cr(e) {
    const { baseURL: t, chunkSize: n, maxWorkers: r, terminateWorkerTimeout: i, useCompressionStream: a, useWebWorkers: s, Deflate: l, Inflate: o, CompressionStream: f, DecompressionStream: d, workerScripts: p } = e;
    if (it("baseURL", t), it("chunkSize", n), it("maxWorkers", r), it("terminateWorkerTimeout", i), it("useCompressionStream", a), it("useWebWorkers", s), l && (at.CompressionStream = new si(l)), o && (at.DecompressionStream = new si(o)), it("CompressionStream", f), it("DecompressionStream", d), p !== X) {
      const { deflate: _, inflate: x } = p;
      if ((_ || x) && (at.workerScripts || (at.workerScripts = {})), _) {
        if (!Array.isArray(_))
          throw new Error("workerScripts.deflate must be an array");
        at.workerScripts.deflate = _;
      }
      if (x) {
        if (!Array.isArray(x))
          throw new Error("workerScripts.inflate must be an array");
        at.workerScripts.inflate = x;
      }
    }
  }
  function it(e, t) {
    t !== X && (at[e] = t);
  }
  const jn = {
    application: {
      "andrew-inset": "ez",
      annodex: "anx",
      "atom+xml": "atom",
      "atomcat+xml": "atomcat",
      "atomserv+xml": "atomsrv",
      bbolin: "lin",
      "cu-seeme": "cu",
      "davmount+xml": "davmount",
      dsptype: "tsp",
      ecmascript: [
        "es",
        "ecma"
      ],
      futuresplash: "spl",
      hta: "hta",
      "java-archive": "jar",
      "java-serialized-object": "ser",
      "java-vm": "class",
      m3g: "m3g",
      "mac-binhex40": "hqx",
      mathematica: [
        "nb",
        "ma",
        "mb"
      ],
      msaccess: "mdb",
      msword: [
        "doc",
        "dot",
        "wiz"
      ],
      mxf: "mxf",
      oda: "oda",
      ogg: "ogx",
      pdf: "pdf",
      "pgp-keys": "key",
      "pgp-signature": [
        "asc",
        "sig"
      ],
      "pics-rules": "prf",
      postscript: [
        "ps",
        "ai",
        "eps",
        "epsi",
        "epsf",
        "eps2",
        "eps3"
      ],
      rar: "rar",
      "rdf+xml": "rdf",
      "rss+xml": "rss",
      rtf: "rtf",
      "xhtml+xml": [
        "xhtml",
        "xht"
      ],
      xml: [
        "xml",
        "xsl",
        "xsd",
        "xpdl"
      ],
      "xspf+xml": "xspf",
      zip: "zip",
      "vnd.android.package-archive": "apk",
      "vnd.cinderella": "cdy",
      "vnd.google-earth.kml+xml": "kml",
      "vnd.google-earth.kmz": "kmz",
      "vnd.mozilla.xul+xml": "xul",
      "vnd.ms-excel": [
        "xls",
        "xlb",
        "xlt",
        "xlm",
        "xla",
        "xlc",
        "xlw"
      ],
      "vnd.ms-pki.seccat": "cat",
      "vnd.ms-pki.stl": "stl",
      "vnd.ms-powerpoint": [
        "ppt",
        "pps",
        "pot",
        "ppa",
        "pwz"
      ],
      "vnd.oasis.opendocument.chart": "odc",
      "vnd.oasis.opendocument.database": "odb",
      "vnd.oasis.opendocument.formula": "odf",
      "vnd.oasis.opendocument.graphics": "odg",
      "vnd.oasis.opendocument.graphics-template": "otg",
      "vnd.oasis.opendocument.image": "odi",
      "vnd.oasis.opendocument.presentation": "odp",
      "vnd.oasis.opendocument.presentation-template": "otp",
      "vnd.oasis.opendocument.spreadsheet": "ods",
      "vnd.oasis.opendocument.spreadsheet-template": "ots",
      "vnd.oasis.opendocument.text": "odt",
      "vnd.oasis.opendocument.text-master": [
        "odm",
        "otm"
      ],
      "vnd.oasis.opendocument.text-template": "ott",
      "vnd.oasis.opendocument.text-web": "oth",
      "vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
      "vnd.openxmlformats-officedocument.spreadsheetml.template": "xltx",
      "vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
      "vnd.openxmlformats-officedocument.presentationml.slideshow": "ppsx",
      "vnd.openxmlformats-officedocument.presentationml.template": "potx",
      "vnd.openxmlformats-officedocument.wordprocessingml.document": "docx",
      "vnd.openxmlformats-officedocument.wordprocessingml.template": "dotx",
      "vnd.smaf": "mmf",
      "vnd.stardivision.calc": "sdc",
      "vnd.stardivision.chart": "sds",
      "vnd.stardivision.draw": "sda",
      "vnd.stardivision.impress": "sdd",
      "vnd.stardivision.math": [
        "sdf",
        "smf"
      ],
      "vnd.stardivision.writer": [
        "sdw",
        "vor"
      ],
      "vnd.stardivision.writer-global": "sgl",
      "vnd.sun.xml.calc": "sxc",
      "vnd.sun.xml.calc.template": "stc",
      "vnd.sun.xml.draw": "sxd",
      "vnd.sun.xml.draw.template": "std",
      "vnd.sun.xml.impress": "sxi",
      "vnd.sun.xml.impress.template": "sti",
      "vnd.sun.xml.math": "sxm",
      "vnd.sun.xml.writer": "sxw",
      "vnd.sun.xml.writer.global": "sxg",
      "vnd.sun.xml.writer.template": "stw",
      "vnd.symbian.install": [
        "sis",
        "sisx"
      ],
      "vnd.visio": [
        "vsd",
        "vst",
        "vss",
        "vsw",
        "vsdx",
        "vssx",
        "vstx",
        "vssm",
        "vstm"
      ],
      "vnd.wap.wbxml": "wbxml",
      "vnd.wap.wmlc": "wmlc",
      "vnd.wap.wmlscriptc": "wmlsc",
      "vnd.wordperfect": "wpd",
      "vnd.wordperfect5.1": "wp5",
      "x-123": "wk",
      "x-7z-compressed": "7z",
      "x-abiword": "abw",
      "x-apple-diskimage": "dmg",
      "x-bcpio": "bcpio",
      "x-bittorrent": "torrent",
      "x-cbr": [
        "cbr",
        "cba",
        "cbt",
        "cb7"
      ],
      "x-cbz": "cbz",
      "x-cdf": [
        "cdf",
        "cda"
      ],
      "x-cdlink": "vcd",
      "x-chess-pgn": "pgn",
      "x-cpio": "cpio",
      "x-csh": "csh",
      "x-director": [
        "dir",
        "dxr",
        "cst",
        "cct",
        "cxt",
        "w3d",
        "fgd",
        "swa"
      ],
      "x-dms": "dms",
      "x-doom": "wad",
      "x-dvi": "dvi",
      "x-httpd-eruby": "rhtml",
      "x-font": "pcf.Z",
      "x-freemind": "mm",
      "x-gnumeric": "gnumeric",
      "x-go-sgf": "sgf",
      "x-graphing-calculator": "gcf",
      "x-gtar": [
        "gtar",
        "taz"
      ],
      "x-hdf": "hdf",
      "x-httpd-php": [
        "phtml",
        "pht",
        "php"
      ],
      "x-httpd-php-source": "phps",
      "x-httpd-php3": "php3",
      "x-httpd-php3-preprocessed": "php3p",
      "x-httpd-php4": "php4",
      "x-httpd-php5": "php5",
      "x-ica": "ica",
      "x-info": "info",
      "x-internet-signup": [
        "ins",
        "isp"
      ],
      "x-iphone": "iii",
      "x-iso9660-image": "iso",
      "x-java-jnlp-file": "jnlp",
      "x-jmol": "jmz",
      "x-killustrator": "kil",
      "x-latex": "latex",
      "x-lyx": "lyx",
      "x-lzx": "lzx",
      "x-maker": [
        "frm",
        "fb",
        "fbdoc"
      ],
      "x-ms-wmd": "wmd",
      "x-msdos-program": [
        "com",
        "exe",
        "bat",
        "dll"
      ],
      "x-netcdf": [
        "nc"
      ],
      "x-ns-proxy-autoconfig": [
        "pac",
        "dat"
      ],
      "x-nwc": "nwc",
      "x-object": "o",
      "x-oz-application": "oza",
      "x-pkcs7-certreqresp": "p7r",
      "x-python-code": [
        "pyc",
        "pyo"
      ],
      "x-qgis": [
        "qgs",
        "shp",
        "shx"
      ],
      "x-quicktimeplayer": "qtl",
      "x-redhat-package-manager": [
        "rpm",
        "rpa"
      ],
      "x-ruby": "rb",
      "x-sh": "sh",
      "x-shar": "shar",
      "x-shockwave-flash": [
        "swf",
        "swfl"
      ],
      "x-silverlight": "scr",
      "x-stuffit": "sit",
      "x-sv4cpio": "sv4cpio",
      "x-sv4crc": "sv4crc",
      "x-tar": "tar",
      "x-tex-gf": "gf",
      "x-tex-pk": "pk",
      "x-texinfo": [
        "texinfo",
        "texi"
      ],
      "x-trash": [
        "~",
        "%",
        "bak",
        "old",
        "sik"
      ],
      "x-ustar": "ustar",
      "x-wais-source": "src",
      "x-wingz": "wz",
      "x-x509-ca-cert": [
        "crt",
        "der",
        "cer"
      ],
      "x-xcf": "xcf",
      "x-xfig": "fig",
      "x-xpinstall": "xpi",
      applixware: "aw",
      "atomsvc+xml": "atomsvc",
      "ccxml+xml": "ccxml",
      "cdmi-capability": "cdmia",
      "cdmi-container": "cdmic",
      "cdmi-domain": "cdmid",
      "cdmi-object": "cdmio",
      "cdmi-queue": "cdmiq",
      "docbook+xml": "dbk",
      "dssc+der": "dssc",
      "dssc+xml": "xdssc",
      "emma+xml": "emma",
      "epub+zip": "epub",
      exi: "exi",
      "font-tdpfr": "pfr",
      "gml+xml": "gml",
      "gpx+xml": "gpx",
      gxf: "gxf",
      hyperstudio: "stk",
      "inkml+xml": [
        "ink",
        "inkml"
      ],
      ipfix: "ipfix",
      "jsonml+json": "jsonml",
      "lost+xml": "lostxml",
      "mads+xml": "mads",
      marc: "mrc",
      "marcxml+xml": "mrcx",
      "mathml+xml": [
        "mathml",
        "mml"
      ],
      mbox: "mbox",
      "mediaservercontrol+xml": "mscml",
      "metalink+xml": "metalink",
      "metalink4+xml": "meta4",
      "mets+xml": "mets",
      "mods+xml": "mods",
      mp21: [
        "m21",
        "mp21"
      ],
      mp4: "mp4s",
      "oebps-package+xml": "opf",
      "omdoc+xml": "omdoc",
      onenote: [
        "onetoc",
        "onetoc2",
        "onetmp",
        "onepkg"
      ],
      oxps: "oxps",
      "patch-ops-error+xml": "xer",
      "pgp-encrypted": "pgp",
      pkcs10: "p10",
      "pkcs7-mime": [
        "p7m",
        "p7c"
      ],
      "pkcs7-signature": "p7s",
      pkcs8: "p8",
      "pkix-attr-cert": "ac",
      "pkix-crl": "crl",
      "pkix-pkipath": "pkipath",
      pkixcmp: "pki",
      "pls+xml": "pls",
      "prs.cww": "cww",
      "pskc+xml": "pskcxml",
      "reginfo+xml": "rif",
      "relax-ng-compact-syntax": "rnc",
      "resource-lists+xml": "rl",
      "resource-lists-diff+xml": "rld",
      "rls-services+xml": "rs",
      "rpki-ghostbusters": "gbr",
      "rpki-manifest": "mft",
      "rpki-roa": "roa",
      "rsd+xml": "rsd",
      "sbml+xml": "sbml",
      "scvp-cv-request": "scq",
      "scvp-cv-response": "scs",
      "scvp-vp-request": "spq",
      "scvp-vp-response": "spp",
      sdp: "sdp",
      "set-payment-initiation": "setpay",
      "set-registration-initiation": "setreg",
      "shf+xml": "shf",
      "sparql-query": "rq",
      "sparql-results+xml": "srx",
      srgs: "gram",
      "srgs+xml": "grxml",
      "sru+xml": "sru",
      "ssdl+xml": "ssdl",
      "ssml+xml": "ssml",
      "tei+xml": [
        "tei",
        "teicorpus"
      ],
      "thraud+xml": "tfi",
      "timestamped-data": "tsd",
      "vnd.3gpp.pic-bw-large": "plb",
      "vnd.3gpp.pic-bw-small": "psb",
      "vnd.3gpp.pic-bw-var": "pvb",
      "vnd.3gpp2.tcap": "tcap",
      "vnd.3m.post-it-notes": "pwn",
      "vnd.accpac.simply.aso": "aso",
      "vnd.accpac.simply.imp": "imp",
      "vnd.acucobol": "acu",
      "vnd.acucorp": [
        "atc",
        "acutc"
      ],
      "vnd.adobe.air-application-installer-package+zip": "air",
      "vnd.adobe.formscentral.fcdt": "fcdt",
      "vnd.adobe.fxp": [
        "fxp",
        "fxpl"
      ],
      "vnd.adobe.xdp+xml": "xdp",
      "vnd.adobe.xfdf": "xfdf",
      "vnd.ahead.space": "ahead",
      "vnd.airzip.filesecure.azf": "azf",
      "vnd.airzip.filesecure.azs": "azs",
      "vnd.amazon.ebook": "azw",
      "vnd.americandynamics.acc": "acc",
      "vnd.amiga.ami": "ami",
      "vnd.anser-web-certificate-issue-initiation": "cii",
      "vnd.anser-web-funds-transfer-initiation": "fti",
      "vnd.antix.game-component": "atx",
      "vnd.apple.installer+xml": "mpkg",
      "vnd.apple.mpegurl": "m3u8",
      "vnd.aristanetworks.swi": "swi",
      "vnd.astraea-software.iota": "iota",
      "vnd.audiograph": "aep",
      "vnd.blueice.multipass": "mpm",
      "vnd.bmi": "bmi",
      "vnd.businessobjects": "rep",
      "vnd.chemdraw+xml": "cdxml",
      "vnd.chipnuts.karaoke-mmd": "mmd",
      "vnd.claymore": "cla",
      "vnd.cloanto.rp9": "rp9",
      "vnd.clonk.c4group": [
        "c4g",
        "c4d",
        "c4f",
        "c4p",
        "c4u"
      ],
      "vnd.cluetrust.cartomobile-config": "c11amc",
      "vnd.cluetrust.cartomobile-config-pkg": "c11amz",
      "vnd.commonspace": "csp",
      "vnd.contact.cmsg": "cdbcmsg",
      "vnd.cosmocaller": "cmc",
      "vnd.crick.clicker": "clkx",
      "vnd.crick.clicker.keyboard": "clkk",
      "vnd.crick.clicker.palette": "clkp",
      "vnd.crick.clicker.template": "clkt",
      "vnd.crick.clicker.wordbank": "clkw",
      "vnd.criticaltools.wbs+xml": "wbs",
      "vnd.ctc-posml": "pml",
      "vnd.cups-ppd": "ppd",
      "vnd.curl.car": "car",
      "vnd.curl.pcurl": "pcurl",
      "vnd.dart": "dart",
      "vnd.data-vision.rdz": "rdz",
      "vnd.dece.data": [
        "uvf",
        "uvvf",
        "uvd",
        "uvvd"
      ],
      "vnd.dece.ttml+xml": [
        "uvt",
        "uvvt"
      ],
      "vnd.dece.unspecified": [
        "uvx",
        "uvvx"
      ],
      "vnd.dece.zip": [
        "uvz",
        "uvvz"
      ],
      "vnd.denovo.fcselayout-link": "fe_launch",
      "vnd.dna": "dna",
      "vnd.dolby.mlp": "mlp",
      "vnd.dpgraph": "dpg",
      "vnd.dreamfactory": "dfac",
      "vnd.ds-keypoint": "kpxx",
      "vnd.dvb.ait": "ait",
      "vnd.dvb.service": "svc",
      "vnd.dynageo": "geo",
      "vnd.ecowin.chart": "mag",
      "vnd.enliven": "nml",
      "vnd.epson.esf": "esf",
      "vnd.epson.msf": "msf",
      "vnd.epson.quickanime": "qam",
      "vnd.epson.salt": "slt",
      "vnd.epson.ssf": "ssf",
      "vnd.eszigno3+xml": [
        "es3",
        "et3"
      ],
      "vnd.ezpix-album": "ez2",
      "vnd.ezpix-package": "ez3",
      "vnd.fdf": "fdf",
      "vnd.fdsn.mseed": "mseed",
      "vnd.fdsn.seed": [
        "seed",
        "dataless"
      ],
      "vnd.flographit": "gph",
      "vnd.fluxtime.clip": "ftc",
      "vnd.framemaker": [
        "fm",
        "frame",
        "maker",
        "book"
      ],
      "vnd.frogans.fnc": "fnc",
      "vnd.frogans.ltf": "ltf",
      "vnd.fsc.weblaunch": "fsc",
      "vnd.fujitsu.oasys": "oas",
      "vnd.fujitsu.oasys2": "oa2",
      "vnd.fujitsu.oasys3": "oa3",
      "vnd.fujitsu.oasysgp": "fg5",
      "vnd.fujitsu.oasysprs": "bh2",
      "vnd.fujixerox.ddd": "ddd",
      "vnd.fujixerox.docuworks": "xdw",
      "vnd.fujixerox.docuworks.binder": "xbd",
      "vnd.fuzzysheet": "fzs",
      "vnd.genomatix.tuxedo": "txd",
      "vnd.geogebra.file": "ggb",
      "vnd.geogebra.tool": "ggt",
      "vnd.geometry-explorer": [
        "gex",
        "gre"
      ],
      "vnd.geonext": "gxt",
      "vnd.geoplan": "g2w",
      "vnd.geospace": "g3w",
      "vnd.gmx": "gmx",
      "vnd.grafeq": [
        "gqf",
        "gqs"
      ],
      "vnd.groove-account": "gac",
      "vnd.groove-help": "ghf",
      "vnd.groove-identity-message": "gim",
      "vnd.groove-injector": "grv",
      "vnd.groove-tool-message": "gtm",
      "vnd.groove-tool-template": "tpl",
      "vnd.groove-vcard": "vcg",
      "vnd.hal+xml": "hal",
      "vnd.handheld-entertainment+xml": "zmm",
      "vnd.hbci": "hbci",
      "vnd.hhe.lesson-player": "les",
      "vnd.hp-hpgl": "hpgl",
      "vnd.hp-hpid": "hpid",
      "vnd.hp-hps": "hps",
      "vnd.hp-jlyt": "jlt",
      "vnd.hp-pcl": "pcl",
      "vnd.hp-pclxl": "pclxl",
      "vnd.hydrostatix.sof-data": "sfd-hdstx",
      "vnd.ibm.minipay": "mpy",
      "vnd.ibm.modcap": [
        "afp",
        "listafp",
        "list3820"
      ],
      "vnd.ibm.rights-management": "irm",
      "vnd.ibm.secure-container": "sc",
      "vnd.iccprofile": [
        "icc",
        "icm"
      ],
      "vnd.igloader": "igl",
      "vnd.immervision-ivp": "ivp",
      "vnd.immervision-ivu": "ivu",
      "vnd.insors.igm": "igm",
      "vnd.intercon.formnet": [
        "xpw",
        "xpx"
      ],
      "vnd.intergeo": "i2g",
      "vnd.intu.qbo": "qbo",
      "vnd.intu.qfx": "qfx",
      "vnd.ipunplugged.rcprofile": "rcprofile",
      "vnd.irepository.package+xml": "irp",
      "vnd.is-xpr": "xpr",
      "vnd.isac.fcs": "fcs",
      "vnd.jam": "jam",
      "vnd.jcp.javame.midlet-rms": "rms",
      "vnd.jisp": "jisp",
      "vnd.joost.joda-archive": "joda",
      "vnd.kahootz": [
        "ktz",
        "ktr"
      ],
      "vnd.kde.karbon": "karbon",
      "vnd.kde.kchart": "chrt",
      "vnd.kde.kformula": "kfo",
      "vnd.kde.kivio": "flw",
      "vnd.kde.kontour": "kon",
      "vnd.kde.kpresenter": [
        "kpr",
        "kpt"
      ],
      "vnd.kde.kspread": "ksp",
      "vnd.kde.kword": [
        "kwd",
        "kwt"
      ],
      "vnd.kenameaapp": "htke",
      "vnd.kidspiration": "kia",
      "vnd.kinar": [
        "kne",
        "knp"
      ],
      "vnd.koan": [
        "skp",
        "skd",
        "skt",
        "skm"
      ],
      "vnd.kodak-descriptor": "sse",
      "vnd.las.las+xml": "lasxml",
      "vnd.llamagraphics.life-balance.desktop": "lbd",
      "vnd.llamagraphics.life-balance.exchange+xml": "lbe",
      "vnd.lotus-1-2-3": "123",
      "vnd.lotus-approach": "apr",
      "vnd.lotus-freelance": "pre",
      "vnd.lotus-notes": "nsf",
      "vnd.lotus-organizer": "org",
      "vnd.lotus-screencam": "scm",
      "vnd.lotus-wordpro": "lwp",
      "vnd.macports.portpkg": "portpkg",
      "vnd.mcd": "mcd",
      "vnd.medcalcdata": "mc1",
      "vnd.mediastation.cdkey": "cdkey",
      "vnd.mfer": "mwf",
      "vnd.mfmp": "mfm",
      "vnd.micrografx.flo": "flo",
      "vnd.micrografx.igx": "igx",
      "vnd.mif": "mif",
      "vnd.mobius.daf": "daf",
      "vnd.mobius.dis": "dis",
      "vnd.mobius.mbk": "mbk",
      "vnd.mobius.mqy": "mqy",
      "vnd.mobius.msl": "msl",
      "vnd.mobius.plc": "plc",
      "vnd.mobius.txf": "txf",
      "vnd.mophun.application": "mpn",
      "vnd.mophun.certificate": "mpc",
      "vnd.ms-artgalry": "cil",
      "vnd.ms-cab-compressed": "cab",
      "vnd.ms-excel.addin.macroenabled.12": "xlam",
      "vnd.ms-excel.sheet.binary.macroenabled.12": "xlsb",
      "vnd.ms-excel.sheet.macroenabled.12": "xlsm",
      "vnd.ms-excel.template.macroenabled.12": "xltm",
      "vnd.ms-fontobject": "eot",
      "vnd.ms-htmlhelp": "chm",
      "vnd.ms-ims": "ims",
      "vnd.ms-lrm": "lrm",
      "vnd.ms-officetheme": "thmx",
      "vnd.ms-powerpoint.addin.macroenabled.12": "ppam",
      "vnd.ms-powerpoint.presentation.macroenabled.12": "pptm",
      "vnd.ms-powerpoint.slide.macroenabled.12": "sldm",
      "vnd.ms-powerpoint.slideshow.macroenabled.12": "ppsm",
      "vnd.ms-powerpoint.template.macroenabled.12": "potm",
      "vnd.ms-project": [
        "mpp",
        "mpt"
      ],
      "vnd.ms-word.document.macroenabled.12": "docm",
      "vnd.ms-word.template.macroenabled.12": "dotm",
      "vnd.ms-works": [
        "wps",
        "wks",
        "wcm",
        "wdb"
      ],
      "vnd.ms-wpl": "wpl",
      "vnd.ms-xpsdocument": "xps",
      "vnd.mseq": "mseq",
      "vnd.musician": "mus",
      "vnd.muvee.style": "msty",
      "vnd.mynfc": "taglet",
      "vnd.neurolanguage.nlu": "nlu",
      "vnd.nitf": [
        "ntf",
        "nitf"
      ],
      "vnd.noblenet-directory": "nnd",
      "vnd.noblenet-sealer": "nns",
      "vnd.noblenet-web": "nnw",
      "vnd.nokia.n-gage.data": "ngdat",
      "vnd.nokia.n-gage.symbian.install": "n-gage",
      "vnd.nokia.radio-preset": "rpst",
      "vnd.nokia.radio-presets": "rpss",
      "vnd.novadigm.edm": "edm",
      "vnd.novadigm.edx": "edx",
      "vnd.novadigm.ext": "ext",
      "vnd.oasis.opendocument.chart-template": "otc",
      "vnd.oasis.opendocument.formula-template": "odft",
      "vnd.oasis.opendocument.image-template": "oti",
      "vnd.olpc-sugar": "xo",
      "vnd.oma.dd2+xml": "dd2",
      "vnd.openofficeorg.extension": "oxt",
      "vnd.openxmlformats-officedocument.presentationml.slide": "sldx",
      "vnd.osgeo.mapguide.package": "mgp",
      "vnd.osgi.dp": "dp",
      "vnd.osgi.subsystem": "esa",
      "vnd.palm": [
        "pdb",
        "pqa",
        "oprc"
      ],
      "vnd.pawaafile": "paw",
      "vnd.pg.format": "str",
      "vnd.pg.osasli": "ei6",
      "vnd.picsel": "efif",
      "vnd.pmi.widget": "wg",
      "vnd.pocketlearn": "plf",
      "vnd.powerbuilder6": "pbd",
      "vnd.previewsystems.box": "box",
      "vnd.proteus.magazine": "mgz",
      "vnd.publishare-delta-tree": "qps",
      "vnd.pvi.ptid1": "ptid",
      "vnd.quark.quarkxpress": [
        "qxd",
        "qxt",
        "qwd",
        "qwt",
        "qxl",
        "qxb"
      ],
      "vnd.realvnc.bed": "bed",
      "vnd.recordare.musicxml": "mxl",
      "vnd.recordare.musicxml+xml": "musicxml",
      "vnd.rig.cryptonote": "cryptonote",
      "vnd.rn-realmedia": "rm",
      "vnd.rn-realmedia-vbr": "rmvb",
      "vnd.route66.link66+xml": "link66",
      "vnd.sailingtracker.track": "st",
      "vnd.seemail": "see",
      "vnd.sema": "sema",
      "vnd.semd": "semd",
      "vnd.semf": "semf",
      "vnd.shana.informed.formdata": "ifm",
      "vnd.shana.informed.formtemplate": "itp",
      "vnd.shana.informed.interchange": "iif",
      "vnd.shana.informed.package": "ipk",
      "vnd.simtech-mindmapper": [
        "twd",
        "twds"
      ],
      "vnd.smart.teacher": "teacher",
      "vnd.solent.sdkm+xml": [
        "sdkm",
        "sdkd"
      ],
      "vnd.spotfire.dxp": "dxp",
      "vnd.spotfire.sfs": "sfs",
      "vnd.stepmania.package": "smzip",
      "vnd.stepmania.stepchart": "sm",
      "vnd.sus-calendar": [
        "sus",
        "susp"
      ],
      "vnd.svd": "svd",
      "vnd.syncml+xml": "xsm",
      "vnd.syncml.dm+wbxml": "bdm",
      "vnd.syncml.dm+xml": "xdm",
      "vnd.tao.intent-module-archive": "tao",
      "vnd.tcpdump.pcap": [
        "pcap",
        "cap",
        "dmp"
      ],
      "vnd.tmobile-livetv": "tmo",
      "vnd.trid.tpt": "tpt",
      "vnd.triscape.mxs": "mxs",
      "vnd.trueapp": "tra",
      "vnd.ufdl": [
        "ufd",
        "ufdl"
      ],
      "vnd.uiq.theme": "utz",
      "vnd.umajin": "umj",
      "vnd.unity": "unityweb",
      "vnd.uoml+xml": "uoml",
      "vnd.vcx": "vcx",
      "vnd.visionary": "vis",
      "vnd.vsf": "vsf",
      "vnd.webturbo": "wtb",
      "vnd.wolfram.player": "nbp",
      "vnd.wqd": "wqd",
      "vnd.wt.stf": "stf",
      "vnd.xara": "xar",
      "vnd.xfdl": "xfdl",
      "vnd.yamaha.hv-dic": "hvd",
      "vnd.yamaha.hv-script": "hvs",
      "vnd.yamaha.hv-voice": "hvp",
      "vnd.yamaha.openscoreformat": "osf",
      "vnd.yamaha.openscoreformat.osfpvg+xml": "osfpvg",
      "vnd.yamaha.smaf-audio": "saf",
      "vnd.yamaha.smaf-phrase": "spf",
      "vnd.yellowriver-custom-menu": "cmp",
      "vnd.zul": [
        "zir",
        "zirz"
      ],
      "vnd.zzazz.deck+xml": "zaz",
      "voicexml+xml": "vxml",
      widget: "wgt",
      winhlp: "hlp",
      "wsdl+xml": "wsdl",
      "wspolicy+xml": "wspolicy",
      "x-ace-compressed": "ace",
      "x-authorware-bin": [
        "aab",
        "x32",
        "u32",
        "vox"
      ],
      "x-authorware-map": "aam",
      "x-authorware-seg": "aas",
      "x-blorb": [
        "blb",
        "blorb"
      ],
      "x-bzip": "bz",
      "x-bzip2": [
        "bz2",
        "boz"
      ],
      "x-cfs-compressed": "cfs",
      "x-chat": "chat",
      "x-conference": "nsc",
      "x-dgc-compressed": "dgc",
      "x-dtbncx+xml": "ncx",
      "x-dtbook+xml": "dtb",
      "x-dtbresource+xml": "res",
      "x-eva": "eva",
      "x-font-bdf": "bdf",
      "x-font-ghostscript": "gsf",
      "x-font-linux-psf": "psf",
      "x-font-pcf": "pcf",
      "x-font-snf": "snf",
      "x-font-ttf": [
        "ttf",
        "ttc"
      ],
      "x-font-type1": [
        "pfa",
        "pfb",
        "pfm",
        "afm"
      ],
      "x-freearc": "arc",
      "x-gca-compressed": "gca",
      "x-glulx": "ulx",
      "x-gramps-xml": "gramps",
      "x-install-instructions": "install",
      "x-lzh-compressed": [
        "lzh",
        "lha"
      ],
      "x-mie": "mie",
      "x-mobipocket-ebook": [
        "prc",
        "mobi"
      ],
      "x-ms-application": "application",
      "x-ms-shortcut": "lnk",
      "x-ms-xbap": "xbap",
      "x-msbinder": "obd",
      "x-mscardfile": "crd",
      "x-msclip": "clp",
      "application/x-ms-installer": "msi",
      "x-msmediaview": [
        "mvb",
        "m13",
        "m14"
      ],
      "x-msmetafile": [
        "wmf",
        "wmz",
        "emf",
        "emz"
      ],
      "x-msmoney": "mny",
      "x-mspublisher": "pub",
      "x-msschedule": "scd",
      "x-msterminal": "trm",
      "x-mswrite": "wri",
      "x-nzb": "nzb",
      "x-pkcs12": [
        "p12",
        "pfx"
      ],
      "x-pkcs7-certificates": [
        "p7b",
        "spc"
      ],
      "x-research-info-systems": "ris",
      "x-silverlight-app": "xap",
      "x-sql": "sql",
      "x-stuffitx": "sitx",
      "x-subrip": "srt",
      "x-t3vm-image": "t3",
      "x-tex-tfm": "tfm",
      "x-tgif": "obj",
      "x-xliff+xml": "xlf",
      "x-xz": "xz",
      "x-zmachine": [
        "z1",
        "z2",
        "z3",
        "z4",
        "z5",
        "z6",
        "z7",
        "z8"
      ],
      "xaml+xml": "xaml",
      "xcap-diff+xml": "xdf",
      "xenc+xml": "xenc",
      "xml-dtd": "dtd",
      "xop+xml": "xop",
      "xproc+xml": "xpl",
      "xslt+xml": "xslt",
      "xv+xml": [
        "mxml",
        "xhvml",
        "xvml",
        "xvm"
      ],
      yang: "yang",
      "yin+xml": "yin",
      envoy: "evy",
      fractals: "fif",
      "internet-property-stream": "acx",
      olescript: "axs",
      "vnd.ms-outlook": "msg",
      "vnd.ms-pkicertstore": "sst",
      "x-compress": "z",
      "x-perfmon": [
        "pma",
        "pmc",
        "pmr",
        "pmw"
      ],
      "ynd.ms-pkipko": "pko",
      gzip: [
        "gz",
        "tgz"
      ],
      "smil+xml": [
        "smi",
        "smil"
      ],
      "vnd.debian.binary-package": [
        "deb",
        "udeb"
      ],
      "vnd.hzn-3d-crossword": "x3d",
      "vnd.sqlite3": [
        "db",
        "sqlite",
        "sqlite3",
        "db-wal",
        "sqlite-wal",
        "db-shm",
        "sqlite-shm"
      ],
      "vnd.wap.sic": "sic",
      "vnd.wap.slc": "slc",
      "x-krita": [
        "kra",
        "krz"
      ],
      "x-perl": [
        "pm",
        "pl"
      ],
      yaml: [
        "yaml",
        "yml"
      ]
    },
    audio: {
      amr: "amr",
      "amr-wb": "awb",
      annodex: "axa",
      basic: [
        "au",
        "snd"
      ],
      flac: "flac",
      midi: [
        "mid",
        "midi",
        "kar",
        "rmi"
      ],
      mpeg: [
        "mpga",
        "mpega",
        "mp3",
        "m4a",
        "mp2a",
        "m2a",
        "m3a"
      ],
      mpegurl: "m3u",
      ogg: [
        "oga",
        "ogg",
        "spx"
      ],
      "prs.sid": "sid",
      "x-aiff": "aifc",
      "x-gsm": "gsm",
      "x-ms-wma": "wma",
      "x-ms-wax": "wax",
      "x-pn-realaudio": "ram",
      "x-realaudio": "ra",
      "x-sd2": "sd2",
      adpcm: "adp",
      mp4: "mp4a",
      s3m: "s3m",
      silk: "sil",
      "vnd.dece.audio": [
        "uva",
        "uvva"
      ],
      "vnd.digital-winds": "eol",
      "vnd.dra": "dra",
      "vnd.dts": "dts",
      "vnd.dts.hd": "dtshd",
      "vnd.lucent.voice": "lvp",
      "vnd.ms-playready.media.pya": "pya",
      "vnd.nuera.ecelp4800": "ecelp4800",
      "vnd.nuera.ecelp7470": "ecelp7470",
      "vnd.nuera.ecelp9600": "ecelp9600",
      "vnd.rip": "rip",
      webm: "weba",
      "x-caf": "caf",
      "x-matroska": "mka",
      "x-pn-realaudio-plugin": "rmp",
      xm: "xm",
      aac: "aac",
      aiff: [
        "aiff",
        "aif",
        "aff"
      ],
      opus: "opus",
      wav: "wav"
    },
    chemical: {
      "x-alchemy": "alc",
      "x-cache": [
        "cac",
        "cache"
      ],
      "x-cache-csf": "csf",
      "x-cactvs-binary": [
        "cbin",
        "cascii",
        "ctab"
      ],
      "x-cdx": "cdx",
      "x-chem3d": "c3d",
      "x-cif": "cif",
      "x-cmdf": "cmdf",
      "x-cml": "cml",
      "x-compass": "cpa",
      "x-crossfire": "bsd",
      "x-csml": [
        "csml",
        "csm"
      ],
      "x-ctx": "ctx",
      "x-cxf": [
        "cxf",
        "cef"
      ],
      "x-embl-dl-nucleotide": [
        "emb",
        "embl"
      ],
      "x-gamess-input": [
        "inp",
        "gam",
        "gamin"
      ],
      "x-gaussian-checkpoint": [
        "fch",
        "fchk"
      ],
      "x-gaussian-cube": "cub",
      "x-gaussian-input": [
        "gau",
        "gjc",
        "gjf"
      ],
      "x-gaussian-log": "gal",
      "x-gcg8-sequence": "gcg",
      "x-genbank": "gen",
      "x-hin": "hin",
      "x-isostar": [
        "istr",
        "ist"
      ],
      "x-jcamp-dx": [
        "jdx",
        "dx"
      ],
      "x-kinemage": "kin",
      "x-macmolecule": "mcm",
      "x-macromodel-input": "mmod",
      "x-mdl-molfile": "mol",
      "x-mdl-rdfile": "rd",
      "x-mdl-rxnfile": "rxn",
      "x-mdl-sdfile": "sd",
      "x-mdl-tgf": "tgf",
      "x-mmcif": "mcif",
      "x-mol2": "mol2",
      "x-molconn-Z": "b",
      "x-mopac-graph": "gpt",
      "x-mopac-input": [
        "mop",
        "mopcrt",
        "zmt"
      ],
      "x-mopac-out": "moo",
      "x-ncbi-asn1": "asn",
      "x-ncbi-asn1-ascii": [
        "prt",
        "ent"
      ],
      "x-ncbi-asn1-binary": "val",
      "x-rosdal": "ros",
      "x-swissprot": "sw",
      "x-vamas-iso14976": "vms",
      "x-vmd": "vmd",
      "x-xtel": "xtel",
      "x-xyz": "xyz"
    },
    font: {
      otf: "otf",
      woff: "woff",
      woff2: "woff2"
    },
    image: {
      gif: "gif",
      ief: "ief",
      jpeg: [
        "jpeg",
        "jpg",
        "jpe",
        "jfif",
        "jfif-tbnl",
        "jif"
      ],
      pcx: "pcx",
      png: "png",
      "svg+xml": [
        "svg",
        "svgz"
      ],
      tiff: [
        "tiff",
        "tif"
      ],
      "vnd.djvu": [
        "djvu",
        "djv"
      ],
      "vnd.wap.wbmp": "wbmp",
      "x-canon-cr2": "cr2",
      "x-canon-crw": "crw",
      "x-cmu-raster": "ras",
      "x-coreldraw": "cdr",
      "x-coreldrawpattern": "pat",
      "x-coreldrawtemplate": "cdt",
      "x-corelphotopaint": "cpt",
      "x-epson-erf": "erf",
      "x-icon": "ico",
      "x-jg": "art",
      "x-jng": "jng",
      "x-nikon-nef": "nef",
      "x-olympus-orf": "orf",
      "x-portable-anymap": "pnm",
      "x-portable-bitmap": "pbm",
      "x-portable-graymap": "pgm",
      "x-portable-pixmap": "ppm",
      "x-rgb": "rgb",
      "x-xbitmap": "xbm",
      "x-xpixmap": "xpm",
      "x-xwindowdump": "xwd",
      bmp: "bmp",
      cgm: "cgm",
      g3fax: "g3",
      ktx: "ktx",
      "prs.btif": "btif",
      sgi: "sgi",
      "vnd.dece.graphic": [
        "uvi",
        "uvvi",
        "uvg",
        "uvvg"
      ],
      "vnd.dwg": "dwg",
      "vnd.dxf": "dxf",
      "vnd.fastbidsheet": "fbs",
      "vnd.fpx": "fpx",
      "vnd.fst": "fst",
      "vnd.fujixerox.edmics-mmr": "mmr",
      "vnd.fujixerox.edmics-rlc": "rlc",
      "vnd.ms-modi": "mdi",
      "vnd.ms-photo": "wdp",
      "vnd.net-fpx": "npx",
      "vnd.xiff": "xif",
      webp: "webp",
      "x-3ds": "3ds",
      "x-cmx": "cmx",
      "x-freehand": [
        "fh",
        "fhc",
        "fh4",
        "fh5",
        "fh7"
      ],
      "x-pict": [
        "pic",
        "pct"
      ],
      "x-tga": "tga",
      "cis-cod": "cod",
      avif: "avifs",
      heic: [
        "heif",
        "heic"
      ],
      pjpeg: [
        "pjpg"
      ],
      "vnd.adobe.photoshop": "psd",
      "x-adobe-dng": "dng",
      "x-fuji-raf": "raf",
      "x-icns": "icns",
      "x-kodak-dcr": "dcr",
      "x-kodak-k25": "k25",
      "x-kodak-kdc": "kdc",
      "x-minolta-mrw": "mrw",
      "x-panasonic-raw": [
        "raw",
        "rw2",
        "rwl"
      ],
      "x-pentax-pef": [
        "pef",
        "ptx"
      ],
      "x-sigma-x3f": "x3f",
      "x-sony-arw": "arw",
      "x-sony-sr2": "sr2",
      "x-sony-srf": "srf"
    },
    message: {
      rfc822: [
        "eml",
        "mime",
        "mht",
        "mhtml",
        "nws"
      ]
    },
    model: {
      iges: [
        "igs",
        "iges"
      ],
      mesh: [
        "msh",
        "mesh",
        "silo"
      ],
      vrml: [
        "wrl",
        "vrml"
      ],
      "x3d+vrml": [
        "x3dv",
        "x3dvz"
      ],
      "x3d+xml": "x3dz",
      "x3d+binary": [
        "x3db",
        "x3dbz"
      ],
      "vnd.collada+xml": "dae",
      "vnd.dwf": "dwf",
      "vnd.gdl": "gdl",
      "vnd.gtw": "gtw",
      "vnd.mts": "mts",
      "vnd.usdz+zip": "usdz",
      "vnd.vtu": "vtu"
    },
    text: {
      "cache-manifest": [
        "manifest",
        "appcache"
      ],
      calendar: [
        "ics",
        "icz",
        "ifb"
      ],
      css: "css",
      csv: "csv",
      h323: "323",
      html: [
        "html",
        "htm",
        "shtml",
        "stm"
      ],
      iuls: "uls",
      plain: [
        "txt",
        "text",
        "brf",
        "conf",
        "def",
        "list",
        "log",
        "in",
        "bas",
        "diff",
        "ksh"
      ],
      richtext: "rtx",
      scriptlet: [
        "sct",
        "wsc"
      ],
      texmacs: "tm",
      "tab-separated-values": "tsv",
      "vnd.sun.j2me.app-descriptor": "jad",
      "vnd.wap.wml": "wml",
      "vnd.wap.wmlscript": "wmls",
      "x-bibtex": "bib",
      "x-boo": "boo",
      "x-c++hdr": [
        "h++",
        "hpp",
        "hxx",
        "hh"
      ],
      "x-c++src": [
        "c++",
        "cpp",
        "cxx",
        "cc"
      ],
      "x-component": "htc",
      "x-dsrc": "d",
      "x-diff": "patch",
      "x-haskell": "hs",
      "x-java": "java",
      "x-literate-haskell": "lhs",
      "x-moc": "moc",
      "x-pascal": [
        "p",
        "pas",
        "pp",
        "inc"
      ],
      "x-pcs-gcd": "gcd",
      "x-python": "py",
      "x-scala": "scala",
      "x-setext": "etx",
      "x-tcl": [
        "tcl",
        "tk"
      ],
      "x-tex": [
        "tex",
        "ltx",
        "sty",
        "cls"
      ],
      "x-vcalendar": "vcs",
      "x-vcard": "vcf",
      n3: "n3",
      "prs.lines.tag": "dsc",
      sgml: [
        "sgml",
        "sgm"
      ],
      troff: [
        "t",
        "tr",
        "roff",
        "man",
        "me",
        "ms"
      ],
      turtle: "ttl",
      "uri-list": [
        "uri",
        "uris",
        "urls"
      ],
      vcard: "vcard",
      "vnd.curl": "curl",
      "vnd.curl.dcurl": "dcurl",
      "vnd.curl.scurl": "scurl",
      "vnd.curl.mcurl": "mcurl",
      "vnd.dvb.subtitle": "sub",
      "vnd.fly": "fly",
      "vnd.fmi.flexstor": "flx",
      "vnd.graphviz": "gv",
      "vnd.in3d.3dml": "3dml",
      "vnd.in3d.spot": "spot",
      "x-asm": [
        "s",
        "asm"
      ],
      "x-c": [
        "c",
        "h",
        "dic"
      ],
      "x-fortran": [
        "f",
        "for",
        "f77",
        "f90"
      ],
      "x-opml": "opml",
      "x-nfo": "nfo",
      "x-sfv": "sfv",
      "x-uuencode": "uu",
      webviewhtml: "htt",
      javascript: "js",
      json: "json",
      markdown: [
        "md",
        "markdown",
        "mdown",
        "markdn"
      ],
      "vnd.wap.si": "si",
      "vnd.wap.sl": "sl"
    },
    video: {
      avif: "avif",
      "3gpp": "3gp",
      annodex: "axv",
      dl: "dl",
      dv: [
        "dif",
        "dv"
      ],
      fli: "fli",
      gl: "gl",
      mpeg: [
        "mpeg",
        "mpg",
        "mpe",
        "m1v",
        "m2v",
        "mp2",
        "mpa",
        "mpv2"
      ],
      mp4: [
        "mp4",
        "mp4v",
        "mpg4"
      ],
      quicktime: [
        "qt",
        "mov"
      ],
      ogg: "ogv",
      "vnd.mpegurl": [
        "mxu",
        "m4u"
      ],
      "x-flv": "flv",
      "x-la-asf": [
        "lsf",
        "lsx"
      ],
      "x-mng": "mng",
      "x-ms-asf": [
        "asf",
        "asx",
        "asr"
      ],
      "x-ms-wm": "wm",
      "x-ms-wmv": "wmv",
      "x-ms-wmx": "wmx",
      "x-ms-wvx": "wvx",
      "x-msvideo": "avi",
      "x-sgi-movie": "movie",
      "x-matroska": [
        "mpv",
        "mkv",
        "mk3d",
        "mks"
      ],
      "3gpp2": "3g2",
      h261: "h261",
      h263: "h263",
      h264: "h264",
      jpeg: "jpgv",
      jpm: [
        "jpm",
        "jpgm"
      ],
      mj2: [
        "mj2",
        "mjp2"
      ],
      "vnd.dece.hd": [
        "uvh",
        "uvvh"
      ],
      "vnd.dece.mobile": [
        "uvm",
        "uvvm"
      ],
      "vnd.dece.pd": [
        "uvp",
        "uvvp"
      ],
      "vnd.dece.sd": [
        "uvs",
        "uvvs"
      ],
      "vnd.dece.video": [
        "uvv",
        "uvvv"
      ],
      "vnd.dvb.file": "dvb",
      "vnd.fvt": "fvt",
      "vnd.ms-playready.media.pyv": "pyv",
      "vnd.uvvu.mp4": [
        "uvu",
        "uvvu"
      ],
      "vnd.vivo": "viv",
      webm: "webm",
      "x-f4v": "f4v",
      "x-m4v": "m4v",
      "x-ms-vob": "vob",
      "x-smv": "smv",
      mp2t: "ts"
    },
    "x-conference": {
      "x-cooltalk": "ice"
    },
    "x-world": {
      "x-vrml": [
        "vrm",
        "flr",
        "wrz",
        "xaf",
        "xof"
      ]
    }
  };
  (() => {
    const e = {};
    for (const t of Object.keys(jn))
      for (const n of Object.keys(jn[t])) {
        const r = jn[t][n];
        if (typeof r == "string")
          e[r] = t + "/" + n;
        else
          for (let i = 0; i < r.length; i++)
            e[r[i]] = t + "/" + n;
      }
    return e;
  })();
  const Yi = [];
  for (let e = 0; e < 256; e++) {
    let t = e;
    for (let n = 0; n < 8; n++)
      t & 1 ? t = t >>> 1 ^ 3988292384 : t = t >>> 1;
    Yi[e] = t;
  }
  class Qn {
    constructor(t) {
      this.crc = t || -1;
    }
    append(t) {
      let n = this.crc | 0;
      for (let r = 0, i = t.length | 0; r < i; r++)
        n = n >>> 8 ^ Yi[(n ^ t[r]) & 255];
      this.crc = n;
    }
    get() {
      return ~this.crc;
    }
  }
  class Gi extends TransformStream {
    constructor() {
      let t;
      const n = new Qn();
      super({
        transform(r, i) {
          n.append(r), i.enqueue(r);
        },
        flush() {
          const r = new Uint8Array(4);
          new DataView(r.buffer).setUint32(0, n.get()), t.value = r;
        }
      }), t = this;
    }
  }
  function dn(e) {
    if (typeof TextEncoder == lt) {
      e = unescape(encodeURIComponent(e));
      const t = new Uint8Array(e.length);
      for (let n = 0; n < t.length; n++)
        t[n] = e.charCodeAt(n);
      return t;
    } else
      return new TextEncoder().encode(e);
  }
  const be = {
    concat(e, t) {
      if (e.length === 0 || t.length === 0)
        return e.concat(t);
      const n = e[e.length - 1], r = be.getPartial(n);
      return r === 32 ? e.concat(t) : be._shiftRight(t, r, n | 0, e.slice(0, e.length - 1));
    },
    bitLength(e) {
      const t = e.length;
      if (t === 0)
        return 0;
      const n = e[t - 1];
      return (t - 1) * 32 + be.getPartial(n);
    },
    clamp(e, t) {
      if (e.length * 32 < t)
        return e;
      e = e.slice(0, Math.ceil(t / 32));
      const n = e.length;
      return t = t & 31, n > 0 && t && (e[n - 1] = be.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e;
    },
    partial(e, t, n) {
      return e === 32 ? t : (n ? t | 0 : t << 32 - e) + e * 1099511627776;
    },
    getPartial(e) {
      return Math.round(e / 1099511627776) || 32;
    },
    _shiftRight(e, t, n, r) {
      for (r === void 0 && (r = []); t >= 32; t -= 32)
        r.push(n), n = 0;
      if (t === 0)
        return r.concat(e);
      for (let s = 0; s < e.length; s++)
        r.push(n | e[s] >>> t), n = e[s] << 32 - t;
      const i = e.length ? e[e.length - 1] : 0, a = be.getPartial(i);
      return r.push(be.partial(t + a & 31, t + a > 32 ? n : r.pop(), 1)), r;
    }
  }, bn = {
    bytes: {
      fromBits(e) {
        const n = be.bitLength(e) / 8, r = new Uint8Array(n);
        let i;
        for (let a = 0; a < n; a++)
          a & 3 || (i = e[a / 4]), r[a] = i >>> 24, i <<= 8;
        return r;
      },
      toBits(e) {
        const t = [];
        let n, r = 0;
        for (n = 0; n < e.length; n++)
          r = r << 8 | e[n], (n & 3) === 3 && (t.push(r), r = 0);
        return n & 3 && t.push(be.partial(8 * (n & 3), r)), t;
      }
    }
  }, Ki = {};
  Ki.sha1 = class {
    constructor(e) {
      const t = this;
      t.blockSize = 512, t._init = [
        1732584193,
        4023233417,
        2562383102,
        271733878,
        3285377520
      ], t._key = [
        1518500249,
        1859775393,
        2400959708,
        3395469782
      ], e ? (t._h = e._h.slice(0), t._buffer = e._buffer.slice(0), t._length = e._length) : t.reset();
    }
    reset() {
      const e = this;
      return e._h = e._init.slice(0), e._buffer = [], e._length = 0, e;
    }
    update(e) {
      const t = this;
      typeof e == "string" && (e = bn.utf8String.toBits(e));
      const n = t._buffer = be.concat(t._buffer, e), r = t._length, i = t._length = r + be.bitLength(e);
      if (i > 9007199254740991)
        throw new Error("Cannot hash more than 2^53 - 1 bits");
      const a = new Uint32Array(n);
      let s = 0;
      for (let l = t.blockSize + r - (t.blockSize + r & t.blockSize - 1); l <= i; l += t.blockSize)
        t._block(a.subarray(16 * s, 16 * (s + 1))), s += 1;
      return n.splice(0, 16 * s), t;
    }
    finalize() {
      const e = this;
      let t = e._buffer;
      const n = e._h;
      t = be.concat(t, [
        be.partial(1, 1)
      ]);
      for (let r = t.length + 2; r & 15; r++)
        t.push(0);
      for (t.push(Math.floor(e._length / 4294967296)), t.push(e._length | 0); t.length; )
        e._block(t.splice(0, 16));
      return e.reset(), n;
    }
    _f(e, t, n, r) {
      if (e <= 19)
        return t & n | ~t & r;
      if (e <= 39)
        return t ^ n ^ r;
      if (e <= 59)
        return t & n | t & r | n & r;
      if (e <= 79)
        return t ^ n ^ r;
    }
    _S(e, t) {
      return t << e | t >>> 32 - e;
    }
    _block(e) {
      const t = this, n = t._h, r = Array(80);
      for (let f = 0; f < 16; f++)
        r[f] = e[f];
      let i = n[0], a = n[1], s = n[2], l = n[3], o = n[4];
      for (let f = 0; f <= 79; f++) {
        f >= 16 && (r[f] = t._S(1, r[f - 3] ^ r[f - 8] ^ r[f - 14] ^ r[f - 16]));
        const d = t._S(5, i) + t._f(f, a, s, l) + o + r[f] + t._key[Math.floor(f / 20)] | 0;
        o = l, l = s, s = t._S(30, a), a = i, i = d;
      }
      n[0] = n[0] + i | 0, n[1] = n[1] + a | 0, n[2] = n[2] + s | 0, n[3] = n[3] + l | 0, n[4] = n[4] + o | 0;
    }
  };
  const Xi = {};
  Xi.aes = class {
    constructor(e) {
      const t = this;
      t._tables = [
        [
          [],
          [],
          [],
          [],
          []
        ],
        [
          [],
          [],
          [],
          [],
          []
        ]
      ], t._tables[0][0][0] || t._precompute();
      const n = t._tables[0][4], r = t._tables[1], i = e.length;
      let a, s, l, o = 1;
      if (i !== 4 && i !== 6 && i !== 8)
        throw new Error("invalid aes key size");
      for (t._key = [
        s = e.slice(0),
        l = []
      ], a = i; a < 4 * i + 28; a++) {
        let f = s[a - 1];
        (a % i === 0 || i === 8 && a % i === 4) && (f = n[f >>> 24] << 24 ^ n[f >> 16 & 255] << 16 ^ n[f >> 8 & 255] << 8 ^ n[f & 255], a % i === 0 && (f = f << 8 ^ f >>> 24 ^ o << 24, o = o << 1 ^ (o >> 7) * 283)), s[a] = s[a - i] ^ f;
      }
      for (let f = 0; a; f++, a--) {
        const d = s[f & 3 ? a : a - 4];
        a <= 4 || f < 4 ? l[f] = d : l[f] = r[0][n[d >>> 24]] ^ r[1][n[d >> 16 & 255]] ^ r[2][n[d >> 8 & 255]] ^ r[3][n[d & 255]];
      }
    }
    encrypt(e) {
      return this._crypt(e, 0);
    }
    decrypt(e) {
      return this._crypt(e, 1);
    }
    _precompute() {
      const e = this._tables[0], t = this._tables[1], n = e[4], r = t[4], i = [], a = [];
      let s, l, o, f;
      for (let d = 0; d < 256; d++)
        a[(i[d] = d << 1 ^ (d >> 7) * 283) ^ d] = d;
      for (let d = s = 0; !n[d]; d ^= l || 1, s = a[s] || 1) {
        let p = s ^ s << 1 ^ s << 2 ^ s << 3 ^ s << 4;
        p = p >> 8 ^ p & 255 ^ 99, n[d] = p, r[p] = d, f = i[o = i[l = i[d]]];
        let _ = f * 16843009 ^ o * 65537 ^ l * 257 ^ d * 16843008, x = i[p] * 257 ^ p * 16843008;
        for (let k = 0; k < 4; k++)
          e[k][d] = x = x << 24 ^ x >>> 8, t[k][p] = _ = _ << 24 ^ _ >>> 8;
      }
      for (let d = 0; d < 5; d++)
        e[d] = e[d].slice(0), t[d] = t[d].slice(0);
    }
    _crypt(e, t) {
      if (e.length !== 4)
        throw new Error("invalid aes block size");
      const n = this._key[t], r = n.length / 4 - 2, i = [
        0,
        0,
        0,
        0
      ], a = this._tables[t], s = a[0], l = a[1], o = a[2], f = a[3], d = a[4];
      let p = e[0] ^ n[0], _ = e[t ? 3 : 1] ^ n[1], x = e[2] ^ n[2], k = e[t ? 1 : 3] ^ n[3], u = 4, c, m, h;
      for (let w = 0; w < r; w++)
        c = s[p >>> 24] ^ l[_ >> 16 & 255] ^ o[x >> 8 & 255] ^ f[k & 255] ^ n[u], m = s[_ >>> 24] ^ l[x >> 16 & 255] ^ o[k >> 8 & 255] ^ f[p & 255] ^ n[u + 1], h = s[x >>> 24] ^ l[k >> 16 & 255] ^ o[p >> 8 & 255] ^ f[_ & 255] ^ n[u + 2], k = s[k >>> 24] ^ l[p >> 16 & 255] ^ o[_ >> 8 & 255] ^ f[x & 255] ^ n[u + 3], u += 4, p = c, _ = m, x = h;
      for (let w = 0; w < 4; w++)
        i[t ? 3 & -w : w] = d[p >>> 24] << 24 ^ d[_ >> 16 & 255] << 16 ^ d[x >> 8 & 255] << 8 ^ d[k & 255] ^ n[u++], c = p, p = _, _ = x, x = k, k = c;
      return i;
    }
  };
  const ao = {
    getRandomValues(e) {
      const t = new Uint32Array(e.buffer), n = (r) => {
        let i = 987654321;
        const a = 4294967295;
        return function() {
          return i = 36969 * (i & 65535) + (i >> 16) & a, r = 18e3 * (r & 65535) + (r >> 16) & a, (((i << 16) + r & a) / 4294967296 + 0.5) * (Math.random() > 0.5 ? 1 : -1);
        };
      };
      for (let r = 0, i; r < e.length; r += 4) {
        const a = n((i || Math.random()) * 4294967296);
        i = a() * 987654071, t[r / 4] = a() * 4294967296 | 0;
      }
      return e;
    }
  }, zi = {};
  zi.ctrGladman = class {
    constructor(e, t) {
      this._prf = e, this._initIv = t, this._iv = t;
    }
    reset() {
      this._iv = this._initIv;
    }
    update(e) {
      return this.calculate(this._prf, e, this._iv);
    }
    incWord(e) {
      if ((e >> 24 & 255) === 255) {
        let t = e >> 16 & 255, n = e >> 8 & 255, r = e & 255;
        t === 255 ? (t = 0, n === 255 ? (n = 0, r === 255 ? r = 0 : ++r) : ++n) : ++t, e = 0, e += t << 16, e += n << 8, e += r;
      } else
        e += 1 << 24;
      return e;
    }
    incCounter(e) {
      (e[0] = this.incWord(e[0])) === 0 && (e[1] = this.incWord(e[1]));
    }
    calculate(e, t, n) {
      let r;
      if (!(r = t.length))
        return [];
      const i = be.bitLength(t);
      for (let a = 0; a < r; a += 4) {
        this.incCounter(n);
        const s = e.encrypt(n);
        t[a] ^= s[0], t[a + 1] ^= s[1], t[a + 2] ^= s[2], t[a + 3] ^= s[3];
      }
      return be.clamp(t, i);
    }
  };
  const _t = {
    importKey(e) {
      return new _t.hmacSha1(bn.bytes.toBits(e));
    },
    pbkdf2(e, t, n, r) {
      if (n = n || 1e4, r < 0 || n < 0)
        throw new Error("invalid params to pbkdf2");
      const i = (r >> 5) + 1 << 2;
      let a, s, l, o, f;
      const d = new ArrayBuffer(i), p = new DataView(d);
      let _ = 0;
      const x = be;
      for (t = bn.bytes.toBits(t), f = 1; _ < (i || 1); f++) {
        for (a = s = e.encrypt(x.concat(t, [
          f
        ])), l = 1; l < n; l++)
          for (s = e.encrypt(s), o = 0; o < s.length; o++)
            a[o] ^= s[o];
        for (l = 0; _ < (i || 1) && l < a.length; l++)
          p.setInt32(_, a[l]), _ += 4;
      }
      return d.slice(0, r / 8);
    }
  };
  _t.hmacSha1 = class {
    constructor(e) {
      const t = this, n = t._hash = Ki.sha1, r = [
        [],
        []
      ];
      t._baseHash = [
        new n(),
        new n()
      ];
      const i = t._baseHash[0].blockSize / 32;
      e.length > i && (e = new n().update(e).finalize());
      for (let a = 0; a < i; a++)
        r[0][a] = e[a] ^ 909522486, r[1][a] = e[a] ^ 1549556828;
      t._baseHash[0].update(r[0]), t._baseHash[1].update(r[1]), t._resultHash = new n(t._baseHash[0]);
    }
    reset() {
      const e = this;
      e._resultHash = new e._hash(e._baseHash[0]), e._updated = false;
    }
    update(e) {
      const t = this;
      t._updated = true, t._resultHash.update(e);
    }
    digest() {
      const e = this, t = e._resultHash.finalize(), n = new e._hash(e._baseHash[1]).update(t).finalize();
      return e.reset(), n;
    }
    encrypt(e) {
      if (this._updated)
        throw new Error("encrypt on already updated hmac called!");
      return this.update(e), this.digest(e);
    }
  };
  const oo = typeof crypto != lt && typeof crypto.getRandomValues == Ht, Ji = "Invalid password", Qi = "Invalid signature", es = "zipjs-abort-check-password";
  function ts(e) {
    return oo ? crypto.getRandomValues(e) : ao.getRandomValues(e);
  }
  const vt = 16, lo = "raw", ns = {
    name: "PBKDF2"
  }, co = {
    name: "HMAC"
  }, fo = "SHA-1", uo = Object.assign({
    hash: co
  }, ns), er = Object.assign({
    iterations: 1e3,
    hash: {
      name: fo
    }
  }, ns), mo = [
    "deriveBits"
  ], Pt = [
    8,
    12,
    16
  ], Nt = [
    16,
    24,
    32
  ], st = 10, po = [
    0,
    0,
    0,
    0
  ], An = typeof crypto != lt, Vt = An && crypto.subtle, rs = An && typeof Vt != lt, $e = bn.bytes, _o = Xi.aes, ho = zi.ctrGladman, xo = _t.hmacSha1;
  let ai = An && rs && typeof Vt.importKey == Ht, oi = An && rs && typeof Vt.deriveBits == Ht;
  class wo extends TransformStream {
    constructor({ password: t, rawPassword: n, signed: r, encryptionStrength: i, checkPasswordOnly: a }) {
      super({
        start() {
          Object.assign(this, {
            ready: new Promise((s) => this.resolveReady = s),
            password: as(t, n),
            signed: r,
            strength: i - 1,
            pending: new Uint8Array()
          });
        },
        async transform(s, l) {
          const o = this, { password: f, strength: d, resolveReady: p, ready: _ } = o;
          f ? (await go(o, d, f, Ie(s, 0, Pt[d] + 2)), s = Ie(s, Pt[d] + 2), a ? l.error(new Error(es)) : p()) : await _;
          const x = new Uint8Array(s.length - st - (s.length - st) % vt);
          l.enqueue(is(o, s, x, 0, st, true));
        },
        async flush(s) {
          const { signed: l, ctr: o, hmac: f, pending: d, ready: p } = this;
          if (f && o) {
            await p;
            const _ = Ie(d, 0, d.length - st), x = Ie(d, d.length - st);
            let k = new Uint8Array();
            if (_.length) {
              const u = jt($e, _);
              f.update(u);
              const c = o.update(u);
              k = Mt($e, c);
            }
            if (l) {
              const u = Ie(Mt($e, f.digest()), 0, st);
              for (let c = 0; c < st; c++)
                if (u[c] != x[c])
                  throw new Error(Qi);
            }
            s.enqueue(k);
          }
        }
      });
    }
  }
  class bo extends TransformStream {
    constructor({ password: t, rawPassword: n, encryptionStrength: r }) {
      let i;
      super({
        start() {
          Object.assign(this, {
            ready: new Promise((a) => this.resolveReady = a),
            password: as(t, n),
            strength: r - 1,
            pending: new Uint8Array()
          });
        },
        async transform(a, s) {
          const l = this, { password: o, strength: f, resolveReady: d, ready: p } = l;
          let _ = new Uint8Array();
          o ? (_ = await vo(l, f, o), d()) : await p;
          const x = new Uint8Array(_.length + a.length - a.length % vt);
          x.set(_, 0), s.enqueue(is(l, a, x, _.length, 0));
        },
        async flush(a) {
          const { ctr: s, hmac: l, pending: o, ready: f } = this;
          if (l && s) {
            await f;
            let d = new Uint8Array();
            if (o.length) {
              const p = s.update(jt($e, o));
              l.update(p), d = Mt($e, p);
            }
            i.signature = Mt($e, l.digest()).slice(0, st), a.enqueue(fr(d, i.signature));
          }
        }
      }), i = this;
    }
  }
  function is(e, t, n, r, i, a) {
    const { ctr: s, hmac: l, pending: o } = e, f = t.length - i;
    o.length && (t = fr(o, t), n = So(n, f - f % vt));
    let d;
    for (d = 0; d <= f - vt; d += vt) {
      const p = jt($e, Ie(t, d, d + vt));
      a && l.update(p);
      const _ = s.update(p);
      a || l.update(_), n.set(Mt($e, _), d + r);
    }
    return e.pending = Ie(t, d), n;
  }
  async function go(e, t, n, r) {
    const i = await ss(e, t, n, Ie(r, 0, Pt[t])), a = Ie(r, Pt[t]);
    if (i[0] != a[0] || i[1] != a[1])
      throw new Error(Ji);
  }
  async function vo(e, t, n) {
    const r = ts(new Uint8Array(Pt[t])), i = await ss(e, t, n, r);
    return fr(r, i);
  }
  async function ss(e, t, n, r) {
    e.password = null;
    const i = await yo(lo, n, uo, false, mo), a = await ko(Object.assign({
      salt: r
    }, er), i, 8 * (Nt[t] * 2 + 2)), s = new Uint8Array(a), l = jt($e, Ie(s, 0, Nt[t])), o = jt($e, Ie(s, Nt[t], Nt[t] * 2)), f = Ie(s, Nt[t] * 2);
    return Object.assign(e, {
      keys: {
        key: l,
        authentication: o,
        passwordVerification: f
      },
      ctr: new ho(new _o(l), Array.from(po)),
      hmac: new xo(o)
    }), f;
  }
  async function yo(e, t, n, r, i) {
    if (ai)
      try {
        return await Vt.importKey(e, t, n, r, i);
      } catch {
        return ai = false, _t.importKey(t);
      }
    else
      return _t.importKey(t);
  }
  async function ko(e, t, n) {
    if (oi)
      try {
        return await Vt.deriveBits(e, t, n);
      } catch {
        return oi = false, _t.pbkdf2(t, e.salt, er.iterations, n);
      }
    else
      return _t.pbkdf2(t, e.salt, er.iterations, n);
  }
  function as(e, t) {
    return t === X ? dn(e) : t;
  }
  function fr(e, t) {
    let n = e;
    return e.length + t.length && (n = new Uint8Array(e.length + t.length), n.set(e, 0), n.set(t, e.length)), n;
  }
  function So(e, t) {
    if (t && t > e.length) {
      const n = e;
      e = new Uint8Array(t), e.set(n, 0);
    }
    return e;
  }
  function Ie(e, t, n) {
    return e.subarray(t, n);
  }
  function Mt(e, t) {
    return e.fromBits(t);
  }
  function jt(e, t) {
    return e.toBits(t);
  }
  const kt = 12;
  class Eo extends TransformStream {
    constructor({ password: t, passwordVerification: n, checkPasswordOnly: r }) {
      super({
        start() {
          Object.assign(this, {
            password: t,
            passwordVerification: n
          }), os(this, t);
        },
        transform(i, a) {
          const s = this;
          if (s.password) {
            const l = li(s, i.subarray(0, kt));
            if (s.password = null, l[kt - 1] != s.passwordVerification)
              throw new Error(Ji);
            i = i.subarray(kt);
          }
          r ? a.error(new Error(es)) : a.enqueue(li(s, i));
        }
      });
    }
  }
  class Ao extends TransformStream {
    constructor({ password: t, passwordVerification: n }) {
      super({
        start() {
          Object.assign(this, {
            password: t,
            passwordVerification: n
          }), os(this, t);
        },
        transform(r, i) {
          const a = this;
          let s, l;
          if (a.password) {
            a.password = null;
            const o = ts(new Uint8Array(kt));
            o[kt - 1] = a.passwordVerification, s = new Uint8Array(r.length + o.length), s.set(ci(a, o), 0), l = kt;
          } else
            s = new Uint8Array(r.length), l = 0;
          s.set(ci(a, r), l), i.enqueue(s);
        }
      });
    }
  }
  function li(e, t) {
    const n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = ls(e) ^ t[r], dr(e, n[r]);
    return n;
  }
  function ci(e, t) {
    const n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = ls(e) ^ t[r], dr(e, t[r]);
    return n;
  }
  function os(e, t) {
    const n = [
      305419896,
      591751049,
      878082192
    ];
    Object.assign(e, {
      keys: n,
      crcKey0: new Qn(n[0]),
      crcKey2: new Qn(n[2])
    });
    for (let r = 0; r < t.length; r++)
      dr(e, t.charCodeAt(r));
  }
  function dr(e, t) {
    let [n, r, i] = e.keys;
    e.crcKey0.append([
      t
    ]), n = ~e.crcKey0.get(), r = fi(Math.imul(fi(r + cs(n)), 134775813) + 1), e.crcKey2.append([
      r >>> 24
    ]), i = ~e.crcKey2.get(), e.keys = [
      n,
      r,
      i
    ];
  }
  function ls(e) {
    const t = e.keys[2] | 2;
    return cs(Math.imul(t, t ^ 1) >>> 8);
  }
  function cs(e) {
    return e & 255;
  }
  function fi(e) {
    return e & 4294967295;
  }
  const di = "deflate-raw";
  class To extends TransformStream {
    constructor(t, { chunkSize: n, CompressionStream: r, CompressionStreamNative: i }) {
      super({});
      const { compressed: a, encrypted: s, useCompressionStream: l, zipCrypto: o, signed: f, level: d } = t, p = this;
      let _, x, k = fs(super.readable);
      (!s || o) && f && (_ = new Gi(), k = He(k, _)), a && (k = us(k, l, {
        level: d,
        chunkSize: n
      }, i, r)), s && (o ? k = He(k, new Ao(t)) : (x = new bo(t), k = He(k, x))), ds(p, k, () => {
        let u;
        s && !o && (u = x.signature), (!s || o) && f && (u = new DataView(_.value.buffer).getUint32(0)), p.signature = u;
      });
    }
  }
  class Co extends TransformStream {
    constructor(t, { chunkSize: n, DecompressionStream: r, DecompressionStreamNative: i }) {
      super({});
      const { zipCrypto: a, encrypted: s, signed: l, signature: o, compressed: f, useCompressionStream: d } = t;
      let p, _, x = fs(super.readable);
      s && (a ? x = He(x, new Eo(t)) : (_ = new wo(t), x = He(x, _))), f && (x = us(x, d, {
        chunkSize: n
      }, i, r)), (!s || a) && l && (p = new Gi(), x = He(x, p)), ds(this, x, () => {
        if ((!s || a) && l) {
          const k = new DataView(p.value.buffer);
          if (o != k.getUint32(0, false))
            throw new Error(Qi);
        }
      });
    }
  }
  function fs(e) {
    return He(e, new TransformStream({
      transform(t, n) {
        t && t.length && n.enqueue(t);
      }
    }));
  }
  function ds(e, t, n) {
    t = He(t, new TransformStream({
      flush: n
    })), Object.defineProperty(e, "readable", {
      get() {
        return t;
      }
    });
  }
  function us(e, t, n, r, i) {
    try {
      const a = t && r ? r : i;
      e = He(e, new a(di, n));
    } catch {
      if (t)
        try {
          e = He(e, new i(di, n));
        } catch {
          return e;
        }
      else
        return e;
    }
    return e;
  }
  function He(e, t) {
    return e.pipeThrough(t);
  }
  const Ro = "message", Io = "start", Fo = "pull", ui = "data", Do = "ack", mi = "close", ms = "deflate", No = "inflate";
  class Oo extends TransformStream {
    constructor(t, n) {
      super({});
      const r = this, { codecType: i } = t;
      let a;
      i.startsWith(ms) ? a = To : i.startsWith(No) && (a = Co);
      let s = 0, l = 0;
      const o = new a(t, n), f = super.readable, d = new TransformStream({
        transform(_, x) {
          _ && _.length && (l += _.length, x.enqueue(_));
        },
        flush() {
          Object.assign(r, {
            inputSize: l
          });
        }
      }), p = new TransformStream({
        transform(_, x) {
          _ && _.length && (s += _.length, x.enqueue(_));
        },
        flush() {
          const { signature: _ } = o;
          Object.assign(r, {
            signature: _,
            outputSize: s,
            inputSize: l
          });
        }
      });
      Object.defineProperty(r, "readable", {
        get() {
          return f.pipeThrough(d).pipeThrough(o).pipeThrough(p);
        }
      });
    }
  }
  class Lo extends TransformStream {
    constructor(t) {
      let n;
      super({
        transform: r,
        flush(i) {
          n && n.length && i.enqueue(n);
        }
      });
      function r(i, a) {
        if (n) {
          const s = new Uint8Array(n.length + i.length);
          s.set(n), s.set(i, n.length), i = s, n = null;
        }
        i.length > t ? (a.enqueue(i.slice(0, t)), r(i.slice(t), a)) : n = i;
      }
    }
  }
  let ps = typeof Worker != lt;
  class qn {
    constructor(t, { readable: n, writable: r }, { options: i, config: a, streamOptions: s, useWebWorkers: l, transferStreams: o, scripts: f }, d) {
      const { signal: p } = s;
      return Object.assign(t, {
        busy: true,
        readable: n.pipeThrough(new Lo(a.chunkSize)).pipeThrough(new Uo(n, s), {
          signal: p
        }),
        writable: r,
        options: Object.assign({}, i),
        scripts: f,
        transferStreams: o,
        terminate() {
          return new Promise((_) => {
            const { worker: x, busy: k } = t;
            x ? (k ? t.resolveTerminated = _ : (x.terminate(), _()), t.interface = null) : _();
          });
        },
        onTaskFinished() {
          const { resolveTerminated: _ } = t;
          _ && (t.resolveTerminated = null, t.terminated = true, t.worker.terminate(), _()), t.busy = false, d(t);
        }
      }), (l && ps ? Po : _s)(t, a);
    }
  }
  class Uo extends TransformStream {
    constructor(t, { onstart: n, onprogress: r, size: i, onend: a }) {
      let s = 0;
      super({
        async start() {
          n && await Wn(n, i);
        },
        async transform(l, o) {
          s += l.length, r && await Wn(r, s, i), o.enqueue(l);
        },
        async flush() {
          t.size = s, a && await Wn(a, s);
        }
      });
    }
  }
  async function Wn(e, ...t) {
    try {
      await e(...t);
    } catch {
    }
  }
  function _s(e, t) {
    return {
      run: () => Mo(e, t)
    };
  }
  function Po(e, t) {
    const { baseURL: n, chunkSize: r } = t;
    if (!e.interface) {
      let i;
      try {
        i = Wo(e.scripts[0], n, e);
      } catch {
        return ps = false, _s(e, t);
      }
      Object.assign(e, {
        worker: i,
        interface: {
          run: () => jo(e, {
            chunkSize: r
          })
        }
      });
    }
    return e.interface;
  }
  async function Mo({ options: e, readable: t, writable: n, onTaskFinished: r }, i) {
    try {
      const a = new Oo(e, i);
      await t.pipeThrough(a).pipeTo(n, {
        preventClose: true,
        preventAbort: true
      });
      const { signature: s, inputSize: l, outputSize: o } = a;
      return {
        signature: s,
        inputSize: l,
        outputSize: o
      };
    } finally {
      r();
    }
  }
  async function jo(e, t) {
    let n, r;
    const i = new Promise((_, x) => {
      n = _, r = x;
    });
    Object.assign(e, {
      reader: null,
      writer: null,
      resolveResult: n,
      rejectResult: r,
      result: i
    });
    const { readable: a, options: s, scripts: l } = e, { writable: o, closed: f } = qo(e.writable), d = un({
      type: Io,
      scripts: l.slice(1),
      options: s,
      config: t,
      readable: a,
      writable: o
    }, e);
    d || Object.assign(e, {
      reader: a.getReader(),
      writer: o.getWriter()
    });
    const p = await i;
    return d || await o.getWriter().close(), await f, p;
  }
  function qo(e) {
    let t;
    const n = new Promise((i) => t = i);
    return {
      writable: new WritableStream({
        async write(i) {
          const a = e.getWriter();
          await a.ready, await a.write(i), a.releaseLock();
        },
        close() {
          t();
        },
        abort(i) {
          return e.getWriter().abort(i);
        }
      }),
      closed: n
    };
  }
  let pi = true, _i = true;
  function Wo(e, t, n) {
    const r = {
      type: "module"
    };
    let i, a;
    typeof e == Ht && (e = e());
    try {
      i = new URL(e, t);
    } catch {
      i = e;
    }
    if (pi)
      try {
        a = new Worker(i);
      } catch {
        pi = false, a = new Worker(i, r);
      }
    else
      a = new Worker(i, r);
    return a.addEventListener(Ro, (s) => Bo(s, n)), a;
  }
  function un(e, { worker: t, writer: n, onTaskFinished: r, transferStreams: i }) {
    try {
      const { value: a, readable: s, writable: l } = e, o = [];
      if (a && (a.byteLength < a.buffer.byteLength ? e.value = a.buffer.slice(0, a.byteLength) : e.value = a.buffer, o.push(e.value)), i && _i ? (s && o.push(s), l && o.push(l)) : e.readable = e.writable = null, o.length)
        try {
          return t.postMessage(e, o), true;
        } catch {
          _i = false, e.readable = e.writable = null, t.postMessage(e);
        }
      else
        t.postMessage(e);
    } catch (a) {
      throw n && n.releaseLock(), r(), a;
    }
  }
  async function Bo({ data: e }, t) {
    const { type: n, value: r, messageId: i, result: a, error: s } = e, { reader: l, writer: o, resolveResult: f, rejectResult: d, onTaskFinished: p } = t;
    try {
      if (s) {
        const { message: x, stack: k, code: u, name: c } = s, m = new Error(x);
        Object.assign(m, {
          stack: k,
          code: u,
          name: c
        }), _(m);
      } else {
        if (n == Fo) {
          const { value: x, done: k } = await l.read();
          un({
            type: ui,
            value: x,
            done: k,
            messageId: i
          }, t);
        }
        n == ui && (await o.ready, await o.write(new Uint8Array(r)), un({
          type: Do,
          messageId: i
        }, t)), n == mi && _(null, a);
      }
    } catch (x) {
      un({
        type: mi,
        messageId: i
      }, t), _(x);
    }
    function _(x, k) {
      x ? d(x) : f(k), o && o.releaseLock(), p();
    }
  }
  let dt = [];
  const Bn = [];
  let hi = 0;
  async function $o(e, t) {
    const { options: n, config: r } = t, { transferStreams: i, useWebWorkers: a, useCompressionStream: s, codecType: l, compressed: o, signed: f, encrypted: d } = n, { workerScripts: p, maxWorkers: _ } = r;
    t.transferStreams = i || i === X;
    const x = !o && !f && !d && !t.transferStreams;
    return t.useWebWorkers = !x && (a || a === X && r.useWebWorkers), t.scripts = t.useWebWorkers && p ? p[l] : [], n.useCompressionStream = s || s === X && r.useCompressionStream, (await k()).run();
    async function k() {
      const c = dt.find((m) => !m.busy);
      if (c)
        return xi(c), new qn(c, e, t, u);
      if (dt.length < _) {
        const m = {
          indexWorker: hi
        };
        return hi++, dt.push(m), new qn(m, e, t, u);
      } else
        return new Promise((m) => Bn.push({
          resolve: m,
          stream: e,
          workerOptions: t
        }));
    }
    function u(c) {
      if (Bn.length) {
        const [{ resolve: m, stream: h, workerOptions: w }] = Bn.splice(0, 1);
        m(new qn(c, h, w, u));
      } else
        c.worker ? (xi(c), Ho(c, t)) : dt = dt.filter((m) => m != c);
    }
  }
  function Ho(e, t) {
    const { config: n } = t, { terminateWorkerTimeout: r } = n;
    Number.isFinite(r) && r >= 0 && (e.terminated ? e.terminated = false : e.terminateTimeout = setTimeout(async () => {
      dt = dt.filter((i) => i != e);
      try {
        await e.terminate();
      } catch {
      }
    }, r));
  }
  function xi(e) {
    const { terminateTimeout: t } = e;
    t && (clearTimeout(t), e.terminateTimeout = null);
  }
  function Vo(e, t = {}) {
    const n = `const{Array:e,Object:t,Number:n,Math:r,Error:s,Uint8Array:i,Uint16Array:o,Uint32Array:c,Int32Array:f,Map:a,DataView:l,Promise:u,TextEncoder:w,crypto:h,postMessage:d,TransformStream:p,ReadableStream:y,WritableStream:m,CompressionStream:b,DecompressionStream:g}=self,k=void 0,v="undefined",S="function";class z{constructor(e){return class extends p{constructor(t,n){const r=new e(n);super({transform(e,t){t.enqueue(r.append(e))},flush(e){const t=r.flush();t&&e.enqueue(t)}})}}}}const C=[];for(let e=0;256>e;e++){let t=e;for(let e=0;8>e;e++)1&t?t=t>>>1^3988292384:t>>>=1;C[e]=t}class x{constructor(e){this.t=e||-1}append(e){let t=0|this.t;for(let n=0,r=0|e.length;r>n;n++)t=t>>>8^C[255&(t^e[n])];this.t=t}get(){return~this.t}}class A extends p{constructor(){let e;const t=new x;super({transform(e,n){t.append(e),n.enqueue(e)},flush(){const n=new i(4);new l(n.buffer).setUint32(0,t.get()),e.value=n}}),e=this}}const _={concat(e,t){if(0===e.length||0===t.length)return e.concat(t);const n=e[e.length-1],r=_.i(n);return 32===r?e.concat(t):_.o(t,r,0|n,e.slice(0,e.length-1))},l(e){const t=e.length;if(0===t)return 0;const n=e[t-1];return 32*(t-1)+_.i(n)},u(e,t){if(32*e.length<t)return e;const n=(e=e.slice(0,r.ceil(t/32))).length;return t&=31,n>0&&t&&(e[n-1]=_.h(t,e[n-1]&2147483648>>t-1,1)),e},h:(e,t,n)=>32===e?t:(n?0|t:t<<32-e)+1099511627776*e,i:e=>r.round(e/1099511627776)||32,o(e,t,n,r){for(void 0===r&&(r=[]);t>=32;t-=32)r.push(n),n=0;if(0===t)return r.concat(e);for(let s=0;s<e.length;s++)r.push(n|e[s]>>>t),n=e[s]<<32-t;const s=e.length?e[e.length-1]:0,i=_.i(s);return r.push(_.h(t+i&31,t+i>32?n:r.pop(),1)),r}},I={bytes:{p(e){const t=_.l(e)/8,n=new i(t);let r;for(let s=0;t>s;s++)3&s||(r=e[s/4]),n[s]=r>>>24,r<<=8;return n},m(e){const t=[];let n,r=0;for(n=0;n<e.length;n++)r=r<<8|e[n],3&~n||(t.push(r),r=0);return 3&n&&t.push(_.h(8*(3&n),r)),t}}},P=class{constructor(e){const t=this;t.blockSize=512,t.k=[1732584193,4023233417,2562383102,271733878,3285377520],t.v=[1518500249,1859775393,2400959708,3395469782],e?(t.S=e.S.slice(0),t.C=e.C.slice(0),t.A=e.A):t.reset()}reset(){const e=this;return e.S=e.k.slice(0),e.C=[],e.A=0,e}update(e){const t=this;"string"==typeof e&&(e=I._.m(e));const n=t.C=_.concat(t.C,e),r=t.A,i=t.A=r+_.l(e);if(i>9007199254740991)throw new s("Cannot hash more than 2^53 - 1 bits");const o=new c(n);let f=0;for(let e=t.blockSize+r-(t.blockSize+r&t.blockSize-1);i>=e;e+=t.blockSize)t.I(o.subarray(16*f,16*(f+1))),f+=1;return n.splice(0,16*f),t}P(){const e=this;let t=e.C;const n=e.S;t=_.concat(t,[_.h(1,1)]);for(let e=t.length+2;15&e;e++)t.push(0);for(t.push(r.floor(e.A/4294967296)),t.push(0|e.A);t.length;)e.I(t.splice(0,16));return e.reset(),n}D(e,t,n,r){return e>19?e>39?e>59?e>79?void 0:t^n^r:t&n|t&r|n&r:t^n^r:t&n|~t&r}V(e,t){return t<<e|t>>>32-e}I(t){const n=this,s=n.S,i=e(80);for(let e=0;16>e;e++)i[e]=t[e];let o=s[0],c=s[1],f=s[2],a=s[3],l=s[4];for(let e=0;79>=e;e++){16>e||(i[e]=n.V(1,i[e-3]^i[e-8]^i[e-14]^i[e-16]));const t=n.V(5,o)+n.D(e,c,f,a)+l+i[e]+n.v[r.floor(e/20)]|0;l=a,a=f,f=n.V(30,c),c=o,o=t}s[0]=s[0]+o|0,s[1]=s[1]+c|0,s[2]=s[2]+f|0,s[3]=s[3]+a|0,s[4]=s[4]+l|0}},D={getRandomValues(e){const t=new c(e.buffer),n=e=>{let t=987654321;const n=4294967295;return()=>(t=36969*(65535&t)+(t>>16)&n,(((t<<16)+(e=18e3*(65535&e)+(e>>16)&n)&n)/4294967296+.5)*(r.random()>.5?1:-1))};for(let s,i=0;i<e.length;i+=4){const e=n(4294967296*(s||r.random()));s=987654071*e(),t[i/4]=4294967296*e()|0}return e}},V={importKey:e=>new V.R(I.bytes.m(e)),B(e,t,n,r){if(n=n||1e4,0>r||0>n)throw new s("invalid params to pbkdf2");const i=1+(r>>5)<<2;let o,c,f,a,u;const w=new ArrayBuffer(i),h=new l(w);let d=0;const p=_;for(t=I.bytes.m(t),u=1;(i||1)>d;u++){for(o=c=e.encrypt(p.concat(t,[u])),f=1;n>f;f++)for(c=e.encrypt(c),a=0;a<c.length;a++)o[a]^=c[a];for(f=0;(i||1)>d&&f<o.length;f++)h.setInt32(d,o[f]),d+=4}return w.slice(0,r/8)},R:class{constructor(e){const t=this,n=t.M=P,r=[[],[]];t.U=[new n,new n];const s=t.U[0].blockSize/32;e.length>s&&(e=(new n).update(e).P());for(let t=0;s>t;t++)r[0][t]=909522486^e[t],r[1][t]=1549556828^e[t];t.U[0].update(r[0]),t.U[1].update(r[1]),t.K=new n(t.U[0])}reset(){const e=this;e.K=new e.M(e.U[0]),e.N=!1}update(e){this.N=!0,this.K.update(e)}digest(){const e=this,t=e.K.P(),n=new e.M(e.U[1]).update(t).P();return e.reset(),n}encrypt(e){if(this.N)throw new s("encrypt on already updated hmac called!");return this.update(e),this.digest(e)}}},R=typeof h!=v&&typeof h.getRandomValues==S,B="Invalid password",E="Invalid signature",M="zipjs-abort-check-password";function U(e){return R?h.getRandomValues(e):D.getRandomValues(e)}const K=16,N={name:"PBKDF2"},O=t.assign({hash:{name:"HMAC"}},N),T=t.assign({iterations:1e3,hash:{name:"SHA-1"}},N),W=["deriveBits"],j=[8,12,16],H=[16,24,32],L=10,F=[0,0,0,0],q=typeof h!=v,G=q&&h.subtle,J=q&&typeof G!=v,Q=I.bytes,X=class{constructor(e){const t=this;t.O=[[[],[],[],[],[]],[[],[],[],[],[]]],t.O[0][0][0]||t.T();const n=t.O[0][4],r=t.O[1],i=e.length;let o,c,f,a=1;if(4!==i&&6!==i&&8!==i)throw new s("invalid aes key size");for(t.v=[c=e.slice(0),f=[]],o=i;4*i+28>o;o++){let e=c[o-1];(o%i==0||8===i&&o%i==4)&&(e=n[e>>>24]<<24^n[e>>16&255]<<16^n[e>>8&255]<<8^n[255&e],o%i==0&&(e=e<<8^e>>>24^a<<24,a=a<<1^283*(a>>7))),c[o]=c[o-i]^e}for(let e=0;o;e++,o--){const t=c[3&e?o:o-4];f[e]=4>=o||4>e?t:r[0][n[t>>>24]]^r[1][n[t>>16&255]]^r[2][n[t>>8&255]]^r[3][n[255&t]]}}encrypt(e){return this.W(e,0)}decrypt(e){return this.W(e,1)}T(){const e=this.O[0],t=this.O[1],n=e[4],r=t[4],s=[],i=[];let o,c,f,a;for(let e=0;256>e;e++)i[(s[e]=e<<1^283*(e>>7))^e]=e;for(let l=o=0;!n[l];l^=c||1,o=i[o]||1){let i=o^o<<1^o<<2^o<<3^o<<4;i=i>>8^255&i^99,n[l]=i,r[i]=l,a=s[f=s[c=s[l]]];let u=16843009*a^65537*f^257*c^16843008*l,w=257*s[i]^16843008*i;for(let n=0;4>n;n++)e[n][l]=w=w<<24^w>>>8,t[n][i]=u=u<<24^u>>>8}for(let n=0;5>n;n++)e[n]=e[n].slice(0),t[n]=t[n].slice(0)}W(e,t){if(4!==e.length)throw new s("invalid aes block size");const n=this.v[t],r=n.length/4-2,i=[0,0,0,0],o=this.O[t],c=o[0],f=o[1],a=o[2],l=o[3],u=o[4];let w,h,d,p=e[0]^n[0],y=e[t?3:1]^n[1],m=e[2]^n[2],b=e[t?1:3]^n[3],g=4;for(let e=0;r>e;e++)w=c[p>>>24]^f[y>>16&255]^a[m>>8&255]^l[255&b]^n[g],h=c[y>>>24]^f[m>>16&255]^a[b>>8&255]^l[255&p]^n[g+1],d=c[m>>>24]^f[b>>16&255]^a[p>>8&255]^l[255&y]^n[g+2],b=c[b>>>24]^f[p>>16&255]^a[y>>8&255]^l[255&m]^n[g+3],g+=4,p=w,y=h,m=d;for(let e=0;4>e;e++)i[t?3&-e:e]=u[p>>>24]<<24^u[y>>16&255]<<16^u[m>>8&255]<<8^u[255&b]^n[g++],w=p,p=y,y=m,m=b,b=w;return i}},Y=class{constructor(e,t){this.j=e,this.H=t,this.L=t}reset(){this.L=this.H}update(e){return this.F(this.j,e,this.L)}q(e){if(255&~(e>>24))e+=1<<24;else{let t=e>>16&255,n=e>>8&255,r=255&e;255===t?(t=0,255===n?(n=0,255===r?r=0:++r):++n):++t,e=0,e+=t<<16,e+=n<<8,e+=r}return e}G(e){0===(e[0]=this.q(e[0]))&&(e[1]=this.q(e[1]))}F(e,t,n){let r;if(!(r=t.length))return[];const s=_.l(t);for(let s=0;r>s;s+=4){this.G(n);const r=e.encrypt(n);t[s]^=r[0],t[s+1]^=r[1],t[s+2]^=r[2],t[s+3]^=r[3]}return _.u(t,s)}},Z=V.R;let $=q&&J&&typeof G.importKey==S,ee=q&&J&&typeof G.deriveBits==S;class te extends p{constructor({password:e,rawPassword:n,signed:r,encryptionStrength:o,checkPasswordOnly:c}){super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:ie(e,n),signed:r,X:o-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:o,J:f,ready:a}=n;r?(await(async(e,t,n,r)=>{const i=await se(e,t,n,ce(r,0,j[t])),o=ce(r,j[t]);if(i[0]!=o[0]||i[1]!=o[1])throw new s(B)})(n,o,r,ce(e,0,j[o]+2)),e=ce(e,j[o]+2),c?t.error(new s(M)):f()):await a;const l=new i(e.length-L-(e.length-L)%K);t.enqueue(re(n,e,l,0,L,!0))},async flush(e){const{signed:t,Y:n,Z:r,pending:o,ready:c}=this;if(r&&n){await c;const f=ce(o,0,o.length-L),a=ce(o,o.length-L);let l=new i;if(f.length){const e=ae(Q,f);r.update(e);const t=n.update(e);l=fe(Q,t)}if(t){const e=ce(fe(Q,r.digest()),0,L);for(let t=0;L>t;t++)if(e[t]!=a[t])throw new s(E)}e.enqueue(l)}}})}}class ne extends p{constructor({password:e,rawPassword:n,encryptionStrength:r}){let s;super({start(){t.assign(this,{ready:new u((e=>this.J=e)),password:ie(e,n),X:r-1,pending:new i})},async transform(e,t){const n=this,{password:r,X:s,J:o,ready:c}=n;let f=new i;r?(f=await(async(e,t,n)=>{const r=U(new i(j[t]));return oe(r,await se(e,t,n,r))})(n,s,r),o()):await c;const a=new i(f.length+e.length-e.length%K);a.set(f,0),t.enqueue(re(n,e,a,f.length,0))},async flush(e){const{Y:t,Z:n,pending:r,ready:o}=this;if(n&&t){await o;let c=new i;if(r.length){const e=t.update(ae(Q,r));n.update(e),c=fe(Q,e)}s.signature=fe(Q,n.digest()).slice(0,L),e.enqueue(oe(c,s.signature))}}}),s=this}}function re(e,t,n,r,s,o){const{Y:c,Z:f,pending:a}=e,l=t.length-s;let u;for(a.length&&(t=oe(a,t),n=((e,t)=>{if(t&&t>e.length){const n=e;(e=new i(t)).set(n,0)}return e})(n,l-l%K)),u=0;l-K>=u;u+=K){const e=ae(Q,ce(t,u,u+K));o&&f.update(e);const s=c.update(e);o||f.update(s),n.set(fe(Q,s),u+r)}return e.pending=ce(t,u),n}async function se(n,r,s,o){n.password=null;const c=await(async(e,t,n,r,s)=>{if(!$)return V.importKey(t);try{return await G.importKey("raw",t,n,!1,s)}catch(e){return $=!1,V.importKey(t)}})(0,s,O,0,W),f=await(async(e,t,n)=>{if(!ee)return V.B(t,e.salt,T.iterations,n);try{return await G.deriveBits(e,t,n)}catch(r){return ee=!1,V.B(t,e.salt,T.iterations,n)}})(t.assign({salt:o},T),c,8*(2*H[r]+2)),a=new i(f),l=ae(Q,ce(a,0,H[r])),u=ae(Q,ce(a,H[r],2*H[r])),w=ce(a,2*H[r]);return t.assign(n,{keys:{key:l,$:u,passwordVerification:w},Y:new Y(new X(l),e.from(F)),Z:new Z(u)}),w}function ie(e,t){return t===k?(e=>{if(typeof w==v){const t=new i((e=unescape(encodeURIComponent(e))).length);for(let n=0;n<t.length;n++)t[n]=e.charCodeAt(n);return t}return(new w).encode(e)})(e):t}function oe(e,t){let n=e;return e.length+t.length&&(n=new i(e.length+t.length),n.set(e,0),n.set(t,e.length)),n}function ce(e,t,n){return e.subarray(t,n)}function fe(e,t){return e.p(t)}function ae(e,t){return e.m(t)}class le extends p{constructor({password:e,passwordVerification:n,checkPasswordOnly:r}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;if(n.password){const t=we(n,e.subarray(0,12));if(n.password=null,t[11]!=n.passwordVerification)throw new s(B);e=e.subarray(12)}r?t.error(new s(M)):t.enqueue(we(n,e))}})}}class ue extends p{constructor({password:e,passwordVerification:n}){super({start(){t.assign(this,{password:e,passwordVerification:n}),de(this,e)},transform(e,t){const n=this;let r,s;if(n.password){n.password=null;const t=U(new i(12));t[11]=n.passwordVerification,r=new i(e.length+t.length),r.set(he(n,t),0),s=12}else r=new i(e.length),s=0;r.set(he(n,e),s),t.enqueue(r)}})}}function we(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,n[r]);return n}function he(e,t){const n=new i(t.length);for(let r=0;r<t.length;r++)n[r]=ye(e)^t[r],pe(e,t[r]);return n}function de(e,n){const r=[305419896,591751049,878082192];t.assign(e,{keys:r,ee:new x(r[0]),te:new x(r[2])});for(let t=0;t<n.length;t++)pe(e,n.charCodeAt(t))}function pe(e,t){let[n,s,i]=e.keys;e.ee.append([t]),n=~e.ee.get(),s=be(r.imul(be(s+me(n)),134775813)+1),e.te.append([s>>>24]),i=~e.te.get(),e.keys=[n,s,i]}function ye(e){const t=2|e.keys[2];return me(r.imul(t,1^t)>>>8)}function me(e){return 255&e}function be(e){return 4294967295&e}const ge="deflate-raw";class ke extends p{constructor(e,{chunkSize:t,CompressionStream:n,CompressionStreamNative:r}){super({});const{compressed:s,encrypted:i,useCompressionStream:o,zipCrypto:c,signed:f,level:a}=e,u=this;let w,h,d=Se(super.readable);i&&!c||!f||(w=new A,d=xe(d,w)),s&&(d=Ce(d,o,{level:a,chunkSize:t},r,n)),i&&(c?d=xe(d,new ue(e)):(h=new ne(e),d=xe(d,h))),ze(u,d,(()=>{let e;i&&!c&&(e=h.signature),i&&!c||!f||(e=new l(w.value.buffer).getUint32(0)),u.signature=e}))}}class ve extends p{constructor(e,{chunkSize:t,DecompressionStream:n,DecompressionStreamNative:r}){super({});const{zipCrypto:i,encrypted:o,signed:c,signature:f,compressed:a,useCompressionStream:u}=e;let w,h,d=Se(super.readable);o&&(i?d=xe(d,new le(e)):(h=new te(e),d=xe(d,h))),a&&(d=Ce(d,u,{chunkSize:t},r,n)),o&&!i||!c||(w=new A,d=xe(d,w)),ze(this,d,(()=>{if((!o||i)&&c){const e=new l(w.value.buffer);if(f!=e.getUint32(0,!1))throw new s(E)}}))}}function Se(e){return xe(e,new p({transform(e,t){e&&e.length&&t.enqueue(e)}}))}function ze(e,n,r){n=xe(n,new p({flush:r})),t.defineProperty(e,"readable",{get:()=>n})}function Ce(e,t,n,r,s){try{e=xe(e,new(t&&r?r:s)(ge,n))}catch(r){if(!t)return e;try{e=xe(e,new s(ge,n))}catch(t){return e}}return e}function xe(e,t){return e.pipeThrough(t)}const Ae="data",_e="close";class Ie extends p{constructor(e,n){super({});const r=this,{codecType:s}=e;let i;s.startsWith("deflate")?i=ke:s.startsWith("inflate")&&(i=ve);let o=0,c=0;const f=new i(e,n),a=super.readable,l=new p({transform(e,t){e&&e.length&&(c+=e.length,t.enqueue(e))},flush(){t.assign(r,{inputSize:c})}}),u=new p({transform(e,t){e&&e.length&&(o+=e.length,t.enqueue(e))},flush(){const{signature:e}=f;t.assign(r,{signature:e,outputSize:o,inputSize:c})}});t.defineProperty(r,"readable",{get:()=>a.pipeThrough(l).pipeThrough(f).pipeThrough(u)})}}class Pe extends p{constructor(e){let t;super({transform:function n(r,s){if(t){const e=new i(t.length+r.length);e.set(t),e.set(r,t.length),r=e,t=null}r.length>e?(s.enqueue(r.slice(0,e)),n(r.slice(e),s)):t=r},flush(e){t&&t.length&&e.enqueue(t)}})}}const De=new a,Ve=new a;let Re,Be=0,Ee=!0;async function Me(e){try{const{options:t,scripts:r,config:s}=e;if(r&&r.length)try{Ee?importScripts.apply(k,r):await Ue(r)}catch(e){Ee=!1,await Ue(r)}self.initCodec&&self.initCodec(),s.CompressionStreamNative=self.CompressionStream,s.DecompressionStreamNative=self.DecompressionStream,self.Deflate&&(s.CompressionStream=new z(self.Deflate)),self.Inflate&&(s.DecompressionStream=new z(self.Inflate));const i={highWaterMark:1},o=e.readable||new y({async pull(e){const t=new u((e=>De.set(Be,e)));Ke({type:"pull",messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER;const{value:r,done:s}=await t;e.enqueue(r),s&&e.close()}},i),c=e.writable||new m({async write(e){let t;const r=new u((e=>t=e));Ve.set(Be,t),Ke({type:Ae,value:e,messageId:Be}),Be=(Be+1)%n.MAX_SAFE_INTEGER,await r}},i),f=new Ie(t,s);Re=new AbortController;const{signal:a}=Re;await o.pipeThrough(f).pipeThrough(new Pe(s.chunkSize)).pipeTo(c,{signal:a,preventClose:!0,preventAbort:!0}),await c.getWriter().close();const{signature:l,inputSize:w,outputSize:h}=f;Ke({type:_e,result:{signature:l,inputSize:w,outputSize:h}})}catch(e){Ne(e)}}async function Ue(e){for(const t of e)await import(t)}function Ke(e){let{value:t}=e;if(t)if(t.length)try{t=new i(t),e.value=t.buffer,d(e,[e.value])}catch(t){d(e)}else d(e);else d(e)}function Ne(e=new s("Unknown error")){const{message:t,stack:n,code:r,name:i}=e;d({error:{message:t,stack:n,code:r,name:i}})}addEventListener("message",(({data:e})=>{const{type:t,messageId:n,value:r,done:s}=e;try{if("start"==t&&Me(e),t==Ae){const e=De.get(n);De.delete(n),e({value:new i(r),done:s})}if("ack"==t){const e=Ve.get(n);Ve.delete(n),e()}t==_e&&Re.abort()}catch(e){Ne(e)}}));const Oe=-2;function Te(t){return We(t.map((([t,n])=>new e(t).fill(n,0,t))))}function We(t){return t.reduce(((t,n)=>t.concat(e.isArray(n)?We(n):n)),[])}const je=[0,1,2,3].concat(...Te([[2,4],[2,5],[4,6],[4,7],[8,8],[8,9],[16,10],[16,11],[32,12],[32,13],[64,14],[64,15],[2,0],[1,16],[1,17],[2,18],[2,19],[4,20],[4,21],[8,22],[8,23],[16,24],[16,25],[32,26],[32,27],[64,28],[64,29]]));function He(){const e=this;function t(e,t){let n=0;do{n|=1&e,e>>>=1,n<<=1}while(--t>0);return n>>>1}e.ne=n=>{const s=e.re,i=e.ie.se,o=e.ie.oe;let c,f,a,l=-1;for(n.ce=0,n.fe=573,c=0;o>c;c++)0!==s[2*c]?(n.ae[++n.ce]=l=c,n.le[c]=0):s[2*c+1]=0;for(;2>n.ce;)a=n.ae[++n.ce]=2>l?++l:0,s[2*a]=1,n.le[a]=0,n.ue--,i&&(n.we-=i[2*a+1]);for(e.he=l,c=r.floor(n.ce/2);c>=1;c--)n.de(s,c);a=o;do{c=n.ae[1],n.ae[1]=n.ae[n.ce--],n.de(s,1),f=n.ae[1],n.ae[--n.fe]=c,n.ae[--n.fe]=f,s[2*a]=s[2*c]+s[2*f],n.le[a]=r.max(n.le[c],n.le[f])+1,s[2*c+1]=s[2*f+1]=a,n.ae[1]=a++,n.de(s,1)}while(n.ce>=2);n.ae[--n.fe]=n.ae[1],(t=>{const n=e.re,r=e.ie.se,s=e.ie.pe,i=e.ie.ye,o=e.ie.me;let c,f,a,l,u,w,h=0;for(l=0;15>=l;l++)t.be[l]=0;for(n[2*t.ae[t.fe]+1]=0,c=t.fe+1;573>c;c++)f=t.ae[c],l=n[2*n[2*f+1]+1]+1,l>o&&(l=o,h++),n[2*f+1]=l,f>e.he||(t.be[l]++,u=0,i>f||(u=s[f-i]),w=n[2*f],t.ue+=w*(l+u),r&&(t.we+=w*(r[2*f+1]+u)));if(0!==h){do{for(l=o-1;0===t.be[l];)l--;t.be[l]--,t.be[l+1]+=2,t.be[o]--,h-=2}while(h>0);for(l=o;0!==l;l--)for(f=t.be[l];0!==f;)a=t.ae[--c],a>e.he||(n[2*a+1]!=l&&(t.ue+=(l-n[2*a+1])*n[2*a],n[2*a+1]=l),f--)}})(n),((e,n,r)=>{const s=[];let i,o,c,f=0;for(i=1;15>=i;i++)s[i]=f=f+r[i-1]<<1;for(o=0;n>=o;o++)c=e[2*o+1],0!==c&&(e[2*o]=t(s[c]++,c))})(s,e.he,n.be)}}function Le(e,t,n,r,s){const i=this;i.se=e,i.pe=t,i.ye=n,i.oe=r,i.me=s}He.ge=[0,1,2,3,4,5,6,7].concat(...Te([[2,8],[2,9],[2,10],[2,11],[4,12],[4,13],[4,14],[4,15],[8,16],[8,17],[8,18],[8,19],[16,20],[16,21],[16,22],[16,23],[32,24],[32,25],[32,26],[31,27],[1,28]])),He.ke=[0,1,2,3,4,5,6,7,8,10,12,14,16,20,24,28,32,40,48,56,64,80,96,112,128,160,192,224,0],He.ve=[0,1,2,3,4,6,8,12,16,24,32,48,64,96,128,192,256,384,512,768,1024,1536,2048,3072,4096,6144,8192,12288,16384,24576],He.Se=e=>256>e?je[e]:je[256+(e>>>7)],He.ze=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],He.Ce=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],He.xe=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],He.Ae=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];const Fe=Te([[144,8],[112,9],[24,7],[8,8]]);Le._e=We([12,140,76,204,44,172,108,236,28,156,92,220,60,188,124,252,2,130,66,194,34,162,98,226,18,146,82,210,50,178,114,242,10,138,74,202,42,170,106,234,26,154,90,218,58,186,122,250,6,134,70,198,38,166,102,230,22,150,86,214,54,182,118,246,14,142,78,206,46,174,110,238,30,158,94,222,62,190,126,254,1,129,65,193,33,161,97,225,17,145,81,209,49,177,113,241,9,137,73,201,41,169,105,233,25,153,89,217,57,185,121,249,5,133,69,197,37,165,101,229,21,149,85,213,53,181,117,245,13,141,77,205,45,173,109,237,29,157,93,221,61,189,125,253,19,275,147,403,83,339,211,467,51,307,179,435,115,371,243,499,11,267,139,395,75,331,203,459,43,299,171,427,107,363,235,491,27,283,155,411,91,347,219,475,59,315,187,443,123,379,251,507,7,263,135,391,71,327,199,455,39,295,167,423,103,359,231,487,23,279,151,407,87,343,215,471,55,311,183,439,119,375,247,503,15,271,143,399,79,335,207,463,47,303,175,431,111,367,239,495,31,287,159,415,95,351,223,479,63,319,191,447,127,383,255,511,0,64,32,96,16,80,48,112,8,72,40,104,24,88,56,120,4,68,36,100,20,84,52,116,3,131,67,195,35,163,99,227].map(((e,t)=>[e,Fe[t]])));const qe=Te([[30,5]]);function Ge(e,t,n,r,s){const i=this;i.Ie=e,i.Pe=t,i.De=n,i.Ve=r,i.Re=s}Le.Be=We([0,16,8,24,4,20,12,28,2,18,10,26,6,22,14,30,1,17,9,25,5,21,13,29,3,19,11,27,7,23].map(((e,t)=>[e,qe[t]]))),Le.Ee=new Le(Le._e,He.ze,257,286,15),Le.Me=new Le(Le.Be,He.Ce,0,30,15),Le.Ue=new Le(null,He.xe,0,19,7);const Je=[new Ge(0,0,0,0,0),new Ge(4,4,8,4,1),new Ge(4,5,16,8,1),new Ge(4,6,32,32,1),new Ge(4,4,16,16,2),new Ge(8,16,32,32,2),new Ge(8,16,128,128,2),new Ge(8,32,128,256,2),new Ge(32,128,258,1024,2),new Ge(32,258,258,4096,2)],Qe=["need dictionary","stream end","","","stream error","data error","","buffer error","",""],Xe=113,Ye=666,Ze=262;function $e(e,t,n,r){const s=e[2*t],i=e[2*n];return i>s||s==i&&r[t]<=r[n]}function et(){const e=this;let t,n,s,c,f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z,C,x,A,_,I,P,D,V,R,B,E,M,U;const K=new He,N=new He,O=new He;let T,W,j,H,L,F;function q(){let t;for(t=0;286>t;t++)E[2*t]=0;for(t=0;30>t;t++)M[2*t]=0;for(t=0;19>t;t++)U[2*t]=0;E[512]=1,e.ue=e.we=0,W=j=0}function G(e,t){let n,r=-1,s=e[1],i=0,o=7,c=4;0===s&&(o=138,c=3),e[2*(t+1)+1]=65535;for(let f=0;t>=f;f++)n=s,s=e[2*(f+1)+1],++i<o&&n==s||(c>i?U[2*n]+=i:0!==n?(n!=r&&U[2*n]++,U[32]++):i>10?U[36]++:U[34]++,i=0,r=n,0===s?(o=138,c=3):n==s?(o=6,c=3):(o=7,c=4))}function J(t){e.Ke[e.pending++]=t}function Q(e){J(255&e),J(e>>>8&255)}function X(e,t){let n;const r=t;F>16-r?(n=e,L|=n<<F&65535,Q(L),L=n>>>16-F,F+=r-16):(L|=e<<F&65535,F+=r)}function Y(e,t){const n=2*e;X(65535&t[n],65535&t[n+1])}function Z(e,t){let n,r,s=-1,i=e[1],o=0,c=7,f=4;for(0===i&&(c=138,f=3),n=0;t>=n;n++)if(r=i,i=e[2*(n+1)+1],++o>=c||r!=i){if(f>o)do{Y(r,U)}while(0!=--o);else 0!==r?(r!=s&&(Y(r,U),o--),Y(16,U),X(o-3,2)):o>10?(Y(18,U),X(o-11,7)):(Y(17,U),X(o-3,3));o=0,s=r,0===i?(c=138,f=3):r==i?(c=6,f=3):(c=7,f=4)}}function $(){16==F?(Q(L),L=0,F=0):8>F||(J(255&L),L>>>=8,F-=8)}function ee(t,n){let s,i,o;if(e.Ne[W]=t,e.Oe[W]=255&n,W++,0===t?E[2*n]++:(j++,t--,E[2*(He.ge[n]+256+1)]++,M[2*He.Se(t)]++),!(8191&W)&&D>2){for(s=8*W,i=C-k,o=0;30>o;o++)s+=M[2*o]*(5+He.Ce[o]);if(s>>>=3,j<r.floor(W/2)&&s<r.floor(i/2))return!0}return W==T-1}function te(t,n){let r,s,i,o,c=0;if(0!==W)do{r=e.Ne[c],s=e.Oe[c],c++,0===r?Y(s,t):(i=He.ge[s],Y(i+256+1,t),o=He.ze[i],0!==o&&(s-=He.ke[i],X(s,o)),r--,i=He.Se(r),Y(i,n),o=He.Ce[i],0!==o&&(r-=He.ve[i],X(r,o)))}while(W>c);Y(256,t),H=t[513]}function ne(){F>8?Q(L):F>0&&J(255&L),L=0,F=0}function re(t,n,r){X(0+(r?1:0),3),((t,n)=>{ne(),H=8,Q(n),Q(~n),e.Ke.set(u.subarray(t,t+n),e.pending),e.pending+=n})(t,n)}function se(n){((t,n,r)=>{let s,i,o=0;D>0?(K.ne(e),N.ne(e),o=(()=>{let t;for(G(E,K.he),G(M,N.he),O.ne(e),t=18;t>=3&&0===U[2*He.Ae[t]+1];t--);return e.ue+=14+3*(t+1),t})(),s=e.ue+3+7>>>3,i=e.we+3+7>>>3,i>s||(s=i)):s=i=n+5,n+4>s||-1==t?i==s?(X(2+(r?1:0),3),te(Le._e,Le.Be)):(X(4+(r?1:0),3),((e,t,n)=>{let r;for(X(e-257,5),X(t-1,5),X(n-4,4),r=0;n>r;r++)X(U[2*He.Ae[r]+1],3);Z(E,e-1),Z(M,t-1)})(K.he+1,N.he+1,o+1),te(E,M)):re(t,n,r),q(),r&&ne()})(0>k?-1:k,C-k,n),k=C,t.Te()}function ie(){let e,n,r,s;do{if(s=w-A-C,0===s&&0===C&&0===A)s=f;else if(-1==s)s--;else if(C>=f+f-Ze){u.set(u.subarray(f,f+f),0),x-=f,C-=f,k-=f,e=y,r=e;do{n=65535&d[--r],d[r]=f>n?0:n-f}while(0!=--e);e=f,r=e;do{n=65535&h[--r],h[r]=f>n?0:n-f}while(0!=--e);s+=f}if(0===t.We)return;e=t.je(u,C+A,s),A+=e,3>A||(p=255&u[C],p=(p<<g^255&u[C+1])&b)}while(Ze>A&&0!==t.We)}function oe(e){let t,n,r=I,s=C,i=_;const o=C>f-Ze?C-(f-Ze):0;let c=B;const a=l,w=C+258;let d=u[s+i-1],p=u[s+i];R>_||(r>>=2),c>A&&(c=A);do{if(t=e,u[t+i]==p&&u[t+i-1]==d&&u[t]==u[s]&&u[++t]==u[s+1]){s+=2,t++;do{}while(u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&u[++s]==u[++t]&&w>s);if(n=258-(w-s),s=w-258,n>i){if(x=e,i=n,n>=c)break;d=u[s+i-1],p=u[s+i]}}}while((e=65535&h[e&a])>o&&0!=--r);return i>A?A:i}e.le=[],e.be=[],e.ae=[],E=[],M=[],U=[],e.de=(t,n)=>{const r=e.ae,s=r[n];let i=n<<1;for(;i<=e.ce&&(i<e.ce&&$e(t,r[i+1],r[i],e.le)&&i++,!$e(t,s,r[i],e.le));)r[n]=r[i],n=i,i<<=1;r[n]=s},e.He=(t,S,x,W,j,G)=>(W||(W=8),j||(j=8),G||(G=0),t.Le=null,-1==S&&(S=6),1>j||j>9||8!=W||9>x||x>15||0>S||S>9||0>G||G>2?Oe:(t.Fe=e,a=x,f=1<<a,l=f-1,m=j+7,y=1<<m,b=y-1,g=r.floor((m+3-1)/3),u=new i(2*f),h=[],d=[],T=1<<j+6,e.Ke=new i(4*T),s=4*T,e.Ne=new o(T),e.Oe=new i(T),D=S,V=G,(t=>(t.qe=t.Ge=0,t.Le=null,e.pending=0,e.Je=0,n=Xe,c=0,K.re=E,K.ie=Le.Ee,N.re=M,N.ie=Le.Me,O.re=U,O.ie=Le.Ue,L=0,F=0,H=8,q(),(()=>{w=2*f,d[y-1]=0;for(let e=0;y-1>e;e++)d[e]=0;P=Je[D].Pe,R=Je[D].Ie,B=Je[D].De,I=Je[D].Ve,C=0,k=0,A=0,v=_=2,z=0,p=0})(),0))(t))),e.Qe=()=>42!=n&&n!=Xe&&n!=Ye?Oe:(e.Oe=null,e.Ne=null,e.Ke=null,d=null,h=null,u=null,e.Fe=null,n==Xe?-3:0),e.Xe=(e,t,n)=>{let r=0;return-1==t&&(t=6),0>t||t>9||0>n||n>2?Oe:(Je[D].Re!=Je[t].Re&&0!==e.qe&&(r=e.Ye(1)),D!=t&&(D=t,P=Je[D].Pe,R=Je[D].Ie,B=Je[D].De,I=Je[D].Ve),V=n,r)},e.Ze=(e,t,r)=>{let s,i=r,o=0;if(!t||42!=n)return Oe;if(3>i)return 0;for(i>f-Ze&&(i=f-Ze,o=r-i),u.set(t.subarray(o,o+i),0),C=i,k=i,p=255&u[0],p=(p<<g^255&u[1])&b,s=0;i-3>=s;s++)p=(p<<g^255&u[s+2])&b,h[s&l]=d[p],d[p]=s;return 0},e.Ye=(r,i)=>{let o,w,m,I,R;if(i>4||0>i)return Oe;if(!r.$e||!r.et&&0!==r.We||n==Ye&&4!=i)return r.Le=Qe[4],Oe;if(0===r.tt)return r.Le=Qe[7],-5;var B;if(t=r,I=c,c=i,42==n&&(w=8+(a-8<<4)<<8,m=(D-1&255)>>1,m>3&&(m=3),w|=m<<6,0!==C&&(w|=32),w+=31-w%31,n=Xe,J((B=w)>>8&255),J(255&B)),0!==e.pending){if(t.Te(),0===t.tt)return c=-1,0}else if(0===t.We&&I>=i&&4!=i)return t.Le=Qe[7],-5;if(n==Ye&&0!==t.We)return r.Le=Qe[7],-5;if(0!==t.We||0!==A||0!=i&&n!=Ye){switch(R=-1,Je[D].Re){case 0:R=(e=>{let n,r=65535;for(r>s-5&&(r=s-5);;){if(1>=A){if(ie(),0===A&&0==e)return 0;if(0===A)break}if(C+=A,A=0,n=k+r,(0===C||C>=n)&&(A=C-n,C=n,se(!1),0===t.tt))return 0;if(C-k>=f-Ze&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 1:R=(e=>{let n,r=0;for(;;){if(Ze>A){if(ie(),Ze>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C),0===r||(C-r&65535)>f-Ze||2!=V&&(v=oe(r)),3>v)n=ee(0,255&u[C]),A--,C++;else if(n=ee(C-x,v-3),A-=v,v>P||3>A)C+=v,v=0,p=255&u[C],p=(p<<g^255&u[C+1])&b;else{v--;do{C++,p=(p<<g^255&u[C+2])&b,r=65535&d[p],h[C&l]=d[p],d[p]=C}while(0!=--v);C++}if(n&&(se(!1),0===t.tt))return 0}return se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i);break;case 2:R=(e=>{let n,r,s=0;for(;;){if(Ze>A){if(ie(),Ze>A&&0==e)return 0;if(0===A)break}if(3>A||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C),_=v,S=x,v=2,0!==s&&P>_&&f-Ze>=(C-s&65535)&&(2!=V&&(v=oe(s)),5>=v&&(1==V||3==v&&C-x>4096)&&(v=2)),3>_||v>_)if(0!==z){if(n=ee(0,255&u[C-1]),n&&se(!1),C++,A--,0===t.tt)return 0}else z=1,C++,A--;else{r=C+A-3,n=ee(C-1-S,_-3),A-=_-1,_-=2;do{++C>r||(p=(p<<g^255&u[C+2])&b,s=65535&d[p],h[C&l]=d[p],d[p]=C)}while(0!=--_);if(z=0,v=2,C++,n&&(se(!1),0===t.tt))return 0}}return 0!==z&&(n=ee(0,255&u[C-1]),z=0),se(4==e),0===t.tt?4==e?2:0:4==e?3:1})(i)}if(2!=R&&3!=R||(n=Ye),0==R||2==R)return 0===t.tt&&(c=-1),0;if(1==R){if(1==i)X(2,3),Y(256,Le._e),$(),9>1+H+10-F&&(X(2,3),Y(256,Le._e),$()),H=7;else if(re(0,0,!1),3==i)for(o=0;y>o;o++)d[o]=0;if(t.Te(),0===t.tt)return c=-1,0}}return 4!=i?0:1}}function tt(){const e=this;e.nt=0,e.rt=0,e.We=0,e.qe=0,e.tt=0,e.Ge=0}function nt(e){const t=new tt,n=(o=e&&e.chunkSize?e.chunkSize:65536)+5*(r.floor(o/16383)+1);var o;const c=new i(n);let f=e?e.level:-1;void 0===f&&(f=-1),t.He(f),t.$e=c,this.append=(e,r)=>{let o,f,a=0,l=0,u=0;const w=[];if(e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,o=t.Ye(0),0!=o)throw new s("deflating: "+t.Le);t.rt&&(t.rt==n?w.push(new i(c)):w.push(c.subarray(0,t.rt))),u+=t.rt,r&&t.nt>0&&t.nt!=a&&(r(t.nt),a=t.nt)}while(t.We>0||0===t.tt);return w.length>1?(f=new i(u),w.forEach((e=>{f.set(e,l),l+=e.length}))):f=w[0]?new i(w[0]):new i,f}},this.flush=()=>{let e,r,o=0,f=0;const a=[];do{if(t.rt=0,t.tt=n,e=t.Ye(4),1!=e&&0!=e)throw new s("deflating: "+t.Le);n-t.tt>0&&a.push(c.slice(0,t.rt)),f+=t.rt}while(t.We>0||0===t.tt);return t.Qe(),r=new i(f),a.forEach((e=>{r.set(e,o),o+=e.length})),r}}tt.prototype={He(e,t){const n=this;return n.Fe=new et,t||(t=15),n.Fe.He(n,e,t)},Ye(e){const t=this;return t.Fe?t.Fe.Ye(t,e):Oe},Qe(){const e=this;if(!e.Fe)return Oe;const t=e.Fe.Qe();return e.Fe=null,t},Xe(e,t){const n=this;return n.Fe?n.Fe.Xe(n,e,t):Oe},Ze(e,t){const n=this;return n.Fe?n.Fe.Ze(n,e,t):Oe},je(e,t,n){const r=this;let s=r.We;return s>n&&(s=n),0===s?0:(r.We-=s,e.set(r.et.subarray(r.nt,r.nt+s),t),r.nt+=s,r.qe+=s,s)},Te(){const e=this;let t=e.Fe.pending;t>e.tt&&(t=e.tt),0!==t&&(e.$e.set(e.Fe.Ke.subarray(e.Fe.Je,e.Fe.Je+t),e.rt),e.rt+=t,e.Fe.Je+=t,e.Ge+=t,e.tt-=t,e.Fe.pending-=t,0===e.Fe.pending&&(e.Fe.Je=0))}};const rt=-2,st=-3,it=-5,ot=[0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535],ct=[96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,192,80,7,10,0,8,96,0,8,32,0,9,160,0,8,0,0,8,128,0,8,64,0,9,224,80,7,6,0,8,88,0,8,24,0,9,144,83,7,59,0,8,120,0,8,56,0,9,208,81,7,17,0,8,104,0,8,40,0,9,176,0,8,8,0,8,136,0,8,72,0,9,240,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,200,81,7,13,0,8,100,0,8,36,0,9,168,0,8,4,0,8,132,0,8,68,0,9,232,80,7,8,0,8,92,0,8,28,0,9,152,84,7,83,0,8,124,0,8,60,0,9,216,82,7,23,0,8,108,0,8,44,0,9,184,0,8,12,0,8,140,0,8,76,0,9,248,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,196,81,7,11,0,8,98,0,8,34,0,9,164,0,8,2,0,8,130,0,8,66,0,9,228,80,7,7,0,8,90,0,8,26,0,9,148,84,7,67,0,8,122,0,8,58,0,9,212,82,7,19,0,8,106,0,8,42,0,9,180,0,8,10,0,8,138,0,8,74,0,9,244,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,204,81,7,15,0,8,102,0,8,38,0,9,172,0,8,6,0,8,134,0,8,70,0,9,236,80,7,9,0,8,94,0,8,30,0,9,156,84,7,99,0,8,126,0,8,62,0,9,220,82,7,27,0,8,110,0,8,46,0,9,188,0,8,14,0,8,142,0,8,78,0,9,252,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,194,80,7,10,0,8,97,0,8,33,0,9,162,0,8,1,0,8,129,0,8,65,0,9,226,80,7,6,0,8,89,0,8,25,0,9,146,83,7,59,0,8,121,0,8,57,0,9,210,81,7,17,0,8,105,0,8,41,0,9,178,0,8,9,0,8,137,0,8,73,0,9,242,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,202,81,7,13,0,8,101,0,8,37,0,9,170,0,8,5,0,8,133,0,8,69,0,9,234,80,7,8,0,8,93,0,8,29,0,9,154,84,7,83,0,8,125,0,8,61,0,9,218,82,7,23,0,8,109,0,8,45,0,9,186,0,8,13,0,8,141,0,8,77,0,9,250,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,198,81,7,11,0,8,99,0,8,35,0,9,166,0,8,3,0,8,131,0,8,67,0,9,230,80,7,7,0,8,91,0,8,27,0,9,150,84,7,67,0,8,123,0,8,59,0,9,214,82,7,19,0,8,107,0,8,43,0,9,182,0,8,11,0,8,139,0,8,75,0,9,246,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,206,81,7,15,0,8,103,0,8,39,0,9,174,0,8,7,0,8,135,0,8,71,0,9,238,80,7,9,0,8,95,0,8,31,0,9,158,84,7,99,0,8,127,0,8,63,0,9,222,82,7,27,0,8,111,0,8,47,0,9,190,0,8,15,0,8,143,0,8,79,0,9,254,96,7,256,0,8,80,0,8,16,84,8,115,82,7,31,0,8,112,0,8,48,0,9,193,80,7,10,0,8,96,0,8,32,0,9,161,0,8,0,0,8,128,0,8,64,0,9,225,80,7,6,0,8,88,0,8,24,0,9,145,83,7,59,0,8,120,0,8,56,0,9,209,81,7,17,0,8,104,0,8,40,0,9,177,0,8,8,0,8,136,0,8,72,0,9,241,80,7,4,0,8,84,0,8,20,85,8,227,83,7,43,0,8,116,0,8,52,0,9,201,81,7,13,0,8,100,0,8,36,0,9,169,0,8,4,0,8,132,0,8,68,0,9,233,80,7,8,0,8,92,0,8,28,0,9,153,84,7,83,0,8,124,0,8,60,0,9,217,82,7,23,0,8,108,0,8,44,0,9,185,0,8,12,0,8,140,0,8,76,0,9,249,80,7,3,0,8,82,0,8,18,85,8,163,83,7,35,0,8,114,0,8,50,0,9,197,81,7,11,0,8,98,0,8,34,0,9,165,0,8,2,0,8,130,0,8,66,0,9,229,80,7,7,0,8,90,0,8,26,0,9,149,84,7,67,0,8,122,0,8,58,0,9,213,82,7,19,0,8,106,0,8,42,0,9,181,0,8,10,0,8,138,0,8,74,0,9,245,80,7,5,0,8,86,0,8,22,192,8,0,83,7,51,0,8,118,0,8,54,0,9,205,81,7,15,0,8,102,0,8,38,0,9,173,0,8,6,0,8,134,0,8,70,0,9,237,80,7,9,0,8,94,0,8,30,0,9,157,84,7,99,0,8,126,0,8,62,0,9,221,82,7,27,0,8,110,0,8,46,0,9,189,0,8,14,0,8,142,0,8,78,0,9,253,96,7,256,0,8,81,0,8,17,85,8,131,82,7,31,0,8,113,0,8,49,0,9,195,80,7,10,0,8,97,0,8,33,0,9,163,0,8,1,0,8,129,0,8,65,0,9,227,80,7,6,0,8,89,0,8,25,0,9,147,83,7,59,0,8,121,0,8,57,0,9,211,81,7,17,0,8,105,0,8,41,0,9,179,0,8,9,0,8,137,0,8,73,0,9,243,80,7,4,0,8,85,0,8,21,80,8,258,83,7,43,0,8,117,0,8,53,0,9,203,81,7,13,0,8,101,0,8,37,0,9,171,0,8,5,0,8,133,0,8,69,0,9,235,80,7,8,0,8,93,0,8,29,0,9,155,84,7,83,0,8,125,0,8,61,0,9,219,82,7,23,0,8,109,0,8,45,0,9,187,0,8,13,0,8,141,0,8,77,0,9,251,80,7,3,0,8,83,0,8,19,85,8,195,83,7,35,0,8,115,0,8,51,0,9,199,81,7,11,0,8,99,0,8,35,0,9,167,0,8,3,0,8,131,0,8,67,0,9,231,80,7,7,0,8,91,0,8,27,0,9,151,84,7,67,0,8,123,0,8,59,0,9,215,82,7,19,0,8,107,0,8,43,0,9,183,0,8,11,0,8,139,0,8,75,0,9,247,80,7,5,0,8,87,0,8,23,192,8,0,83,7,51,0,8,119,0,8,55,0,9,207,81,7,15,0,8,103,0,8,39,0,9,175,0,8,7,0,8,135,0,8,71,0,9,239,80,7,9,0,8,95,0,8,31,0,9,159,84,7,99,0,8,127,0,8,63,0,9,223,82,7,27,0,8,111,0,8,47,0,9,191,0,8,15,0,8,143,0,8,79,0,9,255],ft=[80,5,1,87,5,257,83,5,17,91,5,4097,81,5,5,89,5,1025,85,5,65,93,5,16385,80,5,3,88,5,513,84,5,33,92,5,8193,82,5,9,90,5,2049,86,5,129,192,5,24577,80,5,2,87,5,385,83,5,25,91,5,6145,81,5,7,89,5,1537,85,5,97,93,5,24577,80,5,4,88,5,769,84,5,49,92,5,12289,82,5,13,90,5,3073,86,5,193,192,5,24577],at=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],lt=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,112,112],ut=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577],wt=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13];function ht(){let e,t,n,r,s,i;function o(e,t,o,c,f,a,l,u,w,h,d){let p,y,m,b,g,k,v,S,z,C,x,A,_,I,P;C=0,g=o;do{n[e[t+C]]++,C++,g--}while(0!==g);if(n[0]==o)return l[0]=-1,u[0]=0,0;for(S=u[0],k=1;15>=k&&0===n[k];k++);for(v=k,k>S&&(S=k),g=15;0!==g&&0===n[g];g--);for(m=g,S>g&&(S=g),u[0]=S,I=1<<k;g>k;k++,I<<=1)if(0>(I-=n[k]))return st;if(0>(I-=n[g]))return st;for(n[g]+=I,i[1]=k=0,C=1,_=2;0!=--g;)i[_]=k+=n[C],_++,C++;g=0,C=0;do{0!==(k=e[t+C])&&(d[i[k]++]=g),C++}while(++g<o);for(o=i[m],i[0]=g=0,C=0,b=-1,A=-S,s[0]=0,x=0,P=0;m>=v;v++)for(p=n[v];0!=p--;){for(;v>A+S;){if(b++,A+=S,P=m-A,P=P>S?S:P,(y=1<<(k=v-A))>p+1&&(y-=p+1,_=v,P>k))for(;++k<P&&(y<<=1)>n[++_];)y-=n[_];if(P=1<<k,h[0]+P>1440)return st;s[b]=x=h[0],h[0]+=P,0!==b?(i[b]=g,r[0]=k,r[1]=S,k=g>>>A-S,r[2]=x-s[b-1]-k,w.set(r,3*(s[b-1]+k))):l[0]=x}for(r[1]=v-A,o>C?d[C]<c?(r[0]=256>d[C]?0:96,r[2]=d[C++]):(r[0]=a[d[C]-c]+16+64,r[2]=f[d[C++]-c]):r[0]=192,y=1<<v-A,k=g>>>A;P>k;k+=y)w.set(r,3*(x+k));for(k=1<<v-1;g&k;k>>>=1)g^=k;for(g^=k,z=(1<<A)-1;(g&z)!=i[b];)b--,A-=S,z=(1<<A)-1}return 0!==I&&1!=m?it:0}function c(o){let c;for(e||(e=[],t=[],n=new f(16),r=[],s=new f(15),i=new f(16)),t.length<o&&(t=[]),c=0;o>c;c++)t[c]=0;for(c=0;16>c;c++)n[c]=0;for(c=0;3>c;c++)r[c]=0;s.set(n.subarray(0,15),0),i.set(n.subarray(0,16),0)}this.st=(n,r,s,i,f)=>{let a;return c(19),e[0]=0,a=o(n,0,19,19,null,null,s,r,i,e,t),a==st?f.Le="oversubscribed dynamic bit lengths tree":a!=it&&0!==r[0]||(f.Le="incomplete dynamic bit lengths tree",a=st),a},this.it=(n,r,s,i,f,a,l,u,w)=>{let h;return c(288),e[0]=0,h=o(s,0,n,257,at,lt,a,i,u,e,t),0!=h||0===i[0]?(h==st?w.Le="oversubscribed literal/length tree":-4!=h&&(w.Le="incomplete literal/length tree",h=st),h):(c(288),h=o(s,n,r,0,ut,wt,l,f,u,e,t),0!=h||0===f[0]&&n>257?(h==st?w.Le="oversubscribed distance tree":h==it?(w.Le="incomplete distance tree",h=st):-4!=h&&(w.Le="empty distance tree with lengths",h=st),h):0)}}function dt(){const e=this;let t,n,r,s,i=0,o=0,c=0,f=0,a=0,l=0,u=0,w=0,h=0,d=0;function p(e,t,n,r,s,i,o,c){let f,a,l,u,w,h,d,p,y,m,b,g,k,v,S,z;d=c.nt,p=c.We,w=o.ot,h=o.ct,y=o.write,m=y<o.read?o.read-y-1:o.end-y,b=ot[e],g=ot[t];do{for(;20>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(f=w&b,a=n,l=r,z=3*(l+f),0!==(u=a[z]))for(;;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15,k=a[z+2]+(w&ot[u]),w>>=u,h-=u;15>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;for(f=w&g,a=s,l=i,z=3*(l+f),u=a[z];;){if(w>>=a[z+1],h-=a[z+1],16&u){for(u&=15;u>h;)p--,w|=(255&c.ft(d++))<<h,h+=8;if(v=a[z+2]+(w&ot[u]),w>>=u,h-=u,m-=k,v>y){S=y-v;do{S+=o.end}while(0>S);if(u=o.end-S,k>u){if(k-=u,y-S>0&&u>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--u);else o.lt.set(o.lt.subarray(S,S+u),y),y+=u,S+=u,u=0;S=0}}else S=y-v,y-S>0&&2>y-S?(o.lt[y++]=o.lt[S++],o.lt[y++]=o.lt[S++],k-=2):(o.lt.set(o.lt.subarray(S,S+2),y),y+=2,S+=2,k-=2);if(y-S>0&&k>y-S)do{o.lt[y++]=o.lt[S++]}while(0!=--k);else o.lt.set(o.lt.subarray(S,S+k),y),y+=k,S+=k,k=0;break}if(64&u)return c.Le="invalid distance code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,st;f+=a[z+2],f+=w&ot[u],z=3*(l+f),u=a[z]}break}if(64&u)return 32&u?(k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,1):(c.Le="invalid literal/length code",k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,st);if(f+=a[z+2],f+=w&ot[u],z=3*(l+f),0===(u=a[z])){w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--;break}}else w>>=a[z+1],h-=a[z+1],o.lt[y++]=a[z+2],m--}while(m>=258&&p>=10);return k=c.We-p,k=k>h>>3?h>>3:k,p+=k,d-=k,h-=k<<3,o.ot=w,o.ct=h,c.We=p,c.qe+=d-c.nt,c.nt=d,o.write=y,0}e.init=(e,i,o,c,f,a)=>{t=0,u=e,w=i,r=o,h=c,s=f,d=a,n=null},e.ut=(e,y,m)=>{let b,g,k,v,S,z,C,x=0,A=0,_=0;for(_=y.nt,v=y.We,x=e.ot,A=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S;;)switch(t){case 0:if(z>=258&&v>=10&&(e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,m=p(u,w,r,h,s,d,e,y),_=y.nt,v=y.We,x=e.ot,A=e.ct,S=e.write,z=S<e.read?e.read-S-1:e.end-S,0!=m)){t=1==m?7:9;break}c=u,n=r,o=h,t=1;case 1:for(b=c;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}if(g=3*(o+(x&ot[b])),x>>>=n[g+1],A-=n[g+1],k=n[g],0===k){f=n[g+2],t=6;break}if(16&k){a=15&k,i=n[g+2],t=2;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}if(32&k){t=7;break}return t=9,y.Le="invalid literal/length code",m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 2:for(b=a;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}i+=x&ot[b],x>>=b,A-=b,c=w,n=s,o=d,t=3;case 3:for(b=c;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}if(g=3*(o+(x&ot[b])),x>>=n[g+1],A-=n[g+1],k=n[g],16&k){a=15&k,l=n[g+2],t=4;break}if(!(64&k)){c=k,o=g/3+n[g+2];break}return t=9,y.Le="invalid distance code",m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 4:for(b=a;b>A;){if(0===v)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,v--,x|=(255&y.ft(_++))<<A,A+=8}l+=x&ot[b],x>>=b,A-=b,t=5;case 5:for(C=S-l;0>C;)C+=e.end;for(;0!==i;){if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);e.lt[S++]=e.lt[C++],z--,C==e.end&&(C=0),i--}t=0;break;case 6:if(0===z&&(S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z&&(e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,S==e.end&&0!==e.read&&(S=0,z=S<e.read?e.read-S-1:e.end-S),0===z)))return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);m=0,e.lt[S++]=f,z--,t=0;break;case 7:if(A>7&&(A-=8,v++,_--),e.write=S,m=e.wt(y,m),S=e.write,z=S<e.read?e.read-S-1:e.end-S,e.read!=e.write)return e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);t=8;case 8:return m=1,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);case 9:return m=st,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m);default:return m=rt,e.ot=x,e.ct=A,y.We=v,y.qe+=_-y.nt,y.nt=_,e.write=S,e.wt(y,m)}},e.ht=()=>{}}ht.dt=(e,t,n,r)=>(e[0]=9,t[0]=5,n[0]=ct,r[0]=ft,0);const pt=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];function yt(e,t){const n=this;let r,s=0,o=0,c=0,a=0;const l=[0],u=[0],w=new dt;let h=0,d=new f(4320);const p=new ht;n.ct=0,n.ot=0,n.lt=new i(t),n.end=t,n.read=0,n.write=0,n.reset=(e,t)=>{t&&(t[0]=0),6==s&&w.ht(e),s=0,n.ct=0,n.ot=0,n.read=n.write=0},n.reset(e,null),n.wt=(e,t)=>{let r,s,i;return s=e.rt,i=n.read,r=(i>n.write?n.end:n.write)-i,r>e.tt&&(r=e.tt),0!==r&&t==it&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r,i==n.end&&(i=0,n.write==n.end&&(n.write=0),r=n.write-i,r>e.tt&&(r=e.tt),0!==r&&t==it&&(t=0),e.tt-=r,e.Ge+=r,e.$e.set(n.lt.subarray(i,i+r),s),s+=r,i+=r),e.rt=s,n.read=i,t},n.ut=(e,t)=>{let i,f,y,m,b,g,k,v;for(m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g;;){let S,z,C,x,A,_,I,P;switch(s){case 0:for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}switch(i=7&f,h=1&i,i>>>1){case 0:f>>>=3,y-=3,i=7&y,f>>>=i,y-=i,s=1;break;case 1:S=[],z=[],C=[[]],x=[[]],ht.dt(S,z,C,x),w.init(S[0],z[0],C[0],0,x[0],0),f>>>=3,y-=3,s=6;break;case 2:f>>>=3,y-=3,s=3;break;case 3:return f>>>=3,y-=3,s=9,e.Le="invalid block type",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}break;case 1:for(;32>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if((~f>>>16&65535)!=(65535&f))return s=9,e.Le="invalid stored block lengths",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);o=65535&f,f=y=0,s=0!==o?2:0!==h?7:0;break;case 2:if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(0===k&&(g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k&&(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,g==n.end&&0!==n.read&&(g=0,k=g<n.read?n.read-g-1:n.end-g),0===k)))return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(t=0,i=o,i>b&&(i=b),i>k&&(i=k),n.lt.set(e.je(m,i),g),m+=i,b-=i,g+=i,k-=i,0!=(o-=i))break;s=0!==h?7:0;break;case 3:for(;14>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(c=i=16383&f,(31&i)>29||(i>>5&31)>29)return s=9,e.Le="too many length or distance symbols",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);if(i=258+(31&i)+(i>>5&31),!r||r.length<i)r=[];else for(v=0;i>v;v++)r[v]=0;f>>>=14,y-=14,a=0,s=4;case 4:for(;4+(c>>>10)>a;){for(;3>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}r[pt[a++]]=7&f,f>>>=3,y-=3}for(;19>a;)r[pt[a++]]=0;if(l[0]=7,i=p.st(r,l,u,d,e),0!=i)return(t=i)==st&&(r=null,s=9),n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);a=0,s=5;case 5:for(;i=c,258+(31&i)+(i>>5&31)>a;){let o,w;for(i=l[0];i>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(i=d[3*(u[0]+(f&ot[i]))+1],w=d[3*(u[0]+(f&ot[i]))+2],16>w)f>>>=i,y-=i,r[a++]=w;else{for(v=18==w?7:w-14,o=18==w?11:3;i+v>y;){if(0===b)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);t=0,b--,f|=(255&e.ft(m++))<<y,y+=8}if(f>>>=i,y-=i,o+=f&ot[v],f>>>=v,y-=v,v=a,i=c,v+o>258+(31&i)+(i>>5&31)||16==w&&1>v)return r=null,s=9,e.Le="invalid bit length repeat",t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w=16==w?r[v-1]:0;do{r[v++]=w}while(0!=--o);a=v}}if(u[0]=-1,A=[],_=[],I=[],P=[],A[0]=9,_[0]=6,i=c,i=p.it(257+(31&i),1+(i>>5&31),r,A,_,I,P,d,e),0!=i)return i==st&&(r=null,s=9),t=i,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);w.init(A[0],_[0],d,I[0],d,P[0]),s=6;case 6:if(n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,1!=(t=w.ut(n,e,t)))return n.wt(e,t);if(t=0,w.ht(e),m=e.nt,b=e.We,f=n.ot,y=n.ct,g=n.write,k=g<n.read?n.read-g-1:n.end-g,0===h){s=0;break}s=7;case 7:if(n.write=g,t=n.wt(e,t),g=n.write,k=g<n.read?n.read-g-1:n.end-g,n.read!=n.write)return n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);s=8;case 8:return t=1,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);case 9:return t=st,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t);default:return t=rt,n.ot=f,n.ct=y,e.We=b,e.qe+=m-e.nt,e.nt=m,n.write=g,n.wt(e,t)}}},n.ht=e=>{n.reset(e,null),n.lt=null,d=null},n.yt=(e,t,r)=>{n.lt.set(e.subarray(t,t+r),0),n.read=n.write=r},n.bt=()=>1==s?1:0}const mt=13,bt=[0,0,255,255];function gt(){const e=this;function t(e){return e&&e.gt?(e.qe=e.Ge=0,e.Le=null,e.gt.mode=7,e.gt.kt.reset(e,null),0):rt}e.mode=0,e.method=0,e.vt=[0],e.St=0,e.marker=0,e.zt=0,e.Ct=t=>(e.kt&&e.kt.ht(t),e.kt=null,0),e.xt=(n,r)=>(n.Le=null,e.kt=null,8>r||r>15?(e.Ct(n),rt):(e.zt=r,n.gt.kt=new yt(n,1<<r),t(n),0)),e.At=(e,t)=>{let n,r;if(!e||!e.gt||!e.et)return rt;const s=e.gt;for(t=4==t?it:0,n=it;;)switch(s.mode){case 0:if(0===e.We)return n;if(n=t,e.We--,e.qe++,8!=(15&(s.method=e.ft(e.nt++)))){s.mode=mt,e.Le="unknown compression method",s.marker=5;break}if(8+(s.method>>4)>s.zt){s.mode=mt,e.Le="invalid win size",s.marker=5;break}s.mode=1;case 1:if(0===e.We)return n;if(n=t,e.We--,e.qe++,r=255&e.ft(e.nt++),((s.method<<8)+r)%31!=0){s.mode=mt,e.Le="incorrect header check",s.marker=5;break}if(!(32&r)){s.mode=7;break}s.mode=2;case 2:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St=(255&e.ft(e.nt++))<<24&4278190080,s.mode=3;case 3:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<16&16711680,s.mode=4;case 4:if(0===e.We)return n;n=t,e.We--,e.qe++,s.St+=(255&e.ft(e.nt++))<<8&65280,s.mode=5;case 5:return 0===e.We?n:(n=t,e.We--,e.qe++,s.St+=255&e.ft(e.nt++),s.mode=6,2);case 6:return s.mode=mt,e.Le="need dictionary",s.marker=0,rt;case 7:if(n=s.kt.ut(e,n),n==st){s.mode=mt,s.marker=0;break}if(0==n&&(n=t),1!=n)return n;n=t,s.kt.reset(e,s.vt),s.mode=12;case 12:return e.We=0,1;case mt:return st;default:return rt}},e._t=(e,t,n)=>{let r=0,s=n;if(!e||!e.gt||6!=e.gt.mode)return rt;const i=e.gt;return s<1<<i.zt||(s=(1<<i.zt)-1,r=n-s),i.kt.yt(t,r,s),i.mode=7,0},e.It=e=>{let n,r,s,i,o;if(!e||!e.gt)return rt;const c=e.gt;if(c.mode!=mt&&(c.mode=mt,c.marker=0),0===(n=e.We))return it;for(r=e.nt,s=c.marker;0!==n&&4>s;)e.ft(r)==bt[s]?s++:s=0!==e.ft(r)?0:4-s,r++,n--;return e.qe+=r-e.nt,e.nt=r,e.We=n,c.marker=s,4!=s?st:(i=e.qe,o=e.Ge,t(e),e.qe=i,e.Ge=o,c.mode=7,0)},e.Pt=e=>e&&e.gt&&e.gt.kt?e.gt.kt.bt():rt}function kt(){}function vt(e){const t=new kt,n=e&&e.chunkSize?r.floor(2*e.chunkSize):131072,o=new i(n);let c=!1;t.xt(),t.$e=o,this.append=(e,r)=>{const f=[];let a,l,u=0,w=0,h=0;if(0!==e.length){t.nt=0,t.et=e,t.We=e.length;do{if(t.rt=0,t.tt=n,0!==t.We||c||(t.nt=0,c=!0),a=t.At(0),c&&a===it){if(0!==t.We)throw new s("inflating: bad input")}else if(0!==a&&1!==a)throw new s("inflating: "+t.Le);if((c||1===a)&&t.We===e.length)throw new s("inflating: bad input");t.rt&&(t.rt===n?f.push(new i(o)):f.push(o.subarray(0,t.rt))),h+=t.rt,r&&t.nt>0&&t.nt!=u&&(r(t.nt),u=t.nt)}while(t.We>0||0===t.tt);return f.length>1?(l=new i(h),f.forEach((e=>{l.set(e,w),w+=e.length}))):l=f[0]?new i(f[0]):new i,l}},this.flush=()=>{t.Ct()}}kt.prototype={xt(e){const t=this;return t.gt=new gt,e||(e=15),t.gt.xt(t,e)},At(e){const t=this;return t.gt?t.gt.At(t,e):rt},Ct(){const e=this;if(!e.gt)return rt;const t=e.gt.Ct(e);return e.gt=null,t},It(){const e=this;return e.gt?e.gt.It(e):rt},_t(e,t){const n=this;return n.gt?n.gt._t(n,e,t):rt},ft(e){return this.et[e]},je(e,t){return this.et.subarray(e,e+t)}},self.initCodec=()=>{self.Deflate=nt,self.Inflate=vt};
`, r = () => t.useDataURI ? "data:text/javascript," + encodeURIComponent(n) : URL.createObjectURL(new Blob([
      n
    ], {
      type: "text/javascript"
    }));
    e({
      workerScripts: {
        inflate: [
          r
        ],
        deflate: [
          r
        ]
      }
    });
  }
  const Zo = "Writer iterator completed too soon", Yo = "Content-Type", Go = 64 * 1024, hs = "writable";
  class ur {
    constructor() {
      this.size = 0;
    }
    init() {
      this.initialized = true;
    }
  }
  let xs = class extends ur {
    get readable() {
      const t = this, { chunkSize: n = Go } = t, r = new ReadableStream({
        start() {
          this.chunkOffset = 0;
        },
        async pull(i) {
          const { offset: a = 0, size: s, diskNumberStart: l } = r, { chunkOffset: o } = this, f = s === X ? n : Math.min(n, s - o), d = await tr(t, a + o, f, l);
          i.enqueue(d), o + n > s || s === X && !d.length && f ? i.close() : this.chunkOffset += n;
        }
      });
      return r;
    }
  };
  class Ko extends ur {
    constructor(t) {
      super();
      const n = this, r = new TransformStream(), i = [];
      t && i.push([
        Yo,
        t
      ]), Object.defineProperty(n, hs, {
        get() {
          return r.writable;
        }
      }), n.blob = new Response(r.readable, {
        headers: i
      }).blob();
    }
    getData() {
      return this.blob;
    }
  }
  class Xo extends xs {
    constructor(t) {
      super(), Object.assign(this, {
        array: t,
        size: t.length
      });
    }
    readUint8Array(t, n) {
      return this.array.slice(t, t + n);
    }
  }
  class zo extends xs {
    constructor(t) {
      super(), this.readers = t;
    }
    async init() {
      const t = this, { readers: n } = t;
      t.lastDiskNumber = 0, t.lastDiskOffset = 0, await Promise.all(n.map(async (r, i) => {
        await r.init(), i != n.length - 1 && (t.lastDiskOffset += r.size), t.size += r.size;
      })), super.init();
    }
    async readUint8Array(t, n, r = 0) {
      const i = this, { readers: a } = this;
      let s, l = r;
      l == -1 && (l = a.length - 1);
      let o = t;
      for (; o >= a[l].size; )
        o -= a[l].size, l++;
      const f = a[l], d = f.size;
      if (o + n <= d)
        s = await tr(f, o, n);
      else {
        const p = d - o;
        s = new Uint8Array(n), s.set(await tr(f, o, p)), s.set(await i.readUint8Array(t + p, n - p, r), p);
      }
      return i.lastDiskNumber = Math.max(l, i.lastDiskNumber), s;
    }
  }
  class wi extends ur {
    constructor(t, n = 4294967295) {
      super();
      const r = this;
      Object.assign(r, {
        diskNumber: 0,
        diskOffset: 0,
        size: 0,
        maxSize: n,
        availableSize: n
      });
      let i, a, s;
      const l = new WritableStream({
        async write(d) {
          const { availableSize: p } = r;
          if (s)
            d.length >= p ? (await o(d.slice(0, p)), await f(), r.diskOffset += i.size, r.diskNumber++, s = null, await this.write(d.slice(p))) : await o(d);
          else {
            const { value: _, done: x } = await t.next();
            if (x && !_)
              throw new Error(Zo);
            i = _, i.size = 0, i.maxSize && (r.maxSize = i.maxSize), r.availableSize = r.maxSize, await qt(i), a = _.writable, s = a.getWriter(), await this.write(d);
          }
        },
        async close() {
          await s.ready, await f();
        }
      });
      Object.defineProperty(r, hs, {
        get() {
          return l;
        }
      });
      async function o(d) {
        const p = d.length;
        p && (await s.ready, await s.write(d), i.size += p, r.size += p, r.availableSize -= p);
      }
      async function f() {
        a.size = i.size, await s.close();
      }
    }
  }
  async function qt(e, t) {
    if (e.init && !e.initialized)
      await e.init(t);
    else
      return Promise.resolve();
  }
  function Jo(e) {
    return Array.isArray(e) && (e = new zo(e)), e instanceof ReadableStream && (e = {
      readable: e
    }), e;
  }
  function Qo(e) {
    e.writable === X && typeof e.next == Ht && (e = new wi(e)), e instanceof WritableStream && (e = {
      writable: e
    });
    const { writable: t } = e;
    return t.size === X && (t.size = 0), e instanceof wi || Object.assign(e, {
      diskNumber: 0,
      diskOffset: 0,
      availableSize: 1 / 0,
      maxSize: 1 / 0
    }), e;
  }
  function tr(e, t, n, r) {
    return e.readUint8Array(t, n, r);
  }
  const el = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split("");
  el.length == 256;
  const tl = "filename", nl = "rawFilename", rl = "comment", il = "rawComment", sl = "uncompressedSize", al = "compressedSize", ol = "offset", bi = "diskNumberStart", ws = "lastModDate", ll = "rawLastModDate", bs = "lastAccessDate", gs = "creationDate", vs = "internalFileAttribute", ys = "internalFileAttributes", ks = "externalFileAttribute", Ss = "externalFileAttributes", Es = "msDosCompatible", mr = "zip64", As = "encrypted", Ts = "version", Cs = "versionMadeBy", Rs = "zipCrypto", Is = "directory", Fs = "executable", cl = [
    tl,
    nl,
    al,
    sl,
    ws,
    ll,
    rl,
    il,
    bs,
    gs,
    ol,
    bi,
    bi,
    vs,
    ys,
    ks,
    Ss,
    Es,
    mr,
    As,
    Ts,
    Cs,
    Rs,
    Is,
    Fs,
    "bitFlag",
    "signature",
    "filenameUTF8",
    "commentUTF8",
    "compressionMethod",
    "extraField",
    "rawExtraField",
    "extraFieldZip64",
    "extraFieldUnicodePath",
    "extraFieldUnicodeComment",
    "extraFieldAES",
    "extraFieldNTFS",
    "extraFieldExtendedTimestamp"
  ];
  class Ds {
    constructor(t) {
      cl.forEach((n) => this[n] = t[n]);
    }
  }
  const fl = "File already exists", dl = "Zip file comment exceeds 64KB", ul = "File entry comment exceeds 64KB", ml = "File entry name exceeds 64KB", gi = "Version exceeds 65535", pl = "The strength must equal 1, 2, or 3", _l = "Extra field type exceeds 65535", hl = "Extra field data exceeds 64KB", pr = "Zip64 is not supported (make sure 'keepOrder' is set to 'true')", xl = "Undefined uncompressed size", vi = new Uint8Array([
    7,
    0,
    2,
    0,
    65,
    69,
    3,
    0,
    0
  ]);
  let $n = 0;
  const yi = [];
  class wl {
    constructor(t, n = {}) {
      t = Qo(t);
      const r = t.availableSize !== X && t.availableSize > 0 && t.availableSize !== 1 / 0 && t.maxSize !== X && t.maxSize > 0 && t.maxSize !== 1 / 0;
      Object.assign(this, {
        writer: t,
        addSplitZipSignature: r,
        options: n,
        config: io(),
        files: /* @__PURE__ */ new Map(),
        filenames: /* @__PURE__ */ new Set(),
        offset: n.offset === X ? t.writable.size : n.offset,
        pendingEntriesSize: 0,
        pendingAddFileCalls: /* @__PURE__ */ new Set(),
        bufferedWrites: 0
      });
    }
    async add(t = "", n, r = {}) {
      const i = this, { pendingAddFileCalls: a, config: s } = i;
      $n < s.maxWorkers ? $n++ : await new Promise((o) => yi.push(o));
      let l;
      try {
        if (t = t.trim(), i.filenames.has(t))
          throw new Error(fl);
        return i.filenames.add(t), l = bl(i, t, n, r), a.add(l), await l;
      } catch (o) {
        throw i.filenames.delete(t), o;
      } finally {
        a.delete(l);
        const o = yi.shift();
        o ? o() : $n--;
      }
    }
    async close(t = new Uint8Array(), n = {}) {
      const r = this, { pendingAddFileCalls: i, writer: a } = this, { writable: s } = a;
      for (; i.size; )
        await Promise.allSettled(Array.from(i));
      return await Cl(this, t, n), H(r, n, "preventClose") || await s.getWriter().close(), a.getData ? a.getData() : s;
    }
  }
  async function bl(e, t, n, r) {
    t = t.trim();
    const i = H(e, r, Es), a = H(e, r, Cs, i ? 20 : 768), s = H(e, r, Fs);
    if (a > Se)
      throw new Error(gi);
    let l = H(e, r, Ss, 0);
    l === 0 && (l = H(e, r, ks, 0)), !r.directory && t.endsWith(Mn) && (r.directory = true), H(e, r, Is) ? (t.endsWith(Mn) || (t += Mn), l === 0 && (i ? l = Ja : l = Qa << 16)) : !i && l === 0 && (s ? l = (eo | ei) << 16 : l = ei << 16);
    const f = H(e, r, "encodeText", dn);
    let d = f(t);
    if (d === X && (d = dn(t)), Z(d) > Se)
      throw new Error(ml);
    const p = r.comment || "";
    let _ = f(p);
    if (_ === X && (_ = dn(p)), Z(_) > Se)
      throw new Error(ul);
    const x = H(e, r, Ts, to);
    if (x > Se)
      throw new Error(gi);
    const k = H(e, r, ws, /* @__PURE__ */ new Date()), u = H(e, r, bs), c = H(e, r, gs);
    let m = H(e, r, ys, 0);
    m === 0 && (m = H(e, r, vs, 0));
    const h = H(e, r, "passThrough");
    let w, A;
    h || (w = H(e, r, "password"), A = H(e, r, "rawPassword"));
    const g = H(e, r, "encryptionStrength", 3), b = H(e, r, Rs), y = H(e, r, "extendedTimestamp", true), v = H(e, r, "keepOrder", true), E = H(e, r, "level"), C = H(e, r, "useWebWorkers"), T = H(e, r, "bufferedWrite"), L = H(e, r, "dataDescriptorSignature", false), D = H(e, r, "signal"), j = H(e, r, "useUnicodeFileNames", true), U = H(e, r, "useCompressionStream"), N = H(e, r, "compressionMethod");
    let q = H(e, r, "dataDescriptor", true), P = H(e, r, mr);
    if (!b && (w !== X || A !== X) && !(g >= 1 && g <= 3))
      throw new Error(pl);
    let te = new Uint8Array();
    const { extraField: M } = r;
    if (M) {
      let De = 0, Ne = 0;
      M.forEach((de) => De += 4 + Z(de)), te = new Uint8Array(De), M.forEach((de, qe) => {
        if (qe > Se)
          throw new Error(_l);
        if (Z(de) > Se)
          throw new Error(hl);
        le(te, new Uint16Array([
          qe
        ]), Ne), le(te, new Uint16Array([
          Z(de)
        ]), Ne + 2), le(te, de, Ne + 4), Ne += 4 + Z(de);
      });
    }
    let re = 0, B = 0, $ = 0;
    if (h && ({ uncompressedSize: $ } = r, $ === X))
      throw new Error(xl);
    const ve = P === true;
    n && (n = Jo(n), await qt(n), h ? re = ki($) : n.size === X ? (q = true, (P || P === X) && (P = true, $ = re = Ae + 1)) : ($ = n.size, re = ki($)));
    const { diskOffset: fe, diskNumber: ie, maxSize: Ze } = e.writer, je = ve || $ > Ae, Je = ve || re > Ae, Qe = ve || e.offset + e.pendingEntriesSize - fe > Ae, Fe = H(e, r, "supportZip64SplitFile", true) && ve || ie + Math.ceil(e.pendingEntriesSize / Ze) > Se;
    if (Qe || je || Je || Fe) {
      if (P === false || !v)
        throw new Error(pr);
      P = true;
    }
    P = P || false;
    const Ye = H(e, r, As), { signature: Tt } = r;
    r = Object.assign({}, r, {
      rawFilename: d,
      rawComment: _,
      version: x,
      versionMadeBy: a,
      lastModDate: k,
      lastAccessDate: u,
      creationDate: c,
      rawExtraField: te,
      zip64: P,
      zip64UncompressedSize: je,
      zip64CompressedSize: Je,
      zip64Offset: Qe,
      zip64DiskNumberStart: Fe,
      password: w,
      rawPassword: A,
      level: !U && e.config.CompressionStream === X && e.config.CompressionStreamNative === X ? 0 : E,
      useWebWorkers: C,
      encryptionStrength: g,
      extendedTimestamp: y,
      zipCrypto: b,
      bufferedWrite: T,
      keepOrder: v,
      useUnicodeFileNames: j,
      dataDescriptor: q,
      dataDescriptorSignature: L,
      signal: D,
      msDosCompatible: i,
      internalFileAttribute: m,
      internalFileAttributes: m,
      externalFileAttribute: l,
      externalFileAttributes: l,
      useCompressionStream: U,
      passThrough: h,
      encrypted: !!(w && Z(w) || A && Z(A)) || h && Ye,
      signature: Tt,
      compressionMethod: N
    });
    const ae = yl(r), oe = Sl(r), et = Z(ae.localHeaderArray, oe.dataDescriptorArray);
    B = et + re, e.options.usdz && (B += B + 64), e.pendingEntriesSize += B;
    let Ge;
    try {
      Ge = await gl(e, t, n, {
        headerInfo: ae,
        dataDescriptorInfo: oe,
        metadataSize: et
      }, r);
    } finally {
      e.pendingEntriesSize -= B;
    }
    return Object.assign(Ge, {
      name: t,
      comment: p,
      extraField: M
    }), new Ds(Ge);
  }
  async function gl(e, t, n, r, i) {
    const { files: a, writer: s } = e, { keepOrder: l, dataDescriptor: o, signal: f } = i, { headerInfo: d } = r, { usdz: p } = e.options, _ = Array.from(a.values()).pop();
    let x = {}, k, u, c, m, h, w, A;
    a.set(t, x);
    try {
      let v;
      l && (v = _ && _.lock, g()), (i.bufferedWrite || e.writerLocked || e.bufferedWrites && l || !o) && !p ? (w = new TransformStream(), A = new Response(w.readable).blob(), w.writable.size = 0, k = true, e.bufferedWrites++, await qt(s)) : (w = s, await b()), await qt(w);
      const { writable: E } = s;
      let { diskOffset: C } = s;
      if (e.addSplitZipSignature) {
        delete e.addSplitZipSignature;
        const L = new Uint8Array(4), D = pe(L);
        V(D, 0, Bi), await Be(E, L), e.offset += 4;
      }
      p && kl(r, e.offset - C), k || (await v, await y(E));
      const { diskNumber: T } = s;
      if (h = true, x.diskNumberStart = T, x = await vl(n, w, x, r, e.config, i), h = false, a.set(t, x), x.filename = t, k) {
        await w.writable.getWriter().close();
        let L = await A;
        await v, await b(), m = true, o || (L = await Al(x, L, E, i)), await y(E), x.diskNumberStart = s.diskNumber, C = s.diskOffset, await L.stream().pipeTo(E, {
          preventClose: true,
          preventAbort: true,
          signal: f
        }), E.size += L.size, m = false;
      }
      if (x.offset = e.offset - C, x.zip64)
        Tl(x, i);
      else if (x.offset > Ae)
        throw new Error(pr);
      return e.offset += x.size, x;
    } catch (v) {
      if (k && m || !k && h) {
        if (e.hasCorruptedEntries = true, v)
          try {
            v.corruptedEntry = true;
          } catch {
          }
        k ? e.offset += w.writable.size : e.offset = w.writable.size;
      }
      throw a.delete(t), v;
    } finally {
      k && e.bufferedWrites--, c && c(), u && u();
    }
    function g() {
      x.lock = new Promise((v) => c = v);
    }
    async function b() {
      e.writerLocked = true;
      const { lockWriter: v } = e;
      e.lockWriter = new Promise((E) => u = () => {
        e.writerLocked = false, E();
      }), await v;
    }
    async function y(v) {
      Z(d.localHeaderArray) > s.availableSize && (s.availableSize = 0, await Be(v, new Uint8Array()));
    }
  }
  async function vl(e, t, { diskNumberStart: n, lock: r }, i, a, s) {
    const { headerInfo: l, dataDescriptorInfo: o, metadataSize: f } = i, { localHeaderArray: d, headerArray: p, lastModDate: _, rawLastModDate: x, encrypted: k, compressed: u, version: c, compressionMethod: m, rawExtraFieldExtendedTimestamp: h, extraFieldExtendedTimestampFlag: w, rawExtraFieldNTFS: A, rawExtraFieldAES: g } = l, { dataDescriptorArray: b } = o, { rawFilename: y, lastAccessDate: v, creationDate: E, password: C, rawPassword: T, level: L, zip64: D, zip64UncompressedSize: j, zip64CompressedSize: U, zip64Offset: N, zip64DiskNumberStart: q, zipCrypto: P, dataDescriptor: te, directory: M, executable: re, versionMadeBy: B, rawComment: $, rawExtraField: ve, useWebWorkers: fe, onstart: ie, onprogress: Ze, onend: je, signal: Je, encryptionStrength: Qe, extendedTimestamp: Zt, msDosCompatible: Fe, internalFileAttributes: Ye, externalFileAttributes: Tt, useCompressionStream: ae, passThrough: oe } = s, et = {
      lock: r,
      versionMadeBy: B,
      zip64: D,
      directory: !!M,
      executable: !!re,
      filenameUTF8: true,
      rawFilename: y,
      commentUTF8: true,
      rawComment: $,
      rawExtraFieldExtendedTimestamp: h,
      rawExtraFieldNTFS: A,
      rawExtraFieldAES: g,
      rawExtraField: ve,
      extendedTimestamp: Zt,
      msDosCompatible: Fe,
      internalFileAttributes: Ye,
      externalFileAttributes: Tt,
      diskNumberStart: n
    };
    let { signature: Ge, uncompressedSize: De } = s, Ne = 0;
    oe || (De = 0);
    const { writable: de } = t;
    if (e) {
      e.chunkSize = so(a), await Be(de, d);
      const Oe = e.readable, Tn = Oe.size = e.size, Yt = {
        options: {
          codecType: ms,
          level: L,
          rawPassword: T,
          password: C,
          encryptionStrength: Qe,
          zipCrypto: k && P,
          passwordVerification: k && P && x >> 8 & 255,
          signed: !oe,
          compressed: u && !oe,
          encrypted: k && !oe,
          useWebWorkers: fe,
          useCompressionStream: ae,
          transferStreams: false
        },
        config: a,
        streamOptions: {
          signal: Je,
          size: Tn,
          onstart: ie,
          onprogress: Ze,
          onend: je
        }
      }, Ct = await $o({
        readable: Oe,
        writable: de
      }, Yt);
      Ne = Ct.outputSize, oe || (De = Ct.inputSize, Ge = Ct.signature), de.size += De;
    } else
      await Be(de, d);
    let qe;
    if (D) {
      let Oe = 4;
      j && (Oe += 8), U && (Oe += 8), N && (Oe += 8), q && (Oe += 4), qe = new Uint8Array(Oe);
    } else
      qe = new Uint8Array();
    return El({
      signature: Ge,
      rawExtraFieldZip64: qe,
      compressedSize: Ne,
      uncompressedSize: De,
      headerInfo: l,
      dataDescriptorInfo: o
    }, s), te && await Be(de, b), Object.assign(et, {
      uncompressedSize: De,
      compressedSize: Ne,
      lastModDate: _,
      rawLastModDate: x,
      creationDate: E,
      lastAccessDate: v,
      encrypted: k,
      zipCrypto: P,
      size: f + Ne,
      compressionMethod: m,
      version: c,
      headerArray: p,
      signature: Ge,
      rawExtraFieldZip64: qe,
      extraFieldExtendedTimestampFlag: w,
      zip64UncompressedSize: j,
      zip64CompressedSize: U,
      zip64Offset: N,
      zip64DiskNumberStart: q
    }), et;
  }
  function yl(e) {
    const { rawFilename: t, lastModDate: n, lastAccessDate: r, creationDate: i, level: a, zip64: s, zipCrypto: l, useUnicodeFileNames: o, dataDescriptor: f, directory: d, rawExtraField: p, encryptionStrength: _, extendedTimestamp: x, encrypted: k } = e;
    let { version: u, compressionMethod: c } = e;
    const m = !d && (a > 0 || a === X && c !== 0);
    let h;
    if (k && !l) {
      h = new Uint8Array(Z(vi) + 2);
      const N = pe(h);
      G(N, 0, Va), le(h, vi, 2), nr(N, 8, _);
    } else
      h = new Uint8Array();
    let w, A, g;
    if (x) {
      A = new Uint8Array(9 + (r ? 4 : 0) + (i ? 4 : 0));
      const N = pe(A);
      G(N, 0, Vi), G(N, 2, Z(A) - 4), g = 1 + (r ? 2 : 0) + (i ? 4 : 0), nr(N, 4, g);
      let q = 5;
      V(N, q, Math.floor(n.getTime() / 1e3)), q += 4, r && (V(N, q, Math.floor(r.getTime() / 1e3)), q += 4), i && V(N, q, Math.floor(i.getTime() / 1e3));
      try {
        w = new Uint8Array(36);
        const P = pe(w), te = Hn(n);
        G(P, 0, Za), G(P, 2, 32), G(P, 8, Ya), G(P, 10, 24), Ee(P, 12, te), Ee(P, 20, Hn(r) || te), Ee(P, 28, Hn(i) || te);
      } catch {
        w = new Uint8Array();
      }
    } else
      w = A = new Uint8Array();
    let b = 0;
    o && (b = b | za), f && (b = b | Xa), c === X && (c = m ? Qr : La), c == Qr && (a >= 1 && a < 3 && (b = b | 6), a >= 3 && a < 5 && (b = b | 1), a === 9 && (b = b | 2)), s && (u = u > ti ? u : ti), k && (b = b | Ka, l || (u = u > ni ? u : ni, h[9] = c, c = Ua));
    const y = new Uint8Array(26), v = pe(y);
    G(v, 0, u), G(v, 2, b), G(v, 4, c);
    const E = new Uint32Array(1), C = pe(E);
    let T;
    n < ii ? T = ii : n > ri ? T = ri : T = n, G(C, 0, (T.getHours() << 6 | T.getMinutes()) << 5 | T.getSeconds() / 2), G(C, 2, (T.getFullYear() - 1980 << 4 | T.getMonth() + 1) << 5 | T.getDate());
    const L = E[0];
    V(v, 6, L), G(v, 22, Z(t));
    const D = Z(h, A, w, p);
    G(v, 24, D);
    const j = new Uint8Array(30 + Z(t) + D), U = pe(j);
    return V(U, 0, Pa), le(j, y, 4), le(j, t, 30), le(j, h, 30 + Z(t)), le(j, A, 30 + Z(t, h)), le(j, w, 30 + Z(t, h, A)), le(j, p, 30 + Z(t, h, A, w)), {
      localHeaderArray: j,
      headerArray: y,
      headerView: v,
      lastModDate: n,
      rawLastModDate: L,
      encrypted: k,
      compressed: m,
      version: u,
      compressionMethod: c,
      extraFieldExtendedTimestampFlag: g,
      rawExtraFieldExtendedTimestamp: A,
      rawExtraFieldNTFS: w,
      rawExtraFieldAES: h,
      extraFieldLength: D
    };
  }
  function kl(e, t) {
    const { headerInfo: n } = e;
    let { localHeaderArray: r, extraFieldLength: i } = n, a = pe(r), s = 64 - (t + Z(r)) % 64;
    s < 4 && (s += 64);
    const l = new Uint8Array(s), o = pe(l);
    G(o, 0, Ga), G(o, 2, s - 2);
    const f = r;
    n.localHeaderArray = r = new Uint8Array(Z(f) + s), le(r, f), le(r, l, Z(f)), a = pe(r), G(a, 28, i + s), e.metadataSize += s;
  }
  function Sl(e) {
    const { zip64: t, dataDescriptor: n, dataDescriptorSignature: r } = e;
    let i = new Uint8Array(), a, s = 0;
    return n && (i = new Uint8Array(t ? r ? 24 : 20 : r ? 16 : 12), a = pe(i), r && (s = 4, V(a, 0, Ma))), {
      dataDescriptorArray: i,
      dataDescriptorView: a,
      dataDescriptorOffset: s
    };
  }
  function El(e, t) {
    const { signature: n, rawExtraFieldZip64: r, compressedSize: i, uncompressedSize: a, headerInfo: s, dataDescriptorInfo: l } = e, { headerView: o, encrypted: f } = s, { dataDescriptorView: d, dataDescriptorOffset: p } = l, { zip64: _, zip64UncompressedSize: x, zip64CompressedSize: k, zipCrypto: u, dataDescriptor: c } = t;
    if ((!f || u) && n !== X && (V(o, 10, n), c && V(d, p, n)), _) {
      const m = pe(r);
      G(m, 0, Ha), G(m, 2, Z(r) - 4);
      let h = 4;
      x && (V(o, 18, Ae), Ee(m, h, BigInt(a)), h += 8), k && (V(o, 14, Ae), Ee(m, h, BigInt(i))), c && (Ee(d, p + 4, BigInt(i)), Ee(d, p + 12, BigInt(a)));
    } else
      V(o, 14, i), V(o, 18, a), c && (V(d, p + 4, i), V(d, p + 8, a));
  }
  async function Al(e, t, n, { zipCrypto: r }) {
    let i;
    i = await t.slice(0, 26).arrayBuffer(), i.byteLength != 26 && (i = i.slice(0, 26));
    const a = new DataView(i);
    return (!e.encrypted || r) && V(a, 14, e.signature), e.zip64 ? (V(a, 18, Ae), V(a, 22, Ae)) : (V(a, 18, e.compressedSize), V(a, 22, e.uncompressedSize)), await Be(n, new Uint8Array(i)), t.slice(i.byteLength);
  }
  function Tl(e, t) {
    const { rawExtraFieldZip64: n, offset: r, diskNumberStart: i } = e, { zip64UncompressedSize: a, zip64CompressedSize: s, zip64Offset: l, zip64DiskNumberStart: o } = t, f = pe(n);
    let d = 4;
    a && (d += 8), s && (d += 8), l && (Ee(f, d, BigInt(r)), d += 8), o && V(f, d, i);
  }
  async function Cl(e, t, n) {
    const { files: r, writer: i } = e, { diskOffset: a, writable: s } = i;
    let { diskNumber: l } = i, o = 0, f = 0, d = e.offset - a, p = r.size;
    for (const [, g] of r) {
      const { rawFilename: b, rawExtraFieldZip64: y, rawExtraFieldAES: v, rawComment: E, rawExtraFieldNTFS: C, rawExtraField: T, extendedTimestamp: L, extraFieldExtendedTimestampFlag: D, lastModDate: j } = g;
      let U;
      if (L) {
        U = new Uint8Array(9);
        const N = pe(U);
        G(N, 0, Vi), G(N, 2, 5), nr(N, 4, D), V(N, 5, Math.floor(j.getTime() / 1e3));
      } else
        U = new Uint8Array();
      g.rawExtraFieldCDExtendedTimestamp = U, f += 46 + Z(b, E, y, v, C, U, T);
    }
    const _ = new Uint8Array(f), x = pe(_);
    await qt(i);
    let k = 0;
    for (const [g, b] of Array.from(r.values()).entries()) {
      const { offset: y, rawFilename: v, rawExtraFieldZip64: E, rawExtraFieldAES: C, rawExtraFieldCDExtendedTimestamp: T, rawExtraFieldNTFS: L, rawExtraField: D, rawComment: j, versionMadeBy: U, headerArray: N, zip64: q, zip64UncompressedSize: P, zip64CompressedSize: te, zip64DiskNumberStart: M, zip64Offset: re, internalFileAttributes: B, externalFileAttributes: $, diskNumberStart: ve, uncompressedSize: fe, compressedSize: ie } = b, Ze = Z(E, C, T, L, D);
      V(x, o, ja), G(x, o + 4, U);
      const je = pe(N);
      P || V(je, 18, fe), te || V(je, 14, ie), le(_, N, o + 6), G(x, o + 30, Ze), G(x, o + 32, Z(j)), G(x, o + 34, q && M ? Se : ve), G(x, o + 36, B), $ && V(x, o + 38, $), V(x, o + 42, q && re ? Ae : y), le(_, v, o + 46), le(_, E, o + 46 + Z(v)), le(_, C, o + 46 + Z(v, E)), le(_, T, o + 46 + Z(v, E, C)), le(_, L, o + 46 + Z(v, E, C, T)), le(_, D, o + 46 + Z(v, E, C, T, L)), le(_, j, o + 46 + Z(v) + Ze);
      const Je = 46 + Z(v, j) + Ze;
      if (o - k > i.availableSize && (i.availableSize = 0, await Be(s, _.slice(k, o)), k = o), o += Je, n.onprogress)
        try {
          await n.onprogress(g + 1, r.size, new Ds(b));
        } catch {
        }
    }
    await Be(s, k ? _.slice(k) : _);
    let u = i.diskNumber;
    const { availableSize: c } = i;
    c < Jn && u++;
    let m = H(e, n, mr);
    if (d > Ae || f > Ae || p > Se || u > Se) {
      if (m === false)
        throw new Error(pr);
      m = true;
    }
    const h = new Uint8Array(m ? $a : Jn), w = pe(h);
    o = 0, m && (V(w, 0, Wa), Ee(w, 4, BigInt(44)), G(w, 12, 45), G(w, 14, 45), V(w, 16, u), V(w, 20, l), Ee(w, 24, BigInt(p)), Ee(w, 32, BigInt(p)), Ee(w, 40, BigInt(f)), Ee(w, 48, BigInt(d)), V(w, 56, Ba), Ee(w, 64, BigInt(d) + BigInt(f)), V(w, 72, u + 1), H(e, n, "supportZip64SplitFile", true) && (u = Se, l = Se), p = Se, d = Ae, f = Ae, o += Hi + $i), V(w, o, qa), G(w, o + 4, u), G(w, o + 6, l), G(w, o + 8, p), G(w, o + 10, p), V(w, o + 12, f), V(w, o + 16, d);
    const A = Z(t);
    if (A)
      if (A <= Se)
        G(w, o + 20, A);
      else
        throw new Error(dl);
    await Be(s, h), A && await Be(s, t);
  }
  async function Be(e, t) {
    const n = e.getWriter();
    try {
      await n.ready, e.size += Z(t), await n.write(t);
    } finally {
      n.releaseLock();
    }
  }
  function Hn(e) {
    if (e)
      return (BigInt(e.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
  }
  function H(e, t, n, r) {
    const i = t[n] === X ? e.options[n] : t[n];
    return i === X ? r : i;
  }
  function ki(e) {
    return e + 5 * (Math.floor(e / 16383) + 1);
  }
  function nr(e, t, n) {
    e.setUint8(t, n);
  }
  function G(e, t, n) {
    e.setUint16(t, n, true);
  }
  function V(e, t, n) {
    e.setUint32(t, n, true);
  }
  function Ee(e, t, n) {
    e.setBigUint64(t, n, true);
  }
  function le(e, t, n) {
    e.set(t, n);
  }
  function pe(e) {
    return new DataView(e.buffer);
  }
  function Z(...e) {
    let t = 0;
    return e.forEach((n) => n && (t += n.length)), t;
  }
  let Ns;
  try {
    Ns = import.meta.url;
  } catch {
  }
  cr({
    baseURL: Ns
  });
  Vo(cr);
  cr({
    Deflate: ma,
    Inflate: Oa
  });
  const Rl = "" + new URL("rgssad_wasm_bg-6177bb35.wasm", import.meta.url).href, Il = async (e = {}, t) => {
    let n;
    if (t.startsWith("data:")) {
      const r = t.replace(/^data:.*?base64,/, "");
      let i;
      if (typeof Buffer == "function" && typeof Buffer.from == "function")
        i = Buffer.from(r, "base64");
      else if (typeof atob == "function") {
        const a = atob(r);
        i = new Uint8Array(a.length);
        for (let s = 0; s < a.length; s++)
          i[s] = a.charCodeAt(s);
      } else
        throw new Error("Cannot decode base64-encoded data URL");
      n = await WebAssembly.instantiate(i, e);
    } else {
      const r = await fetch(t), i = r.headers.get("Content-Type") || "";
      if ("instantiateStreaming" in WebAssembly && i.startsWith("application/wasm"))
        n = await WebAssembly.instantiateStreaming(r, e);
      else {
        const a = await r.arrayBuffer();
        n = await WebAssembly.instantiate(a, e);
      }
    }
    return n.instance.exports;
  };
  let ne;
  function Fl(e) {
    ne = e;
  }
  function rr(e) {
    const t = typeof e;
    if (t == "number" || t == "boolean" || e == null)
      return `${e}`;
    if (t == "string")
      return `"${e}"`;
    if (t == "symbol") {
      const i = e.description;
      return i == null ? "Symbol" : `Symbol(${i})`;
    }
    if (t == "function") {
      const i = e.name;
      return typeof i == "string" && i.length > 0 ? `Function(${i})` : "Function";
    }
    if (Array.isArray(e)) {
      const i = e.length;
      let a = "[";
      i > 0 && (a += rr(e[0]));
      for (let s = 1; s < i; s++)
        a += ", " + rr(e[s]);
      return a += "]", a;
    }
    const n = /\[object ([^\]]+)\]/.exec(toString.call(e));
    let r;
    if (n.length > 1)
      r = n[1];
    else
      return toString.call(e);
    if (r == "Object")
      try {
        return "Object(" + JSON.stringify(e) + ")";
      } catch {
        return "Object";
      }
    return e instanceof Error ? `${e.name}: ${e.message}
${e.stack}` : r;
  }
  let ir = 0, an = null;
  function mn() {
    return (an === null || an.byteLength === 0) && (an = new Uint8Array(ne.memory.buffer)), an;
  }
  const Dl = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let pn = new Dl("utf-8");
  const Nl = typeof pn.encodeInto == "function" ? function(e, t) {
    return pn.encodeInto(e, t);
  } : function(e, t) {
    const n = pn.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function Ol(e, t, n) {
    if (n === void 0) {
      const l = pn.encode(e), o = t(l.length, 1) >>> 0;
      return mn().subarray(o, o + l.length).set(l), ir = l.length, o;
    }
    let r = e.length, i = t(r, 1) >>> 0;
    const a = mn();
    let s = 0;
    for (; s < r; s++) {
      const l = e.charCodeAt(s);
      if (l > 127)
        break;
      a[i + s] = l;
    }
    if (s !== r) {
      s !== 0 && (e = e.slice(s)), i = n(i, r, r = s + e.length * 3, 1) >>> 0;
      const l = mn().subarray(i + s, i + r), o = Nl(e, l);
      s += o.written;
    }
    return ir = s, i;
  }
  let on = null;
  function ot() {
    return (on === null || on.byteLength === 0) && (on = new Int32Array(ne.memory.buffer)), on;
  }
  const Ll = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let Os = new Ll("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Os.decode();
  function _r(e, t) {
    return e = e >>> 0, Os.decode(mn().subarray(e, e + t));
  }
  function Si(e) {
    const t = ne.__wbindgen_export_2.get(e);
    return ne.__wbindgen_export_3(e), t;
  }
  function Ul(e) {
    return e == null;
  }
  function Ls(e) {
    const t = ne.__wbindgen_export_4();
    return ne.__wbindgen_export_2.set(t, e), t;
  }
  function Pl(e, t) {
    try {
      return e.apply(this, t);
    } catch (n) {
      const r = Ls(n);
      ne.__wbindgen_export_5(r);
    }
  }
  class gn {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(gn.prototype);
      return n.__wbg_ptr = t, n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      ne.__wbg_reader_free(t);
    }
    constructor(t) {
      try {
        const a = ne.__wbindgen_add_to_stack_pointer(-16);
        ne.reader_new(a, t);
        var n = ot()[a / 4 + 0], r = ot()[a / 4 + 1], i = ot()[a / 4 + 2];
        if (i)
          throw Si(r);
        return gn.__wrap(n);
      } finally {
        ne.__wbindgen_add_to_stack_pointer(16);
      }
    }
    readEntry(t) {
      try {
        const a = ne.__wbindgen_add_to_stack_pointer(-16);
        ne.reader_readEntry(a, this.__wbg_ptr, Ul(t) ? 0 : Ls(t));
        var n = ot()[a / 4 + 0], r = ot()[a / 4 + 1], i = ot()[a / 4 + 2];
        if (i)
          throw Si(r);
        return n === 0 ? void 0 : hr.__wrap(n);
      } finally {
        ne.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class hr {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(hr.prototype);
      return n.__wbg_ptr = t, n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      ne.__wbg_readerentry_free(t);
    }
    get fileName() {
      return ne.readerentry_fileName(this.__wbg_ptr);
    }
    get data() {
      return ne.readerentry_data(this.__wbg_ptr);
    }
  }
  function Ml(e, t) {
    const n = rr(t), r = Ol(n, ne.__wbindgen_export_0, ne.__wbindgen_export_1), i = ir;
    ot()[e / 4 + 1] = i, ot()[e / 4 + 0] = r;
  }
  function jl(e) {
    let t;
    try {
      t = e instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }
  function ql(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function Wl(e) {
    return new Uint8Array(e);
  }
  function Bl(e, t) {
    return new Error(_r(e, t));
  }
  function $l(e, t) {
    return _r(e, t);
  }
  function Hl(e) {
    return e;
  }
  function Vl() {
    return Pl(function(e, t, n, r) {
      return e.call(t, n, r);
    }, arguments);
  }
  function Zl(e) {
    return !e;
  }
  function Yl(e) {
    return new Uint8Array(e >>> 0);
  }
  function Gl(e) {
    return e.length;
  }
  function Kl() {
    return ne.memory;
  }
  function Xl(e) {
    return e.buffer;
  }
  function zl(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
  }
  function Jl(e, t, n) {
    e.set(t, n >>> 0);
  }
  function Ql(e, t) {
    throw new Error(_r(e, t));
  }
  function ec() {
    const e = ne.__wbindgen_export_2, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  URL = globalThis.URL;
  const ge = await Il({
    "./rgssad_wasm_bg.js": {
      __wbindgen_debug_string: Ml,
      __wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4: jl,
      __wbg_instanceof_ArrayBuffer_39ac22089b74fddb: ql,
      __wbg_new_8125e318e6245eed: Wl,
      __wbindgen_error_new: Bl,
      __wbindgen_string_new: $l,
      __wbindgen_number_new: Hl,
      __wbg_call_4c92f6aec1e1d6e6: Vl,
      __wbindgen_is_falsy: Zl,
      __wbg_newwithlength_e5d69174d6984cd7: Yl,
      __wbg_length_72e2208bbc0efc61: Gl,
      __wbindgen_memory: Kl,
      __wbg_buffer_085ec1f694018c4f: Xl,
      __wbg_newwithbyteoffsetandlength_6da8e527659b86aa: zl,
      __wbg_set_5cf90238115182c3: Jl,
      __wbindgen_throw: Ql,
      __wbindgen_init_externref_table: ec
    }
  }, Rl), tc = ge.memory, nc = ge.__wbg_reader_free, rc = ge.reader_new, ic = ge.reader_readEntry, sc = ge.__wbg_readerentry_free, ac = ge.readerentry_fileName, oc = ge.readerentry_data, lc = ge.__wbindgen_export_0, cc = ge.__wbindgen_export_1, fc = ge.__wbindgen_export_2, dc = ge.__wbindgen_add_to_stack_pointer, uc = ge.__wbindgen_export_3, mc = ge.__wbindgen_export_4, pc = ge.__wbindgen_export_5, Us = ge.__wbindgen_start, _c = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_reader_free: nc,
    __wbg_readerentry_free: sc,
    __wbindgen_add_to_stack_pointer: dc,
    __wbindgen_export_0: lc,
    __wbindgen_export_1: cc,
    __wbindgen_export_2: fc,
    __wbindgen_export_3: uc,
    __wbindgen_export_4: mc,
    __wbindgen_export_5: pc,
    __wbindgen_start: Us,
    memory: tc,
    reader_new: rc,
    reader_readEntry: ic,
    readerentry_data: oc,
    readerentry_fileName: ac
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Fl(_c);
  Us();
  const Vn = "\\";
  const _Wt = class _Wt {
    constructor({ path: t, isFile: n, data: r = null }) {
      __privateAdd(this, _e2, void 0);
      __privateAdd(this, _n2, void 0);
      __privateAdd(this, _t2, void 0);
      if (t == null)
        throw new Error("Missing `path` argument");
      if (n == null)
        throw new Error("Missing `isFile` argument");
      if (__privateSet(this, _e2, t), __privateSet(this, _n2, n), __privateSet(this, _t2, null), this.data = null, n) {
        if (r == null)
          throw new Error("Missing `data` argument");
        this.data = r;
      } else
        __privateSet(this, _t2, /* @__PURE__ */ new Map());
    }
    get path() {
      return __privateGet(this, _e2);
    }
    get isFile() {
      return __privateGet(this, _n2);
    }
    name() {
      return __privateGet(this, _e2).split(Vn).at(-1);
    }
    depth() {
      return __privateGet(this, _e2).split(Vn).length - 1;
    }
    addChild(t) {
      if (!(t instanceof _Wt))
        throw new Error("argument must be a FileNode");
      if (this.isFile)
        throw new Error("cannot add child to file");
      if (t.path === "")
        throw new Error("non-root FileNode must have a name");
      if (!__privateGet(t, _e2).startsWith(__privateGet(this, _e2)))
        throw new Error(`provided FileNode ("${t.path}") is not a child of this FileNode ("${this.path}")`);
      if (__privateGet(this, _e2).length === __privateGet(t, _e2).length)
        throw new Error(`duplicate FileNode ("${t.path}")`);
      const n = __privateGet(t, _e2).indexOf(Vn, __privateGet(this, _e2).length + 1);
      if (n === -1) {
        const r = __privateGet(t, _e2).slice(__privateGet(this, _e2).length + 1);
        if (__privateGet(this, _t2).has(r))
          throw new Error(`duplicate FileNode ("${t.path}")`);
        __privateGet(this, _t2).set(r, t);
      } else {
        const r = __privateGet(t, _e2).slice(__privateGet(this, _e2).length === 0 ? 0 : __privateGet(this, _e2).length + 1, n);
        if (!__privateGet(this, _t2).has(r)) {
          const i = new _Wt({
            path: __privateGet(t, _e2).slice(0, n),
            isFile: false
          });
          __privateGet(this, _t2).set(r, i);
        }
        __privateGet(this, _t2).get(r).addChild(t);
      }
    }
    *iterChildren() {
      if (this.isFile)
        throw new Error("cannot iter over the children of a file");
      for (const t of __privateGet(this, _t2).values())
        yield t;
    }
    *iterDfs() {
      if (this.isFile)
        throw new Error("cannot iter over the descendants of a file");
      const t = [];
      for (t.push(this); t.length !== 0; ) {
        const n = t.pop();
        if (yield n, !n.isFile)
          for (const r of n.iterChildren())
            t.push(r);
      }
    }
    toString() {
      return `FileNode(path="${__privateGet(this, _e2)}")`;
    }
  };
  _e2 = new WeakMap();
  _n2 = new WeakMap();
  _t2 = new WeakMap();
  let Wt = _Wt;
  function hc(e) {
    let t, n, r, i, a, s, l, o;
    return {
      c() {
        t = ue("div"), n = ue("h1"), n.textContent = "RGSSAD Online Viewer", r = mt(), i = ue("label"), i.textContent = "Upload Archive", a = mt(), s = ue("input"), Q(i, "for", "archive-input"), Q(i, "class", "input-label svelte-bs5obz"), Q(s, "type", "file"), Q(s, "id", "archive-input"), Q(s, "name", "archive-input"), Q(s, "accept", ".rgssad,.rgss2a"), Q(s, "class", "svelte-bs5obz"), Q(t, "class", "container svelte-bs5obz");
      },
      m(f, d) {
        he(f, t, d), se(t, n), se(t, r), se(t, i), se(t, a), se(t, s), l || (o = [
          pt(i, "dragover", kr(e[2])),
          pt(i, "drop", kr(e[0])),
          pt(s, "change", e[1])
        ], l = true);
      },
      p: Ke,
      i: Ke,
      o: Ke,
      d(f) {
        f && _e(t), l = false, St(o);
      }
    };
  }
  function xc(e) {
    const t = Li();
    function n(s) {
      const l = s.dataTransfer.items;
      if (!l)
        return;
      if (l.length !== 1) {
        alert("Expected only one file");
        return;
      }
      const o = l[0];
      if (o.kind !== "file") {
        alert("Only files are supported");
        return;
      }
      const f = o.getAsFile();
      i(f).catch(alert);
    }
    function r(s) {
      const l = s.target;
      if (l.files.length !== 1) {
        alert("Expected only one file");
        return;
      }
      const o = l.files[0];
      i(o).catch(alert);
    }
    async function i(s) {
      const l = await s.arrayBuffer(), o = new gn(l), f = new Wt({
        path: "",
        isFile: false
      });
      for (let d = o.readEntry(); d != null; d = o.readEntry()) {
        const p = new Wt({
          path: d.fileName,
          isFile: true,
          data: d.data
        });
        f.addChild(p);
      }
      t("load", {
        fileName: s.name,
        fileNode: f
      });
    }
    function a(s) {
      Zn.call(this, e, s);
    }
    return [
      n,
      r,
      a
    ];
  }
  class wc extends or {
    constructor(t) {
      super(), ar(this, t, xc, hc, sr, {});
    }
  }
  function Ei(e, t, n) {
    const r = e.slice();
    return r[0] = t[n], r;
  }
  function Ai(e, t, n) {
    const r = e.slice();
    return r[0] = t[n], r;
  }
  function bc(e) {
    let t, n, r, i;
    const a = [
      yc,
      vc
    ], s = [];
    function l(o, f) {
      return o[0].isFile ? 0 : 1;
    }
    return n = l(e), r = s[n] = a[n](e), {
      c() {
        t = ue("li"), r.c();
      },
      m(o, f) {
        he(o, t, f), s[n].m(t, null), i = true;
      },
      p(o, f) {
        let d = n;
        n = l(o), n === d ? s[n].p(o, f) : (Et(), xe(s[d], 1, 1, () => {
          s[d] = null;
        }), At(), r = s[n], r ? r.p(o, f) : (r = s[n] = a[n](o), r.c()), ce(r, 1), r.m(t, null));
      },
      i(o) {
        i || (ce(r), i = true);
      },
      o(o) {
        xe(r), i = false;
      },
      d(o) {
        o && _e(t), s[n].d();
      }
    };
  }
  function gc(e) {
    let t, n, r = hn(e[0].iterChildren()), i = [];
    for (let s = 0; s < r.length; s += 1)
      i[s] = Ri(Ai(e, r, s));
    const a = (s) => xe(i[s], 1, 1, () => {
      i[s] = null;
    });
    return {
      c() {
        t = ue("ol");
        for (let s = 0; s < i.length; s += 1)
          i[s].c();
        Q(t, "class", "svelte-5jhjyf");
      },
      m(s, l) {
        he(s, t, l);
        for (let o = 0; o < i.length; o += 1)
          i[o] && i[o].m(t, null);
        n = true;
      },
      p(s, l) {
        if (l & 1) {
          r = hn(s[0].iterChildren());
          let o;
          for (o = 0; o < r.length; o += 1) {
            const f = Ai(s, r, o);
            i[o] ? (i[o].p(f, l), ce(i[o], 1)) : (i[o] = Ri(f), i[o].c(), ce(i[o], 1), i[o].m(t, null));
          }
          for (Et(), o = r.length; o < i.length; o += 1)
            a(o);
          At();
        }
      },
      i(s) {
        if (!n) {
          for (let l = 0; l < r.length; l += 1)
            ce(i[l]);
          n = true;
        }
      },
      o(s) {
        i = i.filter(Boolean);
        for (let l = 0; l < i.length; l += 1)
          xe(i[l]);
        n = false;
      },
      d(s) {
        s && _e(t), Oi(i, s);
      }
    };
  }
  function vc(e) {
    let t, n, r = e[0].name() + "", i, a, s, l, o, f;
    function d(k, u) {
      return k[1] ? Sc : kc;
    }
    let p = d(e), _ = p(e), x = e[1] && Ti(e);
    return {
      c() {
        t = ue("button"), _.c(), n = mt(), i = Ve(r), a = mt(), s = ue("ol"), x && x.c(), _n(t, "padding-left", e[0].depth() + "rem"), Q(t, "class", "svelte-5jhjyf"), Q(s, "class", "svelte-5jhjyf");
      },
      m(k, u) {
        he(k, t, u), _.m(t, null), se(t, n), se(t, i), he(k, a, u), he(k, s, u), x && x.m(s, null), l = true, o || (f = pt(t, "click", e[2]), o = true);
      },
      p(k, u) {
        p !== (p = d(k)) && (_.d(1), _ = p(k), _ && (_.c(), _.m(t, n))), (!l || u & 1) && r !== (r = k[0].name() + "") && yn(i, r), (!l || u & 1) && _n(t, "padding-left", k[0].depth() + "rem"), k[1] ? x ? (x.p(k, u), u & 2 && ce(x, 1)) : (x = Ti(k), x.c(), ce(x, 1), x.m(s, null)) : x && (Et(), xe(x, 1, 1, () => {
          x = null;
        }), At());
      },
      i(k) {
        l || (ce(x), l = true);
      },
      o(k) {
        xe(x), l = false;
      },
      d(k) {
        k && (_e(t), _e(a), _e(s)), _.d(), x && x.d(), o = false, f();
      }
    };
  }
  function yc(e) {
    let t, n = e[0].name() + "", r, i, a;
    return {
      c() {
        t = ue("button"), r = Ve(n), _n(t, "padding-left", e[0].depth() + "rem"), Q(t, "class", "svelte-5jhjyf");
      },
      m(s, l) {
        he(s, t, l), se(t, r), i || (a = pt(t, "click", e[3]), i = true);
      },
      p(s, l) {
        l & 1 && n !== (n = s[0].name() + "") && yn(r, n), l & 1 && _n(t, "padding-left", s[0].depth() + "rem");
      },
      i: Ke,
      o: Ke,
      d(s) {
        s && _e(t), i = false, a();
      }
    };
  }
  function kc(e) {
    let t;
    return {
      c() {
        t = Ve("+");
      },
      m(n, r) {
        he(n, t, r);
      },
      d(n) {
        n && _e(t);
      }
    };
  }
  function Sc(e) {
    let t;
    return {
      c() {
        t = Ve("-");
      },
      m(n, r) {
        he(n, t, r);
      },
      d(n) {
        n && _e(t);
      }
    };
  }
  function Ti(e) {
    let t, n, r = hn(e[0].iterChildren()), i = [];
    for (let s = 0; s < r.length; s += 1)
      i[s] = Ci(Ei(e, r, s));
    const a = (s) => xe(i[s], 1, 1, () => {
      i[s] = null;
    });
    return {
      c() {
        for (let s = 0; s < i.length; s += 1)
          i[s].c();
        t = vn();
      },
      m(s, l) {
        for (let o = 0; o < i.length; o += 1)
          i[o] && i[o].m(s, l);
        he(s, t, l), n = true;
      },
      p(s, l) {
        if (l & 1) {
          r = hn(s[0].iterChildren());
          let o;
          for (o = 0; o < r.length; o += 1) {
            const f = Ei(s, r, o);
            i[o] ? (i[o].p(f, l), ce(i[o], 1)) : (i[o] = Ci(f), i[o].c(), ce(i[o], 1), i[o].m(t.parentNode, t));
          }
          for (Et(), o = r.length; o < i.length; o += 1)
            a(o);
          At();
        }
      },
      i(s) {
        if (!n) {
          for (let l = 0; l < r.length; l += 1)
            ce(i[l]);
          n = true;
        }
      },
      o(s) {
        i = i.filter(Boolean);
        for (let l = 0; l < i.length; l += 1)
          xe(i[l]);
        n = false;
      },
      d(s) {
        s && _e(t), Oi(i, s);
      }
    };
  }
  function Ci(e) {
    let t, n;
    return t = new xr({
      props: {
        fileNode: e[0]
      }
    }), t.$on("selected-file-node", e[5]), {
      c() {
        kn(t.$$.fragment);
      },
      m(r, i) {
        Bt(t, r, i), n = true;
      },
      p(r, i) {
        const a = {};
        i & 1 && (a.fileNode = r[0]), t.$set(a);
      },
      i(r) {
        n || (ce(t.$$.fragment, r), n = true);
      },
      o(r) {
        xe(t.$$.fragment, r), n = false;
      },
      d(r) {
        $t(t, r);
      }
    };
  }
  function Ri(e) {
    let t, n;
    return t = new xr({
      props: {
        fileNode: e[0]
      }
    }), t.$on("selected-file-node", e[4]), {
      c() {
        kn(t.$$.fragment);
      },
      m(r, i) {
        Bt(t, r, i), n = true;
      },
      p(r, i) {
        const a = {};
        i & 1 && (a.fileNode = r[0]), t.$set(a);
      },
      i(r) {
        n || (ce(t.$$.fragment, r), n = true);
      },
      o(r) {
        xe(t.$$.fragment, r), n = false;
      },
      d(r) {
        $t(t, r);
      }
    };
  }
  function Ec(e) {
    let t, n, r, i;
    const a = [
      gc,
      bc
    ], s = [];
    function l(o, f) {
      return o[0].path === "" ? 0 : 1;
    }
    return t = l(e), n = s[t] = a[t](e), {
      c() {
        n.c(), r = vn();
      },
      m(o, f) {
        s[t].m(o, f), he(o, r, f), i = true;
      },
      p(o, [f]) {
        let d = t;
        t = l(o), t === d ? s[t].p(o, f) : (Et(), xe(s[d], 1, 1, () => {
          s[d] = null;
        }), At(), n = s[t], n ? n.p(o, f) : (n = s[t] = a[t](o), n.c()), ce(n, 1), n.m(r.parentNode, r));
      },
      i(o) {
        i || (ce(n), i = true);
      },
      o(o) {
        xe(n), i = false;
      },
      d(o) {
        o && _e(r), s[t].d(o);
      }
    };
  }
  function Ac(e, t, n) {
    let { fileNode: r = null } = t;
    const i = Li();
    let a = false;
    function s() {
      n(1, a = !a);
    }
    function l() {
      i("selected-file-node", r);
    }
    function o(d) {
      Zn.call(this, e, d);
    }
    function f(d) {
      Zn.call(this, e, d);
    }
    return e.$$set = (d) => {
      "fileNode" in d && n(0, r = d.fileNode);
    }, [
      r,
      a,
      s,
      l,
      o,
      f
    ];
  }
  class xr extends or {
    constructor(t) {
      super(), ar(this, t, Ac, Ec, sr, {
        fileNode: 0
      });
    }
  }
  function Tc(e) {
    const t = e.slice(), n = URL.createObjectURL(new Blob([
      t[1].data
    ], {
      type: Oc(t[1])
    }));
    return t[6] = n, t;
  }
  function Cc(e) {
    let t, n;
    return t = new wc({}), t.$on("load", e[4]), {
      c() {
        kn(t.$$.fragment);
      },
      m(r, i) {
        Bt(t, r, i), n = true;
      },
      p: Ke,
      i(r) {
        n || (ce(t.$$.fragment, r), n = true);
      },
      o(r) {
        xe(t.$$.fragment, r), n = false;
      },
      d(r) {
        $t(t, r);
      }
    };
  }
  function Rc(e) {
    let t, n, r, i, a, s, l, o, f, d, p, _ = "Current: " + (e[1] ? e[1].path : "None"), x, k, u, c, m;
    o = new xr({
      props: {
        fileNode: e[0]
      }
    }), o.$on("selected-file-node", e[3]);
    let h = e[1] && Ii(e);
    return {
      c() {
        t = ue("div"), n = ue("div"), r = ue("button"), r.textContent = "Export Zip", i = mt(), a = ue("div"), s = ue("div"), l = Ve(`Tree View
        `), kn(o.$$.fragment), f = mt(), d = ue("div"), p = ue("div"), x = Ve(_), k = mt(), h && h.c(), Q(r, "class", "svelte-qx1job"), Q(n, "class", "viewer-bar svelte-qx1job"), Q(s, "class", "tree-view svelte-qx1job"), Q(p, "class", "file-preview-header svelte-qx1job"), Q(d, "class", "file-preview svelte-qx1job"), Q(a, "class", "viewer-main-container svelte-qx1job"), Q(t, "class", "viewer-container svelte-qx1job");
      },
      m(w, A) {
        he(w, t, A), se(t, n), se(n, r), se(t, i), se(t, a), se(a, s), se(s, l), Bt(o, s, null), se(a, f), se(a, d), se(d, p), se(p, x), se(d, k), h && h.m(d, null), u = true, c || (m = pt(r, "click", e[2]), c = true);
      },
      p(w, A) {
        const g = {};
        A & 1 && (g.fileNode = w[0]), o.$set(g), (!u || A & 2) && _ !== (_ = "Current: " + (w[1] ? w[1].path : "None")) && yn(x, _), w[1] ? h ? h.p(w, A) : (h = Ii(w), h.c(), h.m(d, null)) : h && (h.d(1), h = null);
      },
      i(w) {
        u || (ce(o.$$.fragment, w), u = true);
      },
      o(w) {
        xe(o.$$.fragment, w), u = false;
      },
      d(w) {
        w && _e(t), $t(o), h && h.d(), c = false, m();
      }
    };
  }
  function Ii(e) {
    let t, n;
    function r(l, o) {
      return o & 2 && (t = null), t == null && (t = !!Nc(l[1])), t ? Fi : Ic;
    }
    function i(l, o) {
      return o === Fi ? Tc(l) : l;
    }
    let a = r(e, -1), s = a(i(e, a));
    return {
      c() {
        s.c(), n = vn();
      },
      m(l, o) {
        s.m(l, o), he(l, n, o);
      },
      p(l, o) {
        a === (a = r(l, o)) && s ? s.p(i(l, a), o) : (s.d(1), s = a(i(l, a)), s && (s.c(), s.m(n.parentNode, n)));
      },
      d(l) {
        l && _e(n), s.d(l);
      }
    };
  }
  function Ic(e) {
    let t, n, r = e[1].name() + "", i;
    return {
      c() {
        t = ue("div"), n = Ve("Unknown File Type: "), i = Ve(r), Q(t, "class", "unknown-file-type svelte-qx1job");
      },
      m(a, s) {
        he(a, t, s), se(t, n), se(t, i);
      },
      p(a, s) {
        s & 2 && r !== (r = a[1].name() + "") && yn(i, r);
      },
      d(a) {
        a && _e(t);
      }
    };
  }
  function Fi(e) {
    let t, n, r, i, a;
    return {
      c() {
        t = ue("img"), Q(t, "class", "preview-image svelte-qx1job"), yr(t.src, n = e[6]) || Q(t, "src", n), Q(t, "alt", r = "preview for " + e[1].path);
      },
      m(s, l) {
        he(s, t, l), i || (a = pt(t, "load", Dc), i = true);
      },
      p(s, l) {
        l & 2 && !yr(t.src, n = s[6]) && Q(t, "src", n), l & 2 && r !== (r = "preview for " + s[1].path) && Q(t, "alt", r);
      },
      d(s) {
        s && _e(t), i = false, a();
      }
    };
  }
  function Fc(e) {
    let t, n, r, i;
    const a = [
      Rc,
      Cc
    ], s = [];
    function l(o, f) {
      return o[0] !== null ? 0 : 1;
    }
    return t = l(e), n = s[t] = a[t](e), {
      c() {
        n.c(), r = vn();
      },
      m(o, f) {
        s[t].m(o, f), he(o, r, f), i = true;
      },
      p(o, [f]) {
        let d = t;
        t = l(o), t === d ? s[t].p(o, f) : (Et(), xe(s[d], 1, 1, () => {
          s[d] = null;
        }), At(), n = s[t], n ? n.p(o, f) : (n = s[t] = a[t](o), n.c()), ce(n, 1), n.m(r.parentNode, r));
      },
      i(o) {
        i || (ce(n), i = true);
      },
      o(o) {
        xe(n), i = false;
      },
      d(o) {
        o && _e(r), s[t].d(o);
      }
    };
  }
  function Dc(e) {
    const t = e.target;
    t.width = t.naturalWidth, t.height = t.naturalHeight, t.style["aspect-ratio"] = `${t.naturalWidth} / ${t.naturalHeight}`;
  }
  function Nc(e) {
    return e.path.endsWith(".png") || e.path.endsWith(".jpg") || e.path.endsWith(".bmp");
  }
  function Oc(e) {
    return e.path.endsWith(".png") ? "image/png" : e.path.endsWith(".jpg") ? "image/jpeg" : e.path.endsWith(".bmp") ? "image/bmp" : null;
  }
  function Lc(e, t, n) {
    let r = null, i = null, a = null;
    async function s() {
      if (r === null)
        throw Error("archive has not been loaded");
      const f = new Ko(), d = new wl(f);
      for (const x of r.iterDfs())
        if (x.isFile) {
          const k = new Xo(x.data);
          await d.add(x.path, k);
        }
      const p = await d.close(), _ = document.createElement("a");
      _.href = window.URL.createObjectURL(p), _.download = i + ".zip", _.click();
    }
    function l(f) {
      n(1, a = f.detail);
    }
    function o(f) {
      i = f.detail.fileName, n(0, r = f.detail.fileNode);
    }
    return [
      r,
      a,
      s,
      l,
      o
    ];
  }
  class Uc extends or {
    constructor(t) {
      super(), ar(this, t, Lc, Fc, sr, {});
    }
  }
  new Uc({
    target: document.getElementById("app")
  });
})();
