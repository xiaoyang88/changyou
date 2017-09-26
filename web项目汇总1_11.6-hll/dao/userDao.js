/**
 * Created by Administrator on 2016/9/18.
 */
var $conf = require("./../conf/db");
var mysql = require('mysql');
var crypto = require('crypto');
var uuid = require('node-uuid');
var fs = require('fs');
var url = require('url');
var path = require('path');

//注册用户名判断

var userIdJudge = function (req, res, next) {
    var param = req.body.userName;
    console.log('注册：' + JSON.stringify(param));
    pool.getConnection(function (err, connection) {
        connection.query('select * from user where UserName=?', [param],
            function (err, result) {
                if (result.length != 0) {
                    console.log("错误");
                    res.json({code: 500});
                }
                else {
                    res.json({code: 200});
                }
            });
    });
};
//注册验证
var registerJudge = function (req, res, next) {
    var param = req.body;
    console.log("registerJudge" + JSON.stringify(param));
    if (param.uid == null) {
        console.log("param.UserName == null");
    }
    var hash = crypto.createHash("md5");
    hash.update(param.userPwd1);
    var encode = hash.digest('hex');
    var pic = 'DefaultAvatar.jpg';
    var integral = '5'
    pool.getConnection(function (err, connection) {
        connection.query(' INSERT INTO user(UserName,Upassword,TEL,UserPic) VALUES(?,?,?,?)', [param.userName, encode, param.UserTel, pic],
            function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    connection.query(' INSERT INTO integral(GoodIntegral,UserName) VALUES(?,?)', [integral, param.userName],
                        function (err, result) {
                        });
                    res.render('Login.ejs', {Meg: ""}); // 第二个参数可以直接在jade中使用
                }
                connection.release();
            });
    });
}


//登录验证
//创建连接池
var pool = mysql.createPool($conf);
var loginJudge = function (req, res, next) {
    var param = req.body;
    var hash = crypto.createHash("md5");
    hash.update(param.userPwd);
    var encode = hash.digest('hex');
    console.log("加密后的密码：" + encode);
    pool.getConnection(function (err, connection) {
        connection.query('select * from user where UserName=? and Upassword=? ',
            [param.userName, encode],
            function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    // 判断用户是否存在
                    console.log("查询结果：" + JSON.stringify(result));
                    if (result.length == 0)//用户不存在的判断
                    {
                        res.render("Login.ejs", {Meg: '用户不存在或密码错误！'});
                    }
                    else {
                        req.session.userName = result[0].UserName;
                        res.redirect("/");
                    }
                }
            });
        connection.release();
    });
};

function login3(user, callback) {
    pool.getConnection(function (err, connection) {
        var hash = crypto.createHash("md5");
        hash.update(user.userPwd);
        var encode = hash.digest('hex');
        console.log("加密后的密码login333：" + encode);
        //调用视图
        connection.query('SELECT COUNT(*) num FROM USER WHERE userName=? AND Upassword=?', [user.userName, encode],
            function (error, result) {
                if (error) {
                    console.log(error.message);
                    return;
                }
                console.log(JSON.stringify(result));
                callback(result)
                connection.release();
            });
    });
}

function Community(req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT q.*,u.UserPic FROM question q,USER u WHERE  q.UserName=u.UserName ORDER BY q.QuestionTime DESC', function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                // 输出JSON到界面
                console.log("QuestionAnswershow:" + JSON.stringify(result));
                res.render("Community.ejs", {QuestionAnswershow: result});
                connection.release();
            });
        }
    });
}

//问答详细页面的调用
var QuestionDetailShow = function (req, res, next) {
    var param = req.query.QuestionId;
    console.log(param)
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT q.*,u.UserPic FROM question q,USER u WHERE q.UserName=u.UserName AND QuestionId=?', [param],
                function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    QuestionInfoResult = result;
                    console.log("QuestionInfoResult 问题内容" + JSON.stringify(QuestionInfoResult))
                    connection.query('SELECT qa.*,u.UserPic FROM question_answer qa, USER u WHERE qa.UserName=u.UserName AND qa.QuestionId=?', [param],
                        function (err, result) {
                            if (err) {
                                console.log("错误：" + err.message);
                                return;  //退出query方法，后面的代码不执行了；
                            }
                            // 输出JSON到界面
                            console.log('QuestionDetail 回答结果:' + JSON.stringify(result));
                            res.render('communityDetail.ejs', {
                                QuestionInfo: QuestionInfoResult,
                                QuestionDetailData: result
                            });
                            connection.release();
                        });
                });
        }
    });
};


/*========================= 忘记密码============================*/
function forget(req, res, next) {
    var param = req.body;

    console.log("提交的用户名：" + param.UserName);
    console.log("提交的手机号：" + param.UserPhone);

    pool.getConnection(function (err, connection) {
        connection.query('select * from user where UserName=? and TEL=? ', [param.UserName, param.UserPhone],
            function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    if (result.length == 1) {
                        res.render("ResetPassword.ejs", {meg: result});
                    }
                    else {
                        res.render("ForgetPassword.ejs");
                    }
                }
            });
        connection.release();
    });


}
function Reset(req, res, next) {
    var param = req.body;
    console.log(param)
    var hash = crypto.createHash("md5");
    hash.update(param.Userpwd);
    var encode = hash.digest('hex');
    pool.getConnection(function (err, connection) {
        connection.query('update user set Upassword=? WHERE userName', [encode, param.userName],
            function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    res.render("login.ejs", {Meg: ""});


                }
            });
        connection.release();
    });

}
function userpic(req, res, next) {
    res.render("nav.ejs", {Meg: ""});
    connection.release();
}
//=================================  多图上传==========================================
//多图片上传：
var userMultiplePicUpload = function (req, res, next) {
    var sqlUserPic = "INSERT INTO travelpic(Tname,TravelNotePic) VALUES";
    var param = req.body;
    /*var date = new Date();*/
    var nowDate = new Date();
    var date = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();
    console.log("date")
    var userName = req.session.userName
    console.log(req.session.userName);
    console.log(param);
    console.log("UserDao userMultipleUpload：");
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
        sqlUserPic += "('" + param.Tname + "','" + _myFileName + "'),"
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
            sqlUserPic += "('" + param.Tname + "','" + _myFileName + "'),"
        }
    }
    sqlUserPic = sqlUserPic.substr(0, sqlUserPic.length - 1);
    console.log(" sqlUserPic :" + sqlUserPic);
    //================insert==========================

    pool.getConnection(function (err, connection) {
        connection.query(sqlUserPic, function (err, result) {
            connection.query('INSERT INTO travelnote(UserName,Tname ,TrvaelContnet,TravelNoteTime) VALUES(?,?,?,?)', [userName, param.Tname, param.editorValue, date], function (err, result) {
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


//======================我的个人中心=============================

//我的游记
function MyhomeNote(req, res, next) {
    var username = req.session.userName
    console.log("Myhome_note session.userName :" + req.session.userName);
    var notePic = '';
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT * FROM travelpic', function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                notePic = result
            });
            connection.query('SELECT A.*,u.UserPic FROM USER u,travelnote A WHERE A.Username=u.UserName  AND A.Username=? ORDER BY TravelNoteTime DESC', [username],
                function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    for (var i = 0; i < result.length; i++) {
                        result[i].Notepic = new Array()
                        for (var j = 0; j < notePic.length; j++) {
                            if (notePic[j].Tname == result[i].Tname) {
                                result[i].Notepic.push(notePic[j].TravelNotePic)
                            }
                        }
                    }
                    travelnotedata = result;
                    console.log("travelnoteData:" + JSON.stringify(travelnotedata));
                    if (travelnotedata.length == 0) {
                        connection.query('SELECT * FROM USER WHERE UserName=?', [username], function (err, result) {
                            if (err) {
                                console.log("错误：" + err.message);
                                return;
                            }
                            // 输出JSON到界面
                            mydata = result
                            console.log("mydata:" + JSON.stringify(mydata))
                            res.render("Myhome_none_note.ejs", {MyData: mydata});
                        });
                    }
                    else {
                        res.render("Myhome_note.ejs", {travelnoteData: travelnotedata});
                    }
                    connection.release();
                });
        }
    });
}
//我的问答
function MyhomeQuestion(req, res, next) {
    var username = req.session.userName
    console.log("MyhomeQuestion session.userName :" + req.session.userName);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT u.UserName,u.UserPic,q.* FROM USER u,question q WHERE u.UserName=q.UserName AND q.UserName=?', [username], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }

                myhomeQuestion = result
                console.log("myhomeQuestion:" + JSON.stringify(myhomeQuestion))
                if (myhomeQuestion.length == 0) {
                    connection.query('SELECT * FROM USER WHERE UserName=?', [username], function (err, result) {
                        if (err) {
                            console.log("错误：" + err.message);
                            return;
                        }
                        // 输出JSON到界面
                        mydata = result
                        console.log("11111111111mydata:" + JSON.stringify(mydata))
                        res.render("Myhome_none_question.ejs", {MyData: mydata});
                    });
                }
                else {
                    console.log("22222mydata:" + JSON.stringify(myhomeQuestion))
                    res.render("Myhome_question.ejs", {myhomeQuestionData: myhomeQuestion});
                }
                connection.release();
            });
        }
    });
}
//我的兑换
function MyhomeExchange(req, res, next) {
    var username = req.session.userName
    console.log(username);
    console.log("MyhomeExchange session.userName :" + req.session.userName);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT o.*,u.UserName,u.UserPic FROM orders o,USER u WHERE o.UserName=u.UserName AND o.UserName=?', [username], function (err, result1) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                console.log(JSON.stringify(result1))
                    res.render("Myhome_exchange.ejs", {UserInfosData:result1});
                connection.release();
            });
        }
    });
}
//我的设置
function personal_setting(req, res, next) {
    var username = req.session.userName
    console.log("Myhome_note session.userName :" + req.session.userName);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT* FROM USER WHERE UserName=?', [username],
                function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    res.render("personal_setting.ejs", {UserInfoData: result});
                    connection.release();
                });
        }
    });
}

//我的信息修改
function myInfoUpDate_H(req, res, next) {
    var username = req.session.userName;
    var param = req.body;
    console.log("myInfoUpDate_H session.userName :" + req.session.userName);
    console.log("myInfoUpDate_H param.sex:" + param.sex);
    console.log("myInfoUpDate_H param.Tel:" + param.Tel);
    console.log("myInfoUpDate_H param.newPwd:" + param.newPwd);

    var hash = crypto.createHash("md5");
    hash.update(param.newPwd);
    var encode = hash.digest('hex');
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('UPDATE USER SET Upassword=?,Gender=?,Tel=? WHERE UserName=?', [encode, param.sex, param.Tel, username],
                function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    res.redirect("/users/myhome_note");
                    connection.release();
                });
        }
    });
}
//删除我的游记
function DeleteNote(req, res, next) {
    var id = req.query.noteId;
    console.log("DeleteNote :" + id);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('select travelnote.Tname FROM travelnote WHERE TravelNoteId=?', [id],
                function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;
                    }
                    oneNote = result;
                    console.log("oneNote[0].Tname：" + oneNote[0].Tname);
                    connection.query('DELETE FROM travelpic WHERE Tname=?', [oneNote[0].Tname],
                        function (err, result) {
                            if (err) {
                                console.log("错误：" + err.message);
                                return;
                            }
                        });
                });
            /*  connection.query('select *  FROM travelnote WHERE TravelNoteId=?',[id],
             function (err, result) {
             if (err) {
             console.log("错误：" + err.message);
             return;
             }
             });*/
            connection.query('DELETE FROM travelnote WHERE TravelNoteId=?', [id], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                else {
                    res.json({code: 200});
                }
                connection.release();
            });
        }
    });
}
//================================================================


//======================ta的个人中心=============================

//ta的游记
function OtherhomeNote(req, res, next) {

    var user = req.query.username

    console.log("OtherhomeNote username :" + user);

    var notePic = '';
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT * FROM travelpic', function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                notePic = result
            });
            connection.query('SELECT A.*,u.UserPic FROM USER u,travelnote A WHERE A.Username=u.UserName  AND A.Username=? ORDER BY TravelNoteTime DESC', [user],
                function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    for (var i = 0; i < result.length; i++) {
                        result[i].Notepic = new Array()
                        for (var j = 0; j < notePic.length; j++) {
                            if (notePic[j].Tname == result[i].Tname) {
                                result[i].Notepic.push(notePic[j].TravelNotePic)
                            }
                        }
                    }
                    travelnotedata = result;
                    console.log("travelnoteData:" + JSON.stringify(travelnotedata));
                    if (travelnotedata.length == 0) {
                        connection.query('SELECT * FROM USER WHERE UserName=?', [user],
                            function (err, result) {
                                if (err) {
                                    console.log("错误：" + err.message);
                                    return;
                                }
                                // 输出JSON到界面
                                otherdata = result
                                console.log("otherdata:" + JSON.stringify(otherdata))
                                res.render("Otherhome_none_note.ejs", {OtherData: otherdata});
                            });
                    }
                    else {
                        res.render("Otherhome_note.ejs", {travelnoteData: travelnotedata});
                    }
                    connection.release();
                });
        }
    });
}
function Otherhome_note_here(req, res, next) {
    var userName = url.parse(req.headers.referer, true).query.username;//重定向
    console.log(userName);
    var notePic = '';
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT * FROM travelpic', function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                notePic = result
            });
            connection.query('SELECT A.*,u.UserPic FROM USER u,travelnote A WHERE A.Username=u.UserName  AND A.Username=? ORDER BY TravelNoteTime DESC', [userName],
                function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    for (var i = 0; i < result.length; i++) {
                        result[i].Notepic = new Array()
                        for (var j = 0; j < notePic.length; j++) {
                            if (notePic[j].Tname == result[i].Tname) {
                                result[i].Notepic.push(notePic[j].TravelNotePic)
                            }
                        }
                    }
                    travelnotedata = result;
                    console.log("travelnoteData:" + JSON.stringify(travelnotedata));
                    if (travelnotedata.length == 0) {
                        connection.query('SELECT * FROM USER WHERE UserName=?', [userName],
                            function (err, result) {
                                if (err) {
                                    console.log("错误：" + err.message);
                                    return;
                                }
                                // 输出JSON到界面
                                otherdata = result
                                console.log("otherdata:" + JSON.stringify(otherdata))
                                res.render("Otherhome_none_note.ejs", {OtherData: otherdata});
                            });
                    }
                    else {
                        res.render("Otherhome_note.ejs", {travelnoteData: travelnotedata});
                    }
                    connection.release();
                });
        }
    });
}
//ta的问答
function Otherhome_question(req, res, next) {
    var userName = url.parse(req.headers.referer, true).query.username;//重定向
    console.log("Otherhome_question:" + userName);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT u.UserName,u.UserPic,q.* FROM USER u,question q WHERE u.UserName=q.UserName AND q.UserName=?', [userName], function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                myhomeQuestion = result
                console.log("myhomeQuestion:" + JSON.stringify(myhomeQuestion))
                if (myhomeQuestion.length == 0) {
                    connection.query('SELECT * FROM USER WHERE UserName=?', [userName], function (err, result) {
                        if (err) {
                            console.log("错误：" + err.message);
                            return;
                        }
                        // 输出JSON到界面
                        mydata = result
                        console.log("11111111111mydata:" + JSON.stringify(mydata))
                        res.render("Otherhome_none_question.ejs", {MyData: mydata});
                    });
                }
                else {
                    console.log("11111111111mydata:" + JSON.stringify(myhomeQuestion))
                    res.render("Otherhome_question.ejs", {myhomeQuestionData: myhomeQuestion});
                }
                connection.release();
            });
        }
    });

}
//ta的兑换
function Otherhome_exchange(req, res, next) {
    var userName = url.parse(req.headers.referer, true).query.username;//重定向
    console.log("Otherhome_exchange:" + userName);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT* FROM orders WHERE UserName=?', [userName], function (err, result1) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                    console.log("UserInfosData:" + JSON.stringify(result1))
                    res.render("Otherhome_exchange.ejs", {UserInfosData: result1});
                connection.release();
            });
        }
    });

}
//ta的设置
function OtherPersonal_setting(req, res, next) {
    var userName = url.parse(req.headers.referer, true).query.username;//重定向
    console.log("OtherPersonal_setting:" + userName);
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT* FROM USER WHERE UserName=?', [userName],
                function (err, result) {
                    if (err) {
                        console.log("错误：" + err.message);
                        return;  //退出query方法，后面的代码不执行了；
                    }
                    console.log("UserInfoData:" + JSON.stringify(result));
                    res.render("OtherPersonal_setting.ejs", {UserInfoDataH: result});
                    connection.release();
                });
        }
    });
}
//================================================================
/*========================  点赞==========================*/
function UserParise(req, res) {
    var arg = url.parse(req.headers.referer, true).query;//重定向
    NId = arg.noteId
    var userName = req.session.userName;
    if (req.session.userName != undefined) {

        console.log(NId);

        console.log(userName)
        pool.getConnection(function (err, connection) {

            connection.query('INSERT INTO praise(UserName,TravelNoteId) VALUES(?,?)', [userName, NId], function (err, result) {
                if (err) {
                    connection.query('DELETE FROM praise WHERE UserName=? AND TravelNoteId=?', [userName, NId], function (err1, result1) {
                        res.json({code: 500});
                        return
                    })
                    return
                }
                res.json({code: 200});
                connection.release();
            });
        })
    }
    else {
        console.log("请登录");
        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
    }


}
exports.UserParise = UserParise
/*======================== 收藏==========================*/
function UserCollect(req, res) {
    var arg = url.parse(req.headers.referer, true).query;//重定向
    NId = arg.noteId
    var userName = req.session.userName;
    if (req.session.userName != undefined) {

        console.log(NId);

        console.log(userName)
        pool.getConnection(function (err, connection) {

            connection.query('INSERT INTO collect(UserName,TravelNoteId) VALUES(?,?)', [userName, NId], function (err, result) {

                if (err) {
                    connection.query('DELETE FROM collect WHERE UserName=? AND TravelNoteId=?', [userName, NId], function (err1, result1) {
                        res.json({code: 500});
                        return;
                    })
                    return
                }
                else {
                    connection.query('UPDATE integral  SET GoodIntegral=GoodIntegral+50 WHERE UserName=?', [userName], function (err, result2) {
                        if (err) {
                            console.log(err.message);
                        }


                    });

                    res.json({code: 200});
                }
                connection.release();
            });
        })
    }
    else {
        console.log("请登录");
        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
    }


}
exports.UserCollect = UserCollect
/*======================== 攻略收藏==========================*/
function UsersCollect(req, res) {
    var arg = url.parse(req.headers.referer, true).query;//重定向
    NId = arg.strategyNoteId
    var userName = req.session.userName;
    if (req.session.userName != undefined) {

        console.log(NId);

        console.log(userName)
        pool.getConnection(function (err, connection) {

            connection.query('INSERT INTO collect(UserName,TravelNoteId) VALUES(?,?)', [userName, NId], function (err, result) {

                if (err) {
                    connection.query('DELETE FROM collect WHERE UserName=? AND TravelNoteId=?', [userName, NId], function (err1, result1) {
                        res.json({code: 500});
                        return;
                    })
                    return
                } else {
                    connection.query('UPDATE integral  SET GoodIntegral=GoodIntegral+50 WHERE UserName=?', [userName], function (err, result2) {
                        if (err) {
                            console.log(err.message);
                        }
                    });
                    res.json({code: 200});

                }

                connection.release();
            });
        })
    }
    else {
        console.log("请登录");
        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
    }


}

exports.UsersCollect = UsersCollect
/*======================== 攻略 点赞==========================*/
function UsersParise(req, res) {
    var arg = url.parse(req.headers.referer, true).query;//重定向
    NId = arg.strategyNoteId
    var userName = req.session.userName;
    if (req.session.userName != undefined) {

        console.log(NId);

        console.log(userName)
        pool.getConnection(function (err, connection) {

            connection.query('INSERT INTO praise(UserName,TravelNoteId) VALUES(?,?)', [userName, NId], function (err, result) {
                if (err) {
                    connection.query('DELETE FROM praise WHERE UserName=? AND TravelNoteId=?', [userName, NId], function (err1, result1) {
                        res.json({code: 500});
                        return
                    })
                    return
                }
                res.json({code: 200});
                connection.release();
            });
        })
    }
    else {
        console.log("请登录");
        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});
    }


}
exports.UsersParise = UsersParise


exports.UserPicinsert = userMultiplePicUpload
exports.Reset = Reset;
exports.forget = forget;
exports.Community = Community;
exports.loginJudge = loginJudge;
exports.login3 = login3;
exports.registerJudge = registerJudge
exports.userIdJudge = userIdJudge;
exports.userpic = userpic;
exports.QuestionDetailShow = QuestionDetailShow;

//======我的个人中心=============================

exports.MyhomeNote = MyhomeNote;
exports.MyhomeQuestion = MyhomeQuestion;
exports.MyhomeExchange= MyhomeExchange;
exports.personal_setting = personal_setting;
exports.myInfoUpDate_H = myInfoUpDate_H;
exports.DeleteNote = DeleteNote;
//===============================================

//======ta的个人中心=================

exports.OtherhomeNote = OtherhomeNote;
exports.Otherhome_note_here = Otherhome_note_here;
exports.Otherhome_exchange = Otherhome_exchange;
exports.Otherhome_question = Otherhome_question;
exports.OtherPersonal_setting = OtherPersonal_setting;
/*=======================  用户头像查询===================================*/
function SelectUsersPic(req, res, next) {
    if (req.session.userName == undefined) {
        console.log("用户名为空")
        return
    }
    else {
        pool.getConnection(function (err, connection) {
            connection.query('select  UserPic from user WHERE UserName=?', [req.session.userName], function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    var pic = result[0].UserPic
                    var userName = req.session.userName
                    res.send({code: 200, UserPic: pic, UserName: userName});
                    console.log(pic)


                }
            });
            connection.release();
        });
    }
}
exports.SelectUsersPic = SelectUsersPic;