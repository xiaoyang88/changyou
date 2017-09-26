/**
 * Created by Administrator on 2016/9/20.
 */
/*页面切换后导航栏样式切换*/

var urlstr = location.href;


var urlstatus=false;
$("#menu a").each(function () {
    if((urlstr + '/').substr(21,2)=='//'){
        $("#menu a").eq(0).addClass('nav_on2');
    }
    else  if ((urlstr + '/ ').indexOf($(this).attr('href')) > -1&&$(this).attr('href')!='') {
        $(this).addClass('nav_on2'); urlstatus = true;

    } else {
        $(this).removeClass('nav_on2');
        $("#menu a").eq(0).removeClass('nav_on2');
    }
});


    






