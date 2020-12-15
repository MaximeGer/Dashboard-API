package com.epitech.dashboard.controller;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class WeatherController {
    @RequestMapping(value = "/weather/city/{cityname}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String getFoosBySimplePathWithPathVariable(
        @PathVariable("cityname") String cityname) throws IOException, InterruptedException {
            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=525fed8a65a821cff57c8062da27fd8a"))
                    .build();
    
            HttpResponse<String> response = client.send(request,
                    HttpResponse.BodyHandlers.ofString());
    
            return response.body();
    }
}
