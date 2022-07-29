
interface SuperHero {
    name: string;
    age: number;
    adress: Adress;
    showAdress: () => string;
}

interface Adress {
    street: string;
    country: string;
    city: string;
}

const superHero: SuperHero = {
    name: 'Batman',
    age: 30,
    adress: {
        street: 'Main St',
        country: 'USA',
        city: 'Gotham'
    },
    showAdress() {
        return this.name + ', ' + this.adress.city + ', ' + this.adress.country;
    }
}

const adress = superHero.showAdress();
console.log(adress);
