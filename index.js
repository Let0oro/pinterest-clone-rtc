import main from "./src/Main/main";
import navbar from "./src/Navbar/nabvar";
import "./style.css";
let firstSearch = "";

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
    const logo = document.querySelector("#logo");
    const mainHTML = document.querySelector("main");

    const refreshMain = (isLogo) => {
        if (!firstSearch.trim().length) firstSearch = input.value;
        console.log({firstSearch})
        if (isLogo) {
            main(mainHTML, firstSearch);
        } else {
            main(mainHTML, input.value);
        }
        input.value = "";
    }

    logo.addEventListener("click", () => {
        refreshMain(true);
    })

    btn.addEventListener("click", refreshMain);
    
    input.addEventListener("keydown", (e) => {
        if (e.key == "Enter") refreshMain();
    })
})
