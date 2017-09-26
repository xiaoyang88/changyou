/**
 * Created by Administrator on 2016/9/21.
 */
function SelectUserPic(){
        $.ajax({
            url: '/users/SelectUsersPic',
            type: 'POST',
            success: function (data) {
                if (200 === data.code) {
                    //sessionStorage.userPic=data.UserPic
                    //sessionStorage.userName=data.UserName
                    var pic=data.UserPic
                    var name=data.UserName
                    //alert(data.UserName)
                   // alert(data.UserPic)
                    $("#name").html('<img src=/upload/' +pic+ '><span> ' +name+'</span>');
                }
                else {

                }

            },
      /*      success: function (response,success) {

                alert(response)
                if(responseText.success==true){
                    sessionStorage.UserName=NameValue;
            

                }
                else{
                    Ext.Msg.alert('失败', '登录失败！')
                }
            }*/
        
        });
  

}