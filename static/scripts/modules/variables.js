
const form = document.getElementById('form');

const login = document.getElementById('login');
const loginError = document.querySelector('#login + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const phone = document.getElementById('phone');
const phoneError = document.querySelector('#phone + span.error');

const firstName = document.getElementById('first_name');
const firstNameError = document.querySelector('#first_name + span.error');

const secondName = document.getElementById('second_name');
const secondNameError = document.querySelector('#second_name + span.error');

export { form, login, loginError, password, passwordError, email, emailError, phone, phoneError, firstName, firstNameError, secondName, secondNameError }