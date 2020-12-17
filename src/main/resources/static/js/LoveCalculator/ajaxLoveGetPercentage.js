$("body").on("click", "#getLove", function(){
    fname = $("#fname").val().replace(" ","");
    sname = $("#sname").val().replace(" ", "")
    $.ajax({
        url: "/api/loveCalculator?fname=" + fname+"&sname="+sname,
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            console.log(result);
            $("#widgetLoveCalc").html("");
            $("#widgetLoveCalc").append(result["percentage"] + "%: " + result["result"]);
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});