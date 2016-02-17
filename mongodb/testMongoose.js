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
  } else {
    console.log('success');
    process.exit(0);
  }
})
