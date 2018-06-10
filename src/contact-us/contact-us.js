require('../common/common');

var selDiv = "";

document.addEventListener("DOMContentLoaded", init, false);

function init() {
    document.querySelector('#customFile').addEventListener('change',
        handleFileSelect, false);
    selDiv = document.querySelector("#selectedFiles");

    changeValidations();
}

function handleFileSelect(e) {

    if (!e.target.files)
        return;

    selDiv.innerHTML = "";

    var files = e.target.files;
    var fileNames = []
    var bytesLimit = 15 * 1024 * 1024; // 15 MB - Change the Number to Change Max Size
    var isMaxError=false;
    for (var i = 0; i < files.length; i++) {
        
        var currFile = files[i];
        if (currFile.size > bytesLimit) {
        isMaxError=true;
        files.splice(i, 1);
        i-=1;
        }else{
        fileNames.push(currFile.name);
        }
        
    }
    if (isMaxError) {
        $("#maxSize-error").show();
    }else{
        $("#maxSize-error").hide();
    }

    selDiv.innerHTML = fileNames.join('<br>')
}


function changeValidations() {
    $("#customFile").change(
        function () {
            if ($(this).val().length > 0) {
                $('#subjectTextarea').prop('required', false);
                $('#subjectTextarea').prop('showBullet', false);
                $('#subjectTextarea').prop(
                    'data-parsley-error-message', false);
                $('#subjectTextarea').prop(
                    'data-parsley-validate-if-empty', false);

                $("#textAreaId").hide();
            } else {
                $("#textAreaId").show();
                $('#subjectTextarea').prop('required', true);
                $('#subjectTextarea').prop('showBullet', true);
                $('#subjectTextarea').prop('data-parsley-error-message', true);
                $('#subjectTextarea').prop(
                    'data-parsley-validate-if-empty', true);
            }
        });
}  
$(document).ready(function () {
    var result = window.location.hash.slice(1)
    
    if (result === 'fail') {
        $('#contactModalError').modal('toggle')
    } else if (result === 'success') {
        $('#contactModalSuccess').modal('toggle')
    }
})