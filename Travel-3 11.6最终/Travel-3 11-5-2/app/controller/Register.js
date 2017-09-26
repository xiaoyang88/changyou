/**
 * Created by Administrator on 2016/10/15.
 */
Ext.define("Travel.controller.Register",{
    extend: 'Ext.app.Controller',
    config:{
        refs:{
            RegisterView:{
                selector: 'RegisterView',          //视图的ID
                xtype:'RegisterView',              //确定某个视图
                autoCreate: true
            },
            RegisterButton:'#RegisterButton',
            UnRegisterButton:'#unregister_H',
            txt_name:'#txt_name',
            txt_password:'#txt_password',
            username:'#Username',
            sex:'sex',
            birthDate:'#BirthDate',
            HomeButton:'#HomeButton'
        },
        control:{
            RegisterButton:{
                tap:'RegisterView'
            },
            UnRegisterButton:{
                tap:'UnMyhome'
            },
            HomeButton:{
                tap:'HomeButtonView'
            }
        },
        routes:{
            'register':'showRegisterView'
        }

    },
    HomeButtonView: function() {
        this.redirectTo('main');
    },
    UnMyhome: function() {
        this.redirectTo('unmyhome');
    },

    RegisterView: function() {
      var NameValue=this.getTxt_name().getValue()
        var PwdValue=this.getTxt_password().getValue()
       /* var sexValue=this.getSex().getValue()
        Ext.Msg.alert(sexValue)*/
        var model = Ext.create('Travel.model.RegisterUser',{name:NameValue,password:PwdValue});
        var errors = model.validate();
        if (errors.isValid()){
            Ext.Ajax.request({
                
                /*url:'http://172.30.149.95:3089/noteShowBySencha/Register',*/
                url:config.URL+'noteShowBySencha/Register',
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

    },
    showRegisterView:function(){
        Ext.Viewport.setActiveItem(this.getRegisterView());   //(6)真正来显示 某个 页面About.js（Panel）,激活某个视图
    }
})