//加载数据
Ext.define('Travel.store.NoteInfoStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.TravelNoteModel'],
    config: {
        model: 'Travel.model.TravelNoteModel',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: config.URL+'noteShowBySencha/NoteDetail',
            method:'get',
            reader: {
                type: 'json',
                rootProperty: 'NoteDetailData'
            }
        },
    }
});