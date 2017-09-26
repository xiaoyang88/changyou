var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  
    res.render('login.ejs',{Meg:''});});

  router.get('/index', function(req, res, next) {
    res.render('index.ejs',{Meg:''});

 //加载index.jade/index.html/index.ejs
});


module.exports = router;
