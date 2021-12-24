define("io-extra", ["util", "querystring", "dom", "io-base", "util"], function (t) {
  minerva_hook.beforeFunction("null", this, arguments);
  var e,
      r,
      n,
      o = t("util"),
      a = t("querystring"),
      i = t("dom"),
      c = t("io-base"),
      u = t("util");
  _minerva_ret = (e = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(t) {
      minerva_hook.beforeFunction("e", this, arguments);
      var e,
          r = m.guid("io-iframe"),
          n = f.getEmptyIframeSrc();
      _minerva_ret = (e = t.iframe = f.create("<iframe " + (n ? ' src="' + n + '" ' : "") + ' id="' + r + '" name="' + r + '" style="position:absolute;left:-9999px;top:-9999px;"/>'), f.prepend(e, y.body || y.documentElement), e);
      minerva_hook.afterFunction("e", this, {
        e: e,
        r: r,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(t, e, r) {
      minerva_hook.beforeFunction("r", this, arguments);
      var n,
          o,
          a,
          i = [];
      _minerva_ret = (m.each(t, function (t, c) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (n = m.isArray(t), n || (t = [t]), o = 0; o < t.length; o++) a = y.createElement("input"), a.type = "hidden", a.name = c + (n && r ? "[]" : ""), a.value = t[o], f.append(a, e), i.push(a);

        minerva_hook.afterFunction("null", this, {});
      }), i);
      minerva_hook.afterFunction("r", this, {
        n: n,
        o: o,
        a: a,
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);
      f.remove(t);
      minerva_hook.afterFunction("n", this, {});
    }

    function u(t) {
      minerva_hook.beforeFunction("u", this, arguments);
      var e,
          r = this,
          o = r.form,
          a = r.io,
          i = t.type,
          c = a.iframe;
      if (c) if ("abort" === i && 6 === p.ie ? setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        f.attr(o, r.attrs);
        minerva_hook.afterFunction("null", this, {});
      }, 0) : f.attr(o, r.attrs), n(this.fields), p.removeEvent(c, "load", r._callback), p.removeEvent(c, "error", r._callback), setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        f.remove(c);
        minerva_hook.afterFunction("null", this, {});
      }, b), a.iframe = null, "load" === i) try {
        e = c.contentWindow.document, e && e.body && (a.responseText = f.html(e.body), m.startsWith(a.responseText, "<?xml") && (a.responseText = void 0)), a.responseXML = e && e.XMLDocument ? e.XMLDocument : e, e ? a._ioReady(v, "success") : a._ioReady(g, "parser error");
      } catch (u) {
        a._ioReady(g, "parser error");
      } else "error" === i && a._ioReady(g, "error");
      minerva_hook.afterFunction("u", this, {
        e: e,
        r: r,
        o: o,
        a: a,
        i: i,
        c: c
      });
    }

    function s(t) {
      minerva_hook.beforeFunction("s", this, arguments);
      this.io = t, this._callback = m.bind(u, this);
      minerva_hook.afterFunction("s", this, {});
    }

    var m = o,
        d = a,
        f = i,
        l = c,
        p = l._util,
        y = document,
        v = 200,
        g = 500,
        b = 30,
        h = m.clone(l.getConfig().converters.text);
    _minerva_ret = (h.json = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = m.parseJson(m.unEscapeHtml(t));
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, l.setupConfig({
      converters: {
        iframe: h,
        text: {
          iframe: function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = t;
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }
        },
        xml: {
          iframe: function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = t;
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }
        }
      }
    }), m.augment(s, {
      send: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        function t() {
          minerva_hook.beforeFunction("t", this, arguments);
          p.addEvent(o, "load", i._callback), p.addEvent(o, "error", i._callback), m.submit();
          minerva_hook.afterFunction("t", this, {});
        }

        var n,
            o,
            a,
            i = this,
            c = i.io,
            u = c.config,
            s = u.data,
            m = f.get(u.form);
        i.attrs = {
          target: f.attr(m, "target") || "",
          action: f.attr(m, "action") || "",
          encoding: f.attr(m, "encoding"),
          enctype: f.attr(m, "enctype"),
          method: f.attr(m, "method")
        }, i.form = m, o = e(c), f.attr(m, {
          target: o.id,
          action: c._getUrlForSend(),
          method: "post",
          enctype: "multipart/form-data",
          encoding: "multipart/form-data"
        }), s && (a = d.parse(s)), a && (n = r(a, m, u.serializeArray)), i.fields = n, 6 === p.ie ? setTimeout(t, 0) : t();
        minerva_hook.afterFunction("null", this, {
          n: n,
          o: o,
          a: a,
          i: i,
          c: c,
          u: u,
          s: s,
          m: m
        });
      },
      abort: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        this._callback({
          type: "abort"
        });

        minerva_hook.afterFunction("null", this, {});
      }
    }), l.setupTransport("iframe", s), t);
    minerva_hook.afterFunction("null", this, {
      m: m,
      d: d,
      f: f,
      l: l,
      p: p,
      y: y,
      v: v,
      g: g,
      b: b,
      h: h,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = c,
        r = u;
    _minerva_ret = (r.mix(e, {
      upload: function (t, r, n, o, a) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = ("function" == typeof n && (a = o, o = n, n = void 0), e({
          url: t,
          type: "post",
          dataType: a,
          form: r,
          data: n,
          complete: o
        }));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), t = e);
    minerva_hook.afterFunction("null", this, {
      e: e,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = t = r;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    e: e,
    r: r,
    n: n,
    o: o,
    a: a,
    i: i,
    c: c,
    u: u,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});