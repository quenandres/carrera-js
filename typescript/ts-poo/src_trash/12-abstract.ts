import { Animal, Dog } from './09-protected';

const animal = new Animal('elite');
animal.greeting();

const chaise = new Dog('chaise','arrow');
animal.greeting();
chaise.woof(2);
