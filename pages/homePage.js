import { show } from './products.js';
import { categoryFilter } from './products.js';
const items = [
    { imgSrc: "./images/presentacion_anillos.png", alt: "anillos", text: "anillos" },
    { imgSrc: "./images/presentacion_cadenas.png", alt: "cadenas", text: "collares" },
    { imgSrc: "./images/presentacion_aros.png", alt: "aros", text: "aros" }
  ];

const secondArticle = document.getElementById("second-article");

const botonInicio = document.getElementById("inicio");
    botonInicio.addEventListener("click", () => {
        const mainArticle = document.querySelector("#main-article");
        mainArticle.classList.replace("main-articlee", "main-article");
        secondArticle.innerHTML="";
        homePageListen();
        mainContent();
        show();
      });
export function homePageListen(){
    function mainContent(){
        let mainArticle = document.querySelector("#main-article");
        mainArticle.innerHTML = '';

        let bellezaUnica = document.createElement("h2");
        bellezaUnica.classList.add("bu");
        bellezaUnica.textContent = "Belleza única. ";

        let envioDirecto = document.createElement("h2");
        envioDirecto.classList.add("ev");
        envioDirecto.textContent = "Envío directo.";

        mainArticle.appendChild(bellezaUnica);
        mainArticle.appendChild(envioDirecto);
   
          const ul = document.createElement("ul");
          ul.classList.add("second-article-ul");
          
          for (let i = 0; i < items.length; i++) {
            const item = items[i];
          
            const li = document.createElement("li");
            li.classList.add("info-cont");
            li.innerHTML ="";
          
            const img = document.createElement("img");
            img.src = item.imgSrc;
            img.alt = item.alt;
          
            const p = document.createElement("p");
            p.classList.add("hey");
            p.textContent = item.text.toUpperCase();
          
            li.appendChild(img);
            li.appendChild(p);
            ul.appendChild(li);
            
            p.addEventListener("click", () => {
                secondArticle.innerHTML="";
                categoryFilter(items[i].text);
              });

            
          }
        
          secondArticle.appendChild(ul);

    }
    mainContent();   
}
