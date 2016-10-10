
var productDetail = {
    init:function () {
        this.productWidth();
        this.bindEvent();

    },
    productWidth:function () {
        if ($('#sale ul li').length == 0 ){
            $('#empty').show();
        } else{
            $('#empty').hide();
            var imgNum = $('.package-img').find("img").length ,
                imgW = $('.p-img').find("img")[0].width ,
                allImgW = imgNum * imgW + imgNum * 17 ;

            if(imgNum > 1){
                $(".package-img").css("width", allImgW);
            }

        }
    },
    bindEvent:function () {       
//      $('.order-delete').on('tap',function(){
//      	window.location.href = 'pay.html'
//      });
//      var line = $('.line')
        $('#myTab>li').on('tap',function(){
//      	window.location.href = ''
//      	switch ($(this).index()){
//              case 0 :
//                  line.css('left','0%');
//                  $($('#myTab>li>a')[1]).removeClass('color');
//                  $($('#myTab>li>a')[2]).removeClass('color')
//                  $(this).children().addClass('color')
//              break;
//              case 1 :
//                  line.css('left','100%');
//                  $($('#myTab>li>a')[0]).removeClass('color');
//                  $($('#myTab>li>a')[2]).removeClass('color')
//                  $(this).children().addClass('color')
//              break;
//              case 2 :
//                  line.css('left','200%');
//                  $($('#myTab>li>a')[0]).removeClass('color');
//                  $($('#myTab>li>a')[1]).removeClass('color')
//                  $(this).children().addClass('color')
//              break;
//          }
        })
    }
}
$(function () {
    productDetail.init()
});
