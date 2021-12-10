import bills from "./Bills.js";
import shoppingList from "./ShoppingList.js";

// Criar os botoes dinamicamente com os diferentes segmentos de um array
// Conectar os botoes ao DOM dinamicamente
const favorites = [
    { name: "Contas", value: bills },
    { name: "Compras", value: shoppingList },
    { name: "Outros", value: [] },
];

export default favorites