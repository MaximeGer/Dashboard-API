$("body").on("click","#logout", function(){
    $.ajax({
        url: "/saveDashboard",
        method: 'PUT',
        data: JSON.stringify({
            "dashboard": $("#dashboard").html(),
        }),
        contentType:'application/json',
        success: function(result){
            console.log(result)
            window.location.href ="/logout"
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});