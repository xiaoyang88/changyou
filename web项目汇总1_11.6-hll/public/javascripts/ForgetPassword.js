/**
 * Created by Administrator on 2016/9/26.
 */
function ResSet() {
    $.ajax({
        url: '/users/ResetPassword',
        type: 'POST',
        data:$('#myForm').serialize()

    });
}
   