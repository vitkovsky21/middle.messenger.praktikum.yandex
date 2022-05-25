import { showError } from "./modules/loginError.js";

form.addEventListener('submit', function (event) {

    login.addEventListener('input', function (event) {
  
        if (login.validity.valid) {
          loginError.textContent = ''; 
          loginError.className = 'error'; 
        } 
        else {
          showError();
        }

    });

    password.addEventListener('input', function (event) {

        if (password.validity.valid) {
          passwordError.textContent = ''; 
          passwordError.className = 'error'; 
        } 
        else {
          showError();
        }

    });
  
    if(!login.validity.valid) {
      showError();
      event.preventDefault();
    }
    else if(!password.validity.valid) {
      showError();
      event.preventDefault();
    }    
    else {
      window.location.href = "./pages/main/main.html"
      event.preventDefault();
    }

});

