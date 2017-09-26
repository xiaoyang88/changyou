Ext.define('Travel.model.RegisterUser', {
    extend: 'Ext.data.Model',
    config:{
        fields: [
            'name','Username','password','tel',
    'sex','BirthDate'
        ],
        validations: [
            {type: 'presence',field:'name',message:'账号必须输入'},
        
            {type: 'exclusion',field:'name',
                list:['admin','administrator','管理员'],
                message:'不能使用这个姓名'},
            {type:'presence',field:'password',message : '密码必须输入'},
            {type:'length',field:'password',min:7,message: '密码长度必须超过6位'},
        ]
    }
});

