var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/welcome.html', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/welcome.html'));
});

module.exports = router;
