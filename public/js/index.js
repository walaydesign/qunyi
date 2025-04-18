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

// var swiperPlanMap = new Swiper(".plan_map_swiper", {
//     slidesPerView: 1,
//     spaceBetween: 0,
//     navigation: {
//         nextEl: ".plan_map-next",
//         prevEl: ".plan_map-prev",
//     },
//     pagination: {
//         el: ".plan_pagination",
//         clickable: true,
//     },
//     speed: 1000,
//     simulateTouch:false,
// })

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
    // on: {
    //     slideChange: function() {
    //         let index = $(".plan_swiper").find(".swiper-slide-active").index() + 1;
    //         swiperPlanMap.slideTo(index, 1000, true);
    //     }
    // },
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