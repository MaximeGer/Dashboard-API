var i = 1;

$("body").on("click", "#addWidgetWeather", function (){
    $("#dashboard").append(widgetWeather)
    console.log($(".widget").last())
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;
});

$("body").on("click", "#addWidgetForecastWeather", function (){
    $("#dashboard").append(widgetForecastWeather)
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;
});


$("body").on("click","#addWidgetVideoInfos",function (){
    $("#dashboard").append(widgetVideoInfos)
    $(".selectpicker").selectpicker("refresh")
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;i = i +1;
});


$("body").on("click","#addWidgetChannelInfos",function (){
    $("#dashboard").append(widgetChannelInfos)
    $(".selectpicker").selectpicker("refresh")
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;i = i +1;
});


$("body").on("click","#addWidgetSearchedVideoInfos",function (){
    $("#dashboard").append(widgetSearchedVideoInfos)
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;i = i +1;
});


$("body").on("click","#addWidgetSteamNews",function (){
    $("#dashboard").append(widgetSteamNews)
    $(".selectpicker").selectpicker("refresh")
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;i = i +1;
});


$("body").on("click","#addWidgetMoviesByPopularity",function (){
    $("#dashboard").append(widgetMoviesByPopularity)
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;i = i +1;
});


$("body").on("click","#addWidgetSearchMovies",function (){
    $("#dashboard").append(widgetSearchMovies)
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;i = i +1;
});


$("body").on("click","#addWidgetLoveCalc",function (){
    $("#dashboard").append(widgetLoveCalc)
    $(".widget").last().attr("id", i)
    $(".widget").children().attr("draggable", "false")
    i = i+1;i = i +1;
});



$("body").on("click",".suicide",function (){
    $(this).parent().parent().remove()
});


