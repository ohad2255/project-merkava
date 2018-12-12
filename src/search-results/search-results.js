
var Pikaday = require('pikaday');
require('pikaday/scss/pikaday.scss');
require('../common/common');
require('jquery-infinite-scroll-helper');
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
	  
	var hasMore=true;
	var container=$('.search-results-content-with-results');
	container.infiniteScrollHelper({
	  loadMore: function(page,done) {
		  if(!hasMore){
			  return;
		  }
		  $.get('ajaxHtml/?s='+$.urlParam('s')+'&text='+$.urlParam('text')+'&page=' + page, function(data) {
			  // parse json data and create new html then append
			 	 var htmlData=$("<div>"+data+"</div>");
				var ajaxData=htmlData.find("#ajaxData");
				var totalResults=ajaxData.find("#totalResults").html();
				var numberOfPages=ajaxData.find("#numberOfPages").html();
				var currentPage=ajaxData.find("#currentPage").html();
				var pageSize=ajaxData.find("#pageSize").html();

				if (currentPage + 1 >= numberOfPages) {
				hasMore = false;
				}

				loadResults(htmlData.find("#ajaxResults"));
		  });
	  },
	  startingPageCount:0,
	  bottomBuffer:500,
	  doneLoading: function() {
		  // return true if you are done doing your thing, false otherwise
		  return false;
	  }
	  });
	  function loadResults(htmlResults){
		  container.append(htmlResults);
	  }
	  function buildSearchResults(result){
  
	  }
	  $.urlParam = function(name){
		  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		  if (results==null){
		  return null;
		  }
		  else{
		  return decodeURI(results[1]) || 0;
		  }
	  }
});