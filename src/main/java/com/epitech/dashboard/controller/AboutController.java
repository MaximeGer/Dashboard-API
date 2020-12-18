package com.epitech.dashboard.controller;

import com.epitech.dashboard.about.Param;
import com.epitech.dashboard.about.Service;
import com.epitech.dashboard.about.Widget;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
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

        Service serviceTemp = new Service("Weather");
        Widget widgetTemp = new Widget("Get weather", "Display temperature & weather for a city");
        Param paramTemp = new Param("city", "string");

        widgetTemp.addParam(paramTemp);
        serviceTemp.addWidget(widgetTemp);

        services.add(serviceTemp);



        serviceTemp = new Service("Youtube");
        widgetTemp = new Widget("Select video", "Display information of a video");
        paramTemp = new Param("videoId", "string");

        widgetTemp.addParam(paramTemp);
        serviceTemp.addWidget(widgetTemp);


        widgetTemp = new Widget("Select channel", "Display information of a channel");
        paramTemp = new Param("channelId", "string");

        widgetTemp.addParam(paramTemp);
        serviceTemp.addWidget(widgetTemp);


        widgetTemp = new Widget("Search video", "Display 5 videos according to the searched string");
        paramTemp = new Param("searchedVideo", "string");

        widgetTemp.addParam(paramTemp);
        serviceTemp.addWidget(widgetTemp);

        services.add(serviceTemp);


        serviceTemp = new Service("Steam");
        widgetTemp = new Widget("Get news", "Display news according to the game selected");
        paramTemp = new Param("gameId", "string");

        widgetTemp.addParam(paramTemp);
        serviceTemp.addWidget(widgetTemp);

        services.add(serviceTemp);


        serviceTemp = new Service("Movies");
        widgetTemp = new Widget("Get movies by popularity", "Display the most popular movies between the date selected (of the moment if not selected)");

        paramTemp = new Param("date1", "string");
        widgetTemp.addParam(paramTemp);

        paramTemp = new Param("date2", "string");
        widgetTemp.addParam(paramTemp);

        serviceTemp.addWidget(widgetTemp);


        widgetTemp = new Widget("Search movies", "Display 5 movies according to the searched string");
        paramTemp = new Param("searchedMovie", "string");

        widgetTemp.addParam(paramTemp);
        serviceTemp.addWidget(widgetTemp);

        services.add(serviceTemp);


        serviceTemp = new Service("Love calculator");
        widgetTemp = new Widget("Get love", "Display the love percentage between two people <3");

        paramTemp = new Param("people1", "string");
        widgetTemp.addParam(paramTemp);

        paramTemp = new Param("people2", "string");
        widgetTemp.addParam(paramTemp);

        serviceTemp.addWidget(widgetTemp);

        services.add(serviceTemp);

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