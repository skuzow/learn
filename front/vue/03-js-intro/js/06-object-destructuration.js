// object destructuration 2 or more objects

const product = {
  name: 'Tablet',
  price: 300,
  available: true
};

const client = {
  name: 'Juan',
  premium: true
};

const { name: productName } = product;
const { name: clientName } = client;

console.log(productName);
console.log(clientName);
