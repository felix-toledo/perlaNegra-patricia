import { show } from './products.js';
import { login } from './login.js';

export function homePageListen(){
    function mainContent(){
        const productContainer = document.querySelector('.product-container');
        productContainer.innerHTML = '';
        let mainArticle = document.querySelector("#main-article");
        mainArticle.innerHTML = '';
        // create article container
        let articleContainer = document.createElement("div");
        articleContainer.classList.add("article-container");

        // create heading
        let heading = document.createElement("h2");
        heading.textContent = "Me llamo Patricia!";

        // create paragraph
        let paragraph = document.createElement("p");
        paragraph.classList.add("text-area");
        paragraph.textContent = "Descubrí la belleza en la sencillez de nuestras joyas únicas y accesibles. Pedí las tuyas y te las llevamos directo a tu casa. Podes chequear lo que te ofrecemos en la página!";

        // append heading and paragraph to article container
        articleContainer.appendChild(heading);
        articleContainer.appendChild(paragraph);

        // append article container to main article
        mainArticle.appendChild(articleContainer);

    }

    mainContent();

    const botonInicio = document.getElementById("inicio");
    botonInicio.addEventListener("click", () => {
        const mainArticle = document.querySelector("#main-article");
        mainArticle.classList.replace("main-articlee", "main-article");
        
        mainContent();
        show();
      });
}
