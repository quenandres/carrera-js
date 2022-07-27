(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createAt,
      stock,
      size
    }
  }


  const producto1 = createProductToJson('B1', new Date(), 12, 'L');
  console.log(producto1);
  

  const createProductToJsonV2 = (
    title: string,
    createAt: Date,
    stock: number,
    size?: Sizes // Si yo no envio esta variable no me va a poner ningun problema
  ) => {
    return {
      title,
      createAt,
      stock,
      size
    }
  }


  const producto2 = createProductToJsonV2('P1', new Date(), 17);
  console.log(producto2);
  
  
})();
