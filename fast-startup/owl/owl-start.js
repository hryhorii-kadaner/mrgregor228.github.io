$(document).ready(function () {

	var owl = $('.slider-1');
	owl.owlCarousel({
		loop: true,
		nav: true,		
		pagination: true,
		autoplay: true,
		center:true,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
		items: 3,
		mouseDrag: false,
		touchDrag: false,
		click:true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: true
			},
			1000: {
				items: 3,
				nav: true,
				loop: true
			}
		}
	});	

	$('#falseNavigationLeft').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	});
	
	$('#falseNavigationRight').click(function() {
		owl.trigger('next.owl.carousel', [300]);
	});
});