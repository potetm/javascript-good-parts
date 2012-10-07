#!/usr/bin/env rhino

var add = function(x, y) {
  return (typeof x === 'number' && typeof y === 'number' && x + y) || '';
};

var Quo = function(string) {
  this.status = string;
};

Quo.prototype.get_status = function() {
  return this.status;
};

//var myQuo = new Quo('confused');
//print(myQuo.get_status());

var array = [2, 3];
var sum   = add.apply(null, array);

print(sum);

var statusObject = {
  status: 'A-OK'
};

print(Quo.prototype.get_status.apply(statusObject));
