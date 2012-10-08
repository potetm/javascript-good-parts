#!/usr/bin/env rhino

var mammal = function(spec) {
  var that = {};

  that.get_name = function() {
    return spec.name;
  };
  that.says = function() {
    return spec.saying || '';
  };

  return that;
};

var myMammel = mammal({
  name:   'Steve',
  saying: 'boo!'
});

print(myMammel.get_name());
print(myMammel.says());

var cat = function(spec) {
};
