define("io-base", ["util", "querystring", "promise", "url", "dom", "io-script"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var t,
      r,
      n,
      o,
      a,
      i,
      s,
      c,
      u,
      p,
      d,
      f = e("util"),
      l = e("querystring"),
      v = e("promise"),
      m = e("url"),
      h = e("dom"),
      y = e("io-script");
  _minerva_ret = (t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      var t = e.context;
      delete e.context, e = n.mix(n.clone(x), e, {
        deep: !0
      }), e.context = t || e;
      var r,
          a,
          s = e.type,
          u = e.dataType;
      _minerva_ret = (a = e.uri = i.parse(i.resolve(d, e.url), !0), a.query = {}, "crossDomain" in e || (e.crossDomain = !(a.protocol === h.protocol && a.host === h.host)), s = e.type = s.toUpperCase(), e.hasContent = !p.test(s), e.processData && (r = e.data) && "string" != typeof r && (e.data = o.stringify(r, void 0, void 0, e.serializeArray)), u = e.dataType = n.trim(u || "*").split(c), "cache" in e || !n.inArray(u[0], ["script", "jsonp"]) || (e.cache = !1), e.hasContent || (e.data && n.mix(a.query, o.parse(e.data)), e.cache === !1 && (a.query._ksTS = n.now() + "_" + n.guid())), e);
      minerva_hook.afterFunction("t", this, {
        t: t,
        r: r,
        a: a,
        s: s,
        u: u,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var o = this;
      if (!(o instanceof r)) return new r(e);
      r.superclass.constructor.call(o), a.Defer(o), o.userConfig = e, e = t(e), n.mix(o, {
        responseData: null,
        config: e || {},
        timeoutTimer: null,
        responseText: null,
        responseXML: null,
        responseHeadersString: "",
        responseHeaders: null,
        requestHeaders: {},
        readyState: 0,
        state: 0,
        statusText: null,
        status: 0,
        transport: null
      });
      var i, s;
      r.callPreprocessors("start", {
        io: o
      }), r.fire("start", {
        io: o
      }), i = g[e.dataType[0]] || g["*"], s = new i(o), o.transport = s, e.contentType && o.setRequestHeader("Content-Type", e.contentType);
      var c,
          u = e.dataType[0],
          p = e.timeout,
          d = e.context,
          f = e.headers,
          l = e.accepts;
      o.setRequestHeader("Accept", u && l[u] ? l[u] + ("*" === u ? "" : ", */*; q=0.01") : l["*"]);

      for (c in f) o.setRequestHeader(c, f[c]);

      if (e.beforeSend && e.beforeSend.call(d, o, e) === !1) return o;
      o.readyState = 1, r.callPreprocessors("send", {
        io: o
      }), r.fire("send", {
        io: o
      }), e.async && p > 0 && (o.timeoutTimer = setTimeout(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        o.abort("timeout");
        minerva_hook.afterFunction("null", this, {});
      }, 1e3 * p));

      try {
        o.state = 1, s.send();
      } catch (v) {
        o.state < 2 && o._ioReady(-1, v.message || "send error");
      }

      _minerva_ret = o;
      minerva_hook.afterFunction("r", this, {
        o: o,
        i: i,
        s: s,
        c: c,
        u: u,
        p: p,
        d: d,
        f: f,
        l: l,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var n = f,
        o = l,
        a = v,
        i = m,
        s = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/,
        c = /\s+/,
        u = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        p = /^(?:GET|HEAD)$/,
        d = location.href,
        h = i.parse(d),
        y = s.test(h.protocol),
        g = {},
        x = {
      type: "GET",
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      async: !0,
      serializeArray: !0,
      processData: !0,
      accepts: {
        xml: "application/xml, text/xml",
        html: "text/html",
        text: "text/plain",
        json: "application/json, text/javascript",
        "*": "*/*"
      },
      converters: {
        text: {
          json: n.parseJson,
          html: u,
          text: u,
          xml: n.parseXML || u
        }
      },
      headers: {
        "X-Requested-With": "XMLHttpRequest"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      }
    };

    x.converters.html = x.converters.text;
    var T = {},
        b = {};
    _minerva_ret = (n.mix(r, {
      preprocessors: T,
      events: b,
      addPreprocessor: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = T[e] = T[e] || [];
        _minerva_ret = (n.push(t), r);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      callPreprocessors: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n = (T[e] || []).concat(), o = 0, a = n.length; a > o; o++) n[o].call(r, t);

        minerva_hook.afterFunction("null", this, {});
      },
      on: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = b[e] = b[e] || [];
        _minerva_ret = (n.push(t), r);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      detach: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        if (t) {
          var r = b[e];

          if (r) {
            var o = n.indexOf(t, r);
            -1 !== o && r.splice(o, 1);
          }
        } else b[e] = [];

        minerva_hook.afterFunction("null", this, {});
      },
      fire: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = (b[e] || []).concat();
        t = t || {}, t.type = e, t.target = t.currentTarget = r;

        for (var o = 0, a = n.length; a > o; o++) n[o].call(r, t);

        minerva_hook.afterFunction("null", this, {
          n: n
        });
      },
      isLocal: y,
      setupConfig: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        n.mix(x, e, {
          deep: !0
        });
        minerva_hook.afterFunction("null", this, {});
      },
      setupTransport: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        g[e] = t;
        minerva_hook.afterFunction("null", this, {});
      },
      getTransport: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = g[e];
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getConfig: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = x;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e = r);
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      a: a,
      i: i,
      s: s,
      c: c,
      u: u,
      p: p,
      d: d,
      h: h,
      y: y,
      g: g,
      x: x,
      T: T,
      b: b,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t, r) {
      minerva_hook.beforeFunction("t", this, arguments);
      e.addEventListener ? e.addEventListener(t, r, !1) : e.attachEvent && e.attachEvent("on" + t, r);
      minerva_hook.afterFunction("t", this, {});
    }

    function r(e, t, r) {
      minerva_hook.beforeFunction("r", this, arguments);
      e.removeEventListener ? e.removeEventListener(t, r, !1) : e.detachEvent && e.detachEvent("on" + t, r);
      minerva_hook.afterFunction("r", this, {});
    }

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var t = 0;
      _minerva_ret = parseFloat(e.replace(/\./g, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = 0 === t++ ? "." : "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }));
      minerva_hook.afterFunction("n", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var o,
        a,
        i = {
      addEvent: t,
      removeEvent: r
    },
        s = (window.navigator || {}).userAgent || "";
    _minerva_ret = ((o = s.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) && (a = o[1] || o[2]) && (i.ie = n(a), i.ieMode = document.documentMode || i.ie), e = i);
    minerva_hook.afterFunction("null", this, {
      o: o,
      a: a,
      i: i,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, t) {
      minerva_hook.beforeFunction("n", this, arguments);

      try {
        return new (t || y).XMLHttpRequest();
      } catch (r) {}

      _minerva_ret = void 0;
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e, t) {
      minerva_hook.beforeFunction("o", this, arguments);

      try {
        return new (t || y).ActiveXObject("Microsoft.XMLHTTP");
      } catch (r) {}

      _minerva_ret = void 0;
      minerva_hook.afterFunction("o", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      _minerva_ret = g && e instanceof g;
      minerva_hook.afterFunction("a", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      var t,
          r = e.ifModified;
      _minerva_ret = (r && (t = e.uri, e.cache === !1 && (t = c.clone(t), delete t.query._ksTS), t = u.stringify(t)), t);
      minerva_hook.afterFunction("i", this, {
        t: t,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var s,
        c = f,
        u = m,
        p = l,
        d = t,
        v = r,
        h = 200,
        y = window,
        g = v.ieMode > 7 && y.XDomainRequest,
        x = 204,
        T = 404,
        b = 1223,
        _ = {
      proto: {}
    },
        w = {},
        H = {};
    _minerva_ret = (d.__lastModifiedCached = w, d.__eTagCached = H, _.nativeXhr = y.ActiveXObject ? function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = !s && e && g ? new g() : !d.isLocal && n(e, t) || o(e, t);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    } : n, s = _.supportCORS = "withCredentials" in _.nativeXhr(), _.XDomainRequest_ = g, c.mix(_.proto, {
      sendInternal: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        var e,
            t,
            r,
            n,
            o = this,
            u = o.io,
            d = u.config,
            f = o.nativeXhr,
            l = d.files,
            v = l ? "post" : d.type,
            m = d.async,
            h = u.mimeType,
            y = u.requestHeaders || {},
            g = u._getUrlForSend(),
            x = i(d);

        x && ((r = w[x]) && (y["If-Modified-Since"] = r), (r = H[x]) && (y["If-None-Match"] = r)), (e = d.username) ? f.open(v, g, m, e, d.password) : f.open(v, g, m), t = d.xhrFields || {}, "withCredentials" in t && (s || delete t.withCredentials);

        for (n in t) try {
          f[n] = t[n];
        } catch (T) {}

        h && f.overrideMimeType && f.overrideMimeType(h);
        var b = y["X-Requested-With"];
        if (b === !1 && delete y["X-Requested-With"], "undefined" != typeof f.setRequestHeader) for (n in y) f.setRequestHeader(n, y[n]);

        var _ = d.hasContent && d.data || null;

        if (l) {
          var R = _,
              j = {};
          R && (j = p.parse(R)), j = c.mix(j, l), _ = new FormData(), c.each(j, function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            c.isArray(e) ? c.each(e, function (e) {
              minerva_hook.beforeFunction("null", this, arguments);

              _.append(t + (d.serializeArray ? "[]" : ""), e);

              minerva_hook.afterFunction("null", this, {});
            }) : _.append(t, e);
            minerva_hook.afterFunction("null", this, {});
          });
        }

        f.send(_), m && 4 !== f.readyState ? a(f) ? (f.onload = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          f.readyState = 4, f.status = 200, o._callback();
          minerva_hook.afterFunction("null", this, {});
        }, f.onerror = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          f.readyState = 4, f.status = 500, o._callback();
          minerva_hook.afterFunction("null", this, {});
        }) : f.onreadystatechange = function () {
          minerva_hook.beforeFunction("null", this, arguments);

          o._callback();

          minerva_hook.afterFunction("null", this, {});
        } : o._callback();
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          r: r,
          n: n,
          o: o,
          u: u,
          d: d,
          f: f,
          l: l,
          v: v,
          m: m,
          h: h,
          y: y,
          g: g,
          x: x,
          b: b,
          _: _
        });
      },
      abort: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        this._callback(0, 1);

        minerva_hook.afterFunction("null", this, {});
      },
      _callback: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            n,
            o,
            s,
            u,
            p = this,
            f = p.nativeXhr,
            l = p.io,
            v = l.config;

        try {
          if (t || 4 === f.readyState) if (a(f) ? (f.onerror = c.noop, f.onload = c.noop) : f.onreadystatechange = c.noop, t) 4 !== f.readyState && f.abort();else {
            r = i(v);
            var m = f.status;
            a(f) || (l.responseHeadersString = f.getAllResponseHeaders()), r && (n = f.getResponseHeader("Last-Modified"), o = f.getResponseHeader("ETag"), n && (w[r] = n), o && (H[o] = o)), u = f.responseXML, u && u.documentElement && (l.responseXML = u);
            var y = l.responseText = f.responseText;

            if (v.files && y) {
              var g, _;

              -1 !== (g = y.indexOf("<body>")) && (_ = y.lastIndexOf("</body>"), -1 === _ && (_ = y.length), y = y.slice(g + 6, _)), l.responseText = c.unEscapeHtml ? c.unEscapeHtml(y) : y;
            }

            try {
              s = f.statusText;
            } catch (R) {
              s = "";
            }

            m || !d.isLocal || v.crossDomain ? m === b && (m = x) : m = l.responseText ? h : T, l._ioReady(m, s);
          }
        } catch (R) {
          f.onreadystatechange = c.noop, t || l._ioReady(-1, R.message || "process error");
        }

        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n,
          o: o,
          s: s,
          u: u,
          p: p,
          f: f,
          l: l,
          v: v
        });
      }
    }), e = _);
    minerva_hook.afterFunction("null", this, {
      s: s,
      c: c,
      u: u,
      p: p,
      d: d,
      v: v,
      h: h,
      y: y,
      g: g,
      x: x,
      T: T,
      b: b,
      _: _,
      w: w,
      H: H,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), o = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      var t = this,
          r = e.config;
      t.io = e, r.crossDomain = !1, t._onLoad = a.bind(o, t);
      minerva_hook.afterFunction("t", this, {
        t: t,
        r: r
      });
    }

    function o() {
      minerva_hook.beforeFunction("o", this, arguments);
      var e = this,
          t = e.io.config,
          r = t.uri,
          n = r.hostname,
          o = l[n];
      o.ready = 1, i.removeEvent(o.iframe, "load", e._onLoad), e.send();
      minerva_hook.afterFunction("o", this, {
        e: e,
        t: t,
        r: r,
        n: n,
        o: o
      });
    }

    var a = f,
        i = r,
        s = m,
        c = h,
        u = n,
        p = "/sub_domain_proxy.html",
        d = document,
        l = {};
    _minerva_ret = (a.augment(t, u.proto, {
      send: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            t,
            r = this,
            n = r.io.config,
            o = n.uri,
            a = o.hostname,
            f = l[a],
            v = p;
        _minerva_ret = (n.xdr && n.xdr.subDomain && n.xdr.subDomain.proxy && (v = n.xdr.subDomain.proxy), f && f.ready ? (r.nativeXhr = u.nativeXhr(0, f.iframe.contentWindow), r.nativeXhr ? r.sendInternal() : console.error("io: document.domain not set correctly!"), void 0) : (f ? e = f.iframe : (f = l[a] = {}, e = f.iframe = d.createElement("iframe"), c.css(e, {
          position: "absolute",
          left: "-9999px",
          top: "-9999px"
        }), c.prepend(e, d.body || d.documentElement), t = {}, t.protocol = o.protocol, t.host = o.host, t.pathname = v, e.src = s.stringify(t)), i.addEvent(e, "load", r._onLoad), void 0));
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          r: r,
          n: n,
          o: o,
          a: a,
          f: f,
          v: v,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e = t);
    minerva_hook.afterFunction("null", this, {
      a: a,
      i: i,
      s: s,
      c: c,
      u: u,
      p: p,
      d: d,
      l: l,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t = e.config,
          r = this;
      _minerva_ret = t.crossDomain ? (r.io = e, r) : new (o.getTransport("*"))(e);
      minerva_hook.afterFunction("r", this, {
        t: t,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var n = f,
        o = t,
        a = 200,
        i = 500;
    _minerva_ret = (o.setupConfig({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /javascript|ecmascript/
      },
      converters: {
        text: {
          script: function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = (n.globalEval(e), e);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }
        }
      }
    }), n.augment(r, {
      send: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.io,
            r = t.config;
        e.script = o.getScript(t._getUrlForSend(), {
          charset: r.scriptCharset,
          success: function () {
            minerva_hook.beforeFunction("null", this, arguments);

            e._callback("success");

            minerva_hook.afterFunction("null", this, {});
          },
          error: function () {
            minerva_hook.beforeFunction("null", this, arguments);

            e._callback("error");

            minerva_hook.afterFunction("null", this, {});
          }
        });
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          r: r
        });
      },
      _callback: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = this,
            n = r.script,
            o = r.io;
        n && (r.script = void 0, t || ("error" !== e ? o._ioReady(a, "success") : "error" === e && o._ioReady(i, "script error")));
        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n,
          o: o
        });
      },
      abort: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        this._callback(0, 1);

        minerva_hook.afterFunction("null", this, {});
      }
    }), o.setupTransport("script", r), e);
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      a: a,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = f,
        n = t,
        o = window;
    _minerva_ret = (n.setupConfig({
      jsonp: "callback",
      jsonpCallback: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = r.guid("jsonp");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), n.addPreprocessor("start", function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = e.io,
          n = t.config,
          a = n.dataType;

      if ("jsonp" === a[0]) {
        delete n.contentType;
        var i,
            s,
            c = n.jsonpCallback,
            u = "function" == typeof c ? c() : c,
            p = o[u];
        n.uri.query[n.jsonp] = u, o[u] = function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          arguments.length > 1 && (e = r.makeArray(arguments)), i = [e];
          minerva_hook.afterFunction("null", this, {});
        }, t.fin(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          if (o[u] = p, void 0 === p) try {
            delete o[u];
          } catch (e) {} else i && p(i[0]);
          minerva_hook.afterFunction("null", this, {});
        }), s = n.converters, s.script = s.script || {}, s.script.json = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          if (!i) throw new Error("not call jsonpCallback: " + u);
          _minerva_ret = i[0];
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, a.length = 2, a[0] = "script", a[1] = "json";
      }

      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        a: a
      });
    }), e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      n: n,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), s = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t,
          r,
          o,
          a = e.responseText,
          i = e.responseXML,
          s = e.config,
          c = s.converters,
          u = s.contents,
          p = s.dataType;

      if (a || i) {
        for (r = e.mimeType || e.getResponseHeader("Content-Type"); "*" === p[0];) p.shift();

        if (!p.length) for (t in u) if (u[t].test(r)) {
          p[0] !== t && p.unshift(t);
          break;
        }
        p[0] = p[0] || "text";

        for (var d = 0; d < p.length; d++) {
          if ("text" === p[d] && void 0 !== a) {
            o = a;
            break;
          }

          if ("xml" === p[d] && void 0 !== i) {
            o = i;
            break;
          }
        }

        if (!o) {
          var f = {
            text: a,
            xml: i
          };
          n.each(["text", "xml"], function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            var t = p[0],
                r = c[e] && c[e][t];
            _minerva_ret = r && f[e] ? (p.unshift(e), o = "text" === e ? a : i, !1) : void 0;
            minerva_hook.afterFunction("null", this, {
              t: t,
              r: r,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          });
        }
      }

      for (var l = p[0], v = 1; v < p.length; v++) {
        t = p[v];
        var m = c[l] && c[l][t];
        if (!m) throw new Error("no covert for " + l + " => " + t);
        o = m(o), l = t;
      }

      e.responseData = o;
      minerva_hook.afterFunction("r", this, {
        t: t,
        r: r,
        o: o,
        a: a,
        i: i,
        s: s,
        c: c,
        u: u,
        p: p
      });
    }

    var n = f,
        o = v,
        a = t,
        i = m,
        s = 200,
        c = 300,
        u = 304,
        p = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm;
    _minerva_ret = (n.extend(a, o, {
      setRequestHeader: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = this;
        _minerva_ret = (r.requestHeaders[e] = t, r);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getAllResponseHeaders: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = 2 === e.state ? e.responseHeadersString : null;
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getResponseHeader: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            r,
            n = this;

        if (e = e.toLowerCase(), 2 === n.state) {
          if (!(r = n.responseHeaders)) for (r = n.responseHeaders = {}; t = p.exec(n.responseHeadersString);) r[t[1].toLowerCase()] = t[2];
          t = r[e];
        }

        _minerva_ret = void 0 === t ? null : t;
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      overrideMimeType: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        _minerva_ret = (t.state || (t.mimeType = e), t);
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      abort: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        _minerva_ret = (e = e || "abort", t.transport && t.transport.abort(e), t._ioReady(0, e), t);
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getNativeXhr: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this.transport;
        _minerva_ret = e ? e.nativeXhr : null;
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      _ioReady: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;

        if (2 !== n.state) {
          n.state = 2, n.readyState = 4;
          var o;
          if (e >= s && c > e || e === u) {
            if (e === u) t = "not modified", o = !0;else try {
              r(n), t = "success", o = !0;
            } catch (i) {
              t = i.message || "parser error";
            }
          } else 0 > e && (e = 0);
          n.status = e, n.statusText = t;
          var p,
              d = n.defer,
              f = n.config;
          (p = n.timeoutTimer) && (clearTimeout(p), n.timeoutTimer = 0);
          var l,
              v = o ? "success" : "error",
              m = [n.responseData, t, n],
              h = f.context,
              y = {
            io: n
          };
          (l = f[v]) && l.apply(h, m), (l = f.complete) && l.apply(h, m), a.fire(v, y), a.fire("complete", y), d[o ? "resolve" : "reject"](m);
        }

        minerva_hook.afterFunction("null", this, {
          n: n
        });
      },
      _getUrlForSend: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this.config,
            t = e.uri,
            r = t.search || "";
        _minerva_ret = (delete t.search, r && !n.isEmptyObject(t.query) && (r = "&" + r.substring(1)), i.stringify(t, e.serializeArray) + r);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e);
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      a: a,
      i: i,
      s: s,
      c: c,
      u: u,
      p: p,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), c = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(e, t, r, o, a) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = ("function" == typeof t && (o = r, r = t, t = void 0), n({
        type: a || "get",
        url: e,
        data: t,
        complete: r,
        dataType: o
      }));
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var n = t,
        o = f,
        a = y;
    _minerva_ret = (o.mix(n, {
      getScript: a,
      get: r,
      post: function (e, t, n, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = ("function" == typeof t && (o = n, n = t, t = void 0), r(e, t, n, o, "post"));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      jsonp: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);

        if (o.isPlainObject(e)) {
          var a = e;
          e = a.url, t = a.data, n = a.success;
        } else "function" == typeof t && (n = t, t = void 0);

        _minerva_ret = r(e, t, n, "jsonp");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getJSON: function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = ("function" == typeof t && (n = t, t = void 0), r(e, t, n, "json"));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e = n);
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = p.domain && i.endsWith(e, p.domain);
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      var t,
          n = e.config,
          o = n.crossDomain,
          a = this,
          i = n.xdr || {},
          s = i.subDomain = i.subDomain || {};
      _minerva_ret = (a.io = e, o && !c.supportCORS && r(n.uri.hostname) && s.proxy !== !1 ? new u(e) : (t = a.nativeXhr = c.nativeXhr(o), a));
      minerva_hook.afterFunction("a", this, {
        t: t,
        n: n,
        o: o,
        a: a,
        i: i,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var i = f,
        s = t,
        c = n,
        u = o,
        p = document;
    _minerva_ret = (i.augment(a, c.proto, {
      send: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.sendInternal();
        minerva_hook.afterFunction("null", this, {});
      }
    }), s.setupTransport("*", a), e);
    minerva_hook.afterFunction("null", this, {
      i: i,
      s: s,
      c: c,
      u: u,
      p: p,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), p = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = c,
        n = r;
    _minerva_ret = (t._util = n, e = t);
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), d = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = p;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    t: t,
    r: r,
    n: n,
    o: o,
    a: a,
    i: i,
    s: s,
    c: c,
    u: u,
    p: p,
    d: d,
    f: f,
    l: l,
    v: v,
    m: m,
    h: h,
    y: y,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});