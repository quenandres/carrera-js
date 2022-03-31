
let suma = 0;
console.time('todo');
console.time('bucle');
for( let i = 0; i < 100000; i++ ) {
    suma += 1;
}
console.timeEnd('bucle');


let suma2 = 0;
console.time('bucle2');
for( let j = 0; j < 200000; j++ ) {
    suma += 1;
}

console.timeEnd('bucle2');

console.time('asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('todo');


function asincrona() {
    return new Promise((res) => {
        setTimeout(() => {
            console.log('Termina el proceso asincrono');
            res();
        }, 1000)
    });
}