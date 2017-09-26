/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.Question', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            questionview: {
                selector: '#questionview',
                xtype: 'questionview',
                autoCreate: true,
            },
            ///iconHomeBtn:'#iconHome'//首页按钮icon
        },
        control: {
           /* iconHomeBtn:{
                tap:'iconHomeBtn_tap',
            }*/
        },
        routes: {
            'question':'showquestionView',
            'myquestionBack':'showquestionView',
        }
    },
    showquestionView: function () {
        Ext.Viewport.setActiveItem(this.getQuestionview());
    },
    iconHomeBtn_tap:function () {
        this.redirectTo('main');
    }

})