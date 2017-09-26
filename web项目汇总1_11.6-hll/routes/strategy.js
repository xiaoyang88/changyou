/**
 * Created by Administrator on 2016/9/18.
 */
var express = require('express');
var router = express.Router();
var strategyDao=require('./../dao/strategyDao')
var multipart = require('connect-multiparty');
var sessionFilter = require('./../myutil/sessionFilter');
/* GET home page. */
router.get('/strategy', function(req, res, next) {
    res.render('strategy.ejs');
});
router.get('/strategyup', function(req, res, next) {
    res.render('strategy', { title: '攻略上传' });
});
router.get('/GoodsDetail', function(req, res, next) {
    console.log('1212212');
    strategyDao.multiple_show(req, res);
});
router.get('/QueryAllnotes', function(req, res, next) {
    console.log('QueryAllnotes');
    strategyDao.queryAllnotes(req, res);
});
router.get('/strategy_num1', function(req, res, next) {
    res.render('strategy_num1.ejs');
});
router.get('/strategy_num2', function(req, res, next) {
    res.render('strategy_num2.ejs');
});
router.post('/StrategyMultiplePicUpload',multipart(), function(req, res, next) {
    strategyDao.strategyMultiplePicUpload(req, res, next)
});

module.exports = router;
