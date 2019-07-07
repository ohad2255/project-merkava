require('../common');

$('#inputErrorP').hide();
$(document).ready(function() {


	$(window).resize(function(){
	    if ($(window).width() <= 992){  
	        $('.logged-in-name').on('click', function () {
				$(this).next('.ent-dropdown-items-container').toggleClass('none');
				$(this).clear();
			});
	    }   
	}); 


	$('.logged-in-name').keypress(function (e) {
	  var key = e.which;
	  if (key == 13) { 
	    $('html').find('.ent-dropdown-items-container').toggleClass('none');
		$(this).clear()
	  }
	}); 

	$( document ).on( 'keydown', function(e) {
        if ( e.keyCode === 27 ) { // ESC
             $('.main-nav-item-dropdown').removeClass('focus');
        }
    });  

	let isSkipSubMenu = false

	$('header .nav-item .main-nav-item-link').on('keyup', function (e) {
		if (e.key === 'Escape') {
			const $navItem = $(this).parents('.nav-item')

			setTimeout(() => {
				// Disable showing the dropdown sub-menu
				$navItem.addClass('hide-dropdown')

				// Focus the parent .nav-item
				setTimeout(() => $navItem.focus())

				// Re-enable showing the dropdown sub-menu
				$navItem.one('blur', () => $navItem.removeClass('hide-dropdown'))
			})

			isSkipSubMenu = true
		}
	})

	// Blur menu item when pressing ESC
	$('header .nav-item').on('keyup', function (e) {
		switch (e.key) {
			case 'Escape':
				$(this).blur()
				break;

			case 'Tab':
				if (!e.shiftKey && isSkipSubMenu) {
					// Prevent focusing the next link in the sub-menu
					e.preventDefault()
					// Instead, focus the next menu item
					$(this).next().focus()

					isSkipSubMenu = false
				}
				break;
		}
	})

    function handleFirstTab(e) {
	    if (e.keyCode === 9) { // the "Tab" key
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

    $('.dictionary .card-block em').parents('.collapse').collapse('show');
});

$("#mainInput").on('keyup', function (e) {
    if (e.keyCode == 13) {
        $('#searchInput').click();
    }
});


