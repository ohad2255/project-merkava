require('../common/common');

$(document).ready(function() {

    $('#showPasswordEye').on('click', function() {
        //debugger
        var input = $('#inputPasswordReg');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            $(this).toggleClass('d-none');
            $('html').find($('#showPasswordEyeShow')).toggleClass('d-none');
        } else {
            input.attr('type', 'password');
        }
    });

    $('#showPasswordEyeShow').on('click', function() {
        
        var input = $('#inputPasswordReg');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
        } else {
            input.attr('type', 'password');
        }

        $('html').find($('#showPasswordEye')).toggleClass('d-none');
        $(this).toggleClass('d-none');
    });

    // $('#showPasswordConfirm').on('click', function() {
    //     var input = $('#register\\.checkPwd');

    //     if (input.attr('type') === 'password') {
    //         input.attr('type', 'text');
    //     } else {
    //         input.attr('type', 'password');
    //     }
    // });

    $('#inputPasswordReg').focusin(function() {
        $('.hint').show();
    }).focusout(function () {
        $('.hint').hide();
    });
});