//加载数据
Ext.define('Travel.store.HeadSculptureStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.HeadSculpture'],
    config: {
        model: 'Travel.model.HeadSculpture',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url:  config.URL+'noteShowBySencha/SelectUserPic',
            params:{
                UserName:sessionStorage.UserName
            } ,
            reader: {
                type: 'json'
              /*  rootProperty: 'ActivityInfoData'*/
            }
        },

    }
});