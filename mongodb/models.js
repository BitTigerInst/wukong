var express = require('express');
var app = express();

var mongoose = require('mongoose');
var config = require('../config.json')[app.get('env')];

var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || config.mongo_url;
var User;
var models;

mongoose.connect(uristring);
User = mongoose.model('User', require('./userSchema'), 'users');
models = {
  User: User
};

module.exports = models;
