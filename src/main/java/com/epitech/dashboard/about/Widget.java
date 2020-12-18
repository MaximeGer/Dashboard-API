package com.epitech.dashboard.about;

import java.util.ArrayList;

public class Widget {
    private String name;
    private String desc;
    private ArrayList<Param> param = new ArrayList<>();

    public Widget(String name, String desc){
        this.name = name;
        this.desc = desc;
    }

    public ArrayList<Param> getParams() {
        return param;
    }

    public String getName() {
        return name;
    }

    public String getDesc() {
        return desc;
    }

    public void addParam(Param cityParam) {
        param.add(cityParam);

    }
}
