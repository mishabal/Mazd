$(".menu").on("click", function(e) {
	e.preventDefault; 
	$(this).toggleClass("menu_active");
	$(".menu-nav").toggleClass("menu-nav_active")
});
document.body.style.overflow = 'hidden';