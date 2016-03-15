var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  profile: {
    username: {
      type: String,
      lowercase: true
    },
    picture: {
      type: String,
      match: /^http:\/\//i
    }
  },
  data: {
    oauth: { type: String, required: true },
    cart: [{
      product: {
        type: mongoose.Schema.Types.ObjectId
      },
      quantity: {
        type: Number,
        default: 1,
        min: 1
      }
    }]
  },
  name: { type: String, required: true },       // must initialize

  experience: {
    type: Number,     // range (0 ~ 1000) set function: + 10
    min: 0,
    max: 1000,
    default: 0

  },
  // 9 attributes
  atr1: {
    type: Number,
    default: 0,
    set: function(v) {
      this.experience += v * 10;
      return v;
    }
  },
  atr2: {
    type: Number,
    default: 0
  },
  atr3: {
    type: Number,
    default: 0
  },
  atr4: {
    type: Number,
    default: 0
  },
  atr5: {
    type: Number,
    default: 0
  },
  atr6: {
    type: Number,
    default: 0
  },
  atr7: {
    type: Number,
    default: 0
  }
});



var userTitles = {
  0: 'title1',
  1: 'title2',
  2: 'title3',
  3: 'title4',
  4: 'title5',
  5: 'title6',
  6: 'title7',
  7: 'title8',
  8: 'title9',
  9: 'title10'
}
module.exports.virtual('displayTitle').get(function() {      // get from real value in schema.
  return userTitles[this.experience % 100];
})

module.exports.set('toObject', { virtuals: true });
module.exports.set('toJSON', { virtuals: true });




var userSchema = module.exports;

var User = mongoose.model( 'User', userSchema );


var Lisa = new User({ name: 'Tao' });
Lisa.atr1 = 10;
var Jack = new User({ name: 'Jack' });

console.log(Lisa.atr1 );
console.log(Lisa.experience );
console.log(Lisa.displayTitle);
console.log(Jack.displayTitle);

Jack.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully:', userObj);
  }
});

Lisa.save(function (err, userObj) {
  if (err) {
    console.log(err);
  } else {
    console.log('saved successfully: new user new user ', userObj);
  }
});
