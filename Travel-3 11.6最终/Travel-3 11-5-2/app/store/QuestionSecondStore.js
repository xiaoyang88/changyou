//加载数据
Ext.define('Travel.store.QuestionSecondStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.QuestionSecond'],
    config: {
        model: 'Travel.model.QuestionSecond',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url:config.URL+'noteShowBySencha/QuestionDetailShow',
            reader: {
                type: 'json',
                rootProperty: 'QuestionDetailData'
            }
        },

    }
});