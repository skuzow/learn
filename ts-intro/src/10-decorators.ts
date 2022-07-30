
function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
    };
}

@classDecorator
class mySuperClass {
    public myProperty: string = 'ABC123';
    print() {
        console.log('Hello World');
    }
}

console.log(mySuperClass);

const myClass = new mySuperClass();

console.log(myClass);
