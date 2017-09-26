/**
 * Created by Administrator on 2016/10/24.
 */

var express = require('express');
var router = express.Router();
var crypto=require('crypto');
var url=require('url');
var multipart = require('connect-multiparty');
var NoteShowBySenchaDao=require('./../dao/NoteShowBySenchaDao');

//===========Sencha Touch 调用====================================

//游记页面调用
router.get('/NoteInfoShow', function(req, res, next) {
    console.log("提交到 /NoteInfoShow ")
    NoteShowBySenchaDao.NoteInfoShow(req, res, next);
});

//游记详情调用
router.get('/NoteDetail', function(req, res, next) {
    console.log("提交到 /NoteDetail ")
    NoteShowBySenchaDao.NoteDetail(req, res, next);
});
//问答界面调用
router.get('/QuestionShow', function(req, res, next) {
    console.log("提交到 /QuestionShow ")
    NoteShowBySenchaDao.QuestionInfoShow(req, res, next);
});
//问答详细界面调用
router.get('/QuestionDetailShow', function(req, res, next) {
    console.log("提交到 /QuestionDetailShow ")
    NoteShowBySenchaDao.QuestionDetailShow(req, res, next);
});
//活动界面调用
router.get('/ActivityInfoShow', function(req, res, next) {
    console.log("提交到 /ActivityInfoShow")
    NoteShowBySenchaDao.ActivityInfoShow(req, res, next);
});
//活动详细界面调用
router.get('/ActivityDetailShow', function(req, res, next) {
    console.log("提交到 /ActivityDetailShow")
    NoteShowBySenchaDao.ActivityDetailShow(req, res, next);
});


router.post('/LoginUser', function(req, res, next) {

    NoteShowBySenchaDao.LoginUser(req, res, next);
});
router.post('/Register', function(req, res, next) {

    NoteShowBySenchaDao.RegisterUser(req, res, next);
});

router.get('/SelectUserPic', function(req, res, next) {

    NoteShowBySenchaDao.SelectUserPic(req, res, next);
});

//========================== 游记评论================================

router.post('/CommentNote', function(req, res, next) {

    NoteShowBySenchaDao.addComment(req, res, next);
});


//========================== 点赞================================

router.post('/CommentPraise', function(req, res, next) {
    console.log("点赞")
    NoteShowBySenchaDao.praise(req, res, next);
});

//========================== 收藏================================

router.post('/CommentCollect', function(req, res, next) {
    console.log("收藏")
    NoteShowBySenchaDao.Collect(req, res, next);
});
//========================== 我的个人================================
//我的游记显示
router.post('/MyNoteShow', function(req, res, next) {
    console.log("MyNoteShow")
    NoteShowBySenchaDao.MyNoteShow(req, res, next);
});
router.post('/MyCommentShow', function(req, res, next) {
    console.log("MyCommentShow")
    NoteShowBySenchaDao.MyCommentShow(req, res, next);
});
router.post('/MyIntegralShow', function(req, res, next) {
    console.log("MyIntegralShow")
    NoteShowBySenchaDao.MyIntegralShow(req, res, next);
});

router.get('/Userqueryalert' , function (req, res, next) {
    console.log('Userqueryalert');
    NoteShowBySenchaDao.userqueryalert(req, res, next);
});
//商城
router.get('/QueryAll' , function (req, res, next) {
    console.log('QueryAll');
    NoteShowBySenchaDao.queryAll(req, res, next);
});
//商品详情
router.get('/QueryOne' , function (req, res, next) {
    console.log('QueryOne');
    NoteShowBySenchaDao.queryOne(req, res, next);
});
//积分判断
router.post('/Userquerygoods' , function (req, res, next) {
    console.log('Userquerygoods');
    NoteShowBySenchaDao.Userquerygoods(req, res, next);
});
//商品兑换积分判断
router.post('/MyexchangeShow' , function (req, res, next) {
    console.log('MyexchangeShow');
    NoteShowBySenchaDao.MyexchangeShow(req, res, next);
});

router.post('/UserPicUpload',multipart(), function(req, res, next) {

    NoteShowBySenchaDao.UploadPic(req, res, next);
});


router.post('/ShowUserPic', function(req, res, next) {
    console.log("显示")
    NoteShowBySenchaDao.ShowUserPic(req, res, next);
});

router.post('/QuestionNote', function(req, res, next) {
    console.log("提问")
    NoteShowBySenchaDao.QuestionNote(req, res, next);
});
module.exports = router;