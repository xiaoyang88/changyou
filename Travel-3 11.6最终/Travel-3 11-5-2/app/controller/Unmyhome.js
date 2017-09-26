/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.Unmyhome',{
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            unmyhomeview: {
                selector: 'unmyhomeviewPanel',
                xtype: 'unmyhomeview',
                autoCreate: true,
            },
        },
        control: {
            iconGoodsBtn: {
                tap: 'iconGoodsBtn_tap'
            },
        },
        routes: {
       
            'unmyhome':'showUnmyhomeView'
        }
    },
    showUnmyhomeView: function () {
        Ext.Viewport.setActiveItem(this.getUnmyhomeview());
    },


})
