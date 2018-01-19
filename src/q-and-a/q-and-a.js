require('../common/common');

$('#accordion .collapse-button').on('click', function () {
    $('.panel-collapse').collapse('toggle');
});