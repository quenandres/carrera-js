const matriz = [
    [1,2,3],
    [4,5,6, [12,13,14]],
    [7,8,9]
];

const rta = matriz.flat(2); // Se le debe indicar que cantidad de niveles aplanar
console.log('rta');
console.log(rta);

// Solución sin flat

let newArray = [];


const matriz_flat = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        const element = matriz[i];
        if( typeof(element) === 'object' ) {
            matriz_flat(element);
        }else {
            newArray.push(element);
        }
    }
}

console.log("matriz_flat(matriz)");
console.log(matriz_flat(matriz));

console.log('newArray');
console.log(newArray);
