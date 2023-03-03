import { show } from './products.js';
import { login } from './login.js';

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
