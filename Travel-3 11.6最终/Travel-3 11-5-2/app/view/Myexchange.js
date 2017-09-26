/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.view.Myexchange', {
    extend: 'Ext.Panel',
    xtype: 'myexchangeview',
    config: {
        id: 'myexchangeviewPanel',
        scrollable:'vertical',
        tabBarPosition: 'top',
        /* defaults:{styleHtmlContent:true},*/
        items: [
            {
                xtpye:'panel',
                id:'noteinfo_top',
                docked:'top',
                html:'<a href="#myhome"><img class="noteinfo_back"  src="public/images/main_hll/back.png"></a>'+
                '<div class="toolbaricon1_z">我的兑换</div>'
            },
            {
                xtype:'dataview',
                id:'changeDetailDataviews',
                scrollable:false,
                style:'width:100%;height:2000px'
            },
        ]
    }
});