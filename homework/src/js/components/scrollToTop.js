$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('.go-to-top').fadeIn();
    } else {
      $('.go-to-top').fadeOut();
    }
  });
  $('.go-to-top').click(function (ev) {
    ev.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});