template = 'test';

//a general tileUpdate

var xtiles = 2;
var ytiles = 2;
var xstart = 3;
var ystart = 1;

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

var time;

function update() {
	var video = videojs(tile.toString());
	video.src('seafront/' + (ytile + ystart) + '_' + (xtile + xstart) + '.mp4');
}

function vidUpdate(x,y) {
	timeBefore = time;
	xstart += x;
	ystart += y;

	

	//alert(time);

	tileUpdate(update);
	$(document).trigger("sjs:setCurrentTime", [timeBefore]);
	$(document).trigger("sjs:play", []);
}

//pan buttons

$(document).ready(function() {
  


$('#buttonRight').click(function(){
     vidUpdate(1,0);
 });

$('#buttonLeft').click(function(){
     vidUpdate(-1,0);
 });
});

