require('../common/common');

$(document).ready(function() {
    $("#showPassword").on('click', function() {
        var input = $("#inputPasswordProfile");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    })
});

$(document).ready(function() {
    $("#showPasswordConfirm").on('click', function() {
        var input = $("#inputPasswordConfirmProfile");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    })
});