$("#getCity").click(function(){
    $.ajax({
        url: "/weather/city/" + $("#selectCity").val(),
        methode: 'GET',
        contentType: 'application/json',
        success: function(result){
            temp = (result["main"]["temp"]) - 273.15;
            temp = temp.toFixed(2);
            console.log(temp);
            console.log($("#selectCity").val());
            $("#widgetWeather").append("<div><p>A " + $("#selectCity").val() + " il fait" + temp + "</p></div><hr>");


        },
        error: function(error){
            console.log("error");
            console.log(error.HEADERS_RECEIVED)
        }
    });
});