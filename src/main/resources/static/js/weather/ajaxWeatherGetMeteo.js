
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
$("document").ready(function(){
    setInterval(function(){
        rowCount = $("#cityBody tr").length;
        for ( i = 0; i < rowCount; i++) {
            cityName = document.querySelector("#cityBody").children[i].children[0].innerHTML;
            $.ajax({
                url: "/weather/city/" + cityName,
                methode: 'GET',
                async: false,
                contentType: 'application/json',
                success: function(result){
                    document.querySelector("#cityBody").children[i].children[1].innerHTML = (result["main"]["temp"]) - 273.15;
                    document.querySelector("#cityBody").children[i].children[1].innerHTML = result["weather"]["0"]["description"];
                },
                error: function(error){
                    console.log("error");
                    console.log(error.HEADERS_RECEIVED)
                }
            });


        }
    }, 5000);
});