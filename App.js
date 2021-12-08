import bills from "./Bills.js";
console.log("Casinha App");

// criar uma função que recebe uma lista (array) contendo
//  a serem convertidos para elementos (objetos)
// e tranforme os elemtneos em algo visual

bills.forEach((card) => {
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
});
