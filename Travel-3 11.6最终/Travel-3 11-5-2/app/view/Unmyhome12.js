/**
 * Created by Administrator on 2016/10/22.
 */
Ext.define('Travel.view.Unmyhome', {
    extend: 'Ext.DataView',
    xtype: 'unmyhomeview',

    config: {
        scrollable:'vertical',
        fullscreen: true,
        items:[
            {
                id: 'unmyhomeviewPanel',
                tabBarPosition: 'top',
                scrollable:'vertical',
                fullscreen: true,
                /* defaults:{styleHtmlContent:true},*/
                items: [
                    {
                        xtype: 'panel',
                        id: 'TopPanelview_z',
                        docked: 'top',
                        scrollable:'vertical',
                        fullscreen: true,
                        items: [
                            //顶部背景图
                            {
                                xtype: 'panel',
                                id: 'geren_z',
                                docked: 'top',

                                html: '<img src="public/images/myhome_zxy/ad6.jpg" class="Img_z">',
                            },

                            {
                                xtype:'panel',
                                id:'panel4',
                                cls:'panel4',
                                docked: 'top',
                                html:'<div id="jing5_z"> ' +
                                '<a href="#myhome"><div class="left_z"><img class="left1_z" src="public/images/myhome_zxy/back.png" ></div></a>' +
                                '<div class="right_z"><img class="right1_z" src="public/images/myhome_zxy/setting.png" >'+
                                '</div>'

                            },
                            {
                                xtype:'panel',
                                id:'panel1',
                                docked: 'top',
                                html:'<div id="jing21_z"> ' +
                                '<div class="dong2_z"><a href="#"><img class="" src="public/images/myhome_zxy/man.jpg" ></a></div>' +
                                '</div>'

                            },
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'Pane2view_z',
                        docked: 'top',
                        items: [
                            //三个图标
                            {
                                xtype:'panel',
                                id:'panel2_z',
                                cls:'panel2_z',
                                html:'<div id="jing2_z"> ' +
                                '<a href=""><div class="dongs_z"><img src="public/images/myhome_zxy/note_hot.png" ><div class="myc_z">我的游记</div></div></a>' +
                                '<a href=""><div class="dongs_z"><img src="public/images/myhome_zxy/icon_mudide2.png" ><div class="myc_z">我的相册</div></div></a>' +
                                '<a href=""><div class="dongs_z"><img src="public/images/myhome_zxy/icon_me2.png" ><div class="myc_z">我的积分</div></div></a>' +
                                '</div>'
                            }
                        ]
                    },


                    {
                        xtype:'panel',
                        id:'myhomeview_z',
                        docked: 'top',
                        items:[
                            {
                                xtype:'panel',
                                id:'myhomeshow_z',
                                html:
                                '<a href=""><div><div class="hotIcon1_z"></div><span class="hotTitle1_z">我的分享</span>'
                                +
                                '<img class="hotImg1_z" src="public/images/myhome_zxy/enter.png" alt=""></div></a>',
                            }
                        ]
                    },
                    {
                        xtype:'panel',
                        id:'myhome1view_z',
                        docked: 'top',
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
                        docked: 'top',
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
                        docked: 'top',
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
                        docked: 'top',
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
                        docked: 'top',
                        items:[
                            {
                                xtype:'panel',
                                id:'myhome5show_z',
                                html:' <div class="hotIcon21_z"></div><span class="hotTitle1_z">我的点评</span>'+
                                '<img class="hotImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
                            }
                        ],

                    }

                ]},
            {
                xtype: 'toolbar',
                id: 'navToolBarPanel',
                docked: 'bottom',
                items: [
                    {
                        id: "iconHome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_home2.png" alt="">'
                    },
                    {
                        id: "iconDenstnation",
                        html: '<img class="toolImg"  src="public/images/main_hll/icon_mudide2.png" alt=""> '
                    },
                    {
                        id: "iconQuestion",
                        html: '<img class="toolImg"   src="public/images/main_hll/icon_talk2.png" alt="">'

                    },
                    {
                        id: "iconMyhome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_me2.png" alt="">'
                    }
                ]

            }
        ]
    }
});
