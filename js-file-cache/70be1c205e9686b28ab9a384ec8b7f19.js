define("promise", [], function () {
  minerva_hook.beforeFunction("null", this, arguments);
  //! Copyright 2015, promise@6.1.1 MIT Licensed, build time: Thu, 29 Oct 2015 12:29:42 GMT 
  var n, t;
  _minerva_ret = (n = function (n) {
    minerva_hook.beforeFunction("null", this, arguments);

    function t(n, t) {
      minerva_hook.beforeFunction("t", this, arguments);
      if (n) for (var e = 0, r = n.length; r > e && t(n[e], e) !== !1; e++);
      minerva_hook.afterFunction("t", this, {});
    }

    function e(n, t) {
      minerva_hook.beforeFunction("e", this, arguments);

      for (var e in t) n[e] = t[e];

      minerva_hook.afterFunction("e", this, {});
    }

    function r(n) {
      minerva_hook.beforeFunction("r", this, arguments);
      _minerva_ret = n && "function" == typeof n.then;
      minerva_hook.afterFunction("r", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(n, t, e) {
      minerva_hook.beforeFunction("o", this, arguments);
      if (n instanceof f) e.call(n, n.reason);else if (n instanceof s || !r(n)) {
        var i = n[p];
        if (r(i) || i instanceof f) return o(i, t, e), void 0;
        n[v] === m ? n[d].push([t, e]) : t && t.call(n, i);
      } else n.then(t, e);
      minerva_hook.afterFunction("o", this, {});
    }

    function i(n) {
      minerva_hook.beforeFunction("i", this, arguments);
      var t = this;
      _minerva_ret = t instanceof i ? (t.promise = n || new s(), t.promise.defer = t, void 0) : new i(n);
      minerva_hook.afterFunction("i", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function u(n) {
      minerva_hook.beforeFunction("u", this, arguments);
      _minerva_ret = n && n instanceof s;
      minerva_hook.afterFunction("u", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function c(n, t) {
      minerva_hook.beforeFunction("c", this, arguments);

      _minerva_ret = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n.apply(t, arguments);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("c", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function s(n) {
      minerva_hook.beforeFunction("s", this, arguments);
      var t = this;
      if (t[d] = [], t[w] = [], n) {
        if ("function" == typeof n) {
          t[v] = m;
          var e = new i(t),
              r = c(e.resolve, e),
              o = c(e.reject, e);

          try {
            n(r, o);
          } catch (u) {
            throw o(u), new Error(u.stack || u);
          }
        } else t[v] = y;
      } else t[v] = m;
      minerva_hook.afterFunction("s", this, {
        t: t
      });
    }

    function f(n) {
      minerva_hook.beforeFunction("f", this, arguments);
      _minerva_ret = n instanceof f ? n : (this.reason = n, void 0);
      minerva_hook.afterFunction("f", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function a(n, t, e) {
      minerva_hook.beforeFunction("a", this, arguments);

      function u(n) {
        minerva_hook.beforeFunction("u", this, arguments);

        try {
          return t ? t.call(this, n) : n;
        } catch (e) {
          return window.console && console.error(e.stack || e), new f(e);
        }

        minerva_hook.afterFunction("u", this, {});
      }

      function c(n) {
        minerva_hook.beforeFunction("c", this, arguments);

        try {
          return e ? e.call(this, n) : new f(n);
        } catch (t) {
          return window.console && console.error(t.stack || t), new f(t);
        }

        minerva_hook.afterFunction("c", this, {});
      }

      function s(n) {
        minerva_hook.beforeFunction("s", this, arguments);
        l || (l = 1, a.resolve(u.call(this, n)));
        minerva_hook.afterFunction("s", this, {});
      }

      var a = new i(),
          l = 0;
      _minerva_ret = (r(n) ? o(n, s, function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        l || (l = 1, a.resolve(c.call(this, n)));
        minerva_hook.afterFunction("null", this, {});
      }) : s(n), a.promise);
      minerva_hook.afterFunction("a", this, {
        a: a,
        l: l,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function l(n) {
      minerva_hook.beforeFunction("l", this, arguments);
      _minerva_ret = n && n[v] === y;
      minerva_hook.afterFunction("l", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function h(n) {
      minerva_hook.beforeFunction("h", this, arguments);
      _minerva_ret = n && n[v] === _;
      minerva_hook.afterFunction("h", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var p = "__promise_value",
        v = "__promise_status",
        w = "__promise_progress_listeners",
        d = "__promise_pendings",
        m = "Pending",
        y = "Fulfilled",
        _ = "Rejected";
    _minerva_ret = (i.prototype = {
      constructor: i,
      resolve: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var e = this.promise;
        if (e[v] !== m) return null;
        e[v] = n instanceof f ? _ : y, e[p] = n;
        var r = e[d];
        _minerva_ret = (t(r, function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          o(e, n[0], n[1]);
          minerva_hook.afterFunction("null", this, {});
        }), e[d] = [], e[w] = [], this.promise);
        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      reject: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.resolve(new f(n));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      notify: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.promise[v] !== m ? null : (t(this.promise[w], function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t(n);
          minerva_hook.afterFunction("null", this, {});
        }), void 0);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, s.prototype = {
      constructor: s,
      then: function (n, t, e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = (e && this.progress(e), a(this, n, t));
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      progress: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this,
            e = t[w];
        _minerva_ret = t[v] !== m ? t : (e || (e = t[w] = []), e.push(n), t);
        minerva_hook.afterFunction("null", this, {
          t: t,
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      fail: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.then(0, n);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      fin: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = this.then(function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = n(t, !0);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = n(t, !1);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      done: function (n, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        var e = this,
            r = function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          setTimeout(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            throw n;
            minerva_hook.afterFunction("null", this, {});
          }, 0);
          minerva_hook.afterFunction("null", this, {});
        },
            o = n || t ? e.then(n, t) : e;

        o.fail(r);
        minerva_hook.afterFunction("null", this, {
          e: e,
          r: r,
          o: o
        });
      },
      isResolved: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = l(this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isRejected: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = h(this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }, s.prototype["catch"] = s.prototype.fail, s.Defer = i, e(s, {
      when: a,
      cast: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n instanceof s ? n : new s(function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t(n);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      resolve: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = new s(function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t(n);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      reject: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = new s(function (t, e) {
          minerva_hook.beforeFunction("null", this, arguments);
          e(n);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      isPromise: u,
      isResolved: l,
      isRejected: h,
      all: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = n.length;
        if (!t) return null;

        for (var e = new i(), r = 0; r < n.length; r++) !function (r, o) {
          minerva_hook.beforeFunction("null", this, arguments);
          a(r, function (r) {
            minerva_hook.beforeFunction("null", this, arguments);
            n[o] = r, 0 === --t && e.resolve(n);
            minerva_hook.afterFunction("null", this, {});
          }, function (n) {
            minerva_hook.beforeFunction("null", this, arguments);
            e.reject(n);
            minerva_hook.afterFunction("null", this, {});
          });
          minerva_hook.afterFunction("null", this, {});
        }(n[r], r);

        _minerva_ret = e.promise;
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      async: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);

        _minerva_ret = function () {
          minerva_hook.beforeFunction("null", this, arguments);

          function t(n, t) {
            minerva_hook.beforeFunction("t", this, arguments);
            var i;
            _minerva_ret = (i = o[n](t), i.done ? i.value : a(i.value, e, r));
            minerva_hook.afterFunction("t", this, {
              i: i,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }

          function e(n) {
            minerva_hook.beforeFunction("e", this, arguments);
            _minerva_ret = t("next", n);
            minerva_hook.afterFunction("e", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }

          function r(n) {
            minerva_hook.beforeFunction("r", this, arguments);
            _minerva_ret = t("throw", n);
            minerva_hook.afterFunction("r", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }

          var o = n.apply(this, arguments);

          try {
            return e();
          } catch (i) {
            return s.reject(i);
          }

          minerva_hook.afterFunction("null", this, {
            o: o
          });
        };

        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    }), n = s);
    minerva_hook.afterFunction("null", this, {
      p: p,
      v: v,
      w: w,
      d: d,
      m: m,
      y: y,
      _: _,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), t = function (t) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = t = n;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    n: n,
    t: t,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});