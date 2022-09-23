$(function(){
    //.sc-visaul swiper
    $('.tab-nav').click(function(e){
        e.preventDefault();
        $(this).parents('.content').addClass('active').siblings().removeClass('active');
      
        if($(this).parents('.content').hasClass('content1')){
          console.log('쥬요뉴스');
          visualSlide2.autoplay.stop();
          if(!$('.content1 .autoplay').hasClass('active')){
            //자동재생이 아닌 상태
            visualSlide1.autoplay.start()
          }
          }else{
          console.log('시민참여');
          visualSlide1.autoplay.stop()  //주요뉴스 슬라이드는 정지
      
          if(!$('.content2 .autoplay').hasClass('active')){
            //자동재생이 아닌 상태
            visualSlide2.autoplay.start()
          }
        }
      });
      
      //.content1 , .content2  swiper
      const visualSlide1 = new Swiper(".content1 .swiper", {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".content1 .fraction",
          type:"fraction"
        },
        navigation: {
          nextEl: ".content1 .next",
          prevEl: ".content1 .prev",
        },
      });
      const visualSlide2 = new Swiper(".content2 .swiper", {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".content2 .fraction",
          type:"fraction"
        },
        navigation: {
          nextEl: ".content2 .next",
          prevEl: ".content2 .prev",
        },
      });
      
      visualSlide2.autoplay.stop() //원래 정지였다가

      $('.content1 .autoplay').click(function(e){
        e.preventDefault();
      
        if (!$(this).hasClass('active')) {
          visualSlide1.autoplay.stop();
          $(this).addClass('active');
        } else {
          visualSlide1.autoplay.start();
          $(this).removeClass('active');
        }
      })
      
      
      $('.content2 .autoplay').click(function(e){
        e.preventDefault();
      
        if (!$(this).hasClass('active')) {
          visualSlide2.autoplay.stop();
          $(this).addClass('active');
        } else {
          visualSlide2.autoplay.start();
          $(this).removeClass('active');
        }
      })



    //.sc-banner swiper
    const bannerSlide = new Swiper(".sc-banner .swiper", {
        slidesPerView: 3,
        spaceBetween: 43,

        autoplay:{
            delay:1000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".sc-banner .fraction",
            type:"fraction"
        },
        navigation: {
            nextEl: ".btn-nav.next",
            prevEl: ".btn-nav.prev",
        },
    });
    //autoplay ,stop btn  
    $('.sc-banner .autoplay').click(function(e){
        e.preventDefault();


        if(!$(this).hasClass('active')){
            //조건 .sc-b-slide .autoplay가 클래스 active를 가지고 있지 않을 때 _ '! '는 부정문을 만들어줌
            bannerSlide.autoplay.stop();
            //변수 bannerSlide(하단배너슬라이드)의 슬라이드 재생 종료
            $(this).addClass('active')
            //.sc-b-slide .autoplay 버튼을 재생버튼으로 바꿔줌
        }else{
            bannerSlide.autoplay.start();
            $(this).removeClass('active')
            
        }
    });




    //.sc-relate 하위메뉴 나타나기
    $('.btn-relate').click(function(){
        if($(this).hasClass('active')){//두번째 클릭
            $(this).siblings('.related-sub').slideUp()
            //.relate-sub 닫기

            $(this).removeClass('active')
            //색상을 다시 되돌려줌

            $('.txt-relate').removeClass('active')
            //after 화살표를 원상태로 돌려줌

        }else{//첫 클릭 때 실행
            $('.related-sub').slideUp();
            //2.click된 .related-sub을 제외한 .related-sub은 닫힘
            $(this).siblings('.related-sub').stop().slideDown();
            //1. click한 버튼의 형제관계에 있는 .related-sub 이 열린다


            $('.btn-relate').removeClass('active');
            //4.click한 버튼을 제외한 나머지 .btn-relate에 클래스는 빼줌
            $(this).addClass('active');
            //3. click한 버튼에 active클래스 넣어줌
            // _ 영역색상바뀜

            $('.txt-relate').removeClass('active')
            //6.클릭하지 않은 나머지의 클래스를 지워줌
            $(this).find('.txt-relate').addClass('active')
            //5.txt-relate에 active클래스 넣어줌
            // _ after의 화살표 회전
        }
    });





    //.footer .sns-area 아이콘 hover 이벤트
    $('.sns-new .facebook').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    });
    $('.sns-new .twiter').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    });
    $('.sns-new .instagram').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    });
    $('.sns-new .kakaostory').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    });
    $('.sns-new .youtube').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    });
    $('.sns-new .nblog').hover(function(){
        $(this).addClass('active')
    },function(){
        $(this).removeClass('active')
    });




    $('.related-sub li:first-child a').keydown(function(e){

      if(e.keyCode === 9 && e.shiftKey){
        $('.related-sub').slideUp();
        $('.btn-relate').removeClass('active');
      }
    })

    $('.related-sub li:last-child a').keydown(function(e){

      if(e.keyCode === 9 && !e.shiftKey){
        $('.related-sub').slideUp();
        $('.btn-relate').removeClass('active');
      }
    })
  
});