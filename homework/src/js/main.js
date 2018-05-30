'use stict';
$(document).ready(function(){

    //fixed menu
    var menu = $('.header-top');
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 100 && menu.hasClass("default") ){
            menu.removeClass("default").addClass("fixed");
        } else if($(this).scrollTop() <= 100 && menu.hasClass("fixed")) {
            menu.removeClass("fixed").addClass("default");
        }
    });


    //anchor


    $('html, body').animate({

    }, 'slow');
    $('.anchor-js').click(function (event) {
        event.preventDefault();
        var target_top = $('.likes').offset().top;
        $('html, body').animate({
            scrollTop: target_top - 100
        }, 'slow');});

    //anchor



    //slider


    $('.header-slider').slick();
   $('.services-js').slick({
        vertical: true,
        dots: true,
        arrows: false,

       slidesToShow: 3,
       slidesToScroll: 3
    });

    $('.slick-dots').children().click(function () {
        $(this).find('button').addClass('red').parent().siblings().find('button').removeClass('red');
    });

    $('.study2-slide-js').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.study-slide-js'
    });
    $('.study-slide-js').slick({
        arrows:false,
        dots:true,
        asNavFor: '.study2-slide-js',
        autoplay: true,
        autoplaySpeed: 1500



    });
    $('.slick-dots').children().click(function () {
        $(this).find('button').addClass('red2').parent().siblings().find('button').removeClass('red2');

    });
    $('.slick-active button').addClass('red2');
});
$(document).ready(function(){
    $('.burger-menu').click(function () {
        $('.nav-menu').toggle();
        $(this).toggleClass('burger-close');

    });
    $('.bottom-right button').removeClass('red2');
    $('.bottom-left button').removeClass('red2');


    $('.burger-menu-two').click(function () {
        $('.works-menu').toggle();
        $(this).toggleClass('burger-close2');
    });


});

// run numbers

var show = true;
var countbox = "#counts";
$(window).on("scroll load resize", function(){
    if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
    var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
    var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
    var w_height = $(window).height();        // Высота окна браузера
    var d_height = $(document).height();      // Высота всего документа
    var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
    if(w_top + 400 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
        $(".spincrement").spincrement({

            duration: 20000
        });
        show = false;
    }
});

// isotop

var item = $('.works-item');
$('.button-print').click(function () {
    item.eq(3).hide();
    item.eq(5).hide();
});
$('.button-all').click(function () {
    item.show();

});
$('.button-animation').click(function () {
    item.eq(3).show();
    item.eq(5).show();
    item.eq(6).hide();
    item.eq(7).hide();
});
$('.button-art').click(function () {
    item.eq(1).hide();
    item.eq(2).hide();
});
$('.button-web').click(function () {
    item.eq(1).show();
    item.eq(2).show();
    item.eq(6).hide();
    item.eq(7).hide();
});
$('.button-photo').click(function () {
    item.hide();
    item.eq(2).show();
    item.eq(7).show();
    item.eq(8).show();
});
$('.button-video').click(function () {
    item.eq(3).show();
    item.eq(5).show();
    item.eq(6).hide();
    item.eq(7).hide();
});

$('.button-group button').click(function () {
    $(this).addClass('button-active').siblings().removeClass('button-active');
});

// isotop

// run numbers


$(function() {

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},2000);

    });


    // form
    //*************
    // form

    $('.subscribe').validate({
        rules:{
            name:{
                required: true,
                minlength:1
            },
            email:{
                email: true,
                required: true,
                minlength: 5
            }
        },
        messages:{
            name:{
                required:'Please write your name'
            },
            email:{
                required:'Please write your email',
                email: 'example: sasha@gmail.com'

            },

        }
    });

});

