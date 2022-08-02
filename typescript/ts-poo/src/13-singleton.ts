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

const myService3 = MyService.create('service 3');
console.log(myService3);


console.log(myService1 === myService2);
