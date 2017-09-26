Ext.define('Travel.view.Login', {
    extend: 'Ext.Panel',
    xtype: 'LoginView',
    id: 'LoginViewPanel',
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
                        '<span class="divH_z_HH">登录</span>' +
                        '</div>' 
                       /* '<a href="#register"><div id="divh_x">注册</div></a></div>'*/
                    },
                    {
                        xtype: 'panel',
                        html: '<div class="chanyou_HH_div"><img class="chanyou_HH" src="public/images/myhome_zxy/sencha_login.png"></div>',
                        id: 'panelText_x'
                    },
                    {
                        xtype: 'panel',
                        layout: {
                            type: 'vbox',
                        },
                        id: 'formPanel_x',
                        items: [
                            {
                                xtype: 'textfield',
                                id: 'txt_name',
                                name: 'name',
                                placeHolder: '请输入用户名',
                                required: true,
                                clearIcon: true,
                                /*     cls:'inputLogin_x'*/
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'txt_password',
                                name: 'password',
                                /*  label: '密码',*/
                                placeHolder: '请输入密码',
                                required: true,
                                clearIcon: true,
                                /*    cls:'inputLogin_x'*/
                            }

                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'ButtonPanel_x',
                        defaults: {
                            xtype: 'button'
                        },
                        items: [
                            {
                                xtype: 'button',//添加一个登录按钮，
                                text: '登录',
                                id: 'button_x',
                            },
                        ]
                    },
                    {
                        xtype: 'panel',
                        id: 'Buttonregister_H',
                        defaults: {
                            xtype: 'button'
                        },
                        items: [
                            {
                                xtype: 'button',
                                text: '注册',
                                id: 'Registerbutton_x',
                                /*style: 'margin :2em 1em 0 3.5em',*/
                            },
                        ]
                    }
                ]
            }
        ]


    }
});
