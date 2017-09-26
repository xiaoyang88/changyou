/**
 * Created by Administrator on 2016/9/11.
 */

//中间图片轮播
function bg_show1(){
    document.getElementById("section_top").style.backgroundImage="url('/images/index/header_1.jpeg')";
    document.getElementById("show_image_li1").className="show_image_li";
    document.getElementById("show_image_li2").className="none";
    document.getElementById("show_image_li3").className="none";
    document.getElementById("show_image_li4").className="none";
    document.getElementById("show_image_li5").className="none";
    setTimeout(bg_show2,4000);
}
function bg_show2() {
    document.getElementById("section_top").style.backgroundImage="url('/images/index/header_2.jpeg')";
    document.getElementById("show_image_li1").className="none";
    document.getElementById("show_image_li2").className="show_image_li";
    document.getElementById("show_image_li3").className="none";
    document.getElementById("show_image_li4").className="none";
    document.getElementById("show_image_li5").className="none";
    setTimeout(bg_show3,4000);
}
function bg_show3() {
    document.getElementById("section_top").style.backgroundImage="url('/images/index/header_3.jpeg')";
    document.getElementById("show_image_li1").className="none";
    document.getElementById("show_image_li2").className="none";
    document.getElementById("show_image_li3").className="show_image_li";
    document.getElementById("show_image_li4").className="none";
    document.getElementById("show_image_li5").className="none";
    setTimeout(bg_show4,4000);
}
function bg_show4() {
    document.getElementById("section_top").style.backgroundImage="url('/images/index/header_4.jpeg')";
    document.getElementById("show_image_li1").className="none";
    document.getElementById("show_image_li2").className="none";
    document.getElementById("show_image_li3").className="none";
    document.getElementById("show_image_li4").className="show_image_li";
    document.getElementById("show_image_li5").className="none";
    setTimeout(bg_show5,4000);
}
function bg_show5() {
    document.getElementById("section_top").style.backgroundImage="url('/images/index/header_5.jpeg')";
    document.getElementById("show_image_li1").className="none";
    document.getElementById("show_image_li2").className="none";
    document.getElementById("show_image_li3").className="none";
    document.getElementById("show_image_li4").className="none";
    document.getElementById("show_image_li5").className="show_image_li";
    setTimeout(bg_show1,4000);
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
}
function SelectUserPic(){
    alert("1")
    $.ajax({
        url: '/users/SelectUsersPic',
        type: 'POST',

        success: function (response,success) {
            responseText=Ext.decode(response.responseText)
            if(responseText.success==true){
                sessionStorage.UserName=NameValue;
                /*     Ext.Msg.alert(req.session.userId);*/

            }
            else{
                Ext.Msg.alert('失败', '登录失败！')
            }
        }

    });


}



