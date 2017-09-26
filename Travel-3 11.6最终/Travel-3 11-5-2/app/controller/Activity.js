/**
 * Created by Chen on 2016/10/23.
 */
Ext.define('Travel.controller.Activity', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            activityview: {
                selector: '#activityview',
                xtype: 'activityview',
                autoCreate: true,
            },
            ///iconHomeBtn:'#iconHome'//首页按钮icon
        },
        routes: {
            'activity':'showactivityview',
     
        }
    },
    showactivityview: function () {
        Ext.Viewport.setActiveItem(this.getActivityview());
    }
})