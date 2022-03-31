const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

readableStream.setEncoding('UTF8'); // Codificamos por default la codificación del archivo

/* readableStream.on('data', (chunk) => {
    data += chunk;
})


readableStream.on('end', () => {
    console.log(data);
}); */

// stdout es un buffer de escritura
/* process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('tal'); */

// Transform crea un stream de lectura y escritura
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chukMayus = chunk.toString().toUpperCase();
    this.push(chukMayus);
    cb();
}

let mayus = new Mayus();

readableStream
    .pipe(mayus)
    .pipe(process.stdout);