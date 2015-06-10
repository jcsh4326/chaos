'use strict';

// a fake dom
require('./testHelper')('<html><body></body></html>');
const CompDemo = require('../src/demo.js');
var expect = require('chai').expect;

describe('greeter', function() {
	describe('render', function() {
		it('should be render with id : map1', function() {
			const React = this.React,
				TestUtils = this.TestUtils;
			var demo = TestUtils.renderIntoDocument(
				<CompDemo mapId='map1'/>,
				this.container
			);
			const result = demo.getId(),
				expected = 'map1';
			expect(result).to.equal(expected);
		});
		it('should be render with a default id : map', function() {
			const React = this.React,
				TestUtils = this.TestUtils;
			var demo = TestUtils.renderIntoDocument(
				<CompDemo />,
				this.container
			);
			const result = demo.getId(),
				expected = 'map';
			expect(result).to.equal(expected);
		});
	});
});
