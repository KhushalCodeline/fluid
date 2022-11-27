$ = jQuery;

// Slider js

$(".product_slider").slick({
	slidesToShow: 4,
	dots: false,
	infinite: false,
	speed: 300,
	prevArrow:
		"<div class='arrow-icon left-arrow'><img class='a-left control-c prev slick-prev' src='img/arrow-right-black.svg'></div>",
	nextArrow:
		"<div class='arrow-icon right-arrow'><img class='a-left control-c prev slick-prev' src='img/arrow-right-black.svg'></div>",
	responsive: [
		{
			breakpoint: 1199,
			settings: {


				slidesToShow: 3,
			},
		},
		{
			breakpoint: 992,
			settings: {


				slidesToShow: 2,
			},
		},
		{
			breakpoint: 480,
			settings: {


				slidesToShow: 1,
			},
		},
	],
});



// Parallx image
jQuery(window).on("load scroll", function () {
	if (jQuery(window).width() > 767) {
		var parallaxElement = jQuery(".parallx_img_part"),
			parallaxQuantity = parallaxElement.length;
		window.requestAnimationFrame(function () {
			for (var i = 0; i < parallaxQuantity; i++) {
				var currentElement = parallaxElement.eq(i),
					windowTop = jQuery(window).scrollTop(),
					elementTop = currentElement.offset().top,
					elementHeight = currentElement.height(),
					viewPortHeight = window.innerHeight * 1 - elementHeight * 1,
					scrolled = windowTop - elementTop + viewPortHeight;
				currentElement.css({
					transform: "translate3d(0," + scrolled * -0.12 + "px, 0)",
				});
			}
		});
	} else {
		jQuery(".parallx_img_part").css("transform", "none");
	}
});


// Fix menu
var heder_height = jQuery("header").outerHeight();
$(window).scroll(function () {
	var sticky = $("header"),
		scroll = $(window).scrollTop();

	if (scroll >= heder_height) {
		sticky.addClass("fixed");
	} else {
		sticky.removeClass("fixed");
	}
});

// Mobile menu js
$(document).ready(function () {
	if (screen.width <= 991) {
		$(".navbar-toggler").before($(".navbar-brand"));
		$(".navbar-brand").after($(".right-menu .account-intro"));
		$(".top_header").addClass("mobile-menu")

		$(".navbar-toggler").click(function (){
			$(this).toggleClass("active")
		})

		$(".navbar-nav a").click(function (){
			$(this).slideDown()
			$(this).parents(".navbar-collapse").removeClass("show");
			$(this).parents(".navbar-collapse").prev().removeClass("active");

		})
	}

	$(".navbar-nav a").click(function (){
		$(".navbar-nav a").removeClass("active");
		$(this).addClass("active");

	})
});


// AOS Js
AOS.init({
	once: true,
});

// Click to scroll Js
if (jQuery(".navbar-nav a").length > 0) {
	var Headerheight = jQuery(".main-header").outerHeight();

	jQuery(".navbar-nav a").click(function (e) {
		
		e.preventDefault();
		jQuery("html, body").animate(
			{
				scrollTop:
					jQuery(jQuery(this).attr("href")).offset().top -
					Headerheight,
			},
			
		);
	});
}