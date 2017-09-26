/**
 * Created by Administrator on 2016/10/31.
 */
Ext.define('Travel.model.Useralert', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['UserId','UserName','Upassword','Gender','TEL'],
        validations: [
            {type: 'presence',field:'UserPassword',message:'密码必须输入'},
            {type:'length',field:'UserPassword',min:6,message: '密码长度至少6位'},
            {type: 'presence',field:'UserName',message:'姓名必须输入'},
            {type: 'exclusion',field:'UserName',
                list:['admin','administrator','管理员'],
                message:'不能使用这个姓名'},
            {type:'inclusion',field:'Gender',
                list:['男','女'],
                message: '必须选择性别'},
            {type:'presence',field:'BirthDate',message: '出生日期必填'}
        ]
    }
});