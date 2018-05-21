require('../common');

$(document).ready(function() {
	$('.logged-in-name').on('click', function () {

		$(this).next(".ent-dropdown-items-container").toggleClass("d-none");
		$(this).clear()
	});

	$('.logged-in-name').keypress(function (e) {
	  var key = e.which;
	  if (key == 13) { 
	    $("html").find(".ent-dropdown-items-container").toggleClass("d-none");
		$(this).clear()
	  }
	});   
});


