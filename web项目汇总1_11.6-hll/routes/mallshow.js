/**
 * Created by Administrator on 2016/9/21.
 */
var express = require('express');
var router = express.Router();
var mallDao=require('./../dao/mallDao');
var multipart = require('connect-multiparty');
var sessionFilter = require('./../myutil/sessionFilter');


router.get('/mallshow', function(req, res, next) {
    mallDao.render('mallshow', { title: '积分商城' });
});
router.get('/upload', function(req, res, next) {
    mallDao.mallInfoById(req, res, next);
});
router.get('/mallupdate', function(req, res, next) {
    res.render('mallshow', { title: '商品上传' });
});
router.get('/mallsuccess',function (req,res,next) {
    res.render('mallsuccess.ejs')
});
router.get('/GoodsDetail', function(req, res, next) {
   mallDao.oneshow(req, res);
});
router.post('/exchange', multipart() ,function (req, res, next) {
    console.log('postCart');
    mallDao.addcart(req, res );
});
router.get('/Cart',multipart() , function (req, res, next) {
    console.log('getCart');
    mallDao.showcart(req, res, next);
});
router.get('/QueryAll' , function (req, res, next) {
    console.log('QueryAll');
    mallDao.queryAll(req, res, next);
});
router.get('/QueryOne' , function (req, res, next) {
    console.log('QueryOne');
    mallDao.queryOne(req, res, next);
});

/*=============================== 积分===============================*/
router.post('/SelectIntegration' , function (req, res, next) {
    console.log('SelectIntegration');
    mallDao.SelectIntegration(req, res, next);
});
/*========================  确认兑换==========================*/
router.post('/UserMyExchange' , function (req, res, next) {
    console.log('确认兑换');
    mallDao.MyExchange(req, res, next);
});
module.exports = router;
