var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/test';

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log('Connected correctly to server.');

  db.collection('tao').insert({
    name: 'tao',
    age: 19
  }, function(error, docs) {
    if (error) {
      console.log(error);
      process.exit(1);
    }

    console.log('Insert successful.');

    db.collection('tao').find().toArray(function(error, docs) {
      if (error) {
        console.log(error);
        process.exit(1);
      }

      console.log('Found docs:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
      db.close();
    });
  });
});
