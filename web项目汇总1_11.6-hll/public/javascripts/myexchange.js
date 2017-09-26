/**
 * Created by Administrator on 2016/11/3.
 */
function MyOrder() {
    //判断文件是否符合，是否有文件？？？

       /* var formData = new FormData($("#AdressContent")[0]);*/
        $.ajax({
            url: '/mallshow/UserMyExchange',
            type: 'POST',
            data: $('#AdressContent').serialize(),
            dataType: "text",

            success: function (data) {
                      if (200 === data.code) {


                      } else {
                          window.location.href="/mallshow//mallsuccess";
                      }

                  },
                  error: function () {

                  }
        });


}