var express = require('express');

module.exports = function() {
  var app = express();

  app.get('/', function(req, res) {
    res.send('Hello, world!');
  });

  app.get('/user/:user', function(req, res) {
    res.send('Page for user ' + req.params.user + ' with option ' + req.query.option);
  });

  return app;
}
