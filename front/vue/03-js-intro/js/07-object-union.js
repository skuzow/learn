// object union

const product = {
  name: 'Tablet',
  price: 300,
  available: true
};

const client = {
  name: 'Juan',
  premium: true
};

const newObject = Object.assign(client, product);
console.log(newObject);

const newObject2 = {
  client,
  product
};
console.log(newObject2)
