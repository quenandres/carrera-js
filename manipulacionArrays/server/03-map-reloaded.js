const orders = [
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Zulema',
        total: 1220,
        delivered: false
    },
    {
        customerName: 'Zulema',
        total: 20,
        delivered: false
    },
    {
        customerName: 'Zulema',
        total: 770,
        delivered: false
    },
];

const rta = orders.map(item => item.total);

console.log(orders);
console.log('rta');
console.log(rta);

/* const rta2 = orders.map(item => {
    item.tax = .19;
    return item;
});

console.log('rta2');
console.log(rta2); */

const rta3 = orders.map(item => {
    item.tax = .19;
    return {
        ...item,
        tax: .19
    };
});

console.log('rta3');
console.log(rta3);

