/**
 * Created by Administrator on 2016/10/15.
 */
Ext.define("Travel.controller.Search",{
    extend: 'Ext.app.Controller',
    config:{
        refs:{
            searchview:{
                selector: 'SearchView',          //视图的ID
                xtype:'SearchView',              //确定某个视图
                autoCreate: true
            },
            search_x:'#search_x'
        },
        control:{
            img_x:{
                listeners:'ImgShowSearch'
            },
        registerButton:{
                tap:'RegisterView'
            },
            search_x:{
                change:'showSearchDataView'
            }
        },
        routes:{
            'search':'showSearchView'
        }

    },
    ImgShowSearch: function() {

       /* this.redirectTo('main');*/

    },
    showSearchDataView: function() {

   
            var val=Ext.ComponentManager.get('search_x').getValue();
            if (val!=''){
                Travel.store.DestinationStore.filter('CityName',val)

        }
        /* this.redirectTo('main');*/

    },

    showSearchView:function(){
        Ext.Viewport.setActiveItem(this.getSearchview());   //(6)真正来显示 某个 页面About.js（Panel）,激活某个视图
    }
})