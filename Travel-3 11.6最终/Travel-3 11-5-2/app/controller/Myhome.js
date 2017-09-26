/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.Myhome', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            myhomeview: {
                selector: 'myhomeviewPanel',
                xtype: 'myhomeview',
                autoCreate: true,
            },
        },
        control: {},
        routes: {
            'myhome':'showMyhomeView'
        }
    },
    showMyhomeView: function () {
        //alert('11111')
        var NameValue= sessionStorage.UserName;
        //alert(NameValue)
        Ext.Ajax.request({
           /* url:'http://172.30.149.95:3089/noteShowBySencha/SelectUserPic',*/
            url:config.URL+'noteShowBySencha/SelectUserPic',
            method:'get',
            params:{
                UserName:NameValue
            },
            success: function (response){
                var msg = Ext.decode(response.responseText).UserPic;
                //alert(JSON.stringify(msg))
                var PciTpl = new Ext.XTemplate(
                    '<tpl for=".">' +
                    '<div class="li">' +
                    '<img  id="dataview_x" class="dong2_z_imgH" src="'+config.URL+'upload/{UserPic}" alt="">' +
                    '<div id="NAme_x">{UserName}</div>  </div>' +
                    '</tpl>'
                );
                var tplHtml=PciTpl.apply(msg);
                Ext.getCmp('geren_z').setHtml(tplHtml);
            }

        })
        Ext.Viewport.setActiveItem(this.getMyhomeview());
    },

})