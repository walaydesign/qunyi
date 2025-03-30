var swiper = new Swiper(".slider_swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 1000,
})

var swiper = new Swiper(".plan_swiper", {
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