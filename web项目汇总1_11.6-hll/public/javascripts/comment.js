/**
 * Created by Administrator on 2016/9/20.
 */

    // 绑定表情
    $('.face-icon').SinaEmotion($('.text'));
// 测试本地解析
function out() {
    var inputText = $('.text').val();
    $('#info-show ul').append(reply(AnalyticEmotion(inputText)));
}

var html;
function reply(content){
    html  = '<li>';
    html += '<div class="head-face">';
    html += '<img src="images/1.jpg" / >';
    html += '</div>';
    html += '<div class="reply-cont">';
    html += '<p class="username">小小红色飞机</p>';
    html += '<p class="comment-body">'+content+'</p>';
    html += '<p class="comment-footer">2016年10月5日　回复　点赞54　转发12</p>';
    html += '</div>';
    html += '</li>';
    return html;
}