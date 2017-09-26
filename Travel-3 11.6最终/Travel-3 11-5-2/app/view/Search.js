Ext.define('Travel.view.Search', {
    extend: 'Ext.Panel',
    xtype: 'SearchView',
  id:'SearchView',
    config: {
        tabBarPosition: 'bottom',
        items: [
             {
                    docked: 'top',
                    xtype: 'panel',
                    cls:'toolbar_x',
               items:{
                        xtype: 'searchfield',
                        id:'search_x',
                        name:'search_x',
                   placeHolder:'请输入目的地',

                    }

             

            },        /*   {
                xtype: 'dataview',
                style: 'width:100%;height:100%',
                store: 'DestinationStore',

                itemTpl:tpl,
                emptyText: '没有数据'


            },*/
      /*      {
                title: 'Get Started',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },

                ]
            }*/
        ]
    }
});
