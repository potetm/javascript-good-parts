#!/usr/bin/env rhino

load('function-augmentation.js');

var add = function(a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	}
};

var add1 = add.curry(1);
print(add1(100));
