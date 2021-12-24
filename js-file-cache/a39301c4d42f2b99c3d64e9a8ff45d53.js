define("p/content/index", ["node"], function (n, e, t) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r = n("node");

  _minerva_ret = function (n) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(r) {
      minerva_hook.beforeFunction("e", this, arguments);
      if (t[r]) return t[r].exports;
      var i = t[r] = {
        exports: {},
        id: r,
        loaded: !1
      };
      _minerva_ret = (n[r].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports);
      minerva_hook.afterFunction("e", this, {
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var t = {};
    _minerva_ret = (e.m = n, e.c = t, e.p = "/build/", e(0));
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }([function (n, e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r() {
      minerva_hook.beforeFunction("r", this, arguments);
      var n = this;
      n.list = [];
      var e = location.search,
          t = new Object();

      if (e.indexOf("?") != -1) {
        var r = e.substr(1);
        strs = r.split("&");

        for (var o = 0; o < strs.length; o++) t[strs[o].split("=")[0]] = unescape(strs[o].split("=")[1]);
      }

      var s = t.contentId;
      console.log(s), lib.mtop.request({
        api: "mtop.polaris.pc.mini.detail",
        v: "1.0",
        data: {
          contentId: s
        },
        ecode: 1
      }, function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        console.log(n, "res");
        var e = n.data.model;
        i(".top-detail").html('\n    <div id="J_Goods" class="yhh-goods">\n      <div class="yhh-goods-figure">\n        <a href="' + e.url + '" target="_blank" >\n          <img src="' + e.pic + '_300x300.jpg" width="280" height="280"></a>\n      </div>\n      <div class="yhh-goods-info">\n        <h2>      \n            <a href="' + e.url + '" target="_blank">' + e.title + '</a>\n        </h2>\n        <p class="yhh-goods-recommend">\u6765\u81ea\u6f6e\u54c1\u8fbe\u4eba' + e.authorNick + "\u63a8\u8350\uff1a</p>\n        <p>" + e.content + '</p>\n        <p class="yhh-goods-action">\n          <a class="yhh-goods-link" href="' + e.url + '" target="_blank">\n            <span class="yhh-goods-price">\n                <span class="yhh-price-tag">\xa5</span>' + e.promotionPrice + '\n            </span>\n            <span class="yhh-goods-view">\u67e5\u770b\u5b9d\u8d1d <i class="yhh-icon">&gt;</i></span>\n          </a>\n          <span class="yhh-goods-social">\n              <span class="yhh-goods-like">\n                  <i class="yhh-icon" ></i> ' + e.zanTotal + "\u4eba\u8bf4\u597d\n              </span>\n          </span>\n        </p>\n    </div>\n    ");
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      }, function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        console.log(n, "err");
        minerva_hook.afterFunction("null", this, {});
      }), lib.mtop.request({
        api: "mtop.polaris.pc.mini.recommendList",
        v: "1.0",
        data: {
          contentId: s
        },
        ecode: 1
      }, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        console.log(e, "res");
        var t = e.data.model;
        n.list = n.list.concat(t);
        var r = a({
          list: n.list
        });
        i(".waterfull").html(r);
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r
        });
      }, function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        console.log(n, "err");
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("r", this, {
        n: n,
        e: e,
        t: t,
        s: s
      });
    }

    var i = t(1);
    t(2);
    var a = t(3);
    new r(), n.exports = r;
    minerva_hook.afterFunction("null", this, {
      i: i,
      a: a
    });
  }, function (n, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    n.exports = r;
    minerva_hook.afterFunction("null", this, {});
  }, function (n, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    minerva_hook.afterFunction("null", this, {});
  }, function (n, e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = t(4);

    n.exports = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      var n = function t(n) {
        minerva_hook.beforeFunction("t", this, arguments);

        function e(n, e, r) {
          minerva_hook.beforeFunction("e", this, arguments);
          var i = n.data,
              a = n.affix;
          e.data += '\n    <li>\n      <a href="', y.line = 3;
          var o = (t = a.url) !== r ? t : (t = i.url) !== r ? t : n.resolveLooseUp(["url"]);
          e = e.writeEscaped(o), e.data += '" target="_blank">\n        <img src="', y.line = 4;
          var s = (t = a.pic) !== r ? t : (t = i.pic) !== r ? t : n.resolveLooseUp(["pic"]);
          e = e.writeEscaped(s), e.data += '_250x250xz.jpg" width="250" height="250">\n          <h3>\n            <div class="yhh-list-div">\n                ', y.line = 7;
          var l = (t = a.title) !== r ? t : (t = i.title) !== r ? t : n.resolveLooseUp(["title"]);
          e = e.writeEscaped(l), e.data += '\n            </div>\n          </h3>\n              <p class="yhh-list-summary">\u201c', y.line = 10;
          var f = (t = a.summary) !== r ? t : (t = i.summary) !== r ? t : n.resolveLooseUp(["summary"]);
          e = e.writeEscaped(f), e.data += '\u201d</p>\n              <p class="yhh-list-extra">\n                  <span class="yhh-list-like">', y.line = 12;
          var u = (t = a.zanTotal) !== r ? t : (t = i.zanTotal) !== r ? t : n.resolveLooseUp(["zanTotal"]);
          e = e.writeEscaped(u), e.data += '\u4eba\u8bf4\u597d</span>\n                  <span class="yhh-list-price"><span class="yhh-price-tag">\xa5</span>', y.line = 13;
          var c = (t = a.promotionPrice) !== r ? t : (t = i.promotionPrice) !== r ? t : n.resolveLooseUp(["promotionPrice"]);
          _minerva_ret = (e = e.writeEscaped(c), e.data += "</span>\n              </p>\n          </a>\n      </li>\n    ", e);
          minerva_hook.afterFunction("e", this, {
            i: i,
            a: a,
            o: o,
            s: s,
            l: l,
            f: f,
            u: u,
            c: c,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }

        var t,
            r,
            i,
            a,
            o,
            s,
            l,
            f,
            u,
            c,
            d,
            p = this,
            h = p.root,
            v = p.buffer,
            m = p.scope,
            g = p.runtime,
            x = p.name,
            y = p.pos,
            w = m.data,
            b = m.affix,
            k = h.nativeCommands,
            E = h.utils,
            L = E.callFn,
            T = E.callDataFn,
            C = E.callCommand,
            I = k.range,
            j = k["void"],
            O = k.foreach,
            _ = k.forin,
            A = k.each,
            N = k["with"],
            B = k["if"],
            F = k.set,
            P = k.include,
            S = k.parse,
            U = k.extend,
            q = k.block,
            z = k.macro,
            D = k["debugger"];
        v.data += "   ", y.line = 1;
        var M = (t = b.list) !== n ? t : (t = w.list) !== n ? t : m.resolveLooseUp(["list"]);
        _minerva_ret = v = A.call(p, m, {
          params: [M],
          fn: e
        }, v);
        minerva_hook.afterFunction("t", this, {
          t: t,
          r: r,
          i: i,
          a: a,
          o: o,
          s: s,
          l: l,
          f: f,
          u: u,
          c: c,
          d: d,
          p: p,
          h: h,
          v: v,
          m: m,
          g: g,
          x: x,
          y: y,
          w: w,
          b: b,
          k: k,
          E: E,
          L: L,
          T: T,
          C: C,
          I: I,
          j: j,
          O: O,
          _: _,
          A: A,
          N: N,
          B: B,
          F: F,
          P: P,
          S: S,
          U: U,
          q: q,
          z: z,
          D: D,
          M: M,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      if (this.root instanceof r) return n.apply(this, arguments);
      var e = new r(n);
      _minerva_ret = e.render.apply(e, arguments);
      minerva_hook.afterFunction("null", this, {
        n: n,
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      r: r
    });
  }, function (n, e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(n, e, t, r, i, a, o, s) {
      minerva_hook.beforeFunction("r", this, arguments);
      this.name = n, this.originalName = a || n, this.runtime = e, this.root = t, this.pos = {
        line: 1
      }, this.scope = r, this.buffer = i, this.fn = o, this.parent = s;
      minerva_hook.afterFunction("r", this, {});
    }

    function i(n, e, t) {
      minerva_hook.beforeFunction("i", this, arguments);
      var r = t[0],
          i = n && n[r] || e && e[r] || m[r];
      if (1 === t.length) return i;
      if (i) for (var a = t.length, o = 1; o < a; o++) if (!(i = i[t[o]])) return !1;
      _minerva_ret = i;
      minerva_hook.afterFunction("i", this, {
        r: r,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(n, e) {
      minerva_hook.beforeFunction("a", this, arguments);
      var t = n.split("/"),
          r = e.split("/");
      t.pop();

      for (var i = 0, a = r.length; i < a; i++) {
        var o = r[i];
        "." === o || (".." === o ? t.pop() : t.push(o));
      }

      _minerva_ret = t.join("/");
      minerva_hook.afterFunction("a", this, {
        t: t,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(n, e, t, r, a, o) {
      minerva_hook.beforeFunction("o", this, arguments);
      var s, l, f;
      if (o || (f = i(n.runtime.commands, n.root.config.commands, a)), f) return f.call(n, e, t, r);

      if (f !== !1) {
        var u = a.slice(0, -1);
        if (null == (s = e.resolve(u, o))) return r.error("Execute function `" + a.join(".") + "` Error: " + u.join(".") + " is undefined or null"), r;
        if (l = s[a[a.length - 1]]) try {
          return l.apply(s, t.params || []);
        } catch (c) {
          return r.error("Execute function `" + a.join(".") + "` Error: " + c.message), r;
        }
      }

      _minerva_ret = (r.error("Command Not Found: " + a.join(".")), r);
      minerva_hook.afterFunction("o", this, {
        s: s,
        l: l,
        f: f,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function s(n, e) {
      minerva_hook.beforeFunction("s", this, arguments);
      var t = this;
      t.fn = n, t.config = h.merge(s.globalConfig, e), this.subNameResolveCache = {};
      minerva_hook.afterFunction("s", this, {
        t: t
      });
    }

    function l(n, e, t) {
      minerva_hook.beforeFunction("l", this, arguments);
      if ("." !== e.charAt(0)) return e;
      var r = t + "_ks_" + e,
          i = n.subNameResolveCache,
          o = i[r];
      _minerva_ret = o ? o : e = i[r] = a(t, e);
      minerva_hook.afterFunction("l", this, {
        r: r,
        i: i,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function f(n, e, t, r, i, a) {
      minerva_hook.beforeFunction("f", this, arguments);
      var o = l(n, a, i.name),
          s = r.insert(),
          f = s.next;
      _minerva_ret = (c(n, o, i.runtime, e, s, a, t, r.tpl), f);
      minerva_hook.afterFunction("f", this, {
        o: o,
        s: s,
        f: f,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function u(n, e, t, i, a) {
      minerva_hook.beforeFunction("u", this, arguments);
      var o = t.insert(),
          s = o.next,
          l = new r(a.TPL_NAME, i.runtime, n, e, o, undefined, a, t.tpl);
      _minerva_ret = (o.tpl = l, d(l), s);
      minerva_hook.afterFunction("u", this, {
        o: o,
        s: s,
        l: l,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function c(n, e, t, i, a, o, s, l) {
      minerva_hook.beforeFunction("c", this, arguments);
      var f = new r(e, t, n, i, a, o, undefined, l);
      a.tpl = f, n.config.loader.load(f, function (n, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        "function" == typeof e ? (f.fn = e, d(f)) : n ? a.error(n) : (e = e || "", s ? a.writeEscaped(e) : a.data += e, a.end());
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("c", this, {
        f: f
      });
    }

    function d(n) {
      minerva_hook.beforeFunction("d", this, arguments);
      var e = n.fn();

      if (e) {
        var t = n.runtime,
            r = t.extendTpl,
            i;
        if (r && !(i = r.params[0])) return e.error("extend command required a non-empty parameter");
        var a = t.extendTplFn,
            o = t.extendTplBuffer;
        return a ? (t.extendTpl = null, t.extendTplBuffer = null, t.extendTplFn = null, u(n.root, n.scope, o, n, a).end()) : i && (t.extendTpl = null, t.extendTplBuffer = null, f(n.root, n.scope, 0, o, n, i).end()), e.end();
      }

      minerva_hook.afterFunction("d", this, {
        e: e
      });
    }

    function p(n, e, t) {
      minerva_hook.beforeFunction("p", this, arguments);
      var r = e.params;
      if (!r[0]) return t.error("include command required a non-empty parameter");
      var i = n,
          a = r[1],
          o = e.hash;
      _minerva_ret = (o && (a = a ? h.mix({}, a) : {}, h.mix(a, o)), a && (i = new g(a, undefined, n)), i);
      minerva_hook.afterFunction("p", this, {
        r: r,
        i: i,
        a: a,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var h = t(5),
        v = t(6),
        m = {},
        g = t(7),
        x = t(8),
        y = {
      callFn: o,
      callDataFn: function w(n, e) {
        minerva_hook.beforeFunction("w", this, arguments);

        for (var t = e[0], r = t, i = 1; i < e.length; i++) {
          var a = e[i];
          if (!r || null == r[a]) return "";
          t = r, r = r[a];
        }

        _minerva_ret = r.apply(t, n || []);
        minerva_hook.afterFunction("w", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      callCommand: function b(n, e, t, r, i) {
        minerva_hook.beforeFunction("b", this, arguments);
        _minerva_ret = o(n, e, t, r, i);
        minerva_hook.afterFunction("b", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    h.mix(s, {
      config: function k(n, e) {
        minerva_hook.beforeFunction("k", this, arguments);
        var t = this.globalConfig = this.globalConfig || {};
        if (!arguments.length) return t;
        e !== undefined ? t[n] = e : h.mix(t, n);
        minerva_hook.afterFunction("k", this, {
          t: t
        });
      },
      nativeCommands: v,
      utils: y,
      util: h,
      addCommand: function E(n, e) {
        minerva_hook.beforeFunction("E", this, arguments);
        m[n] = e;
        minerva_hook.afterFunction("E", this, {});
      },
      removeCommand: function L(n) {
        minerva_hook.beforeFunction("L", this, arguments);
        delete m[n];
        minerva_hook.afterFunction("L", this, {});
      }
    }), s.prototype = {
      constructor: s,
      Scope: g,
      nativeCommands: v,
      utils: y,
      removeCommand: function T(n) {
        minerva_hook.beforeFunction("T", this, arguments);
        var e = this.config;
        e.commands && delete e.commands[n];
        minerva_hook.afterFunction("T", this, {
          e: e
        });
      },
      addCommand: function C(n, e) {
        minerva_hook.beforeFunction("C", this, arguments);
        var t = this.config;
        t.commands = t.commands || {}, t.commands[n] = e;
        minerva_hook.afterFunction("C", this, {
          t: t
        });
      },
      include: function I(n, e, t, r) {
        minerva_hook.beforeFunction("I", this, arguments);
        _minerva_ret = f(this, p(n, e, t), e.escape, t, r, e.params[0]);
        minerva_hook.afterFunction("I", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      includeModule: function j(n, e, t, r) {
        minerva_hook.beforeFunction("j", this, arguments);
        _minerva_ret = u(this, p(n, e, t), t, r, e.params[0]);
        minerva_hook.afterFunction("j", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      render: function O(n, e, t) {
        minerva_hook.beforeFunction("O", this, arguments);
        var i = "",
            a = this,
            o = a.fn,
            l = a.config;
        "function" == typeof e && (t = e, e = null), e = e || {}, t = t || function (n, e) {
          minerva_hook.beforeFunction("null", this, arguments);
          if (n) throw n instanceof Error || (n = new Error(n)), n;
          i = e;
          minerva_hook.afterFunction("null", this, {
            i: i
          });
        };
        var f = a.config.name;
        !f && o && o.TPL_NAME && (f = o.TPL_NAME);
        var u;
        u = n instanceof g ? n : new g(n);
        var c = new s.LinkedBuffer(t, l).head,
            p = new r(f, {
          commands: e.commands
        }, a, u, c, f, o);
        _minerva_ret = (c.tpl = p, o ? (d(p), i) : (l.loader.load(p, function (n, e) {
          minerva_hook.beforeFunction("null", this, arguments);
          e ? (p.fn = a.fn = e, d(p)) : n && c.error(n);
          minerva_hook.afterFunction("null", this, {});
        }), i));
        minerva_hook.afterFunction("O", this, {
          i: i,
          a: a,
          o: o,
          l: l,
          f: f,
          u: u,
          u: u,
          c: c,
          p: p,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, s.Scope = g, s.LinkedBuffer = x, n.exports = s;
    minerva_hook.afterFunction("null", this, {
      h: h,
      v: v,
      m: m,
      g: g,
      x: x,
      y: y
    });
  }, function (n, e) {
    minerva_hook.beforeFunction("null", this, arguments);
    (function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      function t() {
        minerva_hook.beforeFunction("t", this, arguments);
        var n = "";

        for (var e in r) n += e + "|";

        _minerva_ret = (n = n.slice(0, -1), a = new RegExp(n, "g"));
        minerva_hook.afterFunction("t", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var r = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        "`": "&#x60;",
        "/": "&#x2F;",
        '"': "&quot;",
        "'": "&#x27;"
      },
          i = /[&<>"'`]/,
          a = t(),
          o = /\\?\{([^{}]+)\}/g,
          s = void 0 !== e ? e : window,
          l,
          f = Object.prototype.toString;
      n.exports = l = {
        isArray: Array.isArray || function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = "[object Array]" === f.call(n);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        keys: Object.keys || function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          var e = [],
              t;

          for (t in n) n.hasOwnProperty(t) && e.push(t);

          _minerva_ret = e;
          minerva_hook.afterFunction("null", this, {
            e: e,
            t: t,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        each: function u(n, e, t) {
          minerva_hook.beforeFunction("u", this, arguments);

          if (n) {
            var r,
                i,
                a,
                o = 0,
                s = n && n.length,
                f = s === undefined || "[object Function]" === Object.prototype.toString.call(n);
            if (t = t || null, f) for (a = l.keys(n); o < a.length && (r = a[o], e.call(t, n[r], r, n) !== !1); o++);else for (i = n[0]; o < s && e.call(t, i, o, n) !== !1; i = n[++o]);
          }

          _minerva_ret = n;
          minerva_hook.afterFunction("u", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        mix: function c(n, e) {
          minerva_hook.beforeFunction("c", this, arguments);
          if (e) for (var t in e) n[t] = e[t];
          _minerva_ret = n;
          minerva_hook.afterFunction("c", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        globalEval: function d(n) {
          minerva_hook.beforeFunction("d", this, arguments);
          s.execScript ? s.execScript(n) : function (n) {
            minerva_hook.beforeFunction("null", this, arguments);
            s.eval.call(s, n);
            minerva_hook.afterFunction("null", this, {});
          }(n);
          minerva_hook.afterFunction("d", this, {});
        },
        substitute: function p(n, e, t) {
          minerva_hook.beforeFunction("p", this, arguments);
          _minerva_ret = "string" == typeof n && e ? n.replace(t || /\\?\{([^{}]+)\}/g, function (n, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = "\\" === n.charAt(0) ? n.slice(1) : e[t] === undefined ? "" : e[t];
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }) : n;
          minerva_hook.afterFunction("p", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        escapeHtml: function h(n) {
          minerva_hook.beforeFunction("h", this, arguments);
          _minerva_ret = (n = "" + n, i.test(n) ? (n + "").replace(a, function (n) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = r[n];
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }) : n);
          minerva_hook.afterFunction("h", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        merge: function v() {
          minerva_hook.beforeFunction("v", this, arguments);

          for (var n = 0, e = arguments.length, t = {}; n < e; n++) {
            var r = arguments[n];
            r && l.mix(t, r);
          }

          _minerva_ret = t;
          minerva_hook.afterFunction("v", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      };
      minerva_hook.afterFunction("null", this, {
        r: r,
        i: i,
        a: a,
        o: o,
        s: s,
        l: l,
        f: f
      });
    }).call(e, function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = this;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }());
    minerva_hook.afterFunction("null", this, {});
  }, function (n, e, t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = t(7),
        i = t(5),
        a = {
      range: function o(n, e) {
        minerva_hook.beforeFunction("o", this, arguments);
        var t = e.params,
            r = t[0],
            i = t[1],
            a = t[2];
        a ? (r > i && a > 0 || r < i && a < 0) && (a = -a) : a = r > i ? -1 : 1;

        for (var o = [], s = r; r < i ? s < i : s > i; s += a) o.push(s);

        _minerva_ret = o;
        minerva_hook.afterFunction("o", this, {
          t: t,
          r: r,
          i: i,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      "void": function s() {
        minerva_hook.beforeFunction("s", this, arguments);
        _minerva_ret = undefined;
        minerva_hook.afterFunction("s", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      foreach: function l(n, e, t) {
        minerva_hook.beforeFunction("l", this, arguments);
        var i = e.params,
            a = i[0],
            o = i[2] || "xindex",
            s = i[1],
            l,
            f,
            u,
            c;
        if (a) for (l = a.length, c = 0; c < l; c++) f = new r(a[c], {
          xcount: l,
          xindex: c
        }, n), u = f.affix, "xindex" !== o && (u[o] = c, u.xindex = undefined), s && (u[s] = a[c]), t = e.fn(f, t);
        _minerva_ret = t;
        minerva_hook.afterFunction("l", this, {
          i: i,
          a: a,
          o: o,
          s: s,
          l: l,
          f: f,
          u: u,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      forin: function f(n, e, t) {
        minerva_hook.beforeFunction("f", this, arguments);
        var i = e.params,
            a = i[0],
            o = i[2] || "xindex",
            s = i[1],
            l,
            f,
            u;
        if (a) for (u in a) l = new r(a[u], {
          xindex: u
        }, n), f = l.affix, "xindex" !== o && (f[o] = u, f.xindex = undefined), s && (f[s] = a[u]), t = e.fn(l, t);
        _minerva_ret = t;
        minerva_hook.afterFunction("f", this, {
          i: i,
          a: a,
          o: o,
          s: s,
          l: l,
          f: f,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      each: function u(n, e, t) {
        minerva_hook.beforeFunction("u", this, arguments);
        var r = e.params,
            o = r[0];
        _minerva_ret = o ? i.isArray(o) ? a.foreach(n, e, t) : a.forin(n, e, t) : t;
        minerva_hook.afterFunction("u", this, {
          r: r,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      "with": function c(n, e, t) {
        minerva_hook.beforeFunction("c", this, arguments);
        var i = e.params,
            a = i[0];

        if (a) {
          var o = new r(a, undefined, n);
          t = e.fn(o, t);
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("c", this, {
          i: i,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      "if": function d(n, e, t) {
        minerva_hook.beforeFunction("d", this, arguments);

        if (e.params[0]) {
          var r = e.fn;
          r && (t = r(n, t));
        } else {
          var i = !1,
              a = e.elseIfs,
              o = e.inverse;
          if (a) for (var s = 0, l = a.length; s < l; s++) {
            var f = a[s];

            if (i = f.test(n)) {
              t = f.fn(n, t);
              break;
            }
          }
          !i && o && (t = o(n, t));
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("d", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      set: function p(n, e, t) {
        minerva_hook.beforeFunction("p", this, arguments);

        for (var r = e.hash, i = r.length, a = 0; a < i; a++) {
          var o = r[a],
              s = o.key,
              l = o.depth,
              f = o.value;

          if (1 === s.length) {
            for (var u = n.root; l && u !== n;) n = n.parent, --l;

            n.set(s[0], f);
          } else {
            var c = n.resolve(s.slice(0, -1), l);
            c && (c[s[s.length - 1]] = f);
          }
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("p", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      include: 1,
      parse: 1,
      extend: 1,
      block: function h(n, e, t) {
        minerva_hook.beforeFunction("h", this, arguments);
        var r = this,
            i = r.runtime,
            a = e.params,
            o = a[0],
            s;
        2 === a.length && (s = a[0], o = a[1]);
        var l = i.blocks = i.blocks || {},
            f = l[o],
            u,
            c = {
          fn: e.fn,
          type: s
        };

        if (f) {
          if (f.type) if ("append" === f.type) c.next = f, l[o] = c;else if ("prepend" === f.type) {
            var d;

            for (u = f; u && "prepend" === u.type;) d = u, u = u.next;

            c.next = u, d.next = c;
          }
        } else l[o] = c;

        if (!i.extendTpl) for (u = l[o]; u;) u.fn && (t = u.fn.call(r, n, t)), u = u.next;
        _minerva_ret = t;
        minerva_hook.afterFunction("h", this, {
          r: r,
          i: i,
          a: a,
          o: o,
          s: s,
          l: l,
          f: f,
          u: u,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      macro: function v(n, e, t) {
        minerva_hook.beforeFunction("v", this, arguments);
        var i = e.hash,
            a = e.params,
            o = a[0],
            s = a.slice(1),
            l = this,
            f = l.runtime,
            u = f.macros = f.macros || {},
            v = u[o];
        if (e.fn) u[o] = {
          paramNames: s,
          hash: i,
          fn: e.fn
        };else if (v) {
          var c = v.hash || {},
              d;
          if (d = v.paramNames) for (var p = 0, h = d.length; p < h; p++) {
            var m = d[p];
            c[m] = s[p];
          }
          if (i) for (var g in i) c[g] = i[g];
          var x = new r(c);
          x.root = n.root, t = v.fn.call(l, x, t);
        } else {
          var y = "can not find macro: " + o;
          t.error(y);
        }
        _minerva_ret = t;
        minerva_hook.afterFunction("v", this, {
          i: i,
          a: a,
          o: o,
          s: s,
          l: l,
          f: f,
          u: u,
          v: v,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    a["debugger"] = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      i.globalEval("debugger");
      minerva_hook.afterFunction("null", this, {});
    }, n.exports = a;
    minerva_hook.afterFunction("null", this, {
      r: r,
      i: i,
      a: a
    });
  }, function (n, e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(n, e, t) {
      minerva_hook.beforeFunction("t", this, arguments);
      n !== undefined ? this.data = n : this.data = {}, t ? (this.parent = t, this.root = t.root) : (this.parent = undefined, this.root = this), this.affix = e || {}, this.ready = !1;
      minerva_hook.afterFunction("t", this, {});
    }

    t.prototype = {
      isScope: 1,
      constructor: t,
      setParent: function r(n) {
        minerva_hook.beforeFunction("r", this, arguments);
        this.parent = n, this.root = n.root;
        minerva_hook.afterFunction("r", this, {});
      },
      set: function i(n, e) {
        minerva_hook.beforeFunction("i", this, arguments);
        this.affix[n] = e;
        minerva_hook.afterFunction("i", this, {});
      },
      setData: function a(n) {
        minerva_hook.beforeFunction("a", this, arguments);
        this.data = n;
        minerva_hook.afterFunction("a", this, {});
      },
      getData: function o() {
        minerva_hook.beforeFunction("o", this, arguments);
        _minerva_ret = this.data;
        minerva_hook.afterFunction("o", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      mix: function s(n) {
        minerva_hook.beforeFunction("s", this, arguments);
        var e = this.affix;

        for (var t in n) e[t] = n[t];

        minerva_hook.afterFunction("s", this, {
          e: e
        });
      },
      get: function l(n) {
        minerva_hook.beforeFunction("l", this, arguments);
        var e = this.data,
            t,
            r = this.affix;
        _minerva_ret = (null != e && (t = e[n]), t !== undefined ? t : r[n]);
        minerva_hook.afterFunction("l", this, {
          e: e,
          t: t,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolveInternalOuter: function f(n) {
        minerva_hook.beforeFunction("f", this, arguments);
        var e = n[0],
            t,
            r = this,
            i = r;
        if ("this" === e) t = r.data;else if ("root" === e) i = i.root, t = i.data;else {
          if (!e) return [i.data];

          do {
            t = i.get(e);
          } while (t === undefined && (i = i.parent));
        }
        _minerva_ret = [undefined, t];
        minerva_hook.afterFunction("f", this, {
          e: e,
          t: t,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolveInternal: function u(n) {
        minerva_hook.beforeFunction("u", this, arguments);
        var e = this.resolveInternalOuter(n);
        if (1 === e.length) return e[0];
        var t,
            r = n.length,
            i = e[1];
        if (i === undefined) return undefined;

        for (t = 1; t < r; t++) {
          if (null == i) return i;
          i = i[n[t]];
        }

        _minerva_ret = i;
        minerva_hook.afterFunction("u", this, {
          e: e,
          t: t,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolveLooseInternal: function c(n) {
        minerva_hook.beforeFunction("c", this, arguments);
        var e = this.resolveInternalOuter(n);
        if (1 === e.length) return e[0];
        var t,
            r = n.length,
            i = e[1];

        for (t = 1; null != i && t < r; t++) i = i[n[t]];

        _minerva_ret = i;
        minerva_hook.afterFunction("c", this, {
          e: e,
          t: t,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolveUp: function d(n) {
        minerva_hook.beforeFunction("d", this, arguments);
        _minerva_ret = this.parent && this.parent.resolveInternal(n);
        minerva_hook.afterFunction("d", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolveLooseUp: function p(n) {
        minerva_hook.beforeFunction("p", this, arguments);
        _minerva_ret = this.parent && this.parent.resolveLooseInternal(n);
        minerva_hook.afterFunction("p", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolveOuter: function h(n, e) {
        minerva_hook.beforeFunction("h", this, arguments);
        var t = this,
            r = t,
            i;

        if (!e && 1 === n.length) {
          if ((i = t.get(n[0])) !== undefined) return [i];
          e = 1;
        }

        if (e) for (; r && e--;) r = r.parent;
        _minerva_ret = r ? [undefined, r] : [undefined];
        minerva_hook.afterFunction("h", this, {
          t: t,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolveLoose: function v(n, e) {
        minerva_hook.beforeFunction("v", this, arguments);
        var t = this.resolveOuter(n, e);
        _minerva_ret = 1 === t.length ? t[0] : t[1].resolveLooseInternal(n);
        minerva_hook.afterFunction("v", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolve: function m(n, e) {
        minerva_hook.beforeFunction("m", this, arguments);
        var t = this.resolveOuter(n, e);
        _minerva_ret = 1 === t.length ? t[0] : t[1].resolveInternal(n);
        minerva_hook.afterFunction("m", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, n.exports = t;
    minerva_hook.afterFunction("null", this, {});
  }, function (n, e, t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(n, e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      this.list = n, this.init(), this.next = e, this.ready = !1, this.tpl = t;
      minerva_hook.afterFunction("r", this, {});
    }

    function i(n, e) {
      minerva_hook.beforeFunction("i", this, arguments);
      var t = this;
      t.config = e, t.head = new r(t, undefined), t.callback = n, this.init();
      minerva_hook.afterFunction("i", this, {
        t: t
      });
    }

    var a = t(5);
    r.prototype = {
      constructor: r,
      isBuffer: 1,
      init: function o() {
        minerva_hook.beforeFunction("o", this, arguments);
        this.data = "";
        minerva_hook.afterFunction("o", this, {});
      },
      append: function s(n) {
        minerva_hook.beforeFunction("s", this, arguments);
        _minerva_ret = (this.data += n, this);
        minerva_hook.afterFunction("s", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      write: function l(n) {
        minerva_hook.beforeFunction("l", this, arguments);

        if (null != n) {
          if (n.isBuffer) return n;
          this.data += n;
        }

        _minerva_ret = this;
        minerva_hook.afterFunction("l", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      writeEscaped: function f(n) {
        minerva_hook.beforeFunction("f", this, arguments);

        if (null != n) {
          if (n.isBuffer) return n;
          this.data += a.escapeHtml(n);
        }

        _minerva_ret = this;
        minerva_hook.afterFunction("f", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      insert: function u() {
        minerva_hook.beforeFunction("u", this, arguments);
        var n = this,
            e = n.list,
            t = n.tpl,
            i = new r(e, n.next, t),
            a = new r(e, i, t);
        _minerva_ret = (n.next = a, n.ready = !0, a);
        minerva_hook.afterFunction("u", this, {
          n: n,
          e: e,
          t: t,
          i: i,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      async: function c(n) {
        minerva_hook.beforeFunction("c", this, arguments);
        var e = this.insert(),
            t = e.next;
        _minerva_ret = (n(e), t);
        minerva_hook.afterFunction("c", this, {
          e: e,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      error: function d(n) {
        minerva_hook.beforeFunction("d", this, arguments);
        var e = this.list.callback;

        if (e) {
          var t = this.tpl;

          if (t) {
            n instanceof Error || (n = new Error(n));
            var r = t.name,
                i = t.pos.line,
                a = "XTemplate error in file: " + r + " at line " + i + ": ";
            n.stack = a + n.stack, n.message = a + n.message, n.xtpl = {
              pos: {
                line: i
              },
              name: r
            };
          }

          this.list.callback = null, e(n, undefined);
        }

        minerva_hook.afterFunction("d", this, {
          e: e
        });
      },
      end: function p() {
        minerva_hook.beforeFunction("p", this, arguments);
        var n = this;
        _minerva_ret = (n.list.callback && (n.ready = !0, n.list.flush()), n);
        minerva_hook.afterFunction("p", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, i.prototype = {
      constructor: i,
      init: function h() {
        minerva_hook.beforeFunction("h", this, arguments);
        this.data = "";
        minerva_hook.afterFunction("h", this, {});
      },
      append: function v(n) {
        minerva_hook.beforeFunction("v", this, arguments);
        this.data += n;
        minerva_hook.afterFunction("v", this, {});
      },
      end: function m() {
        minerva_hook.beforeFunction("m", this, arguments);
        this.callback(null, this.data), this.callback = null;
        minerva_hook.afterFunction("m", this, {});
      },
      flush: function g() {
        minerva_hook.beforeFunction("g", this, arguments);

        for (var n = this, e = n.head; e;) {
          if (!e.ready) return void (n.head = e);
          this.data += e.data, e = e.next;
        }

        n.end();
        minerva_hook.afterFunction("g", this, {});
      }
    }, i.Buffer = r, n.exports = i;
    minerva_hook.afterFunction("null", this, {
      a: a
    });
  }]);

  minerva_hook.afterFunction("null", this, {
    r: r,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}), KISSY.use("p/content/index");