$(function () {
  var inputButton = $('.control');
  var mainMenu = $('.site-navigation');

  if ($(window).width() > 635 && mainMenu.hasClass('site-navigation-show-down')) {
    mainMenu.removeClass('site-navigation-show-down');
  } else if ($(window).width() < 635 && !mainMenu.hasClass('site-navigation-show-down')) {
    mainMenu.addClass('site-navigation-show-down');
  }

  inputButton.on('click', function (ev) {
    if (mainMenu.hasClass('site-navigation-show-down')) {
      mainMenu.removeClass('site-navigation-show-down');
    } else {
      mainMenu.addClass('site-navigation-show-down');
    }
  })

  $(window).resize(function () {
    if ($(window).width() > 635 && mainMenu.hasClass('site-navigation-show-down')) {
      mainMenu.removeClass('site-navigation-show-down');
    } else if ($(window).width() < 635 && !mainMenu.hasClass('site-navigation-show-down')) {
      mainMenu.addClass('site-navigation-show-down');
    }
  });
});