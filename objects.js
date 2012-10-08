#!/usr/bin/env rhino

if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F       = function() {};
    f.prototype = o;
    return new F();
  };
}
