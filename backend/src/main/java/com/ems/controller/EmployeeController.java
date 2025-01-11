package com.ems.controller;

import com.ems.entities.User;
import com.ems.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // Get Employee Profile (Employee only)
    @GetMapping("/{employeeId}")
    public ResponseEntity<User> getEmployeeProfile(@PathVariable Long employeeId) {
        try {
            User employee = employeeService.viewProfile(employeeId);
            return new ResponseEntity<>(employee, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }

    // Update Employee Profile (Employee only)
    @PutMapping("/{employeeId}/update")
    public ResponseEntity<User> updateEmployeeProfile(@PathVariable Long employeeId, @RequestBody User updatedEmployee) {
        try {
            User updated = employeeService.updateProfile(employeeId, updatedEmployee);
            return new ResponseEntity<>(updated, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
    }
    
    
    // Logout Employee
    @PostMapping("/logout")
    public ResponseEntity<String> logoutEmployee() {
        // Perform any necessary logout logic here
        // Example: invalidate tokens or clear the session
        return new ResponseEntity<>("Employee successfully logged out.", HttpStatus.OK);
    }
}
