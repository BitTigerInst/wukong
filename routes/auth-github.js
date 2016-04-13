var express = require('express');
var router = express.Router();
var path = require('path');

var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;

var config = require('../config.json');
var User = require('../mongodb/models').User;

// High level serialize/de-serialize configuration for passport
passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({ _id: id }).exec(done);
});

// Github-specific
passport.use(new GithubStrategy(
  {
    clientID: config.GITHUB_CLIENT_ID,
    clientSecret: config.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);
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

// Express middlewares
router.use(require('express-session')({
  secret: 'this is a secret'
}));
router.use(passport.initialize());
router.use(passport.session());

// Express routes for auth
router.get('/github',
  passport.authenticate('github', { scope: [] }));

router.get('/github/callback',
  passport.authenticate('github', { failureRedirect: 'http://localhost:3000' }),
  function(req, res) {
    console.log("call callback")
    res.sendFile(path.join(__dirname, '../angular/welcome.html'));
  });

module.exports = router;
