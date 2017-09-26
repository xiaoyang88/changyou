/**
 * Created by Administrator on 2016/10/15.
 */
Ext.define("Travel.controller.UploadPic",{
    extend: 'Ext.app.Controller',
    config:{
        refs:{
           uploadPicView:{
                selector: 'UploadPic',          //视图的ID
                xtype:'UploadPic',              //确定某个视图
                autoCreate: true
            },
            publishButton:'#uploadBtn',
            Myfile:"#Myfile"
        },
        control:{
        
            publishButton:{
                tap:'uploadFile'
            },
        },
        routes:{
            'uploadPic':'showUploadPicView'
        }

    },
    HomeButtonView: function() {
       
        this.redirectTo('main');

    },
    uploadFile:function () {
        var formData = new FormData($("#UploadPic")[0]);
         var id=sessionStorage.getItem("UserName")
        alert(sessionStorage.getItem("UserName") )
        console.log(sessionStorage.getItem("UserName") )
        $.ajax({
            url:""+config.URL+"noteShowBySencha/UserPicUpload?id="+sessionStorage.getItem("UserName"),

            /*  params:{
                   id:sessionStorage.getItem("UserName")   //参数
               },*/
            scope:this,
            type: 'POST',
            data:formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (200 === data.code) {
                    Ext.Msg.alert("发布成功!");
                    Ext.getCmp('publish').reset()
                    // Ext.getCmp('fabu1').setValue('')

                    // this.redirectTo('search/'+sessionStorage.getItem("session")+'')
                } else {
                    Ext.Msg.alert("发布失败,请重新输入！");
                }
                //console.log('imgUploader upload success, data:', data);
            },
            error: function () {
                Ext.Msg.alert("与服务器通信发生错误");
            }
        });



    },


    showUploadPicView:function(){
        Ext.Viewport.setActiveItem(this.getUploadPicView());   //(6)真正来显示 某个 页面About.js（Panel）,激活某个视图
    }
})