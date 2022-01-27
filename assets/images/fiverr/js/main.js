


(function ($) {
	"use strict";
    if ($(".appin-screenshot").length > 0) {
        var swiper = new Swiper('.appin-screenshot', {
            pagination: false,
            effect: 'coverflow',
            loop: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            autoplay: false,
            nextButton: '.next',
            prevButton: '.prev',
            autoplayDisableOnInteraction: true,
            coverflow: {
                rotate: 15,
                stretch: 70,
                modifier: 0.9,
                slideShadows: false
            }
        });

        $(".appin-screenshot").hover(function () {
            swiper.stopAutoplay();
        }, function () {
            swiper.startAutoplay();
        });
    } 
})(jQuery);
