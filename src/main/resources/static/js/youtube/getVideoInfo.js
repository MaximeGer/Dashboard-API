$("#getVideo").click(function(){
    $.ajax({
        url: "/api/youtube/getVideo/" + $("#selectedVideo").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            video = result.items[0];
            $("#widgetVideoInfos").html("");
            $("#widgetVideoInfos").append(video.snippet.title);
            $("#widgetVideoInfos").append(video.snippet.description);
            $("#widgetVideoInfos").append(video.snippet.channelTitle);


        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});
