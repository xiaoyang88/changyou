/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.ActivitySecond', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            activitySecondView:{
                selector: '#activitysecondview',
                xtype: 'activitysecondview',
                autoCreate: true,
            }
        },
        routes: {
            'activityFrist/:value':'showActivitySencondView',
        },
    },
    showActivitySencondView: function (value) {
        // alert('111111');
        Ext.Ajax.request({
            url:config.URL+'noteShowBySencha/ActivityDetailShow',
            scope: this,
            method:"get",
            params:{
                ActivityId:value   //参数
            },
            success: function (response){
                // alert(response.responseText);
                var msg = Ext.decode(response.responseText).ActivityDetailData;
                var activityDetailTpl = new Ext.XTemplate(
                    '<tpl for=".">',
                    '<div >' ,     //' + config.AdminURL + 'upload/{UserPic}
                    '<div class="ActivityContainer_HH">' +
                    '<img class="Activity_UserPic_HH" src="public/images/community_cc/author2.png"/>' +
                    '<span>{ManagerName}</span>' +
                    '</div >' ,
                    '<div class="wendaActivityName_HH">{ActivityTitle}</div>' ,
                    '<div class="wendaActivityContent_HH">{ActivityContent}</span></div>',
                    '<div ><span>开始时间：</span><span style="color: lightgrey;margin-left: 5px"">{StartTime}</span></div>',
                    '<div ><span>结束时间：</span><span style="color: lightgrey;margin-left: 5px"">{EndTime}</span></div>',
                    '<div >' ,
                    '<tpl for="ActPicSencha">' ,
                    '<img src="' + config.AdminURL + 'upload/{.}" style="width: 100%;margin-top:8px;height: 200px;float: left;"/>' ,
                    '</tpl><br>' ,
                    '</div>' ,
                    '</div>',
                    '</tpl>'
                );
                var tplHtml=activityDetailTpl.apply(msg);
                Ext.getCmp('panel2').setHtml(tplHtml);
            }
        });
        Ext.Viewport.setActiveItem(this.getActivitySecondView());
    },
})