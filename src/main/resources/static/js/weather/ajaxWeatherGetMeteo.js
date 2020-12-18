$("body").on("click","#getCity", function(){
    self = $(this).parent();
    $.ajax({
        url: "/weather/city/" + self.find("#selectCity").val(),
        methode: 'GET',
        contentType: 'application/json',
        success: function(result){
            temp = (result["main"]["temp"]) - 273.15;
            temp = temp.toFixed(2);
            city = self.find("#selectCity").val();
            description = result["weather"]["0"]["description"];
            capitalizedCity = city.charAt(0).toUpperCase() + city.slice(1);
            self.find("#widgetWeather").find("tbody").append("<tr><td>" + capitalizedCity + "</td> <td>" + temp + "°C</td> <td>" + description +"</td></tr>");
         },
        error: function(error){
            console.log("error");
            console.log(error.HEADERS_RECEIVED)
        }
    });
});