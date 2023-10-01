// conditional operators
// || (OR)
// && (AND)

const available = 1000;
const total = 500;
const card = false;

if (card || available > total) {
  console.log('You can pay');
} else {
  console.log('You can not pay');
}

if (card && available > total) {
  console.log('You can pay2');
} else {
  console.log('You can not pay2');
}
