!function () {
  minerva_hook.beforeFunction("null", this, arguments);

  var _mods_util_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = {
      merge: function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = {};

        for (var r in e) n[r] = e[r];

        for (var r in t) n[r] = t[r];

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      stringify: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = [];

        for (var n in e) t.push(n + "=" + encodeURIComponent(e[n]));

        _minerva_ret = t.join("&");
        minerva_hook.afterFunction("null", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      now: function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = window.performance && window.performance.now ? window.performance.now() : Date && "function" == typeof Date.now ? Date.now() : new Date();
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_makeRand_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    var e = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = +new Date() + ".r" + Math.floor(1e3 * Math.random());
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_parseStack_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(e, t, n, r) {
      minerva_hook.beforeFunction("e", this, arguments);
      this.funcName = e, this.file = t, this.line = n, this.col = r;
      minerva_hook.afterFunction("e", this, {});
    }

    e.prototype.toString = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = [this.funcName, this.file, this.line, this.col].join("|");
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    var t = /\S+\:\d+/,
        n = /\s+at /,
        r = {
      parse: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = e ? "undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"] ? this.parseOpera(e) : e.stack && e.stack.match(n) ? this.parseV8OrIE(e) : e.stack && e.stack.match(t) ? this.parseFFOrSafari(e) : "" : "";
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      extractLocation: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (-1 === e.indexOf(":")) return [e];
        var t = e.replace(/[\(\)\s]/g, "").split(":"),
            n = t.pop(),
            r = t[t.length - 1];

        if (!isNaN(parseFloat(r)) && isFinite(r)) {
          var i = t.pop();
          return [t.join(":"), i, n];
        }

        _minerva_ret = [t.join(":"), n, void 0];
        minerva_hook.afterFunction("null", this, {
          t: t,
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      parseV8OrIE: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = t.stack.split("\n").slice(1).map(function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var n = t.replace(/^\s+/, "").split(/\s+/).slice(1),
              r = this.extractLocation(n.pop()),
              i = n[0] && "Anonymous" !== n[0] ? n[0] : void 0;
          _minerva_ret = new e(i, void 0, r[0], r[1], r[2]);
          minerva_hook.afterFunction("null", this, {
            n: n,
            r: r,
            i: i,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      parseFFOrSafari: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n.stack.split("\n").filter(function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = !!e.match(t);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, this).map(function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var n = t.split("@"),
              r = this.extractLocation(n.pop()),
              i = n.shift() || void 0;
          _minerva_ret = new e(i, void 0, r[0], r[1], r[2]);
          minerva_hook.afterFunction("null", this, {
            n: n,
            r: r,
            i: i,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      parseOpera: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      parseOpera9: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), i = [], o = 2, a = r.length; a > o; o += 2) {
          var s = n.exec(r[o]);
          s && i.push(new e(void 0, void 0, s[2], s[1]));
        }

        _minerva_ret = i;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      parseOpera10: function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), i = [], o = 0, a = r.length; a > o; o += 2) {
          var s = n.exec(r[o]);
          s && i.push(new e(s[3] || void 0, void 0, s[2], s[1]));
        }

        _minerva_ret = i;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      },
      parseOpera11: function (n) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = n.stack.split("\n").filter(function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = !!e.match(t) && !e.match(/^Error created at/);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, this).map(function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var n,
              r = t.split("@"),
              i = this.extractLocation(r.pop()),
              o = r.shift() || "",
              a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
          o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
          var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
          _minerva_ret = new e(a, s, i[0], i[1], i[2]);
          minerva_hook.afterFunction("null", this, {
            n: n,
            r: r,
            i: i,
            o: o,
            a: a,
            s: s,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, this);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };

    _minerva_ret = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = r.parse(e);
      _minerva_ret = t;
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_timing_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_util_js;

    _minerva_ret = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
          n = {};

      if (t) {
        var r = t.timing;

        if (r) {
          if (void 0 === n.firstPaint) {
            var i = -1;
            window.chrome && window.chrome.loadTimes ? (i = 1e3 * window.chrome.loadTimes().firstPaintTime, i -= 1e3 * window.chrome.loadTimes().startLoadTime) : "number" == typeof window.performance.timing.msFirstPaint && (i = window.performance.timing.msFirstPaint, n.firstPaint = i - window.performance.timing.navigationStart), n.firstPaint = Math.floor(i);
          }

          n.load = r.loadEventEnd - r.fetchStart, n.domReady = r.domComplete - r.domInteractive, n.readyStart = r.fetchStart - r.navigationStart, n.redirect = r.redirectEnd - r.redirectStart, n.appcache = r.domainLookupStart - r.fetchStart, n.unloadEvent = r.unloadEventEnd - r.unloadEventStart, n.lookupDomain = r.domainLookupEnd - r.domainLookupStart, n.connect = r.connectEnd - r.connectStart, n.request = r.responseEnd - r.requestStart, n.initDomTree = r.domInteractive - r.responseEnd, n.loadEvent = r.loadEventEnd - r.loadEventStart;
        }
      }

      if (this._windVanePerfData && (n = e.merge(n, this._windVanePerfData)), this._jsHeapSizeData && (n = e.merge(n, this._jsHeapSizeData)), this._cpu) {
        this._cpu.pause(), n.busy = Math.floor(this._cpu.getTotalSize(0, 15e3));

        for (var o = this._cpu.data.dataArray, a = -1, s = 0, c = 0; c < o.length && (o[c] <= .1 ? a++ : (s = c + 1, a = 0), !(a >= 5)); c++);

        n.avail = Math.floor(this._cpu.data.timeArray[s] - this._cpu.data.timeArray[0]), n.busyPer = Math.floor(this._cpu.getOverPerAmount(1, 0, 15e3) / this._cpu.getOverPerAmount(0, 0, 15e3) * 100), this._debug && window.console && window.console.log(n);
      }

      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        t: t,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_logServer_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = "//gm.mmstat.com/jstracker.3?";
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_sendImage_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_makeRand_js;

    _minerva_ret = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = window,
          r = "jsFeImage_" + e(),
          i = n[r] = new Image();
      i.onload = i.onerror = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        n[r] = null;
        minerva_hook.afterFunction("null", this, {});
      }, i.src = t;
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        i: i
      });
    };

    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_parseException_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_parseStack_js;

    _minerva_ret = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = {
        msg: t.message,
        file: "",
        line: "",
        col: "",
        stack: e(t).toString()
      };
      _minerva_ret = n;
      minerva_hook.afterFunction("null", this, {
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_battery_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);

      try {
        this.init();
      } catch (e) {}

      minerva_hook.afterFunction("e", this, {});
    }

    var t = _mods_util_js;
    _minerva_ret = (e.prototype.init = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = this,
          t = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
      _minerva_ret = t ? (this.battery = t, this.setConfig(), void this.bindEvent()) : void (navigator.getBattery && navigator.getBattery().then(function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        e.battery = t, e.setConfig(), e.bindEvent();
        minerva_hook.afterFunction("null", this, {});
      }));
      minerva_hook.afterFunction("null", this, {
        e: e,
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, e.prototype.setConfig = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      this.level = 100 * this.battery.level, this.lastTime = t.now();
      minerva_hook.afterFunction("null", this, {});
    }, e.prototype.bindEvent = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      function e() {
        minerva_hook.beforeFunction("e", this, arguments);
        n = 100 * o.battery.level, r = t.now(), i = ((o.level - n) / (r - o.lastTime) * 1e3).toFixed(6), i && i != 1 / 0 && i > 0 && window.JSTracker2.push({
          sampling: 1,
          msg: "__Battery",
          line: i
        }), o.battery.removeEventListener("levelchange", e, !1);
        minerva_hook.afterFunction("e", this, {});
      }

      var n,
          r,
          i,
          o = this;
      this.battery && this.level && this.battery.addEventListener && this.battery.removeEventListener && this.battery.addEventListener("levelchange", e, !1);
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        i: i,
        o: o
      });
    }, e);
    minerva_hook.afterFunction("null", this, {
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_cpu_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = (!function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      function t() {
        minerva_hook.beforeFunction("t", this, arguments);
        this.conf = {
          log: !1,
          consoleUI: !1,
          delay: 100,
          stat: !0,
          ui: !1
        }, this.log("start"), this.run(), this._lastTime = this.now(), this.data = {
          timeArray: [],
          per_line: [],
          time_line: [],
          size_line: [],
          averageTime: this.conf.delay,
          totalSize: 0,
          dataArray: [],
          timeArray: []
        }, this.log("end");
        minerva_hook.afterFunction("t", this, {});
      }

      t.prototype.run = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var e,
            t = this;
        t.conf.ui, window.addEventListener && window.addEventListener("touchmove", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          t.resumeFlag = !0;
          minerva_hook.afterFunction("null", this, {});
        }, !1), this._timerID = setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);

          if (!t.isPause) {
            t.currentTime = t.now(), e = (t.currentTime - t._lastTime - t.conf.delay - 0) / t.conf.delay, 0 > e && (e = 0), e > 1 && (e = 1), t._lastTime = t.currentTime;
            var n = t.getStepPer(t.now(), e),
                r = Math.floor(n / .5) + 1;
            if (r = r > 200 ? 200 : r, t.resumeFlag) t.resumeFlag = !1;else for (var i = 0; r > i; i++) t.logPercent(e);
            t._timerID = setTimeout(arguments.callee, t.conf.delay);
          }

          minerva_hook.afterFunction("null", this, {});
        }, t.conf.delay);
        minerva_hook.afterFunction("null", this, {
          e: e,
          t: t
        });
      }, t.prototype.now = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = window.performance && window.performance.now ? window.performance.now() : Date && "function" == typeof Date.now ? Date.now() : new Date();
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, t.prototype.log = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.conf.log && e.console && e.console.log && e.console.log("### CPU Log:" + t);
        minerva_hook.afterFunction("null", this, {});
      }, t.prototype.getStepPer = function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this.data;
        n.time_line.push(e);
        var r;
        n.per_line.push(t);
        var i = n.time_line.length;
        r = 1 == n.time_line.length ? n.averageTime : e - n.time_line[i - 2], r < n.averageTime && (r = n.averageTime);
        var o = (r - n.averageTime) / n.averageTime;
        _minerva_ret = (i >= 2 ? (n.totalSize += (n.per_line[i - 1] + n.per_line[i - 2]) * (n.time_line[i - 1] - n.time_line[i - 2]) / 2, n.size_line.push(n.totalSize)) : n.size_line.push(0), n.per_line.length > 2 && (n.per_line.shift(), n.time_line.shift()), o);
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          i: i,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, t.prototype.drawUIByConsole = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t = Math.round(10 * e), n = "▆", r = t; r--;) n += "▆";

        n += Math.round(100 * e), this.log(n);
        minerva_hook.afterFunction("null", this, {});
      }, t.prototype.pause = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        clearTimeout(this._timerID), this.isPause = !0, this.log("###########################PAUSE!!!!!!!!!");
        minerva_hook.afterFunction("null", this, {});
      }, t.prototype.resume = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        (null == this.isPause || this.isPause) && (this._lastTime = this.now() + 1e4, this.isPause = !1, this.resumeFlag = !0, this.log("###########################RESUME!!!!!!!!!"), this.run());
        minerva_hook.afterFunction("null", this, {});
      }, t.prototype.logPercent = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        this.conf.stat && this.logStat(e), this.conf.ui, this.conf.consoleUI && this.drawUIByConsole(e);
        minerva_hook.afterFunction("null", this, {});
      }, t.prototype.logStat = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t = this.data;
        t.dataArray.push(e), t.timeArray.push(this.now());
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      }, t.prototype.getCurrentCPU = function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var e = this.data, t = e.dataArray, n = 0, r = t.length, i = 0, o = r - 1; o >= 0 && (i += t[o], n++, !(n >= 3)); o--);

        _minerva_ret = 0 == n ? 0 : i / n;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, t.prototype.getTimeIndex = function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n = this.data.timeArray, r = 0; r < n.length; r++) if (t) {
          if (n[r] - n[0] > e) return r - 1;
        } else if (n[r] - n[0] >= e) return r;

        _minerva_ret = n.length;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, t.prototype.getOverPerAmount = function (e, t, n) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var r = this.data, i = this.getTimeIndex(t), o = this.getTimeIndex(n, 1), a = r.dataArray, s = 0, c = i; o > c; c++) "undefined" != typeof a[c] && a[c] >= e && s++;

        _minerva_ret = s;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, t.prototype.getTotalSize = function (e, t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this.data,
            r = this.getTimeIndex(e),
            i = this.getTimeIndex(t, !0),
            o = n.size_line[i];
        o || (o = n.size_line[n.size_line.length - 1]);
        var a = o - n.size_line[r];
        _minerva_ret = a;
        minerva_hook.afterFunction("null", this, {
          n: n,
          r: r,
          i: i,
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, e.cpu = t;
      minerva_hook.afterFunction("null", this, {});
    }(window), cpu);
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_getPerf_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_timing_js,
        t = _mods_util_js;

    _minerva_ret = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = {},
          r = window;

      if (r.performance) {
        var i = r.performance.timing;
        n.dns = i.domainLookupEnd - i.domainLookupStart, n.con = i.connectEnd - i.connectStart, n.req = i.responseStart - i.requestStart, n.res = i.responseEnd - i.responseStart, n.dcl = i.domContentLoadedEventEnd - i.domLoading, n.onload = i.loadEventStart - i.domLoading, n.type = window.performance.navigation.type, n.sampling = 100;
      }

      n.msg = "__PV";
      var o = e.call(this);
      _minerva_ret = (n.stack = t.stringify(o), n);
      minerva_hook.afterFunction("null", this, {
        n: n,
        r: r,
        o: o,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      e: e,
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_getKISSYVersion_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    function e() {
      minerva_hook.beforeFunction("e", this, arguments);

      try {
        return KISSY.version;
      } catch (e) {
        return null;
      }

      minerva_hook.afterFunction("e", this, {});
    }

    _minerva_ret = e();
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_getNick_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = null;

    try {
      var t = /_nk_=([^;]+)/.exec(document.cookie) || /_w_tb_nick=([^;]+)/.exec(document.cookie) || /lgc=([^;]+)/.exec(document.cookie);
      t && (e = decodeURIComponent(t[1]));
    } catch (n) {}

    _minerva_ret = e;
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_getScreen_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = screen.width + "x" + screen.height;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_getUA_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    var e = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        if (/UBrowser/i.test(navigator.userAgent)) return "";
        if ("undefined" != typeof window.scrollMaxX) return "";
        var e = ("track" in document.createElement("track")),
            t = window.chrome && window.chrome.webstore ? Object.keys(window.chrome.webstore).length : 0;
        return window.clientInformation && window.clientInformation.languages && window.clientInformation.languages.length > 2 ? "" : e ? t > 1 ? " QIHU 360 EE" : " QIHU 360 SE" : "";
      } catch (n) {
        return "";
      }

      minerva_hook.afterFunction("null", this, {});
    }();

    _minerva_ret = navigator.userAgent + e;
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_push_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_parseException_js,
        t = _mods_sendImage_js,
        n = _mods_logServer_js,
        r = _mods_makeRand_js,
        i = _mods_util_js;

    _minerva_ret = function (o) {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        if (!o) return;
        o && o.constructor === Object || (o = e(o)), o = i.merge(o, this._config);
        var a = r;
        o.t = a();

        for (var s in o) ("" === o[s] || null === o[s] || void 0 === o[s]) && delete o[s];

        var c = i.stringify(o),
            d = o.sampling;
        1 > d && (d = 9999999, "undefined" != typeof console && console.warn && console.warn("JSTracker2 sampling is invalid, please set a integer above 1!")), "__PV" !== o.msg && !this._debug && Math.random() * d > 1 || this._pushed_num < 10 && (this._pushed_num++, this._debug && window.console && window.console.log(o), t(n + c));
      } catch (u) {}

      minerva_hook.afterFunction("null", this, {});
    };

    minerva_hook.afterFunction("null", this, {
      e: e,
      t: t,
      n: n,
      r: r,
      i: i,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_sendPerf_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_getPerf_js,
        t = _mods_battery_js;

    _minerva_ret = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var n = this;

      if (this._debug || !(100 * Math.random() > 1)) {
        if (new t(), window.WindVane && window.WindVane.call && navigator.userAgent.indexOf("iPhone") > -1 && window.WindVane.call("WVDevelopTool", "getLocPerformanceData", {}, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);

          try {
            n._windVanePerfData = {
              w_dns: e.dns,
              w_c: e.c,
              w_scs: e.scs,
              w_rps: e.rps,
              w_rpe: e.rpe,
              w_dl: e.dl,
              w_dc: e.dc,
              w_lee: e.lee
            };
          } catch (e) {}

          minerva_hook.afterFunction("null", this, {});
        }), window.performance.memory) try {
          var r = parseInt(window.performance.memory.usedJSHeapSize),
              i = parseInt(window.performance.memory.totalJSHeapSize);
          r && (this._jsHeapSizeData = {
            jsHeapUsed: r
          }, i && (this._jsHeapSizeData.jsHeapUsedRate = (r / i).toFixed(4)));
        } catch (o) {}
        setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);

          try {
            var t = e.call(n);
            window.JSTracker2.push(t);
          } catch (r) {}

          minerva_hook.afterFunction("null", this, {});
        }, 2e4);
      }

      minerva_hook.afterFunction("null", this, {
        n: n
      });
    };

    minerva_hook.afterFunction("null", this, {
      e: e,
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_jstracker_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);

    function e(e) {
      minerva_hook.beforeFunction("e", this, arguments);
      var t = {
        msg: "",
        file: "",
        line: "",
        col: "",
        stack: "",
        url: "",
        ua: "",
        screen: "",
        nick: "",
        dns: "",
        con: "",
        req: "",
        res: "",
        dcl: "",
        onload: "",
        type: "",
        ki: ""
      };
      this.version = "o3.0.8", t = {
        v: this.version,
        ua: n,
        screen: r,
        sampling: 100,
        nick: i,
        ki: o
      }, this._debug = -1 != location.href.indexOf("jt_debug"), this._pushed_num = 0, this._config = a.merge(t, e);
      minerva_hook.afterFunction("e", this, {
        t: t
      });
    }

    var t = _mods_push_js,
        n = _mods_getUA_js,
        r = _mods_getScreen_js,
        i = _mods_getNick_js,
        o = _mods_getKISSYVersion_js,
        a = _mods_util_js;
    _minerva_ret = (e.prototype.push = t, e);
    minerva_hook.afterFunction("null", this, {
      t: t,
      n: n,
      r: r,
      i: i,
      o: o,
      a: a,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_handleError_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_parseStack_js;

    _minerva_ret = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = {
        msg: arguments[0],
        file: arguments[1],
        line: arguments[2],
        col: arguments[3],
        stack: e(arguments[4]).toString()
      };
      _minerva_ret = t;
      minerva_hook.afterFunction("null", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      _mods_pageTrack_js = function () {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_handleError_js,
        t = _mods_jstracker_js,
        n = _mods_sendPerf_js;

    _minerva_ret = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      try {
        if (!window) return;
        if (window.JSTracker2 && window.JSTracker2.version) return;
        var r = [];
        window.JSTracker2 && window.JSTracker2.length > 0 && (r = window.JSTracker2);
        var i;
        window.g_config && window.g_config.jstracker2 && (i = window.g_config.jstracker2), window.JSTracker2 = new t(i);

        for (var o = 0; o < r.length; o++) window.JSTracker2.push(r[o]);

        n.call(JSTracker2);
        var a = window.onerror;

        window.onerror = function () {
          minerva_hook.beforeFunction("null", this, arguments);

          try {
            a && a.apply(window, arguments);
            var t = e.apply(window, arguments);
            window.JSTracker2.push(t);
          } catch (n) {}

          minerva_hook.afterFunction("null", this, {});
        };
      } catch (s) {}

      minerva_hook.afterFunction("null", this, {});
    };

    minerva_hook.afterFunction("null", this, {
      e: e,
      t: t,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(),
      Tracker = function () {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);
    var e = _mods_pageTrack_js,
        t = _mods_jstracker_js;
    _minerva_ret = (e(), t);
    minerva_hook.afterFunction("null", this, {
      e: e,
      t: t,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }();

  minerva_hook.afterFunction("null", this, {
    _mods_util_js: _mods_util_js,
    _mods_makeRand_js: _mods_makeRand_js,
    _mods_parseStack_js: _mods_parseStack_js,
    _mods_timing_js: _mods_timing_js,
    _mods_logServer_js: _mods_logServer_js,
    _mods_sendImage_js: _mods_sendImage_js,
    _mods_parseException_js: _mods_parseException_js,
    _mods_battery_js: _mods_battery_js,
    _mods_cpu_js: _mods_cpu_js,
    _mods_getPerf_js: _mods_getPerf_js,
    _mods_getKISSYVersion_js: _mods_getKISSYVersion_js,
    _mods_getNick_js: _mods_getNick_js,
    _mods_getScreen_js: _mods_getScreen_js,
    _mods_getUA_js: _mods_getUA_js,
    _mods_push_js: _mods_push_js,
    _mods_sendPerf_js: _mods_sendPerf_js,
    _mods_jstracker_js: _mods_jstracker_js,
    _mods_handleError_js: _mods_handleError_js,
    _mods_pageTrack_js: _mods_pageTrack_js,
    Tracker: Tracker
  });
}();
/* 2017-02-21 16:34:49 */

!function e(t, a, n) {
  minerva_hook.beforeFunction("e", this, arguments);

  function r(i, s) {
    minerva_hook.beforeFunction("r", this, arguments);

    if (!a[i]) {
      if (!t[i]) {
        var l = "function" == typeof require && require;
        if (!s && l) return l(i, !0);
        if (o) return o(i, !0);
        throw new Error("Cannot find module '" + i + "'");
      }

      var u = a[i] = {
        exports: {}
      };
      t[i][0].call(u.exports, function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var a = t[i][1][e];
        _minerva_ret = r(a ? a : e);
        minerva_hook.afterFunction("null", this, {
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, u, u.exports, e, t, a, n);
    }

    _minerva_ret = a[i].exports;
    minerva_hook.afterFunction("r", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  for (var o = "function" == typeof require && require, i = 0; i < n.length; i++) r(n[i]);

  _minerva_ret = r;
  minerva_hook.afterFunction("e", this, {
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}({
  1: [function (require, module, exports) {
    minerva_hook.beforeFunction("null", this, arguments);
    !function () {
      minerva_hook.beforeFunction("null", this, arguments);

      function isStartWith(e, t) {
        minerva_hook.beforeFunction("isStartWith", this, arguments);
        _minerva_ret = 0 === e.indexOf(t);
        minerva_hook.afterFunction("isStartWith", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function isEndWith(e, t) {
        minerva_hook.beforeFunction("isEndWith", this, arguments);
        var a = e.length,
            n = t.length;
        _minerva_ret = a >= n && e.indexOf(t) == a - n;
        minerva_hook.afterFunction("isEndWith", this, {
          a: a,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function trim(e) {
        minerva_hook.beforeFunction("trim", this, arguments);
        _minerva_ret = isString(e) ? e.replace(/^\s+|\s+$/g, "") : "";
        minerva_hook.afterFunction("trim", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function tryToDecodeURIComponent(e, t) {
        minerva_hook.beforeFunction("tryToDecodeURIComponent", this, arguments);
        var a = t || "";
        if (e) try {
          a = decodeURIComponent(e);
        } catch (n) {}
        _minerva_ret = a;
        minerva_hook.afterFunction("tryToDecodeURIComponent", this, {
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function obj2param(e) {
        minerva_hook.beforeFunction("obj2param", this, arguments);
        var t,
            a,
            n = [];

        for (t in e) e.hasOwnProperty(t) && (a = "" + e[t], n.push(isStartWith(t, s_plain_obj) ? a : t + "=" + encodeURIComponent(a)));

        _minerva_ret = n.join("&");
        minerva_hook.afterFunction("obj2param", this, {
          t: t,
          a: a,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function param2arr(e) {
        minerva_hook.beforeFunction("param2arr", this, arguments);

        for (var t, a = e.split("&"), n = 0, r = a.length, o = []; r > n; n++) t = a[n].split("="), o.push([t.shift(), t.join("=")]);

        _minerva_ret = o;
        minerva_hook.afterFunction("param2arr", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function arr2param(e) {
        minerva_hook.beforeFunction("arr2param", this, arguments);
        var t,
            a,
            n,
            r = [],
            o = e.length;

        for (n = 0; o > n; n++) t = e[n][0], a = e[n][1], r.push(isStartWith(t, s_plain_obj) ? a : t + "=" + encodeURIComponent(a));

        _minerva_ret = r.join("&");
        minerva_hook.afterFunction("arr2param", this, {
          t: t,
          a: a,
          n: n,
          r: r,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function arr2obj(e) {
        minerva_hook.beforeFunction("arr2obj", this, arguments);
        var t,
            a,
            n,
            r = {},
            o = e.length;

        for (n = 0; o > n; n++) t = e[n][0], a = e[n][1], r[t] = a;

        _minerva_ret = r;
        minerva_hook.afterFunction("arr2obj", this, {
          t: t,
          a: a,
          n: n,
          r: r,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function isNumber(e) {
        minerva_hook.beforeFunction("isNumber", this, arguments);
        _minerva_ret = "number" == typeof e;
        minerva_hook.afterFunction("isNumber", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function isUnDefined(e) {
        minerva_hook.beforeFunction("isUnDefined", this, arguments);
        _minerva_ret = "undefined" == typeof e;
        minerva_hook.afterFunction("isUnDefined", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function isString(e) {
        minerva_hook.beforeFunction("isString", this, arguments);
        _minerva_ret = "string" == typeof e;
        minerva_hook.afterFunction("isString", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function isArray(e) {
        minerva_hook.beforeFunction("isArray", this, arguments);
        _minerva_ret = "[object Array]" === Object.prototype.toString.call(e);
        minerva_hook.afterFunction("isArray", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function tryToGetAttribute(e, t) {
        minerva_hook.beforeFunction("tryToGetAttribute", this, arguments);
        _minerva_ret = e && e.getAttribute ? e.getAttribute(t) || "" : "";
        minerva_hook.afterFunction("tryToGetAttribute", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function tryToGetHref(e) {
        minerva_hook.beforeFunction("tryToGetHref", this, arguments);
        var t;

        try {
          t = trim(e.getAttribute("href", 2));
        } catch (a) {}

        _minerva_ret = t || "";
        minerva_hook.afterFunction("tryToGetHref", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function getExParams() {
        minerva_hook.beforeFunction("getExParams", this, arguments);
        var e = doc.getElementById("tb-beacon-aplus");
        _minerva_ret = tryToGetAttribute(e, "exparams").replace(/&amp;/g, "&").replace(/\buserid=/, "uidaplus=");
        minerva_hook.afterFunction("getExParams", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function getMetaTags() {
        minerva_hook.beforeFunction("getMetaTags", this, arguments);
        _minerva_ret = (_head_node = _head_node || doc.getElementsByTagName("head")[0], _meta_nodes || (_head_node ? _meta_nodes = _head_node.getElementsByTagName("meta") : []));
        minerva_hook.afterFunction("getMetaTags", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function parseMetaContent(e, t) {
        minerva_hook.beforeFunction("parseMetaContent", this, arguments);
        var a,
            n,
            r,
            o = e.split(";"),
            i = o.length;

        for (a = 0; i > a; a++) n = o[a].split("="), r = trim(n[0]), r && (t[r] = tryToDecodeURIComponent(trim(n[1])));

        minerva_hook.afterFunction("parseMetaContent", this, {
          a: a,
          n: n,
          r: r,
          o: o,
          i: i
        });
      }

      function getCookie(e) {
        minerva_hook.beforeFunction("getCookie", this, arguments);
        var t = doc.cookie.match(new RegExp("\\b" + e + "=([^;]+)"));
        _minerva_ret = t ? t[1] : "";
        minerva_hook.afterFunction("getCookie", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function getSPMFromUrl(e) {
        minerva_hook.beforeFunction("getSPMFromUrl", this, arguments);
        var t,
            a = e.match(new RegExp("\\?.*spm=([\\w\\.\\-\\*/]+)"));
        _minerva_ret = a && (t = a[1]) && 4 == t.split(".").length ? t : null;
        minerva_hook.afterFunction("getSPMFromUrl", this, {
          t: t,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function makeCacheNum() {
        minerva_hook.beforeFunction("makeCacheNum", this, arguments);
        _minerva_ret = Math.floor(268435456 * Math.random()).toString(16);
        minerva_hook.afterFunction("makeCacheNum", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function makePVId() {
        minerva_hook.beforeFunction("makePVId", this, arguments);

        for (var e = "", t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; e.length < 6;) e += t.substr(Math.floor(62 * Math.random()), 1);

        _minerva_ret = (win[s_pv_id_key] = e, e);
        minerva_hook.afterFunction("makePVId", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function getMetaAtpData() {
        minerva_hook.beforeFunction("getMetaAtpData", this, arguments);
        var e,
            t,
            a,
            n = getMetaTags(),
            r = n.length;

        for (e = 0; r > e; e++) t = n[e], "atp-beacon" == tryToGetAttribute(t, "name") && (a = tryToGetAttribute(t, "content"), parseMetaContent(a, _atp_beacon_data));

        _atp_beacon_data_params = obj2param(_atp_beacon_data);
        minerva_hook.afterFunction("getMetaAtpData", this, {
          e: e,
          t: t,
          a: a,
          n: n,
          r: r,
          _atp_beacon_data_params: _atp_beacon_data_params
        });
      }

      function getMetaWaiting() {
        minerva_hook.beforeFunction("getMetaWaiting", this, arguments);
        _minerva_ret = util.getMetaCnt("aplus-waiting");
        minerva_hook.afterFunction("getMetaWaiting", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function isOnePage() {
        minerva_hook.beforeFunction("isOnePage", this, arguments);
        _minerva_ret = util.getMetaCnt("isonepage") || "-1";
        minerva_hook.afterFunction("isOnePage", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function makeChkSum(e) {
        minerva_hook.beforeFunction("makeChkSum", this, arguments);
        e = (e || "").split("#")[0].split("?")[0];

        var t = e.length,
            a = function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          var t,
              a = e.length,
              n = 0;

          for (t = 0; a > t; t++) n = 31 * n + e.charCodeAt(t);

          _minerva_ret = n;
          minerva_hook.afterFunction("null", this, {
            t: t,
            a: a,
            n: n,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

        _minerva_ret = t ? a(t + "#" + e.charCodeAt(t - 1)) : -1;
        minerva_hook.afterFunction("makeChkSum", this, {
          e: e,
          t: t,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function onDOMReady(e) {
        minerva_hook.beforeFunction("onDOMReady", this, arguments);
        var t = win.KISSY;
        t ? t.ready(e) : win.jQuery ? jQuery(doc).ready(e) : "complete" === doc.readyState ? e() : addEventListener(win, "load", e);
        minerva_hook.afterFunction("onDOMReady", this, {
          t: t
        });
      }

      function recordValInWindowName() {
        minerva_hook.beforeFunction("recordValInWindowName", this, arguments);
        var e, t;
        !is_in_iframe && is_https && (is_login_page && page_referrer ? (e = page_referrer, t = nameStorage.getItem(KEY.NAME_STORAGE.REFERRER_PV_ID)) : (e = page_url, t = pvid), nameStorage.setItem(KEY.NAME_STORAGE.REFERRER, e), nameStorage.setItem(KEY.NAME_STORAGE.REFERRER_PV_ID, t));
        minerva_hook.afterFunction("recordValInWindowName", this, {
          e: e,
          t: t
        });
      }

      function addEventListener(e, t, a) {
        minerva_hook.beforeFunction("addEventListener", this, arguments);
        e[onevent]((atta ? "on" : "") + t, function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          e = e || win.event;
          var t = e.target || e.srcElement;
          a(e, t);
          minerva_hook.afterFunction("null", this, {
            e: e,
            t: t
          });
        }, s_false);
        minerva_hook.afterFunction("addEventListener", this, {});
      }

      function atp_inIframeException() {
        minerva_hook.beforeFunction("atp_inIframeException", this, arguments);
        var e,
            t,
            a = [];

        for (e = 0, t = a.length; t > e; e++) if (-1 != pathname.indexOf(a[e])) return s_true;

        var n = /^https?:\/\/[\w\.]+\.(taobao|tmall|etao|tao123|juhuasuan)\.com/i;
        _minerva_ret = !n.test(page_referrer);
        minerva_hook.afterFunction("atp_inIframeException", this, {
          e: e,
          t: t,
          a: a,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function cleanParams(e) {
        minerva_hook.beforeFunction("cleanParams", this, arguments);
        var t,
            a,
            n,
            r,
            o = [],
            i = {};

        for (t = e.length - 1; t >= 0; t--) a = e[t], n = a[0], n != s_plain_obj && i.hasOwnProperty(n) || (r = a[1], ("aplus" == n || r || 0 === r) && (o.unshift([n, r]), i[n] = 1));

        _minerva_ret = o;
        minerva_hook.afterFunction("cleanParams", this, {
          t: t,
          a: a,
          n: n,
          r: r,
          o: o,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function cleanParamsForWindvane(e) {
        minerva_hook.beforeFunction("cleanParamsForWindvane", this, arguments);
        var t,
            a,
            n,
            r,
            o = [],
            i = {
          logtype: !0,
          cache: !0,
          scr: !0,
          "spm-cnt": !0
        };

        for (t = e.length - 1; t >= 0; t--) if (a = e[t], n = a[0], r = a[1], !(isStartWith(n, s_plain_obj) && !isStartWith(n, mkPlainKeyForExparams()) || i[n])) if (isStartWith(n, mkPlainKeyForExparams())) {
          var s = param2arr(r);
          if ("object" == typeof s && s.length > 0) for (var l = s.length - 1; l >= 0; l--) {
            var u = s[l];
            u && u[1] && o.unshift([u[0], u[1]]);
          }
        } else o.unshift([n, r]);

        _minerva_ret = o;
        minerva_hook.afterFunction("cleanParamsForWindvane", this, {
          t: t,
          a: a,
          n: n,
          r: r,
          o: o,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function tblogSend(e, t) {
        minerva_hook.beforeFunction("tblogSend", this, arguments);
        var a, n, r;

        if (t) {
          if (t = cleanParams(t), isWindVane) {
            r = cleanParamsForWindvane(t);
            var o,
                i = {},
                s = getSPMFromUrl(page_referrer),
                l = isOnePage(),
                u = l.split("|"),
                c = u[0],
                g = u[1] ? u[1] : "";

            try {
              n = arr2obj(r), o = JSON.stringify(n), "{}" == o && (o = "");
            } catch (d) {
              o = "";
            }

            i.functype = "2001", i.urlpagename = g, i.url = loc.href, i.spmcnt = (spm_ab || "0.0") + ".0.0", i.spmpre = s || "", i.lzsid = "", i.cna = acookie_cna || "", i.extendargs = o, i.isonepage = c, WindVane.call("WVTBUserTrack", "toUT", i), win[s_goldlog].windVaneData = i;
          }

          return win._ua_popLayer && t.push(["ispop", 1]), isWindVane && is_ali_app_tb || (a = goldlog.send(e, t)), a;
        }

        minerva_hook.afterFunction("tblogSend", this, {
          a: a,
          n: n,
          r: r
        });
      }

      function mkPlainKey() {
        minerva_hook.beforeFunction("mkPlainKey", this, arguments);
        _minerva_ret = s_plain_obj + Math.random();
        minerva_hook.afterFunction("mkPlainKey", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function mkPlainKeyForExparams() {
        minerva_hook.beforeFunction("mkPlainKeyForExparams", this, arguments);
        _minerva_ret = s_plain_obj + "exparams";
        minerva_hook.afterFunction("mkPlainKeyForExparams", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function getSPMProtocolFromMeta() {
        minerva_hook.beforeFunction("getSPMProtocolFromMeta", this, arguments);
        var e,
            t,
            a,
            n,
            r = getMetaTags();

        for (e = 0, t = r.length; t > e; e++) a = r[e], n = tryToGetAttribute(a, "name"), n == s_SPM_ATTR_NAME && (spm_protocol = tryToGetAttribute(a, s_SPM_DATA_PROTOCOL));

        minerva_hook.afterFunction("getSPMProtocolFromMeta", this, {
          e: e,
          t: t,
          a: a,
          n: n,
          r: r
        });
      }

      function getMetaSPMData(e) {
        minerva_hook.beforeFunction("getMetaSPMData", this, arguments);
        var t,
            a,
            n,
            r,
            o,
            i,
            s = getMetaTags();
        if (s) for (t = 0, a = s.length; a > t; t++) if (r = s[t], o = tryToGetAttribute(r, "name"), o == e) return page_global_spm_id_origin = tryToGetAttribute(r, "content"), page_global_spm_id_origin.indexOf(":") >= 0 && (n = page_global_spm_id_origin.split(":"), spm_protocol = "i" == n[0] ? "i" : "u", page_global_spm_id_origin = n[1]), i = tryToGetAttribute(r, s_SPM_DATA_PROTOCOL), i && (spm_protocol = "i" == i ? "i" : "u"), spm_ab = page_global_spm_id_origin, s_true;
        _minerva_ret = s_false;
        minerva_hook.afterFunction("getMetaSPMData", this, {
          t: t,
          a: a,
          n: n,
          r: r,
          o: o,
          i: i,
          s: s,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function ifAdd(e, t) {
        minerva_hook.beforeFunction("ifAdd", this, arguments);
        var a,
            n,
            r,
            o,
            i = t.length;

        for (a = 0; i > a; a++) n = t[a], r = n[0], o = n[1], o && e.push([r, o]);

        minerva_hook.afterFunction("ifAdd", this, {
          a: a,
          n: n,
          r: r,
          o: o,
          i: i
        });
      }

      function compareVersion(e, t) {
        minerva_hook.beforeFunction("compareVersion", this, arguments);
        e = e.toString().split("."), t = t.toString().split(".");

        for (var a = 0; a < e.length || a < t.length; a++) {
          var n = parseInt(e[a], 10),
              r = parseInt(t[a], 10);
          if (window.isNaN(n) && (n = 0), window.isNaN(r) && (r = 0), r > n) return -1;
          if (n > r) return 1;
        }

        _minerva_ret = 0;
        minerva_hook.afterFunction("compareVersion", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function callback(e, t) {
        minerva_hook.beforeFunction("callback", this, arguments);
        isAndroid && compareVersion(osVersion, "2.4.0") < 0 ? setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          e && e(t);
          minerva_hook.afterFunction("null", this, {});
        }, 1) : e && e(t);
        minerva_hook.afterFunction("callback", this, {});
      }

      function init_getGlobalSPMId() {
        minerva_hook.beforeFunction("init_getGlobalSPMId", this, arguments);
        if (!isUnDefined(spm_ab)) return spm_ab;
        if (spm_a && spm_b) return spm_a = spm_a.replace(/^{(\w+)}$/g, "$1"), spm_b = spm_b.replace(/^{(\w+)}$/g, "$1"), wh_in_page = s_true, spm_ab = spm_a + "." + spm_b, getSPMProtocolFromMeta(), goldlog.spm_ab = [spm_a, spm_b], spm_ab;
        var e;
        if (getMetaSPMData(s_SPM_ATTR_NAME) || getMetaSPMData("spm-id"), spm_ab = spm_ab || default_ab, !spm_ab) return spm_ab;
        var t,
            a = doc.getElementsByTagName("body");
        _minerva_ret = (e = spm_ab.split("."), goldlog.spm_ab = e, a = a && a.length ? a[0] : null, a && (t = tryToGetAttribute(a, s_SPM_ATTR_NAME), t ? (spm_ab = e[0] + "." + t, goldlog.spm_ab = [e[0], t]) : 1 == e.length && (spm_ab = default_ab)), spm_ab);
        minerva_hook.afterFunction("init_getGlobalSPMId", this, {
          e: e,
          t: t,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function addScript(e, t) {
        minerva_hook.beforeFunction("addScript", this, arguments);
        var a = "script",
            n = doc.createElement(a);
        n.type = "text/javascript", n.async = !0, n.src = is_https ? t || e : e;
        var r = doc.getElementsByTagName(a)[0];
        r.parentNode.insertBefore(n, r);
        minerva_hook.afterFunction("addScript", this, {
          a: a,
          n: n,
          r: r
        });
      }

      function init_windVane() {
        minerva_hook.beforeFunction("init_windVane", this, arguments);
        var WV_Core = {
          call: function (e, t, a, n, r, o) {
            minerva_hook.beforeFunction("null", this, arguments);
            var i, s;
            lib.promise && ("function" == typeof lib.promise.deferred ? s = lib.promise.deferred() : "function" == typeof lib.promise.defer && (s = lib.promise.defer())), i = WV_Private.getSid();
            var l = {
              success: n,
              failure: r,
              deferred: s
            };

            if (o > 0 && (l.timeout = setTimeout(function () {
              minerva_hook.beforeFunction("null", this, arguments);
              WV_Core.onFailure(i, {
                ret: "TIMEOUT"
              });
              minerva_hook.afterFunction("null", this, {});
            }, o)), a.sid = i, WV_Private.registerCall(i, l), isAndroid ? compareVersion(wvVersion, "2.7.0") >= 0 ? WV_Private.callMethodByPrompt(e, t, WV_Private.buildParam(a), i + "") : WindVane_Native && WindVane_Native.callMethod && WindVane_Native.callMethod(e, t, WV_Private.buildParam(a), i + "") : isIOS && WV_Private.callMethodByIframe(e, t, WV_Private.buildParam(a), i + ""), s) {
              if ("function" == typeof lib.promise.deferred) return s.promise();
              if ("function" == typeof lib.promise.defer) return s.promise;
            }

            minerva_hook.afterFunction("null", this, {
              i: i,
              s: s,
              l: l
            });
          },
          fireEvent: function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            var a = doc.createEvent("HTMLEvents");
            a.initEvent(e, !1, !0), a.param = WV_Private.parseParam(t), doc.dispatchEvent(a);
            minerva_hook.afterFunction("null", this, {
              a: a
            });
          },
          getParam: function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = WV_Private.params[PARAM_PREFIX + e] || "";
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          },
          onSuccess: function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            var a = WV_Private.unregisterCall(e),
                n = a.success,
                r = a.deferred,
                o = a.timeout;
            o && clearTimeout(o);
            var i = WV_Private.parseParam(t);
            callback(function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              n && n(e), r && r.resolve(e);
              minerva_hook.afterFunction("null", this, {});
            }, i.value || i), WV_Private.onComplete(e);
            minerva_hook.afterFunction("null", this, {
              a: a,
              n: n,
              r: r,
              o: o,
              i: i
            });
          },
          onFailure: function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            var a = WV_Private.unregisterCall(e),
                n = a.failure,
                r = a.deferred,
                o = a.timeout;
            o && clearTimeout(o);
            var i = WV_Private.parseParam(t);
            callback(function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              n && n(e), r && r.reject(e);
              minerva_hook.afterFunction("null", this, {});
            }, i), WV_Private.onComplete(e);
            minerva_hook.afterFunction("null", this, {
              a: a,
              n: n,
              r: r,
              o: o,
              i: i
            });
          }
        },
            WV_Private = {
          params: {},
          buildParam: function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = e && "object" == typeof e ? JSON.stringify(e) : e || "";
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          },
          parseParam: function (str) {
            minerva_hook.beforeFunction("null", this, arguments);
            var obj;
            if (str && "string" == typeof str) try {
              obj = JSON.parse(str);
            } catch (e) {
              obj = eval("(" + str + ")");
            } else obj = str || {};
            _minerva_ret = obj;
            minerva_hook.afterFunction("null", this, {
              obj: obj,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          },
          getSid: function () {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = (sidBase + inc++) % 65536 + "";
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          },
          registerCall: function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            callbackMap[e] = t;
            minerva_hook.afterFunction("null", this, {});
          },
          unregisterCall: function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            var t = {};
            _minerva_ret = (callbackMap[e] && (t = callbackMap[e], delete callbackMap[e]), t);
            minerva_hook.afterFunction("null", this, {
              t: t,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          },
          useIframe: function (e, t) {
            minerva_hook.beforeFunction("null", this, arguments);
            var a = IFRAME_PREFIX + e,
                n = iframePool.pop();
            n || (n = doc.createElement("iframe"), n.setAttribute("frameborder", "0"), n.style.cssText = "width:0;height:0;border:0;display:none;"), n.setAttribute("id", a), n.setAttribute("src", t), n.parentNode || setTimeout(function () {
              minerva_hook.beforeFunction("null", this, arguments);
              doc.body.appendChild(n);
              minerva_hook.afterFunction("null", this, {});
            }, 5);
            minerva_hook.afterFunction("null", this, {
              a: a,
              n: n
            });
          },
          retrieveIframe: function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            var t = IFRAME_PREFIX + e,
                a = doc.querySelector("#" + t);
            iframePool.length >= iframeLimit ? doc.body.removeChild(a) : iframePool.push(a);
            minerva_hook.afterFunction("null", this, {
              t: t,
              a: a
            });
          },
          callMethodByIframe: function (e, t, a, n) {
            minerva_hook.beforeFunction("null", this, arguments);
            var r = {
              "selfParam=1": 1,
              sid: this.parseParam(a).sid
            };
            r = this.buildParam(r);
            var o = LOCAL_PROTOCOL + "://" + e + ":" + n + "/" + t + "?" + r;
            this.params[PARAM_PREFIX + n] = a, this.useIframe(n, o);
            minerva_hook.afterFunction("null", this, {
              r: r,
              r: r,
              o: o
            });
          },
          callMethodByPrompt: function (e, t, a, n) {
            minerva_hook.beforeFunction("null", this, arguments);
            var r = LOCAL_PROTOCOL + "://" + e + ":" + n + "/" + t + "?" + a,
                o = WV_PROTOCOL + ":";
            this.params[PARAM_PREFIX + n] = a, window.prompt(r, o);
            minerva_hook.afterFunction("null", this, {
              r: r,
              o: o
            });
          },
          onComplete: function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            isIOS && this.retrieveIframe(e), delete this.params[PARAM_PREFIX + e];
            minerva_hook.afterFunction("null", this, {});
          }
        };

        for (var key in WV_Core) win[s_goldlog][key] = WindVane[key] = WV_Core[key];

        minerva_hook.afterFunction("init_windVane", this, {
          WV_Core: WV_Core,
          WV_Private: WV_Private
        });
      }

      function sendPV(e) {
        minerva_hook.beforeFunction("sendPV", this, arguments);
        var t,
            a,
            n = getSPMFromUrl(page_url),
            r = getSPMFromUrl(page_referrer),
            o = getCookie("tracknick"),
            i = getExParams();

        if (i || (i = "aplus"), loc_hash && 0 === loc_hash.indexOf("#") && (loc_hash = loc_hash.substr(1)), (!is_in_iframe || atp_inIframeException()) && (a = 1 == waitingMeta ? 7 : VERSION, t = [[mkPlainKey(), "title=" + escape(doc.title)], ["pre", page_referrer], ["cache", makeCacheNum()], ["scr", screen.width + "x" + screen.height], ["isbeta", a], ["lver", goldlog.lver]], acookie_cna && t.push([mkPlainKey(), "cna=" + acookie_cna]), o && t.push([mkPlainKey(), "nick=" + o]), t.push(["spm-cnt", (spm_ab || "0.0") + ".0.0"]), ifAdd(t, [["spm-url", n], ["spm-pre", r]]), tblog_data = tblog_data.concat(t), 7 == a ? setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          goldlog.launch({
            isWait: !0
          });
          minerva_hook.afterFunction("null", this, {});
        }, 6e3) : (tblog_data.push([mkPlainKeyForExparams(), i]), ifAdd(tblog_data, [["urlokey", loc_hash], ["aunbid", cookie_unb]]), e || ifAdd(tblog_data, [["auto", "0"]]), win.g_aplus_pv_req = tblogSend(tblog_beacon_url, tblog_data))), is_in_iframe) {
          getMetaAtpData();
          var s,
              l = _atp_beacon_data.on,
              u = "1" == l ? "//ac.mmstat.com/y.gif" : tblog_beacon_url;
          "1" != l && "2" != l || !(s = _atp_beacon_data.chksum) || s !== makeChkSum(page_url).toString() || tblogSend(u, tblog_data);
        }

        addEventListener(win, "beforeunload", function () {
          minerva_hook.beforeFunction("null", this, arguments);
          recordValInWindowName();
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("sendPV", this, {
          t: t,
          a: a,
          n: n,
          r: r,
          o: o,
          i: i
        });
      }

      var win = window,
          doc = document,
          _k = "g_tb_aplus_loaded",
          _launch = "g_tb_aplus_launch";
      if (!doc.getElementsByTagName("body").length) return void setTimeout(arguments.callee, 50);

      if (!win[_k]) {
        win[_k] = 1;

        var personality = require("./lib/personality/index.js"),
            windvaneParams = personality.windvaneParams,
            util = require("./lib/util"),
            s_goldlog = "goldlog",
            goldlog = win[s_goldlog] || {};

        win[s_goldlog] = goldlog;

        var KEY = {
          NAME_STORAGE: {
            REFERRER: "wm_referrer",
            REFERRER_PV_ID: "refer_pv_id"
          }
        },
            VERSION = "9",
            loc = location,
            is_https = "https:" == loc.protocol,
            is_in_iframe = parent !== win.self,
            pathname = loc.pathname,
            use_protocol = is_https ? "https://" : "http://",
            tblog_beacon_base = use_protocol + "log.mmstat.com/",
            tblog_beacon_url = tblog_beacon_base + "m.gif",
            tblog_data = [["logtype", is_in_iframe ? 0 : 1]],
            page_url = loc.href,
            page_url_constant = page_url.replace(/[\?#].*/g, ""),
            s_pv_id_key = "g_aplus_pv_id",
            pvid = makePVId(),
            loc_hash = loc.hash,
            ua = navigator.userAgent,
            lib = win.lib || (win.lib = {}),
            isIOS = /iPhone|iPad|iPod/i.test(ua),
            isAndroid = /Android/i.test(ua),
            isWindVane = /WindVane/i.test(ua),
            osVersion = ua.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i),
            wvVersion = ua.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),
            WindVane = {},
            WindVane_Native = win.WindVane_Native,
            callbackMap = {},
            inc = 1,
            iframePool = [],
            iframeLimit = 3,
            LOCAL_PROTOCOL = "hybrid",
            WV_PROTOCOL = "wv_hybrid",
            IFRAME_PREFIX = "iframe_",
            PARAM_PREFIX = "param_",
            page_referrer = doc.referrer,
            sidBase = Math.floor(65536 * Math.random()),
            is_login_page = is_https && (page_url.indexOf("login.m.taobao.com") >= 0 || page_url.indexOf("login.m.tmall.com") >= 0),
            atta = !!doc.attachEvent,
            s_attachEvent = "attachEvent",
            s_addEventListener = "addEventListener",
            onevent = atta ? s_attachEvent : s_addEventListener,
            s_false = !1,
            s_true = !0,
            s_plain_obj = "::-plain-::",
            refer_pv_id,
            _head_node,
            _meta_nodes,
            acookie_cna = getCookie("cna"),
            cookie_unb = getCookie("unb"),
            s_SPM_ATTR_NAME = "data-spm",
            s_SPM_DATA_PROTOCOL = "data-spm-protocol",
            wh_in_page = s_false,
            default_ab = "0.0",
            page_global_spm_id_origin,
            spm_protocol,
            spm_a = win._SPM_a,
            spm_b = win._SPM_b,
            spm_ab,
            _microscope_data = {},
            _atp_beacon_data = {},
            _atp_beacon_data_params,
            waitingMeta = getMetaWaiting(),
            m_log = require("./lib/log"),
            is_ali_app_tb,
            matched;

        (matched = ua.match(/AliApp\(([A-Z\-]+)\/([\d\.]+)\)/i)) && (is_ali_app_tb = "TB" == matched[1]);

        var Tracker = require("./lib/monitor/tracker.js"),
            tracker = new Tracker({
          ratio: 5,
          logkey: "/aplus.99.4",
          chksum: "H46747616"
        }),
            nameStorage = function () {
          minerva_hook.beforeFunction("null", this, arguments);

          function e() {
            minerva_hook.beforeFunction("e", this, arguments);
            var e,
                t = [],
                o = !0;

            for (var c in g) g.hasOwnProperty(c) && (o = !1, e = g[c] || "", t.push(u(c) + s + u(e)));

            a.name = o ? n : r + u(n) + i + t.join(l);
            minerva_hook.afterFunction("e", this, {
              e: e,
              t: t,
              o: o
            });
          }

          function t(e, t, a) {
            minerva_hook.beforeFunction("t", this, arguments);
            e && (e.addEventListener ? e.addEventListener(t, a, !1) : e.attachEvent && e.attachEvent("on" + t, function (t) {
              minerva_hook.beforeFunction("null", this, arguments);
              a.call(e, t);
              minerva_hook.afterFunction("null", this, {});
            }));
            minerva_hook.afterFunction("t", this, {});
          }

          var a = window;
          if (a.nameStorage) return a.nameStorage;
          var n,
              r = "nameStorage:",
              o = /^([^=]+)(?:=(.*))?$/,
              i = "?",
              s = "=",
              l = "&",
              u = encodeURIComponent,
              c = decodeURIComponent,
              g = {},
              d = {};
          _minerva_ret = (function (e) {
            minerva_hook.beforeFunction("null", this, arguments);

            if (e && 0 === e.indexOf(r)) {
              var t = e.split(/[:?]/);
              t.shift(), n = c(t.shift()) || "";

              for (var a, i, s, u = t.join(""), d = u.split(l), p = 0, _ = d.length; _ > p; p++) a = d[p].match(o), a && a[1] && (i = c(a[1]), s = c(a[2]) || "", g[i] = s);
            } else n = e || "";

            minerva_hook.afterFunction("null", this, {});
          }(a.name), d.setItem = function (t, a) {
            minerva_hook.beforeFunction("null", this, arguments);
            t && "undefined" != typeof a && (g[t] = String(a), e());
            minerva_hook.afterFunction("null", this, {});
          }, d.getItem = function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = g.hasOwnProperty(e) ? g[e] : null;
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }, d.removeItem = function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            g.hasOwnProperty(t) && (g[t] = null, delete g[t], e());
            minerva_hook.afterFunction("null", this, {});
          }, d.clear = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            g = {}, e();
            minerva_hook.afterFunction("null", this, {});
          }, d.valueOf = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = g;
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }, d.toString = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            var e = a.name;
            _minerva_ret = 0 === e.indexOf(r) ? e : r + e;
            minerva_hook.afterFunction("null", this, {
              e: e,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          }, t(a, "beforeunload", function () {
            minerva_hook.beforeFunction("null", this, arguments);
            e();
            minerva_hook.afterFunction("null", this, {});
          }), d);
          minerva_hook.afterFunction("null", this, {
            a: a,
            n: n,
            r: r,
            o: o,
            i: i,
            s: s,
            l: l,
            u: u,
            c: c,
            g: g,
            d: d,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }();

        page_referrer = doc.referrer || nameStorage.getItem(KEY.NAME_STORAGE.REFERRER) || "", osVersion = osVersion ? (osVersion[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0", wvVersion = wvVersion ? (wvVersion[1] || "0.0.0").replace(/\_/g, ".") : "0.0.0", goldlog.lver = "0.4.8", goldlog.is_wap = 1, goldlog.version = VERSION, goldlog.referrer = page_referrer, goldlog._d = {}, goldlog._microscope_data = _microscope_data, goldlog.getCookie = getCookie, goldlog.tryToGetAttribute = tryToGetAttribute, goldlog.tryToGetHref = tryToGetHref, goldlog.isNumber = isNumber, goldlog.nameStorage = nameStorage, goldlog.launch = function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);

          if (!win[_launch] || t) {
            win[_launch] = s_true;
            var a,
                n,
                r,
                o,
                i = getExParams(),
                s = 1 == waitingMeta,
                l = tblog_data.slice(0);
            e && e.isWait && s ? (r = 7, delete e.isWait) : s ? r = 8 : s || (r = 5);

            for (a in e) e.hasOwnProperty(a) && (n = e[a]) && l.push([a, n]);

            var u = makeCacheNum();

            if (m_log.updateKey(l, "cache", u), l.push(["isbeta", r]), t || l.push([mkPlainKeyForExparams(), i]), ifAdd(l, [["urlokey", loc_hash], ["aunbid", cookie_unb]]), t) {
              l.push(["isbeta", r]), l.push([s_plain_obj, t.gokey]), m_log.updateSPMCnt(l, t.page_id), m_log.updateSPMUrl(l), o = t.page_id;
              var c = goldlog.spm_ab ? goldlog.spm_ab[1] : "";
              c && (c = o ? c.split("/")[0] + "/" + o : c.split("/")[0], spm_ab = goldlog.spm_ab[0] + "." + c, goldlog.spm_ab[1] = c);
            }

            page_url != location.href && (page_referrer = page_url, page_url = location.href), t && t.referrer && (page_referrer = t.referrer), page_referrer && m_log.updateKey(l, "pre", page_referrer), goldlog.req = win.g_aplus_pv_req = tblogSend(tblog_beacon_url, l);
          }

          minerva_hook.afterFunction("null", this, {});
        }, goldlog.send = function (e, t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var a,
              n = new Image(),
              r = "_img_" + Math.random(),
              o = -1 == e.indexOf("?") ? "?" : "&",
              i = t ? isArray(t) ? arr2param(t) : obj2param(t) : "";
          _minerva_ret = (win[r] = n, n.onload = n.onerror = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            win[r] = null;
            minerva_hook.afterFunction("null", this, {});
          }, n.src = a = i ? e + o + i : e, n = null, a);
          minerva_hook.afterFunction("null", this, {
            a: a,
            n: n,
            r: r,
            o: o,
            i: i,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

        var isSingleSendLog = function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = !(!isWindVane || "function" != typeof WindVane.call || !windvaneParams.isSingleSendLog(e));
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

        goldlog.record = function (e, t, a, n) {
          minerva_hook.beforeFunction("null", this, arguments);
          n = arguments[3] || "";
          var r,
              o,
              i = "?",
              s = s_false,
              l = "//wgo.mmstat.com/",
              u = "//wgm.mmstat.com/",
              c = makeCacheNum(),
              g = "",
              d = (spm_ab || "0.0") + ".0.0";
          if ("ac" == e) r = "//ac.mmstat.com/1.gif", s = isStartWith(n, "A") && n.substring(1) == makeChkSum(t);else if (isStartWith(e, "/")) s = isStartWith(n, "H") && n.substring(1) == makeChkSum(e), r = l + e.substring(1), o = 2, g += "&spm-cnt=" + d;else if (isEndWith(e, ".gif")) r = tblog_beacon_base + e;else {
            if ("aplus" != e) return s_false;
            r = u + "mx.gif", o = 1;
          }
          if (!s && "%" != n && makeChkSum(page_url_constant) != n) return s_false;
          a = (a || "") + (loc_hash ? "&urlokey=" + encodeURIComponent(loc_hash) : "") + (cookie_unb ? "&aunbid=" + encodeURIComponent(cookie_unb) : ""), 0 === a.indexOf("&") && (a = a.substr(1)), r += i + "cache=" + c + "&gmkey=" + encodeURIComponent(t) + "&gokey=" + encodeURIComponent(a) + "&cna=" + acookie_cna + "&isbeta=" + VERSION + g, o && (r += "&logtype=" + o);

          var p = isSingleSendLog({
            logkey: e,
            gmkey: t,
            spm_ab: spm_ab
          }),
              _ = {
            gmkey: t,
            gokey: a,
            isbeta: VERSION
          },
              m = {},
              f = function (a) {
            minerva_hook.beforeFunction("null", this, arguments);
            var n = isOnePage(),
                r = n.split("|"),
                o = r[0],
                i = r[1] ? r[1] : "",
                s = _;
            p && (s._is_g2u_ = 1);

            try {
              s.version = "v20161028", s = JSON.stringify(s), "{}" == s && (s = "");
            } catch (l) {
              s = "";
            }

            m.functype = windvaneParams.getFunctypeValue({
              logkey: e,
              gmkey: t,
              spm_ab: goldlog.spm_ab
            }), m.logkey = e, m.logkeyargs = s, m.urlpagename = i, m.url = loc.href, m.cna = acookie_cna || "", m.extendargs = "", m.isonepage = o, WindVane.call("WVTBUserTrack", "toUT", m, function () {
              minerva_hook.beforeFunction("null", this, arguments);
              a({
                isSuccess: !0
              });
              minerva_hook.afterFunction("null", this, {});
            }, function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              a({
                isSuccess: !1,
                msg: e
              });
              minerva_hook.afterFunction("null", this, {});
            }, 5e3);
            minerva_hook.afterFunction("null", this, {
              n: n,
              r: r,
              o: o,
              i: i,
              s: s
            });
          };

          _minerva_ret = (isWindVane && "function" == typeof WindVane.call && !/^\/aplus\.99\.(\d)+$/.test(e) && f(function (e) {
            minerva_hook.beforeFunction("null", this, arguments);
            e && !e.isSuccess && tracker.run({
              isSingleSend: p,
              userAgent: navigator.userAgent,
              url: location.href,
              windVaneData: m
            });
            minerva_hook.afterFunction("null", this, {});
          }), p ? goldlog.useDebug ? m : r : goldlog.send(r));
          minerva_hook.afterFunction("null", this, {
            n: n,
            r: r,
            o: o,
            i: i,
            s: s,
            l: l,
            u: u,
            c: c,
            g: g,
            d: d,
            p: p,
            _: _,
            m: m,
            f: f,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }, goldlog.sendPV = m_log.sendPV, win[s_goldlog] = goldlog, init_getGlobalSPMId(), isWindVane && init_windVane();

        var etag = require("./lib/etag");

        etag.init(acookie_cna), tblogSend = etag.inject(tblogSend, mkPlainKey), sendPV(!0);
      }

      minerva_hook.afterFunction("null", this, {
        win: win,
        doc: doc,
        _k: _k,
        _launch: _launch
      });
    }();
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/etag": 2,
    "./lib/log": 3,
    "./lib/monitor/tracker.js": 4,
    "./lib/personality/index.js": 5,
    "./lib/util": 8
  }],
  2: [function (e, t, a) {
    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, t) {
      minerva_hook.beforeFunction("n", this, arguments);
      var a = new Date();
      a.setTime(a.getTime() + 31536e7), t += "; expires=" + a.toUTCString(), t += "; domain=" + o.getDomain(location.hostname), t += "; path=/", i.cookie = e + "=" + t;
      minerva_hook.afterFunction("n", this, {
        a: a
      });
    }

    function r(e, t) {
      minerva_hook.beforeFunction("r", this, arguments);

      function a(e) {
        minerva_hook.beforeFunction("a", this, arguments);
        n.onreadystatechange = n.onload = n.onerror = null, n = null, t(e);
        minerva_hook.afterFunction("a", this, {});
      }

      var n = i.createElement("script");
      if (n.async = !0, "onload" in n) n.onload = a;else {
        var r = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          /loaded|complete/.test(n.readyState) && a();
          minerva_hook.afterFunction("null", this, {});
        };

        n.onreadystatechange = r, r();
      }
      n.onerror = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        a(1);
        minerva_hook.afterFunction("null", this, {});
      }, n.src = e, s.appendChild(n);
      minerva_hook.afterFunction("r", this, {
        n: n
      });
    }

    var o = e("./tld"),
        i = document,
        s = i.head || i.getElementsByTagName("head")[0],
        l = 0,
        u = -1,
        c = "",
        g = !1;
    t.exports = {
      init: function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        if (e) return void (l = 1);
        var t = null;
        g = !0, r("https://log.mmstat.com/eg.js", function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          e && (u = -3), g && (g = !1, goldlog.Etag && (c = goldlog.Etag, n("cna", c)), "undefined" != typeof goldlog.stag && (u = goldlog.stag), clearTimeout(t));
          minerva_hook.afterFunction("null", this, {});
        }), t = setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          g = !1, u = -2;
          minerva_hook.afterFunction("null", this, {});
        }, 1e3);
        minerva_hook.afterFunction("null", this, {
          t: t
        });
      },
      inject: function (e, t, a) {
        minerva_hook.beforeFunction("null", this, arguments);

        var n = function (r, o) {
          minerva_hook.beforeFunction("null", this, arguments);
          _minerva_ret = o ? !l && g ? (setTimeout(function () {
            minerva_hook.beforeFunction("null", this, arguments);
            n(r, o);
            minerva_hook.afterFunction("null", this, {});
          }, 50), r) : (o.push(["tag", l]), o.push(["stag", u]), !l && c && o.unshift([t(), "cna=" + c]), e(r, o, a)) : r;
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }
    };
    minerva_hook.afterFunction("null", this, {
      o: o,
      i: i,
      s: s,
      l: l,
      u: u,
      c: c,
      g: g
    });
  }, {
    "./tld": 7
  }],
  3: [function (e, t, a) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    function n() {
      minerva_hook.beforeFunction("n", this, arguments);
      var e = l.getMetaCnt("aplus-ajax"),
          t = goldlog.spm_ab;
      _minerva_ret = t && l.makeChkSum([t[0], (t[1] || "").split("/")[0]].join(".")) == e ? !0 : l.makeChkSum(location.href) == e ? !0 : !1;
      minerva_hook.afterFunction("n", this, {
        e: e,
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e, t, a) {
      minerva_hook.beforeFunction("r", this, arguments);
      i(e, "spm-cnt", function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = e.split(".");
        _minerva_ret = (t ? n[1] = n[1].split("/")[0] + "/" + t : n[1] = n[1].split("/")[0], a && (n[4] = a), n.join("."));
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      });
      minerva_hook.afterFunction("r", this, {});
    }

    function o(e, t) {
      minerva_hook.beforeFunction("o", this, arguments);
      var a = g_SPM._current_spm;
      a && i(e, "spm-url", function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = [a.a, a.b, a.c, a.d].join(".") + (t ? "." + t : "");
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, "spm-cnt");
      minerva_hook.afterFunction("o", this, {
        a: a
      });
    }

    function i(e, t, a, n) {
      minerva_hook.beforeFunction("i", this, arguments);
      var r,
          o,
          i = e.length,
          s = -1,
          l = "function" == typeof a;

      for (r = 0; i > r; r++) {
        if (o = e[r], o[0] === t) return void (l ? o[1] = a(o[1]) : o[1] = a);
        n && o[0] === n && (s = r);
      }

      n && (l && (a = a()), s > -1 ? e.splice(s, 0, [t, a]) : e.push([t, a]));
      minerva_hook.afterFunction("i", this, {
        r: r,
        o: o,
        i: i,
        s: s,
        l: l
      });
    }

    function s(e) {
      minerva_hook.beforeFunction("s", this, arguments);
      n() && goldlog.launch({}, e || {});
      minerva_hook.afterFunction("s", this, {});
    }

    var l = e("./util");
    t.exports = {
      sendPV: s,
      checkIfSendPV: n,
      updateSPMCnt: r,
      updateSPMUrl: o,
      updateKey: i
    };
    minerva_hook.afterFunction("null", this, {
      l: l
    });
  }, {
    "./util": 8
  }],
  4: [function (e, t, a) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    var n = {
      ratio: 10,
      logkey: "/aplus.99.3",
      gmkey: "",
      chksum: "H46747615"
    },
        r = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      e && "object" == typeof e || (e = n), this.opts = e, this.opts.ratio = e.ratio || n.ratio, this.opts.logkey = e.logkey || n.logkey, this.opts.gmkey = e.gmkey || n.gmkey, this.opts.chksum = e.chksum || n.chksum;
      minerva_hook.afterFunction("null", this, {});
    },
        o = r.prototype;

    o.getRandom = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = Math.floor(100 * Math.random()) + 1;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, o.run = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t, a, n;

      try {
        t = this.opts, n = this.getRandom(), "object" == typeof e ? (e.lver = goldlog.lver, a = JSON.stringify(e)) : (e += "&lver=" + goldlog.lver, a = e);
      } catch (r) {
        a += "&trackerJsError=" + r.message;
      } finally {
        try {
          goldlog && "function" == typeof goldlog.record && n <= t.ratio && goldlog.record(t.logkey, t.gmkey, a, t.chksum);
        } catch (o) {}
      }

      minerva_hook.afterFunction("null", this, {
        t: t,
        a: a,
        n: n
      });
    }, t.exports = r;
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r,
      o: o
    });
  }, {}],
  5: [function (e, t, a) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);
    a.windvaneParams = e("./windvaneParams.js");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./windvaneParams.js": 6
  }],
  6: [function (e, t, a) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    var n = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      var t = e.logkey.toLowerCase();
      0 === t.indexOf("/") && (t = t.substr(1));
      var a = e.gmkey.toUpperCase();

      switch (a) {
        case "EXP":
          return "2201";

        case "CLK":
          return "2101";

        case "SLD":
          return "19999";

        case "OTHER":
        default:
          return "19999";
      }

      minerva_hook.afterFunction("null", this, {
        t: t,
        a: a
      });
    },
        r = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var e = navigator.userAgent, t = [{
        matchValue: "5.11.7",
        matchRule: e.match(/AliApp\(TB\/(\d+[._]\d+[._]\d+)/i)
      }, {
        matchValue: "5.24.1",
        matchRule: e.match(/AliApp\(TM\/(\d+[._]\d+[._]\d+)/i)
      }], a = 0; a < t.length; a++) {
        var n = t[a].matchRule,
            r = t[a].matchValue;
        if (n && 2 === n.length && n[1] >= r) return !0;
      }

      _minerva_ret = !1;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    a.isSingleSendLog = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = e && /^\/aplus\.99\.(\d)+$/.test(e.logkey) ? !1 : !!(e && e.logkey && e.gmkey && r() === !0);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, a.getFunctypeValue = function (e) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = a.isSingleSendLog(e) ? n(e) : "2101";
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };
    minerva_hook.afterFunction("null", this, {
      n: n,
      r: r
    });
  }, {}],
  7: [function (e, t, a) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    function n(e) {
      minerva_hook.beforeFunction("n", this, arguments);
      var t,
          a = e.split("."),
          n = a.length;
      _minerva_ret = (t = r.any(o, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = r.isEndWith(e, t);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }) ? a.slice(n - 3) : a.slice(n - 2), t.join("."));
      minerva_hook.afterFunction("n", this, {
        t: t,
        a: a,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var r = e("./util"),
        o = [".com.cn", ".net.cn"];
    a.getDomain = n;
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o
    });
  }, {
    "./util": 8
  }],
  8: [function (e, t, a) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    function n(e, t) {
      minerva_hook.beforeFunction("n", this, arguments);
      _minerva_ret = e && e.getAttribute ? e.getAttribute(t) || "" : "";
      minerva_hook.afterFunction("n", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function r(e) {
      minerva_hook.beforeFunction("r", this, arguments);
      var t = document;
      _minerva_ret = (p = p || t.getElementsByTagName("head")[0], _ && !e ? _ : p ? _ = p.getElementsByTagName("meta") : []);
      minerva_hook.afterFunction("r", this, {
        t: t,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function o(e) {
      minerva_hook.beforeFunction("o", this, arguments);
      var t,
          a,
          o,
          i = r(),
          s = i.length;

      for (t = 0; s > t; t++) a = i[t], n(a, "name") === e && (o = n(a, "content"));

      _minerva_ret = o || "";
      minerva_hook.afterFunction("o", this, {
        t: t,
        a: a,
        o: o,
        i: i,
        s: s,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function i(e) {
      minerva_hook.beforeFunction("i", this, arguments);
      e = (e || "").split("#")[0].split("?")[0];

      var t = e.length,
          a = function (e) {
        minerva_hook.beforeFunction("null", this, arguments);
        var t,
            a = e.length,
            n = 0;

        for (t = 0; a > t; t++) n = 31 * n + e.charCodeAt(t);

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          t: t,
          a: a,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      _minerva_ret = t ? a(t + "#" + e.charCodeAt(t - 1)) : -1;
      minerva_hook.afterFunction("i", this, {
        e: e,
        t: t,
        a: a,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function s(e, t) {
      minerva_hook.beforeFunction("s", this, arguments);
      _minerva_ret = e.indexOf(t) > -1;
      minerva_hook.afterFunction("s", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function l(e, t) {
      minerva_hook.beforeFunction("l", this, arguments);
      _minerva_ret = 0 === e.indexOf(t);
      minerva_hook.afterFunction("l", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function u(e, t) {
      minerva_hook.beforeFunction("u", this, arguments);
      var a = e.length,
          n = t.length;
      _minerva_ret = a >= n && e.indexOf(t) == a - n;
      minerva_hook.afterFunction("u", this, {
        a: a,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function c(e) {
      minerva_hook.beforeFunction("c", this, arguments);
      _minerva_ret = "function" == typeof e;
      minerva_hook.afterFunction("c", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function g(e) {
      minerva_hook.beforeFunction("g", this, arguments);
      _minerva_ret = "string" == typeof e ? e.replace(/^\s+|\s+$/g, "") : "";
      minerva_hook.afterFunction("g", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    function d(e, t) {
      minerva_hook.beforeFunction("d", this, arguments);
      var a,
          n = e.length;

      for (a = 0; n > a; a++) if (t(e[a])) return !0;

      _minerva_ret = !1;
      minerva_hook.afterFunction("d", this, {
        a: a,
        n: n,
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }

    var p, _;

    a.tryToGetAttribute = n, a.getMetaTags = r, a.getMetaCnt = o, a.makeChkSum = i, a.isContain = s, a.isStartWith = l, a.isEndWith = u, a.isFunction = c, a.trim = g, a.rndInt32 = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = Math.round(2147483647 * Math.random());
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, a.any = d;
    minerva_hook.afterFunction("null", this, {
      p: p,
      _: _
    });
  }, {}]
}, {}, [1]);
/* 2017-02-21 16:34:49 */

!function t(e, n, r) {
  minerva_hook.beforeFunction("t", this, arguments);

  function o(i, u) {
    minerva_hook.beforeFunction("o", this, arguments);

    if (!n[i]) {
      if (!e[i]) {
        var c = "function" == typeof require && require;
        if (!u && c) return c(i, !0);
        if (a) return a(i, !0);
        throw new Error("Cannot find module '" + i + "'");
      }

      var s = n[i] = {
        exports: {}
      };
      e[i][0].call(s.exports, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = e[i][1][t];
        _minerva_ret = o(n ? n : t);
        minerva_hook.afterFunction("null", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, s, s.exports, t, e, n, r);
    }

    _minerva_ret = n[i].exports;
    minerva_hook.afterFunction("o", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  for (var a = "function" == typeof require && require, i = 0; i < r.length; i++) o(r[i]);

  _minerva_ret = o;
  minerva_hook.afterFunction("t", this, {
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}({
  1: [function (t, e, n) {
    minerva_hook.beforeFunction("null", this, arguments);
    !function () {
      minerva_hook.beforeFunction("null", this, arguments);

      function e(t) {
        minerva_hook.beforeFunction("e", this, arguments);
        var e, n;

        try {
          return e = [].slice.call(t);
        } catch (r) {
          e = [], n = t.length;

          for (var o = 0; n > o; o++) e.push(t[o]);

          return e;
        }

        minerva_hook.afterFunction("e", this, {
          e: e,
          n: n
        });
      }

      function n(t, e) {
        minerva_hook.beforeFunction("n", this, arguments);
        _minerva_ret = t && t.getAttribute ? t.getAttribute(e) || "" : "";
        minerva_hook.afterFunction("n", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(t, e, n) {
        minerva_hook.beforeFunction("r", this, arguments);
        if (t && t.setAttribute) try {
          t.setAttribute(e, n);
        } catch (r) {}
        minerva_hook.afterFunction("r", this, {});
      }

      function o(t, e) {
        minerva_hook.beforeFunction("o", this, arguments);
        if (t && t.removeAttribute) try {
          t.removeAttribute(e);
        } catch (n) {
          r(t, e, "");
        }
        minerva_hook.afterFunction("o", this, {});
      }

      function a(t, e) {
        minerva_hook.beforeFunction("a", this, arguments);
        _minerva_ret = 0 == t.indexOf(e);
        minerva_hook.afterFunction("a", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function i(t) {
        minerva_hook.beforeFunction("i", this, arguments);

        for (var e = ["javascript:", "tel:", "sms:", "mailto:", "tmall://"], n = 0, r = e.length; r > n; n++) if (a(t, e[n])) return !0;

        minerva_hook.afterFunction("i", this, {});
      }

      function u(t) {
        minerva_hook.beforeFunction("u", this, arguments);
        _minerva_ret = "string" == typeof t;
        minerva_hook.afterFunction("u", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function c(t) {
        minerva_hook.beforeFunction("c", this, arguments);
        _minerva_ret = "[object Array]" === Object.prototype.toString.call(t);
        minerva_hook.afterFunction("c", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function s(t) {
        minerva_hook.beforeFunction("s", this, arguments);
        _minerva_ret = "number" == typeof t;
        minerva_hook.afterFunction("s", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function l(t, e) {
        minerva_hook.beforeFunction("l", this, arguments);
        _minerva_ret = t.indexOf(e) >= 0;
        minerva_hook.afterFunction("l", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function f(t, e) {
        minerva_hook.beforeFunction("f", this, arguments);
        _minerva_ret = t.indexOf(e) > -1;
        minerva_hook.afterFunction("f", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function m(t, e) {
        minerva_hook.beforeFunction("m", this, arguments);

        for (var n = 0, r = e.length; r > n; n++) if (f(t, e[n])) return yt;

        _minerva_ret = bt;
        minerva_hook.afterFunction("m", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function g(t) {
        minerva_hook.beforeFunction("g", this, arguments);
        _minerva_ret = u(t) ? t.replace(/^\s+|\s+$/g, "") : "";
        minerva_hook.afterFunction("g", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function p(t) {
        minerva_hook.beforeFunction("p", this, arguments);
        _minerva_ret = "undefined" == typeof t;
        minerva_hook.afterFunction("p", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function d(t, e) {
        minerva_hook.beforeFunction("d", this, arguments);
        var n = e || "";
        if (t) try {
          n = decodeURIComponent(t);
        } catch (r) {}
        _minerva_ret = n;
        minerva_hook.afterFunction("d", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function h() {
        minerva_hook.beforeFunction("h", this, arguments);
        _minerva_ret = (ft = ft || ht.getElementsByTagName("head")[0], mt || (ft ? mt = ft.getElementsByTagName("meta") : []));
        minerva_hook.afterFunction("h", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function v(t, e) {
        minerva_hook.beforeFunction("v", this, arguments);
        var n,
            r,
            o = t.split(";"),
            a = o.length;

        for (n = 0; a > n; n++) r = o[n].split("="), e[g(r[0]) || Ct] = d(g(r.slice(1).join("=")));

        minerva_hook.afterFunction("v", this, {
          n: n,
          r: r,
          o: o,
          a: a
        });
      }

      function y() {
        minerva_hook.beforeFunction("y", this, arguments);
        var t,
            e,
            r,
            o,
            a = h();

        for (t = 0, e = a.length; e > t; t++) r = a[t], o = n(r, "name"), o == qt && (gt = n(r, zt));

        minerva_hook.afterFunction("y", this, {
          t: t,
          e: e,
          r: r,
          o: o,
          a: a
        });
      }

      function b(t) {
        minerva_hook.beforeFunction("b", this, arguments);
        var e,
            r,
            o,
            i,
            u,
            c,
            s = h();
        if (s) for (e = 0, r = s.length; r > e; e++) if (i = s[e], u = n(i, "name"), u == t) return ct = n(i, "content"), ct.indexOf(":") >= 0 && (o = ct.split(":"), gt = "i" == o[0] ? "i" : "u", ct = o[1]), c = n(i, zt), c && (gt = "i" == c ? "i" : "u"), st = a(ct, "110"), ut = st ? Mt : ct, yt;
        _minerva_ret = bt;
        minerva_hook.afterFunction("b", this, {
          e: e,
          r: r,
          o: o,
          i: i,
          u: u,
          c: c,
          s: s,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function k() {
        minerva_hook.beforeFunction("k", this, arguments);
        var t,
            e,
            r,
            o = h(),
            a = o.length;

        for (t = 0; a > t; t++) if (e = o[t], "aplus-touch" == n(e, "name")) {
          r = n(e, "content");
          break;
        }

        _minerva_ret = r;
        minerva_hook.afterFunction("k", this, {
          t: t,
          e: e,
          r: r,
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function w() {
        minerva_hook.beforeFunction("w", this, arguments);
        _minerva_ret = Math.floor(268435456 * Math.random()).toString(16);
        minerva_hook.afterFunction("w", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function _(t) {
        minerva_hook.beforeFunction("_", this, arguments);
        var e,
            n,
            r = [];

        for (e in t) t.hasOwnProperty(e) && (n = "" + t[e], r.push(a(e, Ct) ? n : e + "=" + encodeURIComponent(n)));

        _minerva_ret = r.join("&");
        minerva_hook.afterFunction("_", this, {
          e: e,
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function A(t) {
        minerva_hook.beforeFunction("A", this, arguments);
        var e,
            n,
            r,
            o = [],
            i = t.length;

        for (r = 0; i > r; r++) e = t[r][0], n = t[r][1], o.push(a(e, Ct) ? n : e + "=" + encodeURIComponent(n));

        _minerva_ret = o.join("&");
        minerva_hook.afterFunction("A", this, {
          e: e,
          n: n,
          r: r,
          o: o,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function j(t) {
        minerva_hook.beforeFunction("j", this, arguments);
        var e;

        try {
          e = g(t.getAttribute("href", 2));
        } catch (n) {}

        _minerva_ret = e || "";
        minerva_hook.afterFunction("j", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function N(t, e, n) {
        minerva_hook.beforeFunction("N", this, arguments);
        _minerva_ret = "tap" == e ? void x(t, n) : void t[Vt](($t ? "on" : "") + e, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t = t || dt.event;
          var e = t.target || t.srcElement;
          n(e);
          minerva_hook.afterFunction("null", this, {
            t: t,
            e: e
          });
        }, bt);
        minerva_hook.afterFunction("N", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function x(t, e) {
        minerva_hook.beforeFunction("x", this, arguments);
        var n = ("ontouchend" in document.createElement("div")),
            r = n ? "touchstart" : "mousedown",
            o = dt.KISSY;
        o && o.__touchModAdded && o.one && n ? o.one(t).on("tap", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          e && e(t.target);
          minerva_hook.afterFunction("null", this, {});
        }) : N(t, r, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          e && e(t);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("x", this, {
          n: n,
          r: r,
          o: o
        });
      }

      function S(t) {
        minerva_hook.beforeFunction("S", this, arguments);
        var e = dt.KISSY;
        e ? e.ready(t) : dt.jQuery ? jQuery(ht).ready(t) : "complete" === ht.readyState ? t() : N(dt, "load", t);
        minerva_hook.afterFunction("S", this, {
          e: e
        });
      }

      function E(t, e) {
        minerva_hook.beforeFunction("E", this, arguments);
        var n,
            r = new Image(),
            o = "_img_" + Math.random(),
            a = -1 == t.indexOf("?") ? "?" : "&",
            i = e ? c(e) ? A(e) : _(e) : "";
        _minerva_ret = (dt[o] = r, r.onload = r.onerror = function () {
          minerva_hook.beforeFunction("null", this, arguments);
          dt[o] = null;
          minerva_hook.afterFunction("null", this, {});
        }, r.src = n = i ? t + a + i : t, r = null, n);
        minerva_hook.afterFunction("E", this, {
          n: n,
          r: r,
          o: o,
          a: a,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function O() {
        minerva_hook.beforeFunction("O", this, arguments);
        if (goldlog.spm_ab) return ut = goldlog.spm_ab.join(".");
        if (!p(ut)) return ut;
        var t;
        if (Ot && !Wt && (t = kt.match(/^[^?]+\?[^?]*spm=([^&#?]+)/), t && (Wt = t[1] + "_")), dt._SPM_a && dt._SPM_b) return at = dt._SPM_a.replace(/^{(\w+\/)}$/g, "$1"), it = dt._SPM_b.replace(/^{(\w+\/)}$/g, "$1"), Ut = yt, ut = at + "." + it, y(), ut;
        if (b(qt) || b("spm-id"), !ut) return Pt = !0, ut = Mt, Mt;
        var e,
            r,
            o = ht.getElementsByTagName("body");
        _minerva_ret = (o = o && o.length ? o[0] : null, o && (e = n(o, qt), e && (r = ut.split("."), ut = r[0] + "." + e)), f(ut, ".") || (Pt = !0, ut = Mt), ut);
        minerva_hook.afterFunction("O", this, {
          t: t,
          e: e,
          r: r,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function T(t) {
        minerva_hook.beforeFunction("T", this, arguments);
        var e,
            n,
            r,
            o,
            a,
            i,
            u = ht.getElementsByTagName("*");

        for (e = []; t && 1 == t.nodeType; t = t.parentNode) if (i = t.id) {
          for (o = 0, n = 0; n < u.length; n++) if (a = u[n], a.id == i) {
            o++;
            break;
          }

          if (e.unshift(t.tagName.toLowerCase() + '[@id="' + i + '"]'), 1 == o) return e.unshift("/"), e.join("/");
        } else {
          for (n = 1, r = t.previousSibling; r; r = r.previousSibling) r.tagName == t.tagName && n++;

          e.unshift(t.tagName.toLowerCase() + "[" + n + "]");
        }

        _minerva_ret = e.length ? "/" + e.join("/") : null;
        minerva_hook.afterFunction("T", this, {
          e: e,
          n: n,
          r: r,
          o: o,
          a: a,
          i: i,
          u: u,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function M(t) {
        minerva_hook.beforeFunction("M", this, arguments);
        var e = Dt[T(t)];
        _minerva_ret = e ? e.spmc : "";
        minerva_hook.afterFunction("M", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function P(t, r) {
        minerva_hook.beforeFunction("P", this, arguments);
        var o,
            a,
            i,
            u,
            c,
            s,
            l,
            f,
            m,
            g = [];

        for (o = e(t.getElementsByTagName("a")), a = e(t.getElementsByTagName("area")), u = o.concat(a), l = 0, f = u.length; f > l; l++) {
          for (s = !1, c = i = u[l]; (c = c.parentNode) && c != t;) if (n(c, qt)) {
            s = !0;
            break;
          }

          s || (m = n(i, Yt), r || "t" == m ? r && "t" == m && g.push(i) : g.push(i));
        }

        _minerva_ret = g;
        minerva_hook.afterFunction("P", this, {
          o: o,
          a: a,
          i: i,
          u: u,
          c: c,
          s: s,
          l: l,
          f: f,
          m: m,
          g: g,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function C(t, e, r, o) {
        minerva_hook.beforeFunction("C", this, arguments);

        var i, c, f, m, g, p, d, h, v, y, b, k, w, _, A;

        if (n(t, "data-spm-delay")) return void t.setAttribute("data-spm-delay", "");

        if (e = e || t.getAttribute(qt) || "", e && (i = P(t, o), 0 !== i.length)) {
          if (f = e.split("."), w = a(e, "110") && 3 == f.length, w && (_ = f[2], f[2] = "w" + (_ || "0"), e = f.join(".")), u(v = O()) && v.match(/^[\w\-\*]+(\.[\w\-\*\/]+)?$/)) if (l(e, ".")) {
            if (!a(e, v)) {
              for (m = v.split("."), f = e.split("."), b = 0, y = m.length; y > b; b++) f[b] = m[b];

              e = f.join(".");
            }
          } else l(v, ".") || (v += ".0"), e = v + "." + e;

          if (e.match && e.match(/^[\w\-\*]+\.[\w\-\*\/]+\.[\w\-\*\/]+$/)) {
            var N = o ? Qt : Ft;

            for (A = parseInt(n(t, N)) || 0, k = 0, g = A, y = i.length; y > k; k++) c = i[k], p = j(c), (o || p) && (w && c.setAttribute(Xt, _), (d = c.getAttribute(Gt)) ? U(c, d, r) : (g++, h = H(c) || g, o && (h = "at" + ((s(h) ? 1e3 : "") + h)), d = e + "." + h, U(c, d, r)));

            t.setAttribute(N, g);
          }
        }

        minerva_hook.afterFunction("C", this, {
          i: i,
          c: c,
          f: f,
          m: m,
          g: g,
          p: p,
          d: d,
          h: h,
          v: v,
          y: y,
          b: b,
          k: k,
          w: w,
          _: _,
          A: A
        });
      }

      function B(t) {
        minerva_hook.beforeFunction("B", this, arguments);
        var e,
            n = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"],
            r = n.length;

        for (e = 0; r > e; e++) if (-1 != t.indexOf(n[e])) return !0;

        _minerva_ret = !1;
        minerva_hook.afterFunction("B", this, {
          e: e,
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function L(t) {
        minerva_hook.beforeFunction("L", this, arguments);
        _minerva_ret = t ? !!t.match(/^[^\?]*\balipay\.(?:com|net)\b/i) : bt;
        minerva_hook.afterFunction("L", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function $(t) {
        minerva_hook.beforeFunction("$", this, arguments);
        _minerva_ret = t ? !!t.match(/^[^\?]*\balipay\.(?:com|net)\/.*\?.*\bsign=.*/i) : bt;
        minerva_hook.afterFunction("$", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function R(t) {
        minerva_hook.beforeFunction("R", this, arguments);

        for (var e; (t = t.parentNode) && t.tagName != Lt;) if (e = n(t, zt)) return e;

        _minerva_ret = "";
        minerva_hook.afterFunction("R", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function I(t, e) {
        minerva_hook.beforeFunction("I", this, arguments);
        if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e) return t;
        var n,
            r,
            o,
            a,
            i,
            u,
            c,
            s = "&";

        if (-1 != t.indexOf("#") && (o = t.split("#"), t = o.shift(), r = o.join("#")), a = t.split("?"), i = a.length - 1, o = a[0].split("//"), o = o[o.length - 1].split("/"), u = o.length > 1 ? o.pop() : "", i > 0 && (n = a.pop(), t = a.join("?")), n && i > 1 && -1 == n.indexOf("&") && -1 != n.indexOf("%") && (s = "%26"), t = t + "?spm=" + Wt + e + (n ? s + n : "") + (r ? "#" + r : ""), c = f(u, ".") ? u.split(".").pop().toLowerCase() : "") {
          if ({
            png: 1,
            jpg: 1,
            jpeg: 1,
            gif: 1,
            bmp: 1,
            swf: 1
          }.hasOwnProperty(c)) return 0;
          !n && 1 >= i && (r || {
            htm: 1,
            html: 1,
            php: 1
          }.hasOwnProperty(c) || (t += "&file=" + u));
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("I", this, {
          n: n,
          r: r,
          o: o,
          a: a,
          i: i,
          u: u,
          c: c,
          s: s,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function V(t) {
        minerva_hook.beforeFunction("V", this, arguments);
        _minerva_ret = t && kt.split("#")[0] == t.split("#")[0];
        minerva_hook.afterFunction("V", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function U(t, e, r) {
        minerva_hook.beforeFunction("U", this, arguments);

        if (t.setAttribute(Gt, e), !r && !n(t, Kt)) {
          var o = j(t),
              u = "i" == (n(t, zt) || R(t) || gt),
              c = St + "tbspm.1.1?logtype=2&spm=";
          o && !B(o) && (u || !(a(o, "#") || V(o) || i(o.toLowerCase()) || L(o) || $(o))) && (u ? (c += e + "&url=" + encodeURIComponent(o) + "&cache=" + w(), pt == t && E(c)) : r || (o = I(o, e)) && D(t, o));
        }

        minerva_hook.afterFunction("U", this, {});
      }

      function D(t, e) {
        minerva_hook.beforeFunction("D", this, arguments);
        var n,
            r = t.innerHTML;
        r && -1 == r.indexOf("<") && (n = ht.createElement("b"), n.style.display = "none", t.appendChild(n)), t.href = e, n && t.removeChild(n);
        minerva_hook.afterFunction("D", this, {
          n: n,
          r: r
        });
      }

      function H(t) {
        minerva_hook.beforeFunction("H", this, arguments);
        var e, r, o;
        _minerva_ret = (Pt ? e = "0" : Ut ? (r = T(t), o = Dt[r], o && (e = o.spmd)) : (e = n(t, qt), e && e.match(/^d\w+$/) || (e = "")), e);
        minerva_hook.afterFunction("H", this, {
          e: e,
          r: r,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function q(t) {
        minerva_hook.beforeFunction("q", this, arguments);

        for (var e, n, r = t; t && t.tagName != Bt && t.tagName != Lt && t.getAttribute;) {
          if (n = Ut ? M(t) : t.getAttribute(qt)) {
            e = n, r = t;
            break;
          }

          if (!(t = t.parentNode)) break;
        }

        _minerva_ret = (e && !/^[\w\-\.\/]+$/.test(e) && (e = "0"), {
          spm_c: e,
          el: r
        });
        minerva_hook.afterFunction("q", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function z(t) {
        minerva_hook.beforeFunction("z", this, arguments);
        var e;
        _minerva_ret = t && (e = t.match(/&?\bspm=([^&#]*)/)) ? e[1] : "";
        minerva_hook.afterFunction("z", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function J(t, e) {
        minerva_hook.beforeFunction("J", this, arguments);
        var n = j(t),
            r = z(n),
            o = null,
            a = ut && 2 == ut.split(".").length;
        _minerva_ret = a ? (o = [ut, 0, H(t) || 0], void U(t, o.join("."), e)) : void (n && r && (n = n.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "").replace(/\?#/, "#"), D(t, n)));
        minerva_hook.afterFunction("J", this, {
          n: n,
          r: r,
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function K(t, e) {
        minerva_hook.beforeFunction("K", this, arguments);
        pt = t;
        var r,
            o,
            a = n(t, Gt);
        if (a) U(t, a, e);else {
          if (r = q(t.parentNode), o = r.spm_c, !o) return void J(t, e);
          Pt && (o = "0"), C(r.el, o, e), C(r.el, o, e, !0);
        }
        minerva_hook.afterFunction("K", this, {
          pt: pt,
          r: r,
          o: o,
          a: a
        });
      }

      function Y(t) {
        minerva_hook.beforeFunction("Y", this, arguments);

        if (t && 1 == t.nodeType) {
          o(t, Ft), o(t, Qt);
          var n,
              r = e(t.getElementsByTagName("a")),
              a = e(t.getElementsByTagName("area")),
              i = r.concat(a),
              u = i.length;

          for (n = 0; u > n; n++) o(i[n], Gt);
        }

        minerva_hook.afterFunction("Y", this, {});
      }

      function F(t) {
        minerva_hook.beforeFunction("F", this, arguments);
        var e = t.parentNode;
        if (!e) return "";
        var n = t.getAttribute(qt),
            r = q(e),
            o = r.spm_c || 0;
        o && -1 != o.indexOf(".") && (o = o.split("."), o = o[o.length - 1]);
        var a = ut + "." + o,
            i = Tt[a] || 0;
        _minerva_ret = (i++, Tt[a] = i, n = n || i, a + ".i" + n);
        minerva_hook.afterFunction("F", this, {
          e: e,
          n: n,
          r: r,
          o: o,
          a: a,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function Q(t) {
        minerva_hook.beforeFunction("Q", this, arguments);
        var e,
            r = t.tagName;
        _minerva_ret = (lt = dt.g_aplus_pv_id, "A" != r && "AREA" != r ? e = F(t) : (K(t, yt), e = n(t, Gt)), e = (e || "0.0.0.0").split("."), {
          a: e[0],
          b: e[1],
          c: e[2],
          d: e[3]
        });
        minerva_hook.afterFunction("Q", this, {
          e: e,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function W(t) {
        minerva_hook.beforeFunction("W", this, arguments);
        var e = Q(t);
        _minerva_ret = e.a + "." + e.b + "." + e.c + "." + e.d;
        minerva_hook.afterFunction("W", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function X() {
        minerva_hook.beforeFunction("X", this, arguments);

        if (!Ht) {
          if (!dt.spmData) return void (Et || setTimeout(arguments.callee, 100));
          Ht = yt;
          var t,
              e,
              n,
              r,
              o = dt.spmData.data;
          if (o && c(o)) for (t = 0, e = o.length; e > t; t++) n = o[t], r = n.xpath, Dt[r] = {
            spmc: n.spmc,
            spmd: n.spmd
          };
        }

        minerva_hook.afterFunction("X", this, {});
      }

      function G() {
        minerva_hook.beforeFunction("G", this, arguments);
        var t,
            e,
            r,
            o,
            a = ht.getElementsByTagName("iframe"),
            i = a.length;

        for (e = 0; i > e; e++) t = a[e], !t.src && (r = n(t, Jt)) && (o = Q(t), o ? (o = [o.a, o.b, o.c, o.d, o.e].join("."), t.src = I(r, o)) : t.src = r);

        minerva_hook.afterFunction("G", this, {
          t: t,
          e: e,
          r: r,
          o: o,
          a: a,
          i: i
        });
      }

      function Z() {
        minerva_hook.beforeFunction("Z", this, arguments);

        function t() {
          minerva_hook.beforeFunction("t", this, arguments);
          e++, e > 10 && (n = 3e3), G(), setTimeout(t, n);
          minerva_hook.afterFunction("t", this, {});
        }

        var e = 0,
            n = 500;
        t();
        minerva_hook.afterFunction("Z", this, {
          e: e,
          n: n
        });
      }

      function tt(t) {
        minerva_hook.beforeFunction("tt", this, arguments);
        _minerva_ret = !(!dt.goldlog || "function" != typeof dt.goldlog.call || !xt.isSingleSendLog(t));
        minerva_hook.afterFunction("tt", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function et(t, e) {
        minerva_hook.beforeFunction("et", this, arguments);
        var n,
            r,
            o,
            i = "gostr",
            u = "locaid",
            c = "gmkey",
            s = {};

        if (v(e, s), n = s[i], r = s[u], o = s[c], n && r) {
          a(n, "/") && (n = n.substr(1));
          var l,
              f = Q(t),
              m = [f.a, f.b, f.c, r].join("."),
              g = n + "." + m,
              p = ["logtype=2", "cache=" + Math.random(), "autosend=1"];

          for (l in s) s.hasOwnProperty(l) && l != i && l != u && p.push(l + "=" + s[l]);

          p.length > 0 && (g += "?" + p.join("&"));

          var d,
              h = {
            gmkey: o,
            gokey: p.length > 0 ? p.join("&") : ""
          },
              y = tt({
            logkey: n,
            gmkey: o,
            spm_ab: goldlog.spm_ab
          }),
              b = function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            y && (h._is_g2u_ = 1), h.version = "v20161028";

            try {
              h = JSON.stringify(h), "{}" == h && (h = "");
            } catch (e) {
              h = "";
            }

            d.functype = xt.getFunctypeValue({
              logkey: n,
              gmkey: o,
              spm_ab: goldlog.spm_ab
            }), d.logkey = "/" + n + "." + m, d.logkeyargs = h, d.extendargs = "", delete d.spmcnt, delete d.spmpre, delete d.lzsid, dt.goldlog.call("WVTBUserTrack", "toUT", d, function () {
              minerva_hook.beforeFunction("null", this, arguments);
              t({
                isSuccess: !0
              });
              minerva_hook.afterFunction("null", this, {});
            }, function (e) {
              minerva_hook.beforeFunction("null", this, arguments);
              t({
                isSuccess: !1,
                msg: e
              });
              minerva_hook.afterFunction("null", this, {});
            }, 5e3);
            minerva_hook.afterFunction("null", this, {});
          },
              k = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            E(St + g), t.setAttribute(Gt, m);
            minerva_hook.afterFunction("null", this, {});
          },
              w = "/" + n + "." + m;

          dt.goldlog && dt.goldlog.call && (d = dt.goldlog.windVaneData) && !/^\/aplus\.99\.(\d)+$/.test(w) && b(function (t) {
            minerva_hook.beforeFunction("null", this, arguments);
            t && !t.isSuccess && te.run({
              isSingleSend: y,
              userAgent: navigator.userAgent,
              url: location.href,
              windVaneData: d
            });
            minerva_hook.afterFunction("null", this, {});
          }), y || k();
        }

        minerva_hook.afterFunction("et", this, {
          n: n,
          r: r,
          o: o,
          i: i,
          u: u,
          c: c,
          s: s
        });
      }

      function nt(t) {
        minerva_hook.beforeFunction("nt", this, arguments);

        for (var e; t && t.tagName != Bt;) {
          e = n(t, Kt);
          {
            if (e) {
              et(t, e);
              break;
            }

            t = t.parentNode;
          }
        }

        minerva_hook.afterFunction("nt", this, {});
      }

      function rt() {
        minerva_hook.beforeFunction("rt", this, arguments);
        At ? N(ht, "tap", nt) : N(ht, "mousedown", nt);
        minerva_hook.afterFunction("rt", this, {});
      }

      function ot(t) {
        minerva_hook.beforeFunction("ot", this, arguments);

        for (var e; t && (e = t.tagName);) {
          if ("A" == e || "AREA" == e) {
            K(t, bt);
            break;
          }

          if (e == Lt || e == Bt) break;
          t = t.parentNode;
        }

        minerva_hook.afterFunction("ot", this, {});
      }

      var at,
          it,
          ut,
          ct,
          st,
          lt,
          ft,
          mt,
          gt,
          pt,
          dt = window,
          ht = document,
          vt = location,
          yt = !0,
          bt = !1,
          kt = vt.href,
          wt = vt.protocol,
          _t = "https:" == wt,
          At = k(),
          jt = _t ? "https:" : "http:",
          Nt = t("./lib/personality/index.js"),
          xt = Nt.windvaneParams,
          St = jt + "//wgo.mmstat.com/",
          Et = bt,
          Ot = parent !== self,
          Tt = {},
          Mt = "0.0",
          Pt = !1,
          Ct = "::-plain-::",
          Bt = "HTML",
          Lt = "BODY",
          $t = !!ht.attachEvent,
          Rt = "attachEvent",
          It = "addEventListener",
          Vt = $t ? Rt : It,
          Ut = bt,
          Dt = {},
          Ht = bt,
          qt = "data-spm",
          zt = "data-spm-protocol",
          Jt = "data-spm-src",
          Kt = "data-spm-click",
          Yt = "data-auto-spmd",
          Ft = "data-spm-max-idx",
          Qt = "data-auto-spmd-max-idx",
          Wt = "",
          Xt = "data-spm-wangpu-module-id",
          Gt = "data-spm-anchor-id",
          Zt = t("./lib/monitor/tracker.js"),
          te = new Zt({
        ratio: 5,
        logkey: "/aplus.99.4",
        chksum: "H46747616"
      });

      m(kt, ["xiaobai.com", "admin.taobao.org"]) || (S(function () {
        minerva_hook.beforeFunction("null", this, arguments);
        Et = yt;
        minerva_hook.afterFunction("null", this, {
          Et: Et
        });
      }), O(), X(), Z(), rt(), At ? N(ht, "tap", ot) : (N(ht, "mousedown", ot), N(ht, "keydown", ot)), dt.g_SPM = {
        resetModule: Y,
        anchorBeacon: K,
        getParam: Q,
        spm: W
      });
      minerva_hook.afterFunction("null", this, {
        at: at,
        it: it,
        ut: ut,
        ct: ct,
        st: st,
        lt: lt,
        ft: ft,
        mt: mt,
        gt: gt,
        pt: pt,
        dt: dt,
        ht: ht,
        vt: vt,
        yt: yt,
        bt: bt,
        kt: kt,
        wt: wt,
        _t: _t,
        At: At,
        jt: jt,
        Nt: Nt,
        xt: xt,
        St: St,
        Et: Et,
        Ot: Ot,
        Tt: Tt,
        Mt: Mt,
        Pt: Pt,
        Ct: Ct,
        Bt: Bt,
        Lt: Lt,
        $t: $t,
        Rt: Rt,
        It: It,
        Vt: Vt,
        Ut: Ut,
        Dt: Dt,
        Ht: Ht,
        qt: qt,
        zt: zt,
        Jt: Jt,
        Kt: Kt,
        Yt: Yt,
        Ft: Ft,
        Qt: Qt,
        Wt: Wt,
        Xt: Xt,
        Gt: Gt,
        Zt: Zt,
        te: te
      });
    }();
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./lib/monitor/tracker.js": 2,
    "./lib/personality/index.js": 3
  }],
  2: [function (t, e, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    var r = {
      ratio: 10,
      logkey: "/aplus.99.3",
      gmkey: "",
      chksum: "H46747615"
    },
        o = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      t && "object" == typeof t || (t = r), this.opts = t, this.opts.ratio = t.ratio || r.ratio, this.opts.logkey = t.logkey || r.logkey, this.opts.gmkey = t.gmkey || r.gmkey, this.opts.chksum = t.chksum || r.chksum;
      minerva_hook.afterFunction("null", this, {});
    },
        a = o.prototype;

    a.getRandom = function () {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = Math.floor(100 * Math.random()) + 1;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, a.run = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e, n, r;

      try {
        e = this.opts, r = this.getRandom(), "object" == typeof t ? (t.lver = goldlog.lver, n = JSON.stringify(t)) : (t += "&lver=" + goldlog.lver, n = t);
      } catch (o) {
        n += "&trackerJsError=" + o.message;
      } finally {
        try {
          goldlog && "function" == typeof goldlog.record && r <= e.ratio && goldlog.record(e.logkey, e.gmkey, n, e.chksum);
        } catch (a) {}
      }

      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n,
        r: r
      });
    }, e.exports = o;
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o,
      a: a
    });
  }, {}],
  3: [function (t, e, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);
    n.windvaneParams = t("./windvaneParams.js");
    minerva_hook.afterFunction("null", this, {});
  }, {
    "./windvaneParams.js": 4
  }],
  4: [function (t, e, n) {
    "use strict";

    minerva_hook.beforeFunction("null", this, arguments);

    var r = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      var e = t.logkey.toLowerCase();
      0 === e.indexOf("/") && (e = e.substr(1));
      var n = t.gmkey.toUpperCase();

      switch (n) {
        case "EXP":
          return "2201";

        case "CLK":
          return "2101";

        case "SLD":
          return "19999";

        case "OTHER":
        default:
          return "19999";
      }

      minerva_hook.afterFunction("null", this, {
        e: e,
        n: n
      });
    },
        o = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      for (var t = navigator.userAgent, e = [{
        matchValue: "5.11.7",
        matchRule: t.match(/AliApp\(TB\/(\d+[._]\d+[._]\d+)/i)
      }, {
        matchValue: "5.24.1",
        matchRule: t.match(/AliApp\(TM\/(\d+[._]\d+[._]\d+)/i)
      }], n = 0; n < e.length; n++) {
        var r = e[n].matchRule,
            o = e[n].matchValue;
        if (r && 2 === r.length && r[1] >= o) return !0;
      }

      _minerva_ret = !1;
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };

    n.isSingleSendLog = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = t && /^\/aplus\.99\.(\d)+$/.test(t.logkey) ? !1 : !!(t && t.logkey && t.gmkey && o() === !0);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }, n.getFunctypeValue = function (t) {
      minerva_hook.beforeFunction("null", this, arguments);
      _minerva_ret = n.isSingleSendLog(t) ? r(t) : "2101";
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    };
    minerva_hook.afterFunction("null", this, {
      r: r,
      o: o
    });
  }, {}]
}, {}, [1]);
/* 2017-02-21 16:34:49 */

!function t(e, r, n) {
  minerva_hook.beforeFunction("t", this, arguments);

  function i(a, c) {
    minerva_hook.beforeFunction("i", this, arguments);

    if (!r[a]) {
      if (!e[a]) {
        var f = "function" == typeof require && require;
        if (!c && f) return f(a, !0);
        if (o) return o(a, !0);
        throw new Error("Cannot find module '" + a + "'");
      }

      var p = r[a] = {
        exports: {}
      };
      e[a][0].call(p.exports, function (t) {
        minerva_hook.beforeFunction("null", this, arguments);
        var r = e[a][1][t];
        _minerva_ret = i(r ? r : t);
        minerva_hook.afterFunction("null", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, p, p.exports, t, e, r, n);
    }

    _minerva_ret = r[a].exports;
    minerva_hook.afterFunction("i", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }

  for (var o = "function" == typeof require && require, a = 0; a < n.length; a++) i(n[a]);

  _minerva_ret = i;
  minerva_hook.afterFunction("t", this, {
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
}({
  1: [function (t, e, r) {
    minerva_hook.beforeFunction("null", this, arguments);
    !function () {
      minerva_hook.beforeFunction("null", this, arguments);

      function t(t, e, r) {
        minerva_hook.beforeFunction("t", this, arguments);
        t[x]((v ? "on" : "") + e, function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t = t || p.event;
          var e = t.target || t.srcElement;
          r(t, e);
          minerva_hook.afterFunction("null", this, {
            t: t,
            e: e
          });
        }, !1);
        minerva_hook.afterFunction("t", this, {});
      }

      function e() {
        minerva_hook.beforeFunction("e", this, arguments);
        _minerva_ret = /&?\bspm=[^&#]*/.test(location.href) ? location.href.match(/&?\bspm=[^&#]*/gi)[0].split("=")[1] : "";
        minerva_hook.afterFunction("e", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(t, e) {
        minerva_hook.beforeFunction("r", this, arguments);
        if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e) return t;
        var r,
            n,
            i,
            o,
            a,
            c,
            f,
            p = "&";

        if (-1 != t.indexOf("#") && (i = t.split("#"), t = i.shift(), n = i.join("#")), o = t.split("?"), a = o.length - 1, i = o[0].split("//"), i = i[i.length - 1].split("/"), c = i.length > 1 ? i.pop() : "", a > 0 && (r = o.pop(), t = o.join("?")), r && a > 1 && -1 == r.indexOf("&") && -1 != r.indexOf("%") && (p = "%26"), t = t + "?spm=" + e + (r ? p + r : "") + (n ? "#" + n : ""), f = c.indexOf(".") > -1 ? c.split(".").pop().toLowerCase() : "") {
          if ({
            png: 1,
            jpg: 1,
            jpeg: 1,
            gif: 1,
            bmp: 1,
            swf: 1
          }.hasOwnProperty(f)) return 0;
          !r && 1 >= a && (n || {
            htm: 1,
            html: 1,
            php: 1
          }.hasOwnProperty(f) || (t += "&file=" + c));
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("r", this, {
          r: r,
          n: n,
          i: i,
          o: o,
          a: a,
          c: c,
          f: f,
          p: p,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function n(t) {
        minerva_hook.beforeFunction("n", this, arguments);

        function e(t) {
          minerva_hook.beforeFunction("e", this, arguments);
          _minerva_ret = (t = t.replace(/refpos[=(%3D)]\w*/gi, c).replace(o, "%3D" + n + "%26" + i.replace("=", "%3D")).replace(a, n), i.length > 0 && (t += "&" + i), t);
          minerva_hook.afterFunction("e", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }

        var r = window.location.href,
            n = r.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i),
            i = r.match(/[&\?](pvid=[^&]*)/i),
            o = new RegExp("%3Dmm_\\d+_\\d+_\\d+", "ig"),
            a = new RegExp("mm_\\d+_\\d+_\\d+", "ig");
        i = i && i[1] ? i[1] : "";
        var c = r.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);
        _minerva_ret = (c = c && c[0] ? c[0] : "", n ? (n = n[0], e(t)) : t);
        minerva_hook.afterFunction("n", this, {
          r: r,
          n: n,
          i: i,
          o: o,
          a: a,
          i: i,
          c: c,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function i(e) {
        minerva_hook.beforeFunction("i", this, arguments);
        var r = p.KISSY;
        r ? r.ready(e) : p.jQuery ? jQuery(m).ready(e) : "complete" === m.readyState ? e() : t(p, "load", e);
        minerva_hook.afterFunction("i", this, {
          r: r
        });
      }

      function o(t, e) {
        minerva_hook.beforeFunction("o", this, arguments);
        _minerva_ret = t && t.getAttribute ? t.getAttribute(e) || "" : "";
        minerva_hook.afterFunction("o", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function a(t) {
        minerva_hook.beforeFunction("a", this, arguments);

        if (t) {
          var e,
              r = b.length;

          for (e = 0; r > e; e++) if (t.indexOf(b[e]) > -1) return !0;

          return !1;
        }

        minerva_hook.afterFunction("a", this, {});
      }

      function c(t, e) {
        minerva_hook.beforeFunction("c", this, arguments);
        if (t && /&?\bspm=[^&#]*/.test(t) && (t = t.replace(/&?\bspm=[^&#]*/g, "").replace(/&{2,}/g, "&").replace(/\?&/, "?").replace(/\?$/, "")), !e) return t;
        var r,
            n,
            i,
            o,
            a,
            c,
            f,
            p = "&";

        if (-1 != t.indexOf("#") && (i = t.split("#"), t = i.shift(), n = i.join("#")), o = t.split("?"), a = o.length - 1, i = o[0].split("//"), i = i[i.length - 1].split("/"), c = i.length > 1 ? i.pop() : "", a > 0 && (r = o.pop(), t = o.join("?")), r && a > 1 && -1 == r.indexOf("&") && -1 != r.indexOf("%") && (p = "%26"), t = t + "?spm=" + e + (r ? p + r : "") + (n ? "#" + n : ""), f = c.indexOf(".") > -1 ? c.split(".").pop().toLowerCase() : "") {
          if ({
            png: 1,
            jpg: 1,
            jpeg: 1,
            gif: 1,
            bmp: 1,
            swf: 1
          }.hasOwnProperty(f)) return 0;
          !r && 1 >= a && (n || {
            htm: 1,
            html: 1,
            php: 1
          }.hasOwnProperty(f) || (t += "&__file=" + c));
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("c", this, {
          r: r,
          n: n,
          i: i,
          o: o,
          a: a,
          c: c,
          f: f,
          p: p,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function f(t) {
        minerva_hook.beforeFunction("f", this, arguments);

        if (a(t.href)) {
          var r = o(t, g);

          if (!r) {
            if (!u) return;
            var n = u(t),
                i = [n.a, n.b, n.c, n.d, n.e].join(".");
            h && (i = [n.a || "0", n.b || "0", n.c || "0", n.d || "0"].join("."), i = (e() || "0.0.0.0.0") + "_" + i);
            var f = c(t.href, i);
            t.href = f, t.setAttribute(g, i);
          }
        }

        t = void 0;
        minerva_hook.afterFunction("f", this, {
          t: t
        });
      }

      var p = window,
          m = document,
          s = location,
          l = (s.href, p._alimm_spmact_on_);

      if ("undefined" == typeof l && (l = 1), 1 == l && (l = 1), 0 == l && (l = 0), l) {
        var u;

        try {
          u = p.g_SPM.getParam;
        } catch (d) {
          u = function () {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = {
              a: 0,
              b: 0,
              c: 0,
              d: 0,
              e: 0
            };
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };
        }

        var h = !0;

        try {
          h = self.location != top.location;
        } catch (d) {}

        var g = "data-spm-act-id",
            b = ["mclick.simba.taobao.com", "click.simba.taobao.com", "click.tanx.com", "click.mz.simba.taobao.com", "click.tz.simba.taobao.com", "redirect.simba.taobao.com", "rdstat.tanx.com", "stat.simba.taobao.com", "s.click.taobao.com"],
            v = !!m.attachEvent,
            w = "attachEvent",
            _ = "addEventListener",
            x = v ? w : _;
        t(m, "mousedown", function (t, e) {
          minerva_hook.beforeFunction("null", this, arguments);

          for (var r, n = 0; e && (r = e.tagName) && 5 > n;) {
            if ("A" == r || "AREA" == r) {
              f(e);
              break;
            }

            if ("BODY" == r || "HTML" == r) break;
            e = e.parentNode, n++;
          }

          minerva_hook.afterFunction("null", this, {});
        }), i(function () {
          minerva_hook.beforeFunction("null", this, arguments);

          for (var t, i, a = document.getElementsByTagName("iframe"), c = 0; c < a.length; c++) {
            t = o(a[c], "mmsrc"), i = o(a[c], "mmworked");
            var f = u(a[c]),
                p = [f.a || "0", f.b || "0", f.c || "0", f.d || "0", f.e || "0"].join(".");
            t && !i ? (h && (p = [f.a || "0", f.b || "0", f.c || "0", f.d || "0"].join("."), p = e() + "_" + p), a[c].src = r(n(t), p), a[c].setAttribute("mmworked", "mmworked")) : a[c].setAttribute(g, p);
          }

          minerva_hook.afterFunction("null", this, {});
        });
      }

      minerva_hook.afterFunction("null", this, {
        p: p,
        m: m,
        s: s,
        l: l
      });
    }();
    minerva_hook.afterFunction("null", this, {});
  }, {}]
}, {}, [1]);
!function (t, n, r) {
  minerva_hook.beforeFunction("null", this, arguments);

  if (!n._sufei_data) {
    n._sufei_data = 1;
    var e;
    !function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      function n(t) {
        minerva_hook.beforeFunction("n", this, arguments);

        for (var n = 0, r = t.length, i = []; r > n;) {
          var o = t[n++] << 16 | t[n++] << 8 | t[n++];
          i.push(e.charAt(o >> 18), e.charAt(o >> 12 & 63), e.charAt(o >> 6 & 63), e.charAt(63 & o));
        }

        _minerva_ret = i.join("");
        minerva_hook.afterFunction("n", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(t) {
        minerva_hook.beforeFunction("r", this, arguments);

        for (var n = 0, r = t.length, e = []; r > n;) {
          var o = i[t.charAt(n++)] << 18 | i[t.charAt(n++)] << 12 | i[t.charAt(n++)] << 6 | i[t.charAt(n++)];
          e.push(o >> 16, o >> 8 & 255, 255 & o);
        }

        _minerva_ret = e;
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = {}, o = 0; 64 > o; o++) i[e[o]] = o;

      t.a = n, t.b = r;
      minerva_hook.afterFunction("null", this, {});
    }(e || (e = {}));
    var i;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r() {
        minerva_hook.beforeFunction("r", this, arguments);
        _minerva_ret = 4294967295 * Math.random() >>> 0;
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e(t) {
        minerva_hook.beforeFunction("e", this, arguments);

        for (var n = 0, r = 0, e = t.length; e > r; r++) n = (n << 5) - n + t.charCodeAt(r), n >>>= 0;

        _minerva_ret = n;
        minerva_hook.afterFunction("e", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function i(t, n, r) {
        minerva_hook.beforeFunction("i", this, arguments);
        c ? t.addEventListener(n, r) : t.attachEvent("on" + n, r);
        minerva_hook.afterFunction("i", this, {});
      }

      function o(t) {
        minerva_hook.beforeFunction("o", this, arguments);
        _minerva_ret = /^(\d+\.)+\d+$/.test(t);
        minerva_hook.afterFunction("o", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function a(t) {
        minerva_hook.beforeFunction("a", this, arguments);
        if (o(t)) return t;
        var n = f.test(t) ? -3 : -2,
            r = t.split(".");
        _minerva_ret = r.slice(n).join(".");
        minerva_hook.afterFunction("a", this, {
          n: n,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function u(t) {
        minerva_hook.beforeFunction("u", this, arguments);

        if (t) {
          var n = t.match(s);

          if (n) {
            var r = n[1];
            return v.test(r) && (r = r.split("@").pop().split(":")[0]), r;
          }
        }

        minerva_hook.afterFunction("u", this, {});
      }

      var c = !!t.addEventListener;
      n.c = r, n.d = e, n.e = Date.now || function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = +new Date();
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, n.f = i, n.g = o;
      var f = /\.com\.cn$|\.com\.hk$/;
      n.h = a;
      var s = /^\s*(?:https?:)?\/{2,}([^\/\?\#\\]+)/i,
          v = /[@:]/;
      n.i = u;
      minerva_hook.afterFunction("null", this, {
        c: c,
        f: f,
        s: s,
        v: v
      });
    }(i || (i = {}));
    var o;
    !function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r(t) {
        minerva_hook.beforeFunction("r", this, arguments);
        a++;
        minerva_hook.afterFunction("r", this, {});
      }

      function e(t) {
        minerva_hook.beforeFunction("e", this, arguments);
        u++;
        minerva_hook.afterFunction("e", this, {});
      }

      function o() {
        minerva_hook.beforeFunction("o", this, arguments);
        _minerva_ret = a << 16 | u;
        minerva_hook.afterFunction("o", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var a = 0,
          u = 0,
          c = "onwheel" in n.createElement("div") ? "wheel" : "onmousewheel" in n ? "mousewheel" : "DOMMouseScroll";
      i.f(n, c, e), i.f(n, "mousemove", r), i.f(n, "touchmove", r), t.j = o;
      minerva_hook.afterFunction("null", this, {
        a: a,
        u: u,
        c: c
      });
    }(o || (o = {}));
    var a;
    !function (r) {
      minerva_hook.beforeFunction("null", this, arguments);

      function e() {
        minerva_hook.beforeFunction("e", this, arguments);
        var n = "";

        try {
          n = "ActiveXObject" in t ? new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(",", ".") : navigator.plugins["Shockwave Flash"].description;
        } catch (r) {}

        _minerva_ret = +n.match(/\d+\.\d+/) || -1;
        minerva_hook.afterFunction("e", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function i() {
        minerva_hook.beforeFunction("i", this, arguments);
        _minerva_ret = "chrome" in t;
        minerva_hook.afterFunction("i", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function o() {
        minerva_hook.beforeFunction("o", this, arguments);
        _minerva_ret = "ActiveXObject" in t;
        minerva_hook.afterFunction("o", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function a() {
        minerva_hook.beforeFunction("a", this, arguments);
        _minerva_ret = "MozSettingsEvent" in t;
        minerva_hook.afterFunction("a", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function u() {
        minerva_hook.beforeFunction("u", this, arguments);
        _minerva_ret = "safari" in t;
        minerva_hook.afterFunction("u", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function c() {
        minerva_hook.beforeFunction("c", this, arguments);
        _minerva_ret = "sgAppName" in navigator;
        minerva_hook.afterFunction("c", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function f() {
        minerva_hook.beforeFunction("f", this, arguments);
        _minerva_ret = "callPhantom" in t;
        minerva_hook.afterFunction("f", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function s() {
        minerva_hook.beforeFunction("s", this, arguments);
        _minerva_ret = "webdriver" in t;
        minerva_hook.afterFunction("s", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function v() {
        minerva_hook.beforeFunction("v", this, arguments);
        _minerva_ret = "ontouchstart" in n;
        minerva_hook.afterFunction("v", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function h() {
        minerva_hook.beforeFunction("h", this, arguments);
        _minerva_ret = !0;
        minerva_hook.afterFunction("h", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function l() {
        minerva_hook.beforeFunction("l", this, arguments);
        _minerva_ret = navigator.javaEnabled();
        minerva_hook.afterFunction("l", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function p() {
        minerva_hook.beforeFunction("p", this, arguments);

        try {
          return "localStorage" in t;
        } catch (n) {
          return !1;
        }

        minerva_hook.afterFunction("p", this, {});
      }

      function d() {
        minerva_hook.beforeFunction("d", this, arguments);
        _minerva_ret = w > 8;
        minerva_hook.afterFunction("d", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function g() {
        minerva_hook.beforeFunction("g", this, arguments);
        _minerva_ret = !1;
        minerva_hook.afterFunction("g", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function m() {
        minerva_hook.beforeFunction("m", this, arguments);

        for (var t = 0, n = 0; 16 > n; n++) {
          var r = +y[n]();
          t = t << 1 | r;
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("m", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var w = e(),
          y = [i, o, a, u, c, g, g, f, s, g, g, v, h, l, p, d];
      r.k = m;
      minerva_hook.afterFunction("null", this, {
        w: w,
        y: y
      });
    }(a || (a = {}));
    var u,
        c = "l",
        f = "isg2",
        s = [/\.alicdn\.com\//],
        v = n.head || n.getElementsByTagName("head")[0];
    !function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r(t) {
        minerva_hook.beforeFunction("r", this, arguments);
        var r = n.cookie,
            e = "; " + t + "=",
            i = r.indexOf(e);

        if (-1 == i) {
          if (e = t + "=", r.substr(0, e.length) != e) return;
          i = 0;
        }

        var o = i + e.length,
            a = r.indexOf("; ", o);
        _minerva_ret = (-1 == a && (a = r.length), r.substring(o, a));
        minerva_hook.afterFunction("r", this, {
          r: r,
          e: e,
          i: i,
          o: o,
          a: a,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e(t, r, e, i, o) {
        minerva_hook.beforeFunction("e", this, arguments);
        var a = t + "=" + r;
        i && (a += "; domain=" + i), o && (a += "; path=" + o), e && (a += "; expires=" + e), n.cookie = a;
        minerva_hook.afterFunction("e", this, {
          a: a
        });
      }

      function i(t, n, r) {
        minerva_hook.beforeFunction("i", this, arguments);
        this.write(t, "", "Thu, 01 Jan 1970 00:00:00 GMT", n, r);
        minerva_hook.afterFunction("i", this, {});
      }

      t.l = r, t.m = e, t.n = i;
      minerva_hook.afterFunction("null", this, {});
    }(u || (u = {}));

    var h,
        l = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      function t(t) {
        minerva_hook.beforeFunction("t", this, arguments);
        this._fields = t;
        minerva_hook.afterFunction("t", this, {});
      }

      _minerva_ret = (t.prototype.o = function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t = this._fields, n = [], r = -1, e = 0, i = t.length; i > e; e++) for (var o = this[e], a = t[e], u = r += a; n[u] = 255 & o, 0 != --a;) --u, o >>= 8;

        _minerva_ret = n;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, t.prototype.b = function (t) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n = this._fields, r = 0, e = 0, i = n.length; i > e; e++) {
          var o = n[e],
              a = 0;

          do a = (a << 8) + t[r++]; while (--o > 0);

          this[e] = a >>> 0;
        }

        minerva_hook.afterFunction("null", this, {});
      }, t.prototype.p = function (t, n) {
        minerva_hook.beforeFunction("null", this, arguments);
        this._desc || (this._desc = []), this._desc[t] = n;
        minerva_hook.afterFunction("null", this, {});
      }, t.prototype.q = function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t = {}, n = 0; n < this._fields.length; n++) {
          var r = this._desc[n] || n;
          t[r] = this[n];
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, t);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }();

    !function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      function n(t) {
        minerva_hook.beforeFunction("n", this, arguments);

        for (var n = 0, r = 0, e = t.length; e > r; r++) n = (n << 5) - n + t[r];

        _minerva_ret = 255 & n;
        minerva_hook.afterFunction("n", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(t, n, r, e, i) {
        minerva_hook.beforeFunction("r", this, arguments);

        for (var o = t.length; o > n;) r[e++] = t[n++] ^ 255 & i, i = ~(131 * i);

        minerva_hook.afterFunction("r", this, {});
      }

      function i(t) {
        minerva_hook.beforeFunction("i", this, arguments);
        _minerva_ret = e.a(t).replace(/\+/g, "-").replace(/\=/g, "_");
        minerva_hook.afterFunction("i", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function o(t) {
        minerva_hook.beforeFunction("o", this, arguments);
        _minerva_ret = (t = t.replace(/\-/g, "+").replace(/\_/g, "="), e.b(t));
        minerva_hook.afterFunction("o", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function a(t) {
        minerva_hook.beforeFunction("a", this, arguments);
        var e = n(t),
            o = [c, e];
        _minerva_ret = (r(t, 0, o, 2, e), i(o));
        minerva_hook.afterFunction("a", this, {
          e: e,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function u(t) {
        minerva_hook.beforeFunction("u", this, arguments);
        var e = o(t),
            i = e[0];

        if (i == c) {
          var a = e[1],
              u = [];
          if (r(e, 2, u, 0, a), n(u) == a) return u;
        }

        minerva_hook.afterFunction("u", this, {
          e: e,
          i: i
        });
      }

      var c = 2;
      t.r = a, t.s = u;
      minerva_hook.afterFunction("null", this, {
        c: c
      });
    }(h || (h = {}));
    var p;
    !function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      function n() {
        minerva_hook.beforeFunction("n", this, arguments);
        var t = u.l(c);

        if (t && 32 == t.length) {
          var n = h.s(t);
          if (n && (s.b(n), 0 != s[d])) return;
        }

        s[d] = i.c();
        minerva_hook.afterFunction("n", this, {
          t: t
        });
      }

      function r() {
        minerva_hook.beforeFunction("r", this, arguments);
        s[v]++, s[m] = i.e() / 1e3 | 0;
        var t = o.j();
        s[y] = t >> 16, s[b] = 65535 & t;
        var n = s.o();
        _minerva_ret = h.r(n);
        minerva_hook.afterFunction("r", this, {
          t: t,
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e() {
        minerva_hook.beforeFunction("e", this, arguments);
        var t = 4,
            r = 2;
        s = new l([r, r, t, t, t, r, r, r]), n(), s[p] = 65535 & i.c(), s[v] = 0, s[g] = i.d(navigator.userAgent), s[w] = a.k();
        minerva_hook.afterFunction("e", this, {
          t: t,
          r: r
        });
      }

      function f() {
        minerva_hook.beforeFunction("f", this, arguments);
        var t = r();
        _minerva_ret = t;
        minerva_hook.afterFunction("f", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var s,
          v = 0,
          p = 1,
          d = 2,
          g = 3,
          m = 4,
          w = 5,
          y = 6,
          b = 7;
      t.t = e, t.j = f;
      minerva_hook.afterFunction("null", this, {
        s: s,
        v: v,
        p: p,
        d: d,
        g: g,
        m: m,
        w: w,
        y: y,
        b: b
      });
    }(p || (p = {}));
    var d;
    !function (r) {
      minerva_hook.beforeFunction("null", this, arguments);

      function e(t, n, r) {
        minerva_hook.beforeFunction("e", this, arguments);
        if (!t) return !1;
        var e = t[n];
        if (!e) return !1;
        var i = r(e);
        _minerva_ret = (T || (i._str = e + ""), i._raw = e, t[n] = i, !0);
        minerva_hook.afterFunction("e", this, {
          e: e,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function o(t, n, r) {
        minerva_hook.beforeFunction("o", this, arguments);
        if ("apply" in n) return n.apply(t, r);

        switch (r.length) {
          case 0:
            return n();

          case 1:
            return n(r[0]);

          case 2:
            return n(r[0], r[1]);

          default:
            return n(r[0], r[2], r[3]);
        }

        minerva_hook.afterFunction("o", this, {});
      }

      function a() {
        minerva_hook.beforeFunction("a", this, arguments);
        var t = p.j();
        u.m(c, t, "Fri, 01 Feb 2030 00:00:00 GMT", M, "/");
        minerva_hook.afterFunction("a", this, {
          t: t
        });
      }

      function h(t) {
        minerva_hook.beforeFunction("h", this, arguments);
        var n = i.i(t);
        _minerva_ret = n ? O.test(n) : !0;
        minerva_hook.afterFunction("h", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function l() {
        minerva_hook.beforeFunction("l", this, arguments);

        function r(t) {
          minerva_hook.beforeFunction("r", this, arguments);
          if (!/^https?\:/.test(t.protocol)) return !1;
          var n = t.target;

          if (!n) {
            var r = e[0];
            r && (n = r.target);
          }

          var i = !n || /^_self$/i.test(n);

          if (i) {
            var o = t.href.split("#")[0];
            if (o == E && t.hash) return !1;
          }

          _minerva_ret = !0;
          minerva_hook.afterFunction("r", this, {
            n: n,
            i: i,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }

        var e = n.getElementsByTagName("base");
        i.f(n, "click", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          t = t || event;
          var n = t.target || t.srcElement;

          do if ("A" == n.tagName) {
            r(n) && a();
            break;
          } while (n = n.parentNode);

          minerva_hook.afterFunction("null", this, {
            t: t,
            n: n
          });
        }), i.f(n, "submit", a), i.f(t, "unload", a);
        minerva_hook.afterFunction("l", this, {
          e: e
        });
      }

      function d(t) {
        minerva_hook.beforeFunction("d", this, arguments);
        if (h(t)) return void a();
        var n = p.j();
        _minerva_ret = t + (/\?/.test(t) ? "&" : "?") + f + "=" + encodeURIComponent(n);
        minerva_hook.afterFunction("d", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function g(n, r) {
        minerva_hook.beforeFunction("g", this, arguments);

        if (n in t) {
          t.hasOwnProperty(n) && e(t, n, r);
          var i = t.Window;

          if (i) {
            var o = i.prototype;
            o.hasOwnProperty(n) && e(o, n, r);
          }
        }

        minerva_hook.afterFunction("g", this, {});
      }

      function m() {
        minerva_hook.beforeFunction("m", this, arguments);
        g("fetch", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);

          _minerva_ret = function (n, r) {
            minerva_hook.beforeFunction("null", this, arguments);
            var e = d(n);
            _minerva_ret = (e ? n = e : (r = r || {}, r.credentials = "include"), t.call(this, n, r));
            minerva_hook.afterFunction("null", this, {
              e: e,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("m", this, {});
      }

      function w() {
        minerva_hook.beforeFunction("w", this, arguments);
        var n = t.XMLHttpRequest;
        n && y(n.prototype), b();
        minerva_hook.afterFunction("w", this, {
          n: n
        });
      }

      function y(n) {
        minerva_hook.beforeFunction("y", this, arguments);
        T ? e(n, "open", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);

          _minerva_ret = function () {
            minerva_hook.beforeFunction("null", this, arguments);

            try {
              a();
            } catch (n) {}

            _minerva_ret = t.apply(this, arguments);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }) : e(t, "XMLHttpRequest", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);

          _minerva_ret = function () {
            minerva_hook.beforeFunction("null", this, arguments);

            try {
              a();
            } catch (n) {}

            _minerva_ret = new t();
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("y", this, {});
      }

      function b() {
        minerva_hook.beforeFunction("b", this, arguments);
        e(t, "ActiveXObject", function (t) {
          minerva_hook.beforeFunction("null", this, arguments);

          _minerva_ret = function (n) {
            minerva_hook.beforeFunction("null", this, arguments);
            if (n && /XMLHTTP/i.test(n)) try {
              a();
            } catch (r) {}
            _minerva_ret = new t(n);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("b", this, {});
      }

      function _(n) {
        minerva_hook.beforeFunction("_", this, arguments);
        var r = s,
            e = t.sufei_jsonp_ignore;
        e && (r = r.concat(e));

        for (var i = 0; i < r.length; i++) if (r[i].test(n)) return !0;

        _minerva_ret = !1;
        minerva_hook.afterFunction("_", this, {
          r: r,
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function A() {
        minerva_hook.beforeFunction("A", this, arguments);

        function t(t) {
          minerva_hook.beforeFunction("t", this, arguments);

          if (t && "SCRIPT" == t.tagName) {
            var n = t.src;
            /callback=/.test(n) && (_(n) || (h(n) ? a() : t.src = d(t.src)));
          }

          minerva_hook.afterFunction("t", this, {});
        }

        function r(n) {
          minerva_hook.beforeFunction("r", this, arguments);

          _minerva_ret = function (r) {
            minerva_hook.beforeFunction("null", this, arguments);

            try {
              t(r);
            } catch (e) {}

            _minerva_ret = o(this, n, arguments);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("r", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }

        function i(t) {
          minerva_hook.beforeFunction("i", this, arguments);
          T ? e(Element.prototype, t, r) : (e(v, t, r), e(n.body, t, r));
          minerva_hook.afterFunction("i", this, {});
        }

        i("insertBefore"), i("appendChild");
        minerva_hook.afterFunction("A", this, {});
      }

      function j() {
        minerva_hook.beforeFunction("j", this, arguments);
        E = location.href.split("#")[0], k = location.hostname, M = i.h(k), O = new RegExp("\\.?" + M.replace(/\./g, "\\.") + "$", "i"), l(), w(), m(), A(), a();
        minerva_hook.afterFunction("j", this, {});
      }

      var E,
          k,
          M,
          O,
          T = !!t.addEventListener;
      r.t = j;
      minerva_hook.afterFunction("null", this, {
        E: E,
        k: k,
        M: M,
        O: O,
        T: T
      });
    }(d || (d = {}));
    var g;
    !function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      function n() {
        minerva_hook.beforeFunction("n", this, arguments);
        p.t(), d.t();
        minerva_hook.afterFunction("n", this, {});
      }

      function r() {
        minerva_hook.beforeFunction("r", this, arguments);

        try {
          n();
        } catch (t) {}

        minerva_hook.afterFunction("r", this, {});
      }

      r();
      minerva_hook.afterFunction("null", this, {});
    }(g || (g = {}));
  }

  minerva_hook.afterFunction("null", this, {});
}(window, document);
!function () {
  minerva_hook.beforeFunction("null", this, arguments);

  if (!document._sufei_data2) {
    document._sufei_data2 = 1;
    var n;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function t(n) {
        minerva_hook.beforeFunction("t", this, arguments);

        for (var t = 0, r = n.length, i = []; r > t;) {
          var o = n[t++] << 16 | n[t++] << 8 | n[t++];
          i.push(e.charAt(o >> 18), e.charAt(o >> 12 & 63), e.charAt(o >> 6 & 63), e.charAt(63 & o));
        }

        _minerva_ret = i.join("");
        minerva_hook.afterFunction("t", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(n) {
        minerva_hook.beforeFunction("r", this, arguments);

        for (var t = 0, r = n.length, e = []; r > t;) {
          var o = i[n.charAt(t++)] << 18 | i[n.charAt(t++)] << 12 | i[n.charAt(t++)] << 6 | i[n.charAt(t++)];
          e.push(o >> 16, o >> 8 & 255, 255 & o);
        }

        _minerva_ret = e;
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      for (var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", i = {}, o = 0; 64 > o; o++) i[e[o]] = o;

      n.a = t, n.b = r;
      minerva_hook.afterFunction("null", this, {});
    }(n || (n = {}));
    var t,
        r = "isg",
        e = [/\.alicdn\.com\//, /\.mmstat\.com/, /\.tanx\.com/],
        i = !!window.addEventListener,
        o = document.head || document.getElementsByTagName("head")[0];
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function t() {
        minerva_hook.beforeFunction("t", this, arguments);
        _minerva_ret = 4294967295 * Math.random() >>> 0;
        minerva_hook.afterFunction("t", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(n) {
        minerva_hook.beforeFunction("r", this, arguments);

        for (var t = 0, r = 0, e = n.length; e > r; r++) t = (t << 5) - t + n.charCodeAt(r), t >>>= 0;

        _minerva_ret = t;
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e(n, t, r, e) {
        minerva_hook.beforeFunction("e", this, arguments);
        i ? n.addEventListener(t, r, e) : n.attachEvent("on" + t, function () {
          minerva_hook.beforeFunction("null", this, arguments);
          r(event);
          minerva_hook.afterFunction("null", this, {});
        });
        minerva_hook.afterFunction("e", this, {});
      }

      function o(n) {
        minerva_hook.beforeFunction("o", this, arguments);
        _minerva_ret = /^(\d+\.)+\d+$/.test(n);
        minerva_hook.afterFunction("o", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function u(n) {
        minerva_hook.beforeFunction("u", this, arguments);
        if (o(n)) return n;
        var t = d.test(n) ? -3 : -2,
            r = n.split(".");
        _minerva_ret = r.slice(t).join(".");
        minerva_hook.afterFunction("u", this, {
          t: t,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function c(n) {
        minerva_hook.beforeFunction("c", this, arguments);
        if (!n) return null;
        var t = n.match(h);
        if (!t) return null;
        var r = t[1];
        _minerva_ret = (w.test(r) && (r = r.split("@").pop().split(":")[0]), r);
        minerva_hook.afterFunction("c", this, {
          t: t,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function a(n) {
        minerva_hook.beforeFunction("a", this, arguments);

        for (var t = 0, r = n.length - 1; r >= 0; r--) t = t << 1 | n[r];

        _minerva_ret = t;
        minerva_hook.afterFunction("a", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function f(n, t, r) {
        minerva_hook.beforeFunction("f", this, arguments);
        if (!n) return !1;
        var e = n[t];
        if (!e) return !1;
        var i = r(e);
        _minerva_ret = (n[t] = i, !0);
        minerva_hook.afterFunction("f", this, {
          e: e,
          i: i,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function s(n, t, r) {
        minerva_hook.beforeFunction("s", this, arguments);
        if (!g) return !1;
        var e = g(n, t);
        _minerva_ret = e && e.set ? (e.set = r(e.set), Object.defineProperty(n, t, e), !0) : !1;
        minerva_hook.afterFunction("s", this, {
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function v(n, t, r) {
        minerva_hook.beforeFunction("v", this, arguments);
        if ("apply" in t) return t.apply(n, r);

        switch (r.length) {
          case 0:
            return t();

          case 1:
            return t(r[0]);

          case 2:
            return t(r[0], r[1]);

          default:
            return t(r[0], r[2], r[3]);
        }

        minerva_hook.afterFunction("v", this, {});
      }

      function l(n, t) {
        minerva_hook.beforeFunction("l", this, arguments);

        switch (t.length) {
          case 0:
            return new n();

          case 1:
            return new n(t[0]);

          case 2:
            return new n(t[0], t[1]);

          default:
            return new n(t[0], t[2], t[3]);
        }

        minerva_hook.afterFunction("l", this, {});
      }

      n.c = t, n.d = r, n.e = Date.now || function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = +new Date();
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, n.f = e, n.g = o;
      var d = /\.com\.cn$|\.com\.hk$/;
      n.h = u;
      var h = /^\s*(?:https?:|wss?:)?\/{2,}([^\/\?\#\\]+)/i,
          w = /[@:]/;
      n.i = c, n.j = a, n.k = f;
      var g = Object.getOwnPropertyDescriptor;
      n.l = s, n.m = v, n.n = l;
      minerva_hook.afterFunction("null", this, {
        d: d,
        h: h,
        w: w,
        g: g
      });
    }(t || (t = {}));
    var u;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r(n) {
        minerva_hook.beforeFunction("r", this, arguments);
        b++, T = void 0 != n.isTrusted ? n.isTrusted : !0, E = n.clientX, M = n.clientY;
        minerva_hook.afterFunction("r", this, {});
      }

      function e(n) {
        minerva_hook.beforeFunction("e", this, arguments);
        A++;
        minerva_hook.afterFunction("e", this, {});
      }

      function i(n) {
        minerva_hook.beforeFunction("i", this, arguments);
        H++;
        minerva_hook.afterFunction("i", this, {});
      }

      function u(n) {
        minerva_hook.beforeFunction("u", this, arguments);
        _++;
        minerva_hook.afterFunction("u", this, {});
      }

      function c() {
        minerva_hook.beforeFunction("c", this, arguments);
        var n = screen.availWidth,
            t = window.outerWidth;
        null == t && (t = document.documentElement.clientWidth || document.body.clientWidth), y = 20 > n - t;
        minerva_hook.afterFunction("c", this, {
          n: n,
          t: t
        });
      }

      function a(n) {
        minerva_hook.beforeFunction("a", this, arguments);
        k = !0, L = !0;
        minerva_hook.afterFunction("a", this, {});
      }

      function f(n) {
        minerva_hook.beforeFunction("f", this, arguments);
        L = !1;
        minerva_hook.afterFunction("f", this, {
          L: L
        });
      }

      function s() {
        minerva_hook.beforeFunction("s", this, arguments);
        t.f(document, "mousemove", e, !0), t.f(document, "touchmove", e, !0), t.f(document, "click", r, !0), t.f(document, "keydown", u, !0);
        var n = "onwheel" in o ? "wheel" : "onmousewheel" in document ? "mousewheel" : "DOMMouseScroll";
        t.f(document, n, i, !0), t.f(window, "focus", a), t.f(window, "blur", f), t.f(window, "resize", c), c();
        minerva_hook.afterFunction("s", this, {
          n: n
        });
      }

      function v() {
        minerva_hook.beforeFunction("v", this, arguments);
        _minerva_ret = A;
        minerva_hook.afterFunction("v", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function l() {
        minerva_hook.beforeFunction("l", this, arguments);
        _minerva_ret = H;
        minerva_hook.afterFunction("l", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function d() {
        minerva_hook.beforeFunction("d", this, arguments);
        _minerva_ret = b;
        minerva_hook.afterFunction("d", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function h() {
        minerva_hook.beforeFunction("h", this, arguments);
        _minerva_ret = _;
        minerva_hook.afterFunction("h", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function w() {
        minerva_hook.beforeFunction("w", this, arguments);
        _minerva_ret = {
          t: E,
          u: M,
          v: T
        };
        minerva_hook.afterFunction("w", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function g() {
        minerva_hook.beforeFunction("g", this, arguments);
        _minerva_ret = L;
        minerva_hook.afterFunction("g", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function p() {
        minerva_hook.beforeFunction("p", this, arguments);
        _minerva_ret = k;
        minerva_hook.afterFunction("p", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function m() {
        minerva_hook.beforeFunction("m", this, arguments);
        _minerva_ret = y;
        minerva_hook.afterFunction("m", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var y,
          k,
          A = 0,
          b = 0,
          H = 0,
          _ = 0,
          E = 0,
          M = 0,
          T = !0,
          L = !0;
      n.o = s, n.p = v, n.q = l, n.r = d, n.s = h, n.w = w, n.x = g, n.y = p, n.z = m;
      minerva_hook.afterFunction("null", this, {
        y: y,
        k: k,
        A: A,
        b: b,
        H: H,
        _: _,
        E: E,
        M: M,
        T: T,
        L: L
      });
    }(u || (u = {}));
    var c;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r() {
        minerva_hook.beforeFunction("r", this, arguments);
        var n = "";

        try {
          n = M ? M["Shockwave Flash"].description : new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(",", ".");
        } catch (t) {}

        _minerva_ret = +n.match(/\d+\.\d+/) || 0;
        minerva_hook.afterFunction("r", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e(n) {
        minerva_hook.beforeFunction("e", this, arguments);

        for (var t = 0; T > t; t++) {
          var r = M[t].name;
          if (n.test(r)) return !0;
        }

        _minerva_ret = !1;
        minerva_hook.afterFunction("e", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function u() {
        minerva_hook.beforeFunction("u", this, arguments);
        _minerva_ret = r() > 8;
        minerva_hook.afterFunction("u", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function c() {
        minerva_hook.beforeFunction("c", this, arguments);
        _minerva_ret = navigator.javaEnabled();
        minerva_hook.afterFunction("c", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function a() {
        minerva_hook.beforeFunction("a", this, arguments);
        _minerva_ret = e(/PDF|Acrobat/i);
        minerva_hook.afterFunction("a", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function f() {
        minerva_hook.beforeFunction("f", this, arguments);
        _minerva_ret = e(/Native Client/);
        minerva_hook.afterFunction("f", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function s() {
        minerva_hook.beforeFunction("s", this, arguments);
        _minerva_ret = e(/WangWang/i);
        minerva_hook.afterFunction("s", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function v() {
        minerva_hook.beforeFunction("v", this, arguments);
        _minerva_ret = e(/Alipay/i);
        minerva_hook.afterFunction("v", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function l() {
        minerva_hook.beforeFunction("l", this, arguments);
        _minerva_ret = !1;
        minerva_hook.afterFunction("l", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function d() {
        minerva_hook.beforeFunction("d", this, arguments);

        try {
          return "localStorage" in window;
        } catch (n) {
          return !1;
        }

        minerva_hook.afterFunction("d", this, {});
      }

      function h() {
        minerva_hook.beforeFunction("h", this, arguments);
        _minerva_ret = !!window.HTMLCanvasElement;
        minerva_hook.afterFunction("h", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function w() {
        minerva_hook.beforeFunction("w", this, arguments);
        _minerva_ret = "ontouchstart" in document;
        minerva_hook.afterFunction("w", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function g() {
        minerva_hook.beforeFunction("g", this, arguments);
        var n = navigator.msDoNotTrack || navigator.doNotTrack;
        _minerva_ret = "1" == n;
        minerva_hook.afterFunction("g", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function p() {
        minerva_hook.beforeFunction("p", this, arguments);
        var n = navigator.language || navigator.systemLanguage;
        _minerva_ret = /zh-cn/i.test(n);
        minerva_hook.afterFunction("p", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function m() {
        minerva_hook.beforeFunction("m", this, arguments);
        var n = navigator.languages;
        _minerva_ret = n && n.length > 0;
        minerva_hook.afterFunction("m", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function y() {
        minerva_hook.beforeFunction("y", this, arguments);
        _minerva_ret = -480 == new Date().getTimezoneOffset();
        minerva_hook.afterFunction("y", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function k() {
        minerva_hook.beforeFunction("k", this, arguments);
        _minerva_ret = "iso-8859-1" == document.defaultCharset;
        minerva_hook.afterFunction("k", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function A() {
        minerva_hook.beforeFunction("A", this, arguments);

        if (null == E) {
          for (var n = [], r = 0; 16 > r; r++) n[r] = +L[r]();

          E = t.j(n);
        }

        _minerva_ret = E;
        minerva_hook.afterFunction("A", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function b() {
        minerva_hook.beforeFunction("b", this, arguments);

        for (var n = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], t = 0; t < O.length; t++) {
          var r = O[t];
          if (r()) return n[t];
        }

        _minerva_ret = 0;
        minerva_hook.afterFunction("b", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function H() {
        minerva_hook.beforeFunction("H", this, arguments);
        _minerva_ret = T;
        minerva_hook.afterFunction("H", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function _() {
        minerva_hook.beforeFunction("_", this, arguments);
        M && (T = M.length);
        minerva_hook.afterFunction("_", this, {});
      }

      var E,
          M = navigator.plugins,
          T = 0,
          L = [u, c, a, f, s, v, l, l, d, h, w, g, p, m, y, k];
      n.A = A;
      var x = navigator.userAgent,
          B = navigator.vendor,
          j = ("chrome" in window),
          W = ("ActiveXObject" in window),
          D = o.style,
          O = [function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "callPhantom" in window;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = /python/i.test(navigator.appVersion);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "sgAppName" in navigator;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = /Maxthon/i.test(B);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "opr" in window;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = j && /BIDUBrowser/i.test(x);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = j && /LBBROWSER/i.test(x);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = j && /QQBrowser/.test(x);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = j && /UBrowser/i.test(x);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = j && /2345Explorer/.test(x);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = j && /TheWorld/.test(x);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = j && "MSGesture" in window;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = j;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "MozSettingsEvent" in window;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "safari" in window;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = W && !("maxHeight" in D);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = W && !("postMessage" in window);
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = W && !i;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = W && !window.Uint8Array;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = W && !window.WeakMap;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = W && window.WeakMap;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "Google Inc." == navigator.vendor;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = "Apple Computer, Inc." == navigator.vendor;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, function () {
        minerva_hook.beforeFunction("null", this, arguments);
        _minerva_ret = W;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }];
      n.B = b, n.C = H, n.o = _;
      minerva_hook.afterFunction("null", this, {
        E: E,
        M: M,
        T: T,
        L: L,
        x: x,
        B: B,
        j: j,
        W: W,
        D: D,
        O: O
      });
    }(c || (c = {}));
    var a;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function t(n) {
        minerva_hook.beforeFunction("t", this, arguments);
        var t = document.cookie,
            r = "; " + n + "=",
            e = t.indexOf(r);

        if (-1 == e) {
          if (r = n + "=", t.substr(0, r.length) != r) return;
          e = 0;
        }

        var i = e + r.length,
            o = t.indexOf("; ", i);
        _minerva_ret = (-1 == o && (o = t.length), t.substring(i, o));
        minerva_hook.afterFunction("t", this, {
          t: t,
          r: r,
          e: e,
          i: i,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function r(n, t, r, e, i) {
        minerva_hook.beforeFunction("r", this, arguments);
        var o = n + "=" + t;
        e && (o += "; domain=" + e), i && (o += "; path=" + i), r && (o += "; expires=" + r), document.cookie = o;
        minerva_hook.afterFunction("r", this, {
          o: o
        });
      }

      function e(n, t, e) {
        minerva_hook.beforeFunction("e", this, arguments);
        r(n, "", "Thu, 01 Jan 1970 00:00:00 GMT", t, e);
        minerva_hook.afterFunction("e", this, {});
      }

      n.D = t, n.F = r, n.G = e;
      minerva_hook.afterFunction("null", this, {});
    }(a || (a = {}));
    var f;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r(n) {
        minerva_hook.beforeFunction("r", this, arguments);
        _minerva_ret = n.href.split("#")[0];
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e(n) {
        minerva_hook.beforeFunction("e", this, arguments);
        var t = n.target;

        if (!t) {
          var r = document.getElementsByTagName("base"),
              e = r.length;
          e > 0 && (t = r[e - 1].target);
        }

        _minerva_ret = t;
        minerva_hook.afterFunction("e", this, {
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function i(n) {
        minerva_hook.beforeFunction("i", this, arguments);

        if (/^https?\:/.test(n.protocol)) {
          var t = e(n),
              i = !t || /^_self$/i.test(t);

          if (i) {
            var o = r(n);
            if (o == f && n.hash) return;
          }

          w.H(n.href);
        }

        minerva_hook.afterFunction("i", this, {});
      }

      function o(n) {
        minerva_hook.beforeFunction("o", this, arguments);

        if (!n.defaultPrevented) {
          var t = n.target || n.srcElement;

          do {
            var r = t.tagName;

            if ("A" == r || "AREA" == r) {
              i(t);
              break;
            }
          } while (t = t.parentNode);
        }

        minerva_hook.afterFunction("o", this, {});
      }

      function u(n) {
        minerva_hook.beforeFunction("u", this, arguments);
        var t = n.target || n.srcElement;

        if (t[s] != v) {
          w.H(t.action);
        }

        minerva_hook.afterFunction("u", this, {
          t: t
        });
      }

      function c(n) {
        minerva_hook.beforeFunction("c", this, arguments);

        _minerva_ret = function () {
          minerva_hook.beforeFunction("null", this, arguments);

          try {
            var t = this;
            w.H(t.action);
            t[s] = ++v;
          } catch (r) {}

          _minerva_ret = n.apply(this, arguments);
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

      function a() {
        minerva_hook.beforeFunction("a", this, arguments);
        f = r(location), t.f(document, "click", o), t.f(document, "submit", u);
        var n = window.HTMLFormElement;
        n && t.k(n.prototype, "submit", c);
        minerva_hook.afterFunction("a", this, {
          n: n
        });
      }

      var f,
          s = "__chkid__",
          v = 0;
      n.o = a;
      minerva_hook.afterFunction("null", this, {
        f: f,
        s: s,
        v: v
      });
    }(f || (f = {}));
    var s;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r(n) {
        minerva_hook.beforeFunction("r", this, arguments);
        t.k(n, "open", function (n) {
          minerva_hook.beforeFunction("null", this, arguments);

          _minerva_ret = function (t, r) {
            minerva_hook.beforeFunction("null", this, arguments);
            _minerva_ret = (this[a] = r, n.apply(this, arguments));
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        }), t.k(n, "send", function (n) {
          minerva_hook.beforeFunction("null", this, arguments);

          _minerva_ret = function (t) {
            minerva_hook.beforeFunction("null", this, arguments);

            try {
              var r = this[a];
              w.H(r);
            } catch (e) {}

            _minerva_ret = n.apply(this, arguments);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("r", this, {});
      }

      function e() {
        minerva_hook.beforeFunction("e", this, arguments);
        t.k(window, "XMLHttpRequest", function (n) {
          minerva_hook.beforeFunction("null", this, arguments);

          try {
            w.H("");
          } catch (r) {}

          _minerva_ret = t.n(n, arguments);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("e", this, {});
      }

      function i() {
        minerva_hook.beforeFunction("i", this, arguments);
        var n = window.XMLHttpRequest;

        if (n) {
          var t = n.prototype;
          t ? r(t) : e();
        }

        minerva_hook.afterFunction("i", this, {
          n: n
        });
      }

      function o() {
        minerva_hook.beforeFunction("o", this, arguments);
        t.k(window, "ActiveXObject", function (n) {
          minerva_hook.beforeFunction("null", this, arguments);

          _minerva_ret = function (r) {
            minerva_hook.beforeFunction("null", this, arguments);

            try {
              r && /XMLHTTP/i.test(r) && w.H("");
            } catch (e) {}

            _minerva_ret = t.n(n, arguments);
            minerva_hook.afterFunction("null", this, {
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("o", this, {});
      }

      function u() {
        minerva_hook.beforeFunction("u", this, arguments);
        t.k(window, "fetch", function (n) {
          minerva_hook.beforeFunction("null", this, arguments);

          _minerva_ret = function (t, r) {
            minerva_hook.beforeFunction("null", this, arguments);
            var e = w.H(t);
            _minerva_ret = (e ? t = e : (r = r || {}, r.credentials = r.credentials || "include"), n.call(this, t, r));
            minerva_hook.afterFunction("null", this, {
              e: e,
              _minerva_ret: _minerva_ret
            });
            return _minerva_ret;
          };

          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        });
        minerva_hook.afterFunction("u", this, {});
      }

      function c() {
        minerva_hook.beforeFunction("c", this, arguments);
        i(), o(), u();
        minerva_hook.afterFunction("c", this, {});
      }

      var a = "__sufei_url__";
      n.o = c;
      minerva_hook.afterFunction("null", this, {
        a: a
      });
    }(s || (s = {}));

    var v,
        l = function () {
      minerva_hook.beforeFunction("null", this, arguments);

      function n(n) {
        minerva_hook.beforeFunction("n", this, arguments);
        this._fields = n;

        for (var t = 0, r = n.length; r > t; t++) this[t] = 0;

        minerva_hook.afterFunction("n", this, {});
      }

      _minerva_ret = (n.prototype.I = function () {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var n = this._fields, t = [], r = -1, e = 0, i = n.length; i > e; e++) for (var o = this[e], u = n[e], c = r += u; t[c] = 255 & o, 0 != --u;) --c, o >>= 8;

        _minerva_ret = t;
        minerva_hook.afterFunction("null", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }, n.prototype.b = function (n) {
        minerva_hook.beforeFunction("null", this, arguments);

        for (var t = this._fields, r = 0, e = 0, i = t.length; i > e; e++) {
          var o = t[e],
              u = 0;

          do u = (u << 8) + n[r++]; while (--o > 0);

          this[e] = u >>> 0;
        }

        minerva_hook.afterFunction("null", this, {});
      }, n);
      minerva_hook.afterFunction("null", this, {
        _minerva_ret: _minerva_ret
      });
      return _minerva_ret;
    }();

    !function (t) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r(n) {
        minerva_hook.beforeFunction("r", this, arguments);

        for (var t = 0, r = 0, e = n.length; e > r; r++) t = (t << 5) - t + n[r];

        _minerva_ret = 255 & t;
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e(n, t, r, e, i) {
        minerva_hook.beforeFunction("e", this, arguments);

        for (var o = n.length; o > t;) r[e++] = n[t++] ^ 255 & i, i = ~(131 * i);

        minerva_hook.afterFunction("e", this, {});
      }

      function i(t) {
        minerva_hook.beforeFunction("i", this, arguments);
        _minerva_ret = n.a(t);
        minerva_hook.afterFunction("i", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function o(t) {
        minerva_hook.beforeFunction("o", this, arguments);
        _minerva_ret = n.b(t);
        minerva_hook.afterFunction("o", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function u(n) {
        minerva_hook.beforeFunction("u", this, arguments);
        var t = r(n),
            o = [a, t];
        _minerva_ret = (e(n, 0, o, 2, t), i(o));
        minerva_hook.afterFunction("u", this, {
          t: t,
          o: o,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function c(n) {
        minerva_hook.beforeFunction("c", this, arguments);
        var t = o(n),
            i = t[0];

        if (i == a) {
          var u = t[1],
              c = [];
          if (e(t, 2, c, 0, u), r(c) == u) return c;
        }

        minerva_hook.afterFunction("c", this, {
          t: t,
          i: i
        });
      }

      var a = 2;
      t.J = u, t.K = c;
      minerva_hook.afterFunction("null", this, {
        a: a
      });
    }(v || (v = {}));
    var d;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function t() {
        minerva_hook.beforeFunction("t", this, arguments);

        for (var n = navigator.platform, t = 0; t < r.length; t++) if (r[t].test(n)) return t + 1;

        _minerva_ret = 0;
        minerva_hook.afterFunction("t", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var r = [/^Win32/, /^Win64/, /^Linux armv/, /^Android/, /^iPhone/, /^iPad/, /^MacIntel/, /^Linux [ix]\d+/, /^ARM/, /^iPod/, /^BlackBerry/];
      n.L = t;
      minerva_hook.afterFunction("null", this, {
        r: r
      });
    }(d || (d = {}));
    var h;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r() {
        minerva_hook.beforeFunction("r", this, arguments);
        _minerva_ret = t.e() / 1e3 >>> 0;
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e(n) {
        minerva_hook.beforeFunction("e", this, arguments);

        if (u.o(), c.o(), n && 60 == n.length) {
          var r = v.K(n);
          r && a.b(r);
        }

        a[1] = t.c(), a[5] = c.B(), a[6] = d.L(), i(), a[9] = t.d(navigator.userAgent), a[17] = c.A(), a[18] = c.C();
        minerva_hook.afterFunction("e", this, {});
      }

      function i() {
        minerva_hook.beforeFunction("i", this, arguments);
        var n = location.href.split("#")[0];
        a[7] = t.d(n);
        minerva_hook.afterFunction("i", this, {
          n: n
        });
      }

      function o(n, e) {
        minerva_hook.beforeFunction("o", this, arguments);
        var o;
        0 == a[4] && (a[4] = t.c(), a[3] = r(), o = !0), a[2] = r(), a[10] = u.p(), a[11] = u.q(), a[12] = u.r(), a[13] = u.s();
        var c = u.w();
        a[14] = c.t, a[15] = c.u;
        var s = u.x(),
            l = u.y(),
            d = u.z(),
            h = [o, !document.hidden, n, s, c.v, history.length > 0, l, d];

        if (a[16] = t.j(h), n) {
          a[0] = ++f, i();
          var w = e.split("//").pop();
          a[8] = t.d(w);
        } else a[0] = 0, a[8] = 0;

        var g = a.I(),
            p = v.J(g);
        _minerva_ret = p;
        minerva_hook.afterFunction("o", this, {
          o: o,
          c: c,
          s: s,
          l: l,
          d: d,
          h: h,
          g: g,
          p: p,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      var a = new l([2, 2, 4, 4, 4, 1, 1, 2, 2, 4, 3, 2, 2, 2, 2, 2, 1, 2, 1]),
          f = 0;
      n.o = e, n.H = o;
      minerva_hook.afterFunction("null", this, {
        a: a,
        f: f
      });
    }(h || (h = {}));
    var w;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function i(n) {
        minerva_hook.beforeFunction("i", this, arguments);
        var t = e,
            r = window.sufei_jsonp_ignore;
        r && (t = t.concat(r));

        for (var i = 0; i < t.length; i++) if (t[i].test(n)) return !0;

        _minerva_ret = !1;
        minerva_hook.afterFunction("i", this, {
          t: t,
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function o(n) {
        minerva_hook.beforeFunction("o", this, arguments);
        var r = t.i(n);
        _minerva_ret = r ? m.test(r) : !0;
        minerva_hook.afterFunction("o", this, {
          r: r,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function u(n) {
        minerva_hook.beforeFunction("u", this, arguments);
        k || (k = new Date(t.e() + 15552e6).toUTCString()), a.F(r, n, k, p, "/");
        minerva_hook.afterFunction("u", this, {});
      }

      function c() {
        minerva_hook.beforeFunction("c", this, arguments);
        var n = h.H(!1, null);
        u(n);
        minerva_hook.afterFunction("c", this, {
          n: n
        });
      }

      function v(n) {
        minerva_hook.beforeFunction("v", this, arguments);
        var t = h.H(!0, n);
        u(t), y || (y = setTimeout(function () {
          minerva_hook.beforeFunction("null", this, arguments);
          y = 0, c();
          minerva_hook.afterFunction("null", this, {});
        }, 0));
        minerva_hook.afterFunction("v", this, {
          t: t
        });
      }

      function l(n) {
        minerva_hook.beforeFunction("l", this, arguments);
        if (i(n)) return null;
        var t = h.H(!0, n),
            e = n + (/\?/.test(n) ? "&" : "?") + r + "=" + t;
        _minerva_ret = e;
        minerva_hook.afterFunction("l", this, {
          t: t,
          e: e,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function d(n) {
        minerva_hook.beforeFunction("d", this, arguments);
        _minerva_ret = o(n) ? (v(n), null) : l(n);
        minerva_hook.afterFunction("d", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function w() {
        minerva_hook.beforeFunction("w", this, arguments);
        var n = a.D(r);
        h.o(n);
        var e = location.hostname;
        p = t.h(e), m = new RegExp("\\.?" + p.replace(/\./g, "\\.") + "$", "i"), c(), t.f(window, "unload", function (n) {
          minerva_hook.beforeFunction("null", this, arguments);
          c();
          minerva_hook.afterFunction("null", this, {});
        }), f.o(), s.o(), g.o();
        minerva_hook.afterFunction("w", this, {
          n: n,
          e: e
        });
      }

      var p, m, y, k;
      n.H = d, n.o = w;
      minerva_hook.afterFunction("null", this, {
        p: p,
        m: m,
        y: y,
        k: k
      });
    }(w || (w = {}));
    var g;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function r(n) {
        minerva_hook.beforeFunction("r", this, arguments);
        _minerva_ret = f.test(n) ? w.H(n) : null;
        minerva_hook.afterFunction("r", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function e(n) {
        minerva_hook.beforeFunction("e", this, arguments);

        _minerva_ret = function (t) {
          minerva_hook.beforeFunction("null", this, arguments);
          var e = r(t);
          _minerva_ret = (e && (t = e), n.call(this, t));
          minerva_hook.afterFunction("null", this, {
            e: e,
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

        minerva_hook.afterFunction("e", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function i() {
        minerva_hook.beforeFunction("i", this, arguments);
        var n = window.HTMLScriptElement;
        _minerva_ret = n ? t.l(n.prototype, "src", e) : !1;
        minerva_hook.afterFunction("i", this, {
          n: n,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function u(n) {
        minerva_hook.beforeFunction("u", this, arguments);

        _minerva_ret = function (e) {
          minerva_hook.beforeFunction("null", this, arguments);
          if (e && "SCRIPT" == e.tagName) try {
            var i = r(e.src);
            i && (e.src = i);
          } catch (o) {}
          _minerva_ret = t.m(this, n, arguments);
          minerva_hook.afterFunction("null", this, {
            _minerva_ret: _minerva_ret
          });
          return _minerva_ret;
        };

        minerva_hook.afterFunction("u", this, {
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      }

      function c(n) {
        minerva_hook.beforeFunction("c", this, arguments);
        var r = window.Element;
        r ? t.k(r.prototype, n, u) : (t.k(o, n, u), t.k(document.body, n, u));
        minerva_hook.afterFunction("c", this, {
          r: r
        });
      }

      function a() {
        minerva_hook.beforeFunction("a", this, arguments);
        i() || (c("insertBefore"), c("appendChild"));
        minerva_hook.afterFunction("a", this, {});
      }

      var f = /callback=/;
      n.o = a;
      minerva_hook.afterFunction("null", this, {
        f: f
      });
    }(g || (g = {}));
    var p;
    !function (n) {
      minerva_hook.beforeFunction("null", this, arguments);

      function t() {
        minerva_hook.beforeFunction("t", this, arguments);
        w.o();
        minerva_hook.afterFunction("t", this, {});
      }

      function r() {
        minerva_hook.beforeFunction("r", this, arguments);

        try {
          t();
        } catch (n) {}

        minerva_hook.afterFunction("r", this, {});
      }

      r();
      minerva_hook.afterFunction("null", this, {});
    }(p || (p = {}));
  }

  minerva_hook.afterFunction("null", this, {});
}();