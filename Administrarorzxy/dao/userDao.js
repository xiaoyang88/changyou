/**
 * Created by Administrator on 2016/9/27.
 */
var $conf = require("./../conf/db");
var mysql = require('mysql');
var path = require('path');
var uuid = require('node-uuid');
var fs = require('fs');
var crypto = require('crypto');
var url = require('url');
var $sql = require('./adminSqlMapping');//得到6条查询语句
var pool = mysql.createPool($conf);

var addPic=function (req, res) {
    var param=req.body;//对表单的请求处理
    console.log(req.files.myFile.length);//得到
    //================upload==========================
    console.log(req.files);
    console.log("req.files.myFile.originalFilename:"+req.files.myFile.originalFilename);
    console.log("req.files.myFile.path:"+req.files.myFile.path);
    var filename = req.files.myFile.originalFilename || path.basename(req.files.myFile.path);
    console.log("得到原始的文件名filename:"+filename);
    console.log("dirname:"+path.dirname(__filename));
    console.log("当前项目的路径 path.resolve(__dirname, '../'):"+  path.resolve(__dirname, '../'));
    //_dirname：当前项目的路径   ../  取上一级目录
    //copy file to a public directory

    /*-------------filename处理、得到新的文件名------------------*/
    var v=uuid.v4();//
    var suffix=filename.substr(filename.lastIndexOf("."));
    var _myFileName=v+suffix;//新的文件名
    console.log("新的文件名_myFileName:" + _myFileName);

    /*-------------filename------------------------------------------*/
    var targetPath =   path.resolve(__dirname, '../') + "/public/upload/" + _myFileName;//目标路径
    console.log("目标路径targetPath:"+targetPath);
    console.log("req.files.myform.path:"+req.files.myFile.length);
    //copy file
    fs.createReadStream(req.files.myFile.path).pipe(fs.createWriteStream(targetPath));
    //return file url


//================insert==========================


    var src = new Array();
    var img = document.getElementsByTagName('img');
    for(var i in img)
    {
        if (img[i].src)
        {
            src.push(img[i].src);
        }
    }
    console.log(src);//存储了所有src地址的数组
    console.log(param);
    console.log(" Pic路径 :"+filename);

    console.log(" CityName :" + param.CityName);
  
  
    console.log(" Describe :" + param.Describe);
    console.log(" CityPic :" + filename);
  
   pool.getConnection(function(err, connection) {
        connection.query('insert into destination(DestinationName,Ddescribe,Pic,content)VALUES(?,?,?,?)',[param.CityName,param.Describe,filename,param.editorValue], function(err, result) {
            if (err) {
                console.log(err.message);
                res.json({code: 500});
            }
            else {
                // 使用页面进行跳转提示
                if (result.affectedRows > 0) {
                    console.log("affectedRows>0");
                    // res.render('sucess', {  result: result   }); // 第二个参数可以直接在jade中使用
                    res.json({code: 200});
                }
                else {
                    console.log("affectedRows<0");
                    //向页面发送json数据
                    res.json({code: 500});
                }
            }
            connection.release();
        });
    });
};
//=================================  多图上传==========================================
//多图片上传：
var userMultiplePicUpload = function (req,res,next) {
    var sqlUserPic = "INSERT INTO activitypic(ActivityTitle,Pic) VALUES";
    var param = req.body;
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
        var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
        console.log("targetPath:" + targetPath);
        console.log("req.files.files.path:" + req.files.files.length);
        //copy file
        fs.createReadStream(req.files.files.path).pipe(fs.createWriteStream(targetPath));
        //return file url
        sqlUserPic += "('" + param.ActivityName + "','" + _myFileName + "'),"
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
            var targetPath = path.resolve(__dirname, '../') + '/public/upload/' + _myFileName;
            console.log("targetPath:" + targetPath);
            console.log("req.files.files.path:" + req.files.files[i].length);
            //copy file
            fs.createReadStream(req.files.files[i].path).pipe(fs.createWriteStream(targetPath));
            sqlUserPic += "('" + param.ActivityName + "','" + _myFileName + "'),"
        }
    }
    sqlUserPic = sqlUserPic.substr(0, sqlUserPic.length - 1);
    console.log(" sqlUserPic :" + sqlUserPic);
    //================insert==========================

    pool.getConnection(function (err, connection) {
        connection.query(sqlUserPic, function (err, result) {
            connection.query('INSERT INTO activity(ActivityTitle,ActivityContent ,StartTime,EndTime) VALUES(?,?,?,?)',[ param.ActivityName,param.Describe,param.startTime,param.endTime], function (err, result) {
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

exports.UserPicinsert=userMultiplePicUpload;
exports.insertAdd=addPic;