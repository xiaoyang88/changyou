var express = require('express');
var router = express.Router();
var DataDao=require('./../dao/DataDao');
var UserDao=require('./../dao/userDao')
var mallDao=require('./../dao/mallDao')
var ShowDao=require('./../dao/ShowDao')
var strategyDao=require('./../dao/strategyDao');
var sessionFilter=require('./../util/sessionFilter')
var crypto=require('crypto');
var url=require('url');
var multipart = require('connect-multiparty');
/* GET users listing. */

router.get('/login', function(req, res, next) {
  res.render('Login', { Meg: '' });
});
router.post('/loginJudge', function(req, res, next) {
 console.log("登录：输入成功，提交loginJudge验证。");
 UserDao.loginJudge(req, res, next);
 });

router.get('/login2', function(req, res, next) {
    res.render('Login2', { Meg: '' });
});
router.post('/login2', function (req, res) {
    console.log(req.body+'111login');
    UserDao.login3(req.body, function (result) {
        var r = result[0].num;
        if (r ==  0) {
            res.render("Login.ejs", {Meg: "帐号或密码错误!"});
        }
        else {
            req.session.userName= req.body.userName;
            console.log("req.session.userName:"+req.session.userName);
            res.redirect(req.session.url);
            console.log("req.session.url:"+req.session.url);
        }
    })
});
//=================丽丽==================================
router.get('/community', function(req, res, next) {
    //添加session机制判断
    console.log("community");
    sessionFilter.sessionFilter(req, res,next,'users/community',UserDao.Community);
});
////问答详细页面的调用
router.get('/QuestionDetailShow', function(req, res, next) {
    console.log("QuestionDetailShow界面");
    UserDao.QuestionDetailShow(req, res, next);
});
//退出判断
router.get('/logout', function(req, res, next) {
    req.session.userName=null;
    req.session.url=null;
    res.redirect('/');
});
//=======================================================
/*注册*/
router.get('/res', function(req, res, next) {
    res.render('Register', { title: '' });
});
//验证用户是否已注册
router.post('/userIdJudge', function(req,res,next){
    console.log("userIdJudge");
    UserDao.userIdJudge(req, res,next );
});
//注册验证
router.post('/registerJudge', function(req,res,next){
    console.log("registerJudge");
    UserDao.registerJudge(req, res,next );
});
router.post('/upload5', function(req,res,next){
    UserDao.add2(req, res,next );
});
router.get('/ForgetPassword', function(req, res, next) {
  res.render('ForgetPassword');
});
router.post('/ResetPwd', function(req, res, next) {
    UserDao.forget(req, res, next);

});

router.get('/CQuestion', function(req, res, next) {
  res.render('Cquestion.ejs');
});

router.get('/UseManual', function(req, res, next) {
  res.render('UseManual.ejs');
});

router.get('/destination.ejs', function(req, res, next) {
  res.render('Destination.ejs');
});
//==================攻略=========================================
//管理员上传攻略
router.get('/strategyup',function (req,res,next) {
    res.render('strategyup.ejs')
});
router.get('/strategyup', function(req, res, next) {
    res.render('strategy', { title: '攻略上传' });
});
/*router.get('/strategy',function (req,res,next) {
    console.log('显示成功');
    strategyDao.strategyshow(req,res,next)
});*/
//攻略的首页面调用
router.get('/strategy',function (req, res, next) {
    console.log("提交到 /strategyMainShow")
    ShowDao.strategyMain(req, res, next)
});
//攻略的详细面调用
router.get('/strategyDetail',function (req, res, next) {
    console.log("提交到 /strategyDetailShow")
    ShowDao.strategyDetail(req, res, next)
});
//=====================================================================
router.post('/upload',multipart(), function(req,res,next){
    console.log("111");
    strategyDao.add1(req,res)
});
router.get('/personal-1', function(req, res, next) {
  res.render('personal-1.ejs');
});

router.get('/personal_index1', function(req, res, next) {
  res.render('personal_index1.ejs');
});
//攻略
/*router.get('/strategy',function (req, res, next) {
    res.render('strategy.ejs')
});*/
router.get('/strategy_num1',function (req,res,next) {
    res.render('strategy_num1.ejs')
});
router.get('/strategy_num2',function (req,res,next) {
    res.render('strategy_num2.ejs')
});
router.get('/mallupdate',function (req,res,next) {
    res.render('mallupdate.ejs')
})
router.get('/mallshow',function (req,res,next) {
    console.log('显示成功');
    mallDao.mallInfoById(req,res,next)
});
router.post('/upload',multipart(), function(req,res,next){
    console.log("111");
    mallDao.add(req,res)
});
router.get('/exchange',multipart(),function (req, res, next) {
    console.log('1212212');
    mallDao.addcart(req, res, next);
});
router.get('/Cart', multipart(), function (req, res, next) {
    console.log('212121221');
    mallDao.showcart(req, res, next);
});

router.post('/insertJudge', function(req, res, next) {
  console.log('插入成功');
  DataDao.InsertJudge(req, res, next);
});

router.get('/Session', function(req, res, next) {
    console.log('/Session');
    var info="";
    console.log('req.session.userName:'+req.session.userName);
    if(req.session.userName==undefined) {
        info = '0';
    }
    else
    {
        info ='<img src="/images/a1.png">'
    }
    res.writeHead(200,{'Content-Type':'text/html'});
    //设置显示字符编码
    res.write(info);
    res.end();
});
router.post('/upload2', multipart(), function(req,res){
    DataDao.addPic(req, res);
});

/*=====================  找回密码  ======================*/
router.post('/ResSetPwd', multipart(), function(req,res,next){

    UserDao.Reset(req,res,next)
});
router.post('/Pic', multipart(), function(req,res,next){
    console.log('/ss');
    UserDao.userpic(req,res,next)
});

//=====================我的个人中心===========================

//我的游记
router.get('/myhome_note', function(req, res, next) {
    console.log("/myhome_note")
    UserDao.MyhomeNote(req, res, next);
});
//我的问答
router.get('/myhome_question', function(req, res, next) {
    console.log("/myhome_question")
    UserDao.MyhomeQuestion(req, res, next);
});
//我的兑换
router.get('/myhome_exchange', function(req, res, next) {
    console.log("/myhome_exchange")
    UserDao.MyhomeExchange(req, res, next);
});
//我的信息设置
router.get('/personal_setting', function(req, res, next) {
    UserDao.personal_setting(req, res, next)
});
//我的信息修改
router.post('/myInfoUpDate_H', function(req, res, next) {
    console.log("myInfoUpDate_H")
    UserDao.myInfoUpDate_H(req, res, next)
});
//删除我的游记

router.get('/DeleteNote', function(req, res, next) {
    console.log("用户头像")
    UserDao.DeleteNote(req, res, next)
});

//=====================Ta的个人中心===========================

//Ta的游记
router.get('/otherhome_note', function(req, res, next) {
    console.log("/Otherhome_note")
    UserDao.OtherhomeNote(req, res, next);
});
router.get('/Otherhome_note_here', function(req, res, next) {
    console.log("/Otherhome_note_here")
    UserDao.Otherhome_note_here(req, res, next);
});

//Ta的问答
router.get('/Otherhome_question', function(req, res, next) {
    console.log("/Otherhome_question")
    UserDao.Otherhome_question(req, res, next);
});
router.get('/Otherhome_question', function(req, res, next) {
    console.log("/Otherhome_question")
    UserDao.Otherhome_question(req, res, next);
});
//Ta的兑换
router.get('/Otherhome_exchange', function(req, res, next) {
    console.log("/Otherhome_exchange")
    UserDao.Otherhome_exchange(req, res, next);
});
//Ta的信息
router.get('/OtherPersonal_setting', function(req, res, next) {
    console.log("/OtherPersonal_setting")
    UserDao.OtherPersonal_setting(req, res, next)
});
//==============================================================================



//=======================================  点赞=======================================
router.post('/UserPraise', function(req, res, next) {
    console.log("点赞")
    UserDao.UserParise(req, res, next)
});
//======================================= 收藏=======================================
router.post('/UserCollect', function(req, res, next) {
    console.log("收藏")
    UserDao.UserCollect(req, res, next)
});
//======================================= 攻略 点赞=======================================
router.post('/StrUsersPraise', function(req, res, next) {
    console.log("点赞")
    UserDao.UsersParise(req, res, next)
});
//======================================攻略 收藏=======================================
router.post('/UsersCollect', function(req, res, next) {
    console.log("攻略 收藏")
    UserDao.UsersCollect(req, res, next)
});
//======================================用户头像=======================================
router.post('/SelectUsersPic', function(req, res, next) {
    console.log("用户头像")
    UserDao.SelectUsersPic(req, res, next)
});

module.exports = router;


