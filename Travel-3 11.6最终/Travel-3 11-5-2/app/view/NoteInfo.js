/**
 * Created by Administrator on 2016/10/22.
 */
Ext.define('Travel.view.NoteInfo', {
    extend: 'Ext.Panel',
    xtype: 'noteinfoview',
    config: {
        id: 'noteinfoviewPanel',
        scrollable:'vertical',
        tabBarPosition: 'top',
        cls:'LoginPanel_x',
        style:'background:white',
        /* defaults:{styleHtmlContent:true},*/
        items: [
            {
                xtpye:'toolbar',
                id:'noteinfo_top',
                docked:'top',
                layout:{
                    type:'hbox',
                },
                defaults:{
                    xtype:'button'
                },
                items:[
                    {
                        xtype:'panel',
                        html:'<div id="divP_x"><div id="divPanel_X"><a href="#main" ><img  class="noteinfo_back" src="public/images/main_hll/back.png"></a></div> </div>',
                        id:'backPanel_x'
                    },
                    {
                        xtype:'button',
                        html:'<div id="backButton_X"> <img src="public/images/destination_xzl/Upraise.png"></div>' +
                        '<div id="backButton_X1"> <img src="public/images/destination_xzl/praise.png"></div>',
                        id:'praise_X',
                   
                    },
                    {
                        xtype:'button',
                        html:'<div id="collectButton_X"><img src="public/images/destination_xzl/ucollect.png"></div>' +
                        '<div id="collectButton_X1"> <img src="public/images/destination_xzl/collect.png"></div>',
                        id:'collect_X',

                    }]
            },

            {
                xtype:'dataview',
                id:'noteDetailDataview',
                scrollable:false,
                style:'width:100%;height:3000px',

            },
            {
                xtpye:'toolbar',
                id:'comment_x',
                docked:'bottom',
                html:'<a href="#comment"><input id="commentInput_x" type="text" placeholder="回复楼主" readonly="readonly"></a>'
            }
        ]
    }
});