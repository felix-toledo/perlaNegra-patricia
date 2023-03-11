export function carrito(id, name){
    let button = document.createElement("a");
    button.classList.add("boton-para-prueba");
    let productContainer = document.querySelector(".product-container");
    button.setAttribute("href",`https://api.whatsapp.com/send?phone=543794636393&text=Hola!%20%0ATe%20hablo%20por%20este%20pedido%0A${id}%2C%20${name}.%0A%0AEspero%20tu%20respuesta%2C%20gracias!`);
    button.innerHTML="hola";
    productContainer.appendChild(button);
    console.log("hehey")
}