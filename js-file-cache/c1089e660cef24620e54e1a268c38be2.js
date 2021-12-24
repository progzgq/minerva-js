define("node-anim", ["node-base", "anim", "util"], function (n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var t,
      e,
      i = n("node-base"),
      r = n("anim"),
      o = n("util");
  _minerva_ret = (t = function (n) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(n, t, e) {
      minerva_hook.beforeFunction("t", this, arguments);

      for (var i = [], r = {}, o = e || 0; t > o; o++) i.push.apply(i, f[o]);

      for (o = 0; o < i.length; o++) r[i[o]] = n;

      _minerva_ret = r;
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var e = i,
        a = r,
        u = o,
        g = e.Dom,
        f = [["height", "margin-top", "margin-bottom", "padding-top", "padding-bottom"], ["width", "margin-left", "margin-right", "padding-left", "padding-right"], ["opacity"]];
    _minerva_ret = (u.augment(e, {
      animate: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this,
            t = n.length,
            e = n.length > 1,
            i = u.makeArray(arguments),
            r = i[0],
            o = a;
        r.to ? o = r.Anim || a : (r = i[1], r && (o = r.Anim || a));

        for (var g = 0; t > g; g++) {
          var f = n[g],
              h = e ? u.clone(i) : i,
              s = h[0];
          s.to ? (s.node = f, new o(s).run()) : o.apply(void 0, [f].concat(h)).run();
        }

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          n: n,
          t: t,
          e: e,
          i: i,
          r: r,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      stop: function (n, t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var i = this;
        _minerva_ret = (u.each(i, function (i) {
          minerva_hook.beforeFunction("null", this, arguments);
          a.stop(i, n, t, e);
          minerva_hook.afterFunction("null", this, {});
        }), i);
        minerva_hook.afterFunction("null", this, {
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      pause: function (n, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = (u.each(e, function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          a.pause(n, t);
          minerva_hook.afterFunction("null", this, {});
        }), e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resume: function (n, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = (u.each(e, function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          a.resume(n, t);
          minerva_hook.afterFunction("null", this, {});
        }), e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isRunning: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n = this, t = 0; t < n.length; t++) if (a.isRunning(n[t])) return !0;

        _minerva_ret = !1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isPaused: function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n = this, t = 0; t < n.length; t++) if (a.isPaused(n[t])) return !0;

        _minerva_ret = !1;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), u.each({
      show: t("show", 3),
      hide: t("hide", 3),
      toggle: t("toggle", 3),
      fadeIn: t("show", 3, 2),
      fadeOut: t("hide", 3, 2),
      fadeToggle: t("toggle", 3, 2),
      slideDown: t("show", 1),
      slideUp: t("hide", 1),
      slideToggle: t("toggle", 1)
    }, function (n, t) {
      minerva_hook.beforeFunction("null", this, arguments);

      e.prototype[t] = function (e, i, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o = this;
        if (g[t] && !e) g[t](o);else {
          var f = a;
          "object" == typeof e && (f = e.Anim || a), u.each(o, function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            new f(t, n, e, r, i).run();
            minerva_hook.afterFunction("null", this, {});
          });
        }
        _minerva_ret = o;
        minerva_hook.afterFunction("null", this, {
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }), n = e);
    minerva_hook.afterFunction("null", this, {
      e: e,
      a: a,
      u: u,
      g: g,
      f: f,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), e = function (n) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = n = t;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    t: t,
    e: e,
    i: i,
    r: r,
    o: o,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});