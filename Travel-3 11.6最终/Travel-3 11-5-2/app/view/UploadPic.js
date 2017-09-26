/**
 * Created by Administrator on 2016/10/8.
 */

Ext.define("Travel.view.UploadPic", {
    extend: 'Ext.form.Panel',
    xtype: 'UploadPic',
    config: {
        fullscreen: true,
        id: 'UploadPic',
        scrollable: 'vertical',
        items: [
            {
                xtype:'panel',
                id: 'status',
                dock: 'top',
                style:'background:#11BF79',
                html:'<div id="divH_x"><div id="divHtml_X"><a href="#myalbum" ><img src="public/images/destination_xzl/back.png"></a>' +
                '</div></div>'
            },


            {
                xtype: 'filefield',
                name:'files',
                id:'Myfile',
                // cls:'form-control',
                width:150,
                multiple:true,
            },

       
         
         
         
      
            {
                xtype: 'button',
                id:'uploadBtn',
                //name: 'registerBtn',
                cls: 'btn1',
                text: "上传",
            }
    
        ]
    }
})

