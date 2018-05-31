$(function () {
  var $headerSlider = $('.header-slider');

  var $headerSliderPrec = $('.js-slider-prev');
  var $headerSliderNext = $('.js-slider-next');

  $headerSlider.on('init', function (event, slick) {

  });

  $headerSlider.slick({
    arrows: false
  // fade: true,
  // swipe: false,
  // infinite: true,
  // pauseOnHover: true,
  // autoplay: true,
  // autoplaySpeed: 7000,
  // speed: 1500,
  // cssEase: 'ease'
  });

  $headerSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {

  });

  $headerSlider.on('afterChange', function (slick, currentSlide) {

  });

  $headerSlider.on('edge', function (slick, direction) {

  });

  $headerSliderPrec.on('click', function (ev) {
    ev.preventDefault();
    $headerSlider.slick('slickPrev');
  });
  $headerSliderNext.on('click', function (ev) {
    ev.preventDefault();
    $headerSlider.slick('slickNext');
  });
});

$(function () {
  var studyMainSlider = $('.desc-list');

  studyMainSlider.slick({
    arrows: false,
    dots: true,
    asNavFor: $('.img-list'),
    fade: true,
    useTransform: false
  // fade: true,
  // infinite: true,
  // pauseOnHover: true,
  // autoplay: true,
  // autoplaySpeed: 7000,
  // speed: 1500,
  // cssEase: 'ease'
  });
});

$(function () {
  var studyImgSlider = $('.img-list');

  studyImgSlider.slick({
    arrows: false,
    asNavFor: $('.desc-list')
  // infinite: true,
  // pauseOnHover: true,
  // autoplay: true,
  // autoplaySpeed: 7000,
  // speed: 1500,
  // cssEase: 'ease'
  });
});