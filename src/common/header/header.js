require('../common');


$(document).ready(function() {

	$("#inputErrorP").hide();

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

	$( document ).on( 'keydown', function(e) {
        if ( e.keyCode === 27 ) { // ESC
             $('.main-nav-item-dropdown').removeClass('focus');
        }
    });  
});



$('#searchInput').on('click', function () {
	//debugger
	var Option0 = $(".input-dropdown-defult-item");
	var mainInput = $("#mainInput");


    if (mainInput.val().length && !$('.input-toggle-select').val()) {
    	//console.log('Entered if')
        // $(".input-error-p").removeClass("d-none");
        $("#inputErrorP").show();
    } else {
        $("#inputErrorP").hide();
    }
});


