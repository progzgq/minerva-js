define("query-selector-base", [], function () {
  minerva_hook.beforeFunction("null", this, arguments);
  //! Copyright 2015, query-selector-base@6.1.2 MIT Licensed, build time: Thu, 29 Oct 2015 12:31:02 GMT 
  var e;

  _minerva_ret = e = function (e) {
    minerva_hook.beforeFunction("null", this, arguments);
    _minerva_ret = e = null;
    minerva_hook.afterFunction("null", this, {
      _minerva_ret: _minerva_ret
    });
    return _minerva_ret;
  }();

  minerva_hook.afterFunction("null", this, {
    e: e,
    _minerva_ret: _minerva_ret
  });
  return _minerva_ret;
});