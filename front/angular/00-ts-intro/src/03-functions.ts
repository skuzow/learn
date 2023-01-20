
function sum(a: number, b: number): number {
    return a + b;
}

const result = sum(10, 20);
console.log(result);


const sumArrow = (a: number, b: number): number => a + b;

const resultArrow = sumArrow(10, 20);
console.log(resultArrow);


function multiply(number: number, anotherNumber?: number, base: number = 2): number {
    return number * base;
}

const resultMultiply = multiply(5, 2);
console.log(resultMultiply);


interface CharacterLOR {
    name: string;
    pv: number;
    showHp: () => void;
}

function healing(character: CharacterLOR, heal: number): void {
    character.pv += heal;
    console.log(character);
}

const newCharacter: CharacterLOR = {
    name: 'strider',
    pv: 50,
    showHp() {
        console.log('health points:', this.pv);
    }
}

healing(newCharacter, 20);
newCharacter.showHp();
