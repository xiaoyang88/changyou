/**
 * Created by ml on 2016/10/16.
 */
Ext.define('Recipe.controller.Update', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            updateview: {
                selector: 'updateview',
                xtype: 'updateview',
                autoCreate: true
            },
            backmineButton: '#backmineButton',
            updateUserInfoButton: '#updateUserInfoButton',
            outButton: '#outButton'
        },
        control: {
            backmineButton: {
                tap: 'showPersonView'
            },
            updateUserInfoButton: {
                tap: 'updateUserInfo'
            },
            outButton: {
                tap: 'exit'
            }
        },
        routes: {
            'update': 'showUpdateView'
        }
    },
    showPersonView: function () {
        this.redirectTo('person');
    },
    updateUserInfo: function () {
        var updateUserForm = Ext.getCmp('mineFormPanel');
        var model = Ext.create('Recipe.model.UpdateUser', updateUserForm.getValues());
        var valResult = model.validate();
        if (valResult.isValid())
            updateUserForm.submit({
                success: function () {
                    Ext.Msg.alert('成功', '修改成功。');
                },
                failure: function (form, result) {
                    var message = "";
                    Ext.each(result.errors, function (rec, i) {
                        message += rec.message + "<br>";
                    });
                    Ext.Msg.alert("失败", message);
                }
            });
        else {
            var message = "";
            Ext.each(valResult.items, function (rec) {
                message += rec.getMessage() + "<br>";
            });
            Ext.Msg.alert("失败", message);
        }
    },
    showUpdateView: function () {
        Ext.Viewport.setActiveItem(this.getUpdateview());
    }
});
