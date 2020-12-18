$("body").on("click","#getNews", function(){
    self = $(this).parent()
    $.ajax({
        url: "/api/steam/getNews/" + self.find("#selectGame").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            self.find("#widgetSteamNews").html(result);
            newsitems = result["appnews"]["newsitems"];
            length = newsitems.length;
            self.find("#widgetSteamNews").html("");
            for (var i=1; i<=5; i++) {
                self.find("#widgetSteamNews").append("<div class='steamNews'>"+ newsitems[length-i]["contents"]+"</div><hr>");
            }
            self.find("#widgetSteamNews").find("img").attr("class","img-fluid img-thumbnail")
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});