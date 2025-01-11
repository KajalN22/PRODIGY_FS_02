package com.ems.service;

import com.ems.entities.Role;
import com.ems.entities.User;
import com.ems.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    // Register User
    public User registerUser(User user) {
        if (user.getRole() == Role.ADMIN) {
            throw new IllegalArgumentException("Cannot register an admin.");
        }
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            throw new IllegalArgumentException("Email is already registered.");
        }
        user.setRole(Role.EMPLOYEE); // Set role as Employee by default
        return userRepository.save(user);
    }

    // Login User
    public User loginUser(String email, String password) {
        // Fetch user by email
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("Invalid credentials."));
        
        // Password validation logic (hash check should be here in real scenarios)
        if (!user.getPassword().equals(password)) {
            throw new IllegalArgumentException("Invalid credentials.");
        }

        return user;  // Return the user object (the frontend will handle the redirection logic)
    }


    // Update User
    public User updateUser(Long userId, User updatedUser) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found."));
        
        // Update the necessary fields
        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());
        user.setPassword(updatedUser.getPassword());
        user.setPhoneNo(updatedUser.getPhoneNo());
        user.setMyAddress(updatedUser.getMyAddress());
        
        // Keep the role as CUSTOMER by default
        user.setRole(Role.EMPLOYEE);
        
        return userRepository.save(user);
    }

    // Get All Users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Get User by ID
    public User getUserById(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User not found."));
    }

    @Override
    public void deleteUser(Long userId) {
        // Find the user by ID
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("User with ID " + userId + " not found"));

        // Delete the user
        userRepository.delete(user);
    }
}
