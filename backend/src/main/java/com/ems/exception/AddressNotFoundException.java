package com.ems.exception;

public class AddressNotFoundException extends RuntimeException{

	public AddressNotFoundException(String mesg) {
		
		super(mesg);
	}
}
