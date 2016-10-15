show.butColor('.order','touchstart','#cc7300','#cccccc');
show.butColor('.order','touchend','#ff9000','#ffffff');
show.butColor('.del','touchstart','#cccccc','#cc7300');
show.butColor('.del','touchend','#ffffff','#FF9000');
//$('.order').on('tap',function(){
////	window.location.href = 'pay.html'
//})
//
//$('.leave-img').on('tap',function(){
//		$('.leave-message')[0].value = '';
//	    $('.leave-img')[0].className = 'iconfont icon-icondeletedefault leave-img hidden'
//	});
//
///****************************************
// *			 留言输入框    			*
// ****************************************/
//function change (){
//	show.butColor('.leave-img','touchstart','#ffffff','#fe9000');
//	show.butColor('.leave-img','touchend','#ffffff','#999999');
//  if(document.querySelector('.leave-message').value !== ''){
//      document.querySelector('.leave-img').className = 'iconfont icon-icondeletedefault leave-img'
//  }else {
//      document.querySelector('.leave-img').className = 'iconfont icon-icondeletedefault leave-img hidden'
//  }
//}
//
//
//


/****************************************
 *			      倒计时    			    *
 ****************************************/
var time = $('#ordertime').val();
var t;
var m = 0;
	s = 0;
if($('.text>div>p')[0].innerText === '等待付款'){
	run()
    setInterval("run()",1000);
}
function run(){
	var nowTime = new Date();
	var nowSec = Math.floor((nowTime.getTime())/1000);
	t = 360 - (nowSec - time)
	if(t>0){
			m=Math.floor(t/60%60);
			s=Math.floor(t%60);
	} else {
		m = 0;
		s = 0;
	}
	(m < 10)? (m = '0' + m) : (m = m);	
	(s < 10)? (s = '0' + s) : (s = s);
    $('.time').html(m+"分钟"+s+"秒");
}

//支付成功选择更改判断
var blankStr = document.querySelector('.address').innerText;
var blankN = document.querySelector('.name').innerText;
blankStr = blankStr.replace(/\s+/g,"");   
blankN = blankN.replace(/\s+/g,"");
if(blankStr !== ''){
	$('#address').addClass('hidden');
	$($('.special')[1]).removeClass('hidden');
} else if(blankStr === ''){
	$('#address').removeClass('hidden');
	$($('.special')[1]).addClass('hidden');
}
if(blankN !== ''){
	$('#name').addClass('hidden');
	$($('.special')[0]).removeClass('hidden');
} else if(blankN === ''){
	$('#name').removeClass('hidden');
	$($('.special')[0]).addClass('hidden');
}