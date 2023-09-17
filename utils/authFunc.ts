import { useState } from "react";

interface UserData {
    email: string;
    password: string;
    fullName: string;
}

const validateField = ( value: string ) => {
    if (value === '') {
      return false;
    } else {
      return true;
    }
  }

export const handleLogin = async (userData: UserData) => {
    const { email, password } = userData;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isValidEmail = emailPattern.test(email);
    const isValidPassword = validateField(password);

    if (isValidEmail && isValidPassword) {
        console.log('Login successful');
        console.log(email, password)
    } else {
        console.log('Login failed');
    }

    console.log(validateField)

}

export const handleSignup = async (userData: UserData) => {
    const { fullName, email, password } = userData;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const isValidFullName = validateField(fullName);
    const isValidEmail = emailPattern.test(email);
    const isValidPassword = validateField(password);

    if (isValidFullName && isValidEmail && isValidPassword) {
        console.log('Registration successful successful');
        console.log(email, password)
    } else {
        console.log('Error, fill all blank fields');
    }
}