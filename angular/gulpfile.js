var gulp = require('gulp');
var browserify = require('gulp-browserify');
var runSequence = require('run-sequence');
var del = require('del');
var concat = require('gulp-concat');

// ******** Main Task ********
gulp.task('clean', function () {
  return del([
    '../views/index.html',
    '../public/angular/bower_components/',
    '../public/angular/dist/**/*',
    '../public/angular/views/',
    '../public/angular/image/'
  ], { force: true });
});

gulp.task('copyResource', function(callback) {
  runSequence('copyResource:bower_components', 'copyResource:views',
    'copyResource:images', 'copyResource:dist',callback);
});

gulp.task('copyLayout', function () {
  return gulp.src(['layout.html']).
  pipe(gulp.dest('../views/'));
});

gulp.task('watch', function () {
  gulp.watch(['js/*.js', 'views/**/*.html', 'index.html'], ['default']);
});

gulp.task('default', function (callback) {
  runSequence('clean', 'copyResource', 'copyLayout', callback);
});

// ******** Help Task ********
gulp.task('copyResource:bower_components', function () {
  return gulp.src(['bower_components/**/*']).
  pipe(gulp.dest('../public/angular/bower_components'));
});

gulp.task('copyResource:views', function () {
  return gulp.src(['views/**/*']).
    pipe(gulp.dest('../public/angular/views/'));
});

gulp.task('copyResource:images', function () {
  return gulp.src(['image/*']).
    pipe(gulp.dest('../public/angular/image/'));
});

gulp.task('copyResource:dist', function (callback) {
  runSequence('copyResource:dist:background', 'copyResource:dist:styles', 'copyResource:dist:scripts', callback);
});

gulp.task('copyResource:dist:background', function () {
  return gulp.src(['style/images/*']).
    pipe(gulp.dest('../public/angular/dist/css/images/'));
});

gulp.task('copyResource:dist:styles', function () {
  return gulp.src('style/**/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../public/angular/dist/css/'));
});

gulp.task('copyResource:dist:scripts', function () {
  return gulp.src('js/app.js').
    pipe(browserify()).
    pipe(gulp.dest('../public/angular/dist/js/'));
});
