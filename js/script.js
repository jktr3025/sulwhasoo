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
})//jquery