# Proyecto para practicar

Este es un proyecto de Vanilla TypeScript en Vite, para trabajar los ejercicios del curso sobre Principios SOLID y CleanCode.

Clonar o descargar el proyecto y luego:

```
yarn install
ó
npm install
```

Para ejecutar el proyecto, simplemente ejecuten
```
yarn dev
ó
npm run dev
```

## 8. Introducción a la sección
Siempre se genera deuda tecnica, la cual es la falta de calidad de cierta parte de nuestro codigo.

 - ¿Qué es la deuda técnica?
 - ¿Cómo se paga la deuda técnica?
 - Refactorización
 - Nombres de variables
 - Nombres para funciones
 - Ejercicios de refactorización
 - Principio DRY

## 10. Breve exposición - Deuda técnica y Clean Code
La deuda tecnica casi siempre tiene que ver con la calidad, la cual siempre termina en costos monetarios.
- Tiempo en realizar mantenimientos.
- Tiempo en refactorizar codigo.
- Tiempo en comprender el codigo.
- Tiempo adicional en la transferencia del codigo.
  
### Esquema de deuda tecnica
 - Imprudente: No hay tiempo, solo copia y pega eso de nuevo
 - Prudente: Tenemos que entregar rapido, ya refactorizaremos
 - Inadvertido: "¿Que son los patrones de diseño?"
 - Prudente e inadvertida: "Ahora sabemos como lo deberiamos haber hecho"

__Refactorización__: Usualmente para que una refactorización fuerte tenga el objetivo esperado, es imprescindible contar con pruebas automáticas. Si no tenemos las pruebas automaticas tendriamos que probar el codigo que cambiamos a mano lo que nos lleva a gastar mas tiempo en la deuda tecnica.
__clean code__: El codigo debe ser simple y directo, deberia poderse leer como un texto simple bien escrito.

## 11. Nombres pronunciables y expresivos
Siguiendo recomendaciones de clean code, es necesario tener variables expresivas. Muy util usar palabras en ingles.

❌
```
const n = 53;
const tx = 0.15;
```
🟢
```
const numberOfUnits = 53;
const tax           = 0.15;
```

- Ausencia de informacion tecnica de nombres
Intentar que las variables tengan información tecnica del funcionamiento de nuestra aplicación.


❌
```
class AbstractUser {}
interface UserInterface {}
```
🟢
```
class User {}
interface User {}
```


## 12. Nombres según el tipo de dato
- ## __arrays__:
    Pluralizar variables puede ser util, tambien indicar que son un listado de ese tipo especifico de cosas en un array.

    ❌
    ```
    const fruit = ['manzana','platano','fresa'];
    ```
    🟢
    ```
    const fruitList = ['manzana','platano','fresa'];
    ```
    🔵
    ```
    const fruits = ['manzana','platano','fresa'];
    const fruitNames = ['manzana','platano','fresa'];
    ```
- ## __booleans__:
    El agregar un __is__, __can__ o un __has__ al nombre de la variable podria indicar mas facilmente el uso de la variable.

    ❌
    ```
    const open = true;
    const active = true;
    const write = true;
    const noValues = true;
    const notEmpty = true;
    ```
    🟢
    ```
    const isOpen = true;
    const isActive = true;
    const canWrite = true;
    const hasValues = true;
    const isEmpty = true;
    ```
- ## __numbers__:
    Al igual que el anterior, se pueden poner prefijos como __min__, __max__, __total__.
    ❌
    ```
    const fruits = 3;
    const cars = 3;
    ```
    🟢
    ```
    const maxFruits = 3;
    const minFruits = 3;
    const totalOfCars = 3;
    ```
- ## __funciones__:
    Deben representar acciones con el verbo de la acción seguidas de un sustantivo.
    ❌
    ```
    createUserIfNotExist();
    updateUserIfNotEmpty();
    sendEmailFieldsValid();
    ```
    🟢
    ```
    createUser();
    updateUser();
    sendEmail();
    ```


## 14. Consideraciones para las clases.
Las clases deben de tener nombres formados por sustantivo o frases de sistantivo.

 - Estos ejemplos son demasiado genericos. Por lo que se le daria mucha responsabilidad a la clase.

❌
```
class Manager {};
class Data {};
class Info {};
```

## 15. Nombres de funciones, argumentos y parámetros
Los nombres de las funciones deben ir basados en la acción que realice la funcion.
    - parametros: deberian estar limitados a maximo 3 parametros posicionales. na forma muy util es usar la desestructuración de objetos de js.
    
```
interface Movie {
  title: string,
  description: string,
  rating: number,
  cast: string[] 
}

function createMovie({title, description, rating, cast} : Movie) {
    console.log({ title, description, rating, cast });
}
```