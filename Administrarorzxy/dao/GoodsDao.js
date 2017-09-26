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
    console.log(" Pic路径 :"+filename);
    console.log(" GoodId :" + param.GoodId);
    console.log(" GoodName :" + param.GoodName);
    console.log(" GoodIntegral :" + param.GoodIntegral);
    console.log(" Quantity :" + param.Quantity);
    console.log(" Describe :" + param.Describe);
    console.log(" GoodPic :" + filename);
    if(param == null ) {
        console.log("param.UserName == null");
        //res.render('fail', {        result: result    });
        //res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
    }
    //插入数据库
    pool.getConnection(function(err, connection) {
        connection.query($sql.InsertGoods, [param.GoodId,param.GoodName,param.GoodIntegral,param.Quantity,_myFileName,param.Describe], function(err, result) {
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


exports.addPic=addPic;