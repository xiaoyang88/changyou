/**
 * Created by Administrator on 2016/9/18.
 */
var express = require('express');
var router = express.Router();
var DataDao=require('./../dao/DataDao');
var multipart = require('connect-multiparty');
var UserDao=require('./../dao/userDao')
var sessionFilter=require('./../util/sessionFilter')

/* GET home page. */
//===========写游记=====================================================
router.get('/writeNote', function(req, res, next) {
    console.log("/writeNote")
    sessionFilter.sessionFilter(req, res,next,'contentData/writeNote',DataDao.WriteNote);

});
router.post('/writejudge', function(req, res, next) {
    console.log("提交到 /writejudge 判断")
    DataDao.writeJudge(req, res, next);
});
//=======================================================================

//===========首页 查看更多 跳转游记首页====================================
router.get('/noteIndex', function(req, res, next) {
    console.log("提交到 /noteIndex 判断")
    DataDao.noteIndexShow(req, res, next);
});

//直接显示游记详情页面
router.get('/noteInfoShow', function(req, res, next) {
    console.log("提交到 /noteInfoShow2 判断")
    DataDao.noteInfoShowJudge(req, res, next);
});

//在他的个人中心进入显示游记详情页面(作废)=======================
/*router.get('/personal-1', function(req, res, next) {
    DataDao.Infopersonalshow(req, res,next);
});*/
router.get('/personal_indexshow', function(req,res,next){
    console.log("提交到 /personal_indexshow 判断")
    DataDao.personalIndexshow(req, res,next );
});
//=========================================================
router.post('/update', function(req, res, next) {
    DataDao.dddConmet(req, res, next)
});
router.post('/UserMultiplePicUpload', multipart(), function (req, res, next) {
    console.log('UserMultipleUpload');
    UserDao.UserPicinsert(req, res, next);
});

/*==============提问回答===============*/
router.post('/answer',function (req, res, next) {
    console.log('answer');
    DataDao.addAnswer(req, res, next);
});

module.exports = router;
