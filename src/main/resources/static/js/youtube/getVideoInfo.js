$("#getVideo").click(function(){
    $.ajax({
        url: "/api/youtube/getVideo/" + $("#selectedVideo").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            video = result.items[0];
            $("#widgetVideoInfos").html("");
            $("#widgetVideoInfos").append("<div id='youtubeVideo'>");
            $("#widgetVideoInfos").append("<h1 id='Title'><a href=https://youtu.be/"+$("#selectedVideo").val()+">"+video.snippet.title +"</a></h1>");
            $("#widgetVideoInfos").append("<br><a href=https://www.youtube.com/channel/"+video.snippet.channelId+">"+video.snippet.channelTitle+"</h5><hr>");
            $("#widgetVideoInfos").append("<img id='imgVideo' class='img-fluid img-thumbnail' width='"+video.snippet.thumbnails.high.width + "' height='"+video.snippet.thumbnails.high.height + "' src='" + video.snippet.thumbnails.high.url + "'></div>");
            $("#widgetVideoInfos").append("<br><br><p>Description :<br><br>"+video.snippet.description+"</p></div>");

        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});
