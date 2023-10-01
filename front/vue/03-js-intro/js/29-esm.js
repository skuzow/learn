// ESM - EcmaScript Modules
import text, { sum as summ, sub } from './functions.js';

function sum() {
  console.log('sum');
}

console.log(summ(10, 20));
console.log(sub(100, 20));

console.log(text);
