package com.ems.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ems.entities.Address;

public interface AddressRepository extends JpaRepository<Address,Long> {

}
