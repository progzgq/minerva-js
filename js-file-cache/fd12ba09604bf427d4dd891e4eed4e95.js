define("event-custom", ["event-base", "util"], function (t) {
  minerva_hook.beforeFunction("null", this, arguments);
  var e,
      r,
      n,
      i,
      s,
      a,
      u = t("event-base"),
      o = t("util");
  _minerva_ret = (e = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);
      e.superclass.constructor.apply(this, arguments);
      minerva_hook.afterFunction("e", this, {});
    }

    var r = u,
        n = o;
    _minerva_ret = (n.extend(e, r.Observer, {
      keys: ["fn", "context", "groups"]
    }), t = e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(t) {
      minerva_hook.beforeFunction("e", this, arguments);
      e.superclass.constructor.call(this), n.mix(this, t);
      minerva_hook.afterFunction("e", this, {});
    }

    var r = u,
        n = o;
    _minerva_ret = (n.extend(e, r.Object), t = e);
    minerva_hook.afterFunction("null", this, {
      r: r,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      var t = this;
      n.superclass.constructor.apply(t, arguments), t.defaultFn = null, t.defaultTargetOnly = !1, t.bubbles = !0;
      minerva_hook.afterFunction("n", this, {
        t: t
      });
    }

    var i = u,
        s = e,
        a = r,
        c = i.Utils,
        f = o;
    _minerva_ret = (f.extend(n, i.Observable, {
      on: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = new s(t);
        -1 === this.findObserver(e) && this.observers.push(e);
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      },
      fire: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        t = t || {};
        var e,
            r,
            n,
            i,
            s,
            u = this,
            o = u.bubbles,
            c = u.currentTarget,
            f = u.type,
            v = u.defaultFn,
            g = t;
        if (t.type = f, g.isEventObject || (g = new a(g)), g.target = g.target || c, g.currentTarget = c, s = u.notify(g), i !== !1 && void 0 !== s && (i = s), o && !g.isPropagationStopped()) for (e = c.getTargets(), r = e && e.length || 0, n = 0; r > n && !g.isPropagationStopped(); n++) s = e[n].fire(f, g), i !== !1 && void 0 !== s && (i = s);

        if (v && !g.isDefaultPrevented()) {
          var l = g.target,
              h = l.getEventListeners(g.type);
          (u.defaultTargetOnly || h && h.defaultTargetOnly) && c !== l || (i = v.call(c, g));
        }

        _minerva_ret = i;
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          r: r,
          n: n,
          i: i,
          s: s,
          u: u,
          o: o,
          c: c,
          f: f,
          v: v,
          g: g,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      notify: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            r,
            n,
            i = [].concat(this.observers),
            s = i.length;

        for (n = 0; s > n && !t.isImmediatePropagationStopped(); n++) e = i[n].notify(t, this), r !== !1 && void 0 !== e && (r = e);

        _minerva_ret = r;
        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r,
          n: n,
          i: i,
          s: s,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      detach: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            r = this,
            n = t.fn,
            i = t.context,
            s = r.currentTarget,
            a = r.observers,
            u = t.groups;

        if (a.length) {
          u && (e = c.getGroupsRe(u));
          var o,
              f,
              v,
              g,
              l,
              h = a.length;

          if (n || e) {
            for (i = i || s, o = 0, f = 0, v = []; h > o; ++o) {
              g = a[o];
              var p = g.config;
              l = p.context || s, (i !== l || n && n !== p.fn || e && !p.groups.match(e)) && (v[f++] = g);
            }

            r.observers = v;
          } else r.reset();
        }

        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r,
          n: n,
          i: i,
          s: s,
          a: a,
          u: u
        });
      }
    }), t = n);
    minerva_hook.afterFunction("null", this, {
      i: i,
      s: s,
      a: a,
      c: c,
      f: f,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(t, e) {
      minerva_hook.beforeFunction("e", this, arguments);
      var r = t.getEventListeners(e);
      _minerva_ret = (r || (r = t.getEventListeners()[e] = new i({
        currentTarget: t,
        type: e
      })), r);
      minerva_hook.afterFunction("e", this, {
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var r = u,
        i = n,
        s = o,
        a = r.Utils,
        c = a.splitAndRun,
        f = "__~ks_bubble_targets",
        v = "__~ks_custom_events";
    _minerva_ret = t = {
      isTarget: 1,
      fire: function (t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            n = this,
            s = n.getTargets(),
            u = s && s.length;
        _minerva_ret = (t.isEventObject && (e = t, t = t.type), e = e || {}, c(t, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var s, o;

          if (a.fillGroupsForEvent(t, e), t = e.type, o = n.getEventListeners(t), o || u) {
            if (o) {
              if (!o.hasObserver() && !o.defaultFn && (o.bubbles && !u || !o.bubbles)) return;
            } else o = new i({
              currentTarget: n,
              type: t
            });

            s = o.fire(e), r !== !1 && void 0 !== s && (r = s);
          }

          minerva_hook.afterFunction("null", this, {
            s: s,
            o: o
          });
        }), r);
        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n,
          s: s,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      publish: function (t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            i = this;
        _minerva_ret = (c(t, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          n = e(i, t), s.mix(n, r);
          minerva_hook.afterFunction("null", this, {});
        }), i);
        minerva_hook.afterFunction("null", this, {
          n: n,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      addTarget: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            r = e.getTargets();
        _minerva_ret = (s.inArray(t, r) || r.push(t), e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      removeTarget: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            r = e.getTargets(),
            n = s.indexOf(t, r);
        _minerva_ret = (-1 !== n && r.splice(n, 1), e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getTargets: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this[f] || (this[f] = []);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      getEventListeners: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this[v] || (this[v] = {});
        _minerva_ret = t ? e[t] : e;
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      on: function (t, r, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var i = this;
        _minerva_ret = (a.batchForType(function (t, r, n) {
          minerva_hook.beforeFunction("null", this, arguments);
          var s = a.normalizeParam(t, r, n);
          t = s.type;
          var u = e(i, t);
          u.on(s);
          minerva_hook.afterFunction("null", this, {
            s: s,
            t: t,
            u: u
          });
        }, 0, t, r, n), i);
        minerva_hook.afterFunction("null", this, {
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      detach: function (t, e, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;
        _minerva_ret = (a.batchForType(function (t, e, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          var i = a.normalizeParam(t, e, r);

          if (t = i.type) {
            var u = n.getEventListeners(t);
            u && u.detach(i);
          } else s.each(n.getEventListeners(), function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            t.detach(i);
            minerva_hook.afterFunction("null", this, {});
          });

          minerva_hook.afterFunction("null", this, {
            i: i
          });
        }, 0, t, e, r), n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      r: r,
      i: i,
      s: s,
      a: a,
      c: c,
      f: f,
      v: v,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), s = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = i,
        n = o;
    _minerva_ret = t = {
      Target: e,
      Object: r,
      global: n.mix({}, e)
    };
    minerva_hook.afterFunction("null", this, {
      e: e,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = t = s;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    e: e,
    r: r,
    n: n,
    i: i,
    s: s,
    a: a,
    u: u,
    o: o,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});