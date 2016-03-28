module.exports = function(models) {
  var Category = models.Category;
  var Product = models.Product;

  Category.remove({}, function(error) {
    Product.remove({}, function(error) {

      var categories = [{
        _id: 'Electronics'
      }, {
        _id: 'Phones',
        parent: 'Electronics'
      }, {
        _id: 'Laptops',
        parent: 'Electronics'
      }, {
        _id: 'Bacon'
      }];

      var products = [{
        name: 'LG G4',
        category: {
          _id: 'Phones',
          ancestors: ['Electronics', 'Phones']
        },
        price: {
          amount: 300,
          currency: 'USD'
        }
      }, {
        name: 'Asus Zenbook Prime',
        category: {
          _id: 'Laptops',
          ancestors: ['Electronics', 'Laptops']
        },
        price: {
          amount: 2000,
          currency: 'USD'
        }
      }, {
        name: 'Flying Pigs Farm Pasture Raised Pork Bacon',
        category: {
          _id: 'Bacon',
          ancestors: ['Bacon']
        },
        price: {
          amount: 20,
          currency: 'USD'
        }
      }];

      // Create 4 categories
      Category.create(categories, function(error, categories) {
        // And 3 products
        Product.create(products, function(error, products) {
          console.log('wukong\'s data loaded success!')
        });
      });
    });
  });
}
