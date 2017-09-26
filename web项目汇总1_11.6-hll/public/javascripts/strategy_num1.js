/**
 * Created by Administrator on 2016/9/19.
 */
$(function(){
    //获取要定位元素距离浏览器顶部的距离
    var navH = $(".section_content_right").offset().top;
    //滚动条事件
    $(window).scroll(function(){
        //获取滚动条的滑动距离
        var scroH = $(this).scrollTop();
        //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
        if(scroH>=navH){
            $(".section_content_right").css({"position":"fixed","top":0,"left":950});
        }else if(scroH<navH){
            $(".section_content_right").css({"position":"absolute","top":500,"left": 950});
        }
    })
})