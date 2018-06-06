

//********HEADER SLIDER
$(document).ready(function(){
  $('.header-slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000
  });
});

$('.arrow-left').mouseenter(function() {
  $(this).toggleClass('arrow-left--hover');
})              .mouseleave(function() {
  $(this).toggleClass('arrow-left--hover');
})              .click(function() {
  $('.header-slider').slick('slickPrev');
});

$('.arrow-right').mouseenter(function() {
  $(this).toggleClass('arrow-right--hover');
})               .mouseleave(function() {
  $(this).toggleClass('arrow-right--hover');
})               .click(function() {
  $('.header-slider').slick('slickNext');
});


//**********CASE Slider
//****left
$(document).ready(function(){
  $('.case-study--slide-block-left--slider').slick({
    arrows: false,
    autoplay: false,
    vertical: true,
    asNavFor: '.case-study--slide-block-right--slider'
  }).on(
    'beforeChange', function(event, currentSlide, nextSlide) {
        $('.dots').children().removeClass('active-dot');
    });
});

$('.dot-1').click(function() {
  $('.case-study--slide-block-left--slider').slick('slickGoTo', 0);
  $(this).addClass('active-dot');
});
$('.dot-2').click(function() {
  $('.case-study--slide-block-left--slider').slick('slickGoTo', 1);
  $(this).addClass('active-dot');
});
$('.dot-3').click(function() {
  $('.case-study--slide-block-left--slider').slick('slickGoTo', 2);
  $(this).addClass('active-dot');
});

//****right
$(document).ready(function(){
  $('.case-study--slide-block-right--slider').slick({
    arrows: false,
    autoplay: false,
    vertical: true,
    speed: 0,
    swipe: false
})
});

//****TEAM heads highlight
//***************************
$('.heads').each(function() {
  $(this).click(function() {
    if ( $(document).width() <= 600 ) {
      return false;
    } else {
      $('.heads').removeClass('active-head');
      $('.heads-name').removeClass('active-name');
      $(this).addClass('active-head')
       .next().addClass('active-name');
    }
  })
});

$('.team').click(function ( event ) {
  var heads = $('.heads');
  var target = $(event.target);
  if (target.is(heads)) {} else {
    $('.heads').removeClass('active-head');
    $('.heads-name').removeClass('active-name');
  }
});

//****buttons 'GO TOP and BOT'
//***************************
$('#goTop').click(function() {
  animateScrollTo(0);
});
$('#goBot').click(function() {
  animateScrollTo(document.querySelector('.keep-in-touch'));
});

//****Menu highlight on scroll
//***************************
$(document).on('scroll', function() {
  var scrollX = $(document).scrollTop();
  var a       = $('ul.header-nav > li > a');

        if (
         scrollX < $('#who-we').offset().top ){
            a.removeClass('active');
            $('ul.header-nav > li:eq(0) > a').addClass('active')

      } else if (
         scrollX > ($('#header').offset().top + $('#header').height())
         &&
         scrollX < $('#recent-works').offset().top ) {
            a.removeClass('active');
            $('ul.header-nav > li:eq(1) > a').addClass('active')

      } else if (
         scrollX > ($('#recent-works').offset().top - 50)
         &&
         scrollX < $('#pricing').offset().top ) {
              a.removeClass('active');
            $('ul.header-nav > li:eq(2) > a').addClass('active')

      } else if (
        scrollX > ($('#pricing').offset().top - 50)
        &&
        scrollX < $('#team').offset().top ) {
            a.removeClass('active');
          $('ul.header-nav > li:eq(3) > a').addClass('active')

      } else if (
        scrollX > ($('#team').offset().top - 50)
        &&
        scrollX < $('#blog').offset().top ) {
            a.removeClass('active');
          $('ul.header-nav > li:eq(4) > a').addClass('active')

      } else if (
        scrollX > ($('#blog').offset().top - 50)
        &&
        scrollX < $('#keep-in-touch').offset().top ) {
            a.removeClass('active');
          $('ul.header-nav > li:eq(5) > a').addClass('active')

      } else if (
          scrollX > ($('#keep-in-touch').offset().top -50)
          &&
          scrollX < $('#footer').offset().top ) {
              a.removeClass('active');
            $('ul.header-nav > li:eq(6) > a').addClass('active')
          }

    });

//Navigation
//***********************
  $('ul.header-nav > li > a').click(function(ev) {
    ev.preventDefault();
  });

  $('ul.header-nav > li:eq(0) > a').click(function() {
    animateScrollTo(0);
  });

  $('ul.header-nav > li:eq(1) > a').click(function() {
    animateScrollTo($('#who-we').offset().top);
  });

  $('ul.header-nav > li:eq(2) > a').click(function() {
    animateScrollTo($('#recent-works').offset().top);
  });

  $('ul.header-nav > li:eq(3) > a').click(function() {
    animateScrollTo($('#pricing').offset().top);
  });

  $('ul.header-nav > li:eq(4) > a').click(function() {
    animateScrollTo($('#team').offset().top);
  });

  $('ul.header-nav > li:eq(5) > a').click(function() {
    animateScrollTo($('#blog').offset().top);
  });

  $('ul.header-nav > li:eq(6) > a').click(function() {
    animateScrollTo($('#keep-in-touch').offset().top);
  });

//Header-menu transformation on scroll
//**********************
$(document).scroll(function(){
  var scrollX = $(document).scrollTop();
  if ($(document).width() > 600 && scrollX > 52) {
    $('.header-bar-menu').addClass('fixed-nav');
  } else if ($(document).width() > 600 && scrollX < 52) {
    $('.header-bar-menu').removeClass('fixed-nav');
  }
});

//Burger-Menu
//***********************
$('.burger-button').on('click', function(ev) {
  ev.preventDefault();
  $('.header-bar-menu').toggleClass('js_unchecked');
  $('.burger-menu').toggleClass('d-none-600');
  $(this).toggleClass('cancel');
  $('.underlay').toggleClass('pe-no');
});

$(document).ready(function(){
  $(document).click(function(event) {
    var underlay = $('.underlay');
    var ev = $(event.target)
    if (ev.is(underlay)) {
      $('.burger-button').trigger('click');
    }
  });
});

//Form validation
//****************************
$('#form-block--form').validate({
    rules: {
      name: 'required',
      email: {
        required: true,
        email: true
      },
      subject: {
        required: true,
        minlength: 5
      },
      message: {
        required: true,
        minlength: 10
      }
    }
  });

  //Modal window
  //**************************
  $('#start-button').on('click', function (event) {
    event.preventDefault();
    $('.overlay').addClass('d-yes');
  });

  $('.close-button').on('click', function (event) {
    event.preventDefault();
    $('.overlay').removeClass('d-yes');
  });

  $(document).on('click', function (event){
    var overlay = $('.overlay');
    var target  = $(event.target);

    if (target.is(overlay)) {
      overlay.removeClass('d-yes')
    }
  });

//Bricks sort
//*************************
var sorter = {
  all: function(){
    $(".recent-work--brick").addClass('d-yes');
  },

  printdesign: function(){
    $(".recent-work--brick").removeClass('d-yes');
    $(".recent-work--brick[data-category='printdesign']").addClass('d-yes');
  },

  animation: function(){
    $(".recent-work--brick").removeClass('d-yes');
    $(".recent-work--brick[data-category='animation']").addClass('d-yes');
  },

  art: function(){
    $(".recent-work--brick").removeClass('d-yes');
    $(".recent-work--brick[data-category='art']").addClass('d-yes');
  },

  webdesign: function(){
    $(".recent-work--brick").removeClass('d-yes');
    $(".recent-work--brick[data-category='webdesign']").addClass('d-yes');
  },

  photography: function(){
    $(".recent-work--brick").removeClass('d-yes');
    $(".recent-work--brick[data-category='photography']").addClass('d-yes');
  },

  video: function(){
    $(".recent-work--brick").removeClass('d-yes');
    $(".recent-work--brick[data-category='video']").addClass('d-yes');
  },
};

$('.recent-works--nav > ul > li > a').each(function() {
  $(this).on('click', function(ev) {
    ev.preventDefault();
    eval( "sorter" + "." + $(this).data('sort-by') + "()" );
 })
});
