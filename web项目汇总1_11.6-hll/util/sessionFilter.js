
function sessionFilter(req,res,next,view,callback) {
    console.log("req.session.userName:"+req.session.userName);
    if(req.session.userName==undefined){
        req.session.url='/'+view;         //可以用：记录你的上一个网址router
        console.log("req.session.url:"+req.session.url);
        res.redirect('/users/login2');  //跳转到登录界面
    }else {
        callback(req, res, next);
    }
}
exports.sessionFilter=sessionFilter;