
var Pikaday = require('pikaday');
require('pikaday/scss/pikaday.scss');
require('../common/common');

$(document).ready(function() {
    
	$('.type-filter-close').click(function() {
		$('.type-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate'); 
	});

	$('.date-filter-close').click(function() {
		$('.date-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	}); 

	$('.status-filter-close').click(function() {
		$('.status-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.contact-topics-filter-close').click(function() {
		$('.contact-topics-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.office-filter-close').click(function() {
		$('.office-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.more-filter-close').click(function() {
		$('.more-filter-wrapper').toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate');
	});

	$('.filter-mobile-wrapper').click(function() {
		$('.search-results-filter-container').toggleClass('d-none');
		$('.search-results-content').toggleClass('d-none');
	});

	// if ($('#main-checkbox').prop("checked")) {
	// 	var subCheckboxs = $('.sub-checkbox'); 
	// 	var checked = $(this).is(':checked');

	// 	Object.keys($('#sub-checkbox1').forEach(function(elementKey) {
	// 		myList.$elements[elementKey] = $elements[elementKey];
	// 	});
	// };

	$("#main-checkbox").change(function(){
		var subCheckboxs = $('.sub-checkbox');
		var checked = $(this).is(':checked');
		subCheckboxs.attr('checked',checked);
	});

	$('.sub-checkbox').change(function() {
		var hasSelectedSubCheckboxs = $('.sub-checkbox:checked').length > 0;
		$("#main-checkbox").attr('checked',hasSelectedSubCheckboxs);
	});
 
	// // Changing state of Checkbox
	// $("#sel_users").change(function(){

	// 	// When total options equals to total selected option
	// 	if($("#sel_users option").length == $("#sel_users option:selected").length) {
	// 	   $("#checkallusers").prop("checked", true);
	// 	} else {
	// 	   $("#checkallusers").removeAttr("checked");
	// 	}
	// });
	//$('.datepicker').datepicker();

	// $(function () {
 //        $('#datepicker1').datepicker();
 //        $('#datepicker2').datepicker({
 //            useCurrent: false //Important! See issue #1075
 //        });
 //        $("#datepicker1").on("dp.change", function (e) {
 //            $('#datepicker2').data("datepicker").minDate(e.date);
 //        });
 //        $("#datepicker2").on("dp.change", function (e) {
 //            $('#datepicker1').data("datepicker").maxDate(e.date);
 //        });
 //    });
 
	$('.datepicker').each(function() {
	    $(this).data('pikaday', new Pikaday({ field: this }));
	});
});