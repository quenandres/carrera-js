(() => {
  let productTitle: string = 'My amazing product';
  //productTitle = () => {return 'a';};
  productTitle = 'Change product';
  console.log('productTitle', productTitle);
  
  const productDescription = "I'm bla bla bla...";
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew = true;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
  `;

  console.log(summary);

  const myString: string = '';
})();
