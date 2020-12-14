package com.epitech.dashboard.controller;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

public class WeatherController {
    private static final RequestMethod[] GET = null;

    @RequestMapping(value = "/weather/city/{cityname}", method = GET)
    @ResponseBody
    public String getFoosBySimplePathWithPathVariable(
        @PathVariable("cityname") long id) {
    return "Get a specific Foo with id=" + id;
}
}
