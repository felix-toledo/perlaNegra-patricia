let cartCounter = [];


export function carrito(id, name) {
    const obj = cartCounter.find((user) => {
        return user.id === id;
    });
    console.log(obj);
    if (name == obj.nombre) {
        cartCounter[id].quant = cartCounter[id].quant + 1;
        console.log(cartCounter[id].quant + " cantidad");
    } else {
        cartCounter.push({ nombre: name, quant: 1 });
        cartCounter[id].nombre = name;
        cartCounter[id].quant = 1;
    }
    console.log("hehey")
    prueba();
}

function prueba(){
    console.log(cartCounter);
    let text = "";
    for(let i = 0; i < cartCounter.length; i++){
        text = text + ", " + cartCounter[i].nombre;
    }
    let button = document.createElement("a");
    button.classList.add("boton-para-prueba");
    let productContainer = document.querySelector(".product-container");
    button.innerHTML="hola";
    button.setAttribute("href",`https://api.whatsapp.com/send?phone=543794636393&text=Hola!%20%0ATe%20hablo%20por%20este%20pedido%0A%2C%20${text}.%0A%0AEspero%20tu%20respuesta%2C%20gracias!`);
    button.setAttribute("target", "_blank");
    productContainer.appendChild(button);
}