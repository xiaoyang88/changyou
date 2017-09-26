/**
 * Created by Administrator on 2016/10/25.
 */
Ext.define('Travel.controller.Useralert', {
    extend: 'Ext.app.Controller',
    config: {     //为控制器作配置，增加装备
        refs: {		//找到要操作的Id

            useralertview:{
                selector:'#useralertviewPanel',
                xtype:'useralertview',
                autoCreate: true,
            }
        },
        control: {  //增加动作
            //goodsdataviewPanel:
        },
        routes:{
            'useralert':'showUseralertView'
        } //跳转到详情
    },
    useralert: function () {
        if (sessionStorage.UserName != undefined) {
            Ext.Ajax.request({
                scope: this,
                params: {
                    id: sessionStorage.getItem("UserName"),  //参数
                },
                success: function () {
                    this.redirectTo('useralert/' + sessionStorage.getItem("UserName") )
                }
            });
        }
    },
    showUseralertView:function (value) {
        var name= sessionStorage.UserName;
        alert(name);
        Ext.Ajax.request({
            url:config.URL+'noteShowBySencha/Userqueryalert',
            scope: this,
            method:'post',
            params:{
                UserName:sessionStorage.UserName    //参数
            },
            success: function (response){

                 alert(response.responseText);
                var msg = Ext.decode(response.responseText).useralert;
                console.log(msg);
                var useralertTemplate = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="Img11_z">',
                    '<div class="infomall_z">姓名:{UserName}</div>'+
                    '<div class="info21_z">密码:{Upassword}</div>',
                    '<div class="info12_z">性别:{gender}</div>',
                    '<div class="info2_z">手机号:{TEL}</div>' +
                    '</div>',
                    '</tpl>'
                );
                var tplHtml=useralertTemplate.apply(msg);
                Ext.getCmp('useralertDataview').setHtml(tplHtml);
            }
        });
        Ext.Viewport.setActiveItem(this.getUseralertview())

    }
});

