$("body").on("click", "#addWidgetWeather", function (){
    $("#dashboard").append(widgetWeather)
});

$("body").on("click", "#addWidgetForecastWeather", function (){
    $("#dashboard").append(widgetForecastWeather)
});


$("body").on("click","#addWidgetVideoInfos",function (){
    $("#dashboard").append(widgetVideoInfos)
    $(".selectpicker").selectpicker("refresh")
});


$("body").on("click","#addWidgetChannelInfos",function (){
    $("#dashboard").append(widgetChannelInfos)
    $(".selectpicker").selectpicker("refresh")
});


$("body").on("click","#addWidgetSearchedVideoInfos",function (){
    $("#dashboard").append(widgetSearchedVideoInfos)
});


$("body").on("click","#addWidgetSteamNews",function (){
    $("#dashboard").append(widgetSteamNews)
    $(".selectpicker").selectpicker("refresh")
});


$("body").on("click","#addWidgetMoviesByPopularity",function (){
    $("#dashboard").append(widgetMoviesByPopularity)
});


$("body").on("click","#addWidgetSearchMovies",function (){
    $("#dashboard").append(widgetSearchMovies)
});


$("body").on("click","#addWidgetLoveCalc",function (){
    $("#dashboard").append(widgetLoveCalc)
});



$("body").on("click",".suicide",function (){
    $(this).parent().parent().remove()
});


