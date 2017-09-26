

Ext.define('Travel.view.Comment', {
    extend: 'Ext.Panel',
    xtype: 'CommentView',
    id:'CommentViewPanel',
    scrollable:'vertical',
    config: {
       items:[
           {
               xtype:'panel',
               cls:'CommnetPanel_x',
              items: [
               /* {
                xtype: 'panel',
                dock: 'top',
                style:'background:#11BF79',
                 html:'<div id="divC_x"><div id="divCommnet_X"><a href="" ><img src="public/images/destination_xzl/back.png"></a>' +
                 ' 我的回复</div></div>'
             
          

            
           },*/
                  {
                      xtype: 'panel',
                      dock: 'top',
                      style: 'background:#1DCDAD;height:50px',
                      html: '<div id="divH_x">' +
                      '<div id="divHtml_X">' +
                      '<a href="#unmyhome" >' +
                      '<img class="divH_z" src="public/images/myhome_zxy/back.png">' +
                      '</a>' +
                      '<span class="divH_z_HH">评论</span>' +
                      '</div>'
                      /* '<a href="#register"><div id="divh_x">注册</div></a></div>'*/
                  },
                  {
                      xtype:'textareafield',
                      id:'Textarea_x',
                      name:'TextareaValue'
                  },
                  {
                      xtype:'panel',

                      defaults:{
                          xtype:'button'
                      },
                      items:[
                          {
                              xtype: 'button',//添加一个登录按钮，
                              text: '评论',
                              id:'CommentButton_x',
                          },
                      ]
                  }
              ]



    }
           ]
    }
});
