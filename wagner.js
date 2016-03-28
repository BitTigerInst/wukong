var express = require('express');
var mongoose = require('mongoose');
var wagner = require('wagner-core');

setupModels(mongoose, wagner);

var app = express();

setupApp(app, wagner);

app.listen(3000);
console.log('Listening');

function setupModels(mongoose, wagner) {
  mongoose.connect('mongodb://localhost:27017/tao');

  var userSchema = new mongoose.Schema({
    name: String
  });
  var User = mongoose.model('User', userSchema);

  wagner.factory('User', function() {
    return User;
  });
}

function setupApp(app, wagner) {
  var routeHandle = wagner.invoke(function(User) {
    return function(req, res) {
      User.findOne({'name': 'Tao'}, function(error, user1) {
        console.log(user1);
        res.json({user: user1});
      });
    };
  });

  app.get('/user/:name', routeHandle);
}
