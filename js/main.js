$(function() {
	$('.hamburger').click(function() {
			$(this).toggleClass('active');

			if ($(this).hasClass('active')) {
					$('.globalMenuSp').addClass('active');
			} else {
					$('.globalMenuSp').removeClass('active');
			}
	});
});
$(function() {
	$('.hamburger').click(function() {
			$(this).toggleClass('fix');

			if ($(this).hasClass('fix')) {
					$('body').addClass('fix');
			} else {
					$('body').removeClass('fix');
			}
	});
});