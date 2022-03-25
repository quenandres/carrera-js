

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

## File system 12/31

## Console 13/31
console.log: recibe cualquier tipo y lo muestra en el consola.
console.info: es equivalente a log pero es usado para informar.
console.error: es equivalente a log pero es usado para errores.
console.warn: es equivalente a log pero es usado para warning.
console.table: muestra una tabla a partir de un objeto.
console.count: inicia un contador autoincremental.
console.countReset: reinicia el contador a 0.
console.time: inicia un cronometro en ms.
console.timeEnd: Finaliza el cronometro.
console.group: permite agrupar errores mediante identación.
console.groupEnd: finaliza la agrupación.
console.clear: Limpia la consola.

## Errores (try / catch) 14/31
Cuando se genera un error, node propaga el error hacia arriba, hasta que esta es caputado. si el error no se captura node se detiene.

## Procesos hijo 15/31
El módulo de procesos secundarios de Node.js (child_process) tiene dos funciones spawn y exec, mediante las cuales podemos iniciar un proceso secundario para ejecutar otros programas en el sistema.

La diferencia más significativa entre child_process.spawn y child_process.exec está en lo que spawn devuelve un stream y exec devuelve un buffer.

Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
Usa spawn cuando quieras recibir datos desde que el proceso arranca.
Usa exec cuando solo quieras recibir datos al final de la ejecución.
