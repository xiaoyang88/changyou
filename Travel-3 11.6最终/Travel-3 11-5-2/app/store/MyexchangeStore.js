/**
 * Created by Administrator on 2016/11/3.
 */
Ext.define('Travel.store.MyexchangeStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Myexchange'],
    config: {
        model: 'Travel.model.Myexchange',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: config.URL+'noteShowBySencha/MyexchangeShow',
            method:'post',
            reader: {
                type: 'json',
                rootProperty: 'ExchangeDetailData'
            }
        },
    }
});