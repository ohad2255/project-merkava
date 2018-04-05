require('./header/header');

$(document).ready(function() {
    $("#mainMobileNavTrigger").off("click.toggleMenu").on("click.toggleMenu", function() {
        //debugger
        $("body").toggleClass("mobile-menu-open");
        //$("body").removeClass("mobile-menu-open");
    })

    // $("#mainMobileNavTrigger").off("click.toggleMenu").on("click.toggleMenu", function() {

    // })

    $('.lng-btn.dropdown-toggle').dropdown();
    $('.input-toggle.dropdown-toggle').dropdown();
    $('.nav-toggle.dropdown-toggle').dropdown();

    $('.main-menu-mobile-container .nav-item').off("click.toggleNavItem").on("click.toggleNavItem", function() {
       this.classList.toggle("open");
    });
});


$(document).on('focusin', function() {
    $('.focus').removeClass('focus');
});

$('.main-nav-wrapper .main-nav-item-dropdown a').focus(function() {
    $('.focus').removeClass('focus');
    $(this).parent('.main-nav-item-dropdown').addClass('focus')
})

