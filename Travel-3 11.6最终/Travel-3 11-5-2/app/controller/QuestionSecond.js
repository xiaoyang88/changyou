/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.QuestionSecond', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            myQuestionView:{
                selector: '#myquestionview',
                xtype: 'myquestionview',
                autoCreate: true,
            },
            questionSecondView:{
                selector: '#questionsecondview',
                xtype: 'questionsecondview',
                autoCreate: true,
            }
        },
        routes: {
            'myquestion':'showMyQuestionView',
            'questionFirst/:value':'showQuestionSecondView',
        },
    },
    showMyQuestionView: function () {
        Ext.Viewport.setActiveItem(this.getMyQuestionView());
    },
    showQuestionSecondView: function (value) {
        Ext.Ajax.request({
            url:config.URL+'noteShowBySencha/QuestionDetailShow',
            scope: this,
            method:"get",
            params:{
                QuestionId:value   //参数
            },
            success: function (response){

                var msg = Ext.decode(response.responseText);
                //var msg2 = Ext.decode(response.responseText).QuestionInfo;
                // alert(JSON.stringify(Ext.decode(response.responseText)));
                //alert(JSON.stringify(msg));
                //alert(JSON.stringify(msg2))
                var questionDetailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<tpl for="QuestionInfo">',
                    '<div class="wendaContainer_H">',
                    '<div><img class="Question_UserPic" src="' + config.URL + 'upload/{UserPic}">' +
                    '<span>{UserName}</span>' +
                    '</div>',
                    '<div class="wendaQuestionName_HH">{QuestionName}</div>',
                    '<div class="wendaQuestionContent_HH">{QuestionContent:ellipsis(200)}</div>',
                    '<div class="wendaQuestionTime_HH">发布于&nbsp;{QuestionTime}' +
                    '</div>',
                    '</tpl>',
                    
                    '<div style="background-color: ghostwhite;height: 15px;width: 100%;"></div>',
                    '<tpl for="QuestionDetailData">',
                    '<div  style="line-height: 28px;margin:10px 15px 10px 15px;">',
                    '<img class="QuestionSecond_UserPic" src="' + config.URL + 'upload/{UserPic}"/>',
                    '<span style="margin-left:8px;font-size: 16px">{UserName}</span>',
                    '<div class="AnswerContent_HH">{AnswerContent}</div>',
                    '<div class="AnswerTime_HH">回复于&nbsp;{AnswerTime}</div>' ,
                    '</div>',
                    '</tpl>',
                    '</tpl>'
                );

                var tplHtml=questionDetailTpl.apply(msg);
                Ext.getCmp('questionDetailTpl2').setHtml(tplHtml);

            }

        });
        Ext.Viewport.setActiveItem(this.getQuestionSecondView());
    },
})