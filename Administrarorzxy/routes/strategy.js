/**
 * Created by Chen on 2016/11/7.
 */
var express = require('express');
var router = express.Router();
var multipart = require('connect-multiparty');
var GoodsDao = require('./../dao/StrategyDao');

/* GET users listing. */
router.get('/strategyup', function(req, res, next) {
    console.log("1111")
    res.render('strategyup')
});
router.post('/StrategyMultiplePicUpload',multipart(), function(req, res, next) {
    strategyDao.strategyMultiplePicUpload(req, res, next)
});
module.exports = router;
