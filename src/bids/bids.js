require('../common/common');

$(document).ready(function() {
    new Swiper('.swiper-container.related-documents-swiper', {
	    spaceBetween: 10,
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,
	    slidesPerView: 'auto',

	    pagination: {
	        el: '.related-document-pagination.swiper-pagination',
	        clickable: true
	    }
	});

	new Swiper('.swiper-container.winning-bidders-swiper', {
		centeredSlides: false,
		slidesOffsetBefore: '-45',
		crossFade: true,
		virtualTranslate: false,
		slidesPerView: 'auto',
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,

	    breakpoints: {
	    	
			2000: {
				spaceBetween: 15
			},

			992: {
				spaceBetween: 10,
				slidesOffsetBefore: '0'
			}
		},

	    pagination: {
	        el: '.winning-bidders-pagination.swiper-pagination',
	        clickable: true
	    },

	    navigation: {
	        nextEl: '.swiper-button-prev.winning-bidders-button-prev-1',
	        prevEl: '.swiper-button-next.winning-bidders-button-next-1',
	    },
	});

	new Swiper('.swiper-container.winning-bidders-swiper-2', {
		//slidesPerView: 2,
		slidesOffsetBefore: '-45',
		slidesPerView: 'auto',
	    spaceBetween: 10,
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,

	    breakpoints: {
			2000: {
				spaceBetween: 15
			},

			992: {
				spaceBetween: 10,
				slidesOffsetBefore: '0'
			}
		},

	    pagination: {
	        el: '.winning-bidders-pagination-2.swiper-pagination',
	        clickable: true
	    },

	    navigation: {
	        nextEl: '.swiper-button-prev.winning-bidders-button-prev-2',
	        prevEl: '.swiper-button-next.winning-bidders-button-next-2',
	    },
	});

	new Swiper('.swiper-container.related-bids-swiper', {
	    spaceBetween: 10,
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,
	    slidesPerView: 'auto',
	    slidesOffsetBefore: '26',

	    pagination: {
	        el: '.related-bids-pagination.swiper-pagination',
	        clickable: true
	    }
	});

	$('.related-documents-container-close').click(function() {
		$('.related-documents-container').toggleClass('hidden border');
		$(this).toggleClass('border-none');
		$(this).find($('.grey-arrow')).toggleClass('rotate'); 
	});

	$('.winning-bidders-container-close').click(function() {
		$('.winning-bidders-main-container').toggleClass('hidden');
		$(this).toggleClass('border-none');
		$(this).find($('.grey-arrow')).toggleClass('rotate');
	}); 

	$('.subjects-container-close').click(function() {
		$('.subjects-container').toggleClass('d-flex');
		$(this).toggleClass('border-none');
		$(this).find($(".grey-arrow")).toggleClass("rotate");
	});

	$('.related-bids-container-close').click(function() {
		$('.related-bids-container').toggleClass('hidden');
		$(this).toggleClass('border-none');
		$(this).find($('.grey-arrow')).toggleClass('rotate');
		$('.bids-footer').toggleClass('footer-border');
		$('.related-bids-main-container').toggleClass('margin-open');
	});

	// $(window).on('resize', function () {
	//     $('.winning-bidders-main-container, .related-bids-container').toggleClass('hidden', $(window).width() < 996);
	// });

	var alterClass = function() {
	    var ww = document.body.clientWidth;
		if (ww > 992) {
		  $('.winning-bidders-main-container').removeClass('hidden');
		  $('.subjects-container').removeClass('d-none');
		} else if (ww <= 992) {
		   	$('.subjects-container').addClass('d-none');
		  };
	};
});