package com.epitech.dashboard.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Objects;

public class City {

    @JsonIgnore
    private Long id;

    HashMap<String, String> client = new HashMap<String, String>();

    private String name;
    private int population;

    public City() {
    }

    public City(Long id, String name, int population) {
        client.put("host", "10.101.53.35");

        this.id = id;
        this.name = name;
        this.population = population;
    }

    public HashMap<String, String> getClient() {
        return client;
    }

    public void setClient(HashMap<String, String> client) {
        this.client = client;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPopulation() {
        return population;
    }

    public void setPopulation(int population) {
        this.population = population;
    }

}