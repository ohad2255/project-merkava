require('../common');

$(document).ready(function() {
	$('.logged-in-name').on('click', function () {

		$(this).next(".ent-dropdown-items-container").toggleClass("d-none");
		$(this).clear()
	});
});


