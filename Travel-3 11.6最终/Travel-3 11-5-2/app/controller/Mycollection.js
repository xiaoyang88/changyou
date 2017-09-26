/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.controller.Mycollection', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mycollectionview: {
                selector: 'mycollectionviewPanel',
                xtype: 'mycollectionview',
                autoCreate: true,
            },
        },
        control: {},
        routes: {
            'mycollection':'showMycollectionView'
        }
    },
    showMycollectionView: function () {
        Ext.Viewport.setActiveItem(this.getMycollectionview());
    },
})