var container = $('.restrict').html()
var startsTime = $('#starttimestamp').val();
var endTimes = $('#endtimestamp').val();
$('#number').val(container);
var productDetail = {
    init:function () {
    	this.time(startsTime,endTimes);
		setInterval(function(){
			productDetail.time(startsTime,endTimes);	
			}, 1000);
//      this.mainHeight();
        this.bindEvent();
        this.swiper();
        this.statusFn();
        this.tapFn()
        productDetail.butColor('.btnJump ','touchstart','#cc7300','#cccccc');
		productDetail.butColor('.btnJump ','touchend','#ff9000','#ffffff');	
    },
    swiper: function () {
        if ($(".swiper-wrapper .swiper-slide").length == 0){
            var $img = '<div class="swiper-slide"><img src="images/no-product.png"></div>';
            $(".swiper-wrapper").append($img);

        } else if ($(".swiper-wrapper .swiper-slide").length == 1){

        } else{
            var swiper = new Swiper('.swiper-container',{
                autoplay : 2000,
                pagination : '.swiper-pagination',
                autoplayDisableOnInteraction: false,
                loop : true
            }) ;
        }
    },
    time:function(starts,ends){
				ends   = ends   * 1;
				starts = starts * 1
				var ts;
				var endTime = ends ;
				var startTime = starts;
				var d=0;
				var h=0;
				var m=0;
				var s=0;
				var nowTime = new Date();
				var nowSec = Math.floor((nowTime.getTime())/1000);
//			console.log(nowSec)
				if(startTime >= nowSec){
					$('.status').html('开始')
					$('#bug').html('未开始')
					$('#bug').addClass('grayBg');
					t = startTime - nowSec;
					d=Math.floor(t/60/60/24);
					h=Math.floor(t/60/60%24);
					m=Math.floor(t/60%60);
					s=Math.floor(t%60);
					$('.footer-btn').removeClass('btnJump');
				}else{
					$('.status').html('结束')
					t = endTime - nowSec;
					$('#bug').html('马上抢')
					$('#bug').removeClass('grayBg');
					productDetail.statusFn();
					if(t>0){
						d=Math.floor(t/60/60/24);
						h=Math.floor(t/60/60%24);
						m=Math.floor(t/60%60);
						s=Math.floor(t%60);
					}else{
						$('#bug').html('已结束');						
						$('#bug').addClass('grayBg');
						$('.footer-btn').removeClass('btnJump');
						$('.right').hide()
					}
				}				
					(d < 10)? (d = '0' + d) : (d = d);
					(h < 10)? (h = '0' + h) : (h = h);	
					(m < 10)? (m = '0' + m) : (m = m);	
					(s < 10)? (s = '0' + s) : (s = s);
				$('.day').html(d)
				$('.hour').html(h)	
				$('.minute').html(m)	
				$('.sec').html(s)					
		},
//  mainHeight:function () {
//      var clientH =  $('body').height(),
//          footerH = $('.footer').height(),
//          navH = $(".navbar").height(),
//          productH = clientH -footerH -navH;
//      $('.product').css('height',productH + 'px');
//  },
    bindEvent:function () {
        this.reduceNumber();
        this.addNumber();
        this.enterNumber();
        $('#myTab>li').on('tap',function(){
            if($(this).index() === 0 ){
            	$('.line').css('left','0%')
                $('#product-info').removeClass('tab-active');
                $('#product-param').addClass('tab-active');

            } else if($(this).index() === 1){
            	$('.line').css('left','100%')
                $('#product-info').addClass('tab-active');
                $('#product-param').removeClass('tab-active');
            }
        });
    },
    numberKeyUp:function(){
	 	$('#number')[0].onkeydown = function(){
	 		this.value=this.value.replace(/\D/g,'')
	 	}
	 },
	 enterNumber:function () {
        $('#number').on('keyup',function () {
            var number = $('#number').val();
            number = number*1
            container = container * 1
//          console.log(number)
                if (number > 1 && number < container) {
                    $('#reduce').addClass('number-active');
                	$('#add').addClass('number-active');
                }else if (number < 1){
                    $('#reduce').removeClass('number-active');
                    $('#add').addClass('number-active')
                    $('#number').val('');
                } else if (number >= container){
                    $('#add').removeClass('number-active');
                	$('#number').val(container);
                	$('#reduce').addClass('number-active');
                } else {
                	$('#add').addClass('number-active');
                }
        });
    },
	reduceNumber:function () {
        $('#reduce').on("tap",function () {
            var number = $('#number').val();    
            number--;
            $('#number').val(number);
            if (number > 1) {
                $('#reduce').addClass('number-active');
                $('#add').addClass('number-active');
            }else{
                $('#reduce').removeClass('number-active');        
                $('#number').val(1);
            }
        });
    },
    addNumber:function () {
        $('#add').on("tap",function () {
            var number = $('#number').val();
            number++;
            $('#number').val(number);
            if (number >= container) {
                $('#add').removeClass('number-active');
                $('#number').val(container);
            }else{
                $('#add').addClass('number-active');
                $('#reduce').addClass('number-active');   
            }
        });
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
	statusFn:function(){
		switch ($('#bug').attr('stus')) {
			case '3':
			productDetail.statusContent("抢光了");					
			break;
			case '5':
			productDetail.statusContent("已参与")		
			break;
			case '6':
			productDetail.statusContent("已中止")			
			break;
			case '7':
			productDetail.statusContent("已失效")
			break;
		}
	},
	statusContent:function(txt){
		$('#bug').html(txt);
		$('#bug').removeClass('btnJump');
		$('#bug').addClass('grayBg');	
	},
	tapFn:function(){
		$('.grayBg').on('tap',function(){
				$('body').css('position','fixed')
		})
		$('.grayBg').blur(function(){
			$('body').css('position','relative')
		})
	}
}
$(function () {
    productDetail.init()
});

