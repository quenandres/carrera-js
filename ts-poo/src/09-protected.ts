export class Animal {
    constructor(protected name: string){}

    move() {
        console.log('Moving along !!');        
    }

    greeting() {
        return `Hello my name is ${this.name}`;
    }

    protected doSomething() {
        console.log('doooo');
        
    }
}

export class Dog extends Animal {

    constructor(
        name: string,
        public owner: string
    ) {
        super(name);
    }

    woof( times: number ): void {
        for (let index = 0; index < times; index++) {
            console.log(`woof!! ${this.name}`);
        }
        this.doSomething();
    }

    move() {
        console.log('move as a dog');
        super.move();
    }

}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const chaise = new Dog('cheis', 'Dexter');
chaise.move();
console.log(chaise.greeting());
chaise.woof(1);
console.log(chaise.owner);
//chaise.name = 'Otro nombre del perrito';
