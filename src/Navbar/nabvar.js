const navbar = (parent) => {
  import("./navbar.css");

  const imageLogo = `<img src="../public/pinterest_logo.png" alt="pinterest_logo">`;
  const messageIcon = `<img src="../public/comments.svg" alt="pinterest_logo">`;
  const notificationIcon = `<img src="../public/bell.svg" alt="pinterest_logo">`;

  const templateGen = () => {
    return `
        <div id="logo" >${imageLogo}</div>
        <label class="options" for="inicio">Inicio<input name="options" id="inicio"  type="radio" checked /></label>
        <label class="options" for="explorar">Explorar<input name="options" id="explorar" type="radio" /></label>
        <label class="options" for="crear">Crear<input name="options" id="crear" type="radio" /></label>
        <label for="search"><button id="search-btn">🔎</button><input id="search" type="text" placeholder="Use a phrase or word to search images"></label>
        <div class="icons">
        <div class="options" >${messageIcon}</div>
        <div class="options" >${notificationIcon}</div>
        <div>D</div>
        </div>
    `;
  };
  const template = templateGen();
  parent.innerHTML = template;
};

export default navbar;