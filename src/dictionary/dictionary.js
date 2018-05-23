var Handlebars = require('handlebars');
require('../common/common');

$(document).ready(function() {
    
    $('.dictionary-body .collapse-button').on('click', function() {
        var toggleClass;
        if (this.classList.contains('collapse-button-open')) {
            $('.collapse').collapse('show');
        } else {
            $('.collapse').collapse('hide');
        }
    });
    $('.a-expression').show()
    $('.alphabet-item-1').addClass('active')
    $('.alphabet-item').on('click', function() {
    	$('.expression').hide();
    	var letter = this.getAttribute('letter');
    	$('#'+ letter).show();
    	$('.alphabet-item').removeClass('active')
    	$(this).addClass('active')
    });
    $('.collapse-button-show-all').on('click', function() {
    	$('.expressions-wrapper').show()
    });
});
