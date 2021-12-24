/* @license v8.15.18,8.15.19, 2021-11-18 19:22:48 */
!function e(t, n, r) {
  minerva_hook.beforeFunction("e", this, arguments);

  function a(i, u) {
    minerva_hook.beforeFunction("a", this, arguments);

    if (!n[i]) {
      if (!t[i]) {
        var s = "function" == typeof require && require;
        if (!u && s) return s(i, !0);
        if (o) return o(i, !0);
        throw new Error("Cannot find module '" + i + "'");
      }

      var l = n[i] = {
        exports: {}
      };
      t[i][0].call(l.exports, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = t[i][1][e];
        _minerva_ret = a(n ? n : e);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, l, l.exports, e, t, n, r);
    }

    _minerva_ret = n[i].exports;
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  for (var o = "function" == typeof require && require, i = 0; i < r.length; i++) a(r[i]);

  _minerva_ret = a;
  minerva_hook.afterFunction("e", this, {
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}({
  1: [function (e, t, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = e && e.getAttribute ? e.getAttribute(t) || "" : "";
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      _minerva_ret = (i = i || document.getElementsByTagName("head")[0], u && !e ? u : i ? u = i.getElementsByTagName("meta") : []);
      minerva_hook.afterFunction("a", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e, t) {
      minerva_hook.beforeFunction("o", this, arguments);
      var n;

      if (document.querySelector) {
        var o = document.querySelector('meta[name="' + e + '"]');
        n = r(o, t || "content");
      } else for (var i = a(), u = i.length, s = 0; u > s; s++) {
        var l = i[s];
        r(l, "name") === e && (n = r(l, t || "content"));
      }

      _minerva_ret = n || "";
      minerva_hook.afterFunction("o", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var i,
        u,
        s = e("@ali/grey-publish").util;
    n.tryToGetAttribute = r, n.getMetaTags = a, n.getMetaCnt = o, n.indexof = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var n = 0; n < e.length; n++) if (e[n] === t) return n;

      _minerva_ret = -1;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    var l = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = (e += "", e.length < t && (e = "0" + e), e);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    n.getDateMin = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = new Date(),
          t = "";
      _minerva_ret = (t += e.getFullYear(), t += l(e.getMonth() + 1, 2), t += l(e.getDate(), 2), t += l(e.getHours(), 2), t += l(e.getMinutes(), 2));
      minerva_hook.afterFunction("null", this, {
        e: e,
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.isMobile = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = /AliApp|Yunos|cyclone/i.test(e),
          n = /iPhone|iPad|iPod/i.test(e),
          r = /Android/i.test(e),
          a = /Windows Phone/i.test(e) || /IEMobile/i.test(e) || /WPDesktop/i.test(e),
          o = /BlackBerry/i.test(e),
          i = /Opera Mini/i.test(e);
      _minerva_ret = t || n || r || a || o || i;
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        r: r,
        a: a,
        o: o,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    var c = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e;

      try {
        e = document.getElementById("beacon-aplus") || document.getElementById("tb-beacon-aplus");
      } catch (t) {}

      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    n.getCurrentNode = c, n.loopAddScript = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        if (t && t instanceof Array) {
          var n = 0,
              r = function (a) {
            minerva_hook.beforeFunction("null", this, arguments);
            a && s.addScript(e + "/" + a, function () {
              minerva_hook.beforeFunction("null", this, arguments);
              r(t[++n]);
              minerva_hook.afterFunction("null", this, {});
            });
            minerva_hook.afterFunction("null", this, {});
          };

          r(t[n]);
        }
      } catch (a) {}

      minerva_hook.afterFunction("null", this, {});
    };

    var g = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      var r = window,
          a = r.goldlog_queue || (r.goldlog_queue = []),
          o = e;
      "object" == typeof t && t.message && (o = o + "_" + t.message), n && n.msg && (o += "_" + n.msg), a.push({
        action: "goldlog._aplus_cplugin_m.do_tracker_jserror",
        arguments: [{
          ratio: window.goldlog && window.goldlog.aplusDebug ? 1 : .01,
          message: o,
          error: JSON.stringify(t),
          filename: e
        }]
      });
      minerva_hook.afterFunction("null", this, {
        r: r,
        a: a,
        o: o
      });
    };

    n.catchException = g, n.getCdnpath = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = "//g.alicdn.com",
          t = "//g-assets.daily.taobao.net",
          n = "//assets.alicdn.com/g",
          r = "//s.alicdn.com/@g/",
          a = "//u.alicdn.com",
          o = "//laz-g-cdn.alicdn.com",
          i = (document, c()),
          u = e,
          s = [n, r, t, a, o],
          l = new RegExp(a);
      if (i) for (var f = 0; f < s.length; f++) {
        var p = new RegExp(s[f]);

        if (p.test(i.src)) {
          u = s[f], l.test(i.src) && (u = n);
          break;
        }
      }

      if (u === o) {
        var v = window.navigator ? window.navigator.language : "";
        g("getCdnpath", {
          lang: v
        }, {
          msg: "laz_g_cdn"
        });
      }

      _minerva_ret = u;
      minerva_hook.afterFunction("null", this, {
        e: e,
        t: t,
        n: n,
        r: r,
        a: a,
        o: o,
        i: i,
        u: u,
        s: s,
        l: l,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.aplusVersions = {
      V_O: "aplus_o.js",
      V_2: "aplus_v2.js",
      V_W: "aplus_wap.js",
      V_S: "aplus_std.js",
      V_I: "aplus_int.js",
      V_U: "aplus_u.js"
    };
    minerva_hook.afterFunction("null", this, {
      i: i,
      u: u,
      s: s,
      l: l,
      c: c,
      g: g
    });
  }, {
    "@ali/grey-publish": 2
  }],
  2: [function (e, t, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);
    n.grey = e("./src/grey"), n.util = e("./src/util");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./src/grey": 3,
    "./src/util": 4
  }],
  3: [function (e, t, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = e + Math.floor(Math.random() * (t - e + 1));
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      var t = !1;

      try {
        var n = e.bingo_chars || "0aAbBc1CdDeE2fFgGh3HiIjJ4kKlLm5MnNoO6pPqQr7RsStT8uUvVw9WxXyY+zZ",
            a = h.getCookie(e.bingo_cookiename || "cna") || "";

        if (a) {
          var o = a.charAt(0),
              i = n.indexOf(o) / n.length;
          t = i <= e.ratio / e.base;
        } else t = r(1, e.base) <= e.ratio;
      } catch (u) {
        t = r(1, e.base) <= e.ratio;
      }

      _minerva_ret = t;
      minerva_hook.afterFunction("a", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e, t) {
      minerva_hook.beforeFunction("o", this, arguments);
      var n;

      for (n in t) t.hasOwnProperty(n) && (e[n] = t[n]);

      _minerva_ret = e;
      minerva_hook.afterFunction("o", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e, t) {
      minerva_hook.beforeFunction("i", this, arguments);

      _minerva_ret = function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e(o(t, n || {}));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function u(e, t) {
      minerva_hook.beforeFunction("u", this, arguments);
      var n = document;

      if (t) {
        var r = n.getElementsByTagName("script")[0],
            a = n.createElement("script");
        e && e.nonce && a.setAttribute("nonce", e.nonce), a.appendChild(n.createTextNode(t)), r.parentNode.insertBefore(a, r);
      }

      minerva_hook.afterFunction("u", this, {
        n: n
      });
    }

    function s(e, t) {
      minerva_hook.beforeFunction("s", this, arguments);
      if (e && e.length > 0) for (var n = new RegExp("^" + t), r = 0; r < e.length; r++) {
        var a = e[r];
        n.test(a) && _.remove(a);
      }
      minerva_hook.afterFunction("s", this, {});
    }

    function l(e, t, n) {
      minerva_hook.beforeFunction("l", this, arguments);

      try {
        _.remove(e);

        var r = _.get(t);

        if (r) {
          var a = JSON.parse(r) || [];
          s(a, n);
        }
      } catch (o) {}

      try {
        Object && Object.keys && s(Object.keys(localStorage), n);
      } catch (i) {}

      minerva_hook.afterFunction("l", this, {});
    }

    function c(e, t, n) {
      minerva_hook.beforeFunction("c", this, arguments);

      try {
        if (!d) {
          var r = function (r) {
            minerva_hook.beforeFunction("null", this, arguments);
            r.key === e && r.newValue && l(e, t, n);
            minerva_hook.afterFunction("null", this, {});
          };

          if (window.addEventListener) return window.addEventListener("storage", r, !1), !1;
          window.attachEvent("storage", r);
        }

        d = !0;
      } catch (a) {}

      minerva_hook.afterFunction("c", this, {});
    }

    function g(e) {
      minerva_hook.beforeFunction("g", this, arguments);
      var t;

      try {
        var n = _.get(e.LS_KEY_CLUSTER);

        if (n) {
          var r = JSON.parse(n);
          t = _.get(r[0]);
        }
      } catch (a) {}

      _minerva_ret = t;
      minerva_hook.afterFunction("g", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function f(e, t) {
      minerva_hook.beforeFunction("f", this, arguments);
      h.addScript(t.url, e.callback, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t.oldCode && (u(e, t.oldCode), h.isFunction(e.callback) && e.callback.call(this, {
          from: "oldCode"
        }));
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("f", this, {});
    }

    function p(e, t) {
      minerva_hook.beforeFunction("p", this, arguments);
      var n,
          r = "cors",
          a = t.code,
          o = t.key,
          i = a ? a.split("\n").length : 0;
      i >= t.size && (u(e, a), l(o, e.LS_KEY_CLUSTER, e.LS_PREFIX), _.set(e.LS_KEY_CLUSTER, JSON.stringify([o])), _.set(o, a), n = !0), i < t.size && t.oldCode && (r = "oldCode", u(e, t.oldCode), n = !0), n || f(e, t), c(o, e.LS_KEY_CLUSTER, e.LS_PREFIX), h.isFunction(e.callback) && e.callback.call(this, {
        from: r
      });
      minerva_hook.afterFunction("p", this, {
        n: n,
        r: r,
        a: a,
        o: o,
        i: i
      });
    }

    function v(e, t, n) {
      minerva_hook.beforeFunction("v", this, arguments);
      var r = window,
          a = r.XDomainRequest,
          o = r.XMLHttpRequest && "withCredentials" in new r.XMLHttpRequest(),
          i = t.after;

      if (!t.isDebug && _.test() && (o || a)) {
        var s = g(t),
            l = t.LS_KEY + h.hash(e),
            v = _.get(l),
            d = "local";

        v ? (c(l, t.LS_KEY_CLUSTER, t.LS_PREFIX), u(t, v), h.isFunction(i) && i.call(this, {
          from: d
        })) : h.requestJS(e, navigator.userAgent, function (r) {
          minerva_hook.beforeFunction("null", this, arguments);
          p(t, {
            key: l,
            code: r,
            oldCode: s,
            size: n,
            url: e
          });
          minerva_hook.afterFunction("null", this, {});
        }, function () {
          minerva_hook.beforeFunction("null", this, arguments);
          f(t, {
            url: e,
            oldCode: s
          });
          minerva_hook.afterFunction("null", this, {});
        });
      } else h.addScript(e, i);

      minerva_hook.afterFunction("v", this, {
        r: r,
        a: a,
        o: o,
        i: i
      });
    }

    var d,
        h = e("./util"),
        _ = {
      set: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          return localStorage.setItem(e, t), !0;
        } catch (n) {
          return !1;
        }

        minerva_hook.afterFunction("null", this, {});
      },
      get: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = localStorage.getItem(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      test: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = "grey_test_key";

        try {
          return localStorage.setItem(e, 1), localStorage.removeItem(e), !0;
        } catch (t) {
          return !1;
        }

        minerva_hook.afterFunction("null", this, {
          e: e
        });
      },
      remove: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        localStorage.removeItem(e);
        minerva_hook.afterFunction("null", this, {});
      }
    },
        m = {
      base: 1e4
    },
        b = {
      _config: m
    };
    b.load = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      e = o({
        LS_KEY_CLUSTER: "",
        LS_KEY: "",
        isLoadDevVersion: "",
        dev: "",
        stable: "",
        grey: "",
        base: m.base,
        bingo: "",
        nonce: ""
      }, e);
      var t,
          n = {},
          r = 0,
          u = "function" == typeof e.bingo ? e.bingo : a;
      e.ratio >= e.base || u(e) ? (t = e.grey, n.type = "grey", r = e.greySize) : (t = e.stable, n.type = "stable", r = e.stableSize);

      try {
        h.isFunction(e.isLoadDevVersion) && e.isLoadDevVersion() && (t = e.dev, n.type = "dev", r = e.devSize);
      } catch (s) {}

      _minerva_ret = (n.url = t, h.isFunction(e.before) ? e.before(n, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        v(t, e, r);
        minerva_hook.afterFunction("null", this, {});
      }) : v(t, e, r), h.isFunction(e.after) && (e.after = i(e.after, n)), this);
      minerva_hook.afterFunction("null", this, {
        e: e,
        t: t,
        n: n,
        r: r,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, b.config = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = (o(m, e || {}), this);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, t.exports = b;
    minerva_hook.afterFunction("null", this, {
      d: d,
      h: h,
      _: _,
      m: m,
      b: b
    });
  }, {
    "./util": 4
  }],
  4: [function (e, t, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    var r = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = "function" == typeof e;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    n.isFunction = r;

    var a = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      var a = document,
          o = a.getElementsByTagName("script")[0],
          i = a.getElementsByTagName("head")[0],
          u = a.createElement("script");
      u.type = "text/javascript", u.async = !0, u.src = e, u.onerror = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        r(n) && n();
        minerva_hook.afterFunction("null", this, {});
      }, o ? o.parentNode.insertBefore(u, o) : i && i.appendChild(u), r(t) && t.call(this, {
        from: "script"
      });
      minerva_hook.afterFunction("null", this, {
        a: a,
        o: o,
        i: i,
        u: u
      });
    };

    n.addScript = a, n.getCookie = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = document,
          n = t.cookie.match(new RegExp("(?:^|;)\\s*" + e + "=([^;]+)"));
      _minerva_ret = n ? n[1] : "";
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    var o = {
      base: 1e4,
      timeout: 1e4
    },
        i = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      fetch(e).then(function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = /application\/json/.test(e.headers.get("content-type")) ? e.json() : e.text();
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }).then(function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        t(e);
        minerva_hook.afterFunction("null", this, {});
      })["catch"](function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        n(e);
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("null", this, {});
    },
        u = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);

      var r,
          a = "GET",
          i = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        r.responseText ? t(r.responseText) : n();
        minerva_hook.afterFunction("null", this, {});
      },
          u = window.XMLHttpRequest && "withCredentials" in new XMLHttpRequest();

      u ? (r = new XMLHttpRequest(), r.open(a, e, !0)) : (r = new XDomainRequest(), r.open(a, e)), r.timeout = o.timeout, r.onload = i, r.onerror = n, r.ontimeout = n, r.send();
      minerva_hook.afterFunction("null", this, {
        r: r,
        a: a,
        i: i,
        u: u
      });
    },
        s = function (e, t, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      window.fetch ? i(e, t, n) : u(e, t, n);
      minerva_hook.afterFunction("null", this, {});
    };

    n.request = s, n.requestJS = function (e, t, n, r) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = /blitz/i.test(t) ? void r() : void s(e, n, r);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.hash = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t,
          n,
          r = 1315423911;

      for (t = e.length - 1; t >= 0; t--) n = e.charCodeAt(t), r ^= (r << 5) + n + (r >> 2);

      _minerva_ret = (2147483647 & r).toString(16);
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };
    minerva_hook.afterFunction("null", this, {
      r: r,
      a: a,
      o: o,
      i: i,
      u: u,
      s: s
    });
  }, {}],
  5: [function (e, t, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);
    !function () {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        for (var t, n = window, r = "g_aplus_grey_launched", a = document.getElementsByTagName("script"), o = 0; o < a.length; o++) /mlog\/aplus\.js/.test(a[o].getAttribute("src")) && (t = !0);

        if (t || n[r]) return;
        n[r] = 1;

        var i = e("./for_aplus_fns"),
            u = e("@ali/grey-publish").util,
            s = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = n.goldlog || (n.goldlog = {}),
              r = e("@ali/grey-publish").grey,
              a = !0;

          try {
            var o = n.location.href.match(/aplusDebug=(true|false)/);
            o && o.length > 0 && n.localStorage.setItem("aplusDebug", o[1]), a = "true" === n.localStorage.getItem("aplusDebug"), t.aplusDebug = a;
          } catch (u) {}

          var s = {
            "aplus_o.js": {
              stable_version: {
                value: "8.15.18"
              },
              grey_version: {
                value: "8.15.19"
              },
              dev_version: {}
            },
            "aplus_std.js": {
              stable_version: {
                value: "8.15.18"
              },
              grey_version: {
                value: "8.15.19"
              },
              dev_version: {}
            },
            "aplus_wap.js": {
              stable_version: {
                value: "8.15.18"
              },
              grey_version: {
                value: "8.15.19"
              },
              dev_version: {}
            },
            "aplus_int.js": {
              stable_version: {
                value: "8.15.18"
              },
              grey_version: {
                value: "8.15.19"
              },
              dev_version: {}
            },
            "aplus_u.js": {
              stable_version: {
                value: "8.15.18"
              },
              grey_version: {
                value: "8.15.19"
              },
              dev_version: {}
            }
          },
              l = "APLUS_S_CORE_0.21.2_20211118192247_",
              c = e("../grey/util"),
              g = n.location.protocol;
          0 !== g.indexOf("http") && (g = "https:");
          var f = c.getCdnpath();
          t.getCdnPath = c.getCdnpath;

          var p = g + f + "/alilog",
              v = i.getAplusBuVersion(),
              d = v.v,
              h = v.BU,
              _ = "",
              m = [{
            key: "202111182000",
            value: .1
          }, {
            key: "202111190100",
            value: .5
          }, {
            key: "202111191000",
            value: 1
          }],
              b = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            var e = "";
            if (m && m.length > 0) for (var t = c.getDateMin(), n = 0; n < m.length; n++) {
              var r = m[n].key + "";
              t >= r && (e = Math.floor(1e4 * m[n].value));
            }
            _minerva_ret = e;
            minerva_hook.afterFunction("null", this, {
              e: e,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          },
              y = e("./utilPlugins"),
              S = function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            var t,
                n = a ? [] : y.getFrontPlugins({
              version: e,
              fn: d,
              BU: h,
              isDebug: a
            }),
                r = [["s", e, d].join("/")],
                o = a ? [] : y.getPlugins({
              version: e,
              fn: d,
              BU: h
            }),
                i = 0;

            try {
              var u = [].concat(n, r, o);
              t = p + "/??" + u.join(",") + "?v=20211118192247", i = u.length;
            } catch (s) {
              t = p + "/??" + r.join(","), i = r.length;
            }

            _minerva_ret = {
              size: i,
              url: t
            };
            minerva_hook.afterFunction("null", this, {
              t: t,
              n: n,
              r: r,
              o: o,
              i: i,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          },
              j = b();

          j && (_ = j), t.aplus_cplugin_ver = "0.7.11", t.record || (t.record = function (e, t, r, a) {
            minerva_hook.beforeFunction("null", this, arguments);
            (n.goldlog_queue || (n.goldlog_queue = [])).push({
              action: "goldlog.record",
              arguments: [e, t, r, a]
            });
            minerva_hook.afterFunction("null", this, {});
          });
          var w = s[d] || {},
              E = w.stable_version || {},
              C = w.grey_version || {},
              k = w.dev_version || {},
              L = E.value || "8.5.9",
              V = C.value || L,
              B = k.value || V,
              A = S(B),
              P = S(L),
              T = S(V),
              x = c.getCurrentNode(),
              M = x ? x.getAttribute("cspx") : "",
              R = {
            LS_KEY_CLUSTER: "APLUS_LS_KEY",
            LS_KEY: l,
            LS_PREFIX: "APLUS_S_CORE",
            isDebug: a,
            isLoadDevVersion: !1,
            dev: A.url,
            devSize: A.size,
            stable: P.url,
            stableSize: P.size,
            grey: T.url,
            greySize: T.size,
            ratio: _,
            nonce: M,
            before: function (e, n) {
              minerva_hook.beforeFunction("null", this, arguments);

              switch (e.type) {
                case "grey":
                  t.lver = B;
                  break;

                case "stable":
                  t.lver = L;
                  break;

                case "dev":
                  t.lver = B;
              }

              if (a) {
                var r = {
                  version: t.lver,
                  fn: d,
                  BU: h,
                  isDebug: a
                };
                c.loopAddScript(p, y.getFrontPlugins(r));
              }

              if ("function" == typeof n) {
                var o = S(t.lver);
                n(o.url);
              }

              minerva_hook.afterFunction("null", this, {});
            }
          };
          a && (R.after = function () {
            minerva_hook.beforeFunction("null", this, arguments);

            var e = 0,
                r = function () {
              minerva_hook.beforeFunction("null", this, arguments);

              if (!(e >= 100)) {
                e++;
                var a = t._$ || {};
                n.setTimeout(function () {
                  minerva_hook.beforeFunction("null", this, arguments);
                  "complete" === a.status ? c.loopAddScript(p, y.getPlugins({
                    version: t.lver,
                    fn: d,
                    BU: h
                  })) : r();
                  minerva_hook.afterFunction("null", this, {});
                }, 100);
              }

              minerva_hook.afterFunction("null", this, {});
            };

            r();
            minerva_hook.afterFunction("null", this, {
              e: e,
              r: r
            });
          }), r.load(R);
          minerva_hook.afterFunction("null", this, {
            t: t,
            r: r,
            a: a,
            s: s,
            l: l,
            c: c,
            g: g,
            f: f,
            p: p,
            v: v,
            d: d,
            h: h,
            _: _,
            m: m,
            b: b,
            y: y,
            S: S,
            j: j,
            w: w,
            E: E,
            C: C,
            k: k,
            L: L,
            V: V,
            B: B,
            A: A,
            P: P,
            T: T,
            x: x,
            M: M,
            R: R
          });
        },
            l = i.getNewCdnpathByMeta();

        l ? u.addScript(l, function () {
          minerva_hook.beforeFunction("null", this, arguments);
          minerva_hook.afterFunction("null", this, {});
        }, function () {
          minerva_hook.beforeFunction("null", this, arguments);
          s();
          minerva_hook.afterFunction("null", this, {});
        }) : s();
      } catch (c) {}

      minerva_hook.afterFunction("null", this, {});
    }();
    minerva_hook.afterFunction("null", this, {});
  }, {
    "../grey/util": 1,
    "./for_aplus_fns": 6,
    "./utilPlugins": 9,
    "@ali/grey-publish": 2
  }],
  6: [function (e, t, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    var r,
        a = e("./util"),
        o = a.aplusVersions,
        i = [o.V_O, o.V_S, o.V_I, o.V_W, o.V_U],
        u = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var e, t, n = [{
        version: o.V_O,
        domains: [/^https?:\/\/(.*\.)?youku\.com/i, /^https?:\/\/(.*\.)?tudou\.com/i, /^https?:\/\/(.*\.)?soku\.com/i, /^https?:\/\/(.*\.)?laifeng\.com/i],
        BU: "YT"
      }], r = 0; r < n.length; r++) for (var a = n[r].domains, i = n[r].version, u = 0; u < a.length; u++) if (location.href.match(a[u])) return {
        v: i,
        BU: n[r].BU
      };

      _minerva_ret = {
        v: t,
        BU: e
      };
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        s = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      r || (r = a.getMetaCnt("aplus-version"));
      var e = r;
      _minerva_ret = (e && (e += ".js"), a.indexof(i, e) > -1 ? e : null);
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    n.getNewCdnpathByMeta = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      r || (r = a.getMetaCnt("aplus-version"));
      var e = r;
      if (/^\d+$/.test(e)) t = "//d.alicdn.com/alilog/mlog/aplus/" + e + ".js";else {
        var t,
            n = e.split("@");
        2 === n.length && (t = "//d.alicdn.com/alilog/mlog/aplus.js?id=" + n[1]);
      }
      _minerva_ret = t;
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    var l = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        for (var e = document, t = e.getElementsByTagName("script"), n = 0; n < t.length; n++) {
          var r = t[n].getAttribute("src");
          if (/alilog\/mlog\/aplus_\w+\.js/.test(r) || /alicdn\.com\/js\/aplus_\w+\.js/.test(r)) return r;
        }

        return "";
      } catch (a) {
        return "";
      }

      minerva_hook.afterFunction("null", this, {});
    },
        c = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = "";

      try {
        var t = (document, a.getCurrentNode());

        if (t && (e = t.getAttribute("src")), e || (e = l()), e) {
          var n = e.match(/aplus_\w+\.js/);
          "object" == typeof n && n.length > 0 && (e = n[0]);
        }
      } catch (r) {
        e = "";
      } finally {
        return e;
      }

      minerva_hook.afterFunction("null", this, {
        e: e
      });
    };

    n.getAplusBuVersion = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e, t;

      try {
        e = o.V_S;
        var n = c();
        n && (e = n);
        var r = u();
        r && r.v && (e = r.v), t = r.BU;
        var a = s();
        a && (e = a), e === o.V_2 && (e = o.V_S);
      } catch (i) {
        e = e === o.V_O ? o.V_W : o.V_S;
      } finally {
        return {
          v: e,
          BU: t
        };
      }

      minerva_hook.afterFunction("null", this, {
        e: e,
        t: t
      });
    };

    minerva_hook.afterFunction("null", this, {
      r: r,
      a: a,
      o: o,
      i: i,
      u: u,
      s: s,
      l: l,
      c: c
    });
  }, {
    "./util": 8
  }],
  7: [function (e, t, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    function r() {
      minerva_hook.beforeFunction("r", this, arguments);
      var e = "",
          t = /Umeng4Aplus|UT4Aplus/i.test(v);
      _minerva_ret = (t && (e = "aplus4native.js"), e);
      minerva_hook.afterFunction("r", this, {
        e: e,
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      _minerva_ret = d && !g.WindVane && e.fn !== p.V_O;
      minerva_hook.afterFunction("a", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      _minerva_ret = (h || d && !g.WindVane) && e.fn === p.V_O;
      minerva_hook.afterFunction("o", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e, t) {
      minerva_hook.beforeFunction("i", this, arguments);
      var n = e.trackerCfg || {},
          r = n.points || [];
      if (r.length > 0) for (var a = new RegExp(t), o = 0; o < r.length; o++) if (a.test(r[o].trackerType)) return !0;
      _minerva_ret = !1;
      minerva_hook.afterFunction("i", this, {
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function u(e) {
      minerva_hook.beforeFunction("u", this, arguments);
      _minerva_ret = i(e, "exposure") || !!f.getMetaCnt("aplus-auto-exp");
      minerva_hook.afterFunction("u", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function s(e) {
      minerva_hook.beforeFunction("s", this, arguments);
      _minerva_ret = i(e, "click") || !!f.getMetaCnt("aplus-auto-clk");
      minerva_hook.afterFunction("s", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function l() {
      minerva_hook.beforeFunction("l", this, arguments);
      _minerva_ret = !!f.getMetaCnt("aplus-vt-cfg");
      minerva_hook.afterFunction("l", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var c = document,
        g = window,
        f = e("./util"),
        p = f.aplusVersions,
        v = (e("@ali/grey-publish").util, g.navigator.userAgent),
        d = /WindVane/i.test(v),
        h = /AliBaichuan/i.test(v),
        _ = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = /_a_ig_v=@aplus/.test(location.search);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        m = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e.fn !== p.V_O && e.fn !== p.V_U;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        b = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        var e = g.localStorage,
            t = "aplus_track_debug_id",
            n = new RegExp("[?|&]" + t + "=(\\w*)"),
            r = location.href.match(n);
        if (r && r.length > 0) e.setItem(t, r[1]);else {
          var a = c.referrer || "",
              o = a.match(n);
          if (o && o.length > 0) e.setItem(t, o[1]);else {
            var i = g.name || "",
                u = i.match(n);
            u && u.length > 0 && e.setItem(t, u[1]);
          }
        }
        var s = e.getItem(t) || "";
        return s && s.length > 50 ? !0 : !1;
      } catch (l) {
        return !1;
      }

      minerva_hook.afterFunction("null", this, {});
    },
        y = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        return !!/lazada/.test(location.host);
      } catch (e) {
        return !1;
      }

      minerva_hook.afterFunction("null", this, {});
    },
        S = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        if ("function" == typeof g.WebSocket) {
          var t = /alibaba-inc|aliway|alibabacorp\.com/.test(location.hostname),
              n = f.getMetaCnt("aplus-channel"),
              r = "GET" === n || "POST" === n,
              a = /tppnext\.alibaba-inc.com/.test(location.hostname);
          if (r && a) return !1;
          var o = /aplus_ws=true/.test(location.search) || "WS" === n || "WS-ONLY" === n,
              i = location.host,
              u = /tmall|taobao\.com/g.test(i),
              s = /Qianniu\/\d/.test(v),
              l = t || o || u && !f.isMobile(v) && !s && e.fn !== p.V_W;
          return l && (goldlog.aplusChannel = "WS"), l;
        }

        return !1;
      } catch (c) {
        return !1;
      }

      minerva_hook.afterFunction("null", this, {});
    };

    n.getFrontPlugins = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = "s/" + e.version + "/plugin",
          n = goldlog.aplus_cplugin_ver,
          i = r(e.isDebug);
      _minerva_ret = [{
        enable: a(e),
        path: [t, "aplus_windvane2.js"].join("/")
      }, {
        enable: o(e),
        path: [t, "aplus_bcbridge.js"].join("/")
      }, {
        enable: !!i,
        path: ["aplus_cplugin", n, i].join("/")
      }, {
        enable: l(),
        path: [t, "aplus_webvt.js"].join("/")
      }, {
        enable: !0,
        path: [t, "aplus_client.js"].join("/")
      }, {
        enable: !0,
        path: ["aplus_cplugin", n, "toolkit.js"].join("/")
      }, {
        enable: !0,
        path: ["aplus_cplugin", n, "monitor.js"].join("/")
      }, {
        enable: b(),
        path: ["aplus_cplugin", n, "track_deb.js"].join("/")
      }, {
        enable: y(),
        path: ["aplus_plugin_lazada", "lazadalog.js"].join("/")
      }, {
        enable: S(e),
        path: [t, "aplus_ws.js"].join("/")
      }, {
        enable: u(e),
        path: [t, "aplus_ae.js"].join("/")
      }, {
        enable: s(e),
        path: [t, "aplus_ac.js"].join("/")
      }];
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.getPlugins = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = "s/" + e.version + "/plugin";
      _minerva_ret = [{
        enable: _(e),
        path: "aplus_plugin_guide/index.js"
      }, {
        enable: m(e),
        path: [t, "aplus_spmact.js"].join("/")
      }];
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };
    minerva_hook.afterFunction("null", this, {
      c: c,
      g: g,
      f: f,
      p: p,
      v: v,
      d: d,
      h: h,
      _: _,
      m: m,
      b: b,
      y: y,
      S: S
    });
  }, {
    "./util": 8,
    "@ali/grey-publish": 2
  }],
  8: [function (e, t, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.exports = e(1);
    minerva_hook.afterFunction("null", this, {});
  }, {
    "@ali/grey-publish": 2
  }],
  9: [function (e, t, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    var r = e("./plugins"),
        a = e("./util"),
        o = (document, a.getCurrentNode()),
        i = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = [];

      try {
        if (o) {
          var n = o.getAttribute(e || t);
          t = n.split(",");
        }
      } catch (r) {
        t = [];
      } finally {
        return t;
      }

      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
        u = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = [];
      if (e) for (var n = 0; n < e.length; n++) {
        var r = e[n].enable,
            a = e[n].path;
        r === !0 ? t.push(a) : "function" == typeof r && r() && t.push(a);
      }
      _minerva_ret = t;
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    n.getPlugins = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = r.getPlugins(e);
      _minerva_ret = [].concat(u(t), i("plugins"));
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.getFrontPlugins = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = r.getFrontPlugins(e);
      _minerva_ret = [].concat(u(t), i("frontPlugins"));
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.getTrackerCfg = r.getTrackerCfg;
    minerva_hook.afterFunction("null", this, {
      r: r,
      a: a,
      o: o,
      i: i,
      u: u
    });
  }, {
    "./plugins": 7,
    "./util": 8
  }]
}, {}, [5]);