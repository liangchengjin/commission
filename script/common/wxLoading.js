var loading = {
	 loadingWrap:function () {
        var temp = '';
        	temp =  '<div class="loading-div">'+
        				'<div class="loading-wrap">'+
							'<img src="/app/topapp/statics/images/loading_white_96x96.gif" alt="" />'+
							'<span>数据加载中</span>'+
						'</div>'+
					'</div>';
		 $('body').append(temp);
		 $('body').css('position','fixed')
   	},
   	 loadingErro:function(txt){
   	 	var temp = '';
   	 		temp = '<div class="loading-erro">'+
						'<i class="iconfont icon-imglinktimeout"></i>'+
						'<span class="loading-erro-txt">'+txt+'</span>'+
						'<span class="again-loading">重新加载</span>'+
					 '</div>';
		 $('body').append(temp);
			$('.again-loading').on("tap",function(){
				window.location.reload();
			})
   	},
   	 loadingIng:function(){

   	 	var temps = '';
   	 		temps = '<div class="loading-ing">'+
						'<img src="/app/topapp/statics/images/loading_black8_96x96.gif" alt=""/>'+
						'<span>正在加载中...</span>'+
				  '</div>';
			  $('body').append(temps);
   	 },
   	 closeIng:function(){
   	 	$('.loading-ing').css('display','none');
   	 },
	closeLoading:function(){
		$('.loading-div').css('display','none');
		$('body').css('position','relative')
	}
}
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
		$('body').css('position','fixed');
		$('#showCancel').unbind().on('tap', function () {
			$("#dialog3").hide();
			$('body').css('position','relative');
			cancelCallback&&cancelCallback();
		});
		$('#showSure').unbind().on('tap', function () {
			$("#dialog3").hide();
			$('body').css('position','relative');
			sureCallback&&sureCallback();
		});
		$('#tipSure').unbind().on('tap', function () {
			$("#dialog3").hide();
			$('body').css('position','relative');
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
	jump:function(itemIdValue,skuIdValue,numValue){
			if(itemIdValue>0 && skuIdValue>0 && numValue>0){
				$.ajax({
				type:"get",
				url:$('#orderUrl').val(),
	            data:{
	            	token : $('#token').val(),
	            	activity_id : $('#activityId').val(),
	            	num : numValue,
	            	item_id : itemIdValue,
	            	sku_id : skuIdValue
	            },
				dataType:"jsonp",
				jsonp: 'jsoncallback',
				beforeSend:function () {
					loading.loadingWrap();
				},
				success:function(data){
					loading.closeLoading();
					console.log(data)
					if(data.success === true){
						window.location.href = $('#url').val() +'?payment_id='+ data.data
					}else {
                        switch (data.code) {
                            case "3020":
                                show.popupTip('只能抢购1次')
                            break;
                            case "1010 ":
                                show.popupTip('当前购买人数过多，请刷新重试')
                            break;
                            case "1020 ":
                                show.popupTip('当前购买人数过多，请刷新重试')
                            break;
                            case "1030":
                                show.popupTip('当前购买人数过多，请刷新重试')
                             break;
                            case "2020":
                                show.popupTip('活动已中止')
                            break;
                            case "2030":
                                show.popupTip('活动已失效')
                            break;
                            case "2060":
                                show.popupTip('活动已结束')
                            break;
                            case "3010":
                                show.popupTip('商品已抢完')
                            break;
                            case "3040":
                                show.popupTip('库存不足')
                            break;
                            case "8000":
                                show.popupTip('您已下单，请去订单中心付款！')
                            break;
							case "2000":
								show.popupTip('活动未上线')
							break;
                            default:
                                show.popupTip('当前购买人数过多，请刷新重试');
                            break;
                        }
                    }
				},
				error:function(xhr,type){
					loading.closeLoading();
					show.popupTip('当前购买人数过多，请刷新重试')
				},
				complete:function(){
					$('.btnJump').removeAttr('disabled');
				}
			});
		}else{
				if(numValue === ''){
					show.popupTip('请输入购买数量')
				} else {
					show.popupTip('当前购买人数过多，请刷新重试')
				}
			}
		},		
	toast:function(txt){
			var temp = '<div class="hint-common">'+txt+'</div>'
			$('body').append(temp)
			setTimeout(function(){
				$('.hint-common').css('display','none');
			},2000)
		}
};

