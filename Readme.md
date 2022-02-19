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


### Como funciona JS
### Fundamentos intermedios
### Fundamentos avanzados
### APIs del DOM
### TypeSript
### Patrones de diseño
### Proyecto: MediaPlayer