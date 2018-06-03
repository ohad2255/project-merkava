require('../common/common');

$(document).ready(function() {

    // Show all the links which belong to the first available tab
    var firstNumber = $('.tab').first().data('number');
    $('.tab-content').hide();
    $(`.tab-content[data-number=${firstNumber}]`).show();

    // Highlight the first tab
    $('.tab').first().addClass('active');

    $('.tab').on('click', function() {
    	$('.tab-content').hide();
    	var number = $(this).data('number');
    	$(`.tab-content[data-number=${number}]`).show();
    	$('.tab').removeClass('active');
    	$(this).addClass('active');
    });
});