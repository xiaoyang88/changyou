//加载数据
Ext.define('Travel.store.ActivitySecondStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.ActivitySecond'],
    config: {
        model: 'Travel.model.ActivitySecond',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url:  config.URL+'noteShowBySencha/ActivityDetailShow',
            reader: {
                type: 'json',
                //rootProperty: ''
            }
        },

    }
});