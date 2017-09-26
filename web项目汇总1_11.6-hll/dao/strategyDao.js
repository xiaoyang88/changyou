/**
 * Created by Administrator on 2016/10/14.
 */
/**
 * Created by Administrator on 2016/9/19.
 */
var $conf=require("./../conf/db");
var mysql = require('mysql');
var $sql = require('./strategysSqlMapping');
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var crypto = require('crypto');
var url = require('url');
var pool = mysql.createPool($conf);

/*var add1=function (req, res) {
    var param = req.body;
    console.log(req.files.files.length);
    //================upload3==========================
    console.log(req.files);
    console.log("req.files.files.originalFilename:" + req.files.files.originalFilename);
    console.log("req.files.files.path:" + req.files.files.path);
    var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
    console.log("filename:" + filename);
    console.log("dirname:" + path.dirname(__filename));
    console.log("  path.resolve(__dirname, '../'):" + path.resolve(__dirname, '../'));
    //copy file to a public directory

    /!*-------------filename------------------*!/
    var v = uuid.v4();
    var suffix = filename.substr(filename.lastIndexOf("."));
    var _myFileName = v + suffix;

    console.log("_myFileName:" + _myFileName);
    /!*-------------filename------------------*!/
    var targetPath = path.resolve(__dirname, '../') + '/public/images/image' + _myFileName;
    console.log("targetPath:" + targetPath);
    console.log("req.files.files.path:" + req.files.files.length);
    //copy file
    fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
    //return file url
    var date = new Date();
    console.log(param);
    console.log(param.StrategyName);
    console.log(param.editorValue);
    console.log(param.StrategyNoteTime);
    console.log(param.StrategyProfile);
   /!* console.log(_myFileName);*!/

    pool.getConnection(function(err, connection) {
        connection.query('INSERT INTO strategynote(StrategyName,StrategyContent,StrategyNoteTime,StrategyProfile)VALUES(?,?,?,?)',
            [param.StrategyName, param.editorValue, date, param.StrategyProfile],function(err, result) {
                if (err) {
                    console.log(err.message);
                    // res.render('fail', {
                    //     result: res// });
                    res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});

                }
                else {
                    // 使用页面进行跳转提示
                    if (result.affectedRows > 0) {
                        res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});

                    } else {
                        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});

                        res.render('fail', {
                            result: result
                        });
                    }
                }


                connection.release();
            });
    })
};*/

var queryAllnotes = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query($sql.queryAll, function (err, result) {
            res.send({success: true, strategys: result});      //往页面发送JSON字符串数据；
            connection.release();

        });
    });
};
//=================================  多图上传==========================================
//多图片上传：
var strategyMultiplePicUpload = function (req, res,next) {
    var sqlUserPic = "INSERT INTO strategyPic(StrategyName,StrategyPic) VALUES";
    var param = req.body;
    var date=new Date();
    console.log('date'+date);
    var userName=req.session.userName
    console.log(req.session.userName);
    console.log(param);

    console.log(req.files);
    console.log("length:" + req.files.files.length);
    //单图：
    if (req.files.files.length == undefined) {
        //================upload==========================
        console.log(req.files);
        console.log("req.files.files.originalFilename:" + req.files.files.originalFilename);
        console.log("req.files.files.path:" + req.files.files.path);
        var filename = req.files.files.originalFilename || path.basename(req.files.files.path);
        console.log("filename:" + filename);
        console.log("dirname:" + path.dirname(__filename));
        console.log("  path.resolve(__dirname, '../'):" + path.resolve(__dirname, '../'));
        //copy file to a public directory
        /*-------------filename------------------*/
        var v = uuid.v4();
        var suffix = filename.substr(filename.lastIndexOf("."));
        var _myFileName = v + suffix;

        console.log("_myFileName:" + _myFileName);
        /*-------------filename------------------*/
        var targetPath = path.resolve(__dirname, '../') + '/public/images/image' + _myFileName;
        console.log("targetPath:" + targetPath);
        console.log("req.files.files.path:" + req.files.files.length);
        //copy file
        fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
        //return file url
        sqlUserPic += "('" + param.StrategyName + "','" + _myFileName + "'),"
    }
    else {
        //多图：
        for (var i = 0; i < req.files.files.length; i++) {
            //================upload==========================
            console.log(req.files);
            console.log("req.files.files.originalFilename:" + req.files.files[i].originalFilename);
            console.log("req.files.files.path:" + req.files.files[i].path);
            var filename = req.files.files[i].originalFilename || path.basename(req.files.files[i].path);
            console.log("filename:" + filename);
            console.log("dirname:" + path.dirname(__filename));
            console.log("  path.resolve(__dirname, '../'):" + path.resolve(__dirname, '../'));
            //copy file to a public directory
            /*-------------filename------------------*/
            var v = uuid.v4();
            var suffix = filename.substr(filename.lastIndexOf("."));
            var _myFileName = v + suffix;

            console.log("_myFileName:" + _myFileName);
            /*-------------filename------------------*/
            var targetPath = path.resolve(__dirname, '../') + '/public/strategy/' + _myFileName;
            console.log("targetPath:" + targetPath);
            console.log("req.files.files.path:" + req.files.files[i].length);
            //copy file
            fs.createReadStream(req.files.files[i].path).pipe(fs.createWriteStream(targetPath));
            sqlUserPic += "('" + param.StrategyName + "','" + _myFileName + "'),"
        }
    }
    sqlUserPic = sqlUserPic.substr(0, sqlUserPic.length - 1);
    console.log(" sqlUserPic :" + sqlUserPic);
    //================insert==========================

    pool.getConnection(function (err, connection) {
        connection.query(sqlUserPic, function (err, result) {
            connection.query('INSERT INTO strategynote(StrategyName,StrategyContent,StrategyNoteTime,StrategyProfile)VALUES(?,?,?,?)',[ param.StrategyName,param.editorValue,date,param.StrategyProfile], function (err, result) {
                if (err) {
                    console.log(err.message);
                    res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                }
                else {

                    // 使用页面进行跳转提示
                    if (result.affectedRows > 0) {
                        res.json({code: 200, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                    } else {
                        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
                    }
                }
                connection.release();
            });
        });
    });
};
/*var multiple_show=function (req, res, next) {
    var id=req.query.GoodsId;
    console.log("id:"+JSON.stringify(id))
    pool.getConnection(function(err, connection) {
        connection.query($sql.multiple_show,id ,function (err, result) {
            console.log("结果：" + result);
            connection.query($sql.multiple_show1,id, function (err, result1) {
                res.render("goodsdetail.html",{info:result,info1:result1})
                connection.release();
            })
        })
    });
};*/
var strategyshow = function (req, res, next) {

    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('select * from strategynote where StrategyNoteId', function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("strategy.ejs",{Newsinfors1:result});
                connection.release();
            });
        }
    });
};
exports.strategyMultiplePicUpload=strategyMultiplePicUpload;
/*exports.add1=add1;*/
exports.queryAllnotes = queryAllnotes
exports.strategyshow = strategyshow;