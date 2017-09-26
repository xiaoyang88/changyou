var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var GoodsDao = require('./../dao/GoodsDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('商品要干的事情');
});
router.post('/upload', multipart(), function(req,res){
  console.log('upload');
  GoodsDao.addPic(req, res);
});


module.exports = router;
