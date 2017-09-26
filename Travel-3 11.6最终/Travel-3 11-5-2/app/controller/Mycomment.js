/**
 * Created by Administrator on 2016/10/30.
 */
Ext.define('Travel.controller.Mycomment', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mycommentview: {
                selector: 'mycommentviewPanel',
                xtype: 'mycommentview',
                autoCreate: true,
            },
        },
        control: {},
        routes: {
            'mycomment':'showMycommentView'
        }
    },
    mycomment: function () {
        if (sessionStorage.UserName != undefined) {
            Ext.Ajax.request({
                scope: this,
                params: {
                    id: sessionStorage.getItem("UserName"),  //参数
                },
                success: function () {
                    this.redirectTo('mycomment/' + sessionStorage.getItem("UserName") )
                }
            });
        }
    },

    showMycommentView: function () {
        var name= sessionStorage.UserName;
        /*alert(name);*/
        Ext.Ajax.request({
            url: config.URL + 'noteShowBySencha/MyCommentShow',
            scope: this,
            method: "post",
            params: {
                UserName:sessionStorage.UserName //name参数
            },
            success: function (response) {
                /* alert(response.responseText);*/
                var msg = Ext.decode(response.responseText).mycomment;
                var noteDetailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<a style="text-decoration: none;color: black" href="#questionFirst/{QuestionId}">' +
                    '<div class="wenda_Container_H">' +    /*' + config.AdminURL + 'upload/{.}*/
                    '<div><img class="Question_UserPic" src="public/images/community_cc/author1.png" >' +
                    '<span class="Question_author_name">{UserName}</span>' +
                    '</div>'+
                    '<div class="QuestionName_H">{QuestionName}</div>'+
                    '<div class="Question_description">{QuestionContent:ellipsis(200)}</div>'+
                    '<div class="QuestionTime_H">{QuestionTime}</div>'+
                    '</div></a>',
                    '</tpl>'
                );
                var tplHtml = noteDetailTpl.apply(msg);
                Ext.getCmp('commentDetailDataviews').setHtml(tplHtml);
            }
        });
        Ext.Viewport.setActiveItem(this.getMycommentview());
    },
    /*showMycommentView: function () {
        Ext.Viewport.setActiveItem(this.getMycommentview());
    },*/
})