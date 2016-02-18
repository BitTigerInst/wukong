var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost/tao');

var User = mongoose.model('User', schema, 'users');

var user = new User({
  name: 'Tao',
  email: 'ning@pric.com'
})

user.save(function(error) {
  if (error) {
    console.log('error occur');
    console.log(error);
    process.exit(1);
  }

  User.find({ _id: '56c508a9b8cb7281ce1413d4'}, function(error, docs) {
    if (error) {
      console.log('error occur');
      console.log(error);
      process.exit(1);
    }
    console.log(require('util').inspect(docs));
    process.exit(0);
  })
})
