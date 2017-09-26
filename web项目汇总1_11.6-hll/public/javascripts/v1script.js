/**
 * Created by Administrator on 2016/9/11.
 */

/*========================== 点赞 收藏===============================*/

$(function(){
    $("#Praise_X").click(function () {
        $.ajax({
            url: '/users/StrUsersPraise',
            type: 'POST',

            success: function (data) {
                if (200 === data.code) {
                    alert("点赞成功");

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
    $("#Collect_X").click(function () {
        $.ajax({
            url: '/users/UsersCollect',
            type: 'POST',

            success: function (data) {
                if (200 === data.code) {
                    alert("收藏成功");

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


function nav_hover() {
    document.getElementById("nav_on1").className="nav_on";
}
function nav_out() {
    document.getElementById("nav_on1").className="nav_out";
}
function nav_hover2() {
    document.getElementById("nav_on2").className="nav_on";
}
function nav_out2() {
    document.getElementById("nav_on2").className="nav_out";
}
function nav_hover3() {
    document.getElementById("nav_on3").className="nav_on";
}
function nav_out3() {
    document.getElementById("nav_on3").className="nav_out";
}
function nav_hover4() {
    document.getElementById("nav_on4").className="nav_on";
}
function nav_out4() {
    document.getElementById("nav_on4").className="nav_out";
};


/*右边图片轮播*/
var i=0;
var stop;
/*	每隔3秒运行一次轮播*/
stop=setInterval(function(){
    i++;
    if(i>5){
        i=1;
    }
    xiaoguo(i);

},4000)
/*	动作函数*/
/*function xiaoguo2(n){
 /!*		块一*!/
 $('.fugai1')
 .css({"background-image":"url(./../image/lunbo"+n+".jpeg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":0+'px'})
 .animate({"backgroundPosition-x":-700+'px'},3000)
 .css({'display':'none'})
 //块二
 $('.fugai2')
 .css({"background-image":"url(./../image/lunbo"+n+".jpeg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":-200+'px'})
 .animate({"backgroundPosition-x":-700*2+'px'},3000)
 .animate({'display':'none'})
 //块三
 $('.fugai3')
 .css({"background-image":"url(./../image/lunbo"+n+".jpeg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":0+'px'})
 .animate({"backgroundPosition-x":-700*3+'px'},3000)
 .animate({'display':'none'})
 /!*		$('.fugai')
 .css({"background-image":"url(image/lunbo"+n+".jpg)",'background-repeat':'no-repeat','display':'block',"backgroundPosition-x":0+'px'})
 .deplay(3000).animate({"backgroundPosition-x":-730*3+'px'},3000)
 .animate({'display':'none'},10)		*!/
 }*/
$('.list-li>li').eq(0).css({'background-color':'#00B895'})
function xiaoguo(n){
    var b=n-1;
    $('.list-li>li').css({'background-color':'#06B540'})
    $('.list-li>li').eq(b).css({'background-color':'#00B895'})
    $('.dian').animate({'width':100+'%'},2000)
    $('.dian').animate({'width':0+'px'},100)
    $('.box').animate({'margin-left':-n*100+'%'},2000,function(){
        if(n==5){
            $('.box').css({'margin-left':0+'px'})
        }
    })
}
/*	左右按钮*/
function huan(n){
    var j=i;
    i=i+n;

    if(i>6){
        i=1;
    }
    if(i<0){
        i=5;
    }
    xiaoguo(i);
}
//左箭头
$('.btn-l').click(function(){
    clearInterval(stop);
    stop=null;
    huan(-1);
    if(i==0){
        $('.btn-con-l').html('<img src="/images/image/lunbo'+parseInt(5)+'.jpeg">')
    }else{
        $('.btn-con-l').html('<img src="/images/image/lunbo'+parseInt(i)+'.jpeg">')
    }
    $('.box').stop(true,true);
    $('.dian').stop(true,true);

});
//右箭头
$('.btn-r').click(function(){
    clearInterval(stop);
    stop=null;
    huan(1);
    if(i==5){
        $('.btn-con-r').html('<img src="/images/image/lunbo'+parseInt(1)+'.jpeg">')
    }else if (i==6) {
        $('.btn-con-r').html('<img src="/images/image/lunbo'+parseInt(2)+'.jpeg">')
    }else{
        $('.btn-con-r').html('<img src="/images/image/lunbo'+parseInt(i+2)+'.jpeg">')
    }
    $('.box').stop(true,true);
    $('.dian').stop(true,true);
});
//$('.btn-l').click(function(){huan(-1);});
//$('.btn-r').click(function(){huan(1);});

/*	鼠标放上大块*/
$('.lunbo').mouseover(function(){
    clearInterval(stop);
    stop=null;
    $('.btn').show();

})
/*	鼠标离开大块*/
$('.lunbo').mouseout(function(){
    if(stop==null){
        stop=setInterval(function(){
            i++;
            if(i>5){
                i=1;
            }
            xiaoguo(i);

        },4000)
    }
    $('.btn').hide();
    $('.btn-con-l').text('');
    $('.btn-con-r').text('');
})
/*按钮小标题*/
$('.list-li>li').mouseover(function(){
    clearInterval(stop);
    stop=null;
    i= Number($(this).text());
    xiaoguo($(this).text())
    $('.box').stop(true,true);
    $('.dian').stop(true,true);
})
