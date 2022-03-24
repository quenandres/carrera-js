function hola(nombre, miCallback) {
    setTimeout(() => {
        console.log(`Hola, ${nombre}`);
        console.log('Estoy siendo asincrona');
        miCallback(nombre);
    }, 1000);
}

function hablar( callbackHablar ){
    setTimeout(() => {
        console.log('Bla bla bla...');
        callbackHablar();
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
        console.log(`Adios ${nombre}`);
        otroCallback();
    }, 1000);
}

function conversacion( nombre, veces, callback ) {
    if( veces >= 0 ){
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios( nombre, callback );        
    }
}

// --

console.log('Iniciando proceso');
hola("carlos", function(nombre) {
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado');
    });
});

/* hola('Jhonatan', function(nombre){   
    hablar(() => {
        adios(nombre, function() {
            console.log('Terminando proceso');
        });
    });
}); */

/* console.log('Iniciando proceso');
hola('Jhonatan', function(nombre){
    hablar(() => {
        hablar(() => {
            hablar(() => {
                adios(nombre, function() {
                    console.log('Terminando proceso');
                });
            });
        });
    });   
}); */
