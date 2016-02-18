var mongoose = require('mongoose');
var productSchema = require('./productSchema');

var Product = mongoose.model('Product', productSchema);

var p = new Product({
  name: 'test',
  price: {
    amount: 5,
    currency: 'USD'
  },
  category: {
    name: 'test'
  }
});

console.log(p.internal.approximatePriceUSD);

p.price.amount = 88;
console.log(p.internal.approximatePriceUSD);

p.price.currency = 'EUR';
console.log(p.internal.approximatePriceUSD);
p.price.amount = 11;
console.log(p.internal.approximatePriceUSD);
