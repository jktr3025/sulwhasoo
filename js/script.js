$(function(){
    //language
    $(".select_language").click(function(){
        $(this).toggleClass("show");
    })//click

    //menu
    $(".sub").hide();
    $(".gnb_menu > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $(".gnb_menu").stop().animate({height:"80px"},500);
    }, function(){
        $(this).find(".sub").stop().slideUp();
        $(".gnb_menu").stop().animate({height:"50px"},500);
    })//hover
    

    //이미지 슬라이드
    $(".visual_wrap").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots : true,
        arrows : true
    })

    //설화수 선물 추천 탭
    $(".recommand_tab a").click(function(e){
        e.preventDefault();
        $(".recommand_tab a").removeClass("on");
        $(this).addClass("on");


        n = $(this).index();
        console.log(n);
        
        $(".recommand_list_wrap>ul").removeClass("act")
        $(".recommand_list_wrap>ul").eq(n).addClass("act")
    })//click

    //플래그십 슬라이드
    $(".flag_slider").slick({
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        arrows:true,
        fade:true
    })





})//jquery