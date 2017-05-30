template = 'test';

var ntiles = 16;

$(document).ready(function() {
    for (tile = 0; tile < ntiles; tile++) {
    		$("#videos").append('<div class="col-sm-3 space-0"><video height="170" width="auto" mediagroup="main" id="' + tile + '" class="video-js"><source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"></video></div>');
    }
    vidSetup();

});
