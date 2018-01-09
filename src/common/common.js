new Swiper('.swiper-container', {

	direction: 'horizontal',
	loop: true,
	speed: 1000,

	pagination: {
		el: '.main-pagination.swiper-pagination',
		clickable: true,
	},
})

$('.lng-btn.dropdown-toggle').dropdown()
$('.input-toggle.dropdown-toggle').dropdown()
$('.nav-toggle.dropdown-toggle').dropdown()
