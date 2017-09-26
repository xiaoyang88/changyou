var express = require('express');
var adminDao = require('./../dao/adminDao');
var userDao = require('./../dao/userDao');
var multipart = require('connect-multiparty');
var router = express.Router();

/* GET users listing. */
router.get('/Login', function(req, res, next) {
    res.render('login.ejs', { Meg: '' });
});
router.post('/LoginJudge', function(req, res, next) {
    console.log("登录：输入成功，提交loginJudge验证。");
    adminDao.loginJudge(req, res, next);
});
// 退出
// router.get('/layout', function(req, res, next) {
//     res.render('login.ejs');
// });

// // 修改密码
// router.get('/ChangePassword', function(req, res, next) {
//     res.render('changepassword.ejs', { MSG: '' });
// });
// router.post('/ChangePasswordJudge', function(req, res, next) {
//     console.log("登录：输入成功，提交loginJudge验证。");
//     adminDao.changePasswordJudge(req, res, next);
// });
router.get('/Traveal', function(req, res, next) {
    res.render('traveal.ejs',{Mesg:''});
});

router.get('/Insert', function(req, res, next) {
    res.render('insert.ejs');
});
router.get('/Stratagy', function(req, res, next) {
    res.render('stratagy.html');
});
router.get('/Jifen', function(req, res, next) {
    res.render('jifen.html');
});
// router.get('/Question', function(req, res, next) {
//     res.render('question.html');
// });
router.get('/System', function(req, res, next) {
    res.render('system.html');
});
// 显示所有问答问题
router.get('/QueryAllQuestion', function(req, res, next) {
    console.log("查询用户所有问答");
    adminDao.queryAllQuestion(req, res, next);
});
// 删除问答问题
router.get('/DeleteQueryAllQuestion', function(req, res, next) {
    console.log("删除问答");
    adminDao.DeleteQuestion(req, res, next);
});
// 查看攻略
router.get('/QueryAllStratagy', function(req, res, next) {
    console.log("查询用户所有问答");
    adminDao.queryAllStratagy(req, res, next);
});
// 删除攻略
router.get('/DeleteQueryAllStratagy', function(req, res, next) {
    console.log("删除问答");
    adminDao.deleteQueryAllStratagy(req, res, next);
});
//查看评论
router.get('/QueryAllPinglun', function(req, res, next) {
    console.log("查询用户所有问答");
    adminDao.queryAllpinglun(req, res, next);
});
// 删除评论
router.get('/DeleteQueryAllPinglun', function(req, res, next) {
    console.log("删除问答");
    adminDao.deletequeryAllpinglun(req, res, next);
});
//查看积分
router.get('/QueryAllintegral', function(req, res, next) {
    console.log("查询积分");
    adminDao.queryAllintegral(req, res, next);
});
// 删除积分
router.get('/DeleteQueryAllintegral', function(req, res, next) {
    console.log("删除问答");
    adminDao.deletequeryAllintegral(req, res, next);
});
// 显示所有用户
router.get('/QueryAllUser', function(req, res, next) {
    console.log("用户管理----查询所有用户");
    adminDao.queryAllUser(req, res, next);
});
// 显示所有游记
router.get('/QueryAllTraveal', function(req, res, next) {
    console.log("查询所有游记");
    adminDao.queryAllTraveal(req, res, next);
});
// 删除游记
router.get('/DeleteTravealByTravelNoteId', function(req, res, next) {
    console.log("删除游记");
    adminDao.DeleteTravealByTravelNoteId(req, res, next);
});
//显示所有商品信息
router.get('/QueryAllgoods', function(req, res, next) {
    console.log("查询所有用品信息");
    adminDao.queryAllgoods(req, res, next);
});
// 删除商品信息
router.get('/DeleteQueryAllgoods', function(req, res, next) {
    console.log("删除物品");
    adminDao.DeletequeryAllgoods(req, res, next);
});
//
router.get('/Destination', function(req, res, next) {
    res.render('Destination.ejs');
});
router.get('/DesInsert', function(req, res, next) {
    res.render('DestinationInsert.ejs');
});
router.post('/upload',multipart(), function(req, res, next) {
   userDao.insertAdd(req, res, next)
});
router.get('/Activity', function(req, res, next) {
    res.render('Activity.ejs');
});
router.get('/ActivityInsert', function(req, res, next) {
    res.render('ActivityInsert.ejs');
});
router.post('/UserMultiplePicUpload', multipart(), function(req, res, next) {
    console.log("ss")
   userDao.UserPicinsert(req, res, next)
});
module.exports = router;
