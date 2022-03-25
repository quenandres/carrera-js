const { exec, spawn } = require('child_process');

/* exec('ls -la', (err, stdout, sterr) => {
    if( err ) {
        console.error(err);
        return false;
    }

    console.log(stdout);
}) */


/* exec('node modulos/consola.js', (err, stdout, sterr) => {
    if( err ) {
        console.error(err);
        return false;
    }

    console.log(stdout);
}) */
let proceso2 = spawn('cmd.exe', ['/c','dir']);
proceso2.stdout.on('data', (data) => {
    console.log(data.toString());
});

let proceso = spawn('ls', ['-la']);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato) {
    console.log(proceso.killed);
    console.log(dato.toString());
});

proceso.on('exit', () => {
    console.log('El proceso termino');
    console.log(proceso.killed);
});