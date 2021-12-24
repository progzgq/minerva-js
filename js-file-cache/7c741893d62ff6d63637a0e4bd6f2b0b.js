define("event-base", ["util"], function (t) {
  minerva_hook.beforeFunction("null", this, arguments);
  var n,
      r,
      e,
      o,
      i,
      u,
      a = t("util");
  _minerva_ret = (n = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);
      if (t.indexOf(".") < 0) return [t, ""];
      var n = t.match(/([^.]+)?(\..+)?$/),
          r = n[1],
          e = [r],
          o = n[2];
      _minerva_ret = (o ? (o = o.split(".").sort(), e.push(o.join("."))) : e.push(""), e);
      minerva_hook.afterFunction("n", this, {
        n: n,
        r: r,
        e: e,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var r,
        e,
        o = a;
    _minerva_ret = t = {
      splitAndRun: r = function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = o.isArray(t) ? (o.each(t, n), void 0) : (t = o.trim(t), -1 === t.indexOf(" ") ? n(t) : o.each(t.split(/\s+/), n), void 0);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      normalizeParam: function (t, r, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var i = r || {};
        i = "function" == typeof r ? {
          fn: r,
          context: e
        } : o.merge(i);
        var u = n(t);
        _minerva_ret = (t = u[0], i.groups = u[1], i.type = t, i);
        minerva_hook.afterFunction("null", this, {
          i: i,
          i: i,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      batchForType: function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = o.makeArray(arguments),
            i = e[2 + n];
        i && o.isObject(i) ? o.each(i, function (r, o) {
          minerva_hook.beforeFunction("null", this, arguments);
          var i = [].concat(e);
          i.splice(0, 2), i[n] = o, i[n + 1] = r, t.apply(null, i);
          minerva_hook.afterFunction("null", this, {
            i: i
          });
        }) : r(i, function (r) {
          minerva_hook.beforeFunction("null", this, arguments);
          var o = [].concat(e);
          o.splice(0, 2), o[n] = r, t.apply(null, o);
          minerva_hook.afterFunction("null", this, {
            o: o
          });
        });
        minerva_hook.afterFunction("null", this, {
          e: e,
          i: i
        });
      },
      fillGroupsForEvent: function (t, r) {
        minerva_hook.beforeFunction("null", this, arguments);
        var o = n(t),
            i = o[1];
        i && (i = e(i), r._ksGroups = i), r.type = o[0];
        minerva_hook.afterFunction("null", this, {
          o: o,
          i: i
        });
      },
      getGroupsRe: e = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = new RegExp(t.split(".").join(".*\\.") + "(?:\\.|$)");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      r: r,
      e: e,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), r = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);
      this.config = t || {};
      minerva_hook.afterFunction("n", this, {});
    }

    var r,
        e = a;
    _minerva_ret = (n.prototype = {
      constructor: n,
      equals: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;
        _minerva_ret = !!e.reduce(n.keys, function (r, e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = r && n.config[e] === t.config[e];
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, 1);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      simpleNotify: function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r,
            e = this,
            o = e.config;
        _minerva_ret = (r = o.fn.call(o.context || n.currentTarget, t, o.data), o.once && n.removeObserver(e), r);
        minerva_hook.afterFunction("null", this, {
          r: r,
          e: e,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      notifyInternal: function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = this.simpleNotify(t, n);
        _minerva_ret = (r === !1 && t.halt(), r);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      notify: function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this,
            o = e.config,
            i = t._ksGroups;
        _minerva_ret = !i || o.groups && o.groups.match(i) ? e.notifyInternal(t, n) : r;
        minerva_hook.afterFunction("null", this, {
          e: e,
          o: o,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, t = n);
    minerva_hook.afterFunction("null", this, {
      r: r,
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), e = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(t) {
      minerva_hook.beforeFunction("n", this, arguments);
      var n = this;
      n.currentTarget = null, r.mix(n, t), n.reset();
      minerva_hook.afterFunction("n", this, {
        n: n
      });
    }

    var r = a;
    _minerva_ret = (n.prototype = {
      constructor: n,
      hasObserver: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = !!this.observers.length;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      reset: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        t.observers = [];
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      },
      removeObserver: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r = this,
            e = r.observers,
            o = e.length;

        for (n = 0; o > n; n++) if (e[n] === t) {
          e.splice(n, 1);
          break;
        }

        r.checkMemory();
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          e: e,
          o: o
        });
      },
      checkMemory: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        minerva_hook.afterFunction("null", this, {});
      },
      findObserver: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n,
            r = this.observers;

        for (n = r.length - 1; n >= 0; --n) if (t.equals(r[n])) return n;

        _minerva_ret = -1;
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, t = n);
    minerva_hook.afterFunction("null", this, {
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), o = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      var t = this;
      t.timeStamp = i.now(), t.target = r, t.currentTarget = r;
      minerva_hook.afterFunction("n", this, {
        t: t
      });
    }

    var r,
        e = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = !1;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        o = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = !0;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    },
        i = a;

    _minerva_ret = (n.prototype = {
      isEventObject: 1,
      constructor: n,
      isDefaultPrevented: e,
      isPropagationStopped: e,
      isImmediatePropagationStopped: e,
      preventDefault: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.isDefaultPrevented = o;
        minerva_hook.afterFunction("null", this, {});
      },
      stopPropagation: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        this.isPropagationStopped = o;
        minerva_hook.afterFunction("null", this, {});
      },
      stopImmediatePropagation: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this;
        t.isImmediatePropagationStopped = o, t.stopPropagation();
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      },
      halt: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this;
        t ? n.stopImmediatePropagation() : n.stopPropagation(), n.preventDefault();
        minerva_hook.afterFunction("null", this, {
          n: n
        });
      }
    }, t = n);
    minerva_hook.afterFunction("null", this, {
      r: r,
      e: e,
      o: o,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), i = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    var i = n,
        u = r,
        a = e;
    _minerva_ret = t = {
      Utils: i,
      Object: o,
      Observer: u,
      Observable: a
    };
    minerva_hook.afterFunction("null", this, {
      i: i,
      u: u,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), u = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = t = i;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    n: n,
    r: r,
    e: e,
    o: o,
    i: i,
    u: u,
    a: a,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});