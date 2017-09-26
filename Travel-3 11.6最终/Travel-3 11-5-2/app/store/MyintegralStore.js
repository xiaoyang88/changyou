/**
 * Created by Administrator on 2016/11/2.
 */
Ext.define('Travel.store.MyintegralStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Myintegral'],
    config: {
        model: 'Travel.model.Myintegral',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: config.URL+'noteShowBySencha/MyIntegralShow',
            method:'post',
            reader: {
                type: 'json',
                rootProperty: 'InteDetailData'
            }
        },
    }
});