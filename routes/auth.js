var express = require('express');
var router = express.Router();
var path = require('path');

var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var config = require('../config.json');
var User = require('../mongodb/models').User;

// High level serialize/de-serialize configuration for passport
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }).exec(done);
});

// Facebook-specific
passport.use(new FacebookStrategy(
  {
    clientID: config.FACEBOOK_CLIENT_ID,
    clientSecret: config.FACEBOOK_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/facebook/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    if (!profile.displayName) {
      done('No display name associated with this account!');
    }

    User.findOneAndUpdate(
      { 'data.oauth': profile.id },
      {
        $set: {
          'profile.username': profile.displayName,
          'profile.picture': 'http://graph.facebook.com/' +
          profile.id.toString() + '/picture?type=large'
        }
      },
      { new: true, upsert: true, runValidators: true },
      function(error, user) {
        done(error, user);
      });
  }));

// Express middlewares
router.use(require('express-session')({
  secret: 'this is a secret'
}));
router.use(passport.initialize());
router.use(passport.session());

// Express routes for auth
router.get('/facebook',
  passport.authenticate('facebook', { scope: ['email'] }));

router.get('/facebook/callback',
  passport.authenticate('facebook', { failureRedirect: '/fail' }),
  function(req, res) {
    res.sendFile(path.join(__dirname, '../angular/welcome.html'));
  });

module.exports = router;
