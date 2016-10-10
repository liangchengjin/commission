var productDetail = {
    init:function () {
        this.mainHeight();
        this.bindEvent();
        this.swiper();
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
    mainHeight:function () {
        var clientH =  $('body').height(),
            footerH = $('.footer').height(),
            navH = $(".navbar").height(),
            productH = clientH -footerH -navH;
        $('.product').css('height',productH + 'px');
    },
    bindEvent:function () {
        this.reduceNumber();
        this.addNumber();
        this.enterNumber();
        $('.inform-list li').on('tap',function(){
            if($(this).index() == 0 ){
                $('#product-info').removeClass('tab-active');
                $('#product-param').addClass('tab-active');

            } else if($(this).index() == 1){
                $('#product-info').addClass('tab-active');
                $('#product-param').removeClass('tab-active');
            }
        });
    },
    enterNumber:function () {
        $('#number').on('keyup',function () {
            var number = $('#number').val();
            if (number) {
                if (number > 1) {
                    $('#reduce').removeClass('number-active');
                }else if (number < 1){
                    $('#reduce').addClass('number-active');
                    $('#number').val(1);
                } else{
                    $('#reduce').addClass('number-active');
                }
            }
        });
    },
    reduceNumber:function () {
        $('#reduce').on("tap",function () {
            var number = $('#number').val();
            number--;
            $('#number').val(number);
            if (number > 1) {
                $('#reduce').removeClass('number-active');
            }else{
                $('#reduce').addClass('number-active');
                $('#number').val(1);
            }

        });
    },
    addNumber:function () {
        $('#add').on("tap",function () {
            var number = $('#number').val();
            number++;
            $('#number').val(number);
            if (number > 1) {
                $('#reduce').removeClass('number-active');
            }else{
                $('#reduce').addClass('number-active');
                $('#number').val(1);
            }

        });
    }

}
$(function () {
    productDetail.init()
});

