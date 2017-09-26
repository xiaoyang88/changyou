/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.controller.Myintegral', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            myintegralview: {
                selector: 'myintegralviewPanel',
                xtype: 'myintegralview',
                autoCreate: true,
            },
        },
        control: {},
        routes: {
            'myintegral':'showMyintegralView'
        }
    },
    myintegral: function () {
        if (sessionStorage.UserName != undefined) {
            Ext.Ajax.request({
                scope: this,
                params: {
                    id: sessionStorage.getItem("UserName"),  //参数
                },
                success: function () {
                    this.redirectTo('myintegral/' + sessionStorage.getItem("UserName") )
                }
            });
        }
    },

    showMyintegralView: function () {
        var name= sessionStorage.UserName;
        //alert(name);
        Ext.Ajax.request({
            url: config.URL + 'noteShowBySencha/MyIntegralShow',
            scope: this,
            method: "post",
            params: {
                UserName:sessionStorage.UserName //name参数
            },
            success: function (response) {
               //alert(response.responseText);
                var msg = Ext.decode(response.responseText).myintegral;
                var noteDetailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div >' +
                   /* '<div >{UserName}</div> ' +*/
                    '<div style="width:100%;text-align: center;margin-top: 100px">您当前积分为 {GoodIntegral}</div>' +
                    '</div>',
                    '</tpl>'
                );
                var tplHtml = noteDetailTpl.apply(msg);
                Ext.getCmp('inteDetailDataviews').setHtml(tplHtml);
            }
        });
        Ext.Viewport.setActiveItem(this.getMyintegralview());
    },
});