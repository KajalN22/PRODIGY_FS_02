package com.ems.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UpdateEmployeeDTO {
    private String firstName;  // Updated first name of the employee
    private String lastName;   // Updated last name of the employee
    private String email;      // Updated email address
    private String phoneNo;    // Updated phone number
    private String address;    // Updated address as a string
    private String password;   // Updated password
}
