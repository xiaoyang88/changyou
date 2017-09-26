/**
 * Created by Chen on 2016/10/22.
 */

// var ActivityTemplate = new Ext.XTemplate(
//     '<div style="background-color: white;margin-bottom: 10px;border: 1px solid beige">'+
//             '<img class="QuestionSecond_UserPic" src="{UserPic}"/>'+
//             '<span style="margin-left: 20px">{UserName}</span>' +
//             '&nbsp;&nbsp;&nbsp;回复于<span style="margin-left: 10px;font-size: 14px">{AnswerTime}</span>' +
//             '<div style="margin-top: 20px;margin-left: 10px;width: 100%"><span style=";line-height: 25px;">{AnswerContent}</span></div>'+
//
//      '</div>'
// );
Ext.define('Travel.view.QuestionSecond', {
    extend: 'Ext.Panel',
    xtype: 'questionsecondview',
    fullscreen:true,
    config: {
        id:'questionsecondview',
        scrollable:'vertical',
        items: [
            {
                xtype: 'panel',
                cls:'questioncls',
                docked: 'top',
                html:'<a href="#question"><img class="questioncls_wdH" src="public/images/community_cc/wd_lt_back.png" ></a>',
            },
           {
              xtype: 'dataview',
              id:'questionDetailTpl2',
               style:'width:100%;height:2000px'
             },
        ]
    }
});
