$("#getLove").click(function(){
    $.ajax({
        url: "/api/loveCalculator?fname=" + $("#fname").val()+"&sname="+$("#sname").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            console.log(result);
            $("#widgetLoveCalc").html("");
            $("#widgetLoveCalc").append(result["result"]);
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});