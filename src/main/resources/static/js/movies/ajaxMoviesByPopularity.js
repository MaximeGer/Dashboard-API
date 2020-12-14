$("#getMoviesByPopularity").click(function(){
    $.ajax({
        url: "/api/movies/getByPopularity?high-date=" + $("#high-date").val()+"&bottom-date="+ $("#bottom-date").val(),
        method: 'GET',
        contentType:'application/json',
        success: function(result){
            $("#widgetMoviesByPopularity").html(result);
            console.log(result)
            movieItems = result["results"];
            console.log(movieItems);
            for (var i=0; i<=5; i++) {
                $("#widgetMoviesByPopularity").append("<div class='movie'>\
                                                            <h3><strong>"+ movieItems[i]["original_title"] +"</strong> ("+ movieItems[i]["release_date"] +")</h3>\
                                                            <img class='img-fluid img-thumbnail' src='https://image.tmdb.org/t/p/w500/"+ movieItems[i]["poster_path"]+"'>\
                                                        </div>\
                                                        <hr>");
            }
        
        },
        error: function(error){
            console.log("error");
            console.log(error.HEADERS_RECEIVED)
        }
    });
});