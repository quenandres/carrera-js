function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3+z
            callback(null, a)
        } catch(err) {
            callback(err, null);
        }
    }, 1000);
}

asincrona((err, dato) => {
    if( err ){
        console.error('Tenemos un error');
        console.error(err);
        return false;
    }
});