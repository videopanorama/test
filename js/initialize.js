template = 'test';

//a general tileUpdate

var xtiles = 3;
var ytiles = 3;
var xstart = 3;
var ystart = 1;
var xmax = 8;
var ymax = 4;



function tileUpdate(operation) {
    tile = 0;
    for (ytile = 0; ytile < ytiles; ytile++) {
        for (xtile = 0; xtile < xtiles; xtile++) {
            operation();
            tile = tile + 1;
        }
    }
}

//initialize

function initialize() {
    $("#videos").append('<div class="col-sm-4 space-0 video"><video width="390" mediagroup="main" id="' + tile + '" class="video-js"></video></div>');
    videojs(tile.toString(), { loop: true, loadingSpinner: false });
    var video = videojs(tile.toString());
    video.src('https://videopanorama.github.io/test/seafront/' + (ytile + ystart) + '_' + (xtile + xstart) + '.mp4');
}

$(document).ready(function() {
    tileUpdate(initialize);
});

//update

var time;

function update() {
    var video = videojs(tile.toString());
    video.src('https://videopanorama.github.io/test/seafront/' + (ytile + ystart) + '_' + (xtile + xstart) + '.mp4');
}

function vidUpdate(x, y) {
    updateTiles = true;
    newx = xstart + x;
    if ((newx) > (xmax-xtiles) || (newx < 0)) {
        updateTiles = false;
    }

    newy = ystart + y;
    if ((newy) > (ymax-ytiles) || (newy < 0)) {
        updateTiles = false;
    }




    //alert(time);
    if (updateTiles === true) {
        xstart = newx;
        ystart = newy;
        timeBefore = time;
        tileUpdate(update);
        $(document).trigger("sjs:setCurrentTime", [timeBefore]);
        $(document).trigger("sjs:play", []);
    }
}
//pan buttons

$(document).ready(function() {



    $('#buttonRight').click(function() {
        vidUpdate(1, 0);
    });

    $('#buttonLeft').click(function() {
        vidUpdate(-1, 0);
    });

    $('#buttonUp').click(function() {
        vidUpdate(0, -1);
    });

    $('#buttonDown').click(function() {
        vidUpdate(0, 1);
    });
});
