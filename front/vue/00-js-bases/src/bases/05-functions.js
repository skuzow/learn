const greet = (name = 'Peter') => `Hello ${name}!`;

const greetName = 'Tony';

console.log(greet());
console.log(greet(greetName));

const getUser = () => ({
    uid: 'ABC123',
    username: 'Tony001'
});

console.log(getUser());

const heroes = [
  {
    id: 1,
    name: 'Batman'
  },
  {
    id: 2,
    name: 'Superman'
  }
];

const exist = heroes.some((hero) => hero.id === 1);
const heroe = heroes.find((hero) => hero.id === 2);

console.log(exist);
console.log(heroe.name);

const { name } = heroes.find((hero) => hero.id === 1);

console.log(name);
