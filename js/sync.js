var time;

(function($) {
    videoId1 = "0";
    // videoId2 = "example_video_2";
    // videoId3 = "example_video_3";
    mediagroupId = "main";

    $(document).ready(function() {
        $(document).on('sjs:idRegistered', function(event,param){console.log("registered" + param);});
        $(document).on('sjs:idUnregistered', function(event,param){console.log("unregistered" + param);});
        $(document).on("sjs:allPlayersReady", function() {
             
            $("#bufferInfo").html("All players have been successfully initialized.");
            console.log("sjs:initialized");
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
        $(document).on("sjs:buffering", function() {
            $(document).trigger("sjs:play", []);
            $("#bufferInfo").html("Not every player has buffered, yet. Pausing...");
            console.log("sjs:buffering");
        });
        $(document).on("sjs:bufferedAndAutoplaying", function() {
            $("#bufferInfo").html("Every player has buffered now. Starting playing again...");
            console.log("sjs:bufferedAndAutoplaying");
        });
        $(document).on("sjs:bufferedButNotAutoplaying", function(event) {
            $("#bufferInfo").html("Every player has buffered now, but there was a timeupdate, pause" );
            $(document).trigger("sjs:play", []);
            console.log("sjs:bufferedButNotAutoplaying");
        });
        $(document).on("sjs:masterTimeupdate", function(event, param) {
            var rounded = Math.round(param *10)/10;
            time = param;
            $("#currentTime").html(rounded);
        });

  

        // $.synchronizeVideos(0, videoId1, videoId2, videoId3);
        $(document).trigger("sjs:debug", true);

        $.synchronizeVideos(0, "main");

        

    });
})(jQuery);