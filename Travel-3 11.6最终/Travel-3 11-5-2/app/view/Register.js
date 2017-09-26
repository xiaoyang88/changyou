Ext.define('Travel.view.Register', {
    extend: 'Ext.Panel',
    xtype: 'RegisterView',
    id: 'RegisterView',
    scrollable: 'vertical',
    config: {
        items: [
            {
                xtype: 'panel',
                cls: 'LoginPanel_x',
                items: [
                    {
                        id: 'status',
                        xtype: 'panel',
                        dock: 'top',
                        style: 'background:#1DCDAD;height:50px',
                        html: '<div id="divH_x">' +
                        '<div id="divHtml_X">' +
                        '<a href="#unmyhome" >' +
                        '<img class="divH_z" src="public/images/myhome_zxy/back.png">' +
                        '</a>' +
                        '<span class="divH_z_HH">注册</span>' +
                        '</div>'
                    },
                    /*{
                     xtype: 'panel',
                     html: '注册',
                     id: 'panelText_x'
                     },*/
                    {
                        xtype: 'panel',
                        html: '<div class="chanyou_HH_div">' +
                        '<img class="chanyou_HH" src="public/images/myhome_zxy/sencha_login.png"></div>',
                        id: 'panelText_x'
                    },
                    {
                        xtype: 'textfield',
                        id: 'txt_name',
                        name: 'name',
                        /*   label: '账号',*/
                        placeHolder: '请输入账号',
                        required: true,
                        clearIcon: true,
                        cls: 'Registerfiled_x'
                    },
                    {
                        xtype: 'passwordfield',
                        id: 'txt_password',
                        name: 'password',
                        placeHolder: '请输入密码',
                        required: true,
                        clearIcon: true,

                    },
                    {
                        xtype: 'passwordfield',
                        id: 'txt_Password',
                        cls: "txt_p",
                        name: 'password',
                        placeHolder: '请重新输入密码',
                        required: true,
                        clearIcon: true,
                    },
                    {
                        xtype: 'panel',
                        id: 'RegisterPanel_x',
                        items: [
                            {
                                xtype: 'button',
                                text: '注册',
                                id: 'RegisterButton',
                            }]
                    },
                    {
                        xtype: 'panel',
                        items: [
                            {
                                xtype: 'button',
                                text: '取消注册',
                                id: 'unregister_H',
                            }]
                    }
                ]
            }]
    }
});