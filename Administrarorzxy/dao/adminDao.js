/**
 * Created by Chen on 2016/9/6.
 */

var $conf=require("./../conf/db");
var $sql = require('./adminSqlMapping');//得到6条查询语句
var mysql = require('mysql');
//得到链接对象
//查询所有用户的函数（切记要把该函数暴露出去exports.queryAll=queryAll;）
var pool = mysql.createPool($conf);
var loginJudge=function (req, res, next) {
    var param=req.body;
    console.log("提交的管理员ID："+param.adminname);
    console.log("提交的密码："+param.adminpwd);
/*    var hash = crypto.createHash("md5");
    hash.update(param.userPwd);
    var encode = hash.digest('hex');
    console.log("加密后的密码："+encode);*/
    pool.getConnection(function(err, connection) {
        connection.query($sql.select,[param.adminname,param.adminpwd],
            function(err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    // 判断用户是否存在
                    console.log("查询结果："+JSON.stringify(result));
                    if(result.length==0)//用户不存在的判断
                    {
                        res.render("login.ejs",{Meg:'用户不存在或密码错误！'});
                    }
                    else{
                       /* req.session.userName=result[0].UserName;*/
                        res.render("index.ejs");
                    }
                }
            });
        connection.release();
    });
};
//查询所有用户
var queryAllUser=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query($sql.queryAll, function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("user.ejs",{users:result});
                connection.release();
            });
        }
    });
}
//查询所有游记
var queryAllTraveal=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query($sql.queryAllTraveal, function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("traveal.ejs",{traveals:result});
                connection.release();
            });
        }
    });
};
// 删除游记
var DeleteTravealByTravelNoteId = function (req, res, next) {
    var _id = req.query.id;
    console.log("_id:" + _id);
    pool.getConnection(function (err, connection) {
        connection.query($sql.DeleteTravealByTravelNoteId,[_id], function (err, result){
            if (err) {
                console.log(err.message);
            }
            else {
                    // 判断用户是否存在
                        console.log("查询结果："+JSON.stringify(result));
                        if(result.affectedRows > 0)//用户不存在的判断
                        {
                            res.redirect("/users/QueryAllTraveal");
                        }
                        else{
                            /* req.session.userName=result[0].UserName;*/
                            res.render("/users/QueryAllTraveal");
                        }
            }
        });
        connection.release();
    });
};

// 查询所有问答问题
var queryAllQuestion=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query($sql.queryAllQuestion, function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("question.ejs",{questions:result});
                connection.release();
            });
        }
    });
};
// 删除问答
var DeleteQuestion= function (req, res, next) {
    var _Qid = req.query.Qid;
    console.log("_Qid:" + _Qid);
    pool.getConnection(function (err, connection) {
        connection.query($sql.deleteQueryAllQuestion,[_Qid], function (err, result){
            if (err) {
                console.log(err.message);
            }
            else {
                // 判断用户是否存在
                console.log("查询结果："+JSON.stringify(result));
                if(result.affectedRows > 0)//用户不存在的判断
                {
                    res.redirect("/users/QueryAllQuestion");
                }
                else{
                    /* req.session.userName=result[0].UserName;*/
                    res.render("/users/QueryAllQuestion");
                }
            }
        });
        connection.release();
    });
};

// 查询所有攻略
var queryAllStratagy=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query($sql.queryAllStratagy, function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("stratary.ejs",{stratarys:result});
                connection.release();
            });
        }
    });
};
// 删除攻略
var deleteQueryAllStratagy= function (req, res, next) {
    var _id = req.query.id;
    console.log("_id:" + _id);
    pool.getConnection(function (err, connection) {
        connection.query($sql.deleteQueryAllStratagy,[_id], function (err, result){
            if (err) {
                console.log(err.message);
            }
            else {
                // 判断用户是否存在
                console.log("查询结果："+JSON.stringify(result));
                if(result.affectedRows > 0)//用户不存在的判断
                {
                    res.redirect("/users/QueryAllStratagy");
                }
                else{
                    /* req.session.userName=result[0].UserName;*/
                    res.redirect("/users/QueryAllStratagy");
                }
            }
        });
        connection.release();
    });
};

// 查询所有评论
var queryAllpinglun=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query($sql.queryAllpinglun, function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("pinglun.ejs",{pingluns:result});
                connection.release();
            });
        }
    });
};
// 删除攻略
var deletequeryAllpinglun= function (req, res, next) {
    var _id = req.query.id;
    console.log("_id:" + _id);
    pool.getConnection(function (err, connection) {
        connection.query($sql.deletequeryAllpinglun,[_id], function (err, result){
            if (err) {
                console.log(err.message);
            }
            else {
                // 判断用户是否存在
                console.log("查询结果："+JSON.stringify(result));
                if(result.affectedRows > 0)//用户不存在的判断
                {
                    res.redirect("/users/QueryAllPinglun");
                }
                else{
                    /* req.session.userName=result[0].UserName;*/
                    res.redirect("/users/QueryAllPinglun");
                }
            }
        });
        connection.release();
    });
};

// 查询所有评论
var queryAllintegral=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query($sql.queryintegral, function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("integral.ejs",{integrals:result});
                connection.release();
            });
        }
    });
};
// 删除攻略
var deletequeryAllintegral= function (req, res, next) {
    var _id = req.query.id;
    console.log("_id:" + _id);
    pool.getConnection(function (err, connection) {
        connection.query($sql.deletequeryintegral,[_id], function (err, result){
            if (err) {
                console.log(err.message);
            }
            else {
                // 判断用户是否存在
                console.log("查询结果："+JSON.stringify(result));
                if(result.affectedRows > 0)//用户不存在的判断
                {
                    res.redirect("/users/QueryAllintegral");
                }
                else{
                    /* req.session.userName=result[0].UserName;*/
                    res.redirect("/users/QueryAllintegral");
                }
            }
        });
        connection.release();
    });
};
//查询商品
var queryAllgoods=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query($sql.querygoods, function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("goods.ejs",{goods:result});
                connection.release();
            });
        }
    });
};
// 删除商品
var DeletequeryAllgoods= function (req, res, next) {
    var _id = req.query.id;
    console.log("_id:" + _id);
    pool.getConnection(function (err, connection) {
        connection.query($sql.deletequerygoods,[_id], function (err, result){
            if (err) {
                console.log(err.message);
            }
            else {
                // 判断用户是否存在
                console.log("查询结果："+JSON.stringify(result));
                if(result.affectedRows > 0)//用户不存在的判断
                {
                    res.redirect("/users/QueryAllgoods");
                }
                else{
                    /* req.session.userName=result[0].UserName;*/
                    res.redirect("/users/QueryAllgoods");
                }
            }
        });
        connection.release();
    });
};
exports.loginJudge=loginJudge;
exports.queryAllUser=queryAllUser;
exports.queryAllTraveal=queryAllTraveal;
exports.queryAllQuestion=queryAllQuestion;
exports.queryAllStratagy=queryAllStratagy;
exports.deleteQueryAllStratagy=deleteQueryAllStratagy;
exports.queryAllpinglun=queryAllpinglun;
exports.deletequeryAllpinglun=deletequeryAllpinglun;
exports.queryAllintegral=queryAllintegral;
exports.deletequeryAllintegral=deletequeryAllintegral;
exports.queryAllgoods=queryAllgoods;
exports.DeletequeryAllgoods=DeletequeryAllgoods;
exports.DeleteQuestion=DeleteQuestion;
exports.DeleteTravealByTravelNoteId=DeleteTravealByTravelNoteId;

