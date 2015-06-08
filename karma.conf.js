'use strict';

var src = './src',
    srcFiles = src + '/**/*.js',
    test = './test',
    testFiles = test + '/**/*.test.js';
module.exports = function(config) {
    config.set({
		basePath: './',
        frameworks: ['mocha'],
        files: [
			{pattern: './node_modules/chai/chai.js', include: true},
			srcFiles,
			testFiles
		],
        client: {
            mocha: {
                reporter: 'spec'
            }
        },
        preprocessors: {
			srcFiles: ['babel'],
			testFiles: ['babel']
        },
		'babelPreprocessor': {
			// options go here
		},
		plugins: [
			'karma-mocha'
		]
    })
}
