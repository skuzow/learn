// ternary operator | (condition) ? true : false

const available = 1000;
const total = 500;
const card = false;

available > total
  ? console.log('You can pay')
  : console.log('You can not pay');

available > total
  ? console.log('You can pay')
  : card ? console.log('You can pay with card') // elif
  : console.log('You can not pay'); // else
