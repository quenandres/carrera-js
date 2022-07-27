import {products, addProduct, calcStock} from './product.service';

addProduct({
  name: 'Bes2',
  createAt: new Date(),
  stock: 120,
  size: "XL"
});


addProduct({
  name: 'Pro3',
  createAt: new Date('1971-02-20'),
  stock: 10
});

console.log(products);

const total = calcStock();
console.log(total);
