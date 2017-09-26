/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.MyQuestion', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            myquestionView: {
                selector: '#myquestionview',
                xtype: 'myquestionview',
                autoCreate: true,
            },
            QuestionButton:'#QuestionButton_x',//首页按钮icon
            QuestionName:'#QuestionName',
            QuestionDetails:'#QuestionDetails'
        },
        control: {
            QuestionButton:{
                tap:'QuestionButtonView',
            }
        },
        routes: {
            'myquestion':'showmyquestionView',
        }
    },

    QuestionButtonView:function ()  {

        var QuestionName=this.getQuestionName().getValue()
        var QuestionDetails=this.getQuestionDetails().getValue()
        var Username=sessionStorage.UserName


        if (sessionStorage.UserName!=undefined){
            Ext.Ajax.request({
                url:config.URL+'noteShowBySencha/QuestionNote',
                method:'post',
                params:{
                    QuestionName: QuestionName,QuestionDetails:QuestionDetails,UserName:Username
                } ,
                success: function (response,success) {
                    responseText=Ext.decode(response.responseText)
                    if(responseText.success==true){
                        Ext.Msg.alert('成功', '发布成功！');
                        Ext.Viewport.setActiveItem('activityview');
                        /*        this.redirectTo('noteinfo/{TravelNoteId}')*/
                    }
                    else{

                    }
                }
            })

        }

        else {
            Ext.Msg.alert('提示', '请登录！')
            this.redirectTo('login')
        }

    },
    showmyquestionView: function () {
        Ext.Viewport.setActiveItem(this.getMyquestionView());
    }

})