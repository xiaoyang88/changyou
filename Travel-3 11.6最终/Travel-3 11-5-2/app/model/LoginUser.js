Ext.define('Travel.model.LoginUser', {
    extend: 'Ext.data.Model',
    config:{
        fields: [
            'name','sex','password',
            {name:'age',type:'int'},
            'email'
        ],
        validations: [
            {type: 'presence',field:'name',message:'用户名必须输入'},
            {type:'presence',field:'password',message : '密码必须输入'}


        ]
    }
});

