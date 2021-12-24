define("anim-transition", ["util", "dom", "anim-base", "feature"], function (n) {
  minerva_hook.beforeFunction("null", this, arguments);
  var e,
      t,
      a = n("util"),
      r = n("dom"),
      i = n("anim-base"),
      o = n("feature");
  _minerva_ret = (e = function (n) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(n) {
      minerva_hook.beforeFunction("e", this, arguments);
      var e = "";
      _minerva_ret = (u.each(n, function (n, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e && (e += ","), e += t + " " + n.duration + "s " + n.easing + " " + n.delay + "s";
        minerva_hook.afterFunction("null", this, {});
      }), e);
      minerva_hook.afterFunction("e", this, {
        e: e,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function t(n) {
      minerva_hook.beforeFunction("t", this, arguments);
      _minerva_ret = n.replace(/[A-Z]/g, function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "-" + n.toLowerCase();
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      });
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function s(n, e, t, a, r) {
      minerva_hook.beforeFunction("s", this, arguments);
      var i = this;
      _minerva_ret = i instanceof s ? (s.superclass.constructor.apply(i, arguments), void 0) : new s(n, e, t, a, r);
      minerva_hook.afterFunction("s", this, {
        i: i,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var u = a,
        c = r,
        p = i,
        f = o,
        d = f.getCssVendorInfo,
        l = d("transition");

    if (l) {
      var m = l.propertyName,
          v = "linear",
          g = {
        ease: 1,
        linear: 1,
        "ease-in": 1,
        "ease-out": 1,
        "ease-in-out": 1
      };
      u.extend(s, p, {
        prepareFx: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var n,
              e,
              a = this,
              r = a._propsData,
              i = {};

          for (var o in r) n = r[o], "string" == typeof n.easing ? u.startsWith(n.easing, "cubic-bezier") || g[n.easing] || (n.easing = v) : n.easing = v, e = d(o), e ? i[t(e.propertyName)] = r[o] : console.error("anim: unsupported css property for transition anim: " + o);

          a._propsData = i;
          minerva_hook.afterFunction("null", this, {
            n: n,
            e: e,
            a: a,
            r: r,
            i: i
          });
        },
        doStart: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var n = this,
              t = n.node,
              a = t.style,
              r = n._propsData,
              i = a[m],
              o = 0,
              s = {};
          u.each(r, function (n, e) {
            minerva_hook.beforeFunction("null", this, arguments);
            var a = n.value;
            c.css(t, e, c.css(t, e)), s[e] = a, o = Math.max(n.duration + n.delay, o);
            minerva_hook.afterFunction("null", this, {
              a: a
            });
          }), -1 !== i.indexOf("none") ? i = "" : i && (i += ","), a[m] = i + e(r), setTimeout(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            c.css(t, s);
            minerva_hook.afterFunction("null", this, {});
          }, 0), n._transitionEndTimer = setTimeout(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            n.stop(!0);
            minerva_hook.afterFunction("null", this, {});
          }, 1e3 * o);
          minerva_hook.afterFunction("null", this, {
            n: n,
            t: t,
            a: a,
            r: r,
            i: i,
            o: o,
            s: s
          });
        },
        beforeResume: function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var n = this,
              e = n._propsData,
              t = u.merge(e),
              a = n._runTime / 1e3;
          u.each(t, function (n, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            var r = a;
            n.delay >= r ? n.delay -= r : (r -= n.delay, n.delay = 0, n.duration >= r ? n.duration -= r : delete e[t]);
            minerva_hook.afterFunction("null", this, {
              r: r
            });
          });
          minerva_hook.afterFunction("null", this, {
            n: n,
            e: e,
            t: t,
            a: a
          });
        },
        doStop: function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          var e,
              t = this,
              a = t.node,
              r = a.style,
              i = t._propsData,
              o = [],
              s = {};
          t._transitionEndTimer && (clearTimeout(t._transitionEndTimer), t._transitionEndTimer = null), u.each(i, function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            n || (s[t] = c.css(a, t)), o.push(t);
            minerva_hook.afterFunction("null", this, {});
          }), e = u.trim(r[m].replace(new RegExp("(^|,)\\s*(?:" + o.join("|") + ")\\s+[^,]+", "gi"), "$1")).replace(/^,|,,|,$/g, "") || "none", r[m] = e, c.css(a, s);
          minerva_hook.afterFunction("null", this, {
            e: e,
            t: t,
            a: a,
            r: r,
            i: i,
            o: o,
            s: s
          });
        }
      }), u.mix(s, p.Statics), n = s, s._name_ = "TransitionAnim";
    } else n = null;

    _minerva_ret = n;
    minerva_hook.afterFunction("null", this, {
      u: u,
      c: c,
      p: p,
      f: f,
      d: d,
      l: l,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), t = function (n) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = e;
    _minerva_ret = n = t;
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    e: e,
    t: t,
    a: a,
    r: r,
    i: i,
    o: o,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});