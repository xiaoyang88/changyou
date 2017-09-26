/**
 * Created by Chen on 2016/10/22.
 */

/*var ActivityTemplate = new Ext.XTemplate(
   
);*/
Ext.define('Travel.view.ActivitySecond', {
    extend: 'Ext.Panel',
    xtype: 'activitysecondview',
    fullscreen:true,
    config: {
        id:'activitysecondview',
        scrollable:'vertical',
        defaults:{styleHtmlContent:true},
        items: [
            {
                xtype: 'panel',
                cls:'questioncls',
                docked: 'top',
                html:'<a href="#activity"><img class="activity_wdH" src="public/images/community_cc/wd_lt_back.png" ></a>',
            },
           {
              xtype: 'panel',
              id:'panel2',
               style:'width:100%;height:2000px',
              //store: 'ActivitySecondStore',
              // itemTpl:ActivityTemplate\
               html:'<div id="collectButton_X"><img src="public/images/destination_xzl/ucollect.png"></div>' +
               '<div id="collectButton_X1"> <img src="public/images/destination_xzl/collect.png"></div>',
             },

        ]
    }
});
