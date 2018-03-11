require('../common/common');

$(document).ready(function() {
    new Swiper('.swiper-container.related-documents-swiper', {
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,

	    pagination: {
	        el: '.related-document-pagination.swiper-pagination',
	        clickable: true
	    }
	});

	new Swiper('.swiper-container.winning-bidders-swiper', {
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,

	    pagination: {
	        el: '.winning-bidders-pagination.swiper-pagination',
	        clickable: true
	    }
	});

	new Swiper('.swiper-container.winning-bidders-swiper-2', {
	    direction: 'horizontal',
	    loop: true,
	    speed: 1000,

	    pagination: {
	        el: '.winning-bidders-pagination-2.swiper-pagination',
	        clickable: true
	    }
	});

	// $('.related-documents-container-close').click(function() {
	// 	$('.related-documents-container').toggleClass('d-block');
	// 	$(this).toggleClass('border-none');
	// 	$(this).find($(".grey-arrow")).toggleClass("rotate");
	// });

	// $('.winning-bidders-container-close').click(function() {
	// 	$('.winning-bidders-container').toggleClass('d-block');
	// 	$(this).toggleClass('border-none');
	// 	$(this).find($(".grey-arrow")).toggleClass("rotate");
	// }); 

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