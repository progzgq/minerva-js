define("event-touch", ["util", "dom", "event-dom-base", "feature"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var t,
      n,
      o,
      r,
      i,
      a,
      u,
      s,
      c,
      h = e("util"),
      d = e("dom"),
      l = e("event-dom-base"),
      v = e("feature");
  _minerva_ret = (t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      _minerva_ret = m.startsWith(e, "touch");
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = m.startsWith(e, "mouse");
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      _minerva_ret = m.startsWith(e, "MSPointer") || m.startsWith(e, "pointer");
      minerva_hook.afterFunction("o", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t = this;
      t.doc = e, t.eventHandles = [], t.init(), t.touches = [], t.inTouch = 0;
      minerva_hook.afterFunction("r", this, {
        t: t
      });
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      c(this, e);
      minerva_hook.afterFunction("i", this, {});
    }

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      p(this, e);
      minerva_hook.afterFunction("a", this, {});
    }

    function u(e) {
      minerva_hook.beforeFunction("u", this, arguments);
      i.call(this, e), S[e].setup.apply(this, arguments);
      minerva_hook.afterFunction("u", this, {});
    }

    function s(e) {
      minerva_hook.beforeFunction("s", this, arguments);
      a.call(this, e), S[e].tearDown.apply(this, arguments);
      minerva_hook.afterFunction("s", this, {});
    }

    function c(e, t) {
      minerva_hook.beforeFunction("c", this, arguments);
      var n = E.getDocument(e),
          o = E.data(n, w);
      o || E.data(n, w, o = new r(n)), t && o.addEventHandle(t);
      minerva_hook.afterFunction("c", this, {
        n: n,
        o: o
      });
    }

    function p(e, t) {
      minerva_hook.beforeFunction("p", this, arguments);
      var n = E.getDocument(e),
          o = E.data(n, w);
      o && (t && o.removeEventHandle(t), o.eventHandles.length || (o.destroy(), E.removeData(n, w)));
      minerva_hook.afterFunction("p", this, {
        n: n,
        o: o
      });
    }

    var f,
        T,
        g,
        m = h,
        E = d,
        S = {},
        y = l,
        H = y.Special,
        w = m.guid("touch-handle"),
        M = v,
        P = /iPad|iPhone|iPod/.test(navigator.userAgent),
        X = 2500,
        Y = 25;
    _minerva_ret = (M.isTouchEventSupported() ? P ? (g = "touchend touchcancel", f = "touchstart", T = "touchmove") : (g = "touchend touchcancel mouseup", f = "touchstart mousedown", T = "touchmove mousemove") : M.isPointerSupported() ? (f = "pointerdown", T = "pointermove", g = "pointerup pointercancel") : M.isMsPointerSupported() ? (f = "MSPointerDown", T = "MSPointerMove", g = "MSPointerUp MSPointerCancel") : (f = "mousedown", T = "mousemove", g = "mouseup"), r.prototype = {
      constructor: r,
      lastTouches: [],
      firstTouch: null,
      init: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.doc;
        y.on(t, f, e.onTouchStart, e), o(T) || y.on(t, T, e.onTouchMove, e), y.on(t, g, e.onTouchEnd, e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      },
      addTouch: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        e.identifier = e.pointerId, this.touches.push(e);
        minerva_hook.afterFunction("null", this, {});
      },
      removeTouch: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t, n = 0, o = e.pointerId, r = this.touches, i = r.length; i > n; n++) if (t = r[n], t.pointerId === o) {
          r.splice(n, 1);
          break;
        }

        minerva_hook.afterFunction("null", this, {});
      },
      updateTouch: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t, n = 0, o = e.pointerId, r = this.touches, i = r.length; i > n; n++) t = r[n], t.pointerId === o && (r[n] = e);

        minerva_hook.afterFunction("null", this, {});
      },
      isPrimaryTouch: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.firstTouch === e.identifier;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      setPrimaryTouch: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        null === this.firstTouch && (this.firstTouch = e.identifier);
        minerva_hook.afterFunction("null", this, {});
      },
      removePrimaryTouch: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.isPrimaryTouch(e) && (this.firstTouch = null);
        minerva_hook.afterFunction("null", this, {});
      },
      dupMouse: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.lastTouches,
            n = e.changedTouches[0];

        if (this.isPrimaryTouch(n)) {
          var o = {
            x: n.clientX,
            y: n.clientY
          };
          t.push(o), setTimeout(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            var e = t.indexOf(o);
            e > -1 && t.splice(e, 1);
            minerva_hook.afterFunction("null", this, {
              e: e
            });
          }, X);
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n
        });
      },
      isEventSimulatedFromTouch: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t, n = this.lastTouches, o = e.clientX, r = e.clientY, i = 0, a = n.length; a > i && (t = n[i]); i++) {
          var u = Math.abs(o - t.x),
              s = Math.abs(r - t.y);
          if (Y >= u && Y >= s) return !0;
        }

        _minerva_ret = 0;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      normalize: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            i,
            a,
            u = e.type;
        _minerva_ret = ((i = t(u)) ? (a = "touchend" === u || "touchcancel" === u ? e.changedTouches : e.touches, e.gestureType = "touch") : (o(u) ? e.gestureType = e.originalEvent.pointerType : n(u) && (e.gestureType = "mouse"), a = this.touches), a && 1 === a.length && (e.which = 1, e.pageX = a[0].pageX, e.pageY = a[0].pageY), i ? e : (r = !u.match(/(up|cancel)$/i), e.touches = r ? a : [], e.targetTouches = r ? a : [], e.changedTouches = a, e));
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i,
          a: a,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      onTouchStart: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            i,
            a = this,
            u = e.type,
            s = a.eventHandles;
        if (t(u)) a.setPrimaryTouch(e.changedTouches[0]), a.dupMouse(e);else if (n(u)) {
          if (a.isEventSimulatedFromTouch(e)) return;
          a.touches = [e];
        } else {
          if (!o(u)) throw new Error("unrecognized touch event: " + e.type);
          a.addTouch(e.originalEvent), 1 === a.touches.length && y.on(a.doc, T, a.onTouchMove, a);
        }

        for (var c = 0, h = s.length; h > c; c++) r = s[c], i = s[r].handle, i.isActive = 1;

        a.callEventHandle("onTouchStart", e);
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i,
          a: a,
          u: u,
          s: s
        });
      },
      onTouchMove: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = this,
            i = e.type;

        if (n(i)) {
          if (r.isEventSimulatedFromTouch(i)) return;
          r.touches = [e];
        } else if (o(i)) r.updateTouch(e.originalEvent);else if (!t(i)) throw new Error("unrecognized touch event: " + e.type);

        r.callEventHandle("onTouchMove", e);
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i
        });
      },
      onTouchEnd: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = this,
            i = e.type;
        n(i) && r.isEventSimulatedFromTouch(e) || (r.callEventHandle("onTouchEnd", e), t(i) ? (r.dupMouse(e), m.makeArray(e.changedTouches).forEach(function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          r.removePrimaryTouch(e);
          minerva_hook.afterFunction("null", this, {});
        })) : n(i) ? r.touches = [] : o(i) && (r.removeTouch(e.originalEvent), r.touches.length || y.detach(r.doc, T, r.onTouchMove, r)));
        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i
        });
      },
      callEventHandle: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            o,
            r = this,
            i = r.eventHandles,
            a = i.concat();
        t = r.normalize(t);
        var u = t.gestureType;

        if (t.changedTouches.length) {
          for (var s = 0, c = a.length; c > s; s++) if (n = a[s], i[n]) {
            if (o = i[n].handle, o.requiredGestureType && u !== o.requiredGestureType) continue;
            if (o.processed) continue;
            o.processed = 1, o.isActive && o[e] && o[e](t) === !1 && (o.isActive = 0);
          }

          for (s = 0, c = a.length; c > s; s++) n = i[s], i[n] && (o = i[n].handle, o.processed = 0);
        }

        minerva_hook.afterFunction("null", this, {
          n: n,
          o: o,
          r: r,
          i: i,
          a: a,
          t: t,
          u: u
        });
      },
      addEventHandle: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this,
            n = t.eventHandles,
            o = S[e].handle;
        n[e] ? n[e].count++ : (n.push(e), t.sortEventHandles(), n[e] = {
          count: 1,
          handle: o
        });
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          o: o
        });
      },
      sortEventHandles: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.eventHandles.sort(function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var n = S[e],
              o = S[t];
          _minerva_ret = n.order - o.order;
          minerva_hook.afterFunction("null", this, {
            n: n,
            o: o,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {});
      },
      removeEventHandle: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.eventHandles;
        t[e] && (t[e].count--, t[e].count || (t.splice(m.indexOf(e, t), 1), delete t[e]));
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      },
      destroy: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.doc;
        y.detach(t, f, e.onTouchStart, e), y.detach(t, T, e.onTouchMove, e), y.detach(t, g, e.onTouchEnd, e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      }
    }, e = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      "string" == typeof e && (e = [e]), m.each(e, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = {};
        n.setup = t.setup ? u : i, n.tearDown = t.tearDown ? s : a, n.add = t.add, n.remove = t.remove, t.order = t.order || 100, S[e] = t, H[e] = n;
        minerva_hook.afterFunction("null", this, {
          n: n
        });
      });
      minerva_hook.afterFunction("null", this, {});
    });
    minerva_hook.afterFunction("null", this, {
      f: f,
      T: T,
      g: g,
      m: m,
      E: E,
      S: S,
      y: y,
      H: H,
      w: w,
      M: M,
      P: P,
      X: X,
      Y: Y,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      minerva_hook.afterFunction("t", this, {});
    }

    var n = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      minerva_hook.afterFunction("null", this, {});
    };

    _minerva_ret = (t.prototype = {
      constructor: t,
      requiredTouchCount: 0,
      onTouchStart: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this,
            n = t.requiredTouchCount,
            o = e.touches,
            r = o.length;
        _minerva_ret = r === n ? (t.isTracking || (t.isTracking = !0, t.isStarted = !1), t.lastTouches = e.touches, t.startTime = e.timeStamp, t.start(e)) : (r > n && t.onTouchEnd(e, !0), void 0);
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          o: o,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      onTouchMove: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        _minerva_ret = t.isTracking ? (t.lastTouches = e.touches, t.move(e)) : void 0;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      onTouchEnd: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;
        n.isTracking && (n.isTracking = !1, n.isStarted && (n.isStarted = !1, n.end(e, t)));
        minerva_hook.afterFunction("null", this, {
          n: n
        });
      },
      start: n,
      move: n,
      end: n
    }, e = t);
    minerva_hook.afterFunction("null", this, {
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), o = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      minerva_hook.afterFunction("t", this, {});
    }

    var o = n,
        r = h;
    _minerva_ret = (r.extend(t, o, {
      requiredTouchCount: 1,
      start: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        t.superclass.start.apply(this, arguments);
        var e = this,
            n = e.lastTouches;
        e.lastXY = {
          pageX: n[0].pageX,
          pageY: n[0].pageY
        };
        minerva_hook.afterFunction("null", this, {
          e: e,
          n: n
        });
      }
    }), e = t);
    minerva_hook.afterFunction("null", this, {
      o: o,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      minerva_hook.afterFunction("t", this, {});
    }

    var o = d,
        r = n,
        i = h;
    _minerva_ret = (i.extend(t, r, {
      requiredTouchCount: 2,
      getCommonTarget: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = e.touches,
            n = t[0].target,
            r = t[1].target;
        if (n === r) return n;
        if (o.contains(n, r)) return n;

        for (; r;) {
          if (o.contains(r, n)) return r;
          r = r.parentNode;
        }

        _minerva_ret = void 0;
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e = t);
    minerva_hook.afterFunction("null", this, {
      o: o,
      r: r,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var i = t;
    _minerva_ret = e = {
      addEvent: i,
      Touch: n,
      SingleTouch: o,
      DoubleTouch: r
    };
    minerva_hook.afterFunction("null", this, {
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t, n) {
      minerva_hook.beforeFunction("t", this, arguments);
      var o,
          r,
          i = e.lastTouches,
          a = i[0],
          u = a.pageX,
          s = a.pageY,
          h = u - e.startX,
          d = s - e.startY,
          l = Math.abs(h),
          v = Math.abs(d),
          m = t.timeStamp;
      if (e.isStarted = 1, m - e.startTime > f) return !1;
      if (e.isVertical && l > T && (e.isVertical = 0), e.isHorizontal && v > T && (e.isHorizontal = 0), e.isVertical && e.isHorizontal && (v > l ? e.isHorizontal = 0 : e.isVertical = 0), n || (e.isVertical && g > v && (e.isVertical = 0), e.isHorizontal && g > l && (e.isHorizontal = 0)), e.isHorizontal) r = 0 > h ? "left" : "right", o = l;else {
        if (!e.isVertical) return !1;
        r = 0 > d ? "up" : "down", o = v;
      }

      if (n) {
        var E = t.originalEvent._ksSwipePrevent;
        return E && (E === !0 || E[r]) && t.preventDefault(), void 0;
      }

      c.fire(a.target, p, {
        originalEvent: t.originalEvent,
        pageX: a.pageX,
        pageY: a.pageY,
        which: 1,
        direction: r,
        distance: o,
        duration: (t.timeStamp - e.startTime) / 1e3
      });
      minerva_hook.afterFunction("t", this, {
        o: o,
        r: r,
        i: i,
        a: a,
        u: u,
        s: s,
        h: h,
        d: d,
        l: l,
        v: v,
        m: m
      });
    }

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      minerva_hook.afterFunction("n", this, {});
    }

    function o(e, t, n) {
      minerva_hook.beforeFunction("o", this, arguments);

      for (var o = !1; e !== t && !(o = a.test(e, n));) e = e.parentNode;

      _minerva_ret = o;
      minerva_hook.afterFunction("o", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var r = h,
        a = d,
        u = i,
        s = u.addEvent,
        c = l,
        v = u.SingleTouch,
        p = "swipe",
        f = 1e3,
        T = 35,
        g = 50;
    _minerva_ret = (r.extend(n, v, {
      requiredGestureType: "touch",
      start: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        n.superclass.start.apply(e, arguments);
        var t = e.lastTouches[0];
        e.isHorizontal = 1, e.isVertical = 1, e.startX = t.pageX, e.startY = t.pageY;
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      },
      move: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (n.superclass.move.apply(this, arguments), t(this, e, 1));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      end: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (n.superclass.end.apply(this, arguments), t(this, e, 0));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), s([p], {
      handle: new n(),
      add: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = e.config,
            n = t.preventDefault;

        if (n) {
          var r = t.filter;
          e._preventFn = function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            (!r || o(e.target, e.currentTarget, r)) && (e._ksSwipePrevent = n);
            minerva_hook.afterFunction("null", this, {});
          }, this.addEventListener("touchmove", e._preventFn);
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n
        });
      },
      remove: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        e._preventFn && (this.removeEventListener("touchmove", e._preventFn), e._preventFn = null);
        minerva_hook.afterFunction("null", this, {});
      }
    }), e = {
      SWIPE: p
    });
    minerva_hook.afterFunction("null", this, {
      r: r,
      a: a,
      u: u,
      s: s,
      c: c,
      v: v,
      p: p,
      f: f,
      T: T,
      g: g,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      e.preventDefault();
      minerva_hook.afterFunction("t", this, {});
    }

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      e.singleTapTimer && (clearTimeout(e.singleTapTimer), e.singleTapTimer = 0), e.tapHoldTimer && (clearTimeout(e.tapHoldTimer), e.tapHoldTimer = 0);
      minerva_hook.afterFunction("n", this, {});
    }

    function o() {
      minerva_hook.beforeFunction("o", this, arguments);
      o.superclass.constructor.apply(this, arguments);
      minerva_hook.afterFunction("o", this, {});
    }

    var r = i,
        a = r.addEvent,
        u = l,
        s = r.SingleTouch,
        c = h,
        d = "singleTap",
        v = "doubleTap",
        p = "hold",
        f = "tap",
        T = 1e3,
        g = 300,
        m = 5,
        E = u.Object,
        S = /iPad|iPhone|iPod/.test(navigator.userAgent);
    _minerva_ret = (c.extend(o, s, {
      start: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        o.superclass.start.call(t, e), n(t);
        var r = t.lastTouches[0];
        _minerva_ret = (t.tapHoldTimer = setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          var n = c.mix({
            which: 1,
            duration: (c.now() - e.timeStamp) / 1e3
          }, t.lastXY);
          t.tapHoldTimer = 0, t.lastXY = 0, u.fire(r.target, p, n);
          minerva_hook.afterFunction("null", this, {
            n: n
          });
        }, T), t.isStarted = !0, void 0);
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      move: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            t = this;
        if (!(e = t.lastXY)) return !1;
        var o = t.lastTouches[0];
        _minerva_ret = !o || Math.abs(o.pageX - e.pageX) > m || Math.abs(o.pageY - e.pageY) > m ? (n(t), !1) : void 0;
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      end: function (e, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            i = this;

        if (n(i), !o && (r = i.lastXY)) {
          var a = i.lastTouches[0],
              s = a.target,
              h = new E(e.originalEvent);
          c.mix(h, {
            type: f,
            which: 1,
            pageX: r.pageX,
            pageY: r.pageY,
            target: s,
            currentTarget: s
          }), u.fire(s, f, h), h.isDefaultPrevented() && (S ? e.preventDefault() : u.on(s.ownerDocument || s, "click", {
            fn: t,
            once: 1
          }));
          var l,
              p = i.lastEndTime,
              T = e.timeStamp;
          if (i.lastEndTime = T, p && (l = T - p, g > l)) return i.lastEndTime = 0, u.fire(s, v, {
            pageX: r.pageX,
            pageY: r.pageY,
            which: 1,
            duration: l / 1e3
          }), void 0;
          l = T - i.startTime, l > g ? u.fire(s, d, {
            pageX: r.pageX,
            pageY: r.pageY,
            which: 1,
            duration: l / 1e3
          }) : i.singleTapTimer = setTimeout(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            u.fire(s, d, {
              pageX: r.pageX,
              pageY: r.pageY,
              which: 1,
              duration: (c.now() - i.startTime) / 1e3
            });
            minerva_hook.afterFunction("null", this, {});
          }, g);
        }

        minerva_hook.afterFunction("null", this, {
          r: r,
          i: i
        });
      }
    }), a([f, v, d, p], {
      handle: new o()
    }), e = {
      TAP: f,
      SINGLE_TAP: d,
      DOUBLE_TAP: v,
      HOLD: p
    });
    minerva_hook.afterFunction("null", this, {
      r: r,
      a: a,
      u: u,
      s: s,
      c: c,
      d: d,
      v: v,
      p: p,
      f: f,
      T: T,
      g: g,
      m: m,
      E: E,
      S: S,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), s = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e, t) {
      minerva_hook.beforeFunction("t", this, arguments);
      var o = {
        isActive: 1
      };
      o[t] = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        n.fire(t.target, e, t);
        minerva_hook.afterFunction("null", this, {});
      }, r(e, {
        order: 1,
        handle: o
      });
      minerva_hook.afterFunction("t", this, {
        o: o
      });
    }

    var n = l,
        o = i,
        r = o.addEvent,
        a = e = {
      START: "ksGestureStart",
      MOVE: "ksGestureMove",
      END: "ksGestureEnd"
    };
    _minerva_ret = (t(a.START, "onTouchStart"), t(a.MOVE, "onTouchMove"), t(a.END, "onTouchEnd"), e);
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      r: r,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), c = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = h,
        n = l,
        o = s,
        r = a,
        c = u,
        d = i,
        v = {
      BasicGestureEvent: o,
      SwipeGestureEvent: r,
      TapGestureEvent: c
    };
    _minerva_ret = (v._gestureUtil = d, t.mix(n, v), e = v);
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      o: o,
      r: r,
      c: c,
      d: d,
      v: v,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    t: t,
    n: n,
    o: o,
    r: r,
    i: i,
    a: a,
    u: u,
    s: s,
    c: c,
    h: h,
    d: d,
    l: l,
    v: v,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});