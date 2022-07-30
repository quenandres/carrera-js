export class Animal {
    constructor(public name: string) {}

    move() {
        console.log('Moving along...');        
    }

    greeting() {
        return `Hello, I'm ${this.name}`;
    }
}

export class Dog extends Animal {

    constructor(
        name: string, // Se obtiene la propiedad de la clase padre y debe ir sin expecificación de alcance
        public owner: string
    ){
        super(name);
    }

    woof(times: number):void {
        for (let index = 0; index < times; index++) {
            console.log('woof..');
        }
    }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const chaise = new Dog('chaise', 'Albert');
chaise.move();
console.log(chaise.greeting());
chaise.woof(2);
console.log(chaise.owner);
