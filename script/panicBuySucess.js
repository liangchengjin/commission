var blankStr = document.querySelector('.address').innerText;
var blankN = document.querySelector('.name').innerText;
blankStr = blankStr.replace(/\s+/g,"");   
blankN = blankN.replace(/\s+/g,"");
if($('.mobile')[0].innerHTML !== ''){
	$('.mobile')[0].innerHTML = '( '+$('.mobile')[0].innerHTML+' )'	
}
if($('.mobile')[1].innerHTML !== ''){
	$('.mobile')[1].innerHTML = '( '+$('.mobile')[1].innerHTML+' )'	
}
if(blankN !== '' && blankN.length !== 0){
    document.querySelectorAll('.particular-mes')[0].className = 'particular-mes';
    document.querySelectorAll('.chose')[0].className = 'hidden chose';
    document.querySelectorAll('.change')[0].className = 'change';
    document.querySelectorAll('.change-wrap')[0].className = 'change-wrap';
    $('.mes')[0].className = 'mes hidden'
}
if(blankStr !== '' && blankStr.length !== 0){
    document.querySelectorAll('.particular-mes')[1].className = 'particular-mes';
    document.querySelectorAll('.chose')[1].className = 'hidden chose';
    document.querySelectorAll('.change')[1].className = 'change';
    document.querySelectorAll('.change-wrap')[1].className = 'change-wrap';
    $('.mes')[1].className = 'mes hidden'
}
chose(0);
chose(1);
bgColor();

	$('.leave-img').on('tap',function(){
		$('.leave-message')[0].value = '';
	    $('.leave-img')[0].className = 'iconfont icon-icondeletedefault leave-img hidden'
	});
/****************************************
 *			   选择地址函数  			    *
 ****************************************/
function chose(num){
	if($('.chose').html() !== '选择'){
			$('.a-content')[num].addEventListener('tap',function(){
			$('.particular-mes')[num].className = 'particular-mes';
	        $('.chose')[num].className = 'hidden chose';
	        $('.change')[num].className = 'change';
	        bgColor()
			})
	}
}
/****************************************
 *			 底部按钮 颜色变化函数     			*
 ****************************************/
function bgColor(){
    if( document.querySelectorAll('.particular-mes')[0].className === 'particular-mes hidden' || 
    	document.querySelectorAll('.particular-mes')[1].className === 'particular-mes hidden')
    {
        document.querySelector('.order').style.background = '#cccccc';
        mobile('touchstart','#a3a3a3','#cccccc');
        mobile('touchend','#cccccc','#ffffff');
    } else{
        document.querySelector('.order').style.background = '#fe9000';
        mobile('touchstart','#cc7300','#cccccc');
        mobile('touchend','#ff9000','#ffffff');
        $('.titleTxt').css('display','none');
        $('.container-main').css('margin-top','1.46rem')
    }
}
/****************************************
 *	   touchstart touchend 函数     			*
 ****************************************/
function mobile (event,bg,color){
    document.querySelector('.order').addEventListener(event,function(){
        this.style.background = bg;
        this.style.color = color;
    },false);
}

//获取订单总金额
function totalFee(url,data){
    $.ajax({
        url:url,
        data:data,
        type:'post',
        dataType:'json',
        success:function(result){
            if(result.allPayment){
                $('.total-fee').html('￥'+result.allPayment);
            }
        }
    })
};
