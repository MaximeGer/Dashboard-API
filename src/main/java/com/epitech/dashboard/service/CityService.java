package com.epitech.dashboard.service;

import com.epitech.dashboard.model.City;
import com.epitech.dashboard.repository.ICityService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CityService implements ICityService {

    public List<City> getCities() {

        List<City> cities = new ArrayList<>();

        cities.add(new City(1L, "Bratislava", 432000));
        cities.add(new City(2L, "Budapest", 1759000));

        return cities;
    }
}