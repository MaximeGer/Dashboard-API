$("#searchVideoButton").click(function(){
    if($("#searchVideoInput").val().length > 0){
        $.ajax({
            url: "/api/youtube/searchVideo/" + $("#searchVideoInput").val(),
            method: 'GET',
            contentType:'application/json',
            success: function(result){
                $("#widgetSearchedVideoInfos").html("");
                var l = 5;
                if(result.items.length<5){
                    l = result.items.length;
                }
                for (var i=0; i<l; i++) {
                    searchedVideos = result.items[i];
                    $("#widgetSearchedVideoInfos").append("<h3 id='Title'><a href=https://youtu.be/"+searchedVideos.id.videoId+">"+searchedVideos.snippet.title +"</a></h1>");
                    $.ajax({
                        url: "/api/youtube/getVideo/" + searchedVideos.id.videoId,
                        method: 'GET',
                        async: false,
                        contentType:'application/json',
                        success: function(result){
                            video = result.items[0];
                            $("#widgetSearchedVideoInfos").append(video.player.embedHtml);
                        },
                        error: function(error){
                            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
                            console.error("Message : " +error.responseJSON.message)
                        }
                    });
                }
            },
            error: function(error){
                console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
                console.error("Message : " +error.responseJSON.message)
            }
        });
    }


});
