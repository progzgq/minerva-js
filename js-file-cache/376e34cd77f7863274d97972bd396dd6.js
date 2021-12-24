define("kg/tb-footer/1.1.8/index", [], function (t, n, e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var o, r, i, a, f, c;
  o = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      minerva_hook.afterFunction("n", this, {});
    }

    function e(t, n) {
      minerva_hook.beforeFunction("e", this, arguments);

      _minerva_ret = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t.apply(n, arguments);
        minerva_hook.afterFunction("null", this, {});
      };

      minerva_hook.afterFunction("e", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(t) {
      minerva_hook.beforeFunction("o", this, arguments);
      if ("object" !== u(this)) throw new TypeError("Promises must be constructed via new");
      if ("function" != typeof t) throw new TypeError("not a function");
      this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(t, this);
      minerva_hook.afterFunction("o", this, {});
    }

    function r(t, n) {
      minerva_hook.beforeFunction("r", this, arguments);

      for (; 3 === t._state;) t = t._value;

      _minerva_ret = 0 === t._state ? void t._deferreds.push(n) : (t._handled = !0, void s(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = 1 === t._state ? n.onFulfilled : n.onRejected;
        if (null === e) return void (1 === t._state ? i : a)(n.promise, t._value);
        var o;

        try {
          o = e(t._value);
        } catch (r) {
          return void a(n.promise, r);
        }

        i(n.promise, o);
        minerva_hook.afterFunction("null", this, {
          e: e,
          o: o
        });
      }));
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(t, n) {
      minerva_hook.beforeFunction("i", this, arguments);

      try {
        if (n === t) throw new TypeError("A promise cannot be resolved with itself.");

        if (n && ("object" === ("undefined" == typeof n ? "undefined" : u(n)) || "function" == typeof n)) {
          var r = n.then;
          if (n instanceof o) return t._state = 3, t._value = n, void f(t);
          if ("function" == typeof r) return void d(e(r, n), t);
        }

        t._state = 1, t._value = n, f(t);
      } catch (i) {
        a(t, i);
      }

      minerva_hook.afterFunction("i", this, {});
    }

    function a(t, n) {
      minerva_hook.beforeFunction("a", this, arguments);
      t._state = 2, t._value = n, f(t);
      minerva_hook.afterFunction("a", this, {});
    }

    function f(t) {
      minerva_hook.beforeFunction("f", this, arguments);
      2 === t._state && 0 === t._deferreds.length && s(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t._handled || h(t._value);
        minerva_hook.afterFunction("null", this, {});
      });

      for (var n = 0, e = t._deferreds.length; n < e; n++) r(t, t._deferreds[n]);

      t._deferreds = null;
      minerva_hook.afterFunction("f", this, {});
    }

    function c(t, n, e) {
      minerva_hook.beforeFunction("c", this, arguments);
      this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof n ? n : null, this.promise = e;
      minerva_hook.afterFunction("c", this, {});
    }

    function d(t, n) {
      minerva_hook.beforeFunction("d", this, arguments);
      var e = !1;

      try {
        t(function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          e || (e = !0, i(n, t));
          minerva_hook.afterFunction("null", this, {});
        }, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          e || (e = !0, a(n, t));
          minerva_hook.afterFunction("null", this, {});
        });
      } catch (o) {
        if (e) return;
        e = !0, a(n, o);
      }

      minerva_hook.afterFunction("d", this, {
        e: e
      });
    }

    var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = typeof t;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    } : function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        l = setTimeout,
        s = "function" == typeof setImmediate && setImmediate || function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      l(t, 0);
      minerva_hook.afterFunction("null", this, {});
    },
        h = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      "undefined" != typeof console && console && console.log("Possible Unhandled Promise Rejection:", t);
      minerva_hook.afterFunction("null", this, {});
    };

    _minerva_ret = (o.prototype["catch"] = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = this.then(null, t);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, o.prototype.then = function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var o = new this.constructor(n);
      _minerva_ret = (r(this, new c(t, e, o)), o);
      minerva_hook.afterFunction("null", this, {
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, t = o);
    minerva_hook.afterFunction("null", this, {
      u: u,
      l: l,
      s: s,
      h: h,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (t) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = t = "\n  .tb-footer {\n    width: 100% !important;\n    max-width: 100% !important;\n    min-height: 125px;\n    margin-top: 20px;\n    padding-bottom: 9px;\n    background-color: #fff;\n    font-size: 12px;\n  }\n  .tb-footer p {\n    padding-bottom: 8px;\n    overflow: hidden;\n    *zoom: 1;\n  }\n  .tb-footer b {\n    margin: 0 3px;\n    font-weight: 400;\n    color: #ddd;\n  }\n  .tb-footer em,\n  .tb-footer span {\n    color: #9c9c9c;\n  }\n  .tb-footer em {\n    margin-left: 30px;\n    font-style: normal;\n  }\n  .tb-footer span {\n    margin: 0 4px;\n  }\n  .tb-footer .tb-footer-hd,\n  .tb-footer .tb-footer-bd,\n  .tb-footer .tb-footer-ft {\n    width: 1190px;\n    max-width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .tb-footer .tb-footer-hd a,\n  .tb-footer .tb-footer-bd a {\n    white-space: nowrap;\n    color: #6c6c6c;\n    text-decoration: none;\n  }\n  .tb-footer .tb-footer-hd a:hover,\n  .tb-footer .tb-footer-bd a:hover {\n    color: #f40;\n    text-decoration: none;\n  }\n  .tb-footer .tb-footer-hd {\n    padding-top: 7px;\n    border-top: 1px solid #ddd;\n  }\n  .tb-footer .tb-footer-hd p {\n    margin-bottom: 8px;\n    line-height: 27px;\n    border-bottom: 1px solid #ddd;\n  }\n  .tb-footer .tb-footer-ft a {\n    margin-right: 15px;\n  }\n  .tb-footer .tb-footer-mod {\n    height: 40px;\n    display: inline-block;\n    background-repeat: no-repeat;\n    vertical-align: middle;\n  }\n  .tb-footer-with-logo {\n    min-height: 170px;\n  }\n";
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = t && t.__esModule ? t : {
        "default": t
      };
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var e = o,
        r = n(e),
        i = {
      _listen: function (t, n, e, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = e.split(/\s+/);
        var r = "add" === t ? "attach" : "detach";
        i.forEach(e, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          n.addEventListener ? n[t + "EventListener"](e, o) : n.attachEvent && n[r + "Event"]("on" + e, o);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r
        });
      },
      bind: function (t, n, e) {
        minerva_hook.beforeFunction("null", this, arguments);

        this._listen.apply(this, ["add"].concat(Array.prototype.slice.call(arguments)));

        minerva_hook.afterFunction("null", this, {});
      },
      unbind: function (t, n, e) {
        minerva_hook.beforeFunction("null", this, arguments);

        this._listen.apply(this, ["remove"].concat(Array.prototype.slice.call(arguments)));

        minerva_hook.afterFunction("null", this, {});
      },
      forEach: function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (Array.prototype.forEach) return t.forEach(n);

        for (var e = 0; e < t.length; e++) n(t[e], e);

        minerva_hook.afterFunction("null", this, {});
      },
      jsonp: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = new i.Promise(function (n) {
          minerva_hook.beforeFunction("null", this, arguments);

          window[t.jsonpCallback] = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            n.apply(void 0, arguments);
            minerva_hook.afterFunction("null", this, {});
          };

          var e = document.head;
          e || (e = document.getElementsByTagName("head")[0]);
          var o = document.createElement("script"),
              r = -1 === t.url.indexOf("?") ? "?" : "&";
          o.src = "" + t.url + r + "callback=" + t.jsonpCallback;
          var i = !1;
          o.onload = o.onreadystatechange = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            i || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (i = !0, setTimeout(function () {
              minerva_hook.beforeFunction("null", this, arguments);

              if (window[t.jsonpCallback]) {
                try {
                  delete window[t.jsonpCallback];
                } catch (n) {
                  window[t.jsonpCallback] = void 0;
                }

                o.onload = o.onreadystatechange = null, e.removeChild(o);
              }

              minerva_hook.afterFunction("null", this, {});
            }, 1e3));
            minerva_hook.afterFunction("null", this, {});
          }, e.appendChild(o);
          minerva_hook.afterFunction("null", this, {
            e: e,
            o: o,
            r: r,
            i: i
          });
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      addStyle: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = document.createElement("style"),
            e = document.head ? document.head : document.getElementsByTagName("head")[0];
        e.appendChild(n), n.styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t));
        minerva_hook.afterFunction("null", this, {
          n: n,
          e: e
        });
      },
      isBottom: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 300,
            n = document.body.scrollHeight,
            e = document.body.scrollTop || document.documentElement.scrollTop,
            o = window.innerHeight || document.documentElement.clientHeight;
        _minerva_ret = e + o + t >= n;
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          e: e,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      onReachBottom: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = !1;
        _minerva_ret = new i.Promise(function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          if (i.isBottom(t)) return e();

          var o = void 0,
              r = function a() {
            minerva_hook.beforeFunction("a", this, arguments);
            _minerva_ret = !n && (o && clearTimeout(o), void (o = setTimeout(function () {
              minerva_hook.beforeFunction("null", this, arguments);
              o = null, i.isBottom(t) && (n = !0, i.unbind(window, "scroll resize", a), e());
              minerva_hook.afterFunction("null", this, {});
            }, 200)));
            minerva_hook.afterFunction("a", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          i.bind(window, "scroll resize", r);
          minerva_hook.afterFunction("null", this, {
            o: o,
            r: r
          });
        });
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      Promise: "undefined" != typeof Promise ? Promise : r["default"]
    };
    _minerva_ret = t = i;
    minerva_hook.afterFunction("null", this, {
      e: e,
      r: r,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = i,
        e = "",
        o = !1,
        r = [];

    _minerva_ret = t = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      if (e) return new n.Promise(function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = t(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      });

      var t = function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (; r.length;) {
          var t = r[0];
          r.shift(), t(e);
        }

        minerva_hook.afterFunction("null", this, {});
      },
          i = new n.Promise(function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = r.push(t);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      });

      _minerva_ret = (o || (o = !0, (0, n.jsonp)({
        url: "https://fragment.tmall.com/tbhome/footer_data?wh_biz=tm&wh_callback=true",
        jsonpCallback: "footer_data",
        cache: !0
      }).then(function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        o = !1, n && n.value && (e = n.value, t());
        minerva_hook.afterFunction("null", this, {});
      })), i);
      minerva_hook.afterFunction("null", this, {
        t: t,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      n: n,
      e: e,
      o: o,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), f = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = t && t.__esModule ? t : {
        "default": t
      };
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      this.config = t;
      minerva_hook.afterFunction("e", this, {
        t: t
      });
    }

    function o(t, n) {
      minerva_hook.beforeFunction("o", this, arguments);
      var e = "";
      _minerva_ret = ((0, f.forEach)(t, function (o, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        e += "<span>";
        var i = o.name + (o.number || "");
        if (o.link) {
          if (o.logo && "false" !== o.logo) {
            var a = o.img ? "background-image: url(" + o.img + ");" : "",
                f = o.height ? "height: " + o.height + "px;" : "";
            e += o.showText && "false" !== o.showText ? '\n            <a target="_blank" href="' + o.link + '" rel="noopener noreferrer">\n              <span class="tb-footer-mod" style="background-position:' + o.left + "px " + o.top + "px; width:" + o.width + "px; " + f + " " + a + '"></span>\n              ' + i + "\n            </a>" : '\n            <a target="_blank" href="' + o.link + '" class="tb-footer-mod" rel="noopener noreferrer"\n              style="background-position:' + o.left + "px " + o.top + "px; width:" + o.width + "px; " + f + " " + a + '">\n            </a>';
          } else e += '<a href="' + o.link + '" rel="noopener noreferrer">' + i + "</a>";
        } else e += i;
        e += "</span>", n && r < t.length - 1 && (e += n);
        minerva_hook.afterFunction("null", this, {
          e: e,
          i: i
        });
      }), e);
      minerva_hook.afterFunction("o", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var f = i,
        c = a,
        d = n(c),
        u = r,
        l = n(u),
        s = !1;
    _minerva_ret = (e.fetchData = d["default"], e.prototype = {
      constructor: e,
      _render: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = document.createElement("div");
        n.className = "tb-footer" + (this.config.needLogo ? " tb-footer-with-logo" : ""), n.setAttribute("data-spm", "1997523009"), n.innerHTML = t;
        var e = this.config.root || document.body;
        e.appendChild(n), this.container = n;
        minerva_hook.afterFunction("null", this, {
          n: n,
          e: e
        });
      },
      render: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        _minerva_ret = (s || (s = !0, (0, f.addStyle)(l["default"])), this.config.delay ? (0, f.onReachBottom)(this.config.offset).then(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = t.getHTML();
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }).then(function (n) {
          minerva_hook.beforeFunction("null", this, arguments);

          t._render(n);

          minerva_hook.afterFunction("null", this, {});
        }) : this.getHTML().then(function (n) {
          minerva_hook.beforeFunction("null", this, arguments);

          t._render(n);

          minerva_hook.afterFunction("null", this, {});
        }));
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      reload: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        if (this.container) return this.getHTML().then(function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          t.container.innerHTML = n;
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      },
      getHTML: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        _minerva_ret = (0, d["default"])().then(function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = t.toHTML(n);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      toHTML: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = "",
            e = "<b>|</b>";
        n += '<div class="tb-footer-hd"><p>', (0, f.forEach)(t.bu, function (t, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          r > 0 && (n += "<br>"), n += o(t.list, e);
          minerva_hook.afterFunction("null", this, {});
        }), n += "</p></div>";
        var r = t.year ? t.year[0].value : 2017,
            i = "";
        _minerva_ret = (t.permissions && t.permissions.length && (0, f.forEach)(t.permissions, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t.list && t.list.length && (i += "<p>" + o(t.list, e) + "</p>");
          minerva_hook.afterFunction("null", this, {});
        }), n += '\n      <div class="tb-footer-bd">\n        <p>\n          ' + o(t.about) + "\n          " + e + " <em>&copy; 2003-" + r + " Taobao.com \u7248\u6743\u6240\u6709</em>\n        </p>\n        " + i + "\n      </div>\n    ", t.bg && t.bg[0] && (n += "\n          <style>\n            .tb-footer .tb-footer-mod {\n              background-image: url(" + t.bg[0].x1 + ");\n              background-image: -webkit-image-set(" + t.bg[0].x1 + " 1x, " + t.bg[0].x2 + " 2x);\n            }\n          </style>\n        "), this.config.needLogo && (n += '<div class="tb-footer-ft">', n += o(t.issue), n += "</div>"), n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          e: e,
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, t = e);
    minerva_hook.afterFunction("null", this, {
      f: f,
      c: c,
      d: d,
      u: u,
      l: l,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), c = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = t = f;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), e.exports = c;
  minerva_hook.afterFunction("null", this, {
    o: o,
    r: r,
    i: i,
    a: a,
    f: f,
    c: c
  });
});