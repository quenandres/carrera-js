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


### NodeLists vs Array 5/28

Cuando usamos:

document.querySelectorAll('')

Nos devuelve un tipo llamado NodeList, que son diferentes a los array, este carece de operaciones que los arrays si tienen.
Para que tengan esta misma funcionalidad podremos hacer lo siguiente.

```
const nodeList = document.querySelectorAll('input');
const nodeListArray = [...nodeList];
```

Con esto, nodeListArray adquiere toda la funcionalidad de un array, lo cual es mejor ya que los navegadores estan optimizados a funcionar con arrays.


### Crear y agregar 6/28
Los nodos que se pueden crear son de 2 tipos:

- Elementos
```
document.createElement(
    "H1"
)
```

- Texto
```
document.createTextNode(
    "Texto"
)
```

#### Agregar nodos

```
parentElement.appendChild
```
- Siempre agregara el elemento al final de la lista.

```
parentElement.append
```
- Es la evolución de appendChild, tambien agrega los elementos al final.
- Se puede agregar mas de un nodo
- Se puede agregar text
- No soportado por internet explorer IE11

```
parentElement.insertBefore(element, referencia)
```
- Se pone como primer parametro el elemento que queremos agregar
- Se debe tener un nodo de referencia como segundo parametro
- El nodo de referencia debe ser hijo directo del padre para que funciones.

```
parentElement.insertAdjacentElement(
    POSICION: 'beforebegin' | 'afterbegin' | 'beforeend' | 'afterend', NODO
)
```
- Es una API un poco mas complicada de utilizar

### Otras formas de agregar 7/28

```
node.outnerHTML: leer
```
Convierte nodos a string que podemos manipular como texto.

```
node.innerHTML: escribir
```
Escribe texto y lo convierte a HTML.

### Atributos y propiedades 8/28
Diferencia entre atributo y propiedad.
 - Atributo : Usado al inicio del html: type, class, id, placeholder
 - Propiedad : Son las que cambiamos dinamicamente como el value pero no se vera reflejado en el dom.

### Eliminar nodos 9/28

```
nodeElement = $0;
1. padre = $0.parentElement // Obtiene el padre del elemento seleccionado
2. padre.removeChild(nodeElement)
```

```
nodeElement = $0;
nodeElement.remove()
```


```
const padre = document.querySelector('div.py-5.text-center');
<div class="py-5 text-center"></div>
const toReplace = document.querySelector('h2');

const node = document.createElement('h1');
node.textContent = "Test de cambio de child";
'Test de cambio de child'
padre.replaceChild(node, toReplace)
<h2>Checkout form</h2>
```

### Operaciones en lote 10/28

Trabajar con el DOM no es gratuito, lo que mas cuesta es hacer operaciones en DOM.
- Operaciones en lote: 
Esta forma cambia 100 veces el DOM.
```
for (let i = 0; i < 100; i++) {
    const node = document.createElement('input');
    document.body.appendChild(node)
}
```

- Delegacion de eventos

```
const nodos = [];
for (let i = 0; i < 100; i++) {
    const node = document.createElement('input');
    nodos.push(node);
}
-> 100

document.body.append(...nodos)
```

#### Spread operator
Lo que hace es deconstruir ese arreglo y lo pasarlo como parámetros individuales para la función.


### Descargando información y creando nodos 12/28
```
npx create-snowpack-app my-app --template snowpack-template-tailwind
```

Conectamos API para obtener datos y pintarlos dinamicamente

### Enriqueciendo la información 13/28
Practica de renderizacion de datos.


### Usando la API de internacionalización del browser 14/28
```
const formaPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN',{
        style: 'currency',
        currency: 'USD'
    }).format(price);

    return newPrice;
}
```

### Reaccionar a lo que sucede en el DOM 16/28
El evento input contiene los eventos change de js, se le agrega funcionalidad de escucha permanente.
```
const input = document.getElementById('email');

input.addEventListener('input', (event) => {
    if(event.data === 'p' ){
        console.log('Escribiste una p');
    }
});
```

Se remueve el evento de escucha permanente de un nodo.
```
const input = document.getElementById('email');

input.removeEventListener('input', accion);
```

Si usamos arrow funcion no podremos eliminar la funcion de la llamada del input.


### Event propagation 17/28
Los eventos se propagan desde el evento interno hacia afuera hasta llegar al document.

- H2
  - DIV
    - BODY

Existe una opción de evento.stopPropagation() que detiene la propagación de los eventos.


### Event delegation 18/28
En vez de poner el eventListener en cada objeto, se pone en un padre principal y con condicionales se define cual deberia ser la acción.

```
const app = document.querySelector("#container");
app.addEventListener('click', (event) => {
    if( event.target.nodeName == "H2" ) {
        window.alert('Hola');
    }
});
```