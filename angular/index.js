var express = require('express');
var app = express();
var path = require('path');

app.set('port', 5000);
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, 'welcome.html'));
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
