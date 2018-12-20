
require('../common/common');

$(document).ready(function() {
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
		$('.facet').toggleClass('padding-top-facet');
		$('.filters-list').toggleClass('padding-top-filters-list');
		//$(".facet").css("margin-top", "90px");
		//$('.mobile-filter-arrows-wrapper').hasClass('rotate');
	});
});