
/*
class Heroe {
    // default = public
    alterEgo: string;
    age: number;
    realName: string;
    constructor(alterEgo: string, age: number, realName: string) {
        this.alterEgo = alterEgo;
        this.age = age;
        this.realName = realName;
    }
    printName(): string {
        return this.alterEgo + ' ' + this.realName;
    }
}
*/

class NormalPerson {
    constructor(
        public name: string,
        public adress: string
    ) {}
}

class Heroe extends NormalPerson {
    // same as above
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'New York, USA');
    }
}

const ironman = new Heroe('Ironman', 40, 'Tony Stark');

console.log(ironman);
