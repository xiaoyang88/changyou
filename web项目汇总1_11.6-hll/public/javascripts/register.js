/**
 * Created by Administrator on 2016/10/27.
 */
    //文本框失去焦点后
    $(document).ready(function () {
        $('form :input').blur(function () {
            //密码验证
            var $pwd = $("#PwdMessage");
            if ($(this).is('#UserPwd1')) {
                if (this.value == '' || this.value.length < 6) {
                    var errorMsg1 = '密码不能少于6位！';
                    $pwd.html('<span class=" onError">' + errorMsg1 + '</span>')
                    $('#input_divUserpwd1_H').addClass('input_div_H_err1');
                }
                else {
                    var okMsg1 = '输入正确';
                    $pwd.html('<span class=" onSuccess">' + okMsg1 + '</span>')
                    $('#input_divUserpwd1_H').addClass('input_div_H_err2');
                }
            };
            //确认密码验证
            if ($(this).is('#UserPwd2')) {
                var userPwd1_Str = $("#UserPwd1").val();
                var userPwd2_Str =$("#UserPwd2").val();
               // alert(userPwd1_Str);
                //alert(userPwd2_Str);
                var $pwd2 = $("#PwdMessage2");
                if (userPwd2_Str != userPwd1_Str) {
                    var errorMsg2 = '两次密码输入不一致！';
                    $pwd2.html('<span class=" onError">' + errorMsg2 + '</span>')
                    $('#input_divUserpwd2_H').addClass('input_div_H_err1');
                }
                else {
                    var okMsg2 = '输入正确';
                    $pwd2.html('<span class=" onSuccess">' + okMsg2 + '</span>')
                    $('#input_divUserpwd2_H').addClass('input_div_H_err2');
                }
            };
            //电话号码验证
            var $Tel = $("#TelMessage")
            if ($(this).is('#UserTel')) {
                var str = /^1(3|4|5|7|8)\d{9}$/;
                var str2 = str.test(this.value)
                if (str2 == false) {
                    var errorMsg3 = '请输入正确的手机号码！';
                    $Tel.html('<span class="fromtips onError">' + errorMsg3 + '</span>')
                    $('#input_divUserTel_H').addClass('input_div_H_err1');
                }
                else {
                    var okMsg3 = '输入正确';
                    $Tel.html('<span class="fromtips onSuccess">' + okMsg3 + '</span>')
                    $('#input_divUserTel_H').addClass('input_div_H_err2');
                }
            }
        });
    });
function loseBlur() {
    var userNameStr = $("#userName").val();
    //alert(str)
    $.ajax({
        url: '/users/userIdJudge',
        type: 'POST',
        data: {userName: $("#userName").val()},
        success: function (data) {
            var $parent = $("#UserIdMessage");
            if (500 === data.code) {
                var errorMsg2 = '该用户已存在！';
                $parent.html('<span class=" onError">' + errorMsg2 + '</span>')
                $('#input_divUserId_H').addClass('input_div_H_err1');
            }
            else {
                if (userNameStr == '' || userNameStr.length < 6) {
                    var errorMsg = '用户名不能少于6位！';
                    $parent.html('<span class=" onError">' + errorMsg + '</span>')
                    $('#input_divUserId_H').addClass('input_div_H_err1');
                }
                else {
                    var okMsg2 = '输入正确';
                    $parent.html('<span class=" onSuccess">' + okMsg2 + '</span>')
                    $('#input_divUserId_H').addClass('input_div_H_err2');
                }
            }
        }
    });
}
