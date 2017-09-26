/**
 * Created by Administrator on 2016/9/10.
 */
var $conf=require("./../conf/db");
var mysql = require('mysql');
var $sql = require('./mallsSqlMapping');
var path = require('path');
var fs = require('fs');
var uuid = require('node-uuid');
var crypto = require('crypto');
var url = require('url');
var pwdHelper = require('./../myutil/pwdHelper');
//调用utility的dbHelpler
var DBPool = require('./../myutil/dbHelper');
var db = require('./../myutil/mysql.js');
//创建连接池
var pool = mysql.createPool($conf);
var add=function (req, res) {
    var param = req.body
     console.log(req.files.files.length);
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
    console.log(param)
    console.log(param.GoodName)
    console.log(param.GoodIntegral)
    console.log(param.Quantity)
    console.log(param.editorValue)
    console.log(_myFileName )

pool.getConnection(function(err, connection) {
    connection.query('INSERT INTO goods(GoodName,GoodIntegral,Quantity,GoodsDescribe,GoodPic)VALUES(?,?,?,?,?)',
        [param.GoodName,param.GoodIntegral,param.Quantity,param.editorValue,_myFileName],function(err, result) {
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
};
var mallInfoById=function (req, res, next) {

    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }

        else{
            connection.query('select * from goods where GoodId', function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log(JSON.stringify(result));
                // 输出JSON到界面
                res.render("mallshow.ejs",{Newsinfors:result});
                connection.release();

            });
        }
    });
}

var userPic=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        connection.query('select * from goods', function(err, result) {
            res.render("mallshow.ejs",{Newsinfors:result});
            connection.release();
        });
    });
};
var oneshow  = function (req, res, next) {
    console.log("req.query.GoodsId:"+req.query.GoodId);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("错误：" + err.message);
            return;
        }
        else {
            connection.query("select * from goods where GoodId=?",[req.query.GoodsId], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                console.log("====================");
                var arr = JSON.stringify(result);
                console.log(arr);
                console.log("result：" + result);
                // 输出JSON到界面
                res.render("onemallshow.ejs", {OneGoods: result});
                connection.release();
            });
        }
    });
}
/*加入购物车*/
var addcart = function (req, res) {
    var arg = url.parse(req.headers.referer, true).query;//重定向
    NId = arg.GoodsId



    pool.getConnection(function (err, connection) {
        //不要光插入，要先判断有没有这个货物在购物车；
        connection.query("select * from  goods where goodId=? ",
            [ NId ], function (err, result) {
                if (err) {
                    console.log(err.message);


                }
                else {
                    // 使用页面进行跳转提示
                    res.render("myexchange.ejs", {goodscart: result});
                }

                connection.release();
            });
    });
};
/*显示购物车*/
var showcart = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query("select * from  exchange", function (err, result) {
            console.log('111111');
            console.log("结果："+result);
            connection.query("SELECT A.*,B.GoodPic FROM  exchange A LEFT JOIN(SELECT GoodId,GROUP_CONCAT(CONCAT(GoodPic)) AS GoodPic FROM goods  GROUP BY GoodId) B ON A.GoodId=B.GoodId",
                function (err,result1) {
                if(err){
                    console.log("错误:"+err.message);
                    return;
                }
                var arr = JSON.stringify(result1);
                console.log(arr);
                console.log("result：" + result1);
                res.render("myexchange.ejs", {goodscart: result1});
                connection.release();
            });
        });
    })
};
var queryAll = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query($sql.queryAll, function (err, result) {
            res.json({success: true,goods: result});      //往页面发送JSON字符串数据；
            connection.release();

        });
    });
};
var queryOne = function (req, res, next) {
    var GoodId=req.query.GoodId;
    console.log('GoodId:'+GoodId);
    pool.getConnection(function (err, connection) {
        connection.query($sql.queryAllPages,GoodId, function (err, result1) {
            res.json({success:true,goods:result1});      //往页面发送JSON字符串数据；
            console.log(result1);
            connection.release();

        });
    });
};

/*
 ========================= 积分查询判断===============================*/

var SelectIntegration = function (req, res, next) {
    var arg = url.parse(req.headers.referer, true).query;//重定向
    NId = arg.GoodsId
    var userName = req.session.userName;
    console.log( userName)
    if(req.session.userName!=undefined) {
        pool.getConnection(function (err, connection) {
            connection.query('select GoodIntegral FROM  goods   where GoodId=?', [ NId], function (err, result4) {
                //往页面发送JSON字符串数据；
                if (err) {
                    console.log(err.message);
                }
                console.log(result4);
                connection.query('select GoodIntegral FROM  integral   where UserName=?', [userName], function (err, result5) {
                    console.log(result5);
                    if (err) {
                        console.log(err.message);

                    } else {
                        console.log(result4[0].GoodIntegral)
                        console.log(result5[0].GoodIntegral)
                        if(result4[0].GoodIntegral<=result5[0].GoodIntegral) {
                            res.json({code:200});
                        }
                        else{
                            res.json({code:500});
                        }
                    }

                    /*                 res.json({GoodIntegral: result4[0].GoodIntegral, userIntegral: result5[0].GoodIntegral})*/

                    connection.release();
                });
            });

        });
    }
    else{
        console.log("请登录");

    }
};

exports.SelectIntegration=SelectIntegration;
/*=============================  确认兑换==========================*/
var MyExchange = function (req, res, next) {
    var param=req.body;
    console.log( param)
    var userName = req.session.userName;
    console.log( userName)
    var date=new Date()
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO orders(UserName,GoodId,GoodName,Consignee,ReceiptAddress,ReceiptCode,ReceiptTEl,OrderTime)VALUES(?,?,?,?,?,?,?,?)',
            [userName,param.goodsId,param.goodsName,param.userId,param.userAdress,param.userCode,param.userTel,date], function (err, result4) {
            //往页面发送JSON字符串数据；
            if (err) {
                console.log(err.message);
            }
            console.log(result4);
            connection.query('select GoodIntegral FROM  integral   where UserName=?', [userName], function (err, result5) {
                console.log(result5);
                if (err) {
                    console.log(err.message);

                } else {
                    console.log(result5[0].GoodIntegral);
                    var newGoodIntegral=result5[0].GoodIntegral- param.GoodIntegral
                    console.log(newGoodIntegral)
                    res.json({code: 200});
                    connection.query('UPDATE integral SET GoodIntegral=? where UserName=?',[newGoodIntegral,userName], function (err, result) {

                        if (err) {
                            console.log(err.message);

                        }



                    });
                 

                }



                connection.release();
            });
        });

    });
};

exports.MyExchange= MyExchange;
exports.addcart= addcart;
exports.showcart= showcart;
exports.oneshow = oneshow;
exports.add=add;
exports.mallInfoById = mallInfoById;
exports.userPic= userPic;
exports.queryAll= queryAll;
exports.queryOne= queryOne;
