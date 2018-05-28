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
        //debugger
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

    $('#inputPassword').focusin(function() {
        $('.hint').show();
    }).focusout(function () {
        $('.hint').hide();
    });
});