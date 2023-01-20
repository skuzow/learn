
let abilities: string[] = ['bash', 'counter', 'healing'];

interface Character {
    name: string;
    hp: number;
    abilities: string[];
    // optional property
    birthVillage?: string;
}

const character: Character = {
    name: 'strider',
    hp: 100,
    abilities: abilities,
}

character.birthVillage = 'kakariko';

console.table(character);
