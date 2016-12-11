$(function() {
	var nPosition = $('#nav-bar').offset().top - 10;
	var navBar = document.getElementById('nav-bar');
	var headerGuide = document.getElementById('header');

	function navControl() {
		var defaultScroll = $(document).scrollTop();
		if(defaultScroll >= nPosition) {
			navBar.classList.add('fixed-nav');
			header.classList.add('expand-header');
		} else {
			navBar.classList.remove('fixed-nav');
			headerGuide.classList.remove('expand-header');
		}
	}
	$(window).scroll(navControl);
});