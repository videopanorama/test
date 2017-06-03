template = 'test';

var xtiles = 2;
var ytiles = 2;
var xstart = 3;
var ystart = 1;

//a general tileUpdate

function tileUpdate(operation) {
	tile = 0;
    for (ytile = 0; ytile < ytiles; ytile++) {
        for (xtile = 0; xtile < xtiles; xtile++) {
        	tile = tile + 1;
            operation();
        }
    }
}

//initialize

function initialize() {
    $("#videos").append('<div class="col-sm-6 space-0"><video width="585" mediagroup="main" id="' + tile + '" class="video-js"></video></div>');
    videojs(tile.toString(), { loop: true, loadingSpinner: false });
    var video = videojs(tile.toString());
    video.src('seafront/' + (ytile + ystart) + '_' + (xtile + xstart) + '.mp4');
}

$(document).ready(function() {
    tileUpdate(initialize);
});

//update

function update() {
	var video = videojs(tile.toString());
	video.src('seafront/' + (ytile + ystart) + '_' + (xtile + xstart) + '.mp4');
}

function vidUpdate(x,y) {
	xstart += x;
	ystart += y;
	tileUpdate(update);
}


$(document).ready(function() {
  


$('#buttonRight').click(function(){
     vidUpdate(1,0);
 });

$('#buttonLeft').click(function(){
     vidUpdate(-1,0);
 });
});

