// objects
const product = {
  name: 'Tablet',
  price: 300,
  available: true
};

console.log(product);
console.table(product);

console.log(product.name);
console.log(product.price);

// destructuring
const { name, price, available } = product;

console.log(name);
console.log(price);
console.log(available);

// object literal enhacement
const authentificated = true;
const user = 'Juan';

const newObject = {
  authentificated,
  userAuth: user
}

console.log(newObject);
