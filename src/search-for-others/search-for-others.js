require('../common/common');
var stickybits = require('stickybits');

$(document).ready(function() {
	
	stickybits.default('.options-container', { 
		//stickyBitStickyOffset: 20,
		verticalPosition: 'top',
		useStickyClasses: true
	});

	$('.icheck').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $(this).click();
            event.preventDefault();
            return false;
        }
	});

	$('.filter-mobile-wrapper').click(function() {
		$('.options-container').toggleClass('d-block');
		$('.grey-overlay').toggleClass('d-block');
		//$(this).parent().toggleClass('add-border');
		$(this).find($('.mobile-filter-arrows-wrapper')).toggleClass('rotate');
		//$(".facet").css("margin-top", "90px");
		//$('.mobile-filter-arrows-wrapper').hasClass('rotate');
	});
});