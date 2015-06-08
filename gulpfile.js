'use strict';

var gulp = require('gulp');
var karma = require('karma').server;

/**
 * run test once and exit
 **/ 
gulp.task('test', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});
