var assert = require('assert');
var express = require('express');
var superagent = require('superagent');
var wagner = require('wagner-core');

var URL_ROOT = 'http://localhost:3000';

describe('Category API', function() {
  var server;
  var Category;

  before(function() {
    var app = express();

    // Bootstrap server
    models = require('../mongodb/models')(wagner);
    app.use(require('../api')(wagner));

    server = app.listen(3000);

    // Make Category model available in tests
    Category = models.Category;
  });

  after(function() {
    // Shut the server down when we're done
    server.close();
  });

  beforeEach(function(done) {
    // Make sure categories are empty before each test
    Category.remove({}, function(error) {
      assert.ifError(error);
      done();
    });
  });

  it('can load a category by id', function(done) {
    // Create a single category
    Category.create({ _id: 'Electronics' }, function(error, doc) {
      assert.ifError(error);
      var url = URL_ROOT + '/category/id/Electronics';
      // Make an HTTP request to localhost:3000/category/id/Electronics
      superagent.get(url, function(error, res) {
        assert.ifError(error);
        var result;
        // And make sure we got { _id: 'Electronics' } back
        assert.doesNotThrow(function() {
          result = JSON.parse(res.text);
        });
        assert.ok(result.category);
        assert.equal(result.category._id, 'Electronics');
        done();
      });
    });
  });

  it('can load all categories that have a certain parent', function(done) {
    var categories = [
      { _id: 'Electronics' },
      { _id: 'Phones', parent: 'Electronics' },
      { _id: 'Laptops', parent: 'Electronics' },
      { _id: 'Bacon' }
    ];

    // Create 4 categories
    Category.create(categories, function(error, categories) {
      var url = URL_ROOT + '/category/parent/Electronics';
      // Make an HTTP request to localhost:3000/category/parent/Electronics
      superagent.get(url, function(error, res) {
        assert.ifError(error);
        var result;
        assert.doesNotThrow(function() {
          result = JSON.parse(res.text);
        });
        assert.equal(result.categories.length, 2);
        // Should be in ascending order by _id
        assert.equal(result.categories[0]._id, 'Laptops');
        assert.equal(result.categories[1]._id, 'Phones');
        done();
      });
    });
  });
});
