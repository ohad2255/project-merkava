var Handlebars = require('handlebars');
require('../common/common');

$(document).ready(function() {
    var source = document.getElementById("card-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {
        index: 0,
        expression: 'דוגמא',
        content: 'sdlkj sdkjhf ksjdhf kjdsh kjsdh jskh jksdhf ksdjfkjsh kjsdh ksd'
    };
    var html = template(context);

    $('#accordion').append(html);
    $('#accordion .collapse-button').on('click', function() {
        var toggleClass;
        if (this.classList.contains('collapse-button-open')) {
            $('.collapse').collapse('show');
        } else {
            $('.collapse').collapse('hide');
        }
    });
});
