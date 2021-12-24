define("io", ["util", "io-extra", "io-form"], function (i) {
  minerva_hook.beforeFunction("null", this, arguments);
  var r,
      e = i("util"),
      t = i("io-extra"),
      o = i("io-form");

  _minerva_ret = r = function (i) {
    minerva_hook.beforeFunction("null", this, arguments);
    var r = e,
        a = t,
        n = o;
    _minerva_ret = (r.mix(a, {
      serialize: n.serialize,
      getFormData: n.getFormData
    }), i = a);
    minerva_hook.afterFunction("null", this, {
      r: r,
      a: a,
      n: n,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }();

  minerva_hook.afterFunction("null", this, {
    r: r,
    e: e,
    t: t,
    o: o,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});