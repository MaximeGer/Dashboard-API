package com.epitech.dashboard.controller;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MoviesController {

    @RequestMapping(value = "/api/movies/getByPopularity", params= {"bottom-date", "high-date"} , method = RequestMethod.GET,  produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String getMoviesByPopularity(@RequestParam("bottom-date") String bottomDate, @RequestParam("high-date") String highDate) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://api.themoviedb.org/3/discover/movie?api_key=56c9f82dd80939aa8dc40cb237a222e9&primary_release_date.lte="+ highDate +"&primary_release_date.gte="+bottomDate))
                .build();

        HttpResponse<String> response = client.send(request,
                HttpResponse.BodyHandlers.ofString());

        return response.body();
    }
    
    @RequestMapping(value = "/api/movies/search", params= {"name"} , method = RequestMethod.GET,  produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String searchMovies(@RequestParam("name") String name) throws IOException, InterruptedException {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://api.themoviedb.org/3/search/movie?api_key=56c9f82dd80939aa8dc40cb237a222e9&query=" + name))
                .build();

        HttpResponse<String> response = client.send(request,
                HttpResponse.BodyHandlers.ofString());

        return response.body();
    }
}
