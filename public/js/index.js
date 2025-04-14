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
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".plan_pagination",
        clickable: true,
    },
    speed: 1000,
})