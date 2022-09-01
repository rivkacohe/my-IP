var express = require('express');
var router = express.Router();
const fileMngmt = require('../shared/fileMngmt')


/* GET home page. */
router.get('/', function (req, res, next) {
  const filePath =fileMngmt.getHtmlFilePath('index.html');
  res.sendFile(filePath);
});

module.exports = router;
