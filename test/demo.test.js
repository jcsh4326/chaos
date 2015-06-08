'use strict';

import greeter from '../src/demo.js';

var expect = require('chai').expect;

describe('greeter', function() {
	describe('#greet()', function() {
		it('should say Hello to mocha', function() {
			var name = 'mocha',
				result = greeter.greet(name),
				expected = 'Hello, mocha';
			expect(result).to.equal(expected);			
		});
	})    
});
