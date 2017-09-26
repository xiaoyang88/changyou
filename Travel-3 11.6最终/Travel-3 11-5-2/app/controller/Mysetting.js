/**
 * Created by Administrator on 2016/10/29.
 */
Ext.define('Travel.controller.Mysetting', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mysettingview: {
                selector: 'mysettingviewPanel',
                xtype: 'mysettingview',
                autoCreate: true
            },
                SubButton:'#mysettinglogin_z'
        },
        control: {
            SubButton:{
                tap:'ExitView'
            }
        },
        routes: {
            'mysetting':'showMysettingView'
        },
    },
    ExitView: function () {
        sessionStorage.clear()
        this.redirectTo('unmyhome');
    },
    showMysettingView: function () {
        Ext.Viewport.setActiveItem(this.getMysettingview());
    },
})