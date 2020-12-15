$("#getMoviesByPopularity").click(function(){
    $.ajax({
        url: "/api/movies/getByPopularity?high-date=" + $("#high-date").val()+"&bottom-date="+ $("#bottom-date").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            $("#widgetMoviesByPopularity").html(result);
            console.log(result)
            movieItems = result["results"];
            if(movieItems[0] === undefined){
                $("#widgetMoviesByPopularity").html("<p style='color: red'>These are not valid dates, recheck what you wrote</p>");
            }
            else{
                for (var i=0; i<=5; i++) {
                    $("#widgetMoviesByPopularity").append("<div class='movie' style='text-align: center'>\
                                                                <h3><strong>"+ movieItems[i]["original_title"] +"</strong> (Sortie le "+ movieItems[i]["release_date"] +")</h3>\
                                                                <img class='img-fluid img-thumbnail' style='width: 20%'\
                                                                 src='https://image.tmdb.org/t/p/w500/"+ movieItems[i]["poster_path"]+"'>\
                                                                <p style='box-sizing: border-box'>"+ movieItems[i]["overview"] +"</p>\
                                                            </div>\
                                                            <hr>");
                }
            }
            
        
        },
        error: function(error){
            console.log("error");
            console.log(error.HEADERS_RECEIVED)
        }
    });
});