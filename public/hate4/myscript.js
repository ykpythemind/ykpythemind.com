$(function(){

				var flg=false;

	$('#main-menu').slicknav({
		prependTo:'#mobileMenu',
		closeOnClick: true,
    label: ""
	});



    $('#myportlait').easyRollover({
		duration: 400,
		transition: 'fade',
		easing: 'swing'
	});




	if (window.matchMedia('screen and (max-width:767px)').matches) {
	  // スマホレイアウト

	} else {
	  // PCレイアウト

/* // にょきっとでてくる
			$('#animation').css('visibility','hidden');
			$(window).scroll(function(){
			 var windowHeight = $(window).height(),
			     topWindow = $(window).scrollTop();
			 $('#animation').each(function(){
			  var targetPosition = $(this).offset().top;
			  if(topWindow > targetPosition - windowHeight + 100){
			   $(this).addClass("fadeInDown");
			  }
			 });
			});
			*/



    $(function() {

        var intervalValue = 300;
        var pageTopID = '#animation';

				$(pageTopID).css('visibility','hidden');

        $(function(){
            $(window).scroll(function () {
                var distanceTop = $(document).scrollTop();
                if (distanceTop > intervalValue) { $(pageTopID).addClass("fadeInDown");
									flg=true;
								 $(pageTopID).removeClass("fadeOutUp"); }
                if ((distanceTop < intervalValue)&&(flg)) { $(pageTopID).addClass('fadeOutUp'); $(pageTopID).removeClass("fadeInDown");}
            });
        });
    });
	} //end of if



});



//smooth scroll --------------------------
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('.scroll').click(function() {
      // スクロールの速度
      var speed = 1000; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
			if (window.matchMedia('screen and (max-width:767px)').matches) {
				var position = target.offset().top -  70 ;
			}else{
      var position = target.offset().top - 100;
		}
		// スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'easeOutQuint');
      return false;
   });
});


//retina -------------------------
$(function(){
	var retinaCheck = window.devicePixelRatio;
	if(retinaCheck >= 2) { // Retinaディスプレイのときを分岐させている
		$('img.retina').each( function() {
			var retinaimg = $(this).attr('src').replace(/\.(?=(?:png|jpg|jpeg)$)/i, '@2x.');
			$(this).attr('srcset', retinaimg + " 2x");
		});
	}
});










/*------------------------------------------------
 * jQuery Easy Rollover
 * ver: 0.3.2
 * Author: Yoshito Kogawa
 */
(function($){
	$.fn.easyRollover = function(config){
		var defaults = {
			suffix: '_out.',
			suffix_replace: '_over.',
			transition: 'moment',	// moment | fade
			opacity: 0.7,
			duration: 250,
			easing: 'linear',
			parent_style_overlap: true
		},
		opt = $.extend(defaults, config);

		for(var i=0;i<this.length;i++){
			(function(elm){
				var src, src_replace, _self, image;
				src = elm[i].getAttribute('src');
				if(src.indexOf(opt.suffix) > -1){
					src_replace = src.replace(opt.suffix, opt.suffix_replace);
					image = new Image();
					image.src = src_replace;

					switch(opt.transition){
						case 'moment':
							$(elm[i]).hover(function(){
								this.setAttribute('src', src_replace);

							}, function(){
								this.setAttribute('src', src);

							});
							break;
						case 'fade':
							var _self = $(elm[i]);
							var _parent = _self.parent();

							_self.css({
								position: 'relative',
								zIndex: 1
							}).hover(function(){
								$(this).stop().fadeTo(opt.duration, 0, opt.easing);

							}, function(){
								$(this).stop().fadeTo(opt.duration, 1, opt.easing);

							});

							if(opt.parent_style_overlap){
								_parent.css({
									position: 'relative',
									display: 'inline-block'
								});
							}

							$(image).addClass('over').css({
								position: 'absolute',
								top: 0,
								left: 0
							});
							_parent.append(image);
							break;
					}

				}else{
					switch(opt.transition){
						case 'fade':
							var _self = $(elm[i]);
							_self.hover(function(){
								_self.stop().fadeTo(opt.duration, opt.opacity, opt.easing);

							}, function(){
								_self.stop().fadeTo(opt.duration, 1, opt.easing);

							});
							break;
					}
				}
			})(this);
		}

		return(this);
	}
})(jQuery);
