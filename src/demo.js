'use strict';

var greet = function(name) {
	return 'Hello, ' + name;
};

var greeter = {};
greeter.greet = greet;

module.exports = greeter;