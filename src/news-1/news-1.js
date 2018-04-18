require('../common/common');

$(document).ready(function() {
    new Swiper('.swiper-container.relevant-links-swiper', {
	    spaceBetween: 10,
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,
	    slidesPerView: 'auto',

	    pagination: {
	        el: '.relevant-links-pagination.swiper-pagination',
	        clickable: true
	    }
	});

	$('.relevant-links-head').on('click', function () {
		$(".relevant-links-arrow").toggleClass("rotate");
		$(".relevant-links-wrapper-mobile").toggleClass("hidden");
	});
});