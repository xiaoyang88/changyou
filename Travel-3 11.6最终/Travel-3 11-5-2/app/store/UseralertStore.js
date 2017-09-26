/**
 * Created by Administrator on 2016/10/31.
 */
Ext.define('Travel.store.UseralertStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Useralert'],
    config: {
        model: 'Travel.model.Useralert',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            // url: 'bookInfo.php',
            url: config.URL+'noteShowBySencha/Userqueryalert',
            method:'post',
            reader: {
                type: 'json'
                //rootProperty: 'useralertData'
            }
        },

    }
});
