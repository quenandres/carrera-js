function otraFuncion() {
    return seRompe();
}

function seRompe() {
    return 3 + z
}

function seRompeAsync(cb) {
    setTimeout(() => {
        try {
            return 3 + z;            
        } catch (error) {
            console.error('Error en la función asincrona');
            cb(error);
        }
    });
}

try {
    //seRompe();
    seRompeAsync(function(err) {
        console.log(err.message);
    });
} catch(err) {
    console.error('Vaya algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada lo hemos capturado');
}