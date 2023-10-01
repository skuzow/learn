// function expression

// sum(1, 2); // error: sum is not a function

const sum = function sum(number1 = 0, number2 = 10) {
  console.log(number1 + number2);
} // cannot use before its declaration

sum(1, 2); // works

sum2(1, 2); // works

function sum2(number1 = 0, number2 = 10) {
  console.log(number1 + number2);
}

sum2(6, 2); // works
