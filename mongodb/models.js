var mongoose = require('mongoose');
var _ = require('underscore');
var config = require('../config.json');

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
	config.mongo_url;

module.exports = function(wagner) {
  mongoose.connect(uristring);

  var Category =
    mongoose.model('Category', require('./categorySchema'), 'categories');
  var Product =
    mongoose.model('Product', require('./productSchema'), 'products');
  var User =
    mongoose.model('User', require('./userSchema'), 'users');


  var models = {
    Category: Category,
    Product: Product,
    User: User
  };

  // To ensure DRY-ness, register factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  return models;
};
