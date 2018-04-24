require('../common/common');

$(document).ready(function() {
    $("#showPassword").on('click', function() {
        var input = $("#password");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    })
});

$(document).ready(function() {
    $("#showPasswordConfirm").on('click', function() {
        var input = $("#register\\.checkPwd");

        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    })
});