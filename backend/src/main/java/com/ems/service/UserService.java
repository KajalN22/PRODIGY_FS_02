package com.ems.service;

import java.util.List;

import com.ems.entities.User;

public interface UserService {

	
	User registerUser(User user);
	
	User loginUser(String email, String password);
	
	User updateUser(Long userId, User updatedUser);
	
	List<User> getAllUsers();
	
	User getUserById(Long userId);

	void deleteUser(Long userId);
	
	 
	 
}