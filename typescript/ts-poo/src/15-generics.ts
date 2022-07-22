/* function getValue(value: number | string) {
    return value;
} */


function getValue<T>(value: T) {
    return value;
}

getValue(12).toFixed();
getValue('12').toString();
getValue([]).forEach;