'use strict';

// a fake dom
require('./domTest')('<html><body><div id="test"></div></body></html>');

import CompDemo from '../src/demo.js';

import React from 'react';

var expect = require('chai').expect;

describe('greeter', function() {
	describe('getId()', function() {
		it('should be map', function() {
			var demo = React.render(
				<CompDemo id='map'/>,
				document.getElementById('test')
			);
			var result = demo.getId(),
				expected = 'map';
			expect(result).to.equal(expected);
		});
	});
	describe('#greet()', function() {
		it('should say Hello to mocha', function() {
			//var name = 'mocha',
			//	result = greeter.greet(name),
			//	expected = 'Hello, mocha';
			//expect(result).to.equal(expected);
		});
	});
});
