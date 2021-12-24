define("dom-base", ["util", "io-script", "feature", "query-selector"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var t,
      n,
      r,
      o,
      i,
      a,
      u,
      l,
      c,
      f,
      d,
      s,
      p = e("util"),
      v = e("io-script"),
      g = e("feature"),
      m = e("query-selector");
  _minerva_ret = (t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = p,
        n = window,
        r = n.document,
        o = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        i = {
      ELEMENT_NODE: 1,
      ATTRIBUTE_NODE: 2,
      TEXT_NODE: 3,
      CDATA_SECTION_NODE: 4,
      ENTITY_REFERENCE_NODE: 5,
      ENTITY_NODE: 6,
      PROCESSING_INSTRUCTION_NODE: 7,
      COMMENT_NODE: 8,
      DOCUMENT_NODE: 9,
      DOCUMENT_TYPE_NODE: 10,
      DOCUMENT_FRAGMENT_NODE: 11,
      NOTATION_NODE: 12
    },
        a = e = {
      isCustomDomain: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = e || n, e = a.get(e);
        var t = e.document.domain,
            r = e.location.hostname;
        _minerva_ret = t !== r && t !== "[" + r + "]";
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getEmptyIframeSrc: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      NodeType: i,
      getWindow: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e = a.get(e), !e || !e.nodeType) return n;
        if (t.isWindow(e)) return e;
        var r = e;
        _minerva_ret = (r.nodeType !== i.DOCUMENT_NODE && (r = e.ownerDocument), r.defaultView || r.parentWindow);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getDocument: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e ? (e = a.get(e), t.isWindow(e) ? e.document : e.nodeType === i.DOCUMENT_NODE ? e : e.ownerDocument) : r;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isDomNodeList: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e && !e.nodeType && e.item && !e.setTimeout;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      nodeName: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = a.get(e),
            n = t.nodeName.toLowerCase(),
            r = t.scopeName;
        _minerva_ret = (r && "HTML" !== r && (n = r.toLowerCase() + ":" + n), n);
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _RE_NUM_NO_PX: new RegExp("^(" + o + ")(?!px)[a-z%]+$", "i")
    };
    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      o: o,
      i: i,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = null == e ? "" : e + "";
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      t = y[t] || t;
      var n = N[t];
      _minerva_ret = n && n.get ? n.get(e, t) : e[t];
      minerva_hook.afterFunction("r", this, {
        t: t,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var o = p,
        i = t,
        a = i.NodeType,
        u = "",
        l = i.nodeName,
        c = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        f = /^(?:button|input|object|select|textarea)$/i,
        d = /^a(?:rea)?$/i,
        s = /:|^on/,
        v = /\r/g,
        g = {},
        m = {
      val: 1,
      css: 1,
      html: 1,
      text: 1,
      data: 1,
      width: 1,
      height: 1,
      offset: 1,
      scrollTop: 1,
      scrollLeft: 1
    },
        h = {
      tabindex: {
        get: function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = e.getAttributeNode("tabindex");
          _minerva_ret = t && t.specified ? parseInt(t.value, 10) : f.test(e.nodeName) || d.test(e.nodeName) && e.href ? 0 : void 0;
          minerva_hook.afterFunction("null", this, {
            t: t,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      }
    },
        y = {
      hidefocus: "hideFocus",
      tabindex: "tabIndex",
      readonly: "readOnly",
      "for": "htmlFor",
      "class": "className",
      maxlength: "maxLength",
      cellspacing: "cellSpacing",
      cellpadding: "cellPadding",
      rowspan: "rowSpan",
      colspan: "colSpan",
      usemap: "useMap",
      frameborder: "frameBorder",
      contenteditable: "contentEditable"
    },
        E = {
      get: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = i.prop(e, t) ? t.toLowerCase() : void 0;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      set: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r;
        _minerva_ret = (t === !1 ? i.removeAttr(e, n) : (r = y[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    },
        N = {},
        T = {},
        _ = {
      select: {
        get: function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t,
              n,
              r,
              o = e.selectedIndex,
              a = e.options,
              u = "select-one" === String(e.type);
          if (0 > o) return null;
          if (u) return i.val(a[o]);

          for (t = [], n = 0, r = a.length; r > n; ++n) a[n].selected && t.push(i.val(a[n]));

          _minerva_ret = t;
          minerva_hook.afterFunction("null", this, {
            t: t,
            n: n,
            r: r,
            o: o,
            a: a,
            u: u,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        set: function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var n = o.makeArray(t),
              r = e.options;
          _minerva_ret = (o.each(r, function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            e.selected = o.inArray(i.val(e), n);
            minerva_hook.afterFunction("null", this, {});
          }), n.length || (e.selectedIndex = -1), n);
          minerva_hook.afterFunction("null", this, {
            n: n,
            r: r,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      }
    };
    _minerva_ret = (o.each(["radio", "checkbox"], function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _[e] = {
        get: function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = null === e.getAttribute("value") ? "on" : e.value;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        set: function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = o.isArray(t) ? (e.checked = o.inArray(i.val(e), t), 1) : void 0;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      };
      minerva_hook.afterFunction("null", this, {});
    }), h.style = {
      get: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.style.cssText;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, o.mix(i, {
      _valHooks: _,
      _propFix: y,
      _attrHooks: h,
      _propHooks: N,
      _attrNodeHook: T,
      _attrFix: g,
      prop: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var a,
            u,
            l,
            c = i.query(e);
        if ("object" == typeof t) return o.each(t, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          i.prop(c, t, e);
          minerva_hook.afterFunction("null", this, {});
        }), void 0;
        if (t = y[t] || t, l = N[t], void 0 !== n) for (a = c.length - 1; a >= 0; a--) u = c[a], l && l.set ? l.set(u, n, t) : u[t] = n;else if (c.length) return r(c[0], t);
        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          a: a,
          u: u,
          l: l,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      removeProp: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = y[t] || t;
        var n,
            r,
            o = i.query(e);

        for (n = o.length - 1; n >= 0; n--) {
          r = o[n];

          try {
            r[t] = void 0, delete r[t];
          } catch (a) {}
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r,
          o: o
        });
      },
      attr: function (e, t, n, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o,
            f,
            d,
            p = i.query(e),
            v = p[0];

        if ("object" == typeof t) {
          r = n;

          for (var y in t) i.attr(p, y, t[y], r);

          return void 0;
        }

        if (r && m[t]) return i[t](e, n);
        if (t = t.toLowerCase(), r && m[t]) return i[t](e, n);

        if (t = g[t] || t, o = c.test(t) ? E : s.test(t) ? T : h[t], void 0 === n) {
          if (v && v.nodeType === a.ELEMENT_NODE) {
            if ("form" === l(v) && (o = T), o && o.get) return o.get(v, t);

            if (d = v.getAttribute(t), "" === d) {
              var N = v.getAttributeNode(t);
              if (!N || !N.specified) return void 0;
            }

            return null === d ? void 0 : d;
          }
        } else for (f = p.length - 1; f >= 0; f--) v = p[f], v && v.nodeType === a.ELEMENT_NODE && ("form" === l(v) && (o = T), o && o.set ? o.set(v, n, t) : v.setAttribute(t, u + n));

        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          o: o,
          f: f,
          d: d,
          p: p,
          v: v,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      removeAttr: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = t.toLowerCase(), t = g[t] || t;
        var n,
            r,
            o,
            u = i.query(e);

        for (o = u.length - 1; o >= 0; o--) r = u[o], r.nodeType === a.ELEMENT_NODE && (r.removeAttribute(t), c.test(t) && (n = y[t] || t) in r && (r[n] = !1));

        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          o: o,
          u: u
        });
      },
      val: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r, a, u, c, f, d;
        if (void 0 === t) return u = i.get(e), u ? (r = _[l(u)] || _[u.type], r && "get" in r && void 0 !== (a = r.get(u, "value")) ? a : (a = u.value, "string" == typeof a ? a.replace(v, "") : null == a ? "" : a)) : void 0;

        for (c = i.query(e), f = c.length - 1; f >= 0; f--) {
          if (u = c[f], 1 !== u.nodeType) return void 0;
          d = t, null == d ? d = "" : "number" == typeof d ? d += "" : o.isArray(d) && (d = o.map(d, n)), r = _[l(u)] || _[u.type];
          var s = r && "set" in r;
          s && void 0 !== r.set(u, d, "value") || (u.value = d);
        }

        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          r: r,
          a: a,
          u: u,
          c: c,
          f: f,
          d: d,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      text: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n, r, o, u;
        if (void 0 === t) return n = i.get(e), i._getText(n);

        for (r = i.query(e), o = r.length - 1; o >= 0; o--) n = r[o], u = n.nodeType, u === a.ELEMENT_NODE ? (i.cleanData(n.getElementsByTagName("*")), "textContent" in n ? n.textContent = t : n.innerText = t) : (u === a.TEXT_NODE || u === a.CDATA_SECTION_NODE) && (n.nodeValue = t);

        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          o: o,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _getText: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e.textContent;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _getProp: r
    }), e);
    minerva_hook.afterFunction("null", this, {
      o: o,
      i: i,
      a: a,
      u: u,
      l: l,
      c: c,
      f: f,
      d: d,
      s: s,
      v: v,
      g: g,
      m: m,
      h: h,
      y: y,
      E: E,
      N: N,
      T: T,
      _: _,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      e = i.trim(e || "");

      for (var t, n = e.split(c), r = [], o = n.length, a = 0; o > a; a++) (t = n[a]) && r.push(t);

      _minerva_ret = r;
      minerva_hook.afterFunction("n", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);

      _minerva_ret = function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            o,
            i,
            a = t.classList,
            l = u.call(arguments, 2);

        for (r = 0, o = n.length; o > r; r++) (i = n[r]) && a[e].apply(a, [i].concat(l));

        minerva_hook.afterFunction("null", this, {
          r: r,
          o: o,
          i: i,
          a: a,
          l: l
        });
      };

      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);

      _minerva_ret = function (t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o = n(r),
            i = u.call(arguments, 2);
        a.query(t).each(function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t.nodeType === l.ELEMENT_NODE && a[e].apply(a, [t, o].concat(i));
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          o: o,
          i: i
        });
      };

      minerva_hook.afterFunction("o", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var i = p,
        a = t,
        u = [].slice,
        l = a.NodeType,
        c = /[\.\s]\s*\.?/;
    _minerva_ret = (i.mix(a, {
      _hasClass: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r,
            o,
            i = e.classList;

        if (i.length) {
          for (n = 0, r = t.length; r > n; n++) if (o = t[n], o && !i.contains(o)) return !1;

          return !0;
        }

        _minerva_ret = !1;
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          o: o,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _addClass: r("add"),
      _removeClass: r("remove"),
      _toggleClass: r("toggle"),
      hasClass: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = !1;
        _minerva_ret = (t = n(t), a.query(e).each(function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = e.nodeType === l.ELEMENT_NODE && a._hasClass(e, t) ? (r = !0, !1) : void 0;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }), r);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      replaceClass: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        a.removeClass(e, t), a.addClass(e, n);
        minerva_hook.afterFunction("null", this, {});
      },
      addClass: o("_addClass"),
      removeClass: o("_removeClass"),
      toggleClass: o("_toggleClass")
    }), e);
    minerva_hook.afterFunction("null", this, {
      i: i,
      a: a,
      u: u,
      l: l,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), o = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, t) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = e.getElementsByTagName(t);
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      var n = e && e !== m ? e.createElement(y) : N;
      _minerva_ret = (t && n === N && (n.innerHTML = ""), n);
      minerva_hook.afterFunction("r", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e, t) {
      minerva_hook.beforeFunction("o", this, arguments);
      var n = r(t);
      _minerva_ret = (n.innerHTML = "m<div>" + e + "</div>", n.lastChild);
      minerva_hook.afterFunction("o", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);

      try {
        return e.innerHTML = "", void 0;
      } catch (t) {}

      for (; e.lastChild;) a(e.lastChild, e);

      minerva_hook.afterFunction("i", this, {});
    }

    function a(e, t) {
      minerva_hook.beforeFunction("a", this, arguments);
      t && (b && t.canHaveChildren && "removeNode" in e ? (e.firstChild && i(e), e.removeNode(!1)) : t.removeChild(e));
      minerva_hook.afterFunction("a", this, {});
    }

    function u(e, t, r) {
      minerva_hook.beforeFunction("u", this, arguments);
      var o = t.nodeType;
      if (o === h.DOCUMENT_FRAGMENT_NODE) for (var i = t.childNodes, a = r.childNodes, l = 0; i[l];) a[l] && u(e, i[l], a[l]), l++;else if (o === h.ELEMENT_NODE) for (var c = n(t, "*"), f = n(r, "*"), d = 0; c[d];) f[d] && e(c[d], f[d]), d++;
      minerva_hook.afterFunction("u", this, {
        o: o
      });
    }

    function l(e, t, n) {
      minerva_hook.beforeFunction("l", this, arguments);
      var r, o;

      if (t.nodeType !== h.ELEMENT_NODE) {
        r = g.data(e);

        for (o in r) g.data(t, o, r[o]);

        n && n.clone(e, t);
      }

      minerva_hook.afterFunction("l", this, {
        r: r,
        o: o
      });
    }

    function c(e, t) {
      minerva_hook.beforeFunction("c", this, arguments);
      var n = e.nodeType;
      _minerva_ret = (n === h.ELEMENT_NODE ? g.attr(e, t, !0) : n === h.DOCUMENT_FRAGMENT_NODE && g.attr(e.childNodes, t, !0), e);
      minerva_hook.afterFunction("c", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function f(e) {
      minerva_hook.beforeFunction("f", this, arguments);
      var t,
          n,
          r,
          o = null;
      if (!e || !e.push && !e.item || !e[0]) throw new Error("Unable to convert " + e + " to fragment.");

      for (n = e[0].ownerDocument, o = n.createDocumentFragment(), e = v.makeArray(e), t = 0, r = e.length; r > t; t++) o.appendChild(e[t]);

      _minerva_ret = o;
      minerva_hook.afterFunction("f", this, {
        t: t,
        n: n,
        r: r,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var d,
        s,
        v = p,
        g = t,
        m = document,
        h = g.NodeType,
        y = "div",
        E = "parentNode",
        N = m && m.createElement(y),
        T = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        _ = /<([\w:]+)/,
        C = /^\s+/,
        D = /\s+$/,
        b = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t, n;
      _minerva_ret = (t = e.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (n = t[1] || t[2]) ? parseFloat(n) < 9 : !1;
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }(navigator.userAgent),
        w = b,
        x = /<|&#?\w+;/,
        O = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
        M = g._creators = {
      div: o
    },
        L = {
      area: "map",
      thead: "table",
      td: "tr",
      th: "tr",
      tr: "tbody",
      tbody: "table",
      tfoot: "table",
      caption: "table",
      colgroup: "table",
      col: "colgroup",
      legend: "fieldset"
    },
        A = "<{tag}>{html}</{tag}>";

    for (s in L) !function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      M[s] = function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = g.create(v.substitute(A, {
          tag: e,
          html: t
        }), d, n);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }(L[s]);

    _minerva_ret = (M.option = M.optgroup = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = g.create('<select multiple="multiple">' + e + "</select>", void 0, t);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, L.option = L.optgroup = 1, v.mix(g, {
      create: function (e, t, n, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var i = null;
        if (!e) return i;
        if (e.nodeType) return g.clone(e);
        if ("string" != typeof e) return i;
        void 0 === r && (r = !0), r && (e = v.trim(e));
        var a,
            u,
            l,
            d,
            s,
            p = n || m,
            h = y;
        if (x.test(e)) {
          if (l = O.exec(e)) i = p.createElement(l[1]);else if (e = e.replace(T, "<$1></$2>"), (l = _.exec(e)) && (d = l[1]) && (h = d.toLowerCase()), a = (M[h] || o)(e, p), w && (u = e.match(C)) && a.insertBefore(p.createTextNode(u[0]), a.firstChild), w && /\S/.test(e) && (u = e.match(D)) && a.appendChild(p.createTextNode(u[0])), s = a.childNodes, 1 === s.length) i = s[0][E].removeChild(s[0]);else {
            if (!s.length) throw new Error(e + " : create node error");
            i = f(s);
          }
        } else i = p.createTextNode(e);
        _minerva_ret = t ? c(i, t) : i;
        minerva_hook.afterFunction("null", this, {
          i: i,
          a: a,
          u: u,
          l: l,
          d: d,
          s: s,
          p: p,
          h: h,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _fixCloneAttributes: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r,
            o = e.nodeName.toLowerCase(),
            i = (e.type || "").toLowerCase();
        "textarea" === o ? (t.defaultValue = e.defaultValue, t.value = e.value) : "input" !== o || "checkbox" !== i && "radio" !== i || (r = e.checked, r && (t.defaultChecked = t.checked = r), n = e.value, t.value !== n && (t.value = n));
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          o: o,
          i: i
        });
      },
      _defaultCreator: o,
      html: function (e, t, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        var i,
            a,
            u,
            l = g.query(e),
            c = l[0],
            f = !1;
        if (!c) return void 0;

        if (void 0 === t) {
          if (c.nodeType === h.ELEMENT_NODE) return c.innerHTML;

          if (c.nodeType === h.DOCUMENT_FRAGMENT_NODE) {
            var d = r(c.ownerDocument, 1);
            return d.appendChild(c), d.innerHTML;
          }

          return null;
        }

        if (t += "", !(t.match(/<(?:script|style|link)/i) || w && t.match(C) || L[(t.match(_) || ["", ""])[1].toLowerCase()])) try {
          for (a = l.length - 1; a >= 0; a--) u = l[a], u.nodeType === h.ELEMENT_NODE && (g.cleanData(n(u, "*")), u.innerHTML = t);

          f = !0;
        } catch (s) {}
        _minerva_ret = (f || (i = g.create(t, 0, c.ownerDocument, 0), g.empty(l), g.append(i, l, o)), void 0);
        minerva_hook.afterFunction("null", this, {
          i: i,
          a: a,
          u: u,
          l: l,
          c: c,
          f: f,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      remove: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o,
            i,
            u,
            l = g.query(e);

        for (u = l.length - 1; u >= 0; u--) o = l[u], t || o.nodeType !== h.ELEMENT_NODE || (i = v.makeArray(n(o, "*")), i.push(o), g.removeData(i), r && r.detach(i)), a(o, o.parentNode);

        minerva_hook.afterFunction("null", this, {
          o: o,
          i: i,
          u: u,
          l: l
        });
      },
      clone: function (e, t, n, r, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        "object" == typeof t && (r = t.deepWithDataAndEvent, n = t.withDataAndEvent, t = t.deep);
        var i,
            a,
            c = g.get(e),
            f = g._fixCloneAttributes;
        _minerva_ret = c ? (a = c.nodeType, i = c.cloneNode(t), (a === h.ELEMENT_NODE || a === h.DOCUMENT_FRAGMENT_NODE) && (f && a === h.ELEMENT_NODE && f(c, i), t && f && u(f, c, i)), n && (l(c, i, o), t && r && u(l, c, i)), i) : null;
        minerva_hook.afterFunction("null", this, {
          i: i,
          a: a,
          c: c,
          f: f,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      empty: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r,
            o = g.query(e);

        for (r = o.length - 1; r >= 0; r--) n = o[r], g.remove(n.childNodes, !1, t);

        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          o: o
        });
      },
      _nodeListToFragment: f,
      _getHolderDiv: r
    }), e);
    minerva_hook.afterFunction("null", this, {
      d: d,
      s: s,
      v: v,
      g: g,
      m: m,
      h: h,
      y: y,
      E: E,
      N: N,
      T: T,
      _: _,
      C: C,
      D: D,
      b: b,
      w: w,
      x: x,
      O: O,
      M: M,
      L: L,
      A: A,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = p,
        r = t,
        o = window,
        i = "_ks_data_" + n.now(),
        a = {},
        u = {},
        l = {
      applet: 1,
      object: 1,
      embed: 1
    },
        c = {
      data: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e == o) return c.data(u, t, n);
        var r = e[i];
        _minerva_ret = void 0 === n ? void 0 !== t ? r && r[t] : r = e[i] = e[i] || {} : (r = e[i] = e[i] || {}, r[t] = n, void 0);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      removeData: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e == o) return c.removeData(u, t);
        var r = e[i];
        if (void 0 !== t) delete r[t], n.isEmptyObject(r) && c.removeData(e);else try {
          delete e[i];
        } catch (a) {
          e[i] = void 0;
        }
        minerva_hook.afterFunction("null", this, {
          r: r
        });
      }
    },
        f = {
      data: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (l[e.nodeName.toLowerCase()]) return void 0;
        var o,
            u = e[i];

        if (!u) {
          if (void 0 !== t && void 0 === r) return void 0;
          u = e[i] = n.guid();
        }

        _minerva_ret = (o = a[u], void 0 === r ? void 0 !== t ? o && o[t] : o = a[u] = a[u] || {} : (o = a[u] = a[u] || {}, o[t] = r, void 0));
        minerva_hook.afterFunction("null", this, {
          o: o,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      removeData: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = e[i];

        if (r) {
          var o = a[r];
          if (void 0 !== t) delete o[t], n.isEmptyObject(o) && f.removeData(e);else {
            delete a[r];

            try {
              delete e[i];
            } catch (u) {
              e[i] = void 0;
            }

            e.removeAttribute && e.removeAttribute(i);
          }
        }

        minerva_hook.afterFunction("null", this, {
          r: r
        });
      }
    };
    _minerva_ret = (n.mix(r, {
      __EXPANDO: i,
      _dataCache: a,
      _winDataCache: u,
      data: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o = r.query(e),
            i = o[0];

        if ("object" == typeof t) {
          for (var a in t) r.data(o, a, t[a]);

          return void 0;
        }

        if (void 0 === n) {
          if (i) return i.nodeType ? f.data(i, t) : c.data(i, t);
        } else for (var u = o.length - 1; u >= 0; u--) i = o[u], i.nodeType ? f.data(i, t, n) : c.data(i, t, n);

        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          o: o,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      removeData: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            o,
            i = r.query(e);

        for (o = i.length - 1; o >= 0; o--) n = i[o], n.nodeType ? f.removeData(n, t) : c.removeData(n, t);

        minerva_hook.afterFunction("null", this, {
          n: n,
          o: o,
          i: i
        });
      },
      cleanData: function (e, t, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        var i,
            a,
            u = r.query(e);

        for (a = u.length - 1; a >= 0; a--) if (i = u[a], i.nodeType) {
          var l = t && n.makeArray(i.getElementsByTagName("*")) || [];
          l.push(i);

          for (var d = 0, s = l.length; s > d; d++) f.removeData(l[d]);

          o && o.detach(l);
        } else c.removeData(i);

        minerva_hook.afterFunction("null", this, {
          i: i,
          a: a,
          u: u
        });
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      o: o,
      i: i,
      a: a,
      u: u,
      l: l,
      c: c,
      f: f,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = !e.type || y.test(e.type);
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      var o,
          i,
          a,
          u = [];

      for (o = 0; e[o]; o++) if (i = e[o], a = s(i), i.nodeType === f.DOCUMENT_FRAGMENT_NODE) u.push.apply(u, r(g(i.childNodes), t));else if ("script" === a && n(i)) i.parentNode && i.parentNode.removeChild(i), t && t.push(i);else {
        if (i.nodeType === f.ELEMENT_NODE && !d.test(a)) {
          var l,
              c,
              p = [],
              v = i.getElementsByTagName("script");

          for (c = 0; c < v.length; c++) l = v[c], n(l) && p.push(l);

          m.apply(e, [o + 1, 0].concat(p));
        }

        u.push(i);
      }

      _minerva_ret = u;
      minerva_hook.afterFunction("r", this, {
        o: o,
        i: i,
        a: a,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      if (e.src) u(e.src);else {
        var t = a.trim(e.text || e.textContent || e.innerHTML || "");
        t && a.globalEval(t);
      }
      minerva_hook.afterFunction("o", this, {});
    }

    function i(e, t, n, i) {
      minerva_hook.beforeFunction("i", this, arguments);
      e = l.query(e), i && (i = []), e = r(e, i), l._fixInsertionChecked && l._fixInsertionChecked(e), t = l.query(t);
      var u,
          c,
          f,
          d,
          s,
          p = e.length,
          v = t.length;
      if ((p || i && i.length) && v) for (u = l._nodeListToFragment(e), v > 1 && (s = l.clone(u, !0), t = a.makeArray(t)), c = 0; v > c; c++) f = t[c], u && (d = c > 0 ? l.clone(s, !0) : u, n(d, f)), i && i.length && a.each(i, o);
      minerva_hook.afterFunction("i", this, {
        u: u,
        c: c,
        f: f,
        d: d,
        s: s,
        p: p,
        v: v
      });
    }

    var a = p,
        u = v,
        l = t,
        c = "parentNode",
        f = l.NodeType,
        d = /^(?:button|input|object|select|textarea)$/i,
        s = l.nodeName,
        g = a.makeArray,
        m = [].splice,
        h = "nextSibling",
        y = /\/(java|ecma)script/i;
    _minerva_ret = (a.mix(l, {
      _fixInsertionChecked: null,
      insertBefore: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        i(e, t, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t[c] && t[c].insertBefore(e, t);
          minerva_hook.afterFunction("null", this, {});
        }, n);
        minerva_hook.afterFunction("null", this, {});
      },
      insertAfter: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        i(e, t, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t[c] && t[c].insertBefore(e, t[h]);
          minerva_hook.afterFunction("null", this, {});
        }, n);
        minerva_hook.afterFunction("null", this, {});
      },
      appendTo: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        i(e, t, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t.appendChild(e);
          minerva_hook.afterFunction("null", this, {});
        }, n);
        minerva_hook.afterFunction("null", this, {});
      },
      prependTo: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        i(e, t, function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t.insertBefore(e, t.firstChild);
          minerva_hook.afterFunction("null", this, {});
        }, n);
        minerva_hook.afterFunction("null", this, {});
      },
      replaceWith: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = l.query(e);
        t = l.query(t), l.remove(t, !0), l.insertBefore(t, n), l.remove(n);
        minerva_hook.afterFunction("null", this, {
          n: n
        });
      }
    }), a.each({
      prepend: "prependTo",
      append: "appendTo",
      before: "insertBefore",
      after: "insertAfter"
    }, function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      l[t] = l[e];
      minerva_hook.afterFunction("null", this, {});
    }), e);
    minerva_hook.afterFunction("null", this, {
      a: a,
      u: u,
      l: l,
      c: c,
      f: f,
      d: d,
      s: s,
      g: g,
      m: m,
      h: h,
      y: y,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var t,
          n,
          r,
          o = e.ownerDocument,
          i = o.body;
      _minerva_ret = e.getBoundingClientRect ? (t = e.getBoundingClientRect(), n = t[b], r = t[w], n -= d.clientLeft || i.clientLeft || 0, r -= d.clientTop || i.clientTop || 0, {
        left: n,
        top: r
      }) : {
        left: 0,
        top: 0
      };
      minerva_hook.afterFunction("n", this, {
        t: t,
        n: n,
        r: r,
        o: o,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t = n(e),
          r = s(e);
      _minerva_ret = (t.left += u[x](r), t.top += u[O](r), t);
      minerva_hook.afterFunction("r", this, {
        t: t,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e, t) {
      minerva_hook.beforeFunction("o", this, arguments);
      var o,
          i = {
        left: 0,
        top: 0
      },
          a = s(e),
          u = e;
      t = t || a;

      do o = a == t ? r(u) : n(u), i.left += o.left, i.top += o.top; while (a && a != t && (u = a.frameElement) && (a = a.parent));

      _minerva_ret = i;
      minerva_hook.afterFunction("o", this, {
        o: o,
        i: i,
        a: a,
        u: u,
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e, t) {
      minerva_hook.beforeFunction("i", this, arguments);
      "static" === u.css(e, h) && (e.style[h] = y);
      var n,
          r,
          i = o(e),
          a = {};

      for (r in t) n = parseFloat(u.css(e, r)) || 0, a[r] = n + t[r] - i[r];

      u.css(e, a);
      minerva_hook.afterFunction("i", this, {
        n: n,
        r: r,
        i: i,
        a: a
      });
    }

    var a = p,
        u = t,
        l = window,
        c = l.document,
        f = u.NodeType,
        d = c && c.documentElement,
        s = u.getWindow,
        v = "CSS1Compat",
        g = "compatMode",
        m = Math.max,
        h = "position",
        y = "relative",
        E = "document",
        N = "body",
        T = "documentElement",
        _ = "viewport",
        C = "scroll",
        D = "client",
        b = "left",
        w = "top",
        x = C + "Left",
        O = C + "Top",
        M = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    _minerva_ret = (a.mix(u, {
      offset: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r;

        if (void 0 === t) {
          r = u.get(e);
          var a;
          return r && (a = o(r, n)), a;
        }

        var l,
            c = u.query(e);

        for (l = c.length - 1; l >= 0; l--) r = c[l], i(r, t);

        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          r: r,
          l: l,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      docWidth: 0,
      docHeight: 0,
      viewportHeight: 0,
      viewportWidth: 0,
      scrollTop: 0,
      scrollLeft: 0
    }), a.each(["Left", "Top"], function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = C + e;

      u[n] = function (r, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        if ("number" == typeof r) return arguments.callee(l, r);
        r = u.get(r);
        var i, a, c, d, p;
        _minerva_ret = (r && r.nodeType === f.ELEMENT_NODE ? void 0 !== o ? r[n] = parseFloat(o) : i = r[n] : (d = s(r), void 0 !== o ? (o = parseFloat(o), a = "Left" === e ? o : u.scrollLeft(d), c = "Top" === e ? o : u.scrollTop(d), d.scrollTo(a, c)) : (i = d["page" + (t ? "Y" : "X") + "Offset"], "number" != typeof i && (p = d[E], i = p[T][n], "number" != typeof i && (i = p[N][n])))), i);
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i,
          a: a,
          c: c,
          d: d,
          p: p,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {
        n: n
      });
    }), a.each(["Width", "Height"], function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      u["doc" + e] = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = u.get(t);
        var n = u.getDocument(t);
        _minerva_ret = m(n[T][C + e], n[N][C + e], u[_ + e](n));
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, u[_ + e] = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = u.get(t);
        var n = s(t),
            r = n["inner" + e];
        if (M && r) return r;
        var o = D + e,
            i = n[E],
            a = i[N],
            l = i[T],
            c = l[o];
        _minerva_ret = i[g] === v && c || a && a[o] || c;
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r,
          o: o,
          i: i,
          a: a,
          l: l,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };
      minerva_hook.afterFunction("null", this, {});
    }), e);
    minerva_hook.afterFunction("null", this, {
      a: a,
      u: u,
      l: l,
      c: c,
      f: f,
      d: d,
      s: s,
      v: v,
      g: g,
      m: m,
      h: h,
      y: y,
      E: E,
      N: N,
      T: T,
      _: _,
      C: C,
      D: D,
      b: b,
      w: w,
      x: x,
      O: O,
      M: M,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), l = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      if (W[e]) return W[e];
      var t = E(e);
      _minerva_ret = t && t.propertyName || e;
      minerva_hook.afterFunction("n", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t,
          n,
          r = F[e];
      _minerva_ret = (F[e] || (t = b.body || b.documentElement, n = b.createElement(e), h.prepend(n, t), r = h.css(n, "display"), t.removeChild(n), F[e] = r), r);
      minerva_hook.afterFunction("r", this, {
        t: t,
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e, t, n) {
      minerva_hook.beforeFunction("o", this, arguments);
      var r,
          o = {},
          i = e.style;

      for (r in t) o[r] = i[r], i[r] = t[r];

      n.call(e);

      for (r in t) i[r] = o[r];

      minerva_hook.afterFunction("o", this, {
        r: r,
        o: o,
        i: i
      });
    }

    function i(e, t, r, o) {
      minerva_hook.beforeFunction("i", this, arguments);
      var i, a, u;
      if (!(i = e.style)) return void 0;

      if (t = o ? t : H(t), u = I[t], t = n(t), void 0 !== r) {
        if (null === r || r === q ? r = q : isNaN(Number(r)) || S[t] || (r += k), u && u.set && (r = u.set(e, r)), void 0 !== r) {
          try {
            i[t] = r;
          } catch (l) {}

          r === q && i.removeAttribute && i.removeAttribute(t);
        }

        return i.cssText || e.removeAttribute("style"), void 0;
      }

      _minerva_ret = (u && "get" in u && void 0 !== (a = u.get(e, !1)) || (a = i[t]), void 0 === a ? "" : a);
      minerva_hook.afterFunction("i", this, {
        i: i,
        a: a,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      var t,
          n = arguments;
      _minerva_ret = (0 !== e.offsetWidth ? t = f.apply(void 0, n) : o(e, R, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t = f.apply(void 0, n);
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      }), t);
      minerva_hook.afterFunction("a", this, {
        t: t,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function u(e, t, n, r) {
      minerva_hook.beforeFunction("u", this, arguments);
      var o,
          i,
          a,
          u = 0;

      for (i = 0; i < t.length; i++) if (o = t[i]) for (a = 0; a < n.length; a++) {
        var l;
        l = "border" === o ? o + n[a] + "Width" : o + n[a], u += parseFloat(h._getComputedStyle(e, l, r)) || 0;
      }

      _minerva_ret = u;
      minerva_hook.afterFunction("u", this, {
        o: o,
        i: i,
        a: a,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function l(e, t) {
      minerva_hook.beforeFunction("l", this, arguments);
      _minerva_ret = "border-box" === h._getComputedStyle(e, "boxSizing", t);
      minerva_hook.afterFunction("l", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function c(e) {
      minerva_hook.beforeFunction("c", this, arguments);
      var t,
          n = e.ownerDocument;
      _minerva_ret = (n.defaultView && (t = n.defaultView.getComputedStyle(e, null)), t);
      minerva_hook.afterFunction("c", this, {
        t: t,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function f(e, t, n) {
      minerva_hook.beforeFunction("f", this, arguments);
      if (v.isWindow(e)) return t === x ? h.viewportWidth(e) : h.viewportHeight(e);
      if (9 === e.nodeType) return t === x ? h.docWidth(e) : h.docHeight(e);
      var r = t === x ? ["Left", "Right"] : ["Top", "Bottom"],
          o = t === x ? e.offsetWidth : e.offsetHeight,
          i = c(e),
          a = l(e, i),
          f = 0;
      (null == o || 0 >= o) && (o = void 0, f = h._getComputedStyle(e, t, i), (null == f || Number(f) < 0) && (f = e.style[t] || 0), f = parseFloat(f) || 0), void 0 === n && (n = a ? C : T);
      var d = void 0 !== o || a,
          s = o || f;
      _minerva_ret = n === T ? d ? s - u(e, ["border", "padding"], r, i) : f : d ? s + (n === C ? 0 : n === _ ? -u(e, ["border"], r, i) : u(e, ["margin"], r, i)) : f + u(e, N.slice(n), r, i);
      minerva_hook.afterFunction("f", this, {
        r: r,
        o: o,
        i: i,
        a: a,
        f: f,
        d: d,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function d(e) {
      minerva_hook.beforeFunction("d", this, arguments);
      var t,
          n,
          r = {
        top: 0,
        left: 0
      };
      _minerva_ret = ("fixed" === h.css(e, "position") ? n = e.getBoundingClientRect() : (t = s(e), n = h.offset(e), r = h.offset(t), r.top += parseFloat(h.css(t, "borderTopWidth")) || 0, r.left += parseFloat(h.css(t, "borderLeftWidth")) || 0), n.top -= parseFloat(h.css(e, "marginTop")) || 0, n.left -= parseFloat(h.css(e, "marginLeft")) || 0, {
        top: n.top - r.top,
        left: n.left - r.left
      });
      minerva_hook.afterFunction("d", this, {
        t: t,
        n: n,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function s(e) {
      minerva_hook.beforeFunction("s", this, arguments);

      for (var t = e.offsetParent || (e.ownerDocument || b).body; t && !P.test(t.nodeName) && "static" === h.css(t, "position");) t = t.offsetParent;

      _minerva_ret = t;
      minerva_hook.afterFunction("s", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var v = p,
        m = g,
        h = t,
        y = window,
        E = m.getCssVendorInfo,
        N = ["margin", "border", "padding"],
        T = -1,
        _ = 2,
        C = 1,
        D = 0,
        b = y.document || {},
        w = /^margin/,
        x = "width",
        O = "height",
        M = "display",
        L = M + v.now(),
        A = "none",
        S = {
      fillOpacity: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      orphans: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1
    },
        q = "",
        k = "px",
        B = /\d(?!px)[a-z%]+$/i,
        I = {},
        W = {
      "float": "cssFloat"
    },
        F = {},
        H = v.camelCase;
    v.mix(h, {
      _cssHooks: I,
      _cssProps: W,
      _getComputedStyle: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o,
            i,
            a,
            u,
            l = "",
            c = e.ownerDocument;
        _minerva_ret = (t = n(t), (r = r || c.defaultView.getComputedStyle(e, null)) && (l = r.getPropertyValue(t) || r[t]), "" !== l || h.contains(c, e) || (l = e.style[t]), h._RE_NUM_NO_PX.test(l) && w.test(t) && (u = e.style, o = u.width, i = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = r.width, u.width = o, u.minWidth = i, u.maxWidth = a), l);
        minerva_hook.afterFunction("null", this, {
          o: o,
          i: i,
          a: a,
          u: u,
          l: l,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _style: i,
      css: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            o,
            a,
            u,
            l = h.query(e),
            c = l[0];

        if ("object" == typeof t) {
          for (r in t) for (u = l.length - 1; u >= 0; u--) i(l[u], r, t[r]);

          return void 0;
        }

        if (t = H(t), o = I[t], void 0 === n) return a = "", c && (o && "get" in o && void 0 !== (a = o.get(c, !0)) || (a = h._getComputedStyle(c, t))), "undefined" == typeof a ? "" : a;

        for (u = l.length - 1; u >= 0; u--) i(l[u], t, n, 1);

        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          r: r,
          o: o,
          a: a,
          u: u,
          l: l,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      show: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            n,
            o,
            i,
            a = h.query(e);

        for (i = a.length - 1; i >= 0; i--) o = a[i], o.style[M] = h.data(o, L) || q, h.css(o, M) === A && (t = o.tagName.toLowerCase(), n = r(t), h.data(o, L, n), o.style[M] = n);

        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          o: o,
          i: i,
          a: a
        });
      },
      hide: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            n,
            r = h.query(e);

        for (n = r.length - 1; n >= 0; n--) {
          t = r[n];
          var o = t.style,
              i = o[M];
          i !== A && (i && h.data(t, L, i), o[M] = A);
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r
        });
      },
      toggle: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            n,
            r = h.query(e);

        for (n = r.length - 1; n >= 0; n--) t = r[n], h.css(t, M) === A ? h.show(t) : h.hide(t);

        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r
        });
      },
      addStyleSheet: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        "string" == typeof e && (n = t, t = e, e = y);
        var r,
            o = h.getDocument(e);
        n && (n = n.replace("#", q)) && (r = h.get("#" + n, o)), r || (r = h.create("<style>", {
          id: n
        }, o), h.get("head", o).appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(o.createTextNode(t)));
        minerva_hook.afterFunction("null", this, {
          r: r,
          o: o
        });
      },
      innerWidth: 0,
      innerHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
      width: 0,
      height: 0
    }), v.each([x, O], function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      h["inner" + v.ucfirst(e)] = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = h.get(t);
        _minerva_ret = n && a(n, e, _);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, h["outer" + v.ucfirst(e)] = function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = h.get(t);
        _minerva_ret = r && a(r, e, n ? D : C);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };
      var t = e === x ? ["Left", "Right"] : ["Top", "Bottom"];
      h[e] = function (n, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o = h.get(n);

        if (void 0 !== r) {
          if (o) {
            var i = c(o),
                f = l(o, i);
            return f && (r += u(o, ["padding", "border"], t, i)), h.css(n, e, r);
          }

          return void 0;
        }

        _minerva_ret = o && a(o, e, T);
        minerva_hook.afterFunction("null", this, {
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, I[e] = {
        get: function (t, n) {
          minerva_hook.beforeFunction("null", this, arguments);
          var r;
          _minerva_ret = (n && (r = a(t, e) + "px"), r);
          minerva_hook.afterFunction("null", this, {
            r: r,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      };
      minerva_hook.afterFunction("null", this, {
        t: t
      });
    });
    var R = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    };
    v.each(["left", "top"], function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      I[e] = {
        get: function (t, n) {
          minerva_hook.beforeFunction("null", this, arguments);
          var r, o, i;

          if (n) {
            if (i = h.css(t, "position"), "static" === i) return "auto";
            if (r = h._getComputedStyle(t, e), o = "auto" === r, o && "relative" === i) return "0px";
            (o || B.test(r)) && (r = d(t)[e] + "px");
          }

          _minerva_ret = r;
          minerva_hook.afterFunction("null", this, {
            r: r,
            o: o,
            i: i,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      };
      minerva_hook.afterFunction("null", this, {});
    });
    var P = /^(?:body|html)$/i;
    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      v: v,
      m: m,
      h: h,
      y: y,
      E: E,
      N: N,
      T: T,
      _: _,
      C: C,
      D: D,
      b: b,
      w: w,
      x: x,
      O: O,
      M: M,
      L: L,
      A: A,
      S: S,
      q: q,
      k: k,
      B: B,
      I: I,
      W: W,
      F: F,
      H: H,
      R: R,
      P: P,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), c = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var t,
          n = this,
          r = n.length;

      for (t = 0; r > t && e(n[t], t) !== !1; t++);

      minerva_hook.afterFunction("n", this, {
        t: t,
        n: n,
        r: r
      });
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t = e.substr(1);
      if (!t) throw new Error("An invalid or illegal string was specified for selector.");
      _minerva_ret = t;
      minerva_hook.afterFunction("r", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      var t = e.charAt(0);
      _minerva_ret = "#" === t ? i(r(e)) : "." === t ? a(r(e)) : u(e);
      minerva_hook.afterFunction("o", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);

      _minerva_ret = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        var n = g._getElementById(e, E);

        _minerva_ret = n && g._contains(t, n) ? [n] : [];
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);

      _minerva_ret = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = v(t, e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("a", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function u(e) {
      minerva_hook.beforeFunction("u", this, arguments);

      _minerva_ret = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = t.getElementsByTagName(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("u", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function l(e) {
      minerva_hook.beforeFunction("l", this, arguments);
      var t = /,|\+|=|~|\[|\]|:|>|\||\$|\^|\*|\(|\)|[\w-]+\.[\w-]+|[\w-]+#[\w-]+/;
      _minerva_ret = !e.match(t);
      minerva_hook.afterFunction("l", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function c(e, t) {
      minerva_hook.beforeFunction("c", this, arguments);
      var r,
          i,
          a,
          u,
          f = "string" == typeof e,
          d = void 0 !== t ? c(t) : (u = 1) && [E],
          s = d.length;

      if (e) {
        if (f) {
          if (e = q(e), u) if ("body" === e) r = [E.body];else if (O.test(e)) r = D(v(E, RegExp.$1));else if (A.test(e)) a = g._getElementById(RegExp.$2, E), r = a && a.nodeName.toLowerCase() === RegExp.$1 ? [a] : [];else if (M.test(e)) a = g._getElementById(e.substr(1), E), r = a ? [a] : [];else if (L.test(e)) r = D(E.getElementsByTagName(e));else if (l(e)) {
            var p,
                m,
                y,
                N = e.split(/\s+/),
                T = d;

            for (i = 0, p = N.length; p > i; i++) N[i] = o(N[i]);

            for (i = 0, p = N.length; p > i; i++) {
              var _,
                  w = N[i],
                  S = [];

              for (m = 0, y = T.length; y > m; m++) _ = w(T[m]), S.push.apply(S, D(_));

              if (T = S, !T.length) break;
            }

            r = T && T.length > 1 ? g.unique(T) : T;
          }

          if (!r) {
            for (r = [], i = 0; s > i; i++) x.apply(r, g._selectInternal(e, d[i]));

            r.length > 1 && s > 1 && g.unique(r);
          }
        } else if (r = e.nodeType || h.isWindow(e) ? [e] : e.getDOMNodes ? e.getDOMNodes() : C(e) ? e : b(e) ? D(e) : [e], !u) {
          var k,
              B = r,
              I = B.length;

          for (r = [], i = 0; I > i; i++) for (k = 0; s > k; k++) if (g._contains(d[k], B[i])) {
            r.push(B[i]);
            break;
          }
        }
      } else r = [];

      _minerva_ret = (r.each = n, r);
      minerva_hook.afterFunction("c", this, {
        r: r,
        i: i,
        a: a,
        u: u,
        f: f,
        d: d,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function f(e, t) {
      minerva_hook.beforeFunction("f", this, arguments);
      var n = e && d(e, "class");
      _minerva_ret = n && (n = n.replace(/[\r\t\n]/g, w)) && (w + n + w).indexOf(w + t + w) > -1;
      minerva_hook.afterFunction("f", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function d(e, t) {
      minerva_hook.beforeFunction("d", this, arguments);
      var n = e && e.getAttributeNode(t);
      _minerva_ret = n && n.specified ? "value" in n ? n.value : n.nodeValue : void 0;
      minerva_hook.afterFunction("d", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function s(e, t) {
      minerva_hook.beforeFunction("s", this, arguments);
      _minerva_ret = "*" === t || e.nodeName.toLowerCase() === t.toLowerCase();
      minerva_hook.afterFunction("s", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var v,
        g = t,
        h = p,
        y = m,
        E = document,
        N = E.documentElement,
        T = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector,
        _ = ("getElementsByClassName" in E),
        C = h.isArray,
        D = h.makeArray,
        b = g.isDomNodeList,
        w = " ",
        x = Array.prototype.push,
        O = /^\.([\w-]+)$/,
        M = /^#([\w-]+)$/,
        L = /^([\w-])+$/,
        A = /^([\w-]+)#([\w-]+)$/,
        S = /^(?:#([\w-]+))?\s*([\w-]+|\*)?\.?([\w-]+)?$/,
        q = h.trim;

    v = _ ? function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e.getElementsByClassName(t);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    } : function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n,
          r,
          o = [],
          i = e.getElementsByTagName("*");

      for (t = " " + t + " ", n = 0; n < i.length; n++) r = i[n], (" " + (r.className || r.getAttribute("class")) + " ").indexOf(t) > -1 && o.push(r);

      _minerva_ret = o;
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        o: o,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };
    var k = "sourceIndex" in N ? function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e.sourceIndex - t.sourceIndex;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    } : function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      if (!e.compareDocumentPosition || !t.compareDocumentPosition) return e.compareDocumentPosition ? -1 : 1;
      var n = 4 & e.compareDocumentPosition(t);
      _minerva_ret = n ? -1 : 1;
      minerva_hook.afterFunction("null", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        B = y && y.matches ? y.matches : function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var n, r = [], o = 0, i = t.length; i > o; o++) n = t[o], T.call(n, e) && r.push(n);

      _minerva_ret = r;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };
    _minerva_ret = (h.mix(g, {
      _getElementsByTagName: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = D(t.querySelectorAll(e));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _getElementById: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = t.getElementById(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _getSimpleAttr: d,
      _isTag: s,
      _hasSingleClass: f,
      _selectInternal: y || function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = D(t.querySelectorAll(e));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      query: c,
      get: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = c(e, t)[0] || null;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      unique: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        function e(e, n) {
          minerva_hook.beforeFunction("e", this, arguments);
          _minerva_ret = e === n ? (t = !0, 0) : k(e, n);
          minerva_hook.afterFunction("e", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }

        var t,
            n = !0;
        _minerva_ret = ([0, 0].sort(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = (n = !1, 0);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }), function (r) {
          minerva_hook.beforeFunction("null", this, arguments);
          if (t = n, r.sort(e), t) for (var o = 1, i = r.length; i > o;) r[o] === r[o - 1] ? (r.splice(o, 1), --i) : o++;
          _minerva_ret = r;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }(),
      filter: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            o,
            i,
            a,
            u = c(e, n),
            l = [];
        _minerva_ret = ("string" == typeof t && (t = q(t)) && (i = S.exec(t)) && (r = i[1], o = i[2], a = i[3], r ? !r || o || a || (t = function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = d(e, "id") === r;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }) : t = function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = !0,
              n = !0;
          _minerva_ret = (o && (t = s(e, o)), a && (n = f(e, a)), n && t);
          minerva_hook.afterFunction("null", this, {
            t: t,
            n: n,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }), l = "function" == typeof t ? h.filter(u, t) : B(t, u));
        minerva_hook.afterFunction("null", this, {
          r: r,
          o: o,
          i: i,
          a: a,
          u: u,
          l: l,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      test: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = c(e, n);
        _minerva_ret = r.length && g.filter(r, t, n).length === r.length;
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      v: v,
      g: g,
      h: h,
      y: y,
      E: E,
      N: N,
      T: T,
      _: _,
      C: C,
      D: D,
      b: b,
      w: w,
      x: x,
      O: O,
      M: M,
      L: L,
      A: A,
      S: S,
      q: q,
      v: v,
      k: k,
      B: B,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), f = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, t, n, o, l, c, f) {
      minerva_hook.beforeFunction("n", this, arguments);
      if (!(e = a.get(e))) return null;
      if (0 === t) return e;
      if (c || (e = e[n]), !e) return null;
      l = l && a.get(l) || null, void 0 === t && (t = 1);
      var d,
          s,
          p = [],
          v = i.isArray(t);

      for ("number" == typeof t && (d = 0, s = t, t = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = ++d === s;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }); e && e !== l && (!(e.nodeType === u.ELEMENT_NODE || e.nodeType === u.TEXT_NODE && f) || !r(e, t) || o && !o(e) || (p.push(e), v));) e = e[n];

      _minerva_ret = v ? p : p[0] || null;
      minerva_hook.afterFunction("n", this, {
        d: d,
        s: s,
        p: p,
        v: v,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      if (!t) return !0;

      if (i.isArray(t)) {
        var n,
            r = t.length;
        if (!r) return !0;

        for (n = 0; r > n; n++) if (a.test(e, t[n])) return !0;
      } else if (a.test(e, t)) return !0;

      _minerva_ret = !1;
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e, t, n, r) {
      minerva_hook.beforeFunction("o", this, arguments);
      var o,
          l,
          c,
          f = [],
          d = a.get(e),
          s = d;

      if (d && n && (s = d.parentNode), s) {
        for (o = i.makeArray(s.childNodes), l = 0; l < o.length; l++) c = o[l], (r || c.nodeType === u.ELEMENT_NODE) && c !== d && f.push(c);

        t && (f = a.filter(f, t));
      }

      _minerva_ret = f;
      minerva_hook.afterFunction("o", this, {
        o: o,
        l: l,
        c: c,
        f: f,
        d: d,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var i = p,
        a = t,
        u = a.NodeType,
        l = 16;
    _minerva_ret = (i.mix(a, {
      _contains: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = !!(e.compareDocumentPosition(t) & l);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      closest: function (e, t, r, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(e, t, "parentNode", function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = e.nodeType !== u.DOCUMENT_FRAGMENT_NODE;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, r, !0, o);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      parent: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(e, t, "parentNode", function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = e.nodeType !== u.DOCUMENT_FRAGMENT_NODE;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, r, void 0);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      first: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o = a.get(e);
        _minerva_ret = n(o && o.firstChild, t, "nextSibling", void 0, void 0, !0, r);
        minerva_hook.afterFunction("null", this, {
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      last: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o = a.get(e);
        _minerva_ret = n(o && o.lastChild, t, "previousSibling", void 0, void 0, !0, r);
        minerva_hook.afterFunction("null", this, {
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      next: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(e, t, "nextSibling", void 0, void 0, void 0, r);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      prev: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n(e, t, "previousSibling", void 0, void 0, void 0, r);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      siblings: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = o(e, t, !0, n);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      children: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = o(e, t, void 0);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      contents: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = o(e, t, void 0, 1);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      contains: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e = a.get(e), t = a.get(t), e && t ? a._contains(e, t) : !1);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      index: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r,
            o,
            l = a.query(e),
            c = 0,
            f = l[0];

        if (!t) {
          if (r = f && f.parentNode, !r) return -1;

          for (n = f; n = n.previousSibling;) n.nodeType === u.ELEMENT_NODE && c++;

          return c;
        }

        _minerva_ret = (o = a.query(t), "string" == typeof t ? i.indexOf(f, o) : i.indexOf(o[0], l));
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          o: o,
          l: l,
          c: c,
          f: f,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      equals: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e = a.query(e), t = a.query(t), e.length !== t.length) return !1;

        for (var n = e.length; n >= 0; n--) if (e[n] !== t[n]) return !1;

        _minerva_ret = !0;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      i: i,
      a: a,
      u: u,
      l: l,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), d = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = t;
    _minerva_ret = e = n;
    minerva_hook.afterFunction("null", this, {
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), s = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = d;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    t: t,
    n: n,
    r: r,
    o: o,
    i: i,
    a: a,
    u: u,
    l: l,
    c: c,
    f: f,
    d: d,
    s: s,
    p: p,
    v: v,
    g: g,
    m: m,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});