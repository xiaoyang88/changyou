/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.view.Mycomment', {
    extend: 'Ext.Panel',
    xtype: 'mycommentview',
    config: {
        id: 'mycommentviewPanel',
        scrollable:'vertical',
        tabBarPosition: 'top',
        /* defaults:{styleHtmlContent:true},*/
        items: [
            {
                xtpye:'panel',
                id:'noteinfo_top',
                docked:'top',
                html:'<a href="#myhome"><img class="noteinfo_back"  src="public/images/main_hll/back.png"></a>'+
                '<div class="toolbaricon1_z">我的问答</div>'
            },
            {
                xtype:'panel',
                id:'commentDetailDataviews',
                scrollable:false,
                style:'width:100%;height:2000px',
            },
        ]
    }
});