(() => {
  // Se acota el tipo de datos que puede aceptar para no abrir espacio a que apruebe objetos o arrays si no es necesario
  let userId: string | number;
  userId = 122;
  userId = '122';

  function greeting(myText: string | number) {
    if( typeof myText === 'string' ) {
      console.log(`string ${myText.toLocaleLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting("Hola");
  greeting(23.2111111);

})();
