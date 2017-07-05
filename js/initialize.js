

var xtilesWindow = 3;
var ytilesWindow = 3;

var xtiles = 2;
var ytiles = 2;



var xposTile = 3;
var yposTile = 1;

var xpos;
var ypos;



var xmax = 8;
var ymax = 4;

var time;

function videoSrc(x,y) {
    return 'https://videopanorama.github.io/test/seafront/' + y + '_' + x + '.mp4';
}

function bufferVideo(x,y){
    v = document.createElement("video");
    vjs = videojs(v);
    vjs.src(videoSrc(x,y));
}


function tileUpdate(operation) {
    tile = 0;
    for (ytile = 0; ytile < ytilesWindow; ytile++) {
        for (xtile = 0; xtile < xtilesWindow; xtile++) {
            operation();
            tile = tile + 1;
        }
    }
}

function update() {
    var video = videojs(tile.toString());
    video.src(videoSrc(xtile+xposTile,ytile+yposTile));
}

//initialize

function initialize() {
    $("#videos").append('<div class="col-sm-4 space-0 video"><video width="390" mediagroup="main" id="' + tile + '" class="video-js"></video></div>');
    videojs(tile.toString(), { loop: true, loadingSpinner: false });
}

$(document).ready(function() {
    tileUpdate(initialize);
    setPosition(xposTile,yposTile);
    changeTilesSrc(xposTile, yposTile);
});


function setPosition(newxpos, newypos) {



    newxposTile = Math.floor(newxpos);
    newyposTile = Math.floor(newypos);



    if ((newxposTile) > (xmax - xtilesWindow) || (newxpos < 0)) {
        return;
    }

    if ((newyposTile) > (ymax - ytilesWindow) || (newypos < 0)) {
        return;
    }


    if (newxposTile != xposTile || newyposTile != yposTile) {
        changeTilesSrc(newxposTile, newyposTile);
    }



    var right = newxpos - newxposTile - 0.5;
    $("#videos").css("right", right*390);

    var bottom = newypos - newyposTile - 0.5;
    $("#videos").css("bottom", bottom*390);

    xpos = newxpos;
    ypos = newypos;
}

function changeTilesSrc(newxposTile, newyposTile) {
    timeBefore = time;
    xposTile = newxposTile;
    yposTile = newyposTile;
    tileUpdate(update);

    $(document).trigger("sjs:setCurrentTime", [timeBefore]);
    $(document).trigger("sjs:play", []);
}

























































