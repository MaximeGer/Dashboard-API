package com.epitech.dashboard.controller;

import com.epitech.dashboard.model.City;
import com.epitech.dashboard.repository.ICityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class AboutController
{


    @Autowired
    private ICityService cityService;

    @GetMapping("/cities")
    public List<City> getCities() {
        return cityService.getCities();
    }

    @GetMapping(value="/about.json")
    public Map<String, String> sayHello() {
        HashMap<String, String> map = new HashMap<>();
        map.put("key", "value");
        map.put("foo", "bar");
        map.put("aa", "bb");
        return map;
    }
}