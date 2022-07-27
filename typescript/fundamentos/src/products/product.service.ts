import {Product, Sizes} from './product.model';

export const products: Product[] = [];

export const addProduct = ( data: Product) => {
  products.push(data);
}

export const calcStock = ():number => {
  let total = 0;
  products.forEach(element => {
    total += element.stock;
  }); 
  return total;
}
