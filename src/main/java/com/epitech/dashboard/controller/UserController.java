package com.epitech.dashboard.controller;

import javax.validation.Valid;

import com.epitech.dashboard.model.User;
import com.epitech.dashboard.repository.UserRepository;

import org.apache.tomcat.util.buf.UDecoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class UserController {

    @Autowired
    UserRepository userFolder;


    @ResponseBody
    @RequestMapping(value = "/saveDashboard" , method = RequestMethod.PUT)
    public String saveDashboardPUT(@RequestBody String dashboard) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userFolder.findByUserName(auth.getName());
        user.setDashboard(dashboard);
        userFolder.save(user);
        return "success";
    }
}
