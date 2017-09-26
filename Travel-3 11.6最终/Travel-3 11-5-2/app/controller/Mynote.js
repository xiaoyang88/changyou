/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.controller.Mynote', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mynoteview: {
                selector: 'mynoteviewPanel',
                xtype: 'mynoteview',
                autoCreate: true,
            },
        },
        control: {
        },
        routes: {
            'mynote': 'showMynoteView'
        }
    },
    mynote: function () {
        if (sessionStorage.UserName != undefined) {
            Ext.Ajax.request({
                scope: this,
                params: {
                    id: sessionStorage.getItem("UserName"),  //参数
                },
                success: function () {
                    this.redirectTo('mynote/' + sessionStorage.getItem("UserName") )
                }
            });
        }
    },

    showMynoteView: function () {
      var name= sessionStorage.UserName;
        /*alert(name);*/
        Ext.Ajax.request({
            url: config.URL + 'noteShowBySencha/MyNoteShow',
            scope: this,
            method: "post",
            params: {
                UserName:sessionStorage.UserName //name参数
            },
            success: function (response) {
               /* alert(response.responseText);*/
                var msg = Ext.decode(response.responseText).mynote;
                var noteDetailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div style="border-bottom: 1px solid rgba(215, 215, 215,0.9) ">'+
                    '<p class="DetailTname_H" id="CTname_X">【{Tname}】</p> ' +
                    '<div class="DetailTrvaelContnet_H">{TrvaelContnet}</div> ' +
                    '<div class="TravelNoteTime_HH" style="padding-bottom: 10px">{TravelNoteTime}</div>' +
                    '</div>',
                    '</tpl>'
                );
                var tplHtml = noteDetailTpl.apply(msg);
                Ext.getCmp('noteDetailDataviews').setHtml(tplHtml);
            }
        });
            Ext.Viewport.setActiveItem(this.getMynoteview());
    },
});