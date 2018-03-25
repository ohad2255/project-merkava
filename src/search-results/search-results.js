require('../common/common');

$(document).ready(function() {
    
	$('.type-filter-close').click(function() {
		$('.type-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate'); 
	});

	$('.date-filter-close').click(function() {
		$('.date-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	}); 

	$('.status-filter-close').click(function() {
		$('.status-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.contact-topics-filter-close').click(function() {
		$('.contact-topics-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.office-filter-close').click(function() {
		$('.office-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.more-filter-close').click(function() {
		$('.more-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});
});