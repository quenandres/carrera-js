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

### Getters 7/25
El getter funciona como una propiedad, con un metodo.
Debe de retornar algo como si fuese una propiedad.

### Setters 8/25
A diferencia de Getter no se debe retornar nada.
Tambien funciona como una propiedad.
```
set month(newValue: number) {
    if( newValue >= 1 && newValue <=12 ) {
        this._month = newValue;
    } else {
        throw new Error('month out of range');
    }
}

------------------------

const myDate = new MyDate(1993,1,1);
console.log(myDate.printFormat());
myDate.month = 4;
console.log(myDate.month);
myDate.month = 78;
console.log('Esto no debe aparecer', myDate.month);
```

### Herencia 9/25
Es una forma de extender metodos y atributos de una clase a otra.
el metodo super() llama al constructor de la clase padre.

### Acceso protegido 10/25
protected a diferencia de private, permite heredar propiedades de una clase padre a sus clases hijas
Se puede crear metodos con el mismo nombre del padre, si se necesita llamar el metodo del padre se usa super.<class>() para que realice el mismo funcionamiento del padre.

### Static 11/25
Los estaticos sirven tanto en propiedades como en metodos, que nos permiten utilizarlas sin definir un objeto.

### Interfaces 12/25
Son similares a la herencia pero mas que extender es un contrato para todas las clases que lo implementen.
Todo lo que va en la interface es publico, y todas las clases lo deben implementar.
```
interface name {

}

class name_class implements name {

}
```

### Clases abstractas 13/25
Cada vez que implementamos una clase abstracta, no podemos crear instancias de esa clase, si no solo de las clases hijas.
Se usan mas que todo para restringir funcionamiento del padre.


### Singleton: constructor privado 14/25
Singleton nos garantiza que solamente tendremos una instancia de un objeto, previniendo bloqueos de memoria.
Definimos el constructor como privado y antes de eso, creamos una instancia donde la declaramos igual a la clase o null, aunque instanciemos varias veces las clase siempre se vera reflejada la primer instancia.

### Promesas 15/25
Es util definir que clase de datos nos devolvera la promesa, axios tiene implementado en su API una especie de async/await para que no sea necesario ponerla cuando lo usamos.

### Tipando respuestas HTTP 16/25
El tipado de datos es muy importante, desde el retorno, desde el cast y desde una forma a la fuerza de hacer.

- 1
```
async function getProducts(): Promise<Product[]> {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products');
    return data;
}
```
- 2
```
async function getProducts(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
    return data;
}
```
- 3
```
data = data as Product[]
```

### Proyecto: migración de funciones a clases 17/25
Se migran las funciones a una clase, se hace un ejemplo de Principio de responsabilidad.