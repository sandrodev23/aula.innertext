const elementoH1 = document.querySelector("h1");
const elementoUl = document.querySelector("ul");
const elemntoA = document.querySelector("a");
const elementoOl = document.querySelector("ol");

elementoH1.innerText = "Texto principal";
elemntoA.innerText = "Site Proz";

elementoUl.innerHTML = `<li>Primeiro Elemento</li> <li>Segundo Elemento</li> <li>Terceiro Elemento</li>`;
elementoOl.innerHTML = `<li><a href="https://brasilescola.uol.com.br/">Brasil Escola</a></li> <li><a href="https://brasilescola.uol.com.br/">Brasil Escola 2</a></li> <li><a href="https://mundoeducacao.uol.com.br/">Mundo Educação</a></li>`;
