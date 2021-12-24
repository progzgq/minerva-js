define("event-gesture", ["event-dom-base", "util", "event-touch", "feature"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var t,
      a,
      r,
      n,
      i,
      s,
      o = e("event-dom-base"),
      u = e("util"),
      g = e("event-touch"),
      p = e("feature");
  _minerva_ret = (t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t, a) {
      minerva_hook.beforeFunction("t", this, arguments);
      var r,
          i,
          s = e.lastTouches,
          o = s[0],
          u = o.pageX,
          g = o.pageY,
          p = u - e.startX,
          h = g - e.startY,
          f = Math.abs(p),
          m = Math.abs(h),
          T = e.direction;
      T || (T = f > m ? 0 > p ? "left" : "right" : 0 > h ? "up" : "down", e.direction = T), r = "up" === T || "down" === T ? m : f;
      var E,
          X,
          Y = t.timeStamp - e.startTime;
      if (a) {
        if (e.isStarted) i = l;else {
          i = c;
          var S = window,
              P = {
            left: S.pageXOffset + v,
            right: S.pageXOffset + S.innerWidth - v,
            top: S.pageYOffset + v,
            bottom: S.pageYOffset + S.innerHeight - v
          };
          if ("right" === T && u > P.left) return !1;
          if ("left" === T && u < P.right) return !1;
          if ("down" === T && g > P.top) return !1;
          if ("up" === T && g < P.bottom) return !1;
          e.isStarted = 1, e.startTime = t.timeStamp;
        }
      } else i = d, "left" === T || "right" === T ? E = r / Y : X = r / Y;
      _minerva_ret = (n.fire(o.target, i, {
        originalEvent: t.originalEvent,
        pageX: o.pageX,
        pageY: o.pageY,
        which: 1,
        direction: T,
        distance: r,
        duration: Y / 1e3,
        velocityX: E,
        velocityY: X
      }), void 0);
      minerva_hook.afterFunction("t", this, {
        r: r,
        i: i,
        s: s,
        o: o,
        u: u,
        g: g,
        p: p,
        h: h,
        f: f,
        m: m,
        T: T,
        E: E,
        X: X,
        Y: Y,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a() {
      minerva_hook.beforeFunction("a", this, arguments);
      minerva_hook.afterFunction("a", this, {});
    }

    var r = g._gestureUtil,
        n = o,
        i = u,
        s = r.addEvent,
        p = r.SingleTouch,
        c = "edgePanStart",
        l = "edgePan",
        d = "edgePanEnd",
        v = 60;
    _minerva_ret = (i.extend(a, p, {
      requiredGestureType: "touch",
      start: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        a.superclass.start.apply(e, arguments);
        var t = e.lastTouches[0];
        e.direction = null, e.startX = t.pageX, e.startY = t.pageY;
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      },
      move: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (a.superclass.move.apply(this, arguments), t(this, e, 1));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      end: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (a.superclass.end.apply(this, arguments), t(this, e, 0));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), s([l, d, c], {
      handle: new a()
    }), e = {
      EDGE_PAN: l,
      EDGE_PAN_START: c,
      EDGE_PAN_END: d
    });
    minerva_hook.afterFunction("null", this, {
      r: r,
      n: n,
      i: i,
      s: s,
      p: p,
      c: c,
      l: l,
      d: d,
      v: v,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t) {
      minerva_hook.beforeFunction("t", this, arguments);
      var a = e.pageX - t.pageX,
          r = e.pageY - t.pageY;
      _minerva_ret = Math.sqrt(a * a + r * r);
      minerva_hook.afterFunction("t", this, {
        a: a,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(e, a) {
      minerva_hook.beforeFunction("a", this, arguments);
      var i = e.lastTouches[0],
          s = e.startPos;

      if (!e.direction) {
        var o = a.pageX - e.startPos.pageX,
            u = a.pageY - e.startPos.pageY,
            g = Math.abs(o),
            c = Math.abs(u);
        e.direction = g > c ? 0 > o ? "left" : "right" : 0 > u ? "up" : "down";
      }

      t(i, s) > T && (e.isStarted ? r(e, a) : (E.body.setCapture && E.body.setCapture(), e.isStarted = !0), p.fire(e.dragTarget, v, n(e, a)));
      minerva_hook.afterFunction("a", this, {
        i: i,
        s: s
      });
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);
      var a = e.lastTouches[0],
          r = t.timeStamp;
      r - e.lastTime > m && (e.lastPos = {
        pageX: a.pageX,
        pageY: a.pageY
      }, e.lastTime = r);
      minerva_hook.afterFunction("r", this, {
        a: a,
        r: r
      });
    }

    function n(e, t, a) {
      minerva_hook.beforeFunction("n", this, arguments);
      var r = e.startPos;
      a = a || {};
      var n = e.lastTouches[0];
      _minerva_ret = (a.which = 1, a.pageX = n.pageX, a.pageY = n.pageY, a.originalEvent = t.originalEvent, a.deltaX = n.pageX - r.pageX, a.deltaY = n.pageY - r.pageY, a.startTime = e.startTime, a.startPos = e.startPos, a.gestureType = t.gestureType, a.direction = e.direction, a);
      minerva_hook.afterFunction("n", this, {
        r: r,
        a: a,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i() {
      minerva_hook.beforeFunction("i", this, arguments);
      minerva_hook.afterFunction("i", this, {});
    }

    var s = g._gestureUtil,
        p = o,
        c = u,
        l = s.addEvent,
        d = s.SingleTouch,
        v = "panStart",
        h = "panEnd",
        f = "pan",
        m = 300,
        T = 3,
        E = document;
    _minerva_ret = (c.extend(i, d, {
      start: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        i.superclass.start.apply(e, arguments);
        var t = e.lastTouches[0];
        e.lastTime = e.startTime, e.dragTarget = t.target, e.startPos = e.lastPos = {
          pageX: t.pageX,
          pageY: t.pageY
        }, e.direction = null;
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      },
      move: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        i.superclass.move.apply(t, arguments), t.isStarted ? (r(t, e), p.fire(t.dragTarget, f, n(t, e))) : a(t, e);
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      },
      end: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this,
            a = t.lastTouches[0],
            r = e.timeStamp,
            i = (a.pageX - t.lastPos.pageX) / (r - t.lastTime),
            s = (a.pageY - t.lastPos.pageY) / (r - t.lastTime);
        p.fire(t.dragTarget, h, n(t, e, {
          velocityX: i || 0,
          velocityY: s || 0
        })), E.body.releaseCapture && E.body.releaseCapture();
        minerva_hook.afterFunction("null", this, {
          t: t,
          a: a,
          r: r,
          i: i,
          s: s
        });
      }
    }), l([v, f, h], {
      handle: new i()
    }), e = {
      PAN_START: v,
      PAN: f,
      PAN_END: h
    });
    minerva_hook.afterFunction("null", this, {
      s: s,
      p: p,
      c: c,
      l: l,
      d: d,
      v: v,
      h: h,
      f: f,
      m: m,
      T: T,
      E: E,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t) {
      minerva_hook.beforeFunction("t", this, arguments);
      var a = e.pageX - t.pageX,
          r = e.pageY - t.pageY;
      _minerva_ret = Math.sqrt(a * a + r * r);
      minerva_hook.afterFunction("t", this, {
        a: a,
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a() {
      minerva_hook.beforeFunction("a", this, arguments);
      minerva_hook.afterFunction("a", this, {});
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      2 === e.targetTouches.length && e.preventDefault();
      minerva_hook.afterFunction("r", this, {});
    }

    var n = g._gestureUtil,
        i = o,
        s = p,
        c = u,
        l = n.DoubleTouch,
        d = n.addEvent,
        v = "pinch",
        h = "pinchStart",
        f = "pinchEnd";
    c.extend(a, l, {
      requiredGestureType: "touch",
      move: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = this;
        a.superclass.move.apply(r, arguments);
        var n = r.lastTouches;

        if (n[0].pageX > 0 && n[0].pageY > 0 && n[1].pageX > 0 && n[1].pageY > 0) {
          var s = t(n[0], n[1]);
          if (r.isStarted) i.fire(r.target, v, c.mix(e, {
            distance: s,
            scale: s / r.startDistance
          }));else {
            r.isStarted = !0, r.startDistance = s;
            var o = r.target = r.getCommonTarget(e);
            i.fire(o, h, c.mix(e, {
              distance: s,
              scale: 1
            }));
          }
        }

        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n
        });
      },
      end: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        a.superclass.end.apply(t, arguments), i.fire(t.target, f, c.mix(e, {
          touches: t.lastTouches
        }));
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      }
    });
    var m = new a();
    d([h, f], {
      handle: m
    });
    var T = {
      handle: m
    };
    _minerva_ret = (s.isTouchEventSupported() && (T.setup = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.addEventListener("touchmove", r, !1);
      minerva_hook.afterFunction("null", this, {});
    }, T.tearDown = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.removeEventListener("touchmove", r, !1);
      minerva_hook.afterFunction("null", this, {});
    }), d(v, T), e = {
      PINCH: v,
      PINCH_START: h,
      PINCH_END: f
    });
    minerva_hook.afterFunction("null", this, {
      n: n,
      i: i,
      s: s,
      c: c,
      l: l,
      d: d,
      v: v,
      h: h,
      f: f,
      m: m,
      T: T,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      minerva_hook.afterFunction("t", this, {});
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      2 === e.targetTouches.length && e.preventDefault();
      minerva_hook.afterFunction("a", this, {});
    }

    var r = g._gestureUtil,
        n = o,
        i = u,
        s = p,
        c = r.DoubleTouch,
        l = r.addEvent,
        d = "rotateStart",
        v = "rotate",
        h = 180 / Math.PI,
        f = "rotateEnd";
    i.extend(t, c, {
      requiredGestureType: "touch",
      move: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var a = this;
        t.superclass.move.apply(a, arguments);
        var r = a.lastTouches,
            s = r[0],
            o = r[1],
            u = a.lastAngle,
            g = Math.atan2(o.pageY - s.pageY, o.pageX - s.pageX) * h;

        if (void 0 !== u) {
          var p = Math.abs(g - u),
              c = (g + 360) % 360,
              l = (g - 360) % 360;
          Math.abs(c - u) < p ? g = c : Math.abs(l - u) < p && (g = l);
        }

        a.lastAngle = g, a.isStarted ? n.fire(a.target, v, i.mix(e, {
          angle: g,
          rotation: g - a.startAngle
        })) : (a.isStarted = !0, a.startAngle = g, a.target = a.getCommonTarget(e), n.fire(a.target, d, i.mix(e, {
          angle: g,
          rotation: 0
        })));
        minerva_hook.afterFunction("null", this, {
          a: a,
          r: r,
          s: s,
          o: o,
          u: u,
          g: g
        });
      },
      end: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var a = this;
        t.superclass.end.apply(a, arguments), a.lastAngle = void 0, n.fire(a.target, f, i.mix(e, {
          touches: a.lastTouches
        }));
        minerva_hook.afterFunction("null", this, {
          a: a
        });
      }
    });
    var m = new t();
    l([f, d], {
      handle: m
    });
    var T = {
      handle: m
    };
    _minerva_ret = (s.isTouchEventSupported() && (T.setup = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.addEventListener("touchmove", a, !1);
      minerva_hook.afterFunction("null", this, {});
    }, T.tearDown = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.removeEventListener("touchmove", a, !1);
      minerva_hook.afterFunction("null", this, {});
    }), l(v, T), e = {
      ROTATE_START: d,
      ROTATE: v,
      ROTATE_END: f
    });
    minerva_hook.afterFunction("null", this, {
      r: r,
      n: n,
      i: i,
      s: s,
      c: c,
      l: l,
      d: d,
      v: v,
      h: h,
      f: f,
      m: m,
      T: T,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      r = void 0, d = 0;
      minerva_hook.afterFunction("t", this, {});
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      var t,
          a = e.accelerationIncludingGravity,
          s = a.x,
          o = a.y,
          u = a.z;
      void 0 !== r && (t = h(f(s - r), f(o - n), f(u - i)), t > c && E(), t > l && (d = 1)), r = s, n = o, i = u;
      minerva_hook.afterFunction("a", this, {
        t: t,
        a: a,
        s: s,
        o: o,
        u: u
      });
    }

    var r,
        n,
        i,
        s = o,
        g = u,
        p = s.Special,
        c = 5,
        l = 20,
        d = 0,
        v = "shake",
        h = Math.max,
        f = Math.abs,
        m = window,
        T = "devicemotion",
        E = g.buffer(function () {
      minerva_hook.beforeFunction("null", this, arguments);
      d && (s.fireHandler(m, v, {
        accelerationIncludingGravity: {
          x: r,
          y: n,
          z: i
        }
      }), t());
      minerva_hook.afterFunction("null", this, {});
    }, 250);
    _minerva_ret = (p.shake = {
      setup: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this === m && m.addEventListener(T, a, !1);
        minerva_hook.afterFunction("null", this, {});
      },
      tearDown: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this === m && (E.stop(), t(), m.removeEventListener(T, a, !1));
        minerva_hook.afterFunction("null", this, {});
      }
    }, e = {
      SHAKE: v
    });
    minerva_hook.afterFunction("null", this, {
      r: r,
      n: n,
      i: i,
      s: s,
      g: g,
      p: p,
      c: c,
      l: l,
      d: d,
      v: v,
      h: h,
      f: f,
      m: m,
      T: T,
      E: E,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), s = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var s = u,
        p = o,
        c = g,
        l = t,
        d = a,
        v = r,
        h = n,
        f = i,
        m = {
      EdgePanGestureEvent: l,
      PanGestureEvent: d,
      PinchGestureEvent: v,
      RotateGestureEvent: h,
      ShakeGestureEvent: f
    };
    _minerva_ret = (s.mix(m, c), s.mix(p, m), e = m);
    minerva_hook.afterFunction("null", this, {
      s: s,
      p: p,
      c: c,
      l: l,
      d: d,
      v: v,
      h: h,
      f: f,
      m: m,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    t: t,
    a: a,
    r: r,
    n: n,
    i: i,
    s: s,
    o: o,
    u: u,
    g: g,
    p: p,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});