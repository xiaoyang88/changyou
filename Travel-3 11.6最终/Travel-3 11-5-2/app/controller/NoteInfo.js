/**
 * Created by Administrator on 2016/10/20.
 */
Ext.define('Travel.controller.NoteInfo', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            noteinfoview: {
                selector: 'noteinfoviewPanel',
                xtype: 'noteinfoview',
                autoCreate: true,
            },
            praise_X:'#praise_X',
            collect_X:'#collect_X'
        },
        control:
        {
            praise_X:{
                tap:'praise'
            },
            collect_X:{
                tap:'collect'
            },

        },

        routes: {
            'noteinfo/:value':'showNoteInfo'
        }
    },
    praise:function () {
        if(sessionStorage.UserName!=undefined) {
            Ext.Ajax.request({
                scope: this,
                url: config.URL + 'noteShowBySencha/CommentPraise',
                params: {
                    id: sessionStorage.getItem("UserName"),  //参数
                    infoid: sessionStorage.getItem("TravelNoteId"),
                },
                success: function (response) {
                    var msg = Ext.decode(response.responseText).success;
                    if (msg == true) {
                        Ext.Msg.alert("点赞成功!");
                        $("#backButton_X").hide();
                        $("#backButton_X1").show();

                    }
                    else {
                        Ext.Msg.alert("取消点赞!");
                        $("#backButton_X").show();
                        $("#backButton_X1").hide();

                    }

                },
                error: function () {
                    Ext.Msg.alert("点赞失败");
                    this.redirectTo('shareinfodetail/' + sessionStorage.getItem("infoid") + '')
                }
            });
        }
        else {
            this.redirectTo('login')

        }
    },


    collect:function () {
        if(sessionStorage.UserName!=undefined) {
            Ext.Ajax.request({
                scope: this,
                url: config.URL + 'noteShowBySencha/CommentCollect',
                params: {
                    id: sessionStorage.getItem("UserName"),  //参数
                    infoid: sessionStorage.getItem("TravelNoteId"),
                },


                success: function (response) {
                    var msg = Ext.decode(response.responseText).success;
                    if (msg == true) {
                        Ext.Msg.alert("收藏成功!");
                        $("#collectButton_X").hide();
                        $("#collectButton_X1").show();

                    }
                    else {
                        Ext.Msg.alert("取消收藏!");
                        $("#collectButton_X").show();
                        $("#collectButton_X1").hide();

                    }

                },
                error: function () {
                    Ext.Msg.alert("收藏失败");

                }
            });
        }
        else {

            this.redirectTo('login')

        }
    },


    showNoteInfo: function (value) {
        sessionStorage.TravelNoteId=value;
        Ext.Ajax.request({
            url:config.URL+'noteShowBySencha/NoteDetail',
            scope: this,
            method:"get",
            params:{
                TravelNoteId:value   //参数
            },
            success: function (response){

                var msg = Ext.decode(response.responseText);
                     //alert(JSON.stringify(msg))
                var noteDetailTpl = new Ext.XTemplate(
                    '<tpl for="NoteDetailData">' +
                    '<div >' +
                    '<tpl for="senchapic">',
                    '<tpl if="xindex==1") >'+
                    '<img  class="noteDetailImg_H" src="'+config.URL+'upload/{.}" alt=""> </tpl>' +
                    '</tpl>' +
                    //'<img  class="noteDetailImg_H" src="public/images/main_hll/ad2.jpg" alt=""> ' +
                    '<div class="UserContent_H"> ' +
                    '<div class="DetailUserPicH_Con"><img  class="DetailUserPicH" src="'+config.URL+'upload/{UserPic}" alt=""></div> ' +
                    '<div class="DetailUser_H">' +
                    '<p class="DetailUserName_H">{UserName}</p> ' +
                    '<p class="DetailTime_H">{TravelNoteTime}</p></div>' +
                    '</div>' +
                    '<p class="DetailTname_H" id="CTname_X">【{Tname}】</p> ' +
                    '</div>' +
                    '<div class="DetailTrvaelContnet_H">{TrvaelContnet} ' +
                    /*'<tpl for="senchapic">',/!**!/
                    '<img  class="noteDetailImg_H2" src="'+config.editor+'upload/{.}" alt=""> ' +
                    '</tpl>' +*/
                    '</div>' +
                    '</div>' +
                    '</tpl>'+
                    // '<hr>' +
                    '<tpl for="NoteComment">' +
                    '<div class="pinglun_container_h">'+
                    '<div class="pinglunDiv_H">' +
                    '<img class="" src="'+config.URL+'upload/{UserPic}" alt="">' +
                    '<div id="commentUserName_x"> {UserName}</div>' +
                    '</div> ' +
                    '<div id="Comment_Contnet_X"> {Comment_Contnet}</div>' +
                    '<div id="CommentTime_X"> {CommentTime}</div>' +
                    '</div>'+
                    '</tpl>'
                );
                var tplHtml=noteDetailTpl.apply(msg);
                Ext.getCmp('noteDetailDataview').setHtml(tplHtml);
            }
        });
        Ext.Viewport.setActiveItem(this.getNoteinfoview());
    },
})