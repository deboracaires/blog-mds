const menu = document.querySelector(".menu");
menu.innerHTML += `
  <div class="position-icon">
    <input type="checkbox" id="menu">
    <label for="menu" class="icon">
      <div class="menu"></div>
    </label>
    <nav>
        <div class="options">
        <h1 onclick="goToAbout(), closeMenu()">Sobre o projeto</h1>
        <h1 onclick="goToHowToUse(), closeMenu()">Como usar o projeto</h1>
        <h1 onclick="goBacklogGoHome(), closeMenu()">Backlog</h1>
        </div>
    </nav>
  </div>
`;