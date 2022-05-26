import { login, loginError, password, passwordError, email, emailError, phone, phoneError, firstName, firstNameError, secondName, secondNameError } from "./variables.js";

export function signUpError() {
    // login
    if(login.validity.valueMissing) {
      loginError.textContent = 'You need to enter your login.';
    } 
    else if(login.validity.typeMismatch) {
      loginError.textContent = 'You need to enter your login.';
    } 
    else if(login.validity.tooShort) {
      loginError.textContent = `Login needs to be ${ login.minLength } characters.`;
    }
    loginError.className = 'error active';

    // password
    if(password.validity.valueMissing) {
      passwordError.textContent = 'You need to enter your password.';
    } 
    else if(password.validity.typeMismatch) {
      passwordError.textContent = 'You need to enter your password.';
    } 
    else if(password.validity.tooShort) {
      passwordError.textContent = `Password needs to be ${ password.minLength } characters.`;
    }
    passwordError.className = 'error active';

    // email
    if(email.validity.valueMissing) {
      emailError.textContent = 'You need to enter your email.';
    } 
    else if(email.validity.typeMismatch) {
      emailError.textContent = 'You need to enter your email.';
    } 
    emailError.className = 'error active';

    // first name
    if(firstName.validity.valueMissing) {
      firstNameError.textContent = 'You need to enter your first name.';
    } 
    else if(firstName.validity.typeMismatch) {
      firstNameError.textContent = 'You need to enter your first name.';
    } 
    firstNameError.className = 'error active';

    // second name
    if(secondName.validity.valueMissing) {
      secondNameError.textContent = 'You need to enter your second name.';
    } 
    else if(secondName.validity.typeMismatch) {
      secondNameError.textContent = 'You need to enter your second name.';
    } 
    secondNameError.className = 'error active';

    // phone
    if(phone.validity.valueMissing) {
      phoneError.textContent = 'You need to enter your phone.';
    } 
    else if(phone.validity.typeMismatch) {
      phoneError.textContent = 'You need to enter your phone.';
    } 
    phoneError.className = 'error active';

}