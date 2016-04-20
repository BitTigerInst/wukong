var express = require('express');
var router = express.Router();

router.get(/^\/(index(.html)?)?$/, function(req, res) {
  res.render('pages/homepage');
});

router.get('/detail.html', function(req, res) {
  res.render('pages/detail');
});

router.get('/list.html', function(req, res) {
  res.render('pages/list');
});

router.get('/404.html', function(req, res) {
  res.render('pages/404');
});

module.exports = router;
