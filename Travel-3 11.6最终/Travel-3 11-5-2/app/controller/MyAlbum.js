/**
 * Created by Administrator on 2016/10/15.
 */
Ext.define("Travel.controller.MyAlbum", {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            myAlbumView: {
                selector: 'MyAlbumViewPanel',          //视图的ID
                xtype: 'MyAlbumView',              //确定某个视图
                autoCreate: true
            }

        },
        control: {
            RegisterButton: {
                tap: 'RegisterView'
            },
            HomeButton: {
                tap: 'HomeButtonView'
            }
        },
        routes: {
            'myalbum': 'showMyAlbumView'
        }

    },
    HomeButtonView: function () {
        this.redirectTo('main');
    },

    /*    RegisterView: function() {

     var NameValue=this.getTxt_name().getValue()
     var PwdValue=this.getTxt_password().getValue()


     /!* var sexValue=this.getSex().getValue()
     Ext.Msg.alert(sexValue)*!/
     var model = Ext.create('Travel.model.RegisterUser',{name:NameValue,password:PwdValue});
     var errors = model.validate();
     if (errors.isValid()){
     Ext.Ajax.request({
     url:'http://10.40.4.25:3089/noteShowBySencha/Register',
     params:{
     name:NameValue,password:PwdValue,
     } ,
     success: function (response,success) {
     responseText=Ext.decode(response.responseText)
     if(responseText.success==true){
     Ext.Msg.alert('成功', '注册成功！');
     Ext.Viewport.setActiveItem('LoginView');
     }
     else{
     Ext.Msg.alert('失败', '注册失败！')
     }
     }
     })

     }

     else {
     var message = "";
     Ext.each(errors.items, function (rec) {
     message += rec.getMessage() + "<br>";
     });
     Ext.Msg.alert("注册失败", message);
     }

     },*/

    showMyAlbumView: function () {
        Ext.Ajax.request({
            url: config.URL + 'noteShowBySencha/ShowUserPic',
            scope: this,
            method: "post",
            params: {
               userName:sessionStorage.UserName  //参数
            },
            success: function (response) {

                var msg = Ext.decode(response.responseText);
                    // alert(JSON.stringify(msg))
                var noteDetailTpl = new Ext.XTemplate(
                    '<tpl for=".">' +
                    '<div>' +
                    '<tpl for="senchapic">',
                    '<img  class="noteDetailImg_H" src="' + config.URL + 'upload/{.}" alt=""> </tpl>' +
                    //'<img  class="noteDetailImg_H" src="public/images/main_hll/ad2.jpg" alt=""> ' +

                    '<hr>' +
                    '</tpl>'
                );
                var tplHtml = noteDetailTpl.apply(msg);
                Ext.getCmp('noteDetailDataview').setHtml(tplHtml);
            }
        });
        Ext.Viewport.setActiveItem(this.getMyAlbumView());
    },

})