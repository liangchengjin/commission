var container,
	itemIdValue,
	skuIdValue,
	containers;
var startsTime = $('#starttimestamp').val();
var endTimes = $('#endtimestamp').val();
var hotActive = {
	init:function(){
	this.time(startsTime,endTimes);
	setInterval(function(){
		hotActive.time(startsTime,endTimes);	
		}, 1000);
		this.btnEvent();
		this.bindEvent();
		this.btnClorFn();
		this.jumpHref();
		this.aHref();
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
					t = startTime - nowSec;
					$('.grabNow').html('未开始')
					$('.grabNow').addClass('grayBg');
					$('.residue').removeClass('none');
					$('.residues').addClass('none');
					$('.left-txt').html('敬请关注');
					$('.grabNow').removeClass('btnJump')
					d=Math.floor(t/60/60/24);
					h=Math.floor(t/60/60%24);
					m=Math.floor(t/60%60);
					s=Math.floor(t%60);
				}else{
					$('.status').html('结束')
					t = endTime - nowSec;
					$('.grabNow').html('马上抢')
					$('.residues').removeClass('none');
					$('.residue').addClass('none');
					$('.grabNow').removeClass('grayBg');
					$('.left-txt').html('限时限量，抢购中');
					$('.grabOver').css('display','none')
					hotActive.statusFn();
					if(t>0){
						d=Math.floor(t/60/60/24);
						h=Math.floor(t/60/60%24);
						m=Math.floor(t/60%60);
						s=Math.floor(t%60);
					}else{
						$('.grabNow').html('已结束');
						$('.grabOver').removeClass('none');
						$('.residues').addClass('none');
						$('.residue').addClass('none');
						$('.grabNow').addClass('grayBg');
						$('.grabNow').removeClass('btnJump');
						$('.left-txt').html('活动已结束')
						$('.grabNow').removeClass('.btnJump')
						$('.right').hide();
						$('.grabNow').css('bottom','0.65rem')
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
	btnEvent:function(){
		$('.back').on('tap',function(){
			$('.alert-wrap').addClass('none')
			$('.content-wrap').removeClass('fixed')
//			$('body').css('overflow','auto');
//			$('html').css('overflow','auto');
//			document.body.style.overflow='auto'
			
		})
		$('.grabNow').on('tap',function(){
			itemIdValue	= $(this).parent().attr('itemId');
			skuIdValue  = $(this).parent().attr('skuId');
			container = $(this).prev().find('.amounts').html();
			if($(this).html() !== '马上抢'){
				$(this).removeClass('btnJump');
				$('.hint').removeClass('none')
				setTimeout("hotActive.codefans()",2000)
				switch ($(this).html()) {
				case '已中止':
					$('.hint').html('活动已中止')
				break;
				case '已结束':
					$('.hint').html('活动已结束')
				break;
				case '未开始':
					$('.hint').html('活动未开始')
				break;
				case '已参与':
					$('.hint').html('该商品您已购买过')
				break;
				case '抢光了':
					$('.hint').html('该商品已经抢光')
				break;
				case '已失效':
					$('.hint').html('该商品已经下架')
				break;
				}
			} else {
				$(this).addClass('btnJump');
				if($(this).prev().find('.amounts').html() > 1){
					$(this).removeClass('btnJump');
					$('#number')[0].value = $(this).prev().find('.amounts').html();
					$('.restriction>span').html($(this).prev().find('.amounts').html())
					$('.alert-wrap').removeClass('none')
					$('.content-wrap').addClass('fixed')
//					$('body').css('overflow','hidden');
//					$('html').css('overflow','hidden');
				} else{
					containers = 1
				}
			}
		})		
	},
	btnClorFn:function(){
		this.butColor('.grabNow','touchstart','#cc7300','#cccccc');
		this.butColor('.grabNow','touchend','#ff9000','#ffffff');
		this.butColor('.grayBg','touchstart','#a3a3a3','#cccccc');
		this.butColor('.grayBg','touchend','#cccccc','#ffffff');
		this.butColor('.btn-foot','touchstart','rgb(238,238,238)','#0bb20c');
		this.butColor('.btn-foot','touchend','#ffffff','#0bb20c');
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
	codefans:function(){
		$('.hint').addClass('none');
	},
	 bindEvent:function () {
        this.reduceNumber();
        this.addNumber();
        this.enterNumber();
        this.numberKeyUp();
        $('.btn-foot').on('tap',function(){        	
        	hotActive.jumpHref();
        	$('.alert-wrap').addClass('none')
        	$('.content-wrap').removeClass('fixed')
//      	$('body').css('overflow','auto');
//			$('html').css('overflow','auto');
        	container = $('#number').val()
        })
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
    statusFn:function(){
    	var len = $('.grabNow').length;
    	for(var i = 0; i < len; i++){
    		switch ($('.grabNow')[i].attributes.stus.value) {
    			case '1':
    				$($('.grabNow')[i]).removeClass('.btnJump');
				case '3':
					hotActive.statusBg(i,"抢光了")
					$($('.grabNow')[i]).removeClass('btnJump');
				break;
				case '5':
					hotActive.statusBg(i,"已参与")
					$($('.grabNow')[i]).removeClass('btnJump');
				break;
				case '6':
					hotActive.statusBg(i,"已中止")
					$($('.grabNow')[i]).removeClass('btnJump');
				break;
				case '7':
					hotActive.statusBg(i,"已失效")
					$($('.grabNow')[i]).removeClass('btnJump');
				}
    		if($('.grabNow')[i].innerHTML === '马上抢'){
    			if($($('.grabNow')[i]).prev().find('.amounts').html() > 1){
    				$($('.grabNow')[i]).removeClass('btnJump');
    			}
    		}
    	}
    },
    statusBg:function(i,txt){
    	$('.grabNow')[i].innerHTML = txt;
    	$($('.grabNow')[i]).addClass('grayBg');
    	$($('.residue')[i]).addClass('none');
    	if(txt === "抢光了"){
    		$($('.residues')[i]).addClass('none');
    		$($('.grabOver')[i]).removeClass('none')	
    	}else {
    		$($('.grabOver')[i]).addClass('none');
    		$($('.residues')[i]).removeClass('none')
    		$($('.residues')[i]).addClass('gray')
    	}
    },
    jumpHref:function(){   	
    	$('.btnJump').on('tap',function(){
		show.jump(itemIdValue,skuIdValue,containers)
    	})
    },
    aHref:function(){
    	var len = $('.container>a').length
    	for(var i = 0;i< len; i++){
    		$($('.container>a')[i]).on('tap',function(){
    		window.location.href = $(this).attr('url')
    		})
    	}
    }
}
$(function () {
    hotActive.init();
});


