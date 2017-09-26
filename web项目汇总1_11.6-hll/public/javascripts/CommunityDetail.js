/**
 * Created by Administrator on 2016/11/3.
 */
function sub() {

    $.ajax({
        type: "post",
        url: "/contentData/answer",
        data: $('#myForm').serialize(),
        dataType: "text"

    });
    window.location.reload();
}