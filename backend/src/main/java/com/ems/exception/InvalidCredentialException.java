package com.ems.exception;

public class InvalidCredentialException extends RuntimeException{

	public InvalidCredentialException(String mesg) {
		super(mesg);
	}
}
