/**
 * Created by Administrator on 2016/10/25.
 */

Ext.define('Travel.view.GoodsMall', {
    extend: 'Ext.Panel',
    xtype: 'goodsmallview',
    config: {
        id: 'goodsmallviewPanel',
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
                        '<div class="toolbaricon1_z">商品详情</div>'
                    }
                ]
            },
            {
                xtype: 'panel',
                id: 'goodsmallDataview',
                layout:'fit',
                style:'width:100%;hight:1000px',
                store:'GoodsMallStore',
                emptyText: '没有数据',

            },
            {
                xtype: 'button',
                id: 'mallPanel',
                docked: 'bottom',
                text:'立即兑换',
               /* items: [
                    {
                        id: "mallbo",
                        text: '<div class="mallbottom1_z">立 即 兑 换</div>  '
                    },
                ]*/
            }
        ]
    }
});