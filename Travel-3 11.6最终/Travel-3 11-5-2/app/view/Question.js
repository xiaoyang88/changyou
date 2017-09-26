/**
 * Created by Chen on 2016/10/22.
 */
//http://10.40.4.30:3089/upload/{UserPic}   public/images/community_cc/author2.png
var _tpl = new Ext.XTemplate(

);
Ext.define('Travel.view.Question', {
    extend: 'Ext.Panel',
    xtype: 'questionview',
    id: 'questionview',
    fullscreen: true,
    config: {
        scrollable: 'vertical',
        items: [
            {
                xtype: 'panel',
                cls: 'questioncls',
                docked: 'top',
                items: [
                    {
                        xtype: 'panel',
                        html: '<a class="question_click" href="#question"><div id="questionIco">问答 </div></a>' +
                        '<a href="#activity"><div id="activityIco">活动 </div></a>'
                    }
                ]
            },
            {
                xtype: 'panel',
                html: '<a href="#myquestion" style="text-decoration: none;"><div class="myquestion_style">我要提问</div></a>'
            },
            {
                xtype: 'dataview',
                style: 'width:100%;height:5000px;z-index: 2',
                store: 'QuestionStore',
                id: 'Questionpanel',
                itemTpl: '<a style="text-decoration: none;color: black" href="#questionFirst/{QuestionId}">' +
                '<div class="wenda_Container_H">' +    /*' + config.AdminURL + 'upload/{.}*/
                '<div ><img class="Question_UserPic" src="public/images/community_cc/author2.png" >' +
                '<span class="Question_author_name">{UserName}</span>' +
                '</div>' +
                '<div class="QuestionName_H">{QuestionName}</div>' +
                '<div class="Question_description">{QuestionContent:ellipsis(150)}</div>' +
                '<div class="QuestionTime_H">{QuestionTime}</div>' +
                '</div></a>'
            },
            {
                xtype: 'toolbar',
                id: 'navToolBarPanel',
                docked: 'bottom',
                items: [
                    {
                        id: "iconHome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_home1.png" alt=""><div class="M_icon_H2">首页</div>'
                    },
                    {
                        id: "iconDenstnation",
                        html: '<img class="toolImg"  src="public/images/main_hll/icon_mudide1.png" alt=""><div class="M_icon_H2">目的地</div> '
                    },
                    {
                        id: "iconQuestion",
                        html: '<img class="toolImg"   src="public/images/main_hll/icon_talk2.png" alt=""><div class="M_icon_H">社区</div>'

                    },
                    {
                        id: "iconMyhome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_me1.png" alt=""><div class="M_icon_H2">我的</div>'
                    },
                ],
            },
        ]
    }
});
