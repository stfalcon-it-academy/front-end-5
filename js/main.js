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
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 3
                }
            }
            ]
    })
});

$(document).ready(function(){
    $('body').append('<a href="#" id="go-top" title="Вверх">TOP</a>');
});

$(function() {
    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        let scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
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

$(function(){
    $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 8
            }
        },
        messages: {
            name: {
                required: "'Name' обов'язкове",
                minlength: "Ведіть не меньше 2-ох символів в поле 'Name'"
            },
            email: {
                required: "'Email' обов'язкове",
                email: "Дотримуйтесь формату написання email адреси"
            },
            message: {
                required: "Залиште своє повідомлення",
            }
            }
    });
});

//fixed menu

jQuery("document").ready(function($){

    let nav = $('.top_header_nav');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            nav.addClass("fix_nav");
        } else {
            nav.removeClass("fix_nav");
        }
    });

});

//burger menu

$(document).ready(function(){
    $('#nav_menu').click(function(){
        $('ul.nav_list').addClass('nav_open').slideToggle('300');
    });
});

//slow href scroll

$(document).ready(function(){
    $(".main_nav").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-115}, 1500);
    });
});
//burger button
function myFunction(x) {
    x.classList.toggle("change");
}