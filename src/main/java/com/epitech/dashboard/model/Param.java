package com.epitech.dashboard.model;

public class Param {

    private String name;
    private String type;

    public Param(String name, String type){
        this.name = name;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public String getType() {
        return type;
    }
}
