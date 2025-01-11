package com.ems.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.entities.User;
import com.ems.exception.ResourceNotFoundException;
import com.ems.service.EmployeeService;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    @Autowired
    private com.ems.repositories.UserRepository userRepository;

    @Override
    public User viewProfile(Long employeeId) {
        // Find and return the employee by their ID
        return userRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + employeeId));
    }

    @Override
    public User updateProfile(Long employeeId, User updatedEmployee) {
        // Find the existing employee by ID
        User existingEmployee = userRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with ID: " + employeeId));

        // Update only allowed fields
        existingEmployee.setFirstName(updatedEmployee.getFirstName());
        existingEmployee.setLastName(updatedEmployee.getLastName());
        existingEmployee.setEmail(updatedEmployee.getEmail());
        existingEmployee.setPhoneNo(updatedEmployee.getPhoneNo());
        existingEmployee.setMyAddress(updatedEmployee.getMyAddress());

        return userRepository.save(existingEmployee);
    }
}
