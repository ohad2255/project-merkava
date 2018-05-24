require('../common/common');

$(document).ready(function() {
    $("#showPassword").on('click', function() {
        var input = $("#InputPasswordSignIn");
        if (input.attr("type") === "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    })
});