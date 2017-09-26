/**
 * Created by Chen on 2016/10/22.
 */

Ext.define('Travel.view.Activity', {
    extend: 'Ext.Panel',
    xtype: 'activityview',
    config: {
        tabBarPosition: 'top',
        scrollable:'vertical',
        id:'activityview',
        /*defaults:{styleHtmlContent:true},*/
        items: [
            {
                xtype: 'panel',
                docked: 'top',
                cls:'activitycls',
                items: [
                    {
                        xtype: 'panel',
                        html: '<a href="#question"><div id="questionIco">问答 </div></a>' +
                        '<a href="#activity"><div id="activityIco">活动 </div></a>'
                    }
                ]
            },
            {
                //id:'Activityview',
                items:[
                    {
                        xtype: 'dataview',
                        style: 'width:100%;height:3000px',
                        store: 'ActivityStore',
                        id: 'Activitypanel',
                        layout: 'fit',
                        itemTpl: '<tpl>' +                                              //' + config.URL + 'upload/{pic}
                        '<a style="text-decoration: none;color: black" href="#activityFrist/{ActivityId}">' +
                        '<div style="background-color:white;margin-bottom: 10px">' +
                        '<div class="activity_author_img">' +
                            '<img class="activity_author_url" src="public/images/community_cc/author2.png"/>' +
                            '<span style="font-size: 16px">{ManagerName}</span><div class="Activity_more_icon">' +
                            '<img  src="public/images/community_cc/turn_on.png"  class="ACturn_on_H">' +
                        '</div>' +
                        '</div>' +
                        ' <div class="ActivityTitle_H">{ActivityTitle}</div>' +
                        '<div class="activity_description" >{ActivityContent:ellipsis(80)}</div>' +
                        '<div style="height:100px">' +
                        '<tpl for="ActPicSencha">' +
                        '<image src="' + config.AdminURL + 'upload/{.}" style="width: 33%;height: 80px;float: left;padding-left:15px"/>' +
                        '</tpl><br>' +
                        '</div>' +
                        '<div class="description_bottom" style="height: 30%">' +
                        '</div></a>' +
                        '</tpl>'
                    }
                ]

            },
            //底部tab
            {
                xtype: 'toolbar',
                id: 'navToolBarPanel',
                docked: 'bottom',
                items: [
                    {
                        id: "iconHome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_home1.png" alt=""><div class="M_icon_H2">首页</div>'
                    },
                    {
                        id: "iconDenstnation",
                        html: '<img class="toolImg"  src="public/images/main_hll/icon_mudide1.png" alt=""><div class="M_icon_H2">目的地</div> '
                    },
                    {
                        id: "iconQuestion",
                        html: '<img class="toolImg"   src="public/images/main_hll/icon_talk2.png" alt=""><div class="M_icon_H">社区</div>'

                    },
                    {
                        id: "iconMyhome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_me1.png" alt=""><div class="M_icon_H2">我的</div>'
                    },
                ],
            },
        ]
    }
});
