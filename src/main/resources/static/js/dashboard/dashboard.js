$("body").on("click", "#addWidgetWeather", function (){
    $("#dashboard").append(widgetWeather)
    $("#addWidgetWeather").attr("id","deleteWidgetWeather")
    $("#deleteWidgetWeather").html("Delete");
});


$("body").on("click","#addWidgetVideoInfos",function (){
    $("#dashboard").append(widgetVideoInfos)
    $(".selectpicker").selectpicker("refresh")
    $("#addWidgetVideoInfos").attr("id","deleteWidgetVideoInfos")
    $("#deleteWidgetVideoInfos").html("Delete");
});


$("body").on("click","#addWidgetChannelInfos",function (){
    $("#dashboard").append(widgetChannelInfos)
    $(".selectpicker").selectpicker("refresh")
    $("#addWidgetChannelInfos").attr("id","deleteWidgetChannelInfos")
    $("#deleteWidgetChannelInfos").html("Delete");
});


$("body").on("click","#addWidgetSearchedVideoInfos",function (){
    $("#dashboard").append(widgetSearchedVideoInfos)
    $("#addWidgetSearchedVideoInfos").attr("id","deleteWidgetSearchedVideoInfos")
    $("#deleteWidgetSearchedVideoInfos").html("Delete");
});


$("body").on("click","#addWidgetSteamNews",function (){
    $("#dashboard").append(widgetSteamNews)
    $(".selectpicker").selectpicker("refresh")
    $("#addWidgetSteamNews").attr("id","deleteWidgetSteamNews")
    $("#deleteWidgetSteamNews").html("Delete");
});


$("body").on("click","#addWidgetMoviesByPopularity",function (){
    $("#dashboard").append(widgetMoviesByPopularity)
    $("#addWidgetMoviesByPopularity").attr("id","deleteWidgetMoviesByPopularity")
    $("#deleteWidgetMoviesByPopularity").html("Delete");
});


$("body").on("click","#addWidgetSearchMovies",function (){
    $("#dashboard").append(widgetSearchMovies)
    $("#addWidgetSearchMovies").attr("id","deleteWidgetSearchMovies")
    $("#deleteWidgetSearchMovies").html("Delete");
});


$("body").on("click","#addWidgetLoveCalc",function (){
    $("#dashboard").append(widgetLoveCalc)
    $("#addWidgetLoveCalc").attr("id","deleteWidgetLoveCalc")
    $("#deleteWidgetLoveCalc").html("Delete");
});



$("body").on("click","#deleteWidgetWeather",function (){
    $("#dashboard").find("#containerWidgetWeather").remove()
    $("#deleteWidgetWeather").attr("id","addWidgetWeather")
    $("#addWidgetWeather").html("Add");
});


$("body").on("click","#deleteWidgetVideoInfos",function (){
    $("#dashboard").find("#containerWidgetVideoInfos").remove()
    $("#deleteWidgetVideoInfos").attr("id","addWidgetVideoInfos")
    $("#addWidgetVideoInfos").html("Add");
});


$("body").on("click","#deleteWidgetChannelInfos",function (){
    $("#dashboard").find("#containerWidgetChannelInfos").remove()
    $("#deleteWidgetChannelInfos").attr("id","addWidgetChannelInfos")
    $("#addWidgetChannelInfos").html("Add");
});


$("body").on("click","#deleteWidgetSearchedVideoInfos",function (){
    $("#dashboard").find("#containerWidgetSearchedVideoInfos").remove()
    $("#deleteWidgetSearchedVideoInfos").attr("id","addWidgetSearchedVideoInfos")
    $("#addWidgetSearchedVideoInfos").html("Add");
});


$("body").on("click","#deleteWidgetSteamNews",function (){
    $("#dashboard").find("#containerWidgetSteamNews").remove()
    $("#deleteWidgetSteamNews").attr("id","addWidgetSteamNews")
    $("#addWidgetSteamNews").html("Add");
});


$("body").on("click","#deleteWidgetWidgetSearchMovies",function (){
    $("#dashboard").find("#containerWidgetWidgetSearchMovies").remove()
    $("#deleteWidgetWidgetSearchMovies").attr("id","addWidgetWidgetSearchMovies")
    $("#addWidgetWidgetSearchMovies").html("Add");
});


$("body").on("click","#deleteWidgetWidgetLoveCalc",function (){
    $("#dashboard").find("#containerWidgetWidgetLoveCalc").remove()
    $("#deleteWidgetWidgetLoveCalc").attr("id","addWidgetWidgetLoveCalc")
    $("#addWidgetWidgetLoveCalc").html("Add");
});



