import bills from "./Bills.js";
import shoppinglist from "./ShoppingList.js";
console.log("Casinha App");

console.log("bills", bills);
console.log("shoppinglist", shoppinglist);

// criar uma função que recebe uma lista (array)
//  a serem convertidos para elementos (objetos)
// e tranforme os elemtneos em algo visual

function setButtons() {

    const button = document.querySelector("[data-menu-button-1]");
    button.innerText = "Bills"
    button.addEventListener(
        "click", setCard(bills));
}

setButtons()

function setCard(list) {
    list.forEach((card) => {
        const cardBoard = document.querySelector("[data-card-board]");
        const cardInfo = document.createElement("BUTTON");
        cardInfo.setAttribute("data-card-layout", "");
        const cardTitle = document.createElement("H2");
        cardTitle.innerText = card.title;
        cardInfo.appendChild(cardTitle);
        const cardPrice = document.createElement("H3");
        cardPrice.innerText = card.price;
        cardInfo.appendChild(cardPrice);
        const cardDescription = document.createElement("P");
        cardDescription.innerText = card.description;
        cardInfo.appendChild(cardDescription);
        cardBoard.appendChild(cardInfo);
        return;
    });
}

setCard(bills);