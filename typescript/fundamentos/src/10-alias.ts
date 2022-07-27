(() => {

  //Creación de nuestro propio tipo de datos
  type UserID = string | number | boolean;

  // Se acota el tipo de datos que puede aceptar para no abrir espacio a que apruebe objetos o arrays si no es necesario
  let userId: UserID;
  userId = 122;
  userId = '122';

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  // shirtSize = 'X'; Error

  function greeting(userId: UserID, size: Sizes) {
    if( typeof userId === 'string' ) {
      console.log(`string ${userId.toLocaleLowerCase()}`);
    }
    console.log(size);
  }

  greeting('test1', 'M');
  // greeting('test1', 'F');

})();
