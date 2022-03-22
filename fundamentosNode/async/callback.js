function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        console.log('Estoy siendo asincrona');
        miCallback(nombre);
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

console.log('Iniciando proceso');
hola('Jhonatan', function(nombre){
    adios(nombre, function() {
        console.log('Terminando proceso');
    });
});
