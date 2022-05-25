import { signUpError } from "./modules/signUpError.js"

form.addEventListener('submit', function (event) {

    login.addEventListener('input', function (event) {
  
        if (login.validity.valid) {
          loginError.textContent = ''; 
          loginError.className = 'error'; 
        } 
        else {
          signUpError();
        }

    });

    password.addEventListener('input', function (event) {

        if (password.validity.valid) {
          passwordError.textContent = ''; 
          passwordError.className = 'error'; 
        } 
        else {
          signUpError();
        }

    });

    email.addEventListener('input', function (event) {

        if (email.validity.valid) {
          emailError.textContent = ''; 
          emailError.className = 'error'; 
        } 
        else {
          signUpError();
        }

    });

    phone.addEventListener('input', function (event) {

        if (phone.validity.valid) {
          phoneError.textContent = ''; 
          phoneError.className = 'error'; 
        } 
        else {
          signUpError();
        }

    });

    first_name.addEventListener('input', function (event) {

        if (firstName.validity.valid) {
          firstNameError.textContent = ''; 
          firstNameError.className = 'error'; 
        } 
        else {
          signUpError();
        }

    });

    second_name.addEventListener('input', function (event) {

        if (secondName.validity.valid) {
          secondNameError.textContent = ''; 
          secondNameError.className = 'error'; 
        } 
        else {
          signUpError();
        }

    });
  
    
    if(!login.validity.valid) {
      signUpError();
      event.preventDefault();
    }
    else if(!password.validity.valid) {
      signUpError();
      event.preventDefault();
    }
    else if(!email.validity.valid) {
      signUpError();
      event.preventDefault();
    }
    else if(!firstName.validity.valid) {
      signUpError();
      event.preventDefault();
    }  
    else if(!secondName.validity.valid) {
      signUpError();
      event.preventDefault();
    }  
    else if(!phone.validity.valid) {
      signUpError();
      event.preventDefault();
    }        
    else {
      window.location.href = "./../../index.html"
      event.preventDefault();
    }

});