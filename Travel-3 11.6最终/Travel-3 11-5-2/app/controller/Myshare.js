/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.controller.Myshare', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            myshareview: {
                selector: 'myshareviewPanel',
                xtype: 'myshareview',
                autoCreate: true,
            },
        },
        control: {},
        routes: {
            'myshare': 'showMyshareView'
        },
    },
       
    showMyshareView: function () {
        Ext.Viewport.setActiveItem(this.getMyshareview());
    },
});