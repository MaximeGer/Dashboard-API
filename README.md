# T-JAV-501-NAN-5-1-dashboard-maxime.germond

## Dashboard

### THE PROJECT

The purpose of this project is to go further with Java through the creation of a dashboard.
To do this, you need to implement a web application that works like [Netvibes](https://netvibes.com/).

#### Start the application :

1. Create a new mysql database by running this file : [createDatabase.sql](SQL/createDatabase.sql)

2. Setup application.properties.example :
    - Copy [application.properties.example](application.properties.example) into [src/main/resources](src/main/resources) 
    - Rename it into *application.properties*
    - Change the database credentials with your own (l.8 : username & l.9 : password)

##### IntellJ Idea

1. Build the project in a new  intellj project
2. Run [DashboardApplication.java](src/main/java/com/epitech/dashboard/DashboardApplication.java)
3. Go to [http://localhost:8080](http://localhost:8080)

##### Tomcat

1. Copy [dashboard-0.0.1-SNAPSHOT.war](build/libs/dashboard-0.0.1-SNAPSHOT.war) (in the build/libs/ folder) into the webapps folder of tomcat
2. From a terminal navigate to tomcat/bin folder and execute
    - ***catalina.bat run*** (on Windows)
    - ***catalina.sh run*** (on Unix-based systems)
3. Go to [http://localhost:8080/dashboard-0.0.1-SNAPSHOT](http://localhost:8080/dashboard-0.0.1-SNAPSHOT/)


#### Services & widgets :

- Weather
    - Get the weather of the city provided
    - Get the forecast weather of the city provided
 

- Youtube
    - Get the informations of a video selected in the list provided
    - Get the informations of a channel selected in the list provided
    - Get the informations of a video you search

- Steam
    - Get the news of a game selected in the list provided 

- Movies
    - Get the top 5 popular movies in a range of time between two dates	
    - Get the informations of the movie you want	


- Love calculator
    - Get the percentage of chances between two people
    

#### Project structure :

##### [Ressources](src/main/resources) :

- [application.properties](src/main/resources/application.properties)
    Sets the properties 
- [templates/](src/main/resources/templates)
    Contains html files  
- [static/css](src/main/resources/static/css)
    Contains style files
- [static/js](src/main/resources/static/js)
    Contains javascript files
    
##### [Java](src/main/java/com/epitech/dashboard) :

- [DashboardApplication.java](src/main/java/com/epitech/dashboard/DashboardApplication.java)
    Is the entry point of the application 
- [about](src/main/java/com/epitech/dashboard/about)
    Contains the class that help to create the *about.json* file
- [configuration](src/main/java/com/epitech/dashboard/configuration)
    Contains the file for the web security configuration
- [controller](src/main/java/com/epitech/dashboard/controller)
    Contains all the controllers of the APIs
- [model](src/main/java/com/epitech/dashboard/model)
    Contains the models for the authentication 
- [repository](src/main/java/com/epitech/dashboard/repository)
    Contains the repositories for the authentication 
- [service](src/main/java/com/epitech/dashboard/service)
    Contains the services for the authentication 

##### Other :

- [createDatabase.sql](SQL/createDatabase.sql) 
    File to run to create the database in mysql
- [build.gradle](build.gradle)
    Defines the gradle dependencies
    
#### APIs : 
  
##### About 
When calling :
- GET ***application-url/about.json***
    Get information about the APIs in a json file
    

##### Login
When calling :
- GET ***application-url/login***
    Set the login page of the application

- POST ***application-url/login?user_name=user_name&password=password***
    Login into the application if the credentials are in accordance with the values in the database

- GET ***application-url/registration***
    Set the registration page of the application
    
- POST ***application-url/registration***
    Register an user with the given params in the *x-www-form-urlencoded* type
    
- GET ***application-url/user/home***
    Set the home page of the application for an user

- GET ***application-url/admin/home***
    Set the home page of the application for an admin
    
##### LoveCalculator
When calling :
- GET ***application-url/api/loveCalculator?fname=fname&sname=sname***
    - See [love calculator api](URL ICI LOVE CALCULATOR)
    - Values and display are handled in the [ajaxLoveGetPercentage.js](src/main/resources/static/js/LoveCalculator/ajaxLoveGetPercentage.js) file 
        
##### Movies
When calling :
- GET ***application-url/api/movies/getByPopularity?bottom-date=2000-02-07&high-date=2000-11-30***
    - See [get most popular movies api](URL ICI Movies Popular)
    - Values and display are handled in the [ajaxMovies.js](src/main/resources/static/js/movies/ajaxMovies.js) file 
      
        
##### Steam
When calling :
- GET ***application-url/api/steam/getNews/{steamGameId}*** (eg. 1091500)
    - See [get steam game api](URL ICI STEAM)
    - Values and display are handled in the [ajaxSteamGetNews.js](src/main/resources/static/js/steam/ajaxSteamGetNews.js) file 


##### User
When calling :
- PUT ***application-url/saveDashboard***
    - Register the dashboard in the database


##### Weather
When calling :
- GET ***application-url/weather/city/{cityname}*** (eg. Nantes)
    - See [get weather by city api](URL ICI WEATHER)
    - Values and display are handled in the [ajaxWeatherGetMeteo.js](src/main/resources/static/js/weather/ajaxWeatherGetMeteo.js) file 
   
    
- GET ***application-url/forcastweather/city/getCityForecast?lat=11&lon=11***
    - See [get weather hourly or daily api](URL ICI WEATHER FREE)
    - Values and display are handled in the [ajaxForecastWeather.js](src/main/resources/static/js/weather/ajaxForecastWeather.js) file 
     
    
##### Youtube
When calling :
- GET ***application-url/api/youtube/getVideo/{youtubeVideoId}*** (eg. oPc4z_wUKsM)
    - See [video youtube api](https://developers.google.com/youtube/v3/docs/videos/list)
    - Values and display are handled in the [getVideoInfo.js](src/main/resources/static/js/youtube/getVideoInfo.js) file 
    
- GET ***application-url/api/youtube/getChannel/{youtubeChannelId}*** (eg. UCxo56gzJQ_fhb6svPqTSewg)
    - See [channel youtube api](https://developers.google.com/youtube/v3/docs/channels/list)
    - Values and display are handled in the [getChannelInfo.js](src/main/resources/static/js/youtube/getChannelInfo.js) file 

- GET ***application-url/api/youtube/searchVideo/{searchString}*** (eg. poulet)
    - See [channel youtube api](https://developers.google.com/youtube/v3/docs/search/list)
    - Values and display are handled in the [searchVideo.js](src/main/resources/static/js/youtube/searchVideo.js) file 



    






