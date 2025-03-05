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
  function Ii(e) {
    return e();
  }
  function gr() {
    return /* @__PURE__ */ Object.create(null);
  }
  function At(e) {
    e.forEach(Ii);
  }
  function Fi(e) {
    return typeof e == "function";
  }
  function ir(e, t) {
    return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
  }
  let Gt;
  function vr(e, t) {
    return e === t ? true : (Gt || (Gt = document.createElement("a")), Gt.href = t, e === Gt.href);
  }
  function Us(e) {
    return Object.keys(e).length === 0;
  }
  function ae(e, t) {
    e.appendChild(t);
  }
  function _e(e, t, n) {
    e.insertBefore(t, n || null);
  }
  function pe(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function Di(e, t) {
    for (let n = 0; n < e.length; n += 1)
      e[n] && e[n].d(t);
  }
  function de(e) {
    return document.createElement(e);
  }
  function Ze(e) {
    return document.createTextNode(e);
  }
  function mt() {
    return Ze(" ");
  }
  function vn() {
    return Ze("");
  }
  function pt(e, t, n, r) {
    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r);
  }
  function yr(e) {
    return function(t) {
      return t.preventDefault(), e.call(this, t);
    };
  }
  function Q(e, t, n) {
    n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
  }
  function Ps(e) {
    return Array.from(e.childNodes);
  }
  function yn(e, t) {
    t = "" + t, e.data !== t && (e.data = t);
  }
  function pn(e, t, n, r) {
    n == null ? e.style.removeProperty(t) : e.style.setProperty(t, n, r ? "important" : "");
  }
  function Ms(e, t, { bubbles: n = false, cancelable: r = false } = {}) {
    return new CustomEvent(e, {
      detail: t,
      bubbles: n,
      cancelable: r
    });
  }
  let Lt;
  function Nt(e) {
    Lt = e;
  }
  function js() {
    if (!Lt)
      throw new Error("Function called outside component initialization");
    return Lt;
  }
  function Oi() {
    const e = js();
    return (t, n, { cancelable: r = false } = {}) => {
      const i = e.$$.callbacks[t];
      if (i) {
        const a = Ms(t, n, {
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
  const vt = [], kr = [];
  let St = [];
  const Sr = [], qs = Promise.resolve();
  let Gn = false;
  function Ws() {
    Gn || (Gn = true, qs.then(Ni));
  }
  function Yn(e) {
    St.push(e);
  }
  const In = /* @__PURE__ */ new Set();
  let xt = 0;
  function Ni() {
    if (xt !== 0)
      return;
    const e = Lt;
    do {
      try {
        for (; xt < vt.length; ) {
          const t = vt[xt];
          xt++, Nt(t), Bs(t.$$);
        }
      } catch (t) {
        throw vt.length = 0, xt = 0, t;
      }
      for (Nt(null), vt.length = 0, xt = 0; kr.length; )
        kr.pop()();
      for (let t = 0; t < St.length; t += 1) {
        const n = St[t];
        In.has(n) || (In.add(n), n());
      }
      St.length = 0;
    } while (vt.length);
    for (; Sr.length; )
      Sr.pop()();
    Gn = false, In.clear(), Nt(e);
  }
  function Bs(e) {
    if (e.fragment !== null) {
      e.update(), At(e.before_update);
      const t = e.dirty;
      e.dirty = [
        -1
      ], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Yn);
    }
  }
  function $s(e) {
    const t = [], n = [];
    St.forEach((r) => e.indexOf(r) === -1 ? t.push(r) : n.push(r)), n.forEach((r) => r()), St = t;
  }
  const on = /* @__PURE__ */ new Set();
  let ut;
  function Tt() {
    ut = {
      r: 0,
      c: [],
      p: ut
    };
  }
  function Ct() {
    ut.r || At(ut.c), ut = ut.p;
  }
  function le(e, t) {
    e && e.i && (on.delete(e), e.i(t));
  }
  function he(e, t, n, r) {
    if (e && e.o) {
      if (on.has(e))
        return;
      on.add(e), ut.c.push(() => {
        on.delete(e), r && (n && e.d(1), r());
      }), e.o(t);
    } else
      r && r();
  }
  function _n(e) {
    return (e == null ? void 0 : e.length) !== void 0 ? e : Array.from(e);
  }
  function kn(e) {
    e && e.c();
  }
  function Bt(e, t, n) {
    const { fragment: r, after_update: i } = e.$$;
    r && r.m(t, n), Yn(() => {
      const a = e.$$.on_mount.map(Ii).filter(Fi);
      e.$$.on_destroy ? e.$$.on_destroy.push(...a) : At(a), e.$$.on_mount = [];
    }), i.forEach(Yn);
  }
  function $t(e, t) {
    const n = e.$$;
    n.fragment !== null && ($s(n.after_update), At(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
  }
  function Hs(e, t) {
    e.$$.dirty[0] === -1 && (vt.push(e), Ws(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
  }
  function sr(e, t, n, r, i, a, s = null, l = [
    -1
  ]) {
    const o = Lt;
    Nt(e);
    const f = e.$$ = {
      fragment: null,
      ctx: [],
      props: a,
      update: Ke,
      not_equal: i,
      bound: gr(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(t.context || (o ? o.$$.context : [])),
      callbacks: gr(),
      dirty: l,
      skip_bound: false,
      root: t.target || o.$$.root
    };
    s && s(f.root);
    let d = false;
    if (f.ctx = n ? n(e, t.props || {}, (p, _, ...w) => {
      const k = w.length ? w[0] : _;
      return f.ctx && i(f.ctx[p], f.ctx[p] = k) && (!f.skip_bound && f.bound[p] && f.bound[p](k), d && Hs(e, p)), _;
    }) : [], f.update(), d = true, At(f.before_update), f.fragment = r ? r(f.ctx) : false, t.target) {
      if (t.hydrate) {
        const p = Ps(t.target);
        f.fragment && f.fragment.l(p), p.forEach(pe);
      } else
        f.fragment && f.fragment.c();
      t.intro && le(e.$$.fragment), Bt(e, t.target, t.anchor), Ni();
    }
    Nt(o);
  }
  class ar {
    constructor() {
      __publicField(this, "$$");
      __publicField(this, "$$set");
    }
    $destroy() {
      $t(this, 1), this.$destroy = Ke;
    }
    $on(t, n) {
      if (!Fi(n))
        return Ke;
      const r = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
      return r.push(n), () => {
        const i = r.indexOf(n);
        i !== -1 && r.splice(i, 1);
      };
    }
    $set(t) {
      this.$$set && !Us(t) && (this.$$.skip_bound = true, this.$$set(t), this.$$.skip_bound = false);
    }
  }
  const Vs = "4";
  typeof window < "u" && (window.__svelte || (window.__svelte = {
    v: /* @__PURE__ */ new Set()
  })).v.add(Vs);
  const Ut = 15, Kn = 30, Xn = 19, Zs = 29, hn = 256, or = hn + 1 + Zs, Er = 2 * or + 1, Rt = 256, Gs = 7, Ar = 16, Tr = 17, Cr = 18, Fn = 8 * 2, wn = -1, Ys = 1, Yt = 2, Ks = 0, yt = 0, Rr = 1, Xs = 3, ve = 4, Ue = 0, Li = 1, Kt = 2, Pe = -2, zs = -3, bt = -5;
  function Sn(e) {
    return En(e.map(([t, n]) => new Array(t).fill(n, 0, t)));
  }
  function En(e) {
    return e.reduce((t, n) => t.concat(Array.isArray(n) ? En(n) : n), []);
  }
  const Ir = [
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
      let d, p, _, w, k, u, c = 0;
      for (w = 0; w <= Ut; w++)
        i.bl_count[w] = 0;
      for (a[i.heap[i.heap_max] * 2 + 1] = 0, d = i.heap_max + 1; d < Er; d++)
        p = i.heap[d], w = a[a[p * 2 + 1] * 2 + 1] + 1, w > f && (w = f, c++), a[p * 2 + 1] = w, !(p > e.max_code) && (i.bl_count[w]++, k = 0, p >= o && (k = l[p - o]), u = a[p * 2], i.opt_len += u * (w + k), s && (i.static_len += u * (s[p * 2 + 1] + k)));
      if (c !== 0) {
        do {
          for (w = f - 1; i.bl_count[w] === 0; )
            w--;
          i.bl_count[w]--, i.bl_count[w + 1] += 2, i.bl_count[f]--, c -= 2;
        } while (c > 0);
        for (w = f; w !== 0; w--)
          for (p = i.bl_count[w]; p !== 0; )
            _ = i.heap[--d], !(_ > e.max_code) && (a[_ * 2 + 1] != w && (i.opt_len += (w - a[_ * 2 + 1]) * a[_ * 2], a[_ * 2 + 1] = w), p--);
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
      for (i.heap_len = 0, i.heap_max = Er, o = 0; o < l; o++)
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
    return e < 256 ? Ir[e] : Ir[256 + (e >>> 7)];
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
  function ue(e, t, n, r, i) {
    const a = this;
    a.static_tree = e, a.extra_bits = t, a.extra_base = n, a.elems = r, a.max_length = i;
  }
  const Js = [
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
  ], Qs = Sn([
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
  ue.static_ltree = En(Js.map((e, t) => [
    e,
    Qs[t]
  ]));
  const ea = [
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
  ], ta = Sn([
    [
      30,
      5
    ]
  ]);
  ue.static_dtree = En(ea.map((e, t) => [
    e,
    ta[t]
  ]));
  ue.static_l_desc = new ue(ue.static_ltree, z.extra_lbits, hn + 1, or, Ut);
  ue.static_d_desc = new ue(ue.static_dtree, z.extra_dbits, 0, Kn, Ut);
  ue.static_bl_desc = new ue(null, z.extra_blbits, 0, Xn, Gs);
  const na = 9, ra = 8;
  function Be(e, t, n, r, i) {
    const a = this;
    a.good_length = e, a.max_lazy = t, a.nice_length = n, a.max_chain = r, a.func = i;
  }
  const Ui = 0, ln = 1, ft = 2, Le = [
    new Be(0, 0, 0, 0, Ui),
    new Be(4, 4, 8, 4, ln),
    new Be(4, 5, 16, 8, ln),
    new Be(4, 6, 32, 32, ln),
    new Be(4, 4, 16, 16, ft),
    new Be(8, 16, 32, 32, ft),
    new Be(8, 16, 128, 128, ft),
    new Be(8, 32, 128, 256, ft),
    new Be(32, 128, 258, 1024, ft),
    new Be(32, 258, 258, 4096, ft)
  ], Xt = [
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
  ], Re = 0, zt = 1, It = 2, Jt = 3, ia = 32, Dn = 42, Qt = 113, Ft = 666, On = 8, sa = 0, Nn = 1, aa = 2, te = 3, cn = 258, Ae = cn + te + 1;
  function Fr(e, t, n, r) {
    const i = e[t * 2], a = e[n * 2];
    return i < a || i == a && r[t] <= r[n];
  }
  function oa() {
    const e = this;
    let t, n, r, i, a, s, l, o, f, d, p, _, w, k, u, c, m, h, x, A, g, b, y, v, E, C, T, L, O, j, U, D, q;
    const M = new z(), re = new z(), P = new z();
    e.depth = [];
    let ne, B, Y, Fe, ce, ie;
    e.bl_count = [], e.heap = [], U = [], D = [], q = [];
    function Je() {
      f = 2 * a, p[w - 1] = 0;
      for (let S = 0; S < w - 1; S++)
        p[S] = 0;
      C = Le[T].max_lazy, O = Le[T].good_length, j = Le[T].nice_length, E = Le[T].max_chain, g = 0, m = 0, y = 0, h = v = te - 1, A = 0, _ = 0;
    }
    function Ge() {
      let S;
      for (S = 0; S < or; S++)
        U[S * 2] = 0;
      for (S = 0; S < Kn; S++)
        D[S * 2] = 0;
      for (S = 0; S < Xn; S++)
        q[S * 2] = 0;
      U[Rt * 2] = 1, e.opt_len = e.static_len = 0, B = Y = 0;
    }
    function Qe() {
      M.dyn_tree = U, M.stat_desc = ue.static_l_desc, re.dyn_tree = D, re.stat_desc = ue.static_d_desc, P.dyn_tree = q, P.stat_desc = ue.static_bl_desc, ce = 0, ie = 0, Fe = 8, Ge();
    }
    e.pqdownheap = function(S, I) {
      const R = e.heap, F = R[I];
      let N = I << 1;
      for (; N <= e.heap_len && (N < e.heap_len && Fr(S, R[N + 1], R[N], e.depth) && N++, !Fr(S, F, R[N], e.depth)); )
        R[I] = R[N], I = N, N <<= 1;
      R[I] = F;
    };
    function Me(S, I) {
      let R = -1, F, N = S[0 * 2 + 1], W = 0, V = 7, we = 4;
      N === 0 && (V = 138, we = 3), S[(I + 1) * 2 + 1] = 65535;
      for (let Ne = 0; Ne <= I; Ne++)
        F = N, N = S[(Ne + 1) * 2 + 1], !(++W < V && F == N) && (W < we ? q[F * 2] += W : F !== 0 ? (F != R && q[F * 2]++, q[Ar * 2]++) : W <= 10 ? q[Tr * 2]++ : q[Cr * 2]++, W = 0, R = F, N === 0 ? (V = 138, we = 3) : F == N ? (V = 6, we = 3) : (V = 7, we = 4));
    }
    function lt() {
      let S;
      for (Me(U, M.max_code), Me(D, re.max_code), P.build_tree(e), S = Xn - 1; S >= 3 && q[z.bl_order[S] * 2 + 1] === 0; S--)
        ;
      return e.opt_len += 3 * (S + 1) + 5 + 5 + 4, S;
    }
    function De(S) {
      e.pending_buf[e.pending++] = S;
    }
    function je(S) {
      De(S & 255), De(S >>> 8 & 255);
    }
    function ht(S) {
      De(S >> 8 & 255), De(S & 255 & 255);
    }
    function ee(S, I) {
      let R;
      const F = I;
      ie > Fn - F ? (R = S, ce |= R << ie & 65535, je(ce), ce = R >>> Fn - ie, ie += F - Fn) : (ce |= S << ie & 65535, ie += F);
    }
    function fe(S, I) {
      const R = S * 2;
      ee(I[R] & 65535, I[R + 1] & 65535);
    }
    function Ye(S, I) {
      let R, F = -1, N, W = S[0 * 2 + 1], V = 0, we = 7, Ne = 4;
      for (W === 0 && (we = 138, Ne = 3), R = 0; R <= I; R++)
        if (N = W, W = S[(R + 1) * 2 + 1], !(++V < we && N == W)) {
          if (V < Ne)
            do
              fe(N, q);
            while (--V !== 0);
          else
            N !== 0 ? (N != F && (fe(N, q), V--), fe(Ar, q), ee(V - 3, 2)) : V <= 10 ? (fe(Tr, q), ee(V - 3, 3)) : (fe(Cr, q), ee(V - 11, 7));
          V = 0, F = N, W === 0 ? (we = 138, Ne = 3) : N == W ? (we = 6, Ne = 3) : (we = 7, Ne = 4);
        }
    }
    function Ce(S, I, R) {
      let F;
      for (ee(S - 257, 5), ee(I - 1, 5), ee(R - 4, 4), F = 0; F < R; F++)
        ee(q[z.bl_order[F] * 2 + 1], 3);
      Ye(U, S - 1), Ye(D, I - 1);
    }
    function ge() {
      ie == 16 ? (je(ce), ce = 0, ie = 0) : ie >= 8 && (De(ce & 255), ce >>>= 8, ie -= 8);
    }
    function qe() {
      ee(Nn << 1, 3), fe(Rt, ue.static_ltree), ge(), 1 + Fe + 10 - ie < 9 && (ee(Nn << 1, 3), fe(Rt, ue.static_ltree), ge()), Fe = 7;
    }
    function We(S, I) {
      let R, F, N;
      if (e.dist_buf[B] = S, e.lc_buf[B] = I & 255, B++, S === 0 ? U[I * 2]++ : (Y++, S--, U[(z._length_code[I] + hn + 1) * 2]++, D[z.d_code(S) * 2]++), !(B & 8191) && T > 2) {
        for (R = B * 8, F = g - m, N = 0; N < Kn; N++)
          R += D[N * 2] * (5 + z.extra_dbits[N]);
        if (R >>>= 3, Y < Math.floor(B / 2) && R < Math.floor(F / 2))
          return true;
      }
      return B == ne - 1;
    }
    function Oe(S, I) {
      let R, F, N = 0, W, V;
      if (B !== 0)
        do
          R = e.dist_buf[N], F = e.lc_buf[N], N++, R === 0 ? fe(F, S) : (W = z._length_code[F], fe(W + hn + 1, S), V = z.extra_lbits[W], V !== 0 && (F -= z.base_length[W], ee(F, V)), R--, W = z.d_code(R), fe(W, I), V = z.extra_dbits[W], V !== 0 && (R -= z.base_dist[W], ee(R, V)));
        while (N < B);
      fe(Rt, S), Fe = S[Rt * 2 + 1];
    }
    function Zt() {
      ie > 8 ? je(ce) : ie > 0 && De(ce & 255), ce = 0, ie = 0;
    }
    function Tn(S, I, R) {
      Zt(), Fe = 8, R && (je(I), je(~I)), e.pending_buf.set(o.subarray(S, S + I), e.pending), e.pending += I;
    }
    function wt(S, I, R) {
      ee((sa << 1) + (R ? 1 : 0), 3), Tn(S, I, true);
    }
    function Fs(S, I, R) {
      let F, N, W = 0;
      T > 0 ? (M.build_tree(e), re.build_tree(e), W = lt(), F = e.opt_len + 3 + 7 >>> 3, N = e.static_len + 3 + 7 >>> 3, N <= F && (F = N)) : F = N = I + 5, I + 4 <= F && S != -1 ? wt(S, I, R) : N == F ? (ee((Nn << 1) + (R ? 1 : 0), 3), Oe(ue.static_ltree, ue.static_dtree)) : (ee((aa << 1) + (R ? 1 : 0), 3), Ce(M.max_code + 1, re.max_code + 1, W + 1), Oe(U, D)), Ge(), R && Zt();
    }
    function et(S) {
      Fs(m >= 0 ? m : -1, g - m, S), m = g, t.flush_pending();
    }
    function Cn() {
      let S, I, R, F;
      do {
        if (F = f - y - g, F === 0 && g === 0 && y === 0)
          F = a;
        else if (F == -1)
          F--;
        else if (g >= a + a - Ae) {
          o.set(o.subarray(a, a + a), 0), b -= a, g -= a, m -= a, S = w, R = S;
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
        S = t.read_buf(o, g + y, F), y += S, y >= te && (_ = o[g] & 255, _ = (_ << c ^ o[g + 1] & 255) & u);
      } while (y < Ae && t.avail_in !== 0);
    }
    function Ds(S) {
      let I = 65535, R;
      for (I > r - 5 && (I = r - 5); ; ) {
        if (y <= 1) {
          if (Cn(), y === 0 && S == yt)
            return Re;
          if (y === 0)
            break;
        }
        if (g += y, y = 0, R = m + I, (g === 0 || g >= R) && (y = g - R, g = R, et(false), t.avail_out === 0) || g - m >= a - Ae && (et(false), t.avail_out === 0))
          return Re;
      }
      return et(S == ve), t.avail_out === 0 ? S == ve ? It : Re : S == ve ? Jt : zt;
    }
    function wr(S) {
      let I = E, R = g, F, N, W = v;
      const V = g > a - Ae ? g - (a - Ae) : 0;
      let we = j;
      const Ne = l, Rn = g + cn;
      let xr = o[R + W - 1], br = o[R + W];
      v >= O && (I >>= 2), we > y && (we = y);
      do
        if (F = S, !(o[F + W] != br || o[F + W - 1] != xr || o[F] != o[R] || o[++F] != o[R + 1])) {
          R += 2, F++;
          do
            ;
          while (o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && o[++R] == o[++F] && R < Rn);
          if (N = cn - (Rn - R), R = Rn - cn, N > W) {
            if (b = S, W = N, N >= we)
              break;
            xr = o[R + W - 1], br = o[R + W];
          }
        }
      while ((S = d[S & Ne] & 65535) > V && --I !== 0);
      return W <= y ? W : y;
    }
    function Os(S) {
      let I = 0, R;
      for (; ; ) {
        if (y < Ae) {
          if (Cn(), y < Ae && S == yt)
            return Re;
          if (y === 0)
            break;
        }
        if (y >= te && (_ = (_ << c ^ o[g + (te - 1)] & 255) & u, I = p[_] & 65535, d[g & l] = p[_], p[_] = g), I !== 0 && (g - I & 65535) <= a - Ae && L != Yt && (h = wr(I)), h >= te)
          if (R = We(g - b, h - te), y -= h, h <= C && y >= te) {
            h--;
            do
              g++, _ = (_ << c ^ o[g + (te - 1)] & 255) & u, I = p[_] & 65535, d[g & l] = p[_], p[_] = g;
            while (--h !== 0);
            g++;
          } else
            g += h, h = 0, _ = o[g] & 255, _ = (_ << c ^ o[g + 1] & 255) & u;
        else
          R = We(0, o[g] & 255), y--, g++;
        if (R && (et(false), t.avail_out === 0))
          return Re;
      }
      return et(S == ve), t.avail_out === 0 ? S == ve ? It : Re : S == ve ? Jt : zt;
    }
    function Ns(S) {
      let I = 0, R, F;
      for (; ; ) {
        if (y < Ae) {
          if (Cn(), y < Ae && S == yt)
            return Re;
          if (y === 0)
            break;
        }
        if (y >= te && (_ = (_ << c ^ o[g + (te - 1)] & 255) & u, I = p[_] & 65535, d[g & l] = p[_], p[_] = g), v = h, x = b, h = te - 1, I !== 0 && v < C && (g - I & 65535) <= a - Ae && (L != Yt && (h = wr(I)), h <= 5 && (L == Ys || h == te && g - b > 4096) && (h = te - 1)), v >= te && h <= v) {
          F = g + y - te, R = We(g - 1 - x, v - te), y -= v - 1, v -= 2;
          do
            ++g <= F && (_ = (_ << c ^ o[g + (te - 1)] & 255) & u, I = p[_] & 65535, d[g & l] = p[_], p[_] = g);
          while (--v !== 0);
          if (A = 0, h = te - 1, g++, R && (et(false), t.avail_out === 0))
            return Re;
        } else if (A !== 0) {
          if (R = We(0, o[g - 1] & 255), R && et(false), g++, y--, t.avail_out === 0)
            return Re;
        } else
          A = 1, g++, y--;
      }
      return A !== 0 && (R = We(0, o[g - 1] & 255), A = 0), et(S == ve), t.avail_out === 0 ? S == ve ? It : Re : S == ve ? Jt : zt;
    }
    function Ls(S) {
      return S.total_in = S.total_out = 0, S.msg = null, e.pending = 0, e.pending_out = 0, n = Qt, i = yt, Qe(), Je(), Ue;
    }
    e.deflateInit = function(S, I, R, F, N, W) {
      return F || (F = On), N || (N = ra), W || (W = Ks), S.msg = null, I == wn && (I = 6), N < 1 || N > na || F != On || R < 9 || R > 15 || I < 0 || I > 9 || W < 0 || W > Yt ? Pe : (S.dstate = e, s = R, a = 1 << s, l = a - 1, k = N + 7, w = 1 << k, u = w - 1, c = Math.floor((k + te - 1) / te), o = new Uint8Array(a * 2), d = [], p = [], ne = 1 << N + 6, e.pending_buf = new Uint8Array(ne * 4), r = ne * 4, e.dist_buf = new Uint16Array(ne), e.lc_buf = new Uint8Array(ne), T = I, L = W, Ls(S));
    }, e.deflateEnd = function() {
      return n != Dn && n != Qt && n != Ft ? Pe : (e.lc_buf = null, e.dist_buf = null, e.pending_buf = null, p = null, d = null, o = null, e.dstate = null, n == Qt ? zs : Ue);
    }, e.deflateParams = function(S, I, R) {
      let F = Ue;
      return I == wn && (I = 6), I < 0 || I > 9 || R < 0 || R > Yt ? Pe : (Le[T].func != Le[I].func && S.total_in !== 0 && (F = S.deflate(Rr)), T != I && (T = I, C = Le[T].max_lazy, O = Le[T].good_length, j = Le[T].nice_length, E = Le[T].max_chain), L = R, F);
    }, e.deflateSetDictionary = function(S, I, R) {
      let F = R, N, W = 0;
      if (!I || n != Dn)
        return Pe;
      if (F < te)
        return Ue;
      for (F > a - Ae && (F = a - Ae, W = R - F), o.set(I.subarray(W, W + F), 0), g = F, m = F, _ = o[0] & 255, _ = (_ << c ^ o[1] & 255) & u, N = 0; N <= F - te; N++)
        _ = (_ << c ^ o[N + (te - 1)] & 255) & u, d[N & l] = p[_], p[_] = N;
      return Ue;
    }, e.deflate = function(S, I) {
      let R, F, N, W, V;
      if (I > ve || I < 0)
        return Pe;
      if (!S.next_out || !S.next_in && S.avail_in !== 0 || n == Ft && I != ve)
        return S.msg = Xt[Kt - Pe], Pe;
      if (S.avail_out === 0)
        return S.msg = Xt[Kt - bt], bt;
      if (t = S, W = i, i = I, n == Dn && (F = On + (s - 8 << 4) << 8, N = (T - 1 & 255) >> 1, N > 3 && (N = 3), F |= N << 6, g !== 0 && (F |= ia), F += 31 - F % 31, n = Qt, ht(F)), e.pending !== 0) {
        if (t.flush_pending(), t.avail_out === 0)
          return i = -1, Ue;
      } else if (t.avail_in === 0 && I <= W && I != ve)
        return t.msg = Xt[Kt - bt], bt;
      if (n == Ft && t.avail_in !== 0)
        return S.msg = Xt[Kt - bt], bt;
      if (t.avail_in !== 0 || y !== 0 || I != yt && n != Ft) {
        switch (V = -1, Le[T].func) {
          case Ui:
            V = Ds(I);
            break;
          case ln:
            V = Os(I);
            break;
          case ft:
            V = Ns(I);
            break;
        }
        if ((V == It || V == Jt) && (n = Ft), V == Re || V == It)
          return t.avail_out === 0 && (i = -1), Ue;
        if (V == zt) {
          if (I == Rr)
            qe();
          else if (wt(0, 0, false), I == Xs)
            for (R = 0; R < w; R++)
              p[R] = 0;
          if (t.flush_pending(), t.avail_out === 0)
            return i = -1, Ue;
        }
      }
      return I != ve ? Ue : Li;
    };
  }
  function Pi() {
    const e = this;
    e.next_in_index = 0, e.next_out_index = 0, e.avail_in = 0, e.total_in = 0, e.avail_out = 0, e.total_out = 0;
  }
  Pi.prototype = {
    deflateInit(e, t) {
      const n = this;
      return n.dstate = new oa(), t || (t = Ut), n.dstate.deflateInit(n, e, t);
    },
    deflate(e) {
      const t = this;
      return t.dstate ? t.dstate.deflate(t, e) : Pe;
    },
    deflateEnd() {
      const e = this;
      if (!e.dstate)
        return Pe;
      const t = e.dstate.deflateEnd();
      return e.dstate = null, t;
    },
    deflateParams(e, t) {
      const n = this;
      return n.dstate ? n.dstate.deflateParams(n, e, t) : Pe;
    },
    deflateSetDictionary(e, t) {
      const n = this;
      return n.dstate ? n.dstate.deflateSetDictionary(n, e, t) : Pe;
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
  function la(e) {
    const t = this, n = new Pi(), r = ca(e && e.chunkSize ? e.chunkSize : 64 * 1024), i = yt, a = new Uint8Array(r);
    let s = e ? e.level : wn;
    typeof s > "u" && (s = wn), n.deflateInit(s), n.next_out = a, t.append = function(l, o) {
      let f, d, p = 0, _ = 0, w = 0;
      const k = [];
      if (l.length) {
        n.next_in_index = 0, n.next_in = l, n.avail_in = l.length;
        do {
          if (n.next_out_index = 0, n.avail_out = r, f = n.deflate(i), f != Ue)
            throw new Error("deflating: " + n.msg);
          n.next_out_index && (n.next_out_index == r ? k.push(new Uint8Array(a)) : k.push(a.subarray(0, n.next_out_index))), w += n.next_out_index, o && n.next_in_index > 0 && n.next_in_index != p && (o(n.next_in_index), p = n.next_in_index);
        } while (n.avail_in > 0 || n.avail_out === 0);
        return k.length > 1 ? (d = new Uint8Array(w), k.forEach(function(u) {
          d.set(u, _), _ += u.length;
        })) : d = k[0] ? new Uint8Array(k[0]) : new Uint8Array(), d;
      }
    }, t.flush = function() {
      let l, o, f = 0, d = 0;
      const p = [];
      do {
        if (n.next_out_index = 0, n.avail_out = r, l = n.deflate(ve), l != Li && l != Ue)
          throw new Error("deflating: " + n.msg);
        r - n.avail_out > 0 && p.push(a.slice(0, n.next_out_index)), d += n.next_out_index;
      } while (n.avail_in > 0 || n.avail_out === 0);
      return n.deflateEnd(), o = new Uint8Array(d), p.forEach(function(_) {
        o.set(_, f), f += _.length;
      }), o;
    };
  }
  function ca(e) {
    return e + 5 * (Math.floor(e / 16383) + 1);
  }
  const fa = 15, G = 0, Xe = 1, da = 2, ye = -2, J = -3, Dr = -4, ze = -5, Te = [
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
  ], Mi = 1440, ua = 0, ma = 4, pa = 9, _a = 5, ha = [
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
  ], wa = [
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
  ], xa = [
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
  ], ba = [
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
  ], ga = [
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
  ], va = [
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
  ], tt = 15;
  function zn() {
    const e = this;
    let t, n, r, i, a, s;
    function l(f, d, p, _, w, k, u, c, m, h, x) {
      let A, g, b, y, v, E, C, T, L, O, j, U, D, q, M;
      O = 0, v = p;
      do
        r[f[d + O]]++, O++, v--;
      while (v !== 0);
      if (r[0] == p)
        return u[0] = -1, c[0] = 0, G;
      for (T = c[0], E = 1; E <= tt && r[E] === 0; E++)
        ;
      for (C = E, T < E && (T = E), v = tt; v !== 0 && r[v] === 0; v--)
        ;
      for (b = v, T > v && (T = v), c[0] = T, q = 1 << E; E < v; E++, q <<= 1)
        if ((q -= r[E]) < 0)
          return J;
      if ((q -= r[v]) < 0)
        return J;
      for (r[v] += q, s[1] = E = 0, O = 1, D = 2; --v !== 0; )
        s[D] = E += r[O], D++, O++;
      v = 0, O = 0;
      do
        (E = f[d + O]) !== 0 && (x[s[E]++] = v), O++;
      while (++v < p);
      for (p = s[b], s[0] = v = 0, O = 0, y = -1, U = -T, a[0] = 0, j = 0, M = 0; C <= b; C++)
        for (A = r[C]; A-- !== 0; ) {
          for (; C > U + T; ) {
            if (y++, U += T, M = b - U, M = M > T ? T : M, (g = 1 << (E = C - U)) > A + 1 && (g -= A + 1, D = C, E < M))
              for (; ++E < M && !((g <<= 1) <= r[++D]); )
                g -= r[D];
            if (M = 1 << E, h[0] + M > Mi)
              return J;
            a[y] = j = h[0], h[0] += M, y !== 0 ? (s[y] = v, i[0] = E, i[1] = T, E = v >>> U - T, i[2] = j - a[y - 1] - E, m.set(i, (a[y - 1] + E) * 3)) : u[0] = j;
          }
          for (i[1] = C - U, O >= p ? i[0] = 128 + 64 : x[O] < _ ? (i[0] = x[O] < 256 ? 0 : 32 + 64, i[2] = x[O++]) : (i[0] = k[x[O] - _] + 16 + 64, i[2] = w[x[O++] - _]), g = 1 << C - U, E = v >>> U; E < M; E += g)
            m.set(i, (j + E) * 3);
          for (E = 1 << C - 1; v & E; E >>>= 1)
            v ^= E;
          for (v ^= E, L = (1 << U) - 1; (v & L) != s[y]; )
            y--, U -= T, L = (1 << U) - 1;
        }
      return q !== 0 && b != 1 ? ze : G;
    }
    function o(f) {
      let d;
      for (t || (t = [], n = [], r = new Int32Array(tt + 1), i = [], a = new Int32Array(tt), s = new Int32Array(tt + 1)), n.length < f && (n = []), d = 0; d < f; d++)
        n[d] = 0;
      for (d = 0; d < tt + 1; d++)
        r[d] = 0;
      for (d = 0; d < 3; d++)
        i[d] = 0;
      a.set(r.subarray(0, tt), 0), s.set(r.subarray(0, tt + 1), 0);
    }
    e.inflate_trees_bits = function(f, d, p, _, w) {
      let k;
      return o(19), t[0] = 0, k = l(f, 0, 19, 19, null, null, p, d, _, t, n), k == J ? w.msg = "oversubscribed dynamic bit lengths tree" : (k == ze || d[0] === 0) && (w.msg = "incomplete dynamic bit lengths tree", k = J), k;
    }, e.inflate_trees_dynamic = function(f, d, p, _, w, k, u, c, m) {
      let h;
      return o(288), t[0] = 0, h = l(p, 0, f, 257, xa, ba, k, _, c, t, n), h != G || _[0] === 0 ? (h == J ? m.msg = "oversubscribed literal/length tree" : h != Dr && (m.msg = "incomplete literal/length tree", h = J), h) : (o(288), h = l(p, f, d, 0, ga, va, u, w, c, t, n), h != G || w[0] === 0 && f > 257 ? (h == J ? m.msg = "oversubscribed distance tree" : h == ze ? (m.msg = "incomplete distance tree", h = J) : h != Dr && (m.msg = "empty distance tree with lengths", h = J), h) : G);
    };
  }
  zn.inflate_trees_fixed = function(e, t, n, r) {
    return e[0] = pa, t[0] = _a, n[0] = ha, r[0] = wa, G;
  };
  const en = 0, Or = 1, Nr = 2, Lr = 3, Ur = 4, Pr = 5, Mr = 6, Ln = 7, jr = 8, tn = 9;
  function ya() {
    const e = this;
    let t, n = 0, r, i = 0, a = 0, s = 0, l = 0, o = 0, f = 0, d = 0, p, _ = 0, w, k = 0;
    function u(c, m, h, x, A, g, b, y) {
      let v, E, C, T, L, O, j, U, D, q, M, re, P, ne, B, Y;
      j = y.next_in_index, U = y.avail_in, L = b.bitb, O = b.bitk, D = b.write, q = D < b.read ? b.read - D - 1 : b.end - D, M = Te[c], re = Te[m];
      do {
        for (; O < 20; )
          U--, L |= (y.read_byte(j++) & 255) << O, O += 8;
        if (v = L & M, E = h, C = x, Y = (C + v) * 3, (T = E[Y]) === 0) {
          L >>= E[Y + 1], O -= E[Y + 1], b.win[D++] = E[Y + 2], q--;
          continue;
        }
        do {
          if (L >>= E[Y + 1], O -= E[Y + 1], T & 16) {
            for (T &= 15, P = E[Y + 2] + (L & Te[T]), L >>= T, O -= T; O < 15; )
              U--, L |= (y.read_byte(j++) & 255) << O, O += 8;
            v = L & re, E = A, C = g, Y = (C + v) * 3, T = E[Y];
            do
              if (L >>= E[Y + 1], O -= E[Y + 1], T & 16) {
                for (T &= 15; O < T; )
                  U--, L |= (y.read_byte(j++) & 255) << O, O += 8;
                if (ne = E[Y + 2] + (L & Te[T]), L >>= T, O -= T, q -= P, D >= ne)
                  B = D - ne, D - B > 0 && 2 > D - B ? (b.win[D++] = b.win[B++], b.win[D++] = b.win[B++], P -= 2) : (b.win.set(b.win.subarray(B, B + 2), D), D += 2, B += 2, P -= 2);
                else {
                  B = D - ne;
                  do
                    B += b.end;
                  while (B < 0);
                  if (T = b.end - B, P > T) {
                    if (P -= T, D - B > 0 && T > D - B)
                      do
                        b.win[D++] = b.win[B++];
                      while (--T !== 0);
                    else
                      b.win.set(b.win.subarray(B, B + T), D), D += T, B += T, T = 0;
                    B = 0;
                  }
                }
                if (D - B > 0 && P > D - B)
                  do
                    b.win[D++] = b.win[B++];
                  while (--P !== 0);
                else
                  b.win.set(b.win.subarray(B, B + P), D), D += P, B += P, P = 0;
                break;
              } else if (!(T & 64))
                v += E[Y + 2], v += L & Te[T], Y = (C + v) * 3, T = E[Y];
              else
                return y.msg = "invalid distance code", P = y.avail_in - U, P = O >> 3 < P ? O >> 3 : P, U += P, j -= P, O -= P << 3, b.bitb = L, b.bitk = O, y.avail_in = U, y.total_in += j - y.next_in_index, y.next_in_index = j, b.write = D, J;
            while (true);
            break;
          }
          if (T & 64)
            return T & 32 ? (P = y.avail_in - U, P = O >> 3 < P ? O >> 3 : P, U += P, j -= P, O -= P << 3, b.bitb = L, b.bitk = O, y.avail_in = U, y.total_in += j - y.next_in_index, y.next_in_index = j, b.write = D, Xe) : (y.msg = "invalid literal/length code", P = y.avail_in - U, P = O >> 3 < P ? O >> 3 : P, U += P, j -= P, O -= P << 3, b.bitb = L, b.bitk = O, y.avail_in = U, y.total_in += j - y.next_in_index, y.next_in_index = j, b.write = D, J);
          if (v += E[Y + 2], v += L & Te[T], Y = (C + v) * 3, (T = E[Y]) === 0) {
            L >>= E[Y + 1], O -= E[Y + 1], b.win[D++] = E[Y + 2], q--;
            break;
          }
        } while (true);
      } while (q >= 258 && U >= 10);
      return P = y.avail_in - U, P = O >> 3 < P ? O >> 3 : P, U += P, j -= P, O -= P << 3, b.bitb = L, b.bitk = O, y.avail_in = U, y.total_in += j - y.next_in_index, y.next_in_index = j, b.write = D, G;
    }
    e.init = function(c, m, h, x, A, g) {
      t = en, f = c, d = m, p = h, _ = x, w = A, k = g, r = null;
    }, e.proc = function(c, m, h) {
      let x, A, g, b = 0, y = 0, v = 0, E, C, T, L;
      for (v = m.next_in_index, E = m.avail_in, b = c.bitb, y = c.bitk, C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C; ; )
        switch (t) {
          case en:
            if (T >= 258 && E >= 10 && (c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, h = u(f, d, p, _, w, k, c, m), v = m.next_in_index, E = m.avail_in, b = c.bitb, y = c.bitk, C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C, h != G)) {
              t = h == Xe ? Ln : tn;
              break;
            }
            a = f, r = p, i = _, t = Or;
          case Or:
            for (x = a; y < x; ) {
              if (E !== 0)
                h = G;
              else
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              E--, b |= (m.read_byte(v++) & 255) << y, y += 8;
            }
            if (A = (i + (b & Te[x])) * 3, b >>>= r[A + 1], y -= r[A + 1], g = r[A], g === 0) {
              s = r[A + 2], t = Mr;
              break;
            }
            if (g & 16) {
              l = g & 15, n = r[A + 2], t = Nr;
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
            return t = tn, m.msg = "invalid literal/length code", h = J, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
          case Nr:
            for (x = l; y < x; ) {
              if (E !== 0)
                h = G;
              else
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              E--, b |= (m.read_byte(v++) & 255) << y, y += 8;
            }
            n += b & Te[x], b >>= x, y -= x, a = d, r = w, i = k, t = Lr;
          case Lr:
            for (x = a; y < x; ) {
              if (E !== 0)
                h = G;
              else
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              E--, b |= (m.read_byte(v++) & 255) << y, y += 8;
            }
            if (A = (i + (b & Te[x])) * 3, b >>= r[A + 1], y -= r[A + 1], g = r[A], g & 16) {
              l = g & 15, o = r[A + 2], t = Ur;
              break;
            }
            if (!(g & 64)) {
              a = g, i = A / 3 + r[A + 2];
              break;
            }
            return t = tn, m.msg = "invalid distance code", h = J, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
          case Ur:
            for (x = l; y < x; ) {
              if (E !== 0)
                h = G;
              else
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              E--, b |= (m.read_byte(v++) & 255) << y, y += 8;
            }
            o += b & Te[x], b >>= x, y -= x, t = Pr;
          case Pr:
            for (L = C - o; L < 0; )
              L += c.end;
            for (; n !== 0; ) {
              if (T === 0 && (C == c.end && c.read !== 0 && (C = 0, T = C < c.read ? c.read - C - 1 : c.end - C), T === 0 && (c.write = C, h = c.inflate_flush(m, h), C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C, C == c.end && c.read !== 0 && (C = 0, T = C < c.read ? c.read - C - 1 : c.end - C), T === 0)))
                return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
              c.win[C++] = c.win[L++], T--, L == c.end && (L = 0), n--;
            }
            t = en;
            break;
          case Mr:
            if (T === 0 && (C == c.end && c.read !== 0 && (C = 0, T = C < c.read ? c.read - C - 1 : c.end - C), T === 0 && (c.write = C, h = c.inflate_flush(m, h), C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C, C == c.end && c.read !== 0 && (C = 0, T = C < c.read ? c.read - C - 1 : c.end - C), T === 0)))
              return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
            h = G, c.win[C++] = s, T--, t = en;
            break;
          case Ln:
            if (y > 7 && (y -= 8, E++, v--), c.write = C, h = c.inflate_flush(m, h), C = c.write, T = C < c.read ? c.read - C - 1 : c.end - C, c.read != c.write)
              return c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
            t = jr;
          case jr:
            return h = Xe, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
          case tn:
            return h = J, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
          default:
            return h = ye, c.bitb = b, c.bitk = y, m.avail_in = E, m.total_in += v - m.next_in_index, m.next_in_index = v, c.write = C, c.inflate_flush(m, h);
        }
    }, e.free = function() {
    };
  }
  const qr = [
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
  ], gt = 0, Un = 1, Wr = 2, Br = 3, $r = 4, Hr = 5, nn = 6, rn = 7, Vr = 8, ct = 9;
  function ka(e, t) {
    const n = this;
    let r = gt, i = 0, a = 0, s = 0, l;
    const o = [
      0
    ], f = [
      0
    ], d = new ya();
    let p = 0, _ = new Int32Array(Mi * 3);
    const w = 0, k = new zn();
    n.bitk = 0, n.bitb = 0, n.win = new Uint8Array(t), n.end = t, n.read = 0, n.write = 0, n.reset = function(u, c) {
      c && (c[0] = w), r == nn && d.free(u), r = gt, n.bitk = 0, n.bitb = 0, n.read = n.write = 0;
    }, n.reset(e, null), n.inflate_flush = function(u, c) {
      let m, h, x;
      return h = u.next_out_index, x = n.read, m = (x <= n.write ? n.write : n.end) - x, m > u.avail_out && (m = u.avail_out), m !== 0 && c == ze && (c = G), u.avail_out -= m, u.total_out += m, u.next_out.set(n.win.subarray(x, x + m), h), h += m, x += m, x == n.end && (x = 0, n.write == n.end && (n.write = 0), m = n.write - x, m > u.avail_out && (m = u.avail_out), m !== 0 && c == ze && (c = G), u.avail_out -= m, u.total_out += m, u.next_out.set(n.win.subarray(x, x + m), h), h += m, x += m), u.next_out_index = h, n.read = x, c;
    }, n.proc = function(u, c) {
      let m, h, x, A, g, b, y, v;
      for (A = u.next_in_index, g = u.avail_in, h = n.bitb, x = n.bitk, b = n.write, y = b < n.read ? n.read - b - 1 : n.end - b; ; ) {
        let E, C, T, L, O, j, U, D;
        switch (r) {
          case gt:
            for (; x < 3; ) {
              if (g !== 0)
                c = G;
              else
                return n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
              g--, h |= (u.read_byte(A++) & 255) << x, x += 8;
            }
            switch (m = h & 7, p = m & 1, m >>> 1) {
              case 0:
                h >>>= 3, x -= 3, m = x & 7, h >>>= m, x -= m, r = Un;
                break;
              case 1:
                E = [], C = [], T = [
                  []
                ], L = [
                  []
                ], zn.inflate_trees_fixed(E, C, T, L), d.init(E[0], C[0], T[0], 0, L[0], 0), h >>>= 3, x -= 3, r = nn;
                break;
              case 2:
                h >>>= 3, x -= 3, r = Br;
                break;
              case 3:
                return h >>>= 3, x -= 3, r = ct, u.msg = "invalid block type", c = J, n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            }
            break;
          case Un:
            for (; x < 32; ) {
              if (g !== 0)
                c = G;
              else
                return n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
              g--, h |= (u.read_byte(A++) & 255) << x, x += 8;
            }
            if ((~h >>> 16 & 65535) != (h & 65535))
              return r = ct, u.msg = "invalid stored block lengths", c = J, n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            i = h & 65535, h = x = 0, r = i !== 0 ? Wr : p !== 0 ? rn : gt;
            break;
          case Wr:
            if (g === 0 || y === 0 && (b == n.end && n.read !== 0 && (b = 0, y = b < n.read ? n.read - b - 1 : n.end - b), y === 0 && (n.write = b, c = n.inflate_flush(u, c), b = n.write, y = b < n.read ? n.read - b - 1 : n.end - b, b == n.end && n.read !== 0 && (b = 0, y = b < n.read ? n.read - b - 1 : n.end - b), y === 0)))
              return n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            if (c = G, m = i, m > g && (m = g), m > y && (m = y), n.win.set(u.read_buf(A, m), b), A += m, g -= m, b += m, y -= m, (i -= m) !== 0)
              break;
            r = p !== 0 ? rn : gt;
            break;
          case Br:
            for (; x < 14; ) {
              if (g !== 0)
                c = G;
              else
                return n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
              g--, h |= (u.read_byte(A++) & 255) << x, x += 8;
            }
            if (a = m = h & 16383, (m & 31) > 29 || (m >> 5 & 31) > 29)
              return r = ct, u.msg = "too many length or distance symbols", c = J, n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            if (m = 258 + (m & 31) + (m >> 5 & 31), !l || l.length < m)
              l = [];
            else
              for (v = 0; v < m; v++)
                l[v] = 0;
            h >>>= 14, x -= 14, s = 0, r = $r;
          case $r:
            for (; s < 4 + (a >>> 10); ) {
              for (; x < 3; ) {
                if (g !== 0)
                  c = G;
                else
                  return n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
                g--, h |= (u.read_byte(A++) & 255) << x, x += 8;
              }
              l[qr[s++]] = h & 7, h >>>= 3, x -= 3;
            }
            for (; s < 19; )
              l[qr[s++]] = 0;
            if (o[0] = 7, m = k.inflate_trees_bits(l, o, f, _, u), m != G)
              return c = m, c == J && (l = null, r = ct), n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            s = 0, r = Hr;
          case Hr:
            for (; m = a, !(s >= 258 + (m & 31) + (m >> 5 & 31)); ) {
              let q, M;
              for (m = o[0]; x < m; ) {
                if (g !== 0)
                  c = G;
                else
                  return n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
                g--, h |= (u.read_byte(A++) & 255) << x, x += 8;
              }
              if (m = _[(f[0] + (h & Te[m])) * 3 + 1], M = _[(f[0] + (h & Te[m])) * 3 + 2], M < 16)
                h >>>= m, x -= m, l[s++] = M;
              else {
                for (v = M == 18 ? 7 : M - 14, q = M == 18 ? 11 : 3; x < m + v; ) {
                  if (g !== 0)
                    c = G;
                  else
                    return n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
                  g--, h |= (u.read_byte(A++) & 255) << x, x += 8;
                }
                if (h >>>= m, x -= m, q += h & Te[v], h >>>= v, x -= v, v = s, m = a, v + q > 258 + (m & 31) + (m >> 5 & 31) || M == 16 && v < 1)
                  return l = null, r = ct, u.msg = "invalid bit length repeat", c = J, n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
                M = M == 16 ? l[v - 1] : 0;
                do
                  l[v++] = M;
                while (--q !== 0);
                s = v;
              }
            }
            if (f[0] = -1, O = [], j = [], U = [], D = [], O[0] = 9, j[0] = 6, m = a, m = k.inflate_trees_dynamic(257 + (m & 31), 1 + (m >> 5 & 31), l, O, j, U, D, _, u), m != G)
              return m == J && (l = null, r = ct), c = m, n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            d.init(O[0], j[0], _, U[0], _, D[0]), r = nn;
          case nn:
            if (n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, (c = d.proc(n, u, c)) != Xe)
              return n.inflate_flush(u, c);
            if (c = G, d.free(u), A = u.next_in_index, g = u.avail_in, h = n.bitb, x = n.bitk, b = n.write, y = b < n.read ? n.read - b - 1 : n.end - b, p === 0) {
              r = gt;
              break;
            }
            r = rn;
          case rn:
            if (n.write = b, c = n.inflate_flush(u, c), b = n.write, y = b < n.read ? n.read - b - 1 : n.end - b, n.read != n.write)
              return n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
            r = Vr;
          case Vr:
            return c = Xe, n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
          case ct:
            return c = J, n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
          default:
            return c = ye, n.bitb = h, n.bitk = x, u.avail_in = g, u.total_in += A - u.next_in_index, u.next_in_index = A, n.write = b, n.inflate_flush(u, c);
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
  const Sa = 32, Ea = 8, Aa = 0, Zr = 1, Gr = 2, Yr = 3, Kr = 4, Xr = 5, Pn = 6, Dt = 7, zr = 12, nt = 13, Ta = [
    0,
    0,
    255,
    255
  ];
  function Ca() {
    const e = this;
    e.mode = 0, e.method = 0, e.was = [
      0
    ], e.need = 0, e.marker = 0, e.wbits = 0;
    function t(n) {
      return !n || !n.istate ? ye : (n.total_in = n.total_out = 0, n.msg = null, n.istate.mode = Dt, n.istate.blocks.reset(n, null), G);
    }
    e.inflateEnd = function(n) {
      return e.blocks && e.blocks.free(n), e.blocks = null, G;
    }, e.inflateInit = function(n, r) {
      return n.msg = null, e.blocks = null, r < 8 || r > 15 ? (e.inflateEnd(n), ye) : (e.wbits = r, n.istate.blocks = new ka(n, 1 << r), t(n), G);
    }, e.inflate = function(n, r) {
      let i, a;
      if (!n || !n.istate || !n.next_in)
        return ye;
      const s = n.istate;
      for (r = r == ma ? ze : G, i = ze; ; )
        switch (s.mode) {
          case Aa:
            if (n.avail_in === 0)
              return i;
            if (i = r, n.avail_in--, n.total_in++, ((s.method = n.read_byte(n.next_in_index++)) & 15) != Ea) {
              s.mode = nt, n.msg = "unknown compression method", s.marker = 5;
              break;
            }
            if ((s.method >> 4) + 8 > s.wbits) {
              s.mode = nt, n.msg = "invalid win size", s.marker = 5;
              break;
            }
            s.mode = Zr;
          case Zr:
            if (n.avail_in === 0)
              return i;
            if (i = r, n.avail_in--, n.total_in++, a = n.read_byte(n.next_in_index++) & 255, ((s.method << 8) + a) % 31 !== 0) {
              s.mode = nt, n.msg = "incorrect header check", s.marker = 5;
              break;
            }
            if (!(a & Sa)) {
              s.mode = Dt;
              break;
            }
            s.mode = Gr;
          case Gr:
            if (n.avail_in === 0)
              return i;
            i = r, n.avail_in--, n.total_in++, s.need = (n.read_byte(n.next_in_index++) & 255) << 24 & 4278190080, s.mode = Yr;
          case Yr:
            if (n.avail_in === 0)
              return i;
            i = r, n.avail_in--, n.total_in++, s.need += (n.read_byte(n.next_in_index++) & 255) << 16 & 16711680, s.mode = Kr;
          case Kr:
            if (n.avail_in === 0)
              return i;
            i = r, n.avail_in--, n.total_in++, s.need += (n.read_byte(n.next_in_index++) & 255) << 8 & 65280, s.mode = Xr;
          case Xr:
            return n.avail_in === 0 ? i : (i = r, n.avail_in--, n.total_in++, s.need += n.read_byte(n.next_in_index++) & 255, s.mode = Pn, da);
          case Pn:
            return s.mode = nt, n.msg = "need dictionary", s.marker = 0, ye;
          case Dt:
            if (i = s.blocks.proc(n, i), i == J) {
              s.mode = nt, s.marker = 0;
              break;
            }
            if (i == G && (i = r), i != Xe)
              return i;
            i = r, s.blocks.reset(n, s.was), s.mode = zr;
          case zr:
            return n.avail_in = 0, Xe;
          case nt:
            return J;
          default:
            return ye;
        }
    }, e.inflateSetDictionary = function(n, r, i) {
      let a = 0, s = i;
      if (!n || !n.istate || n.istate.mode != Pn)
        return ye;
      const l = n.istate;
      return s >= 1 << l.wbits && (s = (1 << l.wbits) - 1, a = i - s), l.blocks.set_dictionary(r, a, s), l.mode = Dt, G;
    }, e.inflateSync = function(n) {
      let r, i, a, s, l;
      if (!n || !n.istate)
        return ye;
      const o = n.istate;
      if (o.mode != nt && (o.mode = nt, o.marker = 0), (r = n.avail_in) === 0)
        return ze;
      for (i = n.next_in_index, a = o.marker; r !== 0 && a < 4; )
        n.read_byte(i) == Ta[a] ? a++ : n.read_byte(i) !== 0 ? a = 0 : a = 4 - a, i++, r--;
      return n.total_in += i - n.next_in_index, n.next_in_index = i, n.avail_in = r, o.marker = a, a != 4 ? J : (s = n.total_in, l = n.total_out, t(n), n.total_in = s, n.total_out = l, o.mode = Dt, G);
    }, e.inflateSyncPoint = function(n) {
      return !n || !n.istate || !n.istate.blocks ? ye : n.istate.blocks.sync_point();
    };
  }
  function ji() {
  }
  ji.prototype = {
    inflateInit(e) {
      const t = this;
      return t.istate = new Ca(), e || (e = fa), t.istate.inflateInit(t, e);
    },
    inflate(e) {
      const t = this;
      return t.istate ? t.istate.inflate(t, e) : ye;
    },
    inflateEnd() {
      const e = this;
      if (!e.istate)
        return ye;
      const t = e.istate.inflateEnd(e);
      return e.istate = null, t;
    },
    inflateSync() {
      const e = this;
      return e.istate ? e.istate.inflateSync(e) : ye;
    },
    inflateSetDictionary(e, t) {
      const n = this;
      return n.istate ? n.istate.inflateSetDictionary(n, e, t) : ye;
    },
    read_byte(e) {
      return this.next_in[e];
    },
    read_buf(e, t) {
      return this.next_in.subarray(e, e + t);
    }
  };
  function Ra(e) {
    const t = this, n = new ji(), r = e && e.chunkSize ? Math.floor(e.chunkSize * 2) : 128 * 1024, i = ua, a = new Uint8Array(r);
    let s = false;
    n.inflateInit(), n.next_out = a, t.append = function(l, o) {
      const f = [];
      let d, p, _ = 0, w = 0, k = 0;
      if (l.length !== 0) {
        n.next_in_index = 0, n.next_in = l, n.avail_in = l.length;
        do {
          if (n.next_out_index = 0, n.avail_out = r, n.avail_in === 0 && !s && (n.next_in_index = 0, s = true), d = n.inflate(i), s && d === ze) {
            if (n.avail_in !== 0)
              throw new Error("inflating: bad input");
          } else if (d !== G && d !== Xe)
            throw new Error("inflating: " + n.msg);
          if ((s || d === Xe) && n.avail_in === l.length)
            throw new Error("inflating: bad input");
          n.next_out_index && (n.next_out_index === r ? f.push(new Uint8Array(a)) : f.push(a.subarray(0, n.next_out_index))), k += n.next_out_index, o && n.next_in_index > 0 && n.next_in_index != _ && (o(n.next_in_index), _ = n.next_in_index);
        } while (n.avail_in > 0 || n.avail_out === 0);
        return f.length > 1 ? (p = new Uint8Array(k), f.forEach(function(u) {
          p.set(u, w), w += u.length;
        })) : p = f[0] ? new Uint8Array(f[0]) : new Uint8Array(), p;
      }
    }, t.flush = function() {
      n.inflateEnd();
    };
  }
  const Ee = 4294967295, ke = 65535, Jr = 8, Ia = 0, Fa = 99, Da = 67324752, qi = 134695760, Oa = qi, Na = 33639248, La = 101010256, Ua = 101075792, Pa = 117853008, Jn = 22, Wi = 20, Bi = 56, Ma = Jn + Wi + Bi, ja = 1, qa = 39169, Wa = 10, Ba = 1, $i = 21589, $a = 6534, Ha = 1, Va = 8, Za = 2048, Ga = 16, Ya = 20, Qr = 45, ei = 51, Mn = "/", ti = new Date(2107, 11, 31), ni = new Date(1980, 0, 1), X = void 0, ot = "undefined", Ht = "function";
  class ri {
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
  const Ka = 64;
  let Hi = 2;
  try {
    typeof navigator != ot && navigator.hardwareConcurrency && (Hi = navigator.hardwareConcurrency);
  } catch {
  }
  const Xa = {
    chunkSize: 512 * 1024,
    maxWorkers: Hi,
    terminateWorkerTimeout: 5e3,
    useWebWorkers: true,
    useCompressionStream: true,
    workerScripts: X,
    CompressionStreamNative: typeof CompressionStream != ot && CompressionStream,
    DecompressionStreamNative: typeof DecompressionStream != ot && DecompressionStream
  }, st = Object.assign({}, Xa);
  function za() {
    return st;
  }
  function Ja(e) {
    return Math.max(e.chunkSize, Ka);
  }
  function lr(e) {
    const { baseURL: t, chunkSize: n, maxWorkers: r, terminateWorkerTimeout: i, useCompressionStream: a, useWebWorkers: s, Deflate: l, Inflate: o, CompressionStream: f, DecompressionStream: d, workerScripts: p } = e;
    if (rt("baseURL", t), rt("chunkSize", n), rt("maxWorkers", r), rt("terminateWorkerTimeout", i), rt("useCompressionStream", a), rt("useWebWorkers", s), l && (st.CompressionStream = new ri(l)), o && (st.DecompressionStream = new ri(o)), rt("CompressionStream", f), rt("DecompressionStream", d), p !== X) {
      const { deflate: _, inflate: w } = p;
      if ((_ || w) && (st.workerScripts || (st.workerScripts = {})), _) {
        if (!Array.isArray(_))
          throw new Error("workerScripts.deflate must be an array");
        st.workerScripts.deflate = _;
      }
      if (w) {
        if (!Array.isArray(w))
          throw new Error("workerScripts.inflate must be an array");
        st.workerScripts.inflate = w;
      }
    }
  }
  function rt(e, t) {
    t !== X && (st[e] = t);
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
  const Vi = [];
  for (let e = 0; e < 256; e++) {
    let t = e;
    for (let n = 0; n < 8; n++)
      t & 1 ? t = t >>> 1 ^ 3988292384 : t = t >>> 1;
    Vi[e] = t;
  }
  class Qn {
    constructor(t) {
      this.crc = t || -1;
    }
    append(t) {
      let n = this.crc | 0;
      for (let r = 0, i = t.length | 0; r < i; r++)
        n = n >>> 8 ^ Vi[(n ^ t[r]) & 255];
      this.crc = n;
    }
    get() {
      return ~this.crc;
    }
  }
  class Zi extends TransformStream {
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
  function fn(e) {
    if (typeof TextEncoder == ot) {
      e = unescape(encodeURIComponent(e));
      const t = new Uint8Array(e.length);
      for (let n = 0; n < t.length; n++)
        t[n] = e.charCodeAt(n);
      return t;
    } else
      return new TextEncoder().encode(e);
  }
  const xe = {
    concat(e, t) {
      if (e.length === 0 || t.length === 0)
        return e.concat(t);
      const n = e[e.length - 1], r = xe.getPartial(n);
      return r === 32 ? e.concat(t) : xe._shiftRight(t, r, n | 0, e.slice(0, e.length - 1));
    },
    bitLength(e) {
      const t = e.length;
      if (t === 0)
        return 0;
      const n = e[t - 1];
      return (t - 1) * 32 + xe.getPartial(n);
    },
    clamp(e, t) {
      if (e.length * 32 < t)
        return e;
      e = e.slice(0, Math.ceil(t / 32));
      const n = e.length;
      return t = t & 31, n > 0 && t && (e[n - 1] = xe.partial(t, e[n - 1] & 2147483648 >> t - 1, 1)), e;
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
      const i = e.length ? e[e.length - 1] : 0, a = xe.getPartial(i);
      return r.push(xe.partial(t + a & 31, t + a > 32 ? n : r.pop(), 1)), r;
    }
  }, xn = {
    bytes: {
      fromBits(e) {
        const n = xe.bitLength(e) / 8, r = new Uint8Array(n);
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
        return n & 3 && t.push(xe.partial(8 * (n & 3), r)), t;
      }
    }
  }, Gi = {};
  Gi.sha1 = class {
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
      typeof e == "string" && (e = xn.utf8String.toBits(e));
      const n = t._buffer = xe.concat(t._buffer, e), r = t._length, i = t._length = r + xe.bitLength(e);
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
      t = xe.concat(t, [
        xe.partial(1, 1)
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
  const Yi = {};
  Yi.aes = class {
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
        let _ = f * 16843009 ^ o * 65537 ^ l * 257 ^ d * 16843008, w = i[p] * 257 ^ p * 16843008;
        for (let k = 0; k < 4; k++)
          e[k][d] = w = w << 24 ^ w >>> 8, t[k][p] = _ = _ << 24 ^ _ >>> 8;
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
      let p = e[0] ^ n[0], _ = e[t ? 3 : 1] ^ n[1], w = e[2] ^ n[2], k = e[t ? 1 : 3] ^ n[3], u = 4, c, m, h;
      for (let x = 0; x < r; x++)
        c = s[p >>> 24] ^ l[_ >> 16 & 255] ^ o[w >> 8 & 255] ^ f[k & 255] ^ n[u], m = s[_ >>> 24] ^ l[w >> 16 & 255] ^ o[k >> 8 & 255] ^ f[p & 255] ^ n[u + 1], h = s[w >>> 24] ^ l[k >> 16 & 255] ^ o[p >> 8 & 255] ^ f[_ & 255] ^ n[u + 2], k = s[k >>> 24] ^ l[p >> 16 & 255] ^ o[_ >> 8 & 255] ^ f[w & 255] ^ n[u + 3], u += 4, p = c, _ = m, w = h;
      for (let x = 0; x < 4; x++)
        i[t ? 3 & -x : x] = d[p >>> 24] << 24 ^ d[_ >> 16 & 255] << 16 ^ d[w >> 8 & 255] << 8 ^ d[k & 255] ^ n[u++], c = p, p = _, _ = w, w = k, k = c;
      return i;
    }
  };
  const Qa = {
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
  }, Ki = {};
  Ki.ctrGladman = class {
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
      const i = xe.bitLength(t);
      for (let a = 0; a < r; a += 4) {
        this.incCounter(n);
        const s = e.encrypt(n);
        t[a] ^= s[0], t[a + 1] ^= s[1], t[a + 2] ^= s[2], t[a + 3] ^= s[3];
      }
      return xe.clamp(t, i);
    }
  };
  const _t = {
    importKey(e) {
      return new _t.hmacSha1(xn.bytes.toBits(e));
    },
    pbkdf2(e, t, n, r) {
      if (n = n || 1e4, r < 0 || n < 0)
        throw new Error("invalid params to pbkdf2");
      const i = (r >> 5) + 1 << 2;
      let a, s, l, o, f;
      const d = new ArrayBuffer(i), p = new DataView(d);
      let _ = 0;
      const w = xe;
      for (t = xn.bytes.toBits(t), f = 1; _ < (i || 1); f++) {
        for (a = s = e.encrypt(w.concat(t, [
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
      const t = this, n = t._hash = Gi.sha1, r = [
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
  const eo = typeof crypto != ot && typeof crypto.getRandomValues == Ht, Xi = "Invalid password", zi = "Invalid signature", Ji = "zipjs-abort-check-password";
  function Qi(e) {
    return eo ? crypto.getRandomValues(e) : Qa.getRandomValues(e);
  }
  const kt = 16, to = "raw", es = {
    name: "PBKDF2"
  }, no = {
    name: "HMAC"
  }, ro = "SHA-1", io = Object.assign({
    hash: no
  }, es), er = Object.assign({
    iterations: 1e3,
    hash: {
      name: ro
    }
  }, es), so = [
    "deriveBits"
  ], Pt = [
    8,
    12,
    16
  ], Ot = [
    16,
    24,
    32
  ], it = 10, ao = [
    0,
    0,
    0,
    0
  ], An = typeof crypto != ot, Vt = An && crypto.subtle, ts = An && typeof Vt != ot, He = xn.bytes, oo = Yi.aes, lo = Ki.ctrGladman, co = _t.hmacSha1;
  let ii = An && ts && typeof Vt.importKey == Ht, si = An && ts && typeof Vt.deriveBits == Ht;
  class fo extends TransformStream {
    constructor({ password: t, rawPassword: n, signed: r, encryptionStrength: i, checkPasswordOnly: a }) {
      super({
        start() {
          Object.assign(this, {
            ready: new Promise((s) => this.resolveReady = s),
            password: is(t, n),
            signed: r,
            strength: i - 1,
            pending: new Uint8Array()
          });
        },
        async transform(s, l) {
          const o = this, { password: f, strength: d, resolveReady: p, ready: _ } = o;
          f ? (await mo(o, d, f, Ie(s, 0, Pt[d] + 2)), s = Ie(s, Pt[d] + 2), a ? l.error(new Error(Ji)) : p()) : await _;
          const w = new Uint8Array(s.length - it - (s.length - it) % kt);
          l.enqueue(ns(o, s, w, 0, it, true));
        },
        async flush(s) {
          const { signed: l, ctr: o, hmac: f, pending: d, ready: p } = this;
          if (f && o) {
            await p;
            const _ = Ie(d, 0, d.length - it), w = Ie(d, d.length - it);
            let k = new Uint8Array();
            if (_.length) {
              const u = jt(He, _);
              f.update(u);
              const c = o.update(u);
              k = Mt(He, c);
            }
            if (l) {
              const u = Ie(Mt(He, f.digest()), 0, it);
              for (let c = 0; c < it; c++)
                if (u[c] != w[c])
                  throw new Error(zi);
            }
            s.enqueue(k);
          }
        }
      });
    }
  }
  class uo extends TransformStream {
    constructor({ password: t, rawPassword: n, encryptionStrength: r }) {
      let i;
      super({
        start() {
          Object.assign(this, {
            ready: new Promise((a) => this.resolveReady = a),
            password: is(t, n),
            strength: r - 1,
            pending: new Uint8Array()
          });
        },
        async transform(a, s) {
          const l = this, { password: o, strength: f, resolveReady: d, ready: p } = l;
          let _ = new Uint8Array();
          o ? (_ = await po(l, f, o), d()) : await p;
          const w = new Uint8Array(_.length + a.length - a.length % kt);
          w.set(_, 0), s.enqueue(ns(l, a, w, _.length, 0));
        },
        async flush(a) {
          const { ctr: s, hmac: l, pending: o, ready: f } = this;
          if (l && s) {
            await f;
            let d = new Uint8Array();
            if (o.length) {
              const p = s.update(jt(He, o));
              l.update(p), d = Mt(He, p);
            }
            i.signature = Mt(He, l.digest()).slice(0, it), a.enqueue(cr(d, i.signature));
          }
        }
      }), i = this;
    }
  }
  function ns(e, t, n, r, i, a) {
    const { ctr: s, hmac: l, pending: o } = e, f = t.length - i;
    o.length && (t = cr(o, t), n = wo(n, f - f % kt));
    let d;
    for (d = 0; d <= f - kt; d += kt) {
      const p = jt(He, Ie(t, d, d + kt));
      a && l.update(p);
      const _ = s.update(p);
      a || l.update(_), n.set(Mt(He, _), d + r);
    }
    return e.pending = Ie(t, d), n;
  }
  async function mo(e, t, n, r) {
    const i = await rs(e, t, n, Ie(r, 0, Pt[t])), a = Ie(r, Pt[t]);
    if (i[0] != a[0] || i[1] != a[1])
      throw new Error(Xi);
  }
  async function po(e, t, n) {
    const r = Qi(new Uint8Array(Pt[t])), i = await rs(e, t, n, r);
    return cr(r, i);
  }
  async function rs(e, t, n, r) {
    e.password = null;
    const i = await _o(to, n, io, false, so), a = await ho(Object.assign({
      salt: r
    }, er), i, 8 * (Ot[t] * 2 + 2)), s = new Uint8Array(a), l = jt(He, Ie(s, 0, Ot[t])), o = jt(He, Ie(s, Ot[t], Ot[t] * 2)), f = Ie(s, Ot[t] * 2);
    return Object.assign(e, {
      keys: {
        key: l,
        authentication: o,
        passwordVerification: f
      },
      ctr: new lo(new oo(l), Array.from(ao)),
      hmac: new co(o)
    }), f;
  }
  async function _o(e, t, n, r, i) {
    if (ii)
      try {
        return await Vt.importKey(e, t, n, r, i);
      } catch {
        return ii = false, _t.importKey(t);
      }
    else
      return _t.importKey(t);
  }
  async function ho(e, t, n) {
    if (si)
      try {
        return await Vt.deriveBits(e, t, n);
      } catch {
        return si = false, _t.pbkdf2(t, e.salt, er.iterations, n);
      }
    else
      return _t.pbkdf2(t, e.salt, er.iterations, n);
  }
  function is(e, t) {
    return t === X ? fn(e) : t;
  }
  function cr(e, t) {
    let n = e;
    return e.length + t.length && (n = new Uint8Array(e.length + t.length), n.set(e, 0), n.set(t, e.length)), n;
  }
  function wo(e, t) {
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
  const Et = 12;
  class xo extends TransformStream {
    constructor({ password: t, passwordVerification: n, checkPasswordOnly: r }) {
      super({
        start() {
          Object.assign(this, {
            password: t,
            passwordVerification: n
          }), ss(this, t);
        },
        transform(i, a) {
          const s = this;
          if (s.password) {
            const l = ai(s, i.subarray(0, Et));
            if (s.password = null, l[Et - 1] != s.passwordVerification)
              throw new Error(Xi);
            i = i.subarray(Et);
          }
          r ? a.error(new Error(Ji)) : a.enqueue(ai(s, i));
        }
      });
    }
  }
  class bo extends TransformStream {
    constructor({ password: t, passwordVerification: n }) {
      super({
        start() {
          Object.assign(this, {
            password: t,
            passwordVerification: n
          }), ss(this, t);
        },
        transform(r, i) {
          const a = this;
          let s, l;
          if (a.password) {
            a.password = null;
            const o = Qi(new Uint8Array(Et));
            o[Et - 1] = a.passwordVerification, s = new Uint8Array(r.length + o.length), s.set(oi(a, o), 0), l = Et;
          } else
            s = new Uint8Array(r.length), l = 0;
          s.set(oi(a, r), l), i.enqueue(s);
        }
      });
    }
  }
  function ai(e, t) {
    const n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = as(e) ^ t[r], fr(e, n[r]);
    return n;
  }
  function oi(e, t) {
    const n = new Uint8Array(t.length);
    for (let r = 0; r < t.length; r++)
      n[r] = as(e) ^ t[r], fr(e, t[r]);
    return n;
  }
  function ss(e, t) {
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
      fr(e, t.charCodeAt(r));
  }
  function fr(e, t) {
    let [n, r, i] = e.keys;
    e.crcKey0.append([
      t
    ]), n = ~e.crcKey0.get(), r = li(Math.imul(li(r + os(n)), 134775813) + 1), e.crcKey2.append([
      r >>> 24
    ]), i = ~e.crcKey2.get(), e.keys = [
      n,
      r,
      i
    ];
  }
  function as(e) {
    const t = e.keys[2] | 2;
    return os(Math.imul(t, t ^ 1) >>> 8);
  }
  function os(e) {
    return e & 255;
  }
  function li(e) {
    return e & 4294967295;
  }
  const ci = "deflate-raw";
  class go extends TransformStream {
    constructor(t, { chunkSize: n, CompressionStream: r, CompressionStreamNative: i }) {
      super({});
      const { compressed: a, encrypted: s, useCompressionStream: l, zipCrypto: o, signed: f, level: d } = t, p = this;
      let _, w, k = ls(super.readable);
      (!s || o) && f && (_ = new Zi(), k = Ve(k, _)), a && (k = fs(k, l, {
        level: d,
        chunkSize: n
      }, i, r)), s && (o ? k = Ve(k, new bo(t)) : (w = new uo(t), k = Ve(k, w))), cs(p, k, () => {
        let u;
        s && !o && (u = w.signature), (!s || o) && f && (u = new DataView(_.value.buffer).getUint32(0)), p.signature = u;
      });
    }
  }
  class vo extends TransformStream {
    constructor(t, { chunkSize: n, DecompressionStream: r, DecompressionStreamNative: i }) {
      super({});
      const { zipCrypto: a, encrypted: s, signed: l, signature: o, compressed: f, useCompressionStream: d } = t;
      let p, _, w = ls(super.readable);
      s && (a ? w = Ve(w, new xo(t)) : (_ = new fo(t), w = Ve(w, _))), f && (w = fs(w, d, {
        chunkSize: n
      }, i, r)), (!s || a) && l && (p = new Zi(), w = Ve(w, p)), cs(this, w, () => {
        if ((!s || a) && l) {
          const k = new DataView(p.value.buffer);
          if (o != k.getUint32(0, false))
            throw new Error(zi);
        }
      });
    }
  }
  function ls(e) {
    return Ve(e, new TransformStream({
      transform(t, n) {
        t && t.length && n.enqueue(t);
      }
    }));
  }
  function cs(e, t, n) {
    t = Ve(t, new TransformStream({
      flush: n
    })), Object.defineProperty(e, "readable", {
      get() {
        return t;
      }
    });
  }
  function fs(e, t, n, r, i) {
    try {
      const a = t && r ? r : i;
      e = Ve(e, new a(ci, n));
    } catch {
      if (t)
        try {
          e = Ve(e, new i(ci, n));
        } catch {
          return e;
        }
      else
        return e;
    }
    return e;
  }
  function Ve(e, t) {
    return e.pipeThrough(t);
  }
  const yo = "message", ko = "start", So = "pull", fi = "data", Eo = "ack", di = "close", ds = "deflate", Ao = "inflate";
  class To extends TransformStream {
    constructor(t, n) {
      super({});
      const r = this, { codecType: i } = t;
      let a;
      i.startsWith(ds) ? a = go : i.startsWith(Ao) && (a = vo);
      let s = 0, l = 0;
      const o = new a(t, n), f = super.readable, d = new TransformStream({
        transform(_, w) {
          _ && _.length && (l += _.length, w.enqueue(_));
        },
        flush() {
          Object.assign(r, {
            inputSize: l
          });
        }
      }), p = new TransformStream({
        transform(_, w) {
          _ && _.length && (s += _.length, w.enqueue(_));
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
  class Co extends TransformStream {
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
  let us = typeof Worker != ot;
  class qn {
    constructor(t, { readable: n, writable: r }, { options: i, config: a, streamOptions: s, useWebWorkers: l, transferStreams: o, scripts: f }, d) {
      const { signal: p } = s;
      return Object.assign(t, {
        busy: true,
        readable: n.pipeThrough(new Co(a.chunkSize)).pipeThrough(new Ro(n, s), {
          signal: p
        }),
        writable: r,
        options: Object.assign({}, i),
        scripts: f,
        transferStreams: o,
        terminate() {
          return new Promise((_) => {
            const { worker: w, busy: k } = t;
            w ? (k ? t.resolveTerminated = _ : (w.terminate(), _()), t.interface = null) : _();
          });
        },
        onTaskFinished() {
          const { resolveTerminated: _ } = t;
          _ && (t.resolveTerminated = null, t.terminated = true, t.worker.terminate(), _()), t.busy = false, d(t);
        }
      }), (l && us ? Io : ms)(t, a);
    }
  }
  class Ro extends TransformStream {
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
  function ms(e, t) {
    return {
      run: () => Fo(e, t)
    };
  }
  function Io(e, t) {
    const { baseURL: n, chunkSize: r } = t;
    if (!e.interface) {
      let i;
      try {
        i = No(e.scripts[0], n, e);
      } catch {
        return us = false, ms(e, t);
      }
      Object.assign(e, {
        worker: i,
        interface: {
          run: () => Do(e, {
            chunkSize: r
          })
        }
      });
    }
    return e.interface;
  }
  async function Fo({ options: e, readable: t, writable: n, onTaskFinished: r }, i) {
    try {
      const a = new To(e, i);
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
  async function Do(e, t) {
    let n, r;
    const i = new Promise((_, w) => {
      n = _, r = w;
    });
    Object.assign(e, {
      reader: null,
      writer: null,
      resolveResult: n,
      rejectResult: r,
      result: i
    });
    const { readable: a, options: s, scripts: l } = e, { writable: o, closed: f } = Oo(e.writable), d = dn({
      type: ko,
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
  function Oo(e) {
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
  let ui = true, mi = true;
  function No(e, t, n) {
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
    if (ui)
      try {
        a = new Worker(i);
      } catch {
        ui = false, a = new Worker(i, r);
      }
    else
      a = new Worker(i, r);
    return a.addEventListener(yo, (s) => Lo(s, n)), a;
  }
  function dn(e, { worker: t, writer: n, onTaskFinished: r, transferStreams: i }) {
    try {
      const { value: a, readable: s, writable: l } = e, o = [];
      if (a && (a.byteLength < a.buffer.byteLength ? e.value = a.buffer.slice(0, a.byteLength) : e.value = a.buffer, o.push(e.value)), i && mi ? (s && o.push(s), l && o.push(l)) : e.readable = e.writable = null, o.length)
        try {
          return t.postMessage(e, o), true;
        } catch {
          mi = false, e.readable = e.writable = null, t.postMessage(e);
        }
      else
        t.postMessage(e);
    } catch (a) {
      throw n && n.releaseLock(), r(), a;
    }
  }
  async function Lo({ data: e }, t) {
    const { type: n, value: r, messageId: i, result: a, error: s } = e, { reader: l, writer: o, resolveResult: f, rejectResult: d, onTaskFinished: p } = t;
    try {
      if (s) {
        const { message: w, stack: k, code: u, name: c } = s, m = new Error(w);
        Object.assign(m, {
          stack: k,
          code: u,
          name: c
        }), _(m);
      } else {
        if (n == So) {
          const { value: w, done: k } = await l.read();
          dn({
            type: fi,
            value: w,
            done: k,
            messageId: i
          }, t);
        }
        n == fi && (await o.ready, await o.write(new Uint8Array(r)), dn({
          type: Eo,
          messageId: i
        }, t)), n == di && _(null, a);
      }
    } catch (w) {
      dn({
        type: di,
        messageId: i
      }, t), _(w);
    }
    function _(w, k) {
      w ? d(w) : f(k), o && o.releaseLock(), p();
    }
  }
  let dt = [];
  const Bn = [];
  let pi = 0;
  async function Uo(e, t) {
    const { options: n, config: r } = t, { transferStreams: i, useWebWorkers: a, useCompressionStream: s, codecType: l, compressed: o, signed: f, encrypted: d } = n, { workerScripts: p, maxWorkers: _ } = r;
    t.transferStreams = i || i === X;
    const w = !o && !f && !d && !t.transferStreams;
    return t.useWebWorkers = !w && (a || a === X && r.useWebWorkers), t.scripts = t.useWebWorkers && p ? p[l] : [], n.useCompressionStream = s || s === X && r.useCompressionStream, (await k()).run();
    async function k() {
      const c = dt.find((m) => !m.busy);
      if (c)
        return _i(c), new qn(c, e, t, u);
      if (dt.length < _) {
        const m = {
          indexWorker: pi
        };
        return pi++, dt.push(m), new qn(m, e, t, u);
      } else
        return new Promise((m) => Bn.push({
          resolve: m,
          stream: e,
          workerOptions: t
        }));
    }
    function u(c) {
      if (Bn.length) {
        const [{ resolve: m, stream: h, workerOptions: x }] = Bn.splice(0, 1);
        m(new qn(c, h, x, u));
      } else
        c.worker ? (_i(c), Po(c, t)) : dt = dt.filter((m) => m != c);
    }
  }
  function Po(e, t) {
    const { config: n } = t, { terminateWorkerTimeout: r } = n;
    Number.isFinite(r) && r >= 0 && (e.terminated ? e.terminated = false : e.terminateTimeout = setTimeout(async () => {
      dt = dt.filter((i) => i != e);
      try {
        await e.terminate();
      } catch {
      }
    }, r));
  }
  function _i(e) {
    const { terminateTimeout: t } = e;
    t && (clearTimeout(t), e.terminateTimeout = null);
  }
  function Mo(e, t = {}) {
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
  const jo = "Writer iterator completed too soon", qo = "Content-Type", Wo = 64 * 1024, ps = "writable";
  class dr {
    constructor() {
      this.size = 0;
    }
    init() {
      this.initialized = true;
    }
  }
  let _s = class extends dr {
    get readable() {
      const t = this, { chunkSize: n = Wo } = t, r = new ReadableStream({
        start() {
          this.chunkOffset = 0;
        },
        async pull(i) {
          const { offset: a = 0, size: s, diskNumberStart: l } = r, { chunkOffset: o } = this;
          i.enqueue(await tr(t, a + o, Math.min(n, s - o), l)), o + n > s ? i.close() : this.chunkOffset += n;
        }
      });
      return r;
    }
  };
  class Bo extends dr {
    constructor(t) {
      super();
      const n = this, r = new TransformStream(), i = [];
      t && i.push([
        qo,
        t
      ]), Object.defineProperty(n, ps, {
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
  class $o extends _s {
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
  class Ho extends _s {
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
  class hi extends dr {
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
            const { value: _, done: w } = await t.next();
            if (w && !_)
              throw new Error(jo);
            i = _, i.size = 0, i.maxSize && (r.maxSize = i.maxSize), r.availableSize = r.maxSize, await qt(i), a = _.writable, s = a.getWriter(), await this.write(d);
          }
        },
        async close() {
          await s.ready, await f();
        }
      });
      Object.defineProperty(r, ps, {
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
  function Vo(e) {
    return Array.isArray(e) && (e = new Ho(e)), e instanceof ReadableStream && (e = {
      readable: e
    }), e;
  }
  function Zo(e) {
    e.writable === X && typeof e.next == Ht && (e = new hi(e)), e instanceof WritableStream && (e = {
      writable: e
    });
    const { writable: t } = e;
    return t.size === X && (t.size = 0), e instanceof hi || Object.assign(e, {
      diskNumber: 0,
      diskOffset: 0,
      availableSize: 1 / 0,
      maxSize: 1 / 0
    }), e;
  }
  function tr(e, t, n, r) {
    return e.readUint8Array(t, n, r);
  }
  const Go = "\0\u263A\u263B\u2665\u2666\u2663\u2660\u2022\u25D8\u25CB\u25D9\u2642\u2640\u266A\u266B\u263C\u25BA\u25C4\u2195\u203C\xB6\xA7\u25AC\u21A8\u2191\u2193\u2192\u2190\u221F\u2194\u25B2\u25BC !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\u2302\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5\u20A7\u0192\xE1\xED\xF3\xFA\xF1\xD1\xAA\xBA\xBF\u2310\xAC\xBD\xBC\xA1\xAB\xBB\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255D\u255C\u255B\u2510\u2514\u2534\u252C\u251C\u2500\u253C\u255E\u255F\u255A\u2554\u2569\u2566\u2560\u2550\u256C\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256B\u256A\u2518\u250C\u2588\u2584\u258C\u2590\u2580\u03B1\xDF\u0393\u03C0\u03A3\u03C3\xB5\u03C4\u03A6\u0398\u03A9\u03B4\u221E\u03C6\u03B5\u2229\u2261\xB1\u2265\u2264\u2320\u2321\xF7\u2248\xB0\u2219\xB7\u221A\u207F\xB2\u25A0 ".split("");
  Go.length == 256;
  const Yo = "filename", Ko = "rawFilename", Xo = "comment", zo = "rawComment", Jo = "uncompressedSize", Qo = "compressedSize", el = "offset", wi = "diskNumberStart", hs = "lastModDate", tl = "rawLastModDate", ws = "lastAccessDate", xs = "creationDate", bs = "internalFileAttribute", gs = "externalFileAttribute", vs = "msDosCompatible", ur = "zip64", ys = "encrypted", ks = "version", Ss = "versionMadeBy", Es = "zipCrypto", nl = [
    Yo,
    Ko,
    Qo,
    Jo,
    hs,
    tl,
    Xo,
    zo,
    ws,
    xs,
    el,
    wi,
    wi,
    bs,
    gs,
    vs,
    ur,
    ys,
    ks,
    Ss,
    Es,
    "directory",
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
  class As {
    constructor(t) {
      nl.forEach((n) => this[n] = t[n]);
    }
  }
  const rl = "File already exists", il = "Zip file comment exceeds 64KB", sl = "File entry comment exceeds 64KB", al = "File entry name exceeds 64KB", xi = "Version exceeds 65535", ol = "The strength must equal 1, 2, or 3", ll = "Extra field type exceeds 65535", cl = "Extra field data exceeds 64KB", mr = "Zip64 is not supported (make sure 'keepOrder' is set to 'true')", fl = "Undefined uncompressed size", bi = new Uint8Array([
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
  const gi = [];
  class dl {
    constructor(t, n = {}) {
      t = Zo(t);
      const r = t.availableSize !== X && t.availableSize > 0 && t.availableSize !== 1 / 0 && t.maxSize !== X && t.maxSize > 0 && t.maxSize !== 1 / 0;
      Object.assign(this, {
        writer: t,
        addSplitZipSignature: r,
        options: n,
        config: za(),
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
      $n < s.maxWorkers ? $n++ : await new Promise((o) => gi.push(o));
      let l;
      try {
        if (t = t.trim(), i.filenames.has(t))
          throw new Error(rl);
        return i.filenames.add(t), l = ul(i, t, n, r), a.add(l), await l;
      } catch (o) {
        throw i.filenames.delete(t), o;
      } finally {
        a.delete(l);
        const o = gi.shift();
        o ? o() : $n--;
      }
    }
    async close(t = new Uint8Array(), n = {}) {
      const r = this, { pendingAddFileCalls: i, writer: a } = this, { writable: s } = a;
      for (; i.size; )
        await Promise.allSettled(Array.from(i));
      return await vl(this, t, n), K(r, n, "preventClose") || await s.getWriter().close(), a.getData ? a.getData() : s;
    }
  }
  async function ul(e, t, n, r) {
    t = t.trim(), r.directory && !t.endsWith(Mn) ? t += Mn : r.directory = t.endsWith(Mn);
    const i = K(e, r, "encodeText", fn);
    let a = i(t);
    if (a === X && (a = fn(t)), H(a) > ke)
      throw new Error(al);
    const s = r.comment || "";
    let l = i(s);
    if (l === X && (l = fn(s)), H(l) > ke)
      throw new Error(sl);
    const o = K(e, r, ks, Ya);
    if (o > ke)
      throw new Error(xi);
    const f = K(e, r, Ss, 20);
    if (f > ke)
      throw new Error(xi);
    const d = K(e, r, hs, /* @__PURE__ */ new Date()), p = K(e, r, ws), _ = K(e, r, xs), w = K(e, r, vs, true), k = K(e, r, bs, 0), u = K(e, r, gs, 0), c = K(e, r, "passThrough");
    let m, h;
    c || (m = K(e, r, "password"), h = K(e, r, "rawPassword"));
    const x = K(e, r, "encryptionStrength", 3), A = K(e, r, Es), g = K(e, r, "extendedTimestamp", true), b = K(e, r, "keepOrder", true), y = K(e, r, "level"), v = K(e, r, "useWebWorkers"), E = K(e, r, "bufferedWrite"), C = K(e, r, "dataDescriptorSignature", false), T = K(e, r, "signal"), L = K(e, r, "useUnicodeFileNames", true), O = K(e, r, "useCompressionStream"), j = K(e, r, "compressionMethod");
    let U = K(e, r, "dataDescriptor", true), D = K(e, r, ur);
    if (!A && (m !== X || h !== X) && !(x >= 1 && x <= 3))
      throw new Error(ol);
    let q = new Uint8Array();
    const { extraField: M } = r;
    if (M) {
      let Ye = 0, Ce = 0;
      M.forEach((ge) => Ye += 4 + H(ge)), q = new Uint8Array(Ye), M.forEach((ge, qe) => {
        if (qe > ke)
          throw new Error(ll);
        if (H(ge) > ke)
          throw new Error(cl);
        oe(q, new Uint16Array([
          qe
        ]), Ce), oe(q, new Uint16Array([
          H(ge)
        ]), Ce + 2), oe(q, ge, Ce + 4), Ce += 4 + H(ge);
      });
    }
    let re = 0, P = 0, ne = 0;
    if (c && ({ uncompressedSize: ne } = r, ne === X))
      throw new Error(fl);
    const B = D === true;
    n && (n = Vo(n), await qt(n), c ? re = vi(ne) : n.size === X ? (U = true, (D || D === X) && (D = true, ne = re = Ee + 1)) : (ne = n.size, re = vi(ne)));
    const { diskOffset: Y, diskNumber: Fe, maxSize: ce } = e.writer, ie = B || ne > Ee, Je = B || re > Ee, Ge = B || e.offset + e.pendingEntriesSize - Y > Ee, Me = K(e, r, "supportZip64SplitFile", true) && B || Fe + Math.ceil(e.pendingEntriesSize / ce) > ke;
    if (Ge || ie || Je || Me) {
      if (D === false || !b)
        throw new Error(mr);
      D = true;
    }
    D = D || false;
    const lt = K(e, r, ys), { signature: De } = r;
    r = Object.assign({}, r, {
      rawFilename: a,
      rawComment: l,
      version: o,
      versionMadeBy: f,
      lastModDate: d,
      lastAccessDate: p,
      creationDate: _,
      rawExtraField: q,
      zip64: D,
      zip64UncompressedSize: ie,
      zip64CompressedSize: Je,
      zip64Offset: Ge,
      zip64DiskNumberStart: Me,
      password: m,
      rawPassword: h,
      level: !O && e.config.CompressionStream === X && e.config.CompressionStreamNative === X ? 0 : y,
      useWebWorkers: v,
      encryptionStrength: x,
      extendedTimestamp: g,
      zipCrypto: A,
      bufferedWrite: E,
      keepOrder: b,
      useUnicodeFileNames: L,
      dataDescriptor: U,
      dataDescriptorSignature: C,
      signal: T,
      msDosCompatible: w,
      internalFileAttribute: k,
      externalFileAttribute: u,
      useCompressionStream: O,
      passThrough: c,
      encrypted: !!(m && H(m) || h && H(h)) || c && lt,
      signature: De,
      compressionMethod: j
    });
    const je = _l(r), ht = wl(r), ee = H(je.localHeaderArray, ht.dataDescriptorArray);
    P = ee + re, e.options.usdz && (P += P + 64), e.pendingEntriesSize += P;
    let fe;
    try {
      fe = await ml(e, t, n, {
        headerInfo: je,
        dataDescriptorInfo: ht,
        metadataSize: ee
      }, r);
    } finally {
      e.pendingEntriesSize -= P;
    }
    return Object.assign(fe, {
      name: t,
      comment: s,
      extraField: M
    }), new As(fe);
  }
  async function ml(e, t, n, r, i) {
    const { files: a, writer: s } = e, { keepOrder: l, dataDescriptor: o, signal: f } = i, { headerInfo: d } = r, { usdz: p } = e.options, _ = Array.from(a.values()).pop();
    let w = {}, k, u, c, m, h, x, A;
    a.set(t, w);
    try {
      let v;
      l && (v = _ && _.lock, g()), (i.bufferedWrite || e.writerLocked || e.bufferedWrites && l || !o) && !p ? (x = new TransformStream(), A = new Response(x.readable).blob(), x.writable.size = 0, k = true, e.bufferedWrites++, await qt(s)) : (x = s, await b()), await qt(x);
      const { writable: E } = s;
      let { diskOffset: C } = s;
      if (e.addSplitZipSignature) {
        delete e.addSplitZipSignature;
        const L = new Uint8Array(4), O = me(L);
        $(O, 0, qi), await $e(E, L), e.offset += 4;
      }
      p && hl(r, e.offset - C), k || (await v, await y(E));
      const { diskNumber: T } = s;
      if (h = true, w.diskNumberStart = T, w = await pl(n, x, w, r, e.config, i), h = false, a.set(t, w), w.filename = t, k) {
        await x.writable.getWriter().close();
        let L = await A;
        await v, await b(), m = true, o || (L = await bl(w, L, E, i)), await y(E), w.diskNumberStart = s.diskNumber, C = s.diskOffset, await L.stream().pipeTo(E, {
          preventClose: true,
          preventAbort: true,
          signal: f
        }), E.size += L.size, m = false;
      }
      if (w.offset = e.offset - C, w.zip64)
        gl(w, i);
      else if (w.offset > Ee)
        throw new Error(mr);
      return e.offset += w.size, w;
    } catch (v) {
      if (k && m || !k && h) {
        if (e.hasCorruptedEntries = true, v)
          try {
            v.corruptedEntry = true;
          } catch {
          }
        k ? e.offset += x.writable.size : e.offset = x.writable.size;
      }
      throw a.delete(t), v;
    } finally {
      k && e.bufferedWrites--, c && c(), u && u();
    }
    function g() {
      w.lock = new Promise((v) => c = v);
    }
    async function b() {
      e.writerLocked = true;
      const { lockWriter: v } = e;
      e.lockWriter = new Promise((E) => u = () => {
        e.writerLocked = false, E();
      }), await v;
    }
    async function y(v) {
      H(d.localHeaderArray) > s.availableSize && (s.availableSize = 0, await $e(v, new Uint8Array()));
    }
  }
  async function pl(e, t, { diskNumberStart: n, lock: r }, i, a, s) {
    const { headerInfo: l, dataDescriptorInfo: o, metadataSize: f } = i, { localHeaderArray: d, headerArray: p, lastModDate: _, rawLastModDate: w, encrypted: k, compressed: u, version: c, compressionMethod: m, rawExtraFieldExtendedTimestamp: h, extraFieldExtendedTimestampFlag: x, rawExtraFieldNTFS: A, rawExtraFieldAES: g } = l, { dataDescriptorArray: b } = o, { rawFilename: y, lastAccessDate: v, creationDate: E, password: C, rawPassword: T, level: L, zip64: O, zip64UncompressedSize: j, zip64CompressedSize: U, zip64Offset: D, zip64DiskNumberStart: q, zipCrypto: M, dataDescriptor: re, directory: P, versionMadeBy: ne, rawComment: B, rawExtraField: Y, useWebWorkers: Fe, onstart: ce, onprogress: ie, onend: Je, signal: Ge, encryptionStrength: Qe, extendedTimestamp: Me, msDosCompatible: lt, internalFileAttribute: De, externalFileAttribute: je, useCompressionStream: ht, passThrough: ee } = s, fe = {
      lock: r,
      versionMadeBy: ne,
      zip64: O,
      directory: !!P,
      filenameUTF8: true,
      rawFilename: y,
      commentUTF8: true,
      rawComment: B,
      rawExtraFieldExtendedTimestamp: h,
      rawExtraFieldNTFS: A,
      rawExtraFieldAES: g,
      rawExtraField: Y,
      extendedTimestamp: Me,
      msDosCompatible: lt,
      internalFileAttribute: De,
      externalFileAttribute: je,
      diskNumberStart: n
    };
    let { signature: Ye, uncompressedSize: Ce } = s, ge = 0;
    ee || (Ce = 0);
    const { writable: qe } = t;
    if (e) {
      e.chunkSize = Ja(a), await $e(qe, d);
      const Oe = e.readable, Zt = Oe.size = e.size, Tn = {
        options: {
          codecType: ds,
          level: L,
          rawPassword: T,
          password: C,
          encryptionStrength: Qe,
          zipCrypto: k && M,
          passwordVerification: k && M && w >> 8 & 255,
          signed: !ee,
          compressed: u && !ee,
          encrypted: k && !ee,
          useWebWorkers: Fe,
          useCompressionStream: ht,
          transferStreams: false
        },
        config: a,
        streamOptions: {
          signal: Ge,
          size: Zt,
          onstart: ce,
          onprogress: ie,
          onend: Je
        }
      }, wt = await Uo({
        readable: Oe,
        writable: qe
      }, Tn);
      ge = wt.outputSize, ee || (Ce = wt.inputSize, Ye = wt.signature), qe.size += Ce;
    } else
      await $e(qe, d);
    let We;
    if (O) {
      let Oe = 4;
      j && (Oe += 8), U && (Oe += 8), D && (Oe += 8), q && (Oe += 4), We = new Uint8Array(Oe);
    } else
      We = new Uint8Array();
    return xl({
      signature: Ye,
      rawExtraFieldZip64: We,
      compressedSize: ge,
      uncompressedSize: Ce,
      headerInfo: l,
      dataDescriptorInfo: o
    }, s), re && await $e(qe, b), Object.assign(fe, {
      uncompressedSize: Ce,
      compressedSize: ge,
      lastModDate: _,
      rawLastModDate: w,
      creationDate: E,
      lastAccessDate: v,
      encrypted: k,
      zipCrypto: M,
      size: f + ge,
      compressionMethod: m,
      version: c,
      headerArray: p,
      signature: Ye,
      rawExtraFieldZip64: We,
      extraFieldExtendedTimestampFlag: x,
      zip64UncompressedSize: j,
      zip64CompressedSize: U,
      zip64Offset: D,
      zip64DiskNumberStart: q
    }), fe;
  }
  function _l(e) {
    const { rawFilename: t, lastModDate: n, lastAccessDate: r, creationDate: i, level: a, zip64: s, zipCrypto: l, useUnicodeFileNames: o, dataDescriptor: f, directory: d, rawExtraField: p, encryptionStrength: _, extendedTimestamp: w, encrypted: k } = e;
    let { version: u, compressionMethod: c } = e;
    const m = !d && (a > 0 || a === X && c !== 0);
    let h;
    if (k && !l) {
      h = new Uint8Array(H(bi) + 2);
      const D = me(h);
      Z(D, 0, qa), oe(h, bi, 2), bn(D, 8, _);
    } else
      h = new Uint8Array();
    let x, A, g;
    if (w) {
      A = new Uint8Array(9 + (r ? 4 : 0) + (i ? 4 : 0));
      const D = me(A);
      Z(D, 0, $i), Z(D, 2, H(A) - 4), g = 1 + (r ? 2 : 0) + (i ? 4 : 0), bn(D, 4, g);
      let q = 5;
      $(D, q, Math.floor(n.getTime() / 1e3)), q += 4, r && ($(D, q, Math.floor(r.getTime() / 1e3)), q += 4), i && $(D, q, Math.floor(i.getTime() / 1e3));
      try {
        x = new Uint8Array(36);
        const M = me(x), re = Hn(n);
        Z(M, 0, Wa), Z(M, 2, 32), Z(M, 8, Ba), Z(M, 10, 24), Se(M, 12, re), Se(M, 20, Hn(r) || re), Se(M, 28, Hn(i) || re);
      } catch {
        x = new Uint8Array();
      }
    } else
      x = A = new Uint8Array();
    let b = 0;
    o && (b = b | Za), f && (b = b | Va), c === X && (c = m ? Jr : Ia), c == Jr && (a >= 1 && a < 3 && (b = b | 6), a >= 3 && a < 5 && (b = b | 1), a === 9 && (b = b | 2)), s && (u = u > Qr ? u : Qr), k && (b = b | Ha, l || (u = u > ei ? u : ei, h[9] = c, c = Fa));
    const y = new Uint8Array(26), v = me(y);
    Z(v, 0, u), Z(v, 2, b), Z(v, 4, c);
    const E = new Uint32Array(1), C = me(E);
    let T;
    n < ni ? T = ni : n > ti ? T = ti : T = n, Z(C, 0, (T.getHours() << 6 | T.getMinutes()) << 5 | T.getSeconds() / 2), Z(C, 2, (T.getFullYear() - 1980 << 4 | T.getMonth() + 1) << 5 | T.getDate());
    const L = E[0];
    $(v, 6, L), Z(v, 22, H(t));
    const O = H(h, A, x, p);
    Z(v, 24, O);
    const j = new Uint8Array(30 + H(t) + O), U = me(j);
    return $(U, 0, Da), oe(j, y, 4), oe(j, t, 30), oe(j, h, 30 + H(t)), oe(j, A, 30 + H(t, h)), oe(j, x, 30 + H(t, h, A)), oe(j, p, 30 + H(t, h, A, x)), {
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
      rawExtraFieldNTFS: x,
      rawExtraFieldAES: h,
      extraFieldLength: O
    };
  }
  function hl(e, t) {
    const { headerInfo: n } = e;
    let { localHeaderArray: r, extraFieldLength: i } = n, a = me(r), s = 64 - (t + H(r)) % 64;
    s < 4 && (s += 64);
    const l = new Uint8Array(s), o = me(l);
    Z(o, 0, $a), Z(o, 2, s - 2);
    const f = r;
    n.localHeaderArray = r = new Uint8Array(H(f) + s), oe(r, f), oe(r, l, H(f)), a = me(r), Z(a, 28, i + s), e.metadataSize += s;
  }
  function wl(e) {
    const { zip64: t, dataDescriptor: n, dataDescriptorSignature: r } = e;
    let i = new Uint8Array(), a, s = 0;
    return n && (i = new Uint8Array(t ? r ? 24 : 20 : r ? 16 : 12), a = me(i), r && (s = 4, $(a, 0, Oa))), {
      dataDescriptorArray: i,
      dataDescriptorView: a,
      dataDescriptorOffset: s
    };
  }
  function xl(e, t) {
    const { signature: n, rawExtraFieldZip64: r, compressedSize: i, uncompressedSize: a, headerInfo: s, dataDescriptorInfo: l } = e, { headerView: o, encrypted: f } = s, { dataDescriptorView: d, dataDescriptorOffset: p } = l, { zip64: _, zip64UncompressedSize: w, zip64CompressedSize: k, zipCrypto: u, dataDescriptor: c } = t;
    if ((!f || u) && n !== X && ($(o, 10, n), c && $(d, p, n)), _) {
      const m = me(r);
      Z(m, 0, ja), Z(m, 2, H(r) - 4);
      let h = 4;
      w && ($(o, 18, Ee), Se(m, h, BigInt(a)), h += 8), k && ($(o, 14, Ee), Se(m, h, BigInt(i))), c && (Se(d, p + 4, BigInt(i)), Se(d, p + 12, BigInt(a)));
    } else
      $(o, 14, i), $(o, 18, a), c && ($(d, p + 4, i), $(d, p + 8, a));
  }
  async function bl(e, t, n, { zipCrypto: r }) {
    let i;
    i = await t.slice(0, 26).arrayBuffer(), i.byteLength != 26 && (i = i.slice(0, 26));
    const a = new DataView(i);
    return (!e.encrypted || r) && $(a, 14, e.signature), e.zip64 ? ($(a, 18, Ee), $(a, 22, Ee)) : ($(a, 18, e.compressedSize), $(a, 22, e.uncompressedSize)), await $e(n, new Uint8Array(i)), t.slice(i.byteLength);
  }
  function gl(e, t) {
    const { rawExtraFieldZip64: n, offset: r, diskNumberStart: i } = e, { zip64UncompressedSize: a, zip64CompressedSize: s, zip64Offset: l, zip64DiskNumberStart: o } = t, f = me(n);
    let d = 4;
    a && (d += 8), s && (d += 8), l && (Se(f, d, BigInt(r)), d += 8), o && $(f, d, i);
  }
  async function vl(e, t, n) {
    const { files: r, writer: i } = e, { diskOffset: a, writable: s } = i;
    let { diskNumber: l } = i, o = 0, f = 0, d = e.offset - a, p = r.size;
    for (const [, g] of r) {
      const { rawFilename: b, rawExtraFieldZip64: y, rawExtraFieldAES: v, rawComment: E, rawExtraFieldNTFS: C, rawExtraField: T, extendedTimestamp: L, extraFieldExtendedTimestampFlag: O, lastModDate: j } = g;
      let U;
      if (L) {
        U = new Uint8Array(9);
        const D = me(U);
        Z(D, 0, $i), Z(D, 2, 5), bn(D, 4, O), $(D, 5, Math.floor(j.getTime() / 1e3));
      } else
        U = new Uint8Array();
      g.rawExtraFieldCDExtendedTimestamp = U, f += 46 + H(b, E, y, v, C, U, T);
    }
    const _ = new Uint8Array(f), w = me(_);
    await qt(i);
    let k = 0;
    for (const [g, b] of Array.from(r.values()).entries()) {
      const { offset: y, rawFilename: v, rawExtraFieldZip64: E, rawExtraFieldAES: C, rawExtraFieldCDExtendedTimestamp: T, rawExtraFieldNTFS: L, rawExtraField: O, rawComment: j, versionMadeBy: U, headerArray: D, directory: q, zip64: M, zip64UncompressedSize: re, zip64CompressedSize: P, zip64DiskNumberStart: ne, zip64Offset: B, msDosCompatible: Y, internalFileAttribute: Fe, externalFileAttribute: ce, diskNumberStart: ie, uncompressedSize: Je, compressedSize: Ge } = b, Qe = H(E, C, T, L, O);
      $(w, o, Na), Z(w, o + 4, U);
      const Me = me(D);
      re || $(Me, 18, Je), P || $(Me, 14, Ge), oe(_, D, o + 6), Z(w, o + 30, Qe), Z(w, o + 32, H(j)), Z(w, o + 34, M && ne ? ke : ie), Z(w, o + 36, Fe), ce ? $(w, o + 38, ce) : q && Y && bn(w, o + 38, Ga), $(w, o + 42, M && B ? Ee : y), oe(_, v, o + 46), oe(_, E, o + 46 + H(v)), oe(_, C, o + 46 + H(v, E)), oe(_, T, o + 46 + H(v, E, C)), oe(_, L, o + 46 + H(v, E, C, T)), oe(_, O, o + 46 + H(v, E, C, T, L)), oe(_, j, o + 46 + H(v) + Qe);
      const lt = 46 + H(v, j) + Qe;
      if (o - k > i.availableSize && (i.availableSize = 0, await $e(s, _.slice(k, o)), k = o), o += lt, n.onprogress)
        try {
          await n.onprogress(g + 1, r.size, new As(b));
        } catch {
        }
    }
    await $e(s, k ? _.slice(k) : _);
    let u = i.diskNumber;
    const { availableSize: c } = i;
    c < Jn && u++;
    let m = K(e, n, ur);
    if (d > Ee || f > Ee || p > ke || u > ke) {
      if (m === false)
        throw new Error(mr);
      m = true;
    }
    const h = new Uint8Array(m ? Ma : Jn), x = me(h);
    o = 0, m && ($(x, 0, Ua), Se(x, 4, BigInt(44)), Z(x, 12, 45), Z(x, 14, 45), $(x, 16, u), $(x, 20, l), Se(x, 24, BigInt(p)), Se(x, 32, BigInt(p)), Se(x, 40, BigInt(f)), Se(x, 48, BigInt(d)), $(x, 56, Pa), Se(x, 64, BigInt(d) + BigInt(f)), $(x, 72, u + 1), K(e, n, "supportZip64SplitFile", true) && (u = ke, l = ke), p = ke, d = Ee, f = Ee, o += Bi + Wi), $(x, o, La), Z(x, o + 4, u), Z(x, o + 6, l), Z(x, o + 8, p), Z(x, o + 10, p), $(x, o + 12, f), $(x, o + 16, d);
    const A = H(t);
    if (A)
      if (A <= ke)
        Z(x, o + 20, A);
      else
        throw new Error(il);
    await $e(s, h), A && await $e(s, t);
  }
  async function $e(e, t) {
    const n = e.getWriter();
    try {
      await n.ready, e.size += H(t), await n.write(t);
    } finally {
      n.releaseLock();
    }
  }
  function Hn(e) {
    if (e)
      return (BigInt(e.getTime()) + BigInt(116444736e5)) * BigInt(1e4);
  }
  function K(e, t, n, r) {
    const i = t[n] === X ? e.options[n] : t[n];
    return i === X ? r : i;
  }
  function vi(e) {
    return e + 5 * (Math.floor(e / 16383) + 1);
  }
  function bn(e, t, n) {
    e.setUint8(t, n);
  }
  function Z(e, t, n) {
    e.setUint16(t, n, true);
  }
  function $(e, t, n) {
    e.setUint32(t, n, true);
  }
  function Se(e, t, n) {
    e.setBigUint64(t, n, true);
  }
  function oe(e, t, n) {
    e.set(t, n);
  }
  function me(e) {
    return new DataView(e.buffer);
  }
  function H(...e) {
    let t = 0;
    return e.forEach((n) => n && (t += n.length)), t;
  }
  let Ts;
  try {
    Ts = import.meta.url;
  } catch {
  }
  lr({
    baseURL: Ts
  });
  Mo(lr);
  lr({
    Deflate: la,
    Inflate: Ra
  });
  const yl = "" + new URL("rgssad_wasm_bg-6177bb35.wasm", import.meta.url).href, kl = async (e = {}, t) => {
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
  let se;
  function Sl(e) {
    se = e;
  }
  function nr(e) {
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
      i > 0 && (a += nr(e[0]));
      for (let s = 1; s < i; s++)
        a += ", " + nr(e[s]);
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
  let rr = 0, sn = null;
  function un() {
    return (sn === null || sn.byteLength === 0) && (sn = new Uint8Array(se.memory.buffer)), sn;
  }
  const El = typeof TextEncoder > "u" ? (0, module.require)("util").TextEncoder : TextEncoder;
  let mn = new El("utf-8");
  const Al = typeof mn.encodeInto == "function" ? function(e, t) {
    return mn.encodeInto(e, t);
  } : function(e, t) {
    const n = mn.encode(e);
    return t.set(n), {
      read: e.length,
      written: n.length
    };
  };
  function Tl(e, t, n) {
    if (n === void 0) {
      const l = mn.encode(e), o = t(l.length, 1) >>> 0;
      return un().subarray(o, o + l.length).set(l), rr = l.length, o;
    }
    let r = e.length, i = t(r, 1) >>> 0;
    const a = un();
    let s = 0;
    for (; s < r; s++) {
      const l = e.charCodeAt(s);
      if (l > 127)
        break;
      a[i + s] = l;
    }
    if (s !== r) {
      s !== 0 && (e = e.slice(s)), i = n(i, r, r = s + e.length * 3, 1) >>> 0;
      const l = un().subarray(i + s, i + r), o = Al(e, l);
      s += o.written;
    }
    return rr = s, i;
  }
  let an = null;
  function at() {
    return (an === null || an.byteLength === 0) && (an = new Int32Array(se.memory.buffer)), an;
  }
  const Cl = typeof TextDecoder > "u" ? (0, module.require)("util").TextDecoder : TextDecoder;
  let Cs = new Cl("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  Cs.decode();
  function pr(e, t) {
    return e = e >>> 0, Cs.decode(un().subarray(e, e + t));
  }
  function yi(e) {
    const t = se.__wbindgen_export_2.get(e);
    return se.__wbindgen_export_3(e), t;
  }
  function Rl(e) {
    return e == null;
  }
  function Rs(e) {
    const t = se.__wbindgen_export_4();
    return se.__wbindgen_export_2.set(t, e), t;
  }
  function Il(e, t) {
    try {
      return e.apply(this, t);
    } catch (n) {
      const r = Rs(n);
      se.__wbindgen_export_5(r);
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
      se.__wbg_reader_free(t);
    }
    constructor(t) {
      try {
        const a = se.__wbindgen_add_to_stack_pointer(-16);
        se.reader_new(a, t);
        var n = at()[a / 4 + 0], r = at()[a / 4 + 1], i = at()[a / 4 + 2];
        if (i)
          throw yi(r);
        return gn.__wrap(n);
      } finally {
        se.__wbindgen_add_to_stack_pointer(16);
      }
    }
    readEntry(t) {
      try {
        const a = se.__wbindgen_add_to_stack_pointer(-16);
        se.reader_readEntry(a, this.__wbg_ptr, Rl(t) ? 0 : Rs(t));
        var n = at()[a / 4 + 0], r = at()[a / 4 + 1], i = at()[a / 4 + 2];
        if (i)
          throw yi(r);
        return n === 0 ? void 0 : _r.__wrap(n);
      } finally {
        se.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  class _r {
    static __wrap(t) {
      t = t >>> 0;
      const n = Object.create(_r.prototype);
      return n.__wbg_ptr = t, n;
    }
    __destroy_into_raw() {
      const t = this.__wbg_ptr;
      return this.__wbg_ptr = 0, t;
    }
    free() {
      const t = this.__destroy_into_raw();
      se.__wbg_readerentry_free(t);
    }
    get fileName() {
      return se.readerentry_fileName(this.__wbg_ptr);
    }
    get data() {
      return se.readerentry_data(this.__wbg_ptr);
    }
  }
  function Fl(e, t) {
    const n = nr(t), r = Tl(n, se.__wbindgen_export_0, se.__wbindgen_export_1), i = rr;
    at()[e / 4 + 1] = i, at()[e / 4 + 0] = r;
  }
  function Dl(e) {
    let t;
    try {
      t = e instanceof Uint8Array;
    } catch {
      t = false;
    }
    return t;
  }
  function Ol(e) {
    let t;
    try {
      t = e instanceof ArrayBuffer;
    } catch {
      t = false;
    }
    return t;
  }
  function Nl(e) {
    return new Uint8Array(e);
  }
  function Ll(e, t) {
    return new Error(pr(e, t));
  }
  function Ul(e, t) {
    return pr(e, t);
  }
  function Pl(e) {
    return e;
  }
  function Ml() {
    return Il(function(e, t, n, r) {
      return e.call(t, n, r);
    }, arguments);
  }
  function jl(e) {
    return !e;
  }
  function ql(e) {
    return new Uint8Array(e >>> 0);
  }
  function Wl(e) {
    return e.length;
  }
  function Bl() {
    return se.memory;
  }
  function $l(e) {
    return e.buffer;
  }
  function Hl(e, t, n) {
    return new Uint8Array(e, t >>> 0, n >>> 0);
  }
  function Vl(e, t, n) {
    e.set(t, n >>> 0);
  }
  function Zl(e, t) {
    throw new Error(pr(e, t));
  }
  function Gl() {
    const e = se.__wbindgen_export_2, t = e.grow(4);
    e.set(0, void 0), e.set(t + 0, void 0), e.set(t + 1, null), e.set(t + 2, true), e.set(t + 3, false);
  }
  URL = globalThis.URL;
  const be = await kl({
    "./rgssad_wasm_bg.js": {
      __wbindgen_debug_string: Fl,
      __wbg_instanceof_Uint8Array_d8d9cb2b8e8ac1d4: Dl,
      __wbg_instanceof_ArrayBuffer_39ac22089b74fddb: Ol,
      __wbg_new_8125e318e6245eed: Nl,
      __wbindgen_error_new: Ll,
      __wbindgen_string_new: Ul,
      __wbindgen_number_new: Pl,
      __wbg_call_4c92f6aec1e1d6e6: Ml,
      __wbindgen_is_falsy: jl,
      __wbg_newwithlength_e5d69174d6984cd7: ql,
      __wbg_length_72e2208bbc0efc61: Wl,
      __wbindgen_memory: Bl,
      __wbg_buffer_085ec1f694018c4f: $l,
      __wbg_newwithbyteoffsetandlength_6da8e527659b86aa: Hl,
      __wbg_set_5cf90238115182c3: Vl,
      __wbindgen_throw: Zl,
      __wbindgen_init_externref_table: Gl
    }
  }, yl), Yl = be.memory, Kl = be.__wbg_reader_free, Xl = be.reader_new, zl = be.reader_readEntry, Jl = be.__wbg_readerentry_free, Ql = be.readerentry_fileName, ec = be.readerentry_data, tc = be.__wbindgen_export_0, nc = be.__wbindgen_export_1, rc = be.__wbindgen_export_2, ic = be.__wbindgen_add_to_stack_pointer, sc = be.__wbindgen_export_3, ac = be.__wbindgen_export_4, oc = be.__wbindgen_export_5, Is = be.__wbindgen_start, lc = Object.freeze(Object.defineProperty({
    __proto__: null,
    __wbg_reader_free: Kl,
    __wbg_readerentry_free: Jl,
    __wbindgen_add_to_stack_pointer: ic,
    __wbindgen_export_0: tc,
    __wbindgen_export_1: nc,
    __wbindgen_export_2: rc,
    __wbindgen_export_3: sc,
    __wbindgen_export_4: ac,
    __wbindgen_export_5: oc,
    __wbindgen_start: Is,
    memory: Yl,
    reader_new: Xl,
    reader_readEntry: zl,
    readerentry_data: ec,
    readerentry_fileName: Ql
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  Sl(lc);
  Is();
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
  function cc(e) {
    let t, n, r, i, a, s, l, o;
    return {
      c() {
        t = de("div"), n = de("h1"), n.textContent = "RGSSAD Online Viewer", r = mt(), i = de("label"), i.textContent = "Upload Archive", a = mt(), s = de("input"), Q(i, "for", "archive-input"), Q(i, "class", "input-label svelte-bs5obz"), Q(s, "type", "file"), Q(s, "id", "archive-input"), Q(s, "name", "archive-input"), Q(s, "accept", ".rgssad,.rgss2a"), Q(s, "class", "svelte-bs5obz"), Q(t, "class", "container svelte-bs5obz");
      },
      m(f, d) {
        _e(f, t, d), ae(t, n), ae(t, r), ae(t, i), ae(t, a), ae(t, s), l || (o = [
          pt(i, "dragover", yr(e[2])),
          pt(i, "drop", yr(e[0])),
          pt(s, "change", e[1])
        ], l = true);
      },
      p: Ke,
      i: Ke,
      o: Ke,
      d(f) {
        f && pe(t), l = false, At(o);
      }
    };
  }
  function fc(e) {
    const t = Oi();
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
  class dc extends ar {
    constructor(t) {
      super(), sr(this, t, fc, cc, ir, {});
    }
  }
  function ki(e, t, n) {
    const r = e.slice();
    return r[0] = t[n], r;
  }
  function Si(e, t, n) {
    const r = e.slice();
    return r[0] = t[n], r;
  }
  function uc(e) {
    let t, n, r, i;
    const a = [
      _c,
      pc
    ], s = [];
    function l(o, f) {
      return o[0].isFile ? 0 : 1;
    }
    return n = l(e), r = s[n] = a[n](e), {
      c() {
        t = de("li"), r.c();
      },
      m(o, f) {
        _e(o, t, f), s[n].m(t, null), i = true;
      },
      p(o, f) {
        let d = n;
        n = l(o), n === d ? s[n].p(o, f) : (Tt(), he(s[d], 1, 1, () => {
          s[d] = null;
        }), Ct(), r = s[n], r ? r.p(o, f) : (r = s[n] = a[n](o), r.c()), le(r, 1), r.m(t, null));
      },
      i(o) {
        i || (le(r), i = true);
      },
      o(o) {
        he(r), i = false;
      },
      d(o) {
        o && pe(t), s[n].d();
      }
    };
  }
  function mc(e) {
    let t, n, r = _n(e[0].iterChildren()), i = [];
    for (let s = 0; s < r.length; s += 1)
      i[s] = Ti(Si(e, r, s));
    const a = (s) => he(i[s], 1, 1, () => {
      i[s] = null;
    });
    return {
      c() {
        t = de("ol");
        for (let s = 0; s < i.length; s += 1)
          i[s].c();
        Q(t, "class", "svelte-5jhjyf");
      },
      m(s, l) {
        _e(s, t, l);
        for (let o = 0; o < i.length; o += 1)
          i[o] && i[o].m(t, null);
        n = true;
      },
      p(s, l) {
        if (l & 1) {
          r = _n(s[0].iterChildren());
          let o;
          for (o = 0; o < r.length; o += 1) {
            const f = Si(s, r, o);
            i[o] ? (i[o].p(f, l), le(i[o], 1)) : (i[o] = Ti(f), i[o].c(), le(i[o], 1), i[o].m(t, null));
          }
          for (Tt(), o = r.length; o < i.length; o += 1)
            a(o);
          Ct();
        }
      },
      i(s) {
        if (!n) {
          for (let l = 0; l < r.length; l += 1)
            le(i[l]);
          n = true;
        }
      },
      o(s) {
        i = i.filter(Boolean);
        for (let l = 0; l < i.length; l += 1)
          he(i[l]);
        n = false;
      },
      d(s) {
        s && pe(t), Di(i, s);
      }
    };
  }
  function pc(e) {
    let t, n, r = e[0].name() + "", i, a, s, l, o, f;
    function d(k, u) {
      return k[1] ? wc : hc;
    }
    let p = d(e), _ = p(e), w = e[1] && Ei(e);
    return {
      c() {
        t = de("button"), _.c(), n = mt(), i = Ze(r), a = mt(), s = de("ol"), w && w.c(), pn(t, "padding-left", e[0].depth() + "rem"), Q(t, "class", "svelte-5jhjyf"), Q(s, "class", "svelte-5jhjyf");
      },
      m(k, u) {
        _e(k, t, u), _.m(t, null), ae(t, n), ae(t, i), _e(k, a, u), _e(k, s, u), w && w.m(s, null), l = true, o || (f = pt(t, "click", e[2]), o = true);
      },
      p(k, u) {
        p !== (p = d(k)) && (_.d(1), _ = p(k), _ && (_.c(), _.m(t, n))), (!l || u & 1) && r !== (r = k[0].name() + "") && yn(i, r), (!l || u & 1) && pn(t, "padding-left", k[0].depth() + "rem"), k[1] ? w ? (w.p(k, u), u & 2 && le(w, 1)) : (w = Ei(k), w.c(), le(w, 1), w.m(s, null)) : w && (Tt(), he(w, 1, 1, () => {
          w = null;
        }), Ct());
      },
      i(k) {
        l || (le(w), l = true);
      },
      o(k) {
        he(w), l = false;
      },
      d(k) {
        k && (pe(t), pe(a), pe(s)), _.d(), w && w.d(), o = false, f();
      }
    };
  }
  function _c(e) {
    let t, n = e[0].name() + "", r, i, a;
    return {
      c() {
        t = de("button"), r = Ze(n), pn(t, "padding-left", e[0].depth() + "rem"), Q(t, "class", "svelte-5jhjyf");
      },
      m(s, l) {
        _e(s, t, l), ae(t, r), i || (a = pt(t, "click", e[3]), i = true);
      },
      p(s, l) {
        l & 1 && n !== (n = s[0].name() + "") && yn(r, n), l & 1 && pn(t, "padding-left", s[0].depth() + "rem");
      },
      i: Ke,
      o: Ke,
      d(s) {
        s && pe(t), i = false, a();
      }
    };
  }
  function hc(e) {
    let t;
    return {
      c() {
        t = Ze("+");
      },
      m(n, r) {
        _e(n, t, r);
      },
      d(n) {
        n && pe(t);
      }
    };
  }
  function wc(e) {
    let t;
    return {
      c() {
        t = Ze("-");
      },
      m(n, r) {
        _e(n, t, r);
      },
      d(n) {
        n && pe(t);
      }
    };
  }
  function Ei(e) {
    let t, n, r = _n(e[0].iterChildren()), i = [];
    for (let s = 0; s < r.length; s += 1)
      i[s] = Ai(ki(e, r, s));
    const a = (s) => he(i[s], 1, 1, () => {
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
        _e(s, t, l), n = true;
      },
      p(s, l) {
        if (l & 1) {
          r = _n(s[0].iterChildren());
          let o;
          for (o = 0; o < r.length; o += 1) {
            const f = ki(s, r, o);
            i[o] ? (i[o].p(f, l), le(i[o], 1)) : (i[o] = Ai(f), i[o].c(), le(i[o], 1), i[o].m(t.parentNode, t));
          }
          for (Tt(), o = r.length; o < i.length; o += 1)
            a(o);
          Ct();
        }
      },
      i(s) {
        if (!n) {
          for (let l = 0; l < r.length; l += 1)
            le(i[l]);
          n = true;
        }
      },
      o(s) {
        i = i.filter(Boolean);
        for (let l = 0; l < i.length; l += 1)
          he(i[l]);
        n = false;
      },
      d(s) {
        s && pe(t), Di(i, s);
      }
    };
  }
  function Ai(e) {
    let t, n;
    return t = new hr({
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
        n || (le(t.$$.fragment, r), n = true);
      },
      o(r) {
        he(t.$$.fragment, r), n = false;
      },
      d(r) {
        $t(t, r);
      }
    };
  }
  function Ti(e) {
    let t, n;
    return t = new hr({
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
        n || (le(t.$$.fragment, r), n = true);
      },
      o(r) {
        he(t.$$.fragment, r), n = false;
      },
      d(r) {
        $t(t, r);
      }
    };
  }
  function xc(e) {
    let t, n, r, i;
    const a = [
      mc,
      uc
    ], s = [];
    function l(o, f) {
      return o[0].path === "" ? 0 : 1;
    }
    return t = l(e), n = s[t] = a[t](e), {
      c() {
        n.c(), r = vn();
      },
      m(o, f) {
        s[t].m(o, f), _e(o, r, f), i = true;
      },
      p(o, [f]) {
        let d = t;
        t = l(o), t === d ? s[t].p(o, f) : (Tt(), he(s[d], 1, 1, () => {
          s[d] = null;
        }), Ct(), n = s[t], n ? n.p(o, f) : (n = s[t] = a[t](o), n.c()), le(n, 1), n.m(r.parentNode, r));
      },
      i(o) {
        i || (le(n), i = true);
      },
      o(o) {
        he(n), i = false;
      },
      d(o) {
        o && pe(r), s[t].d(o);
      }
    };
  }
  function bc(e, t, n) {
    let { fileNode: r = null } = t;
    const i = Oi();
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
  class hr extends ar {
    constructor(t) {
      super(), sr(this, t, bc, xc, ir, {
        fileNode: 0
      });
    }
  }
  function gc(e) {
    const t = e.slice(), n = URL.createObjectURL(new Blob([
      t[1].data
    ], {
      type: Tc(t[1])
    }));
    return t[6] = n, t;
  }
  function vc(e) {
    let t, n;
    return t = new dc({}), t.$on("load", e[4]), {
      c() {
        kn(t.$$.fragment);
      },
      m(r, i) {
        Bt(t, r, i), n = true;
      },
      p: Ke,
      i(r) {
        n || (le(t.$$.fragment, r), n = true);
      },
      o(r) {
        he(t.$$.fragment, r), n = false;
      },
      d(r) {
        $t(t, r);
      }
    };
  }
  function yc(e) {
    let t, n, r, i, a, s, l, o, f, d, p, _ = "Current: " + (e[1] ? e[1].path : "None"), w, k, u, c, m;
    o = new hr({
      props: {
        fileNode: e[0]
      }
    }), o.$on("selected-file-node", e[3]);
    let h = e[1] && Ci(e);
    return {
      c() {
        t = de("div"), n = de("div"), r = de("button"), r.textContent = "Export Zip", i = mt(), a = de("div"), s = de("div"), l = Ze(`Tree View
        `), kn(o.$$.fragment), f = mt(), d = de("div"), p = de("div"), w = Ze(_), k = mt(), h && h.c(), Q(r, "class", "svelte-qx1job"), Q(n, "class", "viewer-bar svelte-qx1job"), Q(s, "class", "tree-view svelte-qx1job"), Q(p, "class", "file-preview-header svelte-qx1job"), Q(d, "class", "file-preview svelte-qx1job"), Q(a, "class", "viewer-main-container svelte-qx1job"), Q(t, "class", "viewer-container svelte-qx1job");
      },
      m(x, A) {
        _e(x, t, A), ae(t, n), ae(n, r), ae(t, i), ae(t, a), ae(a, s), ae(s, l), Bt(o, s, null), ae(a, f), ae(a, d), ae(d, p), ae(p, w), ae(d, k), h && h.m(d, null), u = true, c || (m = pt(r, "click", e[2]), c = true);
      },
      p(x, A) {
        const g = {};
        A & 1 && (g.fileNode = x[0]), o.$set(g), (!u || A & 2) && _ !== (_ = "Current: " + (x[1] ? x[1].path : "None")) && yn(w, _), x[1] ? h ? h.p(x, A) : (h = Ci(x), h.c(), h.m(d, null)) : h && (h.d(1), h = null);
      },
      i(x) {
        u || (le(o.$$.fragment, x), u = true);
      },
      o(x) {
        he(o.$$.fragment, x), u = false;
      },
      d(x) {
        x && pe(t), $t(o), h && h.d(), c = false, m();
      }
    };
  }
  function Ci(e) {
    let t, n;
    function r(l, o) {
      return o & 2 && (t = null), t == null && (t = !!Ac(l[1])), t ? Ri : kc;
    }
    function i(l, o) {
      return o === Ri ? gc(l) : l;
    }
    let a = r(e, -1), s = a(i(e, a));
    return {
      c() {
        s.c(), n = vn();
      },
      m(l, o) {
        s.m(l, o), _e(l, n, o);
      },
      p(l, o) {
        a === (a = r(l, o)) && s ? s.p(i(l, a), o) : (s.d(1), s = a(i(l, a)), s && (s.c(), s.m(n.parentNode, n)));
      },
      d(l) {
        l && pe(n), s.d(l);
      }
    };
  }
  function kc(e) {
    let t, n, r = e[1].name() + "", i;
    return {
      c() {
        t = de("div"), n = Ze("Unknown File Type: "), i = Ze(r), Q(t, "class", "unknown-file-type svelte-qx1job");
      },
      m(a, s) {
        _e(a, t, s), ae(t, n), ae(t, i);
      },
      p(a, s) {
        s & 2 && r !== (r = a[1].name() + "") && yn(i, r);
      },
      d(a) {
        a && pe(t);
      }
    };
  }
  function Ri(e) {
    let t, n, r, i, a;
    return {
      c() {
        t = de("img"), Q(t, "class", "preview-image svelte-qx1job"), vr(t.src, n = e[6]) || Q(t, "src", n), Q(t, "alt", r = "preview for " + e[1].path);
      },
      m(s, l) {
        _e(s, t, l), i || (a = pt(t, "load", Ec), i = true);
      },
      p(s, l) {
        l & 2 && !vr(t.src, n = s[6]) && Q(t, "src", n), l & 2 && r !== (r = "preview for " + s[1].path) && Q(t, "alt", r);
      },
      d(s) {
        s && pe(t), i = false, a();
      }
    };
  }
  function Sc(e) {
    let t, n, r, i;
    const a = [
      yc,
      vc
    ], s = [];
    function l(o, f) {
      return o[0] !== null ? 0 : 1;
    }
    return t = l(e), n = s[t] = a[t](e), {
      c() {
        n.c(), r = vn();
      },
      m(o, f) {
        s[t].m(o, f), _e(o, r, f), i = true;
      },
      p(o, [f]) {
        let d = t;
        t = l(o), t === d ? s[t].p(o, f) : (Tt(), he(s[d], 1, 1, () => {
          s[d] = null;
        }), Ct(), n = s[t], n ? n.p(o, f) : (n = s[t] = a[t](o), n.c()), le(n, 1), n.m(r.parentNode, r));
      },
      i(o) {
        i || (le(n), i = true);
      },
      o(o) {
        he(n), i = false;
      },
      d(o) {
        o && pe(r), s[t].d(o);
      }
    };
  }
  function Ec(e) {
    const t = e.target;
    t.width = t.naturalWidth, t.height = t.naturalHeight, t.style["aspect-ratio"] = `${t.naturalWidth} / ${t.naturalHeight}`;
  }
  function Ac(e) {
    return e.path.endsWith(".png") || e.path.endsWith(".jpg") || e.path.endsWith(".bmp");
  }
  function Tc(e) {
    return e.path.endsWith(".png") ? "image/png" : e.path.endsWith(".jpg") ? "image/jpeg" : e.path.endsWith(".bmp") ? "image/bmp" : null;
  }
  function Cc(e, t, n) {
    let r = null, i = null, a = null;
    async function s() {
      if (r === null)
        throw Error("archive has not been loaded");
      const f = new Bo(), d = new dl(f);
      for (const w of r.iterDfs())
        if (w.isFile) {
          const k = new $o(w.data);
          await d.add(w.path, k);
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
  class Rc extends ar {
    constructor(t) {
      super(), sr(this, t, Cc, Sc, ir, {});
    }
  }
  new Rc({
    target: document.getElementById("app")
  });
})();
