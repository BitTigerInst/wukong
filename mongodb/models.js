var mongoose = require('mongoose');
var _ = require('underscore');

var uristring =
  process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost:27017/test';

module.exports = function(wagner) {
  mongoose.connect(uristring);

  var Category =
    mongoose.model('Category', require('./categorySchema'), 'categories');
  var Product =
    mongoose.model('Product', require('./productSchema'), 'products');

  var models = {
    Category: Category,
    Product: Product
  };

  // To ensure DRY-ness, register factories in a loop
  _.each(models, function(value, key) {
    wagner.factory(key, function() {
      return value;
    });
  });

  return models;
};
