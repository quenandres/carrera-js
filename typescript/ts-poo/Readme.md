### ¿Ya tomaste el Curso de TypeScript: Tipos Avanzados y Funciones? 1/25

- npx tsc --init: Inicializacion de typescript


### __Class 2/25__
Las clases vienen implementadas desde el es6
Nos sirven para crear instancias de objetos.

```typescript
class MyDate {
    year: number = 0;
    month: number = 0;
    day: number = 0;
}
```

Por buena practica ts nos pide inicializar los atributos de la clase. Bien sea en la definicion o en el contructor.

**Definicion**
```typescript
class Test {
    num1: number = 1;
}
```
**Constructor**
```typescript
class Test {
    constructor(num1: number) {
        this.num1 = num1;
    };
}
```

### Métodos 3/25
Los metodos definen el comportamiento de los objetos.
Podemos acceder a los metodos como a los atributos de la clase.

### Acceso público 4/25
Por defecto todo en ts que no tenga explicito que tipo de acceso tiene, se crea como publica.
Esto indica que podemos acceder a las propiedades y metodos del objeto desde el exterior.
```typescript
public year: number;
```

#### Desventajas del alcance público
La desventaja que tenemos al tener una propiedad o método con alcance público es que estás pueden ser modificables desde fuera de la clase.
```typescript
const myDate = new MyDate(1994,12,10);
console.log(myDate.printFormat());
myDate.day = 17;
console.log(myDate.printFormat());
```
>
```bash
10/12/1994
17/12/1994
```


### __Acceso privado 5/25__
Sirve para proteger metodos y propiedades que no queremos que se accedan de manera externa.
```ts
private day: number;
```
Con la propiedad private no se podra acceder a esta propiedad desde fuera de la clase donde sea definida.

Se vuelve privado el metodo que agrega un 0 si el mes o el dia es menor a 10 ya que no es logico que otros metodos accedan a ese metodo para obtener esa funcionalidad.
```ts
private addPadding(value: number) {
    if( value < 10 ) {
        return `0${value}`;
    } 
    return `${value}`;
}
```


### __Constructor 6/25__
Es el metodo con el cual se inicializa la instancia y se inicializan los atributos.
Para poder ejecutar funcionamiento con atributos acortados se debe poner explicito el acceso de la variable.

⭕ Larga
```ts
class Test {    
    constructor(num1: number) {
        this.num1 = num1;
    };
}
```
🟢 Corta, se definen y se asignan
```ts
class Test {
    constructor(
        public num1: number
    ){};
}
```

❌Si no se define el private o public en la variable, no contara como un propiedad de toda la clase, unicamente se podra acceder en el constructor.
```ts
constructor(
    public year: number = 1994, 
    public month: number = 12, 
    day: number = 10
) {}
```



### __Getters 7/25__
El getter funciona como una propiedad, con un metodo.
Debe de retornar algo como si fuese una propiedad.
Para usar la propiedad __get__ 
```ts
class Test {
    constructor(
        public num1: number
    ){};
}
get num1() {
    return this._num1;
}

const test = new Test();
❌test.num1 = 1 // No se puede modificar por que es una propiedad de solo lectura
```
El underscore que se le pone a la propiedad privada, es para que no presente problemas con el get del mismo nombre, se debe cambiar el nombre de la propiedad y agregar el _ en los lugares donde esta ubicado en la clase.

Con get podemos obtener los datos de alcance privados sin la posibilidad de cambiarlos, se puede acceder como si fuese una propiedad, todos los getter deberian de devolver algo.




### __Setters 8/25__
A diferencia de Getter no se debe retornar nada por lo tanto el setter debe ser void.
Tambien funciona como una propiedad.
```ts
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

Es mas usado para validar valores asignados en los procesos de cambio de valores como por ejemplo, validar que el mes no sea menor a 1 ni mayor a 12.

### __Herencia 9/25__
Es una forma de extender metodos y atributos de una clase a otra.
```ts
export class Animal {
    constructor(public name: string) {}
    move() {
        console.log('Moving along...');        
    }
}

export class Dog extends Animal {
    woof(times: number):void {
        for (let index = 0; index < times; index++) {
            console.log('woof..');
        }
    }
}
```
La clase Dog obtendra los atributos y metodos de la clase __Animal__ y podra usarlas a su manera tambien podra implementar nueva funcionalidad.

```ts
export class Dog extends Animal {

    constructor(
        name: string, // Se obtiene la propiedad de la clase padre y debe ir sin expecificación de alcance
        public owner: string
    ){
        super(name); // Llamamos al constructor del padre
    }
}
```
el metodo super() llama al constructor de la clase padre.

### __Acceso protegido 10/25__
protected a diferencia de private, permite heredar propiedades de una clase padre a sus clases hijas. No se dejan modificar estas propiedades protegidas.
Se puede crear metodos con el mismo nombre del padre, si se necesita llamar el metodo del padre se usa super.<class>() para que realice el mismo funcionamiento del padre.

```ts
export class Animal {
    constructor(protected name: string) {}

    move() {
        console.log('Moving along...');        
    }

    protected doSomething() {
        console.log('dooo');        
    }
}
```
---
```ts
export class Dog extends Animal {

    constructor(
        name: string, // Se obtiene la propiedad de la clase padre y debe ir sin expecificación de alcance
        public owner: string
    ){
        super(name); // Llamamos al constructor de padre
    }

    woof(times: number):void {
        for (let index = 0; index < times; index++) {
            console.log(`woof.. ${this.name}`);
        }
        this.doSomething();
    }

    move() {
        console.log('Moving as a dog...');
        super.move();
    }
}
const chaise = new Dog('chaise', 'Albert');
chaise.move();
console.log(chaise.greeting());
console.log(chaise.owner);
//chaise.name = 'Darius';
chaise.woof(2);
```
---
```bash
Moving as a dog... # metodo move de la clase Dog
Moving along...    # metodo move del padre
Hello, I'm chaise
Albert
woof.. chaise
woof.. chaise
dooo
```

Lo que hizo el profe con el método move() es polimorfismo, es reescribir el método que adopta otro comportamiento en la clase hija, pero en este caso este otro comportamiento es un agregado de funcionalidad adicional antes de su ejecucíon por eso al final llama al move() del padre con super()

### __Static 11/25__
Los estaticos sirven tanto en propiedades como en metodos, que nos permiten utilizarlas sin definir un objeto.

```ts
export class MyMath {
    static readonly PI = 3.14;
    static max(...numbers: number[]) { // ...numbers -> cualquier parametro lo convierte en array
        return numbers.reduce((max, item) => max >= item ? max : item);
    }
}

console.log('MyMath', MyMath.PI);
```


### __Interfaces 12/25__
Son similares a la herencia pero mas que extender es un contrato para todas las clases que lo implementen.
Todo lo que va en la interface es publico, y todas las clases lo deben implementar.
```ts
interface name {
    name: string;
    test(): boolean;
}

class name_class implements name {
    constructor(
        public name: string
    ){}

    test():boolean {
        return true;
    }
}
```

Una forma de verlo es como una forma de tipar clases, asi como tipamos los atributos, tipamos las clases para saber que reglas debemos cumplir.

### __Clases abstractas 13/25__

Las clases abstractas son tan ‘genericas’ que no tiene sentido que sean instanciadas. Usamos la keyword abstract.

Cada vez que implementamos una clase abstracta, no podemos crear instancias de esa clase, si no solo de las clases hijas.
Se usan mas que todo para restringir funcionamiento del padre.

```ts
abstract class Pet {} // no instancias de esta clase

class Dog extends Pet {} // de esta si podemos
```
No podremos instanciar un objeto directamente desde **Pet**, Si quisieramos instanciar un **Pet** tendriamos que instancia una clase que no sea __abstracta__ En este caso **Dog**

### __Singleton: constructor privado 14/25__
Uso de constructores privados, usado para usar el patron singleton, en el que creamos una unica instancia de un objeto y asegurando que tendremos un unico acceso a esta clase.

Singleton nos garantiza que solamente tendremos una instancia de un objeto, previniendo bloqueos de memoria.
Definimos el constructor como privado y antes de eso, creamos una instancia donde la declaramos igual a la clase o null, aunque instanciemos varias veces las clase siempre se vera reflejada la primer instancia.

```ts
export class MyService {

    static instance: MyService | null = null;

    private constructor(
        private name: string
    ){}

    getName() {
        return this.name;
    }

    static create(name: string) {
        if(MyService.instance === null) {
            console.log('deberia entrar una vez !!');
            MyService.instance = new MyService(name);
        }
        return MyService.instance;
    }
}

const myService1 = MyService.create('service 1');
console.log(myService1);

const myService2 = MyService.create('service 2');
console.log(myService2);

console.log(myService1 === myService2);
```
---
__*console*__
```bash
deberia entrar una vez !!
MyService { name: 'service 1' }
MyService { name: 'service 1' }
MyService { name: 'service 1' }
true
```

### __Promesas 15/25__
Es util definir que clase de datos nos devolvera la promesa, axios tiene implementado en su API una especie de async/await para que no sea necesario ponerla cuando lo usamos.
Forma de tipa una promesa Promise< boolean> .
```ts
const promise = new Promise<boolean>((resolve) => {
    resolve(true)
});
```

### __Tipando respuestas HTTP 16/25__
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

### __Proyecto: migración de funciones a clases 17/25__
Se migran las funciones a una clase, se hace un ejemplo de Principio de responsabilidad.

### __Consumiendo ProductMemoryService 18/25__
Consumimos datos en memoria.

### __ProductHttpService 19/25__
Se crea un servicio completo arrancando desde el modelo(interfase) y especificando entrega de datos.

### __Consumiendo ProductHttpService 20/25__
Se consume la API y se maneja el asincronismo y el manejo de errores.

### __Generics 21/25__
Le podemos enviar un tipado dinamico a ts T.

```

function getValue<T>(value: T) {
    return value;
}

getValue<number>(12).toFixed();
getValue<string>('12').toString();
getValue<string[]>([]).forEach;
```

### __Generics en clases 22/25__
En una clase tambien se pueden enviar los tipos dinamicos.
Se ponen en uso los genericos, para que se puedan usar un http services generico para todos los servicios.

### __Generics en métodos 23/25__
Se puede definir un tipado diferente en la clase y otro en el metodo.

```
class Test<TypeMain> {}
```

```
name_funcion<TypeMethod>() {}
```

No definir nombres iguales por choque de tipado.

Implementamos la herencia para extender el funcionamiento de un servicio basado en el servicio base.

### __Decoradores 24/25__
Los decoradores son identificados con un ```@```
Agrega validaciones o comportamientos extra, como por ejemplo validar la expresion regular de un email haciendo uso de:
```
@IsEmail()
email!: string;
```

Se pueden utilizar en clases, metodos y en metodos.
