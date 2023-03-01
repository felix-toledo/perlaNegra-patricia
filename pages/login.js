import {button} from "../components/button.js";
import {productContainer} from "./products.js";
const userButton = document.querySelector("#user-button");
const userDataContainer = document.querySelector("#user-container");
let activated = false;
let nombre = "";

userButton.addEventListener("click", () => {
    userInfo();
    });

export function login(){
    const body = document.querySelector("#body");
    const loginContainer = document.querySelector("#login-container");
    loginContainer.classList.replace("login-hidden", "login");
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

