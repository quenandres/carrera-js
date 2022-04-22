console.log(Math.PI);
console.log(Math.max(1,2,2,3,8,1,0));

class MyMath {
    static readonly PI = 3.14;
    //constructor
    static max(...numbers: number[]) {
        console.log(numbers);
        numbers.sort((a,b) => a - b);
        return numbers.reduce((max, item) => max >= item ? max : item, numbers[-1]);
    }
}

console.log(MyMath.PI);
console.log(MyMath.max(-1,-2,-3,-4,-115,-6));
const numbers = [1,2,3,4,115,6];


