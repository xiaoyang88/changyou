/**
 * Created by ASUS-PC on 2016/10/28.
 */
Ext.define('Recipe.view.UpdateUserHead', {
    extend: 'Ext.Panel',
    xtype: 'updateuserheadview',
    config: {
        id: 'updateuserheadview',
        style:'background-color:white',
        items: [
            {
                xtype: 'toolbar',
                id: 'toolbarAbout',
                baseCls: 'toolbarAbout',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        id: 'backupdateButton'
                    },
                    {
                        xtype: 'panel',
                        id: 'minePanel',
                        cls: 'minePanel',
                        html: '<div style="margin-left: -60px;">修改个人头像</div>'
                    }
                ]
            },
            {
                xtype: 'formpanel',
                id: 'updateUserHead',
                baseCls:'updateUserHead',
                scrollable: {
                    direction: 'vertical',
                    indicators: false
                },
                items: [
                    {
                        xtype: 'panel',
                        id: 'userHead',
                        baseCls:'userHead'
                    },
                    {
                        xtype: 'filefield',
                        id: 'files',
                        name: 'files',
                        // accept: 'image',
                        fieldLabel: '上传头像'
                    },
                    {
                        xtype: 'button',
                        id: 'updateUserHeadButton',
                        text: '确认上传'
                    }
                ]
            }
        ]
    }
});