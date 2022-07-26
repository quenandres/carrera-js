(() => {
  const prices: number[] = [1,2,2,1,2,121];
  prices.push(4);
  console.log('prices');
  console.log(prices);  

  let products = ['hola', true];
  products.push(false);

  // De manera explicita le indicamos que puede aceptar estos tipos separados por el pipe
  let mixed: (number | string | boolean)[] = ['hola', true];
  mixed.push(5);
  mixed.push('a');
  mixed.push(true);

  // Agrega Object para que podamos registrar objetos en nuestro array
  let mixedObj: (number | string | boolean | Object )[] = ['hola', true];
  mixedObj.push({});
  mixedObj.push([]);

})();
