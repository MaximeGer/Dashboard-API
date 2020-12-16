$("#getChannel").click(function(){
    $.ajax({
        url: "/api/youtube/getChannel/" + $("#selectedChannel").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            channel = result.items[0];
            $("#widgetChannelInfos").html("");
            $("#widgetChannelInfos").append("<div id='youtubeChannel'>");
            $("#widgetChannelInfos").append("<h1 id='Title'><a href=https://youtube.com/channel/"+$("#selectedChannel").val()+">"+channel.snippet.title +"</a></h1>");
            $("#widgetChannelInfos").append("<img id='imgChannel' class='img-fluid img-thumbnail' width='"+channel.snippet.thumbnails.medium.width + "' height='"+channel.snippet.thumbnails.medium.height + "' src='" + channel.snippet.thumbnails.medium.url + "'></div>");
            $("#widgetChannelInfos").append("<br>View count : " + channel.statistics.viewCount);
            $("#widgetChannelInfos").append("<br>Subscribers count : " + channel.statistics.subscriberCount);
            $("#widgetChannelInfos").append("<br>Video count : " + channel.statistics.videoCount);
            $("#widgetChannelInfos").append("<br><br><p>Description :<br><br>"+channel.snippet.description+"</p></div>");
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});
