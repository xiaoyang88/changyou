var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ueditor = require("./util/Ueditor");
var routes = require('./routes/index');
var users = require('./routes/users');
var strategy=require('./routes/strategy');
var mallshow=require('./routes/mallshow');
var contentData=require('./routes/contentData');
var destination=require('./routes/destination');
var noteShowBySencha=require('./routes/noteShowBySencha');
var ejs = require('ejs');
var session=require('express-session')
var app = express();

// 设置跨域访问，方便开发
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); //*代表可访问的地址，可以设置指定域名
  res.header('Access-Control-Allow-Methods:POST,GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});


//图文
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// view engine setup
var routes = require('./routes/index');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');
app.use("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function (req, res, next) {
  // ueditor 客户发起上传图片请求
  if (req.query.action === 'uploadimage') {
    var foo = req.ueditor;

    var imgname = req.ueditor.filename;

    var img_url = '/images/ueditor/';
    res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    res.setHeader('Content-Type', 'text/html');//IE8下载需要设置返回头尾text/html 不然json返回文件会被直接下载打开
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
    var dir_url = '/images/ueditor/';
    res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
    // console.log('config.json')
    res.setHeader('Content-Type', 'application/json');
    res.redirect('/ueditor/nodejs/config.json');
  }
}));

//图文
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'jack', key: 'jack_key',cookie: {maxAge: 60*60*1000 }}));//丽丽 sesssion
app.use('/', routes);
app.use('/users', users);
app.use('/contentData', contentData);
app.use('/destination', destination);
app.use('/strategy',strategy);
app.use('/mallshow',mallshow);
app.use('/noteShowBySencha',noteShowBySencha);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
module.exports = app;
