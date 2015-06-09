'use strict';

var src = './src',
    srcFile = '**/*.js',
    test = './test',
    testFile = '**/*.test.js',
    reactFile = '**/*.jsx';

var gulp = require('gulp'),
    path = require('path'),
    eslint = require('gulp-eslint');

var eslintConfig = './.eslintrc';
gulp.task('lint', function() {
    return gulp.src([path.join(src, srcFile), path.join(src, reactFile), path.join(test, testFile)])
        .pipe(eslint(eslintConfig))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

/**
 * 测试 test
 */
var mocha = require('gulp-mocha'),
    karma = require('karma').server;

require('babel/register');
gulp.task('test:mocha', ['lint'], function(){
    return gulp.src([path.join(test, testFile)], {raed: false})
        .pipe(mocha({
            report: 'spec'
        }));
});


gulp.task('test:karma', ['lint'], function(done) {
    karma.start({
        configFile: path.join(__dirname, 'karma.conf.js'),
        singleRun: true
    }, done);
});
