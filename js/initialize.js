template = 'test';



var xtiles = 2;
var ytiles = 2;
var videoIds = [0];
var prevxstart;
var prevystart;
var xstart = 3;
var ystart = 1;
var xmax = 8;
var ymax = 4;

//test

function getPosId(xpos, ypos)  {
	return stringPad(xpos, 4) + stringPad(ypos,4);
}

function getTileId(xtile,ytile) {
	return ytile + "_" + xtile;
}

//video creation

function doesVideoExist(xpos, ypos) {
	if ($('#' + getPosId(xpos,ypos)).length) {
		return true;
	}
	return false;
}

function createVideo(xpos, ypos){
	var element = $('<video width="585" mediagroup="main" class="video-js"></video>');
	element.attr('id',getPosId(xpos, ypos));
	//$("#videosBuffered")
	$("#videosBuffered").append(element);
	var video = videojs(getPosId(xpos,ypos), { loop: true, loadingSpinner: false});
	video.src('http://videopanorama.github.io/test/seafront/' + ypos + '_' + xpos + '.mp4');
}

//video adding

function addVideoToTile(xpos, ypos, xtile, ytile) {
	$("#" + getPosId(xpos, ypos)).detach().appendTo('#' + getTileId(xtile, ytile));
	videoIds.push(getPosId(xpos,ypos));
}

function removeVideoFromTile(xpos, ypos, xtile, ytile) {
	removeValue(getPosId(xpos,ypos), videoIds);
	$("#" + getTileId(xtile,ytile)).children().detach().appendTo('#videosBuffered');
	videojs(getPosId(xpos,ypos)).pause();
}

//operation on all tiles

function tileUpdate(operation) {
    for (ytile = 0; ytile < ytiles; ytile++) {
        for (xtile = 0; xtile < xtiles; xtile++) {
            operation();
        }
    }
}

//initialize

function initialize() {
	createVideo(xtile+xstart,ytile+ystart);
	addVideoToTile(xtile+xstart,ytile+ystart,xtile,ytile);
}



//new update


function update() {
	xpos = xstart+xtile;
	ypos = ystart+ytile;
	if (!doesVideoExist(xpos, ypos)) {
		createVideo(xpos, ypos);
	}
	
	removeVideoFromTile(prevxstart + xtile, prevystart + ytile, xtile, ytile);
	//

	addVideoToTile(xstart+xtile,ystart+ytile, xtile, ytile);



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

// things than run

$(document).ready(function() {
    tileUpdate(initialize);
});

function vidUpdate(x, y) {
    updateTiles = true;
    newx = xstart + x;
    if ((newx) > (xmax - xtiles) || (newx < 0)) {
        updateTiles = false;
    }

    newy = ystart + y;
    if ((newy) > (ymax-ytiles) || (newy < 0)) {
        updateTiles = false;
    }



    if (updateTiles === true) {
    	prevxstart = xstart;
    	prevystart = ystart;
        xstart = newx;
        ystart = newy;
        timeBefore = time;
        tileUpdate(update);
 



        	
       $(document).trigger("sjs:unsynchronize");
       

        var afterTimeout = function() {
        	$.synchronizeVideos.apply(null, videoIds);
        	$(document).trigger("sjs:setCurrentTime", [timeBefore]);
        	$(document).trigger("sjs:play");
        };

        setTimeout(afterTimeout,1000);
        console.log("timeout ended");
		

    }
}