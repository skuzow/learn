// object manipulation
const product = {
  name: 'Tablet',
  price: 300,
  available: true
};

// Object.freeze(product); // freeze object (read only)
// Object.seal(product); // seal object (read only)

// reassign values
product.name = 'Cellphone';

// add new properties
product.image = 'image.jpg';

// delete properties
// delete product.available; another way
const { available, price, ...product2 } = product; // delete available & price

console.log(product);
