define("anim-base", ["dom", "util", "promise"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var n,
      t,
      i,
      u,
      a = e("dom"),
      o = e("util"),
      r = e("promise");
  _minerva_ret = (n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, n, t) {
      minerva_hook.beforeFunction("n", this, arguments);
      n = n || s;
      var u,
          a = i.data(e, r);
      _minerva_ret = (a || t || i.data(e, r, a = {}), a && (u = a[n], u || t || (u = a[n] = [])), u);
      minerva_hook.afterFunction("n", this, {
        n: n,
        u: u,
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var t,
        i = a,
        u = o,
        r = u.guid("ks-queue-" + u.now() + "-"),
        s = u.guid("ks-queue-" + u.now() + "-");
    _minerva_ret = (t = {
      queueCollectionKey: r,
      queue: function (e, t, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        var u = n(e, t);
        _minerva_ret = (u.push(i), u);
        minerva_hook.afterFunction("null", this, {
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      remove: function (e, i, a) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o,
            r = n(e, i, 1);
        _minerva_ret = (r && (o = u.indexOf(a, r), o > -1 && r.splice(o, 1)), r && !r.length && t.clearQueue(e, i), r);
        minerva_hook.afterFunction("null", this, {
          o: o,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      clearQueues: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        i.removeData(e, r);
        minerva_hook.afterFunction("null", this, {});
      },
      clearQueue: function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        n = n || s;
        var t = i.data(e, r);
        t && delete t[n], u.isEmptyObject(t) && i.removeData(e, r);
        minerva_hook.afterFunction("null", this, {
          n: n,
          t: t
        });
      },
      dequeue: function (e, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        var u = n(e, i, 1);
        _minerva_ret = (u && (u.shift(), u.length || t.clearQueue(e, i)), u);
        minerva_hook.afterFunction("null", this, {
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, e = t);
    minerva_hook.afterFunction("null", this, {
      t: t,
      i: i,
      u: u,
      r: r,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      var n = e.node,
          t = l.data(n, v);
      t || l.data(n, v, t = {}), t[f.stamp(e)] = e;
      minerva_hook.afterFunction("t", this, {
        n: n,
        t: t
      });
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      var n = e.node,
          t = l.data(n, v);
      t && (delete t[f.stamp(e)], f.isEmptyObject(t) && l.removeData(n, v));
      minerva_hook.afterFunction("i", this, {
        n: n,
        t: t
      });
    }

    function u(e) {
      minerva_hook.beforeFunction("u", this, arguments);
      var n = e.node,
          t = l.data(n, v);
      _minerva_ret = t ? !!t[f.stamp(e)] : 0;
      minerva_hook.afterFunction("u", this, {
        n: n,
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var n = e.node,
          t = l.data(n, p);
      t || l.data(n, p, t = {}), t[f.stamp(e)] = e;
      minerva_hook.afterFunction("r", this, {
        n: n,
        t: t
      });
    }

    function s(e) {
      minerva_hook.beforeFunction("s", this, arguments);
      var n = e.node,
          t = l.data(n, p);
      t && (delete t[f.stamp(e)], f.isEmptyObject(t) && l.removeData(n, p));
      minerva_hook.afterFunction("s", this, {
        n: n,
        t: t
      });
    }

    function d(e) {
      minerva_hook.beforeFunction("d", this, arguments);
      var n = e.node,
          t = l.data(n, p);
      _minerva_ret = t ? !!t[f.stamp(e)] : 0;
      minerva_hook.afterFunction("d", this, {
        n: n,
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function c(e, n, t) {
      minerva_hook.beforeFunction("c", this, arguments);
      var i = l.data(e, "resume" === t ? p : v),
          u = f.merge(i);
      f.each(u, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        (void 0 === n || e.config.queue === n) && e[t]();
        minerva_hook.afterFunction("null", this, {});
      });
      minerva_hook.afterFunction("c", this, {
        i: i,
        u: u
      });
    }

    var m = n,
        f = o,
        l = a,
        v = f.guid("ks-anim-unqueued-" + f.now() + "-"),
        p = f.guid("ks-anim-paused-" + f.now() + "-");
    _minerva_ret = e = {
      saveRunningAnim: t,
      removeRunningAnim: i,
      isAnimPaused: d,
      removePausedAnim: s,
      savePausedAnim: r,
      isAnimRunning: u,
      isElPaused: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = l.data(e, p);
        _minerva_ret = n && !f.isEmptyObject(n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isElRunning: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = l.data(e, v);
        _minerva_ret = n && !f.isEmptyObject(n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      pauseOrResumeQueue: c,
      stopEl: function (e, n, t, i) {
        minerva_hook.beforeFunction("null", this, arguments);
        t && (void 0 === i ? m.clearQueues(e) : i !== !1 && m.clearQueue(e, i));
        var u = l.data(e, v),
            a = f.merge(u);
        f.each(a, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          (void 0 === i || e.config.queue === i) && e.stop(n);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          u: u,
          a: a
        });
      }
    };
    minerva_hook.afterFunction("null", this, {
      m: m,
      f: f,
      l: l,
      v: v,
      p: p,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      var n,
          t = e.config.complete;
      l.isEmptyObject(n = e._backupProps) || d.css(e.node, n), t && t.call(e);
      minerva_hook.afterFunction("i", this, {
        n: n,
        t: t
      });
    }

    function u(e, n, t, i, a) {
      minerva_hook.beforeFunction("u", this, arguments);
      var o,
          r = this;
      e.node ? o = e : (l.isPlainObject(t) ? o = l.clone(t) : (o = {
        complete: a
      }, t && (o.duration = t), i && (o.easing = i)), o.node = e, o.to = n), o = l.merge(h, o), u.superclass.constructor.call(r), f.Defer(r), r.config = o, e = o.node, l.isPlainObject(e) || (e = d.get(o.node)), r.node = r.el = e, r._backupProps = {}, r._propsData = {};
      var s = {};
      n = o.to;

      for (var c in n) s[p(c)] = n[c];

      o.to = s;
      minerva_hook.afterFunction("u", this, {
        o: o,
        r: r,
        s: s,
        n: n
      });
    }

    var s,
        d = a,
        c = t,
        m = n,
        f = r,
        l = o,
        v = d.NodeType,
        p = l.camelCase,
        g = l.noop,
        _ = {
      toggle: 1,
      hide: 1,
      show: 1
    },
        h = {
      duration: 1,
      easing: "linear"
    };
    l.extend(u, f, {
      prepareFx: g,
      runInternal: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            n = this,
            t = n.config,
            i = n.node,
            u = n._backupProps,
            a = n._propsData,
            o = t.to,
            r = t.delay || 0,
            m = t.duration;

        if (c.saveRunningAnim(n), l.each(o, function (e, n) {
          minerva_hook.beforeFunction("null", this, arguments);
          l.isPlainObject(e) || (e = {
            value: e
          }), a[n] = l.mix({
            delay: r,
            easing: t.easing,
            frame: t.frame,
            duration: m
          }, e);
          minerva_hook.afterFunction("null", this, {});
        }), i.nodeType === v.ELEMENT_NODE) {
          if (o.width || o.height) {
            var f = i.style;
            l.mix(u, {
              overflow: f.overflow,
              "overflow-x": f.overflowX,
              "overflow-y": f.overflowY
            }), f.overflow = "hidden";
          }

          var p, g;
          if (l.each(a, function (t, a) {
            minerva_hook.beforeFunction("null", this, arguments);

            if (e = t.value, _[e]) {
              if (g === s && (g = "none" === d.css(i, "display")), "hide" === e && g || "show" === e && !g) return n.stop(!0), p = !1;
              u[a] = d._style(i, a), "toggle" === e && (e = g ? "show" : "hide"), "hide" === e ? (t.value = 0, u.display = "none") : (t.value = d.css(i, a), d.css(i, a, 0), d.show(i));
            }

            _minerva_ret = void 0;
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }), p === !1) return;
        }

        n.startTime = l.now(), l.isEmptyObject(a) ? (n.__totalTime = 1e3 * m, n.__waitTimeout = setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          n.stop(!0);
          minerva_hook.afterFunction("null", this, {});
        }, n.__totalTime)) : (n.prepareFx(), n.doStart());
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          t: t,
          i: i,
          u: u,
          a: a,
          o: o,
          r: r,
          m: m
        });
      },
      isRunning: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = c.isAnimRunning(this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isPaused: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = c.isAnimPaused(this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      pause: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = (e.isRunning() && (e._runTime = l.now() - e.startTime, e.__totalTime -= e._runTime, c.removeRunningAnim(e), c.savePausedAnim(e), e.__waitTimeout ? clearTimeout(e.__waitTimeout) : e.doStop()), e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      doStop: g,
      doStart: g,
      resume: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        _minerva_ret = (e.isPaused() && (e.startTime = l.now() - e._runTime, c.removePausedAnim(e), c.saveRunningAnim(e), e.__waitTimeout ? e.__waitTimeout = setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          e.stop(!0);
          minerva_hook.afterFunction("null", this, {});
        }, e.__totalTime) : (e.beforeResume(), e.doStart())), e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      beforeResume: g,
      run: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            n = this,
            t = n.config.queue;
        _minerva_ret = (t === !1 ? n.runInternal() : (e = m.queue(n.node, t, n), 1 === e.length && n.runInternal()), n);
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      stop: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            t = this,
            u = t.node,
            a = t.config.queue;
        if (t.isResolved() || t.isRejected()) return t;
        if (t.__waitTimeout && (clearTimeout(t.__waitTimeout), t.__waitTimeout = 0), !t.isRunning() && !t.isPaused()) return a !== !1 && m.remove(u, a, t), t;
        t.doStop(e), c.removeRunningAnim(t), c.removePausedAnim(t);
        var o = t.defer;
        _minerva_ret = (e ? (i(t), o.resolve([t])) : o.reject([t]), a !== !1 && (n = m.dequeue(u, a), n && n[0] && n[0].runInternal()), t);
        minerva_hook.afterFunction("null", this, {
          n: n,
          t: t,
          u: u,
          a: a,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    });
    var w = u.Statics = {
      isRunning: c.isElRunning,
      isPaused: c.isElPaused,
      stop: c.stopEl,
      Q: m
    };
    _minerva_ret = (l.each(["pause", "resume"], function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      w[e] = function (n, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = null === t || "string" == typeof t || t === !1 ? c.pauseOrResumeQueue(n, t, e) : c.pauseOrResumeQueue(n, void 0, e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }), e = u);
    minerva_hook.afterFunction("null", this, {
      s: s,
      d: d,
      c: c,
      m: m,
      f: f,
      l: l,
      v: v,
      p: p,
      g: g,
      _: _,
      h: h,
      w: w,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = i;
    _minerva_ret = e = n;
    minerva_hook.afterFunction("null", this, {
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    n: n,
    t: t,
    i: i,
    u: u,
    a: a,
    o: o,
    r: r,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});