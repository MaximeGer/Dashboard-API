
$("body").on("click","#getCityForecast", function(){
    self = $(this).parent();
    console.log("bob");
    lat = "";
    lon = "";
    city = self.find("#selectCityForecast").val();
    $.ajax({
        url: "/weather/city/" + city,
        methode: 'GET',
        async: false,
        contentType: 'application/json',
        success: function(result){
            lat = (result["coord"]["lat"]);
            lon = (result["coord"]["lon"]);
            },
        error: function(error){
            console.log("error");
            console.log(error.HEADERS_RECEIVED)
        }
    });
    $.ajax({
        url: "/forcastweather/city/getCityForecast?lat=" + lat +"&lon=" + lon,
        methode: 'GET',
        contentType: 'application/json',
        success: function(result){
            tempDailyMin    = (result ["daily"][0]["temp"]["min"]) - 273.15;
            tempDailyMin    = tempDailyMin.toFixed(2);
            tempDailyMax    = (result ["daily"][0]["temp"]["max"]) - 273.15;
            tempDailyMax    = tempDailyMax.toFixed(2);
            tempHourly      = ((result ["hourly"][0]["temp"]) - 273.15).toFixed(2);
            capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
            if(self.find("#forecastInterval").val() == "daily"){
                self.find("#bob").append("<p>The temperature will be at its highest " + tempDailyMax + "°C and at the lowest " + tempDailyMin + "°C in " + capitalizedCity + ". </p>");
            } else {
                self.find("#bob").append("<p>In the next hour he will do " + tempHourly + "°C in " + capitalizedCity + ". </p>");
            }
        },
        error: function(error){
            console.log("error");
            console.log(error.HEADERS_RECEIVED)
        }
    });
});


