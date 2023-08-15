const createSwiperSlide = (confings, element) => {
    return (
        new Swiper(`.${element}`, confings)
    )
}

export default createSwiperSlide