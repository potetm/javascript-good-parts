#!/usr/bin/env rhino

load('function-augmentation.js');

Function.method('new', function() {
  var that  = Object.create(this.prototype);
  var other = this.apply(that, arguments);
  return (typeof other === 'object' && other) || that;
});
