'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    connect = require('gulp-connect'),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('autoprefixer');

gulp.task('scss', function () {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        .pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('html', function () {
    gulp.src('./src/index.html')
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});

gulp.task('img', function () {
    gulp.src('./src/img/*.svg', { base: 'src' })
	.pipe(gulp.dest('dist'))
	.pipe(connect.reload());
});

gulp.task('watch', ['img', 'scss', 'html'], function () {
    gulp.watch(['./src/index.html'], ['html']);
    gulp.watch('./src/scss/**/*.scss', ['scss']);
    gulp.watch('./src/img/*.svg', ['img']);
});

gulp.task('connect', function() {
    connect.server({
	root: 'dist',
	livereload: true,
	host: '0.0.0.0'
    });
});

gulp.task('default', ['connect', 'watch']);
