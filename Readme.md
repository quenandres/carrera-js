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


### Como funciona JS
### Fundamentos intermedios
### Fundamentos avanzados
### APIs del DOM
### TypeSript
### Patrones de diseño
### Proyecto: MediaPlayer