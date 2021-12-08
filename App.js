import bills from "./Bills.js";
console.log("Casinha App");

{
    /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
}




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
