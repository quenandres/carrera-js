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
            //resolve();
            reject('Hay un error');
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

// ----

console.log('Iniciado el proceso...');
hola('Carlos')
    .then( hablar )
    .then( hablar )
    .then( hablar )
    .then( adios )
    .then((nombre) => {
        console.log('terminado el proceso');
    })
    .catch((error) => {
        console.error('Ha habido un error');
        console.error(error);
    });