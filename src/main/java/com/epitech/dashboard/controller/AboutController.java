package com.epitech.dashboard.controller;

import com.epitech.dashboard.model.Param;
import com.epitech.dashboard.model.Service;
import com.epitech.dashboard.model.Widget;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

@RestController
public class AboutController
{
    //return informations about the services on the server
    @GetMapping(value="/about.json")
    public JSONObject getAbout(HttpServletRequest request) {
        JSONObject resultObjJson = new JSONObject();

        JSONObject client = new JSONObject();
        client.put("host", getIp(request));
        resultObjJson.put("client", client);

        JSONObject serverObjJson = new JSONObject();
        serverObjJson.put("current_time", Instant.now().getEpochSecond());

        JSONArray servicesArrJson = new JSONArray();
        for (Service service : initServices()) {
            servicesArrJson.add(getService(service));
        }

        serverObjJson.put("services", servicesArrJson);

        resultObjJson.put("server", serverObjJson);
        return resultObjJson;
    }

    private String getIp(HttpServletRequest request){
        String remoteAddr = "";
        if (request != null) {
            remoteAddr = request.getHeader("X-FORWARDED-FOR");
            if (remoteAddr == null || "".equals(remoteAddr)) {
                remoteAddr = request.getRemoteAddr();
            }
        }
        return remoteAddr;
    }

    // Init the values of the informations according to the services
    private List<Service> initServices(){
        List<Service> services = new ArrayList<>();

        Service serviceWeather = new Service("weather");
        Widget widgetTemp = new Widget("city_temperature", "Display temperature for a city");
        Param cityParam = new Param("city", "string");

        widgetTemp.addParam(cityParam);
        serviceWeather.addWidget(widgetTemp);

        services.add(serviceWeather);

        return services;
    }

    // return the value in Json of a service
    private JSONObject getService(Service service){
        JSONArray serviceArrJson = new JSONArray();

        JSONObject serviceObjJson = new JSONObject();
        serviceObjJson.put("name", service.getName());

        JSONArray widgetsArrJson = new JSONArray();

        for (Widget widget: service.getWidgets()){
            widgetsArrJson.add(getWidget(widget));
        }

        serviceObjJson.put("widgets",widgetsArrJson);

        serviceArrJson.add(serviceObjJson);

        return serviceObjJson;
    }

    // return the value in Json of a widget
    private JSONObject getWidget(Widget widget){

        JSONObject widgetObjJson = new JSONObject();
        widgetObjJson.put("name", widget.getName());
        widgetObjJson.put("description", widget.getDesc());

        JSONArray paramsArrJson = new JSONArray();

        for (Param param: widget.getParams()) {
            paramsArrJson.add(getParam(param));
        }

        widgetObjJson.put("params",paramsArrJson);

        return widgetObjJson;
    }

    // return the value in Json of a parameter
    private JSONObject getParam(Param param){
        JSONObject paramObjJson = new JSONObject();
        paramObjJson.put("name", param.getName());
        paramObjJson.put("type", param.getType());

        return paramObjJson;
    }
}