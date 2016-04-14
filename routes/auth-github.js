var express = require('express');
var router = express.Router();
var path = require('path');

var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;

var app = express();

var config = require('../config.json')[app.get('env')];
var User = require('../mongodb/models').User;

// High level serialize/de-serialize configuration for passport
passport.serializeUser(function(user, done) {
  console.log('in serializeUser, put user data into session storage');
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }, function(err, user) {
    console.log('in deserializeUser, got user, and attached to req.user, user is: ', user);
    done(null, user);
  });
});

// Github-specific
passport.use(new GithubStrategy(
  {
    clientID: config.GITHUB_CLIENT_ID,
    clientSecret: config.GITHUB_CLIENT_SECRET,
    callbackURL: config.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    console.log('in strategy, got profile: ', profile);
    User.findOneAndUpdate(
      { 'data.oauth': profile.id },
      {
        $set: {
          'profile.username': profile.username,
          'profile.profileUrl': profile.profileUrl,
          'profile.picture': profile.photos[0]['value'],
          'profile.email': profile.emails[0]['value'],
          'data.github': profile._json
        }
      },
      { new: true, upsert: true, runValidators: true },
      function(error, user) {
        done(error, user);
      });
  }));

router.use(passport.initialize());
router.use(passport.session());

// Express routes for auth
router.get('/github',
  passport.authenticate('github', { scope: [] }));

router.get('/github/callback',
  passport.authenticate('github', {
    successRedirect: config.successRedirect,
    failureRedirect: config.failureRedirect
  }));

router.get('/logout', function(req, res) {
  console.log('hit logout');
  req.logout();
  res.end();
});

// got user data if user login
router.get('/me', function(req, res) {
  if (req.user) {
    res.json(req.user);
  } else {
    res.json({ data: null });
  }
});

module.exports = router;
