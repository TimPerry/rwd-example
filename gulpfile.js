'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect');

gulp.task('scss', function () {
    return gulp.src('./src/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./src/index.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});

gulp.task('watch', ['scss', 'html'], function () {
    gulp.watch(['./src/index.html'], ['html']);
    gulp.watch('./src/scss/**/*.scss', ['scss']);
});

gulp.task('connect', function() {
    connect.server({
	root: 'dist',
	livereload: true,
	host: '0.0.0.0'
    });
});

gulp.task('default', ['connect', 'watch']);
