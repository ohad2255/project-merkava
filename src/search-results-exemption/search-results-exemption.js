
var Pikaday = require('pikaday');
require('pikaday/scss/pikaday.scss');
require('../common/common');

$(document).ready(function() {

	$('.status-filter-close').click(function() {
		$('.status-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.office-filter-close').click(function() {
		$('.office-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.amount-close').click(function() {
		$('.amount-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.date-filter-close').click(function() {
		$('.date-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	}); 

	$('.last-date-close').click(function() {
		$('.last-date-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate'); 
	});

	$('.tags-filter-close').click(function() {
		$('.tags-filter-wrapper').toggleClass('d-none border-b');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate'); 
	});

	$('.filter-mobile-wrapper').click(function() {
		$('.search-results-filter-container').toggleClass('d-none');
		$('.search-results-content').toggleClass('d-none');
	});
 
	$('.datepicker').each(function() {
	    $(this).data('pikaday', new Pikaday({ field: this }));
	});
});