$("body").on("click","#getVideo", function(){
    self = $(this).parent();
    $.ajax({
        url: "/api/youtube/getVideo/" + self.find("#selectedVideo").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            video = result.items[0];
            self.find("#widgetVideoInfos").html("");
            self.find("#widgetVideoInfos").append("<div id='youtubeVideo'>");
            self.find("#widgetVideoInfos").append("<h1 id='Title'>"+video.snippet.title +"</h1>");
            self.find("#widgetVideoInfos").append("<br><a href=https://www.youtube.com/channel/"+video.snippet.channelId+">"+video.snippet.channelTitle+"</h5><hr>");
            self.find("#widgetVideoInfos").append(video.player.embedHtml);
            self.find("#widgetVideoInfos").append("<br><br><p>Description :<br><br>"+video.snippet.description+"</p></div>");

        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});
