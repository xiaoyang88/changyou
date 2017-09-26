
Ext.define('Travel.model.Question', {
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
