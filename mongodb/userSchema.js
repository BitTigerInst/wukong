var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  profile: {
    username: {
      type: String,
      lowercase: true
    },
    picture: {
      type: String,
      match: /^https?:\/\//i
    },
    email: {
      type: String,
      lowercase: true
    },
    profileUrl: {
      type: String,
      match: /^https?:\/\//i
    }
  },
  data: {
    oauth: { type: String, required: true },
    github: {}
  }
});
