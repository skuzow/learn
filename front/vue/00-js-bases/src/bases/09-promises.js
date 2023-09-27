import { getHeroById } from './bases/08-imp-exp';

console.log('Start');

new Promise((resolve, reject) => {

  console.log('cuerpo de la promesa');
  resolve('Promesa resuelta');
  reject('Promesa rechazada');

})
.then(console.log)
.catch(console.log);

console.log('End');

const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject)  => {
    setTimeout(() => {
      const hero = getHeroById(id);
      if (hero) resolve(hero);
      reject('Hero not found');
    }, 1000);
  });
}

getHeroByIdAsync(1)
  .then(h => {
    console.log(`Hero is ${h.name}`);
  })
  .catch(console.log);

getHeroByIdAsync(10).then(console.log).catch(console.log);
