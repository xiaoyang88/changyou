var express = require('express');
var router = express.Router();
var UserDao=require('./../dao/userDao')
var DataDao=require('./../dao/DataDao')
/* GET home page. */
/*router.get('/', function(req, res, next) {
  console.log("/")
  res.render('index-H.ejs',);
});*/
router.get('/', function(req, res, next) {
  console.log(" / 显示游记")
  DataDao.mainNoteShow(req, res, next);
});

module.exports = router;
