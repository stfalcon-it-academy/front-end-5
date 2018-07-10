'use strict';

//init slider Slick

$(function () {
    $('.meet_slider-js' ).slick({
        arrows: false,
        initialSlide: 0,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 4,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4,

                }
            },{
                breakpoint: 990,
                settings: {
                    arrows: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },{
                breakpoint: 768,
                settings: {
                    arrows: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1

                }
            }
        ]
    });
});


// script for Google map color

function initMap() {
    var mySchool = {lat: 49.432614, lng: 27.000129};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: mySchool
    });

    var markerIcon = 'img/icons/marker.png';
    var marker = new google.maps.Marker({
        position: mySchool,
        map: map,
        icon: markerIcon
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'Название компании<br/>Адрес',
    });

    var infowindow = new google.maps.InfoWindow({
        content: 'Sarajevo<br/>2345 Setwant natrer, 1234,<br/>Washington. United States.',
    });
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
    var styledMapType = new google.maps.StyledMapType(
        [
            {
                "elementType": "geometry",
                "stylers": [{"color": "#fdfdfd"}]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{"visibility": "off"}]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#f5f5f5"}]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#bdbdbd"}]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"color": "#eeeeee"}]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{"color": "#e5e5e5"}]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"color": "#efefef"}]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#757575"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{"color": "#dadada"}]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#616161"}]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{"color": "#e5e5e5"}]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{"color": "#eeeeee"}]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{"color": "#c9c9c9"}]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#9e9e9e"}]
            }
        ],
        {name: 'Styled Map'}
    );
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
};


// init Isotope

var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
        category: '[data-category]',

    }
});

// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 10) > 50;
    }
};

// bind filter button click
$('#filters').on('click', '.button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({filter: filterValue});
});


// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', '.button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});


// menu fixed on top

$(window).scroll(function () {
    var header = $('.header_top');

    if ($(window).scrollTop() >= 300) {
        header.addClass('fixed-header');
    }
    else {
        header.removeClass('fixed-header');
    }
});


//burger menu

$(function () {
    $('.burger_trigger, .header_menu a').click(function () {                     //При кліку на .burger_trigger та  .header_menu a' класи
        $('.header_menu,.burger_menu').toggleClass('menu_opened');               //До .header_menu,.burger_menu додається або забирається клас menu_opened
    });
    $(document).click(function (e) {
        if ($(e.target).closest('.burger_trigger, .header_menu').length) return; //При кліку .burger_trigger, .header_menu
        $('.header_menu,.burger_menu').removeClass('menu_opened');                // У класів .header_menu,.burger_menu видаляємо клас menu_opened
        e.stopPropagation();                                                     //зупиняєм всплиття події
    });
});


//smooth scroll for menu anchor

$(document).ready(function(){

    const HEIGHT_HEADER = 46;

    $('.header_menu').on('click','a', function (event) { //При кліку на .header_menu
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - HEIGHT_HEADER}, 1500);
        return false;
    });
});


//running number

$(document).ready(function () {

    var show = true;
    var countbox = $('.some');
    $(window).on("scroll load resize", function () {
        if (!show) return false;                    //  Відміна показу анимації, якщо вона вже була виконана
           var w_top = $(window).scrollTop(),       // Кількість пікселів на яку була проскролена сторінка
                e_top = countbox.offset().top,      // Відстань від блока бігаючими цифрами до верху всього документа
                w_height = $(window).height(),      // Висота вікна браузера
                d_height = $(document).height(),    // Висота всього документа
                e_height = countbox.outerHeight();  // Повна висота блока з бігаючими цифрами
        if (w_top + 1000>= e_top || w_height + w_top === d_height || e_height + e_top < w_height) {

            $('#value1')
                .prop('number', 0)
                .animateNumber(
                    {
                        number: 3200
                    },
                    20000
                );

            $('#value2')
                .prop('number', 0)
                .animateNumber(
                    {
                        number: 120
                    },
                    20000
                );

            $('#value3')
                .prop('number', 0)
                .animateNumber(
                    {
                        number: 360
                    },
                    20000
                );

            $('#value4')
                .prop('number', 0)
                .animateNumber(
                    {
                        number: 42
                    },
                    20000
                );

            show = false;
        }
    });

});


//validate form

function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className === "error-message") {
        container.removeChild(container.lastChild);
    }
}

function validate(form) {
    var elems = form.elements;

    resetError(elems.name.parentNode);
    if (!elems.name.value) {
        showError(elems.name.parentNode, "Введіть ім'я.");
    }


    resetError(elems.email.parentNode);
    if (!elems.email.value) {
        showError(elems.email.parentNode, 'Вкажіть email адресу.');
    }

    resetError(elems.message.parentNode);
    if (!elems.message.value) {
        showError(elems.message.parentNode, 'Відсутній текст повідомлення.');
    }

}
