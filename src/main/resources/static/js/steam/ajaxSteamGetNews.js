$("#getNews").click(function(){
    $.ajax({
        url: "/api/steam/getNews/" + $("#selectGame").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            $("#widgetSteamNews").html(result);
            newsitems = result["appnews"]["newsitems"];
            length = newsitems.length;
            $("#widgetSteamNews").html("");
            for (var i=1; i<=5; i++) {
                $("#widgetSteamNews").append("<div class='steamNews'>"+ newsitems[length-i]["contents"]+"</div><hr>");
            }
            $("#widgetSteamNews").find("img").attr("class","img-fluid img-thumbnail")
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});