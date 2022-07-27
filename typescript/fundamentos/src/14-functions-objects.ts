(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = ({email, password}: {email:string, password: number}) => {
    console.log(email, password);    
  };

  login({
    email:'quenandres@gmail.com', 
    password: 123333
  });


  const products: any[] = [];

  const addProduct = (data:{
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes
  }) => {
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

  console.log(products);

})();
