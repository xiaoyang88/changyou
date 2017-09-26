/**
 * Created by Administrator on 2016/10/24.
 */

Ext.define('Travel.model.TravelNoteModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'TravelNoteId',
            'UserName',
            'UserPic',
            'Tname',
            'TravelImg',
            'TrvaelContnet',
            'TravelNoteTime',
            'senchapic'
        ],
    }
});
