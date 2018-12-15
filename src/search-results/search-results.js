
var Pikaday = require('pikaday');
require('pikaday/scss/pikaday.scss');
require('../common/common');
//require('jquery-infinite-scroll-helper');
$(document).ready(function() {

	$('.close-filter-container').click(function() {
		$(this).next().toggleClass('d-none');
		$(this).toggleClass('border-none');
		$(this).find($('.filter-arrow')).toggleClass('rotate'); 
	});

	$('.filter-mobile-wrapper').click(function() {
		$('.filters-wrapper').toggleClass('d-none');
		$('.search-results-content-with-results').toggleClass('d-none');
	});

 
	$('.datepicker').each(function() {
	    $(this).data('pikaday', new Pikaday({ field: this }));
	});

	$(".close-filter-container").keyup(function(event) {
	    if (event.keyCode === 13) {
	        $(this).click();
	    }
	});

	$('.icheck').keypress(function (e) {
        var key = e.which;
        if (key == 13) {
            $(this).click();
            event.preventDefault();
            return false;
        }
	});

	$("input[data-type='currency']").on({
		keyup: function() {
	      formatCurrency($(this));
	    },
	    blur: function() { 
	      formatCurrency($(this), "blur");
	    }
	});


	function formatNumber(n) {
	  // format number 1000000 to 1,234,567
	  return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
	}


	function formatCurrency(input, blur) {
	  // appends $ to value, validates decimal side
	  // and puts cursor back in right position.
	  
	  // get input value
	  var input_val = input.val();
	  
	  // don't validate empty input
	  if (input_val === "") { return; }
	  
	  // original length
	  var original_len = input_val.length;

	  // initial caret position 
	  var caret_pos = input.prop("selectionStart");
	    
	  // check for decimal
	  if (input_val.indexOf(".") >= 0) {

	    // get position of first decimal
	    // this prevents multiple decimals from
	    // being entered
	    var decimal_pos = input_val.indexOf(".");

	    // split number by decimal point
	    var left_side = input_val.substring(0, decimal_pos);
	    var right_side = input_val.substring(decimal_pos);

	    // add commas to left side of number
	    left_side = formatNumber(left_side);

	    // validate right side
	    right_side = formatNumber(right_side);
	    
	    // On blur make sure 2 numbers after decimal
	    if (blur === "blur") {
	      right_side += "00";
	    }
	    
	    // Limit decimal to only 2 digits
	    right_side = right_side.substring(0, 2);

	    // join number by .
	    input_val = left_side + '.' + right_side + '₪';

	  } else {
	    // no decimal entered
	    // add commas to number
	    // remove all non-digits
	    input_val = formatNumber(input_val);
	    input_val = '₪' + input_val;
	    
	    // final formatting
	    if (blur === "blur") {
	      input_val += ".00";
	    }
	  }
	  
	  // send updated string to input
	  input.val(input_val);

	  // put caret back in the right position
	  var updated_len = input_val.length;
	  caret_pos = updated_len - original_len + caret_pos;
	  input[0].setSelectionRange(caret_pos, caret_pos);
	}

	$('.show-more-button').click(function() {
		var btn = $(this);
		var moreOptionsContainer = $('.more-options-container');
		var thisMoreOptionsContainer = btn.prev(moreOptionsContainer);
		var numberOfOptions = $('[thisMoreOptionsContainer] > div').length;
		//debugger

		thisMoreOptionsContainer.toggleClass('d-block text-toggle');

    	if(thisMoreOptionsContainer.hasClass('text-toggle')){
        	btn.text('הצג פחות');         
	    } else {
	        btn.text('הצג עוד');
	    }
		if (numberOfOptions.length != 0) {
			
	    }
		

		// if (moreOptionsContainer.length > 0) {
			
	 //    }
		// debugger
		// if (moreOptionsContainer.length > 0) {
		// 	btn.prev(moreOptionsContainer).toggleClass('d-block text-toggle');
		// 	btn.text('הצג פחות');
		// } else {
		// 	btn.text('הצג עוד');
		// }
	   


		// if ($('.filters-wrapper').hasClass('d-none')) {
		// 	var moreOptionsContainer = $('.more-options-container');
		//     moreOptionsContainer.addClass('d-block');
		//     btn.value  = "הצג פחות"; 
		// } else {
		// 	moreOptionsContainer.style.display = "none";
		//     btn.value = "הצג עוד"; 
		// } 
	});
	
	  
	// var hasMore=true;
	// var container=$('.search-results-content-with-results');
	// container.infiniteScrollHelper({
	//   loadMore: function(page,done) {
	// 	  if(!hasMore){
	// 		  return;
	// 	  }
	// 	  $.get('ajaxHtml/?s='+$.urlParam('s')+'&text='+$.urlParam('text')+'&page=' + page, function(data) {
	// 		  // parse json data and create new html then append
	// 		 	 var htmlData=$("<div>"+data+"</div>");
	// 			var ajaxData=htmlData.find("#ajaxData");
	// 			var totalResults=ajaxData.find("#totalResults").html();
	// 			var numberOfPages=ajaxData.find("#numberOfPages").html();
	// 			var currentPage=ajaxData.find("#currentPage").html();
	// 			var pageSize=ajaxData.find("#pageSize").html();

	// 			if (currentPage + 1 >= numberOfPages) {
	// 			hasMore = false;
	// 			}

	// 			loadResults(htmlData.find("#ajaxResults"));
	// 	  });
	//   },
	//   startingPageCount:0,
	//   bottomBuffer:500,
	//   doneLoading: function() {
	// 	  // return true if you are done doing your thing, false otherwise
	// 	  return false;
	//   }
	//   });
	//   function loadResults(htmlResults){
	// 	  container.append(htmlResults);
	//   }
	//   function buildSearchResults(result){
  
	//   }
	//   $.urlParam = function(name){
	// 	  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	// 	  if (results==null){
	// 	  return null;
	// 	  }
	// 	  else{
	// 	  return decodeURI(results[1]) || 0;
	// 	  }
	//   }
});