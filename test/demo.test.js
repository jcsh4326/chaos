'use strict';

// a fake dom
require('./testHelper')('<html><body></body></html>');
const CompDemo = require('../src/demo.js');

describe('greeter', function() {
	describe('render', function() {
		it('should be render', function() {
			const React = this.React;
			const TestUtils = this.TestUtils;
			var demo = TestUtils.renderIntoDocument(
				<CompDemo name='map'/>,
				this.container
			);
			console.info(demo.getId());
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
