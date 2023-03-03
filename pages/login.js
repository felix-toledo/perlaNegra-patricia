import {button} from "../components/button.js";
import {productContainer} from "./products.js";
import { show } from './products.js';

let activated = false;
let nombre = "";

const userButton = document.querySelector("#user-button");
const userDataContainer = document.querySelector("#user-container");
const loginContainer = document.querySelector("#login-container");
const registrarseWindow = document.getElementById('registrarse-window');
const registerOption = document.querySelector("#register-option");
const closeButtons = document.querySelectorAll('.window-button.close');
const botonRegistrar = document.querySelector('#button-register');


botonRegistrar.addEventListener('click', function(event) {
    registracion(event);
  });

closeButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const window = this.closest('.window');
    window.classList.remove('show');
  });
});

userButton.addEventListener("click", () => {
    userInfo();
    });

    export function login(){
        setTimeout(function() {
            loginContainer.classList.replace("login-hidden", "login");
            loginContainer.classList.add('login-enter');
          }, 100);
        const close = document.querySelector (".close");
        close.addEventListener("click", () => {
            loginContainer.classList.replace("login", "login-hidden");
            productContainer.innerHTML = '';
            show();
            });
            registerOption.addEventListener("click", () => {
                registrarseWindow.classList.add('show');
            });
    }

function registracion (event){
    const nombreInput = document.querySelector("#nombre");
    console.log(nombreInput.value);
    nombre = nombreInput.value;
    event.preventDefault();
    registrarseWindow.classList.remove('show');
        loginContainer.classList.replace("login", "login-hidden");
        productContainer.innerHTML = '';
        show();
        userInfo()
}

function userInfo(){
    let nombreDeUsuario = document.createElement('p');
    nombreDeUsuario.textContent = nombre;

    if (nombre == ""){
        changeClass(userDataContainer,"user-container-hidden", "user-container");
        userDataContainer.classList.add("user-container-nbg");
        userDataContainer.innerHTML = '';
        let boton = button(userDataContainer, "registrarse!");
        boton.addEventListener("click", () => {
            login();
            productContainer.innerHTML= '';
            });
    } else {
        changeClass(userDataContainer,"user-container-hidden", "user-container");
        userDataContainer.innerHTML = '';
        userDataContainer.appendChild(nombreDeUsuario);
        nombreDeUsuario.classList.add("user-container-with-user")
        let logOut = document.createElement("button");
        nombreDeUsuario.appendChild(logOut);
        logOut.classList.add("log-out-button")
        logOut.textContent = "LOG OUT";
        logOut.addEventListener("click", () => {
            nombre = "";
            userInfo();
            });
    }
}

function changeClass(container, oldClass, newClass){
    if (activated == false){
        container.classList.replace(oldClass, newClass);
        activated = true;
    } else if (activated == true) {
        container.classList.replace(newClass, oldClass);
        container.innerHTML = '';
        activated = false;
    }
}

