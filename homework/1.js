

var f = $.getJSON('obj.json', function (res) {
        return res;
});



var pageCounter = 0;
$(document).on('scroll', function () {
    var scr = ($(document).height() - $(window).height());
    if (scr == $(document).scrollTop() && (pageCounter < f.responseJSON.length -1)) {

        pageCounter++;

        $('.main-block').append($('<div/>').addClass('pseudo-post'));
        $('.pseudo-post:last').append($('<img/>').attr('src','img/' + (pageCounter +1 ) + '.jpg'));
        $('.pseudo-post:last').append($('<h2/>')
            .prepend(f.responseJSON[pageCounter].name)
            .addClass('novel-desc'));
        $('.pseudo-post:last').append($('<span/>').addClass('by')
            .append($('<span/>').addClass('author').prepend('by: '))
            .append($('<span/>').addClass('author-name')
                .prepend(f.responseJSON[pageCounter].author)));
        $('.pseudo-post:last').append($('<p/>').addClass('info')
            .prepend(f.responseJSON[pageCounter].info));
    };

});

