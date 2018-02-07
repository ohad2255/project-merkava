require('../common/common');

$(document).ready(function(){
	$('.first-tab-a').addClass('active')

    var $checkboxes = $('#mepharsemimformMain input[type="checkbox"]');
        
    $checkboxes.change(function(){
        var countCheckedCheckboxes = $checkboxes.filter(':checked').length;
        $('#count-checked-checkboxes').text(countCheckedCheckboxes);
        
        $('#edit-count-checked-checkboxes').val(countCheckedCheckboxes);
    });
   
  //   $('.form-item-select-all').on('click', function() {
  //   	$('.form-checkbox').prop('checked', true);
		// $('.form-checkbox').prop('checked', false);
  //   });

    $('#checkBox1').click(function() {
	    if ($(this).is(':checked')) {
	        $('.form-checkbox-a').attr('checked', true);
	    } else {
	        $('.form-checkbox-a').attr('checked', false);
	    }
	});

    $('#checkBox1B').click(function() {
	    if ($(this).is(':checked')) {
	        $('.form-checkbox-b').attr('checked', true);
	    } else {
	        $('.form-checkbox-b').attr('checked', false);
	    }
	});
});