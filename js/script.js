$(function(){
	// Creating the pretty text showing
	$("#timeline>.tl_elem>.circle").hover(function() {
		$(this).next('.caption').stop(true, true).fadeIn(300); // Show caption
		var caption = $(this).next('.caption');
		if($(this).hasClass('clicked')){
			$(this).next('.caption').find('p').hide();
			$(this).next('.caption').find('p:eq(1)').show();
		}else {
			$(this).next('.caption').find('p').hide();
			$(this).next('.caption').find('p:eq(0)').show();
		}
		caption.css({marginTop: parseInt(($(this).outerHeight() - caption.outerHeight())/2)+"px"});
	}, function() {
		$(this).next('.caption').stop(true, true).fadeOut(100); // Hide caption
	}).click(function(){
		$(this).toggleClass('clicked');
		if($(this).hasClass('clicked')){
			$(this).next('.caption').find('p').slideUp(100);
			$(this).next('.caption').find('p:eq(1)').slideDown(100);
		}else {
			$(this).next('.caption').find('p').slideUp(100);
			$(this).next('.caption').find('p:eq(0)').slideDown(100);
		}
	});
	// Create margin for each element
	var i = 0;
	$(".tl_elem").each(function() {
		$(this).css({marginTop: i * parseInt($(this).outerHeight()) + 120 + "px"});
		i++;
	});
});