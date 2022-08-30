package com.example.userauthenticaton.userauthentication.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.userauthenticaton.userauthentication.model.Employee;

public interface EmployeeRepo extends JpaRepository<Employee,Integer>{
 
}
