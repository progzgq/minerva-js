define("event-dom-base", ["dom", "event-base", "util"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var t,
      r,
      n,
      o,
      a,
      i,
      l,
      c,
      u,
      s = e("dom"),
      f = e("event-base"),
      v = e("util");
  _minerva_ret = (t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = s,
        r = "ksEventTargetId_" + +new Date(),
        n = document,
        o = n && n.addEventListener ? function (e, t, r, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.addEventListener && e.addEventListener(t, r, !!n);
      minerva_hook.afterFunction("null", this, {});
    } : function (e, t, r) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.attachEvent && e.attachEvent("on" + t, r);
      minerva_hook.afterFunction("null", this, {});
    },
        a = n && n.removeEventListener ? function (e, t, r, n) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.removeEventListener && e.removeEventListener(t, r, !!n);
      minerva_hook.afterFunction("null", this, {});
    } : function (e, t, r) {
      minerva_hook.beforeFunction("null", this, arguments);
      e.detachEvent && e.detachEvent("on" + t, r);
      minerva_hook.afterFunction("null", this, {});
    };
    _minerva_ret = e = {
      simpleAdd: o,
      simpleRemove: a,
      data: function (e, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = t.data(e, r, n);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      removeData: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = t.removeData(e, r);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      t: t,
      r: r,
      n: n,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = {};
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(e) {
      minerva_hook.beforeFunction("t", this, arguments);
      t.superclass.constructor.call(this, e);
      minerva_hook.afterFunction("t", this, {});
    }

    var n = f,
        o = r,
        a = v;
    _minerva_ret = (a.extend(t, n.Observer, {
      keys: ["fn", "filter", "data", "context", "originalType", "groups", "last"],
      notifyInternal: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            n,
            a,
            i,
            l = this,
            c = e.type;
        _minerva_ret = ((i = l.config.originalType) ? e.type = i : i = c, (r = o[i]) && r.handle ? (n = r.handle(e, l, t), n && n.length > 0 && (a = n[0])) : a = l.simpleNotify(e, t), a === !1 && e.halt(), e.type = c, a);
        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n,
          a: a,
          i: i,
          l: l,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), e = t);
    minerva_hook.afterFunction("null", this, {
      n: n,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), o = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t() {
      minerva_hook.beforeFunction("t", this, arguments);
      _minerva_ret = l;
      minerva_hook.afterFunction("t", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r() {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = c;
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var o = this,
          l = e.type,
          f = "function" == typeof e.stopPropagation || "boolean" == typeof e.cancelBubble;
      n.superclass.constructor.call(o), o.originalEvent = e;
      var v = r;
      "defaultPrevented" in e ? v = e.defaultPrevented ? t : r : "getPreventDefault" in e ? v = e.getPreventDefault() ? t : r : "returnValue" in e && (v = e.returnValue === c ? t : r), o.isDefaultPrevented = v;
      var d,
          g,
          p,
          h = [],
          m = u.concat();

      for (a.each(s, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (l.match(e.reg) && (m = m.concat(e.props), e.fix && h.push(e.fix)), void 0);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }), g = m.length; g;) p = m[--g], o[p] = e[p];

      for (!o.target && f && (o.target = e.srcElement || i), o.target && 3 === o.target.nodeType && (o.target = o.target.parentNode), g = h.length; g;) d = h[--g], d(o, e);

      o.timeStamp = e.timeStamp || a.now();
      minerva_hook.afterFunction("n", this, {
        o: o,
        l: l,
        f: f,
        v: v,
        d: d,
        g: g,
        p: p,
        h: h,
        m: m
      });
    }

    var o = f,
        a = v,
        i = document,
        l = !0,
        c = !1,
        u = ["altKey", "bubbles", "cancelable", "ctrlKey", "currentTarget", "eventPhase", "metaKey", "shiftKey", "target", "timeStamp", "view", "type"],
        s = [{
      reg: /^key/,
      props: ["char", "charCode", "key", "keyCode", "which"],
      fix: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), void 0 === e.metaKey && (e.metaKey = e.ctrlKey);
        minerva_hook.afterFunction("null", this, {});
      }
    }, {
      reg: /^touch/,
      props: ["touches", "changedTouches", "targetTouches"]
    }, {
      reg: /^hashchange$/,
      props: ["newURL", "oldURL"]
    }, {
      reg: /^gesturechange$/i,
      props: ["rotation", "scale"]
    }, {
      reg: /^(mousewheel|DOMMouseScroll)$/,
      props: [],
      fix: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            n,
            o,
            a = t.wheelDelta,
            i = t.axis,
            l = t.wheelDeltaY,
            c = t.wheelDeltaX,
            u = t.detail;
        a && (o = a / 120), u && (o = 0 - (u % 3 === 0 ? u / 3 : u)), void 0 !== i && (i === e.HORIZONTAL_AXIS ? (n = 0, r = 0 - o) : i === e.VERTICAL_AXIS && (r = 0, n = o)), void 0 !== l && (n = l / 120), void 0 !== c && (r = -1 * c / 120), r || n || (n = o), void 0 !== r && (e.deltaX = r), void 0 !== n && (e.deltaY = n), void 0 !== o && (e.delta = o);
        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n,
          o: o,
          a: a,
          i: i,
          l: l,
          c: c,
          u: u
        });
      }
    }, {
      reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
      props: ["buttons", "clientX", "clientY", "button", "offsetX", "relatedTarget", "which", "fromElement", "toElement", "offsetY", "pageX", "pageY", "screenX", "screenY"],
      fix: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            n,
            o,
            a = e.target,
            l = t.button;
        _minerva_ret = (a && null == e.pageX && null != t.clientX && (r = a.ownerDocument || i, n = r.documentElement, o = r.body, e.pageX = t.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), e.which || void 0 === l || (e.which = 1 & l ? 1 : 2 & l ? 3 : 4 & l ? 2 : 0), !e.relatedTarget && e.fromElement && (e.relatedTarget = e.fromElement === a ? e.toElement : e.fromElement), e);
        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n,
          o: o,
          a: a,
          l: l,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }];
    _minerva_ret = (a.extend(n, o.Object, {
      constructor: n,
      preventDefault: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.originalEvent;
        t.preventDefault ? t.preventDefault() : t.returnValue = c, n.superclass.preventDefault.call(e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      },
      stopPropagation: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.originalEvent;
        t.stopPropagation ? t.stopPropagation() : t.cancelBubble = l, n.superclass.stopPropagation.call(e);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      }
    }), e = n);
    minerva_hook.afterFunction("null", this, {
      o: o,
      a: a,
      i: i,
      l: l,
      c: c,
      u: u,
      s: s,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), a = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function a(e) {
      minerva_hook.beforeFunction("a", this, arguments);
      var t = this;
      i.mix(t, e), t.reset();
      minerva_hook.afterFunction("a", this, {
        t: t
      });
    }

    var i = v,
        l = f,
        c = s,
        u = r,
        d = t,
        g = n,
        p = o,
        h = l.Utils;
    _minerva_ret = (i.extend(a, l.Observable, {
      constructor: a,
      setup: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            t = e.type,
            r = u[t] || {},
            n = e.currentTarget,
            o = d.data(n),
            a = o.handle;
        r.setup && r.setup.call(n, t) !== !1 || d.simpleAdd(n, t, a);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          r: r,
          n: n,
          o: o,
          a: a
        });
      },
      reset: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this;
        a.superclass.reset.call(e), e.delegateCount = 0, e.lastCount = 0;
        minerva_hook.afterFunction("null", this, {
          e: e
        });
      },
      notify: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            r,
            n,
            o,
            a,
            i,
            l,
            u,
            s,
            f,
            v = e.target,
            d = e.type,
            g = this,
            p = g.currentTarget,
            h = g.observers,
            m = [],
            b = g.delegateCount || 0;
        if (b && v.nodeType) for (; v !== p;) {
          if (v.disabled !== !0 || "click" !== d) {
            var y,
                E,
                T,
                D = {};

            for (u = [], a = 0; b > a; a++) f = h[a], T = f.config.filter, E = T + "", y = D[E], void 0 === y && (y = D[E] = c.test(v, T)), y && u.push(f);

            u.length && m.push({
              currentTarget: v,
              currentTargetObservers: u
            });
          }

          v = v.parentNode || p;
        }

        for (b < h.length && m.push({
          currentTarget: p,
          currentTargetObservers: h.slice(b)
        }), a = 0, l = m.length; !e.isPropagationStopped() && l > a; ++a) for (o = m[a], u = o.currentTargetObservers, t = o.currentTarget, e.currentTarget = t, i = 0; !e.isImmediatePropagationStopped() && i < u.length; i++) s = u[i], r = s.notify(e, g), n !== !1 && void 0 !== r && (n = r);

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          n: n,
          o: o,
          a: a,
          i: i,
          l: l,
          u: u,
          s: s,
          f: f,
          v: v,
          d: d,
          g: g,
          p: p,
          h: h,
          m: m,
          b: b,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      fire: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e = e || {};
        var r,
            n,
            o = this,
            l = String(o.type),
            s = u[l] || {},
            f = s.bubbles !== !1,
            v = o.currentTarget;

        if (!(s.fire && s.fire.call(v, t) === !1 || (e.isEventObject || (n = e, e = new p({
          type: l
        }), i.mix(e, n)), e.currentTarget = v, e.target = e.target || v, s.preFire && s.preFire.call(v, e, t) === !1))) {
          var d,
              g,
              h = v,
              m = c.getWindow(h),
              b = m.document,
              y = [],
              E = "on" + l,
              T = 0;

          do y.push(h), h = h.parentNode || h.ownerDocument || h === b && m; while (!t && h && f);

          h = y[T];

          do e.currentTarget = h, r = a.getDomEventObservable(h, l), r && (g = r.notify(e), void 0 !== g && d !== !1 && (d = g)), h[E] && h[E].call(h) === !1 && e.preventDefault(), h = y[++T]; while (!t && h && !e.isPropagationStopped());

          if (!t && !e.isDefaultPrevented()) {
            try {
              v[l] && !i.isWindow(v) && (a.triggeredEvent = l, v[l]());
            } catch (D) {
              console.error("event-dom: trigger action error: " + D);
            }

            a.triggeredEvent = "";
          }

          return d;
        }

        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r,
          n: n,
          o: o,
          l: l,
          s: s,
          f: f,
          v: v
        });
      },
      on: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this,
            r = t.observers,
            n = u[t.type] || {},
            o = e instanceof g ? e : new g(e);
        -1 === t.findObserver(o) && (o.config.filter ? (r.splice(t.delegateCount, 0, o), t.delegateCount++) : o.config.last ? (r.push(o), t.lastCount++) : r.splice(r.length - t.lastCount, 0, o), n.add && n.add.call(t.currentTarget, o));
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          n: n,
          o: o
        });
      },
      detach: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            r = this,
            n = u[r.type] || {},
            o = ("filter" in e),
            a = e.filter,
            i = e.context,
            l = e.fn,
            c = r.currentTarget,
            s = r.observers,
            f = e.groups;

        if (s.length) {
          f && (t = h.getGroupsRe(f));
          var v,
              d,
              g,
              p,
              m,
              b = s.length;

          if (l || o || t) {
            for (i = i || c, v = 0, d = 0, g = []; b > v; ++v) {
              p = s[v];
              var y = p.config;
              m = y.context || c, i !== m || l && l !== y.fn || o && (a && a !== y.filter || !a && !y.filter) || t && !y.groups.match(t) ? g[d++] = p : (y.filter && r.delegateCount && r.delegateCount--, y.last && r.lastCount && r.lastCount--, n.remove && n.remove.call(c, p));
            }

            r.observers = g;
          } else r.reset();

          r.checkMemory();
        }

        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          n: n,
          o: o,
          a: a,
          i: i,
          l: l,
          c: c,
          s: s,
          f: f
        });
      },
      checkMemory: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            t,
            r = this,
            n = r.type,
            o = u[n] || {},
            a = r.currentTarget,
            l = d.data(a);
        l && (e = l.observables, r.hasObserver() || (t = l.handle, o.tearDown && o.tearDown.call(a, n) !== !1 || d.simpleRemove(a, n, t), delete e[n]), i.isEmptyObject(e) && (l.handle = null, d.removeData(a)));
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t,
          r: r,
          n: n,
          o: o,
          a: a,
          l: l
        });
      }
    }), a.triggeredEvent = "", a.getDomEventObservable = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var r,
          n = d.data(e);
      _minerva_ret = (n && (r = n.observables), r ? r[t] : null);
      minerva_hook.afterFunction("null", this, {
        r: r,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, a.getDomEventObservablesHolder = function (e, t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var r = d.data(e);
      _minerva_ret = (!r && t && d.data(e, r = {}), r);
      minerva_hook.afterFunction("null", this, {
        r: r,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, e = a);
    minerva_hook.afterFunction("null", this, {
      i: i,
      l: l,
      c: c,
      u: u,
      d: d,
      g: g,
      p: p,
      h: h,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, t) {
      minerva_hook.beforeFunction("n", this, arguments);
      var r,
          n = g[t] || {};
      _minerva_ret = (!e.originalType && (r = n.typeFix) && (e.originalType = t, t = r), t);
      minerva_hook.afterFunction("n", this, {
        r: r,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e, t, r) {
      minerva_hook.beforeFunction("i", this, arguments);
      var o, a, i, l;
      r = m.merge(r), t = n(r, t), o = p.getDomEventObservablesHolder(e, 1), (l = o.handle) || (l = o.handle = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            r = e.type,
            n = l.currentTarget;
        _minerva_ret = p.triggeredEvent === r ? void 0 : (t = p.getDomEventObservable(n, r), t ? (e.currentTarget = n, e = new h(e), t.notify(e)) : void 0);
        minerva_hook.afterFunction("null", this, {
          t: t,
          r: r,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, l.currentTarget = e), (i = o.observables) || (i = o.observables = {}), a = i[t], a || (a = i[t] = new p({
        type: t,
        currentTarget: e
      }), a.setup()), a.on(r), e = null;
      minerva_hook.afterFunction("i", this, {
        o: o,
        a: a,
        i: i,
        l: l
      });
    }

    function l(e, t, r) {
      minerva_hook.beforeFunction("l", this, arguments);
      r = m.merge(r);
      var o;
      t = n(r, t);
      var a = p.getDomEventObservablesHolder(e),
          i = (a || {}).observables;
      if (a && i) if (t) o = i[t], o && o.detach(r);else for (t in i) i[t].detach(r);
      minerva_hook.afterFunction("l", this, {
        r: r,
        o: o,
        t: t,
        a: a,
        i: i
      });
    }

    var c = f,
        u = t,
        d = s,
        g = r,
        p = a,
        h = o,
        m = v,
        b = c.Utils,
        y = {
      on: function (e, t, r, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e = d.query(e), b.batchForType(function (e, t, r, n) {
          minerva_hook.beforeFunction("null", this, arguments);
          var o,
              a,
              l = b.normalizeParam(t, r, n);

          for (t = l.type, o = e.length - 1; o >= 0; o--) a = e[o], i(a, t, l);

          minerva_hook.afterFunction("null", this, {
            o: o,
            a: a,
            l: l
          });
        }, 1, e, t, r, n), e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      detach: function (e, t, r, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e = d.query(e), b.batchForType(function (e, t, r, n) {
          minerva_hook.beforeFunction("null", this, arguments);
          var o,
              a,
              i,
              c,
              u = b.normalizeParam(t, r, n);

          for (t = u.type, o = e.length - 1; o >= 0; o--) if (c = e[o], l(c, t, u), u.deep && c.getElementsByTagName) for (i = c.getElementsByTagName("*"), a = i.length - 1; a >= 0; a--) l(i[a], t, u);

          minerva_hook.afterFunction("null", this, {
            o: o,
            a: a,
            i: i,
            c: c,
            u: u
          });
        }, 1, e, t, r, n), e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      delegate: function (e, t, r, n, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = y.on(e, t, {
          fn: n,
          context: o,
          filter: r
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      undelegate: function (e, t, r, n, o) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = y.detach(e, t, {
          fn: n,
          context: o,
          filter: r
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      fire: function (e, t, r, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o;
        _minerva_ret = (t.isEventObject && (r = t, t = t.type), r = r || {}, r.synthetic = 1, b.splitAndRun(t, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var a, i, l, c;
          b.fillGroupsForEvent(t, r), t = r.type;
          var u = g[t],
              s = t;

          for (u && u.typeFix && (s = u.typeFix), e = d.query(e), i = e.length - 1; i >= 0; i--) l = e[i], c = p.getDomEventObservable(l, s), n || c || (c = new p({
            type: s,
            currentTarget: l
          })), c && (a = c.fire(r, n), o !== !1 && void 0 !== a && (o = a));

          minerva_hook.afterFunction("null", this, {
            a: a,
            i: i,
            l: l,
            c: c,
            u: u,
            s: s
          });
        }), o);
        minerva_hook.afterFunction("null", this, {
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      fireHandler: function (e, t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = y.fire(e, t, r, 1);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      clone: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r, n;

        if (r = p.getDomEventObservablesHolder(e)) {
          var o = u.data(e);
          o && o === u.data(t) && u.removeData(t), n = r.observables, m.each(n, function (e, r) {
            minerva_hook.beforeFunction("null", this, arguments);
            m.each(e.observers, function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              i(t, r, e.config);
              minerva_hook.afterFunction("null", this, {});
            });
            minerva_hook.afterFunction("null", this, {});
          });
        }

        minerva_hook.afterFunction("null", this, {
          r: r,
          n: n
        });
      },
      getEventListeners: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = (p.getDomEventObservablesHolder(e) || {
          observables: {}
        }).observables;
        _minerva_ret = t ? r[t] : r;
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    _minerva_ret = e = y;
    minerva_hook.afterFunction("null", this, {
      c: c,
      u: u,
      d: d,
      g: g,
      p: p,
      h: h,
      m: m,
      b: b,
      y: y,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), l = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = i,
        n = r,
        o = v,
        a = "onmousewheel" in document.documentElement ? "mousewheel" : "DOMMouseScroll";
    _minerva_ret = e = o.mix(n, {
      mousewheel: {
        typeFix: a
      },
      load: {
        bubbles: !1
      },
      click: {
        fire: function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = this;
          _minerva_ret = !e && "checkbox" === String(t.type) && t.click && "input" === t.nodeName.toLowerCase() ? (t.click(), !1) : void 0;
          minerva_hook.afterFunction("null", this, {
            t: t,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      },
      focus: {
        bubbles: !1,
        preFire: function (e, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = r ? void 0 : t.fire(this, "focusin");
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        fire: function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = this;
          _minerva_ret = !e && t.ownerDocument && t !== t.ownerDocument.activeElement && t.focus ? (t.focus(), !1) : void 0;
          minerva_hook.afterFunction("null", this, {
            t: t,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      },
      blur: {
        bubbles: !1,
        preFire: function (e, r) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = r ? void 0 : t.fire(this, "focusout");
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        },
        fire: function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t = this;
          _minerva_ret = !e && t.ownerDocument && t === t.ownerDocument.activeElement && t.blur ? (t.blur(), !1) : void 0;
          minerva_hook.afterFunction("null", this, {
            t: t,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }
      }
    });
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), c = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = v,
        n = i,
        c = o,
        u = a,
        s = l,
        f = t;
    _minerva_ret = e = r.merge({
      add: n.on,
      remove: n.detach,
      off: n.detach,
      trigger: n.fire,
      triggerHandler: n.fireHandler,
      Observable: u,
      Special: s,
      Object: c,
      Utils: f
    }, n);
    minerva_hook.afterFunction("null", this, {
      r: r,
      n: n,
      c: c,
      u: u,
      s: s,
      f: f,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = c;
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
    l: l,
    c: c,
    u: u,
    s: s,
    f: f,
    v: v,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});