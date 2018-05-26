require('../common/common');

$(document).ready(function() {
    $("#showPasswordProfile").on('click', function() {
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
    });

    $("#activeAccount").on('click', function(){
        $("html").find($(".input-first-label")).toggleClass("input-first-label-active");
        $("html").find($(".input-label-active-wrapper")).toggleClass("d-none");
        $("html").find($(".input-label-not-active-wrapper")).toggleClass("d-none");
        // isChecked = $('#activeAccount').is(':checked');

        // if (isChecked === "true") {
        //     $("html").find($(".input-first-label")).addClass("background-color");
        // } else {
        //     input.attr("type", "password");
        // }
    });

    $("#inputPasswordProfile").focusin(function() {
        $(".hint").show();
    }).focusout(function () {
        $(".hint").hide();
    });
});