!function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  function c() {
    minerva_hook.beforeFunction("c", this, arguments);
    var a = {},
        b = new o(function (b, c) {
      minerva_hook.beforeFunction("null", this, arguments);
      a.resolve = b, a.reject = c;
      minerva_hook.afterFunction("null", this, {});
    });
    _minerva_ret = (a.promise = b, a);
    minerva_hook.afterFunction("c", this, {
      a: a,
      b: b,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function d(a, b) {
    minerva_hook.beforeFunction("d", this, arguments);

    for (var c in b) void 0 === a[c] && (a[c] = b[c]);

    _minerva_ret = a;
    minerva_hook.afterFunction("d", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function e(a) {
    minerva_hook.beforeFunction("e", this, arguments);
    var b = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0] || document.firstElementChild || document;
    b.appendChild(a);
    minerva_hook.afterFunction("e", this, {
      b: b
    });
  }

  function f(a) {
    minerva_hook.beforeFunction("f", this, arguments);
    var b = [];

    for (var c in a) a[c] && b.push(c + "=" + encodeURIComponent(a[c]));

    _minerva_ret = b.join("&");
    minerva_hook.afterFunction("f", this, {
      b: b,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function g(a) {
    minerva_hook.beforeFunction("g", this, arguments);
    _minerva_ret = a.substring(a.lastIndexOf(".", a.lastIndexOf(".") - 1) + 1);
    minerva_hook.afterFunction("g", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function h(a) {
    minerva_hook.beforeFunction("h", this, arguments);

    function b(a, b) {
      minerva_hook.beforeFunction("b", this, arguments);
      _minerva_ret = a << b | a >>> 32 - b;
      minerva_hook.afterFunction("b", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function c(a, b) {
      minerva_hook.beforeFunction("c", this, arguments);
      var c, d, e, f, g;
      _minerva_ret = (e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f);
      minerva_hook.afterFunction("c", this, {
        c: c,
        d: d,
        e: e,
        f: f,
        g: g,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function d(a, b, c) {
      minerva_hook.beforeFunction("d", this, arguments);
      _minerva_ret = a & b | ~a & c;
      minerva_hook.afterFunction("d", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function e(a, b, c) {
      minerva_hook.beforeFunction("e", this, arguments);
      _minerva_ret = a & c | b & ~c;
      minerva_hook.afterFunction("e", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function f(a, b, c) {
      minerva_hook.beforeFunction("f", this, arguments);
      _minerva_ret = a ^ b ^ c;
      minerva_hook.afterFunction("f", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function g(a, b, c) {
      minerva_hook.beforeFunction("g", this, arguments);
      _minerva_ret = b ^ (a | ~c);
      minerva_hook.afterFunction("g", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function h(a, e, f, g, h, i, j) {
      minerva_hook.beforeFunction("h", this, arguments);
      _minerva_ret = (a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e));
      minerva_hook.afterFunction("h", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(a, d, f, g, h, i, j) {
      minerva_hook.beforeFunction("i", this, arguments);
      _minerva_ret = (a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d));
      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function j(a, d, e, g, h, i, j) {
      minerva_hook.beforeFunction("j", this, arguments);
      _minerva_ret = (a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d));
      minerva_hook.afterFunction("j", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function k(a, d, e, f, h, i, j) {
      minerva_hook.beforeFunction("k", this, arguments);
      _minerva_ret = (a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d));
      minerva_hook.afterFunction("k", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function l(a) {
      minerva_hook.beforeFunction("l", this, arguments);

      for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;) b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++;

      _minerva_ret = (b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g);
      minerva_hook.afterFunction("l", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function m(a) {
      minerva_hook.beforeFunction("m", this, arguments);
      var b,
          c,
          d = "",
          e = "";

      for (c = 0; 3 >= c; c++) b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2);

      _minerva_ret = d;
      minerva_hook.afterFunction("m", this, {
        b: b,
        c: c,
        d: d,
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n(a) {
      minerva_hook.beforeFunction("n", this, arguments);
      a = a.replace(/\r\n/g, "\n");

      for (var b = "", c = 0; c < a.length; c++) {
        var d = a.charCodeAt(c);
        128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128));
      }

      _minerva_ret = b;
      minerva_hook.afterFunction("n", this, {
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var o,
        p,
        q,
        r,
        s,
        t,
        u,
        v,
        w,
        x = [],
        y = 7,
        z = 12,
        A = 17,
        B = 22,
        C = 5,
        D = 9,
        E = 14,
        F = 20,
        G = 4,
        H = 11,
        I = 16,
        J = 23,
        K = 6,
        L = 10,
        M = 15,
        N = 21;

    for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16) p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s);

    var O = m(t) + m(u) + m(v) + m(w);
    _minerva_ret = O.toLowerCase();
    minerva_hook.afterFunction("h", this, {
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
      M: M,
      N: N,
      O: O,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function i(a, b, c) {
    minerva_hook.beforeFunction("i", this, arguments);
    var d = c || {};
    document.cookie = a.replace(/[^+#$&^`|]/g, encodeURIComponent).replace("(", "%28").replace(")", "%29") + "=" + b.replace(/[^+#$&\/:<-\[\]-}]/g, encodeURIComponent) + (d.domain ? ";domain=" + d.domain : "") + (d.path ? ";path=" + d.path : "") + (d.secure ? ";secure" : "") + (d.httponly ? ";HttpOnly" : "");
    minerva_hook.afterFunction("i", this, {
      d: d
    });
  }

  function j(a) {
    minerva_hook.beforeFunction("j", this, arguments);
    var b = new RegExp("(?:^|;\\s*)" + a + "\\=([^;]+)(?:;\\s*|$)").exec(document.cookie);
    _minerva_ret = b ? b[1] : void 0;
    minerva_hook.afterFunction("j", this, {
      b: b,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function k(a, b, c) {
    minerva_hook.beforeFunction("k", this, arguments);
    var d = new Date();
    d.setTime(d.getTime() - 864e5);
    var e = "/";
    document.cookie = a + "=;path=" + e + ";domain=." + b + ";expires=" + d.toGMTString(), document.cookie = a + "=;path=" + e + ";domain=." + c + "." + b + ";expires=" + d.toGMTString();
    minerva_hook.afterFunction("k", this, {
      d: d,
      e: e
    });
  }

  function l() {
    minerva_hook.beforeFunction("l", this, arguments);
    var b = a.location.hostname;

    if (!b) {
      var c = a.parent.location.hostname;
      c && ~c.indexOf("zebra.alibaba-inc.com") && (b = c);
    }

    var d = ["taobao.net", "taobao.com", "tmall.com", "tmall.hk", "etao.com", "alibaba-inc.com"],
        e = new RegExp("([^.]*?)\\.?((?:" + d.join(")|(?:").replace(/\./g, "\\.") + "))", "i"),
        f = b.match(e) || [],
        g = f[2] || "taobao.com",
        h = f[1] || "m";
    "taobao.net" !== g || "x" !== h && "waptest" !== h && "daily" !== h ? "taobao.net" === g && "demo" === h ? h = "demo" : "alibaba-inc.com" === g && "zebra" === h ? h = "zebra" : "waptest" !== h && "wapa" !== h && "m" !== h && (h = "m") : h = "waptest";
    var i = "etao.com" === g ? "apie" : "api";
    i = "taobao.com" === g ? "acs" : i, t.mainDomain = g, t.subDomain = h, t.prefix = i;
    minerva_hook.afterFunction("l", this, {
      b: b,
      d: d,
      e: e,
      f: f,
      g: g,
      h: h,
      i: i
    });
  }

  function m() {
    minerva_hook.beforeFunction("m", this, arguments);
    var b = a.navigator.userAgent,
        c = b.match(/WindVane[\/\s]([\d\.\_]+)/);
    c && (t.WindVaneVersion = c[1]);
    var d = b.match(/AliApp\(([^\/]+)\/([\d\.\_]+)\)/i);
    d && (t.AliAppName = d[1], t.AliAppVersion = d[2]);
    minerva_hook.afterFunction("m", this, {
      b: b,
      c: c,
      d: d
    });
  }

  function n(a) {
    minerva_hook.beforeFunction("n", this, arguments);
    this.id = ++w, this.params = d(a || {}, {
      v: "*",
      data: {},
      type: "get",
      dataType: "jsonp"
    }), this.params.type = this.params.type.toLowerCase(), "object" == typeof this.params.data && (this.params.data = JSON.stringify(this.params.data)), this.middlewares = u.slice(0);
    minerva_hook.afterFunction("n", this, {});
  }

  var o = a.Promise;

  if (!o) {
    var p = "当前浏览器不支持Promise，请在windows对象上挂载Promise对象可参考（http://gitlab.alibaba-inc.com/mtb/lib-es6polyfill/tree/master）中的解决方案";
    throw b.mtop = {
      ERROR: p
    }, new Error(p);
  }

  String.prototype.trim || (String.prototype.trim = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  });
  var q,
      r = o.resolve();

  try {
    q = a.localStorage, q.setItem("@private", "false");
  } catch (s) {
    q = !1;
  }

  var t = {
    useAlipayJSBridge: !1
  },
      u = [],
      v = {
    ERROR: -1,
    SUCCESS: 0,
    TOKEN_EXPIRED: 1,
    SESSION_EXPIRED: 2
  };
  l(), m();
  var w = 0;
  n.prototype.use = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    if (!a) throw new Error("middleware is undefined");
    _minerva_ret = (this.middlewares.push(a), this);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.__processRequestMethod = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = this.params,
        c = this.options;
    "get" === b.type && "jsonp" === b.dataType ? c.getJSONP = !0 : "get" === b.type && "originaljsonp" === b.dataType ? c.getOriginalJSONP = !0 : "get" === b.type && "json" === b.dataType ? c.getJSON = !0 : "post" === b.type && (c.postJSON = !0), a();
    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c
    });
  }, n.prototype.__processRequestType = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var c = this,
        d = this.options;

    if (t.H5Request === !0 && (d.H5Request = !0), t.WindVaneRequest === !0 && (d.WindVaneRequest = !0), d.H5Request === !1 && d.WindVaneRequest === !0) {
      if (!b.windvane || parseFloat(d.WindVaneVersion) < 5.4) throw new Error("WINDVANE_NOT_FOUND::缺少WindVane环境");
    } else d.H5Request === !0 ? d.WindVaneRequest = !1 : "undefined" == typeof d.WindVaneRequest && "undefined" == typeof d.H5Request && (b.windvane && parseFloat(d.WindVaneVersion) >= 5.4 ? d.WindVaneRequest = !0 : d.H5Request = !0);

    _minerva_ret = a ? a().then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var a = d.retJson.ret;
      _minerva_ret = (a instanceof Array && (a = a.join(",")), d.WindVaneRequest === !0 && (!a || a.indexOf("HY_FAILED") > -1 || a.indexOf("HY_NO_HANDLER") > -1 || a.indexOf("HY_CLOSED") > -1 || a.indexOf("HY_EXCEPTION") > -1 || a.indexOf("HY_NO_PERMISSION") > -1) ? (t.H5Request = !0, c.__sequence([c.__processRequestType, c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest])) : void 0);
      minerva_hook.afterFunction("null", this, {
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }) : void 0;
    minerva_hook.afterFunction("null", this, {
      c: c,
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };
  var x = "_m_h5_c",
      y = "_m_h5_tk",
      z = "_m_h5_tk_enc";
  n.prototype.__getTokenFromAlipay = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = c(),
        d = this.options,
        e = (a.navigator.userAgent, !!location.protocol.match(/^https?\:$/)),
        f = "AP" === d.AliAppName && parseFloat(d.AliAppVersion) >= 8.2;
    _minerva_ret = (d.useAlipayJSBridge === !0 && !e && f && a.AlipayJSBridge && a.AlipayJSBridge.call ? a.AlipayJSBridge.call("getMtopToken", function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      a && a.token && (d.token = a.token), b.resolve();
      minerva_hook.afterFunction("null", this, {});
    }, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      b.resolve();
      minerva_hook.afterFunction("null", this, {});
    }) : b.resolve(), b.promise);
    minerva_hook.afterFunction("null", this, {
      b: b,
      d: d,
      e: e,
      f: f,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.__getTokenFromCookie = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var a = this.options;
    _minerva_ret = (a.token = a.token || j(y), a.token && (a.token = a.token.split("_")[0]), o.resolve());
    minerva_hook.afterFunction("null", this, {
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.__processToken = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = this,
        c = this.options;
    this.params;
    _minerva_ret = (c.token && delete c.token, c.WindVaneRequest !== !0 ? r.then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = b.__getTokenFromAlipay();
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }).then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = b.__getTokenFromCookie();
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }).then(a).then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var a = c.retJson,
          d = a.ret;

      if (d instanceof Array && (d = d.join(",")), d.indexOf("TOKEN_EMPTY") > -1 || c.CDR === !0 && d.indexOf("ILLEGAL_ACCESS") > -1 || d.indexOf("TOKEN_EXOIRED") > -1) {
        if (c.maxRetryTimes = c.maxRetryTimes || 5, c.failTimes = c.failTimes || 0, c.H5Request && ++c.failTimes < c.maxRetryTimes) return b.__sequence([b.__processToken, b.__processRequestUrl, b.__processUnitPrefix, b.middlewares, b.__processRequest]);
        c.maxRetryTimes > 0 && (k(x, c.pageDomain, "*"), k(y, c.mainDomain, c.subDomain), k(z, c.mainDomain, c.subDomain)), a.retType = v.TOKEN_EXPIRED;
      }

      minerva_hook.afterFunction("null", this, {
        a: a,
        d: d
      });
    }) : void a());
    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.__processRequestUrl = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = this.params,
        c = this.options;

    if (c.H5Request === !0) {
      var d = "//" + (c.prefix ? c.prefix + "." : "") + (c.subDomain ? c.subDomain + "." : "") + c.mainDomain + "/h5/" + b.api.toLowerCase() + "/" + b.v.toLowerCase() + "/",
          e = b.appKey || ("waptest" === c.subDomain ? "4272" : "12574478"),
          f = new Date().getTime(),
          g = h(c.token + "&" + f + "&" + e + "&" + b.data),
          i = {
        appKey: e,
        t: f,
        sign: g
      },
          j = {
        data: b.data,
        ua: b.ua
      };
      Object.keys(b).forEach(function (a) {
        minerva_hook.beforeFunction("null", this, arguments);
        "undefined" == typeof i[a] && "undefined" == typeof j[a] && (i[a] = b[a]);
        minerva_hook.afterFunction("null", this, {});
      }), c.getJSONP ? i.type = "jsonp" : c.getOriginalJSONP ? i.type = "originaljsonp" : (c.getJSON || c.postJSON) && (i.type = "originaljson"), c.querystring = i, c.postdata = j, c.path = d;
    }

    a();
    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c
    });
  }, n.prototype.__processUnitPrefix = function (b) {
    minerva_hook.beforeFunction("null", this, arguments);
    var c = this.params,
        d = this.options;
    if (d.disabledUnit === !0) return void b();

    if (q && d.H5Request === !0) {
      var f = c.api,
          g = !1,
          h = j("_m_user_unitinfo_"),
          i = q.getItem("unitinfo");
      h && h.split("|")[0].indexOf("center") < 0 && i && i.indexOf(f.toLowerCase()) >= 0 && (g = h.split("|")[1]), d.h5UnitPrefix ? d.path = d.path.replace(/^\/\//, "//" + d.h5UnitPrefix) : g && d.path && (d.useAcsUnit === !0 || d.path.indexOf("taobao.com") > -1 && "acs" === d.prefix ? d.path = d.path.replace(/^\/\//, "//" + g) : d.path = d.path.replace(/^\/\//, "//" + g + ".")), b().then(function () {
        minerva_hook.beforeFunction("null", this, arguments);

        if (q) {
          var b = j("_m_unitapi_v_"),
              c = q.getItem("unitinfo");

          if (b) {
            var f = c ? JSON.parse(c) : {};

            if (!c || b !== f.version) {
              var g = !1,
                  h = "//h5." + d.subDomain + ".taobao.com/js/mtop/unit/" + b + "/unitApi.js",
                  i = document.createElement("script");
              i.src = h, i.async = !0;

              var k = function () {
                minerva_hook.beforeFunction("null", this, arguments);
                g || (g = !0, i.onload = i.onerror = null, i.parentNode && i.parentNode.removeChild(i));
                minerva_hook.afterFunction("null", this, {});
              };

              i.onerror = function () {
                minerva_hook.beforeFunction("null", this, arguments);
                k();
                minerva_hook.afterFunction("null", this, {});
              }, a.jsonp_unitapi || (a.jsonp_unitapi = function (a) {
                minerva_hook.beforeFunction("null", this, arguments);
                k(), q.setItem("unitinfo", JSON.stringify(a));
                minerva_hook.afterFunction("null", this, {});
              }), e(i);
            }
          }
        }

        minerva_hook.afterFunction("null", this, {});
      });
    } else b();

    minerva_hook.afterFunction("null", this, {
      c: c,
      d: d
    });
  };
  var A = 0;
  n.prototype.__requestJSONP = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);

    function b(a) {
      minerva_hook.beforeFunction("b", this, arguments);
      if (k && clearTimeout(k), l.parentNode && l.parentNode.removeChild(l), "TIMEOUT" === a) window[j] = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        window[j] = void 0;

        try {
          delete window[j];
        } catch (a) {}

        minerva_hook.afterFunction("null", this, {});
      };else {
        window[j] = void 0;

        try {
          delete window[j];
        } catch (b) {}
      }
      minerva_hook.afterFunction("b", this, {});
    }

    var d = c(),
        g = this.params,
        h = this.options,
        i = g.timeout || 2e4,
        j = "mtopjsonp" + ++A,
        k = setTimeout(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      a("TIMEOUT::接口超时"), b("TIMEOUT");
      minerva_hook.afterFunction("null", this, {});
    }, i);
    h.querystring.callback = j;
    var l = document.createElement("script");
    _minerva_ret = (l.src = h.path + "?" + f(h.querystring) + "&" + f(h.postdata), l.async = !0, l.onerror = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      b("ABORT"), a("ABORT::接口异常退出");
      minerva_hook.afterFunction("null", this, {});
    }, window[j] = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      h.results = Array.prototype.slice.call(arguments), b(), d.resolve();
      minerva_hook.afterFunction("null", this, {});
    }, e(l), d.promise);
    minerva_hook.afterFunction("null", this, {
      d: d,
      g: g,
      h: h,
      i: i,
      j: j,
      k: k,
      l: l,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.__requestJSON = function (b) {
    minerva_hook.beforeFunction("null", this, arguments);

    function d(a) {
      minerva_hook.beforeFunction("d", this, arguments);
      m && clearTimeout(m), "TIMEOUT" === a && k.abort();
      minerva_hook.afterFunction("d", this, {});
    }

    var e = c(),
        h = this.params,
        i = this.options,
        k = new a.XMLHttpRequest(),
        l = h.timeout || 2e4,
        m = setTimeout(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      b("TIMEOUT::接口超时"), d("TIMEOUT");
      minerva_hook.afterFunction("null", this, {});
    }, l);
    i.pageDomain = i.pageDomain || g(a.location.hostname), i.mainDomain != i.pageDomain && (i.maxRetryTimes = 3, i.CDR = !0, j(x) && (i.querystring.c = decodeURIComponent(j(x)))), k.onreadystatechange = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      if (4 == k.readyState) {
        var a,
            c,
            f = k.status;

        if (f >= 200 && 300 > f || 304 == f) {
          d(), a = k.responseText, c = k.getAllResponseHeaders() || "";

          try {
            a = /^\s*$/.test(a) ? {} : JSON.parse(a), a.responseHeaders = c, i.results = [a], e.resolve();
          } catch (g) {
            b("PARSE_JSON_ERROR::解析JSON失败");
          }
        } else d("ABORT"), b("ABORT::接口异常退出");
      }

      minerva_hook.afterFunction("null", this, {});
    };
    var n,
        o,
        p = i.path + "?" + f(i.querystring);
    if (i.getJSON ? (n = "GET", p += "&" + f(i.postdata)) : i.postJSON && (n = "POST", o = f(i.postdata)), k.open(n, p, !0), k.withCredentials = !0, k.setRequestHeader("Accept", "application/json"), k.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), h.headers) for (var q in h.headers) k.setRequestHeader(q, h.headers[q]);
    _minerva_ret = (k.send(o), e.promise);
    minerva_hook.afterFunction("null", this, {
      e: e,
      h: h,
      i: i,
      k: k,
      l: l,
      m: m,
      n: n,
      o: o,
      p: p,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.__requestWindVane = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);

    function d(a) {
      minerva_hook.beforeFunction("d", this, arguments);
      j.results = [a], h.resolve();
      minerva_hook.afterFunction("d", this, {});
    }

    var e,
        f,
        g,
        h = c(),
        i = this.params,
        j = this.options,
        k = i.data,
        l = i.api,
        m = i.v,
        n = j.postJSON ? 1 : 0,
        o = j.getJSON || j.postJSON ? "originaljson" : "",
        p = "https" === location.protocol ? 1 : 0,
        q = i.isSec || 0,
        r = i.sessionOption || "AutoLoginOnly";
    if ("undefined" == typeof i.ecode) throw new Error("UNEXCEPT_PARAM_ECODE::缺少ecode参数");
    _minerva_ret = (e = parseInt(i.ecode), g = "undefined" != typeof i.timer ? parseInt(i.timer) : "undefined" != typeof i.timeout ? parseInt(i.timeout) : 2e4, f = 2 * g, i.needLogin === !0 && "undefined" == typeof i.sessionOption && (r = "AutoLoginAndManualLogin"), "undefined" != typeof i.secType && "undefined" == typeof i.isSec && (q = i.secType), b.windvane.call("MtopWVPlugin", "send", {
      api: l,
      v: m,
      post: String(n),
      type: o,
      isHttps: String(p),
      ecode: String(e),
      isSec: String(q),
      param: JSON.parse(k),
      timer: g,
      sessionOption: r,
      ext_headers: {
        referer: location.href
      }
    }, d, d, f), h.promise);
    minerva_hook.afterFunction("null", this, {
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
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.__processRequest = function (a, b) {
    minerva_hook.beforeFunction("null", this, arguments);
    var c = this;
    _minerva_ret = r.then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var a = c.options;
      if (a.H5Request && (a.getJSONP || a.getOriginalJSONP)) return c.__requestJSONP(b);
      if (a.H5Request && (a.getJSON || a.postJSON)) return c.__requestJSON(b);
      if (a.WindVaneRequest) return c.__requestWindVane(b);
      throw new Error("UNEXCEPT_REQUEST::错误的请求类型");
      minerva_hook.afterFunction("null", this, {
        a: a
      });
    }).then(a).then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var a = c.options,
          b = (c.params, a.results[0]),
          d = b && b.ret || [];
      b.ret = d, d instanceof Array && (d = d.join(","));
      var e = b.c;

      if (a.CDR && e) {
        var f = e.split(";");
        i(x, e, {
          domain: a.pageDomain,
          path: "/"
        }), i(y, f[0], {
          domain: a.pageDomain,
          path: "/"
        });
      }

      d.indexOf("SUCCESS") > -1 ? b.retType = v.SUCCESS : b.retType = v.ERROR, a.retJson = b;
      minerva_hook.afterFunction("null", this, {
        a: a,
        b: b,
        d: d,
        e: e
      });
    });
    minerva_hook.afterFunction("null", this, {
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, n.prototype.__sequence = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);

    function b(a) {
      minerva_hook.beforeFunction("b", this, arguments);
      if (a instanceof Array) a.forEach(b);else {
        var g,
            h = c(),
            i = c();
        e.push(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = (h = c(), g = a.call(d, function (a) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = (h.resolve(a), i.promise);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }, function (a) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = (h.reject(a), i.promise);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }), g && (g = g["catch"](function (a) {
            minerva_hook.beforeFunction("null", this, arguments);
            h.reject(a);
            minerva_hook.afterFunction("null", this, {});
          })), h.promise);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }), f.push(function (a) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = (i.resolve(a), g);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
      }
      minerva_hook.afterFunction("b", this, {});
    }

    var d = this,
        e = [],
        f = [];
    a.forEach(b);

    for (var g, h = r; g = e.shift();) h = h.then(g);

    for (; g = f.pop();) h = h.then(g);

    _minerva_ret = h;
    minerva_hook.afterFunction("null", this, {
      d: d,
      e: e,
      f: f,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  };

  var B = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    a();
    minerva_hook.afterFunction("null", this, {});
  },
      C = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    a();
    minerva_hook.afterFunction("null", this, {});
  };

  n.prototype.request = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    var b = this;
    this.options = d(a || {}, t);
    var c = o.resolve([B, C]).then(function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      var c = a[0],
          d = a[1];
      _minerva_ret = b.__sequence([c, b.__processRequestMethod, b.__processRequestType, b.__processToken, b.__processRequestUrl, b.__processUnitPrefix, b.middlewares, b.__processRequest, d]);
      minerva_hook.afterFunction("null", this, {
        c: c,
        d: d,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }).then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var a = b.options.retJson;
      _minerva_ret = a.retType !== v.SUCCESS ? o.reject(a) : b.options.successCallback ? void b.options.successCallback(a) : o.resolve(a);
      minerva_hook.afterFunction("null", this, {
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    })["catch"](function (a) {
      minerva_hook.beforeFunction("null", this, arguments);
      var c;
      _minerva_ret = (a instanceof Error ? (console.error(a.stack), c = {
        ret: [a.message],
        stack: [a.stack],
        retJson: v.ERROR
      }) : c = "string" == typeof a ? {
        ret: [a],
        retJson: v.ERROR
      } : void 0 !== a ? a : b.options.retJson, b.options.failureCallback ? void b.options.failureCallback(c) : o.reject(c));
      minerva_hook.afterFunction("null", this, {
        c: c,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    });
    _minerva_ret = (this.__processRequestType(), b.options.H5Request && (b.constructor.__firstProcessor || (b.constructor.__firstProcessor = c), B = function (a) {
      minerva_hook.beforeFunction("null", this, arguments);

      b.constructor.__firstProcessor.then(a)["catch"](a);

      minerva_hook.afterFunction("null", this, {});
    }), c);
    minerva_hook.afterFunction("null", this, {
      b: b,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, b.mtop = function (a) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = new n(a);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, b.mtop.request = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    var d = {
      H5Request: a.H5Request,
      WindVaneRequest: a.WindVaneRequest,
      LoginRequest: a.LoginRequest,
      AntiCreep: a.AntiCreep,
      AntiFlood: a.AntiFlood,
      successCallback: b,
      failureCallback: c || b
    };
    _minerva_ret = new n(a).request(d);
    minerva_hook.afterFunction("null", this, {
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, b.mtop.H5Request = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    var d = {
      H5Request: !0,
      successCallback: b,
      failureCallback: c || b
    };
    _minerva_ret = new n(a).request(d);
    minerva_hook.afterFunction("null", this, {
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, b.mtop.middlewares = u, b.mtop.config = t, b.mtop.RESPONSE_TYPE = v, b.mtop.CLASS = n;
  minerva_hook.afterFunction("null", this, {
    o: o,
    q: q,
    r: r,
    t: t,
    u: u,
    v: v,
    w: w,
    x: x,
    y: y,
    z: z,
    A: A,
    B: B,
    C: C
  });
}(window, window.lib || (window.lib = {})), function (a, b) {
  minerva_hook.beforeFunction("null", this, arguments);

  function c(a) {
    minerva_hook.beforeFunction("c", this, arguments);
    _minerva_ret = (a.preventDefault(), !1);
    minerva_hook.afterFunction("c", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function d(b, d) {
    minerva_hook.beforeFunction("d", this, arguments);
    var e = this,
        f = a.dpr || 1,
        g = document.createElement("div"),
        h = document.documentElement.getBoundingClientRect(),
        i = Math.max(h.width, window.innerWidth) / f,
        j = Math.max(h.height, window.innerHeight) / f;
    g.style.cssText = ["-webkit-transform:scale(" + f + ") translateZ(0)", "-ms-transform:scale(" + f + ") translateZ(0)", "transform:scale(" + f + ") translateZ(0)", "-webkit-transform-origin:0 0", "-ms-transform-origin:0 0", "transform-origin:0 0", "width:" + i + "px", "height:" + j + "px", "z-index:999999", "position:absolute", "left:0", "top:0px", "background:#FFF", "display:none"].join(";");
    var k = document.createElement("div");
    k.style.cssText = ["width:100%", "height:52px", "background:#EEE", "line-height:52px", "text-align:left", "box-sizing:border-box", "padding-left:20px", "position:absolute", "left:0", "top:0", "font-size:16px", "font-weight:bold", "color:#333"].join(";"), k.innerText = b;
    var l = document.createElement("a");
    l.style.cssText = ["display:block", "position:absolute", "right:0", "top:0", "height:52px", "line-height:52px", "padding:0 20px", "color:#999"].join(";"), l.innerText = "关闭";
    var m = document.createElement("iframe");
    m.style.cssText = ["width:100%", "height:100%", "border:0", "overflow:hidden"].join(";"), k.appendChild(l), g.appendChild(k), g.appendChild(m), document.body.appendChild(g), m.src = d, l.addEventListener("click", function () {
      minerva_hook.beforeFunction("null", this, arguments);
      e.hide();
      var a = document.createEvent("HTMLEvents");
      a.initEvent("close", !1, !1), g.dispatchEvent(a);
      minerva_hook.afterFunction("null", this, {
        a: a
      });
    }, !1), this.addEventListener = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      g.addEventListener.apply(g, arguments);
      minerva_hook.afterFunction("null", this, {});
    }, this.removeEventListener = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      g.removeEventListener.apply(g, arguments);
      minerva_hook.afterFunction("null", this, {});
    }, this.show = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      document.addEventListener("touchmove", c, !1), g.style.display = "block", window.scrollTo(0, 0);
      minerva_hook.afterFunction("null", this, {});
    }, this.hide = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      document.removeEventListener("touchmove", c), window.scrollTo(0, -h.top), g.parentNode && g.parentNode.removeChild(g);
      minerva_hook.afterFunction("null", this, {});
    };
    minerva_hook.afterFunction("d", this, {
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
  }

  function e(a) {
    minerva_hook.beforeFunction("e", this, arguments);
    var c = this,
        d = this.options,
        e = this.params;
    _minerva_ret = a().then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var a = d.retJson,
          f = a.ret;

      if (f instanceof Array && (f = f.join(",")), (f.indexOf("SESSION_EXPIRED") > -1 || f.indexOf("SID_INVALID") > -1 || f.indexOf("AUTH_REJECT") > -1 || f.indexOf("NEED_LOGIN") > -1) && (a.retType = k.SESSION_EXPIRED, !d.WindVaneRequest && (j.LoginRequest === !0 || d.LoginRequest === !0 || e.needLogin === !0))) {
        if (!b.login) throw new Error("LOGIN_NOT_FOUND::缺少lib.login");
        if (d.CDR !== !0) return b.login.goLoginAsync().then(function (a) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest]);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        })["catch"](function (a) {
          minerva_hook.beforeFunction("null", this, arguments);
          throw "CANCEL" === a ? new Error("LOGIN_CANCEL::用户取消登录") : new Error("LOGIN_FAILURE::用户登录失败");
          minerva_hook.afterFunction("null", this, {});
        });
        b.login.goLogin();
      }

      minerva_hook.afterFunction("null", this, {
        a: a,
        f: f
      });
    });
    minerva_hook.afterFunction("e", this, {
      c: c,
      d: d,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function f(a) {
    minerva_hook.beforeFunction("f", this, arguments);
    var b = this.options;
    this.params;
    _minerva_ret = b.H5Request !== !0 || j.AntiFlood !== !0 && b.AntiFlood !== !0 ? void a() : a().then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var a = b.retJson,
          c = a.ret;
      c instanceof Array && (c = c.join(",")), c.indexOf("FAIL_SYS_USER_VALIDATE") > -1 && a.data.url && (b.AntiFloodReferer ? location.href = a.data.url.replace(/(http_referer=).+/, "$1" + b.AntiFloodReferer) : location.href = a.data.url);
      minerva_hook.afterFunction("null", this, {
        a: a,
        c: c
      });
    });
    minerva_hook.afterFunction("f", this, {
      b: b,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  function g(b) {
    minerva_hook.beforeFunction("g", this, arguments);
    var c = this,
        e = this.options,
        f = this.params;
    _minerva_ret = f.forceAntiCreep !== !0 && e.H5Request !== !0 || j.AntiCreep !== !0 && e.AntiCreep !== !0 ? void b() : b().then(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var b = e.retJson,
          g = b.ret;
      _minerva_ret = (g instanceof Array && (g = g.join(",")), g.indexOf("RGV587_ERROR::SM") > -1 && b.data.url ? new h(function (e, g) {
        minerva_hook.beforeFunction("null", this, arguments);

        function h() {
          minerva_hook.beforeFunction("h", this, arguments);
          k.removeEventListener("close", h), a.removeEventListener("message", i), g("USER_INPUT_CANCEL::用户取消输入");
          minerva_hook.afterFunction("h", this, {});
        }

        function i(b) {
          minerva_hook.beforeFunction("i", this, arguments);
          var d;

          try {
            d = JSON.parse(b.data) || {};
          } catch (j) {}

          if (d && "child" === d.type) {
            k.removeEventListener("close", h), a.removeEventListener("message", i), k.hide();
            var l;

            try {
              l = JSON.parse(decodeURIComponent(d.content)), "string" == typeof l && (l = JSON.parse(l));

              for (var m in l) f[m] = l[m];

              c.__sequence([c.__processToken, c.__processRequestUrl, c.__processUnitPrefix, c.middlewares, c.__processRequest]).then(e);
            } catch (j) {
              g("USER_INPUT_FAILURE::用户输入失败");
            }
          }

          minerva_hook.afterFunction("i", this, {
            d: d
          });
        }

        var j = b.data.url,
            k = new d("", j);
        k.addEventListener("close", h, !1), a.addEventListener("message", i, !1), k.show();
        minerva_hook.afterFunction("null", this, {
          j: j,
          k: k
        });
      }) : void 0);
      minerva_hook.afterFunction("null", this, {
        b: b,
        g: g,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    });
    minerva_hook.afterFunction("g", this, {
      c: c,
      e: e,
      f: f,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  if (!b || !b.mtop || b.mtop.ERROR) throw new Error("Mtop 初始化失败！请参考Mtop文档http://gitlab.alibaba-inc.com/mtb/lib-mtop");
  var h = a.Promise,
      i = b.mtop.CLASS,
      j = b.mtop.config,
      k = b.mtop.RESPONSE_TYPE;
  b.mtop.middlewares.push(e), b.mtop.loginRequest = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    var d = {
      LoginRequest: !0,
      H5Request: !0,
      successCallback: b,
      failureCallback: c || b
    };
    _minerva_ret = new i(a).request(d);
    minerva_hook.afterFunction("null", this, {
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, b.mtop.antiFloodRequest = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    var d = {
      AntiFlood: !0,
      successCallback: b,
      failureCallback: c || b
    };
    _minerva_ret = new i(a).request(d);
    minerva_hook.afterFunction("null", this, {
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, b.mtop.middlewares.push(f), b.mtop.antiCreepRequest = function (a, b, c) {
    minerva_hook.beforeFunction("null", this, arguments);
    var d = {
      AntiCreep: !0,
      successCallback: b,
      failureCallback: c || b
    };
    _minerva_ret = new i(a).request(d);
    minerva_hook.afterFunction("null", this, {
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }, b.mtop.middlewares.push(g);
  minerva_hook.afterFunction("null", this, {
    h: h,
    i: i,
    j: j,
    k: k
  });
}(window, window.lib || (window.lib = {}));