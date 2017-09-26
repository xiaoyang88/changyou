/**
 * Created by Administrator on 2016/10/15.
 */
Ext.define("Travel.controller.Login",{
    extend: 'Ext.app.Controller',
    config:{
        refs:{
            LoginView:{
                selector: 'LoginViewPanel',          //视图的ID
                xtype:'LoginView',              //确定某个视图
                autoCreate: true
            },
           /* registerButton:'#LRegister',*/
            registerButton:'#Registerbutton_x',
            SubButton:'#button_x',
            txt_name:'#txt_name',
            txt_password:'#txt_password',
            HomeLogin:'#HomeLogin'
        },
        control:{
            SubButton:{
                tap:'LoginView'
            },
            registerButton:{
                tap:'RegisterView'
            },
            HomeLogin:{
                tap:'showHomeView'
            }
        },
        routes:{
            'login':'showLoginView'
        }

    },
    showHomeView: function() {
        this.redirectTo('unmyhome');

    },

    LoginView: function() {
   /* var sex=  LoginView.getComponent('txt_name').getValue()*/
      var NameValue=this.getTxt_name().getValue()
        var PwdValue=this.getTxt_password().getValue()
       /* Ext.Msg.alert(sex)*/
        var model = Ext.create('Travel.model.LoginUser',{name:NameValue,password:PwdValue});
        var errors = model.validate();
        if (errors.isValid()){
            Ext.Ajax.request({
                /*url:'http://172.30.149.95:3089/noteShowBySencha/LoginUser',*/
         url:config.URL+'noteShowBySencha/LoginUser',
                params:{
                    name:NameValue,password:PwdValue
                } ,
                success: function (response,success) {
                    responseText=Ext.decode(response.responseText)
                    //alert(responseText.success)
                    if(responseText.success==true){
                        sessionStorage.UserName=NameValue;
                        /*sessionStorage.setItem('UserName', NameValue);*/

                        /*     Ext.Msg.alert(req.session.userId);*/
                        Ext.Viewport.setActiveItem('mainview');
                    }
                    else{
                        Ext.Msg.alert('失败', '登录失败！')
                    }
                }
            })

        }

        else {
            var message = "";
            Ext.each(errors.items, function (rec) {
                message += rec.getMessage() + "<br>";
            });
            Ext.Msg.alert("登录失败", message);
        }

    },
    RegisterView:function () {
        this.redirectTo('register'); 
    },
    showLoginView:function(){
        Ext.Viewport.setActiveItem(this.getLoginView());   //(6)真正来显示 某个 页面About.js（Panel）,激活某个视图
    }
})