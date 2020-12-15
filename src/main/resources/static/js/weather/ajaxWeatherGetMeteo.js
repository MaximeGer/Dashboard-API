$("#getCity").click(function(){
    $.ajax({
        url: "/weather/city/" + $("#selectCity").val(),
        methode: 'GET',
        contentType: 'application/json',
        success: function(result){
            console.log(result);

        },
        error: function(error){
            console.log("error");
            console.log(error.HEADERS_RECEIVED)
        }
    });
});