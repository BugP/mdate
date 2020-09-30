$(function(){
    //视频封面弹出层
	$(function(){
   	 $(".stui-vodlist li").hover(function(){
		    $(this).addClass("on");
		},
		function(){
		    $(this).removeClass("on");
		});
		if(history.length > 0 && document.referrer){
			$(".ff-goback").show();
			$('.ff-goback').attr('href','javascript:history.go(-1);');
		}else{
			$(".ff-goback").hide();
		}
	});

    $(".stui-header__user .shu_lm .a1").hover(function(){
        $(".site_user_dmenu").show();
    });
    $(".stui-header__user .shu_his").hover(function(){
        $(".site_user_dmenu").hide();
    });
    $(".site_user_dmenu").click(function(){
        $(this).hide();
    });

    //展开菜单
    $(".stui-header__smenu a").click(function(){
        if($(".stui-header__menu").css("display")=="none"){
            $(".stui-header__menu").fadeIn();
			$(this).addClass("cur");
        }else{
            $(".stui-header__menu").fadeOut();
			$(this).removeClass("cur");
        }
    });

    //搜索框热搜
	function fbbox(fbboxID,ObjID){
	$(fbboxID).click(function(){
		$(ObjID).show();
	});
	$(ObjID).hover('',function(){
		$(ObjID).hide();
	});
	$(fbboxID).keydown(function(){
		$(ObjID).hide();
	});
	$(ObjID).find('li').click(function(){
		$(ObjID).hide();
	});
	}
	fbbox('.ff-search-top','#hotwords');
	
})