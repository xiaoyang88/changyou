/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            mainview: {
                selector: '#mainviewPanel',
                xtype: 'mainview',
                autoCreate: true,
            },
            iconDenstnationBtn:'#iconDenstnation',//目的地icon
            iconQuestionBtn:'#iconQuestion',//社区icon
            iconMyhomeBtn:'#iconMyhome'//个人中心
        },
        control: {
            iconDenstnationBtn: {
                tap: 'iconDenstnationBtn_tap'
            },
            iconQuestionBtn:{
                tap:'iconQuestionBtn_tap'
            },
            iconMyhomeBtn:{
                tap:'iconMyhomeBtn_tap'
            }
        },
        routes: {
            'main':'showMainView'
        }
    },
    showMainView: function () {
        Ext.Viewport.setActiveItem(this.getMainview());
    },
    //跳转
    iconDenstnationBtn_tap:function () {
        this.redirectTo('destination')
    },
    iconQuestionBtn_tap:function () {
        this.redirectTo('question')
    },
    iconMyhomeBtn_tap: function() {
        /* var sex=  LoginView.getComponent('txt_name').getValue()*/
        var NameValue=sessionStorage.UserName

        /* Ext.Msg.alert(sex)*/

        if(sessionStorage.UserName!=undefined){

            this.redirectTo('myhome')


        }

        else {

            this.redirectTo('unmyhome')

        }

    },


})