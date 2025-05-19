AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

var swiperSlider = new Swiper(".slider_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1000,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})

var swiperValue = new Swiper(".value_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1000,
})


var swiperPlan = new Swiper(".plan_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".plan_map-next",
        prevEl: ".plan_map-prev",
    },
    pagination: {
        el: ".plan_pagination",
        clickable: true,
    },
    speed: 1000,
    simulateTouch:false,
})



$(".header_item").click(function(){
    let target = $(this).data("target");
    var top = $(target).offset().top - 99;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(".btn-contact").click(function(){
    var top = $("#contact").offset().top - 99;
    $("html, body").animate({ scrollTop: top }, parseInt(300));
})

$(window).on("resize scroll",function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("scrolldown");
    }else {
        $(".header").removeClass("scrolldown");
    }
})