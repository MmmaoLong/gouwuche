$(function(){

    $('#demo').fullpage({

        navigation:true,
        sectionsColor:['#f9dd67','#84a2d4','#ef674d','#ffeedd','#cf4759','#85d9ed','#8ac060','#84d9ed'],
        afterLoad:function(a,index){
         
        $('.section').eq(index-1).addClass('animation').siblings().removeClass('animation');
        $('.section>div div,.section>div img').stop().removeAttr('style');
            // 滚出其他屏不要动画，所以做判断
            if( index == 2 ){

                $('.section2 .search01').animate({
                    marginLeft:-111
                },1000,'easeOutBack',function(){

                    //动画完成隐藏search01
                    $('.section2 .search01').hide();

                    //显示出search02并往上走
                    $('.section2 .search02').show().delay(500).animate({

                        marginLeft: 100,
                        marginBottom:448,
                        width:160

                    },1000);

                    // 它们是同时进行的：沙发放大
                    $('.section2 .sofas').delay(500).animate({
                        width:441
                    },1000);
                });
            }else if(index==4){
                $('.car').animate({
                    marginLeft:2000
                },1500,'easeInElastic',function(){
                    $('.keyboard').animate({
                        opacity:1
                    },1000)
                })
            }
            else if(index==6){
                $('.street').animate({
                   backgroundPositionX:-1200
                },2000)
            }
        }
    });
})