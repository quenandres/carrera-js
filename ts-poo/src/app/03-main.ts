import { ProductHttpService } from './services/product-http.service';

(async () => {
    const productService = new ProductHttpService();

    try {
        console.log('*---*'.repeat(10));
        const products = await productService.getAll();
        console.log(products.length);
        console.log(products.map(item => item.title));

        const productId = products[0].id;
        await productService.update(productId, {
            price: 10000,
            title: 'Test de product',
            description: 'Test !!!!!!'
        });

        console.log('findOne()---'.repeat(10));

        const product = await productService.findOne(productId);
        console.log('product');
        console.log(product);
    } catch (error) {
        console.log('error');
        console.error(error);        
    }
    
})();

