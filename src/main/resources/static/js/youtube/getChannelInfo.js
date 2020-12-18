$("body").on("click","#getChannel", function(){
    self = $(this).parent();
    $.ajax({
        url: "/api/youtube/getChannel/" + self.find("#selectedChannel").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            channel = result.items[0];
            self.find("#widgetChannelInfos").html("");
            self.find("#widgetChannelInfos").append("<div id='youtubeChannel'>");
            self.find("#widgetChannelInfos").append("<h1 id='Title'><a href=https://youtube.com/channel/"+$("#selectedChannel").val()+">"+channel.snippet.title +"</a></h1>");
            self.find("#widgetChannelInfos").append("<img id='imgChannel' class='img-fluid img-thumbnail' width='"+channel.snippet.thumbnails.medium.width + "' height='"+channel.snippet.thumbnails.medium.height + "' src='" + channel.snippet.thumbnails.medium.url + "'></div>");
            self.find("#widgetChannelInfos").append("<br>View count : " + channel.statistics.viewCount);
            self.find("#widgetChannelInfos").append("<br>Subscribers count : " + channel.statistics.subscriberCount);
            self.find("#widgetChannelInfos").append("<br>Video count : " + channel.statistics.videoCount);
            self.find("#widgetChannelInfos").append("<br><br><p>Description :<br><br>"+channel.snippet.description+"</p></div>");
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});
