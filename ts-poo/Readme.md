### ¿Ya tomaste el Curso de TypeScript: Tipos Avanzados y Funciones? 1/25

- npx tsc --init: Inicializacion de typescript


### Class 2/25
Vienen implementadas desde el es6
Nos sirven para crear instancias de objetos.

```
class MyDate {
    year: number = 0;
    month: number = 0;
    day: number = 0;
}
```

Por buena practica ts nos pide inicializar los atributos de la clase. Bien sea en la definicion o en el contructor.

```
constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
}
```

### Métodos 3/25
Los metodos definen el comportamiento de los objetos