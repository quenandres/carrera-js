import axios from 'axios';
import { UpdateProductDto } from '../dtos/product.dto';

import { Category } from './../models/category.model';
import { Product } from './../models/product.model';

export class BaseHttpService<TypeClass> {
    //data: TypeClass[] = [];

    constructor(
        protected url: string
    ) {}

    async getAll() {
        //const { data } = await axios.get<Product[]>(this.url);
        const { data } = await axios.get<TypeClass[]>(this.url);
        return data;
    }

    async update<ID, DTO>(id: ID, changes: DTO) {
        const { data } = await axios.put<Product>(`${this.url}/${id}`, changes);
        return data;
    }

}

/* const service = new BaseHttpService<string>();
service.getAll();

const service2 = new BaseHttpService<Category>();
service2.getAll */
(async () => {
    const url1 = 'https://api.escuelajs.co/api/v1/products';
    const url2 = 'https://api.escuelajs.co/api/v1/categories';

    const productsService = new BaseHttpService<Product>(url1);
    const rta = await productsService.getAll();    
    console.log(rta.length);
    productsService.update<Product['id'], UpdateProductDto>(1,{
        title:'Test de actualizacion'        
    });

    const categoryService = new BaseHttpService<Category>(url2);
    const rta2 = await categoryService.getAll();
    console.log(rta2.length);
})();