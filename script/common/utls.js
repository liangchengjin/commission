// jing
var line = $('.line');
$('.inform-list li').on('tap',function(){
	if($(this).index() == 0 ){
		line.css('left','0');
	} else if($(this).index() == 1){
		line.css('left','100%');
	} else {
		line.css('left','200%');
	}
})

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
		find(".inform-selector").css("border","0.05rem solid #cccccc;");

		$(this).parents("tr").find(".inform-td-icon").css("border","0px").parents("tr").siblings("tr").
		find(".inform-td-icon").css("border","0.05rem solid #cccccc;");

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

	$(".inform-input .user-tel").keyup(function(){
		if(!$(".inform-input .user-tel").val()){
			$(".button-box .button-end").css("background","rgb(204, 204, 204);");
			return;
		}
//		console.log(!$(".inform-input .user-name").val());
//		console.log(!$(".inform-input .user-tel").val());
		if($(".inform-input .user-name").val() || $(".inform-input .user-tel").val()){
//			console.log("99999");
			$(".button-box .button-end").css("background","rgb(255, 144, 0)");
		}
	});
	
	$(".button-box .button-end").tap(function(){
		$('.leave-img').addClass('hidden');
		if(!$(".inform-input .user-name").val()){
			show.popupTip('请输入提货人')
			return
		}
		if(!$(".inform-input .user-tel").val()){
			alert("请输入收货人联系电话");
		} else if(!(/^1[3|4|5|7|8]\d{9}$/.test($(".inform-input .user-tel").val()))){
			show.popupTip('请输入正确的手机号码')
		}else{
			$('#form_address').submit();
		}

		$(".inform-input .user-name").val("");
		$(".inform-input .user-tel").val("");
		$(".button-box .button-end").css("background","rgb(204, 204, 204);");
	});
var show = {
	popupTip:function (tip,cancelText,sureText,cancelCallback,sureCallback) {
		var tip= tip,
			cancelText = cancelText,
			sureText = sureText;

			if ($("#dialog3").length === 0){
				var $div = '<div class="ui-dialog" id="dialog3">' +
					'<div class="ui-dialog-cnt"> ' +
					'<div class="ui-dialog-bd">' +
					'<h3></h3> ' +
					'</div> ' +
					'<div class="ui-dialog-ft"> ' +
					'<a class="ui-btn" id = "showCancel"></a>' +
					'<a class="ui-btn ui-btn-primary" id = "showSure"></a>' +
					'</div>' +
					'</div>' +
					'</div>';
				$('body').append($div);
			}
		$('.ui-dialog-bd h3').text(tip);
		$('#showCancel').text(cancelText);
		$('#showSure').text(sureText);

		if (!cancelText && !sureText){
			var $btn = '<a class="ui-btn ui-btn-primary tipSure" id = "tipSure">确定</a>';
			$('#showCancel,#showSure').hide();
			if ($(".tipSure").length == 1){
				return false;
			} else{
				$('.ui-dialog-ft').append($btn);
			}
		} else {
			$('#showCancel,#showSure').show();
		}
		$("#dialog3").show();
		document.documentElement.style.overflow='hidden';
		$('#showCancel').unbind().on('tap', function () {
			$("#dialog3").hide();
			document.documentElement.style.overflow='auto';
			cancelCallback&&cancelCallback();
		});
		$('#showSure').unbind().on('tap', function () {
			$("#dialog3").hide();
			document.documentElement.style.overflow='auto';
			sureCallback&&sureCallback();
		});
		$('#tipSure').unbind().on('tap', function () {
			$("#dialog3").hide();
			document.documentElement.style.overflow='auto';
			$(this).remove();			
				if($('.ui-dialog-bd h3').html() ==='当前购买人数过多，请刷新重试' || 
				   $('.ui-dialog-bd h3').html() === '只能抢购1次'       ||
				   $('.ui-dialog-bd h3').html() === '活动已中止'||
				   $('.ui-dialog-bd h3').html() === '活动已失效'              ||
				   $('.ui-dialog-bd h3').html() === '活动已结束'||
				   $('.ui-dialog-bd h3').html() === '商品已抢完'||
				   $('.ui-dialog-bd h3').html() === '库存不足'||
				   $('.ui-dialog-bd h3').html() === '您已下单，请去订单中心付款！'||
				   $('.ui-dialog-bd h3').html() === '活动未上线'
				){
					window.location.reload();
				}
		});
		this.butColor('#tipSure','touchstart','rgb(238,238,238)','#0bb20c');
		this.butColor('#tipSure','touchend','#ffffff','#0bb20c');
		this.butColor('#showSure','touchstart','rgb(238,238,238)','#0bb20c');
		this.butColor('#showSure','touchend','#ffffff','#0bb20c');
		this.butColor('#showCancel','touchstart','rgb(238,238,238)','#353535');
		this.butColor('#showCancel','touchend','#ffffff','#353535');
	},
//按钮颜色	
	butColor:function(selector,event,bg,color){
	    $(selector).on(event,function(){
	        $(this).css({
	            'background':bg,
	            'color':color
	        })
	    });
	},
	
//跳转
	jump:function(url,el){
			$.ajax({
			type:"POST",
			url:url,
            data:el,
			dataType:"json",
			beforeSend:function () {},
			success:function(rs){
				if(rs.error){
					if (rs.message){
						show.popupTip(rs.message);
						return false;
					} else{

					}
				} else{
					if(rs.redirect){						
						location.href = rs.redirect;
					} if(rs.success){
						
					}
				}
			},
			error:function(xhr,type){},
			complete:function(){
				$('.btnJump').removeAttr('disabled');
			}

		});
	}
};

$('.btnJump').unbind().on('tap',function(event){
	$(this).attr('disabled','disabled');
	var formUrl = $(this).parents("form").attr("action"),
		btnUrl = $(this).attr('data-url'),
		element;
	if (!($(this).parents("form").length==0)){
		if ($(this).parents("form").serialize() == ""){
			element = "";
		}else {
			element = $(this).parents("form").serialize();
		}
	}
	show.jump(formUrl || btnUrl,element);
})
