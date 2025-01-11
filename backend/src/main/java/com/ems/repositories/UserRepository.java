package com.ems.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	//finder method for user sign in

	Optional<User> findByEmailAndPassword(String email, String password);

	Optional<User> findByEmail(String email);

	

	
}
