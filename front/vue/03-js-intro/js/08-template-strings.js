// template strings or concat

const client = 'Juan';
const balance = 400;

console.log('Client: ' + client + ' have a balance of: ' + balance);
console.log('Client:', client, 'have a balance of:', balance);
console.log(`Client: ${client} have a balance of: ${balance}`);

const product = {
  name: 'Tablet',
  price: 300,
  available: true
};

console.log(`Product: ${product.name} have a price of: ${product.price}`);
