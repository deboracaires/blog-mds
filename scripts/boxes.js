const container = document.querySelector(".container");
container.innerHTML += `
  <div class="content">
    <h1 class="montserrat">Olá! Eu sou a Débora Caires!</h1>
    <h2 class="montserrat">Este blog é para listar meu top 3 de aprendizados na disciplina de Métodos de Desenvolvimento
      de Software que cursei no semestre 2022.2 na UnB.
    </h2>
  </div>
  <div class="flex box-container">
    <div class="bigbox montserrat ghpage"> 
      <div class="front flex">GH-PAGES</div>
      <div class="back flex"></div>
    </div>
    <div class="bigbox montserrat vite">
      <div class="front flex">Vite + React + TS</div>
      <div class="back flex">aaaa</div>
    </div>
    <div class="bigbox montserrat cypress">
      <div class="front flex">Cypress</div>
      <div class="back flex">aaaa</div>
    </div>
  </div>
`;

const boxes = document.querySelectorAll(".bigbox");

function virarBox() {
    this.classList.add('virar-box');
    hideContentAndBoxes(this);
}

function hideContentAndBoxes(element) {
    const content = document.querySelector(".content");
    const ghpage = document.querySelector(".ghpage");
    const vite = document.querySelector(".vite");
    const cypress = document.querySelector(".cypress");
    content.classList.add('hide');
    if (element.classList.contains('ghpage')) {
        vite.classList.add('hide');
        cypress.classList.add('hide');
        gitPageContent(element);
    } else if (element.classList.contains('vite')) {
        ghpage.classList.add('hide');
        cypress.classList.add('hide');
    } else {
        vite.classList.add('hide');
        ghpage.classList.add('hide');
    }
          
}

async function gitPageContent(element) {
    await new Promise(resolve => setTimeout(() => {
        element.classList.add('hide');
        const container = document.querySelector('.container');
        container.classList.add('hide');
        const ghPage = document.querySelector('.gh-page');
        ghPage.classList.remove('hide');
    }, 550));
}

boxes.forEach(box => box.addEventListener('click', virarBox));