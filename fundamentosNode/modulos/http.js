const http = require('http');

function router(req, res) {    
    console.log('nueva petición');
    console.log(req.url);
    switch (req.url) {
        case '/hola':
            let saludo = hola();
            res.write(saludo);   
            res.end();         
            break;    
        default:
            res.write('Error 404');
            res.end();
            break;
    }
    /* res.writeHead(201, {'Content-type': 'text/plain'});
    res.end(); */
}

http.createServer(router).listen(3000);

function hola() {
    return 'Hola que tal !';
}

console.log('Escuchando http en el puerto 3000');