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

public class LoveCalculatorController {
    @RequestMapping(value = "/api/loveCalculator", params= {"fname", "sname"} , method = RequestMethod.GET,  produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public String loveCalculator(@RequestParam("fname") String fname, @RequestParam("sname") String sname) throws IOException, InterruptedException {
        HttpRequest request = HttpRequest.newBuilder()
            .uri(URI.create("https://love-calculator.p.rapidapi.com/getPercentage?fname="+fname+"&sname="+sname))
            .header("x-rapidapi-key", "e665467dc2mshb8e66ef5b031977p12448ejsn6eee88a8dfe0")
            .header("x-rapidapi-host", "love-calculator.p.rapidapi.com")
            .method("GET", HttpRequest.BodyPublishers.noBody())
            .build();
        HttpResponse<String> response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        return response.body();
    }
}
