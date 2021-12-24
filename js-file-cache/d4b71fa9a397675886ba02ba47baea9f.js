define("cookie", [], function () {
  minerva_hook.beforeFunction("null", this, arguments);
  //! Copyright 2015, cookie@6.1.2 MIT Licensed, build time: Thu, 29 Oct 2015 07:04:13 GMT 
  var e, n;
  _minerva_ret = (e = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = decodeURIComponent(e.replace(/\+/g, " "));
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      _minerva_ret = "string" == typeof e && "" !== e;
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var o = document,
        r = 864e5,
        i = encodeURIComponent;
    _minerva_ret = e = {
      get: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r, i;
        _minerva_ret = (t(e) && (i = String(o.cookie).match(new RegExp("(?:^| )" + e + "(?:(?:=([^;]*))|;|$)"))) && (r = i[1] ? n(i[1]) : ""), r);
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      set: function (e, n, c, u, f, a, g) {
        minerva_hook.beforeFunction("null", this, arguments);
        var m,
            p = c;
        m = g ? String(n) : String(i(n)), "number" == typeof p && (p = new Date(), p.setTime(p.getTime() + c * r)), p instanceof Date && (m += "; expires=" + p.toUTCString()), t(u) && (m += "; domain=" + u), t(f) && (m += "; path=" + f), a && (m += "; secure"), o.cookie = e + "=" + m;
        minerva_hook.afterFunction("null", this, {
          m: m,
          p: p
        });
      },
      remove: function (e, n, t, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.set(e, "", -1, n, t, o);
        minerva_hook.afterFunction("null", this, {});
      }
    };
    minerva_hook.afterFunction("null", this, {
      o: o,
      r: r,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (n) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = n = e;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    e: e,
    n: n,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});