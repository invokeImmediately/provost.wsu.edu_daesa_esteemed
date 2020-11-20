// See [https://github.com/invokeImmediately/provost.wsu.edu_daesa_esteemed] for repository of source code
/************************************************************************************************************
 * CUSTOM JQUERY-BASED DYNAMIC CONTENT                                                                      *
 ************************************************************************************************************/
( function ( $ ) {
	'use strict';

	$( function () {
		var siteURL = window.location.pathname;
		console.log( 'siteURL' );
		switch (siteURL) {
			/* case '/':
			$('#menu-item-35').remove();
			$('#spine-sitenav ul li').first().css('border-top', 'none');
			$('#spine-sitenav').addClass('homeless');
			break;*/
		case '/esteemed/news/':
		case '/daesa/esteemed/news/':
			$('.column.one').first().parent('.row').before('<section id="builder-section-1543274513343" class="row single h1-header gutter pad-ends"><div style="" class="column one "><h1>News</h1></div></section>' );
			break;
		}
	} );
} )( jQuery );
