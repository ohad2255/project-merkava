require('./header/header');

$(document).ready(function() {
    new Swiper('.swiper-container.main-gallery-swiper', {
        direction: 'horizontal',
        loop: true,
        speed: 1000,

        pagination: {
            el: '.main-pagination.swiper-pagination',
            clickable: true
        }
    });

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

