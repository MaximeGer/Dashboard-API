var widgetWeather = "<div id='containerWidgetWeather'>\
                        <div>\
                            <input type='text' name='selectCity' id='selectCity'>\
                            <button id='getCity' class='btn'>get the weather of your city</button>\
                        </div>\
                        <table id='widgetWeather' class='table table-striped'>\
                            <thead>\
                                <tr>\
                                    <th>City</th>\
                                    <th>Temperature</th>\
                                    <th>Description</th>\
                                </tr>\
                            </thead>\
                            <tbody>   \
                            </tbody>\
                        </table>\
                    </hr>\
                    <div>";

var widgetVideoInfos = "<div id='containerWidgetVideoInfos'>\
                            <select id='selectedVideo' class='selectpicker'>\
                                <option value='Trz0r-0ULtw' selected>Painting tutorial - Aeolian</option>\
                                <option value='oPc4z_wUKsM'>5 idées reçues sur l'Egypte antique - Nota Bene\
                                </option>\
                                <option value='gBkARPRN46g'>Let's Play Mécanique 3 #25 - La rencontre\
                                    inattendue\
                                    et la sortie d'urgence\
                                </option>\
                                <option value='XZu_SfoXcZ4'>Fragilité LoLienne 0 (parodies d'animes)\
                                </option>\
                            </select>\
                            <br>\
                            <button id=getVideo class='btn mb-3'>Search video</button>\
                            <br>\
                            <div id=widgetVideoInfos>\
                                <p>Get the infos of the video you selected</p>\
                            </div>\
                        <hr>\
                        <div>";

var widgetChannelInfos = "<div id='containerWidgetChannelInfos'>\
                            <select id='selectedChannel' class='selectpicker'>\
                                <option value='UCxo56gzJQ_fhb6svPqTSewg' selected>Fnatic</option>\
                                <option value='UCHsRtomD4twRf5WVHHk-cMw'>TierZoo</option>\
                                <option value='UC0e3QhIYukixgh5VVpKHH9Q'>Code Bullet</option>\
                                <option value='UCxyJxxwe-wy4HW1fkXw-j7w'>Rekkles</option>\
                                <option value='UCvKH-2OWQphA7aWj9TXR8ww'>Nicolai</option>\
                            </select>\
                            <br>\
                            <button id=getChannel class='btn mb-3'>Search channel</button>\
                            <br>\
                            <div id=widgetChannelInfos>\
                                <p>Get the infos of the channel you selected</p>\
                            </div>\
                        <hr>\
                        <div>";

var widgetSearchedVideoInfos = "<div id='containerWidgetSearchedVideoInfos'>\
                                    <input type='text' id='searchVideoInput' name='searchVideoInput' class='form-control' placeholder='Search video' aria-label='Search video' aria-describedby='basic-addon2'>\
                                    <br>\
                                    <div class='input-group-append'>\
                                        <button class='btn btn-outline-secondary' id='searchVideoButton' type='button'>Button</button>\
                                    </div>\
                                    <br>\
                                    <div id=widgetSearchedVideoInfos>\
                                        <p>Search the video</p>\
                                    </div>\
                                <hr>\
                                <div>";

var widgetSteamNews = " <div id='containerWidgetSteamNews'>\
                            <h3>Steam</h3>\
                            <select name='selectGame' id='selectGame' class='selectpicker'>\
                                <option value='1091500' selected>Cyberpunk 2077</option>\
                                <option value='945360'>Among Us</option>\
                                <option value='391540'>Undertale</option>\
                                <option value='400'>Portal</option>\
                            </select>\
                            <button id=getNews class='btn'>Get the news of the game you selected</button>\
                            <div id=widgetSteamNews></div>\
                        <hr>\
                        <div>";

var widgetMoviesByPopularity = "<div id=containerWidgetMoviesByPopularity>\
                                    <h3>Movies</h3>\
                                    <span>Range: </span>\
                                    <input type='date' id='bottom-date'><span> - </span>\
                                    <input type='date' id='high-date'><br><br>\
                                    <button id=getMoviesByPopularity class='btn'>Get the most popular movies between two dates that you chose</button>\
                                    <div id=widgetMoviesByPopularity></div>\
                                <hr>\
                                </div>";

var widgetSearchMovies = "<div id='containerWidgetSearchMovies'>\
                            <input type='text' id='inputSearchMovies' class='form-control' placeholder='Type the movie your searching for here'>\
                            </div>\
                            <br>\
                            <button id='btnSearchMovies' class='btn mb-3'>Search your movie</button>\
                            <br>\
                            <div id='widgetSearchMovies'></div>\
                        <hr>\
                        </div>";
var widgetLoveCalc = "  <div id='containerWidgetLoveCalc'>\
                            <h3>&#10084; Love Calculator &#10084;</h3>\
                            <input id=fname class='form-control' placeholder='Type the first person'><br><br>\
                            <input id=sname class='form-control' placeholder='Type the second person'><br><br>\
                            <button id=getLove class='btn'>Get the percentage of love between these two people</button>\
                            <div id=widgetLoveCalc></div>\
                        <hr>\
                        </div>";