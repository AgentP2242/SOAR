package com.example.userauthenticaton.userauthentication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.userauthenticaton.userauthentication.model.Employee;
import com.example.userauthenticaton.userauthentication.service.AuthService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins="http://localhost:4200")
public class AuthController {
    @Autowired
	private AuthService authService;
    
    @PostMapping("/register")
    public Employee Register(@RequestBody Employee Employee) {
    	return authService.register(Employee);
    	
    }
 @PostMapping("/login")
 public Employee login(@RequestBody Employee employee) {
	 return authService.login(employee);
	
 }
}
