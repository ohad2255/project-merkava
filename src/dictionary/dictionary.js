var Handlebars = require('handlebars');
require('../common/common');

var CARDS = {
    a: [{
        expression: 'דוגמא',
        content: 'sdlkj sdkjhf ksjdhf kjdsh kjsdh jskh jksdhf ksdjfkjsh kjsdh ksd'
    }, {
        expression: 'אחר',
        content: 'ssf lkjweiioweas jksdhf ksdjfkjsh kjsdh ksd'
    }],
    b: [{
        expression: 'dfsdfdf',
        content: '222222hf ksjdhf kjdsh kjsdh jskh jksdhf ksdjfkjsh kjsdh ksd'
    }, {
        expression: 'ddddff',
        content: 'ssf lkjweiioweas jksdhf dskfhgfdjkhgfd'
    }]
};

function getAllCards() {
    var allCards = [];
    Object.keys(CARDS).forEach(function(key) {
        allCards = allCards.concat(CARDS[key])
    });
    return allCards;
}

function addCards(letter) {
    var accordion = $('#accordion');

    accordion.empty();

    var latter = letter;
    var cards = latter ? CARDS[latter] : getAllCards();
    var source = document.getElementById("card-template").innerHTML;
    var template = Handlebars.compile(source);
    var html = '';

    for (var i = 0; i < cards.length; i++) {
        var context = cards[i];
        context.index = i;
        html += template(context);
    }

    accordion.append(html);
}

$(document).ready(function() {
    addCards();

    $('.alphabet-nav .alphabet-item').on('click', function() {
        addCards(this.getAttribute('letter'));
    });

    $('#accordion .collapse-button').on('click', function() {
        var toggleClass;
        if (this.classList.contains('collapse-button-open')) {
            $('.collapse').collapse('show');
        } else {
            $('.collapse').collapse('hide');
        }
    });
});
