//加载数据
Ext.define('Travel.store.DestinationStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Destination'],
    config: {
        model: 'Travel.model.Destination',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'Destination.json',
            reader: {
                type: 'json',
                rootProperty: 'Destinations'
            }
        },

    }
});