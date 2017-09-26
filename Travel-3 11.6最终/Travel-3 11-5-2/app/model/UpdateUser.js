/**
 * Created by ASUS-PC on 2016/10/28.
 */
Ext.define('Recipe.model.UpdateUser', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            'userPassword',
            'userName',
            'userSex',
            'userBirthday',
            'userIntroduce',
            'userPic'
        ],
        validations: [
            {type: 'presence', field: 'userPassword', message: '密码不能为空。'},
            {type: 'length', field: 'userPassword', min: 6, message: '密码长度不能少于6位。'},
            {type: 'presence', field: 'userName', message: '姓名不能为空。'},
            {
                type: 'exclusion',
                field: 'userName',
                list: ['admin', 'administrator', '管理员'],
                message: '不能使用这个姓名。'
            },
            {type: 'presence', field: 'userBirthday', message: '出生日期不能为空。'},
            {type: 'presence', field: 'userIntroduce', message: '个人简介不能为空。'},
        ]
    }
});