var widgetWeather = "<div>\
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
                    </div>";

var widgetVideoInfos = "<div>\
                <div id='selectVideo' class='tab-pane fade input-group mb-3'>\
                    <div class='mb-3'>\
                        <select name='selectVideo' id='selectedVideo' class='selectpicker'>\
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
                    </div>\
                    <br>\
                    <button id=getVideo class='btn mb-3'>Search video</button>\
                    <br>\
                    <div id=widgetVideoInfos>\
                        <p>Get the infos of the video you selected</p>\
                    </div>\
                </div>\
            </div>";

var widgetSearchedVideoInfos = "<div>\
                                    <div id='searchVideo' class='tab-pane fade input-group mb-3'>\
                                        <input type='text' id='searchVideoInput' name='searchVideoInput' class='form-control' placeholder='Search video' aria-label='Search video' aria-describedby='basic-addon2'>\
                                        <br>\
                                        <div class='input-group-append'>\
                                            <button class='btn btn-outline-secondary' id='searchVideoButton' type='button'>Button</button>\
                                        </div>\
                                        <br>\
                                        <div id=widgetSearchedVideoInfos>\
                                            <p>Search the video</p>\
                                        </div>\
                                    </div>\
                                </div>";
var widgetChannelInfos = "<div>\
                            <div id='selectChannel' class='tab-pane fade input-group mb-3'>\
                                <div class='mb-3'>\
                                    <select name='selectChannel' id='selectedChannel' class='selectpicker'>\
                                        <option value='UCxo56gzJQ_fhb6svPqTSewg' selected>Fnatic</option>\
                                        <option value='UCHsRtomD4twRf5WVHHk-cMw'>TierZoo</option>\
                                        <option value='UC0e3QhIYukixgh5VVpKHH9Q'>Code Bullet</option>\
                                        <option value='UCxyJxxwe-wy4HW1fkXw-j7w'>Rekkles</option>\
                                        <option value='UCvKH-2OWQphA7aWj9TXR8ww'>Nicolai</option>\
                                    </select>\
                                </div>\
                                <br>\
                                <button id=getChannel class='btn mb-3'>Search channel</button>\
                                <br>\
                                <div id=widgetChannelInfos>\
                                    <p>Get the infos of the channel you selected</p>\
                                </div>\
                            </div>\
                        </div>";