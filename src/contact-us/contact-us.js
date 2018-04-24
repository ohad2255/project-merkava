
var Dropzone = require('dropzone');
require('../common/common');
Dropzone.autoDiscover = false;

   $(document).ready(function () {
        $("#registration-Form").dropzone({
            maxFiles: 2000,
            // url: "/ajax_file_upload_handler/",
            autoProcessQueue: false,
            previewsContainer: ".dropzone-previews",	
            success: function (file, response) {
                console.log(response);
            },
            init: function() {
			    this.on("addedfile", function(file) { console.log("file = ", file); });
			},
        });

        // $('.close-btn').on('click' , function(){
        //     removedfile();
        // });
   })
// $(".dropzone").dropzone({
//   url: '#'
// })
