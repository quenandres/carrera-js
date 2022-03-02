# Carrera Profesional de JS | React | Go

| Curso | Porcentage |
|----|----|
| Github - Actions | 81.82% |
| Js - Profesional | 11.90% |ñs
| Asincronismo | 16.67% |
| Intro React | 13.64% |
| Go intermedio | 3.33% |
| React - udemy | 34.44% |
| ReactProfesional | 0.00% |

## Contenido
  1. [Introducción](#introducción)

## **Introducción**
### **¿Qué significa ser un profesional de JavaScript? 1/42**
  1. Conocimiento del lenguaje
      
       - Fundamentos
       - No-Fundamentos
         - Promesas, Getters, Setters, Generadores, Proxies
       - Como funciona
         - Javascript Engine
         - Herencia Prototipal
         - Event Loop
  2. Conocimientos de entorno de programación
  3. Mejores prácticas
    - No reinventar la rueda
      - Patrones de diseño..

  4. Versado en codigo
  5. Herramientas
  6. Ética / Profesionalismo
     1. 
  7. Experiencia  

### **Inicio del proyecto 3/42**
this Guardar una instancia

### **Cómo llega un script al navegador 4/42**
  - DOM: El dom es una representacion de un documento de HTML, representado en forma de arbol para el navegador.
  - Script Embebido: Cuando el navegador lee el codigo y se encuentra con algun script, lo ejecuta y deja esperando los demas componentes del DOM
  - Script externos(async): No detienen todo el procesamiento, esperan hasta el final para ejecutarse.
  - Script defer: Difiere al final la ejecución del js, la peticion correra asincronamente asi que no dentendra procesos.

  ``` <script async src = ""></script> ```

  ``` <script defer src = ""></script> ```

### **Scope 5/42**
  - El scope o ambito representa el tiempo de vida de una variable.
  - Let y const operan sobre el block scope, por lo que se define de que estas variables solo tendran vida en este bloque

### **Closures 6/42**
Es una forma de  crear variables privadas, que solo pueden ser cambiadas a travez de otras funciones propias.
```
    function makeCounter( n ) {
        let count = n;
        return {
            increase: () => count = count + 1,
            decrease: () => count = count - 1,
            getCount: () => count,
        }
    }

    let counter = makeCounter(7);
    console.log(counter.getCount());
    counter.decrease();
    counter.decrease();
    console.log(counter.getCount());
```

### **El primer plugin 7/42**

### **this 8/42**
this se refiere a la instancia de la clase.
Pero hay mas contextos 
en JS no existen las clases, pero es util llamarle objeto al New
Cuando asignamos los valores de this.name, estamos asignando a la instancia no sobre el objeto prototipal
```
        const accion = person.saludar;
        accion();

        // this en el contexto de una clase
        function Person(name) {
            // this = {}
            this.name = name;
        }

        Person.prototype.saludar = function() {
            console.log(`Me llamo ${this.name}`)
        }

        const angela = new Person('Angela');
        angela.saludar();
```
#### This
This siempre representa algo diferente dependiendo el contexto en el que se encuentre, ya sea función, objeto o clase.
 - function: This dentro de una función intenta devolver el objeto, Como la function no es un objeto, se va a un nivel más arriba y encuentra al objeto window.
  ``` 
  function imprimeThis(){
    console.log(this);
  } 
  imprimeThis();
  // Window....
  ```
 - método: Si this esta dentro de una función, pero esta funcion pertenece a un objeto, su valor cambia. En este casi, this se refiere al objeto
  ```
  let perro = {
    nombre: "Max",
    saludar: function() {
      return `Hola, me llamo ${this.nombre} Guau Guau`;
    }
  };

  perro.saludar();
  // "Hola, me llamo Max Guau Guau"
  ```
  - evento: En n evento, this representa el elemento HTML al se le está asignando dicho evento.
  ```
  <a href="#" id="boton">Yo soy un botón</a>  
  ```
  ```
  const boton = document.getElementById("boton");
  boton.addEventListener("click"), function() {
    console.log(this.textContent);
  });

  //Yo soy un botón
  ```
  - constructor: En este caso, this se refiere al objeto instanciado.
  ```
  //ES6
  class Persona{
    constructor(nombre, edad){
      this.nombre = nombre;
      this.edad = edad;
    }
  }

  let amigo   = new Persona("Mario", 50);
  let hermana = new Persona("Claudia", 27);
  let madre   = new Persona("María", 60);

  // Persona {nombre: "Mario", 50}
  // Persona {nombre: "Claudia", 27}
  // Persona {nombre: "María", 60}
  ```
  - arrow functions: las arrow function tienen algo llamado lexical this, que le permite a this llegar a un nivel superior.
  ```
  class Persona{
    constructor() {
      this.edad = 0;
    }

    aumentarEdad() {
      setInterval(function(){
        this.edad++;
        console.log(this.edad);
      }, 1000)
    }
  }

  let fili = new Persona();
  fili.aumentarEdad();
  // NaN 
  ```
  ```
  class Persona {
    constructor() {
      this.edad = 0;
    }
  }

  aumentarEdad() {
    setInterval(() => {
      this.edad++;
      console.log(this.edad);
    }, 1000)
  }  

  let fili = new Persona();
  fili.aumentarEdad();
  // 1... 2.... 3.... 4....
  ```
### **Los métodos call, apply, y bind 9/42**
Estos 3 metodos ayudan a determinar cual sera el contexto en el que usemos el this.
#### call
```
// Establece `this` usando `call`
function saludar() {
    console.log(`Hola Soy ${this.name} ${this.lastname}`);
}

const richard = {
    name: "Richard",
    lastname: "Kaufman"
}
saludar.call(richard);
// Hola Soy Richard Kaufman

function caminar( metros, direccion ) {
    console.log(`${this.name} camina ${metros} hacia ${direccion}`);
}
caminar.call(richard, 400, "norte");
//Richard camina 400 hacia norte
```
### apply 
```
// Establece `this` usando `apply` y pasar argumentos a la función
caminar.apply(richard, [800, "NorEste"]);
```
### bind
```
// Establece `this` en una nueva función usando `bind`
const daniel = { name: "Daniel", lastname: "Sanchez" };
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina1 = caminar.bind(daniel,1000);
danielCamina1("Este");

const danielCamina2 = caminar.bind(daniel);
danielCamina2(1000, "Este");

// En esta tecnica guardamos varios argumentos y luego llenamos los demas, permite hacer funciones reutilizables

const buttons = document.getElementsByClassName('call-to-action');
/* buttons.forEach(button => {
    button.onClick = () => alert("¡Nunca pares de aprender!");
}); */

/*  Array.prototype.forEach.call(buttons, button => {
    button.onClick = () => alert("¡Nunca pares de aprender!");
}); */

[...buttons].forEach(button => {
    button.onclick = () => {
        alert('Rest Operator')
    }
})
```
## **Prototype 10/42**
En Javascript todo son objetos, no tenemos clases, no tenemos ese plano para crear objetos.

Todos los objetos 'heredan' de un prototipo que a su vez hereda de otro prototipo y así sucesivamente creando lo que se llama la prototype chain.

La keyword new crea un nuevo objeto que 'hereda' todas las propiedades del prototype de otro objeto. No confundir prototype con proto que es sólo una propiedad en cada instancía que apunta al prototipo del que hereda.
#### Sin new
```
const heroMethods = {
    saludar: function(){
        console.log(`Me llamo ${this.name}`);
    },
}

function Hero( name ) {
    const hero = {
        name: name
    }
    hero.saludar = heroMethods.saludar;
    return hero;
}

const zelda = Hero("Zelda");
zelda.saludar();
const link = Hero("Link");
link.saludar();
```
#### Con new
```
// New es un atajo para llevar Hero.prototype al objeto
function Hero( name ) {
    //const hero = Object.create(Hero.prototype);
    this.name = name;
}

Hero.prototype.saludar = function(){
        console.log(`New: ${this.name}`);
};

const zelda = new Hero("Zelda");
zelda.saludar();
const link = new Hero("Link");
link.saludar();
```
Con el new se ahorra el uso de <class>.prototype... para acceder a metodos de un objeto usado como clase.

### **Herencia Prototipal 11/42**
*\_\_proto\_\_* se encadena entre los objetos de la misma "clase", cuando no encuentra la funcion en uno, pasa al siguiente y al siguiente, asi sucesivamente hasta llegar al Object, que es el objeto original.
```
function Hero( name ) {
  this.name = name;
}

Hero.prototype.saludar = function(){
    console.log(`Hola soy: ${this.name}.`);
};

const zelda = new Hero("Zelda");
zelda
Hero {name: 'Zelda'}
  name: "Zelda"
  [[Prototype]]: Object
    saludar: ƒ ()
    constructor: ƒ Hero( name )
    [[Prototype]]: Object
```


### Como funciona JS
### Fundamentos intermedios
### Fundamentos avanzados
### APIs del DOM
### TypeSript
### Patrones de diseño
### Proyecto: MediaPlayer




## Extra
https://www.youtube.com/watch?v=m7AgxJSCMVw&t=12s&ab_channel=jonmircha

Js es un lenguaje Single Thread(Un unico hilo).
### Procesamiento Single Thread y Multi Thread
