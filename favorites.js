const bills = [{
        title: "Aluguel",
        price: "R$ 1000,00",
        description: "Nov 2021",
    },

    {
        title: "Luz",
        price: "R$ 226,14",
        description: "Nov 2021",
        id: ""
    },

    {
        title: "Água",
        price: "R$ 150,00",
        description: "lorem5",
    },

    {
        title: "Internet",
        price: "R$ 89,00",
        description: "lorem5",
    },
    {
        title: "Poda",
        price: "R$ 100,00",
        description: "lorem5",
    },
    {
        title: "Poda",
        price: "R$ 100,00",
        description: "lorem5",
    },
];

const shoppingList = [{
        title: "Lampadas",
        price: "R$ 150,00",
        description: "8 uni",
        id: "Geral",
    },
    {
        title: "Espelho",
        price: "R$ 300,00",
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