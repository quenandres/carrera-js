(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }

  const products: Product[] = [];

  const addProduct = ( data: Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Prod1',
    createAt: new Date(),
    stock: 120
  });

  addProduct({
    title: 'Bes2',
    createAt: new Date(),
    stock: 120,
    size: "XL"
  });


  addProduct({
    title: 'asss',
    stock: 456,
    createAt: new Date('1974-05-01'),
    size: "M"
  });

  console.log(products);

})();
