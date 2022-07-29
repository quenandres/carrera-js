import axios from 'axios';

import { Product } from './models/product.model';

(async() => {

    async function getProducts(): Promise<Product[]> {
        const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        // code
        data.map(item => item.id);
        return data;
    }

    console.log('---'.repeat(10));
    const products = await getProducts();
    console.log(products.map(item => `${item.id} - ${item.title}`));
})();