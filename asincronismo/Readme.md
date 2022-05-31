# Curso de Asincronismo con Js


### Definición Estructura Callback 4/12
Que es un callback: Es una funcion a la que se le pasa una segunda funcion, para que se ejecute segun el llamado.


### Peticiones a APIs usando Callbacks 5/12

### Múltiples Peticiones a un API con Callbacks 6/12
Vemos la logica del callback-hell, mostrando la mala practica que pueden ser.


### Implementando Promesas 7/12

### Resolver problema con Promesas 8/12


### Conociendo Async/await 9/12
Async/await no es mas que Syntax Sugar. Es una manera mas bonita de hacer lo mismo que estabamos haciendo con 
```.then()```. 
La clave es recordar que si una función regresa un promesa, podemos usar el keyword await, que le indicia al navagador: “Espera a que la promesa se resuleva y almacena su resultado en esta variable”. Todo esto toma lugar dentro de una función asincrona, asi que usamos async para lograr esto



### Resolver problema con Async/Await 10/12

### Callbacks Vs Promesas Vs Async/Await 11/12
## Callback - hell
    - La anidacion de callbacks puede ser dificil de leer a futuro.
    - Flujo poco intuitivo.
    - Manejo de errores algo tedioso.
## Promises
    - Facil de enlazar con el return siguiente.
    - Propensos a errores si no se retorna el llamado siguiente.
    - No sirve en todos los navegadores, necesario uns transpilador.
  
## Async/Await
    - El try catch funciona perfectarmente.
    - Facil de leer.
    - Se espera a que algo suceda y da un orden mas claro.
    - Tambien necesitamos un polify para que funcione en todos los navegadores.


Ventajas y Desventajas

Callbacks
V = Es simple una función que recibe otra función
V = Son universales
D = Composición tosca
D = Callbacks Hell
D = Flujo poco intuitivo
D = Debemos pensar que estamos haciendo código para humanos y debe ser facil de leer
D = if FecthData, if FecthData, if FecthData y se vuelve tedioso y no se maneja excepciones

Promise
V = Fácilmente enlazable then y return, then y return y asi
V = Es poderoso // es muy recomendado para desarrolladores
D = NO maneja excepciones si no maneja un catch al final y seremos propensos a errores
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel

Async Await
V = El tradicional try - catch y manejar las excepciones de manera mas fluida
V = Mas fáciles de leer que sucedera que va a suceder
D = Ese poder que podemos decir es decir si queremos algo debemos esperar que algo suceda
D = Requiere un polyfile para ser transpilados y ser interpretados en todos los navegadores //Babbel