package com.example.userauthenticaton.userauthentication.service;

import java.security.SecureRandom;
import java.util.Base64;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.userauthenticaton.userauthentication.model.Employee;
import com.example.userauthenticaton.userauthentication.repo.EmployeeRepo;

@Service
public class AuthService {
	@Autowired
    private EmployeeRepo employeeRepo;
    private static final SecureRandom secureRandom=new SecureRandom();
    private static final Base64.Encoder base64encoder=Base64.getUrlEncoder();
    

	public Employee register(Employee employee) {
	    if(checkEmployeeExist(employee)==true)
	    	return null;
	    employee.setToken(generateToken());
	    return employeeRepo.save(employee);
	}

	private String generateToken() {
		byte[] token=new byte[24];
		secureRandom.nextBytes(token);
		return base64encoder.encodeToString(token);
	}

	private boolean checkEmployeeExist(Employee employee) {
		Employee existingEmployee=employeeRepo.findById(employee.getEmployeeId()).orElse(null);
		if(existingEmployee==null)
			return false;
		return true;
	
	}

	public Employee login(Employee employee) {
		Employee existingEmployee=employeeRepo.findById(employee.getEmployeeId()).orElse(null);
		if(existingEmployee.getEmployeeId().equals(employee.getEmployeeId())&&existingEmployee.getPassword().contentEquals(employee.getPassword())&&existingEmployee.getRole().contentEquals(employee.getRole())){
		return existingEmployee;
		
		}
		
		return null;
	}
}
