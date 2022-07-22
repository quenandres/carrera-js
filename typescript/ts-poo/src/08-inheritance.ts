export class Animal {
    constructor(public name: string){

    }

    move() {
        console.log('Moving along !!');        
    }

    greeting() {
        return `Hello my name is ${this.name}`;
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
            console.log('woof!!');                        
        }
    }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const chaise = new Dog('cheis', 'Dexter');
chaise.move();
console.log(chaise.greeting());
chaise.woof(4);
console.log(chaise.owner);

