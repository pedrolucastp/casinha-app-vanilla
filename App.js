import favorites from "./favorites.js";
console.log("Casinha App");

//trocar o backgroud a cada click no header
{
    document.querySelector("[data-theme-changer]").onclick = function(e) {
        if (e) {
            document.body.style.backgroundColor = "#0cbaba";
            document.body.style.backgroundImage =
                "linear-gradient(315de g, #0cbaba 0%, #380036 74%)";
            return;
        }
    };
}

let newListFavorites = favorites;
let currentList = ""

console.log("newListFavorites", newListFavorites)

// Criar os botoes de favoritos  

function setFavorites(lists) {
    const favoriteContainer = document.querySelector("[data-favorite-container]");
    favoriteContainer.innerText = "";
    lists.forEach((list) => {
        const button = document.createElement("BUTTON");
        button.innerText = list.name;
        button.setAttribute("id", list.name);
        button.onclick = () => {
            currentList = list
            setCard(list);
        };

        favoriteContainer.appendChild(button);
    });
}

setFavorites(newListFavorites);

// adicionar novo lista

document.querySelector("[data-new-favorite]").onclick = () => {
    console.log("new list");
    const newFavorite = {
        name: prompt("name new favorite"),
        value: [],
    };
    newListFavorites.push(newFavorite);
    setFavorites(newListFavorites);
    return;
};

// remover a lista atual
document.querySelector("[data-remove-favorite]").onclick = () => {
    console.log("remove list");
    const removeFavorite = prompt("name remove favorite");
    const filteredFavorites = newListFavorites.filter(function(el) {
        return el.name !== removeFavorite;
    });
    newListFavorites = filteredFavorites;
    setFavorites(newListFavorites);
};


// criar uma função que recebe uma lista (array)
// e tranforme os elemtneos em algo visual (cards)

function setCard(list) {
    const cardBoard = document.querySelector("[data-card-board]");
    cardBoard.innerText = "";
    cardBoard.setAttribute("data-card-board", list.name)
    list.value.forEach((card) => {
        const cardInfo = document.createElement("BUTTON");

        const cardTitle = document.createElement("H2");
        const cardPrice = document.createElement("H3");
        const cardDescription = document.createElement("P");

        cardTitle.innerText = card.title;
        cardPrice.innerText = card.price;
        cardDescription.innerText = card.description;;

        cardInfo.appendChild(cardTitle);
        cardInfo.appendChild(cardPrice);
        cardInfo.appendChild(cardDescription);
        cardInfo.setAttribute("data-card-layout", card.title);

        cardBoard.appendChild(cardInfo);

    });
}

// funçao criar novo item
//  adicionar novo item a lista atual


document.querySelector("[data-new-item]").onclick = () => {
    console.log("new item");
    const newItem = {
        title: prompt("TÍTULO"),
        price: prompt("PREÇO"),
        description: prompt("DESCRIÇÃO"),
    };
    console.log(newItem)
    console.log(currentList)
    currentList.value.push(newItem)
    console.log(currentList)
    setCard(currentList)
    newListFavorites.push(currentList)
    console.log(newListFavorites)


    return;
};