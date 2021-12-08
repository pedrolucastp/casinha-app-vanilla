import bills from "./Bills.js";

console.log("Casinha App");
console.log(bills);

// criar uma função que recebe uma lista (array) contendo
//  a serem convertidos para elementos (objetos)
// e tranforme os elemtneos em algo visual

function newCard(list) {
  const cardTemplate = document.querySelector("[data-card-template]");
  const cardContainer = cardTemplate.content.cloneNode(true);
  const cardContainer = document.querySelector("[data-card-info]");

  list.forEach((card) => {
    console.log()
  });
}

newCard(bills);
