/**
 * Created by ybgong on 2016/10/20.
 */

//��������
Ext.define('Travel.store.GoodsStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Goods'],
    config: {
        model: 'Travel.model.Goods',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            //url: 'bookInfo.php',
            url: config.URL+'noteShowBySencha/QueryAll',
            method:'get',
            reader: {
                type: 'json'
                //rootProperty: 'goods'
            }
        },
       
    }
});
