/**
 * Created by Administrator on 2016/10/25.
 */
Ext.define('Travel.controller.GoodsMall', {
    extend: 'Ext.app.Controller',
    config: {     //为控制器作配置，增加装备
        refs: {		//找到要操作的Id
            
            goodsmallview:{
                selector:'#goodsmallviewPanel',
                xtype:'goodsmallview',
                autoCreate: true,
            },
            SubButton:'#mallPanel'
        },
        control: {  //增加动作
            SubButton:{
                tap:'MallView'
            }
        },
        routes:{
            'goodsmall/:GoodId':'showGoodsMallView'
        } //跳转到详情
    },
    MallView: function () {
        if(sessionStorage.UserName!=undefined){
            var username=sessionStorage.UserName;
            var GoodId = sessionStorage.GoodId;
            Ext.Ajax.request({
                url:config.URL+'NoteShowBySencha/Userquerygoods',
                scope: this,
                method:'post',
                params:{
                    GoodId:GoodId,UserName:username //参数
                },
                success:function (response) {
                    //alert(response.responseText)
                    var msg = Ext.decode(response.responseText).GoodIntegral;
                    var msg1 = Ext.decode(response.responseText).userIntegral;
                    alert("兑换该商品需要："+msg+" 积分")
                    alert("您当前积分为："+msg1)
                    if(msg>msg1){
                        alert('兑换失败');
                        this.redirectTo('goods')
                    }else {
                        alert('兑换成功');
                    }
                }
            });
        }
        else {
           /* this.redirectTo('myhome')*/
        }
    },
    showGoodsMallView:function (value) {
        sessionStorage.GoodId=value;
        Ext.Ajax.request({
            url:config.URL+'NoteShowBySencha/QueryOne',
            scope: this,
            method:'get',
            params:{
                GoodId:value   //参数
            },
            success: function (response){

                // alert(response.responseText);
                var msg = Ext.decode(response.responseText).goods;
                console.log(msg);
                var goodmallTemplate = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div class="Img11_z">',
                    '<div class="Img21_z"><img class="Img23_z" src="'+config.upload+'{GoodPic}"/></div>',
                    '<div class="infomall_z"><div class="info11_z">{GoodName}</div>',
                    '<div class="info21_z">积分:{GoodIntegral}</div></div>',
                    '<div class="info12_z"><hr><span class= "info121_z">商品详情 DETAILS</span><div class="info122_z"><p >{GoodsDescribe:ellipsis(1000)}</p></div></div>',
                    '<div class="info2_z">商品介绍<p><img class="img22_z" src="'+config.upload+'{GoodsPic}"/></p></div>' ,
                    '</div>',
                    '</tpl>'
                );
                var tplHtml=goodmallTemplate.apply(msg);
                Ext.getCmp('goodsmallDataview').setHtml(tplHtml);
            }
        });
        Ext.Viewport.setActiveItem(this.getGoodsmallview())

    }
});

