require('../common/common');

$(document).ready(function() {
    $("#showPasswordProfile").on('click', function() {
        var input = $("#password");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    })
});


$(document).ready(function() {
    $("#showPasswordConfirmProfile").on('click', function() {
        var input = $("#newPasswordConfirmation");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    })
});