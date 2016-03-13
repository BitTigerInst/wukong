var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('browserify', function() {
  return gulp.
    src('js/app.js').
    pipe(browserify()).
    pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch(['js/*.js', 'index.html'], ['browserify']);
});