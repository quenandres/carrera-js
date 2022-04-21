const words = ['spray','limit','elite','exhuberant'];

const newArray = [];

const rta = words.filter(item => item.length >= 6);
console.log('words', words);
console.log('rta', rta);



const orders = [
    {
        customerName: 'Lucia',
        total: 120,
        delivered: false
    },
    {
        customerName: 'Cristina',
        total: 20,
        delivered: true
    },
    {
        customerName: 'Zulema',
        total: 1220,
        delivered: false
    },
    {
        customerName: 'Santiago',
        total: 20,
        delivered: false
    },
    {
        customerName: 'Pedro',
        total: 770,
        delivered: true
    },
];

const rta3 = orders.filter(item => item.delivered && item.total >= 100);
console.log(rta3);


const search = (query) => {
    return orders.filter(item => {
        return item.customerName.includes(query);
    });
}

console.log(search('San'));