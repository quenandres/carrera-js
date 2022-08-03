import axios from 'axios';
import { Product } from './models/product.model';

(async () => {   

    async function getProductsAsync(): Promise<Product[]> {
        const rta = await axios.get<Product[]>(`https://api.escuelajs.co/api/v1/products`);
        const { data } = rta;
        console.log(data.map(item => item.id));
        return data;
    }    

    const productsv2 = await getProductsAsync();
    console.log(productsv2.map(item => `${item.id} - ${item.title}`));
    
})();