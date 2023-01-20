
function whatTypeAmI<T>(argument: T) {
    return argument;
}

let imString = whatTypeAmI('Hola Mundo');
let imNumber = whatTypeAmI(100);
let imArray = whatTypeAmI([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

let imExplicit = whatTypeAmI<number>(100);
