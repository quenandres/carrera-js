const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log('months');
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a-b );
console.log('numbers');
console.log(numbers);

const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a,b) => a.localeCompare(b) );
console.log('words');
console.log(words);

const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
        date: new Date(2011,2,1)
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
        date: new Date(2021,3,2)
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
        date: new Date(2000,2,5)
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
        date: new Date(2022,5,6)
    },
];

/* orders.sort((a,b) => b.total - a.total );
console.log('orders');
console.log(orders); */


orders.sort((a,b) => a.date - b.date );
console.log('orders');
console.log(orders);