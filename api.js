var express = require('express');
var status = require('http-status');

module.exports = function(wagner) {
  var api = express.Router();

  // http://localhost:5000/api/v1/category/id/Electronics
  api.get('/category/id/:id', wagner.invoke(function(Category) {
    return function(req, res) {
      Category.findOne({
        _id: req.params.id
      }, function(error, category) {
        if (error) {
          return res.
          status(status.INTERNAL_SERVER_ERROR)
          json({
            error: error.toString()
          });
        }
        if (!category) {
          return res.
          status(status.NOT_FOUND)
          json({
            error: 'Not found'
          });
        }
        res.json({
          category: category
        });
      });
    };
  }));

  // http://localhost:5000/api/v1/category/parent/Electronics
  api.get('/category/parent/:id', wagner.invoke(function(Category) {
    return function(req, res) {
      Category.
      find({
        parent: req.params.id
      }).
      sort({
        _id: 1
      }).
      exec(function(error, categories) {
        if (error) {
          return res.
          status(status.INTERNAL_SERVER_ERROR).
          json({
            error: error.toString()
          });
        }
        res.json({
          categories: categories
        });
      });
    };
  }));

  // http://localhost:5000/api/v1/product/name/Asus%20Zenbook%20Prime
  api.get('/product/name/:name', wagner.invoke(function(Product) {
    return function(req, res) {
      console.log(req.params.name);
      Product.findOne({
          name: req.params.name
        },
        handleOne.bind(null, 'product', res));
    };
  }));

  // http://localhost:5000/api/v1/product/category/Electronics
  api.get('/product/category/:id', wagner.invoke(function(Product) {
    return function(req, res) {
      var sort = {
        name: 1
      };
      if (req.query.price === "1") {
        sort = {
          'internal.approximatePriceUSD': 1
        };
      } else if (req.query.price === "-1") {
        sort = {
          'internal.approximatePriceUSD': -1
        };
      }

      Product.
      find({
        'category.ancestors': req.params.id
      }).
      sort(sort).
      exec(handleMany.bind(null, 'products', res));
    };
  }));

  return api;
};

function handleOne(property, res, error, result) {
  if (error) {
    return res.
    status(status.INTERNAL_SERVER_ERROR).
    json({
      error: error.toString()
    });
  }
  if (!result) {
    return res.
    status(status.NOT_FOUND).
    json({
      error: 'Not found'
    });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}

function handleMany(property, res, error, result) {
  if (error) {
    return res.
    status(status.INTERNAL_SERVER_ERROR).
    json({
      error: error.toString()
    });
  }

  var json = {};
  json[property] = result;
  res.json(json);
}
