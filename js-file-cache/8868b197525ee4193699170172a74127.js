define("event", ["event-dom", "event-custom"], function (e) {
  minerva_hook.beforeFunction("null", this, arguments);
  var t,
      n = e("event-dom"),
      r = e("event-custom");

  _minerva_ret = t = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    var t = n,
        v = r,
        o = t;
    _minerva_ret = (o.Target = v.Target, e = o);
    minerva_hook.afterFunction("null", this, {
      t: t,
      v: v,
      o: o,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }();

  minerva_hook.afterFunction("null", this, {
    t: t,
    n: n,
    r: r,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});