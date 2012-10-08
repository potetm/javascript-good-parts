#!/usr/bin/env rhino

load('function-augmentation.js');

var Mammal = function(name) {
  this.name = name;
};

Mammal.prototype.get_name = function() {
  return this.name;
};

Mammal.prototype.says = function() {
  return this.saying || '';
};

var myMammal = new Mammal('Kitty!');

print(myMammal.get_name());
