/**
 * Created by Administrator on 2016/10/22.
 */




var tpl=new Ext.XTemplate([

    '<tpl for=".">',
   /* '<div class="City-item">',*/
    '<div class="City_container">' ,


    '<img  src="{Pic}" id="img_City">',
    '<div id="City_Describe"><p>{Describe:ellipsis(23)}</p></div>',
    '</div>',
   /* '</div>',*/
    '</tpl>'

]);
Ext.define('Travel.view.Destination', {
    extend: 'Ext.Panel',
    xtype: 'destinationview',
    config: {
        id: 'destinationviewPanel',
        tabBarPosition: 'top',
      
        /* defaults:{styleHtmlContent:true},*/
        items: [
            {
                items: [{
                    xtype: 'toolbar',
                    id: 'navToolBarPanel_X',
                    docked: 'top',
                    items: [
                        {
                            id: "iconHome_X",
                            html: '<img class="toolImg" src="public/images/destination_xzl/search_x.png" alt="">'
                        }
                    ]
                }]
            },
            {
                xtype: 'panel',
                id:'panel_X',
                cls:'panel_X',
                html:' '

            },{
                xtype: 'panel',
                id:'center_X',
                cls:'center_X',
                html:' <p>热门目的地</p>'


            },
            {              xtype: 'dataview',
                style: 'width:100%;height:100%',
                store: 'DestinationStore',
         
                itemTpl:tpl,
                emptyText: '没有数据'

                
            },
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
                        html: '<img class="toolImg"  src="public/images/main_hll/icon_mudide2.png" alt=""><div class="M_icon_H">目的地</div> '
                    },
                    {
                        id: "iconQuestion",
                        html: '<img class="toolImg"   src="public/images/main_hll/icon_talk1.png" alt=""><div class="M_icon_H2">社区</div>'

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