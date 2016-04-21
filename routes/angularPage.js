var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/student', function(req, res) {
  res.sendFile(path.join(__dirname, '../views/layout.html'));
});

module.exports = router;
