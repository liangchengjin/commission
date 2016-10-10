
/****************************************
 *			   按钮颜色     			    *
 ****************************************/
	var objColor = {
		grays :"#a3a3a3",
		orang:"rgb(211,112,0)",
		oranga:"#ff9000",
		fontWhite:"#FFF",
		fontGray:"rgb(218,208,178)",
		gray:"#ccc"
	};

    $('.inform-tab input').on('tap',function(){
		 butColor(this)
	});
/****************************************
 *			 底部按钮 颜色     			*
 ****************************************/

   	$("body").on("touchstart","#footer-btn", function(){
	        this.style.background = objColor.orang;
	        this.style.color = objColor.fontGray;
	    });
	$("body").on("touchend","#footer-btn", function(){
			this.style.background = objColor.oranga;
			this.style.color = objColor.fontWhite;
	  });
   function butColor(selector){
	if($(selector).attr("checked") === false){
		$('.footer-btn').css('background','#cccccc');
	 	 $("body").on("touchstart",".footer-btn", function(){
	        this.style.background = objColor.grays;
	        this.style.color = objColor.gray;
	    	});

	    $("body").on("touchend",".footer-btn", function(){
		        this.style.background = objColor.gray;
		        this.style.color = objColor.fontWhite;
		    });
	} else{
		$('.footer-btn').css('background','#ff9000')
		$("body").on("touchstart",".footer-btn", function(){
	        this.style.background = objColor.orang;
	        this.style.color = objColor.fontGray;
	    	});

	    $("body").on("touchend",".footer-btn", function(){
		        this.style.background = objColor.oranga;
		        this.style.color = objColor.fontWhite;
		    });
		}
	}
    /*底部按钮 颜色end*/
	$('.button-end').css('background','#cccccc')
	$("body").on("touchstart",".button-end", function(){
	   this.style.background = objColor.grays;
	   this.style.color = objColor.gray;
		});
	$("body").on("touchend",".button-end", function(){
		this.style.background = objColor.gray;
		this.style.color = objColor.fontWhite;

	});
/****************************************
 *			收货地址 单选切换 			*
 ****************************************/
	//$(".inform-tab tr .inform-click").click(function(){
	$(".inform-tab").on("tap",".inform-click",function(){
		if($(this).parents("tr").find(".iconchoicedefault").hasClass("icon-iconchoicedefault")){
			return;
		}
		$(this).parents("tr").find(".iconchoicedefault").addClass("iconfont icon-iconchoicedefault").parents("tr")
		.siblings("tr").find(".iconchoicedefault").removeClass("iconfont icon-iconchoicedefault");

		$(this).parents("tr").find(".inform-selector").css("border","0px").parents("tr").siblings("tr").
		find(".inform-selector").css("border","0.02rem solid #cccccc;");

		$(this).parents("tr").find(".inform-td-icon").css("border","0px").parents("tr").siblings("tr").
		find(".inform-td-icon").css("border","0.02rem solid #cccccc;");

		$(".footer .footer-activeaddress-btn").css("background","rgb(255, 144, 0)");;

	});
/****************************************
*			保存手机号码					*
****************************************/
	$(".inform-input .user-name").blur(function(){
		if(!$(this).val()){
//			alert("请输入收货人姓名");
		}
	});

	$(".inform-input .inform-user-name").keyup(function(){
		if($(".inform-input .user-tel").val() !== '' && $(".inform-input .user-name").val() !== ''){
			$(".button-box .button-end").css("background","rgb(255, 144, 0)");
		} else{
			$(".button-box .button-end").css("background","rgb(204, 204, 204);");
		}
//		if($(".inform-input .user-tel").val() && !$(".inform-input .user-name").val()){
//			
//		}
//		if(!$(".inform-input .user-tel").val()){
//			$(".button-box .button-end").css("background","rgb(204, 204, 204);");
//			return;
//		}
//		if($(".inform-input .user-name").val() || $(".inform-input .user-tel").val()){
//			$(".button-box .button-end").css("background","rgb(255, 144, 0)");
//		}
	});
	
	$(".button-box .button-end").tap(function(){
		$('.leave-img').addClass('hidden');
		if(!$(".inform-input .user-name").val()){
			show.popupTip('请输入提货人')
			return
		}
		if(!$(".inform-input .user-tel").val()){
			show.popupTip("请输入收货人联系电话");
		} else if(!(/^1[3|4|5|7|8]\d{9}$/.test($(".inform-input .user-tel").val()))){
			show.popupTip('请输入正确的手机号码')
			$(".inform-input .user-tel").val("");
		}else{
			$('#form_address').submit();
		}
//		$(".inform-input .user-name").val("");
//		$(".inform-input .user-tel").val("");
		$(".button-box .button-end").css("background","rgb(204, 204, 204);");
	});

	

var show = {
//按钮颜色	
	butColor:function(selector,event,bg,color){
	    $(selector).on(event,function(){
	        $(this).css({
	            'background':bg,
	            'color':color
	        })
	    });
	},
//	
////跳转
//	jump:function(url,el){
//			$.ajax({
//			type:"POST",
//			url:url,
//          data:el,
//			dataType:"json",
//			beforeSend:function () {},
//			success:function(rs){
//				if(rs.error){
//					if (rs.message){
//						show.popupTip(rs.message);
//						return false;
//					} else{
//
//					}
//				} else{
//					if(rs.redirect){						
//						location.href = rs.redirect;
//					} if(rs.success){
//						
//					}
//				}
//			},
//			error:function(xhr,type){},
//			complete:function(){
//				$('.btnJump').removeAttr('disabled');
//			}
//
//		});
//	}
};

//
//$('.btnJump').unbind().on('tap',function(event){
//	$(this).attr('disabled','disabled');
//	var formUrl = $(this).parents("form").attr("action"),
//		btnUrl = $(this).attr('data-url'),
//		element;
//	if (!($(this).parents("form").length==0)){
//		if ($(this).parents("form").serialize() == ""){
//			element = "";
//		}else {
//			element = $(this).parents("form").serialize();
//		}
//	}
//	show.jump(formUrl || btnUrl,element);
//})
