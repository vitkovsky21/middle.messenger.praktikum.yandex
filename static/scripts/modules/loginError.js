import { login, loginError, password, passwordError } from "./variables.js";

export function showError() {
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
      passwordError.textContent = 'You need to enter your password!';
    } 
    else if(password.validity.typeMismatch) {
      passwordError.textContent = 'You need to enter your password.';
    } 
    else if(password.validity.tooShort) {
      passwordError.textContent = `Password needs to be ${ password.minLength } characters.`;
    }
    passwordError.className = 'error active';

}