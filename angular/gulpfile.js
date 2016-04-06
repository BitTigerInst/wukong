var gulp = require('gulp');
var browserify = require('gulp-browserify');
var runSequence = require('run-sequence');
var del = require('del');
var concat = require('gulp-concat');

gulp.task('clean', function () {
  return del([
    '../public/angular/dist/**/*',
    '../public/angular/views/',
    '../public/angular/image/'
  ], { force: true });
});

gulp.task('views', function () {
  return gulp.src(['views/**/*']).
    pipe(gulp.dest('../public/angular/views/'));
});

gulp.task('images', function () {
  return gulp.src(['image/*']).
    pipe(gulp.dest('../public/angular/image/'));
});

gulp.task('background', function () {
  return gulp.src(['style/images/*']).
    pipe(gulp.dest('../public/angular/dist/css/images/'));
});

gulp.task('styles', function () {
  return gulp.src('style/**/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../public/angular/dist/css/'));
});

gulp.task('scripts', function () {
  return gulp.src('js/app.js').
    pipe(browserify()).
    pipe(gulp.dest('../public/angular/dist/js/'));
});

gulp.task('watch', function () {
  gulp.watch(['js/*.js', 'index.html'], ['browserify']);
});

gulp.task('default', function (callback) {
  runSequence('clean', 'views', 'images', 'background', 'styles', 'scripts', callback);
});

