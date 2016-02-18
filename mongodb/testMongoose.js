var mongoose = require('mongoose');
var schema = require('./schema');
var user = require('./userSchema')

mongoose.connect('mongodb://localhost/tao');

var User = mongoose.model('User', user, 'users');

var user = new User({
  profile: {
    username: 'Tao',
    picture: 'http://tao.com'
  },
  data: {
    oauth: 'test',
    cart: [
      {
        product: 'testdd',
        quantity: 20
      }
    ]
  }
})

user.save(function(error) {
  if (error) {
    console.log('error occur');
    console.log(error);
    process.exit(1);
  }

  console.log('create success');
  process.exit(0);

  // User.find({ _id: '56c508a9b8cb7281ce1413d4'}, function(error, docs) {
  //   if (error) {
  //     console.log('error occur');
  //     console.log(error);
  //     process.exit(1);
  //   }
  //   console.log(require('util').inspect(docs));
  //   process.exit(0);
  // })
})
