define("node", ["node-base", "node-event", "node-anim"], function (n) {
  minerva_hook.beforeFunction("null", this, arguments);
  {
    var e,
        o = n("node-base");
    n("node-event"), n("node-anim");
  }

  _minerva_ret = e = function (n) {
    minerva_hook.beforeFunction("null", this, arguments);
    var e = o;
    _minerva_ret = n = e;
    minerva_hook.afterFunction("null", this, {
      e: e,
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }();

  minerva_hook.afterFunction("null", this, {
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});