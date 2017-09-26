/*
function createCode(){
    code = "";
    var codeLength = 4;//验证码的长度

    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z');//随机数
    for(var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
        code += random[index];//根据索引取得随机数加到code上
    }
    alert("短信验证码为:"+code);//把code值赋给验证码
}
window.onload=createCode();*/

var wait=60;
function time(o) {
    if (wait == 0) {
        o.removeAttribute("disabled");
        o.value = "重新获取";
        wait = 60;
    } else {
        o.setAttribute("disabled", true);
        o.value = "重新发送(" + wait + ")";
        wait--;
        setTimeout(function () {
                time(o)
            },
            1000)
    }
}

document.getElementById("btn").onclick=function(){
    time(this);
    code = "";
    var codeLength = 4;//验证码的长度

    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
        'S','T','U','V','W','X','Y','Z');//随机数
    for(var i = 0; i < codeLength; i++) {//循环操作
        var index = Math.floor(Math.random()*36);//取得随机数的索引（0~35）
        code += random[index];//根据索引取得随机数加到code上
    }
    alert("短信验证码为:"+code);//把code值赋给验证码

}

function validate(){
    var pwd= $("#UserId").val();
   var vaw=$("#UserPwd").val();
 
    if(pwd.length<6){
      alert("密码不能少于六位!")
    }
    if(pwd!=vaw){
        alert("俩次密码输入不一致")
        return
    }
    var inputCode=$("#UserDrag").val().toUpperCase();
    //取得输入的验证码并转化为大写
    if(inputCode.length <= 0) { //若输入的验证码长度为0
        alert("请输入验证码！"); //则弹出请输入验证码
    }
    else if(inputCode != code ) { //若输入的验证码与产生的验证码不一致时
        alert("验证码输入错误！"); //则弹出验证码输入错误
        return

    }
    else { //输入正确时
        alert("正确"); //弹出^-^
    }


}
/*=============================== 验证============================================*/
function validate1() {
    var pwd= $('#UserId').val();
    var pwd2=$('#UserId1').val();
}