require('../common/common');

$(document).ready(function() {
    new Swiper('.swiper-container.downloads-swiper', {
	    spaceBetween: 10,
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,
	    slidesPerView: 'auto',

	    pagination: {
	        el: '.downloads-pagination.swiper-pagination',
	        clickable: true
	    }
	});

	$('.downloads-head').on('click', function () {
		$(".downloads-arrow").toggleClass("rotate");
		$(".downloads-wrapper-mobile").toggleClass("hidden");
	});
});