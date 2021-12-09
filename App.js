import bills from "./Bills.js";
import shoppingList from "./ShoppingList.js";
console.log("Casinha App");

//trocar o backgroud a cada click no header
const themeChanger = document.getElementById("themeChanger");
console.log(themeChanger);
themeChanger.onclick = function(event) {
    if (event) {
        document.body.style.setProperty("background-color", "#fc5296");
        document.body.style.setProperty("background-image", "linear-gradient(315deg, #fc5296 0%, #f67062 74%)");
        return;
    }

    document.body.style.setProperty("background-color", "#20bf55");
    document.body.style.setProperty("background-image", "linear-gradient(326deg, #e020a7 0%, #5f0a87 74%)");
};

const sections = [
    { name: "Contas", value: bills },
    { name: "Compras", value: shoppingList },
    { name: "Outros", value: [] },
];
// Criar os botoes dinamicamente com os diferentes segmentos de um array
// Conectar os botoes ao DOM dinamicamente
function setButtons(lists) {
    lists.forEach((list) => {
        const menuContainer = document.querySelector("[data-menu-button]");
        const button = document.createElement("BUTTON");
        button.innerText = list.name;
        button.setAttribute("id", list.name);
        button.onclick = () => setCard(list.value);

        menuContainer.appendChild(button);
    });
}
setButtons(sections);

// criar uma função que recebe uma lista (array)
//  a serem convertidos para elementos (objetos)
// e tranforme os elemtneos em algo visual

function setCard(list) {
    const cardBoard = document.querySelector("[data-card-board]");
    cardBoard.innerText = "";
    list.forEach((card) => {
        const cardInfo = document.createElement("BUTTON");
        cardInfo.setAttribute("data-card-layout", "");

        const cardTitle = document.createElement("H2");
        const cardPrice = document.createElement("H3");
        const cardDescription = document.createElement("P");

        cardTitle.innerText = card.title;
        cardPrice.innerText = card.price;
        cardDescription.innerText = card.description;

        cardInfo.appendChild(cardTitle);
        cardInfo.appendChild(cardPrice);
        cardInfo.appendChild(cardDescription);

        cardBoard.appendChild(cardInfo);
        return;
    });
}

// setCard(shoppingList)