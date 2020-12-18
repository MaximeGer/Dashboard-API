package com.epitech.dashboard.about;

import java.util.ArrayList;

public class Service {
    private String name;
    private ArrayList<Widget> widgets = new ArrayList<>();

    public Service(String name){
        this.name = name;
    }

    public void addWidget(Widget widget){
        widgets.add(widget);
    }

    public ArrayList<Widget> getWidgets() {
        return widgets;
    }

    public String getName() {
        return name;
    }
}
