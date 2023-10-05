import createSwiperSlide from "./features/createSwiper.js";

const $ = document
const firstSwiperSlide = $.querySelector('.mySwiper1').classList[1];
const secondSwiperSlide = $.querySelector('.mySwiper2').classList[1]
const thirdSwiperSlide = $.querySelector('.mySwiper3').classList[1]

createSwiperSlide({
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
}, firstSwiperSlide);

createSwiperSlide({
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        991: {
            slidesPerView: 3,
        }
    },
    navigation: {
        nextEl: ".btn-prev-second-slider",
        prevEl: ".btn-next-second-slider",
    },
}, secondSwiperSlide);

createSwiperSlide({
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: ".btn-next-third-slider",
        prevEl: ".btn-prev-third-slider",
    },
}, thirdSwiperSlide);