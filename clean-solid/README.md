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
