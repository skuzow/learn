// compare operator
const number1 = 20;
const number2 = '20';

console.log(typeof number1);
console.log(typeof number2);

// == | compares only value
if (number1 == number2) {
  console.log('They are equal');
} else {
  console.log('They are not equal');
}

// === | compares value and type
if (number1 === number2) {
  console.log('They are equal');
} else {
  console.log('They are not equal');
}
