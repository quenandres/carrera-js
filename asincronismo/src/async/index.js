const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do something Async'), 3000)
            : reject(new Error('Test error'))
    });    
}

const doSomething = async () => {
    const something = await doSomethingAsync();
    console.log('something');
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');


const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('2. Before');
anotherFunction();
console.log('2. After');
