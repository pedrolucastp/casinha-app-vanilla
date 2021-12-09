import bills from "./Bills.js";
import shoppingList from "./ShoppingList.js";
console.log("Casinha App");

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