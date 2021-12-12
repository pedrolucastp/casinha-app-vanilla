const bills = [{
        title: "Aluguel",
        price: "1000,00",
        description: "Nov 2021",
    },

    {
        title: "Luz",
        price: "226,14",
        description: "Nov 2021",
        id: ""
    },

    {
        title: "Água",
        price: "150,00",
        description: "lorem5",
    },

    {
        title: "Internet",
        price: "89,00",
        description: "lorem5",
    },
    {
        title: "Poda",
        price: "100,00",
        description: "lorem5",
    },
    {
        title: "Poda",
        price: "100,00",
        description: "lorem5",
    },
];

const shoppingList = [{
        title: "Lampadas",
        price: "150,00",
        description: "8 uni",
        id: "Geral",
    },
    {
        title: "Espelho",
        price: "300,00",
        description: "Grandão",
        id: "Quarto",
    },
];

let favorites = [
    { name: "Contas", value: bills },
    { name: "Compras", value: shoppingList },
    { name: "Outro", value: [] },
];

export default favorites