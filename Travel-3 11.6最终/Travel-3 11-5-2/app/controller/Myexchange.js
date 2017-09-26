/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.controller.Myexchange', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            myexchangeview: {
                selector: 'myexchangeviewPanel',
                xtype: 'myexchangeview',
                autoCreate: true,
            },
        },
        control: {},
        routes: {
            'myexchange':'showMyexchangeView'
        }
    },
    showMyexchangeView: function () {
        var name= sessionStorage.UserName;
        //alert(name);
        Ext.Ajax.request({
            url: config.URL + 'noteShowBySencha/MyexchangeShow',
            scope: this,
            method: "post",
            params: {
                UserName: sessionStorage.UserName //name参数
            },
            success: function (response) {
                //alert(response.responseText);
                var msg = Ext.decode(response.responseText).myexchage;
                var noteDetailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div style="border-bottom: 1px solid rgba(159, 156, 110, 0.61)">',
                    '<div style="display: inline-block;padding: 10px ;"><span >{#}、{GoodName}</span></div>',
                    '<div style="width: 100%;text-align: center"><img src="'+config.upload+'{GoodPic}" alt="" style="width: 40% ;height: 120px;margin-top: 30px;margin-top: 20px"></div>',

                    '<div ></div>',
                    '<div style="width: 100%;text-align: right;font-size: 14px;padding: 10px">{OrderTime}</div>',
                    '</div>',
                    '</tpl>'
                );
                var tplHtml = noteDetailTpl.apply(msg);
                Ext.getCmp('changeDetailDataviews').setHtml(tplHtml);
            }
        })
        Ext.Viewport.setActiveItem(this.getMyexchangeview())
    }
})