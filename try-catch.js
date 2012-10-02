#!/usr/bin/env rhino

var add = function(num1, num2) {
	if (typeof num1 !== 'number' || typeof num2 !== 'number') {
		throw {
			name: 'TypeError',
			message: 'number required'
		};
	}
	return num1 + num2;
};

var try_it = function() {
	try {
		add('three', 'seven');
	} catch (e) {
		print('name=' + e.name + ' message=' + e.message);
	}
};

try_it();
