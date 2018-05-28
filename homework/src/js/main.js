'use stict';
$(document).ready(function(){
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

    $('.anchor-js').click(function () {
        $('html, body').animate({scrollTop: $('header').height()+2500},'slow');
        return false
    })
});
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


