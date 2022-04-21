const firstArray = [1,5,6,9,7];
const secondArray = [12,45,65,33,22];

const rta = firstArray.concat(secondArray);
console.log(rta);

const rta2 = [...firstArray, ...secondArray];
console.log(rta2);
