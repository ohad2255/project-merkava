require('../common/common');

$('#accordion .collapse-button').on('click', function () {
    $('.collapse').collapse('toggle');
});