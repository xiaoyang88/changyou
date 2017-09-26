/**
 * Created by Administrator on 2016/10/25.
 */
Ext.define('Travel.store.GoodsMallStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.GoodsMall'],
    config: {
        model: 'Travel.model.GoodsMall',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            //url: 'bookInfo.php',
            url: config.URL+'noteShowBySencha/QueryOne',
            method:'get',
            reader: {
                type: 'json',
                //rootProperty: 'goods'
            }
        },

    }
});