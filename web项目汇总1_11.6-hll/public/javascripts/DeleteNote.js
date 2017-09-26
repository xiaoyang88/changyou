/**
 * Created by Administrator on 2016/9/21.
 */
function deletNote(info) {
    var str = confirm("确定删除吗？");
    if (str == true) {
        $.ajax({
            url: '/users/DeleteNote',
            type: 'GET',
            data:{noteId:info},
            success: function (data) {
                // alert(JSON.stringify(data));
                if (200 === data.code) {
                    window.location.href="/users/myhome_note";
                }
            },
        });
    }
}