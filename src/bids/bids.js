require('../common/common');

$(document).ready(function() {
	    new Swiper('.swiper-container.related-documents-swiper', {
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,

	    pagination: {
	        el: '.main-pagination.swiper-pagination',
	        clickable: true
	    }
	});

 // //    if ($(window).width() > 992) {
	// //    $('#relatedDocumentsSwiper').removeClass('related-documents-swiper');
	// // }
	// // else {
	   
	// // }

	// if ($(window).width() < 992) {
	//     $('#relatedDocumentsSwiper').addClass('related-documents-swiper');
	// } else {
	//     $('#relatedDocumentsSwiper').removeClass('related-documents-swiper');
	// }

	// $(window).width() > 992 {
	//     $('#relatedDocumentsSwiper').removeClass('related-documents-swiper');
	// }    
});