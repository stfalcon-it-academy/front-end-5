$(document).ready(function() {    //slick------------------------------
    $('.js-top_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1400,
        dots: true,
        arrows: false,
        infinite: true
    });


    $('.js-footer_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.js_footer_small_slider',
        speed: 1000,
        autoplay:true,
        autoplaySpeed:4000
    });

    $('.js_footer_small_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        centerMode: true,
        centerPadding: 70,
        asNavFor: '.js-footer_slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000
    });
});

$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх">TOP</a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow")
        })
    }
});

$(function() {
    $("#go-top").scrollToTop();
});
