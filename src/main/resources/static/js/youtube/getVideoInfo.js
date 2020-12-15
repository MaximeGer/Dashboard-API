$("#getVideo").click(function(){
    $.ajax({
        url: "/api/youtube/getVideo/" + $("#selectedVideo").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            video = result.items[0];
            $("#widgetVideoInfos").html("");
            $("#widgetVideoInfos").append("<div id='youtubeVideo'>");
            $("#widgetVideoInfos").append("<h1 id='Title'>"+video.snippet.title +"</h1>");
            $("#widgetVideoInfos").append("<br><a href=https://www.youtube.com/channel/"+video.snippet.channelId+">"+video.snippet.channelTitle+"</h5><hr>");
            $("#widgetVideoInfos").append(video.player.embedHtml);
            $("#widgetVideoInfos").append("<br><br><p>Description :<br><br>"+video.snippet.description+"</p></div>");

        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});
