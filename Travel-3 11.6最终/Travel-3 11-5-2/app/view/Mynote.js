/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.view.Mynote', {
    extend: 'Ext.Panel',
    xtype: 'mynoteview',
    config: {
        id: 'mynoteviewPanel',
        scrollable:'vertical',
        tabBarPosition: 'top',
        /* defaults:{styleHtmlContent:true},*/
        style:'background:white',
        items: [
            {
                xtpye:'panel',
                id:'noteinfo_top',
                docked:'top',
                html:'<a href="#myhome"><img class="noteinfo_back"  src="public/images/main_hll/back.png"></a>'+
                '<div class="toolbaricon1_z">我的游记</div>'
            },
            {
                xtype:'panel',
                id:'noteDetailDataviews',
                scrollable:false,
                style:'width:100%;height:2600px',
            },
           
        ]
    }
});