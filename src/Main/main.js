import card from "../Card/card";

const main = async (parent, search = "") => {
    import("./main.css");
    const { fetchApi } = await import("./serverUnsplash");

    const data = await fetchApi(search);
   
    const templateGen = () => {
        let finalHtml = [];

        for (let i = 0; i < data.length; i++) finalHtml.push( card(data[i]) );

        return finalHtml;
    }

    const template = templateGen();
    parent.innerHTML = template.join('');

}

export default main;