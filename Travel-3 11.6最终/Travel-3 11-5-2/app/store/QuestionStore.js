//加载数据
Ext.define('Travel.store.QuestionStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Question'],
    config: {
        model: 'Travel.model.Question',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: config.URL+'noteShowBySencha/QuestionShow',
            reader: {
                type: 'json',
                rootProperty: 'QuestionInfoData'
            }
        },

    }
});