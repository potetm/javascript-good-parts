#!/usr/bin/env rhino

load('objects.js');

var myMammel = {
  name:     'Herb the Mammal',
  get_name: function() {
    return this.name;
  },
  says:     function() {
    return this.saying || '';
  }
};

var myCat = Object.create(myMammel);
myCat.name   = 'Steve';
myCat.saying = 'Meow';
myCat.purr   = function(n) {
  var i, s = '';

  for (i = 0; i < n; i++) {
    if (s) {
      s += '-';
    }

    s += 'r';
  }

  return s;
};
myCat.get_name = function() {
  return this.says() + ' ' + this.name + ' ' + this.says();
};

print(myCat.get_name());
print(myCat.purr(18));
