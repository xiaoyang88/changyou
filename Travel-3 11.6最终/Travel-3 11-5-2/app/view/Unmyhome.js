/**
 * Created by Administrator on 2016/10/22.
 */
Ext.define('Travel.view.Unmyhome', {
    extend: 'Ext.Panel',
    xtype: 'unmyhomeview',
    id: 'unmyhomeviewPanel',
    config: {
        scrollable:'vertical',
        fullscreen: true,
        items:[
            /*{
                xtype: 'panel',
                id: 'TopPanelview_z',
                docked: 'top',
                scrollable:'vertical',
                fullscreen: true,
                items: [

                    ,]},*/
            {
                xtype:'panel',
                id:'panel4',
                cls:'panel4',
                docked: 'top',
                html:'<div id="jing5_z"> ' +/*<img class="left1_z" src="public/images/myhome_zxy/back.png" >*/
                '<div id="top_x"><a href="#main"><div class="left_z_h"><div class="left_z_HHH" >我的</div></div></a>' +
                '</div></div>'
            },
            //顶部背景图
            {
                xtype: 'panel',
                id: 'geren_z',
                cls:'geren_z_imgH',
                html: '<div id="jing21_z"> ' +
                '<div class="dong2_z" id="dong2_z">' +
                    '<a href="#login">' +
                    '<img class="dong2_z_imgH" src="public/images/myhome_zxy/icon_x.png" >' +
                    '<div id="textLogin_X" >点击登录，体验更多' +
                    '</div>' +
                    '</a>' +
                '</div>' +
                '</div>',
            },
            /*{
                xtype:'panel',
                id:'panel1',
                html:''
            },*/
            {
                xtype: 'panel',
                id: 'Pane2view_z',
                html:' <div id="jing2_z">' +
                '<a href="#login"><div class="dongs_z"><img src="public/images/myhome_zxy/1.png" ><div class="myc_z">我的游记</div></div></a>' +
                '<a href="#login"><div class="dongs_z"><img src="public/images/myhome_zxy/icon_mudide2.png" ><div class="myc_z">我的相册</div></div></a>' +
                '<a href="#login"><div class="dongs_z"><img src="public/images/myhome_zxy/icon_me2.png" ><div class="myc_z">我的积分</div></div></a>' +
                '</div>'
            },
            {
                xtype:'panel',
                id:'myhomeview_z',
                items:[
                    {
                        xtype:'panel',
                        id:'myhomeshow_z',
                        html:
                        '<a href="#login"><div><div class="hotIcon1_z"></div><span class="hotTitle1_z">我的分享</span>'
                        +
                        '<img class="hotImg1_z" src="public/images/myhome_zxy/enter.png" alt=""></div></a>',
                    }
                ]
            },
            {
                xtype:'panel',
                id:'myhome1view_z',

                items:[
                    {
                        xtype:'panel',
                        id:'myhome1show_z',
                        html:' <div class="hotIcon11_z"></div><span class="hotTitle1_z">我的收藏</span>'
                        +
                        '<img class="hotImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
                    }
                ],
            },
            {
                xtype:'panel',
                id:'myhome2view_z',

                items:[
                    {
                        xtype:'panel',
                        id:'myhome2how_z',
                        html:' <div class="hotIcon21_z"></div><span class="hotTitle1_z">我的兑换</span>'+
                        '<img class="hotImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
                    }
                ],
            },
            {
                xtype:'panel',
                id:'myhome3view_z',

                items:[
                    {
                        xtype:'panel',
                        id:'myhome3show_z',
                        html:
                        '<div class="hotIcon1_z"></div><span class="hotTitle1_z">我的问答</span>'
                        +
                        '<img class="hotImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
                    }
                ],
            },
            {
                xtype:'panel',
                id:'myhome4view_z',

                items:[
                    {
                        xtype:'panel',
                        id:'myhome4show_z',
                        html:' <a href="#goods"><div><div class="hotIcon11_z"></div><span class="hotTitle1_z">积分商城</span>'
                        +
                        '<img class="hotImg1_z" src="public/images/myhome_zxy/enter.png" alt=""></div></a>',
                    }
                ],
            },
            {
                xtype:'panel',
                id:'myhome5view_z',

                items:[
                    {
                        xtype:'panel',
                        id:'myhome5show_z',
                        html:' <div class="hotIcon21_z"></div><span class="hotTitle1_z">我的点评</span>'+
                        '<img class="hotImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
                    }
                ]

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
                        html: '<img class="toolImg"  src="public/images/main_hll/icon_mudide1.png" alt=""><div class="M_icon_H2">目的地</div> '
                    },
                    {
                        id: "iconQuestion",
                        html: '<img class="toolImg"   src="public/images/main_hll/icon_talk1.png" alt=""><div class="M_icon_H2">社区</div>'

                    },
                    {
                        id: "iconMyhome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_me2.png" alt=""><div class="M_icon_H">我的</div>'
                    },
                ],

            }
        ]
    }
});





/*<div id="jing2_z"> '       /!*    cls:'panel2_z',*!/+
 '<a href=""><div class="dongs_z"><img src="public/images/myhome_zxy/1.png" ><div class="myc_z">我的游记</div></div></a>' +
 '<a href=""><div class="dongs_z"><img src="public/images/myhome_zxy/icon_mudide2.png" ><div class="myc_z">我的相册</div></div></a>' +
 '<a href=""><div class="dongs_z"><img src="public/images/myhome_zxy/icon_me2.png" ><div class="myc_z">我的积分</div></div></a>' +
 '</div>*/