var mongoose = require('mongoose');
var Category = require('./categorySchema');

var productSchema = {
  name: {
    type: String,
    required: true
  },
  pictures:[{
    type: String,
    match: /^http:\/\//i
  }],
  price: {
    amount: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      enum: ['USD', 'EUR', 'GBP'],
      required: true
    }
  },
  category: Category.categorySchema
};

var currencySymbols = {
  'USD': '$',
  'EUR': '€',
  'GBP': '£'
};

var schema = new mongoose.Schema(productSchema);
schema.virtual('displayPrice').get(function() {
  return currencySymbols[this.price.currency] +
    '' + this.price.amount;
});

schema.set('toObject', { virtuals: true });
schema.set('toJSON', { virtuals: true });

module.exports = schema;
module.exports.productSchema = productSchema;
