/**
 * Created by Administrator on 2016/11/3.
 */
Ext.define('Travel.model.Mycomment', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'QuestionId',
            'UserPic',
            'UserName',
            'QuestionTime',
            'QuestionName',
            'QuestionContent',
            'QuestionCount',
            'AnswerContent',
            'AnswerTime',
            'QauserName'
        ],
    }
});
