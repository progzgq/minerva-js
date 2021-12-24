define("io-form", ["util", "dom", "querystring", "io-base"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r,
      t,
      a,
      n = e("util"),
      i = e("dom"),
      o = e("querystring"),
      u = e("io-base");
  _minerva_ret = (r = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = e.replace(d, "\r\n");
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);

      for (var r = [], t = 0; t < e.length; t++) r.push(e[t]);

      _minerva_ret = r;
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var a,
        u = n,
        l = i,
        f = o,
        s = /^(?:select|textarea)/i,
        d = /\r?\n/g,
        m = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
    _minerva_ret = (a = {
      serialize: function (e, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = f.stringify(a.getFormData(e), void 0, void 0, r || !1);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getFormData: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var a = [],
            n = {};
        _minerva_ret = (u.each(l.query(e), function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var r = e.elements ? t(e.elements) : [e];
          a.push.apply(a, r);
          minerva_hook.afterFunction("null", this, {
            r: r
          });
        }), a = u.filter(a, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = e.name && !e.disabled && (e.checked || s.test(e.nodeName) || m.test(e.type));
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }), u.each(a, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t,
              a = l.val(e);

          if (null !== a) {
            if (a = u.isArray(a) ? u.map(a, r) : r(a), t = n[e.name], void 0 === t) return n[e.name] = a, void 0;
            u.isArray(t) || (t = n[e.name] = [t]), t.push.apply(t, u.makeArray(a));
          }

          minerva_hook.afterFunction("null", this, {
            t: t,
            a: a
          });
        }), n);
        minerva_hook.afterFunction("null", this, {
          a: a,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, e = a);
    minerva_hook.afterFunction("null", this, {
      a: a,
      u: u,
      l: l,
      f: f,
      s: s,
      d: d,
      m: m,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = n,
        a = u,
        l = i,
        f = o,
        s = r,
        d = window,
        m = Array.prototype.slice,
        c = d.FormData;
    _minerva_ret = (a.addPreprocessor("start", function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var r,
          a,
          n,
          i,
          o,
          u = e.io,
          d = u.config,
          y = d.form;

      if (y) {
        r = l.get(y), o = d.data;

        for (var p = !1, v = {}, g = l.query("input", r), h = 0, b = g.length; b > h; h++) {
          var q = g[h];

          if ("file" === q.type.toLowerCase()) {
            if (p = !0, !c) break;
            var w = m.call(q.files, 0);
            v[l.attr(q, "name")] = w.length > 1 ? w : w[0] || null;
          }
        }

        p && c && (d.files = d.files || {}, t.mix(d.files, v), delete d.contentType), !p || c ? (i = s.getFormData(r), d.hasContent ? (i = f.stringify(i, void 0, void 0, d.serializeArray), o ? d.data += "&" + i : d.data = i) : t.mix(d.uri.query, i)) : (n = d.dataType, a = n[0], "*" === a && (a = "text"), n.length = 2, n[0] = "iframe", n[1] = a);
      }

      minerva_hook.afterFunction("null", this, {
        r: r,
        a: a,
        n: n,
        i: i,
        o: o,
        u: u,
        d: d,
        y: y
      });
    }), e = s);
    minerva_hook.afterFunction("null", this, {
      t: t,
      a: a,
      l: l,
      f: f,
      s: s,
      d: d,
      m: m,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = t;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    r: r,
    t: t,
    a: a,
    n: n,
    i: i,
    o: o,
    u: u,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});