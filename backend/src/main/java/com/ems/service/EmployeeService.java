package com.ems.service;

import com.ems.entities.User;

public interface EmployeeService {

    // View their own profile by ID
    User viewProfile(Long employeeId);

    // Update their own profile
    User updateProfile(Long employeeId, User updatedEmployee);
}
