/**
 * Main JS file for Earmarked behaviors
 */

( function( $ ) {
	// Flex Slider
	$( '.flexslider' ).flexslider({
		slideshow:      false,
		animation:      'fade',
		controlNav:    false,
		prevText:      '',
		nextText:      '',
		slideshowSpeed: '14000',
		animateHeight:  true
	});

	$( '.minislides .carousel' ).flexslider({
		animation:     'slide',
		slideshow:     false,
		animationLoop: false,
		itemWidth:     62,
		itemHeight:    62,
		directionNav:  true,
		controlNav:    false,
		prevText:      '',
		nextText:      '',
		animationLoop: false,
	  });

	// Social Nav
	$('.social-links li').each(function(){
		$(this).find('a').each(function(){
			$(this).wrapInner('<span class="screen-reader-text"></span>');
		});
	});
} )( jQuery );
