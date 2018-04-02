require('./header/header');

$(document).ready(function() {
    // $("#mainMobileNavTrigger").on("click", function() {
    //     $("body").toggleClass("mobile-menu-open");
    // })

    $('.lng-btn.dropdown-toggle').dropdown();
    $('.input-toggle.dropdown-toggle').dropdown();
    $('.nav-toggle.dropdown-toggle').dropdown();

    $('.main-menu-mobile-container .nav-item').on("click", function() {
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

