var mongoose = require('mongoose');
var _ = require('underscore');
var config = require('../config.json');

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  config.mongo_url;

module.exports = function(wagner) {
  var User;
  var models;
  mongoose.connect(uristring);
  User = mongoose.model('User', require('./userSchema'), 'users');
  models = {
    User: User
  };
  // To ensure DRY-ness, register factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });
};
