import createSwiperSlide from "./features/createSwiper.js";

const $ = document
const secondSwiperSlide = $.querySelector('.mySwiper2').classList[1]
const thirdSwiperSlide = $.querySelector('.mySwiper3').classList[1]

createSwiperSlide({
    spaceBetween: 10,
    zoom: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
}, secondSwiperSlide)

createSwiperSlide({
    slidesPerView: 2,
    spaceBetween: 2,
    breakpoints: {
        640: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        }
    },
    navigation: {
        nextEl: ".btn-next-related-product-slider",
        prevEl: ".btn-prev-related-product-slider",
    },
}, thirdSwiperSlide);