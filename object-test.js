#!/usr/bin/env rhino

load('objects.js');

var stooge = {
  first_name: 'Jerome',
  last_name:  'Howard'
};

var other_stooge = Object.create(stooge);

print('other_stooge.first_name=' + other_stooge.first_name);

other_stooge.first_name = 'Harry';
other_stooge.nickname   = 'Moe';

print('other_stooge.first_name=' + other_stooge.first_name);
print('stooge.first_name=' + stooge.first_name);
