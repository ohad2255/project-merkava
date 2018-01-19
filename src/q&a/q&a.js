require('../common/common');

$('#accordion .collapse-button').on('click', function () {
    $('.collapsed-p .panel-collapse').collapse('toggle');
});