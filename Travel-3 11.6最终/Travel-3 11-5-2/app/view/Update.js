/**
 * Created by ml on 2016/10/27.
 */
Ext.define('Recipe.view.Update', {
    extend: 'Ext.Panel',
    xtype: 'updateview',
    config: {
        id: 'updateview',
        baseCls: 'updateview',
        style: 'background-color:white',
        // layout: 'fit',
        scrollable: {
            direction: 'vertical',
            indicators: false
        },
        items: [
            {
                xtype: 'toolbar',
                id: 'toolbarAbout',
                baseCls: 'toolbarAbout',
                docked: 'top',
                items: [
                    {
                        xtype: 'button',
                        id: 'backmineButton'
                    },
                    {
                        xtype: 'panel',
                        id: 'minePanel',
                        cls: 'minePanel',
                        html: '<div >编辑个人资料</div>'
                    },
                    {
                        xtype: 'button',
                        id: 'outButton'
                    }
                ]
            },
            {
                xtype: 'panel',
                id: 'updatePanel',
                baseCls: 'updatePanel',
                items: [
                    {
                        xtype: 'formpanel',
                        id: 'mineFormPanel',
                        baseCls: 'mineFormPanel',
                        name: 'mineFormPanel',
                        url: config.URL + 'updateMyInfo?userId=123456',
                        // url: config.URL + 'updateMyInfo?userId=' + sessionStorage.getItem("session_userId"),
                        scrollable: false,
                        items: [
                            {
                                xtype: 'dataview',
                                store: 'PersonStore',
                                scrollable: false,
                                style: 'height:100px;width:100%;background-color: white',
                                itemTpl: '<div id="update-header" >' +
                                '<tpl for="personInfo">' +
                                '<div id="update-header-left">' +
                                '<a href="#updateHead/{userId}">' +
                                '<img src="' + config.IMAGEURL + '{userPic}" style="border-radius: 20%"/>' +
                                '</a>' +
                                '</div>' +
                                '<div id="update-header-right">' +
                                '<span style="margin-left: 10px">{userName}</span>' +
                                '</div>' +
                                '</tpl>' +
                                '</div>'
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'userPassword',
                                name: 'userPassword',
                                label: '密码',
                                labelAlign: 'top',
                                required: true,
                                clearIcon: true
                            },
                            {
                                xtype: 'textfield',
                                id: 'userName',
                                name: 'userName',
                                label: '姓名',
                                labelAlign: 'top',
                                required: true,
                                clearIcon: true
                            },
                            {
                                xtype: 'selectfield',
                                options: [
                                    {text: "男", value: '男'},
                                    {text: "女", value: '女'}
                                ],
                                id: 'userSex',
                                name: 'userSex',
                                label: '性别',
                                labelAlign: 'top',
                                required: true
                            },
                            {
                                xtype: 'datepickerfield',
                                id: 'userBirthday',
                                name: 'userBirthday',
                                labelAlign: 'top',
                                label: '出生日期',
                                picker: {
                                    yearFrom: 2000,
                                    yearTo: new Date().getFullYear()
                                },
                                value: new Date(),
                                dateFormat: 'Y年m月d日',
                                required: true
                            },
                            {
                                xtype: 'textfield',
                                id: 'userIntroduce',
                                name: 'userIntroduce',
                                label: '个人简介',
                                labelAlign: 'top',
                                required: true,
                                clearIcon: true
                            },
                            {
                                xtype: 'button',
                                id: 'updateUserInfoButton',
                                baseCls: 'add-logButton',
                                iconAlign: 'top',
                                iconCls: 'bt_kt',
                                text: '保存'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
