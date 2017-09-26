/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.Destination', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            destinationview: {
                selector: 'destinationviewPanel',
                xtype: 'destinationview',
                autoCreate: true,
            },
            img_x:'#iconHome_X',//首页按钮icon
            iconHomeBtn:'#iconHome'//首页按钮icon
        },
        control: {
            img_x:{
                tap:'ImgShowSearch'
            },
            iconHomeBtn:{
                tap:'iconHomeBtn_tap',
            }
        },
        routes: {
            'destination': 'showDestinationView',
        }
    },
    showDestinationView: function () {
        Ext.Viewport.setActiveItem(this.getDestinationview());
    },
    ImgShowSearch:function () {
       
        this.redirectTo('search');
    },
    iconHomeBtn_tap:function () {
        this.redirectTo('main');
    }
})