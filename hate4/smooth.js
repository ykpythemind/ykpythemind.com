/**
 * Plugin Name: SmoothScroll
 * Plugin URI: http://2inc.org
 * Description: スムーススクロールでページ内移動するためのプラグイン。指定要素のhashをもとに移動する。
 * Version: 0.2
 * Author: Takashi Kitajima
 * Author URI: http://2inc.org
 * License: GPL2
 *
 * easing : http://jqueryui.com/demos/effect/easing.html
 * @param	{ duration, easing )
 *
 * Copyright 2012 Takashi Kitajima (email : inc@2inc.org)
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License, version 2, as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */
( function( $ ) {
	$.fn.SmoothScroll = function( config ) {
		var defaults = {
			duration : 1000,
			easing : 'easeOutQuint'
		};
		config = $.extend( defaults, config );
		return this.each( function( i, elem ) {
			$(elem).click( function() {
				var targetHash = this.hash;
				var offset = $(targetHash).eq(0).offset();
				if ( targetHash && offset !== null ) {


					var targetPosition = offset.top -  120 ; // henkoubun

if (targetHash=="#nav"){ var targetPosition = 1 ; }

if (window.matchMedia('screen and (max-width:767px)').matches) {
	var targetPosition = offset.top -  70 ;
	//if (targetHash==""){ var targetPosition = offset.top ; }
}

					var wst = $(window).scrollTop();
					if ( wst === 0 ) {
						$(window).scrollTop( wst + 1 );
					}
					if ( $('html').scrollTop() > 0 ) {
						var targetBody = $('html');
					} else if ( $('body').scrollTop() > 0 ) {
						var targetBody = $('body');
					}
					if ( typeof targetBody !== 'undefined' ) {
						var animateFlg = true;
						targetBody.animate(
							{
								scrollTop : targetPosition
							},
							config.duration,
							config.easing,
							function() {
								animateFlg = false;
							//	location.hash = targetHash;
							}
						);
						var scrollStop = function() {
							if ( animateFlg ) {
								targetBody.stop();
							}
							animateFlg = false;
						};
						if ( window.addEventListener ) {
							window.addEventListener( 'DOMMouseScroll', scrollStop, false );
						}
						window.onmousewheel = document.onmousewheel = scrollStop;
					}
				}
				return false;
			});
		});
	};
})( jQuery );
