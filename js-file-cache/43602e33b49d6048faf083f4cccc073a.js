define("event-dom-extra", ["event-dom-base", "util", "ua", "util", "dom", "feature", "dom"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);

  var t,
      n,
      a,
      i,
      o,
      r,
      c,
      u,
      s = e("event-dom-base"),
      E = e("util"),
      f = e("ua"),
      N = e("util"),
      _ = e("dom"),
      d = e("feature"),
      T = e("dom");

  _minerva_ret = (t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = {
      MAC_ENTER: 3,
      BACKSPACE: 8,
      TAB: 9,
      NUM_CENTER: 12,
      ENTER: 13,
      SHIFT: 16,
      CTRL: 17,
      ALT: 18,
      PAUSE: 19,
      CAPS_LOCK: 20,
      ESC: 27,
      SPACE: 32,
      PAGE_UP: 33,
      PAGE_DOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40,
      PRINT_SCREEN: 44,
      INSERT: 45,
      DELETE: 46,
      ZERO: 48,
      ONE: 49,
      TWO: 50,
      THREE: 51,
      FOUR: 52,
      FIVE: 53,
      SIX: 54,
      SEVEN: 55,
      EIGHT: 56,
      NINE: 57,
      QUESTION_MARK: 63,
      A: 65,
      B: 66,
      C: 67,
      D: 68,
      E: 69,
      F: 70,
      G: 71,
      H: 72,
      I: 73,
      J: 74,
      K: 75,
      L: 76,
      M: 77,
      N: 78,
      O: 79,
      P: 80,
      Q: 81,
      R: 82,
      S: 83,
      T: 84,
      U: 85,
      V: 86,
      W: 87,
      X: 88,
      Y: 89,
      Z: 90,
      META: 91,
      WIN_KEY_RIGHT: 92,
      CONTEXT_MENU: 93,
      NUM_ZERO: 96,
      NUM_ONE: 97,
      NUM_TWO: 98,
      NUM_THREE: 99,
      NUM_FOUR: 100,
      NUM_FIVE: 101,
      NUM_SIX: 102,
      NUM_SEVEN: 103,
      NUM_EIGHT: 104,
      NUM_NINE: 105,
      NUM_MULTIPLY: 106,
      NUM_PLUS: 107,
      NUM_MINUS: 109,
      NUM_PERIOD: 110,
      NUM_DIVISION: 111,
      F1: 112,
      F2: 113,
      F3: 114,
      F4: 115,
      F5: 116,
      F6: 117,
      F7: 118,
      F8: 119,
      F9: 120,
      F10: 121,
      F11: 122,
      F12: 123,
      NUMLOCK: 144,
      SEMICOLON: 186,
      DASH: 189,
      EQUALS: 187,
      COMMA: 188,
      PERIOD: 190,
      SLASH: 191,
      APOSTROPHE: 192,
      SINGLE_QUOTE: 222,
      OPEN_SQUARE_BRACKET: 219,
      BACKSLASH: 220,
      CLOSE_SQUARE_BRACKET: 221,
      WIN_KEY: 224,
      MAC_FF_META: 224,
      WIN_IME: 229
    };
    _minerva_ret = (t.isTextModifyingKeyEvent = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = e.keyCode;
      if (e.altKey && !e.ctrlKey || e.metaKey || n >= t.F1 && n <= t.F12) return !1;

      switch (n) {
        case t.ALT:
        case t.CAPS_LOCK:
        case t.CONTEXT_MENU:
        case t.CTRL:
        case t.DOWN:
        case t.END:
        case t.ESC:
        case t.HOME:
        case t.INSERT:
        case t.LEFT:
        case t.MAC_FF_META:
        case t.META:
        case t.NUMLOCK:
        case t.NUM_CENTER:
        case t.PAGE_DOWN:
        case t.PAGE_UP:
        case t.PAUSE:
        case t.PRINT_SCREEN:
        case t.RIGHT:
        case t.SHIFT:
        case t.UP:
        case t.WIN_KEY:
        case t.WIN_KEY_RIGHT:
          return !1;

        default:
          return !0;
      }

      minerva_hook.afterFunction("null", this, {
        n: n
      });
    }, t.isCharacterKey = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (e >= t.ZERO && e <= t.NINE) return !0;
      if (e >= t.NUM_ZERO && e <= t.NUM_MULTIPLY) return !0;
      if (e >= t.A && e <= t.Z) return !0;
      if (-1 !== window.navigation.userAgent.indexOf("WebKit") && 0 === e) return !0;

      switch (e) {
        case t.SPACE:
        case t.QUESTION_MARK:
        case t.NUM_PLUS:
        case t.NUM_MINUS:
        case t.NUM_PERIOD:
        case t.NUM_DIVISION:
        case t.SEMICOLON:
        case t.DASH:
        case t.EQUALS:
        case t.COMMA:
        case t.PERIOD:
        case t.SLASH:
        case t.APOSTROPHE:
        case t.SINGLE_QUOTE:
        case t.OPEN_SQUARE_BRACKET:
        case t.BACKSLASH:
        case t.CLOSE_SQUARE_BRACKET:
          return !0;

        default:
          return !1;
      }

      minerva_hook.afterFunction("null", this, {});
    }, e = t);
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = s,
        a = t;
    _minerva_ret = (n.KeyCode = a, e = n);
    minerva_hook.afterFunction("null", this, {
      n: n,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = n,
        a = t.Special,
        i = E,
        o = f;
    _minerva_ret = (o.ie || i.each([{
      name: "focusin",
      fix: "focus"
    }, {
      name: "focusout",
      fix: "blur"
    }], function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      function n(n) {
        minerva_hook.beforeFunction("n", this, arguments);
        var a = n.target;
        _minerva_ret = t.fire(a, e.name);
        minerva_hook.afterFunction("n", this, {
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var o = i.guid("attaches_" + i.now() + "_");
      a[e.name] = {
        setup: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = this.ownerDocument || this;
          o in t || (t[o] = 0), t[o] += 1, 1 === t[o] && t.addEventListener(e.fix, n, !0);
          minerva_hook.afterFunction("null", this, {
            t: t
          });
        },
        tearDown: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = this.ownerDocument || this;
          t[o] -= 1, 0 === t[o] && t.removeEventListener(e.fix, n, !0);
          minerva_hook.afterFunction("null", this, {
            t: t
          });
        }
      };
      minerva_hook.afterFunction("null", this, {
        o: o
      });
    }), e);
    minerva_hook.afterFunction("null", this, {
      t: t,
      a: a,
      i: i,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t,
        a,
        i,
        o,
        r = N,
        c = n,
        u = _,
        s = f,
        E = d,
        T = c.Special,
        l = window,
        m = l.document,
        S = "__ks_replace_history__",
        h = s.ieMode,
        U = "hashchange";

    if (!E.isHashChangeSupported()) {
      var M = 50,
          v = "<html><head><title>" + (m && m.title || "") + " - {hash}</title>{head}</head><body>{hash}</body></html>";
      c.REPLACE_HISTORY = S;

      var A = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = location.href.match(/#.+$/);
        _minerva_ret = e && e[0] || "#";
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
          O = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        c.fireHandler(l, U, {
          newURL: location.href,
          oldURL: i + o
        }), o = A();
        minerva_hook.afterFunction("null", this, {});
      },
          I = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.contentWindow.document;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      t = h && 8 > h ? function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = r.substitute(v, {
          hash: r.escapeHtml(e),
          head: u.isCustomDomain() ? '<script>document.domain = "' + m.domain + '";</script>' : ""
        }),
            i = I(a);

        try {
          t ? i.open("text/html", "replace") : i.open(), i.write(n), i.close();
        } catch (o) {}

        minerva_hook.afterFunction("null", this, {
          n: n,
          i: i
        });
      } : function () {
        minerva_hook.beforeFunction("null", this, arguments);
        O();
        minerva_hook.afterFunction("null", this, {});
      };

      var p,
          R = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = A(),
            n = 0;
        -1 !== e.indexOf(S) && (n = 1, e = e.replace(S, ""), location.hash = e), e !== o && t(e, n), p = setTimeout(R, M);
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n
        });
      },
          C = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        p || R();
        minerva_hook.afterFunction("null", this, {});
      },
          L = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        p && clearTimeout(p), p = 0;
        minerva_hook.afterFunction("null", this, {});
      };

      h && 8 > h && (C = function () {
        minerva_hook.beforeFunction("null", this, arguments);

        if (!a) {
          var e = u.getEmptyIframeSrc();
          a = u.create("<iframe " + (e ? 'src="' + e + '"' : "") + ' style="display: none" height="0" width="0" tabindex="-1" title="empty"/>'), u.prepend(a, m.documentElement), c.add(a, "load", function () {
            minerva_hook.beforeFunction("null", this, arguments);
            c.remove(a, "load"), t(A()), c.add(a, "load", n), R();
            minerva_hook.afterFunction("null", this, {});
          }), m.attachEvent("propertychange", function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            e = e || window.event;

            try {
              "title" === e.propertyName && (I(a).title = m.title + " - " + A());
            } catch (e) {}

            minerva_hook.afterFunction("null", this, {
              e: e
            });
          });

          var n = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            location.hash = r.trim(I(a).body.innerText), O();
            minerva_hook.afterFunction("null", this, {});
          };
        }

        minerva_hook.afterFunction("null", this, {});
      }, L = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        p && clearTimeout(p), p = 0, c.detach(a), u.remove(a), a = 0;
        minerva_hook.afterFunction("null", this, {});
      }), T[U] = {
        setup: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          this === l && (o = A(), i = location.href.replace(/#.+/, ""), C());
          minerva_hook.afterFunction("null", this, {});
        },
        tearDown: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          this === l && L();
          minerva_hook.afterFunction("null", this, {});
        }
      };
    }

    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      t: t,
      a: a,
      i: i,
      o: o,
      r: r,
      c: c,
      u: u,
      s: s,
      E: E,
      T: T,
      l: l,
      m: m,
      S: S,
      h: h,
      U: U,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), o = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      var t = (e.nodeName || "").toLowerCase();
      _minerva_ret = "textarea" === t ? !0 : "input" === t ? "text" === e.type || "password" === e.type : !1;
      minerva_hook.afterFunction("t", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);

      if (_.hasData(e, U)) {
        var t = _.data(e, U);

        clearTimeout(t), _.removeData(e, U);
      }

      minerva_hook.afterFunction("a", this, {});
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      _.removeData(e, h), a(e);
      minerva_hook.afterFunction("i", this, {});
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      a(e.target);
      minerva_hook.afterFunction("o", this, {});
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);

      var t = e.value,
          n = _.data(e, h);

      t !== n && (N.fire(e, m), _.data(e, h, t));
      minerva_hook.afterFunction("r", this, {
        t: t,
        n: n
      });
    }

    function c(e) {
      minerva_hook.beforeFunction("c", this, arguments);
      _.hasData(e, U) || _.data(e, U, setTimeout(function t() {
        minerva_hook.beforeFunction("t", this, arguments);
        r(e), _.data(e, U, setTimeout(t, M));
        minerva_hook.afterFunction("t", this, {});
      }, M));
      minerva_hook.afterFunction("c", this, {});
    }

    function u(e) {
      minerva_hook.beforeFunction("u", this, arguments);
      var t = e.target;
      "focus" === e.type && _.data(t, h, t.value), c(t);
      minerva_hook.afterFunction("u", this, {
        t: t
      });
    }

    function s(e) {
      minerva_hook.beforeFunction("s", this, arguments);
      E(e), N.on(e, "blur", o), N.on(e, "mousedown keyup keydown focus", u);
      minerva_hook.afterFunction("s", this, {});
    }

    function E(e) {
      minerva_hook.beforeFunction("E", this, arguments);
      i(e), N.detach(e, "blur", o), N.detach(e, "mousedown keyup keydown focus", u);
      minerva_hook.afterFunction("E", this, {});
    }

    function f(e) {
      minerva_hook.beforeFunction("f", this, arguments);
      var n = e.target;
      t(n) && !n.__inputHandler && (n.__inputHandler = 1, N.on(n, "input", d));
      minerva_hook.afterFunction("f", this, {
        n: n
      });
    }

    var N = n,
        _ = T,
        d = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    },
        l = N.Special,
        m = "input",
        S = "event-dom/input",
        h = S + "/history",
        U = S + "/poll",
        M = 50;

    _minerva_ret = (l.input = {
      setup: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        t(e) ? s(e) : N.on(e, "focusin", f);
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      },
      tearDown: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        t(e) ? E(e) : (N.remove(e, "focusin", f), _.query("textarea,input", e).each(function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          e.__inputHandler && (e.__inputHandler = 0, N.remove(e, "input", d));
          minerva_hook.afterFunction("null", this, {});
        }));
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      }
    }, e);
    minerva_hook.afterFunction("null", this, {
      N: N,
      _: _,
      d: d,
      l: l,
      m: m,
      S: S,
      h: h,
      U: U,
      M: M,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = _,
        a = n,
        i = E,
        o = a.Special;
    _minerva_ret = (i.each([{
      name: "mouseenter",
      fix: "mouseover"
    }, {
      name: "mouseleave",
      fix: "mouseout"
    }], function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      o[e.name] = {
        typeFix: e.fix,
        handle: function (e, n, a) {
          minerva_hook.beforeFunction("null", this, arguments);
          var i = e.currentTarget,
              o = e.relatedTarget;
          _minerva_ret = !o || o !== i && !t.contains(i, o) ? [n.simpleNotify(e, a)] : void 0;
          minerva_hook.afterFunction("null", this, {
            i: i,
            o: o,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      };
      minerva_hook.afterFunction("null", this, {});
    }), e);
    minerva_hook.afterFunction("null", this, {
      t: t,
      a: a,
      i: i,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), c = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = n;
    _minerva_ret = e = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = c;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    t: t,
    n: n,
    a: a,
    i: i,
    o: o,
    r: r,
    c: c,
    u: u,
    s: s,
    E: E,
    f: f,
    N: N,
    _: _,
    d: d,
    T: T,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});