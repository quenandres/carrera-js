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

### Acceso público 4/25
Por defecto todo en ts que no tenga explicito que tipo de acceso tiene, se crea como publica.

### Acceso privado 5/25
Sirve para proteger metodos y propiedades que no queremos que se accedan de manera externa.

### Constructor 6/25
Es el metodo con el cual se inicializa la instancia y se inicializan los atributos.
Para poder ejecutar funcionamiento con atributos acortados se debe poner explicito el acceso de la variable.