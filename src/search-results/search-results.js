
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
		$('.grey-overlay').toggleClass('d-block');
		//$(this).parent().toggleClass('add-border');
		$(this).find($('.mobile-filter-arrows-wrapper')).toggleClass('rotate');
		$('.facet').toggleClass('padding-top-facet');
		$('.filters-list').toggleClass('padding-top-filters-list');
		//$(".facet").css("margin-top", "90px");
		//$('.mobile-filter-arrows-wrapper').hasClass('rotate');
	});

	// $('.filter-mobile-wrapper').change(function() {
	// 	debugger
	// 	$(".search-results-filter-wrapper").css( "padding-top", 0);
	// });

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
		//

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
		// 
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

	// $('.icheck').change(function() {
	// 	//
	//     // Get the checkbox
	//     //var checkBox = $('.icheck');
	//     // Get the output text
	// 	var filtersItem = $('.deselect-all-filters-wrapper');

	// 	// If the checkbox is checked, display the output text
	// 	if ($(this).prop("checked")){
	// 		filtersItem.removeClass("d-none");
	// 		filtersItem.addClass("d-flex");
	// 	} else {
	// 		filtersItem.removeClass("d-flex");
	// 		filtersItem.addClass("d-none");
	// 	}
	// });


	$('.icheck').change(function() {
		
		var $filterOption = $(".icheck");
		var $filtersOptions = $();
		var $this = $(this);
		var $filtersList = $(".filters-list");
		var $deselectAllWrapper = $("deselect-all-filters-wrapper");
		//var currIndex = $filterOption.eq(index);
		
		$filterOption.each(function(index, filtersItemId) {
			var currIndex = $this.eq(index);
			//$( "div" ).eq( "1" )

			if (currIndex.prop("checked")) {
				// var $body = $("search-results-body");

				var $label = $(".main-label")
				var filtersItemId = currIndex.prop("id");
				var filtersItemName = currIndex.next($label).text();
				var filtersItemTemplate = 
				
			    `
					<li class="filters-list-item" data-related-checkbox-id="${filtersItemId}" data-type="filters-Item">
							${filtersItemName}
							<button class="deselect-filter-btn"></button>
					</li>
			    `

			    $.merge($filtersOptions, $(filtersItemTemplate));
			}

			$filterOption.eq(index);
		});


		$("html").find($filtersList).append($filtersOptions);

		if($filterOption.prop("checked").length != 0){
			
		} else {

		};

		//$("deselect-all-filters-wrapper").css("display", "flex");
	});

	// $('.icheck').click(function(){
	// 	$("deselect-all-filters-wrapper").css("display", "flex");
	// })
	



	// $(".deselect-filter-btn").click(function() {
	// 	
	// 	var $clicked = $(this);
	// 	var type = $clicked.attr("data-type");	
	// 	var relatedCheckboxId = $clicked.attr("data-related-checkbox-id");
	// 	var $relatedCheckbox = $("#" + relatedCheckboxId);
	// 	var isChecked = $relatedCheckbox.prop("checked");

	// 	if (isChecked) {

	// 		$relatedCheckbox.prop("checked", false);
	// 		// if (type === "subject") {
	// 		// 	toggleSubject($relatedCheckbox)
	// 		// } else if (type === "option") {
	// 		// 	toggleSubjectOption($relatedCheckbox)
	// 		// } //else if (type === "mepharsem") {
	// 			//toggleMepharsem($relatedCheckbox)
	// 		//}
	// 	}
	// });

	
	
	// $('.icheck').click(function() {
	// 	var $this = $(this);
	// 	//
	// 	if ($this.prop("checked")) {
	// 		// var $body = $("search-results-body");
	// 		var $label = $(".main-label")
	// 		var filtersItemId = $this.prop("id");
	// 		var filtersItemName = $this.next($label).text();
	// 		var $filtersList = $(".filters-list");
	// 		var filtersItemTemplate = 
	// 		// <div class="my-list-subjects-list-subject">
	// 	 //        <div class="my-list-subject-wrapper d-flex align-items-center">  
	// 	 //          <div 
	// 	 //            class="my-list-item my-list-subject-delete" 
	// 	 //            data-related-checkbox-id="${subjectId}"
	// 	 //            data-type="subject"
	// 	 //          ><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjEzcHgiIGhlaWdodD0iMTNweCIgdmlld0JveD0iMCAwIDEzIDEzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPg0KICAgIDwhLS0gR2VuZXJhdG9yOiBza2V0Y2h0b29sIDQ4LjIgKDQ3MzI3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4NCiAgICA8dGl0bGU+Q0NDNDNEOTYtQTcxQS00QTMxLUE1MEMtMDY2RDQ0MThGMDEyPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSIwNF9teS1saXN0X29wZW4iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zNDEuMDAwMDAwLCAtNjA2LjAwMDAwMCkiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+DQogICAgICAgIDxnIGlkPSJiZyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMS4wMDAwMDAsIDUwNi4wMDAwMDApIiBzdHJva2U9IiM0RTU2NjUiIHN0cm9rZS13aWR0aD0iMS41Ij4NCiAgICAgICAgICAgIDxnIGlkPSLXoNeV16nXkC3XodeS15XXqCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDcyLjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0xMSI+DQogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC0yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzMDMuMDAwMDAwLCAyNS4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNDAuMDAwMDAwLCA0LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aC01MzIiIHBvaW50cz0iMCAwIDUuNDUxMzU3MDIgNS41IDExIDAuMDU1MDY3MzE2OCI+PC9wb2x5bGluZT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IlBhdGgtNTMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1LjUwMDAwMCwgOC4yNTAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTUuNTAwMDAwLCAtOC4yNTAwMDApICIgcG9pbnRzPSIwIDUuNSA1LjQ1MTM1NzAyIDExIDExIDUuNTU1MDY3MzIiPjwvcG9seWxpbmU+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4=" alt="delete-x"></div>
	// 	 //          <div class="my-list-subject-name">${subjectName}</div>
	// 	 //          ${arrow}
	// 	 //        </div>
	// 	 //        <div class="my-list-options-wrapper ${collapseClass}">
		        	
	// 	 //        	<!-- DYNAMIC CONTENT -->

	// 	 //        </div>
	// 	 //    </div>
	// 	    `
	// 			<li class="filters-list-item" data-related-checkbox-id="${filtersItemId}" data-type="filters-Item">
	// 					${filtersItemName}
	// 					<button class="deselect-filter-btn"></button>
	// 			</li>
	// 	    `

	// 	    $("html").find($filtersList).append(filtersItemTemplate);
	// 	}
	// });
});




