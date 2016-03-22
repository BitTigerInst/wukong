var gulp = require('gulp');
var browserify = require('gulp-browserify');

var del = require('del');
var concat = require('gulp-concat');
// var uglify = require('gulp-uglify');

gulp.task('clean', function () {
  return del([
    '../public/angular/dist/**/*',
    '../public/angular/views/'
  ], { force: true });
});

gulp.task('views', function () {
  return gulp.
    src(['views/**/*']).
    pipe(gulp.dest('../public/angular/views/'));
});

gulp.task('styles', function () {
  return gulp.src('style/*')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../public/angular/dist/css/'));
});

gulp.task('scripts', function () {
  return gulp.
    src('js/app.js').
    pipe(browserify()).
    pipe(gulp.dest('../public/angular/dist/js/'));
});

gulp.task('watch', function () {
  gulp.watch(['js/*.js', 'index.html'], ['browserify']);
});

gulp.task('default', ['clean', 'views', 'styles', 'scripts']);

