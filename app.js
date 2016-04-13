var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var errorhandler = require('errorhandler');

var staticPages = require('./routes/staticPages');

var app = express();

app.use(cors());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// static resource for static page and angular
app.use('/', express.static(__dirname + '/public/static/'));
app.use(express.static(__dirname + '/public/angular'));
// comment the following line in production
app.use(express.static(__dirname + '/angular'));

app.use('/', staticPages);

// Handle 404
app.use(function(req, res) {
  res.status(404).redirect('/404');
});

// Error Handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(errorhandler());
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
