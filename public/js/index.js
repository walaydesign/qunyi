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

$(".kv_reserve").click(function(){
    var top = $("#contact_form").offset().top;
    $("html, body").animate({ scrollTop: top }, parseInt(500));
})

$(window).on("resize scroll",function(){
    if($(window).scrollTop()>0){
        $(".header").addClass("scrolldown");
    }else {
        $(".header").removeClass("scrolldown");
    }
})

function sendEmail(){
    Email.send({
        SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
        To : "zhulixdesign@gmail.com, zhuliservice@gmail.com, pinruei@gmail.com",
        From : "walayydesign@gmail.com",
        Subject : "群邑璟美預約賞屋",
        Body : "姓名:" + document.getElementById("name").value
                + "<br>性別:" + document.getElementById("gender").value
                + "<br>手機:" + document.getElementById("phone").value
                + "<br>方便聯絡時間:" + document.getElementById("time").value
    }).then(
        message => alert("感謝您的來信！我們很快就會和您聯繫！"),
    );
}

$(".btn-clear").click(function() {
    $(this).parents(".contact_form").find("input").val("");
})