let product = [];
const botonAros = document.getElementById("aros");
const botonAnillos = document.getElementById("anillos");
const botonCollares = document.getElementById("collares");
const botonPulseras = document.getElementById("pulseras");
const botonProductos = document.getElementById("productos");
export const productContainer = document.querySelector('.product-container');
productsListen();

export function show(){
    productContainer.innerHTML = "";
    const cantidad = product.length;
    for (let i = 0; i < product.length; i++) {
      const id = product[i].id;
      const name = product[i].producto;
      const description = product[i].descripcion;
      const stock = product[i].cantidad;
      const price = product[i].precio;
      const imageUrl = product[i].imagen;
  
      // Create HTML elements for the product
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      const image = document.createElement('img');
      image.src = imageUrl;
      productDiv.appendChild(image);
  
      const nameElement = document.createElement('h2');
      nameElement.textContent = name;
      productDiv.appendChild(nameElement);
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = description;
      productDiv.appendChild(descriptionElement);
  
      const stockElement = document.createElement('p');
      if(stock>0){
        stockElement.textContent = `Cantidad: ${stock}`;
      } else {
        stockElement.textContent = `Por el momento no hay stock de este producto.`;
      }
      productDiv.appendChild(stockElement);
  
      const priceElement = document.createElement('p');
      priceElement.textContent = `Precio: ${price}`;
      productDiv.appendChild(priceElement);
      productContainer.appendChild(productDiv);

      
    }
  }

  export function categoryFilter(category) {
    // TODO: implement category filtering logic
    const mainArticle = document.querySelector("#main-article");
    mainArticle.classList.replace("main-article", "main-articlee");
    const mainContent = document.querySelector('#main-article');
    mainContent.innerHTML = '';
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '';
    let cantidad = 0;
    // You can add your filtering logic here to show only the products belonging to the selected category.
    for (let i = 0; i < product.length; i++) {
      const id = product[i].id;
      const name = product[i].producto;
      const description = product[i].descripcion;
      const stock = product[i].cantidad;
      const price = product[i].precio;
      const imageUrl = product[i].imagen;
      const productCategory = product[i].categoria;
      
      if (productCategory == category){
        cantidad = cantidad +1;
        const productContainer = document.querySelector('.product-container');
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
    
        const image = document.createElement('img');
        image.src = imageUrl;
        productDiv.appendChild(image);
    
        const nameElement = document.createElement('h2');
        nameElement.textContent = name;
        productDiv.appendChild(nameElement);
    
        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        productDiv.appendChild(descriptionElement);
    
        const stockElement = document.createElement('p');
        if(stock>0){
          stockElement.textContent = `Cantidad: ${stock}`;
        } else {
          stockElement.textContent = `{Por el momento no hay stock de este producto.}`;
        }
        productDiv.appendChild(stockElement);
    
        const priceElement = document.createElement('p');
        priceElement.textContent = `Precio: ${price}`;
        productDiv.appendChild(priceElement);
    
        productContainer.appendChild(productDiv);
      } 
    }
    if (cantidad == 0){
      const noHay = document.createElement('div');
      noHay.textContent =`Por el momento no tenemos ${category} para vender! `;
      noHay.classList.add("no-hay")
      productContainer.appendChild(noHay);
    }
  }


export function productsListen(){
botonAros.addEventListener("click", () => {
    categoryFilter("aros");
  });
  botonAnillos.addEventListener("click", () => {
    categoryFilter("anillos");
  });
  botonCollares.addEventListener("click", () => {
    categoryFilter("collares");
  });
  botonPulseras.addEventListener("click", () => {
    categoryFilter("pulseras");
  });
  botonProductos.addEventListener("click", (event) => {
    const productContainer = document.querySelector('.product-container');
    productContainer.innerHTML = '';
    show();
  });

  
  
  // Parsed Format
  fetch("./products.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data[0].producto);
      product = data;
      show();
    })
    .catch((error) => {
      console.error(error);
    });
}



