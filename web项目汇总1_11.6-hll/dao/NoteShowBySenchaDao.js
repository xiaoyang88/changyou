/**
 * Created by Administrator on 2016/10/24.
 */

var $conf = require("./../conf/db");
var mysql = require('mysql');
var crypto=require('crypto');
var uuid = require('node-uuid');
var fs = require('fs');
var url = require('url');
var path = require('path');
var pool = mysql.createPool($conf);

//游记首页调用
var NoteInfoShow=function (req, res, next) {
    var pic='';
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT * FROM travelpic', function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;
                }
                // 输出JSON到界面
                pic=result
            });
            connection.query('SELECT A.*,u.UserPic FROM USER u,travelnotesencha A WHERE A.Username=u.UserName ORDER BY TravelNoteTime DESC', function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                for(var i=0;i<result.length;i++)
                {
                    result[i].senchapic=new Array()
                    for(var j=0;j<pic.length;j++){
                        if(pic[j].Tname==result[i].Tname)
                        {
                            result[i].senchapic.push(pic[j].TravelNotePic)
                        }
                    }
                }
                // 输出JSON到界面
                /*  console.log('NoteInfoShow结果:'+JSON.stringify(result));*/
                res.send(result);
                connection.release();
            });
        }
    });
};
//游记详情调用
var NoteDetail=function (req, res, next) {
    var  param=req.query.TravelNoteId;
    console.log(param)
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT * FROM travelpic', function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;
                }
                // 输出JSON到界面
                pic=result
            });
            connection.query('SELECT tc.*,u.UserPic FROM travel_comment tc,USER u WHERE tc.UserName=u.UserName AND TravelNoteId=?',[param], function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;
                }
                // 输出JSON到界面
                Comment=result
                console.log("Comment"+Comment)
                connection.query('SELECT A.*,u.UserPic FROM USER u,travelnotesencha A WHERE A.Username=u.UserName and TravelNoteId=?',[param], function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    for(var i=0;i<result.length;i++)
                    {
                        result[i].senchapic=new Array()
                        for(var j=0;j<pic.length;j++){
                            if(pic[j].Tname==result[i].Tname)
                            {
                                result[i].senchapic.push(pic[j].TravelNotePic)
                            }
                        }
                    }
                    NoteDetail=result;
                    // 输出JSON到界面
                    console.log('NoteDetail结果:'+JSON.stringify(NoteDetail));
                    res.send({success:true,NoteDetailData:NoteDetail,NoteComment:Comment});
                    connection.release();
                });
            });
        }
    });
};
//问答页面的调用
var QuestionInfoShow=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT question.*,USER.UserPic FROM question,USER WHERE question.`UserName`=user.`UserName` ORDER BY question.QuestionTime DESC', function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }

                // 输出JSON到界面
                     console.log('QuestionInfoShow结果:'+JSON.stringify(result));
                res.send({success:true,QuestionInfoData:result});
                connection.release();
            });
        }
    });
};
//问答详细页面的调用
var QuestionDetailShow=function (req, res, next) {
    var  param=req.query.QuestionId;
    console.log(param)
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT q.*,u.UserPic FROM question q,USER u WHERE q.UserName=u.UserName AND QuestionId=?',[param],
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    QuestionInfoResult=result;
                    connection.query('SELECT qa.*,u.UserPic FROM question_answer qa, USER u WHERE qa.UserName=u.UserName AND qa.QuestionId=?',[param],
                        function(err, result) {
                            if(err){
                                console.log("错误："+err.message);
                                return;  //退出query方法，后面的代码不执行了；
                            }
                            // 输出JSON到界面
                            /*     console.log('QuestionDetail结果:'+JSON.stringify(result));*/
                            res.send({success:true,QuestionInfo:QuestionInfoResult,QuestionDetailData:result});
                            connection.release();
                        });
                });
        }
    });
};
//活动界面
var ActivityInfoShow=function (req, res, next) {
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT * FROM activitypic',
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    actPic=result;
                });
            connection.query('SELECT A.*,m.ManagerName,m.pic FROM manager m,activity A GROUP BY a.ActivityTitle',
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    for(var i=0;i<result.length;i++)
                    {
                        result[i].ActPicSencha=new Array()
                        for(var j=0;j<actPic.length;j++)
                        {
                            if(actPic[j].ActivityTitle==result[i].ActivityTitle)
                            {
                                result[i].ActPicSencha.push(actPic[j].Pic)
                            }
                        }
                    }
                    // 输出JSON到界面
                    /*console.log('ActivityInfoShow结果:'+JSON.stringify(result));*/
                    res.send({success:true,ActivityInfoData:result});
                    connection.release();
                });
        }
    });
};
//活动详细页面的调用
var ActivityDetailShow=function (req, res, next) {
    var param=req.query.ActivityId;
    console.log(param);
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT * FROM activitypic',
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    actPic=result;
                });
            connection.query('SELECT A.*,m.ManagerName,m.pic FROM manager m,activity A where ActivityId=? GROUP BY a.ActivityTitle',[param],
                function(err, result) {
                    if(err){
                        console.log("错误："+err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    for(var i=0;i<result.length;i++)
                    {
                        result[i].ActPicSencha=new Array()
                        for(var j=0;j<actPic.length;j++)
                        {
                            if(actPic[j].ActivityTitle==result[i].ActivityTitle)
                            {
                                result[i].ActPicSencha.push(actPic[j].Pic)
                            }
                        }
                    }
                    // 输出JSON到界面
                    /*  console.log('ActivityDetail结果:'+JSON.stringify(result));*/
                    res.send({success:true,ActivityDetailData:result});
                    connection.release();
                });
        }
    });
};
var login = function (req, res, next) {
    var param = req.body;
    console.log(param);
    var hash = crypto.createHash("md5");
    hash.update(param.password);
    var encode = hash.digest('hex');
    pool.getConnection(function (err, connection) {
        connection.query('select*from user where UserName=? and UPassword=? ',
            [param.name, encode], function (err, result) {
            if (err) {
                res.json({success:false})
                console.log("错误：" + err.message);
            } else{
                if(result.length==0 )//用户不存在的判断
                {
                    res.json({success:false})
                }
                else{
                    res.json({success:true})
                }
                connection.release();
            }
        });
    });
}

var Register = function (req, res, next) {
    var param = req.body;
    console.log(param);
    var hash = crypto.createHash("md5");
    hash.update(param.password);
    var encode = hash.digest('hex');
    pool.getConnection(function (err, connection) {

        connection.query(' INSERT INTO user(UserName,UPassword) VALUES(?,?) ',[param.name, encode], function (err, result) {
            if (err) {
                res.json({success:false})
                console.log("错误：" + err.message);


            }
            else{
                if(result.length==0 )//用户不存在的判断
                {
                    res.json({success:false})
                }
                else{
                    res.json({success:true})

                }
                connection.release();
            }
        });

    });
}
var SelectUserPic = function (req, res, next) {
    var param = req.query.UserName;
    console.log(param);
    pool.getConnection(function (err, connection) {

        connection.query('SELECT * FROM USER  where UserName=? ',[param], function (err, result) {
            if (err) {
                res.json({success:false})
                console.log("错误：" + err.message);


            } else{
                if(result.length==0 )//用户不存在的判断
                {
                    res.json({success:false})
                }
                else{
                    console.log("jieguo"+JSON.stringify(result));
                    res.send({success:true,UserPic:result});


                }



                connection.release();
            }
        });

    });
}
//=============================================  评论==============================================
function addComment(req, res,next) {

    var param=req.body;


    var date=new Date();

    console.log(param)
    console.log(date)
    pool.getConnection(function(err, connection) {
        connection.query('INSERT INTO travel_comment(TravelNoteId,UserName,Comment_Contnet,CommentTime)VALUES(?,?,?,?)',[param.CommentNoteId,param.Username,param. Commentvalue,date], function(err ,result) {
            if (err) {
                console.log(err.message);
            }

            else{
                if(result.length==0 )
                {
                    console.log("失败")
                    res.json({success:false})
                }
                else{
                    console.log("成功")
                    res.json({success:true})

                }




            }
        });

        connection.release();
    });

}
//================================== 点赞==========================================
var praise=function (req, res, next) {
    var param=req.body;
    console.log(param)

    pool.getConnection(function (err, connection) {

        connection.query('INSERT INTO praise(UserName,TravelNoteId) VALUES(?,?)',[param.id,param.infoid],function (err, result) {
            if (err) {
                connection.query('DELETE FROM Praise WHERE UserName=? AND TravelNoteId=?',[param.id,param.infoid],function (err1, result1) {
                    res.json({success:false})
                    return
                })
                return
            }
            res.json({success:true})
            connection.release();
        });
    })
}

//================================== 收藏==========================================
var Collect=function (req, res, next) {
    var param=req.body;
    console.log(param)

    pool.getConnection(function (err, connection) {

        connection.query('INSERT INTO collect(UserName,TravelNoteId) VALUES(?,?)',[param.id,param.infoid],function (err, result) {
            if (err) {
                connection.query('DELETE FROM collect WHERE UserName=? AND TravelNoteId=?',[param.id,param.infoid],function (err1, result1) {
                    res.json({success:false})
                    return
                })
                return
            }
            res.json({success:true})
            connection.release();
        });
    })
}
//================================== 我的个人游记查询==========================================

var MyNoteShow=function (req, res, next) {
    var param=req.body;
    // var UserName='12345aa';
    pool.getConnection(function(err, connection) {
        if(err){
            console.log(err.message);
        }
        connection.query('SELECT * FROM  travelnotesencha  WHERE UserName=?',[param.UserName], function(err, result2) {
            res.json({success: true,mynote: result2});
            console.log(JSON.stringify(result2))//往页面发送JSON字符串数据；
            connection.release();
        })
    });
};
//问答
var MyCommentShow=function (req, res, next) {
    var param=req.body;
    pool.getConnection(function(err, connection) {
        if(err){
            console.log(err.message);
        }
        connection.query('SELECT * FROM  question  WHERE UserName=?',[param.UserName], function(err, result6) {
            res.json({success: true,mycomment: result6});
            console.log(JSON.stringify(result6))//往页面发送JSON字符串数据；
            connection.release();
        })
    });
};
//积分
var MyIntegralShow=function (req, res, next) {
    var param=req.body;
    // var UserName='12345aa';
    pool.getConnection(function(err, connection) {
        if(err){
            console.log(err.message);
        }
        connection.query('SELECT * FROM  integral  WHERE UserName=?',[param.UserName], function(err, result3) {
            res.json({success: true,myintegral: result3});
            console.log(JSON.stringify(result3))//往页面发送JSON字符串数据；
            connection.release();
        })
    });
};
//================================== 我的个人信息修改==========================================

/*var Userqueryalert = function (req, res, next) {
    var param=req.body;
    pool.getConnection(function(err, connection) {
        if(err){
            console.log(err.message);
        }
        connection.query( 'select * from user where UserName=?',[param.UserName], function (err, result4) {
            res.json({success:true,user:result4});      //往页面发送JSON字符串数据；
            console.log(result4);
            connection.release();

        });
    });
};*/
var Userqueryalert = function (req, res) {
    var param = req.body;
    console.log(" UserId :" + param.UserId);
    console.log(" UserName :" + param.UserName);
    console.log(" Upassword :" + param.Upassword);
    console.log(" TEL :" + param.TEL);
    console.log(" Gender :" + param.Gender);
    var birthDate = moment(param.birthDate).format('YYYY-MM-DD');
    console.log(" birthDate :" + birthDate);
    var pwd = param.Upassword;
    var encode = pwdHelper.encrypwd(pwd);
    console.log("pwd:" + encode);
    pool.getConnection(function (err, connection) {
        connection.query('update user set UserName=?,Upassword=?,TEL=?,Gender=?,birthDate=? where UserId=?', [ param.userName, encode,param.TEL,param.Gender, birthDate, param.UserId], function (err, result) {
            if (err) {
                console.log(err.message);
                res.json({"success": false});
            }
            else {
                console.log("result.affectedRow：" + result.affectedRow)
                if (result.affectedRows > 0) {
                    res.json({"success": true});
                }
                else {
                    res.json({"success": false});
                }
            }
            connection.release();
        });
    });
};
//================================== 我的个人信息商城主页==========================================

var queryAll = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query('select * from goods', function (err, result) {
            res.json({success: true,goods: result});      //往页面发送JSON字符串数据；
            connection.release();

        });
    });
};
//================================== 我的个人信息商品详情==========================================

var queryOne = function (req, res, next) {
    var GoodId=req.query.GoodId;
    console.log('GoodId:'+GoodId);
    pool.getConnection(function (err, connection) {
        connection.query('select * from goods where GoodId=?',GoodId, function (err, result1) {
            res.json({success:true,goods:result1});      //往页面发送JSON字符串数据；
            console.log(result1);
            connection.release();

        });
    });
};
//================================== 商品积分判断==========================================

/*var Userquerygoods = function (req, res, next) {
    var param=req.body;
    console.log( param)
    var date=new Date()
    pool.getConnection(function(err, connection) {
        connection.query( 'select GoodIntegral FROM  goods   where GoodId=?',[param.GoodId], function (err, result4) {
            //往页面发送JSON字符串数据；
            if(err){
                console.log(err.message);
            }
            console.log(result4);
            connection.query( 'select GoodIntegral FROM  integral   where UserName=?',[param.UserName], function (err, result5) {
                console.log(result5);
                if(err){
                    console.log(err.message);
                    res.json({code: 500});
                }
                else {
                    //====商品
                    console.log(result4);
                    //====个人
                    console.log(result5);
                    if(result5[0].GoodIntegral-result4[0].GoodIntegral<0){
                        console.log(result5[0].GoodIntegral-result4[0].GoodIntegral)
                        res.json({GoodIntegral:result4[0].GoodIntegral,userIntegral:result5[0].GoodIntegral})
                        return
                    }
                    console.log("sadasdsada")
                    connection.query("update integral set GoodIntegral=? where UserName=?",
                        [result5[0].GoodIntegral-result4[0].GoodIntegral,param.UserName], function (err, result) {
                            if (err) {
                                console.log(err.message);
                            }
                        })

                    connection.query("INSERT INTO goods_success(GoodId,GoodName,GoodIntegral) VALUES(?,?,?) ",
                        [param.GoodId, param.GoodName, param.GoodIntegral], function (err, result) {
                            if (err) {
                                console.log(err.message);
                            }
                        })
                }
                console.log('9')
                // res.json({GoodIntegral:result4[0].GoodIntegral,userIntegral:result5[0].GoodIntegral})

                connection.release();
            });
        });

    });
};*/
var Userquerygoods = function (req, res, next) {
    var param=req.body;
    pool.getConnection(function(err, connection) {
        connection.query( 'select GoodIntegral FROM  goods   where GoodId=?',[param.GoodId], function (err, result4) {
            //往页面发送JSON字符串数据；
            if(err){
                console.log(err.message);
            }
            console.log(result4);
            connection.query( 'select GoodIntegral FROM  integral   where UserName=?',[param.UserName], function (err, result5) {
                console.log(result5);
                if(err){
                    console.log(err.message);
                    res.json({code: 500});
                }else {
                    if(result5[0].GoodIntegral-result4[0].GoodIntegral<0){
                        console.log('result5[0].GoodIntegral-result4[0].GoodIntegral')
                        res.json({GoodIntegral:result4[0].GoodIntegral,userIntegral:result5[0].GoodIntegral})
                        return
                    }
                    connection.query("update integral set GoodIntegral=? where UserName=?",
                        [result5[0].GoodIntegral-result4[0].GoodIntegral,param.UserName], function (err, result) {
                            if (err) {
                                console.log(err.message);
                            }
                        })
                    console.log('result5[0].GoodIntegral-result4[0].GoodIntegral')
                    connection.query("INSERT INTO goods_success(GoodId,UserName,GoodName,GoodIntegral) VALUES(?,?,?,?) ",
                        [param.GoodId,param.UserName,param.GoodName, param.GoodIntegral], function (err, result) {
                            if (err) {
                                console.log(err.message);
                            }
                        })
                }
                res.json({GoodIntegral:result4[0].GoodIntegral,userIntegral:result5[0].GoodIntegral})

                connection.release();
            });
        });

    });
};
//================================== 我的个人商品兑换==========================================

var MyexchangeShow=function (req, res, next) {
    var param=req.body;
    console.log(param)
    pool.getConnection(function(err, connection) {
        if(err){
            console.log(err.message);
        }/*SELECT * FROM  orders WHERE UserName=?*/
        connection.query('SELECT goods_success.*,goods.GoodPic FROM  goods , goods_success  WHERE goods.GoodId=goods_success.GoodId AND goods_success.UserName=?',[param.UserName], function(err, result7) {
            res.json({success: true,myexchage: result7});
            console.log(JSON.stringify(result7))//往页面发送JSON字符串数据；
            connection.release();
        })
    });
};

//=============================== 多图===========================================

var UploadPic = function (req, res, next) {
    var sqlUserPic = "INSERT INTO UserPic(UserName,Pic) VALUES";
    var param = req.body;
    var UserName=req.query.id

    console.log( UserName);


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
        sqlUserPic += "('" +UserName + "','" + _myFileName + "'),"
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
            sqlUserPic += "('" +UserName + "','" + _myFileName + "'),"
        }
    }
    sqlUserPic = sqlUserPic.substr(0, sqlUserPic.length - 1);
    console.log(" sqlUserPic :" + sqlUserPic);
    //================insert==========================

    pool.getConnection(function (err, connection) {
        connection.query(sqlUserPic, function (err, result) {

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

};
//=============================== 多图 显示===========================================
var ShowUserPic=function (req, res, next) {
    var param=req.body
    var pic='';
    pool.getConnection(function(err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else{
            connection.query('SELECT * FROM userpic', function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;
                }
                // 输出JSON到界面
                pic=result
            });
            connection.query('SELECT *from user where UserName=?',[ param.userName], function(err, result) {
                if(err){
                    console.log("错误："+err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                for(var i=0;i<result.length;i++)
                {
                    result[i].senchapic=new Array()
                    for(var j=0;j<pic.length;j++){
                        if(pic[j].Username==result[i].Username)
                        {
                            result[i].senchapic.push(pic[j].pic)
                        }
                    }
                }
                // 输出JSON到界面
                console.log('NoteInfoShow结果:'+JSON.stringify(result));
                res.send(result);
                connection.release();
            });
        }
    });
};

/*======================= 问题===========================*/
var QuestionNote=function (req, res, next) {
    var param=req.body;
    // var UserName='12345aa';
    var date= new Date()
    console.log(param)
    pool.getConnection(function(err, connection) {

        connection.query('INSERT INTO question(QuestionName,UserName,QuestionContent,QuestionTime)VALUES(?,?,?,?)', [param.QuestionName,param.UserName, param.QuestionDetails,date],function(err, result3) {
            if(err){
                console.log("错误："+err.message);
                res.json({success:false})
                return;  //退出query方法，后面的代码不执行了；

            }
            else{
                res.json({success:true})
            }
            connection.release();

        }); });
}
exports.QuestionNote=QuestionNote
exports.Collect=Collect
exports.praise=praise;
exports.addComment=addComment;
exports.SelectUserPic=SelectUserPic;
exports.LoginUser=login;

exports.NoteInfoShow = NoteInfoShow;//游记首页调用
exports.NoteDetail = NoteDetail;//游记详情调用
exports.QuestionInfoShow = QuestionInfoShow;//问答界面公开
exports.QuestionDetailShow = QuestionDetailShow//问答详细界面公开   
exports.ActivityInfoShow = ActivityInfoShow//问答详细界面公开  
exports.ActivityDetailShow = ActivityDetailShow //活动详细界面公开
exports.MyNoteShow=MyNoteShow;
exports.MyCommentShow=MyCommentShow;
exports.MyIntegralShow=MyIntegralShow;
exports.RegisterUser = Register;
exports.queryAll= queryAll;//商城
exports.queryOne= queryOne;//商品详情
exports.Userquerygoods= Userquerygoods;//积分对比
exports.MyexchangeShow= MyexchangeShow;//商品兑换显示
exports.Userqueryalert=Userqueryalert;//信息修改查询
exports.ShowUserPic=ShowUserPic
exports.UploadPic= UploadPic