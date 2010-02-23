$(document).ready(function() {
	
	// Open external links in a new window or tab
	$('a[rel$=external]').click(function() {
		$(this).attr('target', "_blank");
	});
	
	// Fix PNG transparency in IE6
	if ($.browser.msie) {
		DD_belatedPNG.fix('.png_bg');
	}

});