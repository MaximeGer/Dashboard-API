package com.epitech.dashboard.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

@Controller
public class YoutubeController {
    @RequestMapping(value = "/api/youtube/getVideo/{id}", method = RequestMethod.GET,  produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String getVideo(@PathVariable("id") String id) throws IOException, InterruptedException {
        System.out.println(id);
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://youtube.googleapis.com/youtube/v3/search/?part=snippet&key=AIzaSyA_Bc3Jc0lMum41sD7reTC6zjocxbC3Jh0&q=https://youtu.be/"+id))
                .build();

        HttpResponse<String> response = client.send(request,
                HttpResponse.BodyHandlers.ofString());

        return response.body();
    }
}
