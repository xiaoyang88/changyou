$(document).ready(function(){
       //头部菜单
//       $(".menu1").hover(function(){
//            $(this).find("dd:first").show();
//	    $(this).addClass("on");
//        },function(){
//            $(this).find("dd:first").hide();
//	    $(this).removeClass("on");
//        });
//       
       $(".shouye-logobot").css("display","none"); 
       $('.shouye-logo').hover(function(){           
	      $('.shouye-logobot').slideToggle();
       });
       
       //亦舒一隅
       var $tab_li = $('.ysyy-menu ul #tbs');
	$tab_li.click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $tab_li.index(this);
		$('div.pro-cont-boxs > div').eq(index).show().siblings().hide();
	});
        //商品页显示活动
        //$('.promotion').hover(function(){             
        //     $('.promotion').addClass("on");
        //     $('.buy-price').css("padding-top","72px");
        //      },function(){
        //     $('.promotion').removeClass("on");  
        //});
        
         //商品页搭配
        var $tab_li1 = $('.buy-dapei-bt ul #tbs');
	$tab_li1.click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $tab_li1.index(this);
		$('div.dapeis > div').eq(index).show().siblings().hide();
	});
        //商品页详情、客户评价
        var $tab_li2 = $('.buy-menu #tbs');
	$tab_li2.click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $tab_li2.index(this);
		$('div.goodsinfos > div').eq(index).show().siblings().hide();
	});
        //结算页面
       $('.add_xinxi_left').click(function(){
             $('.all_add').css("height","auto");
             $('.add_xinxi_left').html('<a href="user.php?act=address_list" target="_blank" >管理收货地址</a>')
              }
        );
       $('.add_xinxi_right').click(function(){
             $('.add_newaddress').css("display","block");
             $('.add_xinxi_right').html('')           
             
        });
       $('.tit_r').click(function(){
             $('.add_newaddress').css("display","none");
             $('.add_xinxi_right').html('新增收货地址');             
        });    
       
});