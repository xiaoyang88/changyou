Ext.define('Travel.view.MyAlbum', {
    extend: 'Ext.Panel',
    xtype: 'MyAlbumView',
    id: 'MyAlbumViewPanel',
    scrollable: 'vertical',
    config: {
        items: [
            {
                xtype: 'panel',
                id: 'status',
                dock: 'top',
                style: 'background:#1DCDAD;height:50px',
                html: '<div id="divH_x">' +
                '<div id="divHtml_X">' +
                '<a href="#myhome" >' +
                '<img  src="public/images/main_hll/back.png"></a>' +
                '<span>我的相册</span> ' +
                '<a href="#uploadPic">' +
                '<div id="divMyAlbum_x"><img src="public/images/destination_xzl/upload.png"></div></a>'+
                '</div>' +
                    '</div>'
            },
            {
                xtype: 'dataview',
                id: 'noteDetailDataview',
                scrollable: true,
                style: 'width:100%;height:4000px',
            },

        ]


    }
});
