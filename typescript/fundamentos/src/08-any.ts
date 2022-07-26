(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = false;

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);
  
  myDynamicVar = 1212;
  // cast llamado genericos para cambiar el tipo de una variable asignandola a otra variable.
  const rta2 = (<number>myDynamicVar);
  console.log(rta2);
})();
