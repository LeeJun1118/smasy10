package com.smasy10.apple.web.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class ApiController {

    @GetMapping("/api/login")
    public String hello() {
        return "Login";
    }
}
