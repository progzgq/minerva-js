define("node-base", ["util", "dom"], function (t) {
  minerva_hook.beforeFunction("null", this, arguments);
  var e,
      n,
      r,
      i,
      a = t("util"),
      o = t("dom");
  _minerva_ret = (e = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(t, i, a) {
      minerva_hook.beforeFunction("e", this, arguments);
      var o,
          l = this;
      if (t instanceof e && 1 === arguments.length) return t.slice();
      if (!(l instanceof e)) return e.all.apply(e, arguments);
      if (!t) return l;

      if ("string" == typeof t) {
        if (o = r.create(t, i, a), o.nodeType === u.DOCUMENT_FRAGMENT_NODE) return s.apply(this, p(o.childNodes)), l;
      } else {
        if (n.isArray(t) || c(t)) return s.apply(l, p(t)), l;
        o = t;
      }

      _minerva_ret = (l[0] = o, l.length = 1, l);
      minerva_hook.afterFunction("e", this, {
        o: o,
        l: l,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var n = a,
        r = o,
        i = Array.prototype,
        l = i.slice,
        u = r.NodeType,
        s = i.push,
        p = n.makeArray,
        c = r.isDomNodeList;
    _minerva_ret = (e.prototype = {
      constructor: e,
      isNode: !0,
      length: 0,
      item: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;
        _minerva_ret = (t = parseInt(t, 10), "number" == typeof t && !isNaN(t) && t < n.length ? new e(n[t]) : null);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      add: function (t, n, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        "number" == typeof n && (r = n, n = void 0);
        var a = e.all(t, n).getDOMNodes(),
            o = new e(this);
        if (void 0 === r) s.apply(o, a);else {
          var l = [r, 0];
          l.push.apply(l, a), i.splice.apply(o, l);
        }
        _minerva_ret = o;
        minerva_hook.afterFunction("null", this, {
          a: a,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      slice: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = new e(l.apply(this, arguments));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getDOMNodes: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = l.call(this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      each: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (n.each(this, function (n, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = t.call(e || n, n, r, this);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, this), this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      map: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n.map(this, function (n, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = t.call(e || n, n, r, this);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getDOMNode: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this[0];
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      end: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        _minerva_ret = t.__parent || t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      filter: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = new e(r.filter(this, n.isString(t) ? t : function (e, n, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = t.call(e, e, n, r);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      all: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r = this;
        _minerva_ret = (n = r.length > 0 ? e.all(t, r) : new e(), n.__parent = r, n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      one: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            n = e.all(t),
            r = n.length ? n.slice(0, 1) : null;
        _minerva_ret = (r && (r.__parent = e), r);
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, e.prototype.find = e.prototype.all, e.fn = e.prototype, n.mix(e, {
      all: function (t, i) {
        minerva_hook.beforeFunction("null", this, arguments);

        if ("string" == typeof t && (t = n.trim(t)) && t.length >= 3 && n.startsWith(t, "<") && n.endsWith(t, ">")) {
          var a;
          return i && (i.getDOMNode && (i = i[0]), i.nodeType || (a = i, i = arguments[2])), new e(t, a, i);
        }

        _minerva_ret = new e(r.query(t, i));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      one: function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = e.all(t, n);
        _minerva_ret = r.length ? r.slice(0, 1) : null;
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e.Dom = r, "undefined" != typeof KISSY && n.mix(KISSY, {
      all: e.all,
      one: e.one
    }), t = e);
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i,
      l: l,
      u: u,
      s: s,
      p: p,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(t, e, n) {
      minerva_hook.beforeFunction("n", this, arguments);
      n.unshift(e);
      var r = u[t].apply(u, n);
      _minerva_ret = void 0 === r ? e : r;
      minerva_hook.afterFunction("n", this, {
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(t, e, n) {
      minerva_hook.beforeFunction("r", this, arguments);
      n.unshift(e);
      var r = u[t].apply(u, n);
      _minerva_ret = void 0 === r ? e : null === r ? null : new s(r);
      minerva_hook.afterFunction("r", this, {
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(t, e, r, i) {
      minerva_hook.beforeFunction("i", this, arguments);
      _minerva_ret = void 0 !== i[r] || l.isObject(i[0]) ? n(t, e, i) : (i.unshift(e), u[t].apply(u, i));
      minerva_hook.afterFunction("i", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var l = a,
        u = o,
        s = e,
        p = s.prototype,
        c = l.makeArray,
        f = ["nodeName", "isCustomDomain", "getEmptyIframeSrc", "equals", "contains", "index", "scrollTop", "scrollLeft", "height", "width", "innerHeight", "innerWidth", "outerHeight", "outerWidth", "addStyleSheet", "appendTo", "prependTo", "insertBefore", "before", "after", "insertAfter", "test", "hasClass", "addClass", "removeClass", "replaceClass", "toggleClass", "removeAttr", "hasAttr", "hasProp", "show", "hide", "toggle", "scrollIntoView", "remove", "empty", "removeData", "hasData", "unselectable", "wrap", "wrapAll", "replaceWith", "wrapInner", "unwrap"],
        h = ["getWindow", "getDocument", "first", "last", "parent", "closest", "next", "prev", "clone", "siblings", "contents", "children"],
        d = {
      attr: 1,
      text: 0,
      css: 1,
      style: 1,
      val: 0,
      prop: 1,
      offset: 0,
      html: 0,
      outerHTML: 0,
      outerHtml: 0,
      data: 1
    };
    _minerva_ret = (l.each(f, function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      p[t] = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = c(arguments);
        _minerva_ret = n(t, this, e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }), l.each(h, function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      p[t] = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = c(arguments);
        _minerva_ret = r(t, this, e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }), l.each(d, function (t, e) {
      minerva_hook.beforeFunction("null", this, arguments);

      p[e] = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = c(arguments);
        _minerva_ret = i(e, this, t, n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }), t);
    minerva_hook.afterFunction("null", this, {
      l: l,
      u: u,
      s: s,
      p: p,
      c: c,
      f: f,
      h: h,
      d: d,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = a,
        r = o,
        i = e,
        l = i.prototype;
    _minerva_ret = (n.each(["append", "prepend", "before", "after"], function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      l[t] = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = e,
            i = this;
        _minerva_ret = ("object" != typeof n && (n = r.create(n + "")), n && r[t](n, i), i);
        minerva_hook.afterFunction("null", this, {
          n: n,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }), n.each(["wrap", "wrapAll", "replaceWith", "wrapInner"], function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = l[t];

      l[t] = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;
        _minerva_ret = ("string" == typeof t && (t = i.all(t, n[0].ownerDocument)), e.call(n, t));
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {
        e: e
      });
    }), t);
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      i: i,
      l: l,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = e;
    _minerva_ret = t = n;
    minerva_hook.afterFunction("null", this, {
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    e: e,
    n: n,
    r: r,
    i: i,
    a: a,
    o: o,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});