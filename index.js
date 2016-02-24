var express = require('express');
var favicon = require('serve-favicon');
var wagner = require('wagner-core');
var models = require('./mongodb/models')(wagner);
require('./mongodb/loadData')(models);

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.use('/api/v1', require('./api')(wagner));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
