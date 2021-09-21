jQuery(document).ready(function(){
    $ = jQuery.noConflict();
    
	$(document).on('click', '.eihe-notice .notice-dismiss, .eihe-notice .eihe-done', function() {
		var $eiherate = $(this).closest('.eihe-notice');
		
		$eiherate.slideUp();
		$.ajax({
			url: ajaxurl,
			data: {
				action: 'eihe_top_notice'
			}
		})
	});
});