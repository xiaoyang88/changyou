/**
 * Created by Administrator on 2016/9/19.
 */
var $conf = require("./../conf/db");
/*var $sql = require('./userSql');*/
var mysql = require('mysql');
var pool = mysql.createPool($conf);
var showNewsInfoById=function (req, res, next) {

    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('select * from question', function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
               
                // 输出JSON到界面
                res.render("show.ejs",{NewsInfos:result});
                connection.release();
            });
        }
    });
}
//攻略的界面调用
var strategyMain=function (req, res, next) {
    var StraPic=''
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT * FROM strategypic',
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    StraPic=result;
                });
            connection.query('SELECT * FROM strategynote GROUP BY StrategyNoteTime',
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    for(var i=0;i<result.length;i++)
                    {
                        result[i].StraPicDao=new Array()
                        for(var j=0;j<StraPic.length;j++)
                        {
                            if(StraPic[j].StrategyName==result[i].StrategyName)
                            {
                                result[i].StraPicDao.push(StraPic[j].StrategyPic)
                            }
                        }
                    }
                    // 输出JSON到界面
                    console.log('strategyShow结果:'+JSON.stringify(result));
                    res.render('strategy.ejs',{strategyShowData:result});
                    connection.release();
                });
        }
    });
};
//攻略的界面调用
var strategyDetail=function (req, res, next) {
    var  param=req.query.strategyNoteId;
    var  StraPic='';
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT * FROM strategypic',
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;
                    }
                    StraPic=result;
                });
            connection.query('SELECT * FROM strategynote WHERE StrategyNoteId=?',[param],
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;
                    }
                    for(var i=0;i<result.length;i++)
                    {
                        result[i].StraPicDao=new Array()
                        for(var j=0;j<StraPic.length;j++)
                        {
                            if(StraPic[j].StrategyName==result[i].StrategyName)
                            {
                                result[i].StraPicDao.push(StraPic[j].StrategyPic)
                            }
                        }
                    }
                    // 输出JSON到界面
                    console.log('strategyDetailShow结果:'+JSON.stringify(result));
                    res.render('strategyDetail.ejs',{strategyDetailShowData:result});
                    connection.release();
                });
        }
    });
};

exports.strategyMain = strategyMain //攻略界面公开
exports.strategyDetail = strategyDetail //攻略详细界面公开
exports.showNewsInfoById = showNewsInfoById;