/**
 * Created by Administrator on 2016/9/21.
 */
$(function () {
        $("#li0").bind("click",function(){
            $(this).addClass("sec_li").siblings().removeClass("sec_li");
            $("#li0_Con").show();
            $("#li1_Con").css("display","none");
            $("#li2_Con").css("display","none");
        });
        $("#li1").bind("click",function() {
            $(this).addClass("sec_li").siblings().removeClass("sec_li");
            $("#li0_Con").css("display","none");
            $("#li1_Con").show();
            $("#li2_Con").css("display","none");
        });
        $("#li2").bind("click",function() {
            $(this).addClass("sec_li").siblings().removeClass("sec_li");
            $("#li0_Con").css("display","none");
            $("#li1_Con").css("display","none");
            $("#li2_Con").show();
        });
});
