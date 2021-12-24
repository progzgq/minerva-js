define("node-event", ["node-base", "util", "event-dom"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var n,
      t,
      r = e("node-base"),
      a = e("util"),
      u = e("event-dom");
  _minerva_ret = (n = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var n = r,
        t = a,
        i = u,
        o = n.prototype,
        f = t.makeArray,
        d = ["on", "detach", "delegate", "undelegate", "off"],
        c = ["fire", "fireHandler", "trigger", "triggerHandler"];
    _minerva_ret = (n.KeyCode = i.KeyCode, n.Event = i, t.each(d, function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      o[e] = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this,
            t = f(arguments);
        _minerva_ret = (t.unshift(n), i[e].apply(i, t), n);
        minerva_hook.afterFunction("null", this, {
          n: n,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }), t.each(c, function (e) {
      minerva_hook.beforeFunction("null", this, arguments);

      o[e] = function () {
        minerva_hook.beforeFunction("null", this, arguments);
        var n = this,
            t = f(arguments);
        _minerva_ret = (t.unshift(n), i[e].apply(i, t));
        minerva_hook.afterFunction("null", this, {
          n: n,
          t: t,
          _minerva_ret: _minerva_ret
        });
        return _minerva_ret;
      };

      minerva_hook.afterFunction("null", this, {});
    }), e = n);
    minerva_hook.afterFunction("null", this, {
      n: n,
      t: t,
      i: i,
      o: o,
      f: f,
      d: d,
      c: c,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }(), t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = n;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }());
  minerva_hook.afterFunction("null", this, {
    n: n,
    t: t,
    r: r,
    a: a,
    u: u,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});