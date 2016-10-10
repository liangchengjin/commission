var productDetail = {
    init:function () {
        this.butC();
        this.leaveImg();
        this.foucs();
        this.isDefault()
    },
	leaveImg:function(){
			$('.leave-img')[0].onclick = function () {
			$('.user-name')[0].value = '';			
			$($('.leave-img')[0]).addClass('hidden');
			productDetail.butC();
			$('.button-end').css({
				'background':'rgb(204, 204, 204)',
				'color':'#ffffff'
			})
		}
		$('.leave-img')[1].onclick = function () {
			$('.user-tel')[0].value = '';			
			$($('.leave-img')[1]).addClass('hidden');
			productDetail.butC();
			$('.button-end').css({
				'background':'rgb(204, 204, 204)',
				'color':'#ffffff'
			})
		}
	},
	butC:function(){
			var userName = $('.user-name').attr('value'),
				uesrTel  = $('.user-tel').attr('value');
				userName = userName.replace(/\s+/g,"");
				uesrTel  = uesrTel.replace(/\s+/g,"");
			if(userName !== '' && uesrTel !== ''){
				$('.button-end').css({
					    'background':'#ff9000',
					    'color':'#ffffff'
				})
				show.butColor('.button-end','touchstart','#cc7300','#cccccc');
				show.butColor('.button-end','touchend','#ff9000','#ffffff');
		}
	},	
	foucs:function(){
        $(".inform-input input").on('keyup',function(){
        	show.butColor('.leave-img','touchstart','#ffffff','#fe9000');
			show.butColor('.leave-img','touchend','#ffffff','#999999');
			$(".leave-img").addClass('hidden');
        	if($(this).val()){
        		$(this).siblings().removeClass('hidden');      		
        	}      	
        })
         $(".inform-input .user-tel").on('tap',function(){
         	$('.user-name').siblings().addClass('hidden');
         })
         $(".inform-input .user-name").on('tap',function(){
         	$('.user-tel').siblings().addClass('hidden');
         })
	},
	isDefault:function(){
			if($('#is_defalut').val() == 1){
			$('.ios-switch')[0].checked = true
		} else{
			$('.ios-switch')[0].checked = false
		}
		$('label').on('tap',function(){

			if($('.ios-switch')[0].checked === true){
				$('#is_defalut').val(1)
			}else{
				$('#is_defalut').val(0)
			}
		})
	}
}

$(function () {
    productDetail.init()
});




