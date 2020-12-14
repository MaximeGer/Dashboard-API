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
            $("#widgetVideoInfos").append("<br><h5>"+video.snippet.channelTitle+"</h5><hr>");

            $("#widgetVideoInfos").append("<img id='imgVideo' width="+video.snippet.thumbnails.high.width + " height="+video.snippet.thumbnails.high.height + " src=" + video.snippet.thumbnails.high.url + "></div>");
            $("#widgetVideoInfos").append("<br><a href=https://youtu.be/"+$("#selectedVideo").val()+">Link</a>");
            $("#widgetVideoInfos").append("<br><br><p>Description :<br><br>"+video.snippet.description+"</p></div>");

        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});
