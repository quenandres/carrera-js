import axios from 'axios';

(async() => {     

    function delay(time: number) {
        const promise = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve('Hola');
            }, time);
        });
        return promise;
    }

    function getProducts() {
        const promise = axios.get('https://api.escuelajs.co/api/v1/products');
        return promise;
    }

    const rta = await delay(3000);
    console.log('rta');
    console.log(rta.toUpperCase());

    console.log('---'.repeat(10));
    const products = await getProducts();
    console.log(products.data);
})();