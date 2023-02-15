const container = document.querySelector(".container");
container.innerHTML += `
  <div class="content">
    <h1 class="montserrat">Olá! Eu sou a Débora Caires!</h1>
    <h2 class="montserrat">Este blog é para listar meu top 3 de aprendizados na disciplina de Métodos de Desenvolvimento
      de Software que cursei no semestre 2022.2 na UnB.
    </h2>
  </div>
  <div class="flex box-container">
    <div class="bigbox montserrat"> 
      <div class="front flex">GH-PAGES</div>
      <div class="back flex">aaaa</div>
    </div>
    <div class="bigbox montserrat">
      <div class="front flex">Vite + React + TS</div>
      <div class="back flex">aaaa</div>
    </div>
    <div class="bigbox montserrat">
      <div class="front flex">Cypress</div>
      <div class="back flex">aaaa</div>
    </div>
  </div>
`;

const boxes = document.querySelectorAll(".bigbox");

function virarBox() {
    this.classList.add('virar-box');
    console.log(this.classList)
}

boxes.forEach(box => box.addEventListener('click', virarBox));