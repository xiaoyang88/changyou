/**
 * Created by Chen on 2016/10/22.
 */

Ext.define('Travel.view.MyQuestion', {
    extend: 'Ext.Panel',
    xtype: 'myquestionview',
    id:'myquestionview',
    fullscreen:true,
    config: {
        scrollable: 'vertical',
        defaults: {styleHtmlContent: true},
        items: [
            {
                xtype: 'panel',
                cls: 'questioncls',
                docked: 'top',
                items: [
                    {
                        xtype: 'panel',
                        docked: 'top',
                        html: '<a href="#myquestionBack"><img src="public/images/community_cc/wd_lt_back.png" style="margin-top: 10px" ></a>',
                    }
                ]
            },
            {
                xtype:'panel',

                layout:{
                    type:'vbox',
                    pack:'end'
                },
                id:'formPanel_x',
                items:[
                    {
                        xtype: 'panel',
                        html:  '<div>一句话描述您的问题</div>'

                    },
                    {
                        xtype: 'textfield',
                        id:'QuestionName',
                        name : 'QuestionName',
                        placeHolder:'请输入您的问题',
                        required:true,
                        clearIcon: true,

                    },
                    {
                        xtype: 'panel',
                        html:  '<div>详细内容补充</div>'

                    },
                    {
                        xtype: 'textfield',
                        id:'QuestionDetails',
                        name : 'QuestionDetails',
                        placeHolder:'请输入详细内容',
                        required:true,
                        clearIcon: true,

                    }

                ]
            },

            {
                xtype: 'panel',
                id: 'ButtonPanel_x',
                defaults: {
                    xtype: 'button'
                },
                items: [
                    {
                        xtype: 'button',//添加一个登录按钮，
                        text: '发布问题',
                        id: 'QuestionButton_x',
                    },
                ]
            },
        ]
    }

});
