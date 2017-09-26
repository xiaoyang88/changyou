//加载数据
Ext.define('Travel.store.ActivityStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Activity'],
    config: {
        model: 'Travel.model.Activity',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url:  config.URL+'noteShowBySencha/ActivityInfoShow',
            reader: {
                type: 'json',
                rootProperty: 'ActivityInfoData'
            }
        },

    }
});