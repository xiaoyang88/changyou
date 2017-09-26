/**
 * Created by Administrator on 2016/9/18.
 */

/*function test () {
 alert("1")
 $.ajax({
 type: "post",
 url: "/contentData/query"
 });
 }
 window.onload=test();*/
function sub() {

    $.ajax({
        type: "post",
        url: "/contentData/update",
        data: $('#myForm').serialize(),
        dataType: "text"

    });
    window.location.reload();
}

$(function(){
    //获取要定位元素距离浏览器顶部的距离
    var navH = $(".section_content_right").offset().top;
    //滚动条事件
    $(window).scroll(function(){
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if(scroH>=navH){
            $(".section_content_right").css({"position":"fixed","top":0,"left":893});
        }else if(scroH<navH){
            $(".section_content_right").css({"position":"absolute","top":640,"left": 893});
        }
    })
})

function nav_hover2() {
    document.getElementById("nav_on1").className="nav_on";
}
function nav_out2() {
    document.getElementById("nav_on1").className="nav_out";
}
function nav_hover3() {
    document.getElementById("nav_on2").className="nav_on";
}
function nav_out3() {
    document.getElementById("nav_on2").className="nav_out";
}
function nav_hover4() {
    document.getElementById("nav_on3").className="nav_on";
}
function nav_out4() {
    document.getElementById("nav_on3").className="nav_out";
}


/*========================== 点赞 收藏===============================*/

$(function(){
    $("#Praise_x").click(function () {
        $.ajax({
            url: '/users/UserPraise',
            type: 'POST',

            success: function (data) {
                if (200 === data.code) {
                    alert("点赞成功");
                    $("#share_icon").removeClass("share_icon")
                    $("#share_icon").addClass("share_icon_X")
                } else {
                    alert("取消点赞");
                }

            },
            error: function () {
                alert("您未登录，请登录");
                window.location.href="/users/login";
            }
        });
    });
    $("#collect_X").click(function () {
        $.ajax({
            url: '/users/UserCollect',
            type: 'POST',

            success: function (data) {
                if (200 === data.code) {
                    alert("收藏成功");
                    $("#collect_icon").removeClass("collect_icon")
                    $("#collect_icon").addClass("collect_icon_X")
                } else {
                    alert("取消收藏");
                }

            },
            error: function () {
                alert("您未登录，请登录");
                window.location.href="/users/login";
            }
        });
    })
})