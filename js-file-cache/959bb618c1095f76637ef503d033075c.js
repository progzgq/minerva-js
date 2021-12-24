!function (a) {
  minerva_hook.beforeFunction("null", this, arguments);

  function b(d) {
    minerva_hook.beforeFunction("b", this, arguments);
    if (c[d]) return c[d].exports;
    var e = c[d] = {
      exports: {},
      id: d,
      loaded: !1
    };
    _minerva_ret = (a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports);
    minerva_hook.afterFunction("b", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var c = {};
  _minerva_ret = (b.m = a, b.c = c, b.p = "", b(0));
  minerva_hook.afterFunction("null", this, {
    c: c,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}([function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(1);
  a.exports = d;
  var e = window.lib || (window.lib = {});
  e.es6polyfill = d;
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e
  });
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(2);
  a.exports = {
    Promise: d
  };
  minerva_hook.afterFunction("null", this, {
    d: d
  });
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  a.exports = c(3);
  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  c(4), c(18), c(31), c(37), a.exports = c(17).Promise;
  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(5),
      e = {};
  e[c(7)("toStringTag")] = "z", e + "" != "[object z]" && c(11)(Object.prototype, "toString", function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = "[object " + d(this) + "]";
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, !0);
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(6),
      e = c(7)("toStringTag"),
      f = "Arguments" == d(function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = arguments;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b, c, g;
    _minerva_ret = void 0 === a ? "Undefined" : null === a ? "Null" : "string" == typeof (c = (b = Object(a))[e]) ? c : f ? d(b) : "Object" == (g = d(b)) && "function" == typeof b.callee ? "Arguments" : g;
    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c,
      g: g,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  var c = {}.toString;

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = c.call(a).slice(8, -1);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    c: c
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(8)("wks"),
      e = c(10),
      f = c(9).Symbol,
      g = "function" == typeof f;

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = d[a] || (d[a] = g && f[a] || (g ? f : e)("Symbol." + a));
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(9),
      e = "__core-js_shared__",
      f = d[e] || (d[e] = {});

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = f[a] || (f[a] = {});
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  var c = a.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = c);
  minerva_hook.afterFunction("null", this, {
    c: c
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  var c = 0,
      d = Math.random();

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = "Symbol(".concat(void 0 === a ? "" : a, ")_", (++c + d).toString(36));
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    c: c,
    d: d
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(9),
      e = c(12),
      f = c(10)("src"),
      g = "toString",
      h = Function[g],
      i = ("" + h).split(g);
  c(17).inspectSource = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = h.call(a);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, (a.exports = function (a, b, c, g) {
    minerva_hook.beforeFunction("null", this, arguments);
    "function" == typeof c && (c.hasOwnProperty(f) || e(c, f, a[b] ? "" + a[b] : i.join(String(b))), c.hasOwnProperty("name") || e(c, "name", b)), a === d ? a[b] = c : g ? a[b] ? a[b] = c : e(a, b, c) : (delete a[b], e(a, b, c));
    minerva_hook.afterFunction("null", this, {});
  })(Function.prototype, g, function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = "function" == typeof this && this[f] || h.call(this);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  });
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(13),
      e = c(14);
  a.exports = c(15) ? function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = d.setDesc(a, b, e(1, c));
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  } : function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = (a[b] = c, a);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  var c = Object;
  a.exports = {
    create: c.create,
    getProto: c.getPrototypeOf,
    isEnum: {}.propertyIsEnumerable,
    getDesc: c.getOwnPropertyDescriptor,
    setDesc: c.defineProperty,
    setDescs: c.defineProperties,
    getKeys: c.keys,
    getNames: c.getOwnPropertyNames,
    getSymbols: c.getOwnPropertySymbols,
    each: [].forEach
  };
  minerva_hook.afterFunction("null", this, {
    c: c
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  a.exports = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      enumerable: !(1 & a),
      configurable: !(2 & a),
      writable: !(4 & a),
      value: b
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  a.exports = !c(16)(function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = 7 != Object.defineProperty({}, "a", {
      get: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = 7;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }).a;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  });
  minerva_hook.afterFunction("null", this, {});
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      return !!a();
    } catch (b) {
      return !0;
    }

    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {});
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  var c = a.exports = {
    version: "2.0.2"
  };
  "number" == typeof __e && (__e = c);
  minerva_hook.afterFunction("null", this, {
    c: c
  });
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(19)(!0);
  c(22)(String, "String", function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    this._t = String(a), this._i = 0;
    minerva_hook.afterFunction("null", this, {});
  }, function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var a,
        b = this._t,
        c = this._i;
    _minerva_ret = c >= b.length ? {
      value: void 0,
      done: !0
    } : (a = d(b, c), this._i += a.length, {
      value: a,
      done: !1
    });
    minerva_hook.afterFunction("null", this, {
      a: a,
      b: b,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  });
  minerva_hook.afterFunction("null", this, {
    d: d
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(20),
      e = c(21);

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);

    _minerva_ret = function (b, c) {
      minerva_hook.beforeFunction("null", this, arguments);
      var f,
          g,
          h = String(e(b)),
          i = d(c),
          j = h.length;
      _minerva_ret = 0 > i || i >= j ? a ? "" : void 0 : (f = h.charCodeAt(i), 55296 > f || f > 56319 || i + 1 === j || (g = h.charCodeAt(i + 1)) < 56320 || g > 57343 ? a ? h.charAt(i) : f : a ? h.slice(i, i + 2) : (f - 55296 << 10) + (g - 56320) + 65536);
      minerva_hook.afterFunction("null", this, {
        f: f,
        g: g,
        h: h,
        i: i,
        j: j,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  var c = Math.ceil,
      d = Math.floor;

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = isNaN(a = +a) ? 0 : (a > 0 ? d : c)(a);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    c: c,
    d: d
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (void 0 == a) throw TypeError("Can't call method on  " + a);
    _minerva_ret = a;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var d = c(23),
      e = c(24),
      f = c(11),
      g = c(12),
      h = c(27),
      i = c(28),
      j = c(29),
      k = c(30),
      l = c(13).getProto,
      m = c(7)("iterator"),
      n = !([].keys && "next" in [].keys()),
      o = "@@iterator",
      p = "keys",
      q = "values",
      r = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = this;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  a.exports = function (a, b, c, s, t, u, v) {
    minerva_hook.beforeFunction("null", this, arguments);
    j(c, b, s);

    var w,
        x,
        y,
        z = function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (!n && a in D) return D[a];

      switch (a) {
        case p:
          return function () {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = new c(this, a);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

        case q:
          return function () {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = new c(this, a);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };
      }

      _minerva_ret = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = new c(this, a);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        A = b + " Iterator",
        B = t == q,
        C = !1,
        D = a.prototype,
        E = D[m] || D[o] || t && D[t],
        F = E || z(t),
        G = t ? B ? z("entries") : F : void 0,
        H = "Array" == b ? D.entries || E : E;

    if (H && (y = l(H.call(new a())), y !== Object.prototype && (k(y, A, !0), d || h(y, m) || g(y, m, r))), B && E && E.name !== q && (C = !0, F = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = E.call(this);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), d && !v || !n && !C && D[m] || g(D, m, F), i[b] = F, i[A] = r, t) if (w = {
      values: B ? F : z(q),
      keys: u ? F : z(p),
      entries: G
    }, v) for (x in w) x in D || f(D, x, w[x]);else e(e.P + e.F * (n || C), b, w);
    _minerva_ret = w;
    minerva_hook.afterFunction("null", this, {
      w: w,
      x: x,
      y: y,
      z: z,
      A: A,
      B: B,
      C: C,
      D: D,
      E: E,
      F: F,
      G: G,
      H: H,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
    l: l,
    m: m,
    n: n,
    o: o,
    p: p,
    q: q,
    r: r
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  a.exports = !1;
  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);

  var d = c(9),
      e = c(17),
      f = c(12),
      g = c(11),
      h = c(25),
      i = "prototype",
      j = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    var k,
        l,
        m,
        n,
        o = a & j.F,
        p = a & j.G,
        q = a & j.S,
        r = a & j.P,
        s = a & j.B,
        t = p ? d : q ? d[b] || (d[b] = {}) : (d[b] || {})[i],
        u = p ? e : e[b] || (e[b] = {}),
        v = u[i] || (u[i] = {});
    p && (c = b);

    for (k in c) l = !o && t && void 0 !== t[k], m = (l ? t : c)[k], n = s && l ? h(m, d) : r && "function" == typeof m ? h(Function.call, m) : m, t && !l && g(t, k, m, a & j.U), u[k] != m && f(u, k, n), r && v[k] != m && (v[k] = m);

    minerva_hook.afterFunction("null", this, {
      k: k,
      l: l,
      m: m,
      n: n,
      o: o,
      p: p,
      q: q,
      r: r,
      s: s,
      t: t,
      u: u,
      v: v
    });
  };

  d.core = e, j.F = 1, j.G = 2, j.S = 4, j.P = 8, j.B = 16, j.W = 32, j.U = 64, j.R = 128, a.exports = j;
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(26);

  a.exports = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (d(a), void 0 === b) return a;

    switch (c) {
      case 1:
        return function (c) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = a.call(b, c);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

      case 2:
        return function (c, d) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = a.call(b, c, d);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

      case 3:
        return function (c, d, e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = a.call(b, c, d, e);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };
    }

    _minerva_ret = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = a.apply(b, arguments);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    if ("function" != typeof a) throw TypeError(a + " is not a function!");
    _minerva_ret = a;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  var c = {}.hasOwnProperty;

  a.exports = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = c.call(a, b);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    c: c
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);
  a.exports = {};
  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(13),
      e = c(14),
      f = c(30),
      g = {};
  c(12)(g, c(7)("iterator"), function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = this;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }), a.exports = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    a.prototype = d.create(g, {
      next: e(1, c)
    }), f(a, b + " Iterator");
    minerva_hook.afterFunction("null", this, {});
  };
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(13).setDesc,
      e = c(27),
      f = c(7)("toStringTag");

  a.exports = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    a && !e(a = c ? a : a.prototype, f) && d(a, f, {
      configurable: !0,
      value: b
    });
    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(32),
      e = c(11),
      f = c(9),
      g = c(12),
      h = c(28),
      i = c(7),
      j = i("iterator"),
      k = i("toStringTag"),
      l = h.Array;
  c(13).each.call(["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b,
        c = f[a],
        i = c && c.prototype;

    if (i) {
      i[j] || g(i, j, l), i[k] || g(i, k, a), h[a] = l;

      for (b in d) i[b] || e(i, b, d[b], !0);
    }

    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c,
      i: i
    });
  });
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
    l: l
  });
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(33),
      e = c(34),
      f = c(28),
      g = c(35);
  a.exports = c(22)(Array, "Array", function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    this._t = g(a), this._i = 0, this._k = b;
    minerva_hook.afterFunction("null", this, {});
  }, function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = this._t,
        b = this._k,
        c = this._i++;
    _minerva_ret = !a || c >= a.length ? (this._t = void 0, e(1)) : "keys" == b ? e(0, c) : "values" == b ? e(0, a[c]) : e(0, [c, a[c]]);
    minerva_hook.afterFunction("null", this, {
      a: a,
      b: b,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, "values"), f.Arguments = f.Array, d("keys"), d("values"), d("entries");
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(7)("unscopables"),
      e = Array.prototype;
  void 0 == e[d] && c(12)(e, d, {}), a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    e[d][a] = !0;
    minerva_hook.afterFunction("null", this, {});
  };
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  a.exports = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      value: b,
      done: !!a
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(36),
      e = c(21);

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = d(e(a));
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(6);
  a.exports = Object("z").propertyIsEnumerable(0) ? Object : function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = "String" == d(a) ? a.split("") : Object(a);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    d: d
  });
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var d,
      e,
      f,
      g = c(13),
      h = c(23),
      i = c(9),
      j = c(25),
      k = c(5),
      l = c(24),
      m = c(38),
      n = (c(39), c(26)),
      o = c(40),
      p = c(41),
      q = c(46),
      r = c(47).set,
      s = c(48),
      t = c(49).set,
      u = c(53),
      v = "Promise",
      w = i.TypeError,
      x = i.process,
      y = i[v],
      z = "process" == k(x),
      A = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = new y(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    });
    _minerva_ret = (a && (b.constructor = Object), y.resolve(b) === b);
    minerva_hook.afterFunction("null", this, {
      b: b,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      B = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    var a = !1,
        b = function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      var c = new y(a);
      _minerva_ret = (r(c, b.prototype), c);
      minerva_hook.afterFunction("null", this, {
        c: c,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    try {
      if (a = y && y.resolve && A(), r(b, y), b.prototype = g.create(y.prototype, {
        constructor: {
          value: b
        }
      }), b.resolve(5).then(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        minerva_hook.afterFunction("null", this, {});
      }) instanceof b || (a = !1), a && c(15)) {
        var d = !1;
        y.resolve(g.setDesc({}, "then", {
          get: function () {
            minerva_hook.beforeFunction("null", this, arguments);
            d = !0;
            minerva_hook.afterFunction("null", this, {
              d: d
            });
          }
        })), a = d;
      }
    } catch (e) {
      a = !1;
    }

    _minerva_ret = !!a;
    minerva_hook.afterFunction("null", this, {
      a: a,
      b: b,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      C = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = a === b || a === y && b === f;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      D = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b;
    _minerva_ret = m(a) && "function" == typeof (b = a.then) ? b : !1;
    minerva_hook.afterFunction("null", this, {
      b: b,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      E = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = C(y, a) ? new F(a) : new e(a);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      F = e = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b, c;
    this.promise = new a(function (a, d) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (void 0 !== b || void 0 !== c) throw w("Bad Promise constructor");
      b = a, c = d;
      minerva_hook.afterFunction("null", this, {});
    }), this.resolve = n(b), this.reject = n(c);
    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c
    });
  },
      G = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      a();
    } catch (b) {
      return {
        error: b
      };
    }

    minerva_hook.afterFunction("null", this, {});
  },
      H = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);

    if (!a._n) {
      a._n = !0;
      var c = a._c;
      u(function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var d = a._v, e = 1 == a._s, f = 0, g = function (b) {
          minerva_hook.beforeFunction("null", this, arguments);
          var c,
              f,
              g = e ? b.ok : b.fail,
              h = b.resolve,
              i = b.reject;

          try {
            g ? (e || (2 == a._h && K(a), a._h = 1), c = g === !0 ? d : g(d), c === b.promise ? i(w("Promise-chain cycle")) : (f = D(c)) ? f.call(c, h, i) : h(c)) : i(d);
          } catch (j) {
            i(j);
          }

          minerva_hook.afterFunction("null", this, {
            c: c,
            f: f,
            g: g,
            h: h,
            i: i
          });
        }; c.length > f;) g(c[f++]);

        a._c = [], a._n = !1, b && !a._h && I(a);
        minerva_hook.afterFunction("null", this, {});
      });
    }

    minerva_hook.afterFunction("null", this, {});
  },
      I = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.call(i, function () {
      minerva_hook.beforeFunction("null", this, arguments);

      if (J(a)) {
        var b,
            c,
            d = a._v;
        z ? x.emit("unhandledRejection", d, a) : (b = i.onunhandledrejection) ? b({
          promise: a,
          reason: d
        }) : (c = i.console) && c.error && c.error("Unhandled promise rejection", d), a._h = 2;
      }

      a._a = void 0;
      minerva_hook.afterFunction("null", this, {});
    });
    minerva_hook.afterFunction("null", this, {});
  },
      J = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b,
        c = a._a || a._c,
        d = 0;
    if (1 == a._h) return !1;

    for (; c.length > d;) if (b = c[d++], b.fail || !J(b.promise)) return !1;

    _minerva_ret = !0;
    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c,
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      K = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.call(i, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var b;
      z ? x.emit("rejectionHandled", a) : (b = i.onrejectionhandled) && b({
        promise: a,
        reason: a._v
      });
      minerva_hook.afterFunction("null", this, {
        b: b
      });
    });
    minerva_hook.afterFunction("null", this, {});
  },
      L = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = this;
    b._d || (b._d = !0, b = b._w || b, b._v = a, b._s = 2, b._a || (b._a = b._c.slice()), H(b, !0));
    minerva_hook.afterFunction("null", this, {
      b: b
    });
  },
      M = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b,
        c = this;

    if (!c._d) {
      c._d = !0, c = c._w || c;

      try {
        if (c === a) throw w("Promise can't be resolved itself");
        (b = D(a)) ? u(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var d = {
            _w: c,
            _d: !1
          };

          try {
            b.call(a, j(M, d, 1), j(L, d, 1));
          } catch (e) {
            L.call(d, e);
          }

          minerva_hook.afterFunction("null", this, {
            d: d
          });
        }) : (c._v = a, c._s = 1, H(c, !1));
      } catch (d) {
        L.call({
          _w: c,
          _d: !1
        }, d);
      }
    }

    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c
    });
  };

  B || (y = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    o(this, y, v, "_h"), n(a), d.call(this);

    try {
      a(j(M, this, 1), j(L, this, 1));
    } catch (b) {
      L.call(this, b);
    }

    minerva_hook.afterFunction("null", this, {});
  }, d = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
    minerva_hook.afterFunction("null", this, {});
  }, d.prototype = c(54)(y.prototype, {
    then: function (a, b) {
      minerva_hook.beforeFunction("null", this, arguments);
      var c = E(s(this, y));
      _minerva_ret = (c.ok = "function" == typeof a ? a : !0, c.fail = "function" == typeof b && b, this._c.push(c), this._a && this._a.push(c), this._s && H(this, !1), c.promise);
      minerva_hook.afterFunction("null", this, {
        c: c,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    "catch": function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = this.then(void 0, a);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }
  }), F = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = new d();
    this.promise = a, this.resolve = j(M, a, 1), this.reject = j(L, a, 1);
    minerva_hook.afterFunction("null", this, {
      a: a
    });
  }), l(l.G + l.W + l.F * !B, {
    Promise: y
  }), c(30)(y, v), c(55)(v), f = c(17)[v], l(l.S + l.F * !B, v, {
    reject: function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      var b = E(this),
          c = b.reject;
      _minerva_ret = (c(a), b.promise);
      minerva_hook.afterFunction("null", this, {
        b: b,
        c: c,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }
  }), l(l.S + l.F * (h || !B || A(!0)), v, {
    resolve: function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (a instanceof y && C(a.constructor, this)) return a;
      var b = E(this),
          c = b.resolve;
      _minerva_ret = (c(a), b.promise);
      minerva_hook.afterFunction("null", this, {
        b: b,
        c: c,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }
  }), l(l.S + l.F * !(B && c(56)(function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    y.all(a)["catch"](function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    });
    minerva_hook.afterFunction("null", this, {});
  })), v, {
    all: function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      var b = this,
          c = E(b),
          d = c.resolve,
          e = c.reject,
          f = G(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var c = q(a),
            f = c.length,
            h = Array(f);
        f ? g.each.call(c, function (a, c) {
          minerva_hook.beforeFunction("null", this, arguments);
          var g = !1;
          b.resolve(a).then(function (a) {
            minerva_hook.beforeFunction("null", this, arguments);
            g || (g = !0, h[c] = a, --f || d(h));
            minerva_hook.afterFunction("null", this, {});
          }, e);
          minerva_hook.afterFunction("null", this, {
            g: g
          });
        }) : d(h);
        minerva_hook.afterFunction("null", this, {
          c: c,
          f: f,
          h: h
        });
      });
      _minerva_ret = (f && e(f.error), c.promise);
      minerva_hook.afterFunction("null", this, {
        b: b,
        c: c,
        d: d,
        e: e,
        f: f,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    race: function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      var b = this,
          c = E(b),
          d = c.reject,
          e = G(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        p(a, !1, function (a) {
          minerva_hook.beforeFunction("null", this, arguments);
          b.resolve(a).then(c.resolve, d);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {});
      });
      _minerva_ret = (e && d(e.error), c.promise);
      minerva_hook.afterFunction("null", this, {
        b: b,
        c: c,
        d: d,
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }
  });
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
    l: l,
    m: m,
    n: n,
    o: o,
    p: p,
    q: q,
    r: r,
    s: s,
    t: t,
    u: u,
    v: v,
    w: w,
    x: x,
    y: y,
    z: z,
    A: A,
    B: B,
    C: C,
    D: D,
    E: E,
    F: F,
    G: G,
    H: H,
    I: I,
    J: J,
    K: K,
    L: L,
    M: M
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = "object" == typeof a ? null !== a : "function" == typeof a;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(38);

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (!d(a)) throw TypeError(a + " is not an object!");
    _minerva_ret = a;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  a.exports = function (a, b, c, d) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (!(a instanceof b) || void 0 !== d && d in a) throw TypeError(c + ": incorrect invocation!");
    _minerva_ret = a;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(25),
      e = c(42),
      f = c(43),
      g = c(39),
      h = c(44),
      i = c(45);

  a.exports = function (a, b, c, j, k) {
    minerva_hook.beforeFunction("null", this, arguments);
    var l,
        m,
        n,
        o = k ? function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = a;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    } : i(a),
        p = d(c, j, b ? 2 : 1),
        q = 0;
    if ("function" != typeof o) throw TypeError(a + " is not iterable!");
    if (f(o)) for (l = h(a.length); l > q; q++) b ? p(g(m = a[q])[0], m[1]) : p(a[q]);else for (n = o.call(a); !(m = n.next()).done;) e(n, p, m.value, b);
    minerva_hook.afterFunction("null", this, {
      l: l,
      m: m,
      n: n,
      o: o,
      p: p,
      q: q
    });
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(39);

  a.exports = function (a, b, c, e) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      return e ? b(d(c)[0], c[1]) : b(c);
    } catch (f) {
      var g = a["return"];
      throw void 0 !== g && d(g.call(a)), f;
    }

    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    d: d
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(28),
      e = c(7)("iterator"),
      f = Array.prototype;

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = void 0 !== a && (d.Array === a || f[e] === a);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(20),
      e = Math.min;

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = a > 0 ? e(d(a), 9007199254740991) : 0;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(5),
      e = c(7)("iterator"),
      f = c(28);

  a.exports = c(17).getIteratorMethod = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = void 0 != a ? a[e] || a["@@iterator"] || f[d(a)] : void 0;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(41);

  a.exports = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    var c = [];
    _minerva_ret = (d(a, !1, c.push, c, b), c);
    minerva_hook.afterFunction("null", this, {
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);

  var d = c(13).getDesc,
      e = c(38),
      f = c(39),
      g = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (f(a), !e(b) && null !== b) throw TypeError(b + ": can't set as prototype!");
    minerva_hook.afterFunction("null", this, {});
  };

  a.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function (a, b, e) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        e = c(25)(Function.call, d(Object.prototype, "__proto__").set, 2), e(a, []), b = !(a instanceof Array);
      } catch (f) {
        b = !0;
      }

      _minerva_ret = function (a, c) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (g(a, c), b ? a.__proto__ = c : e(a, c), a);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }({}, !1) : void 0),
    check: g
  };
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(39),
      e = c(26),
      f = c(7)("species");

  a.exports = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    var c,
        g = d(a).constructor;
    _minerva_ret = void 0 === g || void 0 == (c = d(g)[f]) ? b : e(c);
    minerva_hook.afterFunction("null", this, {
      c: c,
      g: g,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);

  var d,
      e,
      f,
      g = c(25),
      h = c(50),
      i = c(51),
      j = c(52),
      k = c(9),
      l = k.process,
      m = k.setImmediate,
      n = k.clearImmediate,
      o = k.MessageChannel,
      p = 0,
      q = {},
      r = "onreadystatechange",
      s = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = +this;

    if (q.hasOwnProperty(a)) {
      var b = q[a];
      delete q[a], b();
    }

    minerva_hook.afterFunction("null", this, {
      a: a
    });
  },
      t = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    s.call(a.data);
    minerva_hook.afterFunction("null", this, {});
  };

  m && n || (m = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var b = [], c = 1; arguments.length > c;) b.push(arguments[c++]);

    _minerva_ret = (q[++p] = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      h("function" == typeof a ? a : Function(a), b);
      minerva_hook.afterFunction("null", this, {});
    }, d(p), p);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    delete q[a];
    minerva_hook.afterFunction("null", this, {});
  }, "process" == c(6)(l) ? d = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    l.nextTick(g(s, a, 1));
    minerva_hook.afterFunction("null", this, {});
  } : o ? (e = new o(), f = e.port2, e.port1.onmessage = t, d = g(f.postMessage, f, 1)) : k.addEventListener && "function" == typeof postMessage && !k.importScripts ? (d = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    k.postMessage(a + "", "*");
    minerva_hook.afterFunction("null", this, {});
  }, k.addEventListener("message", t, !1)) : d = r in j("script") ? function (a) {
    minerva_hook.beforeFunction("null", this, arguments);

    i.appendChild(j("script"))[r] = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      i.removeChild(this), s.call(a);
      minerva_hook.afterFunction("null", this, {});
    };

    minerva_hook.afterFunction("null", this, {});
  } : function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    setTimeout(g(s, a, 1), 0);
    minerva_hook.afterFunction("null", this, {});
  }), a.exports = {
    set: m,
    clear: n
  };
  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
    l: l,
    m: m,
    n: n,
    o: o,
    p: p,
    q: q,
    r: r,
    s: s,
    t: t
  });
}, function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  a.exports = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    var d = void 0 === c;

    switch (b.length) {
      case 0:
        return d ? a() : a.call(c);

      case 1:
        return d ? a(b[0]) : a.call(c, b[0]);

      case 2:
        return d ? a(b[0], b[1]) : a.call(c, b[0], b[1]);

      case 3:
        return d ? a(b[0], b[1], b[2]) : a.call(c, b[0], b[1], b[2]);

      case 4:
        return d ? a(b[0], b[1], b[2], b[3]) : a.call(c, b[0], b[1], b[2], b[3]);
    }

    _minerva_ret = a.apply(c, b);
    minerva_hook.afterFunction("null", this, {
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  a.exports = c(9).document && document.documentElement;
  minerva_hook.afterFunction("null", this, {});
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(38),
      e = c(9).document,
      f = d(e) && d(e.createElement);

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = f ? e.createElement(a) : {};
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);

  var d,
      e,
      f,
      g = c(9),
      h = c(49).set,
      i = g.MutationObserver || g.WebKitMutationObserver,
      j = g.process,
      k = g.Promise,
      l = "process" == c(6)(j),
      m = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var a, b, c;

    for (l && (a = j.domain) && (j.domain = null, a.exit()); d;) b = d.domain, c = d.fn, b && b.enter(), c(), b && b.exit(), d = d.next;

    e = void 0, a && a.enter();
    minerva_hook.afterFunction("null", this, {
      a: a,
      b: b,
      c: c
    });
  };

  if (l) f = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    j.nextTick(m);
    minerva_hook.afterFunction("null", this, {});
  };else if (i) {
    var n = 1,
        o = document.createTextNode("");
    new i(m).observe(o, {
      characterData: !0
    }), f = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      o.data = n = -n;
      minerva_hook.afterFunction("null", this, {});
    };
  } else f = k && k.resolve ? function () {
    minerva_hook.beforeFunction("null", this, arguments);
    k.resolve().then(m);
    minerva_hook.afterFunction("null", this, {});
  } : function () {
    minerva_hook.beforeFunction("null", this, arguments);
    h.call(g, m);
    minerva_hook.afterFunction("null", this, {});
  };

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = {
      fn: a,
      next: void 0,
      domain: l && j.domain
    };
    e && (e.next = b), d || (d = b, f()), e = b;
    minerva_hook.afterFunction("null", this, {
      b: b
    });
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g,
    h: h,
    i: i,
    j: j,
    k: k,
    l: l,
    m: m
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(11);

  a.exports = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e in b) d(a, e, b[e], c);

    _minerva_ret = a;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d
  });
}, function (a, b, c) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(9),
      e = c(13),
      f = c(15),
      g = c(7)("species");

  a.exports = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = d[a];
    f && b && !b[g] && e.setDesc(b, g, {
      configurable: !0,
      get: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      b: b
    });
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e,
    f: f,
    g: g
  });
}, function (a, b, c) {
  minerva_hook.beforeFunction("null", this, arguments);
  var d = c(7)("iterator"),
      e = !1;

  try {
    var f = [7][d]();
    f["return"] = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      e = !0;
      minerva_hook.afterFunction("null", this, {
        e: e
      });
    }, Array.from(f, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      throw 2;
      minerva_hook.afterFunction("null", this, {});
    });
  } catch (g) {}

  a.exports = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (!b && !e) return !1;
    var c = !1;

    try {
      var f = [7],
          g = f[d]();
      g.next = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        c = !0;
        minerva_hook.afterFunction("null", this, {
          c: c
        });
      }, f[d] = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = g;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, a(f);
    } catch (h) {}

    _minerva_ret = c;
    minerva_hook.afterFunction("null", this, {
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    d: d,
    e: e
  });
}]);