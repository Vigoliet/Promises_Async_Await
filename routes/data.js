var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(require('../public/javascripts/data.json'));
});

module.exports = router;
