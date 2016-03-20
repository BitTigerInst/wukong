var gulp = require('gulp');

var del = require('del');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');

gulp.task('clean', function () {
  return del(['../public/static/**/**/**/**/*', '../public/dist'], { force: true });
});

gulp.task('views', ['clean'], function () {
  return gulp.src(['./*.html', './*.css'])
    .pipe(gulp.dest('../public/static/'));
});

gulp.task('styles', function () {
  return gulp.src('css/**/**/*.css')
    .pipe(concat('all.css'))
    .pipe(gulp.dest('../public/static/dist/css/'));
});

gulp.task('copy', function () {
  return gulp.src(['css/fonts/*', 'images/**/**/**/*', 'include/**/**/**/*'], { base: '.' })
    .pipe(gulp.dest('../public/static/dist/'));
});

gulp.task('copy-vmap', function () {
  return gulp.src('js/vmap/**/*')
    .pipe(gulp.dest('../public/static/dist/js/vmap'));
});

gulp.task('scripts', ['copy-vmap'], function () {
  return gulp.src(['./js/plugins/*.js', './js/*.js'], { base: './js' })
    .pipe(uglify().on('error', gutil.log))
    .pipe(gulp.dest('../public/static/dist/js/'));
});

gulp.task('default', ['views', 'copy', 'styles', 'scripts']);

