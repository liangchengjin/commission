/**
 * Created by Administrator on 2016/9/2.
 */
var activeCenter = {
    init:function () {
       this.lineMove()
    },
    lineMove:function () {
        var line = $('.line');
        $('nav>ul>li').on('tap',function(){
            switch ($(this).index()){
                case 0 :
                    line.css('left','15.4%');
                break;
                case 1 :
                    line.css('left','43.6%');
                break;
                case 2 :
                    line.css('left','71.8%');
                break;
            }
        },false)
    }
};

$(function () {
    activeCenter.init()
});




