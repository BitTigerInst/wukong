var mongoose = require('mongoose');

module.exports = function(wagner) {
  mongoose.connect('mongodb://localhost:27017/test');

  var Category = mongoose.model('Category', require('./mongodb/categorySchema'), 'categories');

  wagner.factory('Category', function() {
    return Category;
  });

  return {
    Category: Category
  };
}
