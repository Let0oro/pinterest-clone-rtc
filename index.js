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


window.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#search-btn");
    const input = document.querySelector("#search");
    const mainHTML = document.querySelector("main");

    const refreshMain = () => {
        main(mainHTML, input.value)
    }

    btn.addEventListener("click", refreshMain);
    
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") refreshMain();
    })
})
