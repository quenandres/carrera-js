function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log(`Hola, ${nombre}`);
            console.log('Estoy siendo asincrona');
            resolve(nombre);
        }, 1000);
    });
}

function hablar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Bla bla bla...`);
            resolve();
            //reject('Hay un error');
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Adios ${nombre}`);
            resolve();
        }, 1000);        
    });
}

async function main() {
    let nombre = await hola('Jhonatan');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
}

console.log('Empezamos el proceso');
main();
console.log('Termina el proceso');