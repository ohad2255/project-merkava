require('../common/common');

$(document).ready(function() {

    $('#showPasswordEye').on('click', function() {
        //debugger
        var input = $('#inputPassword');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            $(this).toggleClass('d-none');
            $('html').find($('#showPasswordEyeShow')).toggleClass('d-none');
        } else {
            input.attr('type', 'password');
        }
    });

    $('#showPasswordEyeShow').on('click', function() {
        
        var input = $('#inputPassword');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }

        $('html').find($('#showPasswordEye')).toggleClass('d-none');
        $(this).toggleClass('d-none');
    });

    $('#showPasswordConfirmEye').on('click', function() {
        debugger
        var input = $('#inputPasswordConfirm');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            $(this).toggleClass('d-none');
            $('html').find($('#showPasswordConfirmEye')).toggleClass('d-none');
        } else {
            input.attr('type', 'password');
        }

        $('html').find($('#showPasswordConfirmEyeShow')).toggleClass('d-none');
        $(this).toggleClass('d-none');
    });

    $('#showPasswordConfirmEyeShow').on('click', function() {
        
        var input = $('#inputPasswordConfirm');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }

        $('html').find($('#showPasswordConfirmEye')).toggleClass('d-none');
        $(this).toggleClass('d-none');
    });

    // $('#inputPassword').on('change', function() {
    //     if ($(this).attr('type') === 'password') {
    //         input.attr('type', 'text');
    //         $(this).toggleClass('d-none');
    //         $('html').find($('#showPasswordEyeShow')).toggleClass('d-none');
    //     } else {
    //         input.attr('type', 'password');
    //     }
    // });

    $('#inputPassword').focusin(function() {
        $('.hint').show();
    }).focusout(function () {
        $('.hint').hide();
    });

    $('.password-input').each( function() {
	    //var input = $('#inputPassword');
	    // var value = $(this).val();
	    // if ( value.length() > 0 ) {
	    	
	    // 	$(this).addClass('padding');
	    // } else {
	    //     $(this).removeClass('padding');
	    // 
	    var value = $(this).val();
        if ($(this).attr('type') === 'password' && value.length() > 0) {
        	debugger
            $(this).toggleClass('padding');
        } else {
            $(this).removeClass('padding');
        }
	});
});

// $(document).ready(function() {

// 	var input = $('#inputPassword');
//     var value = input.val();
//     if ( value.length() > 0 && input.attr('type') === 'password' ) {
//     	input.addClass('padding');
//     } else {
//         input.removeClass('padding');
//     }
// });



	