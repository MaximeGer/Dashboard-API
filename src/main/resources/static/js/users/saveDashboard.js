$("body").on("click","#logout", function(){
    $.ajax({
        url: "/saveDashboard",
        method: 'PUT',
        data: $("#dashboard").html(),
        contentType:'application/json',
        success: function(result){
            window.location.href ="/logout"
        },
        error: function(error){
            console.error("Error : " +error.responseJSON.error + ", status : "+ error.responseJSON.status)
            console.error("Message : " +error.responseJSON.message)
        }
    });
});