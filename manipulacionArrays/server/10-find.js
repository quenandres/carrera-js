const numbers = [1,30,49,29,10,13];

const rta = numbers.find(number => number === 230);
console.log(rta || 'No encontrado');

const products = [
    {
        name: "Pizza",
        price: 12,
        id: '🍕'
    },
    {
        name: "Burger",
        price: 23,
        id: '🍔'
    },
    {
        name: "Hot dog",
        price: 34,
        id: '🌭'
    },
    {
        name: "Hot cakes",
        price: 355,
        id: '🥞'
    }
];

const rta2 = products.find(item => item.id=== '🍔');
console.log(rta2 || 'No encontrado');