const person = {
  name: 'Tony',
  surname: 'Stark',
  age: 45,
  address: {
    city: 'New York',
    zip: 123456,
    lat: 14.3232,
    lng: 34.9233321,
  },
};

const person2 = {...person};

person2.name = 'Peter';

console.log(person);
console.log(person2);
