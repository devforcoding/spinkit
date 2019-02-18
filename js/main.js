(function ($) {
    $(document).ready(function () {

        $('.spinners').slick({
            centerMode: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
        });
    });
})(jQuery);