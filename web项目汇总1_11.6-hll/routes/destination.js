/**
 * Created by Administrator on 2016/9/18.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/luoyang', function(req, res, next) {
    res.render('luoyang.ejs');
});
router.get('/guangzhou', function(req, res, next) {
    res.render('guangzhou.ejs');
});

module.exports = router;
