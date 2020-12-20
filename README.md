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

application.properties





