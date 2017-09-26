/**
 * Created by Administrator on 2016/10/15.
 */
Ext.define("Travel.controller.Comment",{
    extend: 'Ext.app.Controller',
    config:{
        refs:{
            CommentView:{
                selector: '#CommentViewPanel',          //视图的ID
                xtype:'CommentView',              //确定某个视图
                autoCreate: true
            },
            CommentButton:'#CommentButton_x',
            Textarea_x:'#Textarea_x'
        },
        control:{

            CommentButton:{
                tap:'CommentButtonView'
            }

        },
        routes:{
            'comment':'showCommentView'
        }
    },

    CommentButtonView:function ()  {

      var CommentValue=this.getTextarea_x().getValue()
    var Username=sessionStorage.UserName
var TravelNoteId =sessionStorage.TravelNoteId;

        if (sessionStorage.UserName!=undefined){
            Ext.Ajax.request({
         url:config.URL+'noteShowBySencha/CommentNote',
                method:'post',
                params:{
                   Commentvalue:CommentValue,Username:Username,CommentNoteId:TravelNoteId
                } ,
                success: function (response,success) {
                    responseText=Ext.decode(response.responseText)
                    if(responseText.success==true){
                        Ext.Msg.alert('成功', '发布成功！');
                        Ext.Viewport.setActiveItem('mainview');
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



    showCommentView:function(){
        Ext.Viewport.setActiveItem(this.getCommentView());   //(6)真正来显示 某个 页面About.js（Panel）,激活某个视图
    }
})