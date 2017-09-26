/**
 * Created by Administrator on 2016/10/29.
 */
Ext.define('Travel.view.Mysetting', {
    extend: 'Ext.Panel',
    xtype: 'mysettingview',
    config: {
        id: 'mysettingviewPanel',
        scrollable:'vertical',
        tabBarPosition: 'top',
        /* defaults:{styleHtmlContent:true},*/
        items: [
            {
                xtpye:'panel',
                id:'noteinfo_top',
                docked:'top',
                html:'<a href="#myhome"><img class="noteinfo_back"  src="public/images/main_hll/back.png"></a>'+
                '<div class="toolbaricon1_z">设置</div>'
            },
            {
                xtype:'panel',
                id:'mysettingshow1_z',
                html:'<a href="#Useralert"> <span class="shezhiTitle1_zxy">账号设置与绑定</span>'
                +
                '<img class="shezhiImg1_z" src="public/images/myhome_zxy/enter.png" alt=""></a>'
            },
           /* {
                xtype:'panel',
                id:'mysettingshow2_z',
                html:'<a href="#useralert"><span class="shezhiTitle1_z">个人信息修改</span>'+
                '<img class="shezhiImg1_z" src="public/images/myhome_zxy/enter.png" alt=""></a>',
            },*/
           /* {
                xtype:'panel',
                id:'mysettingshow3_z',
                html:
                '<span class="shezhiTitle1_z">清除缓存</span>'
                +
                '<img class="shezhiImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
            },
            {
                xtype:'panel',
                id:'mysettingshow4_z',
                html:' <span class="shezhiTitle1_z">意见反馈</span>'
                +
                '<img class="shezhiImg1_z" src="public/images/myhome_zxy/enter.png" alt=""></div></a>',
            },
            {
                xtype:'panel',
                id:'mysettingshow5_z',
                html:' <span class="shezhiTitle1_z">评价畅游</span>'+
                '<img class="shezhiImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
            },*/
            {
                xtype:'panel',
                id:'mysettingshow4_z',
                html:' <span class="shezhiTitle1_z">分享畅游</span>'+
                '<img class="shezhiImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
            },
            {
                xtype:'panel',
                id:'mysettingshow5_z',
                html:' <span class="shezhiTitle1_z">关于畅游</span>'+
                '<img class="shezhiImg1_z" src="public/images/myhome_zxy/enter.png" alt="">',
            },
            {
                xtype:'button',
                id:'mysettinglogin_z',
                text:'退出登录'
            }
        ]
    }
});