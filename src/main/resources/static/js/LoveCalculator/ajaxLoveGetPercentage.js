$("body").on("click", "#getLove", function(){
    self = $(this).parent();
    fname = self.find("#fname").val().replace(" ","");
    sname = self.find("#sname").val().replace(" ", "")
    
    $.ajax({
        url: "/api/loveCalculator?fname=" + fname+"&sname="+sname,
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            self.find("#widgetLoveCalc").html("");
            self.find("#widgetLoveCalc").append(result["percentage"] + "%: " + result["result"]);
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});