var NoteShowtpl = new Ext.XTemplate(
    '<tpl for=".">'+
    '<a class="noteinfo_a" href="#noteinfo/{TravelNoteId}">' +
    '<div class="noteContainer"> ' +
    '<tpl for="senchapic">',
    '<tpl if="xindex==1") >'+
    '<img class="NoteImg" src="'+config.URL+'upload/{.}" alt=""></tpl>' +
    '</tpl>' +
    '<div class="note_userpic"> ' +
    '<img class="userpicH" src="'+config.URL+'upload/{UserPic}"><!--src="http://10.40.4.27:3089/upload/{UserPic}"-->  ' +
    '</div> ' +
    '<div> ' +
            '<p class="UserName">{UserName}</p> ' +
            '<p class="noteTitle">【{Tname:ellipsis(12)}】</p>' +
            '<div class="noteContent">{TrvaelContnet:ellipsis(42)}</div> ' +
    '</div> ' +
    '</div> ',
    '</a>',
    '</tpl>'
);

Ext.define('Travel.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'mainview',
    config: {
        tabBarPosition: 'bottom',
        id: 'mainviewPanel',
        scrollable:'vertical',
        fullscreen: true,
        items: [
            {
                title: '首页',
                iconCls: 'Hhome',
                baseCls:'Hhome_bg',
                styleHtmlContent: true,
                scrollable: true,
            },
            //顶部导航
            {
                xtype: 'panel',
                id: 'TopPane1',
                docked: 'top',
                items: [
                    //搜索栏
                    {
                        xtype: 'panel',
                        id: 'logo',
                    },
                    {
                        xtype: 'panel',
                        id: 'searchbar',
                        html: '<input type="text" class="search_input"><div class="searchIcon"></div>'
                    },
                ],
            },
            //轮播
            {
                xtype: 'carousel',
                id: 'myCarousel',
                height:210,
                direction:'horizontal',
                items: [
                    {
                        xtype: 'panel',
                        id: 'carouselItem1',
                        html: '<img src="public/images/main_hll/ad1.jpg" alt="" class="carouselImg" >'
                    },
                    {
                        xtype: 'panel',
                        id: 'carouselItem2',
                        html: '<img src="public/images/main_hll/ad2.jpg" alt="" class="carouselImg" >'
                    },
                    {
                        xtype: 'panel',
                        id: 'carouselItem3',
                        html: '<img src="public/images/main_hll/ad7.jpg" alt="" class="carouselImg" >'
                    },
                    {
                        xtype: 'panel',
                        id: 'carouselItem4',
                        html: '<img src="public/images/main_hll/ad4.jpg" alt="" class="carouselImg" >'
                    }
                    ,
                    {
                        xtype: 'panel',
                        id: 'carouselItem5',
                        html: '<img src="public/images/main_hll/ad6.jpg" alt="" class="carouselImg" >'
                    }
                ]
            },
            //热门游记游记
            {
                xtype:'panel',
                id:'mainNoteview',
                items:[
                    {
                        xtype:'panel',
                        id:'mainNoteshow',
                        html:' <div class="hotIcon"></div><span class="hotTitle">热门游记</span>' +
                                '<span class="hotTitle2">最新最热的精彩游记</span>',
                    },
                    // 游记展示
                    {
                        xtype: 'dataview',
                        scrollable:false,
                        style: 'width:100%;height:5000px;',
                        store: 'TravelNoteStore',
                        layout:'fit',
                        itemTpl: NoteShowtpl,
                    }
                ]
            },
            //底部tab
            {
                xtype: 'toolbar',
                id: 'navToolBarPanel',
                docked: 'bottom',
                items: [
                    {
                        id: "iconHome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_home2.png" alt=""><div class="M_icon_H">首页</div>'
                    },
                    {
                        id: "iconDenstnation",
                        html: '<img class="toolImg"  src="public/images/main_hll/icon_mudide1.png" alt=""><div class="M_icon_H2">目的地</div> '
                    },
                    {
                        id: "iconQuestion",
                        html: '<img class="toolImg"   src="public/images/main_hll/icon_talk1.png" alt=""><div class="M_icon_H2">社区</div>'

                    },
                    {
                        id: "iconMyhome",
                        html: '<img class="toolImg" src="public/images/main_hll/icon_me1.png" alt=""><div class="M_icon_H2">我的</div>'
                    }
                ],
            },
        ],
    },
});
setInterval(function () {
    var carousel = Ext.getCmp("myCarousel");
    Ext.getCmp("myCarousel").next();
    console.log(carousel.getActiveIndex());
    if (carousel.getActiveIndex() == carousel.getMaxItemIndex()) {
        carousel.setActiveItem(0);
    }
},2000);


