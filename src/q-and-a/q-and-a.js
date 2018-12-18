require('../common/common');
console.log("test")
$('#accordion .collapse-button').on('click', function () {
    var toggleClass;
    if (this.classList.contains('collapse-button-open')) {
        $('.collapse').collapse('show');
    } else {
        $('.collapse').collapse('hide');
    }
});