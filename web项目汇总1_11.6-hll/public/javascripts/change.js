
/**
 * Created by Administrator on 2016/11/3.
 */
$(function(){
    $("#ChangeButton").click(function () {
        $.ajax({
            url: '/mallshow/SelectIntegration',
            type: 'POST',

            success: function (data) {
                if (200 === data.code) {


                    window.location.href="/users/exchange";
                } else {

                    alert("您的积分不够！")
                }

            },
            error: function () {
                alert("您未登录，请登录");
                window.location.href="/users/login";
            }
        });
    });

})