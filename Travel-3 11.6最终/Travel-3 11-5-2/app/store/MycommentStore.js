/**
 * Created by Administrator on 2016/11/3.
 */
Ext.define('Travel.store.MycommentStore', {
    extend  : 'Ext.data.Store',
    requires: ['Travel.model.Mycomment'],
    config: {
        model: 'Travel.model.Mycomment',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: config.URL+'noteShowBySencha/MyCommentShow',
            method:'post',
            reader: {
                type: 'json',
                rootProperty: 'CommentDetailData'
            }
        },
    }
});