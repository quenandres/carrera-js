(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('ProductPrice', productPrice);
  
  let customerAge: number = 28;
  // customerAge = customerAge + '1'; // 281
  customerAge = customerAge + 1; // 29  
  console.log('customerAge', customerAge);
  
  let productInStock: number;
  console.log('productInStock', productInStock);
  if( productInStock > 10 ) {
    console.log('Is greater');    
  }

  let discount = parseInt('w');
  console.log('discount', discount);  
  if( discount <= 200 ) {
    console.log('Apply');    
  } else {
    console.log('Not Apply');
  }

  let hex = 0xfff;
  console.log('hex', hex);
  let bin = 0b010111;
  console.log('bin', bin);

  const byNumber: number = 10;
})();
