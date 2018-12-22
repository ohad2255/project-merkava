require('../common/common');
var stickybits = require('stickybits');



// stickybits($('.options-wrapper'), { stickyBitStickyOffset: 20 })

$(document).ready(function() {
	//stickybits($('.options-wrapper'));

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
		$(this).find($('.mobile-filter-arrows-wrapper')).toggleClass('rotate');
		$(".filter-mobile-container").toggleClass('border-b');
	});
});
