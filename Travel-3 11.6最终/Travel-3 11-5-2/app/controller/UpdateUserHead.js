/**
 * Created by ASUS-PC on 2016/10/28.
 */
Ext.define('Recipe.controller.UpdateUserHead', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            updateuserheadview: {
                selector: 'updateuserheadview',
                xtype: 'updateuserheadview',
                autoCreate: true
            },
            updateUserHeadButton: '#updateUserHeadButton',
            backupdateButton: '#backupdateButton'
        },
        control: {
            updateUserHeadButton: {
                tap: 'updateHead'
            },
            backupdateButton: {
                tap: 'showUpdateView'
            }
        },
        routes: {
            'updateHead/:value': 'showUpdateHeadView'
        }
    },
    showUpdateView: function () {
        this.redirectTo('update');
    },
    showUpdateHeadView: function () {
        Ext.Ajax.request({
            url: config.URL + 'queryUserHead',
            scope: this,
            method: "get",
            params: {
                // userId: sessionStorage.getItem("session_userId"),
                userId: '123456'
            },
            success: function (response) {
                // alert(response.responseText);
                var msg = Ext.decode(response.responseText).UserHead;
                var UserHeadTemplate = new Ext.XTemplate([
                    '<tpl for=".">' +
                    '<div style="widows: 100%;overflow: hidden" >' +
                    '<img src="' + config.IMAGEURL + '{userPic}" style="width:100%;height: 300px">' +
                    '</div>',
                    '</tpl>'
                ]);
                var tplHtml = UserHeadTemplate.apply(msg);
                Ext.getCmp('userHead').setHtml(tplHtml);
            }
        });
        Ext.Viewport.setActiveItem(this.getUpdateuserheadview());
    },
    updateHead: function () {
        var formData = new FormData($("#updateUserHead")[0]);
        $.ajax({
            url: config.URL + 'updateMyHead?userId=123456',
            // url: config.URL + 'updateMyHead?userId=' + sessionStorage.getItem("session_userId"),
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            scope: this,
            success: function (data) {
                if (200 === data.code) {
                    Ext.Msg.alert("上传成功。");
                    this.redirectTo('updateHead/123456');
                    // this.redirectTo('updateHead/' + sessionStorage.getItem("session_userId"));
                }
                else {
                    Ext.Msg.alert("上传失败。");
                }
            },
            error: function () {
                Ext.Msg.alert("Internal Server Error");
            }
        });
    },

});
