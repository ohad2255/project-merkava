require('../common');

$('#inputErrorP').hide();
$(document).ready(function() {

	//$('.logged-in-name').hover().trigger('click');
	//$('.logged-in-name').mouseover().trigger('click');
	//$('.logged-in-name').mouseout().trigger('click');

	// function handler(event) {

		
	// 	   $('.logged-in-name').mouseover().next(".ent-dropdown-items-container").removeClass("d-none");
	
	// 	if (event.type == 'mouseout') {
	// 	    $('.logged-in-name').next('.ent-dropdown-items-container').addClass('d-none');
	// 	}
	// }

	// $('.logged-in-name').on('mouseover', function() {
 //        $('.logged-in-name').next('.ent-dropdown-items-container').removeClass('none');
 //    });

    // $('.logged-in-name, .ent-dropdown-item-wrapper').on('mouseout', function() {
    //     $('.logged-in-name').next('.ent-dropdown-items-container').addClass('d-none');
    // });

	$('.logged-in-name').on('click', function () {

		$(this).next('.ent-dropdown-items-container').toggleClass('none');
		$(this).clear();
	});


	$('.logged-in-name').keypress(function (e) {
	  var key = e.which;
	  if (key == 13) { 
	    $('html').find('.ent-dropdown-items-container').toggleClass('d-none');
		$(this).clear()
	  }
	}); 

	$( document ).on( 'keydown', function(e) {
        if ( e.keyCode === 27 ) { // ESC
             $('.main-nav-item-dropdown').removeClass('focus');
        }
    });  

    function handleFirstTab(e) {
	    if (e.keyCode === 9) { // the "I am a keyboard user" key
	        document.body.classList.add('user-is-tabbing');
	        window.removeEventListener('keydown', handleFirstTab);
	    }
	}

	window.addEventListener('keydown', handleFirstTab);
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


