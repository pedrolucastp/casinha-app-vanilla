import favorites from "./favorites.js";
console.log("Casinha App");

//trocar o backgroud a cada click no header

document.querySelector("[data-theme-changer]").onclick = function(e) {
    if (e) {
        document.body.style.backgroundColor = "#0cbaba";
        document.body.style.backgroundImage = "linear-gradient(315deg, #0cbaba 0%, #380036 74%)";
        return;
    }
};


// Criar os botoes dinamicamente com os diferentes segmentos de um array
// Conectar os botoes ao DOM dinamicamente

function setButtons(lists) {
    lists.forEach((list) => {
        const menuContainer = document.querySelector("[data-menu-button]");
        const button = document.createElement("BUTTON");
        button.innerText = list.name;
        button.setAttribute("id", list.name);
        button.onclick = () => {
            return setCard(list.value);
        };

        menuContainer.appendChild(button);
    });
}
setButtons(favorites);

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