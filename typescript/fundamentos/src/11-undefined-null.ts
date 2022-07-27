(() => {
  // let myNumber: number = undefined; //Error
  // let myString: string= null; // Error
  let myNull: null = null;
  let myUndefined: undefined = undefined;
  //myNull = 12; // Error

  let myNumber: number | null = null;
  myNumber = 12;

  let myString: string | undefined = undefined;
  myString = 'awww';

  function hiV1(name: string | null) {
    let hello = 'Hola ';
    if( name ) {
      hello += name;
    } else {
      hello += 'nobody';
    }
    console.log(hello);
  }

  hiV1('Jhonatan');
  hiV1(null);

  function hiV2(name: string | null) {
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';
    console.log(hello);
  }

  hiV2('Jhonatan');
  hiV2(null);


})();
