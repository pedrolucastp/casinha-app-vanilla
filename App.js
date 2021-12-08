import bills from "./Bills.js";

console.log("Casinha App");
console.log(bills);

// criar uma função que recebe uma lista (array) contendo
//  a serem convertidos para elementos (objetos)
// e tranforme os elemtneos em algo visual

function setCard(list) {
  const cardContainer = document.querySelector("[data-card-container]");
  
  list.forEach(card => {
    let cardInfo = document.createElement('section');
    const cardTitle = document.createElement("h2");
    const cardSubtitle = document.createElement("h3");
    const cardDescription = document.createElement("p");

    cardTitle.innerText = card.billName;
    cardSubtitle.innerText = card.billPrice;
    cardDescription.innerText = card.billDescription;

    cardInfo.appendChild(cardTitle);
    cardInfo.appendChild(cardSubtitle);
    cardInfo.appendChild(cardDescription);

    cardContainer.appendChild(cardInfo);
  });
}

setCard(bills);
