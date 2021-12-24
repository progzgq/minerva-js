/*! 2021-11-18 16:45:08 v8.15.19 */
!function (e) {
  minerva_hook.beforeFunction("null", this, arguments);

  function i(n) {
    minerva_hook.beforeFunction("i", this, arguments);
    if (o[n]) return o[n].exports;
    var r = o[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    _minerva_ret = (e[n].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports);
    minerva_hook.afterFunction("i", this, {
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var o = {};
  _minerva_ret = (i.m = e, i.c = o, i.p = "", i(0));
  minerva_hook.afterFunction("null", this, {
    o: o,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}([function (e, i) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = window,
      n = document;
  !function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = 2,
        r = "ali_analytics";
    if (o[r] && o[r].ua && e <= o[r].ua.version) return void (i.info = o[r].ua);

    var t,
        a,
        d,
        s,
        c,
        u,
        h,
        l,
        m,
        b,
        f,
        v,
        p,
        w,
        g,
        x,
        z,
        O = o.navigator,
        k = O.appVersion,
        T = O && O.userAgent || "",
        y = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var i = 0;
      _minerva_ret = parseFloat(e.replace(/\./g, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = 0 === i++ ? "." : "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }));
      minerva_hook.afterFunction("null", this, {
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        _ = function (e, i) {
      minerva_hook.beforeFunction("null", this, arguments);
      var o, n;
      i[o = "trident"] = .1, (n = e.match(/Trident\/([\d.]*)/)) && n[1] && (i[o] = y(n[1])), i.core = o;
      minerva_hook.afterFunction("null", this, {
        o: o,
        n: n
      });
    },
        N = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var i, o;
      _minerva_ret = (i = e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (o = i[1] || i[2]) ? y(o) : 0;
      minerva_hook.afterFunction("null", this, {
        i: i,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        P = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e || "other";
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        M = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      function i() {
        minerva_hook.beforeFunction("i", this, arguments);

        for (var i = [["Windows NT 5.1", "winXP"], ["Windows NT 6.1", "win7"], ["Windows NT 6.0", "winVista"], ["Windows NT 6.2", "win8"], ["Windows NT 10.0", "win10"], ["iPad", "ios"], ["iPhone;", "ios"], ["iPod", "ios"], ["Macintosh", "mac"], ["Android", "android"], ["Ubuntu", "ubuntu"], ["Linux", "linux"], ["Windows NT 5.2", "win2003"], ["Windows NT 5.0", "win2000"], ["Windows", "winOther"], ["rhino", "rhino"]], o = 0, n = i.length; o < n; ++o) if (e.indexOf(i[o][0]) !== -1) return i[o][1];

        _minerva_ret = "other";
        minerva_hook.afterFunction("i", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(e, i, n, r) {
        minerva_hook.beforeFunction("r", this, arguments);
        var t,
            a = o.navigator.mimeTypes;

        try {
          for (t in a) if (a.hasOwnProperty(t) && a[t][e] == i) {
            if (void 0 !== n && r.test(a[t][n])) return !0;
            if (void 0 === n) return !0;
          }

          return !1;
        } catch (e) {
          return !1;
        }

        minerva_hook.afterFunction("r", this, {
          t: t,
          a: a
        });
      }

      var t,
          a,
          d,
          s,
          c,
          u,
          h,
          l = "",
          m = l,
          b = l,
          f = [6, 9],
          v = "{{version}}",
          p = "<!--[if IE " + v + "]><s></s><![endif]-->",
          w = n && n.createElement("div"),
          g = [],
          x = {
        webkit: void 0,
        edge: void 0,
        trident: void 0,
        gecko: void 0,
        presto: void 0,
        chrome: void 0,
        safari: void 0,
        firefox: void 0,
        ie: void 0,
        ieMode: void 0,
        opera: void 0,
        mobile: void 0,
        core: void 0,
        shell: void 0,
        phantomjs: void 0,
        os: void 0,
        ipad: void 0,
        iphone: void 0,
        ipod: void 0,
        ios: void 0,
        android: void 0,
        nodejs: void 0,
        extraName: void 0,
        extraVersion: void 0
      };

      if (w && w.getElementsByTagName && (w.innerHTML = p.replace(v, ""), g = w.getElementsByTagName("s")), g.length > 0) {
        for (_(e, x), s = f[0], c = f[1]; s <= c; s++) if (w.innerHTML = p.replace(v, s), g.length > 0) {
          x[b = "ie"] = s;
          break;
        }

        !x.ie && (d = N(e)) && (x[b = "ie"] = d);
      } else ((a = e.match(/AppleWebKit\/*\s*([\d.]*)/i)) || (a = e.match(/Safari\/([\d.]*)/))) && a[1] ? (x[m = "webkit"] = y(a[1]), (a = e.match(/OPR\/(\d+\.\d+)/)) && a[1] ? x[b = "opera"] = y(a[1]) : (a = e.match(/Chrome\/([\d.]*)/)) && a[1] ? x[b = "chrome"] = y(a[1]) : (a = e.match(/\/([\d.]*) Safari/)) && a[1] ? x[b = "safari"] = y(a[1]) : x.safari = x.webkit, (a = e.match(/Edge\/([\d.]*)/)) && a[1] && (m = b = "edge", x[m] = y(a[1])), / Mobile\//.test(e) && e.match(/iPad|iPod|iPhone/) ? (x.mobile = "apple", a = e.match(/OS ([^\s]*)/), a && a[1] && (x.ios = y(a[1].replace("_", "."))), t = "ios", a = e.match(/iPad|iPod|iPhone/), a && a[0] && (x[a[0].toLowerCase()] = x.ios)) : / Android/i.test(e) ? (/Mobile/.test(e) && (t = x.mobile = "android"), a = e.match(/Android ([^\s]*);/), a && a[1] && (x.android = y(a[1]))) : (a = e.match(/NokiaN[^\/]*|Android \d\.\d|webOS\/\d\.\d/)) && (x.mobile = a[0].toLowerCase()), (a = e.match(/PhantomJS\/([^\s]*)/)) && a[1] && (x.phantomjs = y(a[1]))) : (a = e.match(/Presto\/([\d.]*)/)) && a[1] ? (x[m = "presto"] = y(a[1]), (a = e.match(/Opera\/([\d.]*)/)) && a[1] && (x[b = "opera"] = y(a[1]), (a = e.match(/Opera\/.* Version\/([\d.]*)/)) && a[1] && (x[b] = y(a[1])), (a = e.match(/Opera Mini[^;]*/)) && a ? x.mobile = a[0].toLowerCase() : (a = e.match(/Opera Mobi[^;]*/)) && a && (x.mobile = a[0]))) : (d = N(e)) ? (x[b = "ie"] = d, _(e, x)) : (a = e.match(/Gecko/)) && (x[m = "gecko"] = .1, (a = e.match(/rv:([\d.]*)/)) && a[1] && (x[m] = y(a[1]), /Mobile|Tablet/.test(e) && (x.mobile = "firefox")), (a = e.match(/Firefox\/([\d.]*)/)) && a[1] && (x[b = "firefox"] = y(a[1])));

      t || (t = i());
      var z, O, T;

      if (!r("type", "application/vnd.chromium.remoting-viewer")) {
        z = "scoped" in n.createElement("style"), T = "v8Locale" in o;

        try {
          O = o.external || void 0;
        } catch (e) {}

        if (a = e.match(/360SE/)) u = "360";else if ((a = e.match(/SE\s([\d.]*)/)) || O && "SEVersion" in O) u = "sougou", h = y(a[1]) || .1;else if ((a = e.match(/Maxthon(?:\/)+([\d.]*)/)) && O) {
          u = "maxthon";

          try {
            h = y(O.max_version || a[1]);
          } catch (e) {
            h = .1;
          }
        } else z && T ? u = "360se" : z || T || !/Gecko\)\s+Chrome/.test(k) || x.opera || x.edge || (u = "360ee");
      }

      (a = e.match(/TencentTraveler\s([\d.]*)|QQBrowser\/([\d.]*)/)) ? (u = "tt", h = y(a[2]) || .1) : (a = e.match(/LBBROWSER/)) || O && "LiebaoGetVersion" in O ? u = "liebao" : (a = e.match(/TheWorld/)) ? (u = "theworld", h = 3) : (a = e.match(/TaoBrowser\/([\d.]*)/)) ? (u = "taobao", h = y(a[1]) || .1) : (a = e.match(/UCBrowser\/([\d.]*)/)) && (u = "uc", h = y(a[1]) || .1), x.os = t, x.core = x.core || m, x.shell = b, x.ieMode = x.ie && n.documentMode || x.ie, x.extraName = u, x.extraVersion = h;
      var P = o.screen.width,
          M = o.screen.height;
      _minerva_ret = (x.resolution = P + "x" + M, x);
      minerva_hook.afterFunction("null", this, {
        t: t,
        a: a,
        d: d,
        s: s,
        c: c,
        u: u,
        h: h,
        l: l,
        m: m,
        b: b,
        f: f,
        v: v,
        p: p,
        w: w,
        g: g,
        x: x,
        z: z,
        O: O,
        T: T,
        P: P,
        M: M,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        S = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      function i(e) {
        minerva_hook.beforeFunction("i", this, arguments);
        _minerva_ret = Object.prototype.toString.call(e);
        minerva_hook.afterFunction("i", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function o(e, o, n) {
        minerva_hook.beforeFunction("o", this, arguments);
        if ("[object Function]" == i(o) && (o = o(n)), !o) return null;
        var r = {
          name: e,
          version: ""
        },
            t = i(o);
        if (o === !0) return r;

        if ("[object String]" === t) {
          if (n.indexOf(o) !== -1) return r;
        } else if (o.exec) {
          var a = o.exec(n);
          if (a) return a.length >= 2 && a[1] ? r.version = a[1].replace(/_/g, ".") : r.version = "", r;
        }

        minerva_hook.afterFunction("o", this, {
          r: r,
          t: t
        });
      }

      var n = {
        name: "other",
        version: ""
      };
      e = (e || "").toLowerCase();

      for (var r = [["nokia", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.indexOf("nokia ") !== -1 ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }], ["samsung", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.indexOf("samsung") !== -1 ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ : /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }], ["wp", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.indexOf("windows phone ") !== -1 || e.indexOf("xblwp") !== -1 || e.indexOf("zunewp") !== -1 || e.indexOf("windows ce") !== -1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }], ["pc", "windows"], ["ipad", "ipad"], ["ipod", "ipod"], ["iphone", /\biphone\b|\biph(\d)/], ["mac", "macintosh"], ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/], ["hongmi", /\bhm[ \-]?([a-z0-9]+)/], ["aliyun", /\baliyunos\b(?:[\-](\d+))?/], ["meizu", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9x]{1,3})\b/;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }], ["nexus", /\bnexus ([0-9s.]+)/], ["huawei", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var i = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
        _minerva_ret = e.indexOf("huawei-huawei") !== -1 ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : i.test(e) ? i : /\bhuawei[ _\-]?([a-z0-9]+)/;
        minerva_hook.afterFunction("null", this, {
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }], ["lenovo", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.indexOf("lenovo-lenovo") !== -1 ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }], ["zte", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = /\bzte\-[tu]/.test(e) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }], ["vivo", /\bvivo(?: ([a-z0-9]+))?/], ["htc", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(e) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }], ["oppo", /\boppo[_]([a-z0-9]+)/], ["konka", /\bkonka[_\-]([a-z0-9]+)/], ["sonyericsson", /\bmt([a-z0-9]+)/], ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/], ["lg", /\blg[\-]([a-z0-9]+)/], ["android", /\bandroid\b|\badr\b/], ["blackberry", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.indexOf("blackberry") >= 0 ? /\bblackberry\s?(\d+)/ : "bb10";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }]], t = 0; t < r.length; t++) {
        var a = r[t][0],
            d = r[t][1],
            s = o(a, d, e);

        if (s) {
          n = s;
          break;
        }
      }

      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        n: n,
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        E = 1;

    try {
      t = M(T), a = S(T), d = t.os, s = t.shell, c = t.core, u = t.resolution, h = t.extraName, l = t.extraVersion, m = a.name, b = a.version, v = d ? d + (t[d] ? t[d] : "") : "", p = s ? s + parseInt(t[s]) : "", w = c, g = u, x = h ? h + (l ? parseInt(l) : "") : "", z = m + b;
    } catch (e) {}

    f = {
      p: E,
      o: P(v),
      b: P(p),
      w: P(w),
      s: g,
      mx: x,
      ism: z
    }, o[r] || (o[r] = {}), o[r].ua || (o[r].ua = {}), o.goldlog || (o.goldlog = {}), i.info = o[r].ua = goldlog._aplus_client = {
      version: e,
      ua_info: f
    };
    minerva_hook.afterFunction("null", this, {
      e: e,
      r: r,
      t: t,
      a: a,
      d: d,
      s: s,
      c: c,
      u: u,
      h: h,
      l: l,
      m: m,
      b: b,
      f: f,
      v: v,
      p: p,
      w: w,
      g: g,
      x: x,
      z: z,
      O: O,
      k: k,
      T: T,
      y: y,
      _: _,
      N: N,
      P: P,
      M: M,
      S: S,
      E: E
    });
  }();
  minerva_hook.afterFunction("null", this, {
    o: o,
    n: n
  });
}]);
/*! 2017-10-31 20:15:15 v0.2.4 */

!function (t) {
  minerva_hook.beforeFunction("null", this, arguments);

  function e(o) {
    minerva_hook.beforeFunction("e", this, arguments);
    if (n[o]) return n[o].exports;
    var i = n[o] = {
      exports: {},
      id: o,
      loaded: !1
    };
    _minerva_ret = (t[o].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports);
    minerva_hook.afterFunction("e", this, {
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var n = {};
  _minerva_ret = (e.m = t, e.c = n, e.p = "", e(0));
  minerva_hook.afterFunction("null", this, {
    n: n,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}([function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  !function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = window.goldlog || (window.goldlog = {});
    t._aplus_cplugin_utilkit || (t._aplus_cplugin_utilkit = {
      status: "init"
    }, n(1).init(t), t._aplus_cplugin_utilkit.status = "complete");
    minerva_hook.afterFunction("null", this, {
      t: t
    });
  }();
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(2),
      i = n(4);

  e.init = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t.setCookie = o.setCookie, t.getCookie = o.getCookie, t.on = i.on;
    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    i: i
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var o = document,
      i = n(3),
      a = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"),
        n = o.cookie.match(e);
    _minerva_ret = n ? n[1] : "";
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.getCookie = a;

  var r = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    n || (n = {});
    var i = new Date();
    _minerva_ret = (n.expires && ("number" == typeof n.expires || n.expires.toUTCString) ? ("number" == typeof n.expires ? i.setTime(i.getTime() + 24 * n.expires * 60 * 60 * 1e3) : i = n.expires, e += "; expires=" + i.toUTCString()) : "session" !== n.expires && (i.setTime(i.getTime() + 63072e7), e += "; expires=" + i.toUTCString()), e += "; path=" + (n.path ? n.path : "/"), e += "; domain=" + n.domain, o.cookie = t + "=" + e, a(t));
    minerva_hook.afterFunction("null", this, {
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.setCookie = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      if (n || (n = {}), n.domain) r(t, e, n);else for (var o = i.getDomains(), a = 0; a < o.length;) n.domain = o[a], r(t, e, n) ? a = o.length : a++;
    } catch (t) {}

    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    i: i,
    a: a,
    r: r
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.getDomains = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = [];

    try {
      for (var e = location.hostname, n = e.split("."), o = 2; o <= n.length;) t.push(n.slice(n.length - o).join(".")), o++;
    } catch (t) {}

    _minerva_ret = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var n = window,
      o = document,
      i = !!o.attachEvent,
      a = "attachEvent",
      r = "addEventListener",
      c = i ? a : r,
      u = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = goldlog._$ || {},
        o = n.meta_info || {},
        i = o.aplus_ctap || {};
    if (i && "function" == typeof i.on) i.on(t, e);else {
      var a = ("ontouchend" in document.createElement("div")),
          r = a ? "touchstart" : "mousedown";
      s(t, r, e);
    }
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      i: i
    });
  },
      s = function (t, e, o) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = "tap" === e ? void u(t, o) : void t[c]((i ? "on" : "") + e, function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      t = t || n.event;
      var e = t.target || t.srcElement;
      "function" == typeof o && o(t, e);
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e
      });
    }, !1);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.on = s;

  var d = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      o.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        d(t);
        minerva_hook.afterFunction("null", this, {});
      }, 1);
    }

    t();
    minerva_hook.afterFunction("null", this, {});
  },
      l = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    var e = 0,
        n = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      0 === e && t(), e++;
      minerva_hook.afterFunction("null", this, {});
    };

    "complete" === o.readyState && n();
    var i;
    if (o.addEventListener) i = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      o.removeEventListener("DOMContentLoaded", i, !1), n();
      minerva_hook.afterFunction("null", this, {});
    }, o.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", n, !1);else if (o.attachEvent) {
      i = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        "complete" === o.readyState && (o.detachEvent("onreadystatechange", i), n());
        minerva_hook.afterFunction("null", this, {});
      }, o.attachEvent("onreadystatechange", i), window.attachEvent("onload", n);
      var a = !1;

      try {
        a = null === window.frameElement;
      } catch (t) {}

      o.documentElement.doScroll && a && d(n);
    }
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      i: i
    });
  };

  e.DOMReady = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    l(t);
    minerva_hook.afterFunction("null", this, {});
  }, e.onload = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    "complete" === o.readyState ? t() : s(n, "load", t);
    minerva_hook.afterFunction("null", this, {});
  };
  minerva_hook.afterFunction("null", this, {
    n: n,
    o: o,
    i: i,
    a: a,
    r: r,
    c: c,
    u: u,
    s: s,
    d: d,
    l: l
  });
}]);
!function (o) {
  minerva_hook.beforeFunction("null", this, arguments);

  function t(r) {
    minerva_hook.beforeFunction("t", this, arguments);
    if (e[r]) return e[r].exports;
    var a = e[r] = {
      exports: {},
      id: r,
      loaded: !1
    };
    _minerva_ret = (o[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports);
    minerva_hook.afterFunction("t", this, {
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var e = {};
  _minerva_ret = (t.m = o, t.c = e, t.p = "", t(0));
  minerva_hook.afterFunction("null", this, {
    e: e,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}([function (o, t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  !function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var o = window.goldlog || (window.goldlog = {});
    o._aplus_cplugin_m || (o._aplus_cplugin_m = e(1).run());
    minerva_hook.afterFunction("null", this, {
      o: o
    });
  }();
  minerva_hook.afterFunction("null", this, {});
}, function (o, t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var r = e(2),
      a = e(3),
      n = e(4),
      s = navigator.sendBeacon ? "post" : "get";
  e(5).run(), t.run = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      status: "complete",
      do_tracker_jserror: function (o) {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          var t = new n({
            logkey: o ? o.logkey : "",
            ratio: o && "number" == typeof o.ratio && o.ratio > 0 ? o.ratio : r.jsErrorRecordRatio
          }),
              e = ["Message: " + o.message, "Error object: " + o.error, "Url: " + location.href].join(" - "),
              c = goldlog.spm_ab || [],
              i = location.hostname + location.pathname;
          t.run({
            code: 110,
            page: i,
            msg: "record_jserror_by" + s + "_" + o.message,
            spm_a: c[0],
            spm_b: c[1],
            c1: e,
            c2: o.filename,
            c3: location.protocol + "//" + i,
            c4: goldlog.pvid || "",
            c5: o.logid || ""
          });
        } catch (o) {
          a.logger({
            msg: o
          });
        }

        minerva_hook.afterFunction("null", this, {});
      },
      do_tracker_lostpv: function (o) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = !1;

        try {
          if (o && o.page) {
            var e = o.spm_ab ? o.spm_ab.split(".") : [],
                c = "record_lostpv_by" + s + "_" + o.msg,
                i = new n({
              ratio: o.ratio || r.lostPvRecordRatio
            });
            i.run({
              code: 102,
              page: o.page,
              msg: c,
              spm_a: e[0],
              spm_b: e[1],
              c1: o.duration,
              c2: o.page_url
            }), t = !0;
          }
        } catch (o) {
          a.logger({
            msg: o
          });
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      do_tracker_obsolete_inter: function (o) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = !1;

        try {
          if (o && o.page) {
            var e = o.spm_ab ? o.spm_ab.split(".") : [],
                c = "record_obsolete interface be called by" + s,
                i = new n({
              ratio: o.ratio || r.obsoleteInterRecordRatio
            });
            i.run({
              code: 109,
              page: o.page,
              msg: c,
              spm_a: e[0],
              spm_b: e[1],
              c1: o.interface_name,
              c2: o.interface_params
            }, 1), t = !0;
          }
        } catch (o) {
          a.logger({
            msg: o
          });
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      do_tracker_browser_support: function (o) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = !1;

        try {
          if (o && o.page) {
            var e = o.spm_ab ? o.spm_ab.split(".") : [],
                c = new n({
              ratio: o.ratio || r.browserSupportRatio
            }),
                i = goldlog._aplus_client || {},
                l = i.ua_info || {};
            c.run({
              code: 111,
              page: o.page,
              msg: o.msg + "_by" + s,
              spm_a: e[0],
              spm_b: e[1],
              c1: [l.o, l.b, l.w].join("_"),
              c2: o.etag || "",
              c3: o.cna || ""
            }), t = !0;
          }
        } catch (o) {
          a.logger({
            msg: o
          });
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      do_tracker_common_analysis: function (o) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = !1;

        try {
          if (o && o.page) {
            var e = o.spm_ab ? o.spm_ab.split(".") : [],
                c = new n({
              ratio: o.ratio || r.browserSupportRatio
            }),
                i = goldlog._aplus_client || {},
                l = i.ua_info || {};
            c.run({
              code: 113,
              page: o.page,
              msg: o.msg + "_by" + s,
              spm_a: e[0],
              spm_b: e[1],
              c1: [l.o, l.b, l.w].join("_"),
              c2: o.init_time || "",
              c3: o.wspv_time || 0,
              c4: o.load_time || 0,
              c5: o.channel_type
            }), t = !0;
          }
        } catch (o) {
          a.logger({
            msg: o
          });
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    r: r,
    a: a,
    n: n,
    s: s
  });
}, function (o, t) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  t.lostPvRecordRatio = "0.01", t.obsoleteInterRecordRatio = "0.001", t.jsErrorRecordRatio = "0.001", t.browserSupportRatio = "0.001", t.goldlogQueueRatio = "0.01";
  minerva_hook.afterFunction("null", this, {});
}, function (o, t) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var e = function (o) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = o.level || "warn";
    window.console && window.console[t] && window.console[t](o.msg);
    minerva_hook.afterFunction("null", this, {
      t: t
    });
  };

  t.logger = e, t.assign = function (o, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    if ("function" != typeof Object.assign) {
      var e = function (o) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (null === o) throw new TypeError("Cannot convert undefined or null to object");

        for (var t = Object(o), e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          if (null !== r) for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      return e(o, t);
    }

    _minerva_ret = Object.assign({}, o, t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, t.makeCacheNum = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = Math.floor(268435456 * Math.random()).toString(16);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, t.obj2param = function (o) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t,
        e,
        r = [];

    for (t in o) o.hasOwnProperty(t) && (e = "" + o[t], r.push(t + "=" + encodeURIComponent(e)));

    _minerva_ret = r.join("&");
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    e: e
  });
}, function (o, t, e) {
  minerva_hook.beforeFunction("null", this, arguments);

  var r = e(3),
      a = {
    ratio: 1,
    logkey: "fsp.1.1",
    gmkey: "",
    chksum: "H46747615"
  },
      n = function (o) {
    minerva_hook.beforeFunction("null", this, arguments);
    o && "object" == typeof o || (o = a), this.opts = o, this.opts.ratio = o.ratio || a.ratio, this.opts.logkey = o.logkey || a.logkey, this.opts.gmkey = o.gmkey || a.gmkey, this.opts.chksum = o.chksum || a.chksum;
    minerva_hook.afterFunction("null", this, {});
  },
      s = n.prototype;

  s.getRandom = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = Math.floor(1e3 * Math.random()) + 1;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, s.run = function (o, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e,
        a,
        n = {
      pid: "aplus",
      code: 101,
      msg: "异常内容"
    },
        s = "";

    try {
      var c = window.goldlog || {},
          i = c._$ || {},
          l = i.meta_info || {},
          g = parseFloat(l["aplus-tracker-rate"]);

      if (e = this.opts || {}, "number" == typeof g && g + "" != "NaN" || (g = e.ratio), a = this.getRandom(), t || a <= 1e3 * g) {
        s = "//gm.mmstat.com/" + e.logkey, o.rel = i.script_name + "@" + c.lver, o.type = o.code, o.uid = encodeURIComponent(c.getCookie("cna")), o = r.assign(n, o);
        var u = r.obj2param(o);
        c.tracker = c.send(s, {
          cache: r.makeCacheNum(),
          gokey: u,
          logtype: "2"
        }, "POST");
      }
    } catch (o) {
      r.logger({
        msg: "tracker.run() exec error: " + o
      });
    }

    minerva_hook.afterFunction("null", this, {
      e: e,
      a: a,
      n: n,
      s: s
    });
  }, o.exports = n;
  minerva_hook.afterFunction("null", this, {
    r: r,
    a: a,
    n: n,
    s: s
  });
}, function (o, t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var r = e(6),
      a = function (o) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = window.goldlog || {},
        e = t._$ = t._$ || {},
        r = t.spm_ab ? t.spm_ab.join(".") : "0.0",
        a = e.send_pv_count || 0;

    if (a < 1 && navigator && navigator.sendBeacon) {
      var n = window.goldlog_queue || (window.goldlog_queue = []),
          s = location.hostname + location.pathname;
      n.push({
        action: ["goldlog", "_aplus_cplugin_m", "do_tracker_lostpv"].join("."),
        arguments: [{
          page: s,
          page_url: location.protocol + "//" + s,
          duration: o,
          spm_ab: r,
          msg: "dom_state=" + document.readyState
        }]
      });
    }

    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      r: r,
      a: a
    });
  };

  t.run = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var o = new Date();
    r.on(window, "beforeunload", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = new Date(),
          e = t.getTime() - o.getTime();
      a(e);
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e
      });
    });
    minerva_hook.afterFunction("null", this, {
      o: o
    });
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    a: a
  });
}, function (o, t) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var e = self,
      r = e.document,
      a = !!r.attachEvent,
      n = "attachEvent",
      s = "addEventListener",
      c = a ? n : s;
  t.getIframeUrl = function (o) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t,
        e = "//g.alicdn.com";
    _minerva_ret = (t = goldlog && "function" == typeof goldlog.getCdnPath ? goldlog.getCdnPath() || e : e, (o || "https") + ":" + t + "/alilog/aplus_cplugin/@@APLUS_CPLUGIN_VER/ls.html?t=@@_VERSION_");
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, t.on = function (o, t, r) {
    minerva_hook.beforeFunction("null", this, arguments);
    o[c]((a ? "on" : "") + t, function (o) {
      minerva_hook.beforeFunction("null", this, arguments);
      o = o || e.event;
      var t = o.target || o.srcElement;
      "function" == typeof r && r(o, t);
      minerva_hook.afterFunction("null", this, {
        o: o,
        t: t
      });
    }, !1);
    minerva_hook.afterFunction("null", this, {});
  }, t.checkLs = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var o;

    try {
      window.localStorage && (localStorage.setItem("test_log_cna", "1"), "1" === localStorage.getItem("test_log_cna") && (localStorage.removeItem("test_log_cna"), o = !0));
    } catch (t) {
      o = !1;
    }

    _minerva_ret = o;
    minerva_hook.afterFunction("null", this, {
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, t.tracker_iframe_status = function (o, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = window.goldlog_queue || (window.goldlog_queue = []),
        r = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "",
        a = "createIframe_" + t.status + "_id=" + o;
    t.msg && (a += "_" + t.msg), e.push({
      action: "goldlog._aplus_cplugin_m.do_tracker_browser_support",
      arguments: [{
        page: location.hostname + location.pathname,
        msg: a,
        browser_attr: navigator.userAgent,
        spm_ab: r,
        cna: t.duration || "",
        ratio: 1
      }]
    });
    minerva_hook.afterFunction("null", this, {
      e: e,
      r: r,
      a: a
    });
  }, t.tracker_ls_failed = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var o = window.goldlog_queue || (window.goldlog_queue = []),
        t = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "";
    o.push({
      action: "goldlog._aplus_cplugin_m.do_tracker_browser_support",
      arguments: [{
        page: location.hostname + location.pathname,
        msg: "donot support localStorage",
        browser_attr: navigator.userAgent,
        spm_ab: t
      }]
    });
    minerva_hook.afterFunction("null", this, {
      o: o,
      t: t
    });
  }, t.processMsgData = function (o) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = {};

    try {
      var e = "{}";
      e = "TextEncoder" in window && "object" == typeof o ? new window.TextDecoder("utf-8").decode(o) : o, t = JSON.parse(e);
    } catch (o) {
      t = {};
    }

    _minerva_ret = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, t.do_pub_fn = function (o, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = window.goldlog_queue || (window.goldlog_queue = []);
    e.push({
      action: "goldlog.aplus_pubsub.publish",
      arguments: [o, t]
    }), e.push({
      action: "goldlog.aplus_pubsub.cachePubs",
      arguments: [o, t]
    });
    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };
  minerva_hook.afterFunction("null", this, {
    e: e,
    r: r,
    a: a,
    n: n,
    s: s,
    c: c
  });
}]);
/*! 2021-11-18 16:45:09 v8.15.19 */

!function (t) {
  minerva_hook.beforeFunction("null", this, arguments);

  function e(r) {
    minerva_hook.beforeFunction("e", this, arguments);
    if (n[r]) return n[r].exports;
    var o = n[r] = {
      exports: {},
      id: r,
      loaded: !1
    };
    _minerva_ret = (t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports);
    minerva_hook.afterFunction("e", this, {
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var n = {};
  _minerva_ret = (e.m = t, e.c = n, e.p = "", e(0));
  minerva_hook.afterFunction("null", this, {
    n: n,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}([function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  !function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t,
        e = window;

    try {
      var r = "function";
      t = typeof e.WebSocket === r && typeof e.WebSocket.prototype.send === r;
    } catch (t) {}

    if (t) {
      var o = e.goldlog || (e.goldlog = {});
      if (o._aplus_cplugin_ws) return;
      o._aplus_cplugin_ws = !0;
      var a = n(1),
          s = a.create();
      s.run();
    }

    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e
    });
  }();
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var r = window,
      o = n(2),
      a = n(3),
      s = n(13),
      i = n(16),
      u = n(6),
      c = n(8),
      l = n(17),
      f = n(18),
      h = n(20),
      p = n(21),
      g = n(22);
  t.exports = o.extend({
    wsHandler: "",
    lsCnaKey: "APLUS_CNA",
    timeoutToHttp: 3e3,
    domain: "log.mmstat.com",
    retryTimesKey: "aplusx_retry_times",
    maxRetryTimesPerHour: 3,
    retryTimes: 0,
    pageLoadDateHour: "",
    getDateHour: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = l.getFormatDate() + new Date().getHours();
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getRandom: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = t + Math.floor(Math.random() * (e - t + 1));
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getRetryTimes: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = 0,
          e = c.get(this.retryTimesKey);

      if (e) {
        var n = e.split("-");
        2 === n.length && n[0] === this.getDateHour() && (t = parseInt(n[1]));
      }

      _minerva_ret = t;
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    setRetryTimes: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      c.set(this.retryTimesKey, this.getDateHour() + "-" + t);
      minerva_hook.afterFunction("null", this, {});
    },
    doSetRetryTimes: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.retryTimes < this.maxRetryTimesPerHour ? this.setRetryTimes(++this.retryTimes) : this.retryTimes >= this.maxRetryTimesPerHour && this.pageLoadDateHour !== this.getDateHour() && (this.retryTimes = 0, this.setRetryTimes(++this.retryTimes));
      minerva_hook.afterFunction("null", this, {});
    },
    cheatCallback: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      c.set(t.toUpperCase(), e);
      minerva_hook.afterFunction("null", this, {});
    },
    newSend: function (t, e, n, r) {
      minerva_hook.beforeFunction("null", this, arguments);
      var o = this;
      i(t, function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        "number" != typeof n && "boolean" != typeof n || (t[e] = n + "");
        minerva_hook.afterFunction("null", this, {});
      });
      var a = c.get("APLUS_SN"),
          s = c.get("APLUS_SY");

      try {
        a && (t.aplus_sn = a), s && (t.aplus_sy = s), t.ua = navigator.userAgent, t.lang = navigator.language;
      } catch (t) {}

      this.wsHandler.send({
        id: "id" + o.getRandom(1, 1e8),
        startTime: new Date().getTime(),
        type: e,
        msg: {
          postData: JSON.stringify(t),
          url: n
        },
        method: r
      });
      minerva_hook.afterFunction("null", this, {
        o: o,
        a: a,
        s: s
      });
    },
    getPvPostData: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e,
          n = t.is_single,
          r = t.where_to_sendlog_ut.aplusToUT.toutflag,
          o = t.where_to_sendpv.url,
          s = "//log.mmstat.com/o.gif";

      if ("toUT2" === r && !n || "toUT" === r && !n || "toUT2" !== r && "toUT" !== r) {
        s = t.where_to_sendpv.url, e = t.what_to_sendpv.pvdata;
        var i = o.match(/\/\w+.gif/),
            u = i ? i[0] : "/v.gif",
            c = a.arr2param(e),
            l = c.indexOf("&aplus&") > -1 ? "&aplus&" : "&aplus=&",
            f = c.split(l),
            h = a.param2obj(f[0]);
        return {
          postData: a.assign(h, {
            logkey: u,
            url: location.href,
            gokey: f[1].replace(/&aws=1/, "")
          }),
          mmurl: s
        };
      }

      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        r: r,
        o: o,
        s: s
      });
    },
    pv_callback: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        var e = this.getPvPostData(t);
        e && this.newSend(e.postData, "pv", e.mmurl);
      } catch (t) {
        g.catchException("pv_callback", t);
      }

      minerva_hook.afterFunction("null", this, {});
    },
    getHjljPostData: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = t.is_single,
          n = {},
          r = t.where_to_sendlog_ut.aplusToUT.toutflag,
          o = "";
      if ("toUT2" === r && !e || "toUT" === r && !e) o = t.where_to_hjlj.url, n = t.what_to_hjlj.logdata, n.logkey = n.logkey || "";else {
        if ("toUT2" === r || "toUT" === r) return;
        o = t.where_to_hjlj.url, n = t.what_to_hjlj.logdata, n.logkey = t.userdata ? t.userdata.logkey : "";
      }
      _minerva_ret = (n.url = location.href, n.gokey && (n.gokey = n.gokey.replace(/&aws=1/, "")), {
        postData: n,
        mmurl: o
      });
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        r: r,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    hjlj_callback: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        var e = this.getHjljPostData(t);
        e && this.newSend(e.postData, "goldlog", e.mmurl, t.method);
      } catch (t) {
        g.catchException("hjlj_callback", t);
      }

      minerva_hook.afterFunction("null", this, {});
    },
    getCnaData: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = {
        params: []
      },
          e = u.getLsCna(this.lsCnaKey),
          n = f.getCookie("cna");
      _minerva_ret = (t.cna = e || n, e && !n && t.params.push("lstag=1"), t);
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    cnaCallback: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = u.getLsCna(this.lsCnaKey),
          r = f.getCookie("cna");
      n === r && n === e && r === e || (u.setLsCna(this.lsCnaKey, l.getFormatDate(), e), f.setCookie(t, e, {
        SameSite: "none"
      }));
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r
      });
    },
    watchWSStatus: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = this;
      this.wsHandler.subscribe("APLUS_WS_OPEN", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t === e.maxRetryTimesPerHour && (e.retryTimes = 0, e.setRetryTimes(e.retryTimes));
        minerva_hook.afterFunction("null", this, {});
      }), this.wsHandler.subscribe("APLUS_WS_ERROR", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        e.doSetRetryTimes(), e.msgQueueToHttpRequest();
        minerva_hook.afterFunction("null", this, {});
      }), this.wsHandler.subscribe("APLUS_WS_EXCEPTION", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        e.doSetRetryTimes(), e.msgQueueToHttpRequest();
        minerva_hook.afterFunction("null", this, {});
      }), this.wsHandler.subscribe("APLUS_WS_CLOSE", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        e.msgQueueToHttpRequest();
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("null", this, {
        e: e
      });
    },
    startWebSocket: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this,
          e = this.getCnaData();
      this.wsHandler = p.create({
        cna: e.cna,
        params: e.params,
        createTime: new Date().getTime()
      }), this.wsHandler.startWS(), this.watchWSStatus(this.getRetryTimes()), this.wsHandler.subscribe("APLUS_WS_SERVER_MSG", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);

        if (e) {
          var n = e.indexOf(":"),
              r = e.substr(0, n),
              o = e.substr(n + 1);

          switch (r) {
            case "cna":
              t.cnaCallback(r, o);
              break;

            case "aplus_sn":
            case "aplus_sy":
              t.cheatCallback(r, o);
              break;

            default:
              var a = {};
              a[r] = o, goldlog.send("//" + t.domain + "/s", a);
          }
        }

        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e
      });
    },
    subscribeLogs: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      h.pushIntoGoldlogQueue("goldlog.aplus_pubsub.subscribe", [t, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        "complete" === t.status && e(t);
        minerva_hook.afterFunction("null", this, {});
      }]);
      minerva_hook.afterFunction("null", this, {});
    },
    enableSendByWS: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = goldlog.getMetaInfo("aplus-channel"),
          n = ["WS", "WS-ONLY"],
          r = n.indexOf(goldlog.aplusChannel) > -1 || n.indexOf(e) > -1 || n.indexOf(t) > -1;
      _minerva_ret = r;
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    watchLOG: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this;
      t.subscribeLogs("mw_change_pv", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = t.enableSendByWS(e.method);
        if (n === !0) if (t.retryTimes >= t.maxRetryTimesPerHour) {
          var r = a.arr2obj(e.what_to_sendpv.pvdata);
          delete r.aws, r._j = 1, goldlog.send(e.where_to_sendpv.url, r);
        } else t.pv_callback(e);
        minerva_hook.afterFunction("null", this, {
          n: n
        });
      }), t.subscribeLogs("mw_change_hjlj", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = "POST" === e.method;
        if (t.enableSendByWS(e.method)) if (t.retryTimes >= t.maxRetryTimesPerHour) {
          var r = t.getHjljPostData(e);

          if (r && r.postData) {
            r.postData.gokey += "&_j=1";
            var o = {};
            i(r.postData, function (t, e) {
              minerva_hook.beforeFunction("null", this, arguments);
              ["url", "logkey"].indexOf(t) === -1 && (o[t] = n ? decodeURIComponent(e) : e);
              minerva_hook.afterFunction("null", this, {});
            }), goldlog.send(r.mmurl, o, e.method);
          }
        } else t.hjlj_callback(e);
        minerva_hook.afterFunction("null", this, {
          n: n
        });
      });
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    changeToHttpRequest: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (t && t.length > 0) for (var e = 0; e < t.length; e++) {
        var n = t[e],
            r = n.msg,
            o = "object" == typeof r.postData ? r.postData : JSON.parse(r.postData);
        o.gokey = o.gokey + "&_j=1", delete o.aplus_sn, delete o.aplus_sy, delete o.ua, delete o.lang;
        var a = [];
        i(o, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);

          try {
            o[t] = decodeURIComponent(o[t]);
          } catch (e) {
            o[t] = o[t];
          }

          "pv" === n.type ? "gokey" === t ? (a.push("aplus"), a.push(o[t].replace(/&aws=1/, ""))) : "pre" === t ? a.push(t + "=" + encodeURIComponent(o[t])) : "url" !== t && "logkey" !== t && a.push(t + "=" + o[t]) : "gokey" === t && (o[t] = o[t].replace(/&aws=1/, ""));
          minerva_hook.afterFunction("null", this, {});
        }), "pv" === n.type ? goldlog.send(r.url + "?" + a.join("&")) : goldlog.send(r.url, o, n.method || "GET");
      }
      minerva_hook.afterFunction("null", this, {});
    },
    dataInArray: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var n, r = 0; r < t.length; r++) t[r].id === e.id && (n = !0);

      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    reduceDataInArray: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var n = [], r = 0; r < t.length; r++) t[r].id !== e.id && n.push(t[r]);

      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    msgQueueToHttpRequest: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this.wsHandler.getMsgQueue();
      this.changeToHttpRequest(t), this.wsHandler.clearMsgQueue();
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    watchQueue: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this;
      s.on(r, "beforeunload", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t.msgQueueToHttpRequest();
        minerva_hook.afterFunction("null", this, {});
      }), this.wsHandler.subscribe("APLUS_WS_MSG_QUEUE_CHANGE", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        r.setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var n = t.wsHandler.getMsgQueue();

          if (t.dataInArray(n, e)) {
            t.doSetRetryTimes(), t.changeToHttpRequest([e]);
            var r = t.reduceDataInArray(n, e);
            t.wsHandler.setMsgQueue(r);
          }

          minerva_hook.afterFunction("null", this, {
            n: n
          });
        }, t.timeoutToHttp);
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    watchDomain: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this;
      h.pushIntoGoldlogQueue("goldlog.aplus_pubsub.subscribe", ["aplusInitContext", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = e ? e.where_to_sendpv : {},
            r = n.url.match(/(\w|-)+\.(\w|-)+\.(\w|-)+/);
        r && r.length > 0 && (t.domain = r[0]);
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r
        });
      }]);
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    run: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = {
        aws: 1
      };
      h.pushIntoGoldlogQueue("goldlog.appendMetaInfo", ["aplus-exdata", t]), h.pushIntoGoldlogQueue("goldlog.appendMetaInfo", ["aplus-cpvdata", t]);

      try {
        this.retryTimes = this.getRetryTimes(), this.pageLoadDateHour = this.getDateHour(), this.startWebSocket(), this.watchLOG(), this.watchQueue(), this.watchDomain();
      } catch (t) {
        g.catchException("ws_main_run_fn", t);
      }

      minerva_hook.afterFunction("null", this, {
        t: t
      });
    }
  });
  minerva_hook.afterFunction("null", this, {
    r: r,
    o: o,
    a: a,
    s: s,
    i: i,
    u: u,
    c: c,
    l: l,
    f: f,
    h: h,
    p: p,
    g: g
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n() {
    minerva_hook.beforeFunction("n", this, arguments);
    minerva_hook.afterFunction("n", this, {});
  }

  n.prototype.extend = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    minerva_hook.afterFunction("null", this, {});
  }, n.prototype.create = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    minerva_hook.afterFunction("null", this, {});
  }, n.extend = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = this.prototype.extend.call(this, t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.create = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = new this();

    for (var n in t) e[n] = t[n];

    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.extend = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    var e = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    };

    try {
      "function" != typeof Object.create && (Object.create = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        function e() {
          minerva_hook.beforeFunction("e", this, arguments);
          minerva_hook.afterFunction("e", this, {});
        }

        _minerva_ret = (e.prototype = t, new e());
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }), e.prototype = Object.create(this.prototype);

      for (var n in t) e.prototype[n] = t[n];

      e.prototype.constructor = e, e.extend = e.prototype.extend, e.create = e.prototype.create;
    } catch (t) {
      console.log(t);
    } finally {
      return e;
    }

    minerva_hook.afterFunction("null", this, {
      e: e
    });
  }, t.exports = n;
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    t = (t || "").split("#")[0].split("?")[0];

    var e = t.length,
        n = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e,
          n = t.length,
          r = 0;

      for (e = 0; e < n; e++) r = 31 * r + t.charCodeAt(e);

      _minerva_ret = r;
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    _minerva_ret = e ? n(e + "#" + t.charCodeAt(e - 1)) : -1;
    minerva_hook.afterFunction("r", this, {
      t: t,
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);

    for (var e = t.split("&"), n = 0, r = e.length, o = {}; n < r; n++) {
      var a = e[n],
          s = a.indexOf("="),
          i = a.substring(0, s),
          u = a.substring(s + 1);
      o[i] = f.tryToDecodeURIComponent(u);
    }

    _minerva_ret = o;
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    _minerva_ret = t;
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function s(t) {
    minerva_hook.beforeFunction("s", this, arguments);
    var e,
        n,
        r,
        o = [],
        a = t.length;

    for (r = 0; r < a; r++) e = t[r][0], n = t[r][1], o.push(l.isStartWith(e, y) ? n : e + "=" + encodeURIComponent(n));

    _minerva_ret = o.join("&");
    minerva_hook.afterFunction("s", this, {
      e: e,
      n: n,
      r: r,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i(t) {
    minerva_hook.beforeFunction("i", this, arguments);
    var e,
        n,
        r,
        o = {},
        a = t.length;

    for (r = 0; r < a; r++) e = t[r][0], n = t[r][1], o[e] = n;

    _minerva_ret = o;
    minerva_hook.afterFunction("i", this, {
      e: e,
      n: n,
      r: r,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function u(t, e) {
    minerva_hook.beforeFunction("u", this, arguments);
    var n,
        r,
        o,
        a = [];

    for (n in t) t.hasOwnProperty(n) && (r = "" + t[n], o = n + "=" + encodeURIComponent(r), e ? a.push(o) : a.push(l.isStartWith(n, y) ? r : o));

    _minerva_ret = a.join("&");
    minerva_hook.afterFunction("u", this, {
      n: n,
      r: r,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function c(t, e) {
    minerva_hook.beforeFunction("c", this, arguments);
    var n = t.indexOf("?") == -1 ? "?" : "&",
        r = e ? l.isArray(e) ? s(e) : u(e) : "";
    _minerva_ret = r ? t + n + r : t;
    minerva_hook.afterFunction("c", this, {
      n: n,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var l = n(4),
      f = n(6),
      h = n(9),
      p = parent !== self;
  e.is_in_iframe = p, e.makeCacheNum = l.makeCacheNum, e.isStartWith = l.isStartWith, e.isEndWith = l.isEndWith, e.any = l.any, e.each = l.each, e.assign = l.assign, e.isFunction = l.isFunction, e.isArray = l.isArray, e.isString = l.isString, e.isNumber = l.isNumber, e.isUnDefined = l.isUnDefined, e.isContain = l.isContain, e.sleep = n(10).sleep, e.makeChkSum = r, e.tryToDecodeURIComponent = f.tryToDecodeURIComponent, e.nodeListToArray = f.nodeListToArray, e.parseSemicolonContent = f.parseSemicolonContent, e.param2obj = o;

  var g = n(11),
      d = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = /^(\/\/){0,1}(\w+\.){1,}\w+((\/\w+){1,})?$/.test(t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.hostValidity = d;

  var m = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = /^(\/\/){0,1}(\w+\.){1,}\w+\/\w+\.gif$/.test(t),
        r = d(t),
        o = "";
    _minerva_ret = (n ? o = "isGifPath" : r && (o = "isHostPath"), o || g.logger({
      msg: e + ": " + t + ' is invalid, suggestion: "xxx.mmstat.com"'
    }), o);
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      v = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = (!/^\/\/gj\.mmstat/.test(t) && goldlog.isInternational() && (t = t.replace(/^\/\/\w+\.mmstat/, "//gj.mmstat")), t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.filterIntUrl = v, e.getPvUrl = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t || (t = {});
    var e,
        n,
        r = t.metaValue && m(t.metaValue, t.metaName),
        o = "";
    "isGifPath" === r ? (e = /^\/\//.test(t.metaValue) ? "" : "//", o = e + t.metaValue) : "isHostPath" === r && (e = /^\/\//.test(t.metaValue) ? "" : "//", n = /\/$/.test(t.metaValue) ? "" : "/", o = e + t.metaValue + n + t.gifPath);
    var a;
    _minerva_ret = (o ? a = o : (e = 0 === t.gifPath.indexOf("/") ? t.gifPath : "/" + t.gifPath, a = t.url && t.url.replace(/\/\w+\.gif/, e)), a);
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      r: r,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.indexof = n(12).indexof, e.callable = a;
  var y = "::-plain-::";
  e.mkPlainKey = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = y + Math.random();
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.s_plain_obj = y, e.mkPlainKeyForExparams = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = t || y;
    _minerva_ret = e + "exparams";
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.rndInt32 = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = Math.round(2147483647 * Math.random());
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.arr2param = s, e.arr2obj = i, e.obj2param = u, e.makeUrl = c, e.ifAdd = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n,
        r,
        o,
        a,
        s = e.length;

    for (n = 0; n < s; n++) r = e[n], o = r[0], a = r[1], a && t.push([o, a]);

    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      o: o,
      a: a,
      s: s
    });
  }, e.isStartWithProtocol = h.isStartWithProtocol, e.param2arr = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e, n = t.split("&"), r = 0, o = n.length, a = []; r < o; r++) e = n[r].split("="), a.push([e.shift(), e.join("=")]);

    _minerva_ret = a;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.catchException = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = window,
        o = r.goldlog_queue || (r.goldlog_queue = []),
        a = t;
    "object" == typeof e && e.message && (a = a + "_" + e.message), n && n.msg && (a += "_" + n.msg), o.push({
      action: "goldlog._aplus_cplugin_m.do_tracker_jserror",
      arguments: [{
        message: a,
        error: JSON.stringify(e),
        filename: t
      }]
    });
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o,
      a: a
    });
  };
  minerva_hook.afterFunction("null", this, {
    l: l,
    f: f,
    h: h,
    p: p,
    g: g,
    d: d,
    m: m,
    v: v,
    y: y
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function r(t, e) {
    minerva_hook.beforeFunction("r", this, arguments);
    _minerva_ret = "function" != typeof Object.assign ? function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (null === t) throw new TypeError("Cannot convert undefined or null to object");

      for (var e = Object(t), n = 1; n < arguments.length; n++) {
        var r = arguments[n];
        if (null !== r) for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
      }

      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }(t, e) : Object.assign({}, t, e);
    minerva_hook.afterFunction("r", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    _minerva_ret = "function" == typeof t;
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    _minerva_ret = Array.isArray ? Array.isArray(t) : /Array/.test(Object.prototype.toString.call(t));
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function s(t) {
    minerva_hook.beforeFunction("s", this, arguments);
    _minerva_ret = "string" == typeof t;
    minerva_hook.afterFunction("s", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i(t) {
    minerva_hook.beforeFunction("i", this, arguments);
    _minerva_ret = "number" == typeof t;
    minerva_hook.afterFunction("i", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function u(t) {
    minerva_hook.beforeFunction("u", this, arguments);
    _minerva_ret = "undefined" == typeof t;
    minerva_hook.afterFunction("u", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function c(t) {
    minerva_hook.beforeFunction("c", this, arguments);
    _minerva_ret = "[object Object]" === Object.prototype.toString.call(t);
    minerva_hook.afterFunction("c", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function l(t) {
    minerva_hook.beforeFunction("l", this, arguments);
    if ("number" == typeof t) return !1;
    if (u(t) || null === t) return !0;
    if (s(t)) return !t;
    if (a(t)) return !t.length;

    if (c(t)) {
      for (var e in t) if (hasOwnProperty.call(t, e)) return !1;

      return !0;
    }

    _minerva_ret = !1;
    minerva_hook.afterFunction("l", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function f(t) {
    minerva_hook.beforeFunction("f", this, arguments);
    if ("string" == typeof t) try {
      var e = JSON.parse(t);
      return !("object" != typeof e || !e);
    } catch (t) {
      return !1;
    }
    _minerva_ret = !1;
    minerva_hook.afterFunction("f", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function h(t, e) {
    minerva_hook.beforeFunction("h", this, arguments);
    _minerva_ret = t.indexOf(e) > -1;
    minerva_hook.afterFunction("h", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var p = window;
  e.assign = r, e.makeCacheNum = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = Math.floor(268435456 * Math.random()).toString(16);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.each = n(5), e.isStartWith = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = 0 === t.indexOf(e);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.isEndWith = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = t.length,
        r = e.length;
    _minerva_ret = n >= r && t.indexOf(e) == n - r;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.any = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n,
        r = t.length;

    for (n = 0; n < r; n++) if (e(t[n])) return !0;

    _minerva_ret = !1;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.isFunction = o, e.isArray = a, e.isString = s, e.isNumber = i, e.isUnDefined = u, e.isObject = c, e.isEmpty = l, e.isJSON = f, e.isContain = h;

  var g = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e,
        n = t.constructor === Array ? [] : {};

    if ("object" == typeof t) {
      if (p.JSON && p.JSON.parse) e = JSON.stringify(t), n = JSON.parse(e);else for (var r in t) n[r] = "object" == typeof t[r] ? g(t[r]) : t[r];
      return n;
    }

    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n
    });
  };

  e.cloneObj = g, e.cloneDeep = g;
  minerva_hook.afterFunction("null", this, {
    p: p,
    g: g
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  t.exports = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n,
        r = t.length;

    for (n = 0; n < r; n++) {
      var o = e(t[n], n);
      if ("break" === o) break;
    }

    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r
    });
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(7),
      o = n(8);
  t.exports = {
    tryToDecodeURIComponent: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = e || "";
      if (t) try {
        n = decodeURIComponent(t);
      } catch (t) {}
      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    parseSemicolonContent: function (t, e, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e = e || {};
      var o,
          a,
          s = t.split(";"),
          i = s.length;

      for (o = 0; o < i; o++) {
        a = s[o].split("=");
        var u = r.trim(a.slice(1).join("="));
        e[r.trim(a[0]) || ""] = n ? u : this.tryToDecodeURIComponent(u);
      }

      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        e: e,
        o: o,
        a: a,
        s: s,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    nodeListToArray: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e, n;

      try {
        return e = [].slice.call(t);
      } catch (o) {
        e = [], n = t.length;

        for (var r = 0; r < n; r++) e.push(t[r]);

        return e;
      }

      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n
      });
    },
    getLsCna: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);

      if (o.set && o.test()) {
        var n = "",
            r = o.get(t);

        if (r) {
          var a = r.split("_") || [];
          n = e ? a.length > 1 && e === a[0] ? a[1] : "" : a.length > 1 ? a[1] : "";
        }

        return decodeURIComponent(n);
      }

      _minerva_ret = "";
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    setLsCna: function (t, e, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      n && o.set && o.test() && o.set(t, e + "_" + encodeURIComponent(n));
      minerva_hook.afterFunction("null", this, {});
    },
    getUrl: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = t || "//log.mmstat.com/eg.js";

      try {
        var n = goldlog.getMetaInfo("aplus-rhost-v"),
            r = /[[a-z|0-9\.]+[a-z|0-9]/,
            o = n.match(r);
        o && o[0] && (e = e.replace(r, o[0]));
      } catch (t) {}

      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }
  };
  minerva_hook.afterFunction("null", this, {
    r: r,
    o: o
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t) {
    minerva_hook.beforeFunction("n", this, arguments);
    _minerva_ret = "string" == typeof t ? t.replace(/^\s+|\s+$/g, "") : "";
    minerva_hook.afterFunction("n", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  e.trim = n;
  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  t.exports = {
    set: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        return localStorage.setItem(t, e), !0;
      } catch (t) {
        return !1;
      }

      minerva_hook.afterFunction("null", this, {});
    },
    get: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        return localStorage.getItem(t);
      } catch (t) {
        return "";
      }

      minerva_hook.afterFunction("null", this, {});
    },
    test: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = "grey_test_key";

      try {
        return localStorage.setItem(t, 1), localStorage.removeItem(t), !0;
      } catch (t) {
        return !1;
      }

      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    remove: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      localStorage.removeItem(t);
      minerva_hook.afterFunction("null", this, {});
    }
  };
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var r = n(4),
      o = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    if (goldlog.aplusDebug) {
      var t = location.protocol;
      return "http:" !== t && "https:" !== t && (t = "https:"), t;
    }

    _minerva_ret = "https:";
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.getProtocal = o, e.isStartWithProtocol = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e = ["javascript:", "tel:", "sms:", "mailto:", "tmall://", "#"], n = 0, o = e.length; n < o; n++) if (r.isStartWith(t, e[n])) return !0;

    _minerva_ret = !1;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    r: r,
    o: o
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.sleep = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = setTimeout(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      e();
      minerva_hook.afterFunction("null", this, {});
    }, t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var n = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = !1;
    _minerva_ret = ("boolean" == typeof goldlog.aplusDebug && (t = goldlog.aplusDebug), t);
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.isDebugAplus = n;

  var r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t || (t = {});
    var e = t.level || "warn";
    window.console && window.console[e] && window.console[e](t.msg);
    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };

  e.logger = r;
  minerva_hook.afterFunction("null", this, {
    n: n,
    r: r
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.indexof = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = -1;

    try {
      n = t.indexOf(e);
    } catch (o) {
      for (var r = 0; r < t.length; r++) t[r] === e && (n = r);
    } finally {
      return n;
    }

    minerva_hook.afterFunction("null", this, {
      n: n
    });
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function r(t, e, n) {
    minerva_hook.beforeFunction("r", this, arguments);
    var r = goldlog._$ || {},
        o = r.meta_info || {},
        a = o.aplus_ctap || {},
        s = o["aplus-touch"];
    if (a && "function" == typeof a.on) a.on(t, e);else {
      var u = ("ontouchend" in document.createElement("div"));
      !u || "tap" !== s && "tapSpm" !== n ? i(t, u ? "touchstart" : "mousedown", e) : c.on(t, e);
    }
    minerva_hook.afterFunction("r", this, {
      r: r,
      o: o,
      a: a,
      s: s
    });
  }

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);

    try {
      f.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        o(t);
        minerva_hook.afterFunction("null", this, {});
      }, 1);
    }

    t();
    minerva_hook.afterFunction("o", this, {});
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);

    var e = 0,
        n = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      0 === e && t(), e++;
      minerva_hook.afterFunction("null", this, {});
    };

    "complete" === f.readyState && n();
    var r;
    if (f.addEventListener) r = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      f.removeEventListener("DOMContentLoaded", r, !1), n();
      minerva_hook.afterFunction("null", this, {});
    }, f.addEventListener("DOMContentLoaded", r, !1), window.addEventListener("load", n, !1);else if (f.attachEvent) {
      r = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        "complete" === f.readyState && (f.detachEvent("onreadystatechange", r), n());
        minerva_hook.afterFunction("null", this, {});
      }, f.attachEvent("onreadystatechange", r), window.attachEvent("onload", n);
      var a = !1;

      try {
        a = null === window.frameElement;
      } catch (t) {}

      f.documentElement.doScroll && a && o(n);
    }
    minerva_hook.afterFunction("a", this, {
      e: e,
      n: n,
      r: r
    });
  }

  function s(t) {
    minerva_hook.beforeFunction("s", this, arguments);
    "complete" === f.readyState ? t() : i(l, "load", t);
    minerva_hook.afterFunction("s", this, {});
  }

  function i() {
    minerva_hook.beforeFunction("i", this, arguments);
    var t = arguments;
    if (2 === t.length) "DOMReady" === t[0] && a(t[1]), "onload" === t[0] && s(t[1]);else if (3 === t.length) {
      var e = t[0],
          n = t[1],
          o = t[2];
      "tap" === n || "tapSpm" === n ? r(e, o, n) : e[d]((h ? "on" : "") + n, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = t || l.event;
        var e = t.target || t.srcElement;
        "function" == typeof o && o(t, e);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e
        });
      }, !!u(n) && {
        passive: !0
      });
    }
    minerva_hook.afterFunction("i", this, {
      t: t
    });
  }

  var u = n(14),
      c = n(15),
      l = window,
      f = document,
      h = !!f.attachEvent,
      p = "attachEvent",
      g = "addEventListener",
      d = h ? p : g;
  e.DOMReady = a, e.onload = s, e.on = i;
  minerva_hook.afterFunction("null", this, {
    u: u,
    c: c,
    l: l,
    f: f,
    h: h,
    p: p,
    g: g,
    d: d
  });
}, function (t, e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var n;

  t.exports = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    if ("boolean" == typeof n) return n;
    if (!/touch|mouse|scroll|wheel/i.test(t)) return !1;
    n = !1;

    try {
      var e = Object.defineProperty({}, "passive", {
        get: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          n = !0;
          minerva_hook.afterFunction("null", this, {
            n: n
          });
        }
      });
      window.addEventListener("test", null, e);
    } catch (t) {}

    _minerva_ret = n;
    minerva_hook.afterFunction("null", this, {
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    n: n
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t, e) {
    minerva_hook.beforeFunction("n", this, arguments);
    _minerva_ret = t + Math.floor(Math.random() * (e - t + 1));
    minerva_hook.afterFunction("n", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t, e, n) {
    minerva_hook.beforeFunction("r", this, arguments);
    var r = l.createEvent("HTMLEvents");
    if (r.initEvent(e, !0, !0), "object" == typeof n) for (var o in n) r[o] = n[o];
    t.dispatchEvent(r);
    minerva_hook.afterFunction("r", this, {
      r: r
    });
  }

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    0 === Object.keys(h).length && (f.addEventListener(d, a, !1), f.addEventListener(g, s, !1), f.addEventListener(v, s, !1));

    for (var e = 0; e < t.changedTouches.length; e++) {
      var n = t.changedTouches[e],
          r = {};

      for (var o in n) r[o] = n[o];

      var i = {
        startTouch: r,
        startTime: Date.now(),
        status: m,
        element: t.srcElement || t.target
      };
      h[n.identifier] = i;
    }

    minerva_hook.afterFunction("o", this, {});
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);

    for (var e = 0; e < t.changedTouches.length; e++) {
      var n = t.changedTouches[e],
          r = h[n.identifier];
      if (!r) return;
      var o = n.clientX - r.startTouch.clientX,
          a = n.clientY - r.startTouch.clientY,
          s = Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
      (r.status === m || "pressing" === r.status) && s > 10 && (r.status = "panning");
    }

    minerva_hook.afterFunction("a", this, {});
  }

  function s(t) {
    minerva_hook.beforeFunction("s", this, arguments);

    for (var e = 0; e < t.changedTouches.length; e++) {
      var n = t.changedTouches[e],
          o = n.identifier,
          i = h[o];
      i && (i.status === m && t.type === g && (i.timestamp = Date.now(), r(i.element, y, {
        touch: n,
        touchEvent: t
      })), delete h[o]);
    }

    0 === Object.keys(h).length && (f.removeEventListener(d, a, !1), f.removeEventListener(g, s, !1), f.removeEventListener(v, s, !1));
    minerva_hook.afterFunction("s", this, {});
  }

  function i(t) {
    minerva_hook.beforeFunction("i", this, arguments);
    t.__fixTouchEvent || (t.addEventListener(p, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    }, !1), t.__fixTouchEvent = !0);
    minerva_hook.afterFunction("i", this, {});
  }

  function u() {
    minerva_hook.beforeFunction("u", this, arguments);
    c || (f.addEventListener(p, o, !1), c = !0);
    minerva_hook.afterFunction("u", this, {});
  }

  var c = !1,
      l = window.document,
      f = l.documentElement,
      h = {},
      p = "touchstart",
      g = "touchend",
      d = "touchmove",
      m = "tapping",
      v = "touchcancel",
      y = "aplus_tap" + n(1, 1e5);
  t.exports = {
    on: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      u(), t && t.addEventListener && e && (i(t), t.addEventListener(y, e._aplus_tap_callback = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e(t, t.target);
        minerva_hook.afterFunction("null", this, {});
      }, !1));
      minerva_hook.afterFunction("null", this, {});
    },
    un: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      t && t.removeEventListener && e && e._aplus_tap_callback && t.removeEventListener(y, e._aplus_tap_callback, !1);
      minerva_hook.afterFunction("null", this, {});
    }
  };
  minerva_hook.afterFunction("null", this, {
    c: c,
    l: l,
    f: f,
    h: h,
    p: p,
    g: g,
    d: d,
    m: m,
    v: v,
    y: y
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  t.exports = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (Object && Object.keys) for (var n = Object.keys(t), r = n.length, o = 0; o < r; o++) {
      var a = n[o];
      e(a, t[a]);
    } else for (var s in t) e(s, t[s]);
    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t, e, n) {
    minerva_hook.beforeFunction("n", this, arguments);
    var r = "" + Math.abs(t),
        o = e - r.length,
        a = t >= 0;
    _minerva_ret = (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r;
    minerva_hook.afterFunction("n", this, {
      r: r,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  e.getFormatDate = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = new Date();

    try {
      return [e.getFullYear(), n(e.getMonth() + 1, 2, 0), n(e.getDate(), 2, 0)].join(t || "");
    } catch (t) {
      return "";
    }

    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    var e = i.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
    _minerva_ret = e ? e[1] : "";
    minerva_hook.afterFunction("r", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function o(t, e, n) {
    minerva_hook.beforeFunction("o", this, arguments);
    n || (n = {});
    var o = new Date();
    if ("session" === n.expires) ;else if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) "number" == typeof n.expires ? o.setTime(o.getTime() + 24 * n.expires * 60 * 60 * 1e3) : o = n.expires, e += "; expires=" + o.toUTCString();else {
      var a = 20;
      c.indexof(["v.youku.com", "www.youku.com", "player.youku.com"], location.hostname) > -1 && (a = 1), o.setTime(o.getTime() + 365 * a * 24 * 60 * 60 * 1e3), e += "; expires=" + o.toUTCString();
    }
    e += "; path=" + (n.path ? n.path : "/"), e += "; domain=" + n.domain, i.cookie = t + "=" + e;
    var s = 0;

    try {
      var u = navigator.userAgent.match(/Chrome\/\d/);
      u && u[0] && (s = u[0].split("/")[1], s && (s = parseInt(s)));
    } catch (t) {}

    _minerva_ret = (n.SameSite && s >= 8 && (e += "; SameSite=" + n.SameSite, e += "; Secure", i.cookie = t + "=" + e), r(t));
    minerva_hook.afterFunction("o", this, {
      o: o,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t, e, n) {
    minerva_hook.beforeFunction("a", this, arguments);

    try {
      if (n || (n = {}), n.domain) o(t, e, n);else for (var r = l.getDomains(), a = 0; a < r.length;) n.domain = r[a], o(t, e, n) ? a = r.length : a++;
    } catch (t) {}

    minerva_hook.afterFunction("a", this, {});
  }

  function s() {
    minerva_hook.beforeFunction("s", this, arguments);
    var t = {};
    _minerva_ret = (u.each(h, function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      t[e] = r(e);
      minerva_hook.afterFunction("null", this, {});
    }), t.cnaui = /\btanx\.com$/.test(f) ? r("cnaui") : "", t);
    minerva_hook.afterFunction("s", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var i = document,
      u = n(4),
      c = n(12),
      l = n(19),
      f = location.hostname;
  e.getCookie = r, e.setCookie = a;
  var h = ["tracknick", "thw", "cna"];
  e.getData = s, e.getHng = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = encodeURIComponent(r("hng") || "");
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    i: i,
    u: u,
    c: c,
    l: l,
    f: f,
    h: h
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.getDomains = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = [];

    try {
      for (var e = location.hostname, n = e.split("."), r = 2; r <= n.length;) t.push(n.slice(n.length - r).join(".")), r++;
    } catch (t) {}

    _minerva_ret = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.pushIntoGoldlogQueue = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = window;
    (n.goldlog_queue || (n.goldlog_queue = [])).push({
      action: t,
      arguments: e
    });
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var r = window,
      o = "ws.mmstat.com",
      a = n(22),
      s = n(23),
      i = n(20);
  t.exports = s.extend({
    status: "inactive",
    websocket: {},
    wsindexPre: "wss",
    wsindex: 0,
    msg_queue: [],
    setWsHandler: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = this.websocket[this.wsindexPre + ++this.wsindex] = new r.WebSocket(t);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getWsHandler: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = this.websocket[this.wsindexPre + this.wsindex];
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getMsgQueue: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = this.msg_queue;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    clearMsgQueue: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.msg_queue = [];
      minerva_hook.afterFunction("null", this, {});
    },
    setMsgQueue: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      this.msg_queue = t;
      minerva_hook.afterFunction("null", this, {});
    },
    proessMsgQueue: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e,
          n = this,
          r = 0;
      if (t && t.length > 0) for (e = t.length; r < e;) n.send(t.shift()), r++;else for (e = n.msg_queue.length; r < e;) n.send(n.msg_queue.shift()), r++;
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        r: r
      });
    },
    initWebSocket: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = this,
          n = "https:" === location.protocol ? "wss://" : "ws://",
          r = n + t + "/ws",
          o = "initWebSocket";

      try {
        e.cna && (r += "/" + e.cna), e.params && e.params.length > 0 && (r += "?" + e.params.join("&"));
        var s = e.setWsHandler(r);
        s.onopen = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          e.status = "active";
          var t = e.getMsgQueue();
          t.length > 0 && e.proessMsgQueue(t), e.publish("APLUS_WS_OPEN");
          minerva_hook.afterFunction("null", this, {
            t: t
          });
        }, s.onerror = function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          e.status = "inactive";
          var n = t ? t.target : {},
              r = t ? t.timeStamp : "";
          a.catchException(o + "_onerror", {
            message: "targetUrl=" + n.url + "&readyState=" + n.readyState + "&timeStamp=" + r
          }), e.publish("APLUS_WS_ERROR");
          minerva_hook.afterFunction("null", this, {
            n: n,
            r: r
          });
        }, s.onclose = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          e.status = "inactive", e.publish("APLUS_WS_CLOSE");
          minerva_hook.afterFunction("null", this, {});
        }, s.onmessage = function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          e.publish("APLUS_WS_SERVER_MSG", t.data);
          minerva_hook.afterFunction("null", this, {});
        };
      } catch (t) {
        a.catchException(o + "_exception", t), e.publish("APLUS_WS_EXCEPTION");
      }

      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        r: r,
        o: o
      });
    },
    readyInitWebSocket: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this;
      i.pushIntoGoldlogQueue("goldlog.aplus_pubsub.subscribe", ["aplusInitContext", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = t.getWsHandler();
        (!e || e && e.readyState > 1) && t.initWebSocket(o);
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      }]);
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    start: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this.getWsHandler();
      (!t || t && t.readyState > 1) && (this.status = "active", this.readyInitWebSocket());
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    stop: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this.getWsHandler();
      t && t.readyState <= 1 && (this.status = "inactive", t.close());
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    sendMsg: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = this.getWsHandler();
      _minerva_ret = !(!e || 1 !== e.readyState) && (e.send(t), !0);
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    processSysEvent: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      "active" === t.msg ? this.start() : "inactive" === t.msg && this.stop();
      minerva_hook.afterFunction("null", this, {});
    },
    processLogEvent: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      if ("active" === this.status) {
        var e = this.sendMsg(t.msg.postData);
        e || (this.msg_queue.push(t), this.publish("APLUS_WS_MSG_QUEUE_CHANGE", t));
      } else this.msg_queue.push(t), this.publish("APLUS_WS_MSG_QUEUE_CHANGE", t);

      minerva_hook.afterFunction("null", this, {});
    },
    send: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = this.getWsHandler();

      switch ((!e || e.readyState > 1) && this.start(), t.type) {
        case "sys":
          this.processSysEvent(t);
          break;

        case "pv":
        case "goldlog":
          this.processLogEvent(t);
      }

      minerva_hook.afterFunction("null", this, {
        e: e
      });
    },
    startWS: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this;
      t.start();
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    }
  });
  minerva_hook.afterFunction("null", this, {
    r: r,
    o: o,
    a: a,
    s: s,
    i: i
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var r = n(20);

  e.catchException = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = t;
    "object" == typeof e && e.message && (n = n + "_" + e.message), r.pushIntoGoldlogQueue("goldlog._aplus_cplugin_m.do_tracker_jserror", [{
      message: n,
      error: JSON.stringify(e),
      filename: t
    }]);
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  };

  minerva_hook.afterFunction("null", this, {
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    _minerva_ret = t;
    minerva_hook.afterFunction("r", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var o = n(2),
      a = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e = t.length, n = new Array(e - 1), r = 1; r < e; r++) n[r - 1] = t[r];

    _minerva_ret = n;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      s = o.extend({
    create: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = new this();

      for (var n in t) e[n] = t[n];

      _minerva_ret = (e.handlers = [], e.pubs = {}, e);
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    setHandlers: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      this.handlers = t;
      minerva_hook.afterFunction("null", this, {});
    },
    subscribe: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      r(e);
      var n = this,
          o = n.pubs || {},
          a = o[t] || [];
      if (a) for (var s = 0; s < a.length; s++) {
        var i = a[s]();
        e.apply(n, i);
      }
      var u = n.handlers || [];
      _minerva_ret = (t in u || (u[t] = []), u[t].push(e), n.setHandlers(u), n);
      minerva_hook.afterFunction("null", this, {
        n: n,
        o: o,
        a: a,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    subscribeOnce: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      r(e);
      var n,
          o = this;
      _minerva_ret = (this.subscribe.call(this, t, n = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        o.unsubscribe.call(o, t, n);
        var r = Array.prototype.slice.call(arguments);
        e.apply(o, r);
        minerva_hook.afterFunction("null", this, {
          r: r
        });
      }), this);
      minerva_hook.afterFunction("null", this, {
        n: n,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    unsubscribe: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      r(e);
      var n = this.handlers[t];
      if (!n) return this;

      if ("object" == typeof n && n.length > 0) {
        for (var o = 0; o < n.length; o++) {
          var a = e.toString(),
              s = n[o].toString();
          a === s && n.splice(o, 1);
        }

        this.handlers[t] = n;
      } else delete this.handlers[t];

      _minerva_ret = this;
      minerva_hook.afterFunction("null", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    publish: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = a(arguments),
          n = this.handlers || [],
          r = n[t] ? n[t].length : 0;
      if (r > 0) for (var o = 0; o < r; o++) {
        var s = n[t][o];
        s && "function" == typeof s && s.apply(this, e);
      }
      _minerva_ret = this;
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    cachePubs: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = this.pubs || {},
          n = a(arguments);
      e[t] || (e[t] = []), e[t].push(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      });
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n
      });
    }
  });

  t.exports = s;
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    s: s
  });
}]);
/*! 2021-11-18 16:44:59 v8.15.19 */

!function (t) {
  minerva_hook.beforeFunction("null", this, arguments);

  function e(o) {
    minerva_hook.beforeFunction("e", this, arguments);
    if (n[o]) return n[o].exports;
    var a = n[o] = {
      exports: {},
      id: o,
      loaded: !1
    };
    _minerva_ret = (t[o].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports);
    minerva_hook.afterFunction("e", this, {
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var n = {};
  _minerva_ret = (e.m = t, e.c = n, e.p = "", e(0));
  minerva_hook.afterFunction("null", this, {
    n: n,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}([function (t, e, n) {
  minerva_hook.beforeFunction("null", this, arguments);
  t.exports = n(1);
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  !function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = window;
    n(2)();
    var e = n(3),
        o = n(4);
    "ontouchend" in document.createElement("div") && (t.goldlog_queue || (t.goldlog_queue = [])).push({
      action: "goldlog.setMetaInfo",
      arguments: ["aplus-touch", "tap"]
    });

    var a = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      n(96);
      var e = n(98),
          o = n(37);

      if (o.doPubMsg(["goldlogReady", "running"]), document.getElementsByTagName("body").length) {
        var r = "g_tb_aplus_loaded";
        if (t[r]) return;
        t[r] = 1, n(112).initGoldlog(e);
      } else setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        a();
        minerva_hook.afterFunction("null", this, {});
      }, 50);

      minerva_hook.afterFunction("null", this, {
        e: e,
        o: o
      });
    },
        r = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        e.do_tracker_jserror({
          ratio: 1,
          message: t && t.message,
          error: encodeURIComponent(t && t.stack ? t.stack : ""),
          filename: "aplusLoad"
        });
      } catch (t) {}

      minerva_hook.afterFunction("null", this, {});
    };

    try {
      a();
    } catch (t) {
      r(t, o.script_name + "@" + o.lver);
    }

    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      o: o,
      a: a,
      r: r
    });
  }();
  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  minerva_hook.beforeFunction("null", this, arguments);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = window.goldlog_queue || (window.goldlog_queue = []);

    try {
      var e = navigator.userAgent,
          n = /Trident/.test(e);
      n || t.push({
        action: "goldlog.setMetaInfo",
        arguments: ["aplus-p-url-init", window.location.href.substring(0, 850)]
      });
    } catch (t) {}

    minerva_hook.afterFunction("null", this, {
      t: t
    });
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var n = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = window.goldlog_queue || (window.goldlog_queue = []);
    n.push({
      action: "goldlog._aplus_cplugin_track_deb.monitor",
      arguments: [{
        key: "APLUS_PLUGIN_DEBUG",
        title: "aplus_core",
        msg: ["_error_:methodName=" + e + ",params=" + JSON.stringify(t)],
        type: "updateMsg",
        description: e || "aplus_core"
      }]
    });
    minerva_hook.afterFunction("null", this, {
      n: n
    });
  },
      o = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    var o = window.goldlog_queue || (window.goldlog_queue = []);
    o.push({
      action: ["goldlog", "_aplus_cplugin_m", e].join("."),
      arguments: [t, n]
    });
    minerva_hook.afterFunction("null", this, {
      o: o
    });
  };

  e.do_tracker_jserror = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = "do_tracker_jserror";
    o(t, a, e), n(t, a);
    minerva_hook.afterFunction("null", this, {
      a: a
    });
  }, e.do_tracker_obsolete_inter = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = "do_tracker_obsolete_inter";
    o(t, a, e), n(t, a);
    minerva_hook.afterFunction("null", this, {
      a: a
    });
  }, e.wrap = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    if ("function" == typeof t) try {
      t();
    } catch (t) {
      n({
        msg: t.message || t
      }, "exception");
    } finally {}
    minerva_hook.afterFunction("null", this, {});
  };
  minerva_hook.afterFunction("null", this, {
    n: n,
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(5),
      a = n(6),
      r = n(7);
  e.APLUS_ENV = "production", e.lver = a.lver, e.toUtVersion = a.toUtVersion, e.script_name = a.script_name, e.recordTypes = o.recordTypes, e.KEY = o.KEY, e.context = r.context, e.context_prepv = r.context_prepv, e.aplus_init = n(16).plugins_init, e.plugins_pv = n(35).plugins_pv, e.plugins_prepv = n(65).plugins_prepv, e.context_hjlj = n(66), e.plugins_hjlj = n(68).plugins_hjlj, e.beforeUnload = n(78), e.initLoad = n(82), e.spmException = n(86), e.goldlog_path = n(87), e.is_auto_pv = "true", e.utilPvid = n(91), e.disablePvid = "false", e.mustSpmE = !0, e.LS_CNA_KEY = "APLUS_CNA";
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  e.recordTypes = {
    hjlj: "COMMON_HJLJ",
    uhjlj: "DATACLICK_HJLJ",
    pv: "PV",
    prepv: "PREPV"
  }, e.KEY = {
    NAME_STORAGE: {
      REFERRER: "wm_referrer",
      REFERRER_PV_ID: "refer_pv_id",
      LOST_PV_PAGE_DURATION: "lost_pv_page_duration",
      LOST_PV_PAGE_SPMAB: "lost_pv_page_spmab",
      LOST_PV_PAGE: "lost_pv_page",
      LOST_PV_PAGE_MSG: "lost_pv_page_msg"
    }
  };
  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  e.lver = "8.15.19", e.toUtVersion = "v20211118", e.script_name = "aplus_std";
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  e.context = n(8), e.context_prepv = n(15);
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    _minerva_ret = {
      compose: {
        maxTimeout: 5500
      },
      etag: {
        egUrl: "log.mmstat.com/eg.js",
        cna: i.getCookie("cna")
      }
    };
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a() {
    minerva_hook.beforeFunction("a", this, arguments);
    _minerva_ret = r.assign(new s.initConfig(), new o());
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var r = n(9),
      i = n(11),
      s = n(14);
  t.exports = a;
  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    s: s
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t, e) {
    minerva_hook.beforeFunction("o", this, arguments);
    _minerva_ret = "function" != typeof Object.assign ? function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (null === t) throw new TypeError("Cannot convert undefined or null to object");

      for (var e = Object(t), n = 1; n < arguments.length; n++) {
        var o = arguments[n];
        if (null !== o) for (var a in o) Object.prototype.hasOwnProperty.call(o, a) && (e[a] = o[a]);
      }

      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }(t, e) : Object.assign({}, t, e);
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    _minerva_ret = "function" == typeof t;
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    _minerva_ret = Array.isArray ? Array.isArray(t) : /Array/.test(Object.prototype.toString.call(t));
    minerva_hook.afterFunction("r", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i(t) {
    minerva_hook.beforeFunction("i", this, arguments);
    _minerva_ret = "string" == typeof t;
    minerva_hook.afterFunction("i", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function s(t) {
    minerva_hook.beforeFunction("s", this, arguments);
    _minerva_ret = "number" == typeof t;
    minerva_hook.afterFunction("s", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function u(t) {
    minerva_hook.beforeFunction("u", this, arguments);
    _minerva_ret = "undefined" == typeof t;
    minerva_hook.afterFunction("u", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function c(t) {
    minerva_hook.beforeFunction("c", this, arguments);
    _minerva_ret = "[object Object]" === Object.prototype.toString.call(t);
    minerva_hook.afterFunction("c", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function l(t) {
    minerva_hook.beforeFunction("l", this, arguments);
    if ("number" == typeof t) return !1;
    if (u(t) || null === t) return !0;
    if (i(t)) return !t;
    if (r(t)) return !t.length;

    if (c(t)) {
      for (var e in t) if (hasOwnProperty.call(t, e)) return !1;

      return !0;
    }

    _minerva_ret = !1;
    minerva_hook.afterFunction("l", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function p(t) {
    minerva_hook.beforeFunction("p", this, arguments);
    if ("string" == typeof t) try {
      var e = JSON.parse(t);
      return !("object" != typeof e || !e);
    } catch (t) {
      return !1;
    }
    _minerva_ret = !1;
    minerva_hook.afterFunction("p", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function g(t, e) {
    minerva_hook.beforeFunction("g", this, arguments);
    _minerva_ret = t.indexOf(e) > -1;
    minerva_hook.afterFunction("g", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var f = window;
  e.assign = o, e.makeCacheNum = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = Math.floor(268435456 * Math.random()).toString(16);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.each = n(10), e.isStartWith = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = 0 === t.indexOf(e);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.isEndWith = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = t.length,
        o = e.length;
    _minerva_ret = n >= o && t.indexOf(e) == n - o;
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.any = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n,
        o = t.length;

    for (n = 0; n < o; n++) if (e(t[n])) return !0;

    _minerva_ret = !1;
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.isFunction = a, e.isArray = r, e.isString = i, e.isNumber = s, e.isUnDefined = u, e.isObject = c, e.isEmpty = l, e.isJSON = p, e.isContain = g;

  var d = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e,
        n = t.constructor === Array ? [] : {};

    if ("object" == typeof t) {
      if (f.JSON && f.JSON.parse) e = JSON.stringify(t), n = JSON.parse(e);else for (var o in t) n[o] = "object" == typeof t[o] ? d(t[o]) : t[o];
      return n;
    }

    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n
    });
  };

  e.cloneObj = d, e.cloneDeep = d;
  minerva_hook.afterFunction("null", this, {
    f: f,
    d: d
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  t.exports = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n,
        o = t.length;

    for (n = 0; n < o; n++) {
      var a = e(t[n], n);
      if ("break" === a) break;
    }

    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o
    });
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    var e = s.cookie.match(new RegExp("(?:^|;)\\s*" + t + "=([^;]+)"));
    _minerva_ret = e ? e[1] : "";
    minerva_hook.afterFunction("o", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t, e, n) {
    minerva_hook.beforeFunction("a", this, arguments);
    n || (n = {});
    var a = new Date();
    if ("session" === n.expires) ;else if (n.expires && ("number" == typeof n.expires || n.expires.toUTCString)) "number" == typeof n.expires ? a.setTime(a.getTime() + 24 * n.expires * 60 * 60 * 1e3) : a = n.expires, e += "; expires=" + a.toUTCString();else {
      var r = 20;
      c.indexof(["v.youku.com", "www.youku.com", "player.youku.com"], location.hostname) > -1 && (r = 1), a.setTime(a.getTime() + 365 * r * 24 * 60 * 60 * 1e3), e += "; expires=" + a.toUTCString();
    }
    e += "; path=" + (n.path ? n.path : "/"), e += "; domain=" + n.domain, s.cookie = t + "=" + e;
    var i = 0;

    try {
      var u = navigator.userAgent.match(/Chrome\/\d/);
      u && u[0] && (i = u[0].split("/")[1], i && (i = parseInt(i)));
    } catch (t) {}

    _minerva_ret = (n.SameSite && i >= 8 && (e += "; SameSite=" + n.SameSite, e += "; Secure", s.cookie = t + "=" + e), o(t));
    minerva_hook.afterFunction("a", this, {
      a: a,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t, e, n) {
    minerva_hook.beforeFunction("r", this, arguments);

    try {
      if (n || (n = {}), n.domain) a(t, e, n);else for (var o = l.getDomains(), r = 0; r < o.length;) n.domain = o[r], a(t, e, n) ? r = o.length : r++;
    } catch (t) {}

    minerva_hook.afterFunction("r", this, {});
  }

  function i() {
    minerva_hook.beforeFunction("i", this, arguments);
    var t = {};
    _minerva_ret = (u.each(g, function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      t[e] = o(e);
      minerva_hook.afterFunction("null", this, {});
    }), t.cnaui = /\btanx\.com$/.test(p) ? o("cnaui") : "", t);
    minerva_hook.afterFunction("i", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var s = document,
      u = n(9),
      c = n(12),
      l = n(13),
      p = location.hostname;
  e.getCookie = o, e.setCookie = r;
  var g = ["tracknick", "thw", "cna"];
  e.getData = i, e.getHng = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = encodeURIComponent(o("hng") || "");
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.indexof = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = -1;

    try {
      n = t.indexOf(e);
    } catch (a) {
      for (var o = 0; o < t.length; o++) t[o] === e && (n = o);
    } finally {
      return n;
    }

    minerva_hook.afterFunction("null", this, {
      n: n
    });
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.getDomains = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = [];

    try {
      for (var e = location.hostname, n = e.split("."), o = 2; o <= n.length;) t.push(n.slice(n.length - o).join(".")), o++;
    } catch (t) {}

    _minerva_ret = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t, e, n) {
    minerva_hook.beforeFunction("o", this, arguments);
    var o = window.goldlog || {},
        s = o.getMetaInfo("aplus-ifr-pv") + "" == "1";
    _minerva_ret = e ? r(t) ? "yt" : "m" : n && !s ? a.isContain(t, "wrating.com") ? "k" : i(t) || "y" : i(t) || "v";
    minerva_hook.afterFunction("o", this, {
      o: o,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var a = n(9),
      r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e = ["youku.com", "soku.com", "tudou.com", "laifeng.com"], n = 0; n < e.length; n++) {
      var o = e[n];
      if (a.isContain(t, o)) return !0;
    }

    _minerva_ret = !1;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      i = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e = [["scmp.com", "sc"], ["luxehomes.com.hk", "sc"], ["ays.com.hk", "sc"], ["cpjobs.com", "sc"], ["educationpost.com.hk", "sc"], ["cosmopolitan.com.hk", "sc"], ["elle.com.hk", "sc"], ["harpersbazaar.com.hk", "sc"], ["1688.com", "6"], ["youku.com", "yt"], ["soku.com", "yt"], ["tudou.com", "yt"], ["laifeng.com", "yt"]], n = 0; n < e.length; n++) {
      var o = e[n];
      if (a.isContain(t, o[0])) return o[1];
    }

    _minerva_ret = "";
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.getBeaconSrc = o, e.initConfig = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      compose: {},
      etag: {
        egUrl: "log.mmstat.com/eg.js",
        cna: "",
        tag: "",
        stag: "",
        lstag: "-1",
        lscnastatus: ""
      },
      can_to_sendpv: {
        flag: "NO"
      },
      userdata: {},
      what_to_sendpv: {
        pvdata: {},
        exparams: {}
      },
      what_to_pvhash: {
        hash: []
      },
      what_to_sendpv_ut: {
        pvdataToUt: {}
      },
      what_to_sendpv_ut2: {
        isSuccess: !1,
        pvdataToUt: {}
      },
      when_to_sendpv: {
        aplusWaiting: ""
      },
      where_to_sendpv: {
        url: "//log.mmstat.com/o.gif",
        urlRule: o
      },
      where_to_sendlog_ut: {
        aplusToUT: {},
        toUTName: "toUT"
      },
      hjlj: {
        what_to_hjlj: {
          logdata: {}
        },
        what_to_hjlj_ut: {
          logdataToUT: {}
        }
      },
      network: {
        connType: "UNKNOWN"
      },
      is_single: !1
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r,
    i: i
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    _minerva_ret = {
      etag: {
        egUrl: "log.mmstat.com/eg.js",
        cna: a.getCookie("cna"),
        tag: "",
        stag: ""
      },
      compose: {},
      where_to_prepv: {
        url: "//log.mmstat.com/v.gif",
        urlRule: r.getBeaconSrc
      },
      userdata: {},
      what_to_prepv: {
        logdata: {}
      },
      what_to_hjlj_exinfo: {
        EXPARAMS_FLAG: "EXPARAMS",
        exinfo: [],
        exparams_key_names: ["uidaplus", "pc_i", "pu_i"]
      },
      is_single: !1
    };
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var a = n(11),
      r = n(14);
  t.exports = o;
  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  e.plugins_init = [{
    name: "where_to_sendpv",
    enable: !0,
    path: n(17)
  }, {
    name: "etag",
    enable: !0,
    path: n(31)
  }, {
    name: "etag_sync",
    enable: !0,
    path: n(34)
  }];
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(18),
      a = n(25),
      r = n(26);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getMetaInfo: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = a.getGoldlogVal("_$") || {},
            e = t.meta_info || r.getInfo();
        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getAplusMetaByKey: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this.getMetaInfo() || {};
        _minerva_ret = e[t];
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getGifPath: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r = a.getGoldlogVal("_$") || {};
        if ("function" == typeof t) n = t(location.hostname, r.is_terminal, o.is_in_iframe) + ".gif";else if (!n && e) {
          var i = e.match(/\/\w+\.gif/);
          i && i.length > 0 && (n = i[0]);
        }
        _minerva_ret = (n || (n = r.is_terminal ? "m.gif" : "v.gif"), n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = !!this.options.context.is_single;

        if (!t) {
          var e = this.getAplusMetaByKey("aplus-rhost-v"),
              n = this.options.context.where_to_sendpv || {},
              a = n.url || "",
              r = this.getGifPath(n.urlRule, a),
              i = o.getPvUrl({
            metaName: "aplus-rhost-v",
            metaValue: e,
            gifPath: r,
            url: o.filterIntUrl(a)
          });
          n.url = i, this.options.context.where_to_sendpv = n;
        }

        minerva_hook.afterFunction("null", this, {
          t: t
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    t = (t || "").split("#")[0].split("?")[0];

    var e = t.length,
        n = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e,
          n = t.length,
          o = 0;

      for (e = 0; e < n; e++) o = 31 * o + t.charCodeAt(e);

      _minerva_ret = o;
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    _minerva_ret = e ? n(e + "#" + t.charCodeAt(e - 1)) : -1;
    minerva_hook.afterFunction("o", this, {
      t: t,
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);

    for (var e = t.split("&"), n = 0, o = e.length, a = {}; n < o; n++) {
      var r = e[n],
          i = r.indexOf("="),
          s = r.substring(0, i),
          u = r.substring(i + 1);
      a[s] = p.tryToDecodeURIComponent(u);
    }

    _minerva_ret = a;
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    _minerva_ret = t;
    minerva_hook.afterFunction("r", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i(t) {
    minerva_hook.beforeFunction("i", this, arguments);
    var e,
        n,
        o,
        a = [],
        r = t.length;

    for (o = 0; o < r; o++) e = t[o][0], n = t[o][1], a.push(l.isStartWith(e, v) ? n : e + "=" + encodeURIComponent(n));

    _minerva_ret = a.join("&");
    minerva_hook.afterFunction("i", this, {
      e: e,
      n: n,
      o: o,
      a: a,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function s(t) {
    minerva_hook.beforeFunction("s", this, arguments);
    var e,
        n,
        o,
        a = {},
        r = t.length;

    for (o = 0; o < r; o++) e = t[o][0], n = t[o][1], a[e] = n;

    _minerva_ret = a;
    minerva_hook.afterFunction("s", this, {
      e: e,
      n: n,
      o: o,
      a: a,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function u(t, e) {
    minerva_hook.beforeFunction("u", this, arguments);
    var n,
        o,
        a,
        r = [];

    for (n in t) t.hasOwnProperty(n) && (o = "" + t[n], a = n + "=" + encodeURIComponent(o), e ? r.push(a) : r.push(l.isStartWith(n, v) ? o : a));

    _minerva_ret = r.join("&");
    minerva_hook.afterFunction("u", this, {
      n: n,
      o: o,
      a: a,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function c(t, e) {
    minerva_hook.beforeFunction("c", this, arguments);
    var n = t.indexOf("?") == -1 ? "?" : "&",
        o = e ? l.isArray(e) ? i(e) : u(e) : "";
    _minerva_ret = o ? t + n + o : t;
    minerva_hook.afterFunction("c", this, {
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var l = n(9),
      p = n(19),
      g = n(22),
      f = parent !== self;
  e.is_in_iframe = f, e.makeCacheNum = l.makeCacheNum, e.isStartWith = l.isStartWith, e.isEndWith = l.isEndWith, e.any = l.any, e.each = l.each, e.assign = l.assign, e.isFunction = l.isFunction, e.isArray = l.isArray, e.isString = l.isString, e.isNumber = l.isNumber, e.isUnDefined = l.isUnDefined, e.isContain = l.isContain, e.sleep = n(23).sleep, e.makeChkSum = o, e.tryToDecodeURIComponent = p.tryToDecodeURIComponent, e.nodeListToArray = p.nodeListToArray, e.parseSemicolonContent = p.parseSemicolonContent, e.param2obj = a;

  var d = n(24),
      _ = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = /^(\/\/){0,1}(\w+\.){1,}\w+((\/\w+){1,})?$/.test(t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.hostValidity = _;

  var h = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);

    var n = /^(\/\/){0,1}(\w+\.){1,}\w+\/\w+\.gif$/.test(t),
        o = _(t),
        a = "";

    _minerva_ret = (n ? a = "isGifPath" : o && (a = "isHostPath"), a || d.logger({
      msg: e + ": " + t + ' is invalid, suggestion: "xxx.mmstat.com"'
    }), a);
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      m = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = (!/^\/\/gj\.mmstat/.test(t) && goldlog.isInternational() && (t = t.replace(/^\/\/\w+\.mmstat/, "//gj.mmstat")), t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.filterIntUrl = m, e.getPvUrl = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t || (t = {});
    var e,
        n,
        o = t.metaValue && h(t.metaValue, t.metaName),
        a = "";
    "isGifPath" === o ? (e = /^\/\//.test(t.metaValue) ? "" : "//", a = e + t.metaValue) : "isHostPath" === o && (e = /^\/\//.test(t.metaValue) ? "" : "//", n = /\/$/.test(t.metaValue) ? "" : "/", a = e + t.metaValue + n + t.gifPath);
    var r;
    _minerva_ret = (a ? r = a : (e = 0 === t.gifPath.indexOf("/") ? t.gifPath : "/" + t.gifPath, r = t.url && t.url.replace(/\/\w+\.gif/, e)), r);
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      o: o,
      a: a,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.indexof = n(12).indexof, e.callable = r;
  var v = "::-plain-::";
  e.mkPlainKey = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = v + Math.random();
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.s_plain_obj = v, e.mkPlainKeyForExparams = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = t || v;
    _minerva_ret = e + "exparams";
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.rndInt32 = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = Math.round(2147483647 * Math.random());
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.arr2param = i, e.arr2obj = s, e.obj2param = u, e.makeUrl = c, e.ifAdd = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n,
        o,
        a,
        r,
        i = e.length;

    for (n = 0; n < i; n++) o = e[n], a = o[0], r = o[1], r && t.push([a, r]);

    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      a: a,
      r: r,
      i: i
    });
  }, e.isStartWithProtocol = g.isStartWithProtocol, e.param2arr = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e, n = t.split("&"), o = 0, a = n.length, r = []; o < a; o++) e = n[o].split("="), r.push([e.shift(), e.join("=")]);

    _minerva_ret = r;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.catchException = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    var o = window,
        a = o.goldlog_queue || (o.goldlog_queue = []),
        r = t;
    "object" == typeof e && e.message && (r = r + "_" + e.message), n && n.msg && (r += "_" + n.msg), a.push({
      action: "goldlog._aplus_cplugin_m.do_tracker_jserror",
      arguments: [{
        message: r,
        error: JSON.stringify(e),
        filename: t
      }]
    });
    minerva_hook.afterFunction("null", this, {
      o: o,
      a: a,
      r: r
    });
  };
  minerva_hook.afterFunction("null", this, {
    l: l,
    p: p,
    g: g,
    f: f,
    d: d,
    _: _,
    h: h,
    m: m,
    v: v
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(20),
      a = n(21);
  t.exports = {
    tryToDecodeURIComponent: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = e || "";
      if (t) try {
        n = decodeURIComponent(t);
      } catch (t) {}
      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    parseSemicolonContent: function (t, e, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e = e || {};
      var a,
          r,
          i = t.split(";"),
          s = i.length;

      for (a = 0; a < s; a++) {
        r = i[a].split("=");
        var u = o.trim(r.slice(1).join("="));
        e[o.trim(r[0]) || ""] = n ? u : this.tryToDecodeURIComponent(u);
      }

      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        e: e,
        a: a,
        r: r,
        i: i,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    nodeListToArray: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e, n;

      try {
        return e = [].slice.call(t);
      } catch (a) {
        e = [], n = t.length;

        for (var o = 0; o < n; o++) e.push(t[o]);

        return e;
      }

      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n
      });
    },
    getLsCna: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);

      if (a.set && a.test()) {
        var n = "",
            o = a.get(t);

        if (o) {
          var r = o.split("_") || [];
          n = e ? r.length > 1 && e === r[0] ? r[1] : "" : r.length > 1 ? r[1] : "";
        }

        return decodeURIComponent(n);
      }

      _minerva_ret = "";
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    setLsCna: function (t, e, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      n && a.set && a.test() && a.set(t, e + "_" + encodeURIComponent(n));
      minerva_hook.afterFunction("null", this, {});
    },
    getUrl: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = t || "//log.mmstat.com/eg.js";

      try {
        var n = goldlog.getMetaInfo("aplus-rhost-v"),
            o = /[[a-z|0-9\.]+[a-z|0-9]/,
            a = n.match(o);
        a && a[0] && (e = e.replace(o, a[0]));
      } catch (t) {}

      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }
  };
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t) {
    minerva_hook.beforeFunction("n", this, arguments);
    _minerva_ret = "string" == typeof t ? t.replace(/^\s+|\s+$/g, "") : "";
    minerva_hook.afterFunction("n", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  e.trim = n;
  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  t.exports = {
    set: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        return localStorage.setItem(t, e), !0;
      } catch (t) {
        return !1;
      }

      minerva_hook.afterFunction("null", this, {});
    },
    get: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        return localStorage.getItem(t);
      } catch (t) {
        return "";
      }

      minerva_hook.afterFunction("null", this, {});
    },
    test: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = "grey_test_key";

      try {
        return localStorage.setItem(t, 1), localStorage.removeItem(t), !0;
      } catch (t) {
        return !1;
      }

      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    remove: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      localStorage.removeItem(t);
      minerva_hook.afterFunction("null", this, {});
    }
  };
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var o = n(9),
      a = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    if (goldlog.aplusDebug) {
      var t = location.protocol;
      return "http:" !== t && "https:" !== t && (t = "https:"), t;
    }

    _minerva_ret = "https:";
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.getProtocal = a, e.isStartWithProtocol = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e = ["javascript:", "tel:", "sms:", "mailto:", "tmall://", "#"], n = 0, a = e.length; n < a; n++) if (o.isStartWith(t, e[n])) return !0;

    _minerva_ret = !1;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.sleep = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = setTimeout(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      e();
      minerva_hook.afterFunction("null", this, {});
    }, t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var n = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = !1;
    _minerva_ret = ("boolean" == typeof goldlog.aplusDebug && (t = goldlog.aplusDebug), t);
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.isDebugAplus = n;

  var o = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t || (t = {});
    var e = t.level || "warn";
    window.console && window.console[e] && window.console[e](t.msg);
    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };

  e.logger = o;
  minerva_hook.afterFunction("null", this, {
    n: n,
    o: o
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var n = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e;

    try {
      window.goldlog || (window.goldlog = {}), e = window.goldlog[t];
    } catch (t) {
      e = "";
    } finally {
      return e;
    }

    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };

  e.getGoldlogVal = n;

  var o = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = !1;

    try {
      window.goldlog || (window.goldlog = {}), t && (window.goldlog[t] = e, n = !0);
    } catch (t) {
      n = !1;
    } finally {
      return n;
    }

    minerva_hook.afterFunction("null", this, {
      n: n
    });
  };

  e.setGoldlogVal = o, e.getClientInfo = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = n("_aplus_client") || {};
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    n: n,
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    var e,
        n,
        o,
        a = t.length,
        r = {};

    for (h._microscope_data = r, e = 0; e < a; e++) n = t[e], "microscope-data" === f.tryToGetAttribute(n, "name") && (o = f.tryToGetAttribute(n, "content"), l.parseSemicolonContent(o, r), h.is_head_has_meta_microscope_data = !0);

    h._microscope_data_params = l.obj2param(r), h.ms_data_page_id = r.pageId, h.ms_data_shop_id = r.shopId, h.ms_data_instance_id = r.siteInstanceId, h.ms_data_siteCategoryId = r.siteCategory, h.ms_prototype_id = r.prototypeId, h.site_instance_id_or_shop_id = h.ms_data_instance_id || h.ms_data_shop_id, h._atp_beacon_data = {}, h._atp_beacon_data_params = "";
    minerva_hook.afterFunction("o", this, {
      e: e,
      n: n,
      o: o,
      a: a,
      r: r
    });
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);

    var e,
        n = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e;
      _minerva_ret = (document.querySelector && (e = document.querySelector("meta[name=data-spm]")), g.each(t, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        "data-spm" === f.tryToGetAttribute(t, "name") && (e = t);
        minerva_hook.afterFunction("null", this, {});
      }), e);
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        o = n();

    _minerva_ret = (o && (e = f.tryToGetAttribute(o, "data-spm-protocol")), e);
    minerva_hook.afterFunction("a", this, {
      e: e,
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    var e = t.isonepage || "-1",
        n = e.split("|"),
        o = n[0],
        a = n[1] ? n[1] : "";
    t.isonepage_data = {
      isonepage: o,
      urlpagename: a
    }, t["aplus-pagename"] = a;
    minerva_hook.afterFunction("r", this, {
      e: e,
      n: n,
      o: o,
      a: a
    });
  }

  function i() {
    minerva_hook.beforeFunction("i", this, arguments);
    var t = d.getMetaTags();
    o(t), g.each(t, function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = f.tryToGetAttribute(t, "name");
      if (/^aplus/.test(e) && (h[e] = d.getMetaCnt(e), e === v)) try {
        c = h[e] = JSON.parse(d.getMetaCnt(e));
      } catch (t) {}
      minerva_hook.afterFunction("null", this, {
        e: e
      });
    }), g.each(m, function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      h[t] = d.getMetaCnt(t);
      minerva_hook.afterFunction("null", this, {});
    }), h.spm_protocol = a(t), c && (h = g.assign(h, c));
    var e,
        n,
        i = ["aplus-rate-ahot"],
        s = i.length;

    for (e = 0; e < s; e++) n = i[e], h[n] = parseFloat(h[n]);

    _minerva_ret = (r(h), b = h || {}, h);
    minerva_hook.afterFunction("i", this, {
      t: t,
      e: e,
      n: n,
      i: i,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function s() {
    minerva_hook.beforeFunction("s", this, arguments);
    _minerva_ret = b || i();
    minerva_hook.afterFunction("s", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function u(t) {
    minerva_hook.beforeFunction("u", this, arguments);
    p.logger({
      msg: "please do not repeat setPriorityMetaInfo " + t
    });
    minerva_hook.afterFunction("u", this, {});
  }

  var c,
      l = n(18),
      p = n(24),
      g = n(9),
      f = n(27),
      d = n(28),
      _ = n(29),
      h = {},
      m = ["ahot-aplus", "isonepage", "spm-id", "data-spm", "microscope-data"],
      v = "aplus-x-settings",
      b = {};

  e.setMetaInfo = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (b || (b = {}), "object" == typeof c && c[t]) return u(t), !0;

    if (t === v) {
      if (c) u(t);else try {
        c = "object" == typeof e ? e : JSON.parse(e), b = g.assign(b, c);
      } catch (t) {
        console && console.log(t);
      }
      return !0;
    }

    _minerva_ret = (b[t] = e, !0);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  var y = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = (b || (b = {}), b[t] || "");
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.getMetaInfo = y, e.getInfo = i, e.qGet = s, e.appendMetaInfo = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);

    var n = function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      goldlog.setMetaInfo(t, e, {
        from: "appendMetaInfo"
      });
      minerva_hook.afterFunction("null", this, {});
    };

    if (t && e) {
      var o,
          a = function (o) {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          var a = "string" == typeof e ? JSON.parse(e) : e;
          n(t, g.assign(o, a));
        } catch (t) {}

        minerva_hook.afterFunction("null", this, {});
      },
          r = function (o) {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          var a = "string" == typeof e ? JSON.parse(e) : e;
          n(t, o.concat(a));
        } catch (t) {}

        minerva_hook.afterFunction("null", this, {});
      },
          i = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "EXPARAMS" === t ? _.getExparamsInfos("", t) : t ? t.split("&") : [];
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
          s = function (o) {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          var a = i(o),
              r = i(e);
          n(t, a.concat(r).join("&"));
        } catch (t) {}

        minerva_hook.afterFunction("null", this, {});
      },
          u = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t.constructor === Array ? r(t) : a(t);
        minerva_hook.afterFunction("null", this, {});
      },
          c = goldlog.getMetaInfo(t);

      if ("aplus-exinfo" === t && (s(c), o = !0), c) if ("object" == typeof c) u(c), o = !0;else try {
        var l = JSON.parse(c);
        "object" == typeof l && (u(l), o = !0);
      } catch (t) {}
      o || n(t, e);
    }

    minerva_hook.afterFunction("null", this, {
      n: n
    });
  };
  minerva_hook.afterFunction("null", this, {
    c: c,
    l: l,
    p: p,
    g: g,
    f: f,
    d: d,
    _: _,
    h: h,
    m: m,
    v: v,
    b: b,
    y: y
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  e.tryToGetAttribute = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = t && t.getAttribute ? t.getAttribute(e) || "" : "";
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  var n = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (t && t.setAttribute) try {
      t.setAttribute(e, n);
    } catch (t) {}
    minerva_hook.afterFunction("null", this, {});
  };

  e.tryToSetAttribute = n, e.tryToRemoveAttribute = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (t && t.removeAttribute) try {
      t.removeAttribute(e);
    } catch (o) {
      n(t, e, "");
    }
    minerva_hook.afterFunction("null", this, {});
  };
  minerva_hook.afterFunction("null", this, {
    n: n
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    _minerva_ret = (i = i || document.getElementsByTagName("head")[0], s && !t ? s : i ? s = i.getElementsByTagName("meta") : []);
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t, e) {
    minerva_hook.beforeFunction("a", this, arguments);
    var n,
        a,
        r,
        i = o(),
        s = i.length;

    for (n = 0; n < s; n++) a = i[n], u.tryToGetAttribute(a, "name") === t && (r = u.tryToGetAttribute(a, e || "content"));

    _minerva_ret = r || "";
    minerva_hook.afterFunction("a", this, {
      n: n,
      a: a,
      r: r,
      i: i,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    var e = {
      isonepage: "-1",
      urlpagename: ""
    },
        n = t.qGet();
    if (n && n.hasOwnProperty("isonepage_data")) e.isonepage = n.isonepage_data.isonepage, e.urlpagename = n.isonepage_data.urlpagename;else {
      var o = a("isonepage") || "-1",
          r = o.split("|");
      e.isonepage = r[0], e.urlpagename = r[1] ? r[1] : "";
    }
    _minerva_ret = e;
    minerva_hook.afterFunction("r", this, {
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var i,
      s,
      u = n(27);
  e.getMetaTags = o, e.getMetaCnt = a, e.getOnePageInfo = r;
  minerva_hook.afterFunction("null", this, {
    i: i,
    s: s,
    u: u
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(18),
      a = n(30),
      r = n(12);

  e.getExparamsInfos = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = [],
        i = t || ["uidaplus", "pc_i", "pu_i"],
        s = a.getExParams(o) || "";
    s = s.replace(/&aplus&/, "&");

    for (var u = o.param2arr(s) || [], c = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = r.indexof(i, t) > -1;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, l = 0; l < u.length; l++) {
      var p = u[l],
          g = p[0] || "",
          f = p[1] || "";
      g && f && ("EXPARAMS" === e || c(g)) && n.push(g + "=" + f);
    }

    _minerva_ret = n;
    minerva_hook.afterFunction("null", this, {
      n: n,
      i: i,
      s: s,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    _minerva_ret = (s || (s = g.getElementById("beacon-aplus") || g.getElementById("tb-beacon-aplus")), s);
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    var e = o(),
        n = p.tryToGetAttribute(e, "cspx");
    t && n && (t.nonce = n);
    minerva_hook.afterFunction("a", this, {
      e: e,
      n: n
    });
  }

  function r(t, e, n) {
    minerva_hook.beforeFunction("r", this, arguments);
    var r = "script",
        s = g.createElement(r);
    s.type = "text/javascript", s.async = !0;
    var c = o(),
        l = c && c.hasAttribute("crossorigin");
    l && (s.crossOrigin = "anonymous");
    var p = "https:" === location.protocol ? e || t : t;
    0 === p.indexOf("//") && (p = u.getProtocal() + p), s.src = p, n && (s.id = n), a(s);
    var f = g.getElementsByTagName(r)[0];
    i = i || g.getElementsByTagName("head")[0], f ? f.parentNode.insertBefore(s, f) : i && i.appendChild(s);
    minerva_hook.afterFunction("r", this, {
      r: r,
      s: s,
      c: c,
      l: l,
      p: p,
      f: f
    });
  }

  var i,
      s,
      u = n(22),
      c = n(9),
      l = n(24),
      p = n(27),
      g = document;
  e.getCurrentNode = o, e.addScript = r, e.loadScript = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);
      o.onreadystatechange = o.onload = o.onerror = null, o = null, e(t);
      minerva_hook.afterFunction("n", this, {});
    }

    var o = g.createElement("script");
    if (i = i || g.getElementsByTagName("head")[0], o.async = !0, "onload" in o) o.onload = n;else {
      var r = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        /loaded|complete/.test(o.readyState) && n();
        minerva_hook.afterFunction("null", this, {});
      };

      o.onreadystatechange = r, r();
    }
    o.onerror = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      n(t);
      minerva_hook.afterFunction("null", this, {});
    }, o.src = t, a(o), i.appendChild(o);
    minerva_hook.afterFunction("null", this, {
      o: o
    });
  }, e.isTouch = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = "ontouchend" in document.createElement("div");
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  var f = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = goldlog && goldlog._$ ? goldlog._$ : {},
        e = t.meta_info || {};
    _minerva_ret = e["aplus-exparams"] || "";
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.getExParamsFromMeta = f, e.getExParams = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = o(),
        n = p.tryToGetAttribute(e, "exparams"),
        a = d(n, f(), t) || "";
    _minerva_ret = a && a.replace(/&amp;/g, "&").replace(/\buser(i|I)d=/, "uidaplus=");
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  var d = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    var o = "aplus&sidx=aplusSidex",
        a = t || o;

    try {
      if (e) {
        var r = n.param2obj(e),
            i = ["aplus", "cna", "spm-cnt", "spm-url", "spm-pre", "logtype", "pre", "uidaplus", "asid", "sidx", "trid", "gokey"];
        c.each(i, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          r.hasOwnProperty(t) && (l.logger({
            msg: "Can not inject keywords: " + t
          }), delete r[t]);
          minerva_hook.afterFunction("null", this, {});
        }), delete r[""];
        var s = "";

        if (t) {
          var u = t.match(/aplus&/).index,
              p = u > 0 ? n.param2obj(t.substring(0, u)) : {};
          delete p[""], s = n.obj2param(c.assign(p, r)) + "&" + t.substring(u, t.length);
        } else s = n.obj2param(r) + "&" + o;

        return s;
      }

      return a;
    } catch (t) {
      return a;
    }

    minerva_hook.afterFunction("null", this, {
      o: o,
      a: a
    });
  };

  e.mergeExparams = d;
  minerva_hook.afterFunction("null", this, {
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g,
    f: f,
    d: d
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(3),
      a = n(11),
      r = n(30),
      i = n(19),
      s = n(32),
      u = n(33),
      c = n(25),
      l = n(4);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        var e = this.options.context.etag || {};
        this.cna = e.cna || a.getCookie("cna"), this.setTag(0), this.setStag(-1), this.setLsTag("-1"), this.setEtag(this.cna || ""), this.requesting = !1, this.today = s.getFormatDate();
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      },
      setLsTag: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.lstag = t, this.options.context.etag.lstag = t;
        minerva_hook.afterFunction("null", this, {});
      },
      setTag: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.tag = t, this.options.context.etag.tag = t;
        minerva_hook.afterFunction("null", this, {});
      },
      setStag: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.stag = t, this.options.context.etag.stag = t;
        minerva_hook.afterFunction("null", this, {});
      },
      setEtag: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.etag = t, this.options.context.etag.cna = t, a.getCookie("cna") !== t && a.setCookie("cna", t, {
          SameSite: "none"
        });
        minerva_hook.afterFunction("null", this, {});
      },
      setLscnaStatus: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options.context.etag.lscnastatus = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;
        if (n.cna) return void n.setTag(1);
        var a = null,
            s = u.getUrl(this.options.context.etag || {});
        n.requesting = !0;

        var p = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          setTimeout(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            e();
            minerva_hook.afterFunction("null", this, {});
          }, 20), clearTimeout(a);
          minerva_hook.afterFunction("null", this, {});
        };

        _minerva_ret = (r.loadScript(s, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var e, a;

          if (t && "error" === t.type ? (n.setStag(-3), o.do_tracker_jserror({
            message: "loadError",
            error: "",
            filename: "etag_ls"
          })) : (e = c.getGoldlogVal("Etag"), e && n.setEtag(e), a = c.getGoldlogVal("stag"), "undefined" != typeof a && n.setStag(a)), n.requesting) {
            if (2 === a || 4 === a) {
              var r = i.getLsCna(l.LS_CNA_KEY);
              r ? (n.setLsTag(1), n.setEtag(r)) : (n.setLsTag(0), i.setLsCna(l.LS_CNA_KEY, n.today, e));
            }

            p();
          }

          minerva_hook.afterFunction("null", this, {
            e: e,
            a: a
          });
        }), a = setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          n.requesting = !1, n.setStag(-2), e();
          minerva_hook.afterFunction("null", this, {});
        }, 1500), 2e3);
        minerva_hook.afterFunction("null", this, {
          n: n,
          a: a,
          s: s,
          p: p,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t, e, n) {
    minerva_hook.beforeFunction("n", this, arguments);
    var o = "" + Math.abs(t),
        a = e - o.length,
        r = t >= 0;
    _minerva_ret = (r ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + o;
    minerva_hook.afterFunction("n", this, {
      o: o,
      a: a,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  e.getFormatDate = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = new Date();

    try {
      return [e.getFullYear(), n(e.getMonth() + 1, 2, 0), n(e.getDate(), 2, 0)].join(t || "");
    } catch (t) {
      return "";
    }

    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(19);

  e.getUrl = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = new Date().getTime(),
        n = o.getUrl(t && t.egUrl ? t.egUrl : "gj.mmstat.com/eg.js"),
        a = n.match(/[\w+\.]+[a-z|A-Z|0-9]+\/(eg|ge).js/);
    _minerva_ret = (0 !== n.indexOf("http") && a && a.length > 0 && (n = "//" + a[0]), n + "?t=" + e);
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(19),
      a = n(30),
      r = n(33),
      i = n(4),
      s = n(32),
      u = n(21);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t, this.today = s.getFormatDate();
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;

        if (u.test()) {
          var e = o.getLsCna(i.LS_CNA_KEY, t.today);
          e || setTimeout(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            var e = r.getUrl(t.options.context.etag || {});
            a.loadScript(e, function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              e && "error" !== e.type && o.setLsCna(i.LS_CNA_KEY, t.today, goldlog.Etag);
              minerva_hook.afterFunction("null", this, {});
            });
            minerva_hook.afterFunction("null", this, {
              e: e
            });
          }, 1e3);
        }

        minerva_hook.afterFunction("null", this, {
          t: t
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  e.plugins_pv = [{
    name: "etag",
    enable: !0,
    path: n(36)
  }, {
    name: "when_to_sendpv",
    enable: !0,
    path: n(38)
  }, {
    name: "where_to_sendlog_ut",
    enable: !0,
    path: n(39)
  }, {
    name: "is_single",
    enable: !0,
    path: n(41)
  }, {
    name: "what_to_pvhash",
    enable: !0,
    path: n(45)
  }, {
    name: "what_to_sendpv",
    enable: !0,
    path: n(46)
  }, {
    name: "what_to_sendpv_userdata",
    enable: !0,
    path: n(50),
    deps: ["what_to_sendpv"]
  }, {
    name: "what_to_sendpv_etag",
    enable: !0,
    path: n(55),
    deps: ["etag", "what_to_sendpv"]
  }, {
    name: "what_to_sendpv_ut2",
    enable: n(56),
    path: n(57),
    deps: ["where_to_sendlog_ut", "is_single"]
  }, {
    name: "what_to_sendpv_ut",
    enable: !0,
    path: n(58),
    deps: ["where_to_sendlog_ut", "is_single"]
  }, {
    name: "what_to_pv_slog",
    enable: !0,
    path: n(59),
    deps: ["what_to_sendpv"]
  }, {
    name: "can_to_sendpv",
    enable: !0,
    path: n(60)
  }, {
    name: "where_to_sendpv",
    enable: !0,
    path: n(17),
    deps: ["is_single"]
  }, {
    name: "do_sendpv",
    enable: !0,
    path: n(61),
    deps: ["is_single", "what_to_sendpv", "where_to_sendpv"]
  }, {
    name: "do_sendpv_ut2",
    enable: n(56),
    path: n(62),
    deps: ["what_to_sendpv_ut2", "where_to_sendlog_ut"]
  }, {
    name: "do_sendpv_ut",
    enable: n(56),
    path: n(63),
    deps: ["what_to_sendpv_ut", "where_to_sendlog_ut"]
  }, {
    name: "after_pv",
    enable: !0,
    path: n(64)
  }];
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(37);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        o.doSubOnceMsg("aplusInitContext", function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          e.etag && (t.options.context.etag = e.etag);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var n = "function",
      o = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = window.goldlog || {},
        e = t.aplus_pubsub || {},
        o = typeof e.publish === n;
    _minerva_ret = o ? e : "";
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.doPubMsg = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = o();
    e && typeof e.publish === n && e.publish.apply(e, t);
    minerva_hook.afterFunction("null", this, {
      e: e
    });
  }, e.doCachePubs = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = o();
    e && typeof e.cachePubs === n && e.cachePubs.apply(e, t);
    minerva_hook.afterFunction("null", this, {
      e: e
    });
  }, e.doSubMsg = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = o();
    a && typeof a.subscribe === n && a.subscribe(t, e);
    minerva_hook.afterFunction("null", this, {
      a: a
    });
  }, e.doSubOnceMsg = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = o();
    a && typeof a.subscribeOnce === n && a.subscribeOnce(t, e);
    minerva_hook.afterFunction("null", this, {
      a: a
    });
  };
  minerva_hook.afterFunction("null", this, {
    n: n,
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(25),
      a = n(23),
      r = n(26);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getMetaInfo: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = o.getGoldlogVal("_$") || {},
            e = t.meta_info || r.getInfo();
        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getAplusWaiting: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.getMetaInfo() || {};
        _minerva_ret = t["aplus-waiting"];
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this.options.config || {},
            o = this.getAplusWaiting();
        if (o && n.is_auto) switch (o = this.getAplusWaiting() + "", this.options.context.when_to_sendpv = {
          aplusWaiting: o
        }, o) {
          case "MAN":
            return "done";

          case "1":
            return this.options.context.when_to_sendpv.isWait = !0, a.sleep(6e3, function () {
              minerva_hook.beforeFunction("null", this, arguments);
              e();
              minerva_hook.afterFunction("null", this, {});
            }), 6e3;

          default:
            var r = 1 * o;
            if (r + "" != "NaN") return this.options.context.when_to_sendpv.isWait = !0, a.sleep(r, function () {
              minerva_hook.beforeFunction("null", this, arguments);
              e();
              minerva_hook.afterFunction("null", this, {});
            }), r;
        }
        minerva_hook.afterFunction("null", this, {
          n: n,
          o: o
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(40);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getAplusToUT: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = {
          toUT2: o.getAplusToUT("toUT2", t),
          toUT: o.getAplusToUT("toUT", t)
        };
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        if ("Umeng4Aplus" === goldlog.aplusBridgeName) this.options.context.where_to_sendlog_ut.toUTName = "toUT2";else {
          var t = this.getAplusToUT(this.options.config.recordType);
          this.options.context.where_to_sendlog_ut.aplusToUT = t;
        }
        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var n = navigator.userAgent,
      o = /WindVane/i.test(n);
  e.is_WindVane = o;

  var a = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = goldlog.getMetaInfo("aplus_chnl");
    _minerva_ret = !(!t || !t.isAvailable || "function" != typeof t.toUT2 && "function" != typeof t.toUT) && t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.isAplusChnl = a, e.getAplusToUT = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = {},
        r = a();
    if ("object" == typeof r) n.bridgeName = r.bridgeName || "customBridge", n.bridgeVersion = r.bridgeVersion || r.version || "", n.isAvailable = r.isAvailable, n.toUT2 = r.toUT2 || r.toUT;else {
      var i = window.WindVane || {};

      if (o && i && i.isAvailable && "function" == typeof i.call) {
        var s = t || "toUT",
            u = goldlog.getMetaInfo("aplus-toUT") + "";
        "toUT2HC" === u && "PV" === e && (s = u), n = {
          bridgeName: "WindVane",
          bridgeVersion: i.version || "",
          isAvailable: !0,
          toUT2: function (t, e, n, o) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = i.call("WVTBUserTrack", s, t, e, n, o);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }
        };
      }
    }
    _minerva_ret = n;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    n: n,
    o: o,
    a: a
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(25),
      a = n(42),
      r = n(43),
      i = n(4);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t, this._$ = o.getGoldlogVal("_$") || {}, this.isBoth = "1" === this._$.meta_info["aplus-both-request"], this.is_WindVane = this._$.is_WindVane;
        minerva_hook.afterFunction("null", this, {});
      },
      isSingle_pv: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = t ? !this.isBoth : !(!this.is_WindVane || !r.isSingleUaVersion() || this.isBoth);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isSingle_hjlj: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e ? !this.isBoth : !(!this.is_WindVane || !r.isSingleSendLog(t) || this.isBoth);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isSingle_uhjlj: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (!t || !/^\/aplus\.99\.(\d)+$/.test(t.logkey)) && (e ? !this.isBoth : !(!(this.is_WindVane && t && t.logkey && r.isSingleUaVersion()) || this.isBoth));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = this.options.config || {},
            n = t.where_to_sendlog_ut.aplusToUT || {},
            o = n.toUT || {},
            r = n.toUT2 || {},
            s = a.isNative4Aplus(),
            u = !!(o.isAvailable || r.isAvailable || s),
            c = t.userdata || {},
            l = !!t.is_single;

        switch (e.recordType) {
          case i.recordTypes.uhjlj:
            l = this.isSingle_uhjlj(c, s);
            break;

          case i.recordTypes.hjlj:
            l = this.isSingle_hjlj(c, s);
            break;

          case i.recordTypes.pv:
            l = this.isSingle_pv(s);
            break;

          default:
            l = this.isSingle_pv(s);
        }

        this.options.context.is_single = u && l, this.options.context.ut_is_available = u;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          o: o,
          r: r,
          s: s,
          u: u,
          c: c,
          l: l
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var n = "UT4Aplus",
      o = "Umeng4Aplus";
  e.isNative4Aplus = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = goldlog.getMetaInfo("aplus-toUT"),
        e = goldlog.aplusBridgeName;
    _minerva_ret = e === n && t === n || e === o;
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.haveNativeFlagInUA = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = goldlog.aplusBridgeName;

    if (!t && "boolean" != typeof t) {
      var e = new RegExp([n, o].join("|"), "i"),
          a = navigator.userAgent.match(e);
      t = !!a && a[0], goldlog.aplusBridgeName = t;
    }

    _minerva_ret = !!t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    n: n,
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var o = n(44),
      a = n(42),
      r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = t.logkey.toLowerCase();
    0 === e.indexOf("/") && (e = e.substr(1));
    var n = t.gmkey ? t.gmkey.toUpperCase() : "OTHER";

    switch (n) {
      case "EXP":
        return "2201";

      case "CLK":
        return "2101";

      case "SLD":
        return "19999";

      case "OTHER":
      default:
        return "19999";
    }

    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n
    });
  },
      i = /\sA2U\/x/.test(window.navigator.userAgent),
      s = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = window.navigator.userAgent,
        e = !1,
        n = /AliApp\((DM|DY|DingTalk|CN|LA)\/(\d+[._]\d+[._]\d+)/i,
        r = n.test(t);
    _minerva_ret = (e = r, i || a.haveNativeFlagInUA() || e || o.webviewIsAbove({
      version_ios_tb: [5, 11, 7],
      version_ios_tm: [5, 24, 1],
      version_android_tb: [5, 11, 7],
      version_android_tm: [5, 24, 1]
    }));
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      n: n,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.isSingleUaVersion = s, e.isSingleSendLog = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = (!t || !/^\/fsp\.1\.1$/.test(t.logkey)) && !!(t && t.logkey && s());
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.getFunctypeValue = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e.isSingleSendLog(t) ? r(t) : "2101";
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.getFunctypeValue2 = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = r(t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var n = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = [0, 0, 0];

    try {
      if (t) {
        var n = t[1],
            o = n.split(".");
        if (o.length > 2) for (var a = 0; a < o.length;) e[a] = parseInt(o[a]), a++;
      }
    } catch (t) {
      e = [0, 0, 0];
    } finally {
      return e;
    }

    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };

  e.parseVersion = n;

  var o = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = !1;

    try {
      var o = t[0] > e[0],
          a = t[1] > e[1],
          r = t[2] > e[2],
          i = t[0] === e[0],
          s = t[1] === e[1],
          u = t[2] === e[2];
      n = !!o || !(!i || !a) || !!(i && s && r) || !!(i && s && u);
    } catch (t) {
      n = !1;
    } finally {
      return n;
    }

    minerva_hook.afterFunction("null", this, {
      n: n
    });
  };

  e.isAboveVersion = o, e.webviewIsAbove = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = !1;

    try {
      e || (e = navigator.userAgent);
      var r = e.match(/AliApp\(TB\/(\d+[._]\d+[._]\d+)/i),
          i = n(r),
          s = e.match(/AliApp\(TM\/(\d+[._]\d+[._]\d+)/i),
          u = n(s),
          c = /iPhone|iPad|iPod|ios/i.test(e),
          l = /android/i.test(e);
      c ? r && i ? a = o(i, t.version_ios_tb) : s && u && (a = o(u, t.version_ios_tm)) : l && (r && i ? a = o(i, t.version_android_tb) : s && u && (a = o(u, t.version_android_tm)));
    } catch (t) {
      a = !1;
    }

    _minerva_ret = a;
    minerva_hook.afterFunction("null", this, {
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.webviewIsEqual = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = !1;

    try {
      e || (e = navigator.userAgent);
      var o = e.match(/AliApp\(CN\/(\d+[._]\d+[._]\d+)/i),
          a = o ? o[1] : "0.0.0",
          r = e.match(/AliApp\(DingTalk\/(\d+[._]\d+[._]\d+)/i),
          i = r ? r[1] : "0.0.0",
          s = /iPhone|iPad|iPod|ios/i.test(e),
          u = /android/i.test(e);
      s ? o && a ? n = t.version_ios_cn === a : r && i && (n = t.version_ios_dd === i) : u && (o && a ? n = t.version_android_cn === a : r && i && (n = t.version_android_dd === i));
    } catch (t) {
      n = !1;
    }

    _minerva_ret = n;
    minerva_hook.afterFunction("null", this, {
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.webviewIsBelow = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = !1;

    try {
      e || (e = navigator.userAgent);
      var r = e.match(/AliApp\(CN\/(\d+[._]\d+[._]\d+)/i),
          i = n(r),
          s = /iPhone|iPad|iPod|ios/i.test(e),
          u = /android/i.test(e);
      s ? r && i && (a = !o(i, t.version_ios_cn)) : u && r && i && (a = !o(i, t.version_android_cn));
    } catch (t) {
      a = !1;
    }

    _minerva_ret = a;
    minerva_hook.afterFunction("null", this, {
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    n: n,
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(25);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context.what_to_pvhash || {},
            e = o.getGoldlogVal("_$") || {},
            n = e.meta_info || {},
            a = n["aplus-pvhash"] || "",
            r = [];
        "1" === a && (r = ["_aqx_uri", encodeURIComponent(location.href)]), t.hash = r, this.options.context.what_to_pvhash = t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          a: a,
          r: r
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(18),
      a = n(9),
      r = n(30),
      i = n(25),
      s = n(27),
      u = n(11),
      c = n(47),
      l = n(48),
      p = n(49);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = a.assign(p, {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t, this.cookie_data || (this.cookie_data = u.getData()), this.client_info || (this.client_info = i.getClientInfo() || {});
        var e = location.hash;
        e && 0 === e.indexOf("#") && (e = e.substr(1)), this.loc_hash = e;
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      },
      getExParams: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = window,
            e = document,
            n = [],
            u = parent !== t.self,
            l = e.getElementById("beacon-aplus") || e.getElementById("tb-beacon-aplus"),
            p = s.tryToGetAttribute(l, "exparams"),
            g = r.mergeExparams(p, r.getExParamsFromMeta(), o) || "";
        g = g.replace(/&amp;/g, "&");
        var f,
            d,
            _ = ["taobao.com", "tmall.com", "etao.com", "hitao.com", "taohua.com", "juhuasuan.com", "alimama.com"],
            h = i.getGoldlogVal("_$") || {},
            m = h.meta_info || {};

        if (u && !m["aplus-ifr-pv"]) {
          for (d = _.length, f = 0; f < d; f++) if (o.isContain(location.hostname, _[f])) return n.push([o.mkPlainKeyForExparams(), g]), n;

          g = g.replace(/\buser(i|I)d=\w*&?/, "");
        }

        g = g.replace(/\buser(i|I)d=/, "uidaplus="), g && n.push([o.mkPlainKeyForExparams(), g]);
        var v = a.makeCacheNum();
        _minerva_ret = (c.updateKey(n, "cache", v), n);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          u: u,
          l: l,
          p: p,
          g: g,
          g: g,
          f: f,
          d: d,
          _: _,
          h: h,
          m: m,
          v: v,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getExtra: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = [],
            e = i.getGoldlogVal("_$") || {},
            n = e.meta_info || {},
            a = this.cookie_data || {},
            r = this.getClientInfo(!0) || [];
        _minerva_ret = (o.ifAdd(t, r), o.ifAdd(t, [["thw", a.thw], ["bucket_id", l.getBucketId(n)], ["urlokey", this.loc_hash], ["wm_instanceid", n.ms_data_instance_id]]), t);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          a: a,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t, e, n) {
    minerva_hook.beforeFunction("n", this, arguments);
    r(t, "spm-cnt", function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var o = t.split(".");
      _minerva_ret = (o[0] = goldlog.spm_ab[0], o[1] = goldlog.spm_ab[1], e ? o[1] = o[1].split("/")[0] + "/" + e : o[1] = o[1].split("/")[0], n && (o[4] = n), o.join("."));
      minerva_hook.afterFunction("null", this, {
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    });
    minerva_hook.afterFunction("n", this, {});
  }

  function o(t, e) {
    minerva_hook.beforeFunction("o", this, arguments);
    var n = window.g_SPM && g_SPM._current_spm;
    n && r(t, "spm-url", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = [n.a, n.b, n.c, n.d].join(".") + (e ? "." + e : "");
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, "spm-cnt");
    minerva_hook.afterFunction("o", this, {
      n: n
    });
  }

  function a(t, e) {
    minerva_hook.beforeFunction("a", this, arguments);
    var n,
        o,
        a,
        r = -1;

    for (n = 0, o = t.length; n < o; n++) if (a = t[n], a[0] === e) {
      r = n;
      break;
    }

    r >= 0 && t.splice(r, 1);
    minerva_hook.afterFunction("a", this, {
      n: n,
      o: o,
      a: a,
      r: r
    });
  }

  function r(t, e, n, o) {
    minerva_hook.beforeFunction("r", this, arguments);
    var a,
        r,
        i = t.length,
        s = -1,
        u = "function" == typeof n;

    for (a = 0; a < i; a++) {
      if (r = t[a], r[0] === e) return void (u ? r[1] = n(r[1]) : r[1] = n);
      o && r[0] === o && (s = a);
    }

    o && (u && (n = n()), s > -1 ? t.splice(s, 0, [e, n]) : t.push([e, n]));
    minerva_hook.afterFunction("r", this, {
      a: a,
      r: r,
      i: i,
      s: s,
      u: u
    });
  }

  t.exports = {
    updateSPMCnt: n,
    updateSPMUrl: o,
    updateKey: r,
    removeKey: a
  };
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t, e) {
    minerva_hook.beforeFunction("o", this, arguments);
    var n,
        o = 2146271213;

    for (n = 0; n < t.length; n++) o = (o << 5) + o + t.charCodeAt(n);

    _minerva_ret = (65535 & o) % e;
    minerva_hook.afterFunction("o", this, {
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    var e,
        n = r.getCookie("t");
    _minerva_ret = ("3" != t.ms_prototype_id && "5" != t.ms_prototype_id || (e = n ? o(n, 20) : ""), e);
    minerva_hook.afterFunction("a", this, {
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var r = n(11);
  e.getBucketId = a;
  minerva_hook.afterFunction("null", this, {
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(18),
      a = n(9),
      r = n(25),
      i = n(40),
      s = n(11),
      u = n(4);
  t.exports = {
    init: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      this.options = t, this.cookie_data || (this.cookie_data = s.getData());
      minerva_hook.afterFunction("null", this, {});
    },
    getBasicParams: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = document,
          e = r.getGoldlogVal("_$") || {},
          n = e.spm || {},
          a = e.meta_info || {},
          i = a["aplus-ifr-pv"] + "" == "1",
          u = o.is_in_iframe && !i ? 0 : 1,
          c = this.options.config || {},
          l = t.title;
      c.title && (l += "_" + c.title);
      var p = [["logtype", u], ["title", l], ["pre", e.page_referrer || ""], ["scr", screen.width + "x" + screen.height]];

      try {
        var g = location.href.substring(0, 1200);
        g && p.push(["_p_url", a["aplus-p-url"] || g]);
      } catch (t) {}

      var f = this.cookie_data || {},
          d = this.options.context || {},
          _ = d.etag || {},
          h = _.cna || f.cna || s.getCookie("cna");

      h && p.push([o.mkPlainKey(), "cna=" + h]), f.tracknick && p.push([o.mkPlainKey(), "nick=" + f.tracknick]);
      var m = n.spm_url || "";
      _minerva_ret = (o.ifAdd(p, [["wm_pageid", a.ms_data_page_id], ["wm_prototypeid", a.ms_prototype_id], ["wm_sid", a.ms_data_shop_id], ["spm-url", m], ["spm-pre", n.spm_pre], ["spm-cnt", n.spm_cnt], ["cnaui", f.cnaui]]), p);
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e,
        n: n,
        a: a,
        i: i,
        u: u,
        c: c,
        l: l,
        p: p,
        f: f,
        d: d,
        _: _,
        h: h,
        m: m,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getExParams: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = [];
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getExtra: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = [];
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getClientInfo: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = [],
          n = r.getGoldlogVal("_$") || {},
          s = this.client_info || {},
          c = s.ua_info || {};

      if (t || !i.is_WindVane && !i.isAplusChnl()) {
        for (var l, p = [], g = ["p", "o", "b", "s", "w", "wx", "ism"], f = 0; l = g[f++];) c[l] && p.push([l, c[l]]);

        o.ifAdd(e, p);
      }

      o.ifAdd(e, [["cache", a.makeCacheNum()], ["lver", goldlog.lver || u.lver], ["jsver", n.script_name || u.script_name], ["pver", goldlog.aplus_cplugin_ver]]);
      var d = this.options.config || {},
          _ = d.is_auto;
      _minerva_ret = (_ || o.ifAdd(e, [["mansndlog", 1]]), e);
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        s: s,
        c: c,
        d: d,
        _: _,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    processLodashDollar: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = r.getGoldlogVal("_$") || {};
      t.page_url !== location.href && (t.page_referrer = t.page_url, t.page_url = location.href), r.setGoldlogVal("_$", t);
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
    getLsParams: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = r.getGoldlogVal("_$") || {},
          e = [];
      _minerva_ret = (t.lsparams && t.lsparams.spm_id && (e.push(["lsparams", t.lsparams.spm_id]), e.push(["lsparams_pre", t.lsparams.current_url])), e);
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    run: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = this.getBasicParams() || [],
          e = this.getExParams() || [],
          n = this.getExtra() || [];
      this.processLodashDollar();
      var o = this.getLsParams() || [],
          a = [].concat(t, e, n, o);
      this.options.context.what_to_sendpv.pvdata = a, this.options.context.what_to_sendpv.exparams = e;
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e,
        n: n,
        o: o,
        a: a
      });
    }
  };
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(18),
      a = n(25),
      r = n(47),
      i = n(11),
      s = n(51);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getPageId: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.config || {},
            e = this.options.context || {},
            n = e.userdata || {};
        _minerva_ret = t.page_id || t.pageid || t.pageId || n.page_id;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getPageInfo: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t;

        try {
          var e = top.location !== self.location;
          e && void 0 !== window.innerWidth && (t = {
            width: window.innerWidth,
            height: window.innerHeight
          });
        } catch (t) {}

        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getUserdata: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = a.getGoldlogVal("_$") || {},
            e = t.spm || {},
            n = this.options.context || {},
            r = n.userdata || {},
            u = this.options.config || {},
            c = [];

        if (u && !u.is_auto) {
          u.gokey && c.push([o.mkPlainKey(), u.gokey]);
          var l = e.data.b;

          if (l) {
            var p = this.getPageId();
            l = p ? l.split("/")[0] + "/" + p : l.split("/")[0], s.setB(l);
            var g = e.spm_cnt.split(".");
            g && g.length > 2 && (g[1] = l, e.spm_cnt = g.join("."));
          }
        }

        var f = function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          if ("object" == typeof t) for (var e in t) "object" != typeof t[e] && "function" != typeof t[e] && c.push([e, t[e]]);
          minerva_hook.afterFunction("null", this, {});
        };

        f(goldlog.getMetaInfo("aplus-cpvdata")), f(r);
        var d = i.getCookie("workno") || i.getCookie("emplId");
        d && c.push(["workno", d]);

        var _ = i.getHng();

        _ && c.push(["_hng", i.getHng()]);
        var h = this.getPageInfo();
        _minerva_ret = (h && (c.push(["_pw", h.width]), c.push(["_ph", h.height])), c);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          r: r,
          u: u,
          c: c,
          f: f,
          d: d,
          _: _,
          h: h,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      processLodashDollar: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.config || {},
            e = a.getGoldlogVal("_$") || {};
        t && t.referrer && (e.page_referrer = t.referrer), a.setGoldlogVal("_$", e);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e
        });
      },
      updatePre: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = a.getGoldlogVal("_$") || {};
        _minerva_ret = (e.page_referrer && r.updateKey(t, "pre", e.page_referrer), t);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context.what_to_sendpv.pvdata,
            e = this.getUserdata();
        this.processLodashDollar();
        var n = t,
            o = this.options.context.what_to_pvhash.hash;
        o && o.length > 0 && n.push(o), n = n.concat(e), n = this.updatePre(n);
        var a = this.getPageId();
        a && r.updateSPMCnt(n, a), this.options.context.what_to_sendpv.pvdata = n, this.options.context.userdata = e;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          o: o,
          a: a
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);

    if (!s.data.a || !s.data.b) {
      var t = r._SPM_a,
          e = r._SPM_b;
      if (t && e) return t = t.replace(/^{(\w+\/)}$/g, "$1"), e = e.replace(/^{(\w+\/)}$/g, "$1"), s.is_wh_in_page = !0, void c.setAB(t, e);
      var n = goldlog._$.meta_info;
      t = n["data-spm"] || n["spm-id"] || "0";
      var o = t.split(".");
      o.length > 1 && (t = o[0], e = o[1]), c.setA(t), e && c.setB(e);
      var a = i.getElementsByTagName("body");
      a = a && a.length ? a[0] : null, a && (e = l.tryToGetAttribute(a, "data-spm"), e ? c.setB(e) : 1 === o.length && c.setAB("0", "0"));
    }

    minerva_hook.afterFunction("o", this, {});
  }

  function a() {
    minerva_hook.beforeFunction("a", this, arguments);
    var t = s.data.a,
        e = s.data.b;
    t && e && (goldlog.spm_ab = [t, e]);
    minerva_hook.afterFunction("a", this, {
      t: t,
      e: e
    });
  }

  var r = window,
      i = document,
      s = {},
      u = {};
  s.data = u;
  var c = {},
      l = n(27),
      p = n(52),
      g = location.href,
      f = n(53).getRefer(),
      d = n(4);
  c.setA = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    s.data.a = t, a();
    minerva_hook.afterFunction("null", this, {});
  }, c.setB = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    s.data.b = t, a();
    minerva_hook.afterFunction("null", this, {});
  }, c.setAB = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    s.data.a = t, s.data.b = e, a();
    minerva_hook.afterFunction("null", this, {});
  };

  var _ = p.getSPMFromUrl,
      h = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = d.utilPvid.makePVId();
    _minerva_ret = d.mustSpmE ? t || goldlog.pvid || "" : t || "";
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      m = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = t.goldlog || window.goldlog || {},
        a = n.meta_info || {};
    s.meta_protocol = a.spm_protocol;
    var r,
        i = n.spm_ab || [],
        u = i[0] || "0",
        c = i[1] || "0";
    "0" === u && "0" === c && (o(), u = s.data.a || "0", c = s.data.b || "0"), r = [s.data.a, s.data.b].join("."), s.spm_cnt = (r || "0.0") + ".0.0";
    var l = t.send_pv_count > 0 ? h() : n.pvid;
    l && (s.spm_cnt += "." + l), n._$.spm = s, "function" == typeof e && e(l);
    minerva_hook.afterFunction("null", this, {
      n: n,
      a: a,
      r: r,
      i: i,
      u: u,
      c: c,
      l: l
    });
  };

  c.spaInit = function (t, e, n, o) {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = "function" == typeof o ? o : function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    },
        r = s.spm_url,
        i = window.g_SPM || {},
        u = t._$ || {},
        c = u.send_pv_count;
    m({
      goldlog: t,
      meta_info: e,
      send_pv_count: c
    }, function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      s.spm_cnt = s.data.a + "." + s.data.b + ".0.0" + (t ? "." + t : "");
      var o = e["aplus-spm-fixed"];

      if ("1" !== o) {
        s.spm_pre = _(f), s.origin_spm_pre = s.spm_pre, s.spm_url = _(location.href), s.origin_spm_url = s.spm_url;
        var u = i._current_spm || {};
        u && u.a && "0" !== u.a && u.b && "0" !== u.b ? (s.spm_url = [u.a, u.b, u.c, u.d, u.e].join("."), s.spm_pre = r) : c > 0 && n && "0" !== n[0] && "0" !== n[1] && (s.spm_url = n.concat(["0", "0"]).join("."), s.spm_pre = r), i._current_spm = {};
      }

      a();
      minerva_hook.afterFunction("null", this, {
        o: o
      });
    });
    minerva_hook.afterFunction("null", this, {
      a: a,
      r: r,
      i: i,
      u: u,
      c: c
    });
  }, c.init = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    s.spm_url = _(g), s.spm_pre = _(f), m({
      goldlog: t,
      meta_info: e
    }, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      "function" == typeof n && n();
      minerva_hook.afterFunction("null", this, {});
    });
    minerva_hook.afterFunction("null", this, {});
  }, c.resetSpmCntPvid = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = goldlog.spm_ab;

    if (t && 2 === t.length) {
      var e = t.join(".") + ".0.0",
          n = h();
      n && (e = e + "." + n), s.spm_cnt = e, s.spm_url = e, goldlog._$.spm = s;
    }

    minerva_hook.afterFunction("null", this, {
      t: t
    });
  }, t.exports = c;
  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g,
    f: f,
    d: d,
    _: _,
    h: h,
    m: m
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t, e) {
    minerva_hook.beforeFunction("n", this, arguments);
    if (!t || !e) return "";
    var n,
        o = "";

    try {
      var a = new RegExp("[?|&]+" + t + "=([^&|#|?|/]+)");

      if ("spm" === t || "scm" === t) {
        var r = new RegExp("\\?.*" + t + "=([\\w\\.\\-\\*/]+)"),
            i = e.match(a),
            s = e.match(r),
            u = i && 2 === i.length ? i[1] : "",
            c = s && 2 === s.length ? s[1] : "";
        o = u > c ? u : c, o = decodeURIComponent(o);
      } else n = e.match(a), o = n && 2 === n.length ? n[1] : "";
    } catch (t) {} finally {
      return o;
    }

    minerva_hook.afterFunction("n", this, {
      n: n,
      o: o
    });
  }

  e.getParamFromUrl = n, e.getSPMFromUrl = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = n("spm", t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(54).nameStorage,
      a = n(5);

  e.getRefer = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = a.KEY || {},
        e = t.NAME_STORAGE || {};
    _minerva_ret = document.referrer || o.getItem(e.REFERRER) || "";
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var n = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      var t,
          e = [],
          r = !0;

      for (var l in p) p.hasOwnProperty(l) && (r = !1, t = p[l] || "", e.push(c(l) + s + c(t)));

      n.name = r ? o : a + c(o) + i + e.join(u);
      minerva_hook.afterFunction("t", this, {
        t: t,
        e: e,
        r: r
      });
    }

    function e(t, e, n) {
      minerva_hook.beforeFunction("e", this, arguments);
      t && (t.addEventListener ? t.addEventListener(e, n, !1) : t.attachEvent && t.attachEvent("on" + e, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        n.call(t, e);
        minerva_hook.afterFunction("null", this, {});
      }));
      minerva_hook.afterFunction("e", this, {});
    }

    var n = window;
    if (n.nameStorage) return n.nameStorage;
    var o,
        a = "nameStorage:",
        r = /^([^=]+)(?:=(.*))?$/,
        i = "?",
        s = "=",
        u = "&",
        c = encodeURIComponent,
        l = decodeURIComponent,
        p = {},
        g = {};
    _minerva_ret = (function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      if (t && 0 === t.indexOf(a)) {
        var e = t.split(/[:?]/);
        e.shift(), o = l(e.shift()) || "";

        for (var n, i, s, c = e.join(""), g = c.split(u), f = 0, d = g.length; f < d; f++) n = g[f].match(r), n && n[1] && (i = l(n[1]), s = l(n[2]) || "", p[i] = s);
      } else o = t || "";

      minerva_hook.afterFunction("null", this, {});
    }(n.name), g.setItem = function (e, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e && "undefined" != typeof n && (p[e] = String(n), t());
      minerva_hook.afterFunction("null", this, {});
    }, g.getItem = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = p.hasOwnProperty(t) ? p[t] : null;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, g.removeItem = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      p.hasOwnProperty(e) && (p[e] = null, delete p[e], t());
      minerva_hook.afterFunction("null", this, {});
    }, g.clear = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      p = {}, t();
      minerva_hook.afterFunction("null", this, {});
    }, g.valueOf = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = p;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, g.toString = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = n.name;
      _minerva_ret = 0 === t.indexOf(a) ? t : a + t;
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, e(n, "beforeunload", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      t();
      minerva_hook.afterFunction("null", this, {});
    }), g);
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      a: a,
      r: r,
      i: i,
      s: s,
      u: u,
      c: c,
      l: l,
      p: p,
      g: g,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }();

  e.nameStorage = n;
  minerva_hook.afterFunction("null", this, {
    n: n
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(47);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      updateBasicParams: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context.what_to_sendpv.pvdata || [],
            e = this.options.context.etag || {};
        _minerva_ret = (e.cna && (o.updateKey(t, "cna", e.cna), this.options.context.what_to_sendpv.pvdata = t), t);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      addTagParams: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context.what_to_sendpv.pvdata || [],
            e = this.options.context.etag || {},
            n = [];
        (e.tag || 0 === e.tag) && n.push(["tag", e.tag]), (e.stag || 0 === e.stag) && n.push(["stag", e.stag]), (e.lstag || 0 === e.lstag) && n.push(["lstag", e.lstag]), n.length > 0 && (this.options.context.what_to_sendpv.pvdata = t.concat(n));
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n
        });
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.updateBasicParams(), this.addTagParams();
        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var o = n(44),
      a = n(40),
      r = n(42),
      i = /\sA2U\/x/.test(window.navigator.userAgent),
      s = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t || (t = window.navigator.userAgent);
    var e = goldlog.getMetaInfo("aplus-toUT") + "",
        n = a.isAplusChnl(),
        s = /AliApp\((DM|DY|DingTalk|CN|LA)\/(\d+[._]\d+[._]\d+)/i,
        u = s.test(t),
        c = o.webviewIsAbove({
      version_ios_tb: [6, 6, 0],
      version_ios_tm: [5, 28, 0],
      version_android_tb: [6, 6, 2],
      version_android_tm: [5, 32, 0]
    }, t);
    _minerva_ret = (c || (c = r.haveNativeFlagInUA() || i || "2" === e || "toUT2HC" === e || u), n && "AliBCBridge" !== n.bridgeName && (c = !!n.toUT2), c);
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      s: s,
      u: u,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  e.isToUT2 = s, e.isEnable = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = s(e),
        o = !0;

    switch (t) {
      case "what_to_hjlj_ut2":
      case "do_sendhjlj_ut2":
      case "what_to_sendpv_ut2":
      case "do_sendpv_ut2":
        o = !!n;
        break;

      case "what_to_hjlj_ut":
      case "do_sendhjlj_ut":
      case "what_to_sendpv_ut":
      case "do_sendpv_ut":
        o = !n;
    }

    _minerva_ret = o;
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    var e,
        n,
        o,
        a,
        r = [],
        s = {};

    for (e = t.length - 1; e >= 0; e--) n = t[e], o = n[0], o && o.indexOf(i.s_plain_obj) == -1 && s.hasOwnProperty(o) || (a = n[1], ("aplus" == o || a) && (r.unshift([o, a]), s[o] = 1));

    _minerva_ret = r;
    minerva_hook.afterFunction("o", this, {
      e: e,
      n: n,
      o: o,
      a: a,
      r: r,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    var e,
        n,
        o,
        a,
        r = [],
        u = {
      logtype: !0,
      cache: !0,
      scr: !0,
      "spm-cnt": !0
    };

    for (e = t.length - 1; e >= 0; e--) if (n = t[e], o = n[0], a = n[1], !(s.isStartWith(o, i.s_plain_obj) && !s.isStartWith(o, i.mkPlainKeyForExparams()) || u[o])) if (s.isStartWith(o, i.mkPlainKeyForExparams())) {
      var c = i.param2arr(a);
      if ("object" == typeof c && c.length > 0) for (var l = c.length - 1; l >= 0; l--) {
        var p = c[l];
        p && p[1] && r.unshift([p[0], p[1]]);
      }
    } else r.unshift([o, a]);

    _minerva_ret = r;
    minerva_hook.afterFunction("a", this, {
      e: e,
      n: n,
      o: o,
      a: a,
      r: r,
      u: u,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r() {
    minerva_hook.beforeFunction("r", this, arguments);
    var t = {
      isonepage: "-1",
      urlpagename: ""
    },
        e = g.qGet();
    if (e && e.hasOwnProperty("isonepage_data")) t.isonepage = e.isonepage_data.isonepage, t.urlpagename = e.isonepage_data.urlpagename;else {
      var n = c.getMetaCnt("isonepage") || "-1",
          o = n.split("|");
      t.isonepage = o[0], t.urlpagename = o[1] ? o[1] : "";
    }
    _minerva_ret = t;
    minerva_hook.afterFunction("r", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var i = n(18),
      s = n(9),
      u = n(25),
      c = n(28),
      l = n(52),
      p = n(42),
      g = n(26),
      f = n(4),
      d = n(11);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      keyIsAvailable: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = ["functype", "funcId", "spm-cnt", "spm-url", "spm-pre", "_ish5", "_is_g2u", "_h5url", "cna", "isonepage", "lver", "jsver"];
        _minerva_ret = i.indexof(e, t) === -1;
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      valIsAvailable: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "object" != typeof t && "function" != typeof t;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      upUtData: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;
        if (t = t ? t : {}, e && "object" == typeof e) for (var o in e) {
          var a = e[o];
          o && n.valIsAvailable(a) && n.keyIsAvailable(o) && (t[o] = a);
        }
        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getToUtData: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = u.getGoldlogVal("_$") || {},
            n = e.spm || {},
            s = this.options.context || {},
            c = !!s.is_single,
            p = s.what_to_sendpv || {},
            g = a(o(p.exparams || []));
        g = i.arr2obj(g);

        var _ = i.arr2obj(p.pvdata),
            h = a(o(s.userdata || []));

        h = i.arr2obj(h);
        var m = location.href,
            v = {},
            b = l.getParamFromUrl("scm", m) || "";
        b && (v.scm = b);
        var y = l.getParamFromUrl("pg1stepk", m) || "";
        y && (v.pg1stepk = y);
        var w = l.getParamFromUrl("point", m) || "";
        w && (v.issb = 1), _ && _.mansndlog && (v.mansndlog = _.mansndlog), v = this.upUtData(v, g), v = this.upUtData(v, h);
        var x = r();
        v.functype = "page", v.funcId = "2001", v.url = goldlog.getMetaInfo("aplus-pagename") || location.origin + location.pathname, v._ish5 = "1", v._h5url = m, v._toUT = 2, v._bridgeName = t.bridgeName || "", v._bridgeVersion = t.bridgeVersion || "", v["spm-cnt"] = n.spm_cnt || "", v["spm-url"] = n.spm_url || "", v["spm-pre"] = n.spm_pre || "", v.cna = d.getCookie("cna"), v.lver = goldlog.lver || f.lver, v.jsver = f.script_name, v.pver = goldlog.aplus_cplugin_ver, v.isonepage = x.isonepage;
        var T = goldlog.getMetaInfo("aplus-utparam");
        _minerva_ret = (T && (v["utparam-cnt"] = JSON.stringify(T)), v._is_g2u_ = c ? 1 : 2, v);
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          s: s,
          c: c,
          p: p,
          g: g,
          g: g,
          _: _,
          h: h,
          h: h,
          m: m,
          v: v,
          b: b,
          y: y,
          w: w,
          x: x,
          T: T,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = t.what_to_sendpv_ut2 || {},
            n = t.where_to_sendlog_ut || {},
            o = n.aplusToUT || {},
            a = o.toUT2 || {};
        (a && a.isAvailable && "function" == typeof a.toUT2 || p.haveNativeFlagInUA()) && (e.pvdataToUt = this.getToUtData(a), this.options.context.what_to_sendpv_ut2 = e);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          o: o,
          a: a
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g,
    f: f,
    d: d
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    var e,
        n,
        o,
        a,
        i = [],
        s = {};

    for (e = t.length - 1; e >= 0; e--) n = t[e], o = n[0], o && o.indexOf(r.s_plain_obj) == -1 && s.hasOwnProperty(o) || (a = n[1], ("aplus" == o || a) && (i.unshift([o, a]), s[o] = 1));

    _minerva_ret = i;
    minerva_hook.afterFunction("o", this, {
      e: e,
      n: n,
      o: o,
      a: a,
      i: i,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    var e,
        n,
        o,
        a,
        s = [],
        u = {
      logtype: !0,
      cache: !0,
      scr: !0,
      "spm-cnt": !0
    };

    for (e = t.length - 1; e >= 0; e--) if (n = t[e], o = n[0], a = n[1], !(i.isStartWith(o, r.s_plain_obj) && !i.isStartWith(o, r.mkPlainKeyForExparams()) || u[o])) if (i.isStartWith(o, r.mkPlainKeyForExparams())) {
      var c = r.param2arr(a);
      if ("object" == typeof c && c.length > 0) for (var l = c.length - 1; l >= 0; l--) {
        var p = c[l];
        p && p[1] && s.unshift([p[0], p[1]]);
      }
    } else s.unshift([o, a]);

    _minerva_ret = s;
    minerva_hook.afterFunction("a", this, {
      e: e,
      n: n,
      o: o,
      a: a,
      s: s,
      u: u,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var r = n(18),
      i = n(9),
      s = n(25),
      u = n(28),
      c = n(42),
      l = n(26),
      p = n(4),
      g = n(11);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getToUtData: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            i = s.getGoldlogVal("_$") || {},
            c = i.spm || {},
            f = a(o(t)),
            d = {};

        try {
          var _ = r.arr2obj(f);

          _._toUT = 1, _._bridgeName = e.bridgeName || "", _._bridgeVersion = e.bridgeVersion || "", n = JSON.stringify(_);
        } catch (t) {
          n = '{"_toUT":1}';
        }

        var h = u.getOnePageInfo(l);
        d.functype = "2001", d.urlpagename = h.urlpagename, d.url = location.href, d.spmcnt = c.spm_cnt || "", d.spmurl = c.spm_url || "", d.spmpre = c.spm_pre || "", d.lzsid = "", d.cna = g.getCookie("cna"), d.extendargs = n, d.isonepage = h.isonepage;
        var m = this.options.context || {},
            v = !!m.is_single;
        _minerva_ret = (d._is_g2u_ = v ? 1 : 2, d.version = p.toUtVersion, d.lver = goldlog.lver || p.lver, d.jsver = p.script_name, d);
        minerva_hook.afterFunction("null", this, {
          n: n,
          i: i,
          c: c,
          f: f,
          d: d,
          h: h,
          m: m,
          v: v,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = t.what_to_sendpv || {},
            n = e.pvdata || [],
            o = t.what_to_sendpv_ut || {},
            a = t.where_to_sendlog_ut || {},
            r = a.aplusToUT || {},
            i = r.toUT || {};
        (i && i.isAvailable && "function" == typeof i.toUT2 || c.haveNativeFlagInUA()) && (o.pvdataToUt = this.getToUtData(n, i), this.options.context.what_to_sendpv_ut = o);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          o: o,
          a: a,
          r: r,
          i: i
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = t.is_single ? "1" : "0";

        if (t.what_to_sendpv_ut2.pvdataToUt._slog = e, t.what_to_sendpv_ut.pvdataToUt._slog = e, t.what_to_sendpv.pvdata.push(["_slog", e]), t.ut_is_available) {
          var n = t.is_single ? "1" : "2";
          t.what_to_sendpv.pvdata.push(["_is_g2u", n]);
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(25);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = o.getGoldlogVal("_$") || {},
            e = this.options.context.can_to_sendpv || {},
            n = t.send_pv_count || 0,
            a = this.options.config || {};
        _minerva_ret = a.is_auto && n > 0 ? "done" : (e.flag = "YES", this.options.context.can_to_sendpv = e, t.send_pv_count = ++n, void o.setGoldlogVal("_$", t));
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(25),
      a = n(18);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = !!t.is_single;

        if (!e) {
          var n = t.what_to_sendpv || {},
              r = t.where_to_sendpv || {},
              i = n.pvdata || [],
              s = goldlog.getMetaInfo("aplus-channel");

          if ("WS-ONLY" !== s) {
            var u = location.hostname + location.pathname,
                c = "www.taobao.com/" === u || "www.aliyun.com/" === u,
                l = goldlog.send(r.url, c ? a.arr2param(i) : a.arr2obj(i), c ? "POST" : "");
            o.setGoldlogVal("req", l);
          }
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(42);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this,
            a = this.options.context || {},
            r = a.what_to_sendpv_ut2 || {},
            i = a.where_to_sendlog_ut || {},
            s = r.pvdataToUt || {},
            u = i.aplusToUT || {},
            c = u.toUT2;
        if (o.isNative4Aplus()) return u.toutflag = "toUT2", i.toUTName = "toUT2", void (n.options.context.what_to_sendpv_ut2.isSuccess = !0);
        if (c && "function" == typeof c.toUT2 && c.isAvailable) try {
          u.toutflag = "toUT2", c.toUT2(s, function () {
            minerva_hook.beforeFunction("null", this, arguments);
            n.options.context.what_to_sendpv_ut2.isSuccess = !0, e("done");
            minerva_hook.afterFunction("null", this, {});
          }, function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            n.options.context.what_to_sendpv_ut2.errorMsg = t, e();
            minerva_hook.afterFunction("null", this, {});
          }, 2e3);
        } catch (t) {
          e();
        } finally {
          return "pause";
        }
        minerva_hook.afterFunction("null", this, {
          n: n,
          a: a,
          r: r,
          i: i,
          s: s,
          u: u,
          c: c
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(42);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this,
            a = this.options.context || {},
            r = a.what_to_sendpv_ut || {},
            i = a.where_to_sendlog_ut || {},
            s = r.pvdataToUt || {},
            u = i.aplusToUT || {},
            c = u.toUT;
        if (o.isNative4Aplus()) return u.toutflag = "toUT", i.toUTName = "toUT", void (n.options.context.what_to_sendpv_ut.isSuccess = !0);
        if (c && "function" == typeof c.toUT2 && c.isAvailable) try {
          u.toutflag = "toUT", c.toUT2(s, function () {
            minerva_hook.beforeFunction("null", this, arguments);
            n.options.context.what_to_sendpv_ut.isSuccess = !0, e();
            minerva_hook.afterFunction("null", this, {});
          }, function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            n.options.context.what_to_sendpv_ut.errorMsg = t, e();
            minerva_hook.afterFunction("null", this, {});
          }, 2e3);
        } catch (t) {
          e();
        } finally {
          return "pause";
        }
        minerva_hook.afterFunction("null", this, {
          n: n,
          a: a,
          r: r,
          i: i,
          s: s,
          u: u,
          c: c
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(37),
      a = n(25);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = goldlog._$ || {},
            e = this.options.context || {};
        a.setGoldlogVal("pv_context", e);
        var n = goldlog.spm_ab || [],
            r = n.join("."),
            i = t.send_pv_count,
            s = {
          cna: e.etag.cna,
          count: i,
          spmab_pre: goldlog.spmab_pre
        };
        o.doPubMsg(["sendPV", "complete", r, s]), o.doCachePubs(["sendPV", "complete", r, s]);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          r: r,
          i: i,
          s: s
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  e.plugins_prepv = [];
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    var t = i.getGoldlogVal("_$") || {},
        e = "//gm.mmstat.com/";
    _minerva_ret = (t.is_terminal && (e = "//wgo.mmstat.com/"), {
      where_to_hjlj: {
        url: e,
        ac_atpanel: "//ac.mmstat.com/",
        tblogUrl: "//log.mmstat.com/"
      }
    });
    minerva_hook.afterFunction("o", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a() {
    minerva_hook.beforeFunction("a", this, arguments);
    _minerva_ret = r.assign(new s(), new o());
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var r = n(9),
      i = n(25),
      s = n(67);
  t.exports = a;
  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    s: s
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    _minerva_ret = {
      compose: {},
      basic_params: {
        cna: a.getCookie("cna")
      },
      where_to_hjlj: {
        url: "//gm.mmstat.com/",
        ac_atpanel: "//ac.mmstat.com/",
        tblogUrl: "//log.mmstat.com/"
      },
      userdata: {},
      what_to_hjlj: {
        logdata: {}
      },
      what_to_pvhash: {
        hash: []
      },
      what_to_hjlj_exinfo: {
        EXPARAMS_FLAG: "EXPARAMS",
        exinfo: [],
        exparams_key_names: ["uidaplus", "pc_i", "pu_i"]
      },
      what_to_hjlj_ut: {
        logdataToUT: {}
      },
      what_to_hjlj_ut2: {
        isSuccess: !1,
        logdataToUT: {}
      },
      where_to_sendlog_ut: {
        aplusToUT: {},
        toUTName: "toUT"
      },
      network: {
        connType: "UNKNOWN"
      },
      is_single: !1
    };
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var a = n(11);
  t.exports = o;
  minerva_hook.afterFunction("null", this, {
    a: a
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  e.plugins_hjlj = [{
    name: "etag",
    enable: !0,
    path: n(36)
  }, {
    name: "where_to_sendlog_ut",
    enable: !0,
    path: n(39)
  }, {
    name: "is_single",
    enable: !0,
    path: n(41)
  }, {
    name: "what_to_hjlj_exinfo",
    enable: !0,
    path: n(69)
  }, {
    name: "what_to_pvhash",
    enable: !0,
    path: n(45)
  }, {
    name: "what_to_hjlj",
    enable: !0,
    path: n(70),
    deps: ["what_to_hjlj_exinfo", "what_to_pvhash"]
  }, {
    name: "what_to_hjlj_ut2",
    enable: n(56),
    path: n(71),
    deps: ["is_single", "what_to_hjlj_exinfo"]
  }, {
    name: "what_to_hjlj_ut",
    enable: n(56),
    path: n(72),
    deps: ["is_single", "what_to_hjlj_exinfo"]
  }, {
    name: "what_to_hjlj_slog",
    enable: !0,
    path: n(73),
    deps: ["what_to_hjlj"]
  }, {
    name: "where_to_hjlj",
    enable: !0,
    path: n(74),
    deps: ["is_single", "what_to_hjlj"]
  }, {
    name: "do_sendhjlj",
    enable: !0,
    path: n(75),
    deps: ["is_single", "what_to_hjlj", "where_to_hjlj"]
  }, {
    name: "do_sendhjlj_ut2",
    enable: n(56),
    path: n(76),
    deps: ["what_to_hjlj", "what_to_hjlj_ut2", "where_to_sendlog_ut"]
  }, {
    name: "do_sendhjlj_ut",
    path: n(77),
    deps: ["what_to_hjlj", "what_to_hjlj_ut", "where_to_sendlog_ut"]
  }];
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(18),
      a = n(30),
      r = n(25),
      i = n(25),
      s = n(12),
      u = n(11);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getCookieUserInfo: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = [],
            e = u.getCookie("workno") || u.getCookie("emplId");
        e && t.push("workno=" + e);
        var n = u.getHng();
        _minerva_ret = (n && t.push("_hng=" + u.getHng()), t);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      filterExinfo: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = "";

        try {
          t && ("string" == typeof t ? e = t.replace(/&amp;/g, "&").replace(/\buser(i|I)d=/, "uidaplus=").replace(/&aplus&/, "&") : "object" == typeof t && (e = o.obj2param(t, !0)));
        } catch (t) {
          e = t.message ? t.message : "";
        }

        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getExparamsFlag: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = t.what_to_hjlj_exinfo || {};
        _minerva_ret = e.EXPARAMS_FLAG || "EXPARAMS";
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getCustomExParams: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = "";
        _minerva_ret = (t !== this.getExparamsFlag() && (e = this.filterExinfo(t) || ""), e ? e.split("&") : []);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getBeaconExparams: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = [],
            r = a.getExParams(o) || "";
        r = r.replace(/&aplus&/, "&");

        for (var i = o.param2arr(r) || [], u = function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = s.indexof(t, e) > -1;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, c = 0; c < i.length; c++) {
          var l = i[c],
              p = l[0] || "",
              g = l[1] || "";
          p && g && (e === this.getExparamsFlag() || u(p)) && n.push(p + "=" + g);
        }

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getExinfo: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this.options.context || {},
            n = e.what_to_hjlj_exinfo || {},
            o = n.exparams_key_names || [],
            a = this.getBeaconExparams(o, t);
        _minerva_ret = a;
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getExData: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = [];
        if ("object" == typeof t) for (var n in t) {
          var o = t[n];
          n && o && "object" != typeof o && "function" != typeof o && e.push(n + "=" + o);
        }
        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      doConcatArr: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e && e.length > 0 && (t = t.concat(e)), t);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          var t = this.options.context.what_to_hjlj_exinfo || {},
              e = r.getGoldlogVal("_$") || {},
              n = e.meta_info || {},
              o = n["aplus-exinfo"] || "",
              a = n["aplus-exdata"] || "",
              s = [];
          s = this.doConcatArr(s, t.exinfo || []), s = this.doConcatArr(s, this.getExinfo(o)), s = this.doConcatArr(s, this.getCookieUserInfo()), s = this.doConcatArr(s, this.getCustomExParams(o)), s = this.doConcatArr(s, this.getExData(a)), t.exinfo = s.join("&"), this.options.context.what_to_hjlj_exinfo = t;
        } catch (t) {
          i.logger({
            msg: t ? t.message : ""
          });
        }

        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(30),
      a = n(18),
      r = n(11),
      i = n(9),
      s = n(4);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getParams: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = t.userdata || {},
            n = t.basic_params || {},
            u = t.what_to_hjlj_exinfo || {},
            c = u.exinfo || "",
            l = t.etag || {},
            p = l.cna || n.cna || r.getCookie("cna"),
            g = e.gmkey,
            f = "";
        e.gokey && c ? f = [e.gokey, c].join("&") : e.gokey ? f = e.gokey : c && (f = c);

        var d = t.what_to_pvhash || {},
            _ = d.hash || [];

        _.length && (f += "&" + _.join("=")), f += "&jsver=" + s.script_name, f += "&lver=" + s.lver, f += "&pver=" + goldlog.aplus_cplugin_ver, f += "&cache=" + i.makeCacheNum(), f += "&page_cna=" + p;
        var h = {
          gmkey: g || "",
          gokey: f,
          cna: p
        };

        try {
          var m = location.href.substring(0, 1200);
          m && (h._p_url = goldlog.getMetaInfo("aplus-p-url") || m);
        } catch (t) {}

        e["spm-cnt"] && (h["spm-cnt"] = e["spm-cnt"]), e["spm-pre"] && (h["spm-pre"] = e["spm-pre"]);

        try {
          var v = o.getExParams(a),
              b = a.param2obj(v).uidaplus;
          b && (h._gr_uid_ = b);
          var y = a.param2obj(f).uidaplus;
          y && (h.uidaplus = y);
        } catch (t) {}

        _minerva_ret = h;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          u: u,
          c: c,
          l: l,
          p: p,
          g: g,
          f: f,
          d: d,
          _: _,
          h: h,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options.context.what_to_hjlj.logdata = this.getParams();
        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(43),
      a = n(25),
      r = n(4);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getToUtData: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = a.getGoldlogVal("_$") || {},
            i = n.spm || {},
            s = this.options.context.userdata || {},
            u = this.options.context.basic_params || {},
            c = this.options.context || {},
            l = c.what_to_hjlj_exinfo || {},
            p = l.exinfo || "",
            g = "";
        s.gokey && p ? g = [s.gokey, p].join("&") : s.gokey ? g = s.gokey : p && (g = p);
        var f = {};
        f.functype = "ctrl", f.funcId = o.getFunctypeValue2({
          logkey: s.logkey,
          gmkey: s.gmkey,
          spm_ab: a.getGoldlogVal("spm_ab")
        }), f.url = goldlog.getMetaInfo("aplus-pagename") || location.origin + location.pathname, f.logkey = s.logkey, f.gokey = encodeURIComponent(g), f.gmkey = s.gmkey, f._ish5 = "1", f._h5url = location.href, f._is_g2u_ = t ? 1 : 2, f._toUT = 2, f._bridgeName = e.bridgeName || "", f._bridgeVersion = e.bridgeVersion || "", f["spm-cnt"] = i.spm_cnt || "", f["spm-url"] = i.spm_url || "", f["spm-pre"] = i.spm_pre || "", f.cna = u.cna, f.lver = r.lver, f.jsver = r.script_name, s.hasOwnProperty("autosend") && (f.autosend = s.autosend);
        var d = goldlog.getMetaInfo("aplus-utparam");
        _minerva_ret = (d && (f["utparam-cnt"] = JSON.stringify(d)), f);
        minerva_hook.afterFunction("null", this, {
          n: n,
          i: i,
          s: s,
          u: u,
          c: c,
          l: l,
          p: p,
          g: g,
          f: f,
          d: d,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = t.what_to_hjlj_ut2 || {},
            n = !!t.is_single,
            o = t.where_to_sendlog_ut || {},
            a = o.aplusToUT || {},
            r = a.toUT2 || {};
        e.logdataToUT = this.getToUtData(n, r), this.options.context.what_to_hjlj_ut2 = e;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          o: o,
          a: a,
          r: r
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(43),
      a = n(11),
      r = n(25),
      i = n(4);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getToUtData: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = r.getGoldlogVal("_$") || {},
            s = n.spm || {},
            u = this.options.context || {},
            c = u.userdata || {},
            l = u.what_to_hjlj_exinfo || {},
            p = l.exinfo || "",
            g = "";
        c.gokey && p ? g = [c.gokey, p].join("&") : c.gokey ? g = c.gokey : p && (g = p);
        var f = {
          gmkey: c.gmkey,
          gokey: g,
          lver: i.lver,
          jsver: i.script_name,
          version: i.toUtVersion,
          spm_cnt: s.spm_cnt || "",
          spm_url: s.spm_url || "",
          spm_pre: s.spm_pre || ""
        };
        f._is_g2u_ = t ? 1 : 2, f._bridgeName = e.bridgeName || "", f.bridgeVersion = e.bridgeVersion || "", f._toUT = 1;

        try {
          f = JSON.stringify(f), "{}" == f && (f = "");
        } catch (t) {
          f = "";
        }

        var d = n.meta_info || {},
            _ = d.isonepage_data || {},
            h = {};

        _minerva_ret = (h.functype = o.getFunctypeValue({
          logkey: c.logkey,
          gmkey: c.gmkey,
          spm_ab: r.getGoldlogVal("spm_ab")
        }), h.spmcnt = s.spm_cnt || "", h.spmurl = s.spm_url || "", h.spmpre = s.spm_pre || "", h.logkey = c.logkey, h.logkeyargs = f, h.urlpagename = _.urlpagename, h.url = location.href, h.cna = a.getCookie("cna") || "", h.extendargs = "", h.isonepage = _.isonepage, h);
        minerva_hook.afterFunction("null", this, {
          n: n,
          s: s,
          u: u,
          c: c,
          l: l,
          p: p,
          g: g,
          f: f,
          d: d,
          _: _,
          h: h,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = !!t.is_single,
            n = t.what_to_hjlj_ut || {},
            o = t.where_to_sendlog_ut || {},
            a = o.aplusToUT || {},
            r = a.toUT || {};
        n.logdataToUT = this.getToUtData(e, r), this.options.context.what_to_hjlj_ut = n;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n,
          o: o,
          a: a,
          r: r
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = t.is_single ? "1" : "0";
        t.what_to_hjlj_ut2.logdataToUT._slog = e, t.what_to_hjlj_ut.logdataToUT._slog = e;
        var n = ["_slog=" + e];

        if (t.ut_is_available) {
          var o = t.is_single ? "1" : "2";
          n.push("_is_g2u=" + o);
        }

        t.what_to_hjlj.logdata.gokey ? t.what_to_hjlj.logdata.gokey += "&" + n.join("&") : t.what_to_hjlj.logdata.gokey = n.join("&");
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(18),
      a = n(9),
      r = n(25),
      i = n(24),
      s = n(26);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getMetaInfo: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = r.getGoldlogVal("_$") || {},
            e = t.meta_info || s.getInfo();
        _minerva_ret = e;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getAplusMetaByKey: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this.getMetaInfo() || {};
        _minerva_ret = e[t];
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      cramUrl: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = r.getGoldlogVal("_$") || {},
            n = e.spm || {},
            o = this.options.context.where_to_hjlj || {},
            i = o.ac_atpanel,
            s = o.tblogUrl,
            u = this.options.context.what_to_hjlj || {},
            c = this.options.context.userdata || {},
            l = !0,
            p = c.logkey;
        if (!p) return {
          url: t,
          logkey_available: !1
        };
        if ("ac" == p) t = i + "1.gif";else if (a.isStartWith(p, "ac-")) t = i + p.substr(3);else if (a.isStartWith(p, "/")) {
          t += p.substr(1);
          var g = u.logdata || {};
          g["spm-cnt"] = n.spm_cnt, g.logtype = 2;

          try {
            u.logdata = g, this.options.context.what_to_hjlj = u;
          } catch (t) {}
        } else a.isEndWith(p, ".gif") ? t = s + p : l = !1;
        _minerva_ret = {
          url: t,
          logkey_available: l
        };
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          o: o,
          i: i,
          s: s,
          u: u,
          c: c,
          l: l,
          p: p,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      can_to_sendhjlj: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        var e = this.options.context || {},
            n = e.logger || function () {
          minerva_hook.beforeFunction("null", this, arguments);
          minerva_hook.afterFunction("null", this, {});
        },
            o = this.options.context.userdata || {};

        _minerva_ret = !!t.logkey_available || (n({
          msg: "logkey: " + o.logkey + " is not legal!"
        }), !1);
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = !!this.options.context.is_single;

        if (!t) {
          var e,
              n,
              a = o.filterIntUrl(this.options.context.where_to_hjlj.url),
              r = this.getAplusMetaByKey("aplus-rhost-g"),
              s = r && o.hostValidity(r);
          s && (e = /^\/\//.test(r) ? "" : "//", n = /\/$/.test(r) ? "" : "/", a = e + r + n), r && !s && i.logger({
            msg: "aplus-rhost-g: " + r + ' is invalid, suggestion: "xxx.mmstat.com"'
          });
          var u = this.cramUrl(a);
          return this.can_to_sendhjlj(u) ? void (this.options.context.where_to_hjlj.url = u.url) : "done";
        }

        minerva_hook.afterFunction("null", this, {
          t: t
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(25);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.options.context || {},
            e = this.options.config || {},
            n = !!t.is_single;

        if (!n) {
          var a = t.logger || {},
              r = t.what_to_hjlj || {},
              i = t.where_to_hjlj || {},
              s = r.logdata || {},
              u = i.url || "";
          u || "function" != typeof a || a({
            msg: "warning: where_to_hjlj.url is null, goldlog.record failed!"
          });
          var c = goldlog.getMetaInfo("aplus-channel");

          if ("WS-ONLY" !== c) {
            var l = goldlog.send(i.url, s, e.method || "GET");
            o.setGoldlogVal("req", l);
          }
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          n: n
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(42);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);

        var n = this,
            a = this.options.context || {},
            r = a.logger || function () {
          minerva_hook.beforeFunction("null", this, arguments);
          minerva_hook.afterFunction("null", this, {});
        },
            i = a.what_to_hjlj_ut2 || {},
            s = a.where_to_sendlog_ut || {},
            u = !!a.is_single,
            c = i.logdataToUT || {},
            l = s.aplusToUT || {},
            p = l.toUT2;

        if (o.isNative4Aplus()) return l.toutflag = "toUT2", s.toUTName = "toUT2", void (n.options.context.what_to_hjlj_ut2.isSuccess = !0);
        if (p && "function" == typeof p.toUT2 && p.isAvailable) try {
          l.toutflag = "toUT2", p.toUT2(c, function () {
            minerva_hook.beforeFunction("null", this, arguments);
            n.options.context.what_to_hjlj_ut2.isSuccess = !0, e();
            minerva_hook.afterFunction("null", this, {});
          }, function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            n.options.context.what_to_hjlj_ut2.errorMsg = t, e();
            minerva_hook.afterFunction("null", this, {});
          }, 2e3);
        } catch (t) {
          u && r({
            msg: "warning: singleSendHjlj toUTName = toUT2 errorMsg:" + t.message
          });
        } finally {
          return "pause";
        }
        minerva_hook.afterFunction("null", this, {
          n: n,
          a: a,
          r: r,
          i: i,
          s: s,
          u: u,
          c: c,
          l: l,
          p: p
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(42);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.options = t;
        minerva_hook.afterFunction("null", this, {});
      },
      run: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);

        var n = this,
            a = this.options.context || {},
            r = a.what_to_hjlj_ut2.isSuccess,
            i = a.logger || function () {
          minerva_hook.beforeFunction("null", this, arguments);
          minerva_hook.afterFunction("null", this, {});
        },
            s = !!a.is_single,
            u = a.where_to_sendlog_ut || {},
            c = a.what_to_hjlj_ut || {},
            l = c.logdataToUT || {},
            p = u.aplusToUT || {},
            g = p.toUT;

        if (o.isNative4Aplus()) return p.toutflag = "toUT", u.toUTName = "toUT", void (n.options.context.what_to_hjlj_ut.isSuccess = !0);
        if (!r && g && "function" == typeof g.toUT2 && g.isAvailable) try {
          p.toutflag = "toUT", g.toUT2(l, function () {
            minerva_hook.beforeFunction("null", this, arguments);
            n.options.context.what_to_hjlj_ut.isSuccess = !0, e();
            minerva_hook.afterFunction("null", this, {});
          }, function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            n.options.context.what_to_hjlj_ut.errorMsg = t, e();
            minerva_hook.afterFunction("null", this, {});
          }, 3e3);
        } catch (t) {
          s && i({
            msg: "warning: singleSend toUTName = " + u.toUTName + " errorMsg:" + t.message
          });
        } finally {
          return "pause";
        }
        minerva_hook.afterFunction("null", this, {
          n: n,
          a: a,
          r: r,
          i: i,
          s: s,
          u: u,
          c: c,
          l: l,
          p: p,
          g: g
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    var t,
        e,
        n = i.KEY || {},
        o = n.NAME_STORAGE || {};

    if (!c && u) {
      var a = location.href,
          l = u && (a.indexOf("login.taobao.com") >= 0 || a.indexOf("login.tmall.com") >= 0),
          p = s.getRefer();
      l && p ? (t = p, e = r.getItem(o.REFERRER_PV_ID)) : (t = a, e = goldlog.pvid), r.setItem(o.REFERRER, t), r.setItem(o.REFERRER_PV_ID, e);
    }

    minerva_hook.afterFunction("o", this, {
      t: t,
      e: e,
      n: n,
      o: o
    });
  }

  var a = n(79),
      r = n(54).nameStorage,
      i = n(4),
      s = n(53),
      u = "https:" == location.protocol,
      c = parent !== self;

  e.run = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = "beforeunload";
    a.on(window, t, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      o();
      minerva_hook.afterFunction("null", this, {});
    });
    minerva_hook.afterFunction("null", this, {
      t: t
    });
  };

  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t, e, n) {
    minerva_hook.beforeFunction("o", this, arguments);
    var o = goldlog._$ || {},
        a = o.meta_info || {},
        r = a.aplus_ctap || {},
        i = a["aplus-touch"];
    if (r && "function" == typeof r.on) r.on(t, e);else {
      var u = ("ontouchend" in document.createElement("div"));
      !u || "tap" !== i && "tapSpm" !== n ? s(t, u ? "touchstart" : "mousedown", e) : c.on(t, e);
    }
    minerva_hook.afterFunction("o", this, {
      o: o,
      a: a,
      r: r,
      i: i
    });
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);

    try {
      p.documentElement.doScroll("left");
    } catch (e) {
      return void setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        a(t);
        minerva_hook.afterFunction("null", this, {});
      }, 1);
    }

    t();
    minerva_hook.afterFunction("a", this, {});
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);

    var e = 0,
        n = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      0 === e && t(), e++;
      minerva_hook.afterFunction("null", this, {});
    };

    "complete" === p.readyState && n();
    var o;
    if (p.addEventListener) o = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      p.removeEventListener("DOMContentLoaded", o, !1), n();
      minerva_hook.afterFunction("null", this, {});
    }, p.addEventListener("DOMContentLoaded", o, !1), window.addEventListener("load", n, !1);else if (p.attachEvent) {
      o = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        "complete" === p.readyState && (p.detachEvent("onreadystatechange", o), n());
        minerva_hook.afterFunction("null", this, {});
      }, p.attachEvent("onreadystatechange", o), window.attachEvent("onload", n);
      var r = !1;

      try {
        r = null === window.frameElement;
      } catch (t) {}

      p.documentElement.doScroll && r && a(n);
    }
    minerva_hook.afterFunction("r", this, {
      e: e,
      n: n,
      o: o
    });
  }

  function i(t) {
    minerva_hook.beforeFunction("i", this, arguments);
    "complete" === p.readyState ? t() : s(l, "load", t);
    minerva_hook.afterFunction("i", this, {});
  }

  function s() {
    minerva_hook.beforeFunction("s", this, arguments);
    var t = arguments;
    if (2 === t.length) "DOMReady" === t[0] && r(t[1]), "onload" === t[0] && i(t[1]);else if (3 === t.length) {
      var e = t[0],
          n = t[1],
          a = t[2];
      "tap" === n || "tapSpm" === n ? o(e, a, n) : e[_]((g ? "on" : "") + n, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = t || l.event;
        var e = t.target || t.srcElement;
        "function" == typeof a && a(t, e);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e
        });
      }, !!u(n) && {
        passive: !0
      });
    }
    minerva_hook.afterFunction("s", this, {
      t: t
    });
  }

  var u = n(80),
      c = n(81),
      l = window,
      p = document,
      g = !!p.attachEvent,
      f = "attachEvent",
      d = "addEventListener",
      _ = g ? f : d;

  e.DOMReady = r, e.onload = i, e.on = s;
  minerva_hook.afterFunction("null", this, {
    u: u,
    c: c,
    l: l,
    p: p,
    g: g,
    f: f,
    d: d,
    _: _
  });
}, function (t, e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var n;

  t.exports = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    if ("boolean" == typeof n) return n;
    if (!/touch|mouse|scroll|wheel/i.test(t)) return !1;
    n = !1;

    try {
      var e = Object.defineProperty({}, "passive", {
        get: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          n = !0;
          minerva_hook.afterFunction("null", this, {
            n: n
          });
        }
      });
      window.addEventListener("test", null, e);
    } catch (t) {}

    _minerva_ret = n;
    minerva_hook.afterFunction("null", this, {
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    n: n
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t, e) {
    minerva_hook.beforeFunction("n", this, arguments);
    _minerva_ret = t + Math.floor(Math.random() * (e - t + 1));
    minerva_hook.afterFunction("n", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function o(t, e, n) {
    minerva_hook.beforeFunction("o", this, arguments);
    var o = l.createEvent("HTMLEvents");
    if (o.initEvent(e, !0, !0), "object" == typeof n) for (var a in n) o[a] = n[a];
    t.dispatchEvent(o);
    minerva_hook.afterFunction("o", this, {
      o: o
    });
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    0 === Object.keys(g).length && (p.addEventListener(_, r, !1), p.addEventListener(d, i, !1), p.addEventListener(m, i, !1));

    for (var e = 0; e < t.changedTouches.length; e++) {
      var n = t.changedTouches[e],
          o = {};

      for (var a in n) o[a] = n[a];

      var s = {
        startTouch: o,
        startTime: Date.now(),
        status: h,
        element: t.srcElement || t.target
      };
      g[n.identifier] = s;
    }

    minerva_hook.afterFunction("a", this, {});
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);

    for (var e = 0; e < t.changedTouches.length; e++) {
      var n = t.changedTouches[e],
          o = g[n.identifier];
      if (!o) return;
      var a = n.clientX - o.startTouch.clientX,
          r = n.clientY - o.startTouch.clientY,
          i = Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2));
      (o.status === h || "pressing" === o.status) && i > 10 && (o.status = "panning");
    }

    minerva_hook.afterFunction("r", this, {});
  }

  function i(t) {
    minerva_hook.beforeFunction("i", this, arguments);

    for (var e = 0; e < t.changedTouches.length; e++) {
      var n = t.changedTouches[e],
          a = n.identifier,
          s = g[a];
      s && (s.status === h && t.type === d && (s.timestamp = Date.now(), o(s.element, v, {
        touch: n,
        touchEvent: t
      })), delete g[a]);
    }

    0 === Object.keys(g).length && (p.removeEventListener(_, r, !1), p.removeEventListener(d, i, !1), p.removeEventListener(m, i, !1));
    minerva_hook.afterFunction("i", this, {});
  }

  function s(t) {
    minerva_hook.beforeFunction("s", this, arguments);
    t.__fixTouchEvent || (t.addEventListener(f, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    }, !1), t.__fixTouchEvent = !0);
    minerva_hook.afterFunction("s", this, {});
  }

  function u() {
    minerva_hook.beforeFunction("u", this, arguments);
    c || (p.addEventListener(f, a, !1), c = !0);
    minerva_hook.afterFunction("u", this, {});
  }

  var c = !1,
      l = window.document,
      p = l.documentElement,
      g = {},
      f = "touchstart",
      d = "touchend",
      _ = "touchmove",
      h = "tapping",
      m = "touchcancel",
      v = "aplus_tap" + n(1, 1e5);
  t.exports = {
    on: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      u(), t && t.addEventListener && e && (s(t), t.addEventListener(v, e._aplus_tap_callback = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e(t, t.target);
        minerva_hook.afterFunction("null", this, {});
      }, !1));
      minerva_hook.afterFunction("null", this, {});
    },
    un: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      t && t.removeEventListener && e && e._aplus_tap_callback && t.removeEventListener(v, e._aplus_tap_callback, !1);
      minerva_hook.afterFunction("null", this, {});
    }
  };
  minerva_hook.afterFunction("null", this, {
    c: c,
    l: l,
    p: p,
    g: g,
    f: f,
    d: d,
    _: _,
    h: h,
    m: m,
    v: v
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);

    var t = new Date().getTime(),
        e = Math.floor(t / 72e5),
        n = a.getElementById("aplus-sufei"),
        o = goldlog._$ || {},
        s = goldlog.getCdnPath(),
        u = s + "/alilog/aplus_plugin_xwj/index.js?t=" + e,
        c = s + "/alilog/stat/a.js?t=" + e,
        l = s + "/secdev/entry/index.js?t=" + e,
        p = s + "/sd/baxia-entry/index.js?t=" + e,
        g = s + "/alilog/mlog/wp_beacon.js?t=" + e,
        f = o.meta_info,
        d = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      r.addScript(c), r.addScript(g), r.addScript(u);
      minerva_hook.afterFunction("null", this, {});
    },
        _ = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      Math.random() < .01 && r.addScript(c), f.ms_data_instance_id && f.ms_prototype_id && f.ms_prototype_id.match(/^[124]$/) && f.ms_data_shop_id && r.addScript(g);
      var t = f["aplus-rate-ahot"];
      (Math.random() < t || f["ahot-aplus"]) && r.addScript(u);
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    },
        h = f["aplus-xplug"];

    i.onload(function () {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        switch (h) {
          case "NONE":
            break;

          case "ALL":
            d();
            break;

          default:
            _();

        }
      } catch (t) {}

      minerva_hook.afterFunction("null", this, {});
    }), "NONE" !== h && (r.addScript(p, "", "aplus-baxia"), setTimeout(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      n && "script" == n.tagName.toLowerCase() || r.addScript(l, "", "aplus-sufei");
      minerva_hook.afterFunction("null", this, {});
    }, 10));
    minerva_hook.afterFunction("o", this, {
      t: t,
      e: e,
      n: n,
      o: o,
      s: s,
      u: u,
      c: c,
      l: l,
      p: p,
      g: g,
      f: f,
      d: d,
      _: _,
      h: h
    });
  }

  var a = document,
      r = n(30),
      i = n(79),
      s = n(83);
  e.run = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    o();
    minerva_hook.afterFunction("null", this, {});
  }, e.init_watchGoldlogQueue = s.init_watchGoldlogQueue;
  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r,
    i: i,
    s: s
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t, e) {
    minerva_hook.beforeFunction("o", this, arguments);

    for (var n = {
      subscribeMwChangeQueue: [],
      subscribeMetaQueue: [],
      subscribeQueue: [],
      metaQueue: [],
      othersQueue: []
    }, o = [], a = {}; a = t.shift();) try {
      var r = a.action,
          i = a.arguments[0];
      /subscribe/.test(r) ? "setMetaInfo" === i ? n.subscribeMetaQueue.push(a) : "mw_change_pv" === i || "mw_change_hjlj" === i ? n.subscribeMwChangeQueue.push(a) : n.subscribeQueue.push(a) : /MetaInfo/.test(r) ? n.metaQueue.push(a) : n.othersQueue.push(a);
    } catch (t) {
      n.othersQueue.push(a), u.do_tracker_jserror({
        message: t && t.message,
        error: encodeURIComponent(t.stack),
        filename: "getFormatQueue"
      });
    }

    var s;
    _minerva_ret = (e && n[e] && (s = n[e], n[e] = []), o = n.subscribeMwChangeQueue.concat(n.metaQueue), o = o.concat(n.subscribeQueue), o = o.concat(n.subscribeMetaQueue, n.othersQueue), {
      queue: o,
      formatQueue: s
    });
    minerva_hook.afterFunction("o", this, {
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var a = window,
      r = n(9),
      i = n(84),
      s = n(85),
      u = n(3),
      c = "goldlog_queue",
      l = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      /_aplus_cplugin_track_deb/.test(t) || /_aplus_cplugin_m/.test(t) || u.do_tracker_jserror({
        message: n || 'illegal task: goldlog_queue.push("' + JSON.stringify(e) + '")',
        error: JSON.stringify(e),
        filename: "processTask"
      });
    } catch (t) {}

    minerva_hook.afterFunction("null", this, {});
  },
      p = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = t ? t.action : "",
        o = t ? t.arguments : "";

    try {
      if (n && o && r.isArray(o)) {
        var i = n.split("."),
            s = a,
            u = a;
        if (3 === i.length) s = a[i[0]][i[1]] || {}, u = s[i[2]] ? s[i[2]] : "";else for (; i.length;) if (u = s = s[i.shift()], !s) return void ("function" == typeof e ? e(t) : l(n, t));
        "function" == typeof u && u.apply(s, o);
      } else l(n, t);
    } catch (e) {
      l(n, t, e.message);
    }

    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o
    });
  },
      g = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);

      if (t && r.isArray(t) && t.length) {
        for (var e = o(t).queue, n = {}, a = []; n = e.shift();) p(n, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          a.push(t);
          minerva_hook.afterFunction("null", this, {});
        });

        a.length > 0 && setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);

          for (; n = a.shift();) p(n);

          minerva_hook.afterFunction("null", this, {});
        }, 100);
      }

      minerva_hook.afterFunction("e", this, {});
    }

    try {
      e();
    } catch (t) {
      u.do_tracker_jserror({
        message: t && t.message,
        error: encodeURIComponent(t.stack),
        filename: "processGoldlogQueue"
      });
    }

    minerva_hook.afterFunction("null", this, {});
  };

  e.processGoldlogQueue = g;
  var f = i.extend({
    push: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      this.length++, p(t);
      minerva_hook.afterFunction("null", this, {});
    }
  });

  e.init_watchGoldlogQueue = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      var e = a[c] || [];

      if (t) {
        var n = o(e, t);
        a[c] = n.queue, g(n.formatQueue);
      } else a[c] = f.create({
        startLength: e.length,
        length: 0
      }), s.init_loadAplusPlugin(), g(e);
    } catch (t) {
      u.do_tracker_jserror({
        message: t && t.message,
        error: encodeURIComponent(t.stack),
        filename: "init_watchGoldlogQueue"
      });
    }

    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g,
    f: f
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n() {
    minerva_hook.beforeFunction("n", this, arguments);
    minerva_hook.afterFunction("n", this, {});
  }

  n.prototype.extend = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    minerva_hook.afterFunction("null", this, {});
  }, n.prototype.create = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    minerva_hook.afterFunction("null", this, {});
  }, n.extend = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = this.prototype.extend.call(this, t);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.create = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = new this();

    for (var n in t) e[n] = t[n];

    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.extend = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    var e = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    };

    try {
      "function" != typeof Object.create && (Object.create = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        function e() {
          minerva_hook.beforeFunction("e", this, arguments);
          minerva_hook.afterFunction("e", this, {});
        }

        _minerva_ret = (e.prototype = t, new e());
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }), e.prototype = Object.create(this.prototype);

      for (var n in t) e.prototype[n] = t[n];

      e.prototype.constructor = e, e.extend = e.prototype.extend, e.create = e.prototype.create;
    } catch (t) {
      console.log(t);
    } finally {
      return e;
    }

    minerva_hook.afterFunction("null", this, {
      e: e
    });
  }, t.exports = n;
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var o = n(30),
      a = n(28),
      r = n(6),
      i = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = goldlog.getCdnPath() + "/alilog/s/" + r.lver + "/plugin/";
    _minerva_ret = {
      aplus_ae_path: t + "aplus_ae.js",
      aplus_ac_path: t + "aplus_ac.js"
    };
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      s = {},
      u = "aplus-auto-exp",
      c = "aplus-auto-clk",
      l = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = i(),
        r = goldlog && goldlog.getMetaInfo ? goldlog.getMetaInfo(t) : "",
        l = e || r || a.getMetaCnt(t),
        p = {};
    p[u] = n.aplus_ae_path, p[c] = n.aplus_ac_path, l && p[t] && !s[t] && (o.addScript(p[t]), s[t] = !0);
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      l: l,
      p: p
    });
  };

  e.init_loadAplusPlugin = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      !goldlog._aplus_auto_exp && l(u), !goldlog._aplus_ac && l(c), goldlog.aplus_pubsub.subscribe("setMetaInfo", function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        t !== u || goldlog._aplus_auto_exp || l(t, e), t !== c || goldlog._aplus_ac || l(t, e);
        minerva_hook.afterFunction("null", this, {});
      });
    } catch (t) {}

    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function n(t, e) {
    minerva_hook.beforeFunction("n", this, arguments);
    _minerva_ret = t.indexOf(e) > -1;
    minerva_hook.afterFunction("n", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function o(t, e) {
    minerva_hook.beforeFunction("o", this, arguments);

    for (var o = 0, a = t.length; o < a; o++) if (n(e, t[o])) return !0;

    _minerva_ret = !1;
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var a = location.host,
      r = ["admin.taobao.org", "mybank.cn"],
      i = ["tmc.admin.taobao.org", "tmall.admin.taobao.org"];
  e.is_exception = o(r, a) && !o(i, a);
  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r,
    i: i
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    var t,
        e,
        n,
        o,
        a = c.getElementsByTagName("meta");

    for (t = 0, e = a.length; t < e; t++) if (n = a[t], o = n.getAttribute("name"), "data-spm" === o || "spm-id" === o) return n;

    minerva_hook.afterFunction("o", this, {
      t: t,
      e: e,
      n: n,
      o: o,
      a: a
    });
  }

  function a() {
    minerva_hook.beforeFunction("a", this, arguments);
    var t = c.createElement("meta");
    t.setAttribute("name", "data-spm");
    var e = c.getElementsByTagName("head")[0];
    _minerva_ret = (e && e.insertBefore(t, e.firstChild), t);
    minerva_hook.afterFunction("a", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r() {
    minerva_hook.beforeFunction("r", this, arguments);
    var t = o();
    t || (t = a()), t.setAttribute("content", goldlog.spm_ab[0] || "");
    var e = c.getElementsByTagName("body")[0];
    e && e.setAttribute("data-spm", goldlog.spm_ab[1] || "");
    minerva_hook.afterFunction("r", this, {
      t: t,
      e: e
    });
  }

  function i() {
    minerva_hook.beforeFunction("i", this, arguments);
    var t,
        e,
        n,
        o = c.getElementsByTagName("*");

    for (t = 0, e = o.length; t < e; t++) n = o[t], n.getAttribute("data-spm-max-idx") && n.setAttribute("data-spm-max-idx", ""), n.getAttribute("data-spm-anchor-id") && n.setAttribute("data-spm-anchor-id", "");

    minerva_hook.afterFunction("i", this, {
      t: t,
      e: e,
      n: n,
      o: o
    });
  }

  function s() {
    minerva_hook.beforeFunction("s", this, arguments);
    var t = 5e3;

    try {
      var e = goldlog.getMetaInfo("aplus-mmstat-timeout");

      if (e) {
        var n = parseInt(e);
        n >= 1e3 && n <= 1e4 && (t = n);
      }
    } catch (t) {}

    _minerva_ret = t;
    minerva_hook.afterFunction("s", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var u = window,
      c = document,
      l = n(84),
      p = n(18),
      g = n(79),
      f = n(30),
      d = n(24),
      _ = n(37),
      h = n(9),
      m = n(25),
      v = n(22),
      b = n(51),
      y = n(26),
      w = y.getInfo(),
      x = n(4),
      T = n(3),
      j = n(88),
      A = n(11),
      P = n(91),
      S = n(93),
      k = [],
      U = [],
      E = [],
      I = [],
      M = "//g.alicdn.com",
      C = "//g-assets.daily.taobao.net",
      N = "//assets.alicdn.com/g",
      O = "//s.alicdn.com/@g/",
      V = "//u.alicdn.com",
      G = "//laz-g-cdn.alicdn.com";

  e.run = l.extend({
    getCdnPath: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = f.getCurrentNode(),
          e = M,
          n = [N, O, C, V, G],
          o = new RegExp(V);
      if (t) for (var a = 0; a < n.length; a++) {
        var r = new RegExp(n[a]);

        if (r.test(t.src)) {
          e = n[a], o.test(t.src) && (e = N);
          break;
        }
      }
      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e,
        n: n,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    isInternational: function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.cdnPath || (this.cdnPath = this.getCdnPath());
      var t = [N, O, G].indexOf(this.cdnPath) > -1;
      _minerva_ret = t || "int" === this.getMetaInfo("aplus-env");
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getCookie: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = A.getCookie(t);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    getParam: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = u.WindVane || {},
          n = e && "function" == typeof e.getParam ? e.getParam(t) : "";
      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    beforeSendPV: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      k.push(t);
      minerva_hook.afterFunction("null", this, {});
    },
    afterSendPV: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      U.push(t);
      minerva_hook.afterFunction("null", this, {});
    },
    send: function (t, e, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      var o;

      if (0 === t.indexOf("//")) {
        var a = v.getProtocal();
        t = a + t;
      }

      _minerva_ret = o = "POST" === n && navigator && navigator.sendBeacon ? S.postData(t, e) : S.sendImg(p.makeUrl(t, e), s());
      minerva_hook.afterFunction("null", this, {
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    launch: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n;

      try {
        e = h.assign(e, t), n = goldlog._$._sendPV(e, t);
        var o = goldlog.spm_ab ? goldlog.spm_ab.join(".") : "0.0";
        T.do_tracker_obsolete_inter({
          page: location.hostname + location.pathname,
          spm_ab: o,
          interface_name: "goldlog.launch",
          interface_params: "userdata = " + JSON.stringify(t) + ", config = " + JSON.stringify(e)
        });
      } catch (t) {} finally {
        return d.logger({
          msg: "warning: This interface is deprecated, please use goldlog.sendPV instead! API: http://log.alibaba-inc.com/log/info.htm?type=2277&id=31"
        }), n;
      }

      minerva_hook.afterFunction("null", this, {
        n: n
      });
    },
    _$: {
      _sendPV: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (t = t || {}, h.any(k, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = e(goldlog, t) === !1;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        })) return !1;
        var o = n(94).SendPV,
            a = new o();
        _minerva_ret = ("undefined" == typeof t.recordType && (t.recordType = x.recordTypes.pv), a.run(t, e, {
          fn_after_pv: U
        }), !0);
        minerva_hook.afterFunction("null", this, {
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _sendPseudo: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        t || (t = {});
        var o = n(95).SendPrePV,
            a = new o();
        _minerva_ret = ("undefined" == typeof t.recordType && (t.recordType = x.recordTypes.prepv), a.run(t, e, {}, function () {
          minerva_hook.beforeFunction("null", this, arguments);

          _.doPubMsg(["sendPrePV", "complete"]);

          minerva_hook.afterFunction("null", this, {});
        }), !0);
        minerva_hook.afterFunction("null", this, {
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    },
    sendPV: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = (e = e || {}, e.pageName && goldlog.setMetaInfo("aplus-pagename", e.pageName), goldlog._$._sendPV(t, e));
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    updatePageProperties: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      t && "object" == typeof t ? (t._page && (t.pageName = t._page, delete t._page), t.pageName && (goldlog.setMetaInfo("aplus-pagename", t.pageName), delete t.pageName), goldlog.appendMetaInfo("aplus-cpvdata", t)) : d.logger({
        msg: "warning: typeof updatePageProperties's params must be object"
      });
      minerva_hook.afterFunction("null", this, {});
    },
    beforeRecord: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      E.push(t);
      minerva_hook.afterFunction("null", this, {});
    },
    afterRecord: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      I.push(t);
      minerva_hook.afterFunction("null", this, {});
    },
    record: function (t, e, n, o, a) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (!h.any(E, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = t(goldlog) === !1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      })) return "POST" !== o && "WS" !== o && "WS-ONLY" !== o && (o = "GET"), j.run({
        recordType: x.recordTypes.hjlj,
        method: o
      }, {
        logkey: t,
        gmkey: e,
        gokey: n
      }, {
        fn_after_record: I
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        "function" == typeof a && a();
        minerva_hook.afterFunction("null", this, {});
      }), !0;
      minerva_hook.afterFunction("null", this, {});
    },
    recordUdata: function (t, e, n, o, a) {
      minerva_hook.beforeFunction("null", this, arguments);
      var r = m.getGoldlogVal("_$") || {},
          i = r.spm || {};
      "POST" !== o && "WS" !== o && "WS-ONLY" !== o && (o = "GET"), j.run({
        ignore_chksum: !0,
        method: o,
        recordType: x.recordTypes.uhjlj
      }, {
        logkey: t,
        gmkey: e,
        gokey: n,
        "spm-cnt": i.spm_cnt,
        "spm-pre": i.spm_pre
      }, {}, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        h.isFunction(a) && a();
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("null", this, {
        r: r,
        i: i
      });
    },
    setPageSPM: function (t, e, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      var o = "setPageSPM",
          a = goldlog.getMetaInfo("aplus-spm-fixed"),
          s = "function" == typeof n ? n : function () {
        minerva_hook.beforeFunction("null", this, arguments);
        minerva_hook.afterFunction("null", this, {});
      };
      goldlog.spm_ab = goldlog.spm_ab || [];
      var u = h.cloneObj(goldlog.spm_ab);

      if (t && (goldlog.spm_ab[0] = "" + t, goldlog._$.spm.data.a = "" + t), e && (goldlog.spm_ab[1] = "" + e, goldlog._$.spm.data.b = "" + e), b.spaInit(goldlog, w, u), "1" !== a) {
        var c = u.join(".");
        goldlog.spmab_pre = c;
      }

      var l = goldlog.spm_ab.join(".");
      _.doPubMsg([o, {
        spmab_pre: goldlog.spmab_pre,
        spmab: l
      }]), _.doCachePubs([o, {
        spmab_pre: goldlog.spmab_pre,
        spmab: l
      }]), r(), i(), s();
      minerva_hook.afterFunction("null", this, {
        o: o,
        a: a,
        s: s,
        u: u,
        l: l
      });
    },
    setMetaInfo: function (t, e, n) {
      minerva_hook.beforeFunction("null", this, arguments);

      if (y.setMetaInfo(t, e, n)) {
        var o = m.getGoldlogVal("_$") || {};
        o.meta_info = y.qGet();
        var a = m.setGoldlogVal("_$", o),
            r = P.isDisablePvid() + "";
        return "aplus-disable-pvid" === t && r !== e + "" && b.resetSpmCntPvid(), _.doPubMsg(["setMetaInfo", t, e, n]), _.doCachePubs(["setMetaInfo", t, e, n]), a;
      }

      minerva_hook.afterFunction("null", this, {});
    },
    appendMetaInfo: y.appendMetaInfo,
    getMetaInfo: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = y.getMetaInfo(t);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    on: g.on,
    cloneDeep: h.cloneDeep,
    getPvId: P.getPvId
  });
  minerva_hook.afterFunction("null", this, {
    u: u,
    c: c,
    l: l,
    p: p,
    g: g,
    f: f,
    d: d,
    _: _,
    h: h,
    m: m,
    v: v,
    b: b,
    y: y,
    w: w,
    x: x,
    T: T,
    j: j,
    A: A,
    P: P,
    S: S,
    k: k,
    U: U,
    E: E,
    I: I,
    M: M,
    C: C,
    N: N,
    O: O,
    V: V,
    G: G
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(9),
      a = n(25),
      r = n(37),
      i = n(24),
      s = n(89),
      u = n(90),
      c = n(4);

  e.run = function (t, e, n, l) {
    minerva_hook.beforeFunction("null", this, arguments);
    var p = new u();
    p.init({
      middleware: [],
      config: t,
      plugins: c.plugins_hjlj
    });
    var g = p.run(),
        f = new c.context_hjlj();
    f.userdata = e, f.logger = i.logger;

    var d = {
      context: f,
      pubsub: a.getGoldlogVal("aplus_pubsub"),
      pubsubType: "hjlj"
    },
        _ = new s();

    _.create(d), _.wrap(g, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      d.context.status = "complete", d.context.method = t.method, r.doPubMsg(["mw_change_hjlj", d.context]), n && n.fn_after_record && o.each(n.fn_after_record, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t(window.goldlog);
        minerva_hook.afterFunction("null", this, {});
      }), "function" == typeof l && l();
      minerva_hook.afterFunction("null", this, {});
    })();
    minerva_hook.afterFunction("null", this, {
      p: p,
      g: g,
      f: f,
      d: d,
      _: _
    });
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    minerva_hook.afterFunction("o", this, {});
  }

  var a = n(12),
      r = n(23),
      i = n(24),
      s = n(3),
      u = n(11);
  o.prototype.create = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e in t) "undefined" == typeof this[e] && (this[e] = t[e]);

    _minerva_ret = this;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, o.prototype.pubsubInfo = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      t && t.pubsub && t.pubsub.publish("mw_change_" + t.pubsubType, t.context, e);
    } catch (t) {}

    minerva_hook.afterFunction("null", this, {});
  }, o.prototype.calledList = [], o.prototype.setCalledList = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    a.indexof(this.calledList, t) === -1 && this.calledList.push(t);
    minerva_hook.afterFunction("null", this, {});
  }, o.prototype.resetCalledList = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    this.calledList = [];
    minerva_hook.afterFunction("null", this, {});
  }, o.prototype.wrap = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = this,
        o = this.context || {},
        c = o.compose || {},
        l = c.maxTimeout || 1e4;

    _minerva_ret = function (o) {
      minerva_hook.beforeFunction("null", this, arguments);

      var c,
          p = t.length,
          g = 0,
          f = 0,
          d = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        if (n.pubsubInfo(n, t[g]), g === p) return o = "done", n.resetCalledList(), "function" == typeof e && e.call(n, o), void clearTimeout(c);

        if (a.indexof(n.calledList, g) === -1) {
          if (n.setCalledList(g), !t[g] || "function" != typeof t[g][0]) return;

          try {
            o = t[g][0].call(n, o, function () {
              minerva_hook.beforeFunction("null", this, arguments);
              g++, f = 1, clearTimeout(c), d(g);
              minerva_hook.afterFunction("null", this, {});
            });
          } catch (e) {
            s.do_tracker_jserror({
              message: e ? e.message : "compose middleware error",
              error: encodeURIComponent(e.stack),
              filename: t[g][1]
            });
          }
        }

        var _ = "number" == typeof o;

        if ("pause" === o || _) {
          f = 0;
          var h = _ ? o : l,
              m = t[g] ? t[g][1] : "";
          c = r.sleep(h, function () {
            minerva_hook.beforeFunction("null", this, arguments);

            if (0 === f) {
              var t = "jump the middleware about " + m + ", because waiting timeout maxTimeout = " + h + "ms!";
              i.logger({
                msg: t
              });
              var e = window.goldlog_queue || (window.goldlog_queue = []);
              e.push({
                action: "goldlog._aplus_cplugin_m.do_tracker_browser_support",
                arguments: [{
                  msg: t,
                  spmab: goldlog.spm_ab,
                  page: location.href,
                  etag: n.context ? JSON.stringify(n.context.etag) : "",
                  cna: document.cookie ? u.getCookie("cna") : ""
                }]
              }), o = null, g++, d(g);
            }

            minerva_hook.afterFunction("null", this, {});
          });
        } else "done" === o ? (g = p, d(g)) : (g++, d(g));

        minerva_hook.afterFunction("null", this, {
          _: _
        });
      };

      _minerva_ret = (n.calledList && n.calledList.length > 0 && n.resetCalledList(), d(g));
      minerva_hook.afterFunction("null", this, {
        c: c,
        p: p,
        g: g,
        f: f,
        d: d,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      c: c,
      l: l,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, t.exports = o;
  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r,
    i: i,
    s: s,
    u: u
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(12);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      init: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.opts = t, t && "object" == typeof t.middleware && t.middleware.length > 0 ? this.middleware = t.middleware : this.middleware = [], this.plugins_name = [];
        minerva_hook.afterFunction("null", this, {});
      },
      pubsubInfo: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);

        try {
          var n = t.pubsub;
          n && n.publish("plugins_change_" + t.pubsubType, e);
        } catch (t) {}

        minerva_hook.afterFunction("null", this, {});
      },
      checkPluginLoader: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = !0;
        if ("object" == typeof e.enable && "function" == typeof e.enable.isEnable ? n = e.enable.isEnable(e.name) : "boolean" == typeof e.enable && (n = !!e.enable), !n) return !1;
        if (n && e.deps && e.deps.length > 0) for (var a = 0; a < e.deps.length; a++) if (o.indexof(this.plugins_name, e.deps[a]) === -1) return !1;
        _minerva_ret = !0;
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      run: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t || (t = 0);
        var e = this,
            n = this.middleware,
            o = this.opts || {},
            a = o.plugins;

        if (a && "object" == typeof a && a.length > 0) {
          var r = a[t];
          if (this.checkPluginLoader(a, r) && (this.plugins_name.push(r.name), n.push([function (t, n) {
            minerva_hook.beforeFunction("null", this, arguments);
            e.pubsubInfo(this, r);
            var a = new r.path();
            _minerva_ret = (a.init({
              context: this.context,
              config: o.config
            }), a.run(t, n));
            minerva_hook.afterFunction("null", this, {
              a: a,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }, r.name])), t++, a[t]) return this.run(t);
        } else window.console && console.log("aplus plugins " + JSON.stringify(a) + " must be object of array!");

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    var t = "true" === l.disablePvid;

    try {
      var e = goldlog.getMetaInfo("aplus-disable-pvid") + "";
      "true" === e ? t = !0 : "false" === e && (t = !1);
    } catch (t) {}

    _minerva_ret = t;
    minerva_hook.afterFunction("o", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);

    function e(t) {
      minerva_hook.beforeFunction("e", this, arguments);
      var e = "0123456789abcdefhijklmnopqrstuvwxyzABCDEFHIJKLMNOPQRSTUVWXYZ",
          n = "0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHIJKMNOPQRSTUVWXYZ";
      _minerva_ret = 1 == t ? e.substr(Math.floor(60 * Math.random()), 1) : 2 == t ? n.substr(Math.floor(60 * Math.random()), 1) : "0";
      minerva_hook.afterFunction("e", this, {
        e: e,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    for (var n, o = "", a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r = !1; o.length < t;) n = a.substr(Math.floor(62 * Math.random()), 1), !r && o.length <= 2 && ("g" == n.toLowerCase() || "l" == n.toLowerCase()) && (0 === o.length && "g" == n.toLowerCase() ? Math.random() < .5 && (n = e(1), r = !0) : 1 == o.length && "l" == n.toLowerCase() && "g" == o.charAt(0).toLowerCase() && (n = e(2), r = !0)), o += n;

    _minerva_ret = o;
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t, e, n) {
    minerva_hook.beforeFunction("r", this, arguments);
    _minerva_ret = t ? u.hash(encodeURIComponent(t)).substr(0, e) : n;
    minerva_hook.afterFunction("r", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i() {
    minerva_hook.beforeFunction("i", this, arguments);
    var t = a(8),
        e = t.substr(0, 4),
        n = t.substr(0, 6);
    _minerva_ret = [r(location.href, 4, e), r(document.title, 4, e), n].join("");
    minerva_hook.afterFunction("i", this, {
      t: t,
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function s() {
    minerva_hook.beforeFunction("s", this, arguments);
    var t = goldlog.pvid;
    _minerva_ret = (goldlog.pvid = i(), c.doPubMsg(["pvidChange", {
      pre_pvid: t,
      pvid: goldlog.pvid
    }]), c.doCachePubs(["pvidChange", {
      pre_pvid: t,
      pvid: goldlog.pvid
    }]), o() ? "" : goldlog.pvid);
    minerva_hook.afterFunction("s", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var u = n(92),
      c = n(37),
      l = n(4);
  e.isDisablePvid = o, e.makePVId = s, e.getPvId = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = o() ? "" : goldlog.pvid;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    u: u,
    c: c,
    l: l
  });
}, function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var n = 1315423911;

  e.hash = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var o,
        a,
        r = e || n;

    for (o = t.length - 1; o >= 0; o--) a = t.charCodeAt(o), r ^= (r << 5) + a + (r >> 2);

    var i = (2147483647 & r).toString(16);
    _minerva_ret = i;
    minerva_hook.afterFunction("null", this, {
      o: o,
      a: a,
      r: r,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    n: n
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    if (!t) return "";
    var e = decodeURIComponent(t).match(/cache=\w+/);
    _minerva_ret = e && 1 === e.length ? e[0].split("=")[1] : void 0;
    minerva_hook.afterFunction("o", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var a = n(3),
      r = window;
  e.sendImg = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = new Image(),
        i = "_img_" + Math.random();
    r[i] = n;

    var s = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      if (r[i]) try {
        delete r[i];
      } catch (t) {
        r[i] = void 0;
      }
      minerva_hook.afterFunction("null", this, {});
    };

    _minerva_ret = (n.onload = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      s();
      minerva_hook.afterFunction("null", this, {});
    }, n.onerror = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      a.do_tracker_jserror({
        message: "loadError",
        error: "",
        filename: "sendImg",
        logid: o(t)
      }), s();
      minerva_hook.afterFunction("null", this, {});
    }, setTimeout(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      window[i] && (a.do_tracker_jserror({
        message: "loadTimeout",
        error: e,
        filename: "sendImg",
        logid: o(t)
      }), window[i].src = "", s());
      minerva_hook.afterFunction("null", this, {});
    }, e || 3e3), n.src = t, n = null, t);
    minerva_hook.afterFunction("null", this, {
      n: n,
      i: i,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.postData = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n;
    if ("string" == typeof e) n = e;else {
      for (var o in e) ["cna"].indexOf(o) === -1 && (e[o] = encodeURIComponent(e[o]));

      n = JSON.stringify(e);
    }
    _minerva_ret = (navigator.sendBeacon(t, n), t);
    minerva_hook.afterFunction("null", this, {
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var o = n(9),
      a = n(25),
      r = n(37),
      i = n(24),
      s = n(89),
      u = n(90),
      c = n(4),
      l = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    minerva_hook.afterFunction("null", this, {});
  };

  l.prototype.run = function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    var l = new u();
    l.init({
      middleware: [],
      config: t,
      plugins: c.plugins_pv
    });
    var p = l.run(),
        g = new c.context();
    g.userdata = e, g.logger = i.logger;
    var f = {
      context: g,
      pubsub: a.getGoldlogVal("aplus_pubsub"),
      pubsubType: "pv"
    },
        d = new s();
    d.create(f), d.wrap(p, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = f.context.can_to_sendpv || {};
      f.context.status = "YES" === e.flag ? "complete" : "skip", f.context.method = t.method || "GET", r.doPubMsg(["mw_change_pv", f.context]), n && n.fn_after_record && o.each(n.fn_after_pv, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        e(window.goldlog, t);
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("null", this, {
        e: e
      });
    })();
    minerva_hook.afterFunction("null", this, {
      l: l,
      p: p,
      g: g,
      f: f,
      d: d
    });
  }, e.SendPV = l;
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var o = n(9),
      a = n(25),
      r = n(37),
      i = n(24),
      s = n(89),
      u = n(90),
      c = n(4),
      l = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    minerva_hook.afterFunction("null", this, {});
  };

  l.prototype.run = function (t, e, n, l) {
    minerva_hook.beforeFunction("null", this, arguments);
    var p = new u();
    p.init({
      middleware: [],
      config: t,
      plugins: c.plugins_prepv
    });
    var g = p.run(),
        f = new c.context_prepv();
    f.userdata = e, f.logger = i.logger;

    var d = {
      context: f,
      pubsub: a.getGoldlogVal("aplus_pubsub"),
      pubsubType: "prepv"
    },
        _ = new s();

    _.create(d), _.wrap(g, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      d.context.status = "complete", r.doPubMsg(["mw_change_prepv", d.context]), n && n.fn_after_record && o.each(n.fn_after_pv, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        e(window.goldlog, t);
        minerva_hook.afterFunction("null", this, {});
      }), a.setGoldlogVal("prepv_context", f), "function" == typeof l && l();
      minerva_hook.afterFunction("null", this, {});
    })();
    minerva_hook.afterFunction("null", this, {
      p: p,
      g: g,
      f: f,
      d: d,
      _: _
    });
  }, e.SendPrePV = l;
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  !function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = window.goldlog || (window.goldlog = {}),
        e = n(97);
    t.aplus_pubsub || (t.aplus_pubsub = e.create());
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e
    });
  }();
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    if ("function" != typeof t) throw new TypeError(t + " is not a function");
    _minerva_ret = t;
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var a = n(84),
      r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    for (var e = t.length, n = new Array(e - 1), o = 1; o < e; o++) n[o - 1] = t[o];

    _minerva_ret = n;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  },
      i = a.extend({
    create: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = new this();

      for (var n in t) e[n] = t[n];

      _minerva_ret = (e.handlers = [], e.pubs = {}, e);
      minerva_hook.afterFunction("null", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    setHandlers: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      this.handlers = t;
      minerva_hook.afterFunction("null", this, {});
    },
    subscribe: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      o(e);
      var n = this,
          a = n.pubs || {},
          r = a[t] || [];
      if (r) for (var i = 0; i < r.length; i++) {
        var s = r[i]();
        e.apply(n, s);
      }
      var u = n.handlers || [];
      _minerva_ret = (t in u || (u[t] = []), u[t].push(e), n.setHandlers(u), n);
      minerva_hook.afterFunction("null", this, {
        n: n,
        a: a,
        r: r,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    subscribeOnce: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      o(e);
      var n,
          a = this;
      _minerva_ret = (this.subscribe.call(this, t, n = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        a.unsubscribe.call(a, t, n);
        var o = Array.prototype.slice.call(arguments);
        e.apply(a, o);
        minerva_hook.afterFunction("null", this, {
          o: o
        });
      }), this);
      minerva_hook.afterFunction("null", this, {
        n: n,
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    unsubscribe: function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      o(e);
      var n = this.handlers[t];
      if (!n) return this;

      if ("object" == typeof n && n.length > 0) {
        for (var a = 0; a < n.length; a++) {
          var r = e.toString(),
              i = n[a].toString();
          r === i && n.splice(a, 1);
        }

        this.handlers[t] = n;
      } else delete this.handlers[t];

      _minerva_ret = this;
      minerva_hook.afterFunction("null", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    publish: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = r(arguments),
          n = this.handlers || [],
          o = n[t] ? n[t].length : 0;
      if (o > 0) for (var a = 0; a < o; a++) {
        var i = n[t][a];
        i && "function" == typeof i && i.apply(this, e);
      }
      _minerva_ret = this;
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
    cachePubs: function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = this.pubs || {},
          n = r(arguments);
      e[t] || (e[t] = []), e[t].push(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      });
      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n
      });
    }
  });

  t.exports = i;
  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r,
    i: i
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(40),
      a = n(37),
      r = n(53),
      i = n(4);

  e.init = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    i.initLoad.init_watchGoldlogQueue("metaQueue"), n(99)(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = goldlog._$ || {},
          e = navigator.userAgent;
      e.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i) && (t.is_ali_app = !0), i.utilPvid.makePVId();
      var s = n(51);
      t.spm = s, t.is_WindVane = o.is_WindVane;
      var u = t.meta_info;
      s.init(goldlog, u, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        i.initLoad.init_watchGoldlogQueue();
        var t = n(4).spmException,
            e = t.is_exception;
        e || n(102);
        var o,
            r = "complete";
        o = ["aplusReady", r], a.doPubMsg(o), a.doCachePubs(o);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          o: o,
          r: r
        });
      }), goldlog.beforeSendPV(function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (t.page_url = location.href, t.page_referrer = r.getRefer(), n.is_auto && "1" === u["aplus-manual-pv"]) return !1;
        minerva_hook.afterFunction("null", this, {});
      }), goldlog.afterSendPV(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        window.g_SPM && (g_SPM._current_spm = "");
        minerva_hook.afterFunction("null", this, {});
      }), i.is_auto_pv + "" == "true" && goldlog.sendPV({
        is_auto: !0
      }), i.initLoad.run(), i.beforeUnload.run();
      minerva_hook.afterFunction("null", this, {
        t: t,
        e: e,
        s: s,
        u: u
      });
    });
    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(37),
      a = n(100);

  t.exports = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = n(101).AplusInit,
        r = new e();
    r.run({}, function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      o.doPubMsg(["aplusInitContext", e]), o.doCachePubs(["aplusInitContext", e]), a(), "function" == typeof t && t();
      minerva_hook.afterFunction("null", this, {});
    });
    minerva_hook.afterFunction("null", this, {
      e: e,
      r: r
    });
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    var e = "";

    switch (!0) {
      case r.isJSON(t):
        e = "settled";
        break;

      case r.isString(t):
        e = t;
        break;

      case r.isNumber(t):
        e = t + "";
        break;

      default:
        e = "settled";
    }

    _minerva_ret = e;
    minerva_hook.afterFunction("o", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var a = n(25),
      r = n(9);

  t.exports = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    try {
      var t = a.getGoldlogVal("hasSendMIC"),
          e = Math.floor(99 * Math.random());
      if (t || 1 !== e) return;
      var n = goldlog && goldlog._$ ? goldlog._$.meta_info : {},
          i = "";

      for (var s in n) r.isEmpty(n[s]) || (i = i + "&" + s + "=" + o(n[s]));

      a.setGoldlogVal("hasSendMIC", !0), goldlog.record("/m.i.c", "OTHER", i, "POST");
    } catch (t) {}

    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  var o = n(25),
      a = n(24),
      r = n(89),
      i = n(90),
      s = n(4),
      u = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    minerva_hook.afterFunction("null", this, {});
  };

  u.prototype.run = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = new i();
    n.init({
      middleware: [],
      config: t,
      plugins: s.aplus_init
    });
    var u = n.run(),
        c = new s.context();
    c.logger = a.logger;
    var l = {
      context: c,
      pubsub: o.getGoldlogVal("aplus_pubsub"),
      pubsubType: "aplusinit"
    },
        p = new r();
    p.create(l), p.wrap(u, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      "function" == typeof e && e(l.context);
      minerva_hook.afterFunction("null", this, {});
    })();
    minerva_hook.afterFunction("null", this, {
      n: n,
      u: u,
      c: c,
      l: l,
      p: p
    });
  }, e.AplusInit = u;
  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  !function () {
    minerva_hook.beforeFunction("null", this, arguments);

    var t,
        e = n(9),
        o = n(25),
        a = n(103),
        r = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      t = !0;
      var n = window.g_SPM || {};
      e.isFunction(n.getParam) || e.isFunction(n.spm) || a.run();
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n
      });
    },
        i = window.goldlog || (window.goldlog = {});

    i.aplus_pubsub && "function" == typeof i.aplus_pubsub.publish && i.aplus_pubsub.subscribe("goldlogReady", function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      "complete" !== e || t || r();
      minerva_hook.afterFunction("null", this, {});
    });

    var s = 0,
        u = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      if (!t) {
        var e = o.getGoldlogVal("_$") || {};
        "complete" === e.status ? r() : s < 50 && (++s, setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          u();
          minerva_hook.afterFunction("null", this, {});
        }, 200));
      }

      minerva_hook.afterFunction("null", this, {});
    };

    u();
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      o: o,
      a: a,
      r: r,
      i: i,
      s: s,
      u: u
    });
  }();
  minerva_hook.afterFunction("null", this, {});
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(30),
      a = n(25),
      r = n(104),
      i = n(108),
      s = n(109),
      u = n(110),
      c = n(111);

  e.run = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = a.getGoldlogVal("_$") || {},
        e = t.meta_info,
        n = e["aplus-touch"],
        l = {
      isTouchEnabled: o.isTouch() || "1" === n || "tap" === n,
      isTerminal: t.is_terminal || /WindVane/i.test(navigator.userAgent)
    };
    window.g_SPM = {
      spm_d_for_ad: {},
      resetModule: r.spm_resetModule,
      anchorBeacon: r.spm_spmAnchorChk,
      getParam: r.spm_getSPMParam,
      spm: r.spm_forwap
    }, i.run(l), s.run(l), u.run(l), c.run(l);
    minerva_hook.afterFunction("null", this, {
      t: t,
      e: e,
      n: n,
      l: l
    });
  };

  minerva_hook.afterFunction("null", this, {
    o: o,
    a: a,
    r: r,
    i: i,
    s: s,
    u: u,
    c: c
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);

    if (t && 1 === t.nodeType) {
      s.tryToRemoveAttribute(t, "data-spm-max-idx"), s.tryToRemoveAttribute(t, "data-auto-spmd-max-idx");

      for (var e = u.nodeListToArray(t.getElementsByTagName("a")), n = u.nodeListToArray(t.getElementsByTagName("area")), o = e.concat(n), a = 0; a < o.length; a++) s.tryToRemoveAttribute(o[a], l);
    }

    minerva_hook.afterFunction("o", this, {});
  }

  function a(t, e) {
    minerva_hook.beforeFunction("a", this, arguments);
    var n = s.tryToGetAttribute(t, l),
        o = "0";
    if (n && c.spm_isSPMAnchorIdMatch(n)) c.spm_anchorEnsureSPMId_inHref(t, n, e);else {
      var a = c.spm_spmGetParentSPMId(t.parentNode);
      if (o = a.spm_c, !o) return void c.spm_dealNoneSPMLink(t, e);
      c.spm_initSPMModule(a.el, o, e), c.spm_initSPMModule(a.el, o, e, !0);
    }
    minerva_hook.afterFunction("a", this, {
      n: n,
      o: o
    });
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    var e,
        n = t.tagName;
    "A" !== n && "AREA" !== n ? e = c.spm_getParamForAD(t) : (a(t, !0), e = s.tryToGetAttribute(t, l)), e || (e = "0.0.0.0");
    var o = goldlog.getPvId();
    4 === e.split(".").length && o && (e += "." + o), "A" !== n && "AREA" !== n && s.tryToSetAttribute(t, l, e), e = e.split(".");
    var r = {
      a: e[0],
      b: e[1],
      c: e[2],
      d: e[3]
    };
    _minerva_ret = (e[4] && (r.e = e[4]), r);
    minerva_hook.afterFunction("r", this, {
      e: e,
      n: n,
      o: o,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i(t, e) {
    minerva_hook.beforeFunction("i", this, arguments);
    var n = r(t),
        o = [n.a, n.b, n.c, n.d];
    _minerva_ret = (e && n.e && o.push(n.e), o.join("."));
    minerva_hook.afterFunction("i", this, {
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var s = n(27),
      u = n(19),
      c = n(105),
      l = "data-spm-anchor-id";
  e.spm_resetModule = o, e.spm_spmAnchorChk = a, e.spm_getSPMParam = r, e.spm_forwap = i;
  minerva_hook.afterFunction("null", this, {
    s: s,
    u: u,
    c: c,
    l: l
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);

    for (var e, n = "data-spm-ab-max-idx", o = {}, a = ""; t && t.tagName != T && t.tagName != x;) {
      if (!a && (a = v.tryToGetAttribute(t, "data-spm-ab"))) {
        e = parseInt(v.tryToGetAttribute(t, n)) || 0, o.a_spm_ab = a, o.ab_idx = ++e, t.setAttribute(n, e);
        break;
      }

      if (v.tryToGetAttribute(t, "data-spm")) break;
      t = t.parentNode;
    }

    _minerva_ret = o;
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a() {
    minerva_hook.beforeFunction("a", this, arguments);
    var t = b.getGoldlogVal("_$") || {},
        e = t.spm || {},
        n = e.data || {};
    _minerva_ret = [n.a, n.b].join(".");
    minerva_hook.afterFunction("a", this, {
      t: t,
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    var e = a(),
        n = t.split(".");
    _minerva_ret = n[0] + "." + n[1] == e;
    minerva_hook.afterFunction("r", this, {
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i(t, e) {
    minerva_hook.beforeFunction("i", this, arguments);

    if (!goldlog.isUT4Aplus || "UT4Aplus" !== goldlog.getMetaInfo("aplus-toUT")) {
      if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e) return t;
      var n,
          o,
          a,
          r,
          i,
          s,
          u,
          c = "&";
      t.indexOf("#") !== -1 && (a = t.split("#"), t = a.shift(), o = a.join("#")), r = t.split("?"), i = r.length - 1, a = r[0].split("//"), a = a[a.length - 1].split("/"), s = a.length > 1 ? a.pop() : "", i > 0 && (n = r.pop(), t = r.join("?")), n && i > 1 && n.indexOf("&") == -1 && n.indexOf("%") !== -1 && (c = "%26");
      var l = "";

      if (t = t + "?spm=" + l + e + (n ? c + n : "") + (o ? "#" + o : ""), u = h.isContain(s, ".") ? s.split(".").pop().toLowerCase() : "") {
        if ({
          png: 1,
          jpg: 1,
          jpeg: 1,
          gif: 1,
          bmp: 1,
          swf: 1
        }.hasOwnProperty(u)) return 0;
        !n && i <= 1 && (o || {
          htm: 1,
          html: 1,
          php: 1,
          aspx: 1,
          shtml: 1,
          xhtml: 1
        }.hasOwnProperty(u) || (t += "&file=" + s));
      }

      return t;
    }

    minerva_hook.afterFunction("i", this, {});
  }

  function s(t, e) {
    minerva_hook.beforeFunction("s", this, arguments);

    if (!goldlog.isUT4Aplus || "UT4Aplus" !== goldlog.getMetaInfo("aplus-toUT")) {
      var n,
          o = t.innerHTML;
      o && o.indexOf("<") == -1 && (n = document.createElement("b"), n.style.display = "none", t.appendChild(n)), t.href = e, n && t.removeChild(n);
    }

    minerva_hook.afterFunction("s", this, {});
  }

  function u(t, e, n) {
    minerva_hook.beforeFunction("u", this, arguments);

    if (!/^0\.0\.?/.test(e)) {
      var o = y.tryToGetHref(t),
          r = a(),
          u = w.is_ignore_spm(t);

      if (u) {
        var c = _.param2obj(o);

        if (c.spm && c.spm.split) for (var l = c.spm.split("."), p = e.split("."), g = 0; g < 3 && p[g] === l[g]; g++) 2 === g && l[3] && (e = c.spm);
      }

      t.setAttribute("data-spm-anchor-id", e);
      var f = goldlog.getPvId();
      f && (e += "." + f);
      var d = "0.0";
      (f || r && r != d) && (u || n || (o = i(o, e)) && s(t, o));
    }

    minerva_hook.afterFunction("u", this, {});
  }

  function c(t) {
    minerva_hook.beforeFunction("c", this, arguments);
    var e = v.tryToGetAttribute(t, A),
        n = m.parseSemicolonContent(e) || {};
    _minerva_ret = n;
    minerva_hook.afterFunction("c", this, {
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function l(t) {
    minerva_hook.beforeFunction("l", this, arguments);
    var e,
        n = b.getGoldlogVal("_$") || {},
        o = n.spm.data;
    _minerva_ret = ("0" == o.a && "0" == o.b ? e = "0" : (e = v.tryToGetAttribute(t, j), e && e.match(/^d\w+$/) || (e = "")), e);
    minerva_hook.afterFunction("l", this, {
      e: e,
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function p(t, e) {
    minerva_hook.beforeFunction("p", this, arguments);

    for (var n = [], o = m.nodeListToArray(t.getElementsByTagName("a")), a = m.nodeListToArray(t.getElementsByTagName("area")), r = o.concat(a), i = 0; i < r.length; i++) {
      for (var s = !1, u = r[i], c = r[i]; (u = u.parentNode) && u != t;) if (v.tryToGetAttribute(u, j)) {
        s = !0;
        break;
      }

      if (!s) {
        var l = v.tryToGetAttribute(c, P);
        e || "t" === l ? e && "t" === l && n.push(c) : n.push(c);
      }
    }

    _minerva_ret = n;
    minerva_hook.afterFunction("p", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function g(t) {
    minerva_hook.beforeFunction("g", this, arguments);

    for (var e, n = t; t && t.tagName !== T && t.tagName !== x && t.getAttribute;) {
      var o = t.getAttribute(j);

      if (o) {
        e = o, n = t;
        break;
      }

      if (!(t = t.parentNode)) break;
    }

    _minerva_ret = (e && !/^[\w\-\.\/]+$/.test(e) && (e = "0"), {
      spm_c: e,
      el: n
    });
    minerva_hook.afterFunction("g", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function f(t, e) {
    minerva_hook.beforeFunction("f", this, arguments);
    var n = parent !== self;
    if (!n && e) return [t, e].join(".");
    if (t && e) return t + ".i" + e;
    var o = window.g_SPM || (window.g_SPM = {}),
        a = o.spm_d_for_ad || {};
    _minerva_ret = ("number" == typeof a[t] ? a[t]++ : a[t] = 0, o.spm_d_for_ad = a, t + ".i" + a[t]);
    minerva_hook.afterFunction("f", this, {
      n: n,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function d(t) {
    minerva_hook.beforeFunction("d", this, arguments);
    var e;
    _minerva_ret = t && (e = t.match(/&?\bspm=([^&#]*)/)) ? e[1] : "";
    minerva_hook.afterFunction("d", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var _ = n(18),
      h = n(9),
      m = n(19),
      v = n(27),
      b = n(25),
      y = n(106),
      w = n(107),
      x = "BODY",
      T = "HTML",
      j = "data-spm",
      A = "data-spm-click",
      P = "data-auto-spmd",
      S = "data-spm-anchor-id";

  e.getGlobalSPMId = a, e.spm_isSPMAnchorIdMatch = r, e.spm_updateHrefWithSPMId = i, e.spm_writeHref = s, e.spm_anchorEnsureSPMId_inHref = u, e.getElDataSpm = c, e.spm_getAnchor4thId_spm_d = l, e.spm_getModuleLinks = p, e.spm_spmGetParentSPMId = g, e.get_spm_for_ad = f, e.spm_getParamForAD = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = v.tryToGetAttribute(t, S);

    if (!e) {
      var n = a(),
          o = t.parentNode;
      if (!o) return "";
      var r = c(t) || {},
          i = r.locaid || "",
          s = t.getAttribute(j) || i,
          u = g(o),
          l = u.spm_c || 0;
      l && l.indexOf(".") !== -1 && (l = l.split("."), l = l[l.length - 1]), e = f(n + "." + l, s);
    }

    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, e.spm_initSPMModule = function (t, e, n, i) {
    minerva_hook.beforeFunction("null", this, arguments);
    var s;

    if (e = e || t.getAttribute("data-spm") || "") {
      var g = p(t, i);

      if (0 !== g.length) {
        var f = e.split("."),
            d = h.isStartWith(e, "110") && 3 == f.length;
        d && (s = f[2], f[2] = "w" + (s || "0"), e = f.join("."));

        var _ = a();

        if (_ && _.match(/^[\w\-\*]+(\.[\w\-\*\/]+)?$/)) if (h.isContain(e, ".")) {
          if (!h.isStartWith(e, _)) {
            var m = _.split(".");

            f = e.split(".");

            for (var b = 0; b < m.length; b++) f[b] = m[b];

            e = f.join(".");
          }
        } else h.isContain(_, ".") || (_ += ".0"), e = _ + "." + e;

        if (e.match && e.match(/^[\w\-\*]+\.[\w\-\*\/]+\.[\w\-\*\/]+$/)) {
          for (var w = "data-auto-spmd-max-idx", x = "data-spm-max-idx", T = i ? w : x, j = parseInt(v.tryToGetAttribute(t, T)) || 0, P = 0; P < g.length; P++) {
            var k = g[P],
                U = y.tryToGetHref(k),
                E = v.tryToGetAttribute(k, A);

            if (i || U || E) {
              d && k.setAttribute("data-spm-wangpu-module-id", s);
              var I = k.getAttribute(S);
              if (I && r(I)) u(k, I, n);else {
                var M,
                    C,
                    N = o(k.parentNode);
                N.a_spm_ab ? (C = N.a_spm_ab, M = N.ab_idx) : (C = void 0, j++, M = j);
                var O,
                    V = c(k) || {},
                    G = V.locaid || "";
                G ? O = G : (O = l(k) || M, i && (O = "at" + ((h.isNumber(O) ? 1e3 : "") + O))), I = C ? e + "-" + C + "." + O : e + "." + O, u(k, I, n);
              }
            }
          }

          t.setAttribute(T, j);
        }
      }
    }

    minerva_hook.afterFunction("null", this, {
      s: s
    });
  }, e.spm_dealNoneSPMLink = function (t, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = goldlog.getMetaInfo("aplus-getspmcd"),
        o = a(),
        r = y.tryToGetHref(t),
        i = d(r),
        c = null,
        p = o && 2 == o.split(".").length;

    if (p) {
      var g;
      return "function" == typeof n && (g = n(t, null, o)), c = g && "0" !== g.spm_c ? [o, g.spm_c, g.spm_d] : [o, 0, l(t) || 0], void u(t, c.join("."), e);
    }

    r && i && (r = r.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "").replace(/\?#/, "#"), s(t, r));
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      r: r,
      i: i,
      c: c,
      p: p
    });
  };
  minerva_hook.afterFunction("null", this, {
    _: _,
    h: h,
    m: m,
    v: v,
    b: b,
    y: y,
    w: w,
    x: x,
    T: T,
    j: j,
    A: A,
    P: P,
    S: S
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  var o = n(20);

  e.tryToGetHref = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e;

    try {
      e = o.trim(t.getAttribute("href", 2));
    } catch (t) {}

    _minerva_ret = e || "";
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    o: o
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t) {
    minerva_hook.beforeFunction("o", this, arguments);
    _minerva_ret = !!t && !!t.match(/^[^\?]*\balipay\.(?:com|net)\b/i);
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a(t) {
    minerva_hook.beforeFunction("a", this, arguments);
    _minerva_ret = !!t && !!t.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i);
    minerva_hook.afterFunction("a", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function r(t) {
    minerva_hook.beforeFunction("r", this, arguments);
    var e = location.href;
    _minerva_ret = t && e.split("#")[0] === t.split("#")[0];
    minerva_hook.afterFunction("r", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i(t) {
    minerva_hook.beforeFunction("i", this, arguments);

    for (var e; (t = t.parentNode) && "BODY" !== t.tagName;) if (e = u.tryToGetAttribute(t, f)) return e;

    _minerva_ret = "";
    minerva_hook.afterFunction("i", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function s(t) {
    minerva_hook.beforeFunction("s", this, arguments);

    for (var e = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"], n = 0; n < e.length; n++) if (t.indexOf(e[n]) !== -1) return !0;

    _minerva_ret = !1;
    minerva_hook.afterFunction("s", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var u = n(27),
      c = n(9),
      l = n(106),
      p = n(25),
      g = n(22),
      f = "data-spm-protocol";

  e.is_ignore_spm = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    var e = p.getGoldlogVal("_$") || {},
        n = e.meta_info || {},
        d = l.tryToGetHref(t),
        _ = i(t),
        h = u.tryToGetAttribute(t, f),
        m = "i" === (h || _ || n.spm_protocol);

    if (!d || s(d)) return !0;
    var v = r(d) || g.isStartWithProtocol(d.toLowerCase()),
        b = o(d) || a(d),
        y = v || b;
    _minerva_ret = !(m || !c.isStartWith(d, "#") && !y) || m;
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      d: d,
      _: _,
      h: h,
      m: m,
      v: v,
      b: b,
      y: y,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    u: u,
    c: c,
    l: l,
    p: p,
    g: g,
    f: f
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t, e, n) {
    minerva_hook.beforeFunction("o", this, arguments);

    var o = u.parseSemicolonContent(e, {}, !0),
        a = o.gostr || "",
        r = o.locaid || "",
        g = t.getAttribute("data-spm") || r,
        f = "CLK",
        d = o.gokey || "",
        _ = p.spm_getSPMParam(t),
        h = [_.a, _.b, _.c, g].join("."),
        m = a + "." + h;

    0 !== m.indexOf("/") && (m = "/" + m);
    var v = [],
        b = ["gostr", "locaid", "gmkey", "gokey", "spm-cnt", "cna"];

    for (var y in o) o.hasOwnProperty(y) && c.indexof(b, y) === -1 && v.push(y + "=" + o[y]);

    v.push("_g_et=" + n), v.push("autosend=1"), d && v.length > 0 && (d += "&"), d += v.length > 0 ? v.join("&") : "", goldlog && s.isFunction(goldlog.recordUdata) ? goldlog.recordUdata(m, f, d, "GET", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    }) : l.logger({
      msg: "goldlog.recordUdata is not function!"
    }), i.tryToSetAttribute(t, "data-spm-anchor-id", h);
    minerva_hook.afterFunction("o", this, {
      o: o,
      a: a,
      r: r,
      g: g,
      f: f,
      d: d,
      _: _,
      h: h,
      m: m,
      v: v,
      b: b
    });
  }

  function a(t, e) {
    minerva_hook.beforeFunction("a", this, arguments);
    var n = e;
    window.g_SPM && (g_SPM._current_spm = p.spm_getSPMParam(e));

    for (var a; e && "HTML" !== e.tagName;) {
      a = i.tryToGetAttribute(e, "data-spm-click");
      {
        if (a) {
          o(e, a, "mousedown" === t.type ? t.type : "tap");
          break;
        }

        e = e.parentNode;
      }
    }

    if (!a) {
      var r = g.getGlobalSPMId(),
          s = goldlog.getMetaInfo("aplus-getspmcd");
      "function" == typeof s && s(n, t, r);
    }

    minerva_hook.afterFunction("a", this, {
      n: n
    });
  }

  var r = n(79),
      i = n(27),
      s = n(9),
      u = n(19),
      c = n(12),
      l = n(24),
      p = n(104),
      g = n(105);

  e.run = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t && t.isTouchEnabled ? r.on(document, "tap", a) : r.on(document, "mousedown", a);
    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);

    for (var t = document.getElementsByTagName("iframe"), e = 0; e < t.length; e++) {
      var n = t[e],
          o = r.tryToGetAttribute(n, "data-spm-src");

      if (!n.src && o) {
        var a = s.spm_getSPMParam(n);

        if (a) {
          var u = [a.a, a.b, a.c, a.d];
          a.e && u.push(a.e), a = u.join("."), n.src = i.spm_updateHrefWithSPMId(o, a);
        } else n.src = o;
      }
    }

    minerva_hook.afterFunction("o", this, {});
  }

  function a() {
    minerva_hook.beforeFunction("a", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      e++, e > 10 && (n = 3e3), o(), setTimeout(t, n);
      minerva_hook.afterFunction("t", this, {});
    }

    var e = 0,
        n = 500;
    t();
    minerva_hook.afterFunction("a", this, {
      e: e,
      n: n
    });
  }

  var r = n(27),
      i = n(105),
      s = n(104);

  e.run = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    t && !t.isTerminal && a();
    minerva_hook.afterFunction("null", this, {});
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    s: s
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t, e) {
    minerva_hook.beforeFunction("o", this, arguments);

    for (var n, o = window; e && (n = e.tagName);) {
      if ("A" === n || "AREA" === n) {
        r.spm_spmAnchorChk(e, !1);
        var a = o.g_SPM || (o.g_SPM = {}),
            i = a._current_spm = r.spm_getSPMParam(e),
            s = [];

        try {
          s = [i.a, i.b, i.c, i.d];
          var u = i.e || goldlog.pvid || "";
          u && s.push(u);
        } catch (t) {}

        break;
      }

      if ("BODY" == n || "HTML" == n) break;
      e = e.parentNode;
    }

    minerva_hook.afterFunction("o", this, {});
  }

  var a = n(79),
      r = n(104);

  e.run = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = document;
    t && t.isTouchEnabled ? a.on(e, "tapSpm", o) : (a.on(e, "mousedown", o), a.on(e, "keydown", o));
    minerva_hook.afterFunction("null", this, {
      e: e
    });
  };

  minerva_hook.afterFunction("null", this, {
    a: a,
    r: r
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o(t, e) {
    minerva_hook.beforeFunction("o", this, arguments);
    if (e || (e = p), p.evaluate) return e.evaluate(t, p, null, 9, null).singleNodeValue;

    for (var n, a = t.split("/"); !n && a.length > 0;) n = a.shift();

    var r,
        i = /^.+?\[@id='(.+?)']$/i,
        s = /^(.+?)\[(\d+)]$/i;
    _minerva_ret = ((r = n.match(i)) ? e = e.getElementById(r[1]) : (r = n.match(s)) && (e = e.getElementsByTagName(r[1])[parseInt(r[2]) - 1]), e ? 0 === a.length ? e : o(a.join("/"), e) : null);
    minerva_hook.afterFunction("o", this, {
      r: r,
      i: i,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a() {
    minerva_hook.beforeFunction("a", this, arguments);
    var t = {};

    for (var e in l) if (l.hasOwnProperty(e)) {
      var n = o(e);

      if (n) {
        t[e] = 1;
        var a = l[e],
            r = "A" === n.tagName ? a.spmd : a.spmc;
        s.tryToSetAttribute(n, "data-spm", r || "");
      }
    }

    for (var i in t) t.hasOwnProperty(i) && delete l[i];

    minerva_hook.afterFunction("a", this, {
      t: t
    });
  }

  function r() {
    minerva_hook.beforeFunction("r", this, arguments);

    if (!c && g.spmData) {
      c = !0;
      var t = g.spmData.data;

      if (t && i.isArray(t)) {
        for (var e = 0; e < t.length; e++) {
          var n = t[e],
              o = n.xpath;
          o = o.replace(/^id\('(.+?)'\)(.*)/g, "//*[@id='$1']$2"), l[o] = {
            spmc: n.spmc,
            spmd: n.spmd
          };
        }

        a();
      }
    }

    minerva_hook.afterFunction("r", this, {});
  }

  var i = n(9),
      s = n(27),
      u = n(79),
      c = !1,
      l = {},
      p = document,
      g = window;
  e.wh_updateXPathElements = a, e.init_wh = r, e.run = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    u.DOMReady(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      r();
      minerva_hook.afterFunction("null", this, {});
    });
    minerva_hook.afterFunction("null", this, {});
  };
  minerva_hook.afterFunction("null", this, {
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g
  });
}, function (t, e, n) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);

  function o() {
    minerva_hook.beforeFunction("o", this, arguments);
    var t,
        e = l.getParamFromUrl("utparamcnt", location.href);
    if (e) try {
      t = e = JSON.parse(decodeURIComponent(e));
    } catch (t) {}
    _minerva_ret = t;
    minerva_hook.afterFunction("o", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function a() {
    minerva_hook.beforeFunction("a", this, arguments);
    var t,
        e = f["aplus-utparam"];
    if (e) if ("object" == typeof e) t = e;else try {
      t = JSON.parse(e);
    } catch (t) {}
    _minerva_ret = t;
    minerva_hook.afterFunction("a", this, {
      t: t,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var r = n(53),
      i = n(54),
      s = n(37),
      u = n(42),
      c = n(9),
      l = n(52),
      p = n(4),
      g = n(26),
      f = g.getInfo(),
      d = "complete";

  e.initGoldlog = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = window.goldlog || (window.goldlog = {}),
        n = p.goldlog_path.run.create();
    e._ready_time = new Date().getTime();

    for (var l in n) e[l] = n[l];

    var g = /TB\-PD/i.test(navigator.userAgent),
        _ = e._$ = e._$ || {},
        h = o(),
        m = a();

    _minerva_ret = ("object" == typeof h && (m && (h = c.assign(h, m)), f["aplus-utparam"] = h), _.meta_info = f, _.is_terminal = "aplus_wap" === p.script_name || g || "1" == f["aplus-terminal"], _.send_pv_count = 0, _.status = d, _.script_name = p.script_name, _.spm = {
      data: {}
    }, _.page_referrer = r.getRefer(), _.pageLoadTime = new Date().getTime(), e.lver = p.lver, e.nameStorage = i.nameStorage, u.haveNativeFlagInUA(), s.doPubMsg(["goldlogReady", d]), s.doCachePubs(["goldlogReady", d]), t.init(), e);
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      g: g,
      _: _,
      h: h,
      m: m,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  minerva_hook.afterFunction("null", this, {
    r: r,
    i: i,
    s: s,
    u: u,
    c: c,
    l: l,
    p: p,
    g: g,
    f: f,
    d: d
  });
}]);
/*! 2021-11-18 16:45:08 v8.15.19 */

!function (t) {
  minerva_hook.beforeFunction("null", this, arguments);

  function e(n) {
    minerva_hook.beforeFunction("e", this, arguments);
    if (r[n]) return r[n].exports;
    var a = r[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    _minerva_ret = (t[n].call(a.exports, a, a.exports, e), a.loaded = !0, a.exports);
    minerva_hook.afterFunction("e", this, {
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  var r = {};
  _minerva_ret = (e.m = t, e.c = r, e.p = "", e(0));
  minerva_hook.afterFunction("null", this, {
    r: r,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}([function (t, e) {
  "use strict";

  minerva_hook.beforeFunction("null", this, arguments);
  !function () {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(t, e, r) {
      minerva_hook.beforeFunction("t", this, arguments);

      t[_]((h ? "on" : "") + e, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = t || s.event;
        var e = t.target || t.srcElement;
        r(t, e);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e
        });
      }, !1);

      minerva_hook.afterFunction("t", this, {});
    }

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);
      _minerva_ret = /&?\bspm=[^&#]*/.test(location.href) ? location.href.match(/&?\bspm=[^&#]*/gi)[0].split("=")[1] : "";
      minerva_hook.afterFunction("e", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(t, e) {
      minerva_hook.beforeFunction("r", this, arguments);
      if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e) return t;
      var r,
          n,
          a,
          i,
          o,
          c,
          p,
          s = "&";

      if (t.indexOf("#") != -1 && (a = t.split("#"), t = a.shift(), n = a.join("#")), i = t.split("?"), o = i.length - 1, a = i[0].split("//"), a = a[a.length - 1].split("/"), c = a.length > 1 ? a.pop() : "", o > 0 && (r = i.pop(), t = i.join("?")), r && o > 1 && r.indexOf("&") == -1 && r.indexOf("%") != -1 && (s = "%26"), t = t + "?spm=" + e + (r ? s + r : "") + (n ? "#" + n : ""), p = c.indexOf(".") > -1 ? c.split(".").pop().toLowerCase() : "") {
        if ({
          png: 1,
          jpg: 1,
          jpeg: 1,
          gif: 1,
          bmp: 1,
          swf: 1
        }.hasOwnProperty(p)) return 0;
        !r && o <= 1 && (n || {
          htm: 1,
          html: 1,
          php: 1
        }.hasOwnProperty(p) || (t += "&file=" + c));
      }

      _minerva_ret = t;
      minerva_hook.afterFunction("r", this, {
        r: r,
        n: n,
        a: a,
        i: i,
        o: o,
        c: c,
        p: p,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);

      function e(t) {
        minerva_hook.beforeFunction("e", this, arguments);
        _minerva_ret = (t = t.replace(/refpos[=(%3D)]\w*/gi, c).replace(i, "%3D" + n + "%26" + a.replace("=", "%3D")).replace(o, n), a.length > 0 && (t += "&" + a), t);
        minerva_hook.afterFunction("e", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var r = window.location.href,
          n = r.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i),
          a = r.match(/[&\?](pvid=[^&]*)/i),
          i = new RegExp("%3Dmm_\\d+_\\d+_\\d+", "ig"),
          o = new RegExp("mm_\\d+_\\d+_\\d+", "ig");
      a = a && a[1] ? a[1] : "";
      var c = r.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);
      _minerva_ret = (c = c && c[0] ? c[0] : "", n ? (n = n[0], e(t)) : t);
      minerva_hook.afterFunction("n", this, {
        r: r,
        n: n,
        a: a,
        i: i,
        o: o,
        a: a,
        c: c,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      var r = s.KISSY;
      r ? r.ready(e) : s.jQuery ? jQuery(m).ready(e) : "complete" === m.readyState ? e() : t(s, "load", e);
      minerva_hook.afterFunction("a", this, {
        r: r
      });
    }

    function i(t, e) {
      minerva_hook.beforeFunction("i", this, arguments);
      _minerva_ret = t && t.getAttribute ? t.getAttribute(e) || "" : "";
      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(t) {
      minerva_hook.beforeFunction("o", this, arguments);

      if (t) {
        var e,
            r = g.length;

        for (e = 0; e < r; e++) if (t.indexOf(g[e]) > -1) return !0;

        return !1;
      }

      minerva_hook.afterFunction("o", this, {});
    }

    function c(t, e) {
      minerva_hook.beforeFunction("c", this, arguments);
      if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e) return t;
      var r,
          n,
          a,
          i,
          o,
          c,
          p,
          s = "&";

      if (t.indexOf("#") != -1 && (a = t.split("#"), t = a.shift(), n = a.join("#")), i = t.split("?"), o = i.length - 1, a = i[0].split("//"), a = a[a.length - 1].split("/"), c = a.length > 1 ? a.pop() : "", o > 0 && (r = i.pop(), t = i.join("?")), r && o > 1 && r.indexOf("&") == -1 && r.indexOf("%") != -1 && (s = "%26"), t = t + "?spm=" + e + (r ? s + r : "") + (n ? "#" + n : ""), p = c.indexOf(".") > -1 ? c.split(".").pop().toLowerCase() : "") {
        if ({
          png: 1,
          jpg: 1,
          jpeg: 1,
          gif: 1,
          bmp: 1,
          swf: 1
        }.hasOwnProperty(p)) return 0;
        !r && o <= 1 && (n || {
          htm: 1,
          html: 1,
          shtml: 1,
          php: 1
        }.hasOwnProperty(p) || (t += "&__file=" + c));
      }

      _minerva_ret = t;
      minerva_hook.afterFunction("c", this, {
        r: r,
        n: n,
        a: a,
        i: i,
        o: o,
        c: c,
        p: p,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function p(t) {
      minerva_hook.beforeFunction("p", this, arguments);

      if (o(t.href)) {
        var r = i(t, u);

        if (!r) {
          var n = l()(t),
              a = [n.a, n.b, n.c, n.d].join(".");
          n.e && (n += "." + n.e), d && (a = [n.a || "0", n.b || "0", n.c || "0", n.d || "0"].join("."), a = (e() || "0.0.0.0.0") + "_" + a), t.href = c(t.href, a), t.setAttribute(u, a);
        }
      }

      minerva_hook.afterFunction("p", this, {});
    }

    var s = window,
        m = document;

    if (1 !== s.aplus_spmact) {
      s.aplus_spmact = 1;

      var f = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0
        };
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
          l = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = s.g_SPM && s.g_SPM.getParam ? s.g_SPM.getParam : f;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
          d = !0;

      try {
        d = self.location != top.location;
      } catch (t) {}

      var u = "data-spm-act-id",
          g = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"],
          h = !!m.attachEvent,
          b = "attachEvent",
          v = "addEventListener",
          _ = h ? b : v;

      t(m, "mousedown", function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var r, n = 0; e && (r = e.tagName);) {
          if ("A" == r || "AREA" == r) {
            p(e);
            break;
          }

          if ("BODY" == r || "HTML" == r) break;
          e = e.parentNode, n += 1;
        }

        minerva_hook.afterFunction("null", this, {});
      }), a(function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t, a, o = document.getElementsByTagName("iframe"), c = 0; c < o.length; c++) {
          t = i(o[c], "mmsrc"), a = i(o[c], "mmworked");
          var p = l()(o[c]),
              s = [p.a || "0", p.b || "0", p.c || "0", p.d || "0", p.e || "0"].join(".");
          t && !a ? (d && (s = [p.a || "0", p.b || "0", p.c || "0", p.d || "0"].join("."), s = e() + "_" + s), o[c].src = r(n(t), s), o[c].setAttribute("mmworked", "mmworked")) : o[c].setAttribute(u, s);
        }

        minerva_hook.afterFunction("null", this, {});
      });
    }

    minerva_hook.afterFunction("null", this, {
      s: s,
      m: m
    });
  }();
  minerva_hook.afterFunction("null", this, {});
}]);