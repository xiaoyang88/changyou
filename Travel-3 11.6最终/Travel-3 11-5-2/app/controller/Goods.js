/**
 * Created by zxy on 2016/10/14.
 */
Ext.define('Travel.controller.Goods', {
    extend: 'Ext.app.Controller',
    config: {     //为控制器作配置，增加装备
        refs: {		//找到要操作的Id
            //booksshowviewPanel: '#booksshowviewPanel',
            //goodsDataview: '#goodsDataview',   //dataview
            goodsview:{
                selector:'#goodsviewPanel',
                xtype:'goodsview',
                autoCreate: true,
            }
            
        },
        control: {  //增加动作
            //goodsdataviewPanel:
        },
        routes:{
            'goods':'showGoodsView'
        } //跳转到详情
    },

    launch: function() {
        var store = Ext.getStore('GoodsStore');              //执行store
        store.clearFilter();
        //alert(userStore.getCount())
        store.load(function (records, operation, success) {
            //alert(operation.getResponse().responseText);
            if (success) {
                console.log("records:");
                console.log(records);
                var data =JSON.parse(operation.getResponse().responseText);
                Ext.getCmp('goodsDataview').setData(data.goods)
            }
        });
    },
    showGoodsView: function () {
        Ext.Viewport.setActiveItem(this.getGoodsview());
    },

});

