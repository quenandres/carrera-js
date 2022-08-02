export abstract class Animal {
    constructor(protected name: string) {}

    move() {
        console.log('Moving along...');        
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }

    protected doSomething() {
        console.log('dooo');        
    }
}

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

// const fifi = new Animal('fifi');
// fifi.move();
// console.log(fifi.greeting());

const chaise = new Dog('chaise', 'Albert');
chaise.move();
console.log(chaise.greeting());
console.log(chaise.owner);
//chaise.name = 'Darius';
chaise.woof(2);

