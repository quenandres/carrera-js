/* let i = 0;
let intervalo = setInterval(() => {
    i++;
    if( i === 3 ) {
        clearInterval(intervalo);
    }
    console.log(i);
}, 1000);

setImmediate(() => {
    console.log('inmediate');
}); 

console.log(__filename);

*/

global.miVariable = 'eValor';

console.log(miVariable);
