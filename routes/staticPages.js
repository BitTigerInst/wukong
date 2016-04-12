var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res) {
//  console.log('__dirname: ', __dirname);
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/list.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/list.html'));
});

router.get('/detail.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/detail.html'));
});

router.get('/404', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/404.html'));
});

module.exports = router;
