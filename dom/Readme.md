# Curso de Manipulación del DOM

### ¿Qué es el DOM? 2/28
Todo empieza desde el Critical Rendering Path, es el proceso que se encarga en convertir codigo html,css,js y los convierte en pixeles
Este proceso crea 2 arboles
    - DOM (Document Object Model)
    - CSSOM (CSS Object Model)

__DOM__:
- HTML
  - HEAD
    - TITLE -> Platzi
  - BODY
    - H1 -> Curso Manipulacion DOM
    - P  -> Welcome welcome

- Es una representación del HTML
- Estructura en forma de árbol de nodos
- Es un modelo que puede ser modificado

### Web APIs modernas 3/28
Cuando se combina el DOM + JS = Web API
Existen mas de 70 Web APIS, el DOM es solamente 1 de ellas.

- Como lo uso
    [developer.mozilla.org](https://developer.mozilla.org/es/)
- Puedo usarlo
    [caniuse.com](https://caniuse.com/)

### Leer nodos 4/28
#### Selectores antiguos
- document.getElementById : Retorna unicamente un elemento.
- document.getElementsByTagName('input') : Retorna todos los elementos de este tag.
- document.getElementByClassName : Retorna todos los elementos con esta clase.
#### Selectores modernos
A diferencia de los anteriores siempre usamos.

Seleccionar unicamente 1:
```
document.querySelector('')
```

Seleccionarlos todos:
```
document.querySelectorAll('')
```


Especificando CSS selectors
    - .class
    - #id
    - input
