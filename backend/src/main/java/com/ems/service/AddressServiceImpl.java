package com.ems.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ems.entities.Address;
import com.ems.exception.AddressNotNullException;
import com.ems.exception.ResourceNotFoundException;

@Service
public class AddressServiceImpl implements AddressService {

    @Autowired
    private com.ems.repositories.AddressRepository addressRepository;

    @Override
    public Address saveAddress(Address address) throws AddressNotNullException {
        if (address == null) {
            throw new AddressNotNullException("Address cannot be null");
        }
        return addressRepository.save(address);
    }

    @Override
    public Address updateAddress(Long id, Address address) {
        // Fetch the existing address by ID
        Optional<Address> existingAddressOptional = addressRepository.findById(id);
        
        if (existingAddressOptional.isPresent()) {
            Address existingAddress = existingAddressOptional.get();

            // Update fields
            existingAddress.setStreet(address.getStreet());
            existingAddress.setCity(address.getCity());
            existingAddress.setState(address.getState());
            existingAddress.setPincode(address.getPincode());
            existingAddress.setCountry(address.getCountry());

            // Save the updated address
            return addressRepository.save(existingAddress);
        } else {
            throw new ResourceNotFoundException("Address not found with ID: " + id);
        }
    }

    @Override
    public void deleteAddress(Long id) {
        if (!addressRepository.existsById(id)) {
            throw new ResourceNotFoundException("Address not found with ID: " + id);
        }
        addressRepository.deleteById(id);
    }

    @Override
    public Address getAddressById(Long id) {
        return addressRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Address not found with ID: " + id));
    }
}
