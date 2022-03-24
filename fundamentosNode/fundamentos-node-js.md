

Controlar los errores para que cuando la ejecución falle, no sea critico para el proyecto

## Configurar las variables de entorno en Node.js 5/31
Por defecto siempre se encontraran las variables de entorno en mayuscula.


## Herramientas para ser más felices: Nodemon y PM2 6/31
En desarrollo Nodemon: Detecta cambios ligado a los archivos en los que se este trabajando y ejecuta todo de nuevo.
En produccion PM2:Es un demonio usado en producción para la administracion de procesos, permite monitorizar el rendimiento y muestra dashboard del codigo. 

## Callbacks 7/31

## CallbackHell 8/31
## Promesas 9/31
```
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
```

## Async/await 10/31
A nivel tecnico no bloquea el hilo principal
Para evitar que todo se vea asíncrono, y que la sintáxis sea más legible las operaciones secuenciales como hacer un archivo que se procese, subirlo para tener una URL y de ahí mandarla a una base de datos.
Async y Await nos permite definir una función de forma explícita como asíncrona y esperar a que la función termine. No estará bloqueando el hilo principal, pues estará esperando a que se resuelva con el event loop

## Globals 11/31
Son modulos que vienen en Node que contienen metodos y propiedades basicas. Ej setTimeOut