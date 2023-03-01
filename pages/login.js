const userButton = document.querySelector("#user-button");
const userDataContainer = document.querySelector("#user-container")
let activated = false;
let botonLogIn;
let nombre = "feli";

userButton.addEventListener("click", () => {
    changeClass(userDataContainer,"user-container-hidden", "user-container");
    userInfo();
    });

export function login(){
    
}

function userInfo(){
    let nombreDeUsuario = document.createElement('p');
    nombreDeUsuario.textContent = nombre;

    if (nombre == ""){
        botonLogIn = document.createElement("button");
        botonLogIn.textContent = "Ingresar";
        userDataContainer.appendChild(botonLogIn);
    } else {
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

