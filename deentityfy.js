#!/usr/bin/env rhino

load('function-augmentation.js');

String.method('deentityfy', function() {
	var entity = {
		quote: '"',
		lt:    '<',
		gt:    '>'
	};

	return function() {
		return this.replace(
			/&([^&;]+);/g,
			function(a, b) {
				var r = entity[b];
				return (typeof r === 'string') ? r : a;
			}
		);
	};
}());

print('&lt;&quote;&gt;'.deentityfy());
