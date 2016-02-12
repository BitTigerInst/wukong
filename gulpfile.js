'use strict';

var _gulp = require('gulp');

var _gulp2 = _interopRequireDefault(_gulp);

var _gulpLoadPlugins = require('gulp-load-plugins');

var _gulpLoadPlugins2 = _interopRequireDefault(_gulpLoadPlugins);

var _browserSync = require('browser-sync');

var _browserSync2 = _interopRequireDefault(_browserSync);

var _del = require('del');

var _del2 = _interopRequireDefault(_del);

var _wiredep = require('wiredep');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $ = (0, _gulpLoadPlugins2.default)(); // generated on 2016-02-12 using generator-gulp-webapp 1.1.1

var reload = _browserSync2.default.reload;

_gulp2.default.task('styles', function () {
  return _gulp2.default.src('app/styles/*.css').pipe($.sourcemaps.init()).pipe($.autoprefixer({ browsers: ['> 1%', 'last 2 versions', 'Firefox ESR'] })).pipe($.sourcemaps.write()).pipe(_gulp2.default.dest('.tmp/styles')).pipe(reload({ stream: true }));
});

_gulp2.default.task('scripts', function () {
  return _gulp2.default.src('app/scripts/**/*.js').pipe($.plumber()).pipe($.sourcemaps.init()).pipe($.babel()).pipe($.sourcemaps.write('.')).pipe(_gulp2.default.dest('.tmp/scripts')).pipe(reload({ stream: true }));
});

function lint(files, options) {
  return function () {
    return _gulp2.default.src(files).pipe(reload({ stream: true, once: true })).pipe($.eslint(options)).pipe($.eslint.format()).pipe($.if(!_browserSync2.default.active, $.eslint.failAfterError()));
  };
}
var testLintOptions = {
  env: {
    mocha: true
  }
};

_gulp2.default.task('lint', lint('app/scripts/**/*.js'));
_gulp2.default.task('lint:test', lint('test/spec/**/*.js', testLintOptions));

_gulp2.default.task('html', ['styles', 'scripts'], function () {
  return _gulp2.default.src('app/*.html').pipe($.useref({ searchPath: ['.tmp', 'app', '.'] })).pipe($.if('*.js', $.uglify())).pipe($.if('*.css', $.cssnano())).pipe($.if('*.html', $.htmlmin({ collapseWhitespace: true }))).pipe(_gulp2.default.dest('public'));
});

_gulp2.default.task('images', function () {
  return _gulp2.default.src('app/images/**/*').pipe($.if($.if.isFile, $.cache($.imagemin({
    progressive: true,
    interlaced: true,
    // don't remove IDs from SVGs, they are often used
    // as hooks for embedding and styling
    svgoPlugins: [{ cleanupIDs: false }]
  })).on('error', function (err) {
    console.log(err);
    this.end();
  }))).pipe(_gulp2.default.dest('public/images'));
});

_gulp2.default.task('fonts', function () {
  return _gulp2.default.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {}).concat('app/fonts/**/*')).pipe(_gulp2.default.dest('.tmp/fonts')).pipe(_gulp2.default.dest('public/fonts'));
});

_gulp2.default.task('extras', function () {
  return _gulp2.default.src(['app/*.*', '!app/*.html'], {
    dot: true
  }).pipe(_gulp2.default.dest('public'));
});

_gulp2.default.task('clean', _del2.default.bind(null, ['.tmp', 'public']));

_gulp2.default.task('serve', ['styles', 'scripts', 'fonts'], function () {
  (0, _browserSync2.default)({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  _gulp2.default.watch(['app/*.html', '.tmp/scripts/**/*.js', 'app/images/**/*', '.tmp/fonts/**/*']).on('change', reload);

  _gulp2.default.watch('app/styles/**/*.css', ['styles']);
  _gulp2.default.watch('app/scripts/**/*.js', ['scripts']);
  _gulp2.default.watch('app/fonts/**/*', ['fonts']);
  _gulp2.default.watch('bower.json', ['wiredep', 'fonts']);
});

_gulp2.default.task('serve:public', function () {
  (0, _browserSync2.default)({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['public']
    }
  });
});

_gulp2.default.task('serve:test', ['scripts'], function () {
  (0, _browserSync2.default)({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/scripts': '.tmp/scripts',
        '/bower_components': 'bower_components'
      }
    }
  });

  _gulp2.default.watch('app/scripts/**/*.js', ['scripts']);
  _gulp2.default.watch('test/spec/**/*.js').on('change', reload);
  _gulp2.default.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
_gulp2.default.task('wiredep', function () {
  _gulp2.default.src('app/*.html').pipe((0, _wiredep.stream)({
    ignorePath: /^(\.\.\/)*\.\./
  })).pipe(_gulp2.default.dest('app'));
});

_gulp2.default.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], function () {
  return _gulp2.default.src('public/**/*').pipe($.size({ title: 'build', gzip: true }));
});

_gulp2.default.task('default', ['clean'], function () {
  _gulp2.default.start('build');
});
