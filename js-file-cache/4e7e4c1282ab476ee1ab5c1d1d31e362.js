define("dom-extra", ["dom-base", "util", "feature"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var t,
      r,
      o,
      n,
      l,
      i,
      a,
      f,
      u,
      c = e("dom-base"),
      s = e("util"),
      p = e("feature");
  _minerva_ret = (t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = c;
    _minerva_ret = e = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = s,
        o = t,
        n = document,
        l = n && n.documentElement,
        i = o._getProp;
    _minerva_ret = (r.mix(o, {
      hasAttr: l && !l.hasAttribute ? function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = t.toLowerCase();
        var r,
            n,
            l,
            i = o.query(e);

        for (r = 0; r < i.length; r++) if (n = i[r], l = n.getAttributeNode(t), l && l.specified) return !0;

        _minerva_ret = !1;
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          n: n,
          l: l,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      } : function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var r = o.query(e), n = r.length, l = 0; n > l; l++) if (r[l].hasAttribute(t)) return !0;

        _minerva_ret = !1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      hasProp: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            n,
            l = o.query(e),
            a = l.length;

        for (r = 0; a > r; r++) if (n = l[r], void 0 !== i(n, t)) return !0;

        _minerva_ret = !1;
        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n,
          l: l,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o,
      n: n,
      l: l,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), o = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = s,
        o = t,
        n = document,
        l = n && "outerHTML" in n.documentElement,
        i = o.NodeType,
        a = o._getHolderDiv;
    _minerva_ret = (r.mix(o, {
      outerHtml: function (e, t, r, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var f,
            u,
            c,
            s = o.query(e),
            p = s.length,
            d = s[0];
        if (!d) return null;
        if (void 0 === t) return l && d.nodeType !== i.DOCUMENT_FRAGMENT_NODE ? d.outerHTML : (f = a(d.ownerDocument, 1), f.appendChild(o.clone(d, !0)), f.innerHTML);
        if (t += "", !t.match(/<(?:script|style|link)/i) && l) for (u = p - 1; u >= 0; u--) d = s[u], d.nodeType === i.ELEMENT_NODE && (o.cleanData(d, 1), d.outerHTML = t);else c = o.create(t, 0, d.ownerDocument, 0), o.insertBefore(c, s, r), o.remove(s, !1, n);
        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          f: f,
          u: u,
          c: c,
          s: s,
          p: p,
          d: d,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), o.outerHTML = o.outerHtml, e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o,
      n: n,
      l: l,
      i: i,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = s,
        o = t,
        n = window,
        l = o.__EXPANDO,
        i = o._dataCache,
        a = o._winDataCache,
        f = {
      hasData: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e) if (void 0 !== t) {
          if (t in e) return !0;
        } else if (!r.isEmptyObject(e)) return !0;
        _minerva_ret = !1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    },
        u = {
      hasData: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e === n) return u.hasData(a, t);
        var r = e[l];
        _minerva_ret = f.hasData(r, t);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    },
        c = {
      hasData: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = e[l];
        if (!r) return !1;
        var o = i[r];
        _minerva_ret = f.hasData(o, t);
        minerva_hook.afterFunction("null", this, {
          r: r,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    _minerva_ret = (r.mix(o, {
      hasData: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var r = !1, n = o.query(e), l = 0; l < n.length; l++) {
          var i = n[l];
          if (r = i.nodeType ? c.hasData(i, t) : u.hasData(i, t)) return r;
        }

        _minerva_ret = r;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o,
      n: n,
      l: l,
      i: i,
      a: a,
      f: f,
      u: u,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), l = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = s,
        o = t;
    _minerva_ret = (r.mix(o, {
      wrapAll: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = o.clone(o.get(t), !0), e = o.query(e), e[0].parentNode && o.insertBefore(t, e[0]);

        for (var r; (r = t.firstChild) && 1 === r.nodeType;) t = r;

        o.appendTo(e, t);
        minerva_hook.afterFunction("null", this, {});
      },
      wrap: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = o.query(e), t = o.get(t), r.each(e, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          o.wrapAll(e, t);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {});
      },
      wrapInner: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = o.query(e), t = o.get(t), r.each(e, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var r = e.childNodes;
          r.length ? o.wrapAll(r, t) : e.appendChild(t);
          minerva_hook.afterFunction("null", this, {
            r: r
          });
        });
        minerva_hook.afterFunction("null", this, {});
      },
      unwrap: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = o.query(e), r.each(e, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = e.parentNode;
          o.replaceWith(t, t.childNodes);
          minerva_hook.afterFunction("null", this, {
            t: t
          });
        });
        minerva_hook.afterFunction("null", this, {});
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = s,
        o = t,
        n = o.getWindow,
        l = o.NodeType,
        i = "left",
        a = "top";
    _minerva_ret = (r.mix(o, {
      scrollIntoView: function (e, t, f, u) {
        minerva_hook.beforeFunction("null", this, arguments);
        var c, s;

        if (c = o.get(e)) {
          t && (t = o.get(t)), t || (t = c.ownerDocument), t.nodeType === l.DOCUMENT_NODE && (t = n(t)), "object" == typeof f && (u = f.allowHorizontalScroll, s = f.onlyScrollIfNeeded, f = f.alignWithTop), u = void 0 === u ? !0 : u;
          var p,
              d,
              h,
              v,
              y,
              m,
              T,
              g,
              D,
              N,
              w = r.isWindow(t),
              b = o.offset(c),
              L = o.outerHeight(c),
              E = o.outerWidth(c);
          w ? (T = t, N = o.height(T), D = o.width(T), g = {
            left: o.scrollLeft(T),
            top: o.scrollTop(T)
          }, y = {
            left: b[i] - g[i],
            top: b[a] - g[a]
          }, m = {
            left: b[i] + E - (g[i] + D),
            top: b[a] + L - (g[a] + N)
          }, v = g) : (p = o.offset(t), d = t.clientHeight, h = t.clientWidth, v = {
            left: o.scrollLeft(t),
            top: o.scrollTop(t)
          }, y = {
            left: b[i] - (p[i] + (parseFloat(o.css(t, "borderLeftWidth")) || 0)),
            top: b[a] - (p[a] + (parseFloat(o.css(t, "borderTopWidth")) || 0))
          }, m = {
            left: b[i] + E - (p[i] + h + (parseFloat(o.css(t, "borderRightWidth")) || 0)),
            top: b[a] + L - (p[a] + d + (parseFloat(o.css(t, "borderBottomWidth")) || 0))
          }), s ? (y.top < 0 || m.top > 0) && (f === !0 ? o.scrollTop(t, v.top + y.top) : f === !1 ? o.scrollTop(t, v.top + m.top) : y.top < 0 ? o.scrollTop(t, v.top + y.top) : o.scrollTop(t, v.top + m.top)) : (f = void 0 === f ? !0 : !!f, f ? o.scrollTop(t, v.top + y.top) : o.scrollTop(t, v.top + m.top)), u && (s ? (y.left < 0 || m.left > 0) && (f === !0 ? o.scrollLeft(t, v.left + y.left) : f === !1 ? o.scrollLeft(t, v.left + m.left) : y.left < 0 ? o.scrollLeft(t, v.left + y.left) : o.scrollLeft(t, v.left + m.left)) : (f = void 0 === f ? !0 : !!f, f ? o.scrollLeft(t, v.left + y.left) : o.scrollLeft(t, v.left + m.left)));
        }

        minerva_hook.afterFunction("null", this, {
          c: c,
          s: s
        });
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o,
      n: n,
      l: l,
      i: i,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = s,
        o = p,
        n = t,
        l = r.camelCase,
        i = n._style,
        a = n.nodeName,
        f = o.getCssVendorInfo,
        u = f("userSelect"),
        c = u && u.propertyName;
    _minerva_ret = (r.mix(n, {
      style: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o,
            a,
            f,
            u = n.query(e),
            c = u[0];

        if ("object" == typeof t) {
          for (o in t) for (o = l(o), f = u.length - 1; f >= 0; f--) i(u[f], o, t[o], 1);

          return void 0;
        }

        if (t = l(t), void 0 === r) return a = "", c && (a = i(c, t, r, 1)), a;

        for (f = u.length - 1; f >= 0; f--) i(u[f], t, r, 1);

        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          o: o,
          a: a,
          f: f,
          u: u,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      unselectable: c ? function (e) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t = n.query(e), r = t.length - 1; r >= 0; r--) t[r].style[c] = "none";

        minerva_hook.afterFunction("null", this, {});
      } : function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            o,
            l,
            i,
            f,
            u,
            c = n.query(e),
            s = 0;

        for (i = ["iframe", "textarea", "input", "select"], o = c.length - 1; o >= 0; o--) for (t = c[o], f = t.style, u = t.getElementsByTagName("*"), t.setAttribute("unselectable", "on"); l = u[s++];) r.inArray(a(l), i) || l.setAttribute("unselectable", "on");

        minerva_hook.afterFunction("null", this, {
          t: t,
          o: o,
          l: l,
          i: i,
          f: f,
          u: u,
          c: c,
          s: s
        });
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o,
      n: n,
      l: l,
      i: i,
      a: a,
      f: f,
      u: u,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), f = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = t;
    _minerva_ret = e = r;
    minerva_hook.afterFunction("null", this, {
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = f;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    t: t,
    r: r,
    o: o,
    n: n,
    l: l,
    i: i,
    a: a,
    f: f,
    u: u,
    c: c,
    s: s,
    p: p,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});