/*global -$ */
'use strict';

var gulp = require('gulp'),
    path = require('path'),
    $ = require('gulp-load-plugins')();

gulp.task('deploy', [], function() {

    return gulp.src('./app/**')
        .pipe($.s3(require('./aws-s3-deploy.json'), {
            headers: {
                'Cache-Control': 'max-age=86400, no-transform, public'
            }
        }));

});
