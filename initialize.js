template = 'test';

var ntiles = 16;


$(document).ready(function() {
    for (tile = 0; tile < ntiles; tile++) {
    		$("#videos").append('<div class="col-sm-3 space-0"><video height="170" width="auto" mediagroup="main" id="' + tile + '" class="video-js" preload="auto"><source src="timer2.mp4"></video></div>');
    }
    vidSetup();

});
