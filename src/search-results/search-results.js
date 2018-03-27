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

	     
	    if(checked){
		    $('.sub-checkbox').each(function() {
		       $(this).prop('selected',true);
		    });
	    }else{
	    // Deselect All
		    $('.sub-checkbox').each(function() {
		    	$(this).prop('selected',false);
		    });
	    }
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
});