package com.epitech.dashboard.controller;

import com.epitech.dashboard.model.User;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {
    @ResponseBody
    @RequestMapping(value = "/saveDashboard" , method = RequestMethod.PUT)
    public String saveDashboardPUT(User user, @RequestBody String dashboard) {
        System.out.println("");
        System.out.println(dashboard);
        user.setDashboard(dashboard);
        return "success";
    }
}
