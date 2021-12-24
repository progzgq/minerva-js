/*!
Copyright 2015, KISSY v6.2.4
MIT Licensed
*/
!function e(t, n, r) {
  minerva_hook.beforeFunction("e", this, arguments);

  function i(a, u) {
    minerva_hook.beforeFunction("i", this, arguments);

    if (!n[a]) {
      if (!t[a]) {
        var s = "function" == typeof require && require;
        if (!u && s) return s(a, !0);
        if (o) return o(a, !0);
        throw new Error("Cannot find module '" + a + "'");
      }

      var c = n[a] = {
        exports: {}
      };
      t[a][0].call(c.exports, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = t[a][1][e];
        _minerva_ret = i(n ? n : e);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, c, c.exports, e, t, n, r);
    }

    _minerva_ret = n[a].exports;
    minerva_hook.afterFunction("i", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  for (var o = "function" == typeof require && require, a = 0; a < r.length; a++) i(r[a]);

  _minerva_ret = i;
  minerva_hook.afterFunction("e", this, {
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}({
  1: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      minerva_hook.afterFunction("t", this, {});
    }

    var n = e("runtime"),
        r = e("querystring"),
        i = e("util"),
        o = e("path"),
        a = e("url"),
        u = e("ua"),
        s = e("feature");
    e("loader");
    var c = e("logger-manager");
    e("meta"), n.add("querystring", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = r;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("util", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = i;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("util-base", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = i;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("util-extra", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = i;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("path", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = o;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("url", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = a;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("ua", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = u;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("feature", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = s;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("io-script", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = n.getScript;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), n.add("logger-manager", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = c;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }), location && -1 !== (location.search || "").indexOf("ks-debug") && (n.Config.debug = !0), n.addMember("UA", u), n.addMember("Feature", s), i.mix(n, i), n.addMember("getLogger", c.getLogger), n.addMember("log", n.Config.debug ? c.log : t), n.addMember("error", n.Config.debug ? c.error : t);
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c
    });
  }, {
    feature: 2,
    loader: 4,
    "logger-manager": 21,
    meta: 23,
    path: 24,
    querystring: 26,
    runtime: 28,
    ua: 29,
    url: 31,
    util: 33
  }],
  2: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("./lib/feature");
    t.exports = n;
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "./lib/feature": 3
  }],
  3: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = arguments[1].toUpperCase();
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      if (-1 !== e.indexOf("-") && (e = e.replace(y, n)), e in g) return g[e];
      if (!o || e in o) g[e] = {
        propertyName: e,
        propertyNamePrefix: ""
      };else {
        for (var t, r = e.charAt(0).toUpperCase() + e.slice(1), i = 0; l > i; i++) {
          var a = c[i];
          t = a + r, t in o && (g[e] = {
            propertyName: t,
            propertyNamePrefix: a
          });
        }

        g[e] = g[e] || null;
      }
      _minerva_ret = g[e];
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var i,
        o,
        a,
        u,
        s = window,
        c = ["Webkit", "Moz", "O", "ms"],
        l = c.length,
        f = s.document || {},
        d = f && f.documentElement,
        m = !0,
        p = !1,
        h = "ontouchstart" in f && !window.callPhantom,
        g = {},
        v = f.documentMode;
    d && (d.querySelector && 8 !== v && (p = !0), o = d.style, m = "classList" in d, i = "msPointerEnabled" in navigator, a = "pointerEnabled" in navigator);
    var y = /-([a-z])/gi;
    t.exports = {
      isMsPointerSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = i;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isPointerSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = a;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isTouchEventSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = h;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isTouchGestureSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = h || a || i;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isDeviceMotionSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = !!s.DeviceMotionEvent;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isHashChangeSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "onhashchange" in s && (!v || v > 7);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isInputEventSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "oninput" in s && (!v || v > 9);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isTransform3dSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        if (void 0 !== u) return u;
        if (d && r("transform")) try {
          var e = f.createElement("p"),
              t = r("transform").propertyName;
          d.insertBefore(e, d.firstChild), e.style[t] = "translate3d(1px,1px,1px)";
          var n = s.getComputedStyle(e),
              i = n.getPropertyValue(t) || n[t];
          d.removeChild(e), u = void 0 !== i && i.length > 0 && "none" !== i;
        } catch (o) {
          u = !0;
        } else u = !1;
        _minerva_ret = u;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isClassListSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = m;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isQuerySelectorSupported: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = p;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getCssVendorInfo: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = r(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m,
      p: p,
      h: h,
      g: g,
      v: v,
      y: y
    });
  }, {}],
  4: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("runtime"),
        r = e("io-script"),
        i = e("./lib/fns"),
        o = e("./lib/setup"),
        a = e("./lib/config"),
        u = e("./lib/utils"),
        s = (e("./lib/data-structure"), e("./lib/configs"), e("./lib/combo-loader")),
        c = e("./lib/loader");
    e("./lib/init"), e("./lib/i18n"), o.config = a, o.Utils = u, o.getScript = r, o.ComboLoader = s, o.WaitingModules = c.WaitingModules, n.addMember("config", a), n.addMember("getScript", r), n.addMember("add", c.add), n.addMember("use", c.use), n.addMember("require", c.require), n.addMember("setImmediate", i.setImmediate), t.exports = o;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c
    });
  }, {
    "./lib/combo-loader": 5,
    "./lib/config": 6,
    "./lib/configs": 7,
    "./lib/data-structure": 8,
    "./lib/fns": 9,
    "./lib/i18n": 10,
    "./lib/init": 11,
    "./lib/loader": 12,
    "./lib/setup": 13,
    "./lib/utils": 15,
    "io-script": 16,
    runtime: 28
  }],
  5: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, t, n, r, i) {
      minerva_hook.beforeFunction("n", this, arguments);

      function o() {
        minerva_hook.beforeFunction("o", this, arguments);
        --a || n(f, u);
        minerva_hook.afterFunction("o", this, {});
      }

      var a = t && t.length,
          u = [],
          f = [];
      c.each(t, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            a = {
          timeout: i,
          success: function () {
            minerva_hook.beforeFunction("null", this, arguments);
            f.push(t), n && b && (l.registerModule(e, n.name, b.factory, b.config), b = void 0), o();
            minerva_hook.afterFunction("null", this, {});
          },
          error: function () {
            minerva_hook.beforeFunction("null", this, arguments);
            u.push(t), o();
            minerva_hook.afterFunction("null", this, {});
          },
          charset: r
        };
        t.combine || (n = t.mods[0], "css" === n.getType() ? n = void 0 : d && (x = n.name, w = new Date().valueOf(), a.attrs = {
          "data-mod-name": n.name
        })), s.Config.loadModsFn(t, a);
        minerva_hook.afterFunction("null", this, {
          n: n,
          a: a
        });
      });
      minerva_hook.afterFunction("n", this, {
        a: a,
        u: u,
        f: f
      });
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      c.mix(this, {
        runtime: e,
        waitingModules: t
      });
      minerva_hook.afterFunction("r", this, {});
    }

    function i(e, t) {
      minerva_hook.beforeFunction("i", this, arguments);

      if (!e && "function" == typeof t && (t.length > 1 || t.define)) {
        var n = l.getRequiresFromFn(t);
        n.length && (e = e || {}, e.requires = n);
      } else e && e.requires && !e.cjs && (e.cjs = 0);

      _minerva_ret = e;
      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o() {
      minerva_hook.beforeFunction("o", this, arguments);
      var e,
          t,
          n,
          r,
          i = s.Env.host.document.getElementsByTagName("script");

      for (t = i.length - 1; t >= 0; t--) if (r = i[t], "interactive" === r.readyState) {
        e = r;
        break;
      }

      _minerva_ret = n = e ? e.getAttribute("data-mod-name") : x;
      minerva_hook.afterFunction("o", this, {
        e: e,
        t: t,
        n: n,
        r: r,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      c.each(e, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = [];
        c.each(e.mods, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          e.status === h && t.push(e.name);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      });
      minerva_hook.afterFunction("a", this, {});
    }

    function u(e, t) {
      minerva_hook.beforeFunction("u", this, arguments);
      e = e.split(/\//), t = t.split(/\//);

      for (var n = Math.min(e.length, t.length), r = 0; n > r && e[r] === t[r]; r++);

      _minerva_ret = e.slice(0, r).join("/") + "/";
      minerva_hook.afterFunction("u", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var s = e("runtime/index"),
        c = e("./fns"),
        l = e("./utils"),
        f = e("./setup").Status,
        d = c.ieMode < 10,
        m = l.getHash,
        p = f.LOADING,
        h = f.LOADED,
        g = f.READY_TO_ATTACH,
        v = f.ERROR,
        y = new Date().valueOf();
    r.groupTag = y;
    var b, x, w;
    r.add = function (e, t, n, r, a) {
      minerva_hook.beforeFunction("null", this, arguments);

      if (3 === a && c.isArray(t)) {
        var u = t;
        t = n, n = {
          requires: u,
          cjs: 1
        };
      }

      "function" == typeof e || 1 === a ? (n = t, t = e, n = i(n, t), d ? (e = o(), l.registerModule(r, e, t, n), x = null, w = 0) : b = {
        factory: t,
        config: n
      }) : (d ? (x = null, w = 0) : b = void 0, n = i(n, t), l.registerModule(r, e, t, n));
      minerva_hook.afterFunction("null", this, {});
    }, c.mix(r.prototype, {
      use: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            r,
            i = this,
            o = s.Config.timeout,
            u = i.runtime;
        t = c.keys(i.calculate(e)), l.createModulesInfo(u, t), r = i.getComboUrls(t), c.each(r.css, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          n(u, e, function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            a(e), c.each(e, function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              c.each(e.mods, function (e) {
                minerva_hook.beforeFunction("null", this, arguments);
                l.registerModule(u, e.name, s.noop), e.notifyAll();
                minerva_hook.afterFunction("null", this, {});
              });
              minerva_hook.afterFunction("null", this, {});
            }), c.each(t, function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              c.each(e.mods, function (t) {
                minerva_hook.beforeFunction("null", this, arguments);
                var n = t.name + " is not loaded! can not find module in path : " + e.fullpath;
                console && console.error(n), t.status = v, t.notifyAll();
                minerva_hook.afterFunction("null", this, {
                  n: n
                });
              });
              minerva_hook.afterFunction("null", this, {});
            });
            minerva_hook.afterFunction("null", this, {});
          }, e.charset, o);
          minerva_hook.afterFunction("null", this, {});
        }), c.each(r.js, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          n(u, e, function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            a(t), c.each(e, function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              c.each(e.mods, function (t) {
                minerva_hook.beforeFunction("null", this, arguments);

                if (!t.factory) {
                  var n = t.name + " is not loaded! can not find module in path : " + e.fullpath;
                  console && console.error(n), t.status = v;
                }

                t.notifyAll();
                minerva_hook.afterFunction("null", this, {});
              });
              minerva_hook.afterFunction("null", this, {});
            });
            minerva_hook.afterFunction("null", this, {});
          }, e.charset, o);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          i: i,
          o: o,
          u: u
        });
      },
      calculate: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            i,
            o,
            a,
            u = this,
            s = u.waitingModules,
            c = u.runtime;

        for (n = n || {}, t = t || {}, r = 0; r < e.length; r++) i = e[r], t[i] || (t[i] = 1, o = l.createModuleInfo(c, i), a = o.status, a >= g || (a !== h && (s.contains(i) || (a !== p && (o.status = p, n[i] = 1), o.wait(function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          s.remove(e.name), s.notifyAll();
          minerva_hook.afterFunction("null", this, {});
        }), s.add(i))), u.calculate(o.getNormalizedRequires(), t, n)));

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i,
          o: o,
          a: a,
          u: u,
          s: s,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getComboMods: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n, r, i, o, a, s, f, d, m, p, h, g, v, b = {}, x = this.runtime, w = 0, M = e.length; M > w; ++w) {
          r = e[w], i = l.createModuleInfo(x, r), a = i.getType(), v = i.getFullPath(), o = i.getPackage(), h = o.name, m = o.getCharset(), d = o.getTag(), g = o.getGroup(), p = o.getPrefixUriForCombo(), n = o.getPackageUri();
          var A = h;

          if ((i.canBeCombined = o.isCombine() && c.startsWith(v, p)) && g) {
            A = g + "_" + m + "_" + y;
            var E;
            (E = t[A]) ? E.isSameOriginAs(n) ? E.setPath(u(E.getPath(), n.getPath())) : (A = h, t[h] = n) : t[A] = n.clone();
          } else t[h] = n;

          s = b[a] = b[a] || {}, (f = s[A]) ? (1 !== f.tags.length || f.tags[0] !== d) && f.tags.push(d) : (f = s[A] = [], f.charset = m, f.tags = [d]), f.push(i);
        }

        _minerva_ret = b;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getComboUrls: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.runtime,
            n = t.Config,
            r = n.comboPrefix,
            i = n.comboSep,
            o = n.comboMaxFileNum,
            a = n.comboMaxUrlLength,
            u = {},
            s = this.getComboMods(e, u),
            c = {};

        for (var l in s) {
          c[l] = {};

          for (var f in s[l]) {
            var d = [],
                p = [],
                h = s[l][f],
                g = h.tags,
                v = g.length > 1 ? m(g.join("")) : g[0],
                y = v ? "?t=" + encodeURIComponent(v) + "." + l : "",
                b = y.length,
                x = u[f].toString(),
                w = x.length,
                M = x + r,
                A = c[l][f] = [],
                E = M.length;
            A.charset = h.charset, A.mods = [];

            for (var q = function () {
              minerva_hook.beforeFunction("null", this, arguments);
              A.push({
                combine: 1,
                fullpath: M + d.join(i) + y,
                mods: p
              });
              minerva_hook.afterFunction("null", this, {});
            }, C = 0; C < h.length; C++) {
              var S = h[C];
              A.mods.push(S);
              var O = S.getFullPath();

              if (S.canBeCombined) {
                var k = O.slice(w).replace(/\?.*$/, "");
                d.push(k), p.push(S), (d.length > o || E + d.join(i).length + b > a) && (d.pop(), p.pop(), q(), d = [], p = [], C--);
              } else A.push({
                combine: 0,
                fullpath: O,
                mods: [S]
              });
            }

            d.length && q();
          }
        }

        _minerva_ret = c;
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r,
          i: i,
          o: o,
          a: a,
          u: u,
          s: s,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), t.exports = r;
    minerva_hook.afterFunction("null", this, {
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m,
      p: p,
      h: h,
      g: g,
      v: v,
      y: y,
      b: b,
      x: x,
      w: w
    });
  }, {
    "./fns": 9,
    "./setup": 13,
    "./utils": 15,
    "runtime/index": 28
  }],
  6: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    var n = e("runtime/index"),
        r = e("./fns"),
        i = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var i,
          o,
          a,
          u = n,
          s = n.Config,
          c = s.fns;
      _minerva_ret = (r.isObject(e) ? r.each(e, function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        a = c[t], a ? a.call(u, e) : s[t] = e;
        minerva_hook.afterFunction("null", this, {});
      }) : (i = c[e], void 0 === t ? o = i ? i.call(u) : s[e] : i ? o = i.call(u, t) : s[e] = t), o);
      minerva_hook.afterFunction("null", this, {
        i: i,
        o: o,
        a: a,
        u: u,
        s: s,
        c: c,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    t.exports = i;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i
    });
  }, {
    "./fns": 9,
    "runtime/index": 28
  }],
  7: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      var t;
      _minerva_ret = (e = e.replace(/\\/g, "/"), "/" !== e.charAt(e.length - 1) && (e += "/"), n ? t = n.resolve(e) : (l.startsWith(e, "file:") || (e = "file:" + e), t = new a(e)), t);
      minerva_hook.afterFunction("t", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var n,
        r,
        i = e("runtime"),
        o = e("io-script"),
        a = e("./uri"),
        u = e("./utils"),
        s = e("./setup").Status,
        c = e("./data-structure"),
        l = e("./fns"),
        f = i.Env.host,
        d = f.location,
        m = i.Config.fns;
    !l.nodejs && d && (r = d.href) && (n = new a(r)), i.Config.loadModsFn = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      o(e.fullpath, t);
      minerva_hook.afterFunction("null", this, {});
    }, m.packages = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          r = this.Config,
          o = r.packages = r.packages || {};
      _minerva_ret = e ? void l.each(e, function (e, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        n = e.name || r;
        var a = t(e.base || e.path);
        e.name = n, e.base = a.toString(), e.baseUri = a, e.runtime = i, delete e.path, o[n] ? o[n].reset(e) : o[n] = new c.Package(e);
        minerva_hook.afterFunction("null", this, {
          n: n,
          a: a
        });
      }) : e === !1 ? void (r.packages = {}) : o;
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, m.modules = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this;
      e && l.each(e, function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = u.createModuleInfo(t, n, e);
        r.status === s.INIT && l.mix(r, e);
        minerva_hook.afterFunction("null", this, {
          r: r
        });
      });
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    }, m.base = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          r = this,
          i = r.Config;
      _minerva_ret = e ? (n = t(e), i.base = n.toString(), void (i.baseUri = n)) : i.base;
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m
    });
  }, {
    "./data-structure": 8,
    "./fns": 9,
    "./setup": 13,
    "./uri": 14,
    "./utils": 15,
    "io-script": 16,
    runtime: 28
  }],
  8: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, t) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = t in e ? e[t] : e.runtime.Config[t];
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      d.mix(this, e);
      minerva_hook.afterFunction("r", this, {});
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      var t = this;
      t.exports = {}, t.status = p.INIT, t.name = void 0, t.factory = void 0, t.cjs = 1, d.mix(t, e), t.waitedCallbacks = [];
      minerva_hook.afterFunction("i", this, {
        t: t
      });
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);

      for (var t = [], n = 0; n < e.length; n++) t[n] = e[n];

      _minerva_ret = t;
      minerva_hook.afterFunction("o", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);

      if ("function" == typeof e && (e = {
        success: e
      }), e && e.success) {
        var t = e.success;
        return e.success = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          t.apply(this, o(arguments).slice(1));
          minerva_hook.afterFunction("null", this, {});
        }, e.sync = 1, e;
      }

      minerva_hook.afterFunction("a", this, {});
    }

    function u(e) {
      minerva_hook.beforeFunction("u", this, arguments);
      var t = e.name,
          n = "." + e.getType(),
          r = "-min";
      _minerva_ret = (t = l.join(l.dirname(t), l.basename(t, n)), e.getPackage().isDebug() && (r = ""), t + r + n);
      minerva_hook.afterFunction("u", this, {
        t: t,
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function s(e, t) {
      minerva_hook.beforeFunction("s", this, arguments);
      var n,
          r = e.config("packages"),
          i = t + "/",
          o = "";

      for (n in r) d.startsWith(i, n + "/") && n.length > o.length && (o = n);

      _minerva_ret = r[o] || y;
      minerva_hook.afterFunction("s", this, {
        n: n,
        r: r,
        i: i,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var c = e("runtime/index"),
        l = e("path/index"),
        f = e("./uri"),
        d = e("./fns"),
        m = e("./setup"),
        p = m.Status,
        h = e("./utils"),
        g = {},
        v = "ignorePackageNameInUri";
    r.prototype = {
      constructor: r,
      reset: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        d.mix(this, e);
        minerva_hook.afterFunction("null", this, {});
      },
      getTag: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(this, "tag");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getName: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.name;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getBase: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(this, "base");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getPrefixUriForCombo: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.name;
        _minerva_ret = e.getBase() + (t && !e.isIgnorePackageNameInUri() ? t + "/" : "");
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getPackageUri: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = (e.packageUri = new f(this.getPrefixUriForCombo()), e.packageUri);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getBaseUri: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(this, "baseUri");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isDebug: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(this, "debug");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isIgnorePackageNameInUri: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(this, v);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getCharset: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(this, "charset");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isCombine: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(this, "combine");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getGroup: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(this, "group");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, g.Package = r, i.prototype = {
      kissy: 1,
      constructor: i,
      use: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e = h.getModNamesAsArray(e), c.use(h.normalDepModuleName(this.name, e), t));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolve: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.getFullPathUri().resolve(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolveByName: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = h.normalDepModuleName(this.name, e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      require: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        if ("string" == typeof e) return c.require(e, this.name);

        for (var n = e, r = 0; r < n.length; r++) n[r] = t.resolveByName(n[r]);

        var i = o(arguments);
        i[0] = n, i[1] = a(i[1]), c.use.apply(c, i);
        minerva_hook.afterFunction("null", this, {
          t: t,
          i: i
        });
      },
      wait: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.waitedCallbacks.push(e);
        minerva_hook.afterFunction("null", this, {});
      },
      notifyAll: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var e, t = this.waitedCallbacks.length, n = 0; t > n; n++) (e = this.waitedCallbacks[n])(this);

        this.waitedCallbacks = [];
        minerva_hook.afterFunction("null", this, {});
      },
      getType: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.type;
        _minerva_ret = (t || (t = ".css" === l.extname(e.name).toLowerCase() ? "css" : "js", e.type = t), t);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getFullPathUri: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            t,
            n,
            r,
            i,
            o,
            a = this;
        _minerva_ret = (a.fullPathUri || (a.fullpath ? t = new f(a.fullpath) : (r = a.getPackage(), n = r.getBaseUri(), o = a.getPath(), r.isIgnorePackageNameInUri() && (i = r.name) && (o = l.relative(i, o)), t = n.resolve(o), (e = a.getTag()) && (e += "." + a.getType(), t.query.set("t", e))), a.fullPathUri = t), a.fullPathUri);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          n: n,
          r: r,
          i: i,
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getFullPath: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            t = this;
        _minerva_ret = (t.fullpath || (e = t.getFullPathUri(), t.fullpath = e.toString()), t.fullpath);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getPath: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = e.path || (e.path = u(e));
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getName: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.name;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getPackage: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = e.packageInfo || (e.packageInfo = s(e.runtime, e.name));
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getTag: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = e.tag || e.getPackage().getTag();
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getCharset: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = e.charset || e.getPackage().getCharset();
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getRequiresWithAlias: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.requiresWithAlias,
            n = e.requires;
        _minerva_ret = n && 0 !== n.length ? (t || (e.requiresWithAlias = t = h.normalizeModNamesWithAlias(e.runtime, n, e.name)), t) : n || [];
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getRequiredMods: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.runtime;
        _minerva_ret = d.map(e.getNormalizedRequires(), function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = h.createModuleInfo(t, e);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getNormalizedRequires: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            t = this,
            n = t.normalizedRequiresStatus,
            r = t.status,
            i = t.requires;
        _minerva_ret = i && 0 !== i.length ? (e = t.normalizedRequires) && n === r ? e : (t.normalizedRequiresStatus = r, t.normalizedRequires = h.normalizeModNames(t.runtime, i, t.name), t.normalizedRequires) : i || [];
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          n: n,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, g.Module = i;
    var y = new r({
      name: "",
      runtime: c
    });
    m.Package = g.Package, m.Module = g.Module, t.exports = g;
    minerva_hook.afterFunction("null", this, {
      c: c,
      l: l,
      f: f,
      d: d,
      m: m,
      p: p,
      h: h,
      g: g,
      v: v,
      y: y
    });
  }, {
    "./fns": 9,
    "./setup": 13,
    "./uri": 14,
    "./utils": 15,
    "path/index": 24,
    "runtime/index": 28
  }],
  9: [function (e, t, n) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t = [];

      for (var n in e) t.push(n);

      _minerva_ret = t;
      minerva_hook.afterFunction("r", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      var t = 0;
      _minerva_ret = parseFloat(e.replace(/\./g, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = 0 === t++ ? "." : "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }));
      minerva_hook.afterFunction("i", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e, t, n) {
      minerva_hook.beforeFunction("o", this, arguments);

      function r() {
        minerva_hook.beforeFunction("r", this, arguments);
        minerva_hook.afterFunction("r", this, {});
      }

      var i = [].slice,
          o = i.call(arguments, 3),
          a = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var a = i.call(arguments);
        _minerva_ret = t.apply(this instanceof r ? this : n || this, e ? a.concat(o) : o.concat(a));
        minerva_hook.afterFunction("null", this, {
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      _minerva_ret = (r.prototype = t.prototype, a.prototype = new r(), a);
      minerva_hook.afterFunction("o", this, {
        i: i,
        o: o,
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      _minerva_ret = encodeURIComponent(String(e));
      minerva_hook.afterFunction("a", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function u(e) {
      minerva_hook.beforeFunction("u", this, arguments);
      _minerva_ret = decodeURIComponent(e.replace(/\+/g, " "));
      minerva_hook.afterFunction("u", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var s,
        c = e("runtime/index"),
        l = e("querystring"),
        f = c.Env.host,
        d = (f.navigator || {}).userAgent || "",
        m = Array.isArray || function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = "[object Array]" === Object.prototype.toString.call(e);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    (s = d.match(/Trident\/([\d.]*)/)) && (n.trident = i(s[1])), (s = d.match(/Gecko/)) && (n.gecko = .1, (s = d.match(/rv:([\d.]*)/)) && s[1] && (n.gecko = i(s[1]))), (s = d.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (v = s[1] || s[2]) && (n.ie = i(v), n.ieMode = f.document.documentMode || n.ie, n.trident = n.trident || 1), function () {
      minerva_hook.beforeFunction("null", this, arguments);

      function e() {
        minerva_hook.beforeFunction("e", this, arguments);

        for (var e, n = 0; e = t[n++];) e();

        n > 1 && (t = []), r = 0;
        minerva_hook.afterFunction("e", this, {});
      }

      var t = [],
          r = 0;

      n.setImmediate = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        t.push(e), r || (r = 1, i());
        minerva_hook.afterFunction("null", this, {});
      };

      var i;
      if ("function" == typeof setImmediate) i = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        setImmediate(e);
        minerva_hook.afterFunction("null", this, {});
      };else if ("undefined" != typeof MessageChannel) {
        var o = new MessageChannel();

        o.port1.onmessage = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          i = a, o.port1.onmessage = e, e();
          minerva_hook.afterFunction("null", this, {});
        };

        var a = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          o.port2.postMessage(0);
          minerva_hook.afterFunction("null", this, {});
        };

        i = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          setTimeout(e, 0), a();
          minerva_hook.afterFunction("null", this, {});
        };
      } else i = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        setTimeout(e, 0);
        minerva_hook.afterFunction("null", this, {});
      };
      minerva_hook.afterFunction("null", this, {
        t: t,
        r: r,
        i: i
      });
    }(), n.isArray = m, n.keys = r, n.bind = o(0, o, null, 0), n.indexOfArray = Array.prototype.indexOf ? function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = Array.prototype.indexOf.call(t, e);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    } : function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var n = 0, r = t.length; r > n; ++n) if (t[n] === e) return n;

      _minerva_ret = -1;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.map = Array.prototype.map ? function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = Array.prototype.map.call(e, t, n || this);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    } : function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var r = e.length, i = new Array(r), o = 0; r > o; o++) {
        var a = "string" == typeof e ? e.charAt(o) : e[o];
        (a || o in e) && (i[o] = t.call(n || this, a, o, e));
      }

      _minerva_ret = i;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.reduce = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      var r = e.length;
      if ("function" != typeof t) throw new TypeError("callback is not function!");
      if (0 === r && 2 === arguments.length) throw new TypeError("arguments invalid");
      var i,
          o = 0;
      if (arguments.length >= 3) i = n;else for (;;) {
        if (o in e) {
          i = e[o++];
          break;
        }

        if (o += 1, o >= r) throw new TypeError();
      }

      for (; r > o;) o in e && (i = t.call(void 0, i, e[o], o, e)), o++;

      _minerva_ret = i;
      minerva_hook.afterFunction("null", this, {
        r: r,
        i: i,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.isObject = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = "[object Object]" == Object.prototype.toString.call(e);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.isEmptyObject = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var t in e) if (void 0 !== t) return !1;

      _minerva_ret = !0;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.mix = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var n in t) e[n] = t[n];

      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.endsWith = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = e.length - t.length;
      _minerva_ret = n >= 0 && e.indexOf(t, n) == n;
      minerva_hook.afterFunction("null", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.startsWith = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = 0 === e.lastIndexOf(t, 0);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.each = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          i,
          o = 0;
      if (m(e)) for (i = e.length; i > o && t(e[o], o, e) !== !1; o++);else for (n = r(e), i = n.length; i > o && t(e[n[o]], n[o], e) !== !1; o++);
      minerva_hook.afterFunction("null", this, {
        n: n,
        i: i,
        o: o
      });
    };
    {
      var p = "",
          h = /^[\s\xa0]+|[\s\xa0]+$/g;
      String.prototype.trim ? function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = null == e ? p : String.prototype.trim.call(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      } : function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = null == e ? p : (e + "").replace(h, p);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };
    }
    n.param = l.stringify, n.unparam = l.parse, n.urlDecode = u, n.urlEncode = a;
    minerva_hook.afterFunction("null", this, {
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m
    });
  }, {
    querystring: 26,
    "runtime/index": 28
  }],
  10: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("runtime/index"),
        n = e("./loader");
    n.add("i18n", {
      alias: function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n + "/i18n/" + t.Config.lang;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n
    });
  }, {
    "./loader": 12,
    "runtime/index": 28
  }],
  11: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      _minerva_ret = new Function("return " + e)();
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var n = e.src || "";
      if (!n.match(h)) return 0;
      var r = e.getAttribute("data-config");
      r = r ? t(r) : {};
      var i,
          u,
          s = r.comboPrefix || d,
          c = r.comboSep || m,
          l = n.indexOf(s);

      if (-1 === l ? u = n.replace(p, "$1") : (u = n.substring(0, l), "/" !== u.charAt(u.length - 1) && (u += "/"), i = n.substring(l + s.length).split(c), o.each(i, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.match(h) ? (u += e.replace(p, "$1"), !1) : void 0;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      })), !("tag" in r)) {
        var g = n.lastIndexOf("?t=");

        if (-1 !== g) {
          var v = n.substring(g + 1);
          r.tag = a.getHash(f + v);
        }
      }

      _minerva_ret = (r.base = r.base || u, r);
      minerva_hook.afterFunction("n", this, {
        n: n,
        r: r,
        r: r,
        i: i,
        u: u,
        s: s,
        c: c,
        l: l,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r() {
      minerva_hook.beforeFunction("r", this, arguments);
      var e,
          t,
          r = l.getElementsByTagName("script");

      for (e = r.length - 1; e >= 0; e--) if (t = n(r[e])) return t;

      _minerva_ret = (console && console.error("must load kissy by file name in browser environment: seed.js or seed-min.js"), null);
      minerva_hook.afterFunction("r", this, {
        e: e,
        t: t,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var i = e("runtime/index"),
        o = e("./fns"),
        a = e("./utils"),
        u = e("./config"),
        s = e("./loader"),
        c = i.Env.host,
        l = c && c.document,
        f = "1450252392754",
        d = "??",
        m = ",",
        p = /^(.*)(seed|kissy|loader)(?:-min)?\.js[^\/]*/i,
        h = /(seed|kissy|loader)(?:-min)?\.js/i;
    u({
      comboPrefix: d,
      comboSep: m,
      charset: "utf-8",
      lang: "zh-cn"
    }), l && l.getElementsByTagName && u(o.mix({
      comboMaxUrlLength: 2e3,
      comboMaxFileNum: 40
    }, r())), c.define = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      t && o.isArray(t) ? n.define = 1 : "function" == typeof e && (e.define = 1), s.add(e, t, n);
      minerva_hook.afterFunction("null", this, {});
    };
    minerva_hook.afterFunction("null", this, {
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m,
      p: p,
      h: h
    });
  }, {
    "./config": 6,
    "./fns": 9,
    "./loader": 12,
    "./utils": 15,
    "runtime/index": 28
  }],
  12: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      i.mix(this, {
        fn: e,
        waitMods: {}
      });
      minerva_hook.afterFunction("n", this, {});
    }

    var r = e("runtime/index"),
        i = e("./fns"),
        o = e("./utils"),
        a = e("./combo-loader"),
        u = r.Env,
        s = i.setImmediate;
    n.prototype = {
      constructor: n,
      notifyAll: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.fn;
        t && i.isEmptyObject(e.waitMods) && (e.fn = null, t());
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      },
      add: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.waitMods[e] = 1;
        minerva_hook.afterFunction("null", this, {});
      },
      remove: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        delete this.waitMods[e];
        minerva_hook.afterFunction("null", this, {});
      },
      contains: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.waitMods[e];
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    var c = {};
    c.WaitingModules = n, i.mix(c, {
      add: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        a.add(e, t, n, r, arguments.length);
        minerva_hook.afterFunction("null", this, {});
      },
      use: function (e, t, i) {
        minerva_hook.beforeFunction("null", this, arguments);

        function u() {
          minerva_hook.beforeFunction("u", this, arguments);
          ++p;
          {
            var e,
                n = [];
            new Date().valueOf();
          }
          e = o.checkModsLoadRecursively(l, r, void 0, n), e ? (o.attachModsRecursively(l, r), t && (d ? m() : s(m))) : n.length ? i && (d ? i.apply(r, n) : s(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            i.apply(r, n);
            minerva_hook.afterFunction("null", this, {});
          })) : (h.fn = u, f.use(l));
          minerva_hook.afterFunction("u", this, {});
        }

        var l,
            f,
            d,
            m,
            p = 0,
            h = new n(u);
        _minerva_ret = ("object" == typeof t && (d = t.sync, i = t.error, t = t.success), m = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          t.apply(r, o.getModules(r, e));
          minerva_hook.afterFunction("null", this, {});
        }, e = o.getModNamesAsArray(e), e = o.normalizeModNamesWithAlias(r, e), l = o.unalias(r, e), f = new a(r, h), d ? h.notifyAll() : s(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          h.notifyAll();
          minerva_hook.afterFunction("null", this, {});
        }), r || c);
        minerva_hook.afterFunction("null", this, {
          l: l,
          f: f,
          d: d,
          m: m,
          p: p,
          h: h,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      require: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        if (e) {
          var n = o.unalias(r, o.normalizeModNamesWithAlias(r, [e], t));
          return o.attachModsRecursively(n, r), o.getModules(r, n)[1];
        }

        minerva_hook.afterFunction("null", this, {});
      }
    }), u.mods = {}, t.exports = c;
    minerva_hook.afterFunction("null", this, {
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c
    });
  }, {
    "./combo-loader": 5,
    "./fns": 9,
    "./utils": 15,
    "runtime/index": 28
  }],
  13: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("runtime/index"),
        r = {};
    n.addMember("Loader", r), r.Status = {
      ERROR: -1,
      INIT: 0,
      LOADING: 1,
      LOADED: 2,
      READY_TO_ATTACH: 3,
      ATTACHING: 4,
      ATTACHED: 5
    }, t.exports = r;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r
    });
  }, {
    "runtime/index": 28
  }],
  14: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      e._queryMap || (e._queryMap = u.unparam(e._query));
      minerva_hook.afterFunction("n", this, {});
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      this._query = e || "";
      minerva_hook.afterFunction("r", this, {});
    }

    function i(e, t) {
      minerva_hook.beforeFunction("i", this, arguments);
      _minerva_ret = e.toLowerCase() === t.toLowerCase();
      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      if (e instanceof o) return e.clone();
      var t,
          n = this;
      _minerva_ret = (u.mix(n, {
        scheme: "",
        userInfo: "",
        hostname: "",
        port: "",
        path: "",
        query: "",
        fragment: ""
      }), t = a.parse(e), u.each(t, function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e = e || "", "query" === t) n.query = new r(e);else {
          try {
            e = u.urlDecode(e);
          } catch (i) {
            new Error(i + "urlDecode error : " + e);
          }

          n[t] = e;
        }
        minerva_hook.afterFunction("null", this, {});
      }), n);
      minerva_hook.afterFunction("o", this, {
        t: t,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var a = (e("path"), e("url")),
        u = e("./fns"),
        s = {
      scheme: 1,
      userInfo: 2,
      hostname: 3,
      port: 4,
      path: 5,
      query: 6,
      fragment: 7
    };
    r.prototype = {
      constructor: r,
      clone: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = new r(this.toString());
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      get: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            r = this;
        _minerva_ret = (n(r), t = r._queryMap, e ? t[e] : t);
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      set: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var i,
            o = this;
        _minerva_ret = (n(o), i = o._queryMap, "string" == typeof e ? o._queryMap[e] = t : (e instanceof r && (e = e.get()), u.each(e, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          i[t] = e;
          minerva_hook.afterFunction("null", this, {});
        })), o);
        minerva_hook.afterFunction("null", this, {
          i: i,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      toString: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        _minerva_ret = (n(t), u.param(t._queryMap, void 0, void 0, e));
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, o.prototype = {
      constructor: o,
      clone: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = new o(),
            t = this;
        _minerva_ret = (u.each(s, function (n, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          e[r] = t[r];
          minerva_hook.afterFunction("null", this, {});
        }), e.query = e.query.clone(), e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolve: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        "string" != typeof e && (e = a.format(e));
        var t = new o(a.resolve(this.toString(), e));
        _minerva_ret = (t.query = new r(t.query), t);
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      setPath: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (this.path = e, this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getPath: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.path;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isSameOriginAs: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        _minerva_ret = i(t.hostname, e.hostname) && i(t.scheme, e.scheme) && i(t.port, e.port);
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      toString: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = a.format(this, e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, o.Query = r, t.exports = o;
    minerva_hook.afterFunction("null", this, {
      a: a,
      u: u,
      s: s
    });
  }, {
    "./fns": 9,
    path: 24,
    url: 31
  }],
  15: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      if ("string" == typeof e) return r(e);

      for (var t = [], n = 0, i = e.length; i > n; n++) t[n] = r(e[n]);

      _minerva_ret = t;
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = ("/" === e.charAt(e.length - 1) && (e += "index"), s.endsWith(e, ".js") && (e = e.slice(0, -3)), e);
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e, t) {
      minerva_hook.beforeFunction("i", this, arguments);
      var n = t.indexOf("!");

      if (-1 !== n) {
        var r = t.substring(0, n);
        t = t.substring(n + 1), a.use(r, {
          sync: !0,
          success: function (n, i) {
            minerva_hook.beforeFunction("null", this, arguments);
            i.alias && (t = i.alias(e, t, r));
            minerva_hook.afterFunction("null", this, {});
          }
        });
      }

      _minerva_ret = t;
      minerva_hook.afterFunction("i", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      var t;
      _minerva_ret = ((t = e.match(/^\s*["']([^'"\s]+)["']\s*$/)) || console && console.error("can not find required mod in require call: " + e), t[1]);
      minerva_hook.afterFunction("o", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var a = e("runtime/index"),
        u = e("path/index"),
        s = e("./fns"),
        c = e("./setup").Status,
        l = c.ATTACHED,
        f = c.READY_TO_ATTACH,
        d = c.LOADED,
        m = c.ATTACHING,
        p = c.ERROR,
        h = !0,
        g = !1,
        v = a.Env.host,
        y = (v.document, {}),
        b = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
        x = /[^.'"]\s*require\s*\(([^)]+)\)/g;
    y.normalDepModuleName = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          r = 0;
      if (!t) return t;
      if ("string" == typeof t) return s.startsWith(t, "../") || s.startsWith(t, "./") ? u.resolve(u.dirname(e), t) : u.normalize(t);

      for (n = t.length; n > r; r++) t[r] = y.normalDepModuleName(e, t[r]);

      _minerva_ret = t;
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.createModulesInfo = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        y.createModuleInfo(e, r);
      }

      minerva_hook.afterFunction("null", this, {});
    }, y.createModuleInfo = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      t = r(t);
      var i = e.Env.mods,
          o = i[t];
      _minerva_ret = o ? o : (i[t] = o = new a.Loader.Module(s.mix({
        name: t,
        runtime: e
      }, n)), o);
      minerva_hook.afterFunction("null", this, {
        t: t,
        i: i,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.getModules = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          r,
          i,
          o,
          a = [e],
          u = e.Env.mods;
      _minerva_ret = (s.each(t, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        n = u[t], n && "css" === n.getType() ? a.push(void 0) : (r = y.unalias(e, t), i = s.reduce(r, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = (o = u[t], e && o && o.status >= m);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, !0), a.push(i ? u[r[0]].exports : null));
        minerva_hook.afterFunction("null", this, {});
      }), a);
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        i: i,
        o: o,
        a: a,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.attachModsRecursively = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          r = e.length;

      for (n = 0; r > n; n++) y.attachModRecursively(e[n], t);

      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r
      });
    }, y.checkModsLoadRecursively = function (e, t, n, r, i) {
      minerva_hook.beforeFunction("null", this, arguments);
      n = n || [], i = i || {};
      var o,
          a = 1,
          u = e.length,
          s = n.length;

      for (o = 0; u > o; o++) a = a && y.checkModLoadRecursively(e[o], t, n, r, i), n.length = s;

      _minerva_ret = !!a;
      minerva_hook.afterFunction("null", this, {
        o: o,
        a: a,
        u: u,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.checkModLoadRecursively = function (e, t, n, r, i) {
      minerva_hook.beforeFunction("null", this, arguments);
      var o,
          a = t.Env.mods,
          u = a[e];
      _minerva_ret = e in i ? i[e] : u ? (o = u.status, o === p ? (r.push(u), i[e] = g, g) : o >= f ? (i[e] = h, h) : o !== d ? (i[e] = g, g) : s.indexOfArray(e, n) > -1 ? (console && console.warn("find cyclic dependency between mods: " + n), i[e] = h, h) : (n.push(e), y.checkModsLoadRecursively(u.getNormalizedRequires(), t, n, r, i) ? (u.status = f, i[e] = h, h) : (i[e] = g, g))) : (i[e] = g, g);
      minerva_hook.afterFunction("null", this, {
        o: o,
        a: a,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.attachModRecursively = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          r = t.Env.mods,
          i = r[e];
      n = i.status, n >= m || (i.status = m, i.cjs ? y.attachMod(t, i) : (y.attachModsRecursively(i.getNormalizedRequires(), t), y.attachMod(t, i)));
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        i: i
      });
    }, y.attachMod = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          r = t.factory;

      if ("function" == typeof r) {
        var i;
        t.cjs && (r.length > 1 || r.define) && (i = s.bind(t.require, t)), n = r.apply(t, t.cjs ? t.factory.define ? [i, t.exports, t] : [e, i, t.exports, t] : y.getModules(e, t.getRequiresWithAlias())), void 0 !== n && (t.exports = n);
      } else t.exports = r;

      t.status = l;
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r
      });
    }, y.getModNamesAsArray = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = ("string" == typeof e && (e = e.replace(/\s+/g, "").split(",")), e);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.normalizeModNames = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = y.unalias(e, y.normalizeModNamesWithAlias(e, t, n));
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.unalias = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var r, i, o, a, u = [].concat(t), s = 0, c = e.Env.mods; !s;) for (s = 1, r = u.length - 1; r >= 0; r--) if ((i = c[u[r]]) && "alias" in i) {
        for (s = 0, o = i.alias, "string" == typeof o && (o = [o]), a = o.length - 1; a >= 0; a--) o[a] || o.splice(a, 1);

        u.splice.apply(u, [r, 1].concat(n(o)));
      }

      _minerva_ret = u;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.normalizeModNamesWithAlias = function (e, t, r) {
      minerva_hook.beforeFunction("null", this, arguments);
      var o,
          a,
          u = [];
      if (t) for (o = 0, a = t.length; a > o; o++) t[o] && u.push(i(e, n(t[o])));
      _minerva_ret = (r && (u = y.normalDepModuleName(r, u)), u);
      minerva_hook.afterFunction("null", this, {
        o: o,
        a: a,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.registerModule = function (e, t, n, i) {
      minerva_hook.beforeFunction("null", this, arguments);
      t = r(t);
      var o = e.Env.mods,
          a = o[t];
      _minerva_ret = a && void 0 !== a.factory ? void (console && console.warn(t + " is defined more than once")) : (y.createModuleInfo(e, t), a = o[t], s.mix(a, {
        name: t,
        status: d,
        factory: n
      }), void s.mix(a, i));
      minerva_hook.afterFunction("null", this, {
        t: t,
        o: o,
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.getHash = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t,
          n = 5381;

      for (t = e.length; --t > -1;) n = (n << 5) + n + e.charCodeAt(t);

      _minerva_ret = n + "";
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, y.getRequiresFromFn = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = [];
      _minerva_ret = (e.toString().replace(b, "").replace(x, function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        t.push(o(n));
        minerva_hook.afterFunction("null", this, {});
      }), t);
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, t.exports = y;
    minerva_hook.afterFunction("null", this, {
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m,
      p: p,
      h: h,
      g: g,
      v: v,
      y: y,
      b: b,
      x: x
    });
  }, {
    "./fns": 9,
    "./setup": 13,
    "path/index": 24,
    "runtime/index": 28
  }],
  16: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.exports = e("./lib/get-script");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/get-script": 19
  }],
  17: [function (e, t, n) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r() {
      minerva_hook.beforeFunction("r", this, arguments);
      c || (i("start css poll timer"), a());
      minerva_hook.afterFunction("r", this, {});
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      console && console.debug && console.debug(e);
      minerva_hook.afterFunction("i", this, {});
    }

    function o(e, t) {
      minerva_hook.beforeFunction("o", this, arguments);
      var n = 0;
      if (u.webkit) e.sheet && (i("webkit css poll loaded: " + t), n = 1);else if (e.sheet) try {
        var r = e.sheet.cssRules;
        r && (i("same domain css poll loaded: " + t), n = 1);
      } catch (o) {
        var a = o.name;
        i("css poll exception: " + a + " " + o.code + " " + t), "NS_ERROR_DOM_SECURITY_ERR" === a && (i("css poll exception: " + a + "loaded : " + t), n = 1);
      }
      _minerva_ret = n;
      minerva_hook.afterFunction("o", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a() {
      minerva_hook.beforeFunction("a", this, arguments);

      for (var e in l) {
        var t = l[e],
            n = t.node;
        o(n, e) && (t.callback && t.callback.call(n), delete l[e]);
      }

      u.isEmptyObject(l) ? (i("clear css poll timer"), c = 0) : c = setTimeout(a, s);
      minerva_hook.afterFunction("a", this, {});
    }

    var u = e("./fns"),
        s = 30,
        c = 0,
        l = {};
    n.pollCss = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          i = e.href;
      n = l[i] = {}, n.node = e, n.callback = t, r();
      minerva_hook.afterFunction("null", this, {
        n: n,
        i: i
      });
    }, n.isCssLoaded = o;
    minerva_hook.afterFunction("null", this, {
      u: u,
      s: s,
      c: c,
      l: l
    });
  }, {
    "./fns": 18
  }],
  18: [function (e, t, n) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t = [];

      for (var n in e) t.push(n);

      _minerva_ret = t;
      minerva_hook.afterFunction("r", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      var t = 0;
      _minerva_ret = parseFloat(e.replace(/\./g, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = 0 === t++ ? "." : "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }));
      minerva_hook.afterFunction("i", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var o,
        a = (window.navigator || {}).userAgent || "",
        u = Array.isArray || function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = "[object Array]" === Object.prototype.toString.call(e);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    ((o = a.match(/AppleWebKit\/*\s*([\d.]*)/i)) || (o = a.match(/Safari[\/]{0,1}([\d.]*)/))) && o[1] && (n.webkit = i(o[1])), n.isEmptyObject = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var t in e) if (void 0 !== t) return !1;

      _minerva_ret = !0;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.startsWith = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = 0 === e.lastIndexOf(t, 0);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.each = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          i,
          o = 0;
      if (u(e)) for (i = e.length; i > o && t(e[o], o, e) !== !1; o++);else for (n = r(e), i = n.length; i > o && t(e[n[o]], n[o], e) !== !1; o++);
      minerva_hook.afterFunction("null", this, {
        n: n,
        i: i,
        o: o
      });
    };
    minerva_hook.afterFunction("null", this, {
      o: o,
      a: a,
      u: u
    });
  }, {}],
  19: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n,
        r,
        i = e("path"),
        o = e("./fns"),
        a = e("./utils"),
        u = 1e3,
        s = window.document,
        c = {},
        l = "undefined" != typeof KISSY ? KISSY.Config : {};

    t.exports = r = function (e, t, r) {
      minerva_hook.beforeFunction("null", this, arguments);

      function f() {
        minerva_hook.beforeFunction("f", this, arguments);
        var e = b.readyState;
        e && "loaded" !== e && "complete" !== e || (b.onreadystatechange = b.onload = null, w(0));
        minerva_hook.afterFunction("f", this, {
          e: e
        });
      }

      var d,
          m,
          p,
          h,
          g,
          v = t,
          y = 0;
      if (o.startsWith(i.extname(e).toLowerCase(), ".css") && (y = 1), "object" == typeof v && (t = v.success, d = v.error, m = v.timeout, r = v.charset, p = v.attrs), h = c[e] = c[e] || [], h.push([t, d]), h.length > 1) return h.node;

      var b = s.createElement(y ? "link" : "script"),
          x = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        g && (clearTimeout(g), g = void 0);
        minerva_hook.afterFunction("null", this, {});
      };

      p && o.each(p, function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        b.setAttribute(t, e);
        minerva_hook.afterFunction("null", this, {});
      }), r && (b.charset = r), y ? (b.href = e, b.rel = "stylesheet") : (b.src = e, b.async = !0), h.node = b;

      var w = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r = t;
        x(), o.each(c[e], function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          (n = e[r]) && n.call(b);
          minerva_hook.afterFunction("null", this, {});
        }), delete c[e];
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r
        });
      },
          M = ("onload" in b),
          A = l.forceCssPoll || o.webkit && o.webkit < 536;

      _minerva_ret = (y && A && M && (M = !1), M ? (b.onload = f, b.onerror = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        b.onerror = null, w(1);
        minerva_hook.afterFunction("null", this, {});
      }) : y ? a.pollCss(b, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        w(0);
        minerva_hook.afterFunction("null", this, {});
      }) : b.onreadystatechange = f, m && (g = setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        w(1);
        minerva_hook.afterFunction("null", this, {});
      }, m * u)), n || (n = a.docHead()), y ? n.appendChild(b) : n.insertBefore(b, n.firstChild), b);
      minerva_hook.afterFunction("null", this, {
        d: d,
        m: m,
        p: p,
        h: h,
        g: g,
        v: v,
        y: y,
        b: b,
        x: x,
        w: w,
        M: M,
        A: A,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l
    });
  }, {
    "./fns": 18,
    "./utils": 20,
    path: 24
  }],
  20: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("./css-onload"),
        r = window.document,
        i = {};
    i.docHead = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = r.getElementsByTagName("head")[0] || r.documentElement;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, i.pollCss = n.pollCss, t.exports = i;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i
    });
  }, {
    "./css-onload": 17
  }],
  21: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("./lib/logger-manager");
    t.exports = n;
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "./lib/logger-manager": 22
  }],
  22: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var t = {};

      for (var n in o) !function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);

        t[n] = function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = r.log(t, n, e);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

        minerva_hook.afterFunction("null", this, {});
      }(t, n);

      _minerva_ret = t;
      minerva_hook.afterFunction("n", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var r,
        i = {},
        o = {
      debug: 10,
      info: 20,
      warn: 30,
      error: 40
    };
    r = t.exports = {
      config: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e && (i = e), i);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      log: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = 1;

        if (n) {
          r = 0;
          var a, u, s, c, l, f, d;

          if (t = t || "debug", c = o[t] || o.debug, a = i.includes) {
            for (r = 0, u = 0; u < a.length; u++) if (s = a[u], d = s.logger, f = o[s.maxLevel] || o.error, l = o[s.minLevel] || o.debug, c >= l && f >= c && n.match(d)) {
              r = 1;
              break;
            }
          } else if (a = i.excludes) for (r = 1, u = 0; u < a.length; u++) if (s = a[u], d = s.logger, f = o[s.maxLevel] || o.error, l = o[s.minLevel] || o.debug, c >= l && f >= c && n.match(d)) {
            r = 0;
            break;
          }

          r && (e = n + ": " + e);
        }

        _minerva_ret = r ? ("undefined" != typeof console && console.log && console[t && console[t] ? t : "log"](e), e) : void 0;
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getLogger: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      error: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        throw e instanceof Error ? e : new Error(e);
        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      r: r,
      i: i,
      o: o,
      r: r
    });
  }, {}],
  23: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("runtime/index"),
        n = e("ua/index"),
        r = e("feature/index");
    t.config({
      modules: {
        "anim-base": {
          requires: ["dom", "promise", "util"]
        },
        "anim-timer": {
          requires: ["dom", "util", "anim-base", "feature"]
        },
        "anim-transition": {
          requires: ["util", "dom", "anim-base", "feature"]
        },
        attribute: {
          requires: ["util", "event-custom"]
        },
        base: {
          requires: ["util", "attribute"]
        },
        "dom-base": {
          requires: ["util", "io-script", "feature", "query-selector"]
        },
        "dom-extra": {
          requires: ["util", "dom-base", "feature"]
        },
        "dom-ie": {
          requires: ["util", "dom-base", "ua"]
        },
        event: {
          requires: ["event-dom", "event-custom"]
        },
        "event-base": {
          requires: ["util"]
        },
        "event-custom": {
          requires: ["util", "event-base"]
        },
        "event-dom-base": {
          requires: ["util", "event-base", "dom"]
        },
        "event-dom-extra": {
          requires: ["event-dom-base", "dom", "util", "feature", "ua"]
        },
        "event-dom-ie": {
          requires: ["event-dom-base", "dom"]
        },
        "event-gesture": {
          requires: ["event-touch", "event-dom", "util", "feature"]
        },
        "event-touch": {
          requires: ["event-dom", "dom", "util", "feature"]
        },
        io: {
          requires: ["util", "io-extra", "io-form"]
        },
        "io-base": {
          requires: ["util", "io-script", "url", "promise", "querystring"]
        },
        "io-extra": {
          requires: ["io-base", "util", "dom", "querystring"]
        },
        "io-form": {
          requires: ["io-base", "util", "dom", "querystring"]
        },
        node: {
          requires: ["node-base", "node-event", "node-anim"]
        },
        "node-anim": {
          requires: ["util", "node-base", "anim"]
        },
        "node-base": {
          requires: ["dom", "util"]
        },
        "node-event": {
          requires: ["util", "node-base", "event-dom"]
        }
      }
    }), t.config({
      modules: {
        anim: {
          alias: r.getCssVendorInfo("transition") ? "anim-transition" : "anim-timer"
        },
        dom: {
          alias: ["dom-base", "dom-extra", n.ieMode < 10 ? "dom-ie" : ""]
        },
        "event-dom": {
          alias: ["event-dom-base", "event-dom-extra", r.isTouchEventSupported ? "event-gesture" : "", n.ieMode < 9 ? "event-dom-ie" : ""]
        },
        json: {
          alias: [n.ieMode < 8 ? "json-ie" : "json-base"]
        },
        "query-selector": {
          alias: r.isQuerySelectorSupported() ? "query-selector-base" : "query-selector-ie"
        },
        core: {
          alias: ["dom", "event", "io", "anim", "base", "node", "json", "ua", "cookie"]
        },
        ajax: {
          alias: "io"
        },
        "rich-base": {
          alias: "base"
        }
      },
      packages: {
        kg: {
          base: "//g.alicdn.com/"
        }
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r
    });
  }, {
    "feature/index": 2,
    "runtime/index": 28,
    "ua/index": 29
  }],
  24: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("./lib/path");
    t.exports = n;
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "./lib/path": 25
  }],
  25: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var t = e.split(/\/+/);
      _minerva_ret = (t[t.length - 1] || (t = t.slice(0, -1)), t[0] || (t = t.slice(1)), t);
      minerva_hook.afterFunction("n", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);

      for (var n, r = 0, i = e.length - 1, o = []; i >= 0; i--) n = e[i], "." !== n && (".." === n ? r++ : r ? r-- : o[o.length] = n);

      if (t) for (; r--; r) o[o.length] = "..";
      _minerva_ret = o = o.reverse();
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var i = /^(\/?)([\s\S]+\/(?!$)|\/)?((?:\.{1,2}$|[\s\S]+?)?(\.[^.\/]*)?)$/,
        o = {
      resolve: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            t,
            i,
            o = "",
            a = arguments,
            u = 0;

        for (t = a.length - 1; t >= 0 && !u; t--) i = a[t], "string" == typeof i && i && (o = i + "/" + o, u = "/" === i.charAt(0));

        _minerva_ret = (e = r(n(o), !u).join("/"), (u ? "/" : "") + e || ".");
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          i: i,
          o: o,
          a: a,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      normalize: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = "/" === e.charAt(0),
            i = "/" === e.slice(-1);
        _minerva_ret = (e = r(n(e), !t).join("/"), e || t || (e = "."), e && i && (e += "/"), (t ? "/" : "") + e);
        minerva_hook.afterFunction("null", this, {
          t: t,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      join: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = Array.prototype.slice.call(arguments);
        _minerva_ret = o.normalize(e.join("/"));
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      relative: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = o.normalize(e), t = o.normalize(t);
        var r,
            i,
            a = n(e),
            u = [],
            s = n(t),
            c = Math.min(a.length, s.length);

        for (r = 0; c > r && a[r] === s[r]; r++);

        for (i = r; r < a.length;) u.push(".."), r++;

        _minerva_ret = (u = u.concat(s.slice(i)), u.join("/"));
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i,
          a: a,
          u: u,
          s: s,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      basename: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = e.match(i) || [],
            r = n[3] || "";
        _minerva_ret = (t && r && r.slice(-1 * t.length) === t && (r = r.slice(0, -1 * t.length)), r);
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      dirname: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = e.match(i) || [],
            n = t[1] || "",
            r = t[2] || "";
        _minerva_ret = n || r ? (r && (r = r.substring(0, r.length - 1)), n + r) : ".";
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      extname: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e.match(i) || [])[4] || "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    t.exports = o;
    minerva_hook.afterFunction("null", this, {
      i: i,
      o: o
    });
  }, {}],
  26: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.exports = e("./lib/querystring");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/querystring": 27
  }],
  27: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var t = typeof e;
      _minerva_ret = null == e || "object" !== t && "function" !== t;
      minerva_hook.afterFunction("n", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = "[object Array]" === c.apply(e);
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      _minerva_ret = decodeURIComponent(e.replace(/\+/g, " "));
      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var o,
        a = "&",
        u = "",
        s = encodeURIComponent,
        c = {}.toString,
        l = "=";
    t.exports = {
      _debug: "",
      stringify: function (e, t, i, c) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = t || a, i = i || l, c === o && (c = !0);
        var f,
            d,
            m,
            p,
            h,
            g = [];

        for (f in e) {
          h = e[f];
          var v = f;
          if (f = s(f), n(h)) g.push(f), h !== o && g.push(i, s(h + u)), g.push(t);else if (r(h)) for (d = 0, p = h.length; p > d; ++d) m = h[d], n(m) && (g.push(f, c && "[]" !== v.slice(-2) ? s("[]") : u), m !== o && g.push(i, s(m + u)), g.push(t));
        }

        _minerva_ret = (g.pop(), g.join(u));
        minerva_hook.afterFunction("null", this, {
          f: f,
          d: d,
          m: m,
          p: p,
          h: h,
          g: g,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      parse: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        if ("string" != typeof e || !(e = e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""))) return {};
        t = t || a, n = n || l;

        for (var u, s, c, f = {}, d = e.split(t), m = 0, p = d.length; p > m; ++m) {
          if (u = d[m].indexOf(n), -1 === u) s = i(d[m]), c = o;else {
            s = i(d[m].substring(0, u)), c = d[m].substring(u + 1);

            try {
              c = i(c);
            } catch (h) {
              throw new Error("decodeURIComponent error : " + c);
            }

            "[]" === s.slice(-2) && (s = s.slice(0, -2));
          }
          s in f ? r(f[s]) ? f[s].push(c) : f[s] = [f[s], c] : f[s] = c;
        }

        _minerva_ret = f;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l
    });
  }, {}],
  28: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    (function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n;
      "undefined" != typeof window ? n = window : "undefined" != typeof e ? n = e : "undefined" != typeof self && (n = self);
      var r = n.KISSY;
      r || (r = {}, r.__BUILD_TIME = "1450252392754", r.Env = {
        host: n
      }, r.Config = {
        debug: "",
        fns: {}
      }, r.version = "6.2.4", r.addMember = function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e in r && !n) throw new Error("The member that you want to add to KISSY already exists!");
        r[e] = t;
        minerva_hook.afterFunction("null", this, {});
      }), t.exports = n.KISSY = r;
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r
      });
    }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    minerva_hook.afterFunction("null", this, {});
  }, {}],
  29: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.exports = e("./lib/ua");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/ua": 30
  }],
  30: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var t = 0;
      _minerva_ret = parseFloat(e.replace(/\./g, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = 0 === t++ ? "." : "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }));
      minerva_hook.afterFunction("n", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      var r, i;
      t[r = "trident"] = .1, (i = e.match(/Trident\/([\d.]*)/)) && i[1] && (t[r] = n(i[1])), t.core = r;
      minerva_hook.afterFunction("r", this, {
        r: r,
        i: i
      });
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      var t, r;
      _minerva_ret = (t = e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (r = t[1] || t[2]) ? n(r) : 0;
      minerva_hook.afterFunction("i", this, {
        t: t,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      var t,
          o,
          u,
          s,
          l,
          f = "",
          d = f,
          m = f,
          p = [6, 9],
          h = "{{version}}",
          g = "<!--[if IE " + h + "]><s></s><![endif]-->",
          v = c && c.createElement("div"),
          y = [],
          b = {
        webkit: a,
        edge: a,
        trident: a,
        gecko: a,
        presto: a,
        chrome: a,
        safari: a,
        firefox: a,
        ie: a,
        ieMode: a,
        opera: a,
        mobile: a,
        core: a,
        shell: a,
        phantomjs: a,
        os: a,
        ipad: a,
        iphone: a,
        ipod: a,
        ios: a,
        android: a,
        nodejs: a
      };

      if (v && v.getElementsByTagName && (v.innerHTML = g.replace(h, ""), y = v.getElementsByTagName("s")), y.length > 0) {
        for (r(e, b), s = p[0], l = p[1]; l >= s; s++) if (v.innerHTML = g.replace(h, s), y.length > 0) {
          b[m = "ie"] = s;
          break;
        }

        !b.ie && (u = i(e)) && (b[m = "ie"] = u);
      } else ((o = e.match(/AppleWebKit\/*\s*([\d.]*)/i)) || (o = e.match(/Safari\/([\d.]*)/))) && o[1] ? (b[d = "webkit"] = n(o[1]), (o = e.match(/OPR\/(\d+\.\d+)/)) && o[1] ? b[m = "opera"] = n(o[1]) : (o = e.match(/Chrome\/([\d.]*)/)) && o[1] ? b[m = "chrome"] = n(o[1]) : (o = e.match(/\/([\d.]*) Safari/)) && o[1] ? b[m = "safari"] = n(o[1]) : b.safari = b.webkit, (o = e.match(/Edge\/([\d.]*)/)) && o[1] && (d = m = "edge", b[d] = n(o[1])), / Mobile\//.test(e) && e.match(/iPad|iPod|iPhone/) ? (b.mobile = "apple", o = e.match(/OS ([^\s]*)/), o && o[1] && (b.ios = n(o[1].replace("_", "."))), t = "ios", o = e.match(/iPad|iPod|iPhone/), o && o[0] && (b[o[0].toLowerCase()] = b.ios)) : / Android/i.test(e) ? (/Mobile/.test(e) && (t = b.mobile = "android"), o = e.match(/Android ([^\s]*);/), o && o[1] && (b.android = n(o[1]))) : (o = e.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (b.mobile = o[0].toLowerCase()), (o = e.match(/PhantomJS\/([^\s]*)/)) && o[1] && (b.phantomjs = n(o[1]))) : (o = e.match(/Presto\/([\d.]*)/)) && o[1] ? (b[d = "presto"] = n(o[1]), (o = e.match(/Opera\/([\d.]*)/)) && o[1] && (b[m = "opera"] = n(o[1]), (o = e.match(/Opera\/.* Version\/([\d.]*)/)) && o[1] && (b[m] = n(o[1])), (o = e.match(/Opera Mini[^;]*/)) && o ? b.mobile = o[0].toLowerCase() : (o = e.match(/Opera Mobi[^;]*/)) && o && (b.mobile = o[0]))) : (u = i(e)) ? (b[m = "ie"] = u, r(e, b)) : (o = e.match(/Gecko/)) && (b[d = "gecko"] = .1, (o = e.match(/rv:([\d.]*)/)) && o[1] && (b[d] = n(o[1]), /Mobile|Tablet/.test(e) && (b.mobile = "firefox")), (o = e.match(/Firefox\/([\d.]*)/)) && o[1] && (b[m = "firefox"] = n(o[1])));

      _minerva_ret = (t || (/windows|win32/i.test(e) ? t = "windows" : /macintosh|mac_powerpc/i.test(e) ? t = "macintosh" : /linux/i.test(e) ? t = "linux" : /rhino/i.test(e) && (t = "rhino")), b.os = t, b.core = b.core || d, b.shell = m, b.ieMode = b.ie && c.documentMode || b.ie, b);
      minerva_hook.afterFunction("o", this, {
        t: t,
        o: o,
        u: u,
        s: s,
        l: l,
        f: f,
        d: d,
        m: m,
        p: p,
        h: h,
        g: g,
        v: v,
        y: y,
        b: b,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var a,
        u,
        s = "undefined" != typeof window ? window : {},
        c = s.document,
        l = s.navigator && s.navigator.userAgent || "";
    u = o(l), u.getDescriptorFromUserAgent = o;
    var f = ["webkit", "trident", "gecko", "presto", "chrome", "safari", "firefox", "ie", "opera"],
        d = c && c.documentElement,
        m = "";

    if (d) {
      for (var p = 0; p < f.length; p++) {
        var h = f[p],
            g = u[h];
        g && (m += " ks-" + h + (parseInt(g, 10) + ""), m += " ks-" + h);
      }

      m && (d.className = (d.className + m).replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
    }

    t.exports = u;
    minerva_hook.afterFunction("null", this, {
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m
    });
  }, {}],
  31: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.exports = e("./lib/url");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/url": 32
  }],
  32: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = (":" === e.slice(-1) && (e = e.slice(0, -1)), "http" === e || "https" === e || "ftp" === e || "gopher" === e || "file" === e);
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = 1 === e.length ? "0" + e : e;
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e, t) {
      minerva_hook.beforeFunction("i", this, arguments);
      _minerva_ret = encodeURI(e).replace(t, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "%" + r(e.charCodeAt(0).toString(16));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      });
      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var o,
        a = e("querystring"),
        u = e("path"),
        s = /[#\/\?@]/g,
        c = /[#\?]/g,
        l = /#/g,
        f = new RegExp("^([\\w\\d+.-]+:)?(?://(?:([^/?#@]*)@)?([\\w\\d\\-\\u0100-\\uffff.+%]*|\\[[^\\]]+\\])(?::([0-9]+))?)?([^?#]+)?(\\?[^#]*)?(#.*)?$"),
        d = {
      protocol: 1,
      auth: 2,
      hostname: 3,
      port: 4,
      pathname: 5,
      search: 6,
      hash: 7
    },
        m = {
      parse: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = e || "";
        var r = e.match(f) || [],
            i = {};

        for (var o in d) i[o] = r[d[o]];

        i.protocol && (i.protocol = i.protocol.toLowerCase()), i.hostname && (i.hostname = i.hostname.toLowerCase());
        var u = i.protocol;

        if (u && (i.slashes = -1 !== e.lastIndexOf(u + "//")), u && !n(u.slice(0, -1))) {
          if (!i.slashes) return e = e.slice(0, u.length) + "//" + e.slice(u.length), i = m.parse(e, t), i.slashes = null, i;
        } else i.hostname && !i.pathname && (i.pathname = "/");

        _minerva_ret = (i.path = i.pathname, i.search && (i.path += i.search), i.host = i.hostname, i.port && (i.host = i.hostname + ":" + i.port), i.search && (i.query = i.search.substring(1)), t && i.query && (i.query = a.parse(i.query)), i.href = m.format(i), i);
        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r,
          i: i,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      format: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = e.host;
        r === o && e.hostname && (r = encodeURIComponent(e.hostname), e.port && (r += ":" + e.port));
        var u = e.search,
            f = e.query;
        u === o && f !== o && ("string" != typeof f && (f = a.stringify(f, o, o, t)), f && (u = "?" + f)), u && "?" !== u.charAt(0) && (u = "?" + u);
        var d = e.hash || "";
        d && "#" !== d.charAt(0) && (d = "#" + d);
        var m,
            p,
            h = e.pathname || "",
            g = [];
        _minerva_ret = ((m = e.protocol) && (":" !== m.slice(-1) && (m += ":"), g.push(i(m, s))), r !== o && ((this.slashes || m && n(m)) && g.push("//"), (p = e.auth) && (g.push(i(p, s)), g.push("@")), g.push(r)), h && g.push(i(h, c)), u && g.push(u), d && g.push("#" + i(d.substring(1), l)), g.join(""));
        minerva_hook.afterFunction("null", this, {
          r: r,
          u: u,
          f: f,
          d: d,
          m: m,
          p: p,
          h: h,
          g: g,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolve: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r = 0,
            i = ["protocol", "auth", "host", "pathname", "search", "hash"],
            o = {};
        e = m.parse(e), t = m.parse(t);

        for (var a = 0; a < i.length; a++) {
          var s = i[a];
          if (r) o[s] = t[s];else if (o[s] = e[s], "pathname" === s) {
            var c = t.pathname;
            c && (r = 1, "/" !== c.charAt(0) && (o.hostname && !o.pathname ? c = "/" + c : o.pathname && (("/." === c.slice(-2) || "/.." === c.slice(-3) || "." === c || ".." === c) && (c += "/"), n = o.pathname.lastIndexOf("/"), -1 !== n && (c = o.pathname.slice(0, n + 1) + c))), o.pathname = u.normalize(c));
          } else "search" === s ? t.search && (o.search = t.search, r = 1) : t[s] && (r = r || o[s] !== t[s], o[s] = t[s]);
        }

        _minerva_ret = m.format(o);
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          i: i,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    m.stringify = m.format, t.exports = m;
    minerva_hook.afterFunction("null", this, {
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m
    });
  }, {
    path: 24,
    querystring: 26
  }],
  33: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("ua"),
        r = e("util-base");
    e("util-extra"), n.ieMode < 9 && e("util-ie"), t.exports = r;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r
    });
  }, {
    ua: 29,
    "util-base": 34,
    "util-extra": 45,
    "util-ie": 52
  }],
  34: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.exports = e("./lib/main");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/main": 35
  }],
  35: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("./main/base");
    e("./main/array"), e("./main/function"), e("./main/json"), e("./main/object"), e("./main/querystring"), e("./main/string"), e("./main/type"), e("./main/web"), t.exports = n;
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "./main/array": 36,
    "./main/base": 37,
    "./main/function": 38,
    "./main/json": 39,
    "./main/object": 40,
    "./main/querystring": 41,
    "./main/string": 42,
    "./main/type": 43,
    "./main/web": 44
  }],
  36: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t,
        n = Array.prototype,
        r = n.indexOf,
        i = n.filter,
        o = n.reduce,
        o = n.reduce,
        a = e("./base"),
        u = n.map;
    a.mix(a, {
      indexOf: function (e, n, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = i === t ? r.call(n, e) : r.call(n, e, i);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      inArray: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = a.indexOf(e, t) > -1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      filter: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = i.call(e, t, n || this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      map: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = u.call(e, t, n || this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      reduce: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = o.call(e, t, n);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      makeArray: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (null == e) return [];
        if (a.isArray(e)) return e;
        var t = typeof e.length,
            n = typeof e;
        if ("number" !== t || "string" == typeof e.nodeName || null != e && e == e.window || "string" === n || "function" === n && !("item" in e && "number" === t)) return [e];

        for (var r = [], i = 0, o = e.length; o > i; i++) r[i] = e[i];

        _minerva_ret = r;
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      i: i,
      o: o,
      o: o,
      a: a,
      u: u
    });
  }, {
    "./base": 37
  }],
  37: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = 0,
        r = "";
    t.exports = {
      _debug: "",
      mix: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n in t) e[n] = t[n];

        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      guid: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e || r) + n++;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r
    });
  }, {}],
  38: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t, n) {
      minerva_hook.beforeFunction("t", this, arguments);

      function r() {
        minerva_hook.beforeFunction("r", this, arguments);
        minerva_hook.afterFunction("r", this, {});
      }

      var i = [].slice,
          o = i.call(arguments, 3),
          a = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var a = i.call(arguments);
        _minerva_ret = t.apply(this instanceof r ? this : n || this, e ? a.concat(o) : o.concat(a));
        minerva_hook.afterFunction("null", this, {
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      _minerva_ret = (r.prototype = t.prototype, a.prototype = new r(), a);
      minerva_hook.afterFunction("t", this, {
        i: i,
        o: o,
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var n = e("./base");
    n.mix(n, {
      noop: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        minerva_hook.afterFunction("null", this, {});
      },
      now: Date.now || function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = +new Date();
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      later: function (e, t, r, i, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = t || 0;
        var a,
            u,
            s = e,
            c = n.makeArray(o);
        _minerva_ret = ("string" == typeof e && (s = i[e]), a = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          s.apply(i, c);
          minerva_hook.afterFunction("null", this, {});
        }, u = r ? setInterval(a, t) : setTimeout(a, t), {
          id: u,
          interval: r,
          cancel: function () {
            minerva_hook.beforeFunction("null", this, arguments);
            this.interval ? clearInterval(u) : clearTimeout(u);
            minerva_hook.afterFunction("null", this, {});
          }
        });
        minerva_hook.afterFunction("null", this, {
          t: t,
          a: a,
          u: u,
          s: s,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      buffer: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);

        function i() {
          minerva_hook.beforeFunction("i", this, arguments);
          i.stop(), o = n.later(e, t, 0, r || this, arguments);
          minerva_hook.afterFunction("i", this, {});
        }

        if (t = t || 150, -1 === t) return function () {
          minerva_hook.beforeFunction("null", this, arguments);
          e.apply(r || this, arguments);
          minerva_hook.afterFunction("null", this, {});
        };
        var o = null;
        _minerva_ret = (i.stop = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          o && (o.cancel(), o = 0);
          minerva_hook.afterFunction("null", this, {});
        }, i);
        minerva_hook.afterFunction("null", this, {
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      bind: t(0, t, null, 0),
      rbind: t(0, t, null, 1)
    });
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "./base": 37
  }],
  39: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("./base"),
        n = "undefined" != typeof JSON ? JSON : {};
    t.parseJson = n.parse;
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n
    });
  }, {
    "./base": 37
  }],
  40: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t) {
      minerva_hook.beforeFunction("t", this, arguments);
      _minerva_ret = "constructor" === e ? s : t;
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      minerva_hook.afterFunction("n", this, {});
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      var r;
      _minerva_ret = (p ? r = p(e) : (n.prototype = e, r = new n()), r.constructor = t, r);
      minerva_hook.afterFunction("r", this, {
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e, t) {
      minerva_hook.beforeFunction("i", this, arguments);

      for (var n in t) e[n] = t[n];

      minerva_hook.afterFunction("i", this, {});
    }

    function o(e, t, n, r, i, o, u) {
      minerva_hook.beforeFunction("o", this, arguments);
      if (!t || !e) return e;
      var s;
      t[l] = e, o.push(t);

      for (var c in t) s = c, s !== l && a(s, e, t, n, r, i, o, u);

      _minerva_ret = e;
      minerva_hook.afterFunction("o", this, {
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e, t, n, r, i, a, u, f) {
      minerva_hook.beforeFunction("a", this, arguments);

      if (r || !(e in t) || a) {
        var d = t[e],
            m = n[e];
        if (d === m) return void (d === s && (t[e] = d));
        if (i && (m = i.call(n, e, m)), a && m && (c.isArray(m) || c.isPlainObject(m))) {
          if (f && m[l]) t[e] = m[l];else {
            var p = d && (c.isArray(d) || c.isPlainObject(d)) ? d : c.isArray(m) ? [] : {};
            t[e] = p, o(p, m, r, i, !0, u, f);
          }
        } else m === s || !r && e in t || (t[e] = m);
      }

      minerva_hook.afterFunction("a", this, {});
    }

    function u(e, t, n, r) {
      minerva_hook.beforeFunction("u", this, arguments);
      var i,
          o,
          a,
          s,
          l = e;
      if (!e) return l;
      if (r && e[f]) return n[e[f]].destination;

      if ("object" == typeof e) {
        var d = e.constructor;
        c.inArray(d, [Boolean, String, Number, Date, RegExp]) ? l = new d(e.valueOf()) : (i = c.isArray(e)) ? l = t ? c.filter(e, t) : e.concat() : (o = c.isPlainObject(e)) && (l = {}), r && (e[f] = s = c.guid("c"), n[s] = {
          destination: l,
          input: e
        });
      }

      if (i) for (var m = 0; m < l.length; m++) l[m] = u(l[m], t, n, r);else if (o) for (a in e) a === f || t && t.call(e, e[a], a, e) === !1 || (l[a] = u(e[a], t, n, r));
      _minerva_ret = l;
      minerva_hook.afterFunction("u", this, {
        i: i,
        o: o,
        a: a,
        s: s,
        l: l,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var s,
        c = e("./base"),
        l = "__MIX_CIRCULAR",
        f = "__~ks_cloned",
        d = "__~ks_stamped",
        m = {}.toString,
        p = Object.create;
    i(c, {
      each: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);

        if (e) {
          var r,
              i,
              o,
              a = 0,
              u = e && e.length,
              l = u === s || "[object Function]" === m.call(e);
          if (n = n || null, l) for (i = "function" == typeof Object.keys ? Object.keys(e) : c.keys(e); a < i.length && (r = i[a], t.call(n, e[r], r, e) !== !1); a++);else for (o = e[0]; u > a && t.call(n, o, a, e) !== !1; o = e[++a]);
        }

        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isEmptyObject: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t in e) if (t !== s) return !1;

        _minerva_ret = !0;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      keys: Object.keys,
      stamp: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        n = n || d;
        var r = e[n];
        if (r) return r;
        if (!t) try {
          r = e[n] = c.guid(n);
        } catch (i) {
          r = s;
        }
        _minerva_ret = r;
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      mix: function (e, t, n, r, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        var a;

        if ("object" == typeof n && (r = n.whitelist, i = n.deep, a = n.structured, n = n.overwrite), r && "function" != typeof r) {
          var u = r;

          r = function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = c.inArray(e, u) ? t : s;
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };
        }

        n === s && (n = !0), a === s && (a = !0);
        var f,
            d = [],
            m = 0;

        for (o(e, t, n, r, i, d, a); f = d[m++];) delete f[l];

        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          a: a,
          f: f,
          d: d,
          m: m,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      augment: function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            i,
            o = c.makeArray(arguments),
            a = o.length - 2,
            u = 1,
            l = o[a],
            f = o[a + 1];

        for (o[1] = n, c.isArray(f) || (l = f, f = s, a++), "boolean" != typeof l && (l = s, a++); a > u; u++) i = o[u], (r = i.prototype) && (i = c.mix({}, r, !0, t)), c.mix(e.prototype, i, l, f);

        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i,
          o: o,
          a: a,
          u: u,
          l: l,
          f: f,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      merge: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = c.makeArray(arguments);
        var t,
            n = {},
            r = e.length;

        for (t = 0; r > t; t++) c.mix(n, e[t]);

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      extend: function (e, t, n, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o,
            a = t.prototype;
        _minerva_ret = (a.constructor = t, o = r(a, e), e.prototype = c.mix(o, e.prototype), e.superclass = a, n && c.mix(o, n), i && c.mix(e, i), e);
        minerva_hook.afterFunction("null", this, {
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      clone: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n;
        "object" == typeof t && (n = t.structured, t = t.filter), n === s && (n = !0);
        var r;
        n && (r = {});
        var i = u(e, t, r, n);
        _minerva_ret = (n && c.each(r, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          if (e = e.input, e[f]) try {
            delete e[f];
          } catch (t) {
            e[f] = s;
          }
          minerva_hook.afterFunction("null", this, {});
        }), r = null, i);
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m,
      p: p
    });
  }, {
    "./base": 37
  }],
  41: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("./base"),
        n = e("querystring");
    t.mix(t, {
      param: n.stringify,
      unparam: n.parse
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n
    });
  }, {
    "./base": 37,
    querystring: 26
  }],
  42: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      _minerva_ret = arguments[1].toUpperCase();
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var n,
        r = e("./base"),
        i = /\\?\{([^{}]+)\}/g,
        o = "",
        a = String.prototype.trim,
        u = /-([a-z])/gi;
    r.mix(r, {
      trim: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = null == e ? o : a.call(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      startsWith: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = 0 === e.lastIndexOf(t, 0);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      endsWith: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = e.length - t.length;
        _minerva_ret = n >= 0 && e.indexOf(t, n) === n;
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      camelCase: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = -1 === e.indexOf("-") ? e : e.replace(u, t);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      urlEncode: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = encodeURIComponent(String(e));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      urlDecode: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = decodeURIComponent(e.replace(/\+/g, " "));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      ucfirst: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e += "", e.charAt(0).toUpperCase() + e.substring(1));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      substitute: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "string" == typeof e && t ? e.replace(r || i, function (e, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = "\\" === e.charAt(0) ? e.slice(1) : t[r] === n ? o : t[r];
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }) : e;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      u: u
    });
  }, {
    "./base": 37
  }],
  43: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t) {
      minerva_hook.beforeFunction("t", this, arguments);
      _minerva_ret = u.hasOwnProperty.call(e, t);
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var n,
        r = e("./base"),
        i = {},
        o = !1,
        a = r.noop,
        u = Object.prototype,
        s = u.toString;
    r.mix(r, {
      type: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = null == e ? String(e) : i[s.call(e)] || "object";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isPlainObject: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (!e || "object" !== r.type(e) || e.nodeType || e.window == e) return o;
        var i, a;

        try {
          if ((a = e.constructor) && !t(e, "constructor") && !t(a.prototype, "isPrototypeOf")) return o;
        } catch (u) {
          return o;
        }

        for (i in e);

        _minerva_ret = i === n || t(e, i);
        minerva_hook.afterFunction("null", this, {
          i: i,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), r.mix(r, {
      isBoolean: a,
      isNumber: a,
      isString: a,
      isFunction: a,
      isArray: a,
      isDate: a,
      isRegExp: a,
      isObject: a,
      isNull: a,
      isUndefined: a
    });

    for (var c = "Boolean Number String Function Date RegExp Object Array Null Undefined".split(" "), l = 0; l < c.length; l++) !function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      i["[object " + e + "]"] = t = e.toLowerCase(), r["is" + e] = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = r.type(e) === t;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };
      minerva_hook.afterFunction("null", this, {});
    }(c[l], l);

    r.isArray = Array.isArray || r.isArray;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s
    });
  }, {
    "./base": 37
  }],
  44: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("./base"),
        n = /complete|loaded|interactive/,
        r = "undefined" != typeof window ? window : {},
        i = /\S/;
    t.mix(t, {
      isWindow: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = null != e && e == e.window;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      ready: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        n.test(document.readyState) && document.body ? e() : document.addEventListener("DOMContentLoaded", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          e();
          minerva_hook.afterFunction("null", this, {});
        }, !1);
        minerva_hook.afterFunction("null", this, {});
      },
      globalEval: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        e && i.test(e) && (r.execScript ? r.execScript(e) : !function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          r.eval.call(r, e);
          minerva_hook.afterFunction("null", this, {});
        }(e));
        minerva_hook.afterFunction("null", this, {});
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      i: i
    });
  }, {
    "./base": 37
  }],
  45: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.exports = e("./lib/extra");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/extra": 46
  }],
  46: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("util-base");
    e("./extra/array"), e("./extra/escape"), e("./extra/function"), e("./extra/object"), e("./extra/web"), t.exports = n;
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "./extra/array": 47,
    "./extra/escape": 48,
    "./extra/function": 49,
    "./extra/object": 50,
    "./extra/web": 51,
    "util-base": 34
  }],
  47: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t,
        n = Array.prototype,
        r = n.lastIndexOf,
        i = n.every,
        o = n.some,
        a = e("util-base");
    a.mix(a, {
      lastIndexOf: function (e, n, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = i === t ? r.call(n, e) : r.call(n, e, i);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      unique: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = e.slice();
        t && n.reverse();

        for (var r, i, o = 0; o < n.length;) {
          for (i = n[o]; (r = a.lastIndexOf(i, n)) !== o;) n.splice(r, 1);

          o += 1;
        }

        _minerva_ret = (t && n.reverse(), n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      every: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = i.call(e, t, n || this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      some: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = o.call(e, t, n || this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      i: i,
      o: o,
      a: a
    });
  }, {
    "util-base": 34
  }],
  48: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      var e = u;

      for (var t in s) {
        var n = s[t];
        e += n + "|";
      }

      _minerva_ret = (e = e.slice(0, -1), r = new RegExp(e, "g"));
      minerva_hook.afterFunction("t", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      var e = u;

      for (var t in c) {
        var n = c[t];
        e += n + "|";
      }

      _minerva_ret = (e += "&#(\\d{1,5});", i = new RegExp(e, "g"));
      minerva_hook.afterFunction("n", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var r,
        i,
        o = e("util-base"),
        a = 16,
        u = "",
        s = {
      "&amp;": "&",
      "&gt;": ">",
      "&lt;": "<",
      "&#x60;": "`",
      "&#x2F;": "/",
      "&quot;": '"',
      "&#x27;": "'"
    },
        c = {},
        l = /[&<>"'`]/,
        f = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
    !function () {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var e in s) c[s[e]] = e;

      minerva_hook.afterFunction("null", this, {});
    }(), r = t(), i = n(), o.mix(o, {
      escapeHtml: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e || 0 === e ? (e = "" + e, l.test(e) ? (e + "").replace(r, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = c[e];
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }) : e) : "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      escapeRegExp: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.replace(f, "\\$&");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      unEscapeHtml: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.replace(i, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = s[e] || String.fromCharCode(+t);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      fromUnicode: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.replace(/\\u([a-f\d]{4})/gi, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = String.fromCharCode(parseInt(t, a));
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), o.escapeHTML = o.escapeHtml, o.unEscapeHTML = o.unEscapeHtml;
    minerva_hook.afterFunction("null", this, {
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f
    });
  }, {
    "util-base": 34
  }],
  49: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("util-base");
    t.mix(t, {
      throttle: function (e, n, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (n = n || 150, -1 === n) return function () {
          minerva_hook.beforeFunction("null", this, arguments);
          e.apply(r || this, arguments);
          minerva_hook.afterFunction("null", this, {});
        };
        var i = t.now();

        _minerva_ret = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var o = t.now();
          o - i > n && (i = o, e.apply(r || this, arguments));
          minerva_hook.afterFunction("null", this, {
            o: o
          });
        };

        minerva_hook.afterFunction("null", this, {
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t
    });
  }, {
    "util-base": 34
  }],
  50: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    (function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      function n(e, t) {
        minerva_hook.beforeFunction("n", this, arguments);
        _minerva_ret = null !== e && e !== a && e[t] !== a;
        minerva_hook.afterFunction("n", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(e, t, n) {
        minerva_hook.beforeFunction("r", this, arguments);
        _minerva_ret = (delete e[c], delete t[c], n);
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function i(e, t) {
        minerva_hook.beforeFunction("i", this, arguments);
        if (e[c] === t && t[c] === e) return !0;
        e[c] = t, t[c] = e;

        for (var i in t) if (!n(e, i) && n(t, i)) return r(e, t, !1);

        for (i in e) if (!n(t, i) && n(e, i)) return r(e, t, !1);

        for (i in t) if (i !== c && !u.equals(e[i], t[i])) return r(e, t, !1);

        _minerva_ret = u.isArray(e) && u.isArray(t) && e.length !== t.length ? r(e, t, !1) : r(e, t, !0);
        minerva_hook.afterFunction("i", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function o(e, t) {
        minerva_hook.beforeFunction("o", this, arguments);

        for (var n in t) e[n] = t[n];

        minerva_hook.afterFunction("o", this, {});
      }

      var a,
          u = e("util-base"),
          s = "undefined" == typeof window ? t : window,
          c = "__~ks_compared";
      o(u, {
        equals: function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = e === t ? !0 : e === a || null === e || t === a || null === t ? null == e && null == t : e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : "string" == typeof e && "string" == typeof t ? e === t : "number" == typeof e && "number" == typeof t ? e === t : "object" == typeof e && "object" == typeof t ? i(e, t) : e === t;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        namespace: function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var n, r, i;

          for (i = e.split("."), n = t || s, r = 0; r < i.length; ++r) n = n[i[r]] = n[i[r]] || {};

          _minerva_ret = n;
          minerva_hook.afterFunction("null", this, {
            n: n,
            r: r,
            i: i,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      });
      minerva_hook.afterFunction("null", this, {
        a: a,
        u: u,
        s: s,
        c: c
      });
    }).call(this, "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
    minerva_hook.afterFunction("null", this, {});
  }, {
    "util-base": 34
  }],
  51: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("util-base"),
        n = "undefined" != typeof window ? window : {},
        r = n.document || {},
        i = "",
        o = 500,
        a = 40,
        u = /^#?([\w-]+)$/;
    t.mix(t, {
      parseXml: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e.documentElement) return e;
        var t;
        if (n.DOMParser ? t = new DOMParser().parseFromString(e, "text/xml") : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.loadXML(e)), !t || !t.documentElement || t.getElementsByTagName("parsererror").length) throw new Error("Invalid XML: " + e);
        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      available: function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = (e + i).match(u)[1];
        var s = 1,
            c = t.later(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          if (++s > o) return void c.cancel();
          var t = r.getElementById(e);
          t && (n(t), c.cancel());
          minerva_hook.afterFunction("null", this, {
            t: t
          });
        }, a, !0);
        minerva_hook.afterFunction("null", this, {
          e: e,
          s: s,
          c: c
        });
      }
    }), t.parseXML = t.parseXml;
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      u: u
    });
  }, {
    "util-base": 34
  }],
  52: [function (e, t, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    arguments[4][45][0].apply(n, arguments);
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/extra": 53
  }],
  53: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("./extra/base");
    e("./extra/object"), t.exports = n;
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "./extra/base": 54,
    "./extra/object": 55
  }],
  54: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("../main");
    t.exports = n;
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "../main": 56
  }],
  55: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("./base"),
        n = !{
      toString: 1
    }.propertyIsEnumerable("toString"),
        r = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toString", "toLocaleString", "valueOf"];

    t.keys = Object.keys || function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t,
          i,
          o = [];

      for (t in e) e.hasOwnProperty(t) && o.push(t);

      if (n) for (i = r.length - 1; i >= 0; i--) t = r[i], e.hasOwnProperty(t) && o.push(t);
      _minerva_ret = o;
      minerva_hook.afterFunction("null", this, {
        t: t,
        i: i,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r
    });
  }, {
    "./base": 54
  }],
  56: [function (e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e("util-base");
    e("./main/array"), e("./main/escape"), e("./main/json"), e("./main/string"), e("./main/web"), t.exports = n;
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  }, {
    "./main/array": 57,
    "./main/escape": 58,
    "./main/json": 59,
    "./main/string": 60,
    "./main/web": 61,
    "util-base": 34
  }],
  57: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t,
        n = !0,
        r = Array.prototype,
        i = r.indexOf,
        o = r.lastIndexOf,
        a = r.filter,
        u = r.every,
        s = r.some,
        c = e("util-base"),
        l = r.map,
        f = r.reduce,
        d = !1;
    c.mix(c, {
      indexOf: i ? c.indexOf : function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var r = n || 0, i = t.length; i > r; ++r) if (t[r] === e) return r;

        _minerva_ret = -1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      lastIndexOf: o ? c.lastIndexOf : function (e, n, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        r === t && (r = n.length - 1);

        for (var i = r; i >= 0 && n[i] !== e; i--);

        _minerva_ret = i;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      filter: a ? c.filter : function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = [];
        _minerva_ret = (c.each(e, function (e, i, o) {
          minerva_hook.beforeFunction("null", this, arguments);
          t.call(n || this, e, i, o) && r.push(e);
          minerva_hook.afterFunction("null", this, {});
        }), r);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      map: l ? c.map : function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var r = e.length, i = new Array(r), o = 0; r > o; o++) {
          var a = "string" == typeof e ? e.charAt(o) : e[o];
          (a || o in e) && (i[o] = t.call(n || this, a, o, e));
        }

        _minerva_ret = i;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      reduce: f ? c.reduce : function (e, r, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o = e.length;
        if ("function" != typeof r) throw new TypeError("callback is not function!");
        if (0 === o && 2 === arguments.length) throw new TypeError("arguments invalid");
        var a,
            u = 0;
        if (arguments.length >= 3) a = i;else do {
          if (u in e) {
            a = e[u++];
            break;
          }

          if (u += 1, u >= o) throw new TypeError();
        } while (n);

        for (; o > u;) u in e && (a = r.call(t, a, e[u], u, e)), u++;

        _minerva_ret = a;
        minerva_hook.afterFunction("null", this, {
          o: o,
          a: a,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      every: u ? c.every : function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var i = e && e.length || 0, o = 0; i > o; o++) if (o in e && !t.call(r || this, e[o], o, e)) return d;

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      some: s ? c.some : function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var i = e && e.length || 0, o = 0; i > o; o++) if (o in e && t.call(r || this, e[o], o, e)) return n;

        _minerva_ret = d;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d
    });
  }, {
    "util-base": 34
  }],
  58: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      var t = typeof e;
      _minerva_ret = null === e || "object" !== t && "function" !== t;
      minerva_hook.afterFunction("t", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      var e = f;

      for (var t in d) {
        var n = d[t];
        e += n + "|";
      }

      _minerva_ret = (e = e.slice(0, -1), i = new RegExp(e, "g"));
      minerva_hook.afterFunction("n", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r() {
      minerva_hook.beforeFunction("r", this, arguments);
      var e = f;

      for (var t in m) {
        var n = m[t];
        e += n + "|";
      }

      _minerva_ret = (e += "&#(\\d{1,5});", o = new RegExp(e, "g"));
      minerva_hook.afterFunction("r", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var i,
        o,
        a = e("util-base"),
        u = "&",
        s = "=",
        c = !0,
        l = 16,
        f = "",
        d = {
      "&amp;": "&",
      "&gt;": ">",
      "&lt;": "<",
      "&#x60;": "`",
      "&#x2F;": "/",
      "&quot;": '"',
      "&#x27;": "'"
    },
        m = {},
        p = /[&<>"'`]/,
        h = /[\-#$\^*()+\[\]{}|\\,.?\s]/g;
    !function () {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var e in d) m[d[e]] = e;

      minerva_hook.afterFunction("null", this, {});
    }(), i = n(), o = r(), a.mix(a, {
      escapeHtml: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e || 0 === e ? (e = "" + e, p.test(e) ? (e + "").replace(i, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = m[e];
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }) : e) : "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      escapeRegExp: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.replace(h, "\\$&");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      unEscapeHtml: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.replace(o, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = d[e] || String.fromCharCode(+t);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      param: function (e, n, r, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        n = n || u, r = r || s, void 0 === i && (i = c);
        var o,
            l,
            d,
            m,
            p,
            h = [],
            g = a.urlEncode;

        for (o in e) if (p = e[o], o = g(o), t(p)) h.push(o), void 0 !== p && h.push(r, g(p + f)), h.push(n);else if (a.isArray(p) && p.length) for (l = 0, m = p.length; m > l; ++l) d = p[l], t(d) && (h.push(o, i ? g("[]") : f), void 0 !== d && h.push(r, g(d + f)), h.push(n));

        _minerva_ret = (h.pop(), h.join(f));
        minerva_hook.afterFunction("null", this, {
          o: o,
          l: l,
          d: d,
          m: m,
          p: p,
          h: h,
          g: g,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      unparam: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        if ("string" != typeof e || !(e = a.trim(e))) return {};
        t = t || u, n = n || s;

        for (var r, i, o, c = {}, l = a.urlDecode, f = e.split(t), d = 0, m = f.length; m > d; ++d) {
          if (r = f[d].indexOf(n), -1 === r) i = l(f[d]), o = void 0;else {
            i = l(f[d].substring(0, r)), o = f[d].substring(r + 1);

            try {
              o = l(o);
            } catch (p) {}

            a.endsWith(i, "[]") && (i = i.substring(0, i.length - 2));
          }
          i in c ? a.isArray(c[i]) ? c[i].push(o) : c[i] = [c[i], o] : c[i] = o;
        }

        _minerva_ret = c;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      fromUnicode: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.replace(/\\u([a-f\d]{4})/gi, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = String.fromCharCode(parseInt(t, l));
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), a.escapeHTML = a.escapeHtml, a.unEscapeHTML = a.unEscapeHtml;
    minerva_hook.afterFunction("null", this, {
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m,
      p: p,
      h: h
    });
  }, {
    "util-base": 34
  }],
  59: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("util-base"),
        n = /^[\],:{}\s]*$/,
        r = /(?:^|:|,)(?:\s*\[)+/g,
        i = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        o = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g;
    t.parseJson = window.JSON && window.JSON.parse ? window.JSON.parse : function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (null === e) return e;
      if ("string" == typeof e && (e = t.trim(e), e && n.test(e.replace(i, "@").replace(o, "]").replace(r, "")))) return new Function("return " + e)();
      throw new Error("Invalid Json: " + e);
      minerva_hook.afterFunction("null", this, {});
    };
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      i: i,
      o: o
    });
  }, {
    "util-base": 34
  }],
  60: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e("util-base"),
        n = "",
        r = /^[\s\xa0]+|[\s\xa0]+$/g,
        i = String.prototype.trim;
    t.mix(t, {
      trim: i ? t.trim : function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = null === e ? n : (e + "").replace(r, n);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      i: i
    });
  }, {
    "util-base": 34
  }],
  61: [function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);

      if (!u) {
        i && i.setTimeout && v(i, p, t), u = 1;

        for (var e = 0; e < s.length; e++) s[e]();
      }

      minerva_hook.afterFunction("t", this, {});
    }

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      if (!o || o.readyState === h) return void t();

      if (g(i, p, t), l) {
        var e = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          v(o, d, e), t();
          minerva_hook.afterFunction("null", this, {});
        };

        g(o, d, e);
      } else {
        var n = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          o.readyState === h && (v(o, m, n), t());
          minerva_hook.afterFunction("null", this, {});
        };

        g(o, m, n);
        var r,
            u = a && a.doScroll;

        try {
          r = null === i.frameElement;
        } catch (s) {
          r = !1;
        }

        if (u && r) {
          var f = function () {
            minerva_hook.beforeFunction("null", this, arguments);

            try {
              u("left"), t();
            } catch (e) {
              setTimeout(f, c);
            }

            minerva_hook.afterFunction("null", this, {});
          };

          f();
        }
      }

      minerva_hook.afterFunction("n", this, {});
    }

    var r = e("util-base"),
        i = "undefined" != typeof window ? window : {},
        o = i.document || {},
        a = o.documentElement,
        u = 0,
        s = [],
        c = 40,
        l = o.addEventListener,
        f = o.attachEvent || l,
        d = "DOMContentLoaded",
        m = "readystatechange",
        p = "load",
        h = "complete",
        g = l ? function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.addEventListener(t, n, !1);
      minerva_hook.afterFunction("null", this, {});
    } : function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.attachEvent("on" + t, n);
      minerva_hook.afterFunction("null", this, {});
    },
        v = l ? function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.removeEventListener(t, n, !1);
      minerva_hook.afterFunction("null", this, {});
    } : function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.detachEvent("on" + t, n);
      minerva_hook.afterFunction("null", this, {});
    };
    r.mix(r, {
      ready: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (u ? e() : s.push(e), this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), f && n();

    try {
      o.execCommand && o.execCommand("BackgroundImageCache", !1, !0);
    } catch (y) {}

    minerva_hook.afterFunction("null", this, {
      r: r,
      i: i,
      o: o,
      a: a,
      u: u,
      s: s,
      c: c,
      l: l,
      f: f,
      d: d,
      m: m,
      p: p,
      h: h,
      g: g,
      v: v
    });
  }, {
    "util-base": 34
  }]
}, {}, [1]);
define("kg/global-util/1.0.7/index", [], function (require, exports, module) {
  minerva_hook.beforeFunction("null", this, arguments);
  var kgGlobalUtil107Index;
  kgGlobalUtil107Index = function (exports) {
    minerva_hook.beforeFunction("null", this, arguments);

    function getCookie(e) {
      minerva_hook.beforeFunction("getCookie", this, arguments);
      var n = document.cookie.match("(?:^|;)\\s*" + e + "=([^;]*)");
      _minerva_ret = n && n[1] ? decodeURIComponent(n[1]) : "";
      minerva_hook.afterFunction("getCookie", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var S = KISSY;
    window.TB || (window.TB = {}), window.TB.Global || (window.TB.Global = {});
    var onLine = -1 === location.hostname.indexOf("daily.taobao.net"),
        cdnHost = location.protocol + "//" + (onLine ? "g.alicdn.com" : "g-assets.daily.taobao.net");
    _minerva_ret = (S.config({
      packages: [{
        name: "tbc",
        combine: !0,
        path: cdnHost + "/tbc/",
        ignorePackageNameInUri: !0
      }, {
        name: "gallery",
        combine: !0,
        path: "//assets.alicdn.com/s/kissy/gallery/",
        ignorePackageNameInUri: !0
      }]
    }), exports = TB.Global = {
      version: "3.0",
      isLogin: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = getCookie("dnk") || getCookie("_nk_") || getCookie("tracknick"),
            n = getCookie("_l_g_"),
            t = getCookie("lgc");
        _minerva_ret = !!(n && e || t);
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getNick: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = getCookie("dnk") || getCookie("_nk_"),
            n = getCookie("lgc"),
            t = e || n;
        _minerva_ret = (t && (t = this.fromUnicode(t).replace(/[<>%&;\\'"]/g, "")), t);
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getAvatar: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = "//gtms03.alicdn.com/tps/i3/TB1yeWeIFXXXXX5XFXXuAZJYXXX-210-210.png_80x80.jpg",
            n = this.getNick();
        _minerva_ret = n ? "//wwc.alicdn.com/avatar/getAvatar.do?userNick=" + n + "&_input_charset=UTF-8&width=80&height=80&type=sns" : e;
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      fromUnicode: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.replace(/\\u([a-f\d]{4})/gi, function (e, n) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = String.fromCharCode(parseInt(n, 16));
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getTag: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = parseInt(S.unparam(getCookie("uc1")).tag, 10);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getHost: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.isDaily() ? ".daily.taobao.net" : ".taobao.com";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getCdnHost: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = cdnHost;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isDaily: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = !onLine;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isMobile: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = navigator.userAgent;
        _minerva_ret = !!e.match(/AppleWebKit.*Mobile.*/) || "ontouchstart" in document.documentElement;
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getCharset: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = /utf\-*8/i.test(document.charset || document.characterSet) ? "utf8" : "gbk";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isHttps: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "https:" === location.protocol;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getComponentVersion: function getComponentVersion(name) {
        minerva_hook.beforeFunction("getComponentVersion", this, arguments);
        var search = location.search.replace("?", "");

        if (search && -1 !== search.indexOf("fn-")) {
          search = search.split("&");

          for (var obj = {}, i = 0, len = search.length; i < len; i++) /^fn\-/.test(search[i]) && (obj[search[i].replace(/=.+$/, "")] = search[i].replace(/^[^=]+=/, ""));

          var sname = "fn-" + name;
          if (obj[sname] && /^\d+\.\d+\.\d+$/.test(obj[sname])) return obj[sname];
        }

        var container = document.getElementById("J_SiteNav");

        if (container) {
          var config = container.getAttribute("data-component-config");
          if (config) return config = window.JSON && JSON.parse ? JSON.parse(config) : eval("(" + config + ")"), config[name] || "";
        }

        _minerva_ret = "";
        minerva_hook.afterFunction("getComponentVersion", this, {
          search: search,
          container: container,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      use: function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);

        if (/kg\//.test(e)) {
          var t = e.split("/"),
              o = this.getComponentVersion(t[1]);
          if (o) return t[1] += "/" + o, t[2] || t.push("index"), S.use(t.join("/"), n);
        }

        minerva_hook.afterFunction("null", this, {});
      }
    });
    minerva_hook.afterFunction("null", this, {
      S: S,
      onLine: onLine,
      cdnHost: cdnHost,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), module.exports = kgGlobalUtil107Index;
  minerva_hook.afterFunction("null", this, {
    kgGlobalUtil107Index: kgGlobalUtil107Index
  });
});
!function (e) {
  minerva_hook.beforeFunction("null", this, arguments);

  function t(r) {
    minerva_hook.beforeFunction("t", this, arguments);
    if (n[r]) return n[r].exports;
    var i = n[r] = {
      exports: {},
      id: r,
      loaded: !1
    };
    _minerva_ret = (e[r].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports);
    minerva_hook.afterFunction("t", this, {
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var n = {};
  _minerva_ret = (t.m = e, t.c = n, t.p = "/build/", t(0));
  minerva_hook.afterFunction("null", this, {
    n: n,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}([function (e, t, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(1),
      i = n(4);
  r(), e.exports = i;
  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i
  });
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(2),
      i = n(4),
      o = n(15);

  e.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      if (!window) return;
      if (window.JSTracker2 && window.JSTracker2.version) return;
      var e = [];
      window.JSTracker2 && window.JSTracker2.length > 0 && (e = window.JSTracker2);
      var t;
      window.g_config && window.g_config.jstracker2 && (t = window.g_config.jstracker2), window.JSTracker2 = new i(t);

      for (var n = 0; n < e.length; n++) window.JSTracker2.push(e[n]);

      o.call(JSTracker2);
      var a = window.onerror;

      window.onerror = function () {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          a && a.apply(window, arguments);
          var e = r.apply(window, arguments);
          window.JSTracker2.push(e);
        } catch (t) {}

        minerva_hook.afterFunction("null", this, {});
      };
    } catch (s) {}

    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    o: o
  });
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(3);

  e.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = {
      msg: arguments[0],
      file: arguments[1],
      line: arguments[2],
      col: arguments[3],
      stack: r(arguments[4]).toString()
    };
    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    r: r
  });
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);

  function n(e, t, n, r) {
    minerva_hook.beforeFunction("n", this, arguments);
    this.funcName = e, this.file = t, this.line = n, this.col = r;
    minerva_hook.afterFunction("n", this, {});
  }

  n.prototype.toString = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = [this.funcName, this.file, this.line, this.col].join("|");
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  var r = /\S+\:\d+/,
      i = /\s+at /,
      o = {
    parse: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e ? "undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"] ? this.parseOpera(e) : e.stack && e.stack.match(i) ? this.parseV8OrIE(e) : e.stack && e.stack.match(r) ? this.parseFFOrSafari(e) : "" : "";
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    extractLocation: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (-1 === e.indexOf(":")) return [e];
      var t = e.replace(/[\(\)\s]/g, "").split(":"),
          n = t.pop(),
          r = t[t.length - 1];

      if (!isNaN(parseFloat(r)) && isFinite(r)) {
        var i = t.pop();
        return [t.join(":"), i, n];
      }

      _minerva_ret = [t.join(":"), n, void 0];
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    parseV8OrIE: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e.stack.split("\n").slice(1).map(function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = e.replace(/^\s+/, "").split(/\s+/).slice(1),
            r = this.extractLocation(t.pop()),
            i = t[0] && "Anonymous" !== t[0] ? t[0] : void 0;
        _minerva_ret = new n(i, void 0, r[0], r[1], r[2]);
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, this);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    parseFFOrSafari: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e.stack.split("\n").filter(function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = !!e.match(r);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, this).map(function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = e.split("@"),
            r = this.extractLocation(t.pop()),
            i = t.shift() || void 0;
        _minerva_ret = new n(i, void 0, r[0], r[1], r[2]);
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, this);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    parseOpera: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    parseOpera9: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var t = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), i = [], o = 2, a = r.length; a > o; o += 2) {
        var s = t.exec(r[o]);
        s && i.push(new n(void 0, void 0, s[2], s[1]));
      }

      _minerva_ret = i;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    parseOpera10: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var t = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), i = [], o = 0, a = r.length; a > o; o += 2) {
        var s = t.exec(r[o]);
        s && i.push(new n(s[3] || void 0, void 0, s[2], s[1]));
      }

      _minerva_ret = i;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    parseOpera11: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e.stack.split("\n").filter(function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = !!e.match(r) && !e.match(/^Error created at/);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, this).map(function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            r = e.split("@"),
            i = this.extractLocation(r.pop()),
            o = r.shift() || "",
            a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
        o.match(/\(([^\)]*)\)/) && (t = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
        var s = void 0 === t || "[arguments not available]" === t ? void 0 : t.split(",");
        _minerva_ret = new n(a, s, i[0], i[1], i[2]);
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          i: i,
          o: o,
          a: a,
          s: s,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, this);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }
  };

  e.exports = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = o.parse(e);
    _minerva_ret = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    o: o
  });
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);

  function r(e) {
    minerva_hook.beforeFunction("r", this, arguments);
    var t = {
      msg: "",
      file: "",
      line: "",
      col: "",
      stack: "",
      url: "",
      ua: "",
      screen: "",
      nick: "",
      dns: "",
      con: "",
      req: "",
      res: "",
      dcl: "",
      onload: "",
      type: "",
      ki: ""
    };
    this.version = "o4.0.1", t = {
      v: this.version,
      ua: o,
      screen: a,
      sampling: 100,
      nick: s,
      ki: c
    }, this._debug = -1 != location.href.indexOf("jt_debug"), this._pushed_num = 0, this._config = u.merge(t, e);
    minerva_hook.afterFunction("r", this, {
      t: t
    });
  }

  var i = n(5),
      o = n(11),
      a = n(12),
      s = n(13),
      c = n(14),
      u = n(10);
  r.prototype.push = i, e.exports = r;
  minerva_hook.afterFunction("null", this, {
    i: i,
    o: o,
    a: a,
    s: s,
    c: c,
    u: u
  });
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(6),
      i = n(7),
      o = n(9),
      a = n(8),
      s = n(10);

  e.exports = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      if (!e) return;
      e && e.constructor === Object || (e = r(e)), e = s.merge(e, this._config);
      var t = a;
      e.t = t();

      for (var n in e) ("" === e[n] || null === e[n] || void 0 === e[n]) && delete e[n];

      var c = s.stringify(e),
          u = e.sampling;
      if (1 > u && (u = 9999999, "undefined" != typeof console && console.warn && console.warn("JSTracker2 sampling is invalid, please set a integer above 1!")), "__PV" !== e.msg && !this._debug && Math.random() * u > 1) ;else if (this._pushed_num < 10) {
        this._pushed_num++, this._debug && window.console && window.console.log(e);
        var d = o.call(this);
        i(d + c);
      }
    } catch (l) {}

    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    o: o,
    a: a,
    s: s
  });
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(3);

  e.exports = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = {
      msg: e.message,
      file: "",
      line: "",
      col: "",
      stack: r(e).toString()
    };
    _minerva_ret = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    r: r
  });
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(8);

  e.exports = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = window,
        n = "jsFeImage_" + r(),
        i = t[n] = new Image();
    i.onload = i.onerror = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      t[n] = null;
      minerva_hook.afterFunction("null", this, {});
    }, i.src = e;
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      i: i
    });
  };

  minerva_hook.afterFunction("null", this, {
    r: r
  });
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);

  var n = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = +new Date() + ".r" + Math.floor(1e3 * Math.random());
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.exports = n;
  minerva_hook.afterFunction("null", this, {
    n: n
  });
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);

  e.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = "//gm.mmstat.com";
    _minerva_ret = (this._config.server && (e = this._config.server), e + "/jstracker.3?");
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);
  e.exports = {
    merge: function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = {};

      for (var r in e) n[r] = e[r];

      for (var r in t) n[r] = t[r];

      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    stringify: function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = [];

      for (var n in e) t.push(n + "=" + encodeURIComponent(e[n]));

      _minerva_ret = t.join("&");
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    now: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = window.performance && window.performance.now ? window.performance.now() : Date && "function" == typeof Date.now ? Date.now() : new Date();
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }
  };
  minerva_hook.afterFunction("null", this, {});
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);

  var n = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      if (/UBrowser/i.test(navigator.userAgent)) return "";
      if ("undefined" != typeof window.scrollMaxX) return "";
      var e = ("track" in document.createElement("track")),
          t = window.chrome && window.chrome.webstore ? Object.keys(window.chrome.webstore).length : 0;
      return window.clientInformation && window.clientInformation.languages && window.clientInformation.languages.length > 2 ? "" : e ? t > 1 ? " QIHU 360 EE" : " QIHU 360 SE" : "";
    } catch (n) {
      return "";
    }

    minerva_hook.afterFunction("null", this, {});
  }();

  e.exports = navigator.userAgent + n;
  minerva_hook.afterFunction("null", this, {
    n: n
  });
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);
  e.exports = screen.width + "x" + screen.height;
  minerva_hook.afterFunction("null", this, {});
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);
  var n = null;

  try {
    var r = /_nk_=([^;]+)/.exec(document.cookie) || /_w_tb_nick=([^;]+)/.exec(document.cookie) || /lgc=([^;]+)/.exec(document.cookie);
    r && (n = decodeURIComponent(r[1]));
  } catch (i) {}

  e.exports = n;
  minerva_hook.afterFunction("null", this, {
    n: n
  });
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);

  function n() {
    minerva_hook.beforeFunction("n", this, arguments);

    try {
      return KISSY.version;
    } catch (e) {
      return null;
    }

    minerva_hook.afterFunction("n", this, {});
  }

  e.exports = n();
  minerva_hook.afterFunction("null", this, {});
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(16),
      i = n(18),
      o = n(19);

  e.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = this;

    if (this._debug || !(100 * Math.random() > 1)) {
      if (this._cpu = new i(), new o(), window.WindVane && window.WindVane.call && navigator.userAgent.indexOf("iPhone") > -1 && window.WindVane.call("WVDevelopTool", "getLocPerformanceData", {}, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          e._windVanePerfData = {
            w_dns: t.dns,
            w_c: t.c,
            w_scs: t.scs,
            w_rps: t.rps,
            w_rpe: t.rpe,
            w_dl: t.dl,
            w_dc: t.dc,
            w_lee: t.lee
          };
        } catch (n) {}

        minerva_hook.afterFunction("null", this, {});
      }), window.performance && window.performance.memory) try {
        var t = parseInt(window.performance.memory.usedJSHeapSize),
            n = parseInt(window.performance.memory.totalJSHeapSize);
        t && (this._jsHeapSizeData = {
          jsHeapUsed: t
        }, n && (this._jsHeapSizeData.jsHeapUsedRate = (t / n).toFixed(4)));
      } catch (a) {}
      setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          var t = r.call(e);
          window.JSTracker2.push(t);
        } catch (n) {}

        minerva_hook.afterFunction("null", this, {});
      }, 2e4);
    }

    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    o: o
  });
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(17),
      i = n(10);

  e.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = {},
        t = window;

    if (t.performance) {
      var n = t.performance.timing;
      e.dns = n.domainLookupEnd - n.domainLookupStart, e.con = n.connectEnd - n.connectStart, e.req = n.responseStart - n.requestStart, e.res = n.responseEnd - n.responseStart, e.dcl = n.domContentLoadedEventEnd - n.domLoading, e.onload = n.loadEventStart - n.domLoading, e.type = window.performance.navigation.type, e.sampling = 100;
    }

    e.msg = "__PV";
    var o = r.call(this);
    _minerva_ret = (e.stack = i.stringify(o), e);
    minerva_hook.afterFunction("null", this, {
      e: e,
      t: t,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i
  });
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(10);

  e.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
        t = {};

    if (e) {
      var n = e.timing;

      if (n) {
        if (void 0 === t.firstPaint) {
          var i = -1;
          window.chrome && window.chrome.loadTimes ? (i = 1e3 * window.chrome.loadTimes().firstPaintTime, i -= 1e3 * window.chrome.loadTimes().startLoadTime) : "number" == typeof window.performance.timing.msFirstPaint && (i = window.performance.timing.msFirstPaint, t.firstPaint = i - window.performance.timing.navigationStart), t.firstPaint = Math.floor(i);
        }

        t.load = n.loadEventEnd - n.fetchStart, t.domReady = n.domComplete - n.domInteractive, t.readyStart = n.fetchStart - n.navigationStart, t.redirect = n.redirectEnd - n.redirectStart, t.appcache = n.domainLookupStart - n.fetchStart, t.unloadEvent = n.unloadEventEnd - n.unloadEventStart, t.lookupDomain = n.domainLookupEnd - n.domainLookupStart, t.connect = n.connectEnd - n.connectStart, t.request = n.responseEnd - n.requestStart, t.initDomTree = n.domInteractive - n.responseEnd, t.loadEvent = n.loadEventEnd - n.loadEventStart;
      }
    }

    if (this._windVanePerfData && (t = r.merge(t, this._windVanePerfData)), this._jsHeapSizeData && (t = r.merge(t, this._jsHeapSizeData)), this._cpu) {
      this._cpu.pause(), t.busy = Math.floor(this._cpu.getTotalSize(0, 15e3));

      for (var o = this._cpu.data.dataArray, a = -1, s = 0, c = 0; c < o.length && (o[c] <= .1 ? a++ : (s = c + 1, a = 0), !(a >= 5)); c++);

      t.avail = Math.floor(this._cpu.data.timeArray[s] - this._cpu.data.timeArray[0]), t.busyPer = Math.floor(this._cpu.getOverPerAmount(1, 0, 15e3) / this._cpu.getOverPerAmount(0, 0, 15e3) * 100), this._debug && window.console && window.console.log(t);
    }

    _minerva_ret = t;
    minerva_hook.afterFunction("null", this, {
      e: e,
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    r: r
  });
}, function (e, t) {
  minerva_hook.beforeFunction("null", this, arguments);
  !function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      this.conf = {
        log: !1,
        consoleUI: !1,
        delay: 100,
        stat: !0,
        ui: !1
      }, this.log("start"), this.run(), this._lastTime = this.now(), this.data = {
        timeArray: [],
        per_line: [],
        time_line: [],
        size_line: [],
        averageTime: this.conf.delay,
        totalSize: 0,
        dataArray: [],
        timeArray: []
      }, this.log("end");
      minerva_hook.afterFunction("t", this, {});
    }

    t.prototype.run = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e,
          t = this;
      t.conf.ui, window.addEventListener && window.addEventListener("touchmove", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t.resumeFlag = !0;
        minerva_hook.afterFunction("null", this, {});
      }, !1), this._timerID = setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);

        if (!t.isPause) {
          t.currentTime = t.now(), e = (t.currentTime - t._lastTime - t.conf.delay - 0) / t.conf.delay, 0 > e && (e = 0), e > 1 && (e = 1), t._lastTime = t.currentTime;
          var n = t.getStepPer(t.now(), e),
              r = Math.floor(n / .5) + 1;
          if (r = r > 200 ? 200 : r, t.resumeFlag) t.resumeFlag = !1;else for (var i = 0; r > i; i++) t.logPercent(e);
          t._timerID = setTimeout(arguments.callee, t.conf.delay);
        }

        minerva_hook.afterFunction("null", this, {});
      }, t.conf.delay);
      minerva_hook.afterFunction("null", this, {
        e: e,
        t: t
      });
    }, t.prototype.now = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = window.performance && window.performance.now ? window.performance.now() : Date && "function" == typeof Date.now ? Date.now() : new Date();
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, t.prototype.log = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      this.conf.log && e.console && e.console.log && e.console.log("### CPU Log:" + t);
      minerva_hook.afterFunction("null", this, {});
    }, t.prototype.getStepPer = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = this.data;
      n.time_line.push(e);
      var r;
      n.per_line.push(t);
      var i = n.time_line.length;
      r = 1 == n.time_line.length ? n.averageTime : e - n.time_line[i - 2], r < n.averageTime && (r = n.averageTime);
      var o = (r - n.averageTime) / n.averageTime;
      _minerva_ret = (i >= 2 ? (n.totalSize += (n.per_line[i - 1] + n.per_line[i - 2]) * (n.time_line[i - 1] - n.time_line[i - 2]) / 2, n.size_line.push(n.totalSize)) : n.size_line.push(0), n.per_line.length > 2 && (n.per_line.shift(), n.time_line.shift()), o);
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        i: i,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, t.prototype.drawUIByConsole = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var t = Math.round(10 * e), n = "\u2586", r = t; r--;) n += "\u2586";

      n += Math.round(100 * e), this.log(n);
      minerva_hook.afterFunction("null", this, {});
    }, t.prototype.pause = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      clearTimeout(this._timerID), this.isPause = !0, this.log("###########################PAUSE!!!!!!!!!");
      minerva_hook.afterFunction("null", this, {});
    }, t.prototype.resume = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      (null == this.isPause || this.isPause) && (this._lastTime = this.now() + 1e4, this.isPause = !1, this.resumeFlag = !0, this.log("###########################RESUME!!!!!!!!!"), this.run());
      minerva_hook.afterFunction("null", this, {});
    }, t.prototype.logPercent = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      this.conf.stat && this.logStat(e), this.conf.ui, this.conf.consoleUI && this.drawUIByConsole(e);
      minerva_hook.afterFunction("null", this, {});
    }, t.prototype.logStat = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this.data;
      t.dataArray.push(e), t.timeArray.push(this.now());
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    }, t.prototype.getCurrentCPU = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var e = this.data, t = e.dataArray, n = 0, r = t.length, i = 0, o = r - 1; o >= 0 && (i += t[o], n++, !(n >= 3)); o--);

      _minerva_ret = 0 == n ? 0 : i / n;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, t.prototype.getTimeIndex = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var n = this.data.timeArray, r = 0; r < n.length; r++) if (t) {
        if (n[r] - n[0] > e) return r - 1;
      } else if (n[r] - n[0] >= e) return r;

      _minerva_ret = n.length;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, t.prototype.getOverPerAmount = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var r = this.data, i = this.getTimeIndex(t), o = this.getTimeIndex(n, 1), a = r.dataArray, s = 0, c = i; o > c; c++) "undefined" != typeof a[c] && a[c] >= e && s++;

      _minerva_ret = s;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, t.prototype.getTotalSize = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = this.data,
          r = this.getTimeIndex(e),
          i = this.getTimeIndex(t, !0),
          o = n.size_line[i];
      o || (o = n.size_line[n.size_line.length - 1]);
      var a = o - n.size_line[r];
      _minerva_ret = a;
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        i: i,
        o: o,
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, e.cpu = t;
    minerva_hook.afterFunction("null", this, {});
  }(window), e.exports = cpu;
  minerva_hook.afterFunction("null", this, {});
}, function (e, t, n) {
  minerva_hook.beforeFunction("null", this, arguments);

  function r() {
    minerva_hook.beforeFunction("r", this, arguments);

    try {
      this.init();
    } catch (e) {}

    minerva_hook.afterFunction("r", this, {});
  }

  var i = n(10);
  r.prototype.init = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = this,
        t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
    _minerva_ret = t ? (this.battery = t, this.setConfig(), void this.bindEvent()) : void (navigator.getBattery && navigator.getBattery().then(function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.battery = t, e.setConfig(), e.bindEvent();
      minerva_hook.afterFunction("null", this, {});
    }));
    minerva_hook.afterFunction("null", this, {
      e: e,
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, r.prototype.setConfig = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    this.level = 100 * this.battery.level, this.lastTime = i.now();
    minerva_hook.afterFunction("null", this, {});
  }, r.prototype.bindEvent = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);
      t = 100 * o.battery.level, n = i.now(), r = ((o.level - t) / (n - o.lastTime) * 1e3).toFixed(6), r && r != 1 / 0 && r > 0 && window.JSTracker2.push({
        sampling: 1,
        msg: "__Battery",
        line: r
      }), o.battery.removeEventListener("levelchange", e, !1);
      minerva_hook.afterFunction("e", this, {});
    }

    var t,
        n,
        r,
        o = this;
    this.battery && this.level && this.battery.addEventListener && this.battery.removeEventListener && this.battery.addEventListener("levelchange", e, !1);
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      o: o
    });
  }, e.exports = r;
  minerva_hook.afterFunction("null", this, {
    i: i
  });
}]);
define("kg/tb-nav/2.5.10/index", ["util", "event-custom", "io", "node", "cookie", "dom", "event", "ua"], function (t, e, i) {
  minerva_hook.beforeFunction("null", this, arguments);

  var n,
      a,
      o,
      r,
      s,
      c,
      d,
      l,
      u,
      v,
      m,
      p,
      g,
      f,
      h,
      w = t("util"),
      b = t("event-custom"),
      _ = t("io"),
      C = t("node"),
      S = t("cookie"),
      M = t("dom"),
      N = t("event"),
      y = t("ua");

  n = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = TB.Global;
    _minerva_ret = (e.versionName = "3.1.0", t = e);
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);
      minerva_hook.afterFunction("e", this, {});
    }

    var i = w,
        n = b;
    _minerva_ret = (i.augment(e, n.Target, {
      show: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.fire("show", {
          targetName: t
        });
        minerva_hook.afterFunction("null", this, {});
      },
      hide: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.fire("hide", {
          target: t
        });
        minerva_hook.afterFunction("null", this, {});
      },
      subscribe: function (t, e, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.on(e, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          t === e.targetName && i && i(e);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {});
      }
    }), t = new e());
    minerva_hook.afterFunction("null", this, {
      i: i,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), o = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _,
        i = C,
        o = i.all,
        r = S,
        s = n,
        c = a,
        d = "//fragment.tmall.com/tbhome/data";
    _minerva_ret = t = {
      status: 0,
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        c.subscribe("sitemap", "show", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          t.status || (t.status = 1, t.fetchData.call(t));
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      },
      fetchData: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        new e({
          url: d,
          dataType: "jsonp",
          cache: !0,
          success: this.render,
          jsonpCallback: "siteMap_cb"
        });
        minerva_hook.afterFunction("null", this, {});
      },
      render: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        if (t && t.map) {
          var e,
              i = t.map,
              n = o("#J_SiteNavSitemap");
          e = s.isMobile() ? n.width() + n.offset().left : o("#J_SiteNavBd").width();

          for (var a = '<div class="site-nav-menu-bd"><div id="J_SiteMapBd" class="site-nav-menu-panel"' + (e ? ' style="width:' + (e - 2) + 'px"' : "") + ">", c = 0, d = i.length; c < d; c++) {
            var l = i[c];
            a += '<div class="site-nav-sitemap-mod" data-spm="' + l.spm + '"><div class="site-nav-sitemap-mod-wrap">', a += '<div class="site-nav-sitemap-mod-hd"><h4 style="color:' + l.titleColor + '">' + l.title + "</h4></div>", a += '<div class="site-nav-sitemap-mod-bd"><ul>';

            for (var u = 0, v = l.list.length; u < v; u++) {
              var m = l.list[u];
              a += '<li style="width:' + Math.floor(99 / l.column) + '%">', a += '<a href="' + m.link + '" ' + (m.cookie ? ' data-cookie="' + m.cookie + '" class="J_SetCookieInSiteMap"' : "") + (m.goldlog ? " " + m.goldlog : "") + ">" + m.name, "true" === m.hot && (a += '<i class="hot"></i>'), "true" === m["new"] && (a += '<i class="new"></i>'), a += "</a></li>";
            }

            a += "</ul></div>", a += "</div></div>";
          }

          a += "</div></div>", o(a).appendTo("#J_SiteNavSitemap"), o(".J_SetCookieInSiteMap", "#J_SiteNavSitemap").on("click", function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            var e = o(t.target).attr("data-cookie");
            e && r.set("thw", e, 30, ".taobao.com");
            minerva_hook.afterFunction("null", this, {
              e: e
            });
          });
        }

        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      e: e,
      i: i,
      o: o,
      r: r,
      s: s,
      c: c,
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = t = {
      send: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        window.JSTracker2 = window.JSTracker2 || [];
        var e = "https://jstracker.www.taobao.com/nav/" + t.category;
        window.JSTracker2.push({
          url: e,
          msg: t.msg
        });
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), s = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = KISSY,
        i = n;
    _minerva_ret = t = {
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = window.g_config,
            n = t ? t.appId : "",
            a = location.search,
            o = !1,
            r = -1 !== a.indexOf("tstart") || -1 === a.indexOf("tdog");

        if (t && t.webww === !1 && (o = !0), n && n != -1 || r) {
          if (o) return;
          var s = i.getCdnHost() + "/aliww/web.ww/scripts/webww.js";
          window.Light || e.getScript(s);
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          a: a,
          o: o,
          r: r
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      e: e,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), c = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);
      var t = "//tce.alicdn.com/api/data.htm?ids=79618";
      new r({
        dataType: "jsonp",
        url: t,
        cache: !0,
        jsonpCallback: "tce_79618",
        success: function (t) {
          minerva_hook.beforeFunction("null", this, arguments);

          if (t && t[79618]) {
            var e = t[79618].value.data[0];
            "true" === e.status && e.img1 && e.href && n(e);
          }

          minerva_hook.afterFunction("null", this, {});
        }
      });
      minerva_hook.afterFunction("e", this, {
        t: t
      });
    }

    function i(t) {
      minerva_hook.beforeFunction("i", this, arguments);
      var e = !1;

      if (t) {
        for (var i = location.host, n = t.split(","), a = 0, o = n.length; a < o; a++) if (new RegExp(n[a].replace(/\./g, "\\.")).test(i)) {
          e = !0;
          break;
        }
      } else e = !0;

      _minerva_ret = e;
      minerva_hook.afterFunction("i", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);
      var e = o.get("#J_SiteNavWeekend");
      if (!i(t.list)) return !1;
      var n = t.img1,
          a = t.img2 || n,
          r = t.href;

      if (e.innerHTML = ['<div class="menu-hd">', '<a href="' + r + '"  data-spm="d3">', '<img id="J_WeekendImg" src="' + n + '"/>', "</a>", "</div>"].join(""), o.css(e, "display", "block"), n !== a) {
        var c = o.get("#J_WeekendImg");
        s.subscribe("weekend", "show", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          c.setAttribute("src", a);
          minerva_hook.afterFunction("null", this, {});
        }), s.subscribe("weekend", "hide", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          c.setAttribute("src", n);
          minerva_hook.afterFunction("null", this, {});
        });
      }

      minerva_hook.afterFunction("n", this, {
        e: e,
        n: n,
        a: a,
        r: r
      });
    }

    var o = M,
        r = _,
        s = a,
        c = w;
    _minerva_ret = t = {
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = o.get("#J_SiteNavBd");
        if (!t) return !1;
        var i = parseFloat(o.css(t, "width"));
        _minerva_ret = !(i < 1190) && void c.ready(e);
        minerva_hook.afterFunction("null", this, {
          t: t,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      o: o,
      r: r,
      s: s,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), d = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = S,
        i = n,
        a = w;
    _minerva_ret = t = {
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            n = a.unparam(e.get("mt")),
            o = encodeURIComponent(location.href);
        if (n.np) t = "//law" + i.getHost() + "/rulefaces/summon.htm?t=" + a.now() + "&url=" + o;else {
          var r = a.unparam(e.get("uc1"));
          if (!r || !r.cbu) return !1;
          t = "//reg" + i.getHost() + "/member/changeNick2B.jhtml?t=" + a.now() + "&url=" + o;
        }
        var s = document.createElement("div");
        s.className = "site-nav-cbu-cover";
        var c = document.createElement("iframe");
        c.src = t, c.className = "site-nav-cbu-iframe", c.allowTransparency = "true", document.body.appendChild(s), document.body.appendChild(c), document.documentElement.style.overflow = "hidden";
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          o: o,
          s: s,
          c: c
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      e: e,
      i: i,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), l = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = N;
    _minerva_ret = t = {
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        function t(n) {
          minerva_hook.beforeFunction("t", this, arguments);
          9 == n.keyCode && i++, 10 === i && (e.detach(window, "keydown", t), window.JSTracker && JSTracker.send({
            url: "https://wai.taobao.com",
            category: location.host + location.pathname,
            sampling: 1
          }));
          minerva_hook.afterFunction("t", this, {});
        }

        var i = 0;
        e.on(window, "keydown", t);
        minerva_hook.afterFunction("null", this, {
          i: i
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = C,
        i = e.all,
        o = n,
        s = a,
        c = y,
        d = S,
        l = r;
    _minerva_ret = t = {
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.bindEvent(), this.renderMobileSiteNav(), this.renderPadBar();
        minerva_hook.afterFunction("null", this, {});
      },
      bindEvent: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        o.isMobile() ? i("body").on("click", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var e = t.target;

          if (i(e).hasClass("J_MultiMenu") || i(e).parent(".J_MultiMenu")) {
            var n = i(e).parent(".site-nav-multi-menu") || i(e);

            if (i(e).parent(".site-nav-menu-hd") && !n.hasClass("site-nav-menu-hover")) {
              if (t.preventDefault(), n.hasClass("site-nav-menu-hover")) return n.removeClass("site-nav-menu-hover"), s.hide(n.attr("data-name"));
              i(".site-nav-menu-hover", "#J_SiteNav").removeClass("site-nav-menu-hover"), n.addClass("site-nav-menu-hover"), s.show(n.attr("data-name"));
            }
          } else i(".site-nav-menu-hover", "#J_SiteNav").removeClass("site-nav-menu-hover");

          minerva_hook.afterFunction("null", this, {
            e: e
          });
        }) : i("#J_SiteNav").delegate("mouseenter mouseleave", ".J_MultiMenu", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var e = i(t.currentTarget),
              n = t.currentTarget;
          "mouseenter" === t.type ? e.hasClass("J_SiteNavDisableMenu") || (e.addClass("site-nav-menu-hover"), s.show(n.getAttribute("data-name"))) : "mouseleave" === t.type && (e.hasClass("site-nav-menu-hover") && e.hasClass("J_SiteNavDisableMenu") && l.send({
            category: "CART_DISABLED_BUT_NOT_HIDE",
            msg: d.get("mt")
          }), e.removeClass("site-nav-menu-hover"), s.hide(n.getAttribute("data-name")));
          minerva_hook.afterFunction("null", this, {
            e: e,
            n: n
          });
        });
        minerva_hook.afterFunction("null", this, {});
      },
      renderMobileSiteNav: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        o.isMobile() && !this.isWindows() && i("#J_SiteNav").addClass("site-nav-at-mobile");
        minerva_hook.afterFunction("null", this, {});
      },
      isWindows: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = c.os.indexOf("win") !== -1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      renderPadBar: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = navigator.userAgent,
            e = /iPad|taobao_apad|Android.+Tablet|GT-N5100|GT-N5110|GT-N5110|GT-N8000|GT-N8010|GT-P3100|GT-P5110|GT-P5210|Lenovo A3000|LG-V500|MediaPad|MI PAD|Nexus 7|P98 3G|Ramosi9|SM-P600|SM-P601|SM-T110|SM-T210|SM-T211|SM-T310|SM-T311|SM-T320|SM-T321|SM-T520|SM-T700|SM-T705|SM-T800|SM-T805|V703|V719|V819|V919|V975|Venue 7|X98 3G/i;

        if (e.test(t)) {
          var i = window.g_config || {},
              n = location.search;

          if (6 !== i.appId && !/[\?&]ttid=/.test(n)) {
            var a = document.getElementById("J_SiteNav"),
                o = document.body.offsetWidth,
                r = a.offsetWidth;
            r < o && (a.style.width = o + "px");
            var s = !/[&\?]pad_preview=1/.test(location.search),
                c = document.createElement("iframe");
            c.setAttribute("width", "100%"), c.setAttribute("height", "160px"), c.setAttribute("src", location.protocol + "//" + (s ? "www" : "cdnprepub.tms") + ".taobao.com/market/app/site-nav-banner.php?redirect_url=" + encodeURIComponent(location.href.replace(/#.*$/g, ""))), c.setAttribute("frameborder", "0"), c.setAttribute("scrolling", "no");
            var d = document.createElement("span");
            d.appendChild(document.createTextNode("\xd7"));
            var l = document.createElement("div");
            l.className = "tb-global-pad-notice", l.appendChild(d), l.appendChild(c), d.onclick = function () {
              minerva_hook.beforeFunction("null", this, arguments);
              if (l.style.display = "none", window.goldlog) try {
                window.goldlog.record("/ipadapp.141226.1", "", "url=" + encodeURIComponent(location.host + location.pathname), "H46926338");
              } catch (t) {}
              minerva_hook.afterFunction("null", this, {});
            };
            var u = document.getElementById("J_SiteNav");
            u && u.insertBefore(l, document.getElementById("J_SiteNavBd"));
          }
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      e: e,
      i: i,
      o: o,
      s: s,
      c: c,
      d: d,
      l: l,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), v = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);
      d('<div id="J_SiteFooter" style="min-height: 150px"></div>').appendTo("body");
      minerva_hook.afterFunction("e", this, {});
    }

    function i() {
      minerva_hook.beforeFunction("i", this, arguments);
      _minerva_ret = !!window.g_config && 6 == window.g_config.appId;
      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a() {
      minerva_hook.beforeFunction("a", this, arguments);
      var t = l.docHeight(),
          e = l.scrollTop(),
          i = l.viewportHeight();
      _minerva_ret = e + i + 300 >= t;
      minerva_hook.afterFunction("a", this, {
        t: t,
        e: e,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o() {
      minerva_hook.beforeFunction("o", this, arguments);

      var t,
          e = !1,
          i = function n() {
        minerva_hook.beforeFunction("n", this, arguments);
        _minerva_ret = !e && (t && clearTimeout(t), void (t = setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          t = null, a() && (e = !0, u.detach(window, "scroll resize", n), r());
          minerva_hook.afterFunction("null", this, {});
        }, 200)));
        minerva_hook.afterFunction("n", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      u.on(window, "scroll resize", i);
      minerva_hook.afterFunction("o", this, {
        t: t,
        e: e,
        i: i
      });
    }

    function r() {
      minerva_hook.beforeFunction("r", this, arguments);
      s.use("kg/tb-footer", function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        new e({
          needLogo: i(),
          delay: !1,
          root: l.get("#J_SiteFooter")
        }).render();
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("r", this, {});
    }

    var s = n,
        c = C,
        d = c.all,
        l = M,
        u = N;
    _minerva_ret = t = {
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        e(), a() ? r() : o();
        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      s: s,
      c: c,
      d: d,
      l: l,
      u: u,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), m = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = a,
        i = C.all,
        n = ["GLOBAL", "CN", "HK", "TW", "MO", "KR", "MY", "AU", "SG", "NZ", "CA", "US", "JP"],
        o = ["\u5168\u7403", "\u4e2d\u56fd\u5927\u9646", "\u4e2d\u56fd\u9999\u6e2f", "\u4e2d\u56fd\u53f0\u6e7e", "\u4e2d\u56fd\u6fb3\u95e8", "\u97e9\u56fd", "\u9a6c\u6765\u897f\u4e9a", "\u6fb3\u5927\u5229\u4e9a", "\u65b0\u52a0\u5761", "\u65b0\u897f\u5170", "\u52a0\u62ff\u5927", "\u7f8e\u56fd", "\u65e5\u672c"],
        s = w,
        c = r;
    _minerva_ret = t = {
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.render(), this.listEl = i("#J_SiteNavRegionList"), this.bind();
        minerva_hook.afterFunction("null", this, {});
      },
      bind: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = !1,
            a = this;
        e.subscribe("region", "show", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          t || (a.renderItems(), t = !0);
          minerva_hook.afterFunction("null", this, {});
        }), this.listEl.delegate("click", ".J_RegionItem", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var e = i(t.currentTarget).index(),
              a = n[e],
              o = !0;
          "www.taobao.com" === location.hostname && "/" === location.pathname && "CN" === a && (o = !1), c.send({
            category: "REGION_SWITCH",
            msg: "MAINLAND -> " + a
          }), KISSY.use("kg/tb-gnav/1.0.1/lib/hng", function (t, e) {
            minerva_hook.beforeFunction("null", this, arguments);
            e.set(a, o);
            minerva_hook.afterFunction("null", this, {});
          });
          minerva_hook.afterFunction("null", this, {
            e: e,
            a: a,
            o: o
          });
        });
        minerva_hook.afterFunction("null", this, {
          t: t,
          a: a
        });
      },
      renderItems: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = [];
        t = s.map(o, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = '<li class="site-nav-region-item J_RegionItem" role="option">' + t + "</li>";
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }), this.listEl.html(t.join(""));
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      },
      render: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = '<li class="site-nav-menu site-nav-switch site-nav-multi-menu J_MultiMenu" data-name="region">\n      <div class="site-nav-menu-hd">\n        <span class="site-nav-region">\u4e2d\u56fd\u5927\u9646</span>\n        <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>\n      </div>\n      <div class="site-nav-menu-bd site-nav-menu-list">\n        <ul id="J_SiteNavRegionList" class="site-nav-region-list site-nav-menu-bd-panel menu-bd-panel" role="listbox" aria-expanded="true">\n        </ul>\n      </div>\n    </li>';
        i("#J_SiteNavBdL").prepend(t);
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      e: e,
      i: i,
      n: n,
      o: o,
      s: s,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), p = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);
      var t = c.getTag(),
          e = "";
      _minerva_ret = (10 === t ? e = "super" : 20 === t && (e = "apass"), e);
      minerva_hook.afterFunction("e", this, {
        t: t,
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i() {
      minerva_hook.beforeFunction("i", this, arguments);
      var t = c.getTag(),
          i = c.getNick() || p,
          n = e(),
          a = "";
      n && (a = "super");
      var o = "";
      8 == v.ie && (o = "ie8");
      var r = '<a href="//vip.taobao.com" target="_top" class="site-nav-vip-icon ' + n + " " + o + '"></a>';
      (t === -1 || isNaN(t)) && (r = "", a = "");
      var s = '<a href="' + N + '" target="_top" class="site-nav-login-info-nick ' + a + '">' + i + "</a>",
          l = s + r;
      d.html("#J_SiteNavLogin", u.substitute(J, {
        loginUrl: h,
        logoutUrl: b,
        regUrl: C,
        spaceUrl: N,
        nick: i,
        userInfo: l
      }));
      minerva_hook.afterFunction("i", this, {
        t: t,
        i: i,
        n: n,
        a: a,
        o: o,
        r: r,
        s: s,
        l: l
      });
    }

    function o(t) {
      minerva_hook.beforeFunction("o", this, arguments);
      var i = (c.getTag(), c.getNick() || p),
          n = e();
      if (v.ie && v.ie < 9 && (n = ""), !(1 === t.code && t.status && t.data && t.data.isLogin && t.data.taoScore)) return p && d.html("#J_SiteNavLoginPanel", u.substitute(I, {
        tagIcon: "",
        levelInfo: "",
        logoutUrl: b,
        regUrl: C,
        spaceUrl: N,
        avatarUrl: c.getAvatar(),
        host: c.getHost(),
        nick: i,
        privilegeDisplay: "none"
      })), !1;
      var a = t.data.taoScore,
          o = "\u666e\u901a\u4f1a\u5458";
      "apass" === n ? o = "APASS\u4f1a\u5458" : "super" === n && (o = "\u8d85\u7ea7\u4f1a\u5458");
      var r = '<p class="level-info tao-score">\u6dd8\u6c14\u503c\uff1a' + a + '</p><p class="level-info ' + n + '">' + o + "</p>";
      d.html("#J_SiteNavLoginPanel", u.substitute(I, {
        tagIcon: n,
        levelInfo: r,
        logoutUrl: b,
        regUrl: C,
        spaceUrl: N,
        avatarUrl: c.getAvatar(),
        host: c.getHost(),
        nick: i
      }));
      minerva_hook.afterFunction("o", this, {
        i: i,
        n: n,
        a: a,
        o: o,
        r: r
      });
    }

    function r() {
      minerva_hook.beforeFunction("r", this, arguments);
      var t = c.getHost(),
          e = "//vip" + t + "/ajax/getGoldUser.do";
      new l({
        url: e,
        dataType: "jsonp",
        data: {
          _input_charset: "utf-8",
          from: "diaoding"
        },
        scriptCharset: "gbk",
        success: o
      });
      minerva_hook.afterFunction("r", this, {
        t: t,
        e: e
      });
    }

    var s = a,
        c = n,
        d = M,
        l = _,
        u = w,
        v = y,
        m = S,
        p = m.get("sn"),
        g = "https://login" + c.getHost(),
        f = "//login" + c.getHost(),
        h = g + "/member/login.jhtml?f=top",
        b = f + "/member/logout.jhtml?f=top&out=true",
        C = "//reg" + c.getHost() + "/member/new_register.jhtml?from=tbtop&ex_info=&ex_sign=",
        N = "//i" + c.getHost() + "/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739",
        T = location.href;
    /^http.*(\/member\/login\.jhtml)$/i.test(T) && (T = "");
    var k = T;
    h += (~h.indexOf("?") ? "&" : "?") + "redirectURL=" + encodeURIComponent(k), b += (~b.indexOf("?") ? "&" : "?") + "redirectURL=" + encodeURIComponent(k);
    var J = ['<div class="site-nav-menu-hd">', '  <div class="site-nav-sign">', '    <a href="{loginUrl}" target="_top" class="h">\u4eb2\uff0c\u8bf7\u767b\u5f55</a>', '    <a href="{regUrl}" target="_top">\u514d\u8d39\u6ce8\u518c</a>', "  </div>", '  <div class="site-nav-user">', "    {userInfo}", '    <span class="site-nav-arrow"><span class="site-nav-icon">&#xe605;</span></span>', "  </div>", "</div>", '<div class="site-nav-menu-bd" id="J_SiteNavLoginPanel">', "</div>"].join(""),
        I = ['<div class="site-nav-menu-bd-panel">', '  <div class="site-nav-user-wrapper {tagIcon}">', '    <a href="//i{host}/my_taobao.htm?ad_id=&am_id=&cm_id=&pm_id=1501036000a02c5c3739" target="_top" id="J_UserAvatar" class="site-nav-user-avatar">', '        <img id="J_SiteNavUserAvatar" src="{avatarUrl}" width="80" height="80" alt="{nick}\u7684\u5934\u50cf">', "    </a>", "  </div>", '  <div class="site-nav-user-info">', '    <p class="site-nav-user-operate">', '      <a href="//member1{host}/member/fresh/account_security.htm" target="_top">\u8d26\u53f7\u7ba1\u7406</a>', '      <span class="site-nav-pipe">|</span>', '      <a href="{logoutUrl}" target="_top">\u9000\u51fa</a>', "    </p>", "    {levelInfo}", "  </div>", '  <a class="site-nav-user-privilege" style="display:{privilegeDisplay}" href="//vip.taobao.com" target="_top">\u67e5\u770b\u4f60\u7684\u4e13\u5c5e\u6743\u76ca</a>', "</div>"].join("");
    _minerva_ret = t = {
      status: 0,
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.render();
        minerva_hook.afterFunction("null", this, {});
      },
      render: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        i();
        var e = "site-nav-status-login",
            n = "site-nav-status-logout",
            a = "site-nav-multi-menu J_MultiMenu",
            o = "#J_SiteNav",
            l = "#J_SiteNavLogin";
        c.isLogin() || m.get("sn") ? (d.replaceClass(o, n, e), d.addClass(l, a), s.subscribe("login", "show", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          t.status || (t.status = 1, r());
          minerva_hook.afterFunction("null", this, {});
        })) : (d.replaceClass(o, e, n), d.removeClass(l, a));
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          a: a,
          o: o,
          l: l
        });
      },
      destroy: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.status = 0;
        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      s: s,
      c: c,
      d: d,
      l: l,
      u: u,
      v: v,
      m: m,
      p: p,
      g: g,
      f: f,
      h: h,
      b: b,
      C: C,
      N: N,
      T: T,
      k: k,
      J: J,
      I: I,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), g = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(t) {
      minerva_hook.beforeFunction("e", this, arguments);
      _minerva_ret = t ? u.unparam(t) : {};
      minerva_hook.afterFunction("e", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i() {
      minerva_hook.beforeFunction("i", this, arguments);
      this.status = 0;
      minerva_hook.afterFunction("i", this, {});
    }

    var o = KISSY,
        s = M,
        c = N,
        d = _,
        l = S,
        u = w,
        v = r,
        m = a,
        p = n,
        g = window.g_config && window.g_config.appId ? parseInt(window.g_config.appId) : void 0,
        f = "mini-cart",
        h = "menu-empty",
        b = p.getHost(),
        C = p.getComponentVersion("cart") || "0.0.3";
    _minerva_ret = (i.prototype.init = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this;
      _minerva_ret = !this.status && (t.$cart = s.get("#J_MiniCart"), TB.Global.setCartNum = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        t.setCartNum(e);
        minerva_hook.afterFunction("null", this, {});
      }, this.$cart && (s.addClass(this.$cart, h), c.on(s.get(".site-nav-menu-hd a", this.$cart), "click", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        s.removeClass(t.$cart, "menu-hover"), window.MiniCart && (window.MiniCart._clicked = !1);
        var e = new Image();
        e.src = "//gm.mmstat.com/tbcart.1.56&t=" + +new Date();
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      }), this.update()), this.cartNum = 0, window.MiniCart && window.MiniCart.reset && window.MiniCart.reset(), void m.subscribe("cart", "show", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t.renderMenu.call(t);
        minerva_hook.afterFunction("null", this, {});
      }));
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, i.prototype.update = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      function t(e) {
        minerva_hook.beforeFunction("t", this, arguments);

        if (e = e || 0) {
          var n = {
            keys: "TCART_234_" + e + "_q",
            t: u.now()
          };
          d.jsonp(m, n, function (e) {
            minerva_hook.beforeFunction("null", this, arguments);

            if (e) {
              var a = r >= 0 ? r : c ? 1 : 0;
              i.setCartNum(e[n.keys]), l.get("mt", "ci=" + e[n.keys] + "_" + a + (s ? "&" + s : ""), 7, b);
            } else c && t();

            minerva_hook.afterFunction("null", this, {});
          });
        } else d.getScript(v + "callback=TB.Global.setCartNum&t=" + +new Date() + (g ? "&appid=" + g : ""));

        minerva_hook.afterFunction("t", this, {});
      }

      var i = this,
          n = e(l.get("mt")),
          a = n && n.ci ? n.ci.split("_") : [void 0, void 0],
          o = parseInt(a[0], 10),
          r = parseInt(a[1], 10),
          s = n ? n.cp : void 0,
          c = p.isLogin(),
          v = "//cart" + b + "/top_cart_quantity.htm?",
          m = "//count." + (p.isDaily() ? "daily.taobao.net" : p.isHttps() ? "taobao.com" : "tbcdn.cn") + "/counter6";
      if (i._OFF = a < 0, c) n ? 1 == r ? i.setCartNum(o) : t() : t(l.get("unb"));else {
        var f = l.get("t");
        f ? o >= 0 ? i.setCartNum(o) : t(f) : i.setCartNum(0);
      }
      minerva_hook.afterFunction("null", this, {
        i: i,
        n: n,
        a: a,
        o: o,
        r: r,
        s: s,
        c: c,
        v: v,
        m: m
      });
    }, i.prototype.setCartNum = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = this;

      if (u.isNumber(t) && !e._OFF && e.$cart) {
        var i = e.$cart.getElementsByTagName("a")[0],
            n = 19 !== g,
            a = s.get("strong", i);
        t < 0 && (e._OFF = t === -1, v.send({
          category: "CART_MINUS",
          msg: t
        }), s.removeClass(e.$cart, f), window.MiniCart && e.off()), !e._OFF && t >= 0 ? a.innerHTML = t : s.addClass(e.$cart, "J_SiteNavDisableMenu"), s.addClass(e.$cart, f), e._OFF !== !0 || p.isMobile() || (n = !1), s[(n ? "remove" : "add") + "Class"](e.$cart, h), s.addClass(e.$cart, "menu"), i.id = "mc-menu-hd", window.MiniCart && (window.MiniCart.cartNum = t, window.MiniCart.isExpired = !0);
      }

      minerva_hook.afterFunction("null", this, {
        e: e
      });
    }, i.prototype.off = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = s.query(".menu-bd-panel", "#J_MiniCart");
      _minerva_ret = t && t[0] ? (t[0].innerHTML = window.MiniCart._parseMsg(" "), s.addClass(t[0], "mini-cart-closed"), !0) : (s.addClass(self.$cart, h), !1);
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, i.prototype.renderMenu = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this;
      _minerva_ret = 19 !== g && (t._OFF !== !0 || p.isMobile() ? (window.MiniCart ? window.MiniCart.render() : o.ready(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        d.getScript(p.getCdnHost() + "/tb/mini-cart/" + C + "/index-min.js", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          o.use("tb/mini-cart", function () {
            minerva_hook.beforeFunction("null", this, arguments);
            var e = s.get("#J_MiniCartNum"),
                i = e ? e.innerHTML : -1;
            _minerva_ret = i === -1 || t._OFF === !0 ? t.off() : void window.MiniCart.init(i, !0);
            minerva_hook.afterFunction("null", this, {
              e: e,
              i: i,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          });
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {});
      }), !0) : (s.addClass(t.$cart, h), !1));
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, i.prototype.destroy = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.status = 0;
      minerva_hook.afterFunction("null", this, {});
    }, t = new i());
    minerva_hook.afterFunction("null", this, {
      o: o,
      s: s,
      c: c,
      d: d,
      l: l,
      u: u,
      v: v,
      m: m,
      p: p,
      g: g,
      f: f,
      h: h,
      b: b,
      C: C,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), f = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(t) {
      minerva_hook.beforeFunction("e", this, arguments);
      var e = {
        user: !0,
        responsive: !0,
        cart: !0,
        webww: !0,
        weekend: !0,
        accessibility: !0,
        account: !0,
        siteMap: !0,
        footer: !0,
        region: !1
      };
      t = t || {}, t = N.merge(e, t), t.user && i.init(), t.responsive && _.init(), t.cart && a.init(), t.webww && r.init(), t.region && y.init(), t.weekend && (window.g_config && window.g_config.weekend === !1 || f.init()), t.accessibility && b.init(), t.account && h.init(), t.siteMap && n.init(), t.footer && S.init();
      minerva_hook.afterFunction("e", this, {
        e: e
      });
    }

    var i = p,
        n = o,
        a = g,
        r = s,
        f = c,
        h = d,
        b = l,
        _ = u,
        S = v,
        M = C,
        N = (M.all, w),
        y = m;
    _minerva_ret = t = e;
    minerva_hook.afterFunction("null", this, {
      i: i,
      n: n,
      a: a,
      r: r,
      f: f,
      h: h,
      b: b,
      _: _,
      S: S,
      M: M,
      N: N,
      y: y,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), h = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = n,
        i = f,
        a = window.g_config || {},
        o = a.footer !== !1;
    _minerva_ret = (i({
      region: a.region || !1,
      footer: o
    }), t = e);
    minerva_hook.afterFunction("null", this, {
      e: e,
      i: i,
      a: a,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i.exports = h;
  minerva_hook.afterFunction("null", this, {
    n: n,
    a: a,
    o: o,
    r: r,
    s: s,
    c: c,
    d: d,
    l: l,
    u: u,
    v: v,
    m: m,
    p: p,
    g: g,
    f: f,
    h: h,
    w: w,
    b: b,
    _: _,
    C: C,
    S: S,
    M: M,
    N: N,
    y: y
  });
});