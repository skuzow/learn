
interface Passenger {
    name: string,
    sons?: string[]
}

const passenger1: Passenger = {
    name: 'Fernando'
}

const passenger2: Passenger = {
    name: 'Melissa',
    sons: ['Natalia', 'Gabriel']
}

function printSons(passenger: Passenger): void {
    const sonsNumber = passenger.sons?.length || 0;
    console.log(sonsNumber);
}

printSons(passenger1);
printSons(passenger2);
