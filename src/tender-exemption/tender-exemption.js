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

	new Swiper('.swiper-container.related-exemptions-swiper', {
	    spaceBetween: 10,
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,
	    slidesPerView: 'auto',
	    slidesOffsetBefore: '20',

	    pagination: {
	        el: '.related-exemptions-pagination.swiper-pagination',
	        clickable: true
	    }
	});

	$('.communication-details-container-close').click(function() {
		$('.communication-details-container').toggleClass('hidden border-on');
		$(this).toggleClass('border-none');
		$(this).find($('.grey-arrow')).toggleClass('rotate'); 
	});

	$('.related-documents-container-close').click(function() {
		$('.related-documents-container').toggleClass('hidden border-on');
		$(this).toggleClass('border-none');
		$(this).find($('.grey-arrow')).toggleClass('rotate'); 
	});

	$('.subjects-container-close').click(function() {
		$('.subjects-container').toggleClass('d-flex');
		$(this).toggleClass('border-none');
		$(this).find($(".grey-arrow")).toggleClass("rotate");
	});

	$('.related-exemptions-container-close').click(function() {
		$('.related-exemptions-container').toggleClass('hidden');
		$(this).toggleClass('border-none');
		$(this).find($('.grey-arrow')).toggleClass('rotate');
		$('.bids-footer').toggleClass('footer-border');
		$('.related-exemptions-main-container').toggleClass('margin-open');
	});

	$(window).on('resize', function () {
	    $('.winning-bidders-main-container, .related-exemptions-container').toggleClass('hidden', $(window).width() < 996);
	});

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