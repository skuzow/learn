// data types

// undefined
let client;
console.log(typeof client);

// boolean
const discount = true;
console.log(typeof discount);

// number
const number1 = 20.30;
const number2 = 30;
const number3 = -200;

console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);

// string
const student = 'Juan';
let product = 'Monitor HD';

console.log(typeof student);
console.log(typeof product);

const number = 30;
const number30 = '30';

console.log(typeof number);
console.log(typeof number30);

// bigint
const bigNumber = BigInt(10);
const numberA = 30;
const numberB = 10;

console.log(typeof bigNumber);
// console.log(bigNumber + numberA); // not possible
console.log(Number(bigNumber) + numberA); // fix

// symbol
const firstSymbol = Symbol(1);
const secondSymbol = Symbol(1);

console.log(firstSymbol === secondSymbol); // symbols are unique

// object
const numbers = [10, 20, 30];
const discount2 = null;
const student2 = { };

console.log(typeof numbers);
console.log(typeof discount2);
console.log(typeof student2);
