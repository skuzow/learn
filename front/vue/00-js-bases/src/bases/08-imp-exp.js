// import { owners } from './data/heroes';

import superHeroes from '../data/heroes';

export const getHeroById = (id) => superHeroes.find((hero) => hero.id === id);

export const getHeroesByOwner = (owner) => superHeroes.filter((hero) => hero.owner === owner);

// import { getHeroById, getHeroesByOwner } from './bases/08-imp-exp';
// console.log(getHeroById(1));
// console.log(getHeroesByOwner('DC'));
