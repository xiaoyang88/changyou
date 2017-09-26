/**
 * Created by Administrator on 2016/10/24.
 */
var goodTemplate = new Ext.XTemplate(
    '<tpl for=".">' +
    '<div id="Imgo_z">' +
        '<div class="Img1_z">' +
            '<a class="goods_z" href="#goodsmall/{GoodId}">',
                '<img class="img2_z" src="'+config.upload+'{GoodPic}"/>',
                '<div class="info_z">' +
                '<div class="info1_z">{GoodName}</div>' +
                '<div class="info1s_z"><hr></div> ' +
                '<div class="info2_z">积分:{GoodIntegral}</div>' +
            '</a>' +
        '</div>' +
    '</div>',
    '</tpl>'
);
Ext.define('Travel.view.Goods', {
    extend: 'Ext.Panel',
    xtype: 'goodsview',
    fullscreen: true,
    config: {
        id: 'goodsviewPanel',
        scrollable:'vertical',
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
                        html:'<a href="#myhome"><img class="noteinfo_back"  src="public/images/main_hll/back.png"></a>' +
                        '<div class="toolbaricon1_z">积分商城</div>'
                    }
                ],
            },
            //轮播
            {
                xtype: 'carousel',
                id: '',
                height:150,
                direction:'horizontal',
                items: [
                    {
                        xtype: 'panel',
                        id: 'carouselItem1',
                        html: '<img src="public/images/myhome_zxy/lunbo1.jpeg" alt="" class="carouselImg_z" >'
                    },
                    {
                        xtype: 'panel',
                        id: 'carouselItem2',
                        html: '<img src="public/images/myhome_zxy/lunbo2.jpeg" alt="" class="carouselImg_z" >'
                    },
                    {
                        xtype: 'panel',
                        id: 'carouselItem3',
                        html: '<img src="public/images/myhome_zxy/lunbo3.jpeg" alt="" class="carouselImg_z" >'
                    },
                    {
                        xtype: 'panel',
                        id: 'carouselItem4',
                        html: '<img src="public/images/myhome_zxy/lunbo4.jpeg" alt="" class="carouselImg_z" >'
                    }
                    ,
                    {
                        xtype: 'panel',
                        id: 'carouselItem5',
                        html: '<img src="public/images/myhome_zxy/lunbo3.jpeg" alt="" class="carouselImg_z" >'
                    }
                ]
            },
           //中部
            {
                xtype:'panel',
                id:'middlepanel_z',
                items:[
                    {
                        xtype:'panel',
                        id:'mddle_z',
                        html:'<div class="middle2_z">商品分类</div><div class="middle1_z">' +
                        '<a href=""><div class="middles_z"><div class="mdc_z">数码产品</div><img src="public/images/myhome_zxy/go1_z.png" ></div></a>' +
                        '<a href=""><div class="middles_z"><div class="mdc_z">家居生活</div><img src="public/images/myhome_zxy/go2_z.png" ></div></a>' +
                        '<a href=""><div class="middles_z"><div class="mdc_z">美丽专区</div><img src="public/images/myhome_zxy/go3_z.png" ></div></a>' +
                        '<a href=""><div class="middles_z"><div class="mdc_z">户外度假</div><img src="public/images/myhome_zxy/go4_z.png" ></div></a>' +
                        '</div>'
                }]
            },
           {
                xtype:'panel',
                id:'navpanel_z',
                items:[{
                    xtype:'panel',
                     id:'nav_z',
                        html: '<div class="nav1_z"><span class="nav2_z">最新上架</span></div>'
                    }
                ]
            },
             {
                xtype: 'dataview',
                scrollable:false,
                id: 'goodsDataview',
                 style:'width:100%',
                height:1300,
                itemTpl: goodTemplate,
                emptyText: '没有数据',
                baseCls: 'goods'
            }
        ]
    }
});