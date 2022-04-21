const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const clonProducts = [...products];

const myProducts = [];
console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔');
if( productIndex != -1 ){
    myProducts.push(products[productIndex]);
    clonProducts.splice(productIndex,1);
}
console.log("products", products);
console.log("myProducts", myProducts);
console.log("clonProducts", clonProducts);
console.log("-".repeat(10));

// Update
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id: "🥞",
    changes: {
        price: 220,
        description: "delicioso"
    }
};

const productV2Index = productsV2.findIndex(item => item.id === update.id);
productsV2[productV2Index] = {
    ...productsV2[productV2Index],
    ...update.changes
};

console.log('productV2');
console.log(productsV2);
