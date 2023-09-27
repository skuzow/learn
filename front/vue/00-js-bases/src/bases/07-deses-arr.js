const characters = ['Goku', 'Vegeta', 'Trunks'];

const [ , , t, goten = 'No value' ] = characters;

console.log(t);
console.log(goten);

const returnArray = () => (['ABC', 123]);

const [ letters, numbers ] = returnArray();

console.log(letters, numbers);

const returnArray2 = ([letters, numbers]) => {
  return [letters, numbers];
};

const [ letters2, numbers2 ] = returnArray2(['XYZ', 987]);

console.log(letters2, numbers2);
