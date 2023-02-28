let product = [];
const botonAros = document.getElementById("aros");
const botonAnillos = document.getElementById("anillos");

botonAros.addEventListener("click", (event) => {
  categoryFilter("aros");
});

botonAnillos.addEventListener("click", (event) => {
  categoryFilter("anillos");
});

function categoryFilter(category) {
  // TODO: implement category filtering logic
  console.log(category);
  const productContainer = document.querySelector('.product-container');
  productContainer.innerHTML = '';
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
        stockElement.textContent = `Por el momento no hay stock de este producto.`;
      }
      productDiv.appendChild(stockElement);
  
      const priceElement = document.createElement('p');
      priceElement.textContent = `Precio: ${price}`;
      productDiv.appendChild(priceElement);
  
      productContainer.appendChild(productDiv);
    } 
    // Create HTML elements for the product
  }

}

function show(){
  console.log(product);
  for (let i = 0; i < product.length; i++) {
    const id = product[i].id;
    const name = product[i].producto;
    const description = product[i].descripcion;
    const stock = product[i].cantidad;
    const price = product[i].precio;
    const imageUrl = product[i].imagen;

    // Create HTML elements for the product
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
      stockElement.textContent = `Por el momento no hay stock de este producto.`;
    }
    productDiv.appendChild(stockElement);

    const priceElement = document.createElement('p');
    priceElement.textContent = `Precio: ${price}`;
    productDiv.appendChild(priceElement);

    productContainer.appendChild(productDiv);
  }
}

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

  