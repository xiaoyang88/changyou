/**
 * Created by Administrator on 2016/9/19.
 */
/*右边图片轮播*/
var i=0;
var stop;
/*	每隔3秒运行一次轮播*/
stop=setInterval(function(){
    i++;
    if(i>3){
        i=1;
    }
    xiaoguo(i);
},4000)
/*	动作函数*/
$('.list-li>li').eq(0).css({'background-color':'orange'})
function xiaoguo(n){
    var b=n-1;
    $('.list-li>li').css({'background-color':'#F9263E'})
    $('.list-li>li').eq(b).css({'background-color':'orange'})
    $('.dian').animate({'width':832+'px'},3000)
    $('.dian').animate({'width':0+'px'},100)
    $('.box').animate({'margin-left':-n*832+'px'},3000,function(){
        if(n==3){
            $('.box').css({'margin-left':0+'px'})
        }
    })
}
/*	左右按钮*/
function huan(n){
    var j=i;
    i=i+n;
    if(i>4){
        i=1;
    }
    if(i<0){
        i=3;
    }
    xiaoguo(i);
}
//左箭头
$('.btn-l').click(function(){
    clearInterval(stop);
    stop=null;
    huan(-1);
    if(i==0){
        $('.btn-con-l').html('<img src="/images/mall/lunbo'+parseInt(3)+'.jpeg">')
    }else{
        $('.btn-con-l').html('<img src="/images/mall/lunbo'+parseInt(i)+'.jpeg">')
    }
    $('.box').stop(true,true);
    $('.dian').stop(true,true);

});
//右箭头
$('.btn-r').click(function(){
    clearInterval(stop);
    stop=null;
    huan(1);
    if(i==3){
        $('.btn-con-r').html('<img src="/images/mall/lunbo'+parseInt(1)+'.jpeg">')
    }else if (i==4) {
        $('.btn-con-r').html('<img src="/images/mall/lunbo'+parseInt(2)+'.jpeg">')
    }else{
        $('.btn-con-r').html('<img src="/images/mall/lunbo'+parseInt(i+2)+'.jpeg">')
    }
    $('.box').stop(true,true);
    $('.dian').stop(true,true);
});

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
            if(i>3){
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
