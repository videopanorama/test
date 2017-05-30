template = 'test';

var ntiles = 16;

$(document).ready(function() {
    for (tile = 1; tile < ntiles; tile++) {
    		$("#videos").append('<div class="col-sm-3 space-0"><video width="292.5" height="144" mediagroup="main" id="' + tile + '" class="video-js" preload="auto"><source src="timer2.mp4"></video></div>');
    }
    vidSetup();

});
