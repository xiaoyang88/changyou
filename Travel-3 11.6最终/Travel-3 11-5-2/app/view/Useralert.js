/**
 * Created by Administrator on 2016/10/25.
 */

Ext.define('Travel.view.Useralert', {
    extend: 'Ext.Panel',
    xtype: 'useralertview',
    config: {
        id: 'useralertviewPanel',
        scrollable:'vertical',
        fullscreen:true,
        items: [
            //顶部导航
            {
                xtype: 'panel',
                id: 'TopPane1',
                docked: 'top',
                items: [
                    //表头
                    {
                        xtpye:'panel',
                        id:'noteinfo_top',
                        docked:'top',
                        html:'<a href="#goods"><img class="noteinfo_back"  src="public/images/main_hll/back.png"></a>' +
                        '<div class="toolbaricon1_z">个人信息修改</div>'
                    }
                ]
            },
            {
                xtype: 'panel',
                id: 'useralertDataview',
                layout:'fit',
                style:'width:100%;hight:1000px',
                store:'UseralertStore',
                emptyText: '没有数据',

            },
            {
                xtype: 'panel',
                id: 'mallPanel',
                docked: 'bottom',
                items: [
                    {
                        id: "mallbo",
                        html: '<div class="mallbottom1_z">保存</div>'
                    },
                ]
            }
        ]
    }
});