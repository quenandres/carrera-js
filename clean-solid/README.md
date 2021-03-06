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

## 17. Detalles adicionales sobre funciones
- Simplicidad es findamental
- Funciones de tamaño reducido
- Funciones de una sola línea sin causar complejidad.
- Menos de 20 lineas de codigo.
- Evitar el uso del "else", a menos que sea estrictamente necesario.
- Priorizar el uso de la condicional ternaria.

## 20. Principio DRY
Dont Repeat Yourself.
- Evitar tener duplicidad de código.
- Simplifica las pruebas.
- Ayuda a centralizar los procesos.
- Aplicar el principo DRY, usuarlmente lleva a refactorizar.

## 23. Introducción a la sección
No se debe crear una clase con un nombre generico ya que la cargaremos con responsabilidades extra y no cumpliriamos la regla de responsabilidad unica.

En esta sección hablaremos principalmente sobre clases y conceptos generales para escribir un mejor código.

Es importante tener presente que así como todo, hay excepciones a cada regla, pero esto debería ser un caso aislado y no el estándar. Tratemos de escribir un mejor código y dejar de lado la comodidad de hacer las cosas como se han venido haciendo, especialmente si esas cosas traen muchos problemas.

## 25. Breve introducción a las clases en TypeScript
```
type Gender = 'M'|'F';
class Person {

    constructor(
        public name: string,
        public gender: Gender,
        public birthdate: Date
    ){}
}

const newPerson = new Person('Fernando','M',new Date(1985,10,21));
console.log({newPerson});    
```

## 26. Herencia - Problemática
Aplicar el principio de unica responsabilidad con herencia es casi imposible.

## 27. Objetos como propiedades

## 28. Principio de responsabilidad única
Priorizar la composicion frente a la herencia (No extender clases).
Se eliminan los extends de las clases y los atributos de las otras clases.

Creamos una nueva clase e inicializamos el constructor invocando las demas clases para unificarlas, creando una especie de herencia sin usar el extends e inicializar cada propiedad en cada clase.

## 29. Tarea - Responsabilidad única


## 31. Estructura recomendada de una clase
Cuando se trabaja con clases lo mas recomendable es que el equipo tenga la misma estructura.

  1. Propiedades estaticas.
  2. Propiedades publicas de ultimo.
  3. Metodos
     1. Empezando por los constructores estaticos (metodos estaticos).
     2. Constructor
     3. Los metodos estaticos
     4. Resto de metodos de instancia ordenadas de mayor a menor importancia.
     5. Getters y Setters al final.

## 32. Comentarios en el código
Los comentarios deben ser utiles, no ponerlos donde el codigo es obvio.
El codigo debe ser lo suficientemente explicativo, asi que no deberia ser obligatorio tener los comentarios.

## 33. Uniformidad en el proyecto
Problemas similares, soluciones similares.
La indenctación es primordial organizando la jerarquia del codigo.

# Acronimo STUPID (Antipatrones)
Esta es una sección corta y mayormente explicativa, en donde hablaremos sobre varios "code smells".
La idea es evitar a toda costa estos puntos que hacen que nuestro código pierda calidad.


## 37. CodeSmells - STUPID
Es un acronimo relacionado directamente con la deuda tecnica.

S Singleton: Pátron singleton.
T Tight Coupling: alto acoplamiento.
U Untestability: Código no probable(unit test).
P Premature optimization: optimizaciones prematuras.
I Indescriptive Naming: nombres pocos descriptivos
D Duplication: Duplicidad de código, no aplicar el prindipio DRY

S:
  - Pros
    - Garantiza una unica instancia de la clase a lo largo de toda la aplicación
  - Contras
    - Vive en el contexto global
    - Puede ser modificado por cualquiera en cualquier momento.
    - No es rasteable.
    - Dificil de testear debido a su ubicación

T: 
    Lo ideal es buscar un bajo acoplamiento y buena cohesión.
    Lo que se busca es que los componentes sean autocontenidos, auto suficientes e independientes. Con un objetivo y un proposito bien definido.

    La cohesion se refiere a lo que la clase (o modulo) puede hacer.
    La baja cohesión significaria que la clase realiza una gran variedad de acciones: es amplia, no se enfoca en lo que debe hacer.

    La alta cohesion significa que la clase se enfoca en lo que debería estar haciendo, es decir, solo métodos relacionados con la intención de la clase.

    El bajo acoplamiento significa que cambiar algo importante en una clase no debería afectar a la otra

    El alto acoplamiento, dificultaría el cambio y el mantenimiento de su código; dado que las clases están muy unidas, hacer un cambio podria requerir una renovación completa del sistema.

    Un buen diseño de software tiene alta cohesión y bajo acoplamiento.