/**
 * Created by Administrator on 2016/9/10.
 */
var $conf = require("./../conf/db");

var path = require('path');
var uuid = require('node-uuid');
var fs = require('fs');
var crypto = require('crypto');
var url = require('url');

var mysql = require('mysql');
//创建连接池
var pool = mysql.createPool($conf);
var add = function (req, res, next) {
    /*var date = new Date();*/
    var nowDate = new Date();
    var date = nowDate.toLocaleDateString() + " " + nowDate.toLocaleTimeString();
    var param = req.body;
    var username = req.session.userName
    console.log(param.QuestionName)
    console.log(param.editorValue)
    if (param.QuestionName == null) {
        //jsonWrite(res, undefined);
        return;
    }
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO question(QuestionName,UserName, QuestionContent,QuestionTime)VALUES(?,?,?,?)', [param.QuestionName, username, param.editorValue, date],
            function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    // 使用页面进行跳转提示
                    console.log(result);
                    if (result.affectedRows > 0) {
                        res.redirect("/users/Community");
                    } else {
                    }
                    console.log(result);

                }
                connection.release();
            });
    });
}
//首页游记显示
var mainNoteShow = function (req, res, next) {
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
                // 输出JSON到界面
                notePic = result
            });
            connection.query('SELECT A.*,u.UserPic FROM USER u,travelnote A WHERE A.Username=u.UserName ORDER BY TravelNoteTime DESC',
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
                    // 输出JSON到界面
                    console.log("mainNoteShowDetial:" + JSON.stringify(result))
                    res.render('index-H.ejs', {mainNoteShowDetial: result});
                    connection.release();
                });
        }
    });
};
//显示游记页面
function WriteNote(req, res, next) {
    console.log("WriteNote.")
    res.render('write_note.ejs');
};
var write_note = function (req, res, next) {
    var date = new Date();
    var param = req.body;
    console.log(param.NoteTitle);
    console.log(param.editorValue);
    console.log(req.session.userName)
    if (param.NoteTitle == null) {
        //jsonWrite(res, undefined);
        return;
    }
    pool.getConnection(function (err, connection) {
        connection.query('INSERT INTO travelnote(UserName,Tname, TrvaelContnet, TravelNoteTime)VALUES(?,?,?,?)', [req.session.userName, param.NoteTitle, param.editorValue, date],
            function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    console.log(result.affectedRows);
                    if (result.affectedRows > 0) {
                        res.redirect("/contentData/noteIndex?page=1");
                    }
                    console.log(result);
                }
                connection.release();
            });
    });
};

//游记列表
var noteIndexShow = function (req, res, next) {
    var noteId = req.query.noteId;
    var notePic = '';
    var CurrentPage=1;
    var t=''
    var _page = url.parse(req.url, true).query.page;
    if(_page==undefined){
        _page=1;
     
    }
     _pageint=parseInt(_page)
    len=''
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err.message);
            return;
        }
        else {
            connection.query('SELECT * FROM travelnote',function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;  //退出query方法，后面的代码不执行了；
                }
                t=result
                var i=JSON.stringify(result);
                y= JSON.parse(i);
                if(result.length%8==0){
                    len=parseInt(result.length/8)
                }
                else
                    len=(parseInt(result.length/8)+1)

            })
            connection.query('SELECT * FROM travelpic', function (err, result) {
                if (err) {
                    console.log("错误：" + err.message);
                    return;
                }
                // 输出JSON到界面
                notePic = result
            });
            connection.query('SELECT A.*,u.UserPic FROM USER u,travelnote A WHERE A.Username=u.UserName ORDER BY TravelNoteTime DESC limit ?,8',[(_pageint-1)*8],
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
                    CurrentPage=_pageint
                    // 输出JSON到界面
                    console.log("noteIndex:" + JSON.stringify(result))
                    res.render('noteIndex.ejs', {ShowWriteContent: result,countpage:len,CurrentPage:CurrentPage,all:t});
                    connection.release();
                });
        }
    });
};

var noteShowjudege = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        connection.query('SELECT TravelnoteId,Username,Tname,TrvaelContnet,DATE(TravelNoteTime) FROM travelnote where username=?', [req.session.userName],
            function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    res.render("noteIndex.ejs", {ShowWriteContent: result});
                }
                console.log("noteShowjudege:" + req.session.userName);
                console.log(result);
            });
        connection.release();
    });
};
//直接显示游记详情
var noteInfoShowJudge = function (req, res, next) {
    var noteId = req.query.noteId;
    console.log("要查看游记页面的id1：" + noteId);
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
            connection.query('SELECT A.*,u.UserPic FROM USER u,travelnote A WHERE A.Username=u.UserName AND TravelNoteId=?', [noteId],
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
                    // 输出JSON到界面
                    var noteInfoShowresult = result;
                    connection.query('SELECT tc.*,u.UserPic FROM travel_comment tc,USER u WHERE tc.UserName=u.UserName AND TravelNoteId=?', [noteId],
                        function (err, result) {
                            if (err) {
                                console.log(err.message);
                            }
                            var showINforesult = result;
                            console.log("11noteInfoShowresult" + JSON.stringify(noteInfoShowresult));
                            console.log("122showINforesult" + JSON.stringify(showINforesult));
                            res.render("noteInfoShow.ejs", {
                                noteInfoShow: noteInfoShowresult,
                                showINfo: showINforesult
                            });
                        });
                    connection.release();
                });

        }
    });
}


var addPic = function (req, res) {
    var param = req.session.userName;

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


//================insert==========================

    console.log(" Pic :" + filename);
    console.log(param);
    if (param == null) {
        console.log("param.UserName == null");
        //res.render('fail', {        result: result    });
        res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});

    }
    pool.getConnection(function (err, connection) {
        connection.query('update user set UserPic=?where UserName=?', [_myFileName, param], function (err, result) {
            if (err) {
                console.log(err.message);
                // res.render('fail', {
                //     result: result
                // });
                res.json({code: 500, msg: {url: 'http://' + req.headers.host + '/' + filename}});

            }
            else {
                // 使用页面进行跳转提示
                if (result.affectedRows > 0) {
                    //res.render('suc', {  result: result   }); // 第二个参数可以直接在jade中使用
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
    });
};
//直接显示问答内容
var QuestionAnswershow = function (req, res, next) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("错误：" + err.message);
            return;
        }
        else {
            connection.query('SELECT question.*,USER.UserPic FROM question,USER WHERE question.`UserName`=user.`UserName` ORDER BY question.QuestionTime DESC',
                function (err, result) {
                    if (err) {
                        console.log("err:" + err.message);
                        return
                    }
                    console.log(result);
                    res.render("Community.ejs", {QuestionAnswershow: result});
                });
        }
        connection.release();
    });

};

function dddConmet(req, res) {
    var arg = url.parse(req.headers.referer, true).query;//重定向
    NId = arg.noteId

    var param = req.body;
    var userName = req.session.userName;

    var date = new Date();
    console.log(NId);
    console.log(param.com)
    console.log(userName)
    console.log(date)
    pool.getConnection(function (err, connection) {


        connection.query('INSERT INTO travel_comment(TravelNoteId,UserName,Comment_Contnet,CommentTime)VALUES(?,?,?,?)', [NId, userName, param.com, date], function (err, result) {
            if (err) {
                console.log(err.message);
            }
                 else{
                connection.query('UPDATE integral  SET GoodIntegral=GoodIntegral+50 WHERE UserName=?',[ userName ], function (err, result2) {
                    if (err) {
                        console.log(err.message);
                    }
                        });
            }
        });
        connection.release();
    });
}
/*======================== 回答问题===========================*/
function addAnswer(req, res) {
    var arg = url.parse(req.headers.referer, true).query;//重定向
    NId = arg.QuestionId
    var param = req.body;
    var userName = req.session.userName;
    var date = new Date();
    console.log(NId);
    console.log(param.com)
    console.log(userName)
    console.log(date)
    pool.getConnection(function (err, connection) {


        connection.query('INSERT INTO question_answer(AnswerContent,UserName,QuestionId,AnswerTime)VALUES(?,?,?,?)', [param.com,userName,NId,date], function (err, result) {
            if (err) {
                console.log(err.message);
            }
else{
                connection.query('UPDATE integral  SET GoodIntegral=GoodIntegral+50 WHERE UserName=?',[ userName ], function (err, result2) {
                    if (err) {
                        console.log(err.message);
                    }



                });
            }

        });

        connection.release();
    });

}
exports.addAnswer = addAnswer;

exports.dddConmet = dddConmet;
exports.addPic = addPic;
exports.InsertJudge = add;
exports.WriteNote = WriteNote;
exports.writeJudge = write_note;
exports.noteShowjudege = noteShowjudege;
exports.QuestionAnswershow = QuestionAnswershow;
exports.noteInfoShowJudge = noteInfoShowJudge;
// exports.Infopersonalshow = Infopersonalshow;
exports.mainNoteShow = mainNoteShow;
exports.noteIndexShow = noteIndexShow;
// exports.personalIndexshow = personalIndexshow;
