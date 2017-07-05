var loggingEnabled = false;




(function($) {
    videoId1 = "0";
    // videoId2 = "example_video_2";
    // videoId3 = "example_video_3";
    mediagroupId = "main";

    $(document).ready(function() {
        $(document).on("sjs:allPlayersReady", function() {
            $("#bufferInfo").html("All players have been successfully initialized.");
            $(document).trigger("sjs:play", []);
        });
        $("#buttonPlay").click(function() {
            $(document).trigger("sjs:play", []);
        });
        $("#buttonPause").click(function() {
            $(document).trigger("sjs:pause", []);
        });
        $("#buttonResetVideo").click(function() {
            $(document).trigger("sjs:setCurrentTime", [0]);
        });
        $("#xslider").change(function(){
            value = $("#xslider").val();
            $("#xpos").text(value);
            setPosition(value,ypos);
            });
        $("#yslider").change(function(){
            value = $("#yslider").val();
            $("#ypos").text(value);
            setPosition(xpos,value);
            });
        $(document).on("sjs:buffering", function() {
            $("#bufferInfo").html("Not every player has buffered, yet. Pausing...");
        });
        $(document).on("sjs:bufferedAndAutoplaying", function() {
            $("#bufferInfo").html("Every player has buffered now. Starting playing again...");
        });
        $(document).on("sjs:bufferedButNotAutoplaying", function(event) {
            $("#bufferInfo").html("Every player has buffered now, but there was a timeupdate, pause, ... event...");
            $(document).trigger("sjs:play", []);
        });
        $(document).on("sjs:masterTimeupdate", function(event, param) {
            var rounded = Math.round(param *10)/10;
            time = param;
            $("#currentTime").html(rounded);
        });

        // $.synchronizeVideos(0, videoId1, videoId2, videoId3);
        $(document).trigger("sjs:debug", loggingEnabled);
        $(document).trigger("sjs:stopBufferChecker");
        $.synchronizeVideos(0, mediagroupId);

        

    });
})(jQuery);