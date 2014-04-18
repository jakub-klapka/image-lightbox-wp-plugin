/* global jQuery, LumiFancyboxConfig */
(function($){

	$(document).ready(function(){
		var config = {
			'padding': 0,
			'openEffect': 'elastic',
			'closeEffect': 'elastic'
		};

		if( typeof LumiFancyboxConfig === 'object' ) {
			$.extend( config, LumiFancyboxConfig );
		}

		$('a[data-lumi-fancybox]').fancybox(config);
	});

})(jQuery);