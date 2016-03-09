var express = require('express');
var favicon = require('serve-favicon');
var wagner = require('wagner-core');
var models = require('./mongodb/models')(wagner);
require('./mongodb/loadData')(models);

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));
//app.use(express.static(__dirname + '/public-angular'));

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

//// Handle 404
app.use(function(req, res) {
  res.status(404);
  res.redirect('/404.html');
  //res.send('/public/404.html');
  //express.static(__dirname + '/public/404.html');
});

// Handle server side error
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
