let galleryThumbs = new Swiper('.thumbnail_slider', {
	spaceBetween: 10,
	slidesPerView: 7,
	freeMode: true,
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
});

let galleryTop = new Swiper('.main_slider', {
	slidesPerView: 1.0,
	spaceBetween: 10,
	centeredSlides: true,
	width: 690,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	thumbs: {
		swiper: galleryThumbs
	}
});

let swiper = new Swiper('.slider2', {
    slidesPerView: 5.3,
    slidesPerGroup: 5,
	slidesPerGroupSkip: 6,
	spaceBetween: 10,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
		el: '.swiper-pagination',
		clickable: true,
    },
    navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
    },
});
