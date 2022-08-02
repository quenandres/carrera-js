console.log(Math.PI);
console.log(Math.max(1,5,6,8,7));

export class MyMath {
    static readonly PI = 3.14;
    static max(...numbers: number[]) { // ...numbers -> cualquier parametro lo convierte en array
        return numbers.reduce((max, item) => max >= item ? max : item);
    }
}

console.log('MyMath', MyMath.PI);

console.log('MyMath', MyMath.max(136,2655,3,54));
console.log('MyMath', MyMath.max(-4,-2655,-3,-54));


