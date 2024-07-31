import main from "./src/Main/main";
import navbar from "./src/Navbar/nabvar";
import "./style.css";

const render = () => {
    const navHTML = document.querySelector("nav");
    navbar(navHTML);
    const mainHTML = document.querySelector("main");
    main(mainHTML);
};
render();
