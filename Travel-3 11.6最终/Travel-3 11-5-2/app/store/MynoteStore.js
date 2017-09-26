/**
 * Created by Administrator on 2016/11/2.
 */
Ext.define('Travel.store.MynoteStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Mynote'],
    config: {
        model: 'Travel.model.Mynote',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: config.URL+'noteShowBySencha/MyNoteShow',
            method:'get',
            reader: {
                type: 'json',
                rootProperty: 'NoteDetailData'
            }
        },
    }
});